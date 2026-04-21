import { NextRequest, NextResponse } from "next/server"
import { detectLocaleFromAcceptLanguage, isLocale, type Locale } from "@/lib/i18n"

function getLocaleFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0]
  return isLocale(firstSegment) ? firstSegment : "en"
}

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const pathnameLocale = getLocaleFromPathname(request.nextUrl.pathname)
  const locale =
    pathnameLocale === "en"
      ? detectLocaleFromAcceptLanguage(request.headers.get("accept-language"))
      : pathnameLocale

  requestHeaders.set("x-locale", locale)

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
}
