import {
  ArrowRightLeft,
  BarChart3,
  CalendarClock,
  FileText,
  Plug,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react"
import type { Locale } from "@/lib/i18n"

type AutomationData = {
  navLinks: Array<{ label: string; href: string }>
  useCases: Array<{ icon: typeof Plug; title: string; description: string }>
  workflowSteps: Array<{ number: string; title: string; description: string }>
  previewStats: Array<{ label: string; value: string }>
  automationCards: Array<{ title: string; body: string }>
  stackBlocks: Array<{ title: string; text: string }>
  faqItems: Array<{ q: string; a: string }>
}

const english: AutomationData = {
  navLinks: [
    { label: "Use Cases", href: "#use-cases" },
    { label: "Workflow", href: "#workflow" },
    { label: "Flow", href: "#preview" },
    { label: "Stack", href: "#stack" },
    { label: "FAQ", href: "#faq" },
  ],
  useCases: [
    {
      icon: Plug,
      title: "Lead capture",
      description:
        "Route new leads from forms into the right CRM, tag them, and notify the team instantly.",
    },
    {
      icon: CalendarClock,
      title: "Follow-up automation",
      description:
        "Trigger reminders after calls, meetings, or no-shows so opportunities do not get forgotten.",
    },
    {
      icon: FileText,
      title: "Invoice and admin tasks",
      description:
        "Automate repetitive admin work like payment reminders, document requests, and status updates.",
    },
    {
      icon: ArrowRightLeft,
      title: "Cross-tool sync",
      description:
        "Keep data moving between email, spreadsheets, CRMs, support tools, and internal dashboards.",
    },
    {
      icon: ShieldCheck,
      title: "Approval steps",
      description:
        "Use human approval for sensitive automations so the process stays safe and under control.",
    },
    {
      icon: RefreshCcw,
      title: "Recurring workflows",
      description:
        "Run weekly reports, routine checks, and scheduled exports without manual setup every time.",
    },
  ],
  workflowSteps: [
    { number: "01", title: "Trigger", description: "A form submission, payment event, new row, or scheduled time starts the workflow." },
    { number: "02", title: "Validate", description: "The system checks the payload, verifies required fields, and blocks incomplete actions." },
    { number: "03", title: "Route", description: "Data is passed to the correct app, team, or approval queue based on rules and conditions." },
    { number: "04", title: "Log", description: "Every run is recorded so the team can audit what happened and improve the workflow later." },
  ],
  previewStats: [
    { label: "Hours saved", value: "32/wk" },
    { label: "Manual steps removed", value: "148" },
    { label: "Error rate", value: "-91%" },
  ],
  automationCards: [
    { title: "Lead flow", body: "New inquiry -> enrich lead -> create CRM record -> notify sales in Slack." },
    { title: "Invoice flow", body: "Unpaid invoice -> send reminder -> log status -> schedule a follow-up if ignored." },
    { title: "Reporting flow", body: "Weekly trigger -> pull metrics -> generate summary -> email the team automatically." },
  ],
  stackBlocks: [
    { title: "Frontend", text: "Next.js dashboard with flow cards, activity history, and a simple builder UI." },
    { title: "Backend", text: "Automation engine, validation layer, execution logs, and retry handling." },
    { title: "Integrations", text: "Gmail, Slack, Notion, CRMs, spreadsheets, payment platforms, and webhooks." },
    { title: "Safety", text: "Approval gates, audit logs, and permission controls for sensitive automations." },
  ],
  faqItems: [
    { q: "Is this meant for small businesses?", a: "Yes. The concept fits small teams that need practical automation without building internal tooling from scratch." },
    { q: "Can the workflows be customized?", a: "Yes. The UI can be adapted to lead gen, operations, finance, support, or reporting workflows." },
    { q: "Does it need coding?", a: "Not necessarily. The idea is to present simple automation logic in a way that non-technical clients can understand." },
    { q: "Can approval steps be added?", a: "Yes. Sensitive tasks can pause for human review before the automation continues." },
  ],
}

const localized: Record<Locale, Partial<AutomationData>> = {
  en: {},
  it: {
    navLinks: [
      { label: "Casi d'uso", href: "#use-cases" },
      { label: "Flusso", href: "#workflow" },
      { label: "Flusso", href: "#preview" },
      { label: "Stack", href: "#stack" },
      { label: "FAQ", href: "#faq" },
    ],
    useCases: [
      { icon: Plug, title: "Acquisizione lead", description: "Instrada i nuovi lead dai form nel CRM giusto, aggiungi tag e avvisa il team subito." },
      { icon: CalendarClock, title: "Follow-up automatici", description: "Attiva promemoria dopo call, meeting o no-show cosi` le opportunita` non vengono dimenticate." },
      { icon: FileText, title: "Fatture e admin", description: "Automatizza lavori ripetitivi come promemoria pagamenti, richieste documenti e aggiornamenti di stato." },
      { icon: ArrowRightLeft, title: "Sincronizzazione tra tool", description: "Mantieni i dati allineati tra email, fogli, CRM, support tool e dashboard interne." },
      { icon: ShieldCheck, title: "Step di approvazione", description: "Usa l'approvazione umana per automazioni sensibili cosi` il processo resta sicuro e controllato." },
      { icon: RefreshCcw, title: "Workflow ricorrenti", description: "Esegui report settimanali, controlli di routine ed export programmati senza configurazione manuale ogni volta." },
    ],
    workflowSteps: [
      { number: "01", title: "Trigger", description: "Una submission di form, un pagamento, una nuova riga o un orario pianificato avvia il workflow." },
      { number: "02", title: "Validazione", description: "Il sistema controlla il payload, verifica i campi obbligatori e blocca le azioni incomplete." },
      { number: "03", title: "Instradamento", description: "I dati vengono inviati all'app, al team o alla coda di approvazione corretta in base a regole e condizioni." },
      { number: "04", title: "Log", description: "Ogni esecuzione viene registrata cosi` il team puo` verificare cosa e` successo e migliorare il workflow." },
    ],
    previewStats: [
      { label: "Ore risparmiate", value: "32/settimana" },
      { label: "Step manuali rimossi", value: "148" },
      { label: "Tasso errore", value: "-91%" },
    ],
    automationCards: [
      { title: "Flusso lead", body: "Nuova richiesta -> arricchisci lead -> crea record CRM -> notifica il sales su Slack." },
      { title: "Flusso fatture", body: "Fattura non pagata -> invia promemoria -> registra stato -> programma un follow-up se ignorata." },
      { title: "Flusso report", body: "Trigger settimanale -> prendi metriche -> genera sintesi -> invia email al team automaticamente." },
    ],
    stackBlocks: [
      { title: "Frontend", text: "Dashboard Next.js con flow card, storico attivita` e una UI semplice per costruire flussi." },
      { title: "Backend", text: "Motore di automazione, layer di validazione, log di esecuzione e gestione retry." },
      { title: "Integrazioni", text: "Gmail, Slack, Notion, CRM, fogli di calcolo, pagamenti e webhook." },
      { title: "Sicurezza", text: "Gate di approvazione, audit log e controlli permessi per automazioni sensibili." },
    ],
    faqItems: [
      { q: "E` pensato per piccole imprese?", a: "Si`, il concept funziona per team piccoli che hanno bisogno di automazioni pratiche senza costruire tool interni da zero." },
      { q: "I workflow sono personalizzabili?", a: "Si`, l'interfaccia puo` essere adattata a lead gen, operations, finance, support o reportistica." },
      { q: "Serve programmare?", a: "Non necessariamente. L'idea e` presentare una logica di automazione semplice in modo comprensibile per clienti non tecnici." },
      { q: "Si possono aggiungere approvazioni?", a: "Si`, i task sensibili possono fermarsi per una revisione umana prima di continuare." },
    ],
  },
  de: {
    navLinks: [
      { label: "Anwendungsfaelle", href: "#use-cases" },
      { label: "Ablauf", href: "#workflow" },
      { label: "Flow", href: "#preview" },
      { label: "Stack", href: "#stack" },
      { label: "FAQ", href: "#faq" },
    ],
    useCases: [
      { icon: Plug, title: "Lead-Erfassung", description: "Neue Leads aus Formularen ins richtige CRM leiten, taggen und das Team sofort benachrichtigen." },
      { icon: CalendarClock, title: "Follow-up-Automation", description: "Erinnerungen nach Calls, Meetings oder No-shows ausloesen, damit Chancen nicht vergessen werden." },
      { icon: FileText, title: "Rechnungen und Admin", description: "Wiederkehrende Admin-Arbeit wie Zahlungsmahnungen, Dokumentenanforderungen und Statusupdates automatisieren." },
      { icon: ArrowRightLeft, title: "Tool-Synchronisierung", description: "Daten zwischen E-Mail, Tabellen, CRMs, Support-Tools und internen Dashboards synchron halten." },
      { icon: ShieldCheck, title: "Freigabeschritte", description: "Menschliche Freigaben fuer sensible Automationen nutzen, damit der Prozess sicher bleibt." },
      { icon: RefreshCcw, title: "Wiederkehrende Workflows", description: "Woechentliche Reports, Routinechecks und geplante Exporte ohne jedes Mal manuelle Einrichtung ausfuehren." },
    ],
    workflowSteps: [
      { number: "01", title: "Trigger", description: "Ein Formular, eine Zahlung, eine neue Zeile oder ein geplanter Zeitpunkt startet den Workflow." },
      { number: "02", title: "Pruefen", description: "Das System validiert den Payload, kontrolliert Pflichtfelder und blockiert unvollstaendige Aktionen." },
      { number: "03", title: "Routen", description: "Daten werden anhand von Regeln an die richtige App, das richtige Team oder die Freigabewarteschlange gesendet." },
      { number: "04", title: "Protokollieren", description: "Jeder Lauf wird gespeichert, damit das Team nachvollziehen kann, was passiert ist und den Workflow verbessern kann." },
    ],
    previewStats: [
      { label: "Gesparte Stunden", value: "32/Woche" },
      { label: "Manuelle Schritte entfernt", value: "148" },
      { label: "Fehlerrate", value: "-91%" },
    ],
    automationCards: [
      { title: "Lead-Flow", body: "Neue Anfrage -> Lead anreichern -> CRM-Eintrag erstellen -> Sales in Slack benachrichtigen." },
      { title: "Rechnungs-Flow", body: "Unbezahlte Rechnung -> Erinnerung senden -> Status protokollieren -> Follow-up planen, wenn ignoriert." },
      { title: "Report-Flow", body: "Wochen-Trigger -> Metriken ziehen -> Zusammenfassung erzeugen -> Team automatisch per E-Mail informieren." },
    ],
    stackBlocks: [
      { title: "Frontend", text: "Next.js-Dashboard mit Flow-Karten, Aktivitaetshistorie und einfacher Builder-UI." },
      { title: "Backend", text: "Automationsengine, Validierung, Ausfuehrungslogs und Retry-Handling." },
      { title: "Integrationen", text: "Gmail, Slack, Notion, CRMs, Tabellen, Zahlungsplattformen und Webhooks." },
      { title: "Sicherheit", text: "Freigabegates, Audit-Logs und Berechtigungssteuerung fuer sensible Automationen." },
    ],
    faqItems: [
      { q: "Ist das fuer kleine Unternehmen gedacht?", a: "Ja. Das Konzept passt zu kleinen Teams, die praxisnahe Automatisierung brauchen, ohne eigene Tools von Grund auf zu bauen." },
      { q: "Koennen die Workflows angepasst werden?", a: "Ja. Die UI laesst sich auf Leadgen, Operations, Finance, Support oder Reporting zuschneiden." },
      { q: "Braucht man Code?", a: "Nicht unbedingt. Die Idee ist, einfache Automationslogik so darzustellen, dass auch nicht-technische Kunden sie verstehen." },
      { q: "Koennen Freigaben eingebaut werden?", a: "Ja. Sensible Aufgaben koennen fuer eine menschliche Pruefung pausieren, bevor die Automatisierung weiterlaeuft." },
    ],
  },
}

export function getAutomationData(locale: Locale): AutomationData {
  return {
    ...english,
    ...(localized[locale] ?? {}),
  }
}
