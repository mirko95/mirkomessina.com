import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { PageShell } from "@/components/page-shell"
import { JsonLd } from "@/components/seo/json-ld"
import { getFaqJsonLd, getWebPageJsonLd } from "@/lib/seo"
import { getHomeCopy } from "@/lib/site-copy"
import { localizedPath, type Locale } from "@/lib/i18n"

export function FaqPage({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)
  const path = localizedPath(locale, "/faq")
  const webPageJsonLd = getWebPageJsonLd({
    locale,
    path,
    name: copy.faq.title,
    description: copy.faq.description,
  })
  const faqJsonLd = getFaqJsonLd(copy.faq.items)

  return (
    <PageShell
      locale={locale}
      eyebrow={copy.faq.eyebrow}
      title={copy.faq.title}
      description={copy.faq.description}
    >
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={faqJsonLd} />
      <FaqSection locale={locale} />
      <FinalCtaSection locale={locale} />
    </PageShell>
  )
}
