import Image from "next/image"
import { ContactSection } from "@/components/contact-section"
import { PageShell } from "@/components/page-shell"
import { JsonLd } from "@/components/seo/json-ld"
import { getContactPageJsonLd, getWebPageJsonLd } from "@/lib/seo"
import { getHomeCopy } from "@/lib/site-copy"
import { localizedPath, type Locale } from "@/lib/i18n"

export function ContactPage({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)
  const path = localizedPath(locale, "/contact")
  const webPageJsonLd = getWebPageJsonLd({
    locale,
    path,
    name: copy.contact.title,
    description: copy.contact.description,
  })
  const contactJsonLd = getContactPageJsonLd({
    locale,
    path,
    name: copy.contact.title,
    description: copy.contact.description,
  })

  return (
    <PageShell
      locale={locale}
      eyebrow={copy.contact.eyebrow}
      title={copy.contact.title}
      description={copy.contact.description}
      headerAside={
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-background/40 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.15rem] bg-card/40">
            <Image
              src="/images/home/contatti.png"
              alt={copy.contact.title}
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      }
    >
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={contactJsonLd} />
      <ContactSection locale={locale} />
    </PageShell>
  )
}
