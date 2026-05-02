import type { Metadata } from "next"
import { headers } from "next/headers"
import { notFound } from "next/navigation"
import { RestaurantAboutPage } from "@/components/examples/restaurant/about-page"
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

  if (slug !== "a-tavola") {
    return {}
  }

  return {
    title: locale === "de" ? "Ueber uns | A Tavola" : locale === "it" ? "Chi siamo | A Tavola" : "About | A Tavola",
    description:
      locale === "de"
        ? "Ueber-uns-Seite fuer eine Premium-Restaurant-Website mit saisonaler Beschaffung und warmer Gastfreundschaft."
        : locale === "it"
          ? "Pagina about per un sito ristorante premium con ingredienti stagionali e ospitalita` calorosa."
          : "About page for a premium restaurant website with seasonal sourcing and warm hospitality.",
  }
}

export default async function RestaurantAboutRoute({ params }: ExamplePageProps) {
  const { slug } = await params
  const locale = resolveLocale((await headers()).get("x-locale"))

  if (slug !== "a-tavola") {
    notFound()
  }

  return <RestaurantAboutPage locale={locale} />
}
