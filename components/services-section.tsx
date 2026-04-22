"use client"

import { Globe, Cpu, Workflow, Wrench } from "lucide-react"
import { getHomeCopy } from "@/lib/site-copy"
import type { Locale } from "@/lib/i18n"

export function ServicesSection({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)
  return (
    <section id="services" className="relative py-16 lg:py-20 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.04),transparent_42%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.03),transparent_44%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10 lg:mb-12">
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

        {/* Services List */}
        <div className="overflow-hidden rounded-[2rem] border border-border/50 bg-card/30 backdrop-blur-sm">
          <div className="divide-y divide-border/40">
            {copy.services.items.map((service, index) => (
              <article
                key={index}
                className="grid gap-4 px-6 py-6 lg:grid-cols-[220px_1fr] lg:gap-8 lg:px-8 lg:py-7"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    {index === 0 ? (
                      <Globe className="h-6 w-6 text-primary" />
                    ) : index === 1 ? (
                      <Cpu className="h-6 w-6 text-primary" />
                    ) : index === 2 ? (
                      <Workflow className="h-6 w-6 text-primary" />
                    ) : (
                      <Wrench className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <div className="lg:hidden">
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="hidden text-xl font-semibold text-foreground lg:block">{service.title}</h3>
                  <p className="max-w-3xl text-pretty leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.outcomes.map((outcome, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-border/30 bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground"
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
