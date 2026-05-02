import type { LucideIcon } from "lucide-react"
import { ChefHat, Clock3, Heart, MapPinned, MenuSquare, Sparkles, Wine } from "lucide-react"
import type { Locale } from "@/lib/i18n"

export type MenuCategory = "antipasti" | "primi" | "secondi" | "dolci" | "wine"

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
  images: {
    hero: string
    interior: string
    risotto: string
    salmon: string
    table: string
    steak: string
    chef: string
    window: string
    terrace: string
  }
}

type RestaurantMenuData = {
  menuCategories: Array<{ label: string; value: "all" | MenuCategory }>
  menuItems: MenuItem[]
  contactHighlights: { icon: LucideIcon; title: string; lines: string[] }[]
}

const images = {
  hero: "/images/a-tavola-restaurant-interior-hero.jpg",
  interior: "/images/a-tavola-dining-room-interior.png",
  risotto: "/images/wild-mushroom-risotto.png",
  salmon: "/images/salmon-signature-dish.png",
  table: "/images/romantic-candlelit-table-detail.png",
  steak: "/images/grilled-steak-plated-dish.png",
  chef: "/images/chef-plating-green-dish.png",
  window: "/images/candlelit-window-detail.png",
  terrace: "/images/a-tavola-evening-terrace.png",
}

const baseRestaurant: RestaurantData = {
  name: "A Tavola",
  slogan: "Since 1982 - Milano",
  description:
    "A Tavola is a contemporary Italian fine-dining restaurant where tradition meets architectural elegance, seasonal ingredients, and warm candlelit hospitality.",
  address: "12 Via della Tavola, Roma, Italia",
  phone: "+39 06 123 4567",
  email: "reservations@atavola.example",
  mapsQuery: "Via della Tavola Roma Italia",
  heroPills: ["Modern Italian", "Seasonal tasting", "Candlelit dining"],
  heroStats: [
    { value: "1982", label: "Established" },
    { value: "18:00-00:00", label: "Dinner service" },
    { value: "4.9/5", label: "Guest rating" },
  ],
  openingHours: [
    { day: "Mon-Sun", hours: "18:00 - 00:00" },
    { day: "Kitchen", hours: "18:30 - 22:45" },
    { day: "Private dining", hours: "On request" },
  ],
  storyPoints: [
    "Contemporary Italian plates rooted in seasonality, precise technique, and quiet drama.",
    "A candlelit dining room designed for long evenings, private celebrations, and city-center occasions.",
    "Chef Marco De Luca brings a Milan and Florence fine-dining background to a warm Roman table.",
  ],
  highlights: [
    { icon: ChefHat, title: "Chef Marco De Luca", description: "Thirty years of Italian fine-dining craft with a modern seasonal hand." },
    { icon: Heart, title: "Candlelit hospitality", description: "A polished dining room built for generous pacing and intimate evenings." },
    { icon: Sparkles, title: "Architectural elegance", description: "Dark charcoal, warm gold, and editorial imagery create a luxury first impression." },
    { icon: MapPinned, title: "Central Roma", description: "Contact, hours, and booking details stay clear from first visit to reservation." },
  ],
  images,
}

const baseMenu: RestaurantMenuData = {
  menuCategories: [
    { label: "All dishes", value: "all" },
    { label: "Antipasti", value: "antipasti" },
    { label: "Primi", value: "primi" },
    { label: "Secondi", value: "secondi" },
    { label: "Dolci", value: "dolci" },
    { label: "Wine", value: "wine" },
  ],
  menuItems: [
    { name: "Burrata Pugliese", price: "24", description: "Heirloom tomatoes, basil oil, aged balsamic caviar.", category: "antipasti" },
    { name: "Carpaccio di Manzo", price: "28", description: "Wagyu beef, truffle emulsion, parmigiano reggiano.", category: "antipasti", label: "Chef favorite" },
    { name: "Fiori di Zucca", price: "22", description: "Stuffed zucchini flowers, ricotta, honey-infused chili.", category: "antipasti" },
    { name: "Tagliolini al Tartufo", price: "38", description: "Handmade pasta, seasonal black truffle, butter emulsion.", category: "primi", label: "Signature" },
    { name: "Ravioli d'Aragosta", price: "42", description: "Lobster ravioli, bisque base, fresh chervil.", category: "primi" },
    { name: "Risotto ai Porcini", price: "36", description: "Acquerello rice, wild mushrooms, thyme.", category: "primi" },
    { name: "Costolette di Agnello", price: "48", description: "Herb-crusted lamb racks, potato puree, mint reduction.", category: "secondi" },
    { name: "Branzino al Sale", price: "46", description: "Sicilian sea bass, roasted Mediterranean vegetables.", category: "secondi" },
    { name: "Filetto alla Rossini", price: "52", description: "Prime beef fillet, foie gras, madeira wine sauce.", category: "secondi", label: "Limited" },
    { name: "Tiramisu Moderno", price: "18", description: "Espresso soak, mascarpone mousse, cocoa soil.", category: "dolci" },
    { name: "Panna Cotta al Limone", price: "16", description: "Amalfi lemon, macerated berries, honey tuile.", category: "dolci" },
    { name: "Sommelier Pairing", price: "32", description: "Four-glass Italian pairing selected for the evening menu.", category: "wine" },
  ],
  contactHighlights: [
    { icon: Clock3, title: "Opening hours", lines: ["Mon-Sun 18:00 - 00:00", "Kitchen 18:30 - 22:45", "Bookings recommended"] },
    { icon: MenuSquare, title: "Reservations", lines: ["Tables held for 15 minutes", "Parties larger than six by phone", "Private dining available"] },
    { icon: Wine, title: "Experience", lines: ["Wine pairings", "Seasonal tasting menu", "Celebration dinners"] },
  ],
}

const localized: Record<Locale, Partial<RestaurantData> & Partial<RestaurantMenuData>> = {
  en: {},
  it: {
    slogan: "Dal 1982 - Milano",
    description:
      "A Tavola e` un ristorante italiano contemporaneo dove tradizione, eleganza architettonica, ingredienti stagionali e ospitalita` a lume di candela si incontrano.",
    heroPills: ["Italiano moderno", "Menu stagionale", "Cena a lume di candela"],
    heroStats: [
      { value: "1982", label: "Fondazione" },
      { value: "18:00-00:00", label: "Servizio cena" },
      { value: "4.9/5", label: "Valutazione ospiti" },
    ],
    openingHours: [
      { day: "Lun-Dom", hours: "18:00 - 00:00" },
      { day: "Cucina", hours: "18:30 - 22:45" },
      { day: "Dining privato", hours: "Su richiesta" },
    ],
    storyPoints: [
      "Piatti italiani contemporanei radicati in stagionalita`, tecnica precisa e quieto senso scenico.",
      "Una sala a lume di candela pensata per serate lente, celebrazioni private e occasioni in centro citta`.",
      "Lo chef Marco De Luca porta al tavolo romano un percorso fine-dining tra Milano e Firenze.",
    ],
    highlights: [
      { icon: ChefHat, title: "Chef Marco De Luca", description: "Trent'anni di cucina italiana fine dining con mano moderna e stagionale." },
      { icon: Heart, title: "Ospitalita` a lume di candela", description: "Una sala elegante per ritmo generoso e serate intime." },
      { icon: Sparkles, title: "Eleganza architettonica", description: "Charcoal, oro caldo e immagini editoriali creano una prima impressione luxury." },
      { icon: MapPinned, title: "Roma centro", description: "Contatti, orari e prenotazioni restano chiari dal primo arrivo al booking." },
    ],
    menuCategories: [
      { label: "Tutti i piatti", value: "all" },
      { label: "Antipasti", value: "antipasti" },
      { label: "Primi", value: "primi" },
      { label: "Secondi", value: "secondi" },
      { label: "Dolci", value: "dolci" },
      { label: "Vini", value: "wine" },
    ],
  },
  de: {
    slogan: "Seit 1982 - Milano",
    description:
      "A Tavola ist ein zeitgenoessisches italienisches Fine-Dining-Restaurant, in dem Tradition, architektonische Eleganz, saisonale Zutaten und warme Gastfreundschaft zusammenkommen.",
    heroPills: ["Modern italienisch", "Saisonales Tasting", "Dinner bei Kerzenlicht"],
    openingHours: [
      { day: "Mo-So", hours: "18:00 - 00:00" },
      { day: "Kueche", hours: "18:30 - 22:45" },
      { day: "Private Dining", hours: "Auf Anfrage" },
    ],
    menuCategories: [
      { label: "Alle Gerichte", value: "all" },
      { label: "Antipasti", value: "antipasti" },
      { label: "Primi", value: "primi" },
      { label: "Secondi", value: "secondi" },
      { label: "Dolci", value: "dolci" },
      { label: "Wein", value: "wine" },
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
