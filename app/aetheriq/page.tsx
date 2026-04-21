import type { Metadata } from "next"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { createPageMetadata } from "@/lib/seo"
import { localizedPath, resolveLocale } from "@/lib/i18n"

export async function generateMetadata(): Promise<Metadata> {
  const locale = resolveLocale((await headers()).get("x-locale"))
  const titles = {
    en: "AetherIQ | Premium AI SaaS Landing Page",
    it: "AetherIQ | Landing page SaaS AI premium",
    de: "AetherIQ | Premium KI-SaaS-Landingpage",
  } as const
  const descriptions = {
    en: "A modern SaaS landing page with hero, features, dashboard view, pricing, testimonials, FAQ, and footer.",
    it: "Una landing page SaaS moderna con hero, funzioni, vista dashboard, prezzi, testimonianze, FAQ e footer.",
    de: "Eine moderne SaaS-Landingpage mit Hero, Features, Dashboard-Ansicht, Preisen, Referenzen, FAQ und Footer.",
  } as const

  return createPageMetadata({
    title: titles[locale],
    description: descriptions[locale],
    path: localizedPath(locale, "/aetheriq"),
  })
}

export default async function AetherIqRoute() {
  const locale = resolveLocale((await headers()).get("x-locale"))
  redirect(localizedPath(locale, "/aetheriq"))
}
