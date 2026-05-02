"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { getRestaurantData } from "./data"
import type { Locale } from "@/lib/i18n"

function getContactSchema(locale: Locale) {
  return z.object({
    name: z.string().min(2, locale === "it" ? "Inserisci il tuo nome." : locale === "de" ? "Bitte gib deinen Namen ein." : "Please enter your name."),
    email: z.string().email(locale === "it" ? "Inserisci un indirizzo email valido." : locale === "de" ? "Bitte gib eine gueltige E-Mail-Adresse ein." : "Enter a valid email address."),
    date: z.string().min(1, locale === "it" ? "Scegli una data." : locale === "de" ? "Bitte waehle ein Datum." : "Please choose a date."),
    guests: z.coerce.number().min(1, locale === "it" ? "Serve almeno un ospite." : locale === "de" ? "Mindestens ein Gast ist erforderlich." : "At least one guest is required.").max(12, locale === "it" ? "Per gruppi piu` grandi ti chiediamo di contattarci direttamente." : locale === "de" ? "Bitte kontaktiere uns direkt fuer groessere Gruppen." : "Please contact us directly for larger groups."),
    message: z.string().min(10, locale === "it" ? "Raccontaci un po` di piu` della tua richiesta." : locale === "de" ? "Bitte erzaehl uns etwas mehr zu deiner Anfrage." : "Please share a little more about your request."),
  })
}

type ContactFormValues = z.infer<ReturnType<typeof getContactSchema>>

export function ContactForm({ locale = "en" }: { locale?: Locale }) {
  const restaurant = getRestaurantData(locale)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(getContactSchema(locale)),
    defaultValues: {
      name: "",
      email: "",
      date: "",
      guests: 2,
      message: "",
    },
  })

  const onSubmit = async (values: ContactFormValues) => {
    try {
      setSubmitError(null)
      // Simulate a reservation request without sending any real mail.
      await new Promise((resolve) => setTimeout(resolve, 900))
      setSubmitted(true)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : locale === "it" ? "Qualcosa e` andato storto." : locale === "de" ? "Etwas ist schiefgelaufen." : "Something went wrong.")
    }
  }

  if (submitted) {
    return (
      <div className="border border-[#c5a059]/20 bg-[#141414] p-8 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c5a059]">{locale === "de" ? "Anfrage gesendet" : locale === "it" ? "Richiesta inviata" : "Request sent"}</p>
        <h3 className="mt-3 font-serif text-2xl font-light text-white">{locale === "de" ? "Deine Reservierungsanfrage wurde gesendet" : locale === "it" ? "La tua richiesta di prenotazione e` stata inviata" : "Your reservation request was sent"}</h3>
        <p className="mt-3 text-sm leading-7 text-[#e8e2d6]/60">
          {locale === "de" ? "Das ist eine Demo-Anfrage. Es wurde keine echte E-Mail versendet." : locale === "it" ? "Questa e` una richiesta demo. Non e` stata inviata alcuna email reale." : "This is a demo request. No real email was sent."}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 border border-[#c5a059]/20 bg-[#141414] p-6 shadow-sm">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-medium uppercase tracking-[0.2em] text-[#e8e2d6]/60">
            {locale === "de" ? "Name" : locale === "it" ? "Nome" : "Name"}
          </label>
          <Input id="name" {...register("name")} className="rounded-none border-[#e8e2d6]/10 bg-[#0a0a0a] text-[#e8e2d6]" placeholder={locale === "de" ? "Dein Name" : locale === "it" ? "Il tuo nome" : "Your name"} />
          {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.2em] text-[#e8e2d6]/60">
            {locale === "de" ? "E-Mail" : locale === "it" ? "Email" : "Email"}
          </label>
          <Input id="email" type="email" {...register("email")} className="rounded-none border-[#e8e2d6]/10 bg-[#0a0a0a] text-[#e8e2d6]" placeholder="you@example.com" />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="date" className="text-xs font-medium uppercase tracking-[0.2em] text-[#e8e2d6]/60">
            {locale === "de" ? "Datum" : locale === "it" ? "Data" : "Date"}
          </label>
          <Input id="date" type="date" {...register("date")} className="rounded-none border-[#e8e2d6]/10 bg-[#0a0a0a] text-[#e8e2d6]" />
          {errors.date && <p className="text-sm text-red-600">{errors.date.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="guests" className="text-xs font-medium uppercase tracking-[0.2em] text-[#e8e2d6]/60">
            {locale === "de" ? "Gaeste" : locale === "it" ? "Ospiti" : "Guests"}
          </label>
          <Input id="guests" type="number" min={1} max={12} {...register("guests")} className="rounded-none border-[#e8e2d6]/10 bg-[#0a0a0a] text-[#e8e2d6]" />
          {errors.guests && <p className="text-sm text-red-600">{errors.guests.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.2em] text-[#e8e2d6]/60">
          {locale === "de" ? "Nachricht" : locale === "it" ? "Messaggio" : "Message"}
        </label>
        <Textarea
          id="message"
          {...register("message")}
          rows={5}
          className="resize-none rounded-none border-[#e8e2d6]/10 bg-[#0a0a0a] text-[#e8e2d6]"
          placeholder={locale === "de" ? "Erzaehl uns vom Anlass, von Ernährungswuenschen oder Sitzwunsch." : locale === "it" ? "Raccontaci dell'occasione, di note alimentari o preferenze di seduta." : "Tell us about the occasion, dietary notes, or seating preferences."}
        />
        {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="h-12 w-full rounded-none bg-[#c5a059] text-[#0a0a0a] hover:bg-[#d4b47a]">
        {isSubmitting ? (locale === "de" ? "Sende..." : locale === "it" ? "Invio..." : "Sending...") : (locale === "de" ? "Reservierungsanfrage senden" : locale === "it" ? "Invia richiesta di prenotazione" : "Send reservation request")}
      </Button>
      {submitError && <p className="text-sm text-red-600">{submitError}</p>}
    </form>
  )
}
