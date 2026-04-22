import type { Metadata } from "next"
import { headers } from "next/headers"
import { ContactPage } from "@/components/pages/contact-page"
import { createPageMetadata } from "@/lib/seo"
import { getHomeCopy } from "@/lib/site-copy"
import { localizedPath, resolveLocale } from "@/lib/i18n"

export async function generateMetadata(): Promise<Metadata> {
  const locale = resolveLocale((await headers()).get("x-locale"))
  const copy = getHomeCopy(locale)

  return createPageMetadata({
    title: copy.contact.title,
    description: copy.contact.description,
    path: localizedPath(locale, "/contact"),
  })
}

export default async function ContactRoute() {
  const locale = resolveLocale((await headers()).get("x-locale"))
  return <ContactPage locale={locale} />
}
