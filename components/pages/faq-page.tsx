import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { PageShell } from "@/components/page-shell"
import { getHomeCopy } from "@/lib/site-copy"
import type { Locale } from "@/lib/i18n"

export function FaqPage({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)

  return (
    <PageShell
      locale={locale}
      eyebrow={copy.faq.eyebrow}
      title={copy.faq.title}
      description={copy.faq.description}
    >
      <FaqSection locale={locale} />
      <FinalCtaSection locale={locale} />
    </PageShell>
  )
}
