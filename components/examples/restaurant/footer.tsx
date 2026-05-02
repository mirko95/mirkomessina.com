"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { localizedPath, type Locale } from "@/lib/i18n"
import { getRestaurantData } from "./data"

export function RestaurantFooter({ locale = "en" }: { locale?: Locale }) {
  const restaurant = getRestaurantData(locale)
  return (
    <footer className="border-t border-[#e8e2d6]/5 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-serif text-3xl font-light italic text-[#c5a059]">{restaurant.name}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#e8e2d6]/50">{restaurant.description}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="rounded-none border-[#c5a059] bg-transparent text-[#c5a059] hover:bg-[#c5a059] hover:text-[#0a0a0a]" asChild>
            <Link href={localizedPath(locale, "/a-tavola/contact")}>{locale === "de" ? "Reservieren" : locale === "it" ? "Prenota" : "Reserve"}</Link>
          </Button>
          <Button className="rounded-none bg-[#c5a059] text-[#0a0a0a] hover:bg-[#d4b47a]" asChild>
            <Link href={localizedPath(locale, "/a-tavola/menu")}>{locale === "de" ? "Menue ansehen" : locale === "it" ? "Vedi menu" : "View menu"}</Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
