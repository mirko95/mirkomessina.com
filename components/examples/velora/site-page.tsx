"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import {
  Armchair,
  ArrowRight,
  Building2,
  ChevronRight,
  Facebook,
  Home,
  Instagram,
  Layout,
  Linkedin,
  MapPin,
  Menu,
  Star,
  X,
} from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { ExampleLocaleSwitcher } from "@/components/examples/example-locale-switcher"

const projects = [
  {
    title: "The Belvedere Villa",
    location: "Como, Italy",
    description: "A seamless blend of classical Italian architecture and modern minimalist interior design.",
    image: "/images/belvedere-villa.jpg",
  },
  {
    title: "L'Hexagone Suite",
    location: "Paris, France",
    description: "A boutique hotel suite designed to evoke luxury through texture, light, and symmetry.",
    image: "/images/hexagone-suite.jpg",
  },
  {
    title: "Urban Sanctuary",
    location: "London, UK",
    description: "A high-end apartment project focused on neutral palettes and artisanal bespoke furniture.",
    image: "/images/urban-sanctuary.jpg",
  },
]

const services = [
  {
    title: "Residential Interior Design",
    icon: Home,
    desc: "Bespoke living environments that reflect your personality and elevate your daily rituals.",
  },
  {
    title: "Boutique Hotel Design",
    icon: Building2,
    desc: "Creating immersive hospitality experiences through cinematic lighting and luxury materiality.",
  },
  {
    title: "Space Styling",
    icon: Layout,
    desc: "Final layer detailing that brings a room to life with curated art, textiles, and artifacts.",
  },
  {
    title: "Furniture Selection",
    icon: Armchair,
    desc: "Sourcing rare artisanal pieces and custom-made furniture from across the globe.",
  },
]

const processSteps = [
  { number: "01", title: "Consultation", desc: "A deep dive into your lifestyle, aesthetic preferences, and vision for the project." },
  { number: "02", title: "Concept", desc: "Detailed moodboards, spatial layouts, and sensory palettes that define the narrative." },
  { number: "03", title: "Design", desc: "Bespoke technical drawings, 3D visualizations, and artisanal material selection." },
  { number: "04", title: "Delivery", desc: "Seamless project management and styling for a ready-to-live luxurious home." },
]

const feedback = [
  {
    name: "Eleanor Sterling",
    role: "Estate Homeowner",
    text: "Velora transformed our chaotic penthouse into a serene sanctuary. Their attention to minor details is what truly sets them apart.",
  },
  {
    name: "Marcus Dupont",
    role: "Hotel Group Director",
    text: "Cinema for the eyes. Velora Interiors brought a level of sophistication to our lobby that increased our occupancy immediately.",
  },
  {
    name: "Sienna Rossi",
    role: "Architectural Critic",
    text: "Rarely do you find a studio that understands the dialogue between shadow and luxury as well as Velora does.",
  },
]

const veloraCopy = {
  en: {
    nav: ["Projects", "Services", "About", "Contact"],
    inquire: "Inquire",
    heroKicker: "Established 2012 - London",
    heroTitle: "Designing spaces that feel calm, refined, and unforgettable.",
    heroText: "Velora Interiors creates elegant homes, boutique hotels, and premium commercial spaces with timeless design and modern detail.",
    book: "Book a Consultation",
    viewProjects: "View Projects",
    curation: "Curation - 01",
    selected: "Selected Masterpieces",
    viewGallery: "View All Gallery",
    expertise: "Expertise - 02",
    excellence: "Design Excellence",
    learn: "Learn More",
    philosophy: "Philosophy - 03",
    legacy: "Crafting Legacy Interiors",
    about1: "Founded by Velora Vance, our studio operates at the intersection of architecture, art, and high-fashion. We believe that a true luxury home is not defined by excess, but by the perfect orchestration of space, light, and materiality.",
    about2: "Every project is a unique narrative. We collaborate with master artisans and heritage workshops across Europe to ensure that every texture tells a story of unparalleled quality.",
    years: "Years Experience",
    global: "Global Projects",
    discover: "Discover our heritage",
    method: "Method - 04",
    journey: "The Velora Journey",
    inquiry: "Inquiry - 05",
    ready: "Ready to transform your space?",
    contactText: "We take on a limited number of projects each year to ensure uncompromising excellence. Contact us to begin your journey.",
    start: "Start Your Project",
    rights: "All rights reserved.",
    legal: ["Privacy Policy", "Terms", "Cookies"],
  },
  it: {
    nav: ["Progetti", "Servizi", "Studio", "Contatti"],
    inquire: "Richiedi",
    heroKicker: "Dal 2012 - Londra",
    heroTitle: "Progettiamo spazi calmi, raffinati e indimenticabili.",
    heroText: "Velora Interiors crea case eleganti, boutique hotel e spazi commerciali premium con design senza tempo e dettagli moderni.",
    book: "Prenota una consulenza",
    viewProjects: "Vedi progetti",
    curation: "Curatela - 01",
    selected: "Capolavori selezionati",
    viewGallery: "Vedi tutta la gallery",
    expertise: "Expertise - 02",
    excellence: "Eccellenza nel design",
    learn: "Scopri di piu`",
    philosophy: "Filosofia - 03",
    legacy: "Interni pensati per durare",
    about1: "Fondato da Velora Vance, lo studio lavora all'incrocio tra architettura, arte e alta moda. Crediamo che una casa luxury non sia definita dall'eccesso, ma dall'orchestrazione perfetta di spazio, luce e materiali.",
    about2: "Ogni progetto e` una narrazione unica. Collaboriamo con maestri artigiani e atelier storici in Europa per dare qualita` e significato a ogni texture.",
    years: "Anni di esperienza",
    global: "Progetti globali",
    discover: "Scopri la nostra eredita`",
    method: "Metodo - 04",
    journey: "Il percorso Velora",
    inquiry: "Richiesta - 05",
    ready: "Pronto a trasformare il tuo spazio?",
    contactText: "Accettiamo un numero limitato di progetti ogni anno per garantire eccellenza assoluta. Contattaci per iniziare.",
    start: "Avvia il progetto",
    rights: "Tutti i diritti riservati.",
    legal: ["Privacy", "Termini", "Cookie"],
  },
  de: {
    nav: ["Projekte", "Services", "Studio", "Kontakt"],
    inquire: "Anfragen",
    heroKicker: "Seit 2012 - London",
    heroTitle: "Wir gestalten Raeume, die ruhig, raffiniert und unvergesslich wirken.",
    heroText: "Velora Interiors schafft elegante Wohnraeume, Boutique-Hotels und Premium-Gewerbeflaechen mit zeitlosem Design und modernen Details.",
    book: "Beratung buchen",
    viewProjects: "Projekte ansehen",
    curation: "Kuration - 01",
    selected: "Ausgewaehlte Meisterwerke",
    viewGallery: "Ganze Galerie ansehen",
    expertise: "Expertise - 02",
    excellence: "Design-Exzellenz",
    learn: "Mehr erfahren",
    philosophy: "Philosophie - 03",
    legacy: "Interiors mit Bestand gestalten",
    about1: "Gegruendet von Velora Vance arbeitet unser Studio an der Schnittstelle von Architektur, Kunst und High Fashion. Wahrer Luxus entsteht nicht durch Ueberfluss, sondern durch die praezise Orchestrierung von Raum, Licht und Material.",
    about2: "Jedes Projekt ist eine eigene Erzaehlung. Wir arbeiten mit Meisterhandwerkern und Traditionswerkstaetten in Europa, damit jede Textur von Qualitaet erzaehlt.",
    years: "Jahre Erfahrung",
    global: "Globale Projekte",
    discover: "Unsere Herkunft entdecken",
    method: "Methode - 04",
    journey: "Die Velora Journey",
    inquiry: "Anfrage - 05",
    ready: "Bereit, deinen Raum zu verwandeln?",
    contactText: "Wir uebernehmen jedes Jahr nur wenige Projekte, um kompromisslose Exzellenz zu sichern. Kontaktiere uns, um zu starten.",
    start: "Projekt starten",
    rights: "Alle Rechte vorbehalten.",
    legal: ["Datenschutz", "Bedingungen", "Cookies"],
  },
} as const

function getVeloraCopy(locale: Locale) {
  return veloraCopy[locale] ?? veloraCopy.en
}

const localizedVeloraData: Record<"it" | "de", {
  projects: typeof projects
  services: typeof services
  processSteps: typeof processSteps
  feedback: typeof feedback
}> = {
  it: {
    projects: [
      { ...projects[0], description: "Un dialogo tra architettura italiana classica e interni minimalisti contemporanei." },
      { ...projects[1], description: "Una suite boutique hotel pensata per evocare lusso attraverso texture, luce e simmetria." },
      { ...projects[2], description: "Un appartamento premium costruito su palette neutre e arredi artigianali su misura." },
    ],
    services: [
      { ...services[0], title: "Interior design residenziale", desc: "Ambienti abitativi su misura che riflettono personalita` e rituali quotidiani." },
      { ...services[1], title: "Design boutique hotel", desc: "Esperienze hospitality immersive attraverso luce cinematografica e materiali luxury." },
      { ...services[2], title: "Styling degli spazi", desc: "Dettagli finali con arte, tessili e oggetti curati." },
      { ...services[3], title: "Selezione arredi", desc: "Ricerca di pezzi artigianali rari e mobili custom da atelier internazionali." },
    ],
    processSteps: [
      { number: "01", title: "Consulenza", desc: "Analisi profonda dello stile di vita, delle preferenze estetiche e della visione." },
      { number: "02", title: "Concept", desc: "Moodboard, layout spaziali e palette sensoriali che definiscono la narrazione." },
      { number: "03", title: "Design", desc: "Disegni tecnici, visualizzazioni 3D e selezione materiali artigianali." },
      { number: "04", title: "Consegna", desc: "Project management e styling per una casa luxury pronta da vivere." },
    ],
    feedback: [
      { ...feedback[0], role: "Proprietaria", text: "Velora ha trasformato il nostro attico caotico in un santuario sereno. L'attenzione ai dettagli li distingue davvero." },
      { ...feedback[1], role: "Direttore hotel", text: "Cinema per gli occhi. Velora ha portato nella lobby un livello di sofisticazione immediatamente percepibile." },
      { ...feedback[2], role: "Critica architettonica", text: "Raramente si trova uno studio che comprenda cosi` bene il dialogo tra ombra e lusso." },
    ],
  },
  de: {
    projects: [
      { ...projects[0], description: "Eine Verbindung aus klassischer italienischer Architektur und modernem minimalistischem Interior Design." },
      { ...projects[1], description: "Eine Boutique-Hotel-Suite, die Luxus durch Textur, Licht und Symmetrie vermittelt." },
      { ...projects[2], description: "Ein Premium-Apartment mit neutralen Paletten und handwerklichen Massmoebeln." },
    ],
    services: [
      { ...services[0], title: "Residential Interior Design", desc: "Massgeschneiderte Wohnwelten, die Persoenlichkeit und taegliche Rituale erhoehen." },
      { ...services[1], title: "Boutique-Hotel-Design", desc: "Immersive Hospitality-Erlebnisse durch filmisches Licht und luxurioese Materialien." },
      { ...services[2], title: "Raumstyling", desc: "Die finale Ebene aus Kunst, Textilien und kuratierten Objekten." },
      { ...services[3], title: "Moebelauswahl", desc: "Beschaffung seltener handwerklicher Stuecke und individueller Moebel aus aller Welt." },
    ],
    processSteps: [
      { number: "01", title: "Beratung", desc: "Ein tiefer Blick auf Lebensstil, aesthetische Vorlieben und Projektvision." },
      { number: "02", title: "Konzept", desc: "Moodboards, Raumlayouts und sensorische Paletten definieren die Geschichte." },
      { number: "03", title: "Design", desc: "Technische Zeichnungen, 3D-Visualisierungen und handwerkliche Materialauswahl." },
      { number: "04", title: "Uebergabe", desc: "Nahtloses Projektmanagement und Styling fuer ein bezugsfertiges Luxushaus." },
    ],
    feedback: [
      { ...feedback[0], role: "Eigentuemerin", text: "Velora hat unser chaotisches Penthouse in ein ruhiges Refugium verwandelt. Die Detailgenauigkeit macht den Unterschied." },
      { ...feedback[1], role: "Hoteldirektor", text: "Kino fuer die Augen. Velora brachte eine neue Ebene von Sophistication in unsere Lobby." },
      { ...feedback[2], role: "Architekturkritikerin", text: "Selten findet man ein Studio, das den Dialog zwischen Schatten und Luxus so gut versteht." },
    ],
  },
}

function getVeloraData(locale: Locale) {
  return locale === "en" ? { projects, services, processSteps, feedback } : localizedVeloraData[locale]
}

function Navbar({ copy }: { copy: ReturnType<typeof getVeloraCopy> }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${isScrolled ? "border-b border-black/5 bg-[#f8f5f0]/80 py-4 backdrop-blur-lg" : "bg-transparent py-8"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`font-serif text-2xl tracking-widest ${isScrolled ? "text-[#121212]" : "text-white"}`}
          aria-label="Go to homepage top"
        >
          VELORA
        </motion.button>

        <div className="hidden items-center space-x-12 md:flex">
          {copy.nav.map((item, index) => (
            <motion.a
              key={item}
              href={["#projects", "#services", "#about", "#contact"][index]}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`text-sm uppercase tracking-widest transition-colors ${isScrolled ? "text-[#121212]/70 hover:text-[#c5a67c]" : "text-white/80 hover:text-white"}`}
            >
              {item}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`border px-6 py-2 text-xs uppercase tracking-widest transition-all ${isScrolled ? "border-[#c5a67c] text-[#c5a67c] hover:bg-[#c5a67c] hover:text-white" : "border-white/30 text-white hover:bg-white hover:text-[#121212]"}`}
          >
            {copy.inquire}
          </motion.a>
        </div>

        <button type="button" className="md:hidden" onClick={() => setMobileMenuOpen((value) => !value)} aria-label="Toggle navigation">
          {mobileMenuOpen ? <X className={isScrolled ? "text-[#121212]" : "text-white"} /> : <Menu className={isScrolled ? "text-[#121212]" : "text-white"} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-b border-black/5 bg-[#f8f5f0] md:hidden">
            <div className="flex flex-col space-y-6 p-8">
              {copy.nav.map((item, index) => (
                <a key={item} href={["#projects", "#services", "#about", "#contact"][index]} onClick={() => setMobileMenuOpen(false)} className="font-serif text-lg tracking-wide text-[#121212]">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function Hero({ copy }: { copy: ReturnType<typeof getVeloraCopy> }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 200])

  return (
    <section className="relative h-screen overflow-hidden bg-[#121212]">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img src="/images/hero-interior.jpg" alt="Luxury interior" className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#f8f5f0]/10" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-[#c5a67c]">
          {copy.heroKicker}
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="mb-8 max-w-4xl font-serif text-5xl leading-[1.1] text-white md:text-7xl lg:text-8xl">
          {copy.heroTitle}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }} className="mb-12 max-w-2xl text-lg font-light leading-relaxed text-white/70 md:text-xl">
          {copy.heroText}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }} className="flex flex-col gap-6 sm:flex-row">
          <a href="#contact" className="bg-[#c5a67c] px-10 py-5 text-xs font-semibold uppercase tracking-widest text-white shadow-xl transition-all duration-500 hover:bg-white hover:text-[#121212]">
            {copy.book}
          </a>
          <a href="#projects" className="border border-white/40 px-10 py-5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-500 hover:bg-white hover:text-[#121212]">
            {copy.viewProjects}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ title, location, description, image, index }: (typeof projects)[number] & { index: number }) {
  return (
    <motion.article initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.2 }} className="group relative flex flex-col space-y-6">
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img src={image} alt={title} whileHover={{ scale: 1.05 }} transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="font-serif text-3xl text-[#121212]">{title}</h3>
            <div className="mt-2 flex items-center text-xs uppercase tracking-widest text-[#c5a67c]">
              <MapPin className="mr-2 h-3 w-3" />
              {location}
            </div>
          </div>
          <div className="rounded-full border border-black/10 p-3 transition-all group-hover:bg-[#121212] group-hover:text-white">
            <ChevronRight className="h-5 w-5" />
          </div>
        </div>
        <p className="max-w-xs pt-2 text-sm leading-relaxed text-[#121212]/60">{description}</p>
      </div>
    </motion.article>
  )
}

export function FlowForgePage({ locale = "en" }: { locale?: Locale }) {
  const copy = getVeloraCopy(locale)
  const data = getVeloraData(locale)
  return (
    <main className="relative min-h-screen bg-[#f8f5f0] font-sans text-[#121212] selection:bg-[#c5a67c] selection:text-white">
      <ExampleLocaleSwitcher locale={locale} path="/velora" />
      <Navbar copy={copy} />
      <Hero copy={copy} />

      <section id="projects" className="overflow-hidden bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-xs font-medium uppercase tracking-[0.3em] text-[#c5a67c]">
                {copy.curation}
              </motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mt-4 font-serif text-5xl text-[#121212] md:text-6xl">
                {copy.selected}
              </motion.h2>
            </div>
            <a href="#projects" className="hidden items-center space-x-3 text-[#121212]/60 transition-colors hover:text-[#121212] md:flex">
              <span className="text-xs uppercase tracking-widest">{copy.viewGallery}</span>
              <div className="h-px w-10 bg-[#121212]/30 transition-all group-hover:w-16" />
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            {data.projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative bg-[#f8f5f0] px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-xs font-medium uppercase tracking-[0.3em] text-[#c5a67c]">
              {copy.expertise}
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mt-4 font-serif text-5xl text-[#121212] md:text-6xl">
              {copy.excellence}
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {data.services.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.article key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group flex h-full flex-col border border-black/[0.03] bg-white p-10 transition-colors duration-500 hover:border-[#c5a67c]">
                  <div className="mb-8 text-[#c5a67c] transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-8 w-8" strokeWidth={1} />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl text-[#121212]">{item.title}</h3>
                  <p className="mb-8 flex-grow text-sm leading-relaxed text-[#121212]/50">{item.desc}</p>
                  <button className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#c5a67c] transition-all group-hover:space-x-4">
                    <span>{copy.learn}</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-24 lg:grid-cols-2">
          <div className="relative">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative z-10 aspect-[3/4] overflow-hidden">
              <img src="/images/design-philosophy.jpg" alt="Design philosophy" className="h-full w-full object-cover" />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 hidden h-64 w-64 bg-[#f8f5f0] lg:block" />
            <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="absolute -left-20 top-1/2 hidden h-40 w-40 bg-[#c5a67c]/10 backdrop-blur-xl lg:block" />
          </div>
          <div className="flex flex-col space-y-10">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#c5a67c]">{copy.philosophy}</span>
              <h2 className="mt-4 font-serif text-5xl text-[#121212] md:text-6xl">{copy.legacy}</h2>
            </div>
            <div className="space-y-6 text-lg font-light leading-relaxed text-[#121212]/70">
              <p>{copy.about1}</p>
              <p>{copy.about2}</p>
            </div>
            <div className="grid grid-cols-2 gap-12 pt-6">
              <div>
                <div className="font-serif text-3xl text-[#121212]">12+</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-[#c5a67c]">{copy.years}</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-[#121212]">150+</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-[#c5a67c]">{copy.global}</div>
              </div>
            </div>
            <button className="group flex items-center space-x-4 pt-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#121212]/10 transition-all duration-500 group-hover:bg-[#121212] group-hover:text-white">
                <ChevronRight className="h-5 w-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#121212]">{copy.discover}</span>
            </button>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#121212] px-6 py-32 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 flex flex-col items-start justify-between md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#c5a67c]">{copy.method}</span>
              <h2 className="mt-4 font-serif text-5xl md:text-6xl">{copy.journey}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-px lg:bg-white/10">
            {data.processSteps.map((step, index) => (
              <motion.article key={step.number} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }} className="flex flex-col space-y-8 lg:bg-[#121212] p-10">
                <div className="font-serif text-5xl text-[#c5a67c]/30">{step.number}</div>
                <h3 className="font-serif text-2xl">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{step.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5f0] px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center space-x-1">
            {[1, 2, 3, 4, 5].map((item) => (
              <Star key={item} className="h-4 w-4 fill-[#c5a67c] text-[#c5a67c]" />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {data.feedback.map((item) => (
              <div key={item.name} className="flex flex-col items-center">
                <p className="mb-8 font-serif text-xl italic leading-relaxed text-[#121212]">{item.text}</p>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#121212]">{item.name}</h4>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-[#c5a67c]">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="relative overflow-hidden bg-[#121212] px-6 pb-12 pt-32 text-white">
        <div className="absolute right-0 top-0 hidden h-full w-1/2 origin-top-right -skew-x-12 bg-white/[0.01] lg:block" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-32 grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
            <div className="flex flex-col space-y-12">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#c5a67c]">{copy.inquiry}</span>
                <h2 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">{copy.ready}</h2>
              </div>
              <p className="max-w-lg text-xl font-light leading-relaxed text-white/60">{copy.contactText}</p>
              <div className="flex flex-col gap-6 pt-4 sm:flex-row">
                <a href="mailto:studio@velora.example" className="bg-white px-12 py-6 text-xs font-bold uppercase tracking-widest text-[#121212] shadow-2xl transition-all duration-500 hover:bg-[#c5a67c] hover:text-white">
                  {copy.start}
                </a>
                <div className="flex items-center space-x-8 sm:ml-8">
                  {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                    <a key={index} href="#" className="text-white/40 transition-colors hover:text-white" aria-label="Social link">
                      <Icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative flex aspect-square items-center justify-center opacity-30 lg:opacity-100">
              <div className="h-full w-full animate-[spin_60s_linear_infinite] rounded-full border border-white/5 p-20">
                <div className="h-full w-full rounded-full border border-white/10 p-20">
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-[#c5a67c]/20">
                    <div className="font-serif text-8xl italic text-white">V</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between space-y-4 border-t border-white/10 pt-12 text-[10px] uppercase tracking-widest text-white/30 md:flex-row md:space-y-0">
            <div>(c) 2026 Velora Interiors. {copy.rights}</div>
            <div className="flex space-x-8 md:space-x-12">
              {copy.legal.map((item) => (
                <a key={item} href="#" className="transition-colors hover:text-white">{item}</a>
              ))}
            </div>
            <div>London / Milan / New York</div>
          </div>
        </div>
      </footer>
    </main>
  )
}
