"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { getRestaurantMenuData, type MenuCategory } from "./data"
import type { Locale } from "@/lib/i18n"

export function MenuBrowser({ locale = "en" }: { locale?: Locale }) {
  const { menuCategories, menuItems } = getRestaurantMenuData(locale)
  const [active, setActive] = useState<"all" | MenuCategory>("all")

  const filtered = useMemo(
    () => menuItems.filter((item) => active === "all" || item.category === active),
    [active, menuItems],
  )

  return (
    <div className="grid gap-8 lg:grid-cols-[0.28fr_0.72fr]">
      <aside className="border border-[#c5a059]/20 bg-[#141414] p-5 shadow-sm lg:sticky lg:top-24 lg:self-start">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a059]">
          {locale === "de" ? "Kategorien" : locale === "it" ? "Categorie" : "Categories"}
        </p>
        <div className="mt-4 flex flex-wrap gap-3 lg:flex-col lg:gap-2">
          {menuCategories.map((category) => (
            <Button
              key={category.value}
              type="button"
              onClick={() => setActive(category.value)}
              className={`justify-start rounded-none px-4 py-3 text-left transition-colors ${
                active === category.value
                  ? "bg-[#c5a059] text-[#0a0a0a] hover:bg-[#d4b47a]"
                  : "border border-[#c5a059]/20 bg-[#0d0d0d] text-[#e8e2d6]/70 hover:bg-[#c5a059]/10 hover:text-white"
              }`}
              variant={active === category.value ? "default" : "outline"}
            >
              <span>{category.label}</span>
            </Button>
          ))}
        </div>
        <div className="mt-6 border border-[#c5a059]/20 bg-[#0d0d0d] p-4">
          <p className="text-sm font-semibold text-white">{locale === "de" ? "Hinweis" : locale === "it" ? "Nota" : "Note"}</p>
          <p className="mt-2 text-sm leading-7 text-[#e8e2d6]/50">
            {locale === "de"
              ? "Die Auswahl ist so gestaltet, dass sie sich wie eine echte Speisekarte liest und nicht wie ein generischer Rasterblock."
              : locale === "it"
                ? "La selezione e` pensata per sembrare un vero menu, non un blocco a griglia generico."
                : "The selection is arranged to feel like a real menu, not a generic grid block."}
          </p>
        </div>
      </aside>

      <div className="space-y-6">
        <div className="border border-[#c5a059]/20 bg-[#141414] p-6 shadow-sm">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a059]">
                {locale === "de" ? "Saisonale Gerichte" : locale === "it" ? "Piatti stagionali" : "Seasonal dishes"}
              </p>
              <h2 className="mt-3 font-serif text-2xl font-light text-white">
                {locale === "de"
                  ? "Eine Speisekarte mit klarem Rhythmus, Premium-Feeling und einfacher Navigation."
                  : locale === "it"
                    ? "Un menu con ritmo chiaro, feeling premium e navigazione semplice."
                    : "A menu with clear rhythm, premium feel, and simple navigation."}
              </h2>
            </div>
            <div className="hidden border border-[#c5a059]/20 bg-[#0d0d0d] px-4 py-2 text-sm text-[#e8e2d6]/50 md:block">
              {filtered.length} {locale === "de" ? "Gerichte" : locale === "it" ? "piatti" : "dishes"}
            </div>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          {filtered.map((item, index) => (
            <article
              key={`${item.category}-${item.name}`}
              className={`border p-5 shadow-sm ${index % 3 === 0 ? "border-[#c5a059]/30 bg-[#141414]" : "border-[#c5a059]/15 bg-white/[0.03]"}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap gap-2">
                    {item.label ? (
                      <span className="rounded-full bg-[#c5a059] px-3 py-1 text-xs font-medium text-[#0a0a0a]">{item.label}</span>
                    ) : null}
                    <span className="rounded-full bg-[#e8e2d6]/10 px-3 py-1 text-xs font-medium text-[#e8e2d6]/60">
                      {menuCategories.find((category) => category.value === item.category)?.label}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-light text-white">{item.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#e8e2d6]/55">{item.description}</p>
                </div>
                <div className="border border-[#c5a059]/20 bg-[#0a0a0a] px-4 py-3 text-lg font-semibold text-[#c5a059] shadow-sm">
                  €{item.price}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
