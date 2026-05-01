import type { LucideIcon } from "lucide-react"
import { Activity, BrainCircuit, Cpu, Gauge, Server, Timer } from "lucide-react"

export type MetricCard = {
  title: string
  value: string
  note: string
  icon: LucideIcon
  tone: "cyan" | "emerald" | "violet" | "amber"
}

export type EmotionScore = {
  label: string
  value: number
  tone: string
}

export type TimelinePoint = {
  label: string
  happy: number
  neutral: number
  surprise: number
}

export const appTitle = "AffectSense"
export const subtitle = "Local webcam emotion recognition with React, FastAPI, OpenCV, YuNet, and MobileFaceNet ONNX inference."

export const metricCards: MetricCard[] = [
  { title: "Signal", value: "Moderate", note: "Smoothed confidence", icon: Gauge, tone: "cyan" },
  { title: "Frames", value: "1,284", note: "Analyzed locally", icon: Activity, tone: "emerald" },
  { title: "Latency", value: "86 ms", note: "Backend roundtrip", icon: Timer, tone: "violet" },
  { title: "Runtime", value: "Ready", note: "FastAPI + OpenCV", icon: Server, tone: "amber" },
]

export const emotionScores: EmotionScore[] = [
  { label: "Happy", value: 64, tone: "#22d3ee" },
  { label: "Neutral", value: 18, tone: "#34d399" },
  { label: "Surprise", value: 8, tone: "#a78bfa" },
  { label: "Sad", value: 5, tone: "#60a5fa" },
  { label: "Fear", value: 3, tone: "#fbbf24" },
  { label: "Anger", value: 1, tone: "#fb7185" },
  { label: "Disgust", value: 1, tone: "#94a3b8" },
]

export const timeline: TimelinePoint[] = [
  { label: "00:05", happy: 28, neutral: 54, surprise: 12 },
  { label: "00:10", happy: 36, neutral: 42, surprise: 10 },
  { label: "00:15", happy: 52, neutral: 27, surprise: 8 },
  { label: "00:20", happy: 61, neutral: 21, surprise: 7 },
  { label: "00:25", happy: 58, neutral: 24, surprise: 11 },
  { label: "00:30", happy: 64, neutral: 18, surprise: 8 },
]

export const pipelineSteps = [
  { title: "Webcam frame", text: "The browser captures a frame and sends a compact JPEG payload to the local API." },
  { title: "Face detection", text: "OpenCV YuNet finds the main face and returns landmarks for alignment." },
  { title: "Expression model", text: "MobileFaceNet ONNX scores seven FER2013-style emotion classes." },
  { title: "Stable UI", text: "The frontend smooths recent predictions and shows uncertainty when confidence is low." },
]

export const techStack = [
  { title: "Frontend", text: "React, Vite, TypeScript, Tailwind CSS, motion, and lucide-react.", icon: BrainCircuit },
  { title: "Backend", text: "FastAPI endpoint with OpenCV DNN inference and NumPy preprocessing.", icon: Server },
  { title: "Model runtime", text: "YuNet face detection plus MobileFaceNet facial expression recognition.", icon: Cpu },
]
