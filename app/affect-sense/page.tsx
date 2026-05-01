import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { localizedPath, resolveLocale } from "@/lib/i18n"

export default async function AffectSenseRoute() {
  const locale = resolveLocale((await headers()).get("x-locale"))
  redirect(localizedPath(locale, "/affect-sense"))
}
