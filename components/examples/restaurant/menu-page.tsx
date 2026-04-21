"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { RestaurantNavbar } from "./navbar"
import { RestaurantFooter } from "./footer"
import { getRestaurantMenuData } from "./data"
import { MenuBrowser } from "./menu-browser"
import { Button } from "@/components/ui/button"
import { localizedPath, type Locale } from "@/lib/i18n"

export function RestaurantMenuPage({ locale = "en" }: { locale?: Locale }) {
  const { menuItems } = getRestaurantMenuData(locale)

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <RestaurantNavbar locale={locale} />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">{locale === "de" ? "Menue" : locale === "it" ? "Menu" : "Menu"}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            {locale === "de" ? "Saisonale Gerichte, sorgfaeltig praesentiert." : locale === "it" ? "Piatti stagionali, presentati con cura." : "Seasonal dishes, carefully presented."}
          </h1>
          <p className="mt-5 text-lg leading-8 text-stone-600 text-pretty">
            {locale === "de"
              ? "Das Menue ist fuer schnelles Browsen auf Mobile strukturiert und bietet klare Preise, hilfreiche Labels und intuitive Kategorienfilter."
              : locale === "it"
                ? "Il menu e` organizzato per una consultazione rapida su mobile e include prezzi chiari, etichette utili e filtri intuitivi."
                : "The menu is organized for quick browsing on mobile and includes clear pricing, helpful labels, and intuitive category filters."}
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button className="rounded-full bg-stone-900 text-white hover:bg-stone-800" asChild>
            <Link href={localizedPath(locale, "/harbor-kitchen/contact")}>{locale === "de" ? "Tisch reservieren" : locale === "it" ? "Prenota un tavolo" : "Reserve a table"}</Link>
          </Button>
          <Button variant="outline" className="rounded-full border-stone-300 bg-white text-stone-900 hover:bg-stone-100" asChild>
            <Link href={localizedPath(locale, "/harbor-kitchen/contact")}>{locale === "de" ? "Abholung bestellen" : locale === "it" ? "Ordina da asporto" : "Order for pickup"}</Link>
          </Button>
        </div>

        <div className="mt-12 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <MenuBrowser locale={locale} />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">{locale === "de" ? "Hinweise" : locale === "it" ? "Note della casa" : "House notes"}</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-600">
              <li>{locale === "de" ? "Menues koennen je nach Saison und Marktverfuegbarkeit wechseln." : locale === "it" ? "I menu possono cambiare in base alla stagione e alla disponibilita` del mercato." : "Menus may change with the season and market availability."}</li>
              <li>{locale === "de" ? "Vegetarische und alkoholfreie Pairings sind auf Anfrage moeglich." : locale === "it" ? "Abbinamenti vegetariani e analcolici possono essere organizzati su richiesta." : "Vegetarian and alcohol-free pairings can be arranged on request."}</li>
              <li>{locale === "de" ? "Bitte Allergien in der Reservierungsanfrage angeben." : locale === "it" ? "Indica eventuali allergie nella richiesta di prenotazione." : "Please mention allergies in your reservation request."}</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">{locale === "de" ? "Beliebte Gerichte" : locale === "it" ? "Scelte popolari" : "Popular choices"}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {menuItems.slice(0, 4).map((item) => (
                <div key={item.name} className="rounded-2xl bg-stone-50 p-4">
                  <p className="font-medium text-stone-950">{item.name}</p>
                  <p className="mt-2 text-sm leading-7 text-stone-600">{item.description}</p>
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
