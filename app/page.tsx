import type { Metadata } from "next"
import { headers } from "next/headers"
import { HomePage } from "@/components/home-page"
import { JsonLd } from "@/components/seo/json-ld"
import { createPageMetadata, getServiceJsonLd, getWebPageJsonLd } from "@/lib/seo"
import { getHomeCopy, getSiteMeta } from "@/lib/site-copy"
import { localizedPath, resolveLocale } from "@/lib/i18n"

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
  const meta = getSiteMeta(locale)
  const copy = getHomeCopy(locale)
  const path = localizedPath(locale, "/")

  return (
    <>
      <JsonLd data={getWebPageJsonLd({ locale, path, name: meta.title, description: meta.description })} />
      <JsonLd
        data={getServiceJsonLd({
          locale,
          path,
          name: copy.services.title,
          description: copy.services.description,
          services: copy.services.items,
        })}
      />
      <HomePage locale={locale} />
    </>
  )
}
