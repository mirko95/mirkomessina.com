import type { Metadata } from "next"
import { headers } from "next/headers"
import { ProcessPage } from "@/components/pages/process-page"
import { createPageMetadata } from "@/lib/seo"
import { getHomeCopy } from "@/lib/site-copy"
import { localizedPath, resolveLocale } from "@/lib/i18n"

export async function generateMetadata(): Promise<Metadata> {
  const locale = resolveLocale((await headers()).get("x-locale"))
  const copy = getHomeCopy(locale)

  return createPageMetadata({
    title: copy.process.title,
    description: copy.process.description,
    path: localizedPath(locale, "/process"),
  })
}

export default async function ProcessRoute() {
  const locale = resolveLocale((await headers()).get("x-locale"))
  return <ProcessPage locale={locale} />
}
