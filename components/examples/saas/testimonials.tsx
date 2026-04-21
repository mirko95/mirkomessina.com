"use client"

import { motion } from "framer-motion"
import { getSaasData } from "./data"
import { Card, Section } from "./section"
import type { Locale } from "@/lib/i18n"

export function TestimonialsSection({ locale = "en" }: { locale?: Locale }) {
  const data = getSaasData(locale)

  return (
    <Section id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{data.testimonialsHeading.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {data.testimonialsHeading.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {data.testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full border-white/10 bg-white/5 p-6">
                <p className="text-base leading-8 text-slate-200">"{item.quote}"</p>
                <div className="mt-6">
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
