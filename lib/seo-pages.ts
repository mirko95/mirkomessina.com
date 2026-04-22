import type { Locale } from "@/lib/i18n"
import { normalizeGermanData } from "@/lib/german"
import { normalizeItalianData } from "@/lib/italian"

export type SeoLandingPageConfig = {
  slug: string
  keyword: string
  title: string
  description: string
  h1: string
  intro: string
  benefits: Array<{
    title: string
    description: string
  }>
  steps: Array<{
    title: string
    description: string
  }>
  ctaLabel: string
  ctaHref: string
}

export const seoLandingPages: SeoLandingPageConfig[] = [
  {
    slug: "website-to-figma",
    keyword: "website to figma",
    title: "Website to Figma | Manual UI Recreation for Design Teams",
    description:
      "A practical service page about converting existing websites into editable Figma layouts for redesign, handoff, and product documentation.",
    h1: "Website to Figma conversion for real product teams",
    intro:
      "If a client already has a live site, the fastest way to plan a redesign is to turn that interface into a clean Figma file. This page explains how the workflow works, what gets extracted, and where the value is for design handoff and iteration.",
    benefits: [
      {
        title: "Editable structure",
        description: "Get the layout broken down into reusable sections so designers can work from a clear starting point instead of rebuilding from scratch.",
      },
      {
        title: "Faster redesign planning",
        description: "Use the real website as the source of truth when a team needs to refresh content, spacing, and component hierarchy.",
      },
      {
        title: "Better client handoff",
        description: "A Figma version makes it easier to discuss changes, annotate feedback, and align stakeholders before development begins.",
      },
    ],
    steps: [
      {
        title: "Review the source site",
        description: "We inspect the live website, identify the main sections, and note the reusable UI patterns that should be preserved or improved.",
      },
      {
        title: "Map the interface into frames",
        description: "The layout is organized into Figma frames and components so the structure stays easy to edit and present.",
      },
      {
        title: "Deliver a redesign-ready file",
        description: "You receive a clean working file that supports visual exploration, internal reviews, and development handoff.",
      },
    ],
    ctaLabel: "Discuss a website to Figma project",
    ctaHref: "/contact",
  },
  {
    slug: "html-to-design",
    keyword: "html to design",
    title: "HTML to Design | Convert Live Interfaces Into Editable Layouts",
    description:
      "A focused landing page about turning HTML pages into design references for audits, redesigns, and product updates.",
    h1: "HTML to design conversion for audits and redesigns",
    intro:
      "Live HTML already contains the spacing, structure, typography, and content hierarchy a team needs to understand. This page explains how that source can be transformed into a design-ready layout that is easier to review and improve.",
    benefits: [
      {
        title: "Useful for redesigns",
        description: "A design translation lets teams keep the working parts of a page while modernizing the parts that feel dated or hard to use.",
      },
      {
        title: "Clear content hierarchy",
        description: "The conversion reveals whether the page has one clear message, supporting proof, and a CTA that stands out.",
      },
      {
        title: "Better collaboration",
        description: "Designers, developers, and stakeholders can review the same interface in a format that is easier to annotate and compare.",
      },
    ],
    steps: [
      {
        title: "Capture the layout",
        description: "We identify the page sections, spacing rhythm, and component structure directly from the existing HTML interface.",
      },
      {
        title: "Refine the visual system",
        description: "Typography, spacing, color, and buttons are normalized so the design looks coherent in Figma or another design tool.",
      },
      {
        title: "Use it for planning",
        description: "The result supports redesign workshops, content updates, and future development estimates.",
      },
    ],
    ctaLabel: "Ask about HTML to design",
    ctaHref: "/contact",
  },
  {
    slug: "extract-ui-from-website",
    keyword: "extract ui from website",
    title: "Extract UI From Website | Rebuild Interface Screens Quickly",
    description:
      "A service page describing how to extract UI from a website for documentation, analysis, and internal product work.",
    h1: "Extract UI from website pages for faster product work",
    intro:
      "When a team needs to document an interface, compare competing products, or plan a redesign, it helps to extract the UI into a structured visual reference. This page explains the process and the practical output.",
    benefits: [
      {
        title: "Interface documentation",
        description: "The extracted UI gives product teams a visual reference they can use for notes, audits, and planning.",
      },
      {
        title: "Competitive analysis",
        description: "Teams can compare layouts, calls to action, and component patterns without manually recreating every screen.",
      },
      {
        title: "Faster design starts",
        description: "Instead of beginning with a blank canvas, designers get a structured view of the existing interface and its content flow.",
      },
    ],
    steps: [
      {
        title: "Choose the page",
        description: "The source URL is selected and analyzed so the main interface parts can be separated from supporting content.",
      },
      {
        title: "Extract the structure",
        description: "Sections, cards, buttons, and hierarchy are organized into a format that is easier to review in design or planning tools.",
      },
      {
        title: "Turn it into action",
        description: "The output can guide redesigns, product documentation, or internal presentations without extra guesswork.",
      },
    ],
    ctaLabel: "Request an extraction workflow",
    ctaHref: "/contact",
  },
]

export function getSeoLandingPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug)
}

export function getSeoLandingPages(locale: Locale) {
  return seoLandingPages.map((page) => getSeoLandingPageCopy(locale, page.slug) ?? page)
}

const localizedSeoPages: Record<Locale, Record<string, Partial<SeoLandingPageConfig>>> = {
  en: {},
  it: {
    "website-to-figma": {
      title: "Website to Figma | Conversione manuale UI per team design",
      description:
        "Una pagina pratica che spiega come convertire siti esistenti in layout Figma modificabili per redesign, handoff e documentazione di prodotto.",
      h1: "Conversione website to Figma per team di prodotto reali",
      intro:
        "Se un cliente ha gia` un sito live, il modo piu` veloce per pianificare un redesign e` trasformare quella interfaccia in un file Figma pulito. Questa pagina spiega come funziona il flusso, cosa viene estratto e dove sta il valore per il design handoff e l'iterazione.",
      benefits: [
        {
          title: "Struttura modificabile",
          description:
            "Ottieni il layout suddiviso in sezioni riutilizzabili, cosi` i designer possono lavorare da un punto di partenza chiaro invece di ricostruire tutto da zero.",
        },
        {
          title: "Pianificazione redesign piu` rapida",
          description:
            "Usa il sito reale come fonte di verita` quando un team deve aggiornare contenuti, spaziature e gerarchia dei componenti.",
        },
        {
          title: "Handoff migliore al cliente",
          description:
            "Una versione Figma rende piu` semplice discutere modifiche, annotare feedback e allineare gli stakeholder prima dello sviluppo.",
        },
      ],
      steps: [
        {
          title: "Analizza il sito sorgente",
          description:
            "Esaminiamo il sito live, identifichiamo le sezioni principali e annotiamo i pattern UI riutilizzabili da mantenere o migliorare.",
        },
        {
          title: "Mappiamo l'interfaccia in frame",
          description:
            "Il layout viene organizzato in frame e componenti Figma in modo che la struttura resti facile da modificare e presentare.",
        },
        {
          title: "Consegniamo un file pronto per il redesign",
          description:
            "Ricevi un file pulito e lavorabile che supporta esplorazione visiva, review interne e handoff allo sviluppo.",
        },
      ],
      ctaLabel: "Parla di un progetto website to Figma",
    },
    "html-to-design": {
      title: "HTML to Design | Trasforma interfacce live in layout modificabili",
      description:
        "Una landing page focalizzata su come trasformare pagine HTML in riferimenti di design per audit, redesign e aggiornamenti di prodotto.",
      h1: "Conversione HTML to design per audit e redesign",
      intro:
        "L'HTML live contiene gia` spaziature, struttura, tipografia e gerarchia del contenuto che servono a un team per capire l'interfaccia. Questa pagina spiega come trasformare quella base in un layout pronto per il design, piu` semplice da valutare e migliorare.",
      benefits: [
        {
          title: "Utile per i redesign",
          description:
            "Una traduzione in design permette ai team di mantenere cio` che funziona e modernizzare le parti datate o difficili da usare.",
        },
        {
          title: "Gerarchia del contenuto chiara",
          description:
            "La conversione mostra se la pagina ha un messaggio unico, prove a supporto e una CTA che risalta.",
        },
        {
          title: "Collaborazione migliore",
          description:
            "Designer, developer e stakeholder possono rivedere la stessa interfaccia in un formato piu` facile da annotare e confrontare.",
        },
      ],
      steps: [
        {
          title: "Cattura il layout",
          description:
            "Individuiamo sezioni, ritmo delle spaziature e struttura dei componenti direttamente dall'interfaccia HTML esistente.",
        },
        {
          title: "Rifiniamo il sistema visivo",
          description:
            "Tipografia, spaziatura, colori e pulsanti vengono normalizzati cosi` il design appare coerente in Figma o in altri strumenti.",
        },
        {
          title: "Usalo per la pianificazione",
          description:
            "Il risultato supporta workshop di redesign, aggiornamenti dei contenuti e stime di sviluppo future.",
        },
      ],
      ctaLabel: "Chiedi di HTML to design",
    },
    "extract-ui-from-website": {
      title: "Extract UI From Website | Ricostruisci velocemente le schermate",
      description:
        "Una pagina di servizio che descrive come estrarre la UI da un sito per documentazione, analisi e lavoro di prodotto interno.",
      h1: "Estrai la UI da un sito per accelerare il lavoro di prodotto",
      intro:
        "Quando un team deve documentare un'interfaccia, confrontare prodotti concorrenti o pianificare un redesign, e` utile estrarre la UI in un riferimento visivo strutturato. Questa pagina spiega il processo e il risultato pratico.",
      benefits: [
        {
          title: "Documentazione dell'interfaccia",
          description:
            "La UI estratta offre ai team un riferimento visivo da usare per note, audit e pianificazione.",
        },
        {
          title: "Analisi competitiva",
          description:
            "I team possono confrontare layout, call to action e pattern dei componenti senza ricostruire manualmente ogni schermata.",
        },
        {
          title: "Partenza piu` rapida del design",
          description:
            "Invece di partire da una tela vuota, i designer ottengono una vista strutturata dell'interfaccia e del flusso di contenuto.",
        },
      ],
      steps: [
        {
          title: "Scegli la pagina",
          description:
            "La URL sorgente viene selezionata e analizzata cosi` le parti principali dell'interfaccia si possono separare dai contenuti secondari.",
        },
        {
          title: "Estrai la struttura",
          description:
            "Sezioni, card, pulsanti e gerarchia vengono organizzati in un formato piu` semplice da rivedere negli strumenti di design o planning.",
        },
        {
          title: "Trasformalo in azione",
          description:
            "L'output puo` guidare redesign, documentazione di prodotto o presentazioni interne senza ulteriori supposizioni.",
        },
      ],
      ctaLabel: "Richiedi un workflow di estrazione",
    },
  },
  de: {
    "website-to-figma": {
      title: "Website to Figma | Manuelle UI-Uebertragung fuer Design-Teams",
      description:
        "Eine praktische Serviceseite darueber, wie bestehende Websites in bearbeitbare Figma-Layouts fuer Redesign, Handover und Produktdokumentation ueberfuehrt werden.",
      h1: "Website-to-Figma-Konvertierung fuer echte Produktteams",
      intro:
        "Wenn ein Kunde bereits eine Live-Seite hat, ist der schnellste Weg fuer ein Redesign, diese Interface in eine saubere Figma-Datei zu ueberfuehren. Diese Seite erklaert, wie der Workflow funktioniert, was extrahiert wird und wo der Wert fuer Design-Handover und Iteration liegt.",
      benefits: [
        {
          title: "Bearbeitbare Struktur",
          description:
            "Du bekommst das Layout in wiederverwendbare Abschnitte aufgeteilt, sodass Designer mit einem klaren Ausgangspunkt arbeiten koennen.",
        },
        {
          title: "Schnellere Redesign-Planung",
          description:
            "Nutze die echte Website als Quelle der Wahrheit, wenn ein Team Inhalte, Abstaende und die Hierarchie modernisieren will.",
        },
        {
          title: "Besserer Kunden-Handover",
          description:
            "Eine Figma-Version erleichtert es, Aenderungen zu besprechen, Feedback zu notieren und Stakeholder vor der Umsetzung abzustimmen.",
        },
      ],
      steps: [
        {
          title: "Quelle analysieren",
          description:
            "Wir pruefen die Live-Seite, identifizieren die wichtigsten Abschnitte und markieren wiederverwendbare UI-Patterns, die behalten oder verbessert werden sollen.",
        },
        {
          title: "Interface in Frames abbilden",
          description:
            "Das Layout wird in Figma-Frames und Komponenten organisiert, damit die Struktur leicht zu editieren und zu praesentieren bleibt.",
        },
        {
          title: "Redesign-bereite Datei liefern",
          description:
            "Du erhaeltst eine saubere Arbeitsdatei fuer visuelle Exploration, interne Reviews und den Handover an die Entwicklung.",
        },
      ],
      ctaLabel: "Website-to-Figma-Projekt besprechen",
    },
    "html-to-design": {
      title: "HTML to Design | Live-Interfaces in bearbeitbare Layouts uebertragen",
      description:
        "Eine fokussierte Landingpage darueber, wie HTML-Seiten als Design-Referenzen fuer Audits, Redesigns und Produktupdates genutzt werden koennen.",
      h1: "HTML-to-Design-Konvertierung fuer Audits und Redesigns",
      intro:
        "Live-HTML enthaelt bereits die Abstaende, Struktur, Typografie und Inhalts-Hierarchie, die ein Team verstehen muss. Diese Seite erklaert, wie diese Grundlage in ein designfertiges Layout ueberfuehrt wird, das einfacher zu bewerten und zu verbessern ist.",
      benefits: [
        {
          title: "Nuetzlich fuer Redesigns",
          description:
            "Eine Design-Uebersetzung hilft Teams, funktionierende Teile zu behalten und nur die veralteten oder schwer nutzbaren Bereiche zu modernisieren.",
        },
        {
          title: "Klare Content-Hierarchie",
          description:
            "Die Konvertierung zeigt, ob die Seite eine klare Botschaft, unterstuetzende Belege und eine auffaellige CTA hat.",
        },
        {
          title: "Bessere Zusammenarbeit",
          description:
            "Designer, Entwickler und Stakeholder koennen dieselbe Oberfläche in einem Format ansehen, das leichter zu annotieren und zu vergleichen ist.",
        },
      ],
      steps: [
        {
          title: "Layout erfassen",
          description:
            "Wir identifizieren Abschnitte, Abstands-Rhythmus und Komponentenstruktur direkt aus der vorhandenen HTML-Oberflaeche.",
        },
        {
          title: "Visuelles System verfeinern",
          description:
            "Typografie, Abstaende, Farben und Buttons werden normalisiert, damit das Design in Figma oder anderen Tools konsistent wirkt.",
        },
        {
          title: "Fuer die Planung nutzen",
          description:
            "Das Ergebnis unterstuetzt Redesign-Workshops, Content-Updates und spaetere Entwicklungs-Schaetzungen.",
        },
      ],
      ctaLabel: "HTML-to-Design anfragen",
    },
    "extract-ui-from-website": {
      title: "Extract UI From Website | Interface-Screens schneller nachbauen",
      description:
        "Eine Serviceseite, die erklaert, wie man UI aus einer Website fuer Dokumentation, Analyse und interne Produktarbeit extrahiert.",
      h1: "UI aus Websites extrahieren, um Produktarbeit zu beschleunigen",
      intro:
        "Wenn ein Team eine Schnittstelle dokumentieren, Wettbewerber vergleichen oder ein Redesign planen muss, ist es hilfreich, die UI in eine strukturierte visuelle Referenz zu extrahieren. Diese Seite erklaert den Prozess und das praktische Ergebnis.",
      benefits: [
        {
          title: "Interface-Dokumentation",
          description:
            "Die extrahierte UI gibt Produktteams eine visuelle Referenz fuer Notizen, Audits und Planung.",
        },
        {
          title: "Wettbewerbsanalyse",
          description:
            "Teams koennen Layouts, Call-to-Actions und Component-Patterns vergleichen, ohne jede Screen manuell nachzubauen.",
        },
        {
          title: "Schnellerer Design-Start",
          description:
            "Statt bei einer leeren Leinwand anzufangen, erhalten Designer eine strukturierte Sicht auf Interface und Content-Flow.",
        },
      ],
      steps: [
        {
          title: "Seite waehlen",
          description:
            "Die Quell-URL wird analysiert, damit sich die Hauptteile der Oberfläche von Nebeninhalten trennen lassen.",
        },
        {
          title: "Struktur extrahieren",
          description:
            "Abschnitte, Cards, Buttons und Hierarchie werden in ein Format gebracht, das leichter in Design- oder Planning-Tools zu prüfen ist.",
        },
        {
          title: "In Handlung umsetzen",
          description:
            "Das Ergebnis kann Redesigns, Produktdokumentation oder interne Praesentationen ohne Ratespiel unterstuetzen.",
        },
      ],
      ctaLabel: "Ein Extraktions-Workflow anfragen",
    },
  },
}

export function getSeoLandingPageCopy(locale: Locale, slug: string) {
  const localizedMap = localizedSeoPages[locale] ?? localizedSeoPages.en
  const localized = localizedMap[slug]
  const base = getSeoLandingPage(slug)

  if (!base) return undefined

  const result = {
    ...base,
    ...localized,
    benefits: localized?.benefits ?? base.benefits,
    steps: localized?.steps ?? base.steps,
  }

  if (locale === "de") return normalizeGermanData(result)
  if (locale === "it") return normalizeItalianData(result)
  return result
}

