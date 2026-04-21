import {
  BarChart3,
  CalendarRange,
  CheckCircle2,
  Database,
  Filter,
  LineChart,
  PieChart,
  Sparkles,
  Table2,
  TimerReset,
  TrendingUp,
  Users,
  WandSparkles,
} from "lucide-react"
import type { Locale } from "@/lib/i18n"

type InsightBoardData = {
  navLinks: Array<{ label: string; href: string }>
  kpiCards: Array<{
    icon: typeof TrendingUp
    title: string
    value: string
    note: string
  }>
  reportCards: Array<{ title: string; body: string }>
  reportSections: Array<{ label: string; title: string; description: string }>
  sourceCards: Array<{ title: string; items: string[] }>
  faqItems: Array<{ q: string; a: string }>
}

const english: InsightBoardData = {
  navLinks: [
  { label: "Overview", href: "#overview" },
  { label: "KPIs", href: "#kpis" },
  { label: "Reports", href: "#reports" },
  { label: "Sources", href: "#sources" },
  { label: "FAQ", href: "#faq" },
  ],

  kpiCards: [
  {
    icon: TrendingUp,
    title: "Revenue growth",
    value: "+18.6%",
    note: "Month-over-month across the selected account segment.",
  },
  {
    icon: Users,
    title: "Active customers",
    value: "2,418",
    note: "Accounts that generated at least one meaningful event.",
  },
  {
    icon: TimerReset,
    title: "Report refresh",
    value: "Every 15 min",
    note: "Automated sync from product, billing, and CRM sources.",
  },
  {
    icon: CalendarRange,
    title: "Forecast window",
    value: "Next 90 days",
    note: "Projected pipeline using trend, seasonality, and cohort patterns.",
  },
  ],

  reportCards: [
  {
    title: "Retention analysis",
    body: "Cohorts acquired through paid search are decaying faster than referral traffic after week 3, which suggests onboarding friction rather than acquisition quality.",
  },
  {
    title: "Funnel summary",
    body: "Activation remains strong at step 1, but the jump from trial to feature adoption is where most users stall and need a clearer walkthrough.",
  },
  {
    title: "Segment insight",
    body: "Mid-market accounts drive the largest expansion revenue and should get priority in the next campaign and in the customer success playbook.",
  },
  ],

  reportSections: [
  {
    label: "Analysis",
    title: "Business metrics in plain English",
    description:
      "The product converts dashboards into a short narrative so the team can understand what happened and what needs attention next.",
  },
  {
    label: "Visualization",
    title: "Charts that support the story",
    description:
      "A few carefully chosen charts show trends, segments, and risk without overwhelming users with a wall of graphs.",
  },
  {
    label: "Action",
    title: "Recommendations tied to numbers",
    description:
      "Each report ends with next-step suggestions that a founder, analyst, or marketer can actually act on.",
  },
  ],

  sourceCards: [
  {
    title: "Product events",
    items: ["Signups", "Activation", "Feature usage"],
  },
  {
    title: "Commercial data",
    items: ["Stripe", "Invoices", "Refund history"],
  },
  {
    title: "CRM + pipeline",
    items: ["Deals", "Stages", "Win rate"],
  },
  {
    title: "Audience data",
    items: ["Segments", "Campaigns", "Channel mix"],
  },
  ],

  faqItems: [
  {
    q: "Who is this for?",
    a: "Founders, analysts, and growth teams that need a fast way to read business performance without opening five separate tools.",
  },
  {
    q: "Does it replace BI software?",
    a: "No. It sits on top of existing data sources and turns them into a cleaner, business-friendly report view.",
  },
  {
    q: "Can reports be exported?",
    a: "Yes. The concept supports copy, export, and review workflows so it can be used in meetings or client handoffs.",
  },
  {
    q: "Is the dashboard customizable?",
    a: "Yes. The layout can be adapted for finance, product, sales, or client reporting with different KPIs and labels.",
  },
  ],
}

const localized: Record<Locale, Partial<InsightBoardData>> = {
  en: {},
  it: {
    navLinks: [
      { label: "Panoramica", href: "#overview" },
      { label: "KPI", href: "#kpis" },
      { label: "Report", href: "#reports" },
      { label: "Fonti", href: "#sources" },
      { label: "FAQ", href: "#faq" },
    ],
    kpiCards: [
      { icon: TrendingUp, title: "Crescita fatturato", value: "+18.6%", note: "Mese su mese sul segmento account selezionato." },
      { icon: Users, title: "Clienti attivi", value: "2,418", note: "Account che hanno generato almeno un evento rilevante." },
      { icon: TimerReset, title: "Aggiornamento report", value: "Ogni 15 min", note: "Sincronizzazione automatica da prodotto, billing e CRM." },
      { icon: CalendarRange, title: "Finestra forecast", value: "Prossimi 90 giorni", note: "Pipeline stimata usando trend, stagionalita` e pattern cohort." },
    ],
    reportCards: [
      { title: "Analisi retention", body: "Le cohort acquisite tramite paid search calano piu` rapidamente del referral traffic dopo la terza settimana, suggerendo attrito nell'onboarding." },
      { title: "Sintesi funnel", body: "L'attivazione resta forte nel primo step, ma il passaggio da trial ad adozione delle feature e` dove molti utenti si fermano." },
      { title: "Insight segmento", body: "Gli account mid-market generano la maggior parte della revenue espansiva e meritano priorita` nella prossima campagna." },
    ],
    reportSections: [
      { label: "Analisi", title: "Metriche di business in italiano semplice", description: "Il prodotto trasforma i dashboard in una breve narrazione cosi` il team capisce cosa e` successo e cosa serve fare dopo." },
      { label: "Visualizzazione", title: "Grafici che supportano la storia", description: "Pochi grafici scelti bene mostrano trend, segmenti e rischio senza sommergere gli utenti di grafici inutili." },
      { label: "Azione", title: "Raccomandazioni legate ai numeri", description: "Ogni report termina con suggerimenti operativi che founder, analyst o marketer possono davvero eseguire." },
    ],
    sourceCards: [
      { title: "Eventi prodotto", items: ["Signup", "Activation", "Uso delle feature"] },
      { title: "Dati commerciali", items: ["Stripe", "Fatture", "Storico rimborsi"] },
      { title: "CRM + pipeline", items: ["Deal", "Stage", "Win rate"] },
      { title: "Audience data", items: ["Segmenti", "Campagne", "Mix canali"] },
    ],
    faqItems: [
      { q: "Per chi e` pensato?", a: "Founder, analyst e growth team che hanno bisogno di leggere velocemente le performance di business senza aprire cinque strumenti diversi." },
      { q: "Sostituisce il BI software?", a: "No, si appoggia alle fonti dati esistenti e le trasforma in una vista report piu` chiara e business-friendly." },
      { q: "I report si possono esportare?", a: "Si`, il concept supporta copy, export e review workflow, cosi` puo` essere usato in meeting o handoff al cliente." },
      { q: "La dashboard e` personalizzabile?", a: "Si`, il layout puo` essere adattato per finance, prodotto, sales o reportistica clienti con KPI e label diverse." },
    ],
  },
  de: {
    navLinks: [
      { label: "Uebersicht", href: "#overview" },
      { label: "KPIs", href: "#kpis" },
      { label: "Reports", href: "#reports" },
      { label: "Quellen", href: "#sources" },
      { label: "FAQ", href: "#faq" },
    ],
  },
}

export function getInsightBoardData(locale: Locale): InsightBoardData {
  return {
    ...english,
    ...(localized[locale] ?? {}),
  }
}
