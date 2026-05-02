import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site"
import { absoluteUrl, createPageMetadata, getBreadcrumbJsonLd, getWebPageJsonLd } from "@/lib/seo"
import { getLegalCopy } from "@/lib/site-copy"
import { localizedPath, type Locale } from "@/lib/i18n"

export function createImpressumMetadata(locale: Locale): Metadata {
  const copy = getLegalCopy(locale).impressum
  return createPageMetadata({
    title: copy.title,
    description: copy.description,
    path: localizedPath(locale, "/impressum"),
  })
}

export function ImpressumPage({ locale = "en" }: { locale?: Locale }) {
  const copy = getLegalCopy(locale).impressum
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: locale === "de" ? "Startseite" : "Home", url: absoluteUrl(localizedPath(locale, "/")) },
    { name: copy.eyebrow, url: absoluteUrl(localizedPath(locale, "/impressum")) },
  ])
  const webPageJsonLd = getWebPageJsonLd({
    locale,
    path: localizedPath(locale, "/impressum"),
    name: copy.title,
    description: copy.description,
  })

  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={webPageJsonLd} />
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_35%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_30%)]" />
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{copy.eyebrow}</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
              {copy.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">{copy.intro}</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid gap-8 lg:gap-10">
          <article className="rounded-3xl border border-border/60 bg-card/60 p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">{copy.currentOwnerTitle}</h2>
            <div className="mt-4 space-y-2 text-sm md:text-base text-muted-foreground leading-7">
              <p>{siteConfig.name}</p>
              <p>Email: {siteConfig.email}</p>
              <p>{locale === "it" ? "Con sede a Vienna, Austria" : locale === "de" ? "Sitz in Wien, Österreich" : "Based in Vienna, Austria"}</p>
            </div>
          </article>

          <article className="rounded-3xl border border-border/60 bg-card/60 p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">{copy.launchTitle}</h2>
            <ul className="mt-4 space-y-3 text-sm md:text-base text-muted-foreground leading-7">
              {copy.launchFields.map((field) => (
                <li key={field} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{field}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-border/60 bg-card/60 p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">{copy.whyTitle}</h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-7">{copy.whyBody}</p>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-7">{copy.whyBody2}</p>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-7">
              {locale === "it" ? "Torna al " : locale === "de" ? "Zurueck zur " : "Go back to "}
              <Link href={localizedPath(locale, "/")} className="text-primary hover:underline">
                {copy.whyLink}
              </Link>
              .
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
