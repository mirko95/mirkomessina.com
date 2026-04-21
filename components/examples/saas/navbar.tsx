"use client"

import { Button } from "@/components/ui/button"
import { getSaasData } from "./data"
import type { Locale } from "@/lib/i18n"

export function SaasNavbar({ locale = "en" }: { locale?: Locale }) {
  const data = getSaasData(locale)

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-cyan-300 text-slate-950 font-bold">
            A
          </div>
          <div>
            <p className="text-sm font-semibold text-white">AetherIQ</p>
            <p className="text-xs text-slate-400">{locale === "it" ? "Analytics AI per team prodotto" : locale === "de" ? "KI-Analytics fuer Produktteams" : "AI analytics for product teams"}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {data.navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <Button onClick={() => scrollToSection("#pricing")} className="bg-white text-slate-950 hover:bg-slate-200">
          {data.hero.primaryCta}
        </Button>
      </div>
    </header>
  )
}
