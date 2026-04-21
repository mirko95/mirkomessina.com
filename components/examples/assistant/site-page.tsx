"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { ArrowRight, BadgeCheck, Copy, ExternalLink, Shield, WandSparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAssistantData } from "./data"
import type { Locale } from "@/lib/i18n"

const copyByLocale = {
  en: {
    brand: "ReplyPilot",
    tagline: "Support inbox with human review",
    badge: "Drafts grounded replies from approved sources",
    title: "An AI support workspace that feels like a real inbox, not a chatbot mockup.",
    intro:
      "ReplyPilot sits between your docs and your customers. It drafts answers, surfaces risk, and keeps a human in control before anything is sent.",
    primary: "Open workspace",
    secondary: "See guardrails",
    inboxLabel: "Ticket queue",
    inboxTitle: "Support requests moving through review",
    controlsLabel: "Assistant controls",
    controlsTitle: "Tone, source, and risk settings in one place",
    capabilitiesLabel: "Capabilities",
    capabilitiesTitle: "Built for support teams that care about accuracy and speed.",
    workflowLabel: "Workflow",
    workflowTitle: "A practical review flow with clear handoff points.",
    securityLabel: "Security",
    securityTitle: "Guardrails keep the assistant useful without letting it freewheel.",
    faqLabel: "FAQ",
    faqTitle: "Questions a buyer would ask before rolling this out.",
    footer: "A portfolio-ready support assistant page with inbox, review, and policy-aware drafting.",
    backToTop: "Back to top",
    draftLabel: "Draft ready",
    approvalLabel: "Human approval",
    sourceLabel: "Approved sources",
  },
  it: {
    brand: "ReplyPilot",
    tagline: "Inbox support con revisione umana",
    badge: "Crea bozze basate su fonti approvate",
    title: "Uno spazio di lavoro AI per il supporto che sembra una vera inbox, non un mockup da chatbot.",
    intro:
      "ReplyPilot si posiziona tra i tuoi documenti e i clienti. Crea risposte, segnala i rischi e mantiene il controllo umano prima dell'invio.",
    primary: "Apri workspace",
    secondary: "Guarda i guardrail",
    inboxLabel: "Coda ticket",
    inboxTitle: "Richieste di supporto in revisione",
    controlsLabel: "Controlli assistant",
    controlsTitle: "Tono, fonti e rischio in un unico punto",
    capabilitiesLabel: "Funzionalita",
    capabilitiesTitle: "Pensato per team support che vogliono precisione e velocita`.",
    workflowLabel: "Flusso",
    workflowTitle: "Un processo di revisione pratico con passaggi chiari.",
    securityLabel: "Sicurezza",
    securityTitle: "I guardrail mantengono l'assistente utile senza lasciarlo andare fuori controllo.",
    faqLabel: "FAQ",
    faqTitle: "Le domande che un buyer farebbe prima del rilascio.",
    footer: "Una pagina portfolio-ready per il supporto con inbox, revisione e bozze consapevoli delle policy.",
    backToTop: "Torna su",
    draftLabel: "Bozza pronta",
    approvalLabel: "Approvazione umana",
    sourceLabel: "Fonti approvate",
  },
  de: {
    brand: "ReplyPilot",
    tagline: "Support-Inbox mit menschlicher Pruefung",
    badge: "Entwirft Antworten aus freigegebenen Quellen",
    title: "Ein KI-Support-Workspace, der wie eine echte Inbox wirkt und nicht wie ein Chatbot-Mockup.",
    intro:
      "ReplyPilot sitzt zwischen deinen Dokumenten und deinen Kunden. Es entwirft Antworten, zeigt Risiken und laesst Menschen die Kontrolle behalten, bevor etwas rausgeht.",
    primary: "Workspace oeffnen",
    secondary: "Guardrails ansehen",
    inboxLabel: "Ticket-Warteschlange",
    inboxTitle: "Support-Anfragen im Review-Flow",
    controlsLabel: "Assistant-Steuerung",
    controlsTitle: "Ton, Quellen und Risiko an einem Ort",
    capabilitiesLabel: "Funktionen",
    capabilitiesTitle: "Fuer Support-Teams gebaut, die Genauigkeit und Tempo brauchen.",
    workflowLabel: "Ablauf",
    workflowTitle: "Ein praxisnaher Review-Flow mit klaren Uebergabepunkten.",
    securityLabel: "Sicherheit",
    securityTitle: "Guardrails halten den Assistenten nuetzlich, ohne ihn laufen zu lassen.",
    faqLabel: "FAQ",
    faqTitle: "Fragen, die ein Kunde vor dem Einsatz stellen wuerde.",
    footer: "Eine portfolio-taugliche Support-Assistenten-Seite mit Inbox, Review und policy-bewusstem Drafting.",
    backToTop: "Nach oben",
    draftLabel: "Entwurf fertig",
    approvalLabel: "Menschliche Freigabe",
    sourceLabel: "Freigegebene Quellen",
  },
} as const

function Section({ id, className, children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${className ?? ""}`}>
      {children}
    </section>
  )
}

export function ReplyPilotPage({ locale = "en" }: { locale?: Locale }) {
  const data = getAssistantData(locale)
  const copy = copyByLocale[locale]

  return (
    <main className="min-h-screen bg-[#f3f7fb] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 font-bold shadow-[0_12px_30px_rgba(34,211,238,0.35)]">R</div>
            <div>
              <p className="text-sm font-semibold text-slate-950">{copy.brand}</p>
              <p className="text-xs text-slate-500">{copy.tagline}</p>
            </div>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {data.navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-600 transition-colors hover:text-slate-950">
                {link.label}
              </a>
            ))}
          </nav>
          <Button className="rounded-full bg-slate-950 text-white hover:bg-slate-800" asChild>
            <Link href="#overview">
              {copy.primary}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      <Section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),transparent_34%),linear-gradient(180deg,#f8fbff_0%,#eef5fb_100%)]" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -right-20 top-52 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:px-8">
          <div className="max-w-xl pt-4 lg:pt-10">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm text-cyan-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              {copy.badge}
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 text-balance sm:text-6xl lg:text-7xl">
              {copy.title}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }} className="mt-6 max-w-xl text-lg leading-8 text-slate-600 text-pretty">
              {copy.intro}
            </motion.p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="h-12 rounded-full bg-cyan-400 px-6 text-slate-950 hover:bg-cyan-300" asChild>
                <Link href="#overview">{copy.primary}</Link>
              </Button>
              <Button variant="outline" className="h-12 rounded-full border-slate-300 bg-white px-6 text-slate-900 hover:bg-slate-100" asChild>
                <Link href="#security">
                  <Shield className="h-4 w-4" />
                  {copy.secondary}
                </Link>
              </Button>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {data.metrics.map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-semibold text-slate-950">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.08 }} className="relative lg:pt-10">
            <div id="overview" className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_90px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-sm font-medium text-slate-950">{copy.inboxLabel}</p>
                  <p className="text-xs text-slate-500">{copy.inboxTitle}</p>
                </div>
                <div className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">{copy.draftLabel}</div>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.8fr]">
                <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-4">
                  <div className="space-y-3">
                    {[
                      { subject: "Billing clarification", channel: "Email", tone: "Refund risk" },
                      { subject: "Plan change request", channel: "Chat", tone: "Safe to send" },
                      { subject: "API access issue", channel: "Email", tone: "Needs review" },
                    ].map((item, index) => (
                      <div key={item.subject} className={`rounded-2xl border p-4 ${index === 0 ? "border-cyan-300 bg-white shadow-sm" : "border-slate-200 bg-white"}`}>
                        <p className="text-sm font-semibold text-slate-950">{item.subject}</p>
                        <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                          <span>{item.channel}</span>
                          <span>{item.tone}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{copy.approvalLabel}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    Thanks for flagging this. I checked the billing timeline and the charge appears to be the final invoice for the current cycle.
                  </p>
                  <div className="mt-4 rounded-2xl bg-cyan-50 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-700">{copy.sourceLabel}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      Billing policy, pricing page, support macro #14, invoice article.
                    </p>
                  </div>
                  <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-700">Risk</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      Refund language detected. Human check recommended before sending.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="capabilities" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">{copy.capabilitiesLabel}</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{copy.capabilitiesTitle}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {data.capabilityCards.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45, delay: index * 0.04 }} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="workflow" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">{copy.workflowLabel}</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{copy.workflowTitle}</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {data.workflowSteps.map((step) => (
              <div key={step.number} className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white font-semibold">
                  {step.number}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="security" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">{copy.securityLabel}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{copy.securityTitle}</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600 text-pretty">
              The product keeps the experience calm, useful, and traceable.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-full bg-slate-950 text-white hover:bg-slate-800">
                <Copy className="h-4 w-4" />
                Copy policy
              </Button>
              <Button variant="outline" className="rounded-full border-slate-300 bg-white text-slate-900 hover:bg-slate-100">
                <ExternalLink className="h-4 w-4" />
                Review guardrails
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            {data.securityPoints.map((point) => (
              <div key={point} className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-1 h-5 w-5 text-cyan-700" />
                  <p className="text-sm leading-7 text-slate-700">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="faq" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">{copy.faqLabel}</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{copy.faqTitle}</h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {data.faqItems.map((item) => (
              <div key={item.q} className="rounded-[1.4rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-lg font-semibold text-slate-950">{item.q}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-lg font-semibold text-slate-950">ReplyPilot</p>
            <p className="mt-2 max-w-md text-sm leading-7 text-slate-500">{copy.footer}</p>
          </div>
          <Button className="rounded-full bg-slate-950 text-white hover:bg-slate-800" asChild>
            <Link href="#top">
              {copy.backToTop}
              <WandSparkles className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </footer>
    </main>
  )
}
