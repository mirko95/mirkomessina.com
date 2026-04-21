"use client"

import { motion } from "framer-motion"
import { Section, Card } from "./section"
import { getSaasData } from "./data"
import type { Locale } from "@/lib/i18n"

export function PreviewSection({ locale = "en" }: { locale?: Locale }) {
  const data = getSaasData(locale)

  return (
    <Section id="preview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{data.previewHeading.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {data.previewHeading.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">{data.previewHeading.description}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-white/10 bg-slate-900/70 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {data.previewItems.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <item.icon className="h-4 w-4 text-cyan-300" />
                    </div>
                    <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.8fr]">
                <div className="rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),rgba(15,23,42,0.15))] p-5">
                  <p className="text-sm text-slate-400">{data.previewHeading.funnelLabel}</p>
                  <div className="mt-5 space-y-4">
                    {data.funnel.map((row) => (
                      <div key={row.label}>
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span>{row.label}</span>
                          <span>{row.width}</span>
                        </div>
                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: row.width }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-sky-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">{data.insight.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{data.insight.body}</p>
                  <div className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">{data.insight.recommendationLabel}</p>
                    <p className="mt-2 text-sm text-white">{data.insight.recommendationBody}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}


