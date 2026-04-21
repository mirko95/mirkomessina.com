"use client"

import { motion } from "framer-motion"
import { MapPinned, Phone, Mail, Navigation, Sparkles, Clock3, MenuSquare, Wine } from "lucide-react"
import { RestaurantNavbar } from "./navbar"
import { RestaurantFooter } from "./footer"
import { getRestaurantData, getRestaurantMenuData } from "./data"
import { ContactForm } from "./contact-form"
import type { Locale } from "@/lib/i18n"

export function RestaurantContactPage({ locale = "en" }: { locale?: Locale }) {
  const restaurant = getRestaurantData(locale)
  const { contactHighlights } = getRestaurantMenuData(locale)

  return (
    <main className="min-h-screen bg-[#f8f3ea] text-stone-900">
      <RestaurantNavbar locale={locale} />
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(180,83,9,0.14),transparent_35%),linear-gradient(180deg,#fbf7f0_0%,#f4ecdf_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">{locale === "de" ? "Kontakt" : locale === "it" ? "Contatti" : "Contact"}</p>
              <h1 className="mt-4 max-w-xl text-balance font-serif text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl">
                {locale === "de" ? "Reservierungen, private Abende und schnelle Rueckmeldungen." : locale === "it" ? "Prenotazioni, serate private e risposte rapide." : "Reservations, private dinners, and quick responses."}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600 text-pretty">
                {locale === "de"
                  ? "Dieses Layout stellt die Kontaktaufnahme wie einen gastfreundlichen Concierge-Moment dar: klare Kontaktinfos, direkte Reservierung und eine ruhige Kartenansicht."
                  : locale === "it"
                    ? "Questo layout presenta il contatto come un momento concierge: informazioni chiare, prenotazione diretta e una vista mappa elegante."
                    : "This layout treats contact like a concierge moment: clear details, direct reservation flow, and a calm map view."}
              </p>

              <div className="mt-10 grid gap-4">
                <div className="rounded-[1.6rem] border border-stone-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-amber-700" />
                    <div>
                      <p className="text-sm text-stone-500">{locale === "de" ? "Telefon" : locale === "it" ? "Telefono" : "Phone"}</p>
                      <p className="font-medium text-stone-950">{restaurant.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[1.6rem] border border-stone-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-amber-700" />
                    <div>
                      <p className="text-sm text-stone-500">{locale === "de" ? "E-Mail" : locale === "it" ? "Email" : "Email"}</p>
                      <p className="font-medium text-stone-950">{restaurant.email}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[1.6rem] border border-stone-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Navigation className="h-5 w-5 text-amber-700" />
                    <div>
                      <p className="text-sm text-stone-500">{locale === "de" ? "Adresse" : locale === "it" ? "Indirizzo" : "Address"}</p>
                      <p className="font-medium text-stone-950">{restaurant.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-3">
                  {contactHighlights.map((item) => (
                    <div key={item.title} className="rounded-[1.4rem] border border-stone-200 bg-stone-50 p-5">
                      <item.icon className="h-5 w-5 text-amber-700" />
                      <p className="mt-4 font-semibold text-stone-950">{item.title}</p>
                      <ul className="mt-3 space-y-1 text-sm leading-6 text-stone-600">
                        {item.lines.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <ContactForm locale={locale} />

              <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
                <div className="flex items-center gap-3 border-b border-stone-200 px-5 py-4">
                  <MapPinned className="h-5 w-5 text-amber-700" />
                  <p className="font-medium text-stone-950">
                    {locale === "de" ? "Auf Google Maps finden" : locale === "it" ? "Trova su Google Maps" : "Find us on Google Maps"}
                  </p>
                </div>
                <div className="grid gap-4 p-5 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-[1.5rem] bg-[#fff8ef] p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">{locale === "de" ? "Besuch planen" : locale === "it" ? "Pianifica la visita" : "Plan your visit"}</p>
                    <div className="mt-5 space-y-3 text-sm leading-7 text-stone-600">
                      <p>{locale === "de" ? "Parken in der Naehe, gute Anbindung und ruhige Ankunftszeiten am Abend." : locale === "it" ? "Parcheggio vicino, buona connessione con i mezzi e arrivo serale tranquillo." : "Nearby parking, easy transit access, and calm arrival times in the evening."}</p>
                      <p>{locale === "de" ? "Ideal fuer Dinner, private Feiern und Business-Gaeste." : locale === "it" ? "Ideale per cene, celebrazioni private e ospiti business." : "Ideal for dinner, private celebrations, and business guests."}</p>
                    </div>
                  </div>
                  <iframe
                    title="Harbor Kitchen map"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(restaurant.mapsQuery)}&output=embed`}
                    className="h-80 w-full rounded-[1.5rem]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RestaurantFooter locale={locale} />
    </main>
  )
}
