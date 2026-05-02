import type { Metadata } from "next"
import { headers } from "next/headers"
import { notFound } from "next/navigation"
import { RestaurantContactPage } from "@/components/examples/restaurant/contact-page"
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
    title: locale === "de" ? "Kontakt | A Tavola" : locale === "it" ? "Contatti | A Tavola" : "Contact | A Tavola",
    description:
      locale === "de"
        ? "Kontaktseite mit validiertem Reservierungsformular, Oeffnungszeiten und Google-Maps-Einbettung."
        : locale === "it"
          ? "Pagina contatti con form di prenotazione validato, orari di apertura e mappa Google incorporata."
          : "Contact page with validated reservation form, opening hours, and Google Maps embed.",
  }
}

export default async function RestaurantContactRoute({ params }: ExamplePageProps) {
  const { slug } = await params
  const locale = resolveLocale((await headers()).get("x-locale"))

  if (slug !== "a-tavola") {
    notFound()
  }

  return <RestaurantContactPage locale={locale} />
}
