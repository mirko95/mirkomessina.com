import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { HomePage } from "@/components/home-page"
import { ExamplesIndexPage, createExamplesIndexMetadata } from "@/components/examples-index-page"
import { PrivacyPolicyPage, createPrivacyMetadata } from "@/components/legal/privacy-page"
import { ImpressumPage, createImpressumMetadata } from "@/components/legal/impressum-page"
import { ServicesPage } from "@/components/pages/services-page"
import { ProcessPage } from "@/components/pages/process-page"
import { AboutPage } from "@/components/pages/about-page"
import { FaqPage } from "@/components/pages/faq-page"
import { ContactPage } from "@/components/pages/contact-page"
import { SeoLandingPage } from "@/components/seo/landing-page"
import { createPageMetadata } from "@/lib/seo"
import { getHomeCopy } from "@/lib/site-copy"
import { getSiteMeta } from "@/lib/site-copy"
import { getSeoLandingPageCopy } from "@/lib/seo-pages"
import { localizedPath, resolveLocale, type Locale } from "@/lib/i18n"
import { getLocalizedExampleSite } from "@/lib/examples"
import { AetherIqLandingPage } from "@/components/examples/saas/site-page"
import { ReplyPilotPage } from "@/components/examples/assistant/site-page"
import { FlowForgePage } from "@/components/examples/automation/site-page"
import { AureliaPage } from "@/components/examples/aurelia/site-page"
import { ModelWatchPage } from "@/components/examples/modelwatch/site-page"
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

function getLocalizedExampleMetadata(locale: Locale, slug: string): Metadata {
  const normalizedSlug = slug.startsWith("harbor-kitchen/") ? "harbor-kitchen" : slug
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

  if (slug === "website-to-figma" || slug === "html-to-design" || slug === "extract-ui-from-website") {
    const page = getSeoLandingPageCopy(locale, slug)
    if (!page) notFound()
    return createPageMetadata({
      title: page.title,
      description: page.description,
      path: localizedPath(locale, `/${slug}`),
    })
  }

  if (
    slug === "aetheriq" ||
    slug === "replypilot" ||
    slug === "flowforge" ||
    slug === "aurelia" ||
    slug === "modelwatch" ||
    slug === "affect-sense" ||
    slug === "harbor-kitchen" ||
    slug.startsWith("harbor-kitchen/")
  ) {
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
    return <HomePage locale={locale} />
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

  if (slug === "website-to-figma" || slug === "html-to-design" || slug === "extract-ui-from-website") {
    const page = getSeoLandingPageCopy(locale, slug)
    if (!page) notFound()
    return <SeoLandingPage page={page} locale={locale} />
  }

  if (slug === "aetheriq") {
    return <AetherIqLandingPage locale={locale} />
  }

  if (slug === "replypilot") {
    return <ReplyPilotPage locale={locale} />
  }

  if (slug === "flowforge") {
    return <FlowForgePage locale={locale} />
  }

  if (slug === "aurelia") {
    return <AureliaPage locale={locale} />
  }

  if (slug === "modelwatch") {
    return <ModelWatchPage locale={locale} />
  }

  if (slug === "affect-sense") {
    return <AffectSensePage locale={locale} />
  }

  if (slug === "harbor-kitchen") {
    return <RestaurantHomePage locale={locale} />
  }

  if (slug === "harbor-kitchen/menu") {
    return <RestaurantMenuPage locale={locale} />
  }

  if (slug === "harbor-kitchen/about") {
    return <RestaurantAboutPage locale={locale} />
  }

  if (slug === "harbor-kitchen/contact") {
    return <RestaurantContactPage locale={locale} />
  }

  notFound()
}

