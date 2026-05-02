"use client"

import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  Twitter,
  X,
} from "lucide-react"
import { useEffect, useMemo, useState, type ReactNode } from "react"
import type { Locale } from "@/lib/i18n"
import { ExampleLocaleSwitcher } from "@/components/examples/example-locale-switcher"

const imagePath = "/images/lussolab"

type Product = {
  id: string
  name: string
  price: number
  description: string
  category: string
  images: string[]
  colors: { name: string; hex: string }[]
  details: string[]
  specs: { label: string; value: string }[]
}

type Route = "home" | "shop" | "collections" | "about" | "checkout" | `product:${string}`
type CartItem = { productId: string; quantity: number; selectedColor: string }

const lussolabCopy = {
  en: {
    nav: { shop: "Shop All", collections: "Collections", about: "About", cart: "Cart" },
    home: {
      eyebrow: "New Arrivals",
      title: <>Designed for <br /> simplicity.</>,
      description: "Elevated essentials crafted from the finest materials. A testament to enduring quality and minimalist form.",
      shop: "Shop Collection",
      story: "The Story",
      collectionTitle: "The Core Collection",
      viewAll: "View All Products",
      bestSeller: "Best Seller",
      philosophy: "Our Philosophy",
      philosophyTitle: <>Honest materials. <br /> Timeless design.</>,
      philosophyText: "We believe in the beauty of simplicity. Every LussoLab piece is a balance of traditional craftsmanship and contemporary engineering, made to evolve with you over time.",
      sustainable: "Sustainable",
      sustainableText: "Responsibly sourced Italian leather.",
      artisanal: "Artisanal",
      artisanalText: "Hand-finished by master craftspeople.",
      learnMore: "Learn More",
      benefits: [
        ["Free Express Shipping", "Complimentary shipping on all orders over $250."],
        ["Easy Exchanges", "Complimentary 30-day return and exchange period."],
        ["Lifetime Warranty", "Every item is guaranteed for a lifetime of use."],
        ["Global Concierge", "Our team is available 24/7 for tailored assistance."],
      ],
    },
    product: {
      back: "Back to Collection",
      color: "Color",
      add: "Add to Bag",
      shipping: "Shipping",
      shippingText: "Standard shipping within 3-5 business days.",
      service: "Service",
      serviceText: "Complimentary exchanges and concierge returns.",
      specs: "Specifications",
      craft: "The Craft",
      craftTitle: <>Every stitch tells a story of <br /> precision and patience.</>,
    },
    shop: {
      title: "All Products",
      text: "The full collection is currently being curated. Check back soon for exclusive access.",
    },
    collections: {
      title: "Collections",
      items: ["Leather Goods", "Digital Minimalism", "Travel Essentials"],
    },
    about: {
      title: <>Born from a vision <br /> of absolute clarity.</>,
      text: "LussoLab was founded in 2024 with a singular mission: to strip away the noise of modern life and return to the essence of beautiful utility. We believe in better, not more.",
    },
    checkout: {
      successTitle: "Order Confirmed",
      successText: "Thank you for choosing LussoLab. Your collection is being meticulously prepared for transit.",
      home: "Back to Home",
      return: "Return to Bag",
      title: "Secured Checkout",
      identity: "01. Identity",
      name: "Full Name",
      email: "Email Address",
      destination: "02. Destination",
      address: "Street Address",
      city: "City",
      postal: "Postal Code",
      country: "Country",
      transaction: "03. Transaction",
      card: "Card Number (mock)",
      finalize: "Finalize Payment",
      summary: "Summary",
      subtotal: "Subtotal",
      shipping: "Shipping",
      total: "Total",
    },
    cart: {
      title: "Shopping Bag",
      unique: "unique items",
      empty: "Your bag is currently empty.",
      continue: "Continue Shopping",
      color: "Color",
      remove: "Remove",
      subtotal: "Subtotal",
      checkout: "Checkout",
    },
    footer: {
      text: "Luxury minimalism for the modern lifestyle. Crafted with precision, designed for longevity.",
      shop: "Shop",
      assistance: "Assistance",
      newsletter: "Newsletter",
      newsletterText: "Join our exclusive circle for seasonal updates and bespoke insights.",
      email: "Email address",
      rights: "All rights reserved.",
      shopLinks: ["Bags", "Accessories", "Essentials", "New Arrivals", "Care Guide"],
      assistanceLinks: ["Shipping & Delivery", "Returns & Exchanges", "Product Warranty", "Privacy Policy", "Terms of Service"],
      legal: ["Cookies", "Accessibility", "Italy"],
    },
  },
  it: {
    nav: { shop: "Shop", collections: "Collezioni", about: "Chi siamo", cart: "Carrello" },
    home: {
      eyebrow: "Nuovi arrivi",
      title: <>Pensato per <br /> la semplicita`.</>,
      description: "Essenziali elevati, realizzati con i migliori materiali. Un equilibrio tra qualita` durevole e forma minimalista.",
      shop: "Acquista la collezione",
      story: "La storia",
      collectionTitle: "La collezione essenziale",
      viewAll: "Vedi tutti i prodotti",
      bestSeller: "Piu` venduto",
      philosophy: "La nostra filosofia",
      philosophyTitle: <>Materiali onesti. <br /> Design senza tempo.</>,
      philosophyText: "Crediamo nella bellezza della semplicita`. Ogni pezzo LussoLab unisce artigianato tradizionale e ingegneria contemporanea, pensato per accompagnarti nel tempo.",
      sustainable: "Sostenibile",
      sustainableText: "Pelle italiana selezionata responsabilmente.",
      artisanal: "Artigianale",
      artisanalText: "Rifinito a mano da maestri artigiani.",
      learnMore: "Scopri di piu`",
      benefits: [
        ["Spedizione express gratuita", "Spedizione inclusa per ordini superiori a 250 dollari."],
        ["Cambi semplici", "Periodo gratuito di reso e cambio di 30 giorni."],
        ["Garanzia a vita", "Ogni articolo e` garantito per una vita di utilizzo."],
        ["Concierge globale", "Il nostro team e` disponibile 24/7 per assistenza personalizzata."],
      ],
    },
    product: {
      back: "Torna alla collezione",
      color: "Colore",
      add: "Aggiungi alla borsa",
      shipping: "Spedizione",
      shippingText: "Spedizione standard entro 3-5 giorni lavorativi.",
      service: "Servizio",
      serviceText: "Cambi gratuiti e resi concierge.",
      specs: "Specifiche",
      craft: "La lavorazione",
      craftTitle: <>Ogni cucitura racconta <br /> precisione e pazienza.</>,
    },
    shop: {
      title: "Tutti i prodotti",
      text: "La collezione completa e` in fase di curatela. Torna presto per l'accesso esclusivo.",
    },
    collections: {
      title: "Collezioni",
      items: ["Pelletteria", "Minimalismo digitale", "Essenziali da viaggio"],
    },
    about: {
      title: <>Nato da una visione <br /> di chiarezza assoluta.</>,
      text: "LussoLab nasce nel 2024 con una missione precisa: eliminare il rumore della vita moderna e tornare all'essenza dell'utilita` bella. Crediamo nel meglio, non nel di piu`.",
    },
    checkout: {
      successTitle: "Ordine confermato",
      successText: "Grazie per aver scelto LussoLab. La tua selezione viene preparata con cura per la spedizione.",
      home: "Torna alla home",
      return: "Torna alla borsa",
      title: "Checkout sicuro",
      identity: "01. Identita`",
      name: "Nome completo",
      email: "Indirizzo email",
      destination: "02. Destinazione",
      address: "Indirizzo",
      city: "Citta`",
      postal: "CAP",
      country: "Paese",
      transaction: "03. Transazione",
      card: "Numero carta (mock)",
      finalize: "Finalizza pagamento",
      summary: "Riepilogo",
      subtotal: "Subtotale",
      shipping: "Spedizione",
      total: "Totale",
    },
    cart: {
      title: "Borsa",
      unique: "articoli unici",
      empty: "La tua borsa e` vuota.",
      continue: "Continua lo shopping",
      color: "Colore",
      remove: "Rimuovi",
      subtotal: "Subtotale",
      checkout: "Checkout",
    },
    footer: {
      text: "Minimalismo luxury per lo stile di vita moderno. Realizzato con precisione, progettato per durare.",
      shop: "Shop",
      assistance: "Assistenza",
      newsletter: "Newsletter",
      newsletterText: "Entra nella nostra cerchia esclusiva per aggiornamenti stagionali e insight su misura.",
      email: "Indirizzo email",
      rights: "Tutti i diritti riservati.",
      shopLinks: ["Borse", "Accessori", "Essenziali", "Nuovi arrivi", "Guida alla cura"],
      assistanceLinks: ["Spedizioni", "Resi e cambi", "Garanzia prodotto", "Privacy", "Termini di servizio"],
      legal: ["Cookie", "Accessibilita`", "Italia"],
    },
  },
  de: {
    nav: { shop: "Shop", collections: "Kollektionen", about: "Ueber uns", cart: "Warenkorb" },
    home: {
      eyebrow: "Neuheiten",
      title: <>Entworfen fuer <br /> Einfachheit.</>,
      description: "Erhabene Essentials aus feinsten Materialien. Ein Zeichen fuer dauerhafte Qualitaet und minimalistische Form.",
      shop: "Kollektion kaufen",
      story: "Die Geschichte",
      collectionTitle: "Die Core Collection",
      viewAll: "Alle Produkte ansehen",
      bestSeller: "Bestseller",
      philosophy: "Unsere Philosophie",
      philosophyTitle: <>Ehrliche Materialien. <br /> Zeitloses Design.</>,
      philosophyText: "Wir glauben an die Schoenheit der Einfachheit. Jedes LussoLab-Stueck verbindet traditionelles Handwerk mit moderner Technik und entwickelt sich mit dir weiter.",
      sustainable: "Nachhaltig",
      sustainableText: "Verantwortungsvoll bezogenes italienisches Leder.",
      artisanal: "Handwerklich",
      artisanalText: "Von Meisterhand fertiggestellt.",
      learnMore: "Mehr erfahren",
      benefits: [
        ["Kostenloser Expressversand", "Kostenloser Versand fuer alle Bestellungen ueber 250 Dollar."],
        ["Einfacher Umtausch", "Kostenlose Rueckgabe und Umtausch innerhalb von 30 Tagen."],
        ["Lebenslange Garantie", "Jedes Produkt ist fuer lange Nutzung garantiert."],
        ["Globaler Concierge", "Unser Team ist rund um die Uhr fuer individuelle Hilfe erreichbar."],
      ],
    },
    product: {
      back: "Zurueck zur Kollektion",
      color: "Farbe",
      add: "In die Tasche",
      shipping: "Versand",
      shippingText: "Standardversand innerhalb von 3-5 Werktagen.",
      service: "Service",
      serviceText: "Kostenloser Umtausch und Concierge-Rueckgaben.",
      specs: "Spezifikationen",
      craft: "Das Handwerk",
      craftTitle: <>Jede Naht erzaehlt von <br /> Praezision und Geduld.</>,
    },
    shop: {
      title: "Alle Produkte",
      text: "Die komplette Kollektion wird derzeit kuratiert. Schau bald wieder vorbei fuer exklusiven Zugang.",
    },
    collections: {
      title: "Kollektionen",
      items: ["Lederwaren", "Digitaler Minimalismus", "Reise-Essentials"],
    },
    about: {
      title: <>Geboren aus einer Vision <br /> absoluter Klarheit.</>,
      text: "LussoLab wurde 2024 mit einer klaren Mission gegruendet: den Laerm des modernen Lebens zu reduzieren und zur Essenz schoener Nuetzlichkeit zurueckzukehren. Wir glauben an besser, nicht an mehr.",
    },
    checkout: {
      successTitle: "Bestellung bestaetigt",
      successText: "Danke, dass du LussoLab gewaehlt hast. Deine Auswahl wird sorgfaeltig fuer den Versand vorbereitet.",
      home: "Zurueck zur Startseite",
      return: "Zurueck zur Tasche",
      title: "Sicherer Checkout",
      identity: "01. Identitaet",
      name: "Vollstaendiger Name",
      email: "E-Mail-Adresse",
      destination: "02. Zieladresse",
      address: "Strasse und Hausnummer",
      city: "Stadt",
      postal: "Postleitzahl",
      country: "Land",
      transaction: "03. Zahlung",
      card: "Kartennummer (Demo)",
      finalize: "Zahlung abschliessen",
      summary: "Zusammenfassung",
      subtotal: "Zwischensumme",
      shipping: "Versand",
      total: "Gesamt",
    },
    cart: {
      title: "Shopping Bag",
      unique: "einzelne Artikel",
      empty: "Deine Tasche ist aktuell leer.",
      continue: "Weiter einkaufen",
      color: "Farbe",
      remove: "Entfernen",
      subtotal: "Zwischensumme",
      checkout: "Checkout",
    },
    footer: {
      text: "Luxury-Minimalismus fuer den modernen Lebensstil. Praezise gefertigt, fuer Langlebigkeit entworfen.",
      shop: "Shop",
      assistance: "Hilfe",
      newsletter: "Newsletter",
      newsletterText: "Tritt unserem exklusiven Kreis fuer saisonale Updates und kuratierte Einblicke bei.",
      email: "E-Mail-Adresse",
      rights: "Alle Rechte vorbehalten.",
      shopLinks: ["Taschen", "Accessoires", "Essentials", "Neuheiten", "Pflegeanleitung"],
      assistanceLinks: ["Versand", "Rueckgabe und Umtausch", "Produktgarantie", "Datenschutz", "Nutzungsbedingungen"],
      legal: ["Cookies", "Barrierefreiheit", "Italien"],
    },
  },
} as const

function getLussoCopy(locale: Locale) {
  return lussolabCopy[locale] ?? lussolabCopy.en
}

const products: Product[] = [
  {
    id: "luna-tote",
    name: "Luna Tote",
    price: 345,
    description:
      "A structural masterpiece crafted from Italian pebbled leather. Designed for the modern professional who values form as much as function.",
    category: "Bags",
    images: [`${imagePath}/luna-tote-image.png`, `${imagePath}/luna-tote-image.png`],
    colors: [
      { name: "Onyx", hex: "#1A1A1A" },
      { name: "Sand", hex: "#D2B48C" },
      { name: "Slate", hex: "#708090" },
    ],
    details: ["Hand-painted edges", "Solid brass hardware with gold finish", 'Internal laptop pocket (up to 14")', "Reinforced base for longevity"],
    specs: [
      { label: "Material", value: "100% Full-grain leather" },
      { label: "Dimensions", value: "38cm x 30cm x 12cm" },
      { label: "Origin", value: "Handcrafted in Italy" },
    ],
  },
  {
    id: "folio-case",
    name: "Folio Case",
    price: 185,
    description: "Protect your essentials with our minimalist folio. Slim enough for your carry-on, substantial enough to stand alone.",
    category: "Accessories",
    images: [`${imagePath}/folio-case-image.png`, `${imagePath}/folio-case-image.png`],
    colors: [
      { name: "Cognac", hex: "#964B00" },
      { name: "Midnight", hex: "#191970" },
    ],
    details: ["Microfiber lining", "Magnetic closure system", "Two internal card slots", "Debossed brand signature"],
    specs: [
      { label: "Material", value: "Nappa leather" },
      { label: "Weight", value: "240g" },
      { label: "Compatibility", value: "iPad Pro & documents" },
    ],
  },
  {
    id: "horizon-wallet",
    name: "Horizon Wallet",
    price: 95,
    description: "A compact companion for the minimalist. Features curved slots for easy access and a slim profile that disappears in your pocket.",
    category: "Essentials",
    images: [`${imagePath}/horizon-wallet-image.png`, `${imagePath}/horizon-wallet-image.png`],
    colors: [
      { name: "Forest", hex: "#228B22" },
      { name: "Sable", hex: "#000000" },
    ],
    details: ["RFID protection", "Six card slots", "Tucked-under seams", "Vegetable-tanned leather"],
    specs: [
      { label: "Capacity", value: "8-10 cards + bills" },
      { label: "Feel", value: "Smooth, matte finish" },
    ],
  },
]

const localizedProductCopy: Record<"it" | "de", Record<string, Partial<Product>>> = {
  it: {
    "luna-tote": {
      description: "Una borsa strutturale in pelle italiana martellata. Pensata per chi cerca funzione, forma e presenza discreta.",
      category: "Borse",
      details: ["Bordi dipinti a mano", "Ferramenta in ottone con finitura oro", "Tasca interna per laptop fino a 14 pollici", "Base rinforzata per durare"],
      specs: [
        { label: "Materiale", value: "100% pelle pieno fiore" },
        { label: "Dimensioni", value: "38cm x 30cm x 12cm" },
        { label: "Origine", value: "Realizzata a mano in Italia" },
      ],
    },
    "folio-case": {
      description: "Proteggi gli essenziali con una custodia minimale: sottile per il viaggio, solida abbastanza da vivere da sola.",
      category: "Accessori",
      details: ["Fodera in microfibra", "Chiusura magnetica", "Due slot interni per carte", "Firma del brand impressa"],
      specs: [
        { label: "Materiale", value: "Pelle nappa" },
        { label: "Peso", value: "240g" },
        { label: "Compatibilita`", value: "iPad Pro e documenti" },
      ],
    },
    "horizon-wallet": {
      description: "Un compagno compatto per il minimalista. Slot curvi, accesso rapido e profilo sottile.",
      category: "Essenziali",
      details: ["Protezione RFID", "Sei slot per carte", "Cuciture nascoste", "Pelle conciata al vegetale"],
      specs: [
        { label: "Capacita`", value: "8-10 carte + contanti" },
        { label: "Finitura", value: "Liscia e opaca" },
      ],
    },
  },
  de: {
    "luna-tote": {
      description: "Eine strukturierte Tasche aus italienischem Narbenleder. Entworfen fuer moderne Professionals, die Form und Funktion schaetzen.",
      category: "Taschen",
      details: ["Handbemalte Kanten", "Massive Messingbeschlaege mit Goldfinish", "Innenfach fuer Laptop bis 14 Zoll", "Verstaerkter Boden fuer Langlebigkeit"],
      specs: [
        { label: "Material", value: "100% Vollnarbenleder" },
        { label: "Masse", value: "38cm x 30cm x 12cm" },
        { label: "Herkunft", value: "Handgefertigt in Italien" },
      ],
    },
    "folio-case": {
      description: "Schuetze deine Essentials mit einem minimalistischen Folio: schlank fuer Reisen, stark genug als eigenes Statement.",
      category: "Accessoires",
      details: ["Mikrofaserfutter", "Magnetverschluss", "Zwei interne Kartenfaecher", "Gepraegte Markensignatur"],
      specs: [
        { label: "Material", value: "Nappaleder" },
        { label: "Gewicht", value: "240g" },
        { label: "Kompatibilitaet", value: "iPad Pro und Dokumente" },
      ],
    },
    "horizon-wallet": {
      description: "Ein kompakter Begleiter fuer Minimalisten. Geschwungene Slots, schneller Zugriff und ein schlankes Profil.",
      category: "Essentials",
      details: ["RFID-Schutz", "Sechs Kartenfaecher", "Verdeckte Naehte", "Pflanzlich gegerbtes Leder"],
      specs: [
        { label: "Kapazitaet", value: "8-10 Karten + Scheine" },
        { label: "Gefuehl", value: "Glatt, mattes Finish" },
      ],
    },
  },
}

function getProducts(locale: Locale) {
  const localized = locale === "en" ? undefined : localizedProductCopy[locale]
  return products.map((product) => ({ ...product, ...(localized?.[product.id] ?? {}) }))
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price)
}

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ")
}

function PageLink({
  to,
  children,
  className,
  onNavigate,
}: {
  to: Route
  children: ReactNode
  className?: string
  onNavigate: (route: Route) => void
}) {
  return (
    <button type="button" onClick={() => onNavigate(to)} className={className}>
      {children}
    </button>
  )
}

function Navbar({
  totalItems,
  setIsCartOpen,
  navigate,
  copy,
}: {
  totalItems: number
  setIsCartOpen: (open: boolean) => void
  navigate: (route: Route) => void
  copy: ReturnType<typeof getLussoCopy>
}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks: { name: string; route: Route }[] = [
    { name: copy.nav.shop, route: "shop" },
    { name: copy.nav.collections, route: "collections" },
    { name: copy.nav.about, route: "about" },
  ]

  return (
    <nav className={cx("fixed left-0 right-0 top-0 z-50 py-6 transition-all duration-500", isScrolled ? "bg-[#fdfbf7]/90 py-4 shadow-sm backdrop-blur-md" : "bg-transparent")}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <button className="text-[#121212] lg:hidden" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>

        <div className="hidden items-center space-x-12 lg:flex">
          {navLinks.map((link) => (
            <PageLink key={link.name} to={link.route} onNavigate={navigate} className="text-[11px] font-medium uppercase tracking-[0.25em] transition-opacity hover:opacity-50">
              {link.name}
            </PageLink>
          ))}
        </div>

        <PageLink to="home" onNavigate={navigate} className="absolute left-1/2 -translate-x-1/2 text-xl font-light uppercase tracking-[0.32em] sm:text-2xl sm:tracking-[0.4em]">
          LussoLab
        </PageLink>

        <div className="flex items-center space-x-5 sm:space-x-6">
          <button className="hidden transition-opacity hover:opacity-50 sm:block" aria-label="Search">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button onClick={() => setIsCartOpen(true)} className="group relative flex items-center space-x-2 transition-opacity hover:opacity-50">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.1em] sm:block">{copy.nav.cart} ({totalItems})</span>
            {totalItems > 0 && <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#121212] text-[8px] text-white sm:hidden">{totalItems}</span>}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm lg:hidden" />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 z-50 h-full w-[80%] max-w-sm bg-[#fdfbf7] p-10 lg:hidden"
            >
              <button onClick={() => setIsMobileMenuOpen(false)} className="absolute right-8 top-8" aria-label="Close menu">
                <X size={24} strokeWidth={1.5} />
              </button>
              <div className="mt-12 flex flex-col space-y-8">
                {navLinks.map((link) => (
                  <PageLink
                    key={link.name}
                    to={link.route}
                    onNavigate={(route) => {
                      setIsMobileMenuOpen(false)
                      navigate(route)
                    }}
                    className="text-left text-xl font-light uppercase tracking-widest"
                  >
                    {link.name}
                  </PageLink>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

function Home({ navigate, copy, productList }: { navigate: (route: Route) => void; copy: ReturnType<typeof getLussoCopy>; productList: Product[] }) {
  const featuredProducts = productList.slice(0, 3)

  return (
    <div className="pt-20">
      <section className="relative flex h-[90vh] items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={`${imagePath}/hero-image.png`} alt="LussoLab premium essentials" className="h-full w-full scale-105 object-cover object-center" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-2xl">
            <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="text-6xl font-light leading-[0.9] tracking-tight text-white md:text-8xl">
              {copy.home.title}
            </motion.h1>
            <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="mt-8 max-w-lg text-lg font-light leading-relaxed text-white/80 md:text-xl">
              {copy.home.description}
            </motion.p>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="mt-12 flex items-center space-x-6">
              <PageLink to="shop" onNavigate={navigate} className="bg-white px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-[#121212] transition-all duration-300 hover:bg-[#f5f2ed]">
                {copy.home.shop}
              </PageLink>
              <PageLink to="about" onNavigate={navigate} className="border-b border-white/30 pb-1 text-xs font-medium uppercase tracking-[0.2em] text-white transition-all hover:border-white">
                {copy.home.story}
              </PageLink>
            </motion.div>
          </div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50">
          <ArrowDown size={32} strokeWidth={1} />
        </motion.div>
      </section>

      <section className="container mx-auto px-6 py-32">
        <div className="mb-20 flex flex-col items-start justify-between md:flex-row md:items-end">
          <div>
            <span className="mb-4 block text-[10px] font-medium uppercase tracking-[0.4em] text-gray-400">{copy.home.eyebrow}</span>
            <h2 className="text-4xl font-light tracking-tight md:text-5xl">{copy.home.collectionTitle}</h2>
          </div>
          <PageLink to="shop" onNavigate={navigate} className="group mt-6 flex items-center space-x-3 text-[11px] font-medium uppercase tracking-[0.2em] md:mt-0">
            <span>{copy.home.viewAll}</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </PageLink>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, idx) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.8 }} className="group">
              <PageLink to={`product:${product.id}`} onNavigate={navigate} className="block w-full text-left">
                <div className="relative mb-6 aspect-[3/4] overflow-hidden bg-[#f5f2ed]">
                  <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
                  {idx === 1 && <span className="absolute left-6 top-6 bg-[#121212] px-3 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-white">{copy.home.bestSeller}</span>}
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="mb-1 text-sm font-medium uppercase tracking-[0.15em]">{product.name}</h3>
                    <p className="text-xs font-light italic text-gray-400">{product.category}</p>
                  </div>
                  <span className="text-sm font-light">{formatPrice(product.price)}</span>
                </div>
              </PageLink>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-[#f5f2ed] py-20">
        <div className="container mx-auto px-0 md:px-6">
          <div className="flex flex-col items-stretch lg:flex-row">
            <div className="aspect-square w-full lg:aspect-auto lg:w-1/2">
              <img src={`${imagePath}/honest-materials.png`} alt="Craftsmanship" className="h-full w-full object-cover" />
            </div>
            <div className="flex w-full flex-col justify-center bg-[#121212] p-12 text-white md:p-24 lg:w-1/2">
              <span className="mb-8 text-[10px] font-medium uppercase tracking-[0.4em] text-white/40">{copy.home.philosophy}</span>
              <h2 className="mb-10 text-4xl font-light leading-tight md:text-5xl">
                {copy.home.philosophyTitle}
              </h2>
              <p className="mb-12 max-w-md font-light leading-relaxed text-white/60">
                {copy.home.philosophyText}
              </p>
              <div className="mb-12 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="mb-2 text-[10px] uppercase tracking-widest text-white/40">{copy.home.sustainable}</h4>
                  <p className="text-sm font-light">{copy.home.sustainableText}</p>
                </div>
                <div>
                  <h4 className="mb-2 text-[10px] uppercase tracking-widest text-white/40">{copy.home.artisanal}</h4>
                  <p className="text-sm font-light">{copy.home.artisanalText}</p>
                </div>
              </div>
              <PageLink to="about" onNavigate={navigate} className="w-fit border border-white px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-[#121212]">
                {copy.home.learnMore}
              </PageLink>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {copy.home.benefits.map(([title, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="space-y-4">
              <div className="h-px w-10 bg-[#121212]/20" />
              <h3 className="pt-2 text-xs font-medium uppercase tracking-[0.2em]">{title}</h3>
              <p className="text-sm font-light leading-relaxed text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

function ProductPage({
  product,
  addItem,
  goBack,
  copy,
}: {
  product: Product
  addItem: (product: Product, color: string, quantity: number) => void
  goBack: () => void
  copy: ReturnType<typeof getLussoCopy>
}) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name)
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setSelectedColor(product.colors[0].name)
    setActiveImage(0)
    setQuantity(1)
    window.scrollTo(0, 0)
  }, [product])

  const nextImage = () => setActiveImage((prev) => (prev + 1) % product.images.length)
  const prevImage = () => setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length)

  return (
    <div className="pb-40 pt-32">
      <div className="container mx-auto px-6">
        <button onClick={goBack} className="mb-20 flex items-center space-x-2 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 transition-colors hover:text-[#121212]">
          <ArrowLeft size={16} strokeWidth={1.5} />
          <span>{copy.product.back}</span>
        </button>

        <div className="flex flex-col lg:flex-row lg:space-x-24">
          <div className="space-y-8 lg:w-3/5">
            <div className="group relative aspect-[4/5] overflow-hidden bg-[#f5f2ed]">
              <AnimatePresence mode="wait">
                <motion.img key={activeImage} src={product.images[activeImage]} alt={product.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="h-full w-full object-cover" />
              </AnimatePresence>
              <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-6 opacity-0 transition-opacity group-hover:opacity-100">
                <button onClick={prevImage} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#121212]/20 bg-white/80 backdrop-blur-sm transition-all hover:bg-[#121212] hover:text-white">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={nextImage} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#121212]/20 bg-white/80 backdrop-blur-sm transition-all hover:bg-[#121212] hover:text-white">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:w-2/5">
            <div className="sticky top-32 space-y-10">
              <div>
                <span className="mb-4 block text-[10px] font-medium uppercase tracking-[0.4em] text-gray-400">{product.category}</span>
                <div className="flex items-start justify-between gap-6">
                  <h1 className="text-4xl font-light tracking-tight md:text-5xl">{product.name}</h1>
                  <span className="pt-2 text-2xl font-extralight">{formatPrice(product.price)}</span>
                </div>
              </div>

              <p className="font-light leading-relaxed text-gray-500">{product.description}</p>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em]">{copy.product.color}</span>
                  <span className="text-[10px] font-light italic text-gray-400">{selectedColor}</span>
                </div>
                <div className="flex space-x-4">
                  {product.colors.map((color) => (
                    <button key={color.name} onClick={() => setSelectedColor(color.name)} className={cx("flex h-10 w-10 items-center justify-center rounded-full border p-1 transition-all", selectedColor === color.name ? "border-2 border-[#121212]" : "border-gray-100 hover:border-[#121212]")} aria-label={color.name}>
                      <div className="h-full w-full rounded-full" style={{ backgroundColor: color.hex }} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <div className="flex items-center space-x-6 border border-gray-200 px-6 py-4">
                  <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="text-gray-400 hover:text-[#121212]">
                    <Minus size={16} />
                  </button>
                  <span className="w-4 text-center font-light">{quantity}</span>
                  <button onClick={() => setQuantity((q) => q + 1)} className="text-gray-400 hover:text-[#121212]">
                    <Plus size={16} />
                  </button>
                </div>
                <button onClick={() => addItem(product, selectedColor, quantity)} className="flex-1 bg-[#121212] px-8 py-4 text-xs font-medium uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-[#121212]/90">
                  {copy.product.add}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-x-8 border-t border-gray-100 pt-10">
                <div>
                  <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-widest">{copy.product.shipping}</h4>
                  <p className="text-[11px] leading-relaxed text-gray-400">{copy.product.shippingText}</p>
                </div>
                <div>
                  <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-widest">{copy.product.service}</h4>
                  <p className="text-[11px] leading-relaxed text-gray-400">{copy.product.serviceText}</p>
                </div>
              </div>

              <div className="space-y-6 pt-10">
                <h4 className="border-b border-gray-100 pb-4 text-[10px] font-medium uppercase tracking-[0.2em]">{copy.product.specs}</h4>
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex items-center justify-between text-xs">
                    <span className="font-light text-gray-400">{spec.label}</span>
                    <span className="font-medium tracking-wide text-[#121212]/80">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-40 overflow-hidden bg-[#f5f2ed] py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-20 lg:flex-row lg:gap-32">
            <div className="lg:w-1/2">
              <span className="mb-8 block text-[10px] font-medium uppercase tracking-[0.4em] text-[#121212]/40">{copy.product.craft}</span>
              <h2 className="mb-12 text-4xl font-light italic leading-tight tracking-tight md:text-5xl">
                {copy.product.craftTitle}
              </h2>
              <div className="space-y-10">
                {product.details.map((detail, idx) => (
                  <motion.div key={detail} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex items-center space-x-6">
                    <span className="text-[10px] font-medium text-[#121212]/30">0{idx + 1}</span>
                    <p className="text-lg font-light italic text-[#121212]/80">{detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/5] bg-[#fdfbf7] p-12 lg:w-1/2">
              <img src={product.images[1]} alt="Process" className="h-full w-full skew-y-3 object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Shop({ copy }: { copy: ReturnType<typeof getLussoCopy> }) {
  return (
    <div className="container mx-auto min-h-screen px-6 pt-40">
      <h1 className="mb-12 text-4xl font-extralight uppercase tracking-tight">{copy.shop.title}</h1>
      <p className="font-light italic text-gray-400">{copy.shop.text}</p>
    </div>
  )
}

function Collections({ copy }: { copy: ReturnType<typeof getLussoCopy> }) {
  return (
    <div className="container mx-auto min-h-screen px-6 pt-40">
      <h1 className="mb-12 text-4xl font-extralight uppercase tracking-tight">{copy.collections.title}</h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {copy.collections.items.map((collection) => (
          <div key={collection} className="group relative flex aspect-video cursor-pointer items-center justify-center overflow-hidden bg-[#f5f2ed]">
            <span className="relative z-10 text-xs font-medium uppercase tracking-[0.4em] transition-all group-hover:tracking-[0.6em]">{collection}</span>
            <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/5" />
          </div>
        ))}
      </div>
    </div>
  )
}

function About({ copy }: { copy: ReturnType<typeof getLussoCopy> }) {
  return (
    <div className="container mx-auto min-h-screen px-6 pb-40 pt-40">
      <div className="mx-auto max-w-3xl space-y-12">
        <h1 className="text-6xl font-light italic tracking-tight">
          {copy.about.title}
        </h1>
        <p className="text-xl font-light leading-relaxed text-gray-500">
          {copy.about.text}
        </p>
        <div className="aspect-video bg-[#f5f2ed]">
          <img src={`${imagePath}/honest-materials.png`} alt="About LussoLab" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  )
}

function Checkout({
  cartItems,
  subtotal,
  goBack,
  navigate,
  copy,
}: {
  cartItems: (CartItem & { product: Product })[]
  subtotal: number
  goBack: () => void
  navigate: (route: Route) => void
  copy: ReturnType<typeof getLussoCopy>
}) {
  const [success, setSuccess] = useState(false)

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6 pt-20">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-md border border-gray-50 bg-white p-12 text-center shadow-xl">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
            <CheckCircle2 size={32} className="text-green-500" strokeWidth={1.5} />
          </div>
          <h2 className="mb-4 text-2xl font-light uppercase tracking-tight">{copy.checkout.successTitle}</h2>
          <p className="mb-10 text-sm font-light italic leading-relaxed text-gray-400">{copy.checkout.successText}</p>
          <PageLink to="home" onNavigate={navigate} className="inline-block bg-[#121212] px-10 py-3 text-[10px] font-medium uppercase tracking-[0.3em] text-white">
            {copy.checkout.home}
          </PageLink>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f5f2ed]/30 pb-40 pt-32">
      <div className="container mx-auto px-6">
        <button onClick={goBack} className="mb-16 flex items-center space-x-2 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 transition-colors hover:text-[#121212]">
          <ArrowLeft size={16} strokeWidth={1.5} />
          <span>{copy.checkout.return}</span>
        </button>

        <div className="flex flex-col lg:flex-row lg:space-x-20">
          <div className="flex-1 space-y-16">
            <h1 className="mb-12 text-4xl font-extralight tracking-tight">{copy.checkout.title}</h1>
            <form
              onSubmit={(event) => {
                event.preventDefault()
                setSuccess(true)
              }}
              className="space-y-12"
            >
              <section className="space-y-6">
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-300">{copy.checkout.identity}</h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <input type="text" placeholder={copy.checkout.name} required className="w-full border-b border-gray-200 bg-transparent py-3 text-sm font-light transition-colors focus:border-[#121212] focus:outline-none" />
                  <input type="email" placeholder={copy.checkout.email} required className="w-full border-b border-gray-200 bg-transparent py-3 text-sm font-light transition-colors focus:border-[#121212] focus:outline-none" />
                </div>
              </section>
              <section className="space-y-6">
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-300">{copy.checkout.destination}</h3>
                <input type="text" placeholder={copy.checkout.address} required className="w-full border-b border-gray-200 bg-transparent py-3 text-sm font-light transition-colors focus:border-[#121212] focus:outline-none" />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <input type="text" placeholder={copy.checkout.city} required className="border-b border-gray-200 bg-transparent py-3 text-sm font-light transition-colors focus:border-[#121212] focus:outline-none" />
                  <input type="text" placeholder={copy.checkout.postal} required className="border-b border-gray-200 bg-transparent py-3 text-sm font-light transition-colors focus:border-[#121212] focus:outline-none" />
                  <input type="text" placeholder={copy.checkout.country} required className="border-b border-gray-200 bg-transparent py-3 text-sm font-light transition-colors focus:border-[#121212] focus:outline-none" />
                </div>
              </section>
              <section className="space-y-6">
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-300">{copy.checkout.transaction}</h3>
                <div className="space-y-8 border border-[#f5f2ed] bg-white/50 p-8 backdrop-blur-sm">
                  <input type="text" placeholder={copy.checkout.card} className="w-full border-b border-[#f5f2ed] bg-transparent py-3 text-sm font-light transition-colors focus:border-[#121212] focus:outline-none" />
                  <div className="grid grid-cols-2 gap-8">
                    <input type="text" placeholder="MM / YY" className="border-b border-[#f5f2ed] bg-transparent py-3 text-sm font-light transition-colors focus:border-[#121212] focus:outline-none" />
                    <input type="text" placeholder="CVC" className="border-b border-[#f5f2ed] bg-transparent py-3 text-sm font-light transition-colors focus:border-[#121212] focus:outline-none" />
                  </div>
                </div>
              </section>
              <button type="submit" className="w-full bg-[#121212] px-8 py-5 text-[11px] font-medium uppercase tracking-[0.4em] text-white transition-all duration-300 hover:bg-[#121212]/90">
                {copy.checkout.finalize} - {formatPrice(subtotal + 20)}
              </button>
            </form>
          </div>

          <div className="mt-20 lg:mt-0 lg:w-[400px]">
            <div className="sticky top-32 space-y-10 bg-white p-10 shadow-sm">
              <h2 className="border-b border-gray-100 pb-6 text-[11px] font-medium uppercase tracking-[0.3em]">{copy.checkout.summary}</h2>
              <div className="space-y-8">
                {cartItems.map((item) => (
                  <div key={`${item.productId}-${item.selectedColor}`} className="flex space-x-6">
                    <div className="h-20 w-16 flex-shrink-0 bg-[#f5f2ed]">
                      <img src={item.product.images[0]} alt={item.product.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between py-1">
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-widest">{item.product.name}</p>
                        <p className="mt-1 text-[10px] font-light uppercase italic text-gray-400">Qty: {item.quantity} / {item.selectedColor}</p>
                      </div>
                      <span className="text-[11px] font-light">{formatPrice(item.product.price * item.quantity)}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4 border-t border-gray-100 pt-10">
                <div className="flex justify-between text-[11px] font-light uppercase tracking-widest">
                  <span className="text-gray-400">{copy.checkout.subtotal}</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[11px] font-light uppercase tracking-widest">
                  <span className="text-gray-400">{copy.checkout.shipping}</span>
                  <span>{formatPrice(20)}</span>
                </div>
                <div className="flex items-center justify-between pt-6">
                  <span className="text-[10px] font-medium uppercase tracking-[0.3em]">{copy.checkout.total}</span>
                  <span className="text-2xl font-extralight tracking-tighter">{formatPrice(subtotal + 20)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CartDrawer({
  isCartOpen,
  setIsCartOpen,
  cartItems,
  subtotal,
  updateQuantity,
  removeItem,
  navigate,
  copy,
}: {
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
  cartItems: (CartItem & { product: Product })[]
  subtotal: number
  updateQuantity: (productId: string, color: string, delta: number) => void
  removeItem: (productId: string, color: string) => void
  navigate: (route: Route) => void
  copy: ReturnType<typeof getLussoCopy>
}) {
  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCartOpen(false)} className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm" />
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 p-8">
              <div>
                <h2 className="text-sm font-medium uppercase tracking-[0.2em]">{copy.cart.title}</h2>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-gray-500">{cartItems.length} {copy.cart.unique}</p>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="transition-transform duration-300 hover:rotate-90">
                <X size={24} strokeWidth={1} />
              </button>
            </div>

            <div className="flex-1 space-y-8 overflow-y-auto px-8 py-4">
              {cartItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center space-y-6 text-center">
                  <p className="text-sm font-light italic text-gray-500">{copy.cart.empty}</p>
                  <button onClick={() => setIsCartOpen(false)} className="border-b border-[#121212] pb-1 text-[10px] font-medium uppercase tracking-[0.2em]">
                    {copy.cart.continue}
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={`${item.productId}-${item.selectedColor}`} className="group flex space-x-6">
                    <div className="h-32 w-24 flex-shrink-0 overflow-hidden bg-[#f5f2ed]">
                      <img src={item.product.images[0]} alt={item.product.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between py-1">
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-xs font-medium uppercase tracking-widest">{item.product.name}</h3>
                          <span className="text-xs font-light">{formatPrice(item.product.price)}</span>
                        </div>
                        <p className="mt-1 text-[10px] uppercase text-gray-400">{copy.cart.color}: {item.selectedColor}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 border border-gray-100 bg-gray-50/50 px-3 py-1">
                          <button onClick={() => updateQuantity(item.productId, item.selectedColor, -1)} className="text-gray-400 hover:text-[#121212]">
                            <Minus size={12} />
                          </button>
                          <span className="w-4 text-center text-[10px]">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.productId, item.selectedColor, 1)} className="text-gray-400 hover:text-[#121212]">
                            <Plus size={12} />
                          </button>
                        </div>
                        <button onClick={() => removeItem(item.productId, item.selectedColor)} className="text-[10px] uppercase tracking-widest text-gray-400 underline decoration-gray-200 underline-offset-4 transition-colors hover:text-red-500">
                          {copy.cart.remove}
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="space-y-6 border-t border-gray-100 p-8">
                <div className="flex items-center justify-between px-2">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">{copy.cart.subtotal}</span>
                  <span className="text-lg font-light tracking-tight">{formatPrice(subtotal)}</span>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false)
                    navigate("checkout")
                  }}
                  className="flex w-full items-center justify-center space-x-2 bg-[#121212] px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#121212]/90"
                >
                  <span>{copy.cart.checkout}</span>
                  <ArrowRight size={16} strokeWidth={1.5} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function Footer({ navigate, copy }: { navigate: (route: Route) => void; copy: ReturnType<typeof getLussoCopy> }) {
  return (
    <footer className="mt-20 bg-[#121212] py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-8">
            <PageLink to="home" onNavigate={navigate} className="text-2xl font-light uppercase tracking-[0.4em]">
              LussoLab
            </PageLink>
            <p className="max-w-xs text-sm font-light leading-relaxed text-white/40">{copy.footer.text}</p>
            <div className="flex space-x-6 text-white/60">
              <Instagram size={20} strokeWidth={1.5} className="cursor-pointer transition-colors hover:text-white" />
              <Twitter size={20} strokeWidth={1.5} className="cursor-pointer transition-colors hover:text-white" />
              <Facebook size={20} strokeWidth={1.5} className="cursor-pointer transition-colors hover:text-white" />
            </div>
          </div>
          {[
            [copy.footer.shop, ...copy.footer.shopLinks],
            [copy.footer.assistance, ...copy.footer.assistanceLinks],
          ].map(([title, ...items]) => (
            <div key={title} className="space-y-8">
              <h4 className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">{title}</h4>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item}>
                    <PageLink to="shop" onNavigate={navigate} className="text-sm font-light text-white/60 transition-colors hover:text-white">
                      {item}
                    </PageLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="space-y-8">
            <h4 className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">{copy.footer.newsletter}</h4>
            <p className="text-sm font-light text-white/40">{copy.footer.newsletterText}</p>
            <div className="group flex items-center space-x-4 border-b border-white/20 pb-4 transition-colors duration-500 focus-within:border-white">
              <input type="email" placeholder={copy.footer.email} className="flex-1 border-none bg-transparent text-sm font-light placeholder:text-white/20 focus:outline-none" />
              <button className="text-white/40 transition-all hover:translate-x-1 hover:text-white" aria-label="Subscribe">
                <ArrowRight size={20} strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-col items-center justify-between space-y-4 border-t border-white/10 pt-10 text-[10px] uppercase tracking-[0.2em] text-white/20 md:flex-row md:space-y-0">
          <p>&copy; 2026 LussoLab Lifestyle. {copy.footer.rights}</p>
          <div className="flex space-x-8">
            {copy.footer.legal.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function currentProduct(route: Route, productList: Product[]) {
  return route.startsWith("product:") ? productList.find((product) => product.id === route.slice("product:".length)) : undefined
}

export function AureliaPage({ locale = "en" }: { locale?: Locale }) {
  const [route, setRoute] = useState<Route>("home")
  const [history, setHistory] = useState<Route[]>(["home"])
  const [cartState, setCartState] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const productList = getProducts(locale)

  const cartItems = useMemo(
    () =>
      cartState
        .map((item) => ({ ...item, product: productList.find((product) => product.id === item.productId)! }))
        .filter((item) => Boolean(item.product)),
    [cartState, productList],
  )
  const totalItems = cartState.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  const navigate = (nextRoute: Route) => {
    setRoute(nextRoute)
    setHistory((previous) => [...previous, nextRoute])
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const goBack = () => {
    setHistory((previous) => {
      const nextHistory: Route[] = previous.length > 1 ? previous.slice(0, -1) : ["home"]
      setRoute(nextHistory[nextHistory.length - 1] ?? "home")
      return nextHistory
    })
  }

  const addItem = (product: Product, color: string, quantity: number) => {
    setCartState((previous) => {
      const existing = previous.find((item) => item.productId === product.id && item.selectedColor === color)
      if (existing) {
        return previous.map((item) => (item.productId === product.id && item.selectedColor === color ? { ...item, quantity: item.quantity + quantity } : item))
      }
      return [...previous, { productId: product.id, quantity, selectedColor: color }]
    })
    setIsCartOpen(true)
  }

  const updateQuantity = (productId: string, color: string, delta: number) => {
    setCartState((previous) => previous.map((item) => (item.productId === productId && item.selectedColor === color ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item)))
  }

  const removeItem = (productId: string, color: string) => {
    setCartState((previous) => previous.filter((item) => !(item.productId === productId && item.selectedColor === color)))
  }

  const product = currentProduct(route, productList)
  const copy = getLussoCopy(locale)

  return (
    <main className="lussolab-page min-h-screen bg-[#fdfbf7] font-sans text-[#121212] antialiased selection:bg-[#121212] selection:text-white">
      <Navbar totalItems={totalItems} setIsCartOpen={setIsCartOpen} navigate={navigate} copy={copy} />
      <ExampleLocaleSwitcher locale={locale} path="/lussolab" />
      <AnimatePresence mode="wait">
        <motion.div key={route} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
          {route === "home" && <Home navigate={navigate} copy={copy} productList={productList} />}
          {route === "shop" && <Shop copy={copy} />}
          {route === "collections" && <Collections copy={copy} />}
          {route === "about" && <About copy={copy} />}
          {route === "checkout" && <Checkout cartItems={cartItems} subtotal={subtotal} goBack={goBack} navigate={navigate} copy={copy} />}
          {product && <ProductPage product={product} addItem={addItem} goBack={goBack} copy={copy} />}
        </motion.div>
      </AnimatePresence>
      <Footer navigate={navigate} copy={copy} />
      <CartDrawer isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} cartItems={cartItems} subtotal={subtotal} updateQuantity={updateQuantity} removeItem={removeItem} navigate={navigate} copy={copy} />
    </main>
  )
}
