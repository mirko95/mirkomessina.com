"use client"

import { FaqSection } from "./faq"
import { FeaturesSection } from "./features"
import { HeroSection } from "./hero"
import { PreviewSection } from "./preview"
import { PricingSection } from "./pricing"
import { SaasFooter } from "./footer"
import { SaasNavbar } from "./navbar"
import { TestimonialsSection } from "./testimonials"
import type { Locale } from "@/lib/i18n"

export function AetherIqLandingPage({ locale = "en" }: { locale?: Locale }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SaasNavbar locale={locale} />
      <HeroSection locale={locale} />
      <FeaturesSection locale={locale} />
      <PreviewSection locale={locale} />
      <PricingSection locale={locale} />
      <TestimonialsSection locale={locale} />
      <FaqSection locale={locale} />
      <SaasFooter locale={locale} />
    </main>
  )
}
