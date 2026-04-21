import type { Metadata } from "next"
import { headers } from "next/headers"
import { HomePage } from "@/components/home-page"
import { createPageMetadata } from "@/lib/seo"
import { getSiteMeta } from "@/lib/site-copy"
import { resolveLocale } from "@/lib/i18n"

export async function generateMetadata(): Promise<Metadata> {
  const locale = resolveLocale((await headers()).get("x-locale"))
  const meta = getSiteMeta(locale)

  return createPageMetadata({
    title: meta.title,
    description: meta.description,
    path: "/",
  })
}

export default async function Home() {
  const locale = resolveLocale((await headers()).get("x-locale"))
  return <HomePage locale={locale} />
}
