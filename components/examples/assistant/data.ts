import {
  BrainCircuit,
  CheckCircle2,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Users,
  WandSparkles,
  BadgeCheck,
  BookOpenText,
  BellRing,
  Zap,
} from "lucide-react"
import type { Locale } from "@/lib/i18n"

type AssistantData = {
  navLinks: Array<{ label: string; href: string }>
  capabilityCards: Array<{
    icon: typeof MessagesSquare
    title: string
    description: string
  }>
  workflowSteps: Array<{ number: string; title: string; description: string }>
  responseCards: Array<{ title: string; body: string }>
  metrics: Array<{ label: string; value: string }>
  securityPoints: string[]
  faqItems: Array<{ q: string; a: string }>
}

const english: AssistantData = {
  navLinks: [
    { label: "Overview", href: "#overview" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Workflow", href: "#workflow" },
    { label: "Security", href: "#security" },
    { label: "FAQ", href: "#faq" },
  ],
  capabilityCards: [
    {
      icon: MessagesSquare,
      title: "Suggested replies",
      description:
        "Drafts polished responses for support tickets, client emails, and follow-up questions in the tone you choose.",
    },
    {
      icon: BookOpenText,
      title: "Knowledge grounding",
      description:
        "Pulls answers from product docs, policy notes, or internal knowledge so replies stay relevant and consistent.",
    },
    {
      icon: Sparkles,
      title: "Tone controls",
      description:
        "Switch between concise, warm, premium, or technical styles depending on the customer and the situation.",
    },
    {
      icon: BellRing,
      title: "Escalation flags",
      description:
        "Highlights sensitive requests, refund risk, or legal language so a human can step in before anything is sent.",
    },
    {
      icon: ShieldCheck,
      title: "Guardrails",
      description:
        "Keeps the assistant on-brand with reply rules, blocked topics, and approved sources for higher-trust outputs.",
    },
    {
      icon: WandSparkles,
      title: "Batch handling",
      description:
        "Helps teams work through queues faster by generating multiple response options and summaries for review.",
    },
  ],
  workflowSteps: [
    {
      number: "01",
      title: "Connect sources",
      description:
        "Load product docs, FAQ pages, and support notes so the assistant has the right context before it writes anything.",
    },
    {
      number: "02",
      title: "Pick the tone",
      description:
        "Choose whether the reply should feel calm, premium, technical, or concise based on the customer and brand.",
    },
    {
      number: "03",
      title: "Generate draft",
      description:
        "The model drafts a response, highlights confidence, and surfaces any details that need human review first.",
    },
    {
      number: "04",
      title: "Approve and send",
      description:
        "A teammate checks the draft, edits if needed, and sends it with a clear record of what was suggested.",
    },
  ],
  responseCards: [
    {
      title: "Draft response",
      body:
        "Thanks for reaching out. I checked your billing history and the charge reflects your current plan. I can walk you through the invoice details or help you switch to a lower tier if needed.",
    },
    {
      title: "Grounded sources",
      body:
        "Billing policy, pricing page, invoice help article, and support macro #14 were used to assemble the reply.",
    },
    {
      title: "Risk level",
      body: "Medium confidence. Refund language detected, so human review is recommended before sending.",
    },
  ],
  metrics: [
    { label: "First reply time", value: "-68%" },
    { label: "Replies reviewed", value: "91%" },
    { label: "Queues cleared", value: "4.6x" },
  ],
  securityPoints: [
    "Reply rules prevent unsafe promises and off-brand language.",
    "Only approved sources can be used for customer-facing answers.",
    "Every suggestion is saved so the team can audit what the assistant recommended.",
  ],
  faqItems: [
    {
      q: "Is this useful for small teams?",
      a: "Yes. The assistant works well for solo founders and small support teams that need faster replies without hiring immediately.",
    },
    {
      q: "Can it work with internal documentation?",
      a: "Yes. It is designed to pull from FAQs, Notion pages, docs, or other approved references before generating a reply.",
    },
    {
      q: "Does it replace humans?",
      a: "No. The concept is built for review-first workflows where the assistant drafts and a person approves the final response.",
    },
    {
      q: "Can the tone be changed per brand?",
      a: "Yes. The product is intentionally structured around tone presets and response rules so it can match different client brands.",
    },
  ],
}

const localized: Record<Locale, Partial<AssistantData>> = {
  en: {},
  it: {
    navLinks: [
      { label: "Panoramica", href: "#overview" },
      { label: "Funzionalita", href: "#capabilities" },
      { label: "Flusso", href: "#workflow" },
      { label: "Sicurezza", href: "#security" },
      { label: "FAQ", href: "#faq" },
    ],
    capabilityCards: [
      {
        icon: MessagesSquare,
        title: "Risposte suggerite",
        description:
          "Crea bozze curate per ticket di supporto, email ai clienti e domande di follow-up nel tono che scegli.",
      },
      {
        icon: BookOpenText,
        title: "Basato sulla conoscenza",
        description:
          "Prende le risposte da documentazione prodotto, note di policy o knowledge interne cosi` le risposte restano coerenti.",
      },
      {
        icon: Sparkles,
        title: "Controllo del tono",
        description:
          "Passa da uno stile conciso a uno piu` caldo, premium o tecnico a seconda del cliente e del contesto.",
      },
      {
        icon: BellRing,
        title: "Segnali di escalation",
        description:
          "Evidenzia richieste sensibili, rischio di rimborso o linguaggio legale cosi` una persona puo` intervenire prima dell'invio.",
      },
      {
        icon: ShieldCheck,
        title: "Guardrail",
        description:
          "Mantiene l'assistente in linea con il brand grazie a regole di risposta, argomenti bloccati e fonti approvate.",
      },
      {
        icon: WandSparkles,
        title: "Gestione in batch",
        description:
          "Aiuta i team a smaltire le code piu` velocemente generando piu` opzioni di risposta e riepiloghi da rivedere.",
      },
    ],
    workflowSteps: [
      {
        number: "01",
        title: "Collega le fonti",
        description:
          "Carica documenti prodotto, pagine FAQ e note di supporto cosi` l'assistente ha il contesto giusto prima di scrivere.",
      },
      {
        number: "02",
        title: "Scegli il tono",
        description:
          "Decidi se la risposta deve sembrare calma, premium, tecnica o concisa in base al cliente e al brand.",
      },
      {
        number: "03",
        title: "Genera la bozza",
        description:
          "Il modello crea la risposta, evidenzia il livello di confidenza e mostra i dettagli che vanno rivisti da una persona.",
      },
      {
        number: "04",
        title: "Approva e invia",
        description:
          "Un collega controlla la bozza, la modifica se serve e la invia con un registro chiaro di cio` che e` stato suggerito.",
      },
    ],
    responseCards: [
      {
        title: "Bozza di risposta",
        body:
          "Grazie per averci scritto. Ho controllato la tua cronologia di fatturazione e l'addebito riflette il piano attuale. Posso mostrarti i dettagli della fattura o aiutarti a passare a un livello inferiore.",
      },
      {
        title: "Fonti usate",
        body:
          "Policy di fatturazione, pagina prezzi, articolo di aiuto sulla fattura e support macro #14 sono stati usati per comporre la risposta.",
      },
      {
        title: "Livello di rischio",
        body:
          "Confidenza media. E` stato rilevato un linguaggio legato ai rimborsi, quindi prima dell'invio e` consigliata la revisione umana.",
      },
    ],
    metrics: [
      { label: "Tempo prima risposta", value: "-68%" },
      { label: "Risposte revisionate", value: "91%" },
      { label: "Code smaltite", value: "4.6x" },
    ],
    securityPoints: [
      "Le regole di risposta impediscono promesse non sicure e linguaggio fuori brand.",
      "Solo le fonti approvate possono essere usate per risposte rivolte ai clienti.",
      "Ogni suggerimento viene salvato cosi` il team puo` verificare cio` che ha proposto l'assistente.",
    ],
    faqItems: [
      {
        q: "E` utile per team piccoli?",
        a: "Si`, l'assistente funziona bene per founder solitari e piccoli team di supporto che hanno bisogno di risposte piu` veloci senza assumere subito.",
      },
      {
        q: "Puo` usare la documentazione interna?",
        a: "Si`, e` progettato per leggere FAQ, pagine Notion, documenti o altre fonti approvate prima di generare una risposta.",
      },
      {
        q: "Sostituisce le persone?",
        a: "No, il concept e` pensato per un flusso review-first in cui l'assistente prepara la bozza e una persona approva la risposta finale.",
      },
      {
        q: "Si puo` cambiare il tono per brand diversi?",
        a: "Si`, il prodotto e` strutturato attorno a preset di tono e regole di risposta cosi` puo` adattarsi a brand differenti.",
      },
    ],
  },
  de: {
    navLinks: [
      { label: "Uebersicht", href: "#overview" },
      { label: "Funktionen", href: "#capabilities" },
      { label: "Ablauf", href: "#workflow" },
      { label: "Sicherheit", href: "#security" },
      { label: "FAQ", href: "#faq" },
    ],
    capabilityCards: [
      {
        icon: MessagesSquare,
        title: "Antwortvorschlaege",
        description:
          "Erstellt saubere Entwuerfe fuer Support-Tickets, Kundemails und Folgefragen im von dir gewaehlten Ton.",
      },
      {
        icon: BookOpenText,
        title: "Wissensbasis",
        description:
          "Zieht Antworten aus Produktdoku, Policy-Notizen oder internem Wissen, damit die Rueckmeldungen konsistent bleiben.",
      },
      {
        icon: Sparkles,
        title: "Tonsteuerung",
        description:
          "Wechsle je nach Kunde und Situation zwischen knapp, warm, premium oder technisch.",
      },
      {
        icon: BellRing,
        title: "Eskalationshinweise",
        description:
          "Markiert sensible Anfragen, Rueckerstattungsrisiken oder juristische Formulierungen, bevor etwas versendet wird.",
      },
      {
        icon: ShieldCheck,
        title: "Guardrails",
        description:
          "Haelt den Assistenten mit Antwortregeln, gesperrten Themen und freigegebenen Quellen im Markenrahmen.",
      },
      {
        icon: WandSparkles,
        title: "Batch-Verarbeitung",
        description:
          "Hilft Teams, Warteschlangen schneller abzuarbeiten, indem mehrere Antwortoptionen und Zusammenfassungen erstellt werden.",
      },
    ],
    workflowSteps: [
      {
        number: "01",
        title: "Quellen verbinden",
        description:
          "Produktdokumente, FAQ-Seiten und Support-Notizen laden, damit der Assistent vor dem Schreiben den richtigen Kontext hat.",
      },
      {
        number: "02",
        title: "Ton waehlen",
        description:
          "Entscheide, ob die Antwort ruhig, premium, technisch oder knapp wirken soll.",
      },
      {
        number: "03",
        title: "Entwurf erstellen",
        description:
          "Das Modell schreibt den Entwurf, zeigt die Sicherheit an und markiert Details, die zuerst von Menschen geprueft werden muessen.",
      },
      {
        number: "04",
        title: "Freigeben und senden",
        description:
          "Ein Teammitglied prueft den Entwurf, bearbeitet ihn bei Bedarf und sendet ihn mit einem klaren Protokoll ab.",
      },
    ],
    responseCards: [
      {
        title: "Antwortentwurf",
        body:
          "Danke fuer deine Nachricht. Ich habe deine Abrechnung geprueft und die Belastung entspricht deinem aktuellen Tarif. Ich kann dir die Rechnungsdetails erklaeren oder dir beim Wechsel auf einen kleineren Plan helfen.",
      },
      {
        title: "Verwendete Quellen",
        body:
          "Abrechnungsrichtlinie, Preisseite, Hilfeartikel zur Rechnung und Support-Makro #14 wurden fuer die Antwort verwendet.",
      },
      {
        title: "Risikoniveau",
        body:
          "Mittlere Sicherheit. Rueckerstattungs-Sprache wurde erkannt, daher ist eine menschliche Pruefung vor dem Versand empfohlen.",
      },
    ],
    metrics: [
      { label: "Zeit bis zur ersten Antwort", value: "-68%" },
      { label: "Pruefungen", value: "91%" },
      { label: "Abgearbeitete Warteschlangen", value: "4.6x" },
    ],
    securityPoints: [
      "Antwortregeln verhindern unsichere Versprechen und unpassende Sprache.",
      "Nur freigegebene Quellen duerfen fuer Kundenantworten verwendet werden.",
      "Jeder Vorschlag wird gespeichert, damit das Team nachvollziehen kann, was der Assistent empfohlen hat.",
    ],
    faqItems: [
      {
        q: "Ist das fuer kleine Teams nuetzlich?",
        a: "Ja. Der Assistent ist ideal fuer Solo-Founder und kleine Support-Teams, die schneller antworten muessen, ohne sofort neue Leute einzustellen.",
      },
      {
        q: "Funktioniert das mit interner Dokumentation?",
        a: "Ja. Es ist darauf ausgelegt, vor dem Antworten FAQs, Notion-Seiten, Dokus oder andere freigegebene Quellen zu nutzen.",
      },
      {
        q: "Ersetzt das Menschen?",
        a: "Nein. Das Konzept ist fuer Review-first-Workflows gedacht, bei denen der Assistent entwirft und ein Mensch final freigibt.",
      },
      {
        q: "Kann der Ton pro Marke angepasst werden?",
        a: "Ja. Das Produkt ist bewusst um Ton-Presets und Antwortregeln aufgebaut, damit es zu verschiedenen Marken passt.",
      },
    ],
  },
}

export function getAssistantData(locale: Locale): AssistantData {
  return {
    ...english,
    ...(localized[locale] ?? {}),
  }
}
