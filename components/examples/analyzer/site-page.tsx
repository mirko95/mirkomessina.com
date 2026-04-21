"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Copy, Download, ExternalLink, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAnalyzerData } from "./data"
import { localizedPath, type Locale } from "@/lib/i18n"

function Section({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={`relative py-24 lg:py-32 overflow-hidden ${className ?? ""}`}>
      {children}
    </section>
  )
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">{children}</p>
}

export function WebsiteAnalyzerLandingPage({ locale = "en" }: { locale?: Locale }) {
  const data = getAnalyzerData(locale)
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-fuchsia-300 text-slate-950 font-bold">
              W
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Website Analyzer AI</p>
              <p className="text-xs text-slate-400">AI website audit reports</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {data.navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-300 transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <Button className="bg-white text-slate-950 hover:bg-slate-200" asChild>
            <Link href="#audit">
              {locale === "it" ? "Analizza un sito" : locale === "de" ? "Website analysieren" : "Analyze a site"}
            </Link>
          </Button>
        </div>
      </header>

      <Section id="top">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),transparent_35%),linear-gradient(180deg,#020617_0%,#0f172a_45%,#020617_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-2xl pt-10 lg:pt-16">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_20px_rgba(196,181,253,0.9)]" />
              Built for agencies, SEO consultants, and product teams
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="mt-6 text-5xl font-semibold tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
              Website Analyzer AI turns a live website into a client-ready audit.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.15 }} className="mt-6 max-w-xl text-lg leading-8 text-slate-300 text-pretty">
              Paste a URL, fetch the page, and generate a structured report covering UX, SEO, and performance with practical next steps you can hand to a client.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2 }} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button className="h-12 rounded-full bg-violet-300 px-6 text-slate-950 hover:bg-violet-200" asChild>
                <Link href="#audit">
                  {locale === "it" ? "Analizza un sito" : locale === "de" ? "Website analysieren" : "Analyze a site"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10">
                <PlayCircle className="h-4 w-4" />
                {locale === "it" ? "Guarda il flusso" : locale === "de" ? "Workflow ansehen" : "Watch workflow"}
              </Button>
            </motion.div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["FastAPI backend", "OpenAI recommendations", "Saved reports", "Copy/export controls"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.14 }} className="relative pt-6 lg:pt-16">
            <div className="absolute -inset-8 rounded-[2rem] bg-violet-400/10 blur-3xl" />
            <div id="audit" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#040507]/95 p-4 shadow-2xl shadow-black/30">
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_24%)]" />

              <div className="relative rounded-[1.6rem] border border-white/10 bg-black/20 p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <div className="h-2.5 w-24 rounded-full bg-cyan-400/75" />
                    <div className="h-2.5 w-36 rounded-full bg-white/12" />
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-white/8 bg-black/25 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                    <div className="h-2.5 w-20 rounded-full bg-white/14" />
                    <div className="mt-4 rounded-[1.2rem] border border-cyan-300/10 bg-gradient-to-br from-cyan-400/16 via-cyan-400/10 to-emerald-400/6 p-3">
                      <div className="h-24 rounded-[1rem] bg-gradient-to-br from-cyan-400/18 to-transparent" />
                    </div>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/8 bg-black/25 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                    <div className="h-2.5 w-20 rounded-full bg-white/14" />
                    <div className="mt-4 rounded-[1.2rem] border border-emerald-300/10 bg-gradient-to-br from-emerald-400/14 via-emerald-400/8 to-cyan-400/6 p-3">
                      <div className="h-24 rounded-[1rem] bg-gradient-to-br from-emerald-400/18 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-4 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[1.4rem] border border-white/8 bg-black/25 p-4">
                  <div className="h-2.5 w-24 rounded-full bg-white/14" />
                  <div className="mt-4 space-y-3">
                    <div className="h-10 rounded-2xl bg-white/6" />
                    <div className="h-10 rounded-2xl bg-white/6" />
                  </div>
                </div>
                <div className="rounded-[1.4rem] border border-white/8 bg-black/25 p-4">
                  <div className="h-2.5 w-24 rounded-full bg-white/14" />
                  <div className="mt-4 h-24 rounded-[1.2rem] bg-gradient-to-br from-violet-400/10 via-transparent to-cyan-400/10" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="features" className="bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Features</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {locale === "it" ? "Costruito come un vero prodotto SaaS, non come un mockup generico." : locale === "de" ? "Gebaut wie ein echtes SaaS-Produkt, nicht wie ein generischer Mockup." : "Built like a real SaaS product, not a generic mockup."}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {data.featureCards.map((feature, index) => (
              <motion.article key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 0.5, delay: index * 0.05 }} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:border-violet-300/30">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-300/10 text-violet-200">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="workflow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Workflow</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A simple audit flow that feels clean and trustworthy.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {data.workflowSteps.map((step) => (
              <div key={step.number} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-300 text-slate-950 font-semibold">
                  {step.number}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="results" className="bg-slate-950/80">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
          <SectionLabel>Results</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Structured recommendations that feel ready for a client handoff.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300 text-pretty">
              The report groups findings into clear buckets, adds a score for each area, and gives you language that can be pasted straight into a proposal or follow-up email.
          </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button className="rounded-full bg-violet-300 text-slate-950 hover:bg-violet-200">
                <Download className="h-4 w-4" />
                {locale === "it" ? "Esporta PDF" : locale === "de" ? "PDF exportieren" : "Export PDF"}
              </Button>
              <Button variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10">
                <Copy className="h-4 w-4" />
                Copy report
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {data.recommendationGroups.map((group) => (
              <div key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-300/10 text-violet-200">
                    <group.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="architecture">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Architecture</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A simple architecture that can grow into a real product.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {data.architectureBlocks.map((block) => (
              <div key={block.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">{block.title}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="faq" className="bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything is framed for a real client conversation.
          </h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {[
              ["Is this a live analyzer?", "No. This portfolio version is a polished concept page that shows how the product would be presented to customers."],
              ["Does it include a real backend?", "Not in the static portfolio build. The live version would use Next.js for the frontend, FastAPI for analysis, and OpenAI for recommendations."],
              ["Can it be turned into a real product?", "Yes. The architecture and copy are deliberately written to feel close to a production client portal or agency tool."],
              ["Is the design client-ready?", "Yes. The layout and language are aimed at someone selling audits, retainers, or website improvements to clients."],
            ].map(([question, answer]) => (
              <div key={question} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-lg font-semibold text-white">{question}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10 bg-slate-950 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-lg font-semibold text-white">Website Analyzer AI</p>
            <p className="mt-2 max-w-md text-sm leading-7 text-slate-400">
              {locale === "it" ? "Una pagina portfolio statica che mostra come presentare a un cliente o a un'agenzia un prodotto di audit per siti web." : locale === "de" ? "Eine statische Portfolioseite, die zeigt, wie man ein Website-Audit-Produkt einem Kunden oder einer Agentur praesentiert." : "A static portfolio page showing how an AI website audit product could be presented to a client or agency buyer."}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10" asChild>
              <Link href={localizedPath(locale, "/examples")}>{locale === "de" ? "Zurueck zu Beispielen" : locale === "it" ? "Torna agli esempi" : "Back to examples"}</Link>
            </Button>
            <Button className="bg-white text-slate-950 hover:bg-slate-200" asChild>
              <Link href="#top">
                {locale === "it" ? "Torna su" : locale === "de" ? "Nach oben" : "Back to top"}
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </main>
  )
}
