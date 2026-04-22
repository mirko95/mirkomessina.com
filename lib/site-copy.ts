import { type Locale } from "@/lib/i18n"
import { normalizeGermanData } from "@/lib/german"

export type HomeCopy = {
  navbar: {
    links: Array<{ href: string; label: string }>
    cta: string
    ariaLabel: string
  }
  hero: {
    badge: string
    headline: [string, string, string]
    subheadline: string
    primaryCta: string
    secondaryCta: string
    featureCards: Array<{ title: string; description: string }>
    stats: Array<{ value: string; label: string }>
  }
  services: {
    eyebrow: string
    title: string
    description: string
    items: Array<{
      title: string
      description: string
      outcomes: string[]
    }>
  }
  whyMe: {
    eyebrow: string
    title: string
    description: string
    items: Array<{ title: string; description: string }>
  }
  process: {
    eyebrow: string
    title: string
    description: string
    steps: Array<{ number: string; title: string; description: string }>
  }
  solutions: {
    eyebrow: string
    title: string
    description: string
    valueProps: Array<{ title: string; description: string }>
    items: Array<{
      title: string
      description: string
      outcomes: string[]
      idealFor: string
      cta: string
    }>
  }
  examples: {
    eyebrow: string
    title: string
    description: string
    cta: string
  }
  seoPages: {
    eyebrow: string
    title: string
    description: string
  }
  faq: {
    eyebrow: string
    title: string
    description: string
    items: Array<{ question: string; answer: string }>
    cta: string
  }
  about: {
    eyebrow: string
    title: string
    description: string[]
    stats: Array<{ value: string; label: string }>
  }
  finalCta: {
    title: string
    description: string
    cta: string
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    labels: {
      email: string
      name: string
      emailField: string
      subject: string
      message: string
      send: string
      sending: string
      successTitle: string
      successDescription: string
      another: string
    }
    placeholders: {
      name: string
      email: string
      subject: string
      message: string
    }
    socialLabel: string
  }
  footer: {
    copyright: string
    note: string
    links: Array<{ label: string; href: string }>
    legal: Array<{ label: string; href: string }>
  }
}

export type ExampleSiteCopy = {
  slug: string
  name: string
  category: string
  summary: string
  heroStat: string
  highlights: string[]
  sections: Array<{
    label: string
    title: string
    description: string
  }>
}

export type SeoLandingPageCopy = {
  slug: string
  keyword: string
  title: string
  description: string
  h1: string
  intro: string
  benefits: Array<{ title: string; description: string }>
  steps: Array<{ title: string; description: string }>
  ctaLabel: string
  ctaHref: string
}

export type ExampleIndexCopy = {
  eyebrow: string
  title: string
  description: string
  openLabel: string
  note: string
}

export type LegalPageCopy = {
  privacy: {
    title: string
    description: string
    eyebrow: string
    intro: string
    sections: Array<{ title: string; content: string[] }>
    noteTitle: string
    noteBody: string
  }
  impressum: {
    title: string
    description: string
    eyebrow: string
    intro: string
    currentOwnerTitle: string
    launchTitle: string
    launchFields: string[]
    whyTitle: string
    whyBody: string
    whyBody2: string
    whyLink: string
  }
}

const siteTitles: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Mirko Messina | Websites, AI Tools, and Automation",
    description:
      "Web developer trained in PHP and currently studying Artificial Intelligence at JKU Linz. I build websites, GPT-powered tools, and practical automations.",
  },
  it: {
    title: "Mirko Messina | Siti web, strumenti AI e automazione",
    description:
      "Sviluppatore web formato in PHP e attualmente studente di Intelligenza Artificiale alla JKU Linz. Creo siti web, strumenti GPT e automazioni pratiche.",
  },
  de: {
    title: "Mirko Messina | Websites, KI-Tools und Automatisierung",
    description:
      "Webentwickler mit PHP-Ausbildung und aktuell im Studium der Künstlichen Intelligenz an der JKU Linz. Ich baue Websites, GPT-gestützte Tools und praktische Automatisierungen.",
  },
}

export function getSiteMeta(locale: Locale) {
  return locale === "de" ? normalizeGermanData(siteTitles[locale]) : siteTitles[locale]
}

const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    navbar: {
      links: [
        { href: "/examples", label: "Examples" },
        { href: "/about", label: "About" },
        { href: "/faq", label: "FAQ" },
        { href: "/contact", label: "Contact" },
      ],
      cta: "Work with me",
      ariaLabel: "Toggle menu",
    },
    hero: {
      badge: "Web development + AI projects",
      headline: ["Websites and", "AI tools", "built with a practical mindset"],
      subheadline:
        "I trained as a PHP web developer in Vienna and I am currently studying Artificial Intelligence at JKU Linz. Alongside that, I build practical projects with Python, APIs, and GPT-based tools.",
      primaryCta: "Work with me",
      secondaryCta: "View services",
      featureCards: [
        {
          title: "Web Development Foundation",
          description: "Training in PHP, Laravel, HTML, CSS, JavaScript, and practical project building",
        },
        {
          title: "AI Projects",
          description: "Python, GPT APIs, prompt engineering",
        },
        {
          title: "Support Mindset",
          description: "Monitoring, troubleshooting, and real ops experience",
        },
      ],
      stats: [
        { value: "PHP", label: "Web dev training" },
        { value: "AI", label: "Degree in progress" },
        { value: "Ops", label: "Support experience" },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "What I can build for your business right now",
      description:
        "My background combines web development training, technical support experience, and hands-on AI projects. The focus is practical work: clear websites, useful tools, and automations that solve concrete problems.",
      items: [
        {
          title: "Custom Website Development",
          description:
            "I build clean, modern websites for freelancers, small businesses, and local brands. The goal is a clear structure, a professional presence, and a site that feels solid and easy to use.",
          outcomes: ["Clear positioning", "Responsive layout", "Professional online presence"],
        },
        {
          title: "AI Tools & Automations",
          description:
            "I am currently developing AI projects with Python, APIs, prompt engineering, and GPT models. This fits well for chatbot ideas, internal helpers, content workflows, and practical proof-of-concept tools.",
          outcomes: ["GPT-based assistants", "Prompt workflows", "Custom prototypes"],
        },
        {
          title: "Workflow Automation",
          description:
            "My support experience made me very aware of repetitive tasks, operational bottlenecks, and the value of reliable processes. I can help structure small automations that reduce manual work and save time.",
          outcomes: ["Less manual work", "Cleaner processes", "Practical integrations"],
        },
        {
          title: "Custom Digital Tools",
          description:
            "When a template is not enough, I can build focused tools for a specific need: internal pages, simple dashboards, support utilities, or lightweight business applications.",
          outcomes: ["Focused features", "Simple interfaces", "Built around your workflow"],
        },
      ],
    },
    whyMe: {
      eyebrow: "Why Work With Me",
      title: "A background that combines service, support, and building",
      description:
        "I do not position myself as a big agency. What I bring is a real mix of technical training, ongoing AI study, day-to-day support experience, and a strong willingness to improve with every project.",
      items: [
        {
          title: "Web + AI Combination",
          description:
            "I completed web developer training in Vienna and I am now deepening my AI knowledge through my degree at JKU Linz and independent projects.",
        },
        {
          title: "Practical Problem Solving",
          description:
            "My current support role trained me to monitor systems, investigate issues, and stay calm when something is not working as expected.",
        },
        {
          title: "AI Grounded in Real Work",
          description:
            "I am interested in AI that is actually useful. I work on chatbot, API, and machine learning projects that can become practical tools, not just experiments.",
        },
        {
          title: "Service and Communication",
          description:
            "My years in hospitality taught me discipline, teamwork, and how to work with people. That still shapes how I communicate and handle projects today.",
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "A clear path from idea to launch",
      description:
        "I prefer a simple, transparent process: understand the need, build the essential version well, and improve from there.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "We start by clarifying the goal, the target user, and what the project actually needs. I prefer clear scope over vague promises.",
        },
        {
          number: "02",
          title: "Planning",
          description:
            "I define the first version, the key pages or features, and the stack that makes sense for the job without overcomplicating it.",
        },
        {
          number: "03",
          title: "Build",
          description:
            "I build in small steps so you can review progress early. That keeps the work grounded and makes adjustments easier.",
        },
        {
          number: "04",
          title: "Launch & Improve",
          description:
            "Once the core version is ready, we launch, test, and improve based on real use. A good first version matters more than trying to do everything at once.",
        },
      ],
    },
    solutions: {
      eyebrow: "Solutions",
      title: "What I am focused on building right now",
      description:
        "I focus on websites, GPT-based tools, and simple automations that are realistic to build, useful to use, and aligned with the work I am doing today.",
      valueProps: [
        {
          title: "Grounded in Real Work",
          description: "Support and troubleshooting experience shaped how I approach technical problems",
        },
        {
          title: "Currently Studying AI",
          description: "I stay close to current tools while building practical side projects",
        },
        {
          title: "Clear Communication",
          description: "Hospitality and support taught me to work well with people, not only code",
        },
      ],
      items: [
        {
          title: "Professional Websites",
          description:
            "Clean websites for freelancers, small businesses, and professionals who need a stronger online presence and a more credible digital identity.",
          outcomes: [
            "Landing pages and business websites",
            "Responsive layouts for mobile and desktop",
            "Clear calls to action",
            "SEO-ready structure",
          ],
          idealFor:
            "Freelancers, local businesses, and small teams that need a stronger online presence",
          cta: "Discuss this solution",
        },
        {
          title: "GPT-Powered Assistants",
          description:
            "Early-stage AI tools and chatbot prototypes built with APIs, prompt engineering, and Python. Useful for internal support, content help, or task-specific assistants.",
          outcomes: [
            "GPT API integration",
            "Prompt design and testing",
            "Prototype interfaces",
            "Task-specific assistant logic",
          ],
          idealFor: "Businesses or professionals who want to test a useful AI idea quickly",
          cta: "Discuss this solution",
        },
        {
          title: "Workflow Automation",
          description: "Simple internal tools and automations that reduce repetitive work and make processes easier to follow.",
          outcomes: [
            "Small dashboards and workflow helpers",
            "Automated steps for repeated tasks",
            "Cleaner internal handoffs",
            "Practical process improvements",
          ],
          idealFor: "Teams spending too much time on manual work or scattered processes",
          cta: "Discuss this solution",
        },
        {
          title: "Custom Project Prototypes",
          description:
            "If your idea does not fit into a standard template, I can help shape a focused first version that proves the concept and gives you something real to test.",
          outcomes: ["Lean MVP planning", "Functional early versions", "Simple user flows", "Room to grow later"],
          idealFor: "Founders and small businesses validating a new digital idea",
          cta: "Discuss this solution",
        },
      ],
    },
    examples: {
      eyebrow: "Portfolio pages",
      title: "Three client-ready pages, built to show the quality of the work",
      description:
        "These pages show the kind of structure, polish, and clarity I can ship without spinning up separate hosting for each page.",
      cta: "View all pages",
    },
    seoPages: {
      eyebrow: "SEO Landing Pages",
      title: "Search landing pages built for crawlability and intent",
      description:
        "These pages use real text, unique titles, and crawlable internal links so Google can understand the service topics without needing JavaScript to interpret the content.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions",
      description: "Short answers about how I work, what I build, and where I currently bring the most value.",
      items: [
        {
          question: "What kind of projects do you take on?",
          answer:
            "Right now I focus on business websites, landing pages, lightweight custom tools, and early AI prototypes. The best fit is a project that needs a solid first version built with care, not an overcomplicated enterprise system.",
        },
        {
          question: "Do you already work with AI, or are you still learning?",
          answer:
            "Both. I am currently studying Artificial Intelligence at JKU Linz, and at the same time I build independent projects with Python, APIs, prompt engineering, and GPT-based tools. So I do not present myself as a senior AI architect, but I do actively build and test practical AI solutions.",
        },
        {
          question: "What is your background in web development?",
          answer:
            "I completed web developer training in Vienna with a focus on PHP, Laravel, HTML, CSS, JavaScript, and project work. That gives me a strong practical base for building websites and structured digital products.",
        },
        {
          question: "How do you usually work with clients?",
          answer:
            "I prefer a clear and direct process. First we define the goal, then I build the essential version in small steps so you can review progress early. My support background made me value clarity, reliability, and communication throughout the project.",
        },
        {
          question: "Can you help if the idea is still not fully defined?",
          answer:
            "Yes. In many cases the first step is simply turning a rough idea into a realistic scope. I can help shape the first version, decide what should be included now, and separate that from what can wait until later.",
        },
        {
          question: "Do you also offer support after launch?",
          answer:
            "Yes, for reasonable follow-up work, fixes, and improvements. I already work in a technical support environment, so I am comfortable with monitoring issues, troubleshooting, and improving things after the initial release.",
        },
      ],
      cta: "Get in touch",
    },
    about: {
      eyebrow: "About",
      title: "From hospitality to web development and AI",
      description: [
        "I did not start in tech. I spent several years working in hospitality, where I learned discipline, teamwork, and how to stay effective under pressure.",
        "After that, I completed web developer training in Vienna and moved deeper into software. Today I work in technical support, where I monitor systems, troubleshoot issues, and collaborate across teams.",
        "Alongside my job, I am studying Artificial Intelligence at JKU Linz and building independent AI projects, including chatbot and GPT-based experiments. That mix of support, development, and study shapes how I approach client work: practical first, always learning, and focused on real outcomes.",
      ],
      stats: [
        { value: "PHP", label: "Web dev training" },
        { value: "AI", label: "Bachelor in progress" },
        { value: "Ops", label: "Support experience" },
      ],
    },
    finalCta: {
      title: "Need a website, an AI prototype, or a useful internal tool?",
      description:
        "If you want someone who combines web development, applied AI learning, and a practical support mindset, let's talk about what you want to build.",
      cta: "Let's talk",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's start a conversation",
      description:
        "Tell me what you have in mind, even if the idea is still rough. This form sends directly to my Gmail inbox through a secure server endpoint.",
      labels: {
        email: "Email",
        name: "Name",
        emailField: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send to Gmail",
        sending: "Sending...",
        successTitle: "Message sent",
        successDescription: "Your message was sent to my Gmail inbox. I'll reply as soon as I can.",
        another: "Send another message",
      },
      placeholders: {
        name: "Your name",
        email: "your@email.com",
        subject: "What's this about?",
        message: "Tell me about your project...",
      },
      socialLabel: "LinkedIn",
    },
    footer: {
      copyright: "All rights reserved.",
      note: "Analytics only loads after consent. Contact forms are delivered through a server-side Gmail SMTP endpoint.",
      links: [
        { label: "Examples", href: "/examples" },
        { label: "About", href: "/about" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact", href: "/contact" },
      ],
      legal: [
        { label: "Privacy & Cookies", href: "/privacy-policy" },
        { label: "Impressum", href: "/impressum" },
      ],
    },
  },
  it: {
    navbar: {
      links: [
        { href: "/examples", label: "Esempi" },
        { href: "/about", label: "Chi sono" },
        { href: "/faq", label: "FAQ" },
        { href: "/contact", label: "Contatto" },
      ],
      cta: "Lavora con me",
      ariaLabel: "Apri menu",
    },
    hero: {
      badge: "Sviluppo web + progetti AI",
      headline: ["Siti web e", "strumenti AI", "costruiti con un approccio pratico"],
      subheadline:
        "Mi sono formato come sviluppatore web PHP a Vienna e attualmente studio Intelligenza Artificiale alla JKU Linz. In parallelo realizzo progetti pratici con Python, API e strumenti basati su GPT.",
      primaryCta: "Lavora con me",
      secondaryCta: "Vedi i servizi",
      featureCards: [
        {
          title: "Base di sviluppo web",
          description: "Formazione in PHP, Laravel, HTML, CSS, JavaScript e realizzazione di progetti",
        },
        {
          title: "Progetti AI",
          description: "Python, API GPT, prompt engineering",
        },
        {
          title: "Mentalita operativa",
          description: "Monitoraggio, troubleshooting ed esperienza reale in supporto",
        },
      ],
      stats: [
        { value: "PHP", label: "Formazione web" },
        { value: "AI", label: "Laurea in corso" },
        { value: "Ops", label: "Esperienza supporto" },
      ],
    },
    services: {
      eyebrow: "Servizi",
      title: "Cosa posso costruire per la tua azienda adesso",
      description:
        "Il mio profilo unisce formazione web, esperienza nel supporto tecnico e progetti AI pratici. Il focus e` su lavoro concreto: siti chiari, strumenti utili e automazioni che risolvono problemi reali.",
      items: [
        {
          title: "Sviluppo di siti web su misura",
          description:
            "Creo siti puliti e moderni per freelance, piccole aziende e brand locali. L'obiettivo e` una struttura chiara, una presenza professionale e un sito solido e facile da usare.",
          outcomes: ["Posizionamento chiaro", "Layout responsive", "Presenza online professionale"],
        },
        {
          title: "Strumenti AI e automazioni",
          description:
            "Sto sviluppando progetti AI con Python, API, prompt engineering e modelli GPT. E` ideale per idee di chatbot, helper interni, workflow di contenuto e proof-of-concept pratici.",
          outcomes: ["Assistenti basati su GPT", "Workflow di prompt", "Prototipi personalizzati"],
        },
        {
          title: "Automazione dei processi",
          description:
            "La mia esperienza nel supporto mi ha reso molto consapevole dei task ripetitivi, dei colli di bottiglia operativi e del valore di processi affidabili. Posso aiutare a strutturare piccole automazioni che fanno risparmiare tempo.",
          outcomes: ["Meno lavoro manuale", "Processi piu` puliti", "Integrazioni pratiche"],
        },
        {
          title: "Strumenti digitali personalizzati",
          description:
            "Quando un template non basta, posso costruire strumenti mirati per un bisogno specifico: pagine interne, dashboard semplici, utility di supporto o applicazioni business leggere.",
          outcomes: ["Funzioni mirate", "Interfacce semplici", "Costruiti sul tuo flusso"],
        },
      ],
    },
    whyMe: {
      eyebrow: "Perche` lavorare con me",
      title: "Un background che unisce servizio, supporto e costruzione",
      description:
        "Non mi presento come una grande agenzia. Quello che porto e` una combinazione reale di formazione tecnica, studio continuo dell'AI, esperienza quotidiana nel supporto e voglia concreta di migliorare ad ogni progetto.",
      items: [
        {
          title: "Web + AI insieme",
          description:
            "Ho completato la formazione web a Vienna e sto approfondendo l'AI con la mia laurea alla JKU Linz e con progetti indipendenti.",
        },
        {
          title: "Problem solving pratico",
          description:
            "Il mio attuale ruolo nel supporto mi ha allenato a monitorare sistemi, investigare problemi e restare lucido quando qualcosa non funziona come previsto.",
        },
        {
          title: "AI legata al lavoro reale",
          description:
            "Mi interessa un'AI davvero utile. Lavoro su chatbot, API e progetti di machine learning che possano diventare strumenti pratici, non solo proof-of-concept.",
        },
        {
          title: "Servizio e comunicazione",
          description:
            "Gli anni nell'ospitalita` mi hanno insegnato disciplina, lavoro di squadra e attenzione alle persone. Questo continua a influenzare il mio modo di comunicare e gestire i progetti.",
        },
      ],
    },
    process: {
      eyebrow: "Processo",
      title: "Un percorso chiaro dall'idea al lancio",
      description:
        "Preferisco un processo semplice e trasparente: capire il bisogno, costruire bene la prima versione e migliorare da li`.",
      steps: [
        {
          number: "01",
          title: "Scoperta",
          description:
            "Partiamo chiarendo l'obiettivo, il tipo di utente e cio` che il progetto richiede davvero. Preferisco un perimetro chiaro a promesse vaghe.",
        },
        {
          number: "02",
          title: "Pianificazione",
          description:
            "Definisco la prima versione, le pagine o funzioni chiave e lo stack piu` sensato per il lavoro, senza complicare inutilmente.",
        },
        {
          number: "03",
          title: "Sviluppo",
          description:
            "Lavoro per piccoli step cosi` puoi rivedere i progressi presto. Questo tiene il lavoro concreto e rende piu` facili gli aggiustamenti.",
        },
        {
          number: "04",
          title: "Lancio e miglioramento",
          description:
            "Quando la versione centrale e` pronta, lanciamo, testiamo e miglioriamo in base all'uso reale. Una buona prima versione conta piu` del voler fare tutto subito.",
        },
      ],
    },
    solutions: {
      eyebrow: "Soluzioni",
      title: "Su cosa mi sto concentrando ora",
      description:
        "Mi concentro su siti web, strumenti basati su GPT e automazioni semplici che siano realistiche da costruire, utili da usare e coerenti con il lavoro che sto facendo oggi.",
      valueProps: [
        {
          title: "Ancorato al lavoro reale",
          description: "L'esperienza nel supporto e nel troubleshooting ha modellato il mio approccio ai problemi tecnici",
        },
        {
          title: "Sto studiando AI",
          description: "Resto vicino agli strumenti attuali mentre costruisco progetti pratici secondari",
        },
        {
          title: "Comunicazione chiara",
          description: "L'ospitalita` e il supporto mi hanno insegnato a lavorare bene con le persone, non solo con il codice",
        },
      ],
      items: [
        {
          title: "Siti web professionali",
          description:
            "Siti puliti per freelance, piccole aziende e professionisti che hanno bisogno di una presenza online piu` forte e di un'identita` digitale piu` credibile.",
          outcomes: [
            "Landing page e siti business",
            "Layout responsive per mobile e desktop",
            "CTA chiare",
            "Struttura pronta per la SEO",
          ],
          idealFor: "Freelance, aziende locali e piccoli team che hanno bisogno di piu` presenza online",
          cta: "Parla di questa soluzione",
        },
        {
          title: "Assistenti basati su GPT",
          description:
            "Strumenti AI iniziali e prototipi chatbot costruiti con API, prompt engineering e Python. Utili per supporto interno, contenuti o assistenti specifici per task.",
          outcomes: [
            "Integrazione API GPT",
            "Progettazione e test dei prompt",
            "Interfacce prototipo",
            "Logica di assistenza per task specifici",
          ],
          idealFor: "Aziende o professionisti che vogliono testare rapidamente un'idea AI utile",
          cta: "Parla di questa soluzione",
        },
        {
          title: "Automazione dei workflow",
          description: "Strumenti interni semplici e automazioni che riducono il lavoro ripetitivo e rendono i processi piu` facili da seguire.",
          outcomes: [
            "Piccoli dashboard e helper di processo",
            "Step automatizzati per task ripetitivi",
            "Passaggi interni piu` puliti",
            "Miglioramenti pratici",
          ],
          idealFor: "Team che perdono troppo tempo in lavoro manuale o processi dispersi",
          cta: "Parla di questa soluzione",
        },
        {
          title: "Prototipi personalizzati",
          description:
            "Se la tua idea non rientra in un template standard, posso aiutare a costruire una prima versione focalizzata che dimostri il concetto e dia qualcosa di reale da testare.",
          outcomes: ["Pianificazione MVP snella", "Prime versioni funzionali", "Flussi semplici", "Spazio per crescere"],
          idealFor: "Founder e piccole aziende che stanno validando una nuova idea digitale",
          cta: "Parla di questa soluzione",
        },
      ],
    },
    examples: {
      eyebrow: "Pagine portfolio",
      title: "Tre pagine pronte per clienti, costruite per mostrare la qualita` del lavoro",
      description:
        "Queste pagine mostrano il tipo di struttura, rifinitura e chiarezza che posso consegnare senza dover pubblicare ogni pagina su un hosting separato.",
      cta: "Vedi tutte le pagine",
    },
    seoPages: {
      eyebrow: "Landing SEO",
      title: "Pagine di atterraggio costruite per crawlability e intento",
      description:
        "Queste pagine usano testo reale, titoli unici e link interni crawlabili in modo che Google capisca gli argomenti dei servizi senza dover interpretare il contenuto via JavaScript.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Domande frequenti",
      description: "Risposte brevi su come lavoro, cosa costruisco e dove porto piu` valore oggi.",
      items: [
        {
          question: "Che tipo di progetti accetti?",
          answer:
            "Al momento mi concentro su siti business, landing page, strumenti custom leggeri e primi prototipi AI. Il fit migliore e` un progetto che ha bisogno di una prima versione solida e curata, non di un sistema enterprise troppo complesso.",
        },
        {
          question: "Lavori gia` con l'AI o stai ancora imparando?",
          answer:
            "Entrambe le cose. Sto studiando Intelligenza Artificiale alla JKU Linz e, allo stesso tempo, costruisco progetti indipendenti con Python, API, prompt engineering e strumenti basati su GPT. Quindi non mi presento come senior AI architect, ma costruisco e testo attivamente soluzioni AI pratiche.",
        },
        {
          question: "Qual e` il tuo background nello sviluppo web?",
          answer:
            "Ho completato la formazione da web developer a Vienna con focus su PHP, Laravel, HTML, CSS, JavaScript e project work. Questo mi da una base pratica forte per costruire siti e prodotti digitali strutturati.",
        },
        {
          question: "Come lavori di solito con i clienti?",
          answer:
            "Preferisco un processo chiaro e diretto. Prima definiamo l'obiettivo, poi costruisco la versione essenziale in piccoli step cosi` puoi rivedere presto i progressi. Il mio background nel supporto mi ha insegnato chiarezza, affidabilita` e comunicazione continua.",
        },
        {
          question: "Puoi aiutare anche se l'idea non e` ancora definita?",
          answer:
            "Sì. Spesso il primo passo e` trasformare un'idea grezza in un perimetro realistico. Posso aiutarti a definire la prima versione, decidere cosa includere subito e cosa rimandare.",
        },
        {
          question: "Offri supporto anche dopo il lancio?",
          answer:
            "Sì, per lavoro successivo ragionevole, fix e miglioramenti. Lavoro gia` in un contesto di supporto tecnico, quindi sono abituato a monitorare problemi, fare troubleshooting e migliorare le cose dopo il rilascio iniziale.",
        },
      ],
      cta: "Contattami",
    },
    about: {
      eyebrow: "Chi sono",
      title: "Dall'ospitalita` allo sviluppo web e all'AI",
      description: [
        "Non ho iniziato nel tech. Ho lavorato per diversi anni nell'ospitalita`, dove ho imparato disciplina, lavoro di squadra e come rimanere efficace sotto pressione.",
        "Poi ho completato la formazione da web developer a Vienna e sono passato piu` a fondo nel software. Oggi lavoro nel supporto tecnico, dove monitoro sistemi, risolvo problemi e collaboro tra team.",
        "Accanto al lavoro, studio Intelligenza Artificiale alla JKU Linz e costruisco progetti AI indipendenti, inclusi esperimenti con chatbot e GPT. Questo mix di supporto, sviluppo e studio plasma il mio approccio ai clienti: pratico prima di tutto, sempre in apprendimento e focalizzato su risultati reali.",
      ],
      stats: [
        { value: "PHP", label: "Formazione web" },
        { value: "AI", label: "Laurea in corso" },
        { value: "Ops", label: "Esperienza supporto" },
      ],
    },
    finalCta: {
      title: "Ti serve un sito, un prototipo AI o uno strumento interno utile?",
      description:
        "Se vuoi qualcuno che unisca sviluppo web, apprendimento AI applicato e mentalita` pratica da supporto, parliamo di cosa vuoi costruire.",
      cta: "Parliamone",
    },
    contact: {
      eyebrow: "Contatto",
      title: "Iniziamo una conversazione",
      description:
        "Dimmi cosa hai in mente, anche se l'idea e` ancora approssimativa. Questo modulo invia direttamente alla mia Gmail tramite un endpoint server sicuro.",
      labels: {
        email: "Email",
        name: "Nome",
        emailField: "Email",
        subject: "Oggetto",
        message: "Messaggio",
        send: "Invia a Gmail",
        sending: "Invio in corso...",
        successTitle: "Messaggio inviato",
        successDescription: "Il tuo messaggio e` stato inviato alla mia Gmail. Ti rispondero` appena possibile.",
        another: "Invia un altro messaggio",
      },
      placeholders: {
        name: "Il tuo nome",
        email: "tuo@email.com",
        subject: "Di cosa si tratta?",
        message: "Raccontami il tuo progetto...",
      },
      socialLabel: "LinkedIn",
    },
    footer: {
      copyright: "Tutti i diritti riservati.",
      note:
        "L'analytics si carica solo dopo il consenso. I moduli di contatto vengono consegnati tramite un endpoint Gmail SMTP lato server.",
      links: [
        { label: "Esempi", href: "/examples" },
        { label: "Chi sono", href: "/about" },
        { label: "FAQ", href: "/faq" },
        { label: "Contatto", href: "/contact" },
      ],
      legal: [
        { label: "Privacy e Cookie", href: "/privacy-policy" },
        { label: "Impressum", href: "/impressum" },
      ],
    },
  },
  de: {
    navbar: {
      links: [
        { href: "/examples", label: "Beispiele" },
        { href: "/about", label: "Ueber mich" },
        { href: "/faq", label: "FAQ" },
        { href: "/contact", label: "Kontakt" },
      ],
      cta: "Mit mir arbeiten",
      ariaLabel: "Menue oeffnen",
    },
    hero: {
      badge: "Webentwicklung + KI-Projekte",
      headline: ["Websites und", "KI-Tools", "mit praxisnaher Denkweise gebaut"],
      subheadline:
        "Ich habe mich in Wien zum PHP-Webentwickler ausbilden lassen und studiere derzeit Kuenstliche Intelligenz an der JKU Linz. Parallel entwickle ich praxisnahe Projekte mit Python, APIs und GPT-basierten Tools.",
      primaryCta: "Mit mir arbeiten",
      secondaryCta: "Leistungen ansehen",
      featureCards: [
        {
          title: "Web-Entwicklungsbasis",
          description: "Ausbildung in PHP, Laravel, HTML, CSS, JavaScript und praxisnaher Projektarbeit",
        },
        {
          title: "KI-Projekte",
          description: "Python, GPT-APIs, Prompt Engineering",
        },
        {
          title: "Support-Mindset",
          description: "Monitoring, Troubleshooting und echte Betriebserfahrung",
        },
      ],
      stats: [
        { value: "PHP", label: "Webausbildung" },
        { value: "KI", label: "Studium laufend" },
        { value: "Ops", label: "Support-Erfahrung" },
      ],
    },
    services: {
      eyebrow: "Leistungen",
      title: "Was ich fuer Ihr Unternehmen aktuell bauen kann",
      description:
        "Mein Hintergrund verbindet Webentwicklung, technische Support-Erfahrung und praktische KI-Projekte. Der Fokus liegt auf konkreter Arbeit: klare Websites, nützliche Tools und Automatisierungen, die echte Probleme loesen.",
      items: [
        {
          title: "Individuelle Website-Entwicklung",
          description:
            "Ich baue saubere, moderne Websites fuer Freelancer, kleine Unternehmen und lokale Marken. Ziel ist eine klare Struktur, ein professioneller Auftritt und eine Seite, die solide und leicht nutzbar wirkt.",
          outcomes: ["Klare Positionierung", "Responsives Layout", "Professioneller Online-Auftritt"],
        },
        {
          title: "KI-Tools & Automatisierungen",
          description:
            "Ich entwickle derzeit KI-Projekte mit Python, APIs, Prompt Engineering und GPT-Modellen. Das passt gut fuer Chatbot-Ideen, interne Helfer, Content-Workflows und praktische Proof-of-Concept-Tools.",
          outcomes: ["GPT-basierte Assistenten", "Prompt-Workflows", "Individuelle Prototypen"],
        },
        {
          title: "Workflow-Automatisierung",
          description:
            "Meine Support-Erfahrung hat mich fuer wiederkehrende Aufgaben, betriebliche Engpässe und den Wert verlässlicher Prozesse sensibilisiert. Ich kann helfen, kleine Automationen zu strukturieren, die manuelle Arbeit reduzieren.",
          outcomes: ["Weniger manuelle Arbeit", "Sauberere Prozesse", "Praxisnahe Integrationen"],
        },
        {
          title: "Individuelle digitale Tools",
          description:
            "Wenn ein Template nicht reicht, baue ich gezielte Tools fuer einen konkreten Bedarf: interne Seiten, einfache Dashboards, Support-Utilities oder leichte Business-Anwendungen.",
          outcomes: ["Fokussierte Funktionen", "Einfache Oberflächen", "Auf Ihren Workflow zugeschnitten"],
        },
      ],
    },
    whyMe: {
      eyebrow: "Warum mit mir arbeiten",
      title: "Ein Hintergrund aus Service, Support und Aufbau",
      description:
        "Ich positioniere mich nicht als grosse Agentur. Was ich mitbringe, ist eine echte Mischung aus technischer Ausbildung, laufendem KI-Studium, taeglicher Support-Erfahrung und dem klaren Willen, mich mit jedem Projekt zu verbessern.",
      items: [
        {
          title: "Web + KI kombiniert",
          description:
            "Ich habe meine Webausbildung in Wien abgeschlossen und vertiefe mein KI-Wissen nun ueber mein Studium an der JKU Linz und ueber eigene Projekte.",
        },
        {
          title: "Praktisches Problemloesen",
          description:
            "Meine aktuelle Support-Rolle hat mich trainiert, Systeme zu überwachen, Probleme zu untersuchen und ruhig zu bleiben, wenn etwas nicht wie erwartet funktioniert.",
        },
        {
          title: "KI mit realem Nutzen",
          description:
            "Mich interessiert KI, die wirklich hilfreich ist. Ich arbeite an Chatbot-, API- und Machine-Learning-Projekten, die zu praktischen Werkzeugen werden koennen, nicht nur zu Konzepten.",
        },
        {
          title: "Service und Kommunikation",
          description:
            "Meine Jahre in der Gastronomie haben mir Disziplin, Teamarbeit und den Umgang mit Menschen beigebracht. Das prägt bis heute meine Kommunikation und Projektarbeit.",
        },
      ],
    },
    process: {
      eyebrow: "Ablauf",
      title: "Ein klarer Weg von der Idee zum Launch",
      description:
        "Ich bevorzuge einen einfachen, transparenten Prozess: Bedarf verstehen, die wesentliche Version gut bauen und von dort aus verbessern.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "Wir klaeren zuerst das Ziel, die Zielgruppe und den tatsächlichen Projektbedarf. Ich bevorzuge einen klaren Scope statt vager Versprechen.",
        },
        {
          number: "02",
          title: "Planung",
          description:
            "Ich definiere die erste Version, die wichtigsten Seiten oder Funktionen und den passenden Stack, ohne das Projekt zu verkomplizieren.",
        },
        {
          number: "03",
          title: "Build",
          description:
            "Ich arbeite in kleinen Schritten, damit Sie den Fortschritt frueh sehen können. So bleibt die Arbeit konkret und Anpassungen werden leichter.",
        },
        {
          number: "04",
          title: "Launch & Verbesserung",
          description:
            "Sobald die Kernversion steht, gehen wir live, testen und verbessern auf Basis der echten Nutzung. Eine gute erste Version ist wichtiger als alles auf einmal zu machen.",
        },
      ],
    },
    solutions: {
      eyebrow: "Loesungen",
      title: "Worauf ich mich aktuell konzentriere",
      description:
        "Ich konzentriere mich auf Websites, GPT-basierte Tools und einfache Automationen, die realistisch umsetzbar, nützlich und mit meiner aktuellen Arbeit abgestimmt sind.",
      valueProps: [
        {
          title: "Aus der Praxis",
          description: "Support- und Troubleshooting-Erfahrung haben meinen technischen Ansatz geprägt",
        },
        {
          title: "KI-Studium laufend",
          description: "Ich bleibe an aktuellen Tools dran und baue gleichzeitig praktische Nebenprojekte",
        },
        {
          title: "Klare Kommunikation",
          description: "Gastronomie und Support haben mich gelehrt, gut mit Menschen zu arbeiten, nicht nur mit Code",
        },
      ],
      items: [
        {
          title: "Professionelle Websites",
          description:
            "Saubere Websites fuer Freelancer, kleine Unternehmen und Professionals, die einen stärkeren Online-Auftritt und eine glaubwürdigere digitale Identitaet brauchen.",
          outcomes: [
            "Landing Pages und Business-Websites",
            "Responsive Layouts fuer Mobile und Desktop",
            "Klare Call-to-Actions",
            "SEO-taugliche Struktur",
          ],
          idealFor: "Freelancer, lokale Unternehmen und kleine Teams mit mehr Online-Präsenzbedarf",
          cta: "Diese Loesung besprechen",
        },
        {
          title: "GPT-gestützte Assistenten",
          description:
            "Fruehe KI-Tools und Chatbot-Prototypen mit APIs, Prompt Engineering und Python. Nützlich fuer internen Support, Content-Hilfe oder task-spezifische Assistenten.",
          outcomes: [
            "GPT-API-Integration",
            "Prompt-Design und Tests",
            "Prototyp-Oberflächen",
            "Task-spezifische Assistentenlogik",
          ],
          idealFor: "Unternehmen oder Professionals, die schnell eine nützliche KI-Idee testen wollen",
          cta: "Diese Loesung besprechen",
        },
        {
          title: "Workflow-Automatisierung",
          description: "Einfache interne Tools und Automationen, die wiederholte Arbeit reduzieren und Prozesse leichter nachvollziehbar machen.",
          outcomes: [
            "Kleine Dashboards und Workflow-Helpers",
            "Automatisierte Schritte fuer wiederkehrende Aufgaben",
            "Sauberere interne Übergaben",
            "Praktische Prozessverbesserungen",
          ],
          idealFor: "Teams, die zu viel Zeit mit manueller Arbeit oder verstreuten Prozessen verlieren",
          cta: "Diese Loesung besprechen",
        },
        {
          title: "Individuelle Prototypen",
          description:
            "Wenn Ihre Idee nicht in ein Standardtemplate passt, kann ich eine fokussierte erste Version formen, die das Konzept beweist und etwas Reales zum Testen liefert.",
          outcomes: ["Lean MVP Planung", "Funktionale fruehe Versionen", "Einfache User Flows", "Wachstumsraum spaeter"],
          idealFor: "Gruender und kleine Unternehmen, die eine neue digitale Idee validieren",
          cta: "Diese Loesung besprechen",
        },
      ],
    },
    examples: {
      eyebrow: "Beispiel-Websites",
      title: "Drei einsatzbereite Beispielseiten fuer echte Projekte",
      description:
        "Das sind Projekt-Websites, die Sie im selben Deployment durchsehen können. Sie zeigen die Art von Struktur, Feinschliff und Klarheit, die ich ohne separate Hosting-Setups fuer jedes Beispiel liefern kann.",
      cta: "Alle Beispiele ansehen",
    },
    seoPages: {
      eyebrow: "SEO-Landingpages",
      title: "Landingpages fuer Crawlability und Suchintention",
      description:
        "Diese Seiten nutzen echten Text, eindeutige Titel und crawlbare interne Links, damit Google die Service-Themen versteht, ohne JavaScript zum Interpretieren des Inhalts zu brauchen.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Häufige Fragen",
      description: "Kurze Antworten dazu, wie ich arbeite, was ich baue und wo ich aktuell den meisten Wert liefere.",
      items: [
        {
          question: "Welche Projekte uebernimmst du?",
          answer:
            "Aktuell fokussiere ich Business-Websites, Landingpages, leichte Custom-Tools und fruehe KI-Prototypen. Am besten passt ein Projekt, das eine solide erste Version mit Sorgfalt braucht, nicht ein ueberkompliziertes Enterprise-System.",
        },
        {
          question: "Arbeitest du schon mit KI oder lernst du noch?",
          answer:
            "Beides. Ich studiere aktuell Kuenstliche Intelligenz an der JKU Linz und baue parallel eigene Projekte mit Python, APIs, Prompt Engineering und GPT-basierten Tools. Ich präsentiere mich also nicht als Senior AI Architect, baue und teste aber aktiv praktische KI-Loesungen.",
        },
        {
          question: "Wie ist dein Hintergrund in der Webentwicklung?",
          answer:
            "Ich habe meine Webentwickler-Ausbildung in Wien mit Fokus auf PHP, Laravel, HTML, CSS, JavaScript und Projektarbeit abgeschlossen. Das gibt mir eine starke praktische Basis fuer Websites und strukturierte digitale Produkte.",
        },
        {
          question: "Wie arbeitest du normalerweise mit Kunden?",
          answer:
            "Ich bevorzuge einen klaren, direkten Prozess. Zuerst definieren wir das Ziel, dann baue ich die wesentliche Version in kleinen Schritten, damit Sie frueh Fortschritt sehen können. Mein Support-Hintergrund hat mich auf Klarheit, Zuverlässigkeit und laufende Kommunikation geprägt.",
        },
        {
          question: "Kannst du helfen, wenn die Idee noch nicht voll definiert ist?",
          answer:
            "Ja. Oft ist der erste Schritt, eine grobe Idee in einen realistischen Scope zu übersetzen. Ich helfe dabei, die erste Version zu formen, festzulegen was sofort rein soll und was warten kann.",
        },
        {
          question: "Bietest du auch Support nach dem Launch an?",
          answer:
            "Ja, fuer sinnvolle Folgearbeiten, Fixes und Verbesserungen. Ich arbeite selbst in einem technischen Support-Umfeld, daher bin ich mit Monitoring, Troubleshooting und Verbesserungen nach dem Start vertraut.",
        },
      ],
      cta: "Kontakt aufnehmen",
    },
    about: {
      eyebrow: "Ueber mich",
      title: "Von der Gastronomie zur Webentwicklung und KI",
      description: [
        "Ich bin nicht in Tech gestartet. Ich habe mehrere Jahre in der Gastronomie gearbeitet und dort Disziplin, Teamarbeit und Belastbarkeit gelernt.",
        "Danach habe ich meine Webentwickler-Ausbildung in Wien abgeschlossen und bin tiefer in die Softwarewelt eingestiegen. Heute arbeite ich im technischen Support, überwache Systeme, behebe Probleme und arbeite teamübergreifend.",
        "Neben dem Job studiere ich Kuenstliche Intelligenz an der JKU Linz und baue eigene KI-Projekte, darunter Chatbot- und GPT-Experimente. Diese Mischung aus Support, Entwicklung und Studium prägt meinen Ansatz: zuerst praktisch, immer lernbereit und auf echte Ergebnisse fokussiert.",
      ],
      stats: [
        { value: "PHP", label: "Webausbildung" },
        { value: "KI", label: "Studium laufend" },
        { value: "Ops", label: "Support-Erfahrung" },
      ],
    },
    finalCta: {
      title: "Brauchst du eine Website, einen KI-Prototyp oder ein nützliches internes Tool?",
      description:
        "Wenn du jemanden suchst, der Webentwicklung, angewandtes KI-Lernen und einen praxisnahen Support-Mindset verbindet, lass uns über dein Vorhaben sprechen.",
      cta: "Lass uns reden",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Lass uns ins Gespraech kommen",
      description:
        "Erzähl mir, was du vorhast, auch wenn die Idee noch grob ist. Dieses Formular sendet direkt an mein Gmail-Postfach ueber einen sicheren Server-Endpunkt.",
      labels: {
        email: "E-Mail",
        name: "Name",
        emailField: "E-Mail",
        subject: "Betreff",
        message: "Nachricht",
        send: "An Gmail senden",
        sending: "Wird gesendet...",
        successTitle: "Nachricht gesendet",
        successDescription: "Deine Nachricht wurde an mein Gmail-Postfach gesendet. Ich melde mich so bald wie moeglich.",
        another: "Noch eine Nachricht senden",
      },
      placeholders: {
        name: "Dein Name",
        email: "deine@email.com",
        subject: "Worum geht es?",
        message: "Erzaehl mir von deinem Projekt...",
      },
      socialLabel: "LinkedIn",
    },
    footer: {
      copyright: "Alle Rechte vorbehalten.",
      note:
        "Analytics wird erst nach Zustimmung geladen. Kontaktformulare werden ueber einen serverseitigen Gmail-SMTP-Endpunkt zugestellt.",
      links: [
        { label: "Beispiele", href: "/examples" },
        { label: "Ueber mich", href: "/about" },
        { label: "FAQ", href: "/faq" },
        { label: "Kontakt", href: "/contact" },
      ],
      legal: [
        { label: "Datenschutz & Cookies", href: "/privacy-policy" },
        { label: "Impressum", href: "/impressum" },
      ],
    },
  },
}

export function getHomeCopy(locale: Locale) {
  return locale === "de" ? normalizeGermanData(homeCopy[locale]) : homeCopy[locale]
}

const exampleIndexCopy: Record<Locale, ExampleIndexCopy> = {
  en: {
    eyebrow: "Portfolio pages",
    title: "Six client-ready pages I can build for your business",
    description:
      "These pages show the kinds of websites, tools, and workflows I can build for real clients. They are here to help you judge the quality of the work itself.",
    openLabel: "Open page",
    note: "Each card opens its own page inside this site.",
  },
  it: {
    eyebrow: "Pagine portfolio",
      title: "Esempi di pagine portfolio",
      description:
        "Mostrano stile, struttura e cura del dettaglio su siti web, strumenti AI, analisi dati e automazione dei workflow.",
    openLabel: "Apri pagina",
    note: "Ogni card apre la propria pagina all'interno di questo sito.",
  },
  de: {
    eyebrow: "Portfolioseiten",
    title: "Sechs kundenreife Seiten, die ich fuer dein Business bauen kann",
    description:
      "Diese Seiten zeigen, welche Websites, Tools und Workflows ich fuer echte Kunden bauen kann. Sie sollen die Qualitaet der Arbeit selbst zeigen, nicht die Technik im Hintergrund.",
    openLabel: "Seite oeffnen",
    note: "Jede Karte oeffnet ihre eigene Seite innerhalb dieser Website.",
  },
}

export function getExampleIndexCopy(locale: Locale) {
  return locale === "de" ? normalizeGermanData(exampleIndexCopy[locale]) : exampleIndexCopy[locale]
}

const legalCopy: Record<Locale, LegalPageCopy> = {
  en: {
    privacy: {
      title: "Privacy & Cookies",
      description: "Privacy notice, cookie details, and data processing information for this website.",
      eyebrow: "Privacy & Cookies",
      intro:
        "This page explains what happens when you browse the site, send a contact request, or accept analytics. It is written for the current static portfolio setup.",
      sections: [
        {
          title: "Controller",
          content: ["Mirko Messina", "Email: mirkomessina87@gmail.com", "Website: mirkomessina.dev"],
        },
        {
          title: "What this website collects",
          content: [
            "Contact form details such as your name, email address, subject, and message when you reach out through the website.",
            "Technical data that the hosting provider and analytics tooling may process, such as page views and basic usage information, if you accept analytics cookies.",
            "A cookie preference record so the site remembers whether you accepted or rejected optional analytics.",
          ],
        },
        {
          title: "How the contact form works",
          content: [
            "The main contact form sends your message to my Gmail inbox through a server-side API route.",
            "That means the message is processed by the website backend and then delivered to my mailbox.",
            "I use the message only to answer your enquiry, prepare a quote, or continue project communication.",
          ],
        },
        {
          title: "Cookies and analytics",
          content: [
            "Essential preference cookies are used to store your cookie choice. They are necessary for the consent flow and do not track you for marketing.",
            "Optional analytics only load after you actively accept analytics in the banner.",
            "If you reject analytics, the site does not load the analytics script.",
          ],
        },
        {
          title: "Your rights",
          content: [
            "Under the GDPR, you can ask for access, correction, deletion, restriction, portability, or objection where applicable.",
            "If you gave consent for analytics, you can withdraw it at any time by opening cookie settings.",
            "If you want data removed from my mailbox, contact me directly by email.",
          ],
        },
      ],
      noteTitle: "Important note",
      noteBody:
        "This is a practical website privacy template, not legal advice. Before launch, review the text against your exact setup, especially if you change analytics, contact providers, or hosting.",
    },
    impressum: {
      title: "Impressum",
      description: "Legal notice and imprint information for the website.",
      eyebrow: "Impressum",
      intro:
        "Austrian website legal notice duties depend on your legal form and whether the site is a commercial website. This page is a clean starter template, but your postal business address still needs to be added before publishing.",
      currentOwnerTitle: "Current website owner",
      launchTitle: "Fields to complete before launch",
      launchFields: [
        "Full legal name or business name",
        "Postal business address in Austria",
        "Legal form, if applicable",
        "VAT number, if applicable",
        "Trade or regulatory details, if applicable",
      ],
      whyTitle: "Why this is needed",
      whyBody:
        "WKO notes that Austrian website duties can come from several sources, including the UGB, GewO, the Mediengesetz, and the E-Commerce-Gesetz. For a commercial website, the ECG obligations apply; the exact imprint content depends on how you are registered and how you operate.",
      whyBody2:
        "If you want, I can turn this into a proper finalized imprint once you send me your legal name, business address, and business form.",
      whyLink: "the main site",
    },
  },
  it: {
    privacy: {
      title: "Privacy e Cookie",
      description: "Informativa privacy, dettagli sui cookie e informazioni sul trattamento dati per questo sito.",
      eyebrow: "Privacy e Cookie",
      intro:
        "Questa pagina spiega cosa succede quando navighi il sito, invii una richiesta di contatto o accetti l'analytics. E` scritta per l'attuale configurazione portfolio statico.",
      sections: [
        {
          title: "Titolare del trattamento",
          content: ["Mirko Messina", "Email: mirkomessina87@gmail.com", "Website: mirkomessina.dev"],
        },
        {
          title: "Cosa raccoglie questo sito",
          content: [
            "Dati del form di contatto come nome, indirizzo email, oggetto e messaggio quando scrivi attraverso il sito.",
            "Dati tecnici che l'hosting e gli strumenti analytics possono elaborare, come page view e informazioni base di utilizzo, se accetti i cookie analytics.",
            "Un record della preferenza cookie per ricordare se hai accettato o rifiutato gli analytics opzionali.",
          ],
        },
        {
          title: "Come funziona il form di contatto",
          content: [
            "Il form principale invia il messaggio alla mia casella Gmail tramite una route API lato server.",
            "Questo significa che il messaggio viene elaborato dal backend del sito e poi consegnato alla mia mailbox.",
            "Uso il messaggio solo per rispondere alla tua richiesta, preparare un preventivo o continuare la comunicazione sul progetto.",
          ],
        },
        {
          title: "Cookie e analytics",
          content: [
            "I cookie essenziali di preferenza servono a salvare la tua scelta sui cookie. Sono necessari per il flusso di consenso e non ti tracciano per marketing.",
            "Gli analytics opzionali si caricano solo dopo che li hai accettati attivamente nel banner.",
            "Se rifiuti gli analytics, lo script non viene caricato.",
          ],
        },
        {
          title: "I tuoi diritti",
          content: [
            "Ai sensi del GDPR puoi chiedere accesso, rettifica, cancellazione, limitazione, portabilita` o opposizione dove applicabile.",
            "Se hai dato consenso agli analytics, puoi revocarlo in qualsiasi momento aprendo le impostazioni cookie.",
            "Se vuoi che i dati vengano rimossi dalla mia mailbox, contattami direttamente via email.",
          ],
        },
      ],
      noteTitle: "Nota importante",
      noteBody:
        "Questa e` una template pratica per la privacy del sito, non una consulenza legale. Prima del lancio, verifica il testo rispetto alla tua configurazione esatta, soprattutto se cambi analytics, provider di contatto o hosting.",
    },
    impressum: {
      title: "Impressum",
      description: "Informazioni legali e notice del sito.",
      eyebrow: "Impressum",
      intro:
        "Gli obblighi di legal notice in Austria dipendono dalla forma giuridica e dal fatto che il sito sia commerciale. Questa pagina e` una base pulita, ma il tuo indirizzo postale aziendale va aggiunto prima della pubblicazione.",
      currentOwnerTitle: "Proprietario attuale del sito",
      launchTitle: "Campi da completare prima del lancio",
      launchFields: [
        "Nome legale completo o ragione sociale",
        "Indirizzo postale dell'attivita` in Austria",
        "Forma giuridica, se applicabile",
        "Partita IVA, se applicabile",
        "Dati commerciali o regolatori, se applicabili",
      ],
      whyTitle: "Perche` serve",
      whyBody:
        "La WKO indica che gli obblighi per i siti austriaci possono derivare da piu` fonti, tra cui UGB, GewO, Mediengesetz ed E-Commerce-Gesetz. Per un sito commerciale si applicano gli obblighi ECG; il contenuto esatto dell'impressum dipende dalla tua registrazione e dal tuo modello operativo.",
      whyBody2:
        "Se vuoi, posso trasformarlo in un impressum finale e corretto appena mi mandi nome legale, indirizzo business e forma giuridica.",
      whyLink: "sito principale",
    },
  },
  de: {
    privacy: {
      title: "Datenschutz & Cookies",
      description: "Datenschutzhinweise, Cookie-Details und Informationen zur Datenverarbeitung dieser Website.",
      eyebrow: "Datenschutz & Cookies",
      intro:
        "Diese Seite erklaert, was passiert, wenn du die Website besuchst, eine Kontaktanfrage sendest oder Analytics erlaubst. Sie ist fuer das aktuelle statische Portfolio-Setup geschrieben.",
      sections: [
        {
          title: "Verantwortlicher",
          content: ["Mirko Messina", "E-Mail: mirkomessina87@gmail.com", "Website: mirkomessina.dev"],
        },
        {
          title: "Was diese Website erfasst",
          content: [
            "Kontaktformulardaten wie Name, E-Mail-Adresse, Betreff und Nachricht, wenn du ueber die Website schreibst.",
            "Technische Daten, die Hosting-Provider und Analytics-Tools verarbeiten koennen, etwa Seitenaufrufe und grundlegende Nutzungsinformationen, wenn du Analytics-Cookies akzeptierst.",
            "Ein Cookie-Präferenz-Record, damit sich die Website merkt, ob du optionale Analytics akzeptiert oder abgelehnt hast.",
          ],
        },
        {
          title: "Wie das Kontaktformular funktioniert",
          content: [
            "Das Hauptformular sendet deine Nachricht ueber eine serverseitige API-Route in mein Gmail-Postfach.",
            "Das bedeutet, die Nachricht wird vom Website-Backend verarbeitet und dann an mein Postfach zugestellt.",
            "Ich nutze die Nachricht nur, um auf deine Anfrage zu antworten, ein Angebot vorzubereiten oder die Projektkommunikation fortzusetzen.",
          ],
        },
        {
          title: "Cookies und Analytics",
          content: [
            "Essentielle Preference-Cookies speichern deine Cookie-Wahl. Sie sind fuer den Consent-Flow notwendig und tracken nicht fuer Marketing.",
            "Optionale Analytics laden erst, nachdem du sie im Banner aktiv akzeptiert hast.",
            "Wenn du Analytics ablehnst, laedt das Skript nicht.",
          ],
        },
        {
          title: "Deine Rechte",
          content: [
            "Nach der DSGVO kannst du Zugang, Berichtigung, Loeschung, Einschraenkung, Uebertragbarkeit oder Widerspruch anfragen, soweit anwendbar.",
            "Wenn du Analytics zugestimmt hast, kannst du diese Zustimmung jederzeit in den Cookie-Einstellungen widerrufen.",
            "Wenn Daten aus meinem Postfach entfernt werden sollen, kontaktiere mich direkt per E-Mail.",
          ],
        },
      ],
      noteTitle: "Wichtiger Hinweis",
      noteBody:
        "Das ist eine praktische Datenschutzvorlage fuer die Website und keine Rechtsberatung. Pruefe den Text vor dem Launch gegen dein genaues Setup, vor allem wenn du Analytics, Kontakt-Provider oder Hosting aenderst.",
    },
    impressum: {
      title: "Impressum",
      description: "Impressums- und rechtliche Hinweise fuer die Website.",
      eyebrow: "Impressum",
      intro:
        "Die Impressumspflichten in Oesterreich haengen von der Rechtsform und davon ab, ob die Website geschäftlich ist. Diese Seite ist eine saubere Startvorlage, aber deine postalische Geschäftsadresse muss vor der Veröffentlichung ergänzt werden.",
      currentOwnerTitle: "Aktueller Website-Inhaber",
      launchTitle: "Vor dem Launch auszufuellende Felder",
      launchFields: [
        "Vollstaendiger rechtlicher Name oder Firmenname",
        "Postanschrift des Unternehmens in Oesterreich",
        "Rechtsform, falls zutreffend",
        "UID-Nummer, falls zutreffend",
        "Gewerbe- oder Regulierungsangaben, falls zutreffend",
      ],
      whyTitle: "Warum das noetig ist",
      whyBody:
        "Die WKO weist darauf hin, dass oesterreichische Website-Pflichten aus mehreren Quellen kommen koennen, darunter UGB, GewO, Mediengesetz und E-Commerce-Gesetz. Fuer kommerzielle Websites gelten die ECG-Pflichten; der genaue Inhalt des Impressums haengt davon ab, wie du registriert bist und wie du arbeitest.",
      whyBody2:
        "Wenn du moechtest, kann ich daraus ein korrektes finales Impressum machen, sobald du mir deinen rechtlichen Namen, die Geschaeftsadresse und die Rechtsform schickst.",
      whyLink: "Hauptseite",
    },
  },
}

export function getLegalCopy(locale: Locale) {
  return locale === "de" ? normalizeGermanData(legalCopy[locale]) : legalCopy[locale]
}

export const localeLabels: Record<Locale, string> = {
  en: "English",
  it: "Italiano",
  de: "Deutsch",
}

