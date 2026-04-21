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

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: `Reservation request for ${values.guests} guests`,
          message: values.message,
          date: values.date,
          guests: values.guests,
          type: "reservation",
          honeypot: "",
        }),
      })

      const payload = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error || (locale === "it" ? "Qualcosa e` andato storto." : locale === "de" ? "Etwas ist schiefgelaufen." : "Something went wrong."))
      }

      setSubmitted(true)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : locale === "it" ? "Qualcosa e` andato storto." : locale === "de" ? "Etwas ist schiefgelaufen." : "Something went wrong.")
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">{locale === "de" ? "Anfrage gesendet" : locale === "it" ? "Richiesta inviata" : "Request sent"}</p>
        <h3 className="mt-3 text-2xl font-semibold text-stone-950">{locale === "de" ? "Deine Reservierungsanfrage wurde gesendet" : locale === "it" ? "La tua richiesta di prenotazione e` stata inviata" : "Your reservation request was sent"}</h3>
        <p className="mt-3 text-sm leading-7 text-stone-600">
          {locale === "de" ? "Ich habe die Details in meinem Gmail-Postfach erhalten und antworte so schnell wie moeglich." : locale === "it" ? "Ho ricevuto i dettagli nella mia casella Gmail e rispondero` il prima possibile." : "I received the details in my Gmail inbox and will reply as soon as possible."}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-stone-900">
            {locale === "de" ? "Name" : locale === "it" ? "Nome" : "Name"}
          </label>
          <Input id="name" {...register("name")} className="border-stone-300 bg-white" placeholder={locale === "de" ? "Dein Name" : locale === "it" ? "Il tuo nome" : "Your name"} />
          {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-stone-900">
            {locale === "de" ? "E-Mail" : locale === "it" ? "Email" : "Email"}
          </label>
          <Input id="email" type="email" {...register("email")} className="border-stone-300 bg-white" placeholder="you@example.com" />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="date" className="text-sm font-medium text-stone-900">
            {locale === "de" ? "Datum" : locale === "it" ? "Data" : "Date"}
          </label>
          <Input id="date" type="date" {...register("date")} className="border-stone-300 bg-white" />
          {errors.date && <p className="text-sm text-red-600">{errors.date.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="guests" className="text-sm font-medium text-stone-900">
            {locale === "de" ? "Gaeste" : locale === "it" ? "Ospiti" : "Guests"}
          </label>
          <Input id="guests" type="number" min={1} max={12} {...register("guests")} className="border-stone-300 bg-white" />
          {errors.guests && <p className="text-sm text-red-600">{errors.guests.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-stone-900">
          {locale === "de" ? "Nachricht" : locale === "it" ? "Messaggio" : "Message"}
        </label>
        <Textarea
          id="message"
          {...register("message")}
          rows={5}
          className="resize-none border-stone-300 bg-white"
          placeholder={locale === "de" ? "Erzaehl uns vom Anlass, von Ernährungswuenschen oder Sitzwunsch." : locale === "it" ? "Raccontaci dell'occasione, di note alimentari o preferenze di seduta." : "Tell us about the occasion, dietary notes, or seating preferences."}
        />
        {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="h-12 w-full rounded-full bg-stone-900 text-white hover:bg-stone-800">
        {isSubmitting ? (locale === "de" ? "Sende..." : locale === "it" ? "Invio..." : "Sending...") : (locale === "de" ? "Reservierungsanfrage senden" : locale === "it" ? "Invia richiesta di prenotazione" : "Send reservation request")}
      </Button>
      {submitError && <p className="text-sm text-red-600">{submitError}</p>}
    </form>
  )
}
