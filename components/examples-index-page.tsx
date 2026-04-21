import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Compass } from "lucide-react"
import { JsonLd } from "@/components/seo/json-ld"
import { getExampleSites } from "@/lib/examples"
import { absoluteUrl, createPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo"
import { getExampleIndexCopy } from "@/lib/site-copy"
import { localizedPath, type Locale } from "@/lib/i18n"

export function createExamplesIndexMetadata(locale: Locale): Metadata {
  const copy = getExampleIndexCopy(locale)
  return createPageMetadata({
    title: copy.title,
    description: copy.description,
    path: localizedPath(locale, "/examples"),
  })
}

export function ExamplesIndexPage({ locale = "en" }: { locale?: Locale }) {
  const copy = getExampleIndexCopy(locale)
  const exampleSites = getExampleSites(locale)
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: locale === "de" ? "Startseite" : "Home", url: absoluteUrl(localizedPath(locale, "/")) },
    { name: copy.eyebrow, url: absoluteUrl(localizedPath(locale, "/examples")) },
  ])

  return (
    <main className="min-h-screen bg-background">
      <JsonLd data={breadcrumbJsonLd} />
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              {copy.eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
              {copy.title}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
              {copy.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
            {exampleSites.map((site) => (
              <Link
                key={site.slug}
                href={localizedPath(locale, `/${site.slug}`)}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-3xl border border-border/50 bg-card/60 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`h-48 bg-gradient-to-br ${site.colorClass} p-6 flex items-end`}>
                  <div className="w-12 h-12 rounded-2xl bg-background/80 border border-border/50 flex items-center justify-center">
                    <site.icon className={`w-6 h-6 ${site.accentClass}`} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{site.category}</p>
                  <h2 className="min-h-[3rem] text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {site.name}
                  </h2>
                  <p className="min-h-[4.5rem] text-sm text-muted-foreground leading-relaxed mb-6">
                    {site.summary}
                  </p>
                  <div className="mt-auto flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {copy.openLabel}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-3 text-sm text-muted-foreground">
            <Compass className="h-4 w-4 text-primary" />
            <span>{copy.note}</span>
          </div>
        </div>
      </section>
    </main>
  )
}
