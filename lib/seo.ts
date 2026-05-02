import type { Metadata } from "next"
import { siteConfig } from "./site"
import { localizedPath, resolveLocale, stripLocalePrefix, type Locale } from "./i18n"

const DEFAULT_SITE_URL = "https://mirkomessina-com.vercel.app"
const DEFAULT_IMAGE_PATH = "/og-image.png"
const DEFAULT_KEYWORDS = [
  "Mirko Messina",
  "web developer Austria",
  "web developer Vienna",
  "AI tools",
  "GPT automation",
  "business websites",
  "Next.js developer",
  "workflow automation",
]

function normalizeSiteUrl(rawUrl: string | undefined) {
  if (!rawUrl) return null
  const urlWithProtocol = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`

  try {
    const url = new URL(urlWithProtocol.endsWith("/") ? urlWithProtocol : `${urlWithProtocol}/`)
    const isLocalHost = ["localhost", "127.0.0.1", "0.0.0.0"].includes(url.hostname)

    if (process.env.NODE_ENV === "production" && isLocalHost) {
      return null
    }

    return url
  } catch {
    return null
  }
}

export function getSiteUrl() {
  const configuredUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL)
  const vercelUrl = normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL)

  if (configuredUrl) return configuredUrl
  if (vercelUrl) return vercelUrl

  try {
    return new URL(DEFAULT_SITE_URL)
  } catch {
    return new URL("https://example.com")
  }
}

export function absoluteUrl(pathname: string) {
  const siteUrl = getSiteUrl()
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`
  return new URL(normalizedPath, siteUrl).toString()
}

type PageMetadataInput = {
  title: string
  description: string
  path: string
  imagePath?: string
  keywords?: string[]
}

export function createPageMetadata({
  title,
  description,
  path,
  imagePath = DEFAULT_IMAGE_PATH,
  keywords = [],
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path)
  const locale = resolveLocale(path.split("/").filter(Boolean)[0])
  const basePath = stripLocalePrefix(path)
  const imageUrl = absoluteUrl(imagePath)
  const titleValue = title.includes(siteConfig.name) ? { absolute: title } : title

  return {
    title: titleValue,
    description,
    authors: [{ name: siteConfig.name, url: absoluteUrl("/") }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Web development and AI automation",
    keywords: [...DEFAULT_KEYWORDS, ...keywords],
    alternates: {
      canonical,
      languages: {
        en: absoluteUrl(localizedPath("en", basePath)),
        it: absoluteUrl(localizedPath("it", basePath)),
        de: absoluteUrl(localizedPath("de", basePath)),
        "x-default": absoluteUrl(localizedPath("en", basePath)),
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "it" ? "it_IT" : locale === "de" ? "de_DE" : "en_AT",
      alternateLocale: ["en_AT", "it_IT", "de_DE"].filter(
        (item) => item !== (locale === "it" ? "it_IT" : locale === "de" ? "de_DE" : "en_AT"),
      ),
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  }
}

function localeToLanguageTag(locale: Locale) {
  if (locale === "it") return "it-IT"
  if (locale === "de") return "de-AT"
  return "en-AT"
}

type BreadcrumbItem = {
  name: string
  url: string
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function getOrganizationJsonLd() {
  const sameAs = [siteConfig.social.linkedin, siteConfig.social.github].filter(Boolean)

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${absoluteUrl("/")}#person`,
        name: siteConfig.name,
        url: absoluteUrl("/"),
        jobTitle: siteConfig.role,
        email: siteConfig.email,
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}#website`,
        url: absoluteUrl("/"),
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: ["en-AT", "it-IT", "de-AT"],
        publisher: {
          "@id": `${absoluteUrl("/")}#person`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${absoluteUrl("/")}#organization`,
        name: siteConfig.name,
        url: absoluteUrl("/"),
        email: siteConfig.email,
        sameAs,
      },
    ],
  }
}

export function getWebPageJsonLd({
  locale,
  path,
  name,
  description,
}: {
  locale: Locale
  path: string
  name: string
  description: string
}) {
  const url = absoluteUrl(path)

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: localeToLanguageTag(locale),
    isPartOf: {
      "@id": `${absoluteUrl("/")}#website`,
    },
    about: {
      "@id": `${absoluteUrl("/")}#person`,
    },
  }
}

export function getServiceJsonLd({
  locale,
  path,
  name,
  description,
  services,
}: {
  locale: Locale
  path: string
  name: string
  description: string
  services: Array<{ title: string; description: string }>
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${absoluteUrl(path)}#services`,
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: localeToLanguageTag(locale),
    provider: {
      "@id": `${absoluteUrl("/")}#person`,
    },
    areaServed: ["Austria", "European Union", "Remote"],
    serviceType: services.map((service) => service.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name,
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: {
            "@id": `${absoluteUrl("/")}#person`,
          },
        },
      })),
    },
  }
}

export function getFaqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function getContactPageJsonLd({
  locale,
  path,
  name,
  description,
}: {
  locale: Locale
  path: string
  name: string
  description: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${absoluteUrl(path)}#contact`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: localeToLanguageTag(locale),
    mainEntity: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "project enquiries",
      availableLanguage: ["English", "Italian", "German"],
    },
  }
}

export function getItemListJsonLd({
  name,
  description,
  items,
}: {
  name: string
  description: string
  items: Array<{ name: string; url: string; description: string }>
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: item.url,
        name: item.name,
        description: item.description,
      })),
    },
  }
}

export function getCreativeWorkJsonLd({
  locale,
  path,
  name,
  description,
  category,
  keywords,
}: {
  locale: Locale
  path: string
  name: string
  description: string
  category: string
  keywords: string[]
}) {
  const url = absoluteUrl(path)

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#portfolio-item`,
    url,
    name,
    description,
    genre: category,
    keywords,
    inLanguage: localeToLanguageTag(locale),
    creator: {
      "@id": `${absoluteUrl("/")}#person`,
    },
  }
}
