import { ContactSection } from "@/components/contact-section"
import { PageShell } from "@/components/page-shell"
import { getHomeCopy } from "@/lib/site-copy"
import type { Locale } from "@/lib/i18n"

export function ContactPage({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)

  return (
    <PageShell
      locale={locale}
      eyebrow={copy.contact.eyebrow}
      title={copy.contact.title}
      description={copy.contact.description}
    >
      <ContactSection locale={locale} />
    </PageShell>
  )
}
