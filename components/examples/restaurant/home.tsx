"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Clock3, MapPin, Sparkles, UtensilsCrossed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RestaurantNavbar } from "./navbar"
import { RestaurantFooter } from "./footer"
import { localizedPath, type Locale } from "@/lib/i18n"
import { getRestaurantData, getRestaurantMenuData } from "./data"

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export function RestaurantHomePage({ locale = "en" }: { locale?: Locale }) {
  const restaurant = getRestaurantData(locale)
  const menu = getRestaurantMenuData(locale)

  return (
    <main className="min-h-screen bg-[#f7f1e8] text-stone-900">
      <RestaurantNavbar locale={locale} />

      <section id="top" className="relative overflow-hidden border-b border-stone-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(180,83,9,0.12),transparent_35%),radial-gradient(circle_at_top_right,_rgba(251,191,36,0.12),transparent_30%),linear-gradient(180deg,#fbf7f0_0%,#f4ecdf_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-16" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="relative z-10 max-w-2xl">
              <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55 }} className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm text-amber-900 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                {restaurant.slogan}
              </motion.div>

              <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7, delay: 0.06 }} className="mt-6 max-w-2xl text-balance font-serif text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl lg:text-[5.5rem]">
                {locale === "de" ? "Ein Restaurant, das ruhig und hochwertig wirkt." : locale === "it" ? "Un ristorante che sembra tranquillo e premium." : "A restaurant that feels calm and premium."}
              </motion.h1>

              <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.12 }} className="mt-6 max-w-xl text-lg leading-8 text-stone-600 text-pretty">
                {restaurant.description}
              </motion.p>

              <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.18 }} className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button className="h-12 rounded-full bg-stone-950 px-6 text-white hover:bg-stone-800" asChild>
                  <Link href={localizedPath(locale, "/harbor-kitchen/contact")}>
                    {locale === "de" ? "Tisch reservieren" : locale === "it" ? "Prenota un tavolo" : "Reserve a table"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="h-12 rounded-full border-stone-300 bg-white px-6 text-stone-900 hover:bg-stone-100" asChild>
                  <Link href={localizedPath(locale, "/harbor-kitchen/menu")}>{locale === "de" ? "Menue entdecken" : locale === "it" ? "Scopri il menu" : "Discover menu"}</Link>
                </Button>
              </motion.div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {restaurant.heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.5rem] border border-stone-200 bg-white p-4 shadow-sm">
                    <p className="text-2xl font-semibold text-stone-950">{stat.value}</p>
                    <p className="mt-1 text-sm text-stone-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 22, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.08 }} className="relative">
              <div className="absolute -inset-10 rounded-[3rem] bg-amber-300/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.4rem] border border-stone-200 bg-white p-5 shadow-[0_30px_90px_rgba(120,53,15,0.08)]">
                <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-700/80">{locale === "de" ? "Reservierung" : locale === "it" ? "Prenotazione" : "Reservation"}</p>
                    <p className="mt-2 text-sm text-stone-600">{locale === "de" ? "Tisch bei Fensterlicht und ruhigem Service" : locale === "it" ? "Tavolo vicino alla finestra e servizio calmo" : "Window table, calm service, evening setting"}</p>
                  </div>
                  <div className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-600">7:30 PM</div>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="rounded-[1.7rem] border border-amber-200 bg-gradient-to-br from-stone-950 to-stone-800 p-6 text-white">
                    <p className="text-xs uppercase tracking-[0.25em] text-amber-100/80">{locale === "de" ? "Gericht des Abends" : locale === "it" ? "Piatto della sera" : "Evening plate"}</p>
                    <h2 className="mt-4 text-4xl font-semibold tracking-tight">Catch of the Day</h2>
                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/85">Pan-seared fish with mussel broth, baby leeks, charred potatoes, and citrus herb oil.</p>
                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      {restaurant.heroPills.map((item) => (
                        <span
                          key={item}
                          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-center text-xs font-medium leading-none text-amber-50 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:border-white/35 hover:bg-white/14"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.7rem] border border-stone-200 bg-[#fffaf2] p-5">
                      <p className="text-xs uppercase tracking-[0.25em] text-stone-500">{locale === "de" ? "Raum" : locale === "it" ? "Sala" : "Room"}</p>
                      <p className="mt-3 text-lg font-semibold text-stone-950">Soft lighting, natural textures, calm pacing.</p>
                      <p className="mt-2 text-sm leading-7 text-stone-600">{locale === "de" ? "Die Seite vermittelt Ruhe, nicht Lautstaerke." : locale === "it" ? "La pagina comunica calma, non rumore visivo." : "The page communicates calm, not visual noise."}</p>
                    </div>
                    <div className="rounded-[1.7rem] border border-stone-200 bg-white p-5">
                      <p className="text-xs uppercase tracking-[0.25em] text-stone-500">{locale === "de" ? "Info" : locale === "it" ? "Info" : "Info"}</p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        <div>
                          <p className="text-sm text-stone-500">{locale === "de" ? "Adresse" : locale === "it" ? "Indirizzo" : "Address"}</p>
                          <p className="mt-1 text-sm text-stone-950">{restaurant.address}</p>
                        </div>
                        <div>
                          <p className="text-sm text-stone-500">{locale === "de" ? "Kontakt" : locale === "it" ? "Contatto" : "Contact"}</p>
                          <p className="mt-1 text-sm text-stone-950">{restaurant.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="menu" className="border-b border-stone-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">{locale === "de" ? "Auszug" : locale === "it" ? "Estratto" : "Excerpt"}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">{locale === "de" ? "Ein paar Gerichte, sauber kuratiert." : locale === "it" ? "Alcuni piatti, curati con pulizia." : "A few dishes, cleanly curated."}</h2>
            </div>
            <Button variant="outline" className="hidden rounded-full border-stone-300 bg-white text-stone-900 hover:bg-stone-100 lg:inline-flex" asChild>
              <Link href={localizedPath(locale, "/harbor-kitchen/contact")}>{locale === "de" ? "Reservieren" : locale === "it" ? "Prenota" : "Reserve"}</Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {menu.menuItems.slice(0, 4).map((item) => (
              <div key={item.name} className="rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-lg font-semibold text-stone-950">{item.name}</p>
                  <p className="text-sm font-semibold text-amber-700">€{item.price}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-stone-600">{item.description}</p>
                {item.label ? <p className="mt-4 text-xs uppercase tracking-[0.25em] text-amber-700">{item.label}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">{locale === "de" ? "Erlebnis" : locale === "it" ? "Esperienza" : "Experience"}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {restaurant.highlights.slice(0, 4).map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-stone-200 bg-[#fffaf2] p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-semibold text-stone-950">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-stone-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm" id="contact">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">{locale === "de" ? "Oeffnungszeiten" : locale === "it" ? "Orari" : "Hours"}</p>
            <div className="mt-4 space-y-3">
              {restaurant.openingHours.map((item) => (
                <div key={item.day} className="flex items-center justify-between rounded-2xl border border-stone-200 bg-[#fffaf2] px-4 py-3">
                  <p className="text-sm font-medium text-stone-950">{item.day}</p>
                  <p className="text-sm text-stone-600">{item.hours}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500">{locale === "de" ? "Reservierung" : locale === "it" ? "Prenotazione" : "Reservation"}</p>
              <p className="mt-3 text-sm leading-7 text-stone-600">{locale === "de" ? "Klarer Kontakt, keine Ablenkung, direkter Weg zur Reservierung." : locale === "it" ? "Contatto chiaro, zero distrazioni, percorso diretto alla prenotazione." : "Clear contact, no distraction, direct path to booking."}</p>
              <div className="mt-5 flex gap-3">
                <Button className="rounded-full bg-stone-950 text-white hover:bg-stone-800" asChild>
                  <Link href={localizedPath(locale, "/harbor-kitchen/contact")}>{locale === "de" ? "Anfrage senden" : locale === "it" ? "Invia richiesta" : "Send inquiry"}</Link>
                </Button>
                <Button variant="outline" className="rounded-full border-stone-300 bg-white text-stone-900 hover:bg-stone-100" asChild>
                  <Link href={localizedPath(locale, "/harbor-kitchen/menu")}>{locale === "de" ? "Menue" : locale === "it" ? "Menu" : "Menu"}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RestaurantFooter locale={locale} />
    </main>
  )
}
