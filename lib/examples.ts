import { Globe, Building2, BarChart3, Bot, Workflow, Clock3, BrainCircuit } from "lucide-react"
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
    slug: "affect-sense",
    name: "AffectSense",
    category: "Computer vision AI prototype",
    summary:
      "A local webcam facial expression recognition prototype with a React/Vite interface, FastAPI backend, OpenCV YuNet face alignment, and MobileFaceNet ONNX inference.",
    colorClass: "from-cyan-400/20 via-background to-background",
    accentClass: "text-cyan-300",
    icon: BrainCircuit,
    heroStat: "Webcam emotion telemetry",
    highlights: ["OpenCV backend", "YuNet face detection", "ONNX expression model"],
    sections: [
      {
        label: "Pipeline",
        title: "Webcam frames become structured predictions",
        description:
          "Frames move from the browser to a local FastAPI service, where OpenCV detects and aligns the face before expression inference.",
      },
      {
        label: "Interface",
        title: "Live results with honest confidence",
        description:
          "The UI shows the dominant emotion, second-best candidate, confidence level, distribution bars, and recent prediction history.",
      },
      {
        label: "Prototype",
        title: "Built as a practical AI experiment",
        description:
          "The project documents the model choices, removed experiments, runtime constraints, and limitations clearly enough to review or extend.",
      },
    ],
  },
  {
    slug: "aurelia",
    name: "Aurelia Interiors",
    category: "Luxury interior design website",
    summary:
      "A premium design studio website with a cinematic image hero, editorial project gallery, services, process, testimonials, and luxury cream-gold styling.",
    colorClass: "from-amber-400/20 via-background to-background",
    accentClass: "text-amber-300",
    icon: Building2,
    heroStat: "Luxury editorial brand experience",
    highlights: ["Full-screen image hero", "Project gallery", "Premium service sections"],
    sections: [
      {
        label: "Hero",
        title: "Strong first impression",
        description:
          "The page opens with a full-screen interior image, refined serif typography, and calm gold accents that immediately set the premium tone.",
      },
      {
        label: "Projects",
        title: "Visual portfolio first",
        description:
          "Selected interiors are presented through large image cards, location details, and quiet transitions that suit a design studio.",
      },
      {
        label: "Brand",
        title: "Editorial luxury throughout",
        description:
          "Services, process, testimonials, and contact sections keep the same restrained cream, charcoal, and gold visual language.",
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
    name: "Estetic Clinique",
    category: "Premium aesthetic clinic website",
    summary:
      "A luxury medical aesthetics website with a cinematic clinic hero, treatment cards, pricing, gallery, FAQ, and appointment request flow.",
    colorClass: "from-amber-400/20 via-background to-background",
    accentClass: "text-amber-300",
    icon: Bot,
    heroStat: "Luxury clinic experience",
    highlights: ["Treatment gallery", "Pricing cards", "Appointment form"],
    sections: [
      {
        label: "Hero",
        title: "Premium first impression",
        description:
          "The page opens with a full-screen clinic image, refined typography, and clear consultation calls to action.",
      },
      {
        label: "Treatments",
        title: "Visual service discovery",
        description:
          "Treatment cards use the original imagery, hover states, and concise descriptions to make services easy to scan.",
      },
      {
        label: "Booking",
        title: "Clear appointment path",
        description:
          "FAQ, contact details, and a validated appointment form keep the user journey practical from browsing to inquiry.",
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
    "affect-sense": {
      category: "Prototipo AI di computer vision",
      summary:
        "Un prototipo locale di riconoscimento delle espressioni facciali via webcam con interfaccia React/Vite, backend FastAPI, allineamento volto OpenCV YuNet e inferenza ONNX MobileFaceNet.",
      heroStat: "Telemetria emozioni da webcam",
      highlights: ["Backend OpenCV", "Face detection YuNet", "Modello ONNX espressioni"],
      sections: [
        {
          label: "Pipeline",
          title: "I frame webcam diventano predizioni strutturate",
          description:
            "I frame passano dal browser a un servizio FastAPI locale, dove OpenCV rileva e allinea il volto prima dell'inferenza sull'espressione.",
        },
        {
          label: "Interfaccia",
          title: "Risultati live con confidenza chiara",
          description:
            "La UI mostra emozione dominante, seconda candidata, livello di confidenza, barre di distribuzione e storico recente delle predizioni.",
        },
        {
          label: "Prototipo",
          title: "Costruito come esperimento AI pratico",
          description:
            "Il progetto documenta scelte modello, esperimenti rimossi, vincoli runtime e limiti in modo chiaro per revisione o sviluppo futuro.",
        },
      ],
    },
    aurelia: {
      category: "Sito luxury interior design",
      summary:
        "Un sito premium per studio di interior design con hero fotografica cinematografica, galleria editoriale, servizi, processo, testimonianze e stile crema-oro.",
      heroStat: "Esperienza luxury editoriale",
      highlights: ["Hero fotografica full-screen", "Galleria progetti", "Sezioni servizi premium"],
      sections: [
        {
          label: "Hero",
          title: "Prima impressione forte",
          description:
            "La dashboard traduce i dati in una narrazione così che un founder o un analyst capisca cosa e` cambiato e perche`.",
        },
        {
          label: "Progetti",
          title: "Portfolio visivo al centro",
          description:
            "Ogni report evidenzia il trend, la causa probabile e il passo successivo senza sommergere l'utente di grafici.",
        },
        {
          label: "Brand",
          title: "Luxury editoriale coerente",
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
      category: "Sito premium per clinica estetica",
      summary:
        "Un sito luxury per medicina estetica con hero fotografica, trattamenti, prezzi, gallery, FAQ e richiesta appuntamento.",
      heroStat: "Esperienza clinic luxury",
      highlights: ["Gallery trattamenti", "Card prezzi", "Form appuntamento"],
      sections: [
        {
          label: "Hero",
          title: "Prima impressione premium",
          description:
            "La pagina apre con una fotografia full-screen della clinica, tipografia raffinata e CTA chiare per la consulenza.",
        },
        {
          label: "Trattamenti",
          title: "Servizi visuali e facili da esplorare",
          description:
            "Le card dei trattamenti usano le immagini originali, hover state e descrizioni concise per rendere i servizi leggibili.",
        },
        {
          label: "Booking",
          title: "Percorso appuntamento chiaro",
          description:
            "FAQ, dettagli di contatto e form validato accompagnano l'utente dalla visita alla richiesta.",
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
    "affect-sense": {
      category: "Computer-Vision-KI-Prototyp",
      summary:
        "Ein lokaler Webcam-Prototyp fuer Gesichtsausdruckserkennung mit React/Vite-Oberflaeche, FastAPI-Backend, OpenCV-YuNet-Gesichtsausrichtung und MobileFaceNet-ONNX-Inferenz.",
      heroStat: "Webcam-Emotionstelemetrie",
      highlights: ["OpenCV-Backend", "YuNet-Gesichtserkennung", "ONNX-Ausdrucksmodell"],
      sections: [
        {
          label: "Pipeline",
          title: "Webcam-Frames werden zu strukturierten Vorhersagen",
          description:
            "Frames laufen vom Browser zu einem lokalen FastAPI-Service, wo OpenCV das Gesicht erkennt und ausrichtet, bevor die Ausdrucksinferenz startet.",
        },
        {
          label: "Interface",
          title: "Live-Ergebnisse mit klarer Konfidenz",
          description:
            "Die UI zeigt dominante Emotion, zweitbeste Kandidatin, Konfidenz, Verteilungsbalken und den aktuellen Verlauf der Vorhersagen.",
        },
        {
          label: "Prototyp",
          title: "Als praktisches KI-Experiment gebaut",
          description:
            "Das Projekt dokumentiert Modellentscheidungen, entfernte Experimente, Runtime-Grenzen und Limitationen klar genug fuer Review oder Erweiterung.",
        },
      ],
    },
    aurelia: {
      category: "Luxury-Interior-Design-Website",
      summary:
        "Eine Premium-Website fuer ein Interior-Design-Studio mit filmischem Bild-Hero, editorialer Projektgalerie, Services, Prozess, Testimonials und Creme-Gold-Stil.",
      heroStat: "Luxurioese Editorial-Markenwirkung",
      highlights: ["Full-Screen-Bildhero", "Projektgalerie", "Premium-Service-Sektionen"],
      sections: [
        {
          label: "Hero",
          title: "Starker erster Eindruck",
          description:
            "Die Seite startet mit einem grossen Interior-Bild, feiner Serifentypografie und ruhigen Goldakzenten, die sofort Premium-Positionierung zeigen.",
        },
        {
          label: "Projekte",
          title: "Visuelles Portfolio im Zentrum",
          description:
            "Ausgewaehlte Raeume werden mit grossen Bildkarten, Standortdetails und dezenten Uebergaengen praesentiert.",
        },
        {
          label: "Brand",
          title: "Durchgehend editorialer Luxus",
          description:
            "Services, Prozess, Testimonials und Kontakt halten dieselbe zurueckhaltende Bildsprache in Creme, Charcoal und Gold.",
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
      category: "Premium-Website fuer Aesthetic Clinic",
      summary:
        "Eine Luxury-Website fuer medizinische Aesthetik mit Bild-Hero, Treatments, Preisen, Galerie, FAQ und Terminformular.",
      heroStat: "Luxury Clinic Experience",
      highlights: ["Treatment-Galerie", "Preiskarten", "Terminformular"],
      sections: [
        {
          label: "Hero",
          title: "Premium erster Eindruck",
          description:
            "Die Seite startet mit einem Full-Screen-Klinikbild, feiner Typografie und klaren Consultation-CTAs.",
        },
        {
          label: "Treatments",
          title: "Visuelle Service-Entdeckung",
          description:
            "Treatment Cards nutzen die Originalbilder, Hover States und kurze Beschreibungen, damit Services schnell erfassbar sind.",
        },
        {
          label: "Booking",
          title: "Klarer Terminpfad",
          description:
            "FAQ, Kontaktdaten und ein validiertes Formular fuehren vom Browsing zur Anfrage.",
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
