"use client"

import { motion } from "framer-motion"
import { MapPinned, Phone, Mail, Navigation } from "lucide-react"
import { RestaurantNavbar } from "./navbar"
import { RestaurantFooter } from "./footer"
import { getRestaurantData, getRestaurantMenuData } from "./data"
import { ContactForm } from "./contact-form"
import type { Locale } from "@/lib/i18n"

export function RestaurantContactPage({ locale = "en" }: { locale?: Locale }) {
  const restaurant = getRestaurantData(locale)
  const { contactHighlights } = getRestaurantMenuData(locale)

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e8e2d6]">
      <RestaurantNavbar locale={locale} />
      <section className="relative overflow-hidden py-16 lg:py-24">
        <img src={restaurant.images.table} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/95 via-[#0a0a0a]/90 to-[#0a0a0a]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c5a059]">{locale === "de" ? "Reservierungen" : locale === "it" ? "Prenotazioni" : "Reservations"}</p>
              <h1 className="mt-4 max-w-xl text-balance font-serif text-5xl font-light tracking-tight text-white sm:text-7xl">
                {locale === "de" ? "Buchen Sie Ihren Abend bei A Tavola." : locale === "it" ? "Prenota la tua serata da A Tavola." : "Book your evening at A Tavola."}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#e8e2d6]/60 text-pretty">
                {locale === "de"
                  ? "Dieses Layout stellt die Kontaktaufnahme wie einen gastfreundlichen Concierge-Moment dar: klare Kontaktinfos, direkte Reservierung und eine ruhige Kartenansicht."
                  : locale === "it"
                    ? "Questo layout presenta il contatto come un momento concierge: informazioni chiare, prenotazione diretta e una vista mappa elegante."
                    : "This layout treats contact like a concierge moment: clear details, direct reservation flow, and a calm map view."}
              </p>

              <div className="mt-10 grid gap-4">
                <div className="border border-[#c5a059]/20 bg-[#141414] p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#c5a059]" />
                    <div>
                      <p className="text-sm text-[#e8e2d6]/50">{locale === "de" ? "Telefon" : locale === "it" ? "Telefono" : "Phone"}</p>
                      <p className="font-medium text-white">{restaurant.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="border border-[#c5a059]/20 bg-[#141414] p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#c5a059]" />
                    <div>
                      <p className="text-sm text-[#e8e2d6]/50">{locale === "de" ? "E-Mail" : locale === "it" ? "Email" : "Email"}</p>
                      <p className="font-medium text-white">{restaurant.email}</p>
                    </div>
                  </div>
                </div>
                <div className="border border-[#c5a059]/20 bg-[#141414] p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Navigation className="h-5 w-5 text-[#c5a059]" />
                    <div>
                      <p className="text-sm text-[#e8e2d6]/50">{locale === "de" ? "Adresse" : locale === "it" ? "Indirizzo" : "Address"}</p>
                      <p className="font-medium text-white">{restaurant.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              <div className="border border-[#c5a059]/20 bg-[#141414] p-5 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-3">
                  {contactHighlights.map((item) => (
                    <div key={item.title} className="border border-[#c5a059]/15 bg-[#0d0d0d] p-5">
                      <item.icon className="h-5 w-5 text-[#c5a059]" />
                      <p className="mt-4 font-serif text-lg text-white">{item.title}</p>
                      <ul className="mt-3 space-y-1 text-sm leading-6 text-[#e8e2d6]/55">
                        {item.lines.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <ContactForm locale={locale} />

              <div className="overflow-hidden border border-[#c5a059]/20 bg-[#141414] shadow-sm">
                <div className="flex items-center gap-3 border-b border-[#c5a059]/20 px-5 py-4">
                  <MapPinned className="h-5 w-5 text-[#c5a059]" />
                  <p className="font-medium text-white">
                    {locale === "de" ? "Auf Google Maps finden" : locale === "it" ? "Trova su Google Maps" : "Find us on Google Maps"}
                  </p>
                </div>
                <div className="grid gap-4 p-5 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="bg-[#0d0d0d] p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c5a059]">{locale === "de" ? "Besuch planen" : locale === "it" ? "Pianifica la visita" : "Plan your visit"}</p>
                    <div className="mt-5 space-y-3 text-sm leading-7 text-[#e8e2d6]/55">
                      <p>{locale === "de" ? "Parken in der Naehe, gute Anbindung und ruhige Ankunftszeiten am Abend." : locale === "it" ? "Parcheggio vicino, buona connessione con i mezzi e arrivo serale tranquillo." : "Nearby parking, easy transit access, and calm arrival times in the evening."}</p>
                      <p>{locale === "de" ? "Ideal fuer Dinner, private Feiern und Business-Gaeste." : locale === "it" ? "Ideale per cene, celebrazioni private e ospiti business." : "Ideal for dinner, private celebrations, and business guests."}</p>
                    </div>
                  </div>
                  <iframe
                    title="Harbor Kitchen map"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(restaurant.mapsQuery)}&output=embed`}
                    className="h-80 w-full"
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
