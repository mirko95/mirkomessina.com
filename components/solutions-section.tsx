"use client"

import { Globe, Cpu, Workflow, Wrench, ArrowRight, CheckCircle2, TrendingUp, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getHomeCopy } from "@/lib/site-copy"
import type { Locale } from "@/lib/i18n"

export function SolutionsSection({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)
  const icons = [Globe, Cpu, Workflow, Wrench]
  const valueIcons = [TrendingUp, Clock, Shield]
  const visuals = [
    <div key="web" className="relative h-48 bg-gradient-to-br from-primary/20 via-card to-card rounded-xl overflow-hidden border border-border/30">
      <div className="absolute inset-4 flex flex-col gap-2">
        <div className="h-3 w-24 bg-primary/40 rounded-full" />
        <div className="h-2 w-32 bg-muted-foreground/20 rounded-full" />
        <div className="flex-1 mt-4 grid grid-cols-3 gap-2">
          <div className="bg-primary/10 rounded-lg" />
          <div className="bg-muted-foreground/10 rounded-lg" />
          <div className="bg-muted-foreground/10 rounded-lg" />
        </div>
        <div className="h-8 bg-primary/30 rounded-lg mt-2" />
      </div>
    </div>,
    <div key="ai" className="relative h-48 bg-gradient-to-br from-accent/20 via-card to-card rounded-xl overflow-hidden border border-border/30">
      <div className="absolute inset-4 flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-accent/40 animate-pulse" />
          </div>
          <div className="absolute -top-2 -right-4 w-6 h-6 rounded-full bg-primary/30" />
          <div className="absolute -bottom-3 -left-6 w-8 h-8 rounded-full bg-chart-3/30" />
          <div className="absolute top-1/2 -right-10 w-4 h-4 rounded-full bg-chart-4/30" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
        <div className="h-2 flex-1 bg-accent/30 rounded-full" />
        <div className="h-2 w-12 bg-primary/30 rounded-full" />
      </div>
    </div>,
    <div key="workflow" className="relative h-48 bg-gradient-to-br from-chart-3/20 via-card to-card rounded-xl overflow-hidden border border-border/30">
      <div className="absolute inset-4 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-chart-3/30 flex items-center justify-center">
            <div className="w-4 h-4 rounded bg-chart-3/50" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="h-0.5 w-8 bg-chart-3/40" />
            <div className="h-0.5 w-8 bg-chart-3/40" />
          </div>
          <div className="w-10 h-10 rounded-lg bg-primary/30 flex items-center justify-center">
            <div className="w-4 h-4 rounded bg-primary/50" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="h-0.5 w-8 bg-primary/40" />
            <div className="h-0.5 w-8 bg-primary/40" />
          </div>
          <div className="w-10 h-10 rounded-lg bg-accent/30 flex items-center justify-center">
            <div className="w-4 h-4 rounded bg-accent/50" />
          </div>
        </div>
      </div>
    </div>,
    <div key="prototype" className="relative h-48 bg-gradient-to-br from-chart-4/20 via-card to-card rounded-xl overflow-hidden border border-border/30">
      <div className="absolute inset-4 flex flex-col gap-3">
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-lg bg-chart-4/30" />
          <div className="flex-1 flex flex-col justify-center gap-1">
            <div className="h-2 w-20 bg-muted-foreground/20 rounded-full" />
            <div className="h-1.5 w-12 bg-muted-foreground/10 rounded-full" />
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-2">
          <div className="bg-chart-4/10 rounded-lg p-2">
            <div className="h-1.5 w-8 bg-chart-4/30 rounded-full mb-2" />
            <div className="h-full bg-chart-4/20 rounded" />
          </div>
          <div className="bg-muted-foreground/5 rounded-lg p-2">
            <div className="h-1.5 w-8 bg-muted-foreground/20 rounded-full mb-2" />
            <div className="h-full bg-muted-foreground/10 rounded" />
          </div>
        </div>
      </div>
    </div>,
  ]

  return (
    <section id="solutions" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            {copy.solutions.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-balance">
            {copy.solutions.title}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {copy.solutions.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16 lg:mb-20">
          {copy.solutions.valueProps.map((prop, index) => {
            const Icon = valueIcons[index] ?? TrendingUp
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-card/30 border border-border/30"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{prop.title}</h4>
                  <p className="text-xs text-muted-foreground">{prop.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {copy.solutions.items.map((solution, index) => {
            const Icon = icons[index] ?? Globe
            return (
              <div key={index} className="relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{solution.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="mb-6">{visuals[index]}</div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      {locale === "it" ? "Cosa ottieni:" : locale === "de" ? "Was du bekommst:" : "What you get:"}
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {solution.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-secondary/30 border border-border/30 mb-6">
                    <p className="text-sm">
                      <span className="font-medium text-foreground">
                        {locale === "it" ? "Ideale per: " : locale === "de" ? "Ideal fuer: " : "Ideal for: "}
                      </span>
                      <span className="text-muted-foreground">{solution.idealFor}</span>
                    </p>
                  </div>

                  <Button
                    variant="default"
                    className="group w-full border border-primary/30 shadow-sm shadow-primary/10"
                    asChild
                  >
                    <a href="#contact">
                      <span>{solution.cta}</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
