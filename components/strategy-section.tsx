"use client"

import Image from "next/image"
import type { Locale } from "@/lib/i18n"

export function StrategySection({ locale = "en" }: { locale?: Locale }) {
  const eyebrow = locale === "it" ? "Strategia" : locale === "de" ? "Strategie" : "Strategy"
  const title =
    locale === "it"
      ? "Chiarezza prima di partire."
      : locale === "de"
        ? "Klarheit vor dem Start."
        : "Clarity before we start."
  const description =
    locale === "it"
      ? "Qui definiamo obiettivi, priorità e perimetro del progetto, così il lavoro parte con una direzione chiara e un processo più semplice da seguire."
      : locale === "de"
        ? "Hier definieren wir Ziele, Prioritäten und den Rahmen des Projekts, damit die Arbeit mit klarer Richtung und einem einfacheren Prozess startet."
        : "Here we define goals, priorities, and project scope so the work starts with a clear direction and a simpler process to follow."

  return (
    <section className="relative overflow-hidden py-10 lg:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.03),transparent_45%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.03),transparent_46%)]" />

      <div className="container mx-auto relative z-10 px-4 lg:px-8">
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[1.4fr_0.9fr] lg:items-stretch">
          <div className="order-2 rounded-[2rem] border border-border/50 bg-card/30 p-4 backdrop-blur-sm lg:order-1">
            <div className="relative aspect-[16/8.5] overflow-hidden rounded-[1.5rem] border border-border/30 bg-background/40">
              <Image
                src="/images/home/strategy.png"
                alt={
                  locale === "it"
                    ? "Riunione di strategia e confronto in ufficio"
                    : locale === "de"
                      ? "Strategiemeeting und Abstimmung im Büro"
                      : "Strategy meeting and discussion in an office"
                }
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.10),rgba(2,6,23,0.28))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_28%)]" />
            </div>
          </div>

          <div className="order-1 flex items-stretch lg:order-2">
            <div className="flex h-full w-full flex-col justify-center rounded-[2rem] border border-border/50 bg-card/20 p-6 lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground lg:text-3xl">{title}</h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
