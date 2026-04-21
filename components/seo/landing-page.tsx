import type { SeoLandingPageConfig } from "@/lib/seo-pages"
import { JsonLd } from "@/components/seo/json-ld"
import { absoluteUrl, getBreadcrumbJsonLd } from "@/lib/seo"
import { localizedPath, type Locale } from "@/lib/i18n"
import { getHomeCopy } from "@/lib/site-copy"

type SeoLandingPageProps = {
  page: SeoLandingPageConfig
  locale?: Locale
}

export function SeoLandingPage({ page, locale = "en" }: SeoLandingPageProps) {
  const homeCopy = getHomeCopy(locale)
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: locale === "it" ? "Home" : locale === "de" ? "Startseite" : "Home", url: absoluteUrl(localizedPath(locale, "/")) },
    { name: homeCopy.seoPages.eyebrow, url: absoluteUrl(localizedPath(locale, "/#seo-pages")) },
    { name: page.h1, url: absoluteUrl(localizedPath(locale, `/${page.slug}`)) },
  ])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd data={breadcrumbJsonLd} />
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_32%)]" />
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{page.keyword}</p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground text-pretty">{page.intro}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={localizedPath(locale, page.ctaHref)}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {page.ctaLabel}
              </a>
              <a
                href={localizedPath(locale, "/examples")}
                className="inline-flex items-center justify-center rounded-xl border border-border/50 bg-card/50 px-6 py-3 text-sm font-medium text-foreground hover:border-primary/30 hover:bg-primary/5 transition-colors"
              >
                {locale === "it" ? "Esplora gli esempi" : locale === "de" ? "Beispielarbeiten ansehen" : "Browse example work"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {page.benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-3xl border border-border/60 bg-card/60 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight">{benefit.title}</h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-7">{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              {locale === "it" ? "Come funziona" : locale === "de" ? "So funktioniert es" : "How it works"}
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
              {locale === "it"
                ? "Un processo semplice che mantiene la pagina leggibile e utile"
                : locale === "de"
                  ? "Ein einfacher Prozess, der die Seite lesbar und nuetzlich haelt"
                  : "A simple process that keeps the page readable and useful"}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {page.steps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-border/60 bg-background/70 p-6 md:p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  {locale === "it" ? `Fase ${index + 1}` : locale === "de" ? `Schritt ${index + 1}` : `Step ${index + 1}`}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-4 text-sm md:text-base text-muted-foreground leading-7">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <article className="rounded-3xl border border-border/60 bg-card/60 p-6 md:p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">CTA</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            {locale === "it"
              ? `Pronto a parlare di ${page.keyword} per il tuo prossimo progetto?`
              : locale === "de"
                ? `Bereit, ueber ${page.keyword} fuer dein naechstes Projekt zu sprechen?`
                : `Ready to talk about ${page.keyword} for your next project?`}
          </h2>
          <p className="mt-4 max-w-3xl text-sm md:text-base text-muted-foreground leading-7">
            {locale === "it"
              ? "Questa pagina e` scritta apposta per l'intento di ricerca. Offre a Google un argomento chiaro, una struttura leggibile e un percorso crawlabile verso il form di contatto senza dipendere da interazioni solo JavaScript."
              : locale === "de"
                ? "Diese Seite ist bewusst fuer Suchintention geschrieben. Sie gibt Google ein klares Thema, eine lesbare Struktur und einen crawlbaren Weg zum Kontaktformular, ohne nur auf JavaScript-Interaktionen zu setzen."
                : "This page is intentionally written for search intent. It gives Google a clear topic, a readable structure, and a crawlable path to the contact form without relying on JavaScript-only interactions."}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={page.ctaHref}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {page.ctaLabel}
            </a>
            <a
              href={localizedPath(locale, "/")}
              className="inline-flex items-center justify-center rounded-xl border border-border/50 bg-background/50 px-6 py-3 text-sm font-medium text-foreground hover:border-primary/30 hover:bg-primary/5 transition-colors"
            >
              {locale === "it" ? "Torna alla home" : locale === "de" ? "Zur Startseite" : "Back to homepage"}
            </a>
          </div>
        </article>
      </section>
    </main>
  )
}

