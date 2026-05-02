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
    <main className="min-h-screen bg-[#0a0a0a] text-[#e8e2d6]">
      <RestaurantNavbar locale={locale} />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c5a059]">{locale === "de" ? "Menue" : locale === "it" ? "Menu" : "Menu"}</p>
          <h1 className="mt-4 font-serif text-5xl font-light tracking-tight text-white sm:text-7xl">
            {locale === "de" ? "La Carta, saisonal und praezise." : locale === "it" ? "La Carta, stagionale e precisa." : "La Carta, seasonal and precise."}
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#e8e2d6]/60 text-pretty">
            {locale === "de"
              ? "Das Menue ist fuer schnelles Browsen auf Mobile strukturiert und bietet klare Preise, hilfreiche Labels und intuitive Kategorienfilter."
              : locale === "it"
                ? "Il menu e` organizzato per una consultazione rapida su mobile e include prezzi chiari, etichette utili e filtri intuitivi."
                : "The menu is organized for quick browsing on mobile and includes clear pricing, helpful labels, and intuitive category filters."}
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button className="rounded-none bg-[#c5a059] text-[#0a0a0a] hover:bg-[#d4b47a]" asChild>
            <Link href={localizedPath(locale, "/a-tavola/contact")}>{locale === "de" ? "Tisch reservieren" : locale === "it" ? "Prenota un tavolo" : "Reserve a table"}</Link>
          </Button>
          <Button variant="outline" className="rounded-none border-[#c5a059] bg-transparent text-[#c5a059] hover:bg-[#c5a059] hover:text-[#0a0a0a]" asChild>
            <Link href={localizedPath(locale, "/a-tavola/contact")}>{locale === "de" ? "Weinbegleitung anfragen" : locale === "it" ? "Richiedi pairing vini" : "Ask for wine pairing"}</Link>
          </Button>
        </div>

        <div className="mt-12 border border-[#c5a059]/20 bg-[#0d0d0d] p-6 shadow-2xl">
          <MenuBrowser locale={locale} />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="border border-[#c5a059]/20 bg-white/[0.03] p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c5a059]">{locale === "de" ? "Hinweise" : locale === "it" ? "Note della casa" : "House notes"}</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[#e8e2d6]/60">
              <li>{locale === "de" ? "Menues koennen je nach Saison und Marktverfuegbarkeit wechseln." : locale === "it" ? "I menu possono cambiare in base alla stagione e alla disponibilita` del mercato." : "Menus may change with the season and market availability."}</li>
              <li>{locale === "de" ? "Vegetarische und alkoholfreie Pairings sind auf Anfrage moeglich." : locale === "it" ? "Abbinamenti vegetariani e analcolici possono essere organizzati su richiesta." : "Vegetarian and alcohol-free pairings can be arranged on request."}</li>
              <li>{locale === "de" ? "Bitte Allergien in der Reservierungsanfrage angeben." : locale === "it" ? "Indica eventuali allergie nella richiesta di prenotazione." : "Please mention allergies in your reservation request."}</li>
            </ul>
          </div>
          <div className="border border-[#c5a059]/20 bg-white/[0.03] p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c5a059]">{locale === "de" ? "Beliebte Gerichte" : locale === "it" ? "Scelte popolari" : "Popular choices"}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {menuItems.slice(0, 4).map((item) => (
                <div key={item.name} className="bg-[#141414] p-4">
                  <p className="font-serif text-lg text-white">{item.name}</p>
                  <p className="mt-2 text-sm leading-7 text-[#e8e2d6]/50">{item.description}</p>
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
