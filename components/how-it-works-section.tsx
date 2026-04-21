"use client"

import { MessageSquare, FileSearch, Code2, Rocket } from "lucide-react"
import { getHomeCopy } from "@/lib/site-copy"
import type { Locale } from "@/lib/i18n"

export function HowItWorksSection({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)
  const icons = [MessageSquare, FileSearch, Code2, Rocket]

  return (
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            {copy.process.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-balance">
            {copy.process.title}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {copy.process.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {copy.process.steps.map((step, index) => {
            const Icon = icons[index] ?? Code2

            return (
              <div key={index} className="relative">
                {index < copy.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+32px)] w-[calc(100%-64px)] h-px bg-gradient-to-r from-border via-primary/30 to-border" />
                )}

                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="relative w-20 h-20 rounded-2xl bg-card border border-border/50 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm max-w-xs text-pretty leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
