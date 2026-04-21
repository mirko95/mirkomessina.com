import type { LucideIcon } from "lucide-react"
import {
  ChefHat,
  Clock3,
  Heart,
  MapPinned,
  MenuSquare,
  Sparkles,
  Wine,
} from "lucide-react"
import type { Locale } from "@/lib/i18n"

export type MenuCategory = "starters" | "seafood" | "mains" | "desserts" | "drinks"

export type MenuItem = {
  name: string
  description: string
  price: string
  category: MenuCategory
  label?: string
}

type RestaurantData = {
  name: string
  slogan: string
  description: string
  address: string
  phone: string
  email: string
  mapsQuery: string
  heroPills: string[]
  heroStats: Array<{ value: string; label: string }>
  openingHours: Array<{ day: string; hours: string }>
  storyPoints: string[]
  highlights: { icon: LucideIcon; title: string; description: string }[]
}

type RestaurantMenuData = {
  menuCategories: Array<{ label: string; value: "all" | MenuCategory }>
  menuItems: MenuItem[]
  contactHighlights: { icon: LucideIcon; title: string; lines: string[] }[]
}

const baseRestaurant: RestaurantData = {
  name: "Harbor Kitchen",
  slogan: "Seasonal coastal dining with a modern European touch",
  description:
    "Harbor Kitchen is a premium neighborhood restaurant focused on clean flavors, seasonal ingredients, and warm service. The website is designed to feel refined, local, and easy to use on any device.",
  address: "Schiffgasse 18, 1020 Vienna, Austria",
  phone: "+43 1 555 0188",
  email: "hello@harborkitchen.example",
  mapsQuery: "Harbor Kitchen Vienna",
  heroPills: ["Seasonal menu", "Local sourcing", "Chef curated"],
  heroStats: [
    { value: "Lunch + Dinner", label: "Daily service" },
    { value: "Seasonal", label: "Menu changes" },
    { value: "4.9/5", label: "Guest rating" },
  ],
  openingHours: [
    { day: "Mon", hours: "Closed" },
    { day: "Tue-Thu", hours: "11:30 - 22:00" },
    { day: "Fri-Sat", hours: "11:30 - 23:00" },
    { day: "Sun", hours: "12:00 - 21:00" },
  ],
  storyPoints: [
    "Seasonal menus built around fresh fish, local produce, and handcrafted desserts.",
    "A calm dining room designed for long lunches, date nights, and private celebrations.",
    "Friendly, polished service with reservation support and clear contact details.",
  ],
  highlights: [
    { icon: ChefHat, title: "Chef-led kitchen", description: "Refined plates with a coastal identity and consistent execution." },
    { icon: Heart, title: "Warm hospitality", description: "A front-of-house experience that feels personal without being formal." },
    { icon: Sparkles, title: "Elegant branding", description: "Premium visuals, soft contrast, and calm typography." },
    { icon: MapPinned, title: "Local discoverability", description: "Opening hours, location, and navigation are always easy to find." },
  ],
}

const baseMenu: RestaurantMenuData = {
  menuCategories: [
    { label: "All dishes", value: "all" },
    { label: "Starters", value: "starters" },
    { label: "Seafood", value: "seafood" },
    { label: "Mains", value: "mains" },
    { label: "Desserts", value: "desserts" },
    { label: "Drinks", value: "drinks" },
  ],
  menuItems: [
    { name: "Charred Octopus", description: "Celeriac purée, preserved lemon, herbs, and fennel oil.", price: "18", category: "starters", label: "Chef favorite" },
    { name: "Burrata & Citrus", description: "Blood orange, olive crumble, basil oil, and toasted sourdough.", price: "16", category: "starters" },
    { name: "Catch of the Day", description: "Pan-seared fish, mussel broth, baby leeks, and charred potatoes.", price: "29", category: "seafood", label: "Signature dish" },
    { name: "Seared Scallops", description: "Pea velouté, smoked bacon, lemon zest, and sea herbs.", price: "26", category: "seafood" },
    { name: "Ribeye with Herb Butter", description: "28-day aged beef, green peppercorn jus, and roasted root vegetables.", price: "34", category: "mains" },
    { name: "Lemon Risotto", description: "Asparagus, parmesan, crispy shallots, and garden herbs.", price: "24", category: "mains" },
    { name: "Dark Chocolate Tart", description: "Candied hazelnuts, sea salt caramel, and vanilla cream.", price: "12", category: "desserts", label: "House dessert" },
    { name: "Poached Pear", description: "White chocolate mousse, poached wine syrup, and almond crumb.", price: "11", category: "desserts" },
    { name: "House Spritz", description: "Bitter aperitif, citrus, sparkling wine, and rosemary.", price: "13", category: "drinks" },
    { name: "Zero-Proof Garden Tonic", description: "Cucumber, elderflower, tonic, and mint.", price: "9", category: "drinks" },
  ],
  contactHighlights: [
    { icon: Clock3, title: "Opening hours", lines: ["Tue-Thu 11:30 - 22:00", "Fri-Sat 11:30 - 23:00", "Sun 12:00 - 21:00"] },
    { icon: MenuSquare, title: "Reservations", lines: ["Reserve online", "Private dining available", "Walk-ins welcome at lunch"] },
    { icon: Wine, title: "Events", lines: ["Birthday dinners", "Wine pairings", "Corporate tables"] },
  ],
}

const localized: Record<Locale, Partial<RestaurantData> & Partial<RestaurantMenuData>> = {
  en: {},
  it: {
    slogan: "Ristorazione costiera stagionale con un tocco europeo moderno",
    heroPills: ["Menu stagionale", "Prodotti locali", "Curato dallo chef"],
    description:
      "Harbor Kitchen e` un ristorante di quartiere premium focalizzato su sapori puliti, ingredienti stagionali e un servizio accogliente. Il sito e` progettato per sembrare raffinato, locale e facile da usare su qualsiasi dispositivo.",
    openingHours: [
      { day: "Lun", hours: "Chiuso" },
      { day: "Mar-Gio", hours: "11:30 - 22:00" },
      { day: "Ven-Sab", hours: "11:30 - 23:00" },
      { day: "Dom", hours: "12:00 - 21:00" },
    ],
    storyPoints: [
      "Menu stagionali basati su pesce fresco, prodotti locali e dessert artigianali.",
      "Una sala calma pensata per pranzi lunghi, cene romantiche e celebrazioni private.",
      "Servizio cortese e curato con supporto prenotazioni e contatti chiari.",
    ],
    highlights: [
      { icon: ChefHat, title: "Cucina guidata dallo chef", description: "Piatti curati con identita` costiera ed esecuzione costante." },
      { icon: Heart, title: "Ospitalita` calorosa", description: "Un'esperienza di sala personale senza essere formale." },
      { icon: Sparkles, title: "Branding elegante", description: "Visual premium, contrasto morbido e tipografia calma." },
      { icon: MapPinned, title: "Visibilita` locale", description: "Orari, posizione e navigazione sono sempre facili da trovare." },
    ],
    menuCategories: [
      { label: "Tutti i piatti", value: "all" },
      { label: "Antipasti", value: "starters" },
      { label: "Pesce", value: "seafood" },
      { label: "Portate principali", value: "mains" },
      { label: "Dessert", value: "desserts" },
      { label: "Bevande", value: "drinks" },
    ],
    menuItems: baseMenu.menuItems.map((item) => ({
      ...item,
      name:
        {
          "Charred Octopus": "Polpo grigliato",
          "Burrata & Citrus": "Burrata e agrumi",
          "Catch of the Day": "Pesce del giorno",
          "Seared Scallops": "Capesante scottate",
          "Ribeye with Herb Butter": "Ribeye con burro alle erbe",
          "Lemon Risotto": "Risotto al limone",
          "Dark Chocolate Tart": "Tarte al cioccolato fondente",
          "Poached Pear": "Pera pochè",
          "House Spritz": "Spritz della casa",
          "Zero-Proof Garden Tonic": "Garden tonic analcolico",
        }[item.name] ?? item.name,
      description:
        {
          "Celeriac purée, preserved lemon, herbs, and fennel oil.": "Purea di sedano rapa, limone conservato, erbe e olio di finocchio.",
          "Blood orange, olive crumble, basil oil, and toasted sourdough.": "Arancia rossa, crumble di olive, olio al basilico e pane tostato.",
          "Pan-seared fish, mussel broth, baby leeks, and charred potatoes.": "Pesce scottato, brodo di cozze, porri baby e patate arrostite.",
          "Pea velouté, smoked bacon, lemon zest, and sea herbs.": "Velouté di piselli, bacon affumicato, zest di limone ed erbe di mare.",
          "28-day aged beef, green peppercorn jus, and roasted root vegetables.": "Manzo frollato 28 giorni, salsa al pepe verde e verdure radice arrosto.",
          "Asparagus, parmesan, crispy shallots, and garden herbs.": "Asparagi, parmigiano, scalogni croccanti ed erbe dell'orto.",
          "Candied hazelnuts, sea salt caramel, and vanilla cream.": "Nocciole candite, caramello al sale marino e crema alla vaniglia.",
          "White chocolate mousse, poached wine syrup, and almond crumb.": "Mousse al cioccolato bianco, sciroppo al vino e crumble di mandorle.",
          "Bitter aperitif, citrus, sparkling wine, and rosemary.": "Aperitivo amaro, agrumi, spumante e rosmarino.",
          "Cucumber, elderflower, tonic, and mint.": "Cetriolo, fiori di sambuco, tonic e menta.",
        }[item.description] ?? item.description,
      label:
        {
          "Chef favorite": "Preferito dello chef",
          "Signature dish": "Piatto signature",
          "House dessert": "Dolce della casa",
        }[item.label ?? ""] ?? item.label,
    })),
    contactHighlights: [
      { icon: Clock3, title: "Orari di apertura", lines: ["Mar-Gio 11:30 - 22:00", "Ven-Sab 11:30 - 23:00", "Dom 12:00 - 21:00"] },
      { icon: MenuSquare, title: "Prenotazioni", lines: ["Prenota online", "Sala privata disponibile", "Accesso senza prenotazione a pranzo"] },
      { icon: Wine, title: "Eventi", lines: ["Cene di compleanno", "Abbinamenti vino", "Tavoli corporate"] },
    ],
  },
  de: {
    slogan: "Saisonale Kuestenkueche mit modernem europaeischem Touch",
    heroPills: ["Saisonales Menu", "Lokale Zutaten", "Chef kuratiert"],
    description:
      "Harbor Kitchen ist ein Premium-Nachbarschaftsrestaurant mit klaren Aromen, saisonalen Zutaten und warmem Service. Die Website ist so gestaltet, dass sie raffiniert, lokal und auf jedem Geraet leicht bedienbar wirkt.",
    openingHours: [
      { day: "Mo", hours: "Geschlossen" },
      { day: "Di-Do", hours: "11:30 - 22:00" },
      { day: "Fr-Sa", hours: "11:30 - 23:00" },
      { day: "So", hours: "12:00 - 21:00" },
    ],
    storyPoints: [
      "Saisonale Menus mit frischem Fisch, regionalen Produkten und hausgemachten Desserts.",
      "Ein ruhiger Dining Room fuer lange Lunches, Date Nights und private Feiern.",
      "Freundlicher, gepflegter Service mit Reservierungsunterstuetzung und klaren Kontaktdaten.",
    ],
    highlights: [
      { icon: ChefHat, title: "Chef-gefuehrte Kueche", description: "Fein abgestimmte Teller mit Kuesten-Identitaet und konstanter Qualitaet." },
      { icon: Heart, title: "Warme Gastfreundschaft", description: "Ein Front-of-House-Erlebnis, das persoenlich wirkt, ohne formell zu sein." },
      { icon: Sparkles, title: "Elegantes Branding", description: "Premium-Visuals, sanfter Kontrast und ruhige Typografie." },
      { icon: MapPinned, title: "Lokale Auffindbarkeit", description: "Oeffnungszeiten, Standort und Navigation sind leicht zu finden." },
    ],
    menuCategories: [
      { label: "Alle Gerichte", value: "all" },
      { label: "Vorspeisen", value: "starters" },
      { label: "Fisch", value: "seafood" },
      { label: "Hauptgerichte", value: "mains" },
      { label: "Desserts", value: "desserts" },
      { label: "Getraenke", value: "drinks" },
    ],
    contactHighlights: [
      { icon: Clock3, title: "Oeffnungszeiten", lines: ["Di-Do 11:30 - 22:00", "Fr-Sa 11:30 - 23:00", "So 12:00 - 21:00"] },
      { icon: MenuSquare, title: "Reservierungen", lines: ["Online reservieren", "Private Dining verfuegbar", "Walk-ins zur Mittagszeit willkommen"] },
      { icon: Wine, title: "Events", lines: ["Geburtstagsdinner", "Wine Pairings", "Firmentische"] },
    ],
  },
}

export function getRestaurantData(locale: Locale): RestaurantData {
  return {
    ...baseRestaurant,
    ...(localized[locale] ?? {}),
  }
}

export function getRestaurantMenuData(locale: Locale): RestaurantMenuData {
  return {
    ...baseMenu,
    ...(localized[locale] ?? {}),
  }
}
