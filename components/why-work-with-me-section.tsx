"use client"

import { Paintbrush, Zap, Target, HeartHandshake } from "lucide-react"
import { getHomeCopy } from "@/lib/site-copy"
import type { Locale } from "@/lib/i18n"

export function WhyWorkWithMeSection({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)
  const icons = [Paintbrush, Zap, Target, HeartHandshake]

  return (
    <section id="why-me" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-border to-border/50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            {copy.whyMe.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-balance">
            {copy.whyMe.title}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {copy.whyMe.description}
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {copy.whyMe.items.map((strength, index) => {
            const Icon = icons[index] ?? Paintbrush
            return (
            <div
              key={index}
              className="group text-center lg:text-left"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center mb-6 mx-auto lg:mx-0 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                <Icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {strength.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                {strength.description}
              </p>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
