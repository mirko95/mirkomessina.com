"use client"

import Image from "next/image"
import { siteConfig } from "@/lib/site"
import { getHomeCopy } from "@/lib/site-copy"
import type { Locale } from "@/lib/i18n"

export function AboutSection({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)
  const timeline =
    locale === "it"
      ? [
          { step: "01", title: "Ospitalità", text: "Disciplina, lavoro di squadra e attenzione alle persone." },
          { step: "02", title: "Supporto tecnico", text: "Diagnosi, monitoraggio e risoluzione di problemi reali." },
          { step: "03", title: "Web + AI", text: "Progetti pratici, strumenti utili e automazioni concrete." },
        ]
      : locale === "de"
        ? [
            { step: "01", title: "Gastronomie", text: "Disziplin, Teamarbeit und ruhige Arbeit unter Druck." },
            { step: "02", title: "Technischer Support", text: "Analyse, Monitoring und Lösung echter Probleme." },
            { step: "03", title: "Web + KI", text: "Praktische Projekte, nützliche Tools und reale Automationen." },
          ]
        : [
            { step: "01", title: "Hospitality", text: "Discipline, teamwork, and staying effective under pressure." },
            { step: "02", title: "Technical support", text: "Monitoring, troubleshooting, and solving real problems." },
            { step: "03", title: "Web + AI", text: "Practical projects, useful tools, and concrete automation." },
          ]
  const projectFocus =
    locale === "it"
      ? ["Chiarezza", "Praticità", "Risultati reali", "Automazioni utili"]
      : locale === "de"
        ? ["Klarheit", "Praxisnahe Lösungen", "Reale Ergebnisse", "Nützliche Automationen"]
        : ["Clarity", "Practicality", "Real results", "Useful automation"]
  const approachIntro =
    locale === "it"
      ? "Quando inizio un progetto parto da problemi concreti, non da effetti visivi."
      : locale === "de"
        ? "Wenn ich ein Projekt starte, beginne ich mit echten Problemen und nicht mit visuellen Effekten."
        : "When I start a project, I begin with real problems, not visual effects."
  const approachPoints =
    locale === "it"
      ? ["Chiarezza sul risultato", "Iterazioni rapide", "Struttura facile da mantenere"]
      : locale === "de"
        ? ["Klarheit über das Ziel", "Schnelle Iterationen", "Leicht wartbare Struktur"]
        : ["Clear outcome", "Fast iterations", "Easy-to-maintain structure"]
  const buildItems =
    locale === "it"
      ? [
          { title: "Siti web", text: "Landing, home e pagine di servizio con struttura chiara." },
          { title: "Tool interni", text: "Dashboard semplici, utility e strumenti per il team." },
          { title: "AI pratica", text: "Assistenti GPT, workflow e automazioni utili." },
        ]
      : locale === "de"
        ? [
            { title: "Websites", text: "Landingpages, Homepages und Serviceseiten mit klarer Struktur." },
            { title: "Interne Tools", text: "Einfache Dashboards, Utilities und Team-Werkzeuge." },
            { title: "Praktische KI", text: "GPT-Assistenten, Workflows und nützliche Automationen." },
          ]
        : [
            { title: "Websites", text: "Landing pages, homepages, and service pages with clear structure." },
            { title: "Internal tools", text: "Simple dashboards, utilities, and team tools." },
            { title: "Practical AI", text: "GPT assistants, workflows, and useful automation." },
          ]

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.035),transparent_42%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.03),transparent_40%),radial-gradient(circle_at_bottom,rgba(79,70,229,0.025),transparent_46%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />

            <div className="relative flex h-full flex-col rounded-2xl border border-border/50 bg-card/80 p-8 backdrop-blur-xl lg:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-2">{siteConfig.name}</h3>
              <p className="text-primary font-medium mb-6">
                {locale === "it"
                  ? "Sviluppatore web e costruttore AI"
                  : locale === "de"
                    ? "Webentwickler und KI-Builder"
                    : siteConfig.role}
              </p>

              <div className="rounded-2xl border border-border/50 bg-background/30 p-5">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
                  {locale === "it" ? "Approccio" : locale === "de" ? "Ansatz" : "Approach"}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{approachIntro}</p>
                <div className="mt-4 space-y-2">
                  {approachPoints.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/80" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/50">
                {["PHP", "Laravel", "Python", "PyTorch", "JavaScript", "Git"].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 text-muted-foreground border border-border/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
                  {locale === "it" ? "Percorso" : locale === "de" ? "Werdegang" : "Path"}
                </p>
                <div className="space-y-4">
                  {timeline.map((item) => (
                    <div key={item.step} className="grid gap-3 sm:grid-cols-[auto,1fr]">
                      <div className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-[11px] font-semibold text-primary">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/50 bg-background/30 p-5">
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
                    {locale === "it" ? "Cosa porto ai progetti" : locale === "de" ? "Was ich einbringe" : "What I bring"}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {projectFocus.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/80" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-border/50 bg-background/30 p-5">
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
                    {locale === "it" ? "Cosa sto costruendo" : locale === "de" ? "Was ich baue" : "What I'm building"}
                  </p>
                  <div className="mt-4 space-y-3">
                    {buildItems.map((item) => (
                      <div key={item.title} className="rounded-xl border border-border/40 bg-card/40 p-3">
                        <p className="text-sm font-medium text-foreground">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-lg blur-lg" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-6 overflow-hidden rounded-[1.75rem] border border-border/40 bg-background/40 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/home/website-profile-photo.png"
                  alt={siteConfig.name}
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              {copy.about.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-balance">
              {copy.about.title}
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground">
              {copy.about.description.map((item) => (
                <p key={item} className="text-pretty leading-relaxed">
                  {item}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border/50">
              {copy.about.stats.map((stat) => (
                <div key={stat.value}>
                  <p className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
