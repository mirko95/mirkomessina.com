"use client"

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion"
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Droplets,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Phone,
  Quote,
  Shield,
  ShieldCheck,
  Sparkles,
  Syringe,
  UserCheck,
  Users,
  X,
  Zap,
} from "lucide-react"
import { type FormEvent, useEffect, useState } from "react"
import { ExampleLocaleSwitcher } from "@/components/examples/example-locale-switcher"
import type { Locale } from "@/lib/i18n"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Treatments", href: "#treatments" },
  { name: "Pricing", href: "#pricing" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

const clinicCopy = {
  en: {
    nav: ["Home", "About", "Treatments", "Pricing", "Gallery", "FAQ", "Contact"],
    bookNow: "Book Now",
    bookConsultation: "Book a Consultation",
    eyebrow: "Premium Medical Aesthetics",
    title: <>Reveal Your <br /><span className="font-normal italic">Authentic</span> Radiance</>,
    heroText: "Experience the pinnacle of non-invasive aesthetic excellence. Bespoke treatments designed to enhance your natural beauty with surgical precision and artistic vision.",
    explore: "Explore Treatments",
    services: "Our Services",
    treatments: <>Bespoke <span className="font-normal italic">Treatments</span></>,
    treatmentsText: "We offer a curated selection of world-class aesthetic procedures tailored to your unique facial anatomy and aesthetic goals.",
    pricing: "Pricing",
    pricingTitle: <>Transparent <span className="font-normal italic">Starting Prices</span></>,
    pricingText: "Final treatment plans are confirmed after consultation, so every recommendation is tailored to your anatomy, goals, and clinical needs.",
    questions: "Your Questions",
    faqTitle: <>Frequently Asked <span className="font-normal italic">Questions</span></>,
    faqText: "We believe in full transparency and education. If you cannot find your answer here, please reach out to our team.",
    touch: "Get in Touch",
    contactTitle: <>Book Your <span className="font-normal italic">Private Consultation</span></>,
    name: "Full Name",
    email: "Email Address",
    treatment: "Preferred Treatment",
    message: "Message",
    request: "Request Appointment",
    sending: "Sending Request...",
    requested: "Appointment Requested",
    studio: "Our Studio",
    expert: "Meet the Expert",
    quote: '"Beauty is the harmony of spirit and science."',
    aboutTitle: <>Where Science Meets <br /><span className="font-normal italic">Subtle Enhancement</span></>,
    about1: "Dr. Elena Rossi brings over 15 years of medical aesthetic expertise to every consultation, blending dermatological science with a refined eye for proportion.",
    about2: "Her philosophy is simple: the best results are noticed as confidence, not treatment. Every plan is conservative, personalized, and medically led.",
    standard: "The Eterna Standard",
    standardTitle: <>Where <span className="font-normal italic">Surgical Excellence</span> <br />Meets Spa-Like Care</>,
    standardText: "We believe that true beauty is never forced. Our approach combines rigorous medical evaluation with a nuanced understanding of facial aesthetics to ensure you leave our clinic looking like a more rested, radiant version of yourself.",
    experience: "The Experience",
    wellness: <>A Sanctuary <span className="font-normal italic">of Wellness</span></>,
    transformations: "Subtle Transformations",
    transformationsText: "Our goal is to enhance, not alter. View our patient outcomes that celebrate natural beauty.",
    patientResult: "Patient Result: Filler and Hydration",
    patientLoyalty: "Patient Loyalty",
    trainingHours: "Annual Training Hours",
    testimonials: "Testimonials",
    patientExperiences: <>Patient <span className="font-normal italic">Experiences</span></>,
    stillUnsure: "Still unsure?",
    askQuestion: "Ask a question",
    selectTreatment: "Select a treatment",
    treatmentOptions: ["General Consultation", "Botox & Toxins", "Dermal Fillers", "Skin Rejuvenation", "Other"],
    messagePlaceholder: "Tell us about your aesthetic goals...",
    thanks: "Thank you. Your appointment request has been received and our concierge team will contact you shortly.",
    address: "Address",
    phone: "Phone",
    follow: "Follow our journey",
    find: "Find us in Mayfair",
    directions: "Open Directions in Maps",
    footerText: "Redefining aesthetic excellence through medical precision and artistic vision. London's premier sanctuary for natural rejuvenation.",
    opening: "Opening Hours",
    concierge: "Concierge Service",
    certification: "CQC Registered Clinic",
    rights: "All rights reserved.",
    footerGroups: [
      { title: "Treatments", links: ["Botox & Fillers", "Skin Boosters", "PRP Therapy", "Chemical Peels", "Laser Resurfacing"] },
      { title: "Quick Links", links: ["About Dr. Rossi", "Pricing", "Patient Gallery", "Common Questions", "Location & Contact"] },
    ],
    days: ["Mon - Fri", "Saturday", "Sunday", "Closed"],
    legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
  it: {
    nav: ["Home", "Chi siamo", "Trattamenti", "Prezzi", "Gallery", "FAQ", "Contatti"],
    bookNow: "Prenota",
    bookConsultation: "Prenota una consulenza",
    eyebrow: "Medicina estetica premium",
    title: <>Rivela la tua <br /><span className="font-normal italic">autentica</span> luminosita`</>,
    heroText: "Vivi l'eccellenza della medicina estetica non invasiva. Trattamenti su misura per valorizzare la tua bellezza naturale con precisione medica e visione artistica.",
    explore: "Esplora i trattamenti",
    services: "I nostri servizi",
    treatments: <>Trattamenti <span className="font-normal italic">su misura</span></>,
    treatmentsText: "Offriamo una selezione curata di procedure estetiche di alto livello, adattate alla tua anatomia e ai tuoi obiettivi.",
    pricing: "Prezzi",
    pricingTitle: <>Prezzi di partenza <span className="font-normal italic">trasparenti</span></>,
    pricingText: "Il piano finale viene confermato dopo la consulenza, cosi` ogni raccomandazione resta personalizzata.",
    questions: "Le tue domande",
    faqTitle: <>Domande <span className="font-normal italic">frequenti</span></>,
    faqText: "Crediamo nella massima trasparenza. Se non trovi la risposta, contatta il nostro team.",
    touch: "Contattaci",
    contactTitle: <>Prenota la tua <span className="font-normal italic">consulenza privata</span></>,
    name: "Nome completo",
    email: "Indirizzo email",
    treatment: "Trattamento preferito",
    message: "Messaggio",
    request: "Richiedi appuntamento",
    sending: "Invio richiesta...",
    requested: "Appuntamento richiesto",
    studio: "Il nostro studio",
    expert: "Conosci l'esperta",
    quote: '"La bellezza e` armonia tra spirito e scienza."',
    aboutTitle: <>Dove scienza e <br /><span className="font-normal italic">raffinatezza naturale</span> si incontrano</>,
    about1: "La Dr.ssa Elena Rossi porta oltre 15 anni di esperienza in medicina estetica in ogni consulenza, unendo scienza dermatologica e senso delle proporzioni.",
    about2: "La sua filosofia e` semplice: il risultato migliore si nota come sicurezza, non come trattamento. Ogni piano e` conservativo, personalizzato e guidato dal medico.",
    standard: "Lo standard Eterna",
    standardTitle: <>Dove <span className="font-normal italic">eccellenza clinica</span> <br />incontra cura da spa</>,
    standardText: "Crediamo che la vera bellezza non sia mai forzata. Uniamo valutazione medica rigorosa e sensibilita` estetica per farti uscire piu` riposata e luminosa.",
    experience: "L'esperienza",
    wellness: <>Un santuario <span className="font-normal italic">di benessere</span></>,
    transformations: "Trasformazioni discrete",
    transformationsText: "Il nostro obiettivo e` valorizzare, non alterare. Scopri risultati che celebrano la bellezza naturale.",
    patientResult: "Risultato paziente: filler e idratazione",
    patientLoyalty: "Fedelta` pazienti",
    trainingHours: "Ore annuali di formazione",
    testimonials: "Testimonianze",
    patientExperiences: <>Esperienze <span className="font-normal italic">dei pazienti</span></>,
    stillUnsure: "Hai ancora dubbi?",
    askQuestion: "Fai una domanda",
    selectTreatment: "Seleziona un trattamento",
    treatmentOptions: ["Consulenza generale", "Botox e tossina", "Filler dermici", "Ringiovanimento pelle", "Altro"],
    messagePlaceholder: "Raccontaci i tuoi obiettivi estetici...",
    thanks: "Grazie. La tua richiesta e` stata ricevuta e il nostro team concierge ti contattera` a breve.",
    address: "Indirizzo",
    phone: "Telefono",
    follow: "Segui il nostro percorso",
    find: "Trovaci a Mayfair",
    directions: "Apri indicazioni su Maps",
    footerText: "Ridefiniamo l'eccellenza estetica con precisione medica e visione artistica. Un santuario londinese per il ringiovanimento naturale.",
    opening: "Orari",
    concierge: "Servizio concierge",
    certification: "Clinica registrata CQC",
    rights: "Tutti i diritti riservati.",
    footerGroups: [
      { title: "Trattamenti", links: ["Botox e filler", "Skin booster", "Terapia PRP", "Peeling chimici", "Laser resurfacing"] },
      { title: "Link rapidi", links: ["Dr.ssa Rossi", "Prezzi", "Gallery pazienti", "Domande frequenti", "Sede e contatti"] },
    ],
    days: ["Lun - Ven", "Sabato", "Domenica", "Chiuso"],
    legal: ["Privacy", "Termini di servizio", "Cookie policy"],
  },
  de: {
    nav: ["Home", "Ueber uns", "Treatments", "Preise", "Galerie", "FAQ", "Kontakt"],
    bookNow: "Buchen",
    bookConsultation: "Beratung buchen",
    eyebrow: "Premium Medical Aesthetics",
    title: <>Zeige deine <br /><span className="font-normal italic">authentische</span> Ausstrahlung</>,
    heroText: "Erlebe nicht-invasive Aesthetik auf hoechstem Niveau. Individuelle Treatments, die deine natuerliche Schoenheit mit medizinischer Praezision und kuenstlerischem Blick unterstreichen.",
    explore: "Treatments ansehen",
    services: "Unsere Services",
    treatments: <>Individuelle <span className="font-normal italic">Treatments</span></>,
    treatmentsText: "Wir bieten eine kuratierte Auswahl hochwertiger aesthetischer Verfahren, abgestimmt auf Anatomie und Ziele.",
    pricing: "Preise",
    pricingTitle: <>Transparente <span className="font-normal italic">Startpreise</span></>,
    pricingText: "Der finale Behandlungsplan wird nach der Beratung bestaetigt, damit jede Empfehlung individuell bleibt.",
    questions: "Deine Fragen",
    faqTitle: <>Haeufige <span className="font-normal italic">Fragen</span></>,
    faqText: "Wir setzen auf volle Transparenz. Wenn du deine Antwort hier nicht findest, kontaktiere unser Team.",
    touch: "Kontakt aufnehmen",
    contactTitle: <>Private <span className="font-normal italic">Beratung buchen</span></>,
    name: "Vollstaendiger Name",
    email: "E-Mail-Adresse",
    treatment: "Gewuenschtes Treatment",
    message: "Nachricht",
    request: "Termin anfragen",
    sending: "Anfrage wird gesendet...",
    requested: "Termin angefragt",
    studio: "Unser Studio",
    expert: "Die Expertin",
    quote: '"Schoenheit ist die Harmonie von Geist und Wissenschaft."',
    aboutTitle: <>Wo Wissenschaft auf <br /><span className="font-normal italic">subtile Verfeinerung</span> trifft</>,
    about1: "Dr. Elena Rossi bringt ueber 15 Jahre Erfahrung in medizinischer Aesthetik in jede Beratung ein und verbindet dermatologische Wissenschaft mit einem geschulten Blick fuer Proportion.",
    about2: "Ihre Philosophie ist einfach: Die besten Ergebnisse wirken wie neues Selbstvertrauen, nicht wie eine Behandlung. Jeder Plan ist konservativ, individuell und medizinisch gefuehrt.",
    standard: "Der Eterna Standard",
    standardTitle: <>Wo <span className="font-normal italic">klinische Exzellenz</span> <br />auf Spa-Care trifft</>,
    standardText: "Wir glauben, dass echte Schoenheit nie erzwungen wirkt. Medizinische Bewertung und feines Verstaendnis fuer Gesichtsaesthetik sorgen fuer ein frisches, natuerliches Ergebnis.",
    experience: "Das Erlebnis",
    wellness: <>Ein Ort <span className="font-normal italic">des Wohlbefindens</span></>,
    transformations: "Subtile Transformationen",
    transformationsText: "Unser Ziel ist Verfeinerung, nicht Veraenderung. Sieh Ergebnisse, die natuerliche Schoenheit feiern.",
    patientResult: "Patientenergebnis: Filler und Hydration",
    patientLoyalty: "Patiententreue",
    trainingHours: "Jaehrliche Trainingsstunden",
    testimonials: "Stimmen",
    patientExperiences: <>Patienten-<span className="font-normal italic">erfahrungen</span></>,
    stillUnsure: "Noch unsicher?",
    askQuestion: "Frage stellen",
    selectTreatment: "Treatment auswaehlen",
    treatmentOptions: ["Allgemeine Beratung", "Botox und Toxine", "Dermal Filler", "Hautverjuengung", "Sonstiges"],
    messagePlaceholder: "Erzaehl uns von deinen aesthetischen Zielen...",
    thanks: "Danke. Deine Terminanfrage wurde empfangen und unser Concierge-Team meldet sich in Kuerze.",
    address: "Adresse",
    phone: "Telefon",
    follow: "Folge unserer Journey",
    find: "Finde uns in Mayfair",
    directions: "Route in Maps oeffnen",
    footerText: "Aesthetische Exzellenz durch medizinische Praezision und kuenstlerischen Blick. Londons Premium-Ort fuer natuerliche Verjuengung.",
    opening: "Oeffnungszeiten",
    concierge: "Concierge-Service",
    certification: "CQC-registrierte Klinik",
    rights: "Alle Rechte vorbehalten.",
    footerGroups: [
      { title: "Treatments", links: ["Botox & Filler", "Skin Booster", "PRP-Therapie", "Chemische Peelings", "Laser Resurfacing"] },
      { title: "Schnellzugriff", links: ["Ueber Dr. Rossi", "Preise", "Patientengalerie", "Haeufige Fragen", "Standort & Kontakt"] },
    ],
    days: ["Mo - Fr", "Samstag", "Sonntag", "Geschlossen"],
    legal: ["Datenschutz", "Nutzungsbedingungen", "Cookie-Richtlinie"],
  },
} as const

function getClinicCopy(locale: Locale) {
  return clinicCopy[locale] ?? clinicCopy.en
}

const localizedClinicData: Record<"it" | "de", { treatments: typeof treatments; pricing: typeof pricing; faqs: typeof faqs }> = {
  it: {
    treatments: [
      { icon: Syringe, image: "/images/treatment-botox-toxin.png", title: "Botox e tossina", description: "Rilassamento preciso delle rughe per un aspetto fresco senza perdere espressivita`." },
      { icon: Droplets, image: "/images/treatment-dermal-fillers.png", title: "Filler dermici", description: "Ripristino di volume e contorno per guance, labbra e mandibola con acido ialuronico premium." },
      { icon: Sparkles, image: "/images/treatment-skin-boosters.png", title: "Skin booster", description: "Idratazione profonda e stimolazione del collagene per una pelle luminosa dall'interno." },
      { icon: Zap, image: "/images/treatment-laser-treatments.png", title: "Trattamenti laser", description: "Resurfacing avanzato per pigmentazione, cicatrici e uniformita` cutanea." },
      { icon: ShieldCheck, image: "/images/treatment-prp-therapy.png", title: "Terapia PRP", description: "Sfrutta la capacita` rigenerativa naturale per pelle e capelli." },
      { icon: UserCheck, image: "/images/treatment-bespoke-consultation.png", title: "Consulenza su misura", description: "Analisi completa di pelle e struttura del viso per creare il tuo piano personale." },
    ],
    pricing: [
      { treatment: "Rilassamento rughe", price: "Da GBP 220", details: ["Trattamento una zona", "Valutazione medica", "Controllo incluso"] },
      { treatment: "Filler dermici", price: "Da GBP 350", details: ["Filler premium all'acido ialuronico", "Piano di armonizzazione", "Contorno e volume naturali"] },
      { treatment: "Ringiovanimento pelle", price: "Da GBP 180", details: ["Skin booster o peeling", "Supporto idratazione e glow", "Aftercare personalizzato"] },
    ],
    faqs: [
      { question: "Quanto durano i risultati?", answer: "Dipende dal trattamento. I trattamenti antirughe durano spesso 3-4 mesi, mentre i filler possono durare da 6 a 18 mesi." },
      { question: "I trattamenti sono dolorosi?", answer: "La comodita` e` prioritaria. Usiamo creme anestetiche, anestesia locale se necessaria e aghi molto sottili." },
      { question: "C'e` downtime dopo il Botox?", answer: "Il Botox ha in genere downtime minimo. Piccoli rilievi nei punti di iniezione svaniscono rapidamente." },
      { question: "Avro` un aspetto finto?", answer: "No. La nostra filosofia e` naturale e conservativa: valorizziamo i tratti esistenti senza trasformarli." },
      { question: "Come capisco qual e` il trattamento giusto?", answer: "Ogni percorso inizia con una consulenza medica completa per definire un piano adatto a obiettivi e budget." },
    ],
  },
  de: {
    treatments: [
      { icon: Syringe, image: "/images/treatment-botox-toxin.png", title: "Botox und Toxin", description: "Praezise Faltenentspannung fuer ein frisches Aussehen ohne Ausdrucksverlust." },
      { icon: Droplets, image: "/images/treatment-dermal-fillers.png", title: "Dermal Filler", description: "Volumen und Kontur fuer Wangen, Lippen und Kieferlinie mit hochwertiger Hyaluronsaeure." },
      { icon: Sparkles, image: "/images/treatment-skin-boosters.png", title: "Skin Booster", description: "Tiefe Hydration und Kollagenstimulation fuer strahlende Haut von innen." },
      { icon: Zap, image: "/images/treatment-laser-treatments.png", title: "Laserbehandlungen", description: "Fortschrittliches Resurfacing bei Pigmentierung, Narben und ungleichmaessigem Hautbild." },
      { icon: ShieldCheck, image: "/images/treatment-prp-therapy.png", title: "PRP-Therapie", description: "Natuerliche Regeneration fuer Hautverjuengung und Haaraufbau." },
      { icon: UserCheck, image: "/images/treatment-bespoke-consultation.png", title: "Individuelle Beratung", description: "Umfassende Analyse von Haut und Gesichtsstruktur fuer deinen persoenlichen Plan." },
    ],
    pricing: [
      { treatment: "Faltenentspannung", price: "Ab GBP 220", details: ["Eine Behandlungszone", "Aerztliche Bewertung", "Kontrolltermin inklusive"] },
      { treatment: "Dermal Filler", price: "Ab GBP 350", details: ["Premium-Hyaluronfiller", "Plan zur Gesichtsharmonisierung", "Natuerliche Kontur und Volumen"] },
      { treatment: "Hautverjuengung", price: "Ab GBP 180", details: ["Skin Booster oder Peeling", "Hydration und Glow", "Individuelle Nachsorge"] },
    ],
    faqs: [
      { question: "Wie lange halten die Ergebnisse?", answer: "Das haengt vom Treatment ab. Faltenentspannung haelt meist 3-4 Monate, Filler je nach Bereich 6 bis 18 Monate." },
      { question: "Sind die Behandlungen schmerzhaft?", answer: "Komfort ist zentral. Wir nutzen hochwertige Betäubungscremes, bei Bedarf lokale Anaesthesie und sehr feine Nadeln." },
      { question: "Gibt es Downtime nach Botox?", answer: "Botox hat normalerweise minimale Downtime. Kleine Erhebungen an Einstichstellen verschwinden schnell." },
      { question: "Werde ich kuenstlich aussehen?", answer: "Nein. Unser Ansatz ist natuerlich und konservativ: Wir verfeinern vorhandene Strukturen, ohne sie zu veraendern." },
      { question: "Wie finde ich das richtige Treatment?", answer: "Jede Behandlung beginnt mit einer medizinischen Beratung, in der Ziele, Haut und Budget besprochen werden." },
    ],
  },
}

function getClinicData(locale: Locale) {
  return locale === "en" ? { treatments, pricing, faqs } : localizedClinicData[locale]
}

const treatments = [
  {
    icon: Syringe,
    title: "Botox & Toxin",
    description: "Precision wrinkle relaxation for a refreshed, rested appearance without losing expression.",
    image: "/images/treatment-botox-toxin.png",
  },
  {
    icon: Droplets,
    title: "Dermal Fillers",
    description: "Restore volume and contour to cheeks, lips, and jawlines with high-grade hyaluronic acid.",
    image: "/images/treatment-dermal-fillers.png",
  },
  {
    icon: Sparkles,
    title: "Skin Boosters",
    description: "Deep hydration and collagen stimulation for radiant, vibrant skin from within.",
    image: "/images/treatment-skin-boosters.png",
  },
  {
    icon: Zap,
    title: "Laser Treatments",
    description: "Advanced resurfacing for pigmentation, scars, and skin evening using state-of-the-art technology.",
    image: "/images/treatment-laser-treatments.png",
  },
  {
    icon: ShieldCheck,
    title: "PRP Therapy",
    description: "Harness your body's natural healing power for skin rejuvenation and hair restoration.",
    image: "/images/treatment-prp-therapy.png",
  },
  {
    icon: UserCheck,
    title: "Bespoke Consultation",
    description: "A comprehensive analysis of your skin health and facial structure to create your unique plan.",
    image: "/images/treatment-bespoke-consultation.png",
  },
]

const pricing = [
  {
    treatment: "Wrinkle Relaxing",
    price: "From GBP 220",
    details: ["One area treatment", "Doctor-led assessment", "Review appointment included"],
  },
  {
    treatment: "Dermal Fillers",
    price: "From GBP 350",
    details: ["Premium hyaluronic acid filler", "Facial balancing plan", "Natural contour and volume"],
  },
  {
    treatment: "Skin Rejuvenation",
    price: "From GBP 180",
    details: ["Skin booster or peel options", "Hydration and glow support", "Personalized aftercare"],
  },
]

const faqs = [
  {
    question: "How long do the results typically last?",
    answer:
      "This depends on the treatment. Wrinkle relaxing treatments usually last 3-4 months, while dermal fillers can last anywhere from 6 to 18 months depending on the area treated and individual metabolism.",
  },
  {
    question: "Are the treatments painful?",
    answer:
      "We prioritize your comfort. We use high-quality numbing creams, localized anesthetic if needed, and ultra-fine needles. Most patients describe a mild pinching sensation, but not pain.",
  },
  {
    question: "Is there any downtime after Botox?",
    answer:
      "Botox typically has minimal downtime. You may have tiny bumps at injection sites that fade within 30 minutes. We recommend avoiding exercise and lying flat for 4 hours post-treatment.",
  },
  {
    question: 'Will I look "fake" or "overdone"?',
    answer:
      'Our entire philosophy is built on natural-looking results. We follow a "less is more" approach and work with your existing facial structure to enhance what you have, never to transform you into someone else.',
  },
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "Every patient journey begins with a comprehensive medical consultation. We analyze your skin, discuss your concerns, and map out a tailored plan that fits your goals and budget.",
  },
]

function Navbar({ copy }: { copy: ReturnType<typeof getClinicCopy> }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-neutral-dark">
        <a href="#home" className="flex flex-col text-2xl font-serif uppercase leading-none tracking-widest">
          <span className="font-bold">Eterna</span>
          <span className="mt-1 text-[10px] tracking-[0.4em] opacity-70">Aesthetics</span>
        </a>

        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link, index) => (
            <a key={link.name} href={link.href} className="text-sm font-medium uppercase tracking-widest transition-colors duration-300 hover:text-primary">
              {copy.nav[index]}
            </a>
          ))}
          <a href="#contact" className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-neutral-dark hover:shadow-lg">
            <Phone size={14} />
            {copy.bookNow}
          </a>
        </div>

        <button className="text-neutral-dark md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="glass absolute left-0 right-0 top-full border-t border-neutral-base/20 px-6 py-8 shadow-xl md:hidden">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="py-2 text-center text-lg uppercase tracking-widest">
                  {copy.nav[index]}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="rounded-xl bg-primary px-6 py-4 text-center text-lg uppercase tracking-widest text-white shadow-lg">
                {copy.bookConsultation}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function Hero({ copy }: { copy: ReturnType<typeof getClinicCopy> }) {
  return (
    <section id="home" className="relative flex h-screen min-h-[700px] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 10, ease: "easeOut" }} className="h-full w-full">
          <img src="/images/hero-clinic.png" alt="Luxury aesthetic clinic" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-base/90 via-neutral-base/40 to-transparent" />
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-3xl">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-primary">{copy.eyebrow}</span>
          <h1 className="mb-6 text-5xl font-serif leading-[1.1] text-neutral-dark md:text-7xl lg:text-8xl">
            {copy.title}
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-neutral-dark/70 md:text-xl">
            {copy.heroText}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <motion.a href="#contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-white shadow-xl transition-all duration-300 hover:shadow-primary/30">
              {copy.bookConsultation}
              <ArrowRight size={16} />
            </motion.a>
            <motion.a href="#treatments" whileHover={{ scale: 1.02, backgroundColor: "rgba(197, 160, 89, 0.1)" }} whileTap={{ scale: 0.98 }} className="flex items-center justify-center rounded-full border border-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary transition-all duration-300">
              {copy.explore}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function About({ copy }: { copy: ReturnType<typeof getClinicCopy> }) {
  const stats = [
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Shield, label: "Safe Procedures", value: "12k+" },
    { icon: Heart, label: "Happy Patients", value: "8k+" },
  ]

  return (
    <section id="about" className="overflow-hidden bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="relative w-full lg:w-1/2">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative z-10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
                <img src="/images/doctor-firstname-lastname-profile.png" alt="Dr. Elena Rossi" className="h-full w-full object-cover" />
                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-black/10" />
              </div>
              <div className="glass absolute -bottom-8 -right-8 max-w-[240px] rounded-2xl border border-primary-light/30 p-8 shadow-xl">
                <p className="font-serif text-lg italic leading-snug text-primary">{copy.quote}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-neutral-dark/60">Dr. Elena Rossi</p>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2">
            <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">{copy.expert}</span>
            <h2 className="mb-8 text-4xl font-serif leading-tight text-neutral-dark md:text-5xl">
              {copy.aboutTitle}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-neutral-dark/70">
              {copy.about1}
            </p>
            <p className="mb-10 text-lg leading-relaxed text-neutral-dark/70">
              {copy.about2}
            </p>

            <div className="grid grid-cols-1 gap-8 border-t border-neutral-base pt-8 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="mb-2 flex items-center justify-center gap-2 sm:justify-start">
                    <stat.icon className="text-primary" size={20} />
                    <span className="text-2xl font-serif font-bold text-neutral-dark">{stat.value}</span>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-neutral-dark/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Treatments({ copy, items }: { copy: ReturnType<typeof getClinicCopy>; items: typeof treatments }) {
  return (
    <section id="treatments" className="bg-neutral-base py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">{copy.services}</span>
            <h2 className="mb-6 text-4xl font-serif text-neutral-dark md:text-5xl">
              {copy.treatments}
            </h2>
            <div className="mx-auto h-px w-20 bg-primary" />
            <p className="mt-8 text-lg text-neutral-dark/60">{copy.treatmentsText}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -10 }} className="group cursor-pointer">
              <div className="relative mb-6 h-[400px] overflow-hidden rounded-[2rem] shadow-xl">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 via-neutral-dark/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/90 backdrop-blur-sm">
                    <item.icon size={24} />
                  </div>
                  <h3 className="mb-2 text-2xl font-serif font-medium tracking-wide">{item.title}</h3>
                  <p className="translate-y-4 text-sm leading-relaxed text-neutral-base/70 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing({ copy, items }: { copy: ReturnType<typeof getClinicCopy>; items: typeof pricing }) {
  return (
    <section id="pricing" className="scroll-mt-24 bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">{copy.pricing}</span>
          <h2 className="mb-6 text-4xl font-serif text-neutral-dark md:text-5xl">
            {copy.pricingTitle}
          </h2>
          <p className="text-lg leading-relaxed text-neutral-dark/60">{copy.pricingText}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.article key={item.treatment} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="rounded-[2rem] border border-primary/10 bg-neutral-base/60 p-8">
              <h3 className="mb-4 text-2xl font-serif text-neutral-dark">{item.treatment}</h3>
              <p className="mb-8 text-3xl font-serif text-primary">{item.price}</p>
              <ul className="space-y-4">
                {item.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3 text-sm leading-relaxed text-neutral-dark/60">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={18} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs({ copy }: { copy: ReturnType<typeof getClinicCopy> }) {
  const points = [
    { icon: ShieldCheck, title: "Safety First", description: "We adhere to the highest clinical standards using only FDA and CE approved materials." },
    { icon: Microscope, title: "Science Led", description: "The latest evidence-based techniques from global aesthetic congresses." },
    { icon: Award, title: "Multi-Awarded", description: "Recognized as the Leading Independent Aesthetic Clinic 3 years in a row." },
    { icon: Users, title: "Bespoke Care", description: "No template results. Every plan is uniquely mapped to your personal features." },
  ]

  return (
    <section className="bg-neutral-dark py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary underline decoration-primary/30 underline-offset-8">{copy.standard}</span>
            <h2 className="mb-8 text-4xl font-serif leading-tight md:text-5xl">
              {copy.standardTitle}
            </h2>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-neutral-base/60">{copy.standardText}</p>
            <div className="flex gap-10 border-t border-white/10 pt-10">
              <div>
                <p className="text-3xl font-serif text-primary">98%</p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-neutral-base/40">{copy.patientLoyalty}</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-primary">150+</p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-neutral-base/40">{copy.trainingHours}</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {points.map((point, index) => (
              <motion.div key={point.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="border-t border-white/10 px-2 py-8">
                <div className="mb-6 text-primary">
                  <point.icon size={24} />
                </div>
                <h3 className="mb-3 text-xl font-serif tracking-wide">{point.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-base/50">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery({ copy }: { copy: ReturnType<typeof getClinicCopy> }) {
  const atmosphereImages = ["/images/gallery-treatment-room.png", "/images/gallery-clinic-entrance.png", "/images/gallery-product-showcase.png"]
  const transformationImages = ["/images/gallery-transformation-1.png", "/images/gallery-transformation-2.png"]

  return (
    <section id="gallery" className="overflow-hidden bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 lg:flex-row">
          <div className="max-w-2xl">
            <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">{copy.experience}</span>
            <h2 className="text-4xl font-serif leading-tight text-neutral-dark md:text-5xl">
              {copy.wellness}
            </h2>
          </div>
          <p className="hidden pb-2 font-sans text-xs font-bold uppercase tracking-[0.2em] text-neutral-dark/50 lg:block">Est. 2010, London, Mayfair</p>
        </div>

        <div className="grid h-[400px] grid-cols-1 gap-6 md:h-[700px] md:grid-cols-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="group relative overflow-hidden rounded-[2rem] md:col-span-8">
            <img src={atmosphereImages[0]} alt="Eterna treatment room" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-neutral-dark/10 transition-colors duration-500 group-hover:bg-transparent" />
          </motion.div>

          <div className="flex flex-col gap-6 md:col-span-4">
            {atmosphereImages.slice(1).map((image, index) => (
              <motion.div key={image} initial={{ opacity: 0, y: index === 0 ? -20 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index === 0 ? 0.2 : 0.4 }} className="group relative h-1/2 overflow-hidden rounded-[2rem]">
                <img src={image} alt={index === 0 ? "Eterna entrance" : "Product showcase"} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-neutral-dark/10 transition-colors duration-500 group-hover:bg-transparent" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-neutral-base pt-24">
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-serif text-neutral-dark">{copy.transformations}</h3>
            <p className="mx-auto mt-4 max-w-lg text-neutral-dark/50">{copy.transformationsText}</p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {transformationImages.map((image, index) => (
              <motion.div key={image} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="group relative aspect-video overflow-hidden rounded-[2rem] bg-neutral-base shadow-inner">
                <img src={image} alt={`Before and after transformation ${index + 1}`} className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-dark/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium uppercase tracking-widest text-white backdrop-blur-sm">{copy.patientResult}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials({ copy }: { copy: ReturnType<typeof getClinicCopy> }) {
  const testimonials = [
    { name: "Sarah Montgomery", role: "Fashion Consultant", text: "Dr. Elena's eye for detail is unmatched. I have had botox elsewhere, but the natural movement she preserved while smoothing my skin is simply incredible.", image: "/images/testimonial-sarah-montgomery.png" },
    { name: "James Harrison", role: "Executive", text: "As a man, I was hesitant about aesthetic treatments. The team made me feel completely at ease. The results were subtle and professional.", image: "/images/testimonial-james-harrison.png" },
    { name: "Sophie Chen", role: "Influencer", text: "The clinic atmosphere is so serene. Their skin booster treatment changed my bridal prep entirely. My skin felt lit from within.", image: "/images/testimonial-sophie-chen.png" },
  ]

  return (
    <section className="relative overflow-hidden bg-neutral-base py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">{copy.testimonials}</span>
          <h2 className="text-4xl font-serif text-neutral-dark md:text-5xl">
            {copy.patientExperiences}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative rounded-[2.5rem] bg-white p-10 shadow-sm transition-shadow duration-500 hover:shadow-xl">
              <Quote className="absolute right-10 top-8 text-primary/10" size={60} />
              <div className="mb-8 flex items-center gap-4">
                <img src={item.image} alt={item.name} className="h-14 w-14 rounded-full border-2 border-primary/20 object-cover" />
                <div>
                  <h4 className="font-serif font-bold text-neutral-dark">{item.name}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">{item.role}</p>
                </div>
              </div>
              <p className="italic leading-relaxed text-neutral-dark/70">"{item.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ({ copy, items }: { copy: ReturnType<typeof getClinicCopy>; items: typeof faqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-20 lg:flex-row">
          <div className="lg:w-1/3">
            <span className="text-gold-gradient mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">{copy.questions}</span>
            <h2 className="mb-6 text-4xl font-serif text-neutral-dark">
              {copy.faqTitle}
            </h2>
            <p className="mb-8 leading-relaxed text-neutral-dark/50">{copy.faqText}</p>
            <div className="rounded-[2rem] border border-primary/10 bg-neutral-base p-8">
              <p className="mb-4 text-xl font-serif text-neutral-dark">{copy.stillUnsure}</p>
              <a href="#contact" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary transition-all duration-300 hover:gap-4">
                {copy.askQuestion} <span>-&gt;</span>
              </a>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="space-y-4">
              {items.map((faq, index) => (
                <div key={faq.question} className="border-b border-neutral-base last:border-0">
                  <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="group flex w-full items-center justify-between py-6 text-left">
                    <span className={`font-serif text-lg transition-colors duration-300 ${openIndex === index ? "text-primary" : "text-neutral-dark group-hover:text-primary"}`}>{faq.question}</span>
                    <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} className="text-primary">
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                        <p className="max-w-2xl pb-8 pt-2 leading-relaxed text-neutral-dark/60">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact({ copy }: { copy: ReturnType<typeof getClinicCopy> }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setIsSubmitting(true)
    setIsSuccess(false)

    window.setTimeout(() => {
      form.reset()
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 700)
  }

  return (
    <section id="contact" className="bg-neutral-base py-24">
      <div className="container mx-auto px-6">
        <div className="overflow-hidden rounded-[3rem] border border-primary/5 bg-white shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            <div className="p-8 md:p-16 lg:w-3/5">
              <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">{copy.touch}</span>
              <h2 className="mb-10 text-4xl font-serif text-neutral-dark">
                {copy.contactTitle}
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <label className="flex flex-col space-y-2">
                    <span className="ml-4 text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">{copy.name}</span>
                    <input type="text" placeholder="e.g. Arabella Smith" required minLength={2} autoComplete="name" className="rounded-2xl border border-neutral-base bg-neutral-base/50 px-6 py-4 text-neutral-dark transition-all duration-300 focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary" />
                  </label>
                  <label className="flex flex-col space-y-2">
                    <span className="ml-4 text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">{copy.email}</span>
                    <input type="email" placeholder="e.g. arabella@email.com" required autoComplete="email" className="rounded-2xl border border-neutral-base bg-neutral-base/50 px-6 py-4 text-neutral-dark transition-all duration-300 focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary" />
                  </label>
                </div>

                <label className="flex flex-col space-y-2">
                  <span className="ml-4 text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">{copy.treatment}</span>
                  <select required defaultValue="" className="rounded-2xl border border-neutral-base bg-neutral-base/50 px-6 py-4 text-neutral-dark transition-all duration-300 focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="" disabled>
                      {copy.selectTreatment}
                    </option>
                    {copy.treatmentOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col space-y-2">
                  <span className="ml-4 text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">{copy.message}</span>
                  <textarea rows={4} placeholder={copy.messagePlaceholder} required minLength={10} className="resize-none rounded-2xl border border-neutral-base bg-neutral-base/50 px-6 py-4 text-neutral-dark transition-all duration-300 focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary" />
                </label>

                <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} disabled={isSubmitting} className="mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-neutral-dark py-5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-500 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-70">
                  {isSuccess ? <CheckCircle2 size={16} /> : <Calendar size={16} />}
                  {isSubmitting ? copy.sending : isSuccess ? copy.requested : copy.request}
                </motion.button>

                {isSuccess && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-primary/20 bg-primary/10 px-6 py-4 text-sm text-neutral-dark" role="status" aria-live="polite">
                    {copy.thanks}
                  </motion.div>
                )}
              </form>
            </div>

            <div className="relative flex flex-col justify-between overflow-hidden bg-neutral-dark p-8 text-white md:p-16 lg:w-2/5">
              <div>
                <h3 className="mb-10 text-3xl font-serif">{copy.studio}</h3>
                <div className="space-y-8">
                  {[
                    { icon: MapPin, label: copy.address, value: "12 Curzon Street, Mayfair\nLondon W1J 5HL United Kingdom" },
                    { icon: Phone, label: copy.phone, value: "+44 (0) 20 7123 4567" },
                    { icon: Mail, label: copy.email, value: "concierge@eterna-aesthetics.com" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-primary">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="mb-1 text-sm font-bold uppercase tracking-widest text-neutral-base/40">{item.label}</p>
                        <p className="whitespace-pre-line leading-relaxed text-neutral-base/80">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 border-t border-white/5 pt-10">
                <p className="mb-6 text-[10px] font-bold uppercase tracking-widest text-neutral-base/40">{copy.follow}</p>
                <div className="flex gap-4">
                  {[Instagram, Facebook].map((Icon, index) => (
                    <a key={index} href="#contact" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-primary hover:bg-primary" aria-label={index === 0 ? "Instagram" : "Facebook"}>
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative mt-20 h-96 w-full overflow-hidden rounded-[2.5rem] border border-white shadow-xl grayscale contrast-125">
          <img src="/images/gallery-clinic-entrance.png" alt="Clinic entrance" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-primary/5 transition-all duration-500 group-hover:bg-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-white p-8 shadow-xl">
              <MapPin className="text-primary" size={32} />
              <div>
                <p className="font-serif font-bold text-neutral-dark">{copy.find}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-neutral-dark/40">{copy.directions}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer({ copy }: { copy: ReturnType<typeof getClinicCopy> }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-base bg-white pb-12 pt-24">
      <div className="container mx-auto px-6">
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="mb-8 flex flex-col text-2xl font-serif uppercase leading-none tracking-widest text-neutral-dark">
              <span className="font-bold">Eterna</span>
              <span className="mt-1 text-[10px] tracking-[0.4em] opacity-70">Aesthetics</span>
            </a>
            <p className="mb-8 text-sm leading-relaxed text-neutral-dark/50">{copy.footerText}</p>
            <div className="flex items-center gap-2 text-primary">
              <ShieldCheck size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest">{copy.certification}</span>
            </div>
          </div>

          {copy.footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-8 text-sm font-bold uppercase tracking-widest text-neutral-dark">{group.title}</h4>
              <ul className="space-y-4 text-sm text-neutral-dark/60">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href={link.includes("Pricing") ? "#pricing" : link.includes("Question") ? "#faq" : link.includes("Contact") ? "#contact" : "#treatments"} className="transition-colors hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-8 text-sm font-bold uppercase tracking-widest text-neutral-dark">{copy.opening}</h4>
            <ul className="space-y-4 text-sm text-neutral-dark/60">
              <li className="flex justify-between">
                <span>{copy.days[0]}</span> <span>09:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>{copy.days[1]}</span> <span>10:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>{copy.days[2]}</span> <span>{copy.days[3]}</span>
              </li>
            </ul>
            <div className="mt-8 rounded-2xl bg-neutral-base p-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">{copy.concierge}</p>
              <p className="font-serif text-neutral-dark">+44 20 7123 4567</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-neutral-base pt-12 md:flex-row">
          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-dark/30">&copy; {currentYear} Eterna Aesthetics. {copy.rights}</p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-neutral-dark/30">
            {copy.legal.map((item) => (
              <a key={item} href="#home" className="transition-colors hover:text-primary">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export function ReplyPilotPage({ locale = "en" }: { locale?: Locale }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const copy = getClinicCopy(locale)
  const data = getClinicData(locale)

  return (
    <div className="estetic-clinique relative bg-neutral-base font-sans text-neutral-dark antialiased">
      <motion.div className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-primary" style={{ scaleX }} />
      <ExampleLocaleSwitcher locale={locale} path="/estetic-clinique" />
      <Navbar copy={copy} />
      <main>
        <Hero copy={copy} />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true, margin: "-100px" }}>
          <About copy={copy} />
        </motion.div>
        <Treatments copy={copy} items={data.treatments} />
        <Pricing copy={copy} items={data.pricing} />
        <WhyChooseUs copy={copy} />
        <Gallery copy={copy} />
        <Testimonials copy={copy} />
        <FAQ copy={copy} items={data.faqs} />
        <Contact copy={copy} />
      </main>
      <Footer copy={copy} />
    </div>
  )
}
