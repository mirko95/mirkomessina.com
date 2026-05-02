import type { Metadata } from "next"
import { siteConfig } from "./site"
import { localizedPath, resolveLocale, stripLocalePrefix } from "./i18n"

const DEFAULT_SITE_URL = "https://mirkomessina.com"

export function getSiteUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? DEFAULT_SITE_URL

  try {
    return new URL(rawUrl.endsWith("/") ? rawUrl : `${rawUrl}/`)
  } catch {
    return new URL(DEFAULT_SITE_URL)
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
}

export function createPageMetadata({
  title,
  description,
  path,
  imagePath = "/og-image.png",
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path)
  const locale = resolveLocale(path.split("/").filter(Boolean)[0])
  const basePath = stripLocalePrefix(path)
  const imageUrl = absoluteUrl(imagePath)

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: absoluteUrl(basePath),
        it: absoluteUrl(localizedPath("it", basePath)),
        de: absoluteUrl(localizedPath("de", basePath)),
        "x-default": absoluteUrl(basePath),
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "it" ? "it_IT" : locale === "de" ? "de_DE" : "en_AT",
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
        sameAs: [siteConfig.social.linkedin, siteConfig.social.github].filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}#website`,
        url: absoluteUrl("/"),
        name: siteConfig.title,
        description: siteConfig.description,
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
        sameAs: [siteConfig.social.linkedin, siteConfig.social.github].filter(Boolean),
      },
    ],
  }
}
