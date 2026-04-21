"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getSaasData } from "./data"
import type { Locale } from "@/lib/i18n"

export function SaasFooter({ locale = "en" }: { locale?: Locale }) {
  const data = getSaasData(locale)

  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">AetherIQ</p>
          <p className="mt-2 max-w-md text-sm leading-7 text-slate-400">{data.footer.description}</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          {data.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <Button className="bg-white text-slate-950 hover:bg-slate-200">{data.footer.cta}</Button>
      </div>
    </footer>
  )
}
