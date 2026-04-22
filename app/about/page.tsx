import type { Metadata } from "next"
import { headers } from "next/headers"
import { AboutPage } from "@/components/pages/about-page"
import { createPageMetadata } from "@/lib/seo"
import { getHomeCopy } from "@/lib/site-copy"
import { localizedPath, resolveLocale } from "@/lib/i18n"

export async function generateMetadata(): Promise<Metadata> {
  const locale = resolveLocale((await headers()).get("x-locale"))
  const copy = getHomeCopy(locale)

  return createPageMetadata({
    title: copy.about.title,
    description: copy.about.description[0],
    path: localizedPath(locale, "/about"),
  })
}

export default async function AboutRoute() {
  const locale = resolveLocale((await headers()).get("x-locale"))
  return <AboutPage locale={locale} />
}
