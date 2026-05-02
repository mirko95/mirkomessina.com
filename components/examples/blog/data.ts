export type BlogPost = {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  authorRole: string
  date: string
  readTime: string
  category: "AI" | "Startups" | "Engineering" | "Design"
  image: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Silent Shift: Why AI-First Design is the New Standard",
    excerpt:
      "Infrastructure is catching up to imagination. We explore how the next generation of digital products will be built from the foundation of intelligence.",
    content: `
      <p>The era of the AI wrapper is coming to a close. As we move deeper into the decade, the industry is witnessing a shift from bolt-on intelligence to generative foundations.</p>
      <h2>The Foundation of Intelligence</h2>
      <p>For the past thirty years, software has been built around deterministic loops. You click A, B happens. AI-first design changes the interface into a collaboration layer between intent and execution.</p>
      <blockquote>The best interface is the one that disappears. In an AI-first world, the UI serves as a subtle bridge between human intent and machine execution.</blockquote>
      <h2>Rethinking the Grid</h2>
      <p>When intelligence is built into the core, the grid itself becomes dynamic. Contextual interfaces can change based on the work at hand while still preserving visible user control.</p>
      <ul><li><strong>Intent-Based Navigation:</strong> users state a goal, not only a path.</li><li><strong>Graceful Degradation:</strong> uncertain AI falls back to manual controls.</li><li><strong>Transparent Agency:</strong> systems show why a decision was made.</li></ul>
    `,
    author: "Elena Soroka",
    authorRole: "Principal Design Architect",
    date: "April 24, 2024",
    readTime: "8 min read",
    category: "AI",
    image: "/images/ai-first-design-hero.png",
    featured: true,
  },
  {
    id: "2",
    title: "The Architectural Logic of Modern Startups",
    excerpt:
      "Building for scale is no longer just a technical challenge. It is a cultural one. We dive into the systems that define high-output teams.",
    content: "<p>Modern startups are shaped by the operating systems around them: how decisions are made, how context travels, and how teams keep momentum without adding noise.</p>",
    author: "Marcus Chen",
    authorRole: "Founder, Signal",
    date: "April 20, 2024",
    readTime: "6 min read",
    category: "Startups",
    image: "/images/modern-startups.png",
  },
  {
    id: "3",
    title: "Minimalism in the Age of Abundance",
    excerpt:
      "As technology consumes more of our attention, the value of less becomes exponential. A study on digital minimalism.",
    content: "<p>Minimalism is not a lack of interface. It is the discipline of deciding what deserves to remain visible when everything can compete for attention.</p>",
    author: "Sarah Jenkins",
    authorRole: "Tech Ethicist",
    date: "April 18, 2024",
    readTime: "12 min read",
    category: "Design",
    image: "/images/digital-minimalism.png",
  },
  {
    id: "4",
    title: "Engineering the Future of Collaborative Work",
    excerpt:
      "The tools we use define the teams we build. Insights into the infrastructure of decentralized engineering organizations.",
    content: "<p>Collaboration infrastructure is now a product surface. Strong engineering teams design handoffs, review flows, and shared state as carefully as they design the application itself.</p>",
    author: "David Volek",
    authorRole: "CTO at Nexus",
    date: "April 15, 2024",
    readTime: "10 min read",
    category: "Engineering",
    image: "/images/collaborative-engineering.png",
  },
  {
    id: "5",
    title: "Designing Trust Into AI Product Decisions",
    excerpt:
      "Trust is not a prompt layer. It is a system of cues, constraints, and recovery paths that make intelligent features understandable.",
    content: "<p>AI products earn trust when they make uncertainty visible. A polished answer is useful only when the user can understand its source, confidence, and limits.</p><h2>Confidence as Interface</h2><p>Teams should design for review, correction, and escalation from the start.</p>",
    author: "Nadia Vale",
    authorRole: "Product Strategy Lead",
    date: "April 12, 2024",
    readTime: "7 min read",
    category: "AI",
    image: "/images/trust-ai-products.png",
  },
  {
    id: "6",
    title: "From Prompts to Workflows",
    excerpt:
      "The next wave of AI products will be measured less by clever prompts and more by durable workflow design.",
    content: "<p>Prompt quality still matters, but production value increasingly comes from the workflow around the model. Inputs, review states, permissions, and handoffs define whether AI feels reliable.</p>",
    author: "Iris Kamal",
    authorRole: "Applied Systems Researcher",
    date: "April 10, 2024",
    readTime: "9 min read",
    category: "AI",
    image: "/images/prompts-to-workflows.png",
  },
]

const localizedPosts: Record<"it" | "de", Record<string, Partial<BlogPost>>> = {
  it: {
    "1": {
      title: "Il cambiamento silenzioso: perche` il design AI-first e` il nuovo standard",
      excerpt:
        "L'infrastruttura sta raggiungendo l'immaginazione. Esploriamo come la prossima generazione di prodotti digitali nascera` da fondamenta intelligenti.",
      readTime: "8 min di lettura",
      content:
        "<p>L'era degli AI wrapper sta finendo. Il settore si sta spostando da funzioni intelligenti aggiunte in superficie a fondamenta realmente generative.</p><h2>La base dell'intelligenza</h2><p>Per trent'anni il software e` stato costruito intorno a cicli deterministici. Clicchi A, succede B. Il design AI-first trasforma l'interfaccia in uno spazio di collaborazione tra intenzione ed esecuzione.</p>",
    },
    "2": {
      title: "La logica architettonica delle startup moderne",
      excerpt: "Costruire per scalare non e` piu` solo una sfida tecnica. E` anche culturale.",
      readTime: "6 min di lettura",
      content: "<p>Le startup moderne sono modellate dai sistemi operativi che usano: decisioni, contesto condiviso e ritmo di esecuzione.</p>",
    },
    "3": {
      title: "Minimalismo nell'era dell'abbondanza",
      excerpt: "Quando la tecnologia consuma piu` attenzione, il valore del meno cresce in modo esponenziale.",
      readTime: "12 min di lettura",
      content: "<p>Il minimalismo non e` assenza di interfaccia. E` la disciplina di decidere cosa merita davvero di restare visibile.</p>",
    },
    "4": {
      title: "Progettare il futuro del lavoro collaborativo",
      excerpt: "Gli strumenti che usiamo definiscono i team che costruiamo.",
      readTime: "10 min di lettura",
      content: "<p>L'infrastruttura collaborativa e` ormai una superficie di prodotto: handoff, review e stato condiviso vanno progettati con cura.</p>",
    },
    "5": {
      title: "Disegnare fiducia nelle decisioni dei prodotti AI",
      excerpt: "La fiducia non e` uno strato di prompt, ma un sistema di segnali, vincoli e percorsi di recupero.",
      readTime: "7 min di lettura",
      content: "<p>I prodotti AI guadagnano fiducia quando rendono visibile l'incertezza: fonte, confidenza e limiti devono essere comprensibili.</p>",
    },
    "6": {
      title: "Dai prompt ai workflow",
      excerpt: "La prossima ondata di prodotti AI sara` misurata meno dai prompt e piu` dal design dei workflow.",
      readTime: "9 min di lettura",
      content: "<p>La qualita` dei prompt conta ancora, ma il valore in produzione nasce sempre piu` dal workflow intorno al modello.</p>",
    },
  },
  de: {
    "1": {
      title: "Der stille Wandel: Warum AI-first Design der neue Standard ist",
      excerpt:
        "Die Infrastruktur holt die Vorstellungskraft ein. Wir zeigen, wie die naechste Generation digitaler Produkte auf Intelligenz aufgebaut wird.",
      readTime: "8 Min. Lesezeit",
      content:
        "<p>Die Zeit der AI-Wrapper geht zu Ende. Die Branche bewegt sich von aufgesetzter Intelligenz hin zu generativen Grundlagen.</p><h2>Die Grundlage der Intelligenz</h2><p>Dreissig Jahre lang wurde Software um deterministische Schleifen gebaut. Klick A, Ergebnis B. AI-first Design macht die Oberflaeche zu einer Zusammenarbeit zwischen Absicht und Ausfuehrung.</p>",
    },
    "2": {
      title: "Die architektonische Logik moderner Startups",
      excerpt: "Skalierung ist nicht mehr nur eine technische, sondern auch eine kulturelle Herausforderung.",
      readTime: "6 Min. Lesezeit",
      content: "<p>Moderne Startups werden durch ihre Betriebssysteme gepraegt: Entscheidungen, Kontextfluss und Ausfuehrungsrhythmus.</p>",
    },
    "3": {
      title: "Minimalismus im Zeitalter des Ueberflusses",
      excerpt: "Je mehr Technologie Aufmerksamkeit beansprucht, desto wertvoller wird bewusste Reduktion.",
      readTime: "12 Min. Lesezeit",
      content: "<p>Minimalismus ist kein Mangel an Interface. Er ist die Disziplin zu entscheiden, was sichtbar bleiben darf.</p>",
    },
    "4": {
      title: "Die Zukunft kollaborativer Arbeit entwickeln",
      excerpt: "Die Werkzeuge, die wir nutzen, definieren die Teams, die wir bauen.",
      readTime: "10 Min. Lesezeit",
      content: "<p>Kollaborationsinfrastruktur ist heute eine Produktoberflaeche. Handoffs, Reviews und gemeinsamer Zustand muessen gestaltet werden.</p>",
    },
    "5": {
      title: "Vertrauen in AI-Produktentscheidungen gestalten",
      excerpt: "Vertrauen ist kein Prompt-Layer, sondern ein System aus Signalen, Grenzen und Wiederherstellungspfaden.",
      readTime: "7 Min. Lesezeit",
      content: "<p>AI-Produkte verdienen Vertrauen, wenn sie Unsicherheit sichtbar machen: Quelle, Konfidenz und Grenzen muessen klar sein.</p>",
    },
    "6": {
      title: "Von Prompts zu Workflows",
      excerpt: "Die naechste Welle von AI-Produkten wird weniger an cleveren Prompts und mehr an robusten Workflows gemessen.",
      readTime: "9 Min. Lesezeit",
      content: "<p>Promptqualitaet bleibt wichtig, aber produktiver Wert entsteht zunehmend aus dem Workflow um das Modell.</p>",
    },
  },
}

export function getBlogPosts(locale: "en" | "it" | "de") {
  const localized = locale === "en" ? undefined : localizedPosts[locale]
  if (!localized) return blogPosts
  return blogPosts.map((post) => ({ ...post, ...(localized[post.id] ?? {}) }))
}
