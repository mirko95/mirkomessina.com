"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Layers3,
  Pause,
  Play,
  Settings2,
  Sparkles,
  TimerReset,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { getModelWatchData } from "./data"
import type { Locale } from "@/lib/i18n"

function Section({
  id,
  children,
  className = "",
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`relative overflow-hidden py-20 lg:py-28 ${className}`}>
      {children}
    </section>
  )
}

function Shell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[2rem] border border-stone-200 bg-white shadow-[0_24px_90px_rgba(17,17,17,0.08)] ${className}`}>
      {children}
    </div>
  )
}

function Badge({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return <span className={`rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-600 ${className}`}>{children}</span>
}

function MiniCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: ReactNode
}) {
  return (
    <div className="rounded-[1.4rem] border border-stone-200 bg-white p-4 shadow-[0_10px_35px_rgba(17,17,17,0.05)]">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ff6a2b]/10 text-[#ff6a2b]">{icon}</div>
      <p className="mt-4 text-sm font-semibold text-stone-900">{title}</p>
      <p className="mt-2 text-sm leading-6 text-stone-600">{description}</p>
    </div>
  )
}

export function ModelWatchPage({ locale = "en" }: { locale?: Locale }) {
  const data = getModelWatchData(locale)

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#111111] text-[#ff6a2b] shadow-[0_0_0_6px_rgba(255,106,43,0.08)]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-stone-950">Busy</p>
              <p className="text-xs text-stone-500">{locale === "it" ? "Landing page prodotto" : locale === "de" ? "Produkt-Landingpage" : "Product landing page"}</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {data.navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-stone-500 transition-colors hover:text-stone-950">
                {link.label}
              </a>
            ))}
          </nav>

          <Button className="rounded-full bg-[#111111] text-white hover:bg-stone-800" asChild>
            <Link href="#faq">
              {locale === "it" ? "Richiedi info" : locale === "de" ? "Info anfragen" : "Request info"}
            </Link>
          </Button>
        </div>
      </header>

      <Section id="top">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.04)_1px,transparent_1px)] bg-[size:78px_78px] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,106,43,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(17,17,17,0.08),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8">
          <div className="max-w-2xl pt-4 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#ff6a2b]/20 bg-[#ff6a2b]/10 px-4 py-2 text-sm font-medium text-[#c84e18]"
            >
              <span className="h-2 w-2 rounded-full bg-[#ff6a2b]" />
              {data.hero.eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="mt-6 max-w-xl text-balance text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl lg:text-7xl"
            >
              {data.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-xl text-lg leading-8 text-stone-600 text-pretty"
            >
              {data.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button className="h-12 rounded-full bg-[#ff6a2b] px-6 text-white hover:bg-[#ef5e20]" asChild>
                <Link href="#product">
                  {data.hero.primary}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="h-12 rounded-full border-stone-300 bg-white px-6 text-stone-900 hover:bg-stone-50" asChild>
                <Link href="#controls">{data.hero.secondary}</Link>
              </Button>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-3">
              {data.hero.badges.map((badge) => (
                <Badge key={badge}>{badge}</Badge>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {data.stats.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-stone-200 bg-white p-4 shadow-[0_14px_50px_rgba(17,17,17,0.05)]">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">{item.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-stone-950">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="relative pt-4 lg:pt-10"
          >
            <div className="absolute -inset-8 rounded-[3rem] bg-[#ff6a2b]/10 blur-3xl" />
            <Shell className="relative overflow-hidden p-5 lg:p-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <p className="text-sm font-medium text-stone-950">{locale === "it" ? "Hero visual" : locale === "de" ? "Hero-Visual" : "Hero visual"}</p>
                  <p className="text-xs text-stone-500">{locale === "it" ? "Una pagina che si capisce subito" : locale === "de" ? "Sofort erfassbar" : "Instantly readable"}</p>
                </div>
                <div className="rounded-full border border-[#ff6a2b]/20 bg-[#ff6a2b]/10 px-3 py-1 text-xs font-medium text-[#c84e18]">
                  {locale === "it" ? "Live build" : locale === "de" ? "Live Build" : "Live build"}
                </div>
              </div>

              <div className="mt-5 rounded-[1.7rem] border border-stone-200 bg-[linear-gradient(180deg,#ffffff,#fbf8f2)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                <div className="relative overflow-hidden rounded-[1.4rem] border border-stone-200 bg-white p-5 shadow-[0_16px_50px_rgba(17,17,17,0.08)]">
                  <div className="absolute right-6 top-5 h-24 w-24 rounded-full bg-[#ff6a2b]/10 blur-2xl" />
                  <div className="flex items-start justify-between gap-4">
                    <div className="max-w-[72%]">
                      <p className="text-xs uppercase tracking-[0.24em] text-stone-400">{locale === "it" ? "Product launch" : locale === "de" ? "Produkt-Launch" : "Product launch"}</p>
                      <p className="mt-3 text-2xl font-semibold leading-tight text-stone-950">
                        {locale === "it"
                          ? "Un prodotto chiaro, leggibile e facile da vendere."
                          : locale === "de"
                            ? "Ein klares Produkt, leicht zu lesen und leicht zu verkaufen."
                            : "A clear product that is easy to read and easy to sell."}
                      </p>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-stone-200 bg-[#111111] text-[#ff6a2b] shadow-[0_18px_40px_rgba(17,17,17,0.18)]">
                      <Clock3 className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-stone-200 bg-[#111111] p-5 text-white shadow-[0_20px_50px_rgba(17,17,17,0.28)]">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-stone-400">
                      <span>Busy</span>
                      <span>Now</span>
                    </div>
                    <div className="mt-6 flex items-center justify-center">
                      <div className="rounded-[1.6rem] border border-[#ff6a2b]/20 bg-black px-6 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                        <p className="font-mono text-5xl tracking-[0.28em] text-[#ff5a1f] sm:text-6xl">BUSY</p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff6a2b]/15 text-[#ff9d6f]">
                          <Play className="h-4 w-4 fill-current" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Focus timer</p>
                          <p className="text-sm text-white">25:00</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-200">
                        <Pause className="h-4 w-4 text-[#ff6a2b]" />
                        {locale === "it" ? "Pausa breve" : locale === "de" ? "Kurze Pause" : "Short break"}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {[
                      ["Status", "Team online"],
                      ["Tasks", "3 active"],
                      ["Mode", "Deep work"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-[1.2rem] border border-stone-200 bg-stone-50 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-stone-400">{label}</p>
                        <p className="mt-2 text-sm font-semibold text-stone-900">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.2rem] border border-stone-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Focus</p>
                    <Sparkles className="h-4 w-4 text-[#ff6a2b]" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-stone-700">{locale === "it" ? "Il lavoro si sente ordinato e chiaro." : locale === "de" ? "Die Arbeit wirkt geordnet und klar." : "The workflow feels ordered and clear."}</p>
                </div>
                <div className="rounded-[1.2rem] border border-stone-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Layout</p>
                    <Layers3 className="h-4 w-4 text-[#ff6a2b]" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-stone-700">{locale === "it" ? "Pochi elementi, gerarchia forte." : locale === "de" ? "Wenige Elemente, starke Hierarchie." : "Few elements, strong hierarchy."}</p>
                </div>
                <div className="rounded-[1.2rem] border border-stone-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Controls</p>
                    <Settings2 className="h-4 w-4 text-[#ff6a2b]" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-stone-700">{locale === "it" ? "Controlli semplici e concreti." : locale === "de" ? "Einfache, konkrete Controls." : "Simple, concrete controls."}</p>
                </div>
              </div>
            </Shell>
          </motion.div>
        </div>
      </Section>

      <Section id="product" className="bg-[#fbf8f2]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c84e18]">{locale === "it" ? "Productivity multi-tool" : locale === "de" ? "Produktivitaets-Multitool" : "Productivity multi-tool"}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
              {locale === "it"
                ? "Tutto quello che serve in una sola interfaccia leggibile."
                : locale === "de"
                  ? "Alles, was gebraucht wird, in einer klar lesbaren Oberfläche."
                  : "Everything you need in one readable interface."}
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              {locale === "it"
                ? "La pagina comunica il prodotto come se fosse già reale: moduli chiari, widget evidenti e una struttura che parla di uso quotidiano."
                : locale === "de"
                  ? "Die Seite vermittelt das Produkt so, als waere es schon real: klare Module, sichtbare Widgets und eine Struktur fuer den Alltag."
                  : "The page presents the product as if it were already real: clear modules, visible widgets, and a structure built for daily use."}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {data.featureCards.map((card, index) => (
                <MiniCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  icon={index === 0 ? <BadgeCheck className="h-4 w-4" /> : index === 1 ? <Clock3 className="h-4 w-4" /> : <TimerReset className="h-4 w-4" />}
                />
              ))}
            </div>

            <Shell className="p-5">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <p className="text-sm font-medium text-stone-900">{locale === "it" ? "Busy dashboard" : locale === "de" ? "Busy-Dashboard" : "Busy dashboard"}</p>
                  <p className="text-xs text-stone-500">{locale === "it" ? "Stato live, compiti e prossima azione" : locale === "de" ? "Live-Status, Aufgaben und naechster Schritt" : "Live status, tasks, and next action"}</p>
                </div>
                <Badge className="bg-[#ff6a2b]/10 text-[#c84e18]">{locale === "it" ? "Live" : locale === "de" ? "Live" : "Live"}</Badge>
              </div>

              <div className="mt-5 grid gap-3">
                {data.statusCards.map((card, index) => (
                  <div key={card.title} className={`rounded-[1.3rem] border p-4 ${index === 0 ? "border-[#ff6a2b]/20 bg-[#ff6a2b]/10" : "border-stone-200 bg-white"}`}>
                    <p className="text-sm font-semibold text-stone-950">{card.title}</p>
                    <p className="mt-2 text-sm leading-6 text-stone-600">{card.description}</p>
                  </div>
                ))}
              </div>
            </Shell>
          </div>
        </div>
      </Section>

      <Section id="controls" className="bg-[#f7f4ee]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c84e18]">{locale === "it" ? "Manual controls" : locale === "de" ? "Manuelle Controls" : "Manual controls"}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
              {locale === "it"
                ? "Comandi espliciti, niente caos visivo."
                : locale === "de"
                  ? "Klar erkennbare Controls, kein visuelles Chaos."
                  : "Explicit controls, no visual clutter."}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Shell className="p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {data.controlCards.map((card, index) => (
                  <div key={card.title} className={`rounded-[1.4rem] border p-5 ${index === 0 ? "border-[#ff6a2b]/20 bg-[#111111] text-white" : "border-stone-200 bg-white"}`}>
                    <div className="flex items-center justify-between">
                      <p className={`text-xs uppercase tracking-[0.2em] ${index === 0 ? "text-stone-400" : "text-stone-400"}`}>{card.title}</p>
                      {index === 0 ? <Play className="h-4 w-4 text-[#ff6a2b]" /> : <Clock3 className="h-4 w-4 text-[#ff6a2b]" />}
                    </div>
                    <p className={`mt-3 text-sm leading-6 ${index === 0 ? "text-stone-200" : "text-stone-600"}`}>{card.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-[1.5rem] border border-stone-200 bg-[#111111] p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-400">{locale === "it" ? "Primary control" : locale === "de" ? "Primare Steuerung" : "Primary control"}</p>
                    <p className="mt-2 text-2xl font-semibold">{locale === "it" ? "Start / Pausa" : locale === "de" ? "Start / Pause" : "Start / Pause"}</p>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#ff6a2b]/20 bg-[#ff6a2b]/10 text-[#ff6a2b]">
                    <Settings2 className="h-7 w-7" />
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Focus", "Single task mode"],
                    ["Timer", "25-minute cycle"],
                    ["Notes", "Quick capture"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-[1.1rem] border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-stone-400">{label}</p>
                      <p className="mt-2 text-sm font-medium text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Shell>

            <div className="grid gap-6">
              <Shell className="p-5">
                <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                  <div>
                    <p className="text-sm font-medium text-stone-900">{locale === "it" ? "Live Busy status" : locale === "de" ? "Live Busy-Status" : "Live Busy status"}</p>
                    <p className="text-xs text-stone-500">{locale === "it" ? "Una vista che sembra un prodotto vero" : locale === "de" ? "Eine Ansicht, die sich wie ein echtes Produkt anfuellt" : "A view that feels like a real product"}</p>
                  </div>
                  <Badge className="border-[#ff6a2b]/20 bg-[#ff6a2b]/10 text-[#c84e18]">On</Badge>
                </div>

                <div className="mt-5 overflow-hidden rounded-[1.6rem] border border-stone-200 bg-white shadow-[0_18px_50px_rgba(17,17,17,0.08)]">
                  <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="border-b border-stone-200 p-5 lg:border-b-0 lg:border-r">
                      <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Today</p>
                      <p className="mt-2 text-3xl font-semibold text-stone-950">08:45</p>
                      <p className="mt-2 text-sm leading-6 text-stone-600">{locale === "it" ? "La giornata parte ordinata, con lo stato sempre visibile." : locale === "de" ? "Der Tag startet geordnet, der Status bleibt immer sichtbar." : "The day starts in order, with status always visible."}</p>
                      <div className="mt-5 space-y-3">
                        {["Process proposal", "Review feedback", "Ship update"].map((item) => (
                          <div key={item} className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3">
                            <div className="h-2.5 w-2.5 rounded-full bg-[#ff6a2b]" />
                            <p className="text-sm text-stone-700">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative min-h-[320px] bg-[linear-gradient(180deg,#fbf8f2,#f4efe7)] p-5">
                      <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-[#ff6a2b]/10 blur-2xl" />
                      <div className="relative mx-auto mt-4 max-w-[320px] rounded-[1.8rem] border border-stone-200 bg-[#111111] p-4 text-white shadow-[0_18px_45px_rgba(17,17,17,0.18)]">
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-stone-400">
                          <span>Display</span>
                          <span>Active</span>
                        </div>
                        <div className="mt-4 rounded-[1.4rem] border border-white/10 bg-black p-4">
                          <div className="flex items-center justify-between text-xs text-stone-400">
                            <span>Task</span>
                            <span>09:14</span>
                          </div>
                          <div className="mt-4 h-20 rounded-[1.2rem] bg-[radial-gradient(circle_at_center,_rgba(255,106,43,0.25),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
                          <div className="mt-4 flex items-center justify-center">
                            <p className="font-mono text-4xl tracking-[0.26em] text-[#ff5a1f]">BUSY</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Shell>

              <div className="grid gap-4 sm:grid-cols-2">
                <MiniCard
                  title={locale === "it" ? "Scorciatoie rapide" : locale === "de" ? "Schnelle Shortcuts" : "Quick shortcuts"}
                  description={locale === "it" ? "Pochi gesti, meno frizione, piu` ritmo." : locale === "de" ? "Weniger Reibung, mehr Tempo." : "Fewer gestures, less friction, more rhythm."}
                  icon={<TimerReset className="h-4 w-4" />}
                />
                <MiniCard
                  title={locale === "it" ? "Feedback chiaro" : locale === "de" ? "Klares Feedback" : "Clear feedback"}
                  description={locale === "it" ? "Lo stato cambia in modo visibile e immediato." : locale === "de" ? "Der Status aendert sich sichtbar und sofort." : "State changes are visible and immediate."}
                  icon={<BadgeCheck className="h-4 w-4" />}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff9d6f]">
              {locale === "it" ? "Monochrome back screen" : locale === "de" ? "Monochromer Ruecken" : "Monochrome back screen"}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {locale === "it"
                ? "Un finale piu` forte, con un blocco scuro che fa respirare la pagina."
                : locale === "de"
                  ? "Ein staerkeres Finale mit einem dunklen Block, der der Seite Luft gibt."
                  : "A stronger ending with a dark block that gives the page room to breathe."}
            </h2>
          </div>

          <div className="mt-12 rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,106,43,0.12),transparent_34%),linear-gradient(180deg,#0d0d0d,#050505)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Back panel</p>
                <p className="mt-3 text-2xl font-semibold">Quiet hardware feel</p>
                <p className="mt-4 text-sm leading-7 text-stone-300">{locale === "it" ? "Una chiusura piu` materiale, quasi da prodotto fisico." : locale === "de" ? "Ein materieller Abschluss, fast wie ein physisches Produkt." : "A more material finish, almost like a physical product."}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                  <div className="h-2 w-16 rounded-full bg-[#ff6a2b]/60" />
                  <div className="mt-5 h-32 rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" />
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-400">System</p>
                  <div className="mt-4 space-y-3">
                    {["Focus mode", "Active timer", "Status board"].map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-stone-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="faq" className="bg-[#f7f4ee]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c84e18]">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
            {locale === "it"
              ? "Le domande giuste prima di andare online."
              : locale === "de"
                ? "Die richtigen Fragen vor dem Go-Live."
                : "The right questions before going live."}
          </h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {data.faqItems.map((item) => (
              <div key={item.q} className="rounded-[1.6rem] border border-stone-200 bg-white p-6 shadow-[0_12px_45px_rgba(17,17,17,0.05)]">
                <p className="text-lg font-semibold text-stone-950">{item.q}</p>
                <p className="mt-3 text-sm leading-7 text-stone-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <footer className="border-t border-stone-200 bg-[#111111] py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-lg font-semibold">Busy</p>
            <p className="mt-2 max-w-md text-sm leading-7 text-stone-400">{data.footerNote}</p>
          </div>
          <Button className="rounded-full bg-white text-stone-950 hover:bg-stone-200" asChild>
            <Link href="#top">
              {locale === "it" ? "Torna su" : locale === "de" ? "Nach oben" : "Back to top"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </footer>
    </main>
  )
}
