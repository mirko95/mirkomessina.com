import type { Metadata } from "next"
import { headers } from "next/headers"
import { ServicesPage } from "@/components/pages/services-page"
import { createPageMetadata } from "@/lib/seo"
import { getHomeCopy } from "@/lib/site-copy"
import { localizedPath, resolveLocale } from "@/lib/i18n"

export async function generateMetadata(): Promise<Metadata> {
  const locale = resolveLocale((await headers()).get("x-locale"))
  const copy = getHomeCopy(locale)

  return createPageMetadata({
    title: copy.services.title,
    description: copy.services.description,
    path: localizedPath(locale, "/services"),
  })
}

export default async function ServicesRoute() {
  const locale = resolveLocale((await headers()).get("x-locale"))
  return <ServicesPage locale={locale} />
}
