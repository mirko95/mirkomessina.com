"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { ArrowRight, BarChart3, Download, ExternalLink, LineChart, PieChart, Table2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getInsightBoardData } from "./data"
import type { Locale } from "@/lib/i18n"

function Panel({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return <div className={`rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] ${className}`}>{children}</div>
}

function Section({ id, className, children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`relative scroll-mt-24 overflow-hidden py-24 lg:py-32 ${className ?? ""}`}>
      {children}
    </section>
  )
}

export function InsightBoardPage({ locale = "en" }: { locale?: Locale }) {
  const data = getInsightBoardData(locale)

  return (
    <main className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white">
              I
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">InsightBoard</p>
              <p className="text-xs text-slate-500">Business reporting studio</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {data.navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-600 transition-colors hover:text-slate-950">
                {link.label}
              </a>
            ))}
          </nav>

          <Button className="rounded-full bg-slate-900 text-white hover:bg-slate-800" asChild>
            <Link href="#overview">{locale === "it" ? "Apri report" : locale === "de" ? "Report oeffnen" : "Open report"}</Link>
          </Button>
        </div>
      </header>

      <Section id="top">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.08),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
          <div className="max-w-2xl pt-4 lg:pt-10">
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 shadow-sm">
              {locale === "it" ? "Analisi business" : locale === "de" ? "Business-Analyse" : "Business analysis"}
            </span>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 text-balance sm:text-6xl lg:text-7xl">
              {locale === "it"
                ? "InsightBoard trasforma numeri sparsi in un report leggibile."
                : locale === "de"
                  ? "InsightBoard macht aus verstreuten Zahlen einen lesbaren Report."
                  : "InsightBoard turns scattered numbers into a readable report."}
            </motion.h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 text-pretty">
              {locale === "it"
                ? "Collega prodotto, billing e CRM, poi ricevi una sintesi che mostra tendenze, segmenti, rischio e prossime azioni in un layout pulito e consegnabile al cliente."
                : locale === "de"
                  ? "Verbinde Produkt, Billing und CRM und erhalte dann eine Zusammenfassung mit Trends, Segmenten, Risiko und naechsten Schritten in einem kundenfaehigen Layout."
                  : "Connect product, billing, and CRM data, then get a concise summary that shows trends, segments, risk, and next steps in a client-ready layout."}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button className="rounded-full bg-sky-600 text-white hover:bg-sky-500" asChild>
                <Link href="#overview">
                  {locale === "it" ? "Apri report" : locale === "de" ? "Report oeffnen" : "Open report"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="rounded-full border-slate-300 bg-white text-slate-900 hover:bg-slate-100">
                    <Download className="h-4 w-4" />
                    {locale === "it" ? "Esporta PDF" : locale === "de" ? "PDF exportieren" : "Export PDF"}
                  </Button>
            </div>

            <div id="kpis" className="mt-10 grid gap-3 scroll-mt-24 sm:grid-cols-3">
              {data.kpiCards.map((item) => (
                <Panel key={item.title} className="p-4">
                  <p className="text-sm text-slate-500">{item.title}</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                </Panel>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.65 }} className="pt-4 lg:pt-8">
            <Panel id="overview" className="overflow-hidden p-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-sm font-medium text-slate-900">{locale === "it" ? "Executive report" : locale === "de" ? "Executive Report" : "Executive report"}</p>
                  <p className="text-xs text-slate-500">Q2 growth review for Northstar</p>
                </div>
                <div className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                  {locale === "it" ? "Aggiornato 12 min fa" : locale === "de" ? "Vor 12 Min aktualisiert" : "Updated 12 min ago"}
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {data.kpiCards.map((card) => (
                  <div key={card.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-slate-500">{card.title}</p>
                      <card.icon className="h-4 w-4 text-sky-600" />
                    </div>
                    <p className="mt-3 text-4xl font-semibold text-slate-950">{card.value}</p>
                    <p className="mt-2 text-xs leading-6 text-slate-600">{card.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-900">{locale === "it" ? "Trend revenue" : locale === "de" ? "Umsatztrend" : "Revenue trend"}</p>
                    <LineChart className="h-4 w-4 text-sky-600" />
                  </div>
                  <div className="mt-5 flex h-40 items-end gap-3 rounded-[1.25rem] bg-[linear-gradient(180deg,rgba(14,165,233,0.08),rgba(255,255,255,0.9))] p-4">
                    {[32, 42, 51, 46, 63, 58, 71, 78].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-full bg-sky-500"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                  <p className="text-sm font-medium text-slate-900">{locale === "it" ? "Sintesi esecutiva" : locale === "de" ? "Executive Summary" : "Executive summary"}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {locale === "it"
                      ? "L'acquisizione a pagamento continua a crescere, ma la retention della terza settimana scende negli account piu` piccoli. Il segmento mid-market resta il piu` forte per la prossima campagna."
                      : locale === "de"
                        ? "Paid Acquisition waechst weiter, aber die Retention in Woche drei faellt bei kleineren Accounts ab. Das Mid-Market-Segment bleibt fuer die naechste Kampagne am wichtigsten."
                        : "Paid acquisition continues to grow, but week-three retention is dropping in smaller accounts. Mid-market remains the strongest segment for the next campaign."}
                  </p>
                </div>
              </div>
            </Panel>
          </motion.div>
        </div>
      </Section>

      <Section id="reports" className="bg-[#eef3f9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">{locale === "it" ? "Analisi" : locale === "de" ? "Analyse" : "Analysis"}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {locale === "it"
                  ? "Un report che legge il business come una storia."
                  : locale === "de"
                    ? "Ein Report, der das Business als Geschichte liest."
                    : "A report that reads the business like a story."}
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 text-pretty">
                {locale === "it"
                  ? "Invece di mostrare solo grafici, InsightBoard collega numeri, segmenti e raccomandazioni in una vista che un founder puo` usare subito."
                  : locale === "de"
                    ? "Anstatt nur Diagramme zu zeigen, verbindet InsightBoard Zahlen, Segmente und Empfehlungen zu einer Ansicht, die ein Founder sofort nutzen kann."
                    : "Instead of showing charts only, InsightBoard connects numbers, segments, and recommendations into a view a founder can use immediately."}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {data.reportSections.map((section) => (
                <Panel key={section.title} className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">{section.label}</p>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">{section.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{section.description}</p>
                </Panel>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="sources">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">{locale === "it" ? "Fonti" : locale === "de" ? "Quellen" : "Sources"}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {locale === "it"
              ? "I dati giusti, ordinati in blocchi leggibili."
              : locale === "de"
                ? "Die richtigen Daten, in lesbare Blöcke organisiert."
                : "The right data, organized into readable blocks."}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {data.sourceCards.map((card) => (
              <Panel key={card.title} className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                    <Table2 className="h-5 w-5" />
                  </div>
                  <p className="font-semibold text-slate-950">{card.title}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <div className="flex items-start gap-3">
              <PieChart className="mt-1 h-5 w-5 text-sky-700" />
              <div>
                <p className="font-semibold text-slate-950">{locale === "it" ? "Note di analisi" : locale === "de" ? "Analysehinweis" : "Analysis note"}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {locale === "it"
                    ? "Il testo e` scritto per sembrare un vero strumento di business intelligence: selezione delle fonti, trend e raccomandazioni si collegano sempre a un risultato misurabile."
                    : locale === "de"
                      ? "Der Text ist so geschrieben, dass er wie ein echtes Business-Intelligence-Tool wirkt: Quellenwahl, Trends und Empfehlungen sind immer mit messbaren Ergebnissen verknüpft."
                      : "The copy is written to feel like a real business intelligence tool: source selection, trends, and recommendations always tie back to measurable outcomes."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="faq" className="bg-[#eef3f9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">{locale === "it" ? "FAQ" : locale === "de" ? "FAQ" : "FAQ"}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {locale === "it"
              ? "Domande che un cliente farebbe prima di acquistare un report."
              : locale === "de"
                ? "Fragen, die ein Kunde vor dem Kauf eines Reports stellen wuerde."
                : "Questions a buyer would ask before paying for reporting."}
          </h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {data.faqItems.map((item) => (
              <Panel key={item.q} className="p-6">
                <p className="text-lg font-semibold text-slate-950">{item.q}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
              </Panel>
            ))}
          </div>
        </div>
      </Section>

      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-lg font-semibold text-slate-950">InsightBoard</p>
            <p className="mt-2 max-w-md text-sm leading-7 text-slate-600">
              {locale === "it"
                ? "Una pagina portfolio in stile report editoriale, pensata per mostrare analisi business con un look piu` premium e leggibile."
                : locale === "de"
                  ? "Eine Portfolioseite im Editorial-Report-Stil, die Business-Analyse mit einem premium, lesbaren Look zeigt."
                  : "A portfolio page in an editorial report style, built to show business analysis with a premium, readable look."}
            </p>
          </div>
          <Button className="rounded-full bg-slate-900 text-white hover:bg-slate-800" asChild>
            <Link href="#top">
              {locale === "it" ? "Torna su" : locale === "de" ? "Nach oben" : "Back to top"}
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </footer>
    </main>
  )
}


