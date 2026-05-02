import { HowItWorksSection } from "@/components/how-it-works-section"
import { PageShell } from "@/components/page-shell"
import { JsonLd } from "@/components/seo/json-ld"
import { WhyWorkWithMeSection } from "@/components/why-work-with-me-section"
import { getWebPageJsonLd } from "@/lib/seo"
import { getHomeCopy } from "@/lib/site-copy"
import { localizedPath, type Locale } from "@/lib/i18n"

export function ProcessPage({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)
  const path = localizedPath(locale, "/process")
  const webPageJsonLd = getWebPageJsonLd({
    locale,
    path,
    name: copy.process.title,
    description: copy.process.description,
  })

  return (
    <PageShell
      locale={locale}
      eyebrow={copy.process.eyebrow}
      title={copy.process.title}
      description={copy.process.description}
    >
      <JsonLd data={webPageJsonLd} />
      <WhyWorkWithMeSection locale={locale} />
      <HowItWorksSection locale={locale} />
    </PageShell>
  )
}
