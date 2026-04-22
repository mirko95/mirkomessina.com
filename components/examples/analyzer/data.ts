import { BarChart3, Bot, CheckCircle2, Gauge, Globe2, Lock, ScanSearch, ShieldCheck, Sparkles, TimerReset, TrendingUp, WandSparkles } from "lucide-react"
import type { Locale } from "@/lib/i18n"

type AnalyzerData = {
  navLinks: Array<{ label: string; href: string }>
  featureCards: Array<{ icon: typeof ScanSearch; title: string; description: string }>
  workflowSteps: Array<{ number: string; title: string; description: string }>
  scoreCards: Array<{ label: string; value: number; note: string; icon: typeof Sparkles }>
  recommendationGroups: Array<{ title: string; icon: typeof TrendingUp; items: string[] }>
  architectureBlocks: Array<{ title: string; text: string }>
}

const english: AnalyzerData = {
  navLinks: [
    { label: "Features", href: "#features" },
    { label: "Workflow", href: "#workflow" },
    { label: "Results", href: "#results" },
    { label: "Architecture", href: "#architecture" },
    { label: "FAQ", href: "#faq" },
  ],
  featureCards: [
    { icon: ScanSearch, title: "URL analysis", description: "Paste a live website URL and extract the page title, meta description, H1 and H2 structure, visible copy, and a quick content snapshot." },
    { icon: Bot, title: "OpenAI recommendations", description: "Send the extracted page data to OpenAI and turn raw findings into client-ready UX notes, SEO fixes, and content improvements." },
    { icon: Gauge, title: "Scores at a glance", description: "Return clear UX, SEO, and performance scores so an agency or founder can see what needs attention first." },
    { icon: TimerReset, title: "Async processing", description: "Keep the experience responsive with loading states, timeout handling, retries, and graceful errors for blocked or slow sites." },
    { icon: ShieldCheck, title: "Production-minded", description: "The structure reads like a real product: frontend UI, backend analysis service, AI layer, and optional report storage." },
    { icon: WandSparkles, title: "Exportable reports", description: "Reports can be copied, exported, and reused as a sales deliverable, onboarding artifact, or pre-launch audit." },
  ],
  workflowSteps: [
    { number: "01", title: "Paste URL", description: "The user pastes a public URL, such as a homepage, pricing page, or landing page, into a single input." },
    { number: "02", title: "Fetch & parse", description: "The backend fetches the HTML, extracts metadata, headings, and basic performance signals, then normalizes the result." },
    { number: "03", title: "AI review", description: "OpenAI turns the extracted page data into a readable report with UX feedback, SEO issues, and practical fixes." },
    { number: "04", title: "Display report", description: "The dashboard presents scores, recommendations, and copy/export actions in a clean client-ready layout." },
  ],
  scoreCards: [
    { label: "UX", value: 82, note: "Good structure overall, but the primary CTA should be more visible and repeated once lower on the page.", icon: Sparkles },
    { label: "SEO", value: 74, note: "Meta description is present, but heading hierarchy is uneven and the H2s could be more descriptive.", icon: Globe2 },
    { label: "Performance", value: 67, note: "The page is carrying too many large images and a few render-blocking assets that should be deferred.", icon: BarChart3 },
  ],
  recommendationGroups: [
    { title: "SEO suggestions", icon: TrendingUp, items: ["Rewrite the meta description so it mentions the service, location, or product benefit in the first sentence.", "Keep one clear H1 and turn section headings into descriptive H2s, not generic labels.", "Add contextual internal links to pricing, contact, or case study pages to strengthen crawl paths."] },
    { title: "UX feedback", icon: CheckCircle2, items: ["Make the primary action more visible above the fold and repeat it after the report summary.", "Reduce distraction in the hero by keeping one main message and one supporting line.", "Improve mobile spacing around dense report cards so the results stay easy to scan."] },
    { title: "Performance tips", icon: Lock, items: ["Compress large screenshots and lazy-load anything below the first screenful.", "Defer non-critical scripts, trim unused client code, and keep the report render light.", "Cache repeated audits during the same session so users can compare changes quickly."] },
  ],
  architectureBlocks: [
    { title: "Frontend", text: "Next.js dashboard, URL form, loading states, result cards, comparison controls, and export actions." },
    { title: "Backend", text: "FastAPI /analyze endpoint, HTML fetcher, parser, timeout handling, and response shaping for the dashboard." },
    { title: "AI layer", text: "OpenAI prompt that converts parsed page data into a structured report with concrete recommendations." },
    { title: "Storage", text: "Optional PostgreSQL table for saved reports, report history, and before/after comparisons." },
  ],
}

const localized: Record<Locale, Partial<AnalyzerData>> = {
  en: {},
  it: {
    navLinks: [
      { label: "Funzionalita", href: "#features" },
      { label: "Flusso", href: "#workflow" },
      { label: "Risultati", href: "#results" },
      { label: "Architettura", href: "#architecture" },
      { label: "FAQ", href: "#faq" },
    ],
    featureCards: [
      { icon: ScanSearch, title: "Analisi URL", description: "Incolla un URL live e estrai titolo pagina, meta description, struttura H1/H2, testo visibile e una rapida sintesi dei contenuti." },
      { icon: Bot, title: "Suggerimenti OpenAI", description: "Invia i dati estratti a OpenAI e trasforma i risultati grezzi in note UX, correzioni SEO e miglioramenti di contenuto pronti per il cliente." },
      { icon: Gauge, title: "Score a colpo d'occhio", description: "Restituisci punteggi chiari per UX, SEO e performance così un'agenzia o un founder vede subito cosa va sistemato." },
      { icon: TimerReset, title: "Elaborazione asincrona", description: "Mantieni il prodotto reattivo con loading state, timeout, retry ed errori gestiti con eleganza per siti bloccati o lenti." },
      { icon: ShieldCheck, title: "Mentalita` production", description: "La struttura sembra un prodotto reale: UI frontend, servizio backend, layer AI e storage opzionale dei report." },
      { icon: WandSparkles, title: "Report esportabili", description: "I report possono essere copiati, esportati e riutilizzati come deliverable commerciale o audit pre-lancio." },
    ],
    workflowSteps: [
      { number: "01", title: "Incolla URL", description: "L'utente incolla un URL pubblico, come home page, pricing o landing page, in un unico input." },
      { number: "02", title: "Recupera e analizza", description: "Il backend recupera l'HTML, estrae metadati, heading e segnali base di performance, poi normalizza il risultato." },
      { number: "03", title: "Review AI", description: "OpenAI trasforma i dati estratti in un report leggibile con feedback UX, problemi SEO e fix pratici." },
      { number: "04", title: "Mostra report", description: "La dashboard presenta score, raccomandazioni e azioni di copia/esportazione in un layout pulito per il cliente." },
    ],
    scoreCards: [
      { label: "UX", value: 82, note: "Struttura generale buona, ma la CTA principale dovrebbe essere piu` visibile e ripetuta piu` in basso.", icon: Sparkles },
      { label: "SEO", value: 74, note: "La meta description c'e`, ma la gerarchia degli heading e` irregolare e gli H2 potrebbero essere piu` descrittivi.", icon: Globe2 },
      { label: "Performance", value: 67, note: "La pagina ha troppe immagini pesanti e alcuni asset bloccano il rendering e andrebbero rimandati.", icon: BarChart3 },
    ],
    recommendationGroups: [
      { title: "Suggerimenti SEO", icon: TrendingUp, items: ["Riscrivi la meta description citando il servizio, la localita` o il beneficio del prodotto nella prima frase.", "Mantieni un solo H1 chiaro e trasforma i titoli di sezione in H2 descrittivi.", "Aggiungi link interni contestuali a pricing, contatti o case study per rafforzare i percorsi di crawl."] },
      { title: "Feedback UX", icon: CheckCircle2, items: ["Rendi l'azione principale piu` visibile above the fold e ripetila dopo il riepilogo.", "Riduci la distrazione nell'hero mantenendo un solo messaggio principale e una sola riga di supporto.", "Migliora gli spazi su mobile attorno alle card piu` dense così i risultati restano facili da leggere."] },
      { title: "Suggerimenti performance", icon: Lock, items: ["Comprimi gli screenshot grandi e carica in lazy loading tutto cio` che e` sotto la prima schermata.", "Rimanda script non critici, riduci il codice client inutilizzato e mantieni leggero il rendering del report.", "Memorizza gli audit ripetuti nella stessa sessione così gli utenti possono confrontare i cambiamenti."] },
    ],
    architectureBlocks: [
      { title: "Frontend", text: "Dashboard Next.js, form URL, loading state, card risultati, controlli confronto e azioni di export." },
      { title: "Backend", text: "Endpoint FastAPI /analyze, fetcher HTML, parser, gestione timeout e shaping della risposta per la dashboard." },
      { title: "AI layer", text: "Prompt OpenAI che converte i dati della pagina in un report strutturato con raccomandazioni concrete." },
      { title: "Storage", text: "Tabella PostgreSQL opzionale per report salvati, storico e confronti prima/dopo." },
    ],
  },
  de: {
    navLinks: [
      { label: "Funktionen", href: "#features" },
      { label: "Ablauf", href: "#workflow" },
      { label: "Ergebnisse", href: "#results" },
      { label: "Architektur", href: "#architecture" },
      { label: "FAQ", href: "#faq" },
    ],
    featureCards: [
      { icon: ScanSearch, title: "URL-Analyse", description: "Fuege eine Live-URL ein und extrahiere Seitentitel, Meta-Description, H1/H2-Struktur, sichtbaren Text und eine kurze Inhaltszusammenfassung." },
      { icon: Bot, title: "OpenAI-Empfehlungen", description: "Sende die extrahierten Daten an OpenAI und verwandle Rohbefunde in kundenreife UX-Notizen, SEO-Fixes und Content-Verbesserungen." },
      { icon: Gauge, title: "Scores auf einen Blick", description: "Gib klare UX-, SEO- und Performance-Scores aus, damit Agenturen oder Founder sofort sehen, wo Handlungsbedarf besteht." },
      { icon: TimerReset, title: "Asynchrone Verarbeitung", description: "Halte die UX reaktionsschnell mit Loading States, Timeout-Handling, Retries und sauberen Fehlern fuer blockierte oder langsame Seiten." },
      { icon: ShieldCheck, title: "Production-orientiert", description: "Die Struktur wirkt wie ein echtes Produkt: Frontend, Backend-Analyse, AI-Layer und optionales Report-Storage." },
      { icon: WandSparkles, title: "Exportierbare Reports", description: "Reports koennen kopiert, exportiert und als Sales-Deliverable, Onboarding-Artefakt oder Prelaunch-Audit genutzt werden." },
    ],
    workflowSteps: [
      { number: "01", title: "URL einfuegen", description: "Der Nutzer fuegt eine oeffentliche URL wie Home, Pricing oder Landingpage in ein einziges Feld ein." },
      { number: "02", title: "Abrufen und parsen", description: "Das Backend holt das HTML, extrahiert Metadaten, Heading und einfache Performance-Signale und normalisiert das Ergebnis." },
      { number: "03", title: "KI-Review", description: "OpenAI wandelt die extrahierten Seitendaten in einen lesbaren Report mit UX-Feedback, SEO-Problemen und konkreten Fixes um." },
      { number: "04", title: "Report anzeigen", description: "Die Dashboard-Ansicht praesentiert Scores, Empfehlungen und Copy-/Export-Aktionen in einem sauberen Layout." },
    ],
    scoreCards: [
      { label: "UX", value: 82, note: "Die Struktur ist insgesamt gut, aber die primäre CTA sollte sichtbarer sein und weiter unten wiederholt werden.", icon: Sparkles },
      { label: "SEO", value: 74, note: "Eine Meta-Description ist vorhanden, aber die Heading-Hierarchie ist uneinheitlich und die H2s koennten beschreibender sein.", icon: Globe2 },
      { label: "Performance", value: 67, note: "Die Seite laedt zu viele grosse Bilder und einige render-blockierende Assets sollten verschoben werden.", icon: BarChart3 },
    ],
    recommendationGroups: [
      { title: "SEO-Vorschlaege", icon: TrendingUp, items: ["Schreibe die Meta-Description so um, dass sie Service, Ort oder Produktvorteil im ersten Satz nennt.", "Behalte genau ein klares H1 und verwandle Abschnittsueberschriften in beschreibende H2s.", "Fuege kontextuelle interne Links zu Pricing, Kontakt oder Case-Study-Seiten hinzu, um Crawl-Pfade zu staerken."] },
      { title: "UX-Feedback", icon: CheckCircle2, items: ["Mache die primäre Aktion above the fold sichtbarer und wiederhole sie nach der Report-Zusammenfassung.", "Reduziere Ablenkung im Hero, indem du eine Hauptbotschaft und eine Unterzeile beibehältst.", "Verbessere das mobile Spacing rund um dichte Report-Karten, damit die Ergebnisse leicht scanbar bleiben."] },
      { title: "Performance-Tipps", icon: Lock, items: ["Komprimiere grosse Screenshots und lade alles unterhalb der ersten Bildschirmhoehe lazy.", "Defer nicht-kritische Skripte, reduziere ungenutzten Client-Code und halte das Report-Rendering leicht.", "Cache wiederholte Audits innerhalb derselben Session, damit Nutzer Aenderungen vergleichen koennen."] },
    ],
    architectureBlocks: [
      { title: "Frontend", text: "Next.js-Dashboard, URL-Formular, Loading States, Result-Karten, Vergleichssteuerung und Export-Aktionen." },
      { title: "Backend", text: "FastAPI /analyze Endpoint, HTML-Fetcher, Parser, Timeout-Handling und Response-Shaping fuer die Dashboard-Ansicht." },
      { title: "AI-Layer", text: "OpenAI-Prompt, der geparste Seitendaten in einen strukturierten Report mit konkreten Empfehlungen verwandelt." },
      { title: "Storage", text: "Optionales PostgreSQL-Table fuer gespeicherte Reports, Verlauf und Vorher/Nachher-Vergleiche." },
    ],
  },
}

export function getAnalyzerData(locale: Locale): AnalyzerData {
  return {
    ...english,
    ...(localized[locale] ?? {}),
  }
}
