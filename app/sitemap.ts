import type { MetadataRoute } from "next"
import { exampleSites } from "@/lib/examples"
import { absoluteUrl } from "@/lib/seo"
import { supportedLocales } from "@/lib/i18n"

const staticRoutes = [
  "/",
  "/examples",
  "/privacy-policy",
  "/impressum",
  "/harbor-kitchen/menu",
  "/harbor-kitchen/about",
  "/harbor-kitchen/contact",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/examples" ? 0.8 : path.startsWith("/harbor-kitchen") ? 0.6 : 0.7,
  })) satisfies MetadataRoute.Sitemap

  const localizedStaticEntries = supportedLocales
    .filter((locale) => locale !== "en")
    .flatMap((locale) =>
      staticRoutes.map((path) => ({
        url: absoluteUrl(`/${locale}${path === "/" ? "" : path}`),
        lastModified: new Date(),
        changeFrequency: path === "/" ? "weekly" : "monthly",
        priority: path === "/" ? 1 : path === "/examples" ? 0.8 : path.startsWith("/harbor-kitchen") ? 0.6 : 0.7,
      })),
    ) satisfies MetadataRoute.Sitemap

  const exampleEntries = exampleSites.map((site) => ({
    url: absoluteUrl(`/${site.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  })) satisfies MetadataRoute.Sitemap

  const localizedExampleEntries = supportedLocales
    .filter((locale) => locale !== "en")
    .flatMap((locale) =>
      exampleSites.map((site) => ({
        url: absoluteUrl(`/${locale}/${site.slug}`),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      })),
    ) satisfies MetadataRoute.Sitemap

  return [...staticEntries, ...localizedStaticEntries, ...exampleEntries, ...localizedExampleEntries]
}
