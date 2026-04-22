"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { StrategySection } from "@/components/strategy-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import type { Locale } from "@/lib/i18n"

export function HomePage({ locale = "en" }: { locale?: Locale }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.12),transparent_34%),radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.10),transparent_32%),radial-gradient(ellipse_at_50%_18%,rgba(79,70,229,0.08),transparent_52%),radial-gradient(ellipse_at_bottom,rgba(2,6,23,0.18),transparent_42%),linear-gradient(180deg,rgba(3,7,18,0.08),rgba(3,7,18,0.22)_28%,rgba(3,7,18,0.36)_58%,rgba(3,7,18,0.58)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[linear-gradient(180deg,rgba(99,102,241,0.08),rgba(99,102,241,0.03)_45%,transparent_88%)]" />
      <Navbar locale={locale} />
      <main className="relative">
        <HeroSection locale={locale} />
        <ServicesSection locale={locale} />
        <StrategySection locale={locale} />
        <HowItWorksSection locale={locale} />
        <FinalCtaSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
