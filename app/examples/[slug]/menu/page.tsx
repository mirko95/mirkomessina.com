import type { Metadata } from "next"
import { headers } from "next/headers"
import { notFound } from "next/navigation"
import { RestaurantMenuPage } from "@/components/examples/restaurant/menu-page"
import { getExampleSite } from "@/lib/examples"
import { resolveLocale } from "@/lib/i18n"

type ExamplePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return [{ slug: "a-tavola" }]
}

export async function generateMetadata({ params }: ExamplePageProps): Promise<Metadata> {
  const { slug } = await params
  const locale = resolveLocale((await headers()).get("x-locale"))
  const site = getExampleSite(slug)

  if (slug !== "a-tavola" || !site) {
    return {}
  }

  return {
    title: locale === "de" ? "Menue | A Tavola" : locale === "it" ? "Menu | A Tavola" : "Menu | A Tavola",
    description:
      locale === "de"
        ? "Saisonale Menue-Seite mit filterbaren Kategorien und hochwertiger Food-Praesentation."
        : locale === "it"
          ? "Pagina menu stagionale con categorie filtrabili e presentazione premium dei piatti."
          : "Seasonal menu page with filterable categories and premium food presentation.",
  }
}

export default async function RestaurantMenuRoute({ params }: ExamplePageProps) {
  const { slug } = await params
  const locale = resolveLocale((await headers()).get("x-locale"))

  if (slug !== "a-tavola") {
    notFound()
  }

  return <RestaurantMenuPage locale={locale} />
}
