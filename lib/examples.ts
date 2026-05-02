import { Armchair, Globe, Newspaper, ScanFace, ShoppingBag, Syringe, UtensilsCrossed } from "lucide-react"
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
    icon: ScanFace,
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
    slug: "lussolab",
    name: "LussoLab",
    category: "Premium e-commerce website",
    summary:
      "A high-end minimalist e-commerce experience for leather goods and lifestyle accessories with local product photography, product detail pages, cart drawer, and checkout flow.",
    colorClass: "from-neutral-300/25 via-background to-background",
    accentClass: "text-neutral-300",
    icon: ShoppingBag,
    heroStat: "Luxury e-commerce experience",
    highlights: ["Image-led storefront", "Product detail pages", "Cart and checkout flow"],
    sections: [
      {
        label: "Storefront",
        title: "Minimal luxury first impression",
        description:
          "The page opens with a full-screen lifestyle image, restrained typography, and direct shopping paths that fit a premium product brand.",
      },
      {
        label: "Products",
        title: "Product discovery and detail",
        description:
          "Featured products use local photography, color selectors, quantity controls, specifications, and editorial craft details.",
      },
      {
        label: "Commerce",
        title: "Cart and checkout workflow",
        description:
          "The example preserves working navigation, a slide-out cart, quantity updates, checkout form, and confirmation state.",
      },
    ],
  },
  {
    slug: "blog",
    name: "Signal",
    category: "Editorial blog website",
    summary:
      "A refined editorial publication with featured articles, topic browsing, search, carousel navigation, article pages, newsletter signup, and dark mode.",
    colorClass: "from-neutral-300/25 via-background to-background",
    accentClass: "text-neutral-300",
    icon: Newspaper,
    heroStat: "Editorial reading experience",
    highlights: ["Article search", "Topic filters", "Dark mode"],
    sections: [
      {
        label: "Hero",
        title: "Featured story first",
        description:
          "The page opens with a strong featured article, large editorial typography, and a clear path into the full story.",
      },
      {
        label: "Topics",
        title: "Browse by focus",
        description:
          "Topic tiles and article filters help readers move through AI, startups, engineering, and design without friction.",
      },
      {
        label: "Reading",
        title: "Article pages and newsletter",
        description:
          "Article detail views, progress feedback, search, and newsletter signup preserve the publication workflow.",
      },
    ],
  },
  {
    slug: "estetic-clinique",
    name: "Estetic Clinique",
    category: "Premium aesthetic clinic website",
    summary:
      "A luxury medical aesthetics website with a cinematic clinic hero, treatment cards, pricing, gallery, FAQ, and appointment request flow.",
    colorClass: "from-amber-400/20 via-background to-background",
    accentClass: "text-amber-300",
    icon: Syringe,
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
    slug: "velora",
    name: "Velora Interiors",
    category: "Luxury interior design website",
    summary:
      "A refined interior design website with cinematic imagery, selected projects, service cards, studio philosophy, process, testimonials, and contact CTA.",
    colorClass: "from-amber-300/20 via-background to-background",
    accentClass: "text-amber-300",
    icon: Armchair,
    heroStat: "Luxury interiors portfolio",
    highlights: ["Image-led hero", "Project gallery", "Inquiry CTA"],
    sections: [
      {
        label: "Hero",
        title: "Cinematic luxury first impression",
        description:
          "The page opens with a full-screen interior image, elegant serif typography, and calm gold accents.",
      },
      {
        label: "Projects",
        title: "Selected masterpieces",
        description:
          "Project cards use real interiors, location details, and restrained motion to show the studio's portfolio.",
      },
      {
        label: "Inquiry",
        title: "Clear path to consultation",
        description:
          "Services, process, testimonials, and footer CTA guide visitors toward a premium project inquiry.",
      },
    ],
  },
  {
    slug: "a-tavola",
    name: "A Tavola",
    category: "Restaurant / hospitality site",
    summary:
      "A luxury Italian restaurant website with cinematic imagery, a dark gold editorial style, gallery, menu browsing, and reservation flow.",
    colorClass: "from-amber-400/20 via-black/20 to-background",
    accentClass: "text-amber-300",
    icon: UtensilsCrossed,
    heroStat: "Cinematic fine-dining experience",
    highlights: ["Image-led hero", "La Carta menu", "Reservation CTA"],
    sections: [
      {
        label: "Menu",
        title: "La Carta with filters",
        description:
          "The menu keeps Atavola's Italian categories while preserving quick browsing and clear prices on mobile.",
      },
      {
        label: "Local SEO",
        title: "Image-led atmosphere",
        description:
          "Cinematic food, dining room, terrace, and candlelit images carry the premium restaurant mood throughout.",
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

export const exampleSlugAliases: Record<string, string> = {}

export function resolveExampleSlug(slug: string) {
  return exampleSlugAliases[slug] ?? slug
}

export function getExampleSite(slug: string) {
  const resolvedSlug = resolveExampleSlug(slug)
  return exampleSites.find((site) => site.slug === resolvedSlug)
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
    "aurelia-interiors": {
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
    lussolab: {
      category: "Sito e-commerce premium",
      summary:
        "Un'esperienza e-commerce minimalista per accessori lifestyle e pelletteria, con fotografie locali, schede prodotto, carrello laterale e checkout.",
      heroStat: "Esperienza e-commerce luxury",
      highlights: ["Storefront fotografico", "Schede prodotto", "Carrello e checkout"],
      sections: [
        {
          label: "Storefront",
          title: "Prima impressione luxury minimale",
          description:
            "La pagina apre con una fotografia lifestyle full-screen, tipografia sobria e percorsi d'acquisto immediati.",
        },
        {
          label: "Prodotti",
          title: "Scoperta e dettaglio prodotto",
          description:
            "Le card e le pagine prodotto usano immagini locali, selettori colore, quantita`, specifiche e dettagli artigianali.",
        },
        {
          label: "Commerce",
          title: "Workflow carrello e checkout",
          description:
            "Navigazione, carrello laterale, aggiornamento quantita`, form checkout e conferma ordine restano funzionanti.",
        },
      ],
    },
    blog: {
      name: "Signal",
      category: "Sito blog editoriale",
      summary:
        "Una pubblicazione editoriale con articoli in evidenza, topic, ricerca, carousel, dettaglio articolo, newsletter e dark mode.",
      heroStat: "Esperienza di lettura editoriale",
      highlights: ["Ricerca articoli", "Filtri topic", "Dark mode"],
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
    "estetic-clinique": {
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
    velora: {
      name: "Velora Interiors",
      category: "Sito luxury interior design",
      summary:
        "Un sito raffinato per interior design con hero cinematografica, progetti selezionati, servizi, filosofia, processo, testimonianze e CTA contatto.",
      heroStat: "Portfolio luxury interiors",
      highlights: ["Hero fotografica", "Galleria progetti", "CTA inquiry"],
      sections: [
        {
          label: "Hero",
          title: "Prima impressione luxury",
          description:
            "La pagina apre con una fotografia full-screen, tipografia serif elegante e accenti oro calmi.",
        },
        {
          label: "Progetti",
          title: "Masterpiece selezionati",
          description:
            "Le card progetto usano interni reali, location e motion discreto per presentare il portfolio dello studio.",
        },
        {
          label: "Inquiry",
          title: "Percorso chiaro alla consulenza",
          description:
            "Servizi, processo, testimonianze e footer CTA guidano verso una richiesta premium.",
        },
      ],
    },
    "a-tavola": {
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
    "aurelia-interiors": {
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
    lussolab: {
      category: "Premium-E-Commerce-Website",
      summary:
        "Eine minimalistische E-Commerce-Erfahrung fuer Lederwaren und Lifestyle-Accessoires mit lokalen Produktbildern, Produktseiten, Warenkorb und Checkout.",
      heroStat: "Luxurioese E-Commerce-Erfahrung",
      highlights: ["Bildgefuehrter Storefront", "Produktdetailseiten", "Warenkorb und Checkout"],
      sections: [
        {
          label: "Storefront",
          title: "Minimaler Luxury-Eindruck",
          description:
            "Die Seite startet mit einem Full-Screen-Lifestyle-Bild, ruhiger Typografie und direkten Shopping-Pfaden.",
        },
        {
          label: "Produkte",
          title: "Produktentdeckung und Detail",
          description:
            "Produktkarten und Detailseiten nutzen lokale Bilder, Farbauswahl, Mengensteuerung, Spezifikationen und Craft-Details.",
        },
        {
          label: "Commerce",
          title: "Warenkorb- und Checkout-Flow",
          description:
            "Navigation, Warenkorb, Mengenupdates, Checkout-Formular und Bestellbestaetigung bleiben funktionsfaehig.",
        },
      ],
    },
    blog: {
      name: "Signal",
      category: "Editoriale Blog-Website",
      summary:
        "Eine raffinierte Editorial-Publikation mit Featured Articles, Topics, Suche, Carousel, Artikelseiten, Newsletter und Dark Mode.",
      heroStat: "Editoriale Leseerfahrung",
      highlights: ["Artikelsuche", "Topic-Filter", "Dark Mode"],
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
    "estetic-clinique": {
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
    velora: {
      name: "Velora Interiors",
      category: "Luxury-Interior-Design-Website",
      summary:
        "Eine raffinierte Interior-Design-Website mit filmischem Hero, Projektgalerie, Services, Philosophie, Prozess, Testimonials und Kontakt-CTA.",
      heroStat: "Luxury Interiors Portfolio",
      highlights: ["Bildhero", "Projektgalerie", "Inquiry CTA"],
      sections: [
        {
          label: "Hero",
          title: "Luxurioeser erster Eindruck",
          description:
            "Die Seite startet mit einem Full-Screen-Interior-Bild, eleganter Serifentypografie und ruhigen Goldakzenten.",
        },
        {
          label: "Projekte",
          title: "Ausgewaehlte Masterpieces",
          description:
            "Projektkarten nutzen echte Interiors, Locations und dezente Bewegung fuer ein hochwertiges Portfolio.",
        },
        {
          label: "Inquiry",
          title: "Klarer Weg zur Beratung",
          description:
            "Services, Prozess, Testimonials und Footer-CTA fuehren Besucher zur Premium-Anfrage.",
        },
      ],
    },
    "a-tavola": {
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
  const resolvedSlug = resolveExampleSlug(slug)
  return getExampleSites(locale).find((site) => site.slug === resolvedSlug)
}
