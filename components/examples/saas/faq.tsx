"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getSaasData } from "./data"
import { Section, Card } from "./section"
import type { Locale } from "@/lib/i18n"

export function FaqSection({ locale = "en" }: { locale?: Locale }) {
  const data = getSaasData(locale)

  return (
    <Section id="faq" className="bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{data.faqHeading.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {data.faqHeading.title}
          </h2>
        </div>

        <Card className="mt-12 border-white/10 bg-white/5 p-2 sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {data.faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`} className="border-white/10 px-4">
                <AccordionTrigger className="text-left text-base text-white hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-7 text-slate-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </Section>
  )
}
