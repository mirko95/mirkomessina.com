"use client"

"use client"

import Link from "next/link"
import { forwardRef, useEffect, useRef, useState, type ReactNode } from "react"
import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  ExternalLink,
  Globe2,
  Layers3,
  MessagesSquare,
  Workflow,
} from "lucide-react"
import { getExampleSites } from "@/lib/examples"
import { getExampleIndexCopy } from "@/lib/site-copy"
import { localizedPath, type Locale } from "@/lib/i18n"

type ExampleSiteItem = ReturnType<typeof getExampleSites>[number]
type ExampleCopy = ReturnType<typeof getExampleIndexCopy>

function Frame({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`h-full overflow-hidden rounded-[1.6rem] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.28)] ${className}`}
    >
      {children}
    </div>
  )
}

function AureliaPreview() {
  return (
    <Frame className="bg-[#f8f5f0] text-[#121212]">
      <div className="p-4">
        <div className="relative overflow-hidden rounded-[1.4rem] bg-[#121212]">
          <img src="/images/aurelia/hero-interior.jpg" alt="" className="h-44 w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
            <p className="text-[0.55rem] font-semibold uppercase tracking-[0.32em] text-[#c5a67c]">
              Established 2012
            </p>
            <p className="mt-3 font-serif text-3xl leading-tight text-white">
              Calm, refined spaces
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-b border-[#c5a67c]/25 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a67c]">
              Interior studio
            </p>
            <p className="mt-1 text-sm text-[#121212]/55">Luxury portfolio website</p>
          </div>
          <div className="border border-[#c5a67c]/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#c5a67c]">
            Inquire
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            ["/images/aurelia/belvedere-villa.jpg", "Como"],
            ["/images/aurelia/hexagone-suite.jpg", "Paris"],
            ["/images/aurelia/urban-sanctuary.jpg", "London"],
          ].map(([image, label]) => (
            <div key={label} className="space-y-2">
              <img src={image} alt="" className="aspect-[4/5] w-full object-cover" />
              <p className="text-[0.6rem] uppercase tracking-[0.18em] text-[#c5a67c]">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="bg-white p-3">
            <p className="font-serif text-xl">Design Excellence</p>
            <p className="mt-1 text-xs leading-5 text-[#121212]/50">Residential, hotel, styling, and furniture selection.</p>
          </div>
          <div className="bg-[#121212] p-3 text-white">
            <p className="font-serif text-xl">Aurelia Journey</p>
            <p className="mt-1 text-xs leading-5 text-white/50">Consultation, concept, design, delivery.</p>
          </div>
        </div>
      </div>
    </Frame>
  )
}

function ModelWatchPreview() {
  return (
    <Frame className="bg-[#050816] text-white">
      <div className="grid h-full grid-cols-[0.32fr_0.68fr] gap-4 p-4">
        <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-3">
          <div className="flex items-center gap-2 border-b border-white/10 pb-3">
            <div className="h-2.5 w-2.5 rounded-full bg-violet-300" />
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Control room</p>
          </div>
          <div className="mt-3 space-y-2">
            {["Overview", "Monitoring", "Pipeline", "Governance"].map((item, index) => (
              <div
                key={item}
                className={`rounded-xl px-3 py-2 text-sm ${
                  index === 1
                    ? "bg-violet-300 text-slate-950"
                    : "bg-white/5 text-slate-300"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">Model health</p>
              <span className="rounded-full bg-violet-300/15 px-3 py-1 text-xs text-violet-200">
                Release candidate
              </span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                ["AUC", "0.94"],
                ["Drift", "Low"],
                ["Latency", "148 ms"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-black/30 p-3">
                  <p className="text-xs text-slate-400">{label}</p>
                  <p className="mt-2 text-xl font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-400">Drift</p>
              <div className="mt-4 h-24 rounded-2xl bg-gradient-to-br from-violet-400/20 to-transparent p-3">
                <div className="flex h-full items-end gap-2">
                  {[25, 32, 28, 46, 34, 40].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-full bg-violet-300"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-400">Alert stream</p>
              <div className="mt-4 space-y-2">
                {["Data lag", "Confidence drop", "Baseline check"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  )
}

function ReplyPilotPreview() {
  return (
    <Frame className="bg-white text-slate-900">
      <div className="p-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
              Support workspace
            </p>
            <p className="mt-1 text-sm text-slate-500">Human review before send</p>
          </div>
          <div className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
            Guardrails on
          </div>
        </div>
        <div className="mt-4 grid gap-3">
          <div className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Customer message</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              I was charged after canceling. Can you check this?
            </p>
          </div>
          <div className="rounded-[1.2rem] border border-cyan-200 bg-cyan-50 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-700">Draft reply</p>
            <p className="mt-2 text-sm leading-7 text-slate-800">
              Thanks for flagging this. I checked the cancellation date and invoice
              status. I can confirm the final cycle charge or escalate it to billing for a
              manual review.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Tone preset", "Approved sources", "Review step"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-3 text-xs font-medium text-slate-600"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  )
}

function FlowForgePreview() {
  return (
    <Frame className="bg-[#05150f] text-white">
      <div className="p-4">
        <div className="flex items-center justify-between border-b border-emerald-400/10 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Automation canvas
            </p>
            <p className="mt-1 text-sm text-emerald-100/70">Flow builder with approvals</p>
          </div>
          <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            12 runs today
          </div>
        </div>
        <div className="mt-4 rounded-[1.4rem] border border-emerald-400/10 bg-black/30 p-4">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Trigger", "Form submit"],
              ["Review", "Approve lead"],
              ["Sync", "Update CRM"],
            ].map(([label, detail], index) => (
              <div
                key={label}
                className="rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-3"
              >
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  <span className="text-xs uppercase tracking-[0.2em] text-emerald-100/70">
                    {label}
                  </span>
                </div>
                <p className="mt-3 text-sm text-white">{detail}</p>
                <p className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-emerald-100/40">
                  Step 0{index + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {["Lead flow", "Invoice flow", "Reporting flow", "Approval log"].map((item, index) => (
            <div
              key={item}
              className={`rounded-2xl border border-emerald-400/10 p-3 ${
                index % 2 === 0 ? "bg-emerald-400/8" : "bg-black/25"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-100/60">
                {item}
              </p>
              <p className="mt-2 text-sm text-slate-200">
                {index === 0
                  ? "Website form -> enrich lead -> create CRM record"
                  : index === 1
                    ? "Unpaid invoice -> reminder -> follow-up"
                    : index === 2
                      ? "Weekly trigger -> summary -> email"
                      : "Logged, reviewed, and ready"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}

function AetherIqPreview() {
  return (
    <Frame className="border-cyan-400/25 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),transparent_34%),linear-gradient(180deg,rgba(15,23,42,0.98),rgba(2,6,23,0.94))] text-white shadow-[0_28px_90px_rgba(2,6,23,0.45)]">
      <div className="p-4">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-100 shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_16px_30px_rgba(34,211,238,0.12)]">
              <BarChart3 className="h-5 w-5" />
            </div>
            <div className="h-2 w-14 rounded-full bg-white/8" />
          </div>
          <div className="flex items-center gap-2 text-white/35">
            <div className="h-2 w-2 rounded-full bg-white/35" />
            <div className="h-2 w-2 rounded-full bg-white/20" />
            <div className="h-2 w-2 rounded-full bg-white/12" />
          </div>
        </div>

        <div className="relative mt-4 overflow-hidden rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_70%_15%,_rgba(168,85,247,0.14),transparent_28%)]" />
          <div className="relative grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.85),rgba(15,23,42,0.55))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="h-2 w-10 rounded-full bg-cyan-300/70" />
              <div className="mt-5 flex items-end gap-2">
                <div className="h-14 flex-1 rounded-xl bg-[linear-gradient(180deg,rgba(56,189,248,0.28),rgba(56,189,248,0.08))]" />
                <div className="h-[4.5rem] flex-1 rounded-xl bg-[linear-gradient(180deg,rgba(56,189,248,0.4),rgba(56,189,248,0.12))]" />
                <div className="h-10 flex-1 rounded-xl bg-[linear-gradient(180deg,rgba(56,189,248,0.18),rgba(56,189,248,0.06))]" />
              </div>
            </div>
            <div className="rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(30,41,59,0.88),rgba(30,41,59,0.56))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="h-2 w-12 rounded-full bg-violet-300/70" />
              <div className="mt-5 flex items-end gap-2">
                <div className="h-10 flex-1 rounded-xl bg-[linear-gradient(180deg,rgba(168,85,247,0.18),rgba(168,85,247,0.06))]" />
                <div className="h-16 flex-1 rounded-xl bg-[linear-gradient(180deg,rgba(168,85,247,0.34),rgba(168,85,247,0.12))]" />
                <div className="h-12 flex-1 rounded-xl bg-[linear-gradient(180deg,rgba(168,85,247,0.24),rgba(168,85,247,0.08))]" />
              </div>
            </div>
          </div>

          <div className="relative mt-3 rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_35%),linear-gradient(135deg,rgba(30,41,59,0.94),rgba(76,29,149,0.55))] p-4">
            <div className="flex h-20 items-end gap-2">
              {[34, 46, 42, 58, 53, 68, 61, 74].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t-full bg-[linear-gradient(180deg,rgba(103,232,249,0.88),rgba(56,189,248,0.16))]"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="absolute inset-x-4 bottom-4 h-px bg-white/10" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
            <div className="h-2 w-16 rounded-full bg-cyan-300/40" />
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
            <div className="h-2 w-12 rounded-full bg-violet-300/40" />
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
            <div className="h-2 w-14 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </Frame>
  )
}

function HarborKitchenPreview() {
  return (
    <Frame className="border-amber-200/50 bg-[#fff8ef] text-stone-900 shadow-[0_24px_60px_rgba(120,53,15,0.08)]">
      <div className="p-4">
        <div className="flex items-center justify-between border-b border-amber-200/70 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">
              Hospitality site
            </p>
            <p className="mt-1 text-sm text-stone-500">Reservations and local discovery</p>
          </div>
          <div className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            Tonight 7:30 PM
          </div>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[1.4rem] bg-[linear-gradient(135deg,rgba(120,53,15,0.94),rgba(245,158,11,0.25))] p-4 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-100/80">Reserve a table</p>
            <p className="mt-2 text-2xl font-semibold">Seasonal coastal dining</p>
            <div className="mt-4 rounded-2xl border border-white/15 bg-white/10 p-3">
              <p className="text-sm text-amber-50/80">Chef note</p>
              <p className="mt-2 text-sm leading-7 text-white/90">
                Catch of the Day with mussel broth, baby leeks, and charred potatoes.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-2xl border border-amber-200 bg-white p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-700">Menu</p>
              <p className="mt-2 text-sm text-stone-600">
                Seasonal dishes, tasting notes, and dietary info.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-white p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-700">Opening hours</p>
              <p className="mt-2 text-sm text-stone-600">
                Tue-Sun open with clear service times.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-700">Location</p>
                <p className="mt-2 text-sm text-stone-700">Vienna, Austria</p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-700">Events</p>
                <p className="mt-2 text-sm text-stone-700">Private dining</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  )
}

function AffectSensePreview() {
  return (
    <Frame className="bg-[#040507] text-white">
      <div className="p-4">
        <div className="rounded-[1.4rem] border border-white/10 bg-[#0a0d14] p-3">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-2.5 w-24 rounded-full bg-cyan-400/80" />
              <div className="h-2.5 w-36 rounded-full bg-white/10" />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
              <Globe2 className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.2rem] border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-violet-200">Signal</p>
              <p className="mt-2 text-3xl font-semibold">64%</p>
            </div>
            <div className="rounded-[1.2rem] border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Latency</p>
              <p className="mt-2 text-3xl font-semibold">86</p>
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.2rem] border border-white/10 bg-black/30 p-4">
              <p className="text-xs text-slate-400">Dominant</p>
              <p className="mt-2 text-sm text-slate-200">Happy</p>
              <div className="mt-4 flex h-24 items-end gap-2 rounded-2xl bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(168,85,247,0.12))] p-3">
                {[42, 58, 76, 66, 84].map((height, index) => (
                  <div key={index} className="flex-1 rounded-t-full bg-cyan-300" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
            <div className="rounded-[1.2rem] border border-white/10 bg-black/30 p-4">
              <p className="text-xs text-slate-400">Pipeline</p>
              <div className="mt-3 space-y-2">
                {["Webcam frame", "YuNet alignment", "ONNX scores"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  )
}

function GenericPreview() {
  return (
    <Frame className="bg-[#050608] text-white">
      <div className="p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Portfolio visual</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
            <div className="h-12 rounded-xl bg-white/8" />
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
            <div className="h-12 rounded-xl bg-white/8" />
          </div>
        </div>
      </div>
    </Frame>
  )
}

function ExamplePreview({ slug }: { slug: string }) {
  if (slug === "affect-sense") return <AffectSensePreview />
  if (slug === "aurelia") return <AureliaPreview />
  if (slug === "modelwatch") return <ModelWatchPreview />
  if (slug === "replypilot") return <ReplyPilotPreview />
  if (slug === "flowforge") return <FlowForgePreview />
  if (slug === "harbor-kitchen") return <HarborKitchenPreview />
  if (slug === "aetheriq") return <AetherIqPreview />
  return <GenericPreview />
}

const ExampleCard = forwardRef<
  HTMLAnchorElement,
  {
    site: ExampleSiteItem
    copy: ExampleCopy
    locale: Locale
    mobile?: boolean
  }
>(function ExampleCard({ site, copy, locale, mobile = false }, ref) {
  return (
    <Link
      ref={ref}
      href={localizedPath(locale, `/${site.slug}`)}
      target="_blank"
      rel="noreferrer"
      aria-label={`${copy.openLabel}: ${site.name}`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-card/60 text-foreground backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 ${
        mobile ? "w-[88vw] max-w-[24rem] shrink-0 snap-center" : ""
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${site.colorClass}`} />
      <div className={`relative flex h-full flex-col ${mobile ? "p-5" : "p-6 lg:p-8"}`}>
        <div className={`mb-8 flex items-center justify-between gap-4 ${mobile ? "mb-6" : ""}`}>
          <div
            className={`flex items-center justify-center rounded-2xl border border-border/50 bg-background/80 ${
              mobile ? "h-11 w-11" : "h-12 w-12"
            }`}
          >
            <site.icon className={`h-6 w-6 ${site.accentClass}`} />
          </div>
          <Layers3 className="h-5 w-5 text-muted-foreground/70" />
        </div>

        <div className={`space-y-4 ${mobile ? "mb-6" : "mb-8"}`}>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {site.category}
          </p>

          <h3
            className={`font-semibold text-foreground ${
              mobile ? "line-clamp-2 text-xl" : "min-h-[3.5rem] text-2xl"
            }`}
          >
            {site.name}
          </h3>

          <p
            className={`text-pretty text-sm leading-relaxed text-muted-foreground ${
              mobile ? "line-clamp-3" : "min-h-[5.5rem]"
            }`}
          >
            {site.summary}
          </p>
        </div>

        <div
          className={`group/frame rounded-2xl border border-border/40 bg-background/60 p-4 overflow-hidden ${
            mobile ? "mb-6 h-[260px]" : "mb-8 min-h-[380px]"
          }`}
        >
          <div className={mobile ? "origin-top scale-[0.82] w-[122%]" : "h-full"}>
            <ExamplePreview slug={site.slug} />
          </div>
        </div>

        <div className={`space-y-3 ${mobile ? "mb-6" : "mb-8"}`}>
          <p className="text-sm font-medium text-foreground">{site.heroStat}</p>
          <div className="flex flex-wrap gap-2">
            {site.highlights
              .slice(0, mobile ? 2 : site.highlights.length)
              .map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/40 bg-background/70 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
          </div>
        </div>

        <div className="mt-auto flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          {copy.openLabel}
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </Link>
  )
})

export function ExamplesSection({ locale = "en" }: { locale?: Locale }) {
  const sites = getExampleSites(locale)
  const copy = getExampleIndexCopy(locale)
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<Array<HTMLElement | null>>([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const container = carouselRef.current

    if (!container) {
      return
    }

    let frame = 0

    const updateActiveIndex = () => {
      const containerCenter = container.scrollLeft + container.clientWidth / 2
      let bestIndex = 0
      let bestDistance = Number.POSITIVE_INFINITY

      itemRefs.current.forEach((item, index) => {
        if (!item) {
          return
        }

        const itemCenter = item.offsetLeft + item.offsetWidth / 2
        const distance = Math.abs(itemCenter - containerCenter)

        if (distance < bestDistance) {
          bestDistance = distance
          bestIndex = index
        }
      })

      setActiveIndex((current) => (current === bestIndex ? current : bestIndex))
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(updateActiveIndex)
    }

    updateActiveIndex()
    container.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      cancelAnimationFrame(frame)
      container.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [sites.length])

  const scrollToExample = (index: number) => {
    const item = itemRefs.current[index]

    if (!item) {
      return
    }

    item.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    })
  }

  return (
    <section id="examples" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.035),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.03),transparent_40%)]" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mb-16 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-wider text-primary">
              {copy.eyebrow}
            </span>
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {copy.title}
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">{copy.description}</p>
          </div>

        </div>

        <div className="md:hidden">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">{copy.note}</p>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Swipe</p>
          </div>
          <div
            ref={carouselRef}
            className="-mx-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex items-stretch gap-4 snap-x snap-mandatory scroll-pl-4 pr-4">
              {sites.map((site, index) => (
                <ExampleCard
                  key={site.slug}
                  ref={(element) => {
                    itemRefs.current[index] = element
                  }}
                  site={site}
                  copy={copy}
                  locale={locale}
                  mobile
                />
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2" aria-label="Example carousel navigation">
            {sites.map((site, index) => (
              <button
                key={site.slug}
                type="button"
                onClick={() => scrollToExample(index)}
                aria-label={`Show ${site.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-primary shadow-[0_0_0_4px_rgba(34,211,238,0.12)]"
                    : "w-2 bg-border/70 hover:bg-border"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="hidden gap-6 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {sites.map((site) => (
            <ExampleCard key={site.slug} site={site} copy={copy} locale={locale} />
          ))}
        </div>

      </div>
    </section>
  )
}
