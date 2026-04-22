"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChefHat, Leaf, Quote, UtensilsCrossed } from "lucide-react"
import { RestaurantNavbar } from "./navbar"
import { RestaurantFooter } from "./footer"
import { getRestaurantData } from "./data"
import { Button } from "@/components/ui/button"
import { localizedPath, type Locale } from "@/lib/i18n"

export function RestaurantAboutPage({ locale = "en" }: { locale?: Locale }) {
  const restaurant = getRestaurantData(locale)

  return (
    <main className="min-h-screen bg-[#f8f3ea] text-stone-900">
      <RestaurantNavbar locale={locale} />
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(180,83,9,0.12),transparent_35%),linear-gradient(180deg,#fbf7f0_0%,#f4ecdf_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">{locale === "de" ? "Ueber uns" : locale === "it" ? "Chi siamo" : "About"}</p>
              <h1 className="mt-4 max-w-2xl text-balance font-serif text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl">
                {locale === "de" ? "Ein Restaurant, das Ruhe, Sorgfalt und Saison in den Mittelpunkt stellt." : locale === "it" ? "Un ristorante che mette al centro calma, cura e stagionalita`." : "A restaurant built around calm, care, and seasonality."}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 text-pretty">{restaurant.description}</p>

              <div className="mt-10 space-y-4">
                {restaurant.storyPoints.map((point, index) => (
                  <div key={point} className={`rounded-[1.6rem] border p-5 shadow-sm ${index === 0 ? "border-amber-200 bg-white" : "border-stone-200 bg-stone-50"}`}>
                    <div className="flex items-start gap-3">
                      <Quote className="mt-1 h-5 w-5 text-amber-700" />
                      <p className="text-sm leading-7 text-stone-700">{point}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button className="rounded-full bg-stone-950 text-white hover:bg-stone-800" asChild>
                  <Link href={localizedPath(locale, "/harbor-kitchen/contact")}>{locale === "de" ? "Tisch reservieren" : locale === "it" ? "Prenota un tavolo" : "Reserve a table"}</Link>
                </Button>
                <Button variant="outline" className="rounded-full border-stone-300 bg-white text-stone-900 hover:bg-stone-100" asChild>
                  <Link href={localizedPath(locale, "/harbor-kitchen#menu")}>{locale === "de" ? "Menue ansehen" : locale === "it" ? "Vedi il menu" : "See the menu"}</Link>
                </Button>
              </div>
            </motion.div>

            <div className="grid gap-4">
              {[
                {
                  icon: ChefHat,
                  title: locale === "de" ? "Chefgefuehrte Kueche" : locale === "it" ? "Cucina guidata dallo chef" : "Chef-led kitchen",
                  text:
                    locale === "de"
                      ? "Feine, ruhige Gerichte mit klarer Handschrift und konstanter Qualitaet."
                      : locale === "it"
                        ? "Piatti curati, silenziosi e con una firma chiara e qualitativamente costante."
                        : "Refined, calm dishes with a clear signature and consistent quality.",
                },
                {
                  icon: Leaf,
                  title: locale === "de" ? "Saisonale Zutaten" : locale === "it" ? "Ingredienti stagionali" : "Seasonal sourcing",
                  text:
                    locale === "de"
                      ? "Die Karte passt sich Markt und Jahreszeit an, damit die Erfahrung lebendig bleibt."
                      : locale === "it"
                        ? "Il menu si adatta al mercato e alla stagione per mantenere l'esperienza viva."
                        : "The menu adapts to the market and season so the experience stays alive.",
                },
                {
                  icon: UtensilsCrossed,
                  title: locale === "de" ? "Private Dining" : locale === "it" ? "Dining privato" : "Private dining",
                  text:
                    locale === "de"
                      ? "Feiern, Business-Dinner und langsame Abende mit reserviertem Rahmen."
                      : locale === "it"
                        ? "Celebrazioni, cene di lavoro e serate lente in un contesto riservato."
                        : "Celebrations, business dinners, and slow evenings with a reserved setting.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.8rem] border border-stone-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-stone-950">{item.title}</p>
                      <p className="text-sm text-stone-500">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <RestaurantFooter locale={locale} />
    </main>
  )
}
