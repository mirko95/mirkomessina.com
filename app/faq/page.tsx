import type { Metadata } from "next"
import { headers } from "next/headers"
import { FaqPage } from "@/components/pages/faq-page"
import { createPageMetadata } from "@/lib/seo"
import { getHomeCopy } from "@/lib/site-copy"
import { localizedPath, resolveLocale } from "@/lib/i18n"

export async function generateMetadata(): Promise<Metadata> {
  const locale = resolveLocale((await headers()).get("x-locale"))
  const copy = getHomeCopy(locale)

  return createPageMetadata({
    title: copy.faq.title,
    description: copy.faq.description,
    path: localizedPath(locale, "/faq"),
  })
}

export default async function FaqRoute() {
  const locale = resolveLocale((await headers()).get("x-locale"))
  return <FaqPage locale={locale} />
}
