import { ServicesSection } from "@/components/services-section"
import { SolutionsSection } from "@/components/solutions-section"
import { PageShell } from "@/components/page-shell"
import { getHomeCopy } from "@/lib/site-copy"
import type { Locale } from "@/lib/i18n"

export function ServicesPage({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)

  return (
    <PageShell
      locale={locale}
      eyebrow={copy.services.eyebrow}
      title={copy.services.title}
      description={copy.services.description}
    >
      <ServicesSection locale={locale} />
      <SolutionsSection locale={locale} />
    </PageShell>
  )
}
