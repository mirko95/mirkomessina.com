"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Linkedin, Github, CheckCircle } from "lucide-react"
import { siteConfig } from "@/lib/site"
import { getHomeCopy } from "@/lib/site-copy"
import type { Locale } from "@/lib/i18n"

function getContactSchema(locale: Locale) {
  return z.object({
    name: z.string().min(2, locale === "it" ? "Inserisci il tuo nome." : locale === "de" ? "Bitte gib deinen Namen ein." : "Please enter your name."),
    email: z.string().email(locale === "it" ? "Inserisci un indirizzo email valido." : locale === "de" ? "Bitte gib eine gueltige E-Mail-Adresse ein." : "Please enter a valid email address."),
    subject: z.string().min(3, locale === "it" ? "Aggiungi un oggetto." : locale === "de" ? "Bitte fuege einen Betreff hinzu." : "Please add a subject."),
    message: z.string().min(10, locale === "it" ? "Racconta un po` di piu` del tuo progetto." : locale === "de" ? "Bitte schreibe etwas mehr zu deinem Projekt." : "Please write a little more about your project."),
  })
}

type ContactFormValues = z.infer<ReturnType<typeof getContactSchema>>

export function ContactSection({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(getContactSchema(locale)),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const socialLinks = [
    { icon: Linkedin, href: siteConfig.social.linkedin, label: copy.contact.socialLabel },
    { icon: Github, href: siteConfig.social.github, label: "GitHub" },
  ].filter((social) => social.href)

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null)

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        type: "project",
        honeypot: "",
      }),
    })

    const payload = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null

    if (!response.ok || !payload?.ok) {
      throw new Error(payload?.error || (locale === "it" ? "Qualcosa e` andato storto." : locale === "de" ? "Etwas ist schiefgelaufen." : "Something went wrong."))
    }

    setIsSubmitted(true)
    reset()
  }

  const startNewMessage = () => {
    setIsSubmitted(false)
    setSubmitError(null)
    reset()
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.04),transparent_42%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.03),transparent_44%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 items-start">
          <div className="space-y-10">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />

              <div className="relative rounded-2xl border border-border/50 bg-card/80 p-8 backdrop-blur-xl">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
                  {locale === "it" ? "Prima di scrivermi" : locale === "de" ? "Bevor du schreibst" : "Before you write"}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {locale === "it"
                    ? "Per farmi capire bene il progetto, mi aiutano tre cose semplici:"
                    : locale === "de"
                      ? "Damit ich das Projekt gut einordnen kann, helfen mir drei einfache Dinge:"
                      : "To understand your project well, these three things help a lot:"}
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    locale === "it" ? "Obiettivo del progetto" : locale === "de" ? "Projektziel" : "Project goal",
                    locale === "it" ? "Pagine o funzioni necessarie" : locale === "de" ? "Benötigte Seiten oder Funktionen" : "Needed pages or features",
                    locale === "it" ? "Tempistiche indicative" : locale === "de" ? "Ungefähre Timeline" : "Rough timeline",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/80" />
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {locale === "it"
                    ? "Se hai solo un'idea, va bene lo stesso: la possiamo chiarire insieme."
                    : locale === "de"
                      ? "Auch wenn du nur eine grobe Idee hast, können wir sie zusammen schärfen."
                      : "If you only have a rough idea, that is fine too. We can shape it together."}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />

              <div className="relative rounded-2xl border border-border/50 bg-card/80 p-8 backdrop-blur-xl">
                <div className="space-y-6">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{copy.contact.labels.email}</p>
                      <p className="font-medium text-foreground">{siteConfig.email}</p>
                    </div>
                  </a>

                  {socialLinks.length > 0 && (
                    <div className="flex items-center gap-4 pt-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />

            <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{copy.contact.labels.successTitle}</h3>
                  <p className="text-muted-foreground">{copy.contact.labels.successDescription}</p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-6 border-border/60 bg-background/60"
                    onClick={startNewMessage}
                  >
                    {copy.contact.labels.another}
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(async (values) => {
                    try {
                      await onSubmit(values)
                    } catch (error) {
                        setSubmitError(error instanceof Error ? error.message : locale === "it" ? "Qualcosa e` andato storto." : locale === "de" ? "Etwas ist schiefgelaufen." : "Something went wrong.")
                    }
                  })}
                  className="space-y-6"
                >
                  <input type="hidden" name="honeypot" value="" aria-hidden="true" tabIndex={-1} />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        {copy.contact.labels.name}
                      </label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder={copy.contact.placeholders.name}
                        className="bg-secondary/50 border-border/50 focus:border-primary/50"
                      />
                      {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        {copy.contact.labels.emailField}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder={copy.contact.placeholders.email}
                        className="bg-secondary/50 border-border/50 focus:border-primary/50"
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      {copy.contact.labels.subject}
                    </label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      placeholder={copy.contact.placeholders.subject}
                      className="bg-secondary/50 border-border/50 focus:border-primary/50"
                    />
                    {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      {copy.contact.labels.message}
                    </label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder={copy.contact.placeholders.message}
                      rows={5}
                      className="bg-secondary/50 border-border/50 focus:border-primary/50 resize-none"
                    />
                    {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  >
                    <>
                      {isSubmitting ? copy.contact.labels.sending : copy.contact.labels.send}
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  </Button>

                  {submitError && <p className="text-sm text-destructive">{submitError}</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
