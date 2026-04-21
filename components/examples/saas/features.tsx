"use client"

import { motion } from "framer-motion"
import { getSaasData } from "./data"
import { Section, Card } from "./section"
import type { Locale } from "@/lib/i18n"

export function FeaturesSection({ locale = "en" }: { locale?: Locale }) {
  const data = getSaasData(locale)

  return (
    <Section id="features" className="bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{data.featuresHeading.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {data.featuresHeading.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
