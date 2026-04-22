import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2, PanelTop, Sparkles } from "lucide-react"
import { exampleSites, getExampleSite } from "@/lib/examples"
import { AetherIqLandingPage } from "@/components/examples/saas/site-page"
import { ReplyPilotPage } from "@/components/examples/assistant/site-page"
import { FlowForgePage } from "@/components/examples/automation/site-page"
import { InsightBoardPage } from "@/components/examples/insightboard/site-page"
import { ModelWatchPage } from "@/components/examples/modelwatch/site-page"
import { WebsiteAnalyzerLandingPage } from "@/components/examples/analyzer/site-page"
import { RestaurantHomePage } from "@/components/examples/restaurant/home"
import { createPageMetadata } from "@/lib/seo"
import { headers } from "next/headers"
import { resolveLocale, localizedPath } from "@/lib/i18n"

type ExamplePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return exampleSites.map((site) => ({ slug: site.slug }))
}

export async function generateMetadata({ params }: ExamplePageProps) {
  const { slug } = await params
  const locale = resolveLocale((await headers()).get("x-locale"))
  const site = getExampleSite(slug)

  if (!site) {
    return {}
  }

  if (slug === "aetheriq") {
    return createPageMetadata({
      title: "AetherIQ | Premium AI SaaS Landing Page",
      description:
        "A modern SaaS landing page with hero, features, dashboard area, pricing, testimonials, FAQ, and footer.",
      path: localizedPath(locale, "/aetheriq"),
    })
  }

  if (slug === "replypilot") {
    return createPageMetadata({
      title: "ReplyPilot | AI Support Assistant",
      description:
        "An AI assistant that drafts support replies from approved sources with human review and guardrails.",
      path: localizedPath(locale, "/replypilot"),
    })
  }

  if (slug === "flowforge") {
    return createPageMetadata({
      title: "FlowForge | Workflow Automation",
      description:
        "A workflow automation page that removes repetitive admin work and keeps operations visible.",
      path: localizedPath(locale, "/flowforge"),
    })
  }

  if (slug === "insightboard") {
    return createPageMetadata({
      title: "InsightBoard | Business Reporting Studio",
      description:
        "A business intelligence page that turns product and revenue data into clear reports.",
      path: localizedPath(locale, "/insightboard"),
    })
  }

  if (slug === "modelwatch") {
    return createPageMetadata({
      title: "Busy | Productivity Workspace",
      description:
        "A bright productivity product page with live status, manual controls, and a calm editorial layout.",
      path: localizedPath(locale, "/modelwatch"),
    })
  }

  if (slug === "website-analyzer-ai") {
    return createPageMetadata({
      title: "Website Analyzer AI | Website Audit Tool",
      description:
        "An AI website analysis product with scores, recommendations, and a dashboard-style report.",
      path: localizedPath(locale, "/website-analyzer-ai"),
    })
  }

  if (slug === "harbor-kitchen") {
    return createPageMetadata({
      title: "Harbor Kitchen | Restaurant Website",
      description:
        "A modern restaurant website with a premium home page, filterable menu, about page, contact form, hours, and map.",
      path: localizedPath(locale, "/harbor-kitchen"),
    })
  }

  return createPageMetadata({
    title: `${site.name} | Portfolio page`,
    description: site.summary,
    path: localizedPath(locale, `/${site.slug}`),
  })
}

export default async function ExampleSitePage({ params }: ExamplePageProps) {
  const { slug } = await params
  const locale = resolveLocale((await headers()).get("x-locale"))
  const site = getExampleSite(slug)

  if (!site) {
    notFound()
  }

  if (slug === "aetheriq") {
    return <AetherIqLandingPage locale={locale} />
  }

  if (slug === "replypilot") {
    return <ReplyPilotPage locale={locale} />
  }

  if (slug === "flowforge") {
    return <FlowForgePage locale={locale} />
  }

  if (slug === "insightboard") {
    return <InsightBoardPage locale={locale} />
  }

  if (slug === "modelwatch") {
    return <ModelWatchPage locale={locale} />
  }

  if (slug === "website-analyzer-ai") {
    return <WebsiteAnalyzerLandingPage locale={locale} />
  }

  if (slug === "harbor-kitchen") {
    return <RestaurantHomePage locale={locale} />
  }

  const Icon = site.icon

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className={`absolute inset-0 bg-gradient-to-br ${site.colorClass}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_38%)]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="mb-8">
            <Link
              href={localizedPath(locale, "/examples")}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {locale === "de" ? "Zurueck zur Uebersicht" : locale === "it" ? "Torna alla panoramica" : "Back to overview"}
            </Link>
          </div>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-start">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/70 backdrop-blur-sm">
                <Sparkles className={`h-4 w-4 ${site.accentClass}`} />
                <span className="text-sm text-muted-foreground">{site.category}</span>
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
                  {site.name}
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
                  {site.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {site.highlights.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full bg-card/70 border border-border/40 text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={localizedPath(locale, "/contact")}
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  {locale === "de" ? "Aehnliche Seite besprechen" : locale === "it" ? "Parliamo di una pagina simile" : "Discuss a similar site"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href={localizedPath(locale, "/examples")}
                  className="inline-flex items-center justify-center rounded-xl border border-border/50 bg-card/50 px-5 py-3 text-sm font-medium text-foreground hover:border-primary/30 hover:bg-primary/5 transition-colors"
                >
                  {locale === "de" ? "Weitere Seiten ansehen" : locale === "it" ? "Esplora altre pagine" : "Browse other pages"}
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-border/50 bg-card/60 backdrop-blur-sm p-6 lg:p-8 shadow-2xl shadow-black/10">
              <div className="rounded-2xl border border-border/40 bg-background/60 p-5">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className={`h-6 w-6 ${site.accentClass}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{locale === "it" ? "Modalita` progetto" : locale === "de" ? "Projektmodus" : "Project mode"}</p>
                      <p className="font-medium text-foreground">{locale === "it" ? "Pagina portfolio statica" : locale === "de" ? "Statische Portfolioseite" : "Static portfolio page"}</p>
                    </div>
                  </div>
                  <PanelTop className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="grid gap-4">
                  <div className="rounded-2xl bg-secondary/50 p-4">
                    <div className="h-3 w-24 rounded-full bg-primary/40 mb-4" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-24 rounded-xl bg-primary/10" />
                      <div className="h-24 rounded-xl bg-accent/10" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-secondary/40 p-4">
                      <div className="h-2 w-14 rounded-full bg-muted-foreground/20 mb-3" />
                      <div className="h-10 rounded-xl bg-primary/10" />
                    </div>
                    <div className="rounded-2xl bg-secondary/40 p-4">
                      <div className="h-2 w-14 rounded-full bg-muted-foreground/20 mb-3" />
                      <div className="h-10 rounded-xl bg-primary/10" />
                    </div>
                    <div className="rounded-2xl bg-secondary/40 p-4">
                      <div className="h-2 w-14 rounded-full bg-muted-foreground/20 mb-3" />
                      <div className="h-10 rounded-xl bg-primary/10" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-border/40 bg-background/50 p-5">
                <p className="text-sm font-medium text-foreground mb-4">Why this layout works</p>
                <ul className="space-y-3">
                  {site.sections.map((section) => (
                    <li key={section.label} className="flex gap-3">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{section.label}</p>
                        <p className="text-sm text-muted-foreground">{section.title}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {site.sections.map((section) => (
              <article key={section.label} className="rounded-3xl border border-border/50 bg-card/50 p-6 lg:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{section.label}</p>
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-pretty">{section.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
