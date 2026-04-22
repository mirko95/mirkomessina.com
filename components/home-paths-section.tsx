"use client"

import Link from "next/link"
import { ArrowRight, Briefcase, Clock3, MessageSquare, Sparkles, UserRound, LayoutGrid } from "lucide-react"
import { getHomeCopy } from "@/lib/site-copy"
import { localizedPath, type Locale } from "@/lib/i18n"

type PathItem = {
  href: string
  title: string
  description: string
  icon: typeof Briefcase
}

export function HomePathsSection({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)
  const items: PathItem[] = [
    {
      href: "/services",
      title: locale === "it" ? "Servizi" : locale === "de" ? "Leistungen" : "Services",
      description:
        locale === "it"
          ? "Cosa costruisco, per chi e con quale priorita`."
          : locale === "de"
            ? "Was ich baue, fuer wen und mit welcher Prioritaet."
            : "What I build, for whom, and with what priority.",
      icon: Briefcase,
    },
    {
      href: "/process",
      title: locale === "it" ? "Processo" : locale === "de" ? "Ablauf" : "Process",
      description:
        locale === "it"
          ? "Come passo dall'idea al lancio senza appesantire il progetto."
          : locale === "de"
            ? "Wie ich von der Idee zum Launch komme, ohne das Projekt zu verkomplizieren."
            : "How I go from idea to launch without overcomplicating the work.",
      icon: Clock3,
    },
    {
      href: "/examples",
      title: locale === "it" ? "Esempi" : locale === "de" ? "Beispiele" : "Examples",
      description:
        locale === "it"
          ? "Pagine e prototipi che mostrano il livello del lavoro."
          : locale === "de"
            ? "Seiten und Prototypen, die das Arbeitsniveau zeigen."
            : "Pages and prototypes that show the level of the work.",
      icon: LayoutGrid,
    },
    {
      href: "/about",
      title: locale === "it" ? "Chi sono" : locale === "de" ? "Ueber mich" : "About",
      description:
        locale === "it"
          ? "Il mio background tra supporto, web e AI."
          : locale === "de"
            ? "Mein Hintergrund zwischen Support, Web und KI."
            : "My background across support, web, and AI.",
      icon: UserRound,
    },
    {
      href: "/faq",
      title: "FAQ",
      description:
        locale === "it"
          ? "Le domande piu` frequenti in un'unica pagina."
          : locale === "de"
            ? "Die haeufigsten Fragen auf einer Seite."
            : "The most common questions in one place.",
      icon: MessageSquare,
    },
    {
      href: "/contact",
      title: locale === "it" ? "Contatto" : locale === "de" ? "Kontakt" : "Contact",
      description:
        locale === "it"
          ? "Se vuoi partire, scrivimi qui."
          : locale === "de"
            ? "Wenn du starten willst, schreib mir hier."
            : "If you want to start, reach out here.",
      icon: Sparkles,
    },
  ]

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.03),transparent_42%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.03),transparent_44%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="mb-8 flex flex-col gap-3 lg:mb-10">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            {locale === "it" ? "Percorso rapido" : locale === "de" ? "Schnellzugriff" : "Quick paths"}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-balance">
            {locale === "it"
              ? "La home rimanda alle pagine giuste"
              : locale === "de"
                ? "Die Startseite verweist auf die passenden Seiten"
                : "The homepage points to the right pages"}
          </h2>
          <p className="max-w-3xl text-pretty text-muted-foreground">
            {locale === "it"
              ? "Così la home resta breve e ognuna delle parti importanti vive in una pagina dedicata."
              : locale === "de"
                ? "So bleibt die Startseite kurz und jeder wichtige Teil lebt auf einer eigenen Seite."
                : "That keeps the homepage short and gives each important part its own page."}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.href}
                href={localizedPath(locale, item.href)}
                className="group rounded-[1.5rem] border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/70"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {copy.hero.stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-full border border-border/40 bg-card/40 px-4 py-2 text-sm text-muted-foreground"
            >
              <span className="font-semibold text-foreground">{stat.value}</span> {stat.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
