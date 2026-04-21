"use client"

import { motion } from "framer-motion"
import { ArrowRight, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "./section"
import { getSaasData } from "./data"
import type { Locale } from "@/lib/i18n"

export function HeroSection({ locale = "en" }: { locale?: Locale }) {
  const data = getSaasData(locale)

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_35%),linear-gradient(180deg,#020617_0%,#0f172a_45%,#020617_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.9)]" />
            {data.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 text-5xl font-semibold tracking-tight text-white text-balance sm:text-6xl lg:text-7xl"
          >
            {data.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-300 text-pretty"
          >
            {data.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Button className="h-12 rounded-full bg-cyan-300 px-6 text-slate-950 hover:bg-cyan-200">
              {data.hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10">
              <PlayCircle className="h-4 w-4" />
              {data.hero.secondaryCta}
            </Button>
          </motion.div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {data.hero.stats.map((stat) => (
              <Card key={stat.label} className="p-4">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
          <Card className="relative overflow-hidden border-white/10 bg-slate-900/70 p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm font-medium text-white">{data.hero.dashboardTitle}</p>
                <p className="text-xs text-slate-400">{data.hero.dashboardSubtitle}</p>
              </div>
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-[1.25fr_0.75fr]">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-400/15 via-white/5 to-transparent p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">{data.hero.overviewTitle}</p>
                    <p className="mt-1 text-3xl font-semibold text-white">{data.hero.overviewLabel}</p>
                  </div>
                  <div className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-medium text-emerald-200">
                    {data.hero.updatedLabel}
                  </div>
                </div>
                <div className="mt-6 h-40 rounded-2xl bg-[linear-gradient(135deg,rgba(56,189,248,0.22),rgba(255,255,255,0.05))] p-4">
                  <div className="flex h-full items-end gap-3">
                    {[42, 58, 46, 72, 66, 84, 76, 92].map((h, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.7, delay: 0.25 + index * 0.04 }}
                        className="flex-1 rounded-t-full bg-cyan-300/80"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {data.previewItems.slice(0, 3).map((card) => (
                  <div key={card.label} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-slate-300">{card.label}</p>
                      <card.icon className="h-4 w-4 text-cyan-300" />
                    </div>
                    <p className="mt-2 text-2xl font-semibold text-white">{card.value}</p>
                    <p className="mt-2 text-xs text-slate-400">{data.hero.summaryTitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
