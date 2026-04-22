"use client"

import { useEffect, useMemo, useState } from "react"
import { Analytics } from "@vercel/analytics/react"
import { ShieldCheck, Cookie, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type ConsentState = "accepted" | "rejected" | null

const CONSENT_COOKIE = "site_cookie_consent"
const CONSENT_STORAGE_KEY = "site_cookie_consent"
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365

function readStoredConsent(): ConsentState {
  if (typeof window === "undefined") {
    return null
  }

  const storageValue = window.localStorage.getItem(CONSENT_STORAGE_KEY)
  if (storageValue === "accepted" || storageValue === "rejected") {
    return storageValue
  }

  const cookieMatch = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${CONSENT_COOKIE}=`))
  const cookieValue = cookieMatch?.split("=")[1]

  if (cookieValue === "accepted" || cookieValue === "rejected") {
    return cookieValue
  }

  return null
}

function persistConsent(value: Exclude<ConsentState, null>) {
  const secure = window.location.protocol === "https:"
  const cookieParts = [
    `${CONSENT_COOKIE}=${value}`,
    `Max-Age=${ONE_YEAR_SECONDS}`,
    "Path=/",
    "SameSite=Lax",
  ]

  if (secure) {
    cookieParts.push("Secure")
  }

  document.cookie = cookieParts.join("; ")
  window.localStorage.setItem(CONSENT_STORAGE_KEY, value)
}

export function CookieConsent() {
  const [mounted, setMounted] = useState(false)
  const [consent, setConsent] = useState<ConsentState>(null)
  const [preferencesOpen, setPreferencesOpen] = useState(false)

  useEffect(() => {
    setConsent(readStoredConsent())
    setMounted(true)
  }, [])

  const showBanner = mounted && (consent === null || preferencesOpen)
  const analyticsEnabled = useMemo(
    () => mounted && consent === "accepted" && process.env.NODE_ENV === "production",
    [consent, mounted],
  )
  const isPreferenceEdit = consent !== null && preferencesOpen

  const handleChoice = (value: Exclude<ConsentState, null>) => {
    persistConsent(value)
    setConsent(value)
    setPreferencesOpen(false)
  }

  const openPreferences = () => {
    setPreferencesOpen(true)
  }

  const closeBanner = () => {
    if (consent === null) {
      handleChoice("rejected")
      return
    }

    setPreferencesOpen(false)
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      {analyticsEnabled && <Analytics />}

      {showBanner && (
        <div className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-4xl">
          <div className="rounded-3xl border border-border/60 bg-card/95 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Cookie className="h-6 w-6" />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                      Cookies
                    </p>
                    <h2 className="mt-2 text-lg font-semibold text-foreground">
                      {isPreferenceEdit ? "Update cookie preferences" : "Analytics helps improve the site"}
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={closeBanner}
                    className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    aria-label="Dismiss cookie banner"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {isPreferenceEdit
                    ? "Change your analytics choice below. Your current preference is saved until you choose something else."
                    : "We use one optional analytics tool to understand anonymous traffic and improve the site. A preference cookie is saved to remember your choice."}
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    variant="outline"
                    className="border-border bg-transparent text-foreground hover:bg-secondary"
                    onClick={() => handleChoice("rejected")}
                  >
                    Reject analytics
                  </Button>
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => handleChoice("accepted")}
                  >
                    Accept analytics
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!showBanner && (
        <button
          type="button"
          onClick={openPreferences}
          className="fixed bottom-4 right-4 z-[59] hidden items-center gap-2 rounded-full border border-border/60 bg-card/90 px-4 py-2 text-sm text-muted-foreground shadow-xl shadow-black/20 backdrop-blur-xl transition-colors hover:border-primary/30 hover:text-foreground lg:inline-flex"
          aria-label="Open cookie preferences"
        >
          <ShieldCheck className="h-4 w-4 text-primary" />
          Cookie settings
        </button>
      )}
    </>
  )
}
