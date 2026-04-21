"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { localizedPath, type Locale } from "@/lib/i18n"
import { getRestaurantData } from "./data"

export function RestaurantFooter({ locale = "en" }: { locale?: Locale }) {
  const restaurant = getRestaurantData(locale)
  return (
    <footer className="border-t border-stone-200 bg-[#f7f1e8]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold text-stone-950">{restaurant.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-7 text-stone-600">{restaurant.description}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="border-stone-300 bg-white text-stone-900 hover:bg-stone-100" asChild>
            <Link href={localizedPath(locale, "/harbor-kitchen/contact")}>{locale === "de" ? "Reservieren" : locale === "it" ? "Prenota" : "Reserve"}</Link>
          </Button>
          <Button className="bg-stone-950 text-white hover:bg-stone-800" asChild>
            <Link href={localizedPath(locale, "/harbor-kitchen/menu")}>{locale === "de" ? "Menue ansehen" : locale === "it" ? "Vedi menu" : "View menu"}</Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
