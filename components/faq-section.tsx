"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getHomeCopy } from "@/lib/site-copy"
import type { Locale } from "@/lib/i18n"

export function FaqSection({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.03),transparent_44%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.025),transparent_46%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            {copy.faq.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-balance">
            {copy.faq.title}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {copy.faq.description}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-5">
            {copy.faq.items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
                className="rounded-3xl border border-border/50 bg-card/40 px-6 backdrop-blur-sm"
              >
                <AccordionTrigger className="py-6 text-lg font-semibold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-12 text-center text-muted-foreground">
            {locale === "it"
              ? "Hai in mente qualcosa di piu` specifico? "
              : locale === "de"
                ? "Hast du etwas Spezifischeres im Kopf? "
                : "Have something more specific in mind? "}
            <a href="#contact" className="text-primary hover:text-primary/80 transition-colors">
              {copy.faq.cta}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
