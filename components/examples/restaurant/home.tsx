"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { RestaurantNavbar } from "./navbar"
import { RestaurantFooter } from "./footer"
import { localizedPath, type Locale } from "@/lib/i18n"
import { getRestaurantData, getRestaurantMenuData } from "./data"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const gold = "text-[#c5a059]"
const buttonGold = "bg-[#c5a059] text-[#0a0a0a] hover:bg-[#d4b47a]"

export function RestaurantHomePage({ locale = "en" }: { locale?: Locale }) {
  const restaurant = getRestaurantData(locale)
  const menu = getRestaurantMenuData(locale)
  const copy = {
    signatureDish: locale === "de" ? "Wildpilz-Risotto" : locale === "it" ? "Risotto ai funghi selvatici" : "Wild Mushroom Risotto",
    signatureDesc: locale === "de"
      ? "Gereifter Acquerello-Reis, Waldpilze aus den Bergen, 36 Monate gereifter Parmigiano, Trueffelemulsion."
      : locale === "it"
        ? "Riso Acquerello invecchiato, funghi di montagna, Parmigiano 36 mesi, emulsione al tartufo."
        : "Aged Acquerello rice, mountain forest fungi, 36-month Parmigiano, truffle emulsion.",
    chefQuote: locale === "de"
      ? '"Jedes Gericht erzaehlt die Geschichte der Erde, aus der es stammt."'
      : locale === "it"
        ? '"Ogni piatto racconta la storia della terra da cui nasce."'
        : '"Every dish tells a story of the soil it was born from."',
    chefTitle: locale === "de" ? "Kuechenchef, Marco De Luca" : locale === "it" ? "Chef esecutivo, Marco De Luca" : "Executive Chef, Marco De Luca",
    dishes: [
      { name: locale === "de" ? "Jakobsmuscheln und Gold" : locale === "it" ? "Capesante e oro" : "Scallops & Gold", img: restaurant.images.salmon, tag: locale === "de" ? "Meer" : locale === "it" ? "Mare" : "Seafood" },
      { name: locale === "de" ? "Wildpilz-Risotto" : locale === "it" ? "Risotto ai funghi selvatici" : "Wild Mushroom Risotto", img: restaurant.images.risotto, tag: "Signature" },
      { name: "Filetto alla Rossini", img: restaurant.images.steak, tag: locale === "de" ? "Saisonal" : locale === "it" ? "Stagionale" : "Seasonal" },
    ],
    limited: locale === "de" ? "Saisonale Auswahl mit begrenzter Verfuegbarkeit" : locale === "it" ? "Selezione stagionale a disponibilita` limitata" : "Limited availability seasonal selection",
    menuSubtitle: locale === "de" ? "Tradition neu interpretiert." : locale === "it" ? "La tradizione, reinterpretata." : "Experience the tradition, redefined.",
    legacy: locale === "de" ? "Das Erbe von" : locale === "it" ? "L'eredita` di" : "A Legacy of",
  }
  const gallery = [
    restaurant.images.salmon,
    restaurant.images.chef,
    restaurant.images.table,
    restaurant.images.steak,
    restaurant.images.window,
    restaurant.images.interior,
    restaurant.images.terrace,
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e8e2d6]">
      <RestaurantNavbar locale={locale} />

      <section id="top" className="relative grid min-h-screen overflow-hidden lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative flex min-h-[680px] items-center px-6 pb-14 pt-28 sm:px-10 lg:px-24">
          <img src={restaurant.images.hero} alt="A Tavola restaurant interior" className="absolute inset-0 h-full w-full object-cover brightness-[0.38]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-transparent" />
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }} className="relative z-10 max-w-2xl">
            <p className="mb-5 w-fit rounded-full border border-[#e8e2d6]/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em]">
              {restaurant.slogan}
            </p>
            <h1 className="font-serif text-5xl font-light italic leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[82px]">
              {locale === "de" ? "Ein moderner Geschmack Italiens" : locale === "it" ? "Il gusto moderno dell'Italia" : "A modern taste of Italy"}
            </h1>
            <p className="mt-8 max-w-md text-lg font-light leading-8 text-[#e8e2d6]/70">
              {restaurant.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href={localizedPath(locale, "/a-tavola/contact")} className={`inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] transition-colors ${buttonGold}`}>
                {locale === "de" ? "Tisch buchen" : locale === "it" ? "Prenota un tavolo" : "Book a table"}
              </Link>
              <Link href={localizedPath(locale, "/a-tavola/menu")} className="inline-flex items-center justify-center border border-[#c5a059] px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] text-[#c5a059] transition-colors hover:bg-[#c5a059] hover:text-[#0a0a0a]">
                {locale === "de" ? "Menue ansehen" : locale === "it" ? "Vedi menu" : "View menu"}
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col divide-y divide-[#c5a059]/10 border-l border-[#c5a059]/20 bg-[#0d0d0d]">
          <div className="flex flex-1 flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className={`mb-5 w-fit rounded-full border border-[#c5a059]/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] ${gold}`}>
              {locale === "de" ? "Signature" : locale === "it" ? "Signature" : "Signature dishes"}
            </p>
            <h2 className="font-serif text-3xl font-light text-white">{copy.signatureDish}</h2>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[#e8e2d6]/50">
              {copy.signatureDesc}
            </p>
          </div>
          <div className="grid h-[320px] grid-cols-2 divide-x divide-[#c5a059]/10 lg:flex-1">
            {[restaurant.images.risotto, restaurant.images.table].map((image) => (
              <div key={image} className="group overflow-hidden">
                <img src={image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 lg:grayscale lg:group-hover:grayscale-0" />
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col items-center justify-center bg-[#141414] p-8 text-center sm:p-12 lg:p-16">
            <h3 className="font-serif text-3xl font-light text-white">{locale === "de" ? "Reservieren Sie Ihren Abend" : locale === "it" ? "Riserva la tua serata" : "Reserve Your Evening"}</h3>
            <p className="mt-5 max-w-[260px] text-sm leading-7 text-[#e8e2d6]/50">
              {locale === "de" ? "Ein kulinarischer Abend kuratiert von Chef Marco De Luca." : locale === "it" ? "Un percorso culinario curato dallo chef Marco De Luca." : "An unforgettable culinary journey curated by Chef Marco De Luca."}
            </p>
            <Link href={localizedPath(locale, "/a-tavola/contact")} className={`mt-8 px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${buttonGold}`}>
              {locale === "de" ? "Tisch sichern" : locale === "it" ? "Riserva" : "Secure table"}
            </Link>
            <p className="mt-10 text-[10px] uppercase tracking-[0.2em] text-[#e8e2d6]/30">{restaurant.address} - {restaurant.phone}</p>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-8 md:grid-cols-2 lg:gap-20 lg:py-36">
        <div className="space-y-8">
          <p className={`w-fit rounded-full border border-[#c5a059]/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] ${gold}`}>
            {locale === "de" ? "Philosophie" : locale === "it" ? "Filosofia" : "The philosophy"}
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight text-white sm:text-6xl">
            {locale === "de" ? "Mit Leidenschaft gemacht, mit Grazie serviert." : locale === "it" ? "Creato con passione, servito con grazia." : "Crafted with passion, served with grace."}
          </h2>
          <p className="text-lg font-light leading-8 text-[#e8e2d6]/70">{restaurant.storyPoints[0]}</p>
          <div className="border-t border-[#e8e2d6]/10 pt-8">
            <p className="font-serif text-xl italic text-[#c5a059]">{copy.chefQuote}</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-[#e8e2d6]/40">{copy.chefTitle}</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 translate-x-4 translate-y-4 border border-[#c5a059]/20" />
          <img src={restaurant.images.interior} alt="A Tavola ambience" className="relative aspect-[4/5] w-full object-cover shadow-2xl lg:grayscale lg:hover:grayscale-0" />
        </div>
      </section>

      <section className="bg-[#e8e2d6]/5 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#c5a059]">{locale === "de" ? "Kulinarische Highlights" : locale === "it" ? "Highlights culinari" : "Culinary highlights"}</p>
            <h2 className="font-serif text-5xl font-light text-white md:text-7xl">{locale === "de" ? "Die Kunst des Tellers" : locale === "it" ? "L'arte del piatto" : "The Art of the Plate"}</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {copy.dishes.map((dish) => (
              <article key={dish.name} className="group">
                <div className="relative mb-6 aspect-square overflow-hidden">
                  <img src={dish.img} alt={dish.name} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <span className="absolute right-6 top-6 bg-[#c5a059] px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0a0a0a]">{dish.tag}</span>
                </div>
                <h3 className="font-serif text-2xl font-light text-white">{dish.name}</h3>
                <p className="mt-2 text-sm italic text-[#e8e2d6]/50">{copy.limited}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-4xl px-6 py-24 sm:px-8 lg:py-36">
        <div className="mb-20 text-center">
          <h2 className="font-serif text-6xl font-light tracking-tight text-white md:text-8xl">La Carta</h2>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[#e8e2d6]/40">{copy.menuSubtitle}</p>
        </div>
        <div className="space-y-16">
          {menu.menuCategories.filter((category) => category.value !== "all").map((category) => (
            <div key={category.value}>
              <div className="mb-8 flex items-center gap-5">
                <h3 className="font-serif text-3xl font-light italic text-[#c5a059]">{category.label}</h3>
                <div className="h-px flex-1 bg-[#c5a059]/20" />
              </div>
              <div className="grid gap-8">
                {menu.menuItems.filter((item) => item.category === category.value).slice(0, 3).map((item) => (
                  <div key={item.name}>
                    <div className="mb-2 flex items-end justify-between gap-4">
                      <h4 className="font-serif text-xl font-light text-white">{item.name}</h4>
                      <span className="text-[#c5a059]">€{item.price}</span>
                    </div>
                    <p className="max-w-lg text-sm italic text-[#e8e2d6]/50">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <Link href={localizedPath(locale, "/a-tavola/menu")} className="inline-flex items-center border border-[#c5a059] px-10 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#c5a059] hover:bg-[#c5a059] hover:text-[#0a0a0a]">
            {locale === "de" ? "Volles Menue" : locale === "it" ? "Menu completo" : "Full menu"} <ArrowRight className="ml-3 h-4 w-4" />
          </Link>
        </div>
      </section>

      <section id="gallery" className="bg-[#e8e2d6] py-24 text-[#0a0a0a]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 sm:gap-4 md:grid-cols-4">
          {gallery.map((image, index) => (
            <div key={`${image}-${index}`} className={`group overflow-hidden ${index % 3 === 0 ? "col-span-2 row-span-2" : ""}`}>
              <img src={image} alt="A Tavola atmosphere" className="aspect-square h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-8 md:grid-cols-2 lg:gap-20 lg:py-36">
        <img src={restaurant.images.chef} alt="Chef plating at A Tavola" className="aspect-[1/1.15] w-full object-cover brightness-75 lg:grayscale" />
        <div className="flex flex-col justify-center space-y-8">
          <p className="text-sm uppercase tracking-[0.4em] text-[#c5a059]">{locale === "de" ? "Unser Visionaer" : locale === "it" ? "Il nostro visionario" : "Our visionary"}</p>
          <h2 className="font-serif text-5xl font-light text-white md:text-7xl">{copy.legacy} <span className="italic text-[#c5a059]">A Tavola</span>.</h2>
          <p className="text-lg font-light leading-8 text-[#e8e2d6]/60">{restaurant.storyPoints[2]}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {restaurant.highlights.slice(0, 4).map((item) => (
              <div key={item.title} className="border border-[#c5a059]/15 bg-white/[0.03] p-5">
                <item.icon className="h-5 w-5 text-[#c5a059]" />
                <p className="mt-4 font-serif text-xl text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-[#e8e2d6]/50">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-32 text-center">
        <img src={restaurant.images.table} alt="Reservation table" className="absolute inset-0 h-full w-full object-cover brightness-[0.25]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="mb-8 text-xs uppercase tracking-[0.5em] text-[#c5a059]">{locale === "de" ? "Exklusives Erlebnis" : locale === "it" ? "Esperienza esclusiva" : "Exclusive experience"}</p>
          <h2 className="font-serif text-5xl font-light tracking-tight text-white md:text-8xl">
            {locale === "de" ? "Sichern Sie Ihren Abend" : locale === "it" ? "Riserva la tua serata" : "Secure Your Evening"}
          </h2>
          <p className="mx-auto mt-10 max-w-xl text-lg font-light italic text-[#e8e2d6]/60">
            {locale === "de" ? "Reservierungen werden empfohlen, besonders fuer Wochenenden und Gruppen." : locale === "it" ? "Prenotazione consigliata, soprattutto per weekend e gruppi." : "Bookings recommended two weeks in advance for weekends and group dining."}
          </p>
          <Link href={localizedPath(locale, "/a-tavola/contact")} className={`mt-12 inline-block px-14 py-5 text-xs font-black uppercase tracking-[0.3em] ${buttonGold}`}>
            {locale === "de" ? "Reservieren" : locale === "it" ? "Prenota" : "Make a reservation"}
          </Link>
        </div>
      </section>

      <RestaurantFooter locale={locale} />
    </main>
  )
}
