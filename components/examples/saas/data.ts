import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  BellRing,
  BrainCircuit,
  Gauge,
  ShieldCheck,
  Workflow,
} from "lucide-react"
import type { Locale } from "@/lib/i18n"

export type SaasData = {
  navLinks: Array<{ label: string; href: string }>
  hero: {
    badge: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
    dashboardTitle: string
    dashboardSubtitle: string
    updatedLabel: string
    overviewTitle: string
    overviewLabel: string
    summaryTitle: string
    summaryBody: string
    stats: Array<{ value: string; label: string }>
  }
  featuresHeading: {
    eyebrow: string
    title: string
  }
  features: {
    icon: LucideIcon
    title: string
    description: string
  }[]
  previewHeading: {
    eyebrow: string
    title: string
    description: string
    funnelLabel: string
  }
  previewItems: Array<{ label: string; value: string; icon: LucideIcon }>
  funnel: Array<{ label: string; width: string }>
  insight: {
    title: string
    body: string
    recommendationLabel: string
    recommendationBody: string
  }
  pricingHeading: {
    eyebrow: string
    title: string
    featuredLabel: string
    perMonthLabel: string
  }
  pricingPlans: {
    name: string
    price: string
    description: string
    features: string[]
    cta: string
    featured: boolean
  }[]
  testimonialsHeading: {
    eyebrow: string
    title: string
  }
  testimonials: {
    quote: string
    name: string
    role: string
  }[]
  faqHeading: {
    eyebrow: string
    title: string
  }
  faqItems: {
    question: string
    answer: string
  }[]
  footer: {
    description: string
    cta: string
  }
}

const base: SaasData = {
  navLinks: [
    { label: "Features", href: "#features" },
    { label: "Product view", href: "#preview" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    badge: "AI insights for modern product teams",
    title: "See product health clearly, without building a full analytics team.",
    description:
      "AetherIQ turns product, revenue, and retention data into readable weekly summaries, anomaly alerts, and team-ready dashboards that help you make decisions faster.",
    primaryCta: "Start free trial",
    secondaryCta: "Watch product tour",
    dashboardTitle: "AetherIQ dashboard",
    dashboardSubtitle: "Updated 3 minutes ago",
    updatedLabel: "Above target",
    overviewTitle: "Retention trend",
    overviewLabel: "+12.4%",
    summaryTitle: "AI summary generated automatically",
    summaryBody:
      "Churn risk is stable, product adoption is growing in the enterprise segment, and the highest-value accounts are engaging more often after onboarding updates.",
    stats: [
      { value: "1-click", label: "Weekly summaries" },
      { value: "12+", label: "Data sources" },
      { value: "< 5 min", label: "Alert response" },
    ],
  },
  featuresHeading: {
    eyebrow: "Features",
    title: "Built around the questions founders and product teams actually ask.",
  },
  features: [
    {
      icon: BarChart3,
      title: "Executive analytics",
      description:
        "Turn usage data into a clean weekly story with AI-generated summaries, retention signals, and product health highlights.",
    },
    {
      icon: BrainCircuit,
      title: "AI anomaly detection",
      description:
        "Spot unusual drops in activation, revenue, or engagement before they become expensive problems for the team.",
    },
    {
      icon: Workflow,
      title: "Automated reporting",
      description:
        "Send the right metrics to leadership, product, and support without building a messy internal dashboard from scratch.",
    },
    {
      icon: BellRing,
      title: "Smart alerts",
      description:
        "Get notified when a key account churns risk, a feature adoption curve stalls, or conversion starts slipping.",
    },
    {
      icon: ShieldCheck,
      title: "Team-ready permissions",
      description:
        "Keep sensitive product and revenue data organized with permission-aware views for operators and stakeholders.",
    },
    {
      icon: Gauge,
      title: "Fast setup",
      description:
        "Connect Stripe, PostHog, and your warehouse in a few steps, then start seeing useful signals the same day.",
    },
  ],
  previewHeading: {
    eyebrow: "Product view",
    title: "A dashboard mockup that feels like a real product, not a static hero graphic.",
    description:
      "This section shows the kind of high-trust interface you can use for a launch page, sales page, or investor-facing landing experience.",
    funnelLabel: "Usage funnel",
  },
  previewItems: [
    { label: "Revenue", value: "$84,200", icon: BarChart3 },
    { label: "Active users", value: "12,480", icon: BrainCircuit },
    { label: "AI insights", value: "18 today", icon: BellRing },
    { label: "Filters", value: "Custom", icon: Gauge },
  ],
  funnel: [
    { label: "Activation", width: "84%" },
    { label: "Adoption", width: "71%" },
    { label: "Retention", width: "62%" },
  ],
  insight: {
    title: "AI summary",
    body:
      "Churn risk is stable, product adoption is growing in the enterprise segment, and the highest-value accounts are engaging more often after onboarding updates.",
    recommendationLabel: "Recommended action",
    recommendationBody:
      "Double down on the enterprise onboarding path and surface the reporting workflow earlier in the trial.",
  },
  pricingHeading: {
    eyebrow: "Pricing",
    title: "Straightforward pricing that feels easy to scan.",
    featuredLabel: "Most popular",
    perMonthLabel: "/month",
  },
  pricingPlans: [
    {
      name: "Starter",
      price: "$29",
      description: "For indie builders and early validation.",
      features: ["One workspace", "Core product analytics", "Weekly AI summary", "Email alerts"],
      cta: "Start free trial",
      featured: false,
    },
    {
      name: "Growth",
      price: "$79",
      description: "For teams who need sharper visibility.",
      features: ["Three workspaces", "Advanced anomaly detection", "Slack and email alerts", "Custom dashboards"],
      cta: "Book a call",
      featured: true,
    },
    {
      name: "Scale",
      price: "Custom",
      description: "For larger teams and complex reporting needs.",
      features: ["Unlimited workspaces", "SSO and permissions", "Dedicated onboarding", "Priority support"],
      cta: "Contact sales",
      featured: false,
    },
  ],
  testimonialsHeading: {
    eyebrow: "Testimonials",
    title: "Proof that the page feels credible and product-led.",
  },
  testimonials: [
    {
      quote:
        "AetherIQ helped us catch a retention issue before it showed up in monthly reporting. The summary was immediately useful.",
      name: "Sofia Tan",
      role: "Head of Product, Northstar",
    },
    {
      quote:
        "We went from scattered spreadsheets to a clear weekly view of what changed, what mattered, and what to do next.",
      name: "Daniel Mercer",
      role: "Founder, Brightline",
    },
    {
      quote:
        "The pricing and onboarding flow feel like a product that already knows who it is. That matters for trust.",
      name: "Mina Alvarez",
      role: "Growth Lead, Ledgerly",
    },
  ],
  faqHeading: {
    eyebrow: "FAQ",
    title: "Common questions, answered clearly.",
  },
  faqItems: [
    {
      question: "Who is this product for?",
      answer:
        "For startup and product teams that want a clearer read on usage, revenue, and retention without hiring a dedicated data team first.",
    },
    {
      question: "Does it replace our BI stack?",
      answer:
        "No. It complements your existing analytics tools by turning the raw data into useful narratives, alerts, and decision-ready summaries.",
    },
    {
      question: "Can the design work for other SaaS products?",
      answer:
        "Yes. The structure is flexible enough to fit AI tools, analytics platforms, internal software, and B2B subscriptions.",
    },
    {
      question: "Is this only a static mockup?",
      answer:
        "This example is a static landing page, but the UI pattern is built to translate into a real product marketing site or launch page.",
    },
    {
      question: "Can I swap in my own branding later?",
      answer:
        "Yes. Colors, copy, feature cards, and pricing can be adapted quickly without changing the layout foundation.",
    },
    {
      question: "What stack should I use for the real product?",
      answer:
        "Next.js with TypeScript and Tailwind is a strong default, especially if you want a fast marketing site and an app surface in one codebase.",
    },
  ],
  footer: {
    description:
      "A premium SaaS landing page example built with Next.js, Tailwind CSS, TypeScript, and Framer Motion.",
    cta: "Get started",
  },
}

const localized: Record<Locale, Partial<SaasData>> = {
  en: {},
  it: {
    navLinks: [
      { label: "Funzioni", href: "#features" },
      { label: "Vista prodotto", href: "#preview" },
      { label: "Prezzi", href: "#pricing" },
      { label: "Testimonianze", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
    hero: {
      badge: "Insight AI per team prodotto moderni",
      title: "Vedi la salute del prodotto in modo chiaro, senza costruire un intero team analytics.",
      description:
        "AetherIQ trasforma dati di prodotto, ricavi e retention in riepiloghi settimanali leggibili, alert di anomalie e dashboard pronte per il team, così da prendere decisioni piu` velocemente.",
      primaryCta: "Inizia la prova gratuita",
      secondaryCta: "Guarda il tour",
      dashboardTitle: "Dashboard AetherIQ",
      dashboardSubtitle: "Aggiornata 3 minuti fa",
      updatedLabel: "Sopra obiettivo",
      overviewTitle: "Andamento retention",
      overviewLabel: "+12,4%",
      summaryTitle: "Sintesi AI generata automaticamente",
      summaryBody:
        "Il rischio di abbandono e` stabile, l'adozione del prodotto cresce nel segmento enterprise e gli account piu` importanti interagiscono piu` spesso dopo gli aggiornamenti dell'onboarding.",
      stats: [
        { value: "1 clic", label: "Riepiloghi settimanali" },
        { value: "12+", label: "Origini dati" },
        { value: "< 5 min", label: "Tempo di risposta alert" },
      ],
    },
    featuresHeading: {
      eyebrow: "Funzioni",
      title: "Costruito attorno alle domande che fondatori e team prodotto fanno davvero.",
    },
    features: [
      {
        icon: BarChart3,
        title: "Analytics executive",
        description:
          "Trasforma i dati di utilizzo in una storia chiara grazie a riepiloghi AI, segnali di retention e punti chiave sulla salute del prodotto.",
      },
      {
        icon: BrainCircuit,
        title: "Rilevamento anomalie AI",
        description:
          "Individua cali insoliti in attivazione, ricavi o engagement prima che diventino problemi costosi per il team.",
      },
      {
        icon: Workflow,
        title: "Report automatici",
        description:
          "Invia le metriche giuste a leadership, prodotto e supporto senza costruire da zero un cruscotto interno disordinato.",
      },
      {
        icon: BellRing,
        title: "Alert intelligenti",
        description:
          "Ricevi notifiche quando un account chiave mostra rischio churn, l'adozione di una funzione rallenta o la conversione scende.",
      },
      {
        icon: ShieldCheck,
        title: "Permessi per il team",
        description:
          "Organizza dati sensibili di prodotto e ricavi con viste basate sui permessi per operatori e stakeholder.",
      },
      {
        icon: Gauge,
        title: "Setup veloce",
        description:
          "Collega Stripe, PostHog e il warehouse in pochi passaggi e inizia a vedere segnali utili lo stesso giorno.",
      },
    ],
    previewHeading: {
      eyebrow: "Vista prodotto",
      title: "Un mockup dashboard che sembra un prodotto vero, non una semplice hero statica.",
      description:
        "Questa sezione mostra il tipo di interfaccia credibile da usare per una launch page, una sales page o una landing rivolta agli investitori.",
      funnelLabel: "Funnel di utilizzo",
    },
    previewItems: [
      { label: "Ricavi", value: "$84.200", icon: BarChart3 },
      { label: "Utenti attivi", value: "12.480", icon: BrainCircuit },
      { label: "Insight AI", value: "18 oggi", icon: BellRing },
      { label: "Filtri", value: "Personalizzati", icon: Gauge },
    ],
    funnel: [
      { label: "Attivazione", width: "84%" },
      { label: "Adozione", width: "71%" },
      { label: "Retention", width: "62%" },
    ],
    insight: {
      title: "Sintesi AI",
      body:
        "Il rischio churn e` stabile, l'adozione del prodotto cresce nel segmento enterprise e gli account di maggior valore interagiscono piu` spesso dopo gli aggiornamenti dell'onboarding.",
      recommendationLabel: "Azione consigliata",
      recommendationBody:
        "Punta sulla versione enterprise dell'onboarding e mostra il flusso di report piu` presto nella trial.",
    },
    pricingHeading: {
      eyebrow: "Prezzi",
      title: "Prezzi semplici, facili da leggere a colpo d'occhio.",
      featuredLabel: "Piu` popolare",
      perMonthLabel: "/mese",
    },
    pricingPlans: [
      {
        name: "Starter",
        price: "$29",
        description: "Per creator indipendenti e primi test di validazione.",
        features: ["Un workspace", "Analytics di prodotto base", "Sintesi AI settimanale", "Alert via email"],
        cta: "Inizia la prova gratuita",
        featured: false,
      },
      {
        name: "Growth",
      price: "$79",
      description: "Per team che hanno bisogno di piu` visibilita`.",
      features: ["Tre workspace", "Rilevamento anomalie avanzato", "Alert Slack ed email", "Dashboard personalizzate"],
      cta: "Prenota una call",
      featured: true,
    },
      {
        name: "Scale",
        price: "Personalizzato",
        description: "Per team piu` grandi e reporting complesso.",
        features: ["Workspace illimitati", "SSO e permessi", "Onboarding dedicato", "Supporto prioritario"],
        cta: "Contatta il sales",
        featured: false,
      },
    ],
    testimonialsHeading: {
      eyebrow: "Testimonianze",
      title: "Prova che la pagina appare credibile e orientata al prodotto.",
    },
    testimonials: [
      {
        quote:
          "AetherIQ ci ha aiutato a intercettare un problema di retention prima che comparisse nel report mensile. La sintesi era subito utile.",
        name: "Sofia Tan",
        role: "Head of Product, Northstar",
      },
      {
        quote:
          "Siamo passati da fogli sparsi a una vista settimanale chiara di cio` che e` cambiato, cio` che conta e cosa fare dopo.",
        name: "Daniel Mercer",
        role: "Founder, Brightline",
      },
      {
        quote:
          "Prezzi e onboarding danno l'impressione di un prodotto che sa gia` chi e`. Questo conta per la fiducia.",
        name: "Mina Alvarez",
        role: "Growth Lead, Ledgerly",
      },
    ],
    faqHeading: {
      eyebrow: "FAQ",
      title: "Domande comuni, con risposte chiare.",
    },
    faqItems: [
      {
        question: "Per chi e` questo prodotto?",
        answer:
          "Per startup e team prodotto che vogliono leggere meglio utilizzo, ricavi e retention senza assumere subito un team dati dedicato.",
      },
      {
        question: "Sostituisce il nostro BI stack?",
        answer:
          "No. Si affianca agli strumenti esistenti trasformando i dati grezzi in narrazioni utili, alert e riepiloghi pronti per le decisioni.",
      },
      {
        question: "Il design funziona anche per altri SaaS?",
        answer:
          "Sì. La struttura e` abbastanza flessibile da adattarsi ad AI tool, analytics platform, software interno e abbonamenti B2B.",
      },
      {
        question: "E` solo un mockup statico?",
        answer:
          "Questo esempio e` una landing statica, ma il pattern UI e` pensato per diventare davvero un sito marketing o una launch page.",
      },
      {
        question: "Posso sostituire il branding con il mio?",
        answer:
          "Sì. Colori, copy, feature card e pricing possono essere adattati rapidamente senza cambiare la base del layout.",
      },
      {
        question: "Che stack dovrei usare per il prodotto reale?",
        answer:
          "Next.js con TypeScript e Tailwind e` un'ottima base, soprattutto se vuoi un sito marketing veloce e un'app nello stesso codebase.",
      },
    ],
    footer: {
      description:
        "Un esempio di landing page SaaS premium realizzato con Next.js, Tailwind CSS, TypeScript e Framer Motion.",
      cta: "Inizia",
    },
  },
  de: {
    navLinks: [
      { label: "Funktionen", href: "#features" },
      { label: "Produktansicht", href: "#preview" },
      { label: "Preise", href: "#pricing" },
      { label: "Referenzen", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
    hero: {
      badge: "KI-Einblicke fuer moderne Produktteams",
      title: "Produktgesundheit klar sehen, ohne ein vollstaendiges Analytics-Team aufzubauen.",
      description:
        "AetherIQ verwandelt Produkt-, Umsatz- und Retention-Daten in lesbare Wochenberichte, Anomalie-Alerts und teamfaehige Dashboards, damit Entscheidungen schneller fallen.",
      primaryCta: "Kostenlos testen",
      secondaryCta: "Produkttour ansehen",
      dashboardTitle: "AetherIQ Dashboard",
      dashboardSubtitle: "Vor 3 Minuten aktualisiert",
      updatedLabel: "Ueber Ziel",
      overviewTitle: "Retention-Trend",
      overviewLabel: "+12,4%",
      summaryTitle: "KI-Zusammenfassung automatisch generiert",
      summaryBody:
        "Das Churn-Risiko ist stabil, die Produktnutzung steigt im Enterprise-Segment, und wertvolle Accounts interagieren nach den Onboarding-Anpassungen haeufiger.",
      stats: [
        { value: "1 Klick", label: "Woechentliche Zusammenfassungen" },
        { value: "12+", label: "Datenquellen" },
        { value: "< 5 Min", label: "Alarm-Reaktion" },
      ],
    },
    featuresHeading: {
      eyebrow: "Funktionen",
      title: "Auf die Fragen aufgebaut, die Gruender und Produktteams wirklich stellen.",
    },
    features: [
      {
        icon: BarChart3,
        title: "Executive Analytics",
        description:
          "Verwandle Nutzungsdaten in eine klare woechentliche Story mit KI-Zusammenfassungen, Retention-Signalen und Produkt-Highlights.",
      },
      {
        icon: BrainCircuit,
        title: "KI-Anomalieerkennung",
        description:
          "Erkenne ungewoehnliche Rueckgaenge bei Aktivierung, Umsatz oder Engagement, bevor sie teuer werden.",
      },
      {
        icon: Workflow,
        title: "Automatisierte Reports",
        description:
          "Sende die richtigen Kennzahlen an Management, Produkt und Support, ohne ein unuebersichtliches internes Dashboard von Grund auf zu bauen.",
      },
      {
        icon: BellRing,
        title: "Intelligente Alerts",
        description:
          "Erhalte Hinweise, wenn ein Schluesselaccount churn-gefährdet ist, eine Feature-Adoption abfaellt oder die Conversion sinkt.",
      },
      {
        icon: ShieldCheck,
        title: "Teamfaehige Berechtigungen",
        description:
          "Halte sensible Produkt- und Umsatzdaten mit rollenbasierten Ansichten fuer Operatoren und Stakeholder geordnet.",
      },
      {
        icon: Gauge,
        title: "Schneller Start",
        description:
          "Verbinde Stripe, PostHog und dein Warehouse in wenigen Schritten und sieh noch am selben Tag nutzbare Signale.",
      },
    ],
    previewHeading: {
      eyebrow: "Produktansicht",
      title: "Ein Dashboard-Mockup, das wie ein echtes Produkt wirkt und nicht wie eine statische Hero-Grafik.",
      description:
        "Dieser Abschnitt zeigt die Art von vertrauenswuerdiger UI, die du fuer eine Launch-Page, Sales-Page oder Investor-Landing nutzen kannst.",
      funnelLabel: "Nutzungsfunnel",
    },
    previewItems: [
      { label: "Umsatz", value: "$84.200", icon: BarChart3 },
      { label: "Aktive Nutzer", value: "12.480", icon: BrainCircuit },
      { label: "KI-Einblicke", value: "18 heute", icon: BellRing },
      { label: "Filter", value: "Benutzerdefiniert", icon: Gauge },
    ],
    funnel: [
      { label: "Aktivierung", width: "84%" },
      { label: "Adoption", width: "71%" },
      { label: "Retention", width: "62%" },
    ],
    insight: {
      title: "KI-Zusammenfassung",
      body:
        "Das Churn-Risiko ist stabil, die Produktnutzung steigt im Enterprise-Segment, und Accounts mit hohem Wert interagieren nach den Onboarding-Updates haeufiger.",
      recommendationLabel: "Empfohlene Aktion",
      recommendationBody:
        "Investiere staerker in den Enterprise-Onboarding-Pfad und zeige den Reporting-Flow frueher in der Trial.",
    },
    pricingHeading: {
      eyebrow: "Preise",
      title: "Einfache Preisstruktur, die sich schnell erfassen laesst.",
      featuredLabel: "Beliebt",
      perMonthLabel: "/Monat",
    },
    pricingPlans: [
      {
        name: "Starter",
        price: "$29",
        description: "Fuer Indie-Builder und erste Validierungen.",
        features: ["Ein Workspace", "Kern-Analytics", "Woechentliche KI-Zusammenfassung", "E-Mail-Alerts"],
        cta: "Kostenlos testen",
        featured: false,
      },
      {
        name: "Growth",
      price: "$79",
      description: "Fuer Teams mit Bedarf an mehr Transparenz.",
      features: ["Drei Workspaces", "Erweiterte Anomalieerkennung", "Slack- und E-Mail-Alerts", "Benutzerdefinierte Dashboards"],
      cta: "Call buchen",
      featured: true,
    },
      {
        name: "Scale",
        price: "Individuell",
        description: "Fuer groessere Teams und komplexes Reporting.",
        features: ["Unbegrenzte Workspaces", "SSO und Berechtigungen", "Dediziertes Onboarding", "Prioritaetssupport"],
        cta: "Vertrieb kontaktieren",
        featured: false,
      },
    ],
    testimonialsHeading: {
      eyebrow: "Referenzen",
      title: "Beweis, dass die Seite glaubwuerdig und produktorientiert wirkt.",
    },
    testimonials: [
      {
        quote:
          "AetherIQ hat uns geholfen, ein Retention-Problem zu erkennen, bevor es im Monatsreport sichtbar wurde. Die Zusammenfassung war sofort nützlich.",
        name: "Sofia Tan",
        role: "Head of Product, Northstar",
      },
      {
        quote:
          "Wir sind von verstreuten Tabellen zu einer klaren Wochenansicht gewechselt: was sich geaendert hat, was zaehlt und was als Naechstes zu tun ist.",
        name: "Daniel Mercer",
        role: "Founder, Brightline",
      },
      {
        quote:
          "Preisgestaltung und Onboarding wirken wie bei einem Produkt, das bereits genau weiss, wer es ist. Das schafft Vertrauen.",
        name: "Mina Alvarez",
        role: "Growth Lead, Ledgerly",
      },
    ],
    faqHeading: {
      eyebrow: "FAQ",
      title: "Hauefige Fragen, klar beantwortet.",
    },
    faqItems: [
      {
        question: "Fuer wen ist dieses Produkt gedacht?",
        answer:
          "Fuer Startups und Produktteams, die Nutzung, Umsatz und Retention besser verstehen wollen, ohne sofort ein dediziertes Data-Team einzustellen.",
      },
      {
        question: "Ersetzt es unseren BI-Stack?",
        answer:
          "Nein. Es ergaenzt vorhandene Analyse-Tools, indem es Rohdaten in nuetzliche Stories, Alerts und entscheidungsreife Zusammenfassungen uebersetzt.",
      },
      {
        question: "Passt das Design auch fuer andere SaaS-Produkte?",
        answer:
          "Ja. Die Struktur ist flexibel genug fuer KI-Tools, Analytics-Plattformen, interne Software und B2B-Abos.",
      },
      {
        question: "Ist das nur ein statischer Mockup?",
        answer:
          "Dieses Beispiel ist eine statische Landingpage, aber das UI-Muster ist auf ein echtes Marketing-Site- oder Launch-Page-Format ausgelegt.",
      },
      {
        question: "Kann ich spaeter mein eigenes Branding einsetzen?",
        answer:
          "Ja. Farben, Copy, Feature-Cards und Preise lassen sich schnell anpassen, ohne das Layout-Fundament zu veraendern.",
      },
      {
        question: "Welchen Stack sollte ich fuer das echte Produkt verwenden?",
        answer:
          "Next.js mit TypeScript und Tailwind ist ein starker Standard, besonders wenn du eine schnelle Marketing-Site und eine App in einem Codebase willst.",
      },
    ],
    footer: {
      description:
        "Ein Premium-Beispiel fuer eine SaaS-Landingpage mit Next.js, Tailwind CSS, TypeScript und Framer Motion.",
      cta: "Loslegen",
    },
  },
}

export function getSaasData(locale: Locale): SaasData {
  const localizedCopy = localized[locale] ?? localized.en
  return {
    ...base,
    ...localizedCopy,
    navLinks: localizedCopy.navLinks ?? base.navLinks,
    hero: { ...base.hero, ...(localizedCopy.hero ?? {}) },
    featuresHeading: { ...base.featuresHeading, ...(localizedCopy.featuresHeading ?? {}) },
    features: localizedCopy.features ?? base.features,
    previewHeading: { ...base.previewHeading, ...(localizedCopy.previewHeading ?? {}) },
    previewItems: localizedCopy.previewItems ?? base.previewItems,
    funnel: localizedCopy.funnel ?? base.funnel,
    insight: { ...base.insight, ...(localizedCopy.insight ?? {}) },
    pricingHeading: { ...base.pricingHeading, ...(localizedCopy.pricingHeading ?? {}) },
    pricingPlans: localizedCopy.pricingPlans ?? base.pricingPlans,
    testimonialsHeading: { ...base.testimonialsHeading, ...(localizedCopy.testimonialsHeading ?? {}) },
    testimonials: localizedCopy.testimonials ?? base.testimonials,
    faqHeading: { ...base.faqHeading, ...(localizedCopy.faqHeading ?? {}) },
    faqItems: localizedCopy.faqItems ?? base.faqItems,
    footer: { ...base.footer, ...(localizedCopy.footer ?? {}) },
  }
}

