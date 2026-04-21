"use client"

import { Globe, Cpu, Workflow, Wrench, ArrowUpRight } from "lucide-react"
import { getHomeCopy } from "@/lib/site-copy"
import type { Locale } from "@/lib/i18n"

export function ServicesSection({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            {copy.services.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-balance">
            {copy.services.title}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {copy.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {copy.services.items.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 hover:border-primary/30 transition-all duration-500 hover:bg-card/80"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                {index === 0 ? <Globe className="w-6 h-6 text-primary" /> : index === 1 ? <Cpu className="w-6 h-6 text-primary" /> : index === 2 ? <Workflow className="w-6 h-6 text-primary" /> : <Wrench className="w-6 h-6 text-primary" />}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
                {service.description}
              </p>

              {/* Outcomes */}
              <div className="flex flex-wrap gap-2">
                {service.outcomes.map((outcome, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 text-muted-foreground border border-border/30"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
