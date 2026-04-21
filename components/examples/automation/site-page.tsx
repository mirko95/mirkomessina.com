"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Plug, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAutomationData } from "./data"
import type { Locale } from "@/lib/i18n"

const copyByLocale = {
  en: {
    brand: "FlowForge",
    tagline: "Workflow builder for operations teams",
    badge: "Turns repetitive admin into visible flows",
    title: "Automation that feels like software.",
    subtitle: "Not spreadsheets.",
    intro:
      "FlowForge helps teams connect forms, payments, CRMs, and reporting without losing oversight. The product reads like software you can explain to a client in one meeting.",
    primary: "Start building",
    liveBadge: "Live workflow",
    secondary: "See flow",
    previewLabel: "Workflow board",
    previewTitle: "One clear path from trigger to action.",
    previewText: "The main flow stays obvious: capture data, route it, and log every result.",
    sourceLabel: "Sources",
    flowLabel: "Flow",
    flowTitle: "One clear path from trigger to action.",
    outcomeLabel: "Outcome",
    useCaseLabel: "Use cases",
    useCaseTitle: "Built around practical workflows, not generic automation jargon.",
    workflowLabel: "Workflow",
    workflowTitle: "A simple execution path that clients can understand at a glance.",
    faqLabel: "FAQ",
    faqTitle: "What buyers ask when they want to replace manual operations.",
    footer: "A portfolio-ready automation page that packages workflows into a clear, client-friendly product story.",
    backToTop: "Back to top",
    metrics: [
      { top: "~30", bottom: "hrs/week saved" },
      { top: "-80%", bottom: "manual tasks" },
      { top: "-90%", bottom: "errors reduced" },
    ],
  },
  it: {
    brand: "FlowForge",
    tagline: "Builder di workflow per team operations",
    badge: "Trasforma l'admin ripetitivo in flussi visibili",
    title: "Automazione che sembra software.",
    subtitle: "Non fogli di calcolo.",
    intro:
      "FlowForge aiuta i team a collegare form, pagamenti, CRM e reporting senza perdere il controllo. Il prodotto sembra software che puoi spiegare a un cliente in un solo incontro.",
    primary: "Inizia a costruire",
    liveBadge: "Workflow live",
    secondary: "Vedi flusso",
    previewLabel: "Flow board",
    previewTitle: "Un percorso chiaro dal trigger all'azione.",
    previewText: "Il flusso principale resta evidente: acquisisci i dati, instradali e registra ogni risultato.",
    sourceLabel: "Sorgenti",
    flowLabel: "Flusso",
    flowTitle: "Un percorso chiaro dal trigger all'azione.",
    outcomeLabel: "Risultato",
    useCaseLabel: "Casi d'uso",
    useCaseTitle: "Costruito attorno a workflow pratici, non a gergo da automazione.",
    workflowLabel: "Workflow",
    workflowTitle: "Un percorso di esecuzione semplice da capire al volo per i clienti.",
    faqLabel: "FAQ",
    faqTitle: "Le domande che fanno i buyer quando vogliono sostituire il lavoro manuale.",
    footer: "Una pagina portfolio-ready che impacchetta l'automazione in una storia prodotto chiara e cliente-friendly.",
    backToTop: "Torna su",
    metrics: [
      { top: "~30", bottom: "ore/settimana risparmiate" },
      { top: "-80%", bottom: "task manuali" },
      { top: "-90%", bottom: "errori ridotti" },
    ],
  },
  de: {
    brand: "FlowForge",
    tagline: "Workflow-Builder fuer Operations-Teams",
    badge: "Macht wiederkehrende Admin-Arbeit sichtbar",
    title: "Automatisierung, die wie Software wirkt.",
    subtitle: "Nicht wie ein Spreadsheet.",
    intro:
      "FlowForge verbindet Formulare, Zahlungen, CRMs und Reporting, ohne die Kontrolle zu verlieren. Das Produkt wirkt wie Software, die man Kunden in einem Termin erklaeren kann.",
    primary: "Starten",
    liveBadge: "Live-Workflow",
    secondary: "Flow ansehen",
    previewLabel: "Live-Workflow",
    previewTitle: "Ein klarer Weg vom Trigger zur Aktion.",
    previewText: "Der Hauptfluss bleibt leicht zu verstehen: Daten erfassen, weiterleiten und das Ergebnis protokollieren.",
    sourceLabel: "Quellen",
    flowLabel: "Ablauf",
    flowTitle: "Ein klarer Weg vom Trigger zur Aktion.",
    outcomeLabel: "Ergebnis",
    useCaseLabel: "Anwendungsfaelle",
    useCaseTitle: "Gebaut um praktische Workflows, nicht um generisches Automations-Jargon.",
    workflowLabel: "Workflow",
    workflowTitle: "Ein Ausfuehrungsweg, den Kunden auf einen Blick verstehen.",
    faqLabel: "FAQ",
    faqTitle: "Was Kunden fragen, wenn sie manuelle Prozesse ersetzen wollen.",
    footer: "Eine portfolio-taugliche Automatisierungsseite, die Workflows in eine klare, kundenfreundliche Produktstory verpackt.",
    backToTop: "Nach oben",
    metrics: [
      { top: "~30", bottom: "Std./Woche gespart" },
      { top: "-80%", bottom: "manuelle Tasks" },
      { top: "-90%", bottom: "Fehler reduziert" },
    ],
  },
} as const

export function FlowForgePage({ locale = "en" }: { locale?: Locale }) {
  const data = getAutomationData(locale)
  const copy = copyByLocale[locale]

  return (
    <main className="min-h-screen bg-[#07111c] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111c]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-300 to-lime-300 text-slate-950 font-bold shadow-[0_12px_24px_rgba(132,204,22,0.12)]">
              F
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{copy.brand}</p>
              <p className="text-xs text-slate-400">{copy.tagline}</p>
            </div>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {data.navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-300 transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
          <Button className="rounded-full bg-white text-slate-950 hover:bg-slate-200" asChild>
            <Link href="#preview">
              {copy.primary}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.06),transparent_34%),linear-gradient(180deg,#07111c_0%,#0c1723_55%,#050b12_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:96px_96px] opacity-10" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div className="max-w-xl pt-4 lg:pt-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-emerald-300/90">{copy.brand}</p>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              {copy.badge}
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.05 }} className="mt-6 max-w-[12ch] text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-6xl">
              <span className="block">{copy.title}</span>
              <span className="block text-2xl font-medium tracking-tight text-slate-300 sm:text-3xl lg:text-[2rem]">{copy.subtitle}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }} className="mt-4 max-w-xl text-lg leading-8 text-slate-300 text-pretty">
              {copy.intro}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button className="h-12 rounded-full bg-emerald-300 px-6 text-slate-950 hover:bg-emerald-200" asChild>
                <Link href="#preview">{copy.primary}</Link>
              </Button>
              <Button variant="outline" className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10" asChild>
                <Link href="#workflow">{copy.secondary}</Link>
              </Button>
            </motion.div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {copy.metrics.map((item) => (
                <div key={item.top} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-4xl font-semibold leading-none text-white">{item.top}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.bottom}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 18, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.08 }} className="relative lg:pt-6">
            <div id="preview" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_28px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm font-medium text-white">{copy.previewLabel}</p>
                  <p className="text-xs text-slate-400">{copy.previewTitle}</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">{copy.liveBadge}</div>
              </div>

              <div className="mt-6 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/65 p-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    <Plug className="h-4 w-4 text-emerald-300" />
                    {copy.sourceLabel}
                  </div>
                  <div className="mt-4 space-y-3">
                    {['Website form', 'CRM record', 'Payment event'].map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.4rem] border border-emerald-300/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-4 shadow-[0_16px_46px_rgba(74,222,128,0.08)]">
                  <div className="relative min-h-[420px] overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#08111b] p-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,222,128,0.05),transparent_28%)]" />
                    <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">{copy.flowLabel}</p>
                        <p className="mt-2 text-xl font-semibold text-white">{copy.flowTitle}</p>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                        <Workflow className="mr-1 inline-block h-3.5 w-3.5 text-emerald-300" />
                        {copy.liveBadge}
                      </div>
                    </div>
                    <div className="relative mt-10 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                      <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Trigger</p>
                        <p className="mt-3 text-sm text-slate-200">New lead arrives</p>
                      </div>
                      <div className="hidden h-px w-10 bg-emerald-300/45 md:block" />
                      <div className="rounded-[1.2rem] border border-emerald-300/30 bg-emerald-300/10 p-5 shadow-[0_0_0_1px_rgba(74,222,128,0.06)]">
                        <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Route</p>
                        <p className="mt-3 text-sm text-white">Enrich and assign</p>
                        <p className="mt-2 text-xs leading-6 text-slate-300">Validate fields, send to CRM, notify sales.</p>
                      </div>
                      <div className="hidden h-px w-10 bg-emerald-300/45 md:block" />
                      <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Output</p>
                        <p className="mt-3 text-sm text-slate-200">Notify and log</p>
                      </div>
                    </div>
                    <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
                      {data.automationCards.slice(0, 1).map((card) => (
                        <div key={card.title} className="rounded-[1.2rem] border border-emerald-300/30 bg-emerald-300/10 p-4">
                          <p className="text-sm font-semibold text-white">{card.title}</p>
                          <p className="mt-2 text-sm leading-7 text-slate-300">{card.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="use-cases" className="bg-[#0a1520] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">{copy.useCaseLabel}</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{copy.useCaseTitle}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {data.useCases.slice(0, 3).map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45, delay: index * 0.04 }} className="rounded-[1.7rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300/10 text-emerald-200">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </motion.div>
            ))}
            <div className="rounded-[1.7rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl opacity-55">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">+2 more flows</p>
              <p className="mt-4 text-xl font-semibold text-white">Invoice and reporting templates remain in the library.</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">The layout shows depth without crowding the screen.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="bg-[#08111b] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">{copy.workflowLabel}</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{copy.workflowTitle}</h2>
            </div>
            <Button variant="outline" className="hidden rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 lg:inline-flex" asChild>
                <Link href="#preview">
                  <ExternalLink className="h-4 w-4" />
                  {copy.secondary}
                </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[1.7rem] border border-white/10 bg-white/5 p-6 opacity-75">
              <div className="grid gap-3 sm:grid-cols-2">
                {data.stackBlocks.slice(0, 2).map((block) => (
                  <div key={block.title} className="rounded-[1.35rem] border border-white/10 bg-slate-950/60 p-4">
                    <p className="text-sm font-semibold text-white">{block.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{block.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.7rem] border border-white/10 bg-white/5 p-6 opacity-75">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Execution path</p>
              <div className="mt-6 space-y-4">
                {data.workflowSteps.slice(0, 3).map((step, index) => (
                  <div key={step.number} className={`flex gap-4 rounded-[1.35rem] border p-4 ${index === 0 ? "border-emerald-300/30 bg-emerald-300/10" : "border-white/10 bg-slate-950/60"}`}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-300 text-slate-950 font-semibold">
                      {step.number}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{step.title}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#0a1520] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">{copy.faqLabel}</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{copy.faqTitle}</h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {data.faqItems.map((item) => (
              <div key={item.q} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-lg font-semibold text-white">{item.q}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#07111c] py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-lg font-semibold text-white">FlowForge</p>
            <p className="mt-2 max-w-md text-sm leading-7 text-slate-400">{copy.footer}</p>
          </div>
          <Button className="rounded-full bg-white text-slate-950 hover:bg-slate-200" asChild>
            <Link href="#top">
              {copy.backToTop}
              <Workflow className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </footer>
    </main>
  )
}






