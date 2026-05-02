import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Compass } from "lucide-react"
import { JsonLd } from "@/components/seo/json-ld"
import { PageShell } from "@/components/page-shell"
import { getExampleSites } from "@/lib/examples"
import { absoluteUrl, createPageMetadata, getBreadcrumbJsonLd, getItemListJsonLd } from "@/lib/seo"
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
  const itemListJsonLd = getItemListJsonLd({
    name: copy.title,
    description: copy.description,
    items: exampleSites.map((site) => ({
      name: site.name,
      description: site.summary,
      url: absoluteUrl(localizedPath(locale, `/${site.slug}`)),
    })),
  })

  return (
    <PageShell
      locale={locale}
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
    >
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={itemListJsonLd} />
      <section className="relative overflow-hidden py-12 sm:py-14 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_38%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.06),transparent_34%),radial-gradient(circle_at_bottom,rgba(2,6,23,0.06),transparent_42%)]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(3,7,18,0.02),transparent_100%)] sm:h-40" />
        <div className="absolute inset-x-0 top-12 h-[18rem] bg-[linear-gradient(180deg,rgba(3,7,18,0.02),transparent_100%),radial-gradient(circle_at_top_left,rgba(59,130,246,0.06),transparent_38%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.04),transparent_34%),radial-gradient(circle_at_bottom,rgba(2,6,23,0.03),transparent_42%)] sm:top-16 sm:h-[22rem]" />

        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8 relative z-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {exampleSites.map((site) => (
              <Link
                key={site.slug}
                href={localizedPath(locale, `/${site.slug}`)}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 sm:rounded-3xl"
              >
                <div className={`h-36 bg-gradient-to-br ${site.colorClass} p-4 flex items-end sm:h-44 sm:p-6 lg:h-48`}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/50 bg-background/80 sm:h-12 sm:w-12">
                    <site.icon className={`h-5 w-5 ${site.accentClass} sm:h-6 sm:w-6`} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:text-xs">
                    {site.category}
                  </p>
                  <h2 className="mb-2 text-lg font-semibold leading-tight transition-colors group-hover:text-primary sm:min-h-[3rem] sm:text-xl">
                    {site.name}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:min-h-[4.5rem] sm:mb-6">
                    {site.summary}
                  </p>
                  <div className="mt-auto flex items-center text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    {copy.openLabel}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 text-sm text-muted-foreground">
            <Compass className="h-4 w-4 text-primary" />
            <span className="text-pretty">{copy.note}</span>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
