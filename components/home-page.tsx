"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WhyWorkWithMeSection } from "@/components/why-work-with-me-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { SolutionsSection } from "@/components/solutions-section"
import { ExamplesSection } from "@/components/examples-section"
import { FaqSection } from "@/components/faq-section"
import { AboutSection } from "@/components/about-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import type { Locale } from "@/lib/i18n"

export function HomePage({ locale = "en" }: { locale?: Locale }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar locale={locale} />
      <main>
        <HeroSection locale={locale} />
        <ServicesSection locale={locale} />
        <WhyWorkWithMeSection locale={locale} />
        <HowItWorksSection locale={locale} />
        <SolutionsSection locale={locale} />
        <ExamplesSection locale={locale} />
        <FaqSection locale={locale} />
        <AboutSection locale={locale} />
        <FinalCtaSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
