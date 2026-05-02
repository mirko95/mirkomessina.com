import { JsonLd } from "@/components/seo/json-ld"
import { ServicesSection } from "@/components/services-section"
import { SolutionsSection } from "@/components/solutions-section"
import { PageShell } from "@/components/page-shell"
import { getServiceJsonLd, getWebPageJsonLd } from "@/lib/seo"
import { getHomeCopy } from "@/lib/site-copy"
import { localizedPath, type Locale } from "@/lib/i18n"

export function ServicesPage({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)
  const path = localizedPath(locale, "/services")
  const webPageJsonLd = getWebPageJsonLd({
    locale,
    path,
    name: copy.services.title,
    description: copy.services.description,
  })
  const serviceJsonLd = getServiceJsonLd({
    locale,
    path,
    name: copy.services.title,
    description: copy.services.description,
    services: copy.services.items,
  })

  return (
    <PageShell
      locale={locale}
      eyebrow={copy.services.eyebrow}
      title={copy.services.title}
      description={copy.services.description}
    >
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <ServicesSection locale={locale} />
      <SolutionsSection locale={locale} />
    </PageShell>
  )
}
