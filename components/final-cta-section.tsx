"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getHomeCopy } from "@/lib/site-copy"
import type { Locale } from "@/lib/i18n"

export function FinalCtaSection({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.04),transparent_44%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.035),transparent_42%),radial-gradient(circle_at_center,rgba(79,70,229,0.03),transparent_52%)]" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-[140px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-balance">
            {copy.finalCta.title}
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            {copy.finalCta.description}
          </p>

          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-medium group shadow-lg shadow-primary/20"
          >
            {copy.finalCta.cta}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
