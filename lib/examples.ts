import { Globe, Building2, BarChart3, Bot, Workflow, Clock3 } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { normalizeGermanData } from "@/lib/german"
import { normalizeItalianData } from "@/lib/italian"

export type ExampleSite = {
  slug: string
  name: string
  category: string
  summary: string
  colorClass: string
  accentClass: string
  icon: typeof Globe
  heroStat: string
  highlights: string[]
  sections: {
    label: string
    title: string
    description: string
  }[]
}

export const exampleSites: ExampleSite[] = [
  {
    slug: "insightboard",
    name: "InsightBoard",
    category: "Data analysis dashboard",
    summary:
      "A business intelligence dashboard that turns product, billing, and CRM data into clear reports, KPI views, and action-focused summaries.",
    colorClass: "from-sky-400/20 via-background to-background",
    accentClass: "text-sky-300",
    icon: BarChart3,
    heroStat: "Business data in plain English",
    highlights: ["KPI cards", "Report summaries", "Data source views"],
    sections: [
      {
        label: "Analysis",
        title: "Business metrics, not raw noise",
        description:
          "The dashboard translates data into a narrative so a founder or analyst can understand what changed and why.",
      },
      {
        label: "Reports",
        title: "Decision-ready summaries",
        description:
          "Each report highlights the trend, the likely cause, and the next move without dumping a pile of charts on the user.",
      },
      {
        label: "Value",
        title: "A clearer weekly review",
        description:
          "The product is framed as a faster way to review performance across product, finance, and sales in one place.",
      },
    ],
  },
  {
    slug: "modelwatch",
    name: "Busy",
    category: "Productivity multi-tool",
    summary:
      "A bright productivity product page with a bold hero, live status, manual controls, and a calm editorial layout.",
    colorClass: "from-orange-300/25 via-background to-background",
    accentClass: "text-orange-500",
    icon: Clock3,
    heroStat: "Product page with a physical feel",
    highlights: ["Live status", "Manual controls", "Monochrome UI"],
    sections: [
      {
        label: "Hero",
        title: "A clear first read",
        description:
          "The top section leads with a simple promise, a strong product visual, and a direct CTA so visitors understand the offer immediately.",
      },
      {
        label: "Product",
        title: "Readable and practical",
        description:
          "Feature blocks and dashboard-style cards make the product feel tangible, practical, and easy to trust.",
      },
      {
        label: "Controls",
        title: "Built around action",
        description:
          "The page keeps the controls visible so the product story naturally moves toward use, not just admiration.",
      },
    ],
  },
  {
    slug: "replypilot",
    name: "ReplyPilot",
    category: "AI assistant for support teams",
    summary:
      "A customer support AI assistant that drafts grounded replies from approved docs, flags risky language, and keeps human review in the loop.",
    colorClass: "from-cyan-400/20 via-background to-background",
    accentClass: "text-cyan-300",
    icon: Bot,
    heroStat: "AI reply drafting with guardrails",
    highlights: ["Tone presets", "Approved sources", "Human review"],
    sections: [
      {
        label: "Drafting",
        title: "Helpful first replies",
        description:
          "The assistant prepares a clear reply from customer context and product docs so the team starts with a strong draft instead of a blank page.",
      },
      {
        label: "Review",
        title: "Human-in-the-loop flow",
        description:
          "Sensitive requests are flagged before sending, which keeps the experience practical for support and success teams.",
      },
      {
        label: "Value",
        title: "Faster response time",
        description:
          "The concept is positioned around speed, consistency, and better customer communication, not a generic chatbot gimmick.",
      },
    ],
  },
  {
    slug: "flowforge",
    name: "FlowForge",
    category: "Workflow automation dashboard",
    summary:
      "A workflow automation product concept for teams that want to remove repetitive admin work, sync data between tools, and keep operations visible.",
    colorClass: "from-emerald-400/20 via-background to-background",
    accentClass: "text-emerald-300",
    icon: Workflow,
    heroStat: "Automation for operations teams",
    highlights: ["Lead routing", "Approval steps", "Activity logs"],
    sections: [
      {
        label: "Trigger",
        title: "Simple start points",
        description:
          "A form submission, CRM update, or schedule can kick off the workflow without extra manual setup.",
      },
      {
        label: "Controls",
        title: "Safe automation",
        description:
          "Validation, approvals, and logging make the product feel like something a business could trust in daily use.",
      },
      {
        label: "Outcome",
        title: "Less repetitive work",
        description:
          "The product is framed around time saved, fewer mistakes, and cleaner handoffs between tools and teams.",
      },
    ],
  },
  {
    slug: "aetheriq",
    name: "AetherIQ",
    category: "Premium AI SaaS landing page",
    summary:
      "A polished landing page for an AI analytics platform that helps teams understand product behavior, summarize usage, and spot revenue risk early.",
    colorClass: "from-sky-400/20 via-background to-background",
    accentClass: "text-sky-300",
    icon: BarChart3,
    heroStat: "AI analytics for product teams",
    highlights: ["Dashboard view", "Pricing tiers", "FAQ and testimonials"],
    sections: [
      {
        label: "Hero",
        title: "Clear promise, strong CTA",
        description:
          "The top section explains the product in one sentence and points users toward the primary action without distraction.",
      },
      {
        label: "Features",
        title: "Useful, believable capability",
        description:
          "Feature blocks focus on real outcomes like retention insights, automated summaries, and team reporting.",
      },
      {
        label: "Pricing",
        title: "Simple decision path",
        description:
          "Three plans make the value ladder obvious and keep the page easy to scan for both startups and growing teams.",
      },
    ],
  },
  {
    slug: "harbor-kitchen",
    name: "Harbor Kitchen",
    category: "Restaurant / hospitality site",
    summary:
      "A warm, mobile-friendly website for a restaurant that wants reservations, menu highlights, and local discovery to feel effortless.",
    colorClass: "from-amber-400/20 via-background to-background",
    accentClass: "text-amber-300",
    icon: Building2,
    heroStat: "Reservation-ready structure",
    highlights: ["Menu highlights", "Location details", "Reservation CTA"],
    sections: [
      {
        label: "Menu",
        title: "Quick browsing on mobile",
        description:
          "The menu is organized so guests can scan quickly on a phone without zooming or scrolling through noise.",
      },
      {
        label: "Local SEO",
        title: "Easy to find",
        description:
          "Opening hours, address, and contact details are surfaced early so the page supports search and walk-in traffic.",
      },
      {
        label: "Reservations",
        title: "One obvious booking path",
        description:
          "The design keeps the booking action visible throughout the page so the user never has to hunt for it.",
      },
    ],
  },
]

export function getExampleSite(slug: string) {
  return exampleSites.find((site) => site.slug === slug)
}

const exampleCopy: Record<Locale, Record<string, Partial<ExampleSite>>> = {
  en: {},
  it: {
    insightboard: {
      category: "Dashboard di analisi dati",
      summary:
        "Una dashboard di business intelligence che trasforma i dati di prodotto, fatturazione e CRM in report chiari, viste KPI e sintesi orientate all'azione.",
      heroStat: "Dati aziendali in italiano semplice",
      highlights: ["Schede KPI", "Sintesi report", "Viste delle fonti dati"],
      sections: [
        {
          label: "Analisi",
          title: "Metriche aziendali, non rumore grezzo",
          description:
            "La dashboard traduce i dati in una narrazione così che un founder o un analyst capisca cosa e` cambiato e perche`.",
        },
        {
          label: "Report",
          title: "Sintesi pronte per le decisioni",
          description:
            "Ogni report evidenzia il trend, la causa probabile e il passo successivo senza sommergere l'utente di grafici.",
        },
        {
          label: "Valore",
          title: "Una weekly review piu` chiara",
          description:
            "Il prodotto e` pensato come un modo piu` rapido per rivedere le performance di prodotto, finanza e vendite in un solo posto.",
        },
      ],
    },
    modelwatch: {
      category: "Multi-tool per produttivita`",
      summary:
        "Una pagina prodotto chiara e luminosa con hero forte, stato live, controlli manuali e un layout editoriale facile da leggere.",
      heroStat: "Pagina prodotto con feeling fisico",
      highlights: ["Stato live", "Controlli manuali", "UI monocromatica"],
      sections: [
        {
          label: "Hero",
          title: "Una lettura immediata",
          description:
            "La prima sezione guida con una promessa semplice, un visual forte e una CTA diretta così il visitatore capisce subito l'offerta.",
        },
        {
          label: "Prodotto",
          title: "Chiaro e concreto",
          description:
            "I blocchi di feature e le card da dashboard rendono il prodotto tangibile, pratico e facile da fidarsi.",
        },
        {
          label: "Controlli",
          title: "Costruita per l'azione",
          description:
            "La pagina mantiene i controlli visibili, così il racconto del prodotto porta naturalmente all'uso e non solo all'ammirazione.",
        },
      ],
    },
    replypilot: {
      category: "Assistente AI per team di supporto",
      summary:
        "Un assistente AI per il customer support che prepara risposte fondate su documenti approvati, segnala linguaggio rischioso e mantiene il review umano nel flusso.",
      heroStat: "Draft di risposta AI con guardrail",
      highlights: ["Preset tono", "Fonti approvate", "Revisione umana"],
      sections: [
        {
          label: "Draft",
          title: "Prime risposte utili",
          description:
            "L'assistente prepara una risposta chiara a partire dal contesto del cliente e dalla documentazione, così il team parte da un buon draft invece che da zero.",
        },
        {
          label: "Review",
          title: "Flusso human-in-the-loop",
          description:
            "Le richieste sensibili vengono segnalate prima dell'invio, rendendo il prodotto pratico per support e success teams.",
        },
        {
          label: "Valore",
          title: "Tempi di risposta piu` rapidi",
          description:
            "Il concept si concentra su velocita`, coerenza e comunicazione migliore con i clienti, non su un generico chatbot di facciata.",
        },
      ],
    },
    flowforge: {
      category: "Dashboard di automazione workflow",
      summary:
        "Un concept di automazione per team che vogliono eliminare lavoro amministrativo ripetitivo, sincronizzare dati tra strumenti e rendere visibili le operations.",
      heroStat: "Automazione per team operations",
      highlights: ["Instradamento lead", "Step di approvazione", "Log attivita`"],
      sections: [
        {
          label: "Trigger",
          title: "Punti di partenza semplici",
          description:
            "Una submission di form, un update CRM o una pianificazione possono avviare il workflow senza configurazioni manuali aggiuntive.",
        },
        {
          label: "Controlli",
          title: "Automazione sicura",
          description:
            "Validazione, approvazioni e logging rendono il prodotto affidabile per l'uso quotidiano di un'azienda.",
        },
        {
          label: "Risultato",
          title: "Meno lavoro ripetitivo",
          description:
            "Il prodotto e` costruito attorno a tempo risparmiato, meno errori e passaggi piu` puliti tra strumenti e team.",
        },
      ],
    },
    aetheriq: {
      category: "Landing page SaaS AI premium",
      summary:
        "Una landing page curata per una piattaforma di AI analytics che aiuta i team a capire il comportamento del prodotto, riassumere l'uso e vedere per tempo il rischio revenue.",
      heroStat: "AI analytics per team prodotto",
      highlights: ["Vista dashboard", "Prezzi a livelli", "FAQ e testimonianze"],
      sections: [
        {
          label: "Hero",
          title: "Promessa chiara, CTA forte",
          description:
            "La sezione iniziale spiega il prodotto in una frase e porta l'utente verso l'azione principale senza distrazioni.",
        },
        {
          label: "Features",
          title: "Funzionalita` credibili e utili",
          description:
            "I blocchi feature puntano su outcome reali come insight di retention, summary automatici e reporting per il team.",
        },
        {
          label: "Pricing",
          title: "Percorso decisionale semplice",
          description:
            "Tre piani rendono chiara la progressione di valore e mantengono la pagina facile da leggere per startup e team in crescita.",
        },
      ],
    },
    "harbor-kitchen": {
      category: "Sito ristorante / hospitality",
      summary:
        "Un sito caldo e mobile-friendly per un ristorante che vuole rendere semplici prenotazioni, punti salienti del menu e scoperta locale.",
      heroStat: "Struttura pronta per le prenotazioni",
      highlights: ["Menu highlights", "Dettagli location", "CTA prenotazione"],
      sections: [
        {
          label: "Menu",
          title: "Navigazione rapida da mobile",
          description:
            "Il menu e` organizzato in modo da essere letto velocemente sul telefono, senza zoom o scroll inutili.",
        },
        {
          label: "SEO locale",
          title: "Facile da trovare",
          description:
            "Orari, indirizzo e contatti sono visibili presto così la pagina supporta ricerca e traffico locale.",
        },
        {
          label: "Prenotazioni",
          title: "Un solo percorso chiaro",
          description:
            "Il design mantiene l'azione di prenotazione sempre visibile così l'utente non deve cercarla.",
        },
      ],
    },
  },
  de: {
    insightboard: {
      category: "Datenanalyse-Dashboard",
      summary:
        "Ein Business-Intelligence-Dashboard, das Produkt-, Billing- und CRM-Daten in klare Reports, KPI-Ansichten und handlungsorientierte Zusammenfassungen verwandelt.",
      heroStat: "Business-Daten in klarer Sprache",
      highlights: ["KPI-Karten", "Report-Zusammenfassungen", "Datenquellen-Ansichten"],
      sections: [
        {
          label: "Analyse",
          title: "Business-Metriken statt Rohdaten",
          description:
            "Das Dashboard uebersetzt Daten in eine Erzaehlung, damit Founder oder Analysten verstehen, was sich geaendert hat und warum.",
        },
        {
          label: "Reports",
          title: "Entscheidungsreife Zusammenfassungen",
          description:
            "Jeder Report hebt den Trend, die wahrscheinliche Ursache und den naechsten Schritt hervor, ohne den Nutzer mit Charts zu ueberladen.",
        },
        {
          label: "Wert",
          title: "Eine klarere woechentliche Review",
          description:
            "Das Produkt ist als schnellerer Weg gedacht, Performance aus Produkt, Finance und Sales an einem Ort zu ueberblicken.",
        },
      ],
    },
    modelwatch: {
      category: "Produktivitaets-Multitool",
      summary:
        "Eine klare, helle Produktseite mit starkem Hero, Live-Status, manuellen Controls und einem editorischen Layout, das leicht lesbar ist.",
      heroStat: "Produktseite mit physischem Gefuehl",
      highlights: ["Live-Status", "Manuelle Controls", "Monochrome UI"],
      sections: [
        {
          label: "Hero",
          title: "Sofort lesbar",
          description:
            "Der obere Bereich fuehrt mit einem einfachen Versprechen, einem starken Produkt-Visual und einer direkten CTA, damit Besucher das Angebot sofort verstehen.",
        },
        {
          label: "Produkt",
          title: "Klar und konkret",
          description:
            "Feature-Bloecke und dashboardartige Karten machen das Produkt greifbar, praktisch und vertrauenswuerdig.",
        },
        {
          label: "Controls",
          title: "Auf Aktion ausgelegt",
          description:
            "Die Seite haelt die Steuerung sichtbar, damit die Produktgeschichte natuerlich auf Nutzung statt nur auf Eindruck zielt.",
        },
      ],
    },
    replypilot: {
      category: "KI-Assistent fuer Support-Teams",
      summary:
        "Ein Customer-Support-KI-Assistent, der fundierte Antworten aus freigegebenen Dokumenten entwirft, riskante Formulierungen markiert und menschliche Kontrolle im Prozess behält.",
      heroStat: "KI-Antwortentwuerfe mit Guardrails",
      highlights: ["Ton-Presets", "Freigegebene Quellen", "Menschliche Kontrolle"],
      sections: [
        {
          label: "Drafting",
          title: "Hilfreiche erste Antworten",
          description:
            "Der Assistent erstellt eine klare Antwort auf Basis des Kundenkontexts und der Produktdokumentation, damit das Team mit einem starken Entwurf startet.",
        },
        {
          label: "Review",
          title: "Human-in-the-loop-Flow",
          description:
            "Sensible Anfragen werden vor dem Senden markiert, was das Produkt fuer Support- und Success-Teams praktisch macht.",
        },
        {
          label: "Wert",
          title: "Schnellere Antwortzeiten",
          description:
            "Das Konzept konzentriert sich auf Geschwindigkeit, Konsistenz und bessere Kundenkommunikation, nicht auf einen generischen Chatbot.",
        },
      ],
    },
    flowforge: {
      category: "Workflow-Automation-Dashboard",
      summary:
        "Ein Automationsprodukt fuer Teams, die wiederholte Verwaltungsarbeit entfernen, Daten zwischen Tools synchronisieren und Operations sichtbar machen wollen.",
      heroStat: "Automatisierung fuer Ops-Teams",
      highlights: ["Lead-Routing", "Freigabeschritte", "Aktivitaetsprotokolle"],
      sections: [
        {
          label: "Trigger",
          title: "Einfache Startpunkte",
          description:
            "Ein Formular-Submit, CRM-Update oder Zeitplan kann den Workflow ohne zusaetzliche manuelle Einrichtung starten.",
        },
        {
          label: "Kontrollen",
          title: "Sichere Automatisierung",
          description:
            "Validierung, Freigaben und Logging machen das Produkt fuer den taeglichen Einsatz vertrauenswuerdig.",
        },
        {
          label: "Ergebnis",
          title: "Weniger Wiederholungsarbeit",
          description:
            "Das Produkt ist auf gesparte Zeit, weniger Fehler und sauberere Uebergaben zwischen Tools und Teams ausgelegt.",
        },
      ],
    },
    aetheriq: {
      category: "Premium-KI-SaaS-Landingpage",
      summary:
        "Eine polierte Landingpage fuer eine AI-Analytics-Plattform, die Teams hilft, Produktverhalten zu verstehen, Nutzung zusammenzufassen und Revenue-Risiken frueh zu sehen.",
      heroStat: "KI-Analytics fuer Produktteams",
      highlights: ["Dashboard-Ansicht", "Preisstufen", "FAQ und Testimonials"],
      sections: [
        {
          label: "Hero",
          title: "Klare Zusage, starke CTA",
          description:
            "Der obere Bereich erklaert das Produkt in einem Satz und fuehrt ohne Ablenkung zur Hauptaktion.",
        },
        {
          label: "Features",
          title: "Nuetzliche, glaubwuerdige Funktionen",
          description:
            "Die Feature-Bloecke fokussieren sich auf echte Ergebnisse wie Retention-Insights, automatische Zusammenfassungen und Team-Reporting.",
        },
        {
          label: "Pricing",
          title: "Einfacher Entscheidungsweg",
          description:
            "Drei Plaene machen die Wertleiter klar und halten die Seite fuer Startups und wachsende Teams leicht scanbar.",
        },
      ],
    },
    "harbor-kitchen": {
      category: "Restaurant-/Hospitality-Website",
      summary:
        "Eine warme, mobilefreundliche Website fuer ein Restaurant, bei dem Reservierungen, Menue-Highlights und lokale Auffindbarkeit leicht fallen sollen.",
      heroStat: "Reservierungsreife Struktur",
      highlights: ["Menue-Highlights", "Standortinfos", "Reservierungs-CTA"],
      sections: [
        {
          label: "Menue",
          title: "Schnelles Browsen auf Mobile",
          description:
            "Das Menue ist so organisiert, dass Gaeste es am Telefon schnell lesen koennen, ohne Zoomen oder langes Scrollen.",
        },
        {
          label: "Lokales SEO",
          title: "Leicht auffindbar",
          description:
            "Oeffnungszeiten, Adresse und Kontakt sind frueh sichtbar, damit die Seite Suche und Laufkundschaft unterstuetzt.",
        },
        {
          label: "Reservierungen",
          title: "Ein klarer Buchungsweg",
          description:
            "Das Design haelt die Buchungsaktion immer sichtbar, damit der Nutzer nie danach suchen muss.",
        },
      ],
    },
  },
}

export function getExampleSites(locale: Locale) {
  const localeCopy = exampleCopy[locale]
  const resolved = exampleSites.map((site) => ({
    ...site,
    ...(localeCopy[site.slug] ?? {}),
  }))
  if (locale === "de") return normalizeGermanData(resolved)
  if (locale === "it") return normalizeItalianData(resolved)
  return resolved
}

export function getLocalizedExampleSite(locale: Locale, slug: string) {
  return getExampleSites(locale).find((site) => site.slug === slug)
}

