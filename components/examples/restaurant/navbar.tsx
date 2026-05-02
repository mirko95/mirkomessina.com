"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { localizedPath, type Locale } from "@/lib/i18n"
import { ExampleLocaleSwitcher } from "@/components/examples/example-locale-switcher"
import { getRestaurantData } from "./data"

export function RestaurantNavbar({ locale = "en" }: { locale?: Locale }) {
  const [open, setOpen] = useState(false)
  const restaurant = getRestaurantData(locale)
  const links = [
    { href: localizedPath(locale, "/a-tavola#menu"), label: locale === "de" ? "Menue" : locale === "it" ? "Menu" : "Menu" },
    { href: localizedPath(locale, "/a-tavola#experience"), label: locale === "de" ? "Erlebnis" : locale === "it" ? "Esperienza" : "Experience" },
    { href: localizedPath(locale, "/a-tavola#gallery"), label: locale === "de" ? "Galerie" : locale === "it" ? "Galleria" : "Gallery" },
    { href: localizedPath(locale, "/a-tavola/contact"), label: locale === "de" ? "Reservierungen" : locale === "it" ? "Prenotazioni" : "Reservations" },
  ]

  return (
    <>
    <ExampleLocaleSwitcher locale={locale} path="/a-tavola" />
    <header className="sticky top-0 z-50 border-b border-[#c5a059]/15 bg-[#0a0a0a]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href={localizedPath(locale, "/a-tavola#top")} className="font-serif text-2xl font-light uppercase tracking-[0.22em] text-[#c5a059]">
          {restaurant.name}
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-xs font-medium uppercase tracking-widest text-[#e8e2d6]/70 transition-colors hover:text-[#c5a059]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button className="rounded-none bg-[#c5a059] px-7 text-xs font-bold uppercase tracking-widest text-[#0a0a0a] hover:bg-[#d4b47a]" asChild>
            <Link href={localizedPath(locale, "/a-tavola/contact")}>{locale === "de" ? "Tisch buchen" : locale === "it" ? "Prenota" : "Book a table"}</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="border border-[#c5a059]/30 p-2 text-[#e8e2d6] md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#c5a059]/15 bg-[#0d0d0d] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 font-serif text-xl text-[#e8e2d6] hover:text-[#c5a059]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-3">
              <Button className="flex-1 rounded-none bg-[#c5a059] text-[#0a0a0a] hover:bg-[#d4b47a]" asChild>
                <Link href={localizedPath(locale, "/a-tavola/contact")}>{locale === "de" ? "Reservieren" : locale === "it" ? "Prenota" : "Reserve"}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  )
}
