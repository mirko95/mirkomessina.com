"use client"

import Image from "next/image"
import { Globe, Cpu, Workflow, Wrench } from "lucide-react"
import { getHomeCopy } from "@/lib/site-copy"
import type { Locale } from "@/lib/i18n"

export function ServicesSection({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)

  return (
    <section id="services" className="relative overflow-hidden py-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.04),transparent_42%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.03),transparent_44%)]" />

      <div className="container mx-auto relative z-10 px-4 lg:px-8">
        <div className="mb-10 max-w-3xl lg:mb-12">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-wider text-primary">
            {copy.services.eyebrow}
          </span>
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {copy.services.title}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            {copy.services.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
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

                    <div className="hidden flex-wrap gap-2 lg:flex">
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

          <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-card/30 p-4 backdrop-blur-sm">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[1.5rem] border border-border/30 bg-background/40 lg:min-h-full">
              <Image
                src="/images/home/ai.png"
                alt={
                  locale === "it"
                    ? "Visual AI e automazione nella sezione servizi"
                    : locale === "de"
                      ? "KI- und Automationsvisual im Service-Bereich"
                      : "AI and automation visual in the services section"
                }
                fill
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.34))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_28%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
