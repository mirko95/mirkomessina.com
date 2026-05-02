import { AboutSection } from "@/components/about-section"
import { PageShell } from "@/components/page-shell"
import { JsonLd } from "@/components/seo/json-ld"
import { getWebPageJsonLd } from "@/lib/seo"
import { getHomeCopy } from "@/lib/site-copy"
import { localizedPath, type Locale } from "@/lib/i18n"

export function AboutPage({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)
  const path = localizedPath(locale, "/about")
  const webPageJsonLd = getWebPageJsonLd({
    locale,
    path,
    name: copy.about.title,
    description: copy.about.description[0],
  })

  return (
    <PageShell
      locale={locale}
      eyebrow={copy.about.eyebrow}
      title={copy.about.title}
      description={copy.about.description[0]}
    >
      <JsonLd data={webPageJsonLd} />
      <AboutSection locale={locale} />
    </PageShell>
  )
}
