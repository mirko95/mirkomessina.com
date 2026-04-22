import { HowItWorksSection } from "@/components/how-it-works-section"
import { PageShell } from "@/components/page-shell"
import { WhyWorkWithMeSection } from "@/components/why-work-with-me-section"
import { getHomeCopy } from "@/lib/site-copy"
import type { Locale } from "@/lib/i18n"

export function ProcessPage({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)

  return (
    <PageShell
      locale={locale}
      eyebrow={copy.process.eyebrow}
      title={copy.process.title}
      description={copy.process.description}
    >
      <WhyWorkWithMeSection locale={locale} />
      <HowItWorksSection locale={locale} />
    </PageShell>
  )
}
