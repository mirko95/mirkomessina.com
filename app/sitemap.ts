import type { MetadataRoute } from "next"
import { exampleSites } from "@/lib/examples"
import { absoluteUrl } from "@/lib/seo"
import { localizedPath, supportedLocales, type Locale } from "@/lib/i18n"

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>

type SitemapRoute = {
  path: string
  changeFrequency: ChangeFrequency
  priority: number
}

const staticRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.85 },
  { path: "/examples", changeFrequency: "monthly", priority: 0.8 },
  { path: "/process", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.65 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.75 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/impressum", changeFrequency: "yearly", priority: 0.3 },
] satisfies SitemapRoute[]

const restaurantRoutes = [
  { path: "/a-tavola/menu", changeFrequency: "monthly", priority: 0.6 },
  { path: "/a-tavola/about", changeFrequency: "monthly", priority: 0.55 },
  { path: "/a-tavola/contact", changeFrequency: "monthly", priority: 0.55 },
] satisfies SitemapRoute[]

function createEntry(locale: Locale, route: SitemapRoute, lastModified: Date) {
  return {
    url: absoluteUrl(localizedPath(locale, route.path)),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const staticEntries = supportedLocales.flatMap((locale) =>
    staticRoutes.map((route) => createEntry(locale, route, lastModified)),
  ) satisfies MetadataRoute.Sitemap
  const exampleEntries = supportedLocales.flatMap((locale) =>
    exampleSites.map((site) =>
      createEntry(
        locale,
        {
          path: `/${site.slug}`,
          changeFrequency: "monthly",
          priority: 0.7,
        },
        lastModified,
      ),
    ),
  ) satisfies MetadataRoute.Sitemap
  const restaurantEntries = supportedLocales.flatMap((locale) =>
    restaurantRoutes.map((route) => createEntry(locale, route, lastModified)),
  ) satisfies MetadataRoute.Sitemap

  return [...staticEntries, ...exampleEntries, ...restaurantEntries]
}
