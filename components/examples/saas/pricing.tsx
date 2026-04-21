"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getSaasData } from "./data"
import { Section, Card } from "./section"
import type { Locale } from "@/lib/i18n"

export function PricingSection({ locale = "en" }: { locale?: Locale }) {
  const data = getSaasData(locale)

  return (
    <Section id="pricing" className="bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{data.pricingHeading.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {data.pricingHeading.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {data.pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <Card className={`h-full p-6 ${plan.featured ? "border-cyan-300/40 bg-cyan-300/10" : "border-white/10 bg-white/5"}`}>
                {plan.featured && (
                  <div className="mb-4 inline-flex rounded-full bg-cyan-300 px-3 py-1 text-xs font-semibold text-slate-950">
                    {data.pricingHeading.featuredLabel}
                  </div>
                )}
                <p className="text-sm text-slate-300">{plan.name}</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-4xl font-semibold text-white">{plan.price}</span>
                  {plan.price !== "Custom" && plan.price !== "Individuell" && plan.price !== "Personalizzato" && (
                    <span className="pb-1 text-sm text-slate-400">{data.pricingHeading.perMonthLabel}</span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-200">
                      <Check className="mt-0.5 h-4 w-4 text-cyan-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`mt-8 h-12 w-full rounded-full ${plan.featured ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200" : "bg-white/10 text-white hover:bg-white/15"}`}
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

