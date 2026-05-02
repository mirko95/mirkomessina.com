import type { Metadata } from "next"
import type { ReactNode } from "react"
import { notFound, redirect } from "next/navigation"
import { HomePage } from "@/components/home-page"
import { ExamplesIndexPage, createExamplesIndexMetadata } from "@/components/examples-index-page"
import { PrivacyPolicyPage, createPrivacyMetadata } from "@/components/legal/privacy-page"
import { ImpressumPage, createImpressumMetadata } from "@/components/legal/impressum-page"
import { ServicesPage } from "@/components/pages/services-page"
import { ProcessPage } from "@/components/pages/process-page"
import { AboutPage } from "@/components/pages/about-page"
import { FaqPage } from "@/components/pages/faq-page"
import { ContactPage } from "@/components/pages/contact-page"
import { JsonLd } from "@/components/seo/json-ld"
import { createPageMetadata, getCreativeWorkJsonLd, getServiceJsonLd, getWebPageJsonLd } from "@/lib/seo"
import { getHomeCopy } from "@/lib/site-copy"
import { getSiteMeta } from "@/lib/site-copy"
import { localizedPath, resolveLocale, type Locale } from "@/lib/i18n"
import { getLocalizedExampleSite, resolveExampleSlug } from "@/lib/examples"
import { ReplyPilotPage } from "@/components/examples/eterna-aesthetic/site-page"
import { FlowForgePage } from "@/components/examples/velora/site-page"
import { AureliaPage } from "@/components/examples/aurelia-interiors/site-page"
import { ModelWatchPage } from "@/components/examples/blog/site-page"
import { AffectSensePage } from "@/components/examples/affect-sense/site-page"
import { RestaurantHomePage } from "@/components/examples/restaurant/home"
import { RestaurantMenuPage } from "@/components/examples/restaurant/menu-page"
import { RestaurantAboutPage } from "@/components/examples/restaurant/about-page"
import { RestaurantContactPage } from "@/components/examples/restaurant/contact-page"

type Params = Promise<{
  locale: string
  slug?: string[]
}>

function getPathSlug(slug?: string[]) {
  return slug?.join("/") ?? ""
}

function HomeStructuredData({ locale }: { locale: Locale }) {
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
    </>
  )
}

function withExampleStructuredData(locale: Locale, slug: string, children: ReactNode) {
  const normalizedSlug = slug.startsWith("a-tavola/") ? "a-tavola" : resolveExampleSlug(slug)
  const site = getLocalizedExampleSite(locale, normalizedSlug)

  if (!site) {
    return children
  }

  return (
    <>
      <JsonLd
        data={getCreativeWorkJsonLd({
          locale,
          path: localizedPath(locale, `/${slug}`),
          name: site.name,
          description: site.summary,
          category: site.category,
          keywords: site.highlights,
        })}
      />
      {children}
    </>
  )
}

function getLocalizedExampleMetadata(locale: Locale, slug: string): Metadata {
  const normalizedSlug = slug.startsWith("a-tavola/") ? "a-tavola" : resolveExampleSlug(slug)
  const site = getLocalizedExampleSite(locale, normalizedSlug)
  if (!site) {
    return createPageMetadata({
      title: "Portfolio page",
      description: "Client-ready portfolio page.",
      path: localizedPath(locale, `/${slug}`),
    })
  }

  return createPageMetadata({
    title: site.name,
    description: site.summary,
    path: localizedPath(locale, `/${slug}`),
  })
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const resolved = await params
  const locale = resolveLocale(resolved.locale)
  const slug = getPathSlug(resolved.slug)

  if (!slug) {
    const meta = getSiteMeta(locale)
    return createPageMetadata({
      title: meta.title,
      description: meta.description,
      path: localizedPath(locale, "/"),
    })
  }

  if (slug === "examples") {
    return createExamplesIndexMetadata(locale)
  }

  if (slug === "privacy-policy") {
    return createPrivacyMetadata(locale)
  }

  if (slug === "impressum") {
    return createImpressumMetadata(locale)
  }

  if (slug === "services") {
    const copy = getHomeCopy(locale)
    return createPageMetadata({
      title: copy.services.title,
      description: copy.services.description,
      path: localizedPath(locale, "/services"),
    })
  }

  if (slug === "process") {
    const copy = getHomeCopy(locale)
    return createPageMetadata({
      title: copy.process.title,
      description: copy.process.description,
      path: localizedPath(locale, "/process"),
    })
  }

  if (slug === "about") {
    const copy = getHomeCopy(locale)
    return createPageMetadata({
      title: copy.about.title,
      description: copy.about.description[0],
      path: localizedPath(locale, "/about"),
    })
  }

  if (slug === "faq") {
    const copy = getHomeCopy(locale)
    return createPageMetadata({
      title: copy.faq.title,
      description: copy.faq.description,
      path: localizedPath(locale, "/faq"),
    })
  }

  if (slug === "contact") {
    const copy = getHomeCopy(locale)
    return createPageMetadata({
      title: copy.contact.title,
      description: copy.contact.description,
      path: localizedPath(locale, "/contact"),
    })
  }

  if (getLocalizedExampleSite(locale, slug) || slug.startsWith("a-tavola/")) {
    return getLocalizedExampleMetadata(locale, slug)
  }

  return createPageMetadata({
    title: "Portfolio page",
    description: "Client-ready portfolio page.",
    path: localizedPath(locale, `/${slug}`),
  })
}

export default async function LocalizedRoute({ params }: { params: Params }) {
  const resolved = await params
  const locale = resolveLocale(resolved.locale)
  const slug = getPathSlug(resolved.slug)

  if (!slug) {
    return (
      <>
        <HomeStructuredData locale={locale} />
        <HomePage locale={locale} />
      </>
    )
  }

  if (slug === "examples") {
    return <ExamplesIndexPage locale={locale} />
  }

  if (slug === "privacy-policy") {
    return <PrivacyPolicyPage locale={locale} />
  }

  if (slug === "impressum") {
    return <ImpressumPage locale={locale} />
  }

  if (slug === "services") {
    return <ServicesPage locale={locale} />
  }

  if (slug === "process") {
    return <ProcessPage locale={locale} />
  }

  if (slug === "about") {
    return <AboutPage locale={locale} />
  }

  if (slug === "faq") {
    return <FaqPage locale={locale} />
  }

  if (slug === "contact") {
    return <ContactPage locale={locale} />
  }

  if (slug === "estetic-clinique") {
    return withExampleStructuredData(locale, slug, <ReplyPilotPage locale={locale} />)
  }

  if (slug === "velora") {
    return withExampleStructuredData(locale, slug, <FlowForgePage locale={locale} />)
  }

  if (slug === "lussolab") {
    return withExampleStructuredData(locale, slug, <AureliaPage locale={locale} />)
  }

  if (slug === "blog") {
    return withExampleStructuredData(locale, slug, <ModelWatchPage locale={locale} />)
  }

  if (slug === "affect-sense") {
    return withExampleStructuredData(locale, slug, <AffectSensePage locale={locale} />)
  }

  if (slug === "a-tavola") {
    return withExampleStructuredData(locale, slug, <RestaurantHomePage locale={locale} />)
  }

  if (slug === "a-tavola/menu") {
    return withExampleStructuredData(locale, slug, <RestaurantMenuPage locale={locale} />)
  }

  if (slug === "a-tavola/about") {
    return withExampleStructuredData(locale, slug, <RestaurantAboutPage locale={locale} />)
  }

  if (slug === "a-tavola/contact") {
    return withExampleStructuredData(locale, slug, <RestaurantContactPage locale={locale} />)
  }

  notFound()
}
