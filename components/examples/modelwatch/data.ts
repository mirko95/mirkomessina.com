import type { Locale } from "@/lib/i18n"

type BusyLandingData = {
  navLinks: Array<{ label: string; href: string }>
  hero: {
    eyebrow: string
    title: string
    description: string
    primary: string
    secondary: string
    badges: string[]
  }
  stats: Array<{ label: string; value: string; note: string }>
  featureCards: Array<{ title: string; description: string }>
  statusCards: Array<{ title: string; description: string }>
  controlCards: Array<{ title: string; description: string }>
  faqItems: Array<{ q: string; a: string }>
  footerNote: string
}

const english: BusyLandingData = {
  navLinks: [
    { label: "Home", href: "#top" },
    { label: "Product", href: "#product" },
    { label: "Controls", href: "#controls" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    eyebrow: "Productivity multi-tool",
    title: "Busy keeps focus, timing, and task status in one calm workspace.",
    description:
      "A bright editorial landing page with a strong product visual, practical feature blocks, and enough breathing room to feel premium instead of busy.",
    primary: "Book a call",
    secondary: "Explore the page",
    badges: ["Live status", "Manual controls", "Monochrome UI", "Fast scanning"],
  },
  stats: [
    { label: "Focus", value: "One view", note: "Tasks and status stay together" },
    { label: "Speed", value: "Less switching", note: "The page makes the workflow obvious" },
    { label: "Tone", value: "Calm", note: "Quiet, precise, and easy to trust" },
  ],
  featureCards: [
    {
      title: "Busy status",
      description: "A live system view that shows what is active, what is waiting, and what needs attention next.",
    },
    {
      title: "Quick app actions",
      description: "The product feels like a real tool, with direct actions that help users move without extra clicks.",
    },
    {
      title: "Manual controls",
      description: "Focus modes, timers, and presets are exposed as simple controls rather than hidden in settings.",
    },
  ],
  statusCards: [
    {
      title: "Live Busy status",
      description: "Current task, focus state, and next step stay visible on one screen so the page feels operational.",
    },
    {
      title: "Shared workspace",
      description: "A clear surface for teams to see what is being worked on without a complex dashboard hierarchy.",
    },
    {
      title: "Today overview",
      description: "A compact summary of the day that helps users understand what matters before they open the app.",
    },
  ],
  controlCards: [
    {
      title: "Start / Pause",
      description: "A single control that makes the timer feel tactile and obvious.",
    },
    {
      title: "Focus timer",
      description: "A visible countdown that supports deep work without feeling gamified.",
    },
    {
      title: "Shortcuts",
      description: "Keyboard-friendly actions for moving quickly through routine tasks.",
    },
    {
      title: "Notifications",
      description: "Only the important reminders, so the experience stays calm and readable.",
    },
  ],
  faqItems: [
    { q: "Is this a real product concept or just a visual mockup?", a: "It reads like a product concept first, but the structure is built so it could be adapted into a real app landing page." },
    { q: "Can the white and orange palette be changed?", a: "Yes. The layout is neutral enough to re-skin while keeping the same editorial rhythm." },
    { q: "Does it still work on small screens?", a: "Yes. The sections collapse cleanly and the hero keeps the core message visible." },
  ],
  footerNote: "Busy is a product page designed to feel tactile, modern, and easy to pitch.",
}

const localized: Record<Locale, Partial<BusyLandingData>> = {
  en: {},
  it: {
    hero: {
      eyebrow: "Multi-tool per produttivita`",
      title: "Busy tiene insieme focus, tempi e stato dei task in un unico spazio calmo.",
      description:
        "Una landing page editoriale chiara, con un visual prodotto forte, blocchi pratici e abbastanza respiro da sembrare premium invece che affollata.",
      primary: "Prenota una call",
      secondary: "Esplora la pagina",
      badges: ["Stato live", "Controlli manuali", "UI monocromatica", "Lettura rapida"],
    },
    stats: [
      { label: "Focus", value: "Una vista", note: "Task e stato restano insieme" },
      { label: "Velocita`", value: "Meno switch", note: "Il workflow si capisce subito" },
      { label: "Tono", value: "Calmo", note: "Sobrio, preciso, affidabile" },
    ],
    featureCards: [
      {
        title: "Stato Busy",
        description: "Una vista live che mostra cosa e` attivo, cosa aspetta e cosa richiede attenzione per il passo dopo.",
      },
      {
        title: "Azioni rapide",
        description: "Il prodotto sembra uno strumento vero, con azioni dirette che fanno avanzare il lavoro senza passaggi inutili.",
      },
      {
        title: "Controlli manuali",
        description: "Focus mode, timer e preset sono esposti come controlli semplici, non nascosti dietro menu complicati.",
      },
    ],
    statusCards: [
      {
        title: "Stato Busy live",
        description: "Task corrente, focus e prossimo passo restano visibili in un solo schermo, così la pagina sembra operativa.",
      },
      {
        title: "Spazio condiviso",
        description: "Una superficie chiara dove il team vede cosa si sta facendo senza una gerarchia da dashboard complessa.",
      },
      {
        title: "Panoramica di oggi",
        description: "Un riepilogo compatto della giornata che aiuta a capire cosa conta prima ancora di entrare nell'app.",
      },
    ],
    controlCards: [
      { title: "Start / Pausa", description: "Un comando unico che rende il timer tangibile e immediato." },
      { title: "Timer focus", description: "Un conto alla rovescia visibile che supporta il lavoro profondo." },
      { title: "Scorciatoie", description: "Azioni da tastiera per muoversi velocemente nei task ricorrenti." },
      { title: "Notifiche", description: "Solo i promemoria importanti, così l'esperienza resta calma." },
    ],
    faqItems: [
      { q: "E` un concept reale o solo un mockup visivo?", a: "Funziona prima come concept di prodotto, ma la struttura e` abbastanza solida da diventare una landing page reale." },
      { q: "Si puo` cambiare la palette bianca e arancio?", a: "Sì, il layout e` neutro abbastanza da poter essere ribrandizzato senza perdere il ritmo editoriale." },
      { q: "Funziona bene su schermi piccoli?", a: "Sì, le sezioni si comprimono bene e il messaggio del hero resta leggibile." },
    ],
    footerNote: "Busy e` una product page pensata per sembrare tattile, moderna e facile da presentare.",
  },
  de: {
    hero: {
      eyebrow: "Produktivitaets-Multitool",
      title: "Busy bringt Fokus, Timing und Aufgabenstatus in einen ruhigen Workspace.",
      description:
        "Eine helle, editoriale Landingpage mit starkem Produkt-Visual, praktischen Feature-Bloecken und genug Luft, damit sie hochwertig statt voll wirkt.",
      primary: "Call buchen",
      secondary: "Seite ansehen",
      badges: ["Live-Status", "Manuelle Controls", "Monochrome UI", "Schnell erfassbar"],
    },
    stats: [
      { label: "Fokus", value: "Eine Ansicht", note: "Aufgaben und Status bleiben zusammen" },
      { label: "Tempo", value: "Weniger Wechsel", note: "Der Workflow wird sofort klar" },
      { label: "Ton", value: "Ruhig", note: "Zurueckhaltend, praezise, vertrauenswuerdig" },
    ],
    featureCards: [
      {
        title: "Busy-Status",
        description: "Eine Live-Ansicht, die zeigt, was aktiv ist, was wartet und was als naechstes Aufmerksamkeit braucht.",
      },
      {
        title: "Schnelle Aktionen",
        description: "Das Produkt wirkt wie ein echtes Tool mit direkten Aktionen, damit Nutzer ohne Umwege weitermachen koennen.",
      },
      {
        title: "Manuelle Controls",
        description: "Fokus-Modi, Timer und Presets sind als einfache Steuerung sichtbar und nicht tief versteckt.",
      },
    ],
    statusCards: [
      {
        title: "Live Busy-Status",
        description: "Aktuelle Aufgabe, Fokus und naechster Schritt bleiben in einer Ansicht sichtbar, damit die Seite operativ wirkt.",
      },
      {
        title: "Gemeinsamer Workspace",
        description: "Eine klare Flaeche, auf der Teams sehen, woran gearbeitet wird, ohne komplexe Dashboard-Hierarchien.",
      },
      {
        title: "Tagesuebersicht",
        description: "Eine kompakte Zusammenfassung des Tages, die vor dem Oeffnen der App Orientierung gibt.",
      },
    ],
    controlCards: [
      { title: "Start / Pause", description: "Eine einzige Steuerung, die den Timer taktil und klar macht." },
      { title: "Fokus-Timer", description: "Ein sichtbarer Countdown fuer Deep Work, ohne verspielt zu wirken." },
      { title: "Shortcuts", description: "Tastaturaktionen fuer schnelle Routinearbeit." },
      { title: "Benachrichtigungen", description: "Nur die wichtigen Hinweise, damit die Erfahrung ruhig bleibt." },
    ],
    faqItems: [
      { q: "Ist das ein echtes Produktkonzept oder nur ein visuelles Mockup?", a: "Es liest sich zuerst wie ein Produktkonzept, kann aber leicht zu einer echten Landingpage erweitert werden." },
      { q: "Kann die Weiss-Orange-Palette angepasst werden?", a: "Ja, das Layout ist neutral genug, um neu gebrandet zu werden, ohne den editorialen Rhythmus zu verlieren." },
      { q: "Funktioniert es auf kleinen Screens?", a: "Ja, die Sektionen brechen sauber um und der Hero bleibt gut lesbar." },
    ],
    footerNote: "Busy ist eine Product Page, die taktil, modern und gut praesentierbar wirkt.",
  },
}

export function getModelWatchData(locale: Locale): BusyLandingData {
  return {
    ...english,
    ...(localized[locale] ?? {}),
  }
}
