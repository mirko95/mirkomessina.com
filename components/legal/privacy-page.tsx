import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site"
import { absoluteUrl, createPageMetadata, getBreadcrumbJsonLd, getWebPageJsonLd } from "@/lib/seo"
import { getLegalCopy } from "@/lib/site-copy"
import { localizedPath, type Locale } from "@/lib/i18n"

export function createPrivacyMetadata(locale: Locale): Metadata {
  const copy = getLegalCopy(locale).privacy
  return createPageMetadata({
    title: copy.title,
    description: copy.description,
    path: localizedPath(locale, "/privacy-policy"),
  })
}

export function PrivacyPolicyPage({ locale = "en" }: { locale?: Locale }) {
  const copy = getLegalCopy(locale).privacy
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: locale === "de" ? "Startseite" : "Home", url: absoluteUrl(localizedPath(locale, "/")) },
    { name: copy.eyebrow, url: absoluteUrl(localizedPath(locale, "/privacy-policy")) },
  ])
  const webPageJsonLd = getWebPageJsonLd({
    locale,
    path: localizedPath(locale, "/privacy-policy"),
    name: copy.title,
    description: copy.description,
  })

  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={webPageJsonLd} />
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_30%)]" />
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
          {copy.sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-border/60 bg-card/60 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
              <ul className="mt-4 space-y-3 text-sm md:text-base text-muted-foreground leading-7">
                {section.content.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <article className="rounded-3xl border border-border/60 bg-card/60 p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">{copy.noteTitle}</h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-7">{copy.noteBody}</p>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-7">
              {locale === "it" ? "Se vuoi vedere la home, torna al " : locale === "de" ? "Wenn du die Startseite ansehen moechtest, gehe zur " : "If you want to inspect the homepage, go back to "}
              <Link href={localizedPath(locale, "/")} className="text-primary hover:underline">
                {locale === "it" ? "sito principale" : locale === "de" ? "Hauptseite" : "the main site"}
              </Link>
              .
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
