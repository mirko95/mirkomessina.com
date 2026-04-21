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
      <aside className="rounded-[2rem] border border-stone-200 bg-[#fcfaf5] p-5 shadow-sm lg:sticky lg:top-24 lg:self-start">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
          {locale === "de" ? "Kategorien" : locale === "it" ? "Categorie" : "Categories"}
        </p>
        <div className="mt-4 flex flex-wrap gap-3 lg:flex-col lg:gap-2">
          {menuCategories.map((category) => (
            <Button
              key={category.value}
              type="button"
              onClick={() => setActive(category.value)}
              className={`justify-start rounded-2xl px-4 py-3 text-left transition-colors ${
                active === category.value
                  ? "bg-stone-950 text-white hover:bg-stone-800"
                  : "border border-stone-200 bg-white text-stone-700 hover:bg-stone-100"
              }`}
              variant={active === category.value ? "default" : "outline"}
            >
              <span>{category.label}</span>
            </Button>
          ))}
        </div>
        <div className="mt-6 rounded-[1.5rem] border border-stone-200 bg-white p-4">
          <p className="text-sm font-semibold text-stone-950">{locale === "de" ? "Hinweis" : locale === "it" ? "Nota" : "Note"}</p>
          <p className="mt-2 text-sm leading-7 text-stone-600">
            {locale === "de"
              ? "Die Auswahl ist so gestaltet, dass sie sich wie eine echte Speisekarte liest und nicht wie ein generischer Rasterblock."
              : locale === "it"
                ? "La selezione e` pensata per sembrare un vero menu, non un blocco a griglia generico."
                : "The selection is arranged to feel like a real menu, not a generic grid block."}
          </p>
        </div>
      </aside>

      <div className="space-y-6">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                {locale === "de" ? "Saisonale Gerichte" : locale === "it" ? "Piatti stagionali" : "Seasonal dishes"}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-stone-950">
                {locale === "de"
                  ? "Eine Speisekarte mit klarem Rhythmus, Premium-Feeling und einfacher Navigation."
                  : locale === "it"
                    ? "Un menu con ritmo chiaro, feeling premium e navigazione semplice."
                    : "A menu with clear rhythm, premium feel, and simple navigation."}
              </h2>
            </div>
            <div className="hidden rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm text-stone-500 md:block">
              {filtered.length} {locale === "de" ? "Gerichte" : locale === "it" ? "piatti" : "dishes"}
            </div>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          {filtered.map((item, index) => (
            <article
              key={`${item.category}-${item.name}`}
              className={`rounded-[1.8rem] border p-5 shadow-sm ${index % 3 === 0 ? "border-amber-200 bg-[linear-gradient(180deg,#ffffff_0%,#fff8ef_100%)]" : index % 3 === 1 ? "border-stone-200 bg-white" : "border-stone-200 bg-stone-50"}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap gap-2">
                    {item.label ? (
                      <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900">{item.label}</span>
                    ) : null}
                    <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                      {menuCategories.find((category) => category.value === item.category)?.label}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-stone-950">{item.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{item.description}</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-lg font-semibold text-stone-950 shadow-sm">
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
