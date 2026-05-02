export const supportedLocales = ["en", "it", "de"] as const

export type Locale = (typeof supportedLocales)[number]

export const defaultLocale: Locale = "en"

export function isLocale(value: string | undefined | null): value is Locale {
  return supportedLocales.includes(value as Locale)
}

export function resolveLocale(value: string | undefined | null): Locale {
  return isLocale(value) ? value : defaultLocale
}

export function detectLocaleFromAcceptLanguage(value: string | null | undefined): Locale {
  const header = (value ?? "").toLowerCase()

  if (header.includes("de")) {
    return "de"
  }

  if (header.includes("it")) {
    return "it"
  }

  return defaultLocale
}

export function localizedPath(locale: Locale, path: string) {
  if (!path.startsWith("/")) {
    throw new Error(`localizedPath expects an absolute path, received ${path}`)
  }

  if (locale === "en" && path === "/") {
    return path
  }

  return path === "/" ? `/${locale}` : `/${locale}${path}`
}

export function stripLocalePrefix(pathname: string) {
  for (const locale of supportedLocales) {
    if (pathname === `/${locale}`) {
      return "/"
    }
    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(locale.length + 1) || "/"
    }
  }

  return pathname
}
