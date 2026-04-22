import { AboutSection } from "@/components/about-section"
import { PageShell } from "@/components/page-shell"
import { getHomeCopy } from "@/lib/site-copy"
import type { Locale } from "@/lib/i18n"

export function AboutPage({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)

  return (
    <PageShell
      locale={locale}
      eyebrow={copy.about.eyebrow}
      title={copy.about.title}
      description={copy.about.description[0]}
    >
      <AboutSection locale={locale} />
    </PageShell>
  )
}
