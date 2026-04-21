"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { localizedPath, type Locale } from "@/lib/i18n"
import { getRestaurantData } from "./data"

export function RestaurantNavbar({ locale = "en" }: { locale?: Locale }) {
  const [open, setOpen] = useState(false)
  const restaurant = getRestaurantData(locale)
  const links = [
    { href: localizedPath(locale, "/harbor-kitchen#top"), label: locale === "de" ? "Start" : locale === "it" ? "Home" : "Home" },
    { href: localizedPath(locale, "/harbor-kitchen#menu"), label: locale === "de" ? "Menue" : locale === "it" ? "Menu" : "Menu" },
    { href: localizedPath(locale, "/harbor-kitchen#story"), label: locale === "de" ? "Erlebnis" : locale === "it" ? "Esperienza" : "Story" },
    { href: localizedPath(locale, "/harbor-kitchen#contact"), label: locale === "de" ? "Kontakt" : locale === "it" ? "Contatti" : "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#f7f1e8]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={localizedPath(locale, "/harbor-kitchen#top")} className="text-lg font-semibold tracking-tight text-stone-950">
          {restaurant.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-stone-600 transition-colors hover:text-stone-950">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" className="border-stone-300 bg-white text-stone-900 hover:bg-stone-100" asChild>
            <Link href={localizedPath(locale, "/harbor-kitchen/contact")}>{locale === "de" ? "Reservieren" : locale === "it" ? "Prenota" : "Reserve"}</Link>
          </Button>
          <Button className="bg-stone-950 text-white hover:bg-stone-800" asChild>
            <Link href={localizedPath(locale, "/harbor-kitchen/menu")}>{locale === "de" ? "Menue" : locale === "it" ? "Menu" : "Menu"}</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-stone-300 p-2 text-stone-900 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-stone-200 bg-[#f7f1e8] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-stone-700 hover:bg-white hover:text-stone-950"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-3">
              <Button variant="outline" className="flex-1 border-stone-300 bg-white text-stone-900" asChild>
                <Link href={localizedPath(locale, "/harbor-kitchen/contact")}>{locale === "de" ? "Reservieren" : locale === "it" ? "Prenota" : "Reserve"}</Link>
              </Button>
              <Button className="flex-1 bg-stone-950 text-white hover:bg-stone-800" asChild>
                <Link href={localizedPath(locale, "/harbor-kitchen/menu")}>{locale === "de" ? "Menue" : locale === "it" ? "Menu" : "Menu"}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
