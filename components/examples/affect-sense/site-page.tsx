"use client"

import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react"
import {
  Activity,
  ArrowLeft,
  BrainCircuit,
  CameraOff,
  Cpu,
  Gauge,
  Pause,
  Play,
  RotateCcw,
  Server,
  Sparkles,
  Timer,
} from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { localizedPath } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const FER2013_EMOTIONS = ["Anger", "Disgust", "Fear", "Happy", "Neutral", "Sad", "Surprise"] as const
const SMOOTHING_WINDOW = 7
const UNCERTAIN_THRESHOLD = 0.48

type Emotion = (typeof FER2013_EMOTIONS)[number]
type DisplayEmotion = Emotion | "Uncertain"

type RankedEmotion = {
  emotion: Emotion
  score: number
}

type DetectionResult = {
  dominantEmotion: DisplayEmotion
  confidence: number
  scores: Record<Emotion, number>
  timestamp: number
  topEmotions?: RankedEmotion[]
  rawDominantEmotion?: Emotion
}

type BackendPrediction = DetectionResult & {
  faceRect?: {
    x: number
    y: number
    width: number
    height: number
  }
}

const noFaceResult: DetectionResult = {
  dominantEmotion: "Uncertain",
  confidence: 0,
  scores: {
    Anger: 0,
    Disgust: 0,
    Fear: 0,
    Happy: 0,
    Neutral: 0,
    Sad: 0,
    Surprise: 0,
  },
  timestamp: Date.now(),
}

const previewResult: DetectionResult = {
  dominantEmotion: "Happy",
  confidence: 0.78,
  scores: {
    Anger: 0.03,
    Disgust: 0.01,
    Fear: 0.03,
    Happy: 0.78,
    Neutral: 0.05,
    Sad: 0.04,
    Surprise: 0.06,
  },
  timestamp: Date.now(),
  rawDominantEmotion: "Happy",
  topEmotions: [
    { emotion: "Happy", score: 0.78 },
    { emotion: "Surprise", score: 0.06 },
  ],
}

const previewHistory: DetectionResult[] = [
  ["Neutral", 0.38],
  ["Happy", 0.54],
  ["Happy", 0.68],
  ["Surprise", 0.47],
  ["Happy", 0.82],
  ["Neutral", 0.42],
  ["Happy", 0.75],
  ["Sad", 0.31],
  ["Happy", 0.71],
  ["Happy", 0.86],
  ["Neutral", 0.44],
  ["Happy", 0.79],
].map(([dominantEmotion, confidence], index) => ({
  dominantEmotion: dominantEmotion as DisplayEmotion,
  confidence: confidence as number,
  scores: {
    ...previewResult.scores,
    [dominantEmotion as Emotion]: confidence as number,
  },
  timestamp: Date.now() - (12 - index) * 1000,
  rawDominantEmotion: dominantEmotion as Emotion,
}))

function drawOverlay(
  canvas: HTMLCanvasElement,
  video: HTMLVideoElement,
  box?: BackendPrediction["faceRect"],
) {
  const context = canvas.getContext("2d")
  if (!context || !video.videoWidth || !video.videoHeight) return

  canvas.width = video.videoWidth
  canvas.height = video.videoHeight
  context.clearRect(0, 0, canvas.width, canvas.height)

  if (!box) return

  context.strokeStyle = "#22d3ee"
  context.lineWidth = 3
  context.setLineDash([8, 6])
  context.shadowBlur = 14
  context.shadowColor = "rgba(34, 211, 238, 0.5)"
  context.strokeRect(box.x, box.y, box.width, box.height)
  context.shadowBlur = 0
  context.setLineDash([])
}

function captureFrame(video: HTMLVideoElement, canvas: HTMLCanvasElement) {
  const context = canvas.getContext("2d")
  if (!context || !video.videoWidth || !video.videoHeight) return null

  canvas.width = video.videoWidth
  canvas.height = video.videoHeight
  context.drawImage(video, 0, 0, canvas.width, canvas.height)
  return canvas.toDataURL("image/jpeg", 0.82)
}

function useWebcamEmotionDetection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const overlayCanvasRef = useRef<HTMLCanvasElement>(null)
  const frameCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number | null>(null)
  const lastInferenceRef = useRef(0)
  const runningInferenceRef = useRef(false)
  const recentPredictionsRef = useRef<BackendPrediction[]>([])
  const noFaceActiveRef = useRef(false)

  const [isCameraActive, setIsCameraActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [detectionResult, setDetectionResult] = useState<DetectionResult>(previewResult)
  const [history, setHistory] = useState<DetectionResult[]>(previewHistory)
  const [framesAnalyzed, setFramesAnalyzed] = useState(0)
  const [latencyMs, setLatencyMs] = useState<number | null>(null)

  const stabilizePrediction = useCallback((prediction: BackendPrediction): BackendPrediction => {
    const recent = [...recentPredictionsRef.current.slice(-(SMOOTHING_WINDOW - 1)), prediction]
    recentPredictionsRef.current = recent

    const scores = Object.fromEntries(
      FER2013_EMOTIONS.map((emotion) => [
        emotion,
        recent.reduce((sum, item) => sum + item.scores[emotion], 0) / recent.length,
      ]),
    ) as Record<Emotion, number>

    const topEmotions = FER2013_EMOTIONS.map((emotion) => ({
      emotion,
      score: scores[emotion],
    })).sort((left, right) => right.score - left.score)

    const rawDominantEmotion = topEmotions[0].emotion
    const confidence = topEmotions[0].score

    return {
      ...prediction,
      confidence,
      scores,
      timestamp: Date.now(),
      topEmotions: topEmotions.slice(0, 2),
      rawDominantEmotion,
      dominantEmotion: confidence < UNCERTAIN_THRESHOLD ? "Uncertain" : rawDominantEmotion,
    }
  }, [])

  const stopCamera = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }

    const stream = videoRef.current?.srcObject as MediaStream | null
    stream?.getTracks().forEach((track) => track.stop())

    if (videoRef.current) {
      videoRef.current.srcObject = null
    }

    setIsCameraActive(false)
    setIsLoading(false)
  }, [])

  const processFrame = useCallback(async () => {
    const video = videoRef.current
    const overlay = overlayCanvasRef.current

    if (!video || !overlay || video.readyState < 2) return
    if (runningInferenceRef.current || performance.now() - lastInferenceRef.current < 250) return

    if (!frameCanvasRef.current) {
      frameCanvasRef.current = document.createElement("canvas")
    }

    const image = captureFrame(video, frameCanvasRef.current)
    if (!image) return

    runningInferenceRef.current = true
    lastInferenceRef.current = performance.now()

    try {
      const start = performance.now()
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image }),
      })

      if (response.status === 422) {
        if (!noFaceActiveRef.current) {
          noFaceActiveRef.current = true
          setDetectionResult({ ...noFaceResult, timestamp: Date.now() })
        }
        setError(null)
        drawOverlay(overlay, video)
        return
      }

      if (!response.ok) {
        const detail = await response.text()
        throw new Error(detail || `OpenCV backend returned ${response.status}`)
      }

      const prediction = stabilizePrediction((await response.json()) as BackendPrediction)
      noFaceActiveRef.current = false
      setLatencyMs(performance.now() - start)
      setDetectionResult(prediction)
      setFramesAnalyzed((value) => value + 1)
      setHistory((items) => [...items.slice(-80), prediction])
      setError(null)
      drawOverlay(overlay, video, prediction.faceRect)
    } catch (predictError) {
      console.error(predictError)
      setError("OpenCV backend inference failed. Is `npm run api:opencv` running in the Emotion Recognition project?")
      drawOverlay(overlay, video)
    } finally {
      runningInferenceRef.current = false
    }
  }, [stabilizePrediction])

  const loop = useCallback(() => {
    void processFrame()
    animationRef.current = requestAnimationFrame(loop)
  }, [processFrame])

  const startCamera = useCallback(async () => {
    setError(null)
    setIsLoading(true)

    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error("Camera API is not available in this browser.")
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      }

      recentPredictionsRef.current = []
      noFaceActiveRef.current = false
      setIsCameraActive(true)
      setIsLoading(false)
      setFramesAnalyzed(0)
      setLatencyMs(null)
      setHistory([])
      animationRef.current = requestAnimationFrame(loop)
    } catch (cameraError) {
      console.error(cameraError)
      setIsLoading(false)
      setError(cameraError instanceof Error ? cameraError.message : "Camera access failed.")
    }
  }, [loop])

  const toggleCamera = useCallback(() => {
    if (isCameraActive) {
      stopCamera()
      return
    }

    void startCamera()
  }, [isCameraActive, startCamera, stopCamera])

  const resetSession = useCallback(() => {
    recentPredictionsRef.current = []
    noFaceActiveRef.current = false
    setFramesAnalyzed(0)
    setLatencyMs(null)
    setHistory([])
    setDetectionResult(previewResult)
    if (overlayCanvasRef.current) {
      const context = overlayCanvasRef.current.getContext("2d")
      context?.clearRect(0, 0, overlayCanvasRef.current.width, overlayCanvasRef.current.height)
    }
  }, [])

  useEffect(() => stopCamera, [stopCamera])

  return {
    videoRef,
    overlayCanvasRef,
    isCameraActive,
    isLoading,
    error,
    detectionResult,
    history,
    framesAnalyzed,
    latencyMs,
    toggleCamera,
    resetSession,
  }
}

function confidenceLabel(confidence: number) {
  if (confidence >= 0.7) return "High confidence"
  if (confidence >= 0.48) return "Moderate confidence"
  return "Uncertain signal"
}

const emotionColors: Record<Emotion, string> = {
  Anger: "from-red-500 to-red-300",
  Disgust: "from-lime-500 to-lime-300",
  Fear: "from-violet-500 to-violet-300",
  Happy: "from-amber-400 to-yellow-200",
  Neutral: "from-slate-500 to-slate-300",
  Sad: "from-sky-500 to-sky-300",
  Surprise: "from-cyan-400 to-cyan-200",
}

function EmotionDistribution({ detectionResult }: { detectionResult: DetectionResult | null }) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5 shadow-xl backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
          Emotion breakdown
        </h3>
        <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
          FER2013
        </span>
      </div>

      <div className="mt-5 space-y-4">
        {FER2013_EMOTIONS.map((emotion) => {
          const score = detectionResult?.scores[emotion] || 0
          const isDominant =
            emotion === detectionResult?.rawDominantEmotion ||
            emotion === detectionResult?.dominantEmotion

          return (
            <div key={emotion} className="space-y-1.5">
              <div className="flex items-center justify-between gap-3 text-xs font-semibold">
                <span className={isDominant ? "text-cyan-200" : "text-slate-400"}>{emotion}</span>
                <span className={isDominant ? "font-mono text-cyan-200" : "font-mono text-slate-600"}>
                  {Math.round(score * 100)}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${score * 100}%` }}
                  transition={{ type: "spring", damping: 22, stiffness: 120 }}
                  className={cn(
                    "h-full rounded-full bg-gradient-to-r",
                    isDominant
                      ? "from-cyan-500 to-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.35)]"
                      : emotionColors[emotion],
                  )}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const emotionStyles: Record<DisplayEmotion, string> = {
  Anger: "from-red-500 to-red-300 shadow-red-500/20",
  Disgust: "from-lime-500 to-lime-300 shadow-lime-500/20",
  Fear: "from-violet-500 to-violet-300 shadow-violet-500/20",
  Happy: "from-amber-400 to-yellow-200 shadow-amber-400/20",
  Neutral: "from-slate-500 to-slate-300 shadow-slate-400/10",
  Sad: "from-sky-500 to-sky-300 shadow-sky-500/20",
  Surprise: "from-cyan-400 to-cyan-200 shadow-cyan-400/20",
  Uncertain: "from-slate-700 to-slate-500 shadow-slate-500/10",
}

const emotionDots: Record<DisplayEmotion, string> = {
  Anger: "bg-red-400",
  Disgust: "bg-lime-400",
  Fear: "bg-violet-400",
  Happy: "bg-amber-300",
  Neutral: "bg-slate-400",
  Sad: "bg-sky-400",
  Surprise: "bg-cyan-300",
  Uncertain: "bg-slate-600",
}

function TimelineChart({ history }: { history: DetectionResult[] }) {
  const latest = history.at(-1)
  const currentEmotion = latest?.dominantEmotion ?? "Uncertain"
  const currentConfidence = latest ? Math.round(latest.confidence * 100) : 0
  const visibleHistory = history.slice(-64)
  const points = visibleHistory
    .map((item, index) => {
      const x = visibleHistory.length <= 1 ? 0 : (index / (visibleHistory.length - 1)) * 100
      const y = 100 - Math.max(8, item.confidence * 92)
      return `${x},${y}`
    })
    .join(" ")

  return (
    <div className="flex min-h-[240px] flex-col rounded-lg border border-white/10 bg-slate-950/70 p-5 shadow-xl backdrop-blur">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
            Real-time mood timeline
          </h3>
          <p className="mt-1 text-xs text-slate-600">
            {visibleHistory.length} visible samples from {history.length} total
          </p>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
            Confidence
          </span>
          <span className="flex items-center gap-1.5">
            <span className={cn("h-1.5 w-1.5 rounded-full", emotionDots[currentEmotion])} />
            {currentEmotion}
          </span>
        </div>
      </div>

      <div className="relative h-36 overflow-hidden rounded-md border border-white/5 bg-black/35 px-3 pb-4 pt-5">
        <div className="absolute inset-x-3 bottom-4 top-5">
          <div className="absolute inset-x-0 top-0 border-t border-white/10" />
          <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-white/10" />
          <div className="absolute inset-x-0 bottom-0 border-t border-white/10" />
          <span className="absolute -top-2 right-0 bg-slate-950/80 pl-2 text-[9px] font-mono text-slate-600">
            100
          </span>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 bg-slate-950/80 pl-2 text-[9px] font-mono text-slate-600">
            50
          </span>
        </div>

        {visibleHistory.length > 0 ? (
          <>
            <div className="absolute inset-x-3 bottom-4 top-5 flex items-end gap-[3px]">
              {visibleHistory.map((item, index) => (
                <motion.div
                  key={`${item.timestamp}-${index}`}
                  initial={false}
                  animate={{
                    height: `${Math.max(14, item.confidence * 100)}%`,
                    opacity: index === visibleHistory.length - 1 ? 1 : 0.72,
                  }}
                  title={`${item.dominantEmotion}: ${Math.round(item.confidence * 100)}%`}
                  className={cn(
                    "min-w-[4px] flex-1 rounded-t-sm bg-gradient-to-t shadow-lg transition-opacity hover:opacity-100",
                    emotionStyles[item.dominantEmotion],
                  )}
                />
              ))}
            </div>

            <svg
              className="pointer-events-none absolute inset-x-3 bottom-4 top-5 h-[calc(100%-36px)] w-[calc(100%-24px)] overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <polyline
                points={points}
                fill="none"
                stroke="rgba(103,232,249,0.95)"
                strokeWidth="1.8"
                vectorEffect="non-scaling-stroke"
              />
              <polyline
                points={points}
                fill="none"
                stroke="rgba(103,232,249,0.25)"
                strokeWidth="6"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700">
            <div className="h-px w-full bg-white/5" />
            <span>Awaiting stream synchronization</span>
          </div>
        )}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-md border border-white/5 bg-white/[0.03] px-3 py-2">
          <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-slate-600">
            Current
          </span>
          <span className="mt-1 block truncate text-sm font-bold text-slate-200">{currentEmotion}</span>
        </div>
        <div className="rounded-md border border-white/5 bg-white/[0.03] px-3 py-2">
          <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-slate-600">
            Confidence
          </span>
          <span className="mt-1 block text-sm font-bold text-cyan-200">{currentConfidence}%</span>
        </div>
        <div className="rounded-md border border-white/5 bg-white/[0.03] px-3 py-2">
          <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-slate-600">
            Window
          </span>
          <span className="mt-1 block text-sm font-bold text-slate-200">{visibleHistory.length}</span>
        </div>
      </div>
    </div>
  )
}

export function AffectSensePage({ locale = "en" }: { locale?: Locale }) {
  const {
    videoRef,
    overlayCanvasRef,
    isCameraActive,
    isLoading,
    error,
    detectionResult,
    history,
    framesAnalyzed,
    latencyMs,
    toggleCamera,
    resetSession,
  } = useWebcamEmotionDetection()

  const confidencePercent = Math.round(detectionResult.confidence * 100)
  const secondEmotion = detectionResult.topEmotions?.[1]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#02040a] text-slate-100">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.17),transparent_34%),linear-gradient(135deg,rgba(16,185,129,0.08),transparent_35%),linear-gradient(225deg,rgba(147,51,234,0.10),transparent_38%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
      </div>

      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#02040a]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href={localizedPath(locale, "/examples")} className="hidden items-center gap-2 text-sm text-slate-500 transition hover:text-slate-200 md:flex">
            <ArrowLeft className="h-4 w-4" />
            {locale === "de" ? "Zurueck" : locale === "it" ? "Indietro" : "Back"}
          </Link>

          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.18)]">
              <BrainCircuit className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h1 className="truncate text-lg font-bold tracking-tight text-white">AffectSense</h1>
              <p className="truncate text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                OpenCV emotion telemetry
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={isCameraActive ? "live" : error ? "attention" : "ready"}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className={`hidden items-center gap-2 rounded-md border px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] sm:flex ${
                  error
                    ? "border-red-400/25 bg-red-500/10 text-red-200"
                    : isCameraActive
                      ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-200"
                      : "border-cyan-400/25 bg-cyan-400/10 text-cyan-200"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {error ? "Backend check" : isCameraActive ? "System live" : "Runtime ready"}
              </motion.div>
            </AnimatePresence>

            <button
              onClick={resetSession}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 text-xs font-bold text-slate-300 transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              <RotateCcw className="h-4 w-4" />
              <span className="hidden sm:inline">Reset</span>
            </button>
            <button
              onClick={toggleCamera}
              disabled={isLoading}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-white px-4 text-xs font-black uppercase tracking-[0.14em] text-black shadow-[0_16px_40px_rgba(34,211,238,0.16)] transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isCameraActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isCameraActive ? "Stop" : isLoading ? "Loading" : "Start"}
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 p-4 sm:p-6 lg:grid-cols-12 lg:p-8">
        <section className="space-y-6 lg:col-span-8">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-950/70 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-slate-950">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className={`absolute inset-0 h-full w-full scale-x-[-1] object-cover transition-opacity duration-300 ${
                  isCameraActive ? "opacity-100" : "opacity-0"
                }`}
              />
              <canvas
                ref={overlayCanvasRef}
                className={`pointer-events-none absolute inset-0 h-full w-full scale-x-[-1] transition-opacity duration-300 ${
                  isCameraActive ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
                <span className="rounded-md border border-cyan-300/30 bg-black/50 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-200 backdrop-blur-md">720P capture</span>
                <span className="rounded-md border border-white/10 bg-black/50 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white/70 backdrop-blur-md">OpenCV full pipeline</span>
              </div>

              {!isCameraActive && (
                <div className="relative z-10 flex w-full max-w-lg flex-col items-center px-6 py-16 text-center">
                  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_58%)]" />
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] shadow-2xl">
                    <CameraOff className="h-10 w-10 text-slate-500" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">
                    {isLoading ? "Preparing runtime" : "Stream offline"}
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                    {error ??
                      "Start the camera to process webcam frames through YuNet face detection, landmark alignment, and MobileFaceNet expression inference."}
                  </p>
                  <button
                    onClick={toggleCamera}
                    disabled={isLoading}
                    className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-7 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Play className="h-4 w-4" />
                    {isLoading ? "Loading" : "Connect sensor"}
                  </button>
                </div>
              )}

              {isCameraActive && error && (
                <div className="absolute bottom-4 left-4 right-4 z-20 rounded-md border border-red-400/25 bg-red-500/10 px-4 py-3 text-xs font-medium text-red-100 backdrop-blur">
                  {error}
                </div>
              )}

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-4 top-4 z-10 rounded-lg border border-white/10 bg-black/45 p-4 text-right shadow-2xl backdrop-blur-md"
              >
                <span className="block text-3xl font-black uppercase leading-none tracking-tight text-cyan-300">
                  {detectionResult.dominantEmotion}
                </span>
                <span className="mt-2 block font-mono text-xs font-semibold text-cyan-200/80">
                  {confidencePercent}% confidence
                </span>
                {secondEmotion && (
                  <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                    2nd {secondEmotion.emotion} {Math.round(secondEmotion.score * 100)}%
                  </span>
                )}
              </motion.div>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-3">
              <div className="bg-black/45 px-5 py-4 backdrop-blur">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  <Gauge className="h-4 w-4" />
                  Signal
                </div>
                <div className="mt-2 text-lg font-bold text-white">
                  {confidenceLabel(detectionResult.confidence)}
                </div>
              </div>
              <div className="bg-black/45 px-5 py-4 backdrop-blur">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  <Activity className="h-4 w-4" />
                  Frames
                </div>
                <div className="mt-2 text-lg font-bold text-white">{framesAnalyzed.toLocaleString()}</div>
              </div>
              <div className="bg-black/45 px-5 py-4 backdrop-blur">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  <Timer className="h-4 w-4" />
                  Latency
                </div>
                <div className="mt-2 text-lg font-bold text-white">
                  {latencyMs === null ? "--" : latencyMs.toFixed(0)}
                  <span className="ml-1 text-xs text-slate-500">ms</span>
                </div>
              </div>
            </div>
          </div>

          <TimelineChart history={history} />
        </section>

        <aside className="space-y-6 lg:col-span-4">
          <EmotionDistribution detectionResult={detectionResult} />

          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5 shadow-xl backdrop-blur">
            <div className="mb-5 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              <h3 className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                Inference summary
              </h3>
            </div>
            <p className="border-l-2 border-cyan-300/30 py-1 pl-4 text-sm leading-6 text-slate-300">
              Webcam frames are analyzed by a local OpenCV backend using YuNet face detection,
              landmark alignment, and a FER2013 expression model.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-md border border-cyan-300/20 bg-cyan-300/5 p-3">
                <Cpu className="mb-3 h-4 w-4 text-cyan-300" />
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                  Decision
                </span>
                <span className="mt-1 block text-sm font-bold text-cyan-200">Smoothed top-2</span>
              </div>
              <div className="rounded-md border border-emerald-300/20 bg-emerald-300/5 p-3">
                <Server className="mb-3 h-4 w-4 text-emerald-300" />
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                  Backend
                </span>
                <span className="mt-1 block text-sm font-bold text-emerald-200">
                  {error ? "Check API" : "Ready"}
                </span>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}
