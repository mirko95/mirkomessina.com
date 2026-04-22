import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { localizedPath, type Locale } from "@/lib/i18n"

export function PageShell({
  locale,
  eyebrow,
  title,
  description,
  headerAside,
  children,
}: {
  locale: Locale
  eyebrow: string
  title: string
  description: string
  headerAside?: ReactNode
  children: ReactNode
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.12),transparent_34%),radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.10),transparent_32%),radial-gradient(ellipse_at_50%_18%,rgba(79,70,229,0.08),transparent_52%),radial-gradient(ellipse_at_bottom,rgba(2,6,23,0.18),transparent_42%),linear-gradient(180deg,rgba(3,7,18,0.08),rgba(3,7,18,0.22)_28%,rgba(3,7,18,0.36)_58%,rgba(3,7,18,0.58)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[linear-gradient(180deg,rgba(99,102,241,0.08),rgba(99,102,241,0.03)_45%,transparent_88%)]" />

      <header className="relative z-10">
        <div className="container mx-auto px-4 lg:px-8 pt-6">
          <Button asChild variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
            <Link href={localizedPath(locale, "/")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {locale === "it" ? "Torna alla home" : locale === "de" ? "Zur Startseite" : "Back to home"}
            </Link>
          </Button>

          <div className={`grid gap-10 ${headerAside ? "lg:grid-cols-[1.15fr_0.85fr] lg:items-start" : ""}`}>
            <div className="max-w-3xl">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                {eyebrow}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed">
                {description}
              </p>
            </div>

            {headerAside ? <div className="self-start">{headerAside}</div> : null}
          </div>
        </div>
      </header>

      <main className="relative z-10">{children}</main>
    </div>
  )
}
