import Link from "next/link"
import { localizedPath, supportedLocales, type Locale } from "@/lib/i18n"

const localeLabels: Record<Locale, string> = {
  en: "EN",
  it: "IT",
  de: "DE",
}

export function ExampleLocaleSwitcher({
  locale = "en",
  path,
  className = "",
}: {
  locale?: Locale
  path: string
  className?: string
}) {
  return (
    <div className={`fixed bottom-4 right-4 z-[90] flex rounded-full border border-white/15 bg-black/70 p-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-2xl shadow-black/30 backdrop-blur-md ${className}`}>
      {supportedLocales.map((item) => (
        <Link
          key={item}
          href={localizedPath(item, path)}
          className={`rounded-full px-3 py-2 transition-colors ${
            locale === item ? "bg-white text-black" : "text-white/70 hover:bg-white/10 hover:text-white"
          }`}
        >
          {localeLabels[item]}
        </Link>
      ))}
    </div>
  )
}
