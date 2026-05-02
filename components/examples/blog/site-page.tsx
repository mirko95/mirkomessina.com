"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion"
import { ArrowLeft, ArrowRight, Link2, Menu, Moon, Search, Sun, X } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { ExampleLocaleSwitcher } from "@/components/examples/example-locale-switcher"
import { getBlogPosts, type BlogPost } from "./data"

const categories = ["All", "AI", "Startups", "Engineering", "Design"] as const

const blogCopy = {
  en: {
    topics: "topics",
    articles: "articles",
    about: "about",
    search: "Search articles",
    featured: "Featured Article",
    read: "Read Article",
    latest: "Latest Articles",
    all: "All",
    back: "Back to Articles",
    by: "By",
    newsletterTitle: "Stay in the loop.",
    newsletterText: "Thoughtful insights, guides, and blueprints for the creators of tomorrow. Delivered weekly, never cluttered.",
    email: "Your email address",
    subscribe: "Subscribe",
    topicsTitle: "Topics",
    topicsHeading: "Explore by Focus",
    topicsText: "Browse the editorial themes Signal follows across product, design, and engineering practice.",
    articleSingular: "Article",
    articlePlural: "Articles",
    view: "View",
    articlesEyebrow: "Articles",
    articlesText: "Field notes, essays, and practical analysis from the Signal editorial desk.",
    noArticles: "No Articles",
    noResults: "No results for",
    categories: { All: "All", AI: "AI", Startups: "Startups", Engineering: "Engineering", Design: "Design" },
    topicSummaries: {
      AI: "Interfaces, product patterns, and operating models shaped by intelligent systems.",
      Startups: "Company architecture, execution rhythm, and the practical choices behind durable teams.",
      Engineering: "Technical culture, collaboration infrastructure, and systems that support high-output work.",
      Design: "Visual strategy, interaction patterns, and restraint in modern digital products.",
    },
    aboutLabel: "About Signal",
    aboutTitle: "A publication for people building thoughtful digital products.",
    aboutBlocks: [
      ["Editorial Focus", "Signal publishes analysis on product strategy, design systems, engineering culture, and the operating models behind modern teams."],
      ["Who It Is For", "Founders, designers, engineers, and operators who want sharp context without the noise of trend cycles."],
      ["Publishing Rhythm", "New essays are selected for depth and usefulness, with emphasis on clear frameworks and durable ideas."],
      ["Contact", "editorial@signalcollective.co"],
    ],
    footerText: "Exploring the intersection of craft, systems, and intelligence. A Publication of Signal Collective.",
    footerGroups: [
      ["Publication", ["Articles", "Topics", "Letters"]],
      ["Studio", ["About", "Editorial", "Contact"]],
      ["Connect", ["Email", "Submit a Pitch", "About Signal"]],
    ],
    built: "Built for the future.",
  },
  it: {
    topics: "temi",
    articles: "articoli",
    about: "chi siamo",
    search: "Cerca articoli",
    featured: "Articolo in evidenza",
    read: "Leggi articolo",
    latest: "Ultimi articoli",
    all: "Tutti",
    back: "Torna agli articoli",
    by: "Di",
    newsletterTitle: "Resta aggiornato.",
    newsletterText: "Insight, guide e blueprint per chi crea i prodotti di domani. Ogni settimana, senza rumore.",
    email: "Il tuo indirizzo email",
    subscribe: "Iscriviti",
    topicsTitle: "Temi",
    topicsHeading: "Esplora per focus",
    topicsText: "Sfoglia i temi editoriali che Signal segue tra prodotto, design e pratica ingegneristica.",
    articleSingular: "articolo",
    articlePlural: "articoli",
    view: "Vedi",
    articlesEyebrow: "Articoli",
    articlesText: "Appunti, saggi e analisi pratiche dalla redazione Signal.",
    noArticles: "Nessun articolo",
    noResults: "Nessun risultato per",
    categories: { All: "Tutti", AI: "AI", Startups: "Startup", Engineering: "Engineering", Design: "Design" },
    topicSummaries: {
      AI: "Interfacce, pattern di prodotto e modelli operativi plasmati da sistemi intelligenti.",
      Startups: "Architettura aziendale, ritmo di esecuzione e scelte pratiche dietro team solidi.",
      Engineering: "Cultura tecnica, infrastruttura collaborativa e sistemi per lavoro ad alto impatto.",
      Design: "Strategia visiva, pattern di interazione e misura nei prodotti digitali moderni.",
    },
    aboutLabel: "Chi siamo",
    aboutTitle: "Una pubblicazione per chi costruisce prodotti digitali ragionati.",
    aboutBlocks: [
      ["Focus editoriale", "Signal pubblica analisi su strategia di prodotto, design system, cultura engineering e modelli operativi dei team moderni."],
      ["Per chi e`", "Founder, designer, engineer e operator che vogliono contesto chiaro senza il rumore dei trend."],
      ["Ritmo editoriale", "I nuovi saggi sono scelti per profondita` e utilita`, con framework chiari e idee durature."],
      ["Contatto", "editorial@signalcollective.co"],
    ],
    footerText: "Esploriamo l'incrocio tra mestiere, sistemi e intelligenza. Una pubblicazione di Signal Collective.",
    footerGroups: [
      ["Pubblicazione", ["Articoli", "Temi", "Lettere"]],
      ["Studio", ["Chi siamo", "Redazione", "Contatto"]],
      ["Connessioni", ["Email", "Invia una proposta", "Chi siamo"]],
    ],
    built: "Costruito per il futuro.",
  },
  de: {
    topics: "themen",
    articles: "artikel",
    about: "ueber uns",
    search: "Artikel suchen",
    featured: "Ausgewaehlter Artikel",
    read: "Artikel lesen",
    latest: "Neueste Artikel",
    all: "Alle",
    back: "Zurueck zu den Artikeln",
    by: "Von",
    newsletterTitle: "Bleib informiert.",
    newsletterText: "Durchdachte Insights, Guides und Blueprints fuer die Macher von morgen. Woechentlich, ohne Ballast.",
    email: "Deine E-Mail-Adresse",
    subscribe: "Abonnieren",
    topicsTitle: "Themen",
    topicsHeading: "Nach Fokus entdecken",
    topicsText: "Durchsuche die redaktionellen Themen, die Signal in Produkt, Design und Engineering verfolgt.",
    articleSingular: "Artikel",
    articlePlural: "Artikel",
    view: "Ansehen",
    articlesEyebrow: "Artikel",
    articlesText: "Notizen, Essays und praktische Analysen aus der Signal-Redaktion.",
    noArticles: "Keine Artikel",
    noResults: "Keine Ergebnisse fuer",
    categories: { All: "Alle", AI: "KI", Startups: "Startups", Engineering: "Engineering", Design: "Design" },
    topicSummaries: {
      AI: "Interfaces, Produktmuster und Betriebsmodelle, die von intelligenten Systemen gepraegt sind.",
      Startups: "Unternehmensarchitektur, Ausfuehrungsrhythmus und praktische Entscheidungen hinter robusten Teams.",
      Engineering: "Technische Kultur, Kollaborationsinfrastruktur und Systeme fuer wirksame Arbeit.",
      Design: "Visuelle Strategie, Interaktionsmuster und Zurueckhaltung in modernen digitalen Produkten.",
    },
    aboutLabel: "Ueber Signal",
    aboutTitle: "Eine Publikation fuer Menschen, die durchdachte digitale Produkte bauen.",
    aboutBlocks: [
      ["Redaktioneller Fokus", "Signal veroeffentlicht Analysen zu Produktstrategie, Designsystemen, Engineering-Kultur und Betriebsmodellen moderner Teams."],
      ["Fuer wen", "Founder, Designer, Engineers und Operator, die scharfen Kontext ohne Trendrauschen suchen."],
      ["Publikationsrhythmus", "Neue Essays werden nach Tiefe und Nutzen ausgewaehlt, mit klaren Frameworks und langlebigen Ideen."],
      ["Kontakt", "editorial@signalcollective.co"],
    ],
    footerText: "Wir erkunden die Schnittstelle von Handwerk, Systemen und Intelligenz. Eine Publikation von Signal Collective.",
    footerGroups: [
      ["Publikation", ["Artikel", "Themen", "Briefe"]],
      ["Studio", ["Ueber uns", "Redaktion", "Kontakt"]],
      ["Kontakt", ["E-Mail", "Pitch einreichen", "Ueber Signal"]],
    ],
    built: "Gebaut fuer die Zukunft.",
  },
} as const

type BlogCopy = (typeof blogCopy)[Locale]

function ArticleCard({ post, onClick, index, copy }: { post: BlogPost; onClick: (post: BlogPost) => void; index: number; copy: BlogCopy }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      onClick={() => onClick(post)}
      className="group cursor-pointer space-y-4"
      data-article-card
    >
      <div className="aspect-[16/10] overflow-hidden rounded-sm bg-neutral-100 dark:bg-neutral-800">
        <img src={post.image} alt={post.title} className="h-full w-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#6b6b6b] dark:text-neutral-500">
          <span>{post.category}</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          <span>{post.readTime}</span>
        </div>
        <h3 className="font-serif text-2xl leading-tight transition-colors group-hover:text-neutral-600 dark:group-hover:text-neutral-300">{post.title}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-[#6b6b6b] dark:text-neutral-400">{post.excerpt}</p>
        <div className="flex items-center gap-3 pt-2">
          <div className="text-xs font-medium">{copy.by} {post.author}</div>
          <div className="font-serif text-xs italic text-[#6b6b6b] dark:text-neutral-500">{post.date}</div>
        </div>
      </div>
    </motion.article>
  )
}

function Newsletter({ copy }: { copy: BlogCopy }) {
  return (
    <section className="border-y border-neutral-200 bg-white py-24 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{copy.newsletterTitle}</h2>
          <p className="max-w-md font-serif text-lg italic leading-relaxed text-[#6b6b6b] dark:text-neutral-400">
            {copy.newsletterText}
          </p>
        </div>
        <form className="relative w-full max-w-md md:ml-auto" onSubmit={(event) => event.preventDefault()}>
          <input
            type="email"
            placeholder={copy.email}
            className="w-full border-b-2 border-[#1a1a1a]/10 bg-[#f9f8f6] px-2 py-4 font-medium outline-none transition-all placeholder:text-neutral-400 focus:border-[#1a1a1a] dark:border-white/10 dark:bg-neutral-900 dark:focus:border-white"
          />
          <button className="absolute bottom-3 right-0 text-xs font-bold uppercase tracking-widest transition-transform hover:translate-x-1">
            {copy.subscribe}
          </button>
        </form>
      </div>
    </section>
  )
}

function ArticlePage({ post, onBack, copy }: { post: BlogPost; onBack: () => void; copy: BlogCopy }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-[#f9f8f6] pb-24 pt-32 dark:bg-neutral-900">
      <motion.div className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-[#1a1a1a] dark:bg-white" style={{ scaleX }} />
      <article className="mx-auto max-w-7xl px-6">
        <header className="mx-auto mb-16 max-w-3xl space-y-8 text-center">
          <button onClick={onBack} className="group mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6b6b6b] transition-colors hover:text-[#1a1a1a] dark:hover:text-white">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {copy.back}
          </button>
          <div className="space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">{post.category} - {post.readTime}</div>
            <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">{post.title}</h1>
            <p className="mx-auto max-w-2xl font-serif text-xl italic text-[#6b6b6b] dark:text-neutral-400 md:text-2xl">{post.excerpt}</p>
          </div>
          <div className="flex items-center justify-center gap-4 border-t border-neutral-200 pt-4 dark:border-neutral-800">
            <div className="text-left">
              <div className="text-sm font-bold tracking-tight">{post.author}</div>
              <div className="font-serif text-xs italic text-[#6b6b6b]">{post.authorRole}</div>
            </div>
            <div className="mx-2 h-4 w-px bg-neutral-300 dark:bg-neutral-700" />
            <div className="text-sm text-[#6b6b6b]">{post.date}</div>
          </div>
        </header>
        <div className="mx-auto mb-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-sm">
          <img src={post.image} alt={post.title} className="h-full w-full object-cover grayscale-[0.1]" />
        </div>
        <div
          className="mx-auto max-w-2xl text-[1.125rem] leading-[1.8] text-[#1a1a1a] dark:text-neutral-100 [&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-[#1a1a1a] [&_blockquote]:pl-6 [&_blockquote]:font-serif [&_blockquote]:text-2xl [&_blockquote]:italic [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:font-serif [&_h2]:text-3xl [&_li]:my-2 [&_p]:my-6 [&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-6 dark:[&_blockquote]:border-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <footer className="mx-auto mt-24 max-w-2xl border-t border-neutral-200 pt-12 dark:border-neutral-800">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              {[ArrowRight, Link2].map((Icon, index) => (
                <button key={index} className="rounded-full p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Share article">
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
            <button onClick={onBack} className="text-xs font-bold uppercase tracking-widest text-[#6b6b6b] transition-colors hover:text-[#1a1a1a] dark:hover:text-white">
              {copy.back}
            </button>
          </div>
        </footer>
      </article>
    </motion.div>
  )
}

export function ModelWatchPage({ locale = "en" }: { locale?: Locale }) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const articlesCarouselRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    return () => document.documentElement.classList.remove("dark")
  }, [isDark])

  useEffect(() => {
    if (searchOpen) window.setTimeout(() => searchInputRef.current?.focus(), 100)
  }, [searchOpen])

  const copy = blogCopy[locale] ?? blogCopy.en
  const blogPosts = getBlogPosts(locale)
  const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0]
  const normalizedQuery = searchQuery.trim().toLowerCase()
  const filteredPosts = blogPosts
    .filter((post) => !post.featured)
    .filter((post) => activeCategory === "All" || post.category === activeCategory)
    .filter((post) => {
      if (!normalizedQuery) return true
      return [post.title, post.excerpt, post.category, post.author, post.authorRole].join(" ").toLowerCase().includes(normalizedQuery)
    })

  const navigate = (section: "home" | "articles" | "topics" | "about") => {
    setSelectedPost(null)
    setMobileOpen(false)
    if (section === "articles") setActiveCategory("All")
    window.setTimeout(() => {
      if (section === "home") window.scrollTo({ top: 0, behavior: "smooth" })
      else document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 0)
  }

  const openPost = (post: BlogPost) => {
    setSelectedPost(post)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollArticles = (direction: "previous" | "next") => {
    const carousel = articlesCarouselRef.current
    if (!carousel) return
    const cardWidth = carousel.querySelector("[data-article-card]")?.clientWidth ?? 360
    carousel.scrollBy({ left: direction === "next" ? cardWidth + 48 : -(cardWidth + 48), behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#f9f8f6] font-sans text-[#1a1a1a] selection:bg-[#1a1a1a] selection:text-[#f9f8f6] dark:bg-neutral-900 dark:text-white dark:selection:bg-white dark:selection:text-neutral-900">
      <ExampleLocaleSwitcher locale={locale} path="/blog" />
      <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "border-b border-neutral-200 bg-[#f9f8f6]/80 py-4 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/80" : "bg-transparent py-8"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-12">
            <button type="button" onClick={() => navigate("home")} className="font-serif text-2xl font-bold tracking-tight transition-opacity hover:opacity-70">
              SIGNAL
            </button>
            <div className="hidden items-center gap-8 text-sm font-medium tracking-tight text-[#6b6b6b] dark:text-neutral-400 md:flex">
              {(["topics", "articles", "about"] as const).map((item) => (
                <button key={item} type="button" onClick={() => navigate(item)} className="capitalize transition-colors hover:text-[#1a1a1a] dark:hover:text-white">
                  {copy[item]}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <form onSubmit={(event) => event.preventDefault()} className={`hidden items-center overflow-hidden rounded-full border border-neutral-200 bg-white/70 transition-all duration-300 dark:border-neutral-800 dark:bg-neutral-950/70 sm:flex ${searchOpen ? "w-64 px-3" : "w-10 px-0"}`}>
              <button type="button" onClick={() => setSearchOpen(true)} className="grid h-10 w-10 shrink-0 place-items-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Open search">
                <Search className="h-5 w-5 opacity-60" />
              </button>
              <input ref={searchInputRef} type="search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder={copy.search} className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-neutral-400" />
            </form>
            <button type="button" onClick={() => { setSearchOpen(true); navigate("articles") }} className="rounded-full p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 sm:hidden" aria-label="Search articles">
              <Search className="h-5 w-5 opacity-60" />
            </button>
            <button type="button" onClick={() => setIsDark((value) => !value)} className="rounded-full p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button type="button" className="p-2 md:hidden" onClick={() => setMobileOpen((value) => !value)} aria-label="Open navigation menu">
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {searchOpen && (
          <form onSubmit={(event) => event.preventDefault()} className="absolute left-0 right-0 top-full border-y border-neutral-200 bg-[#f9f8f6] px-6 py-4 shadow-lg shadow-black/5 dark:border-neutral-800 dark:bg-neutral-900 sm:hidden">
            <div className="flex items-center gap-3">
              <Search className="h-5 w-5 shrink-0 text-[#6b6b6b]" />
              <input ref={searchInputRef} type="search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder={copy.search} className="min-w-0 flex-1 bg-transparent py-2 text-base outline-none placeholder:text-neutral-400" />
              <button type="button" onClick={() => setSearchOpen(false)} className="grid h-9 w-9 place-items-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Close search">
                <X className="h-5 w-5" />
              </button>
            </div>
          </form>
        )}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute left-0 right-0 top-full border-b border-neutral-200 bg-[#f9f8f6] p-6 dark:border-neutral-800 dark:bg-neutral-900 md:hidden">
              <div className="flex flex-col gap-6 text-lg font-medium">
                {(["topics", "articles", "about"] as const).map((item) => (
                  <button key={item} type="button" onClick={() => navigate(item)} className="text-left capitalize">{copy[item]}</button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence mode="wait">
        {selectedPost ? (
          <ArticlePage key="article" post={selectedPost} onBack={() => setSelectedPost(null)} copy={copy} />
        ) : (
          <motion.main key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24 pt-32">
            <section className="mx-auto mb-32 max-w-7xl px-6">
              <div className="grid items-center gap-16 lg:grid-cols-2">
                <div className="space-y-8">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">{copy.featured} - {featuredPost.readTime}</div>
                  <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">{featuredPost.title}</h1>
                  <p className="max-w-lg font-serif text-xl italic leading-relaxed text-[#6b6b6b] dark:text-neutral-400">{featuredPost.excerpt}</p>
                  <button type="button" onClick={() => openPost(featuredPost)} className="flex items-center gap-2 border-b border-[#1a1a1a]/20 pb-1 text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:border-[#1a1a1a] dark:border-white/20 dark:hover:border-white">
                    {copy.read} <ArrowRight className="h-4 w-4 -translate-y-px" />
                  </button>
                </div>
                <div className="aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100 dark:bg-neutral-800 md:aspect-[16/10]">
                  <img src={featuredPost.image} alt={featuredPost.title} className="h-full w-full object-cover grayscale-[0.2]" />
                </div>
              </div>
            </section>

            <Newsletter copy={copy} />

            <section id="topics" className="mx-auto mt-32 max-w-7xl scroll-mt-28 px-6">
              <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <div className="space-y-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">{copy.topicsTitle}</div>
                  <h2 className="font-serif text-4xl">{copy.topicsHeading}</h2>
                  <p className="max-w-xl font-serif italic text-[#6b6b6b] dark:text-neutral-400">
                    {copy.topicsText}
                  </p>
                </div>
              </div>
              <div className="grid border-y border-neutral-200 dark:border-neutral-800 md:grid-cols-2 lg:grid-cols-4">
                {categories.filter((category) => category !== "All").map((category) => {
                  const count = blogPosts.filter((post) => post.category === category).length
                  return (
                    <button key={category} type="button" onClick={() => { setActiveCategory(category); setSearchQuery(""); document.getElementById("articles")?.scrollIntoView({ behavior: "smooth", block: "start" }) }} className="group border-b border-neutral-200 p-6 text-left transition-colors hover:bg-white dark:border-neutral-800 dark:hover:bg-neutral-950 md:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0">
                      <div className="mb-10 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#6b6b6b]">
                        <span>{count} {count === 1 ? copy.articleSingular : copy.articlePlural}</span>
                        <span className="transition-transform group-hover:translate-x-1">{copy.view}</span>
                      </div>
                      <h3 className="mb-4 font-serif text-3xl transition-colors group-hover:text-neutral-600 dark:group-hover:text-neutral-300">{copy.categories[category]}</h3>
                      <p className="text-sm leading-6 text-[#6b6b6b] dark:text-neutral-400">{copy.topicSummaries[category]}</p>
                    </button>
                  )
                })}
              </div>
            </section>

            <section id="articles" className="mx-auto mt-32 max-w-7xl scroll-mt-28 px-6">
              <div className="mb-10 flex flex-col justify-between gap-8 border-b border-neutral-200 pb-12 dark:border-neutral-800 md:flex-row md:items-end">
                <div className="space-y-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">{copy.articlesEyebrow}</div>
                  <h2 className="font-serif text-4xl">{copy.latest}</h2>
                  <p className="font-serif italic text-[#6b6b6b] dark:text-neutral-400">{copy.articlesText}</p>
                </div>
                <div className="flex flex-wrap gap-6 text-[11px] font-bold uppercase tracking-widest text-[#6b6b6b] md:justify-end">
                  {categories.map((category) => (
                    <button key={category} onClick={() => { setActiveCategory(category); setSearchQuery("") }} className={`transition-colors hover:text-[#1a1a1a] dark:hover:text-white ${activeCategory === category ? "text-[#1a1a1a] underline underline-offset-8 dark:text-white" : ""}`}>
                      {copy.categories[category]}
                    </button>
                  ))}
                </div>
              </div>
              <div className="relative">
                <button type="button" onClick={() => scrollArticles("previous")} className="absolute left-2 top-[38%] z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-white/85 text-[#1a1a1a] shadow-lg shadow-black/5 backdrop-blur-md transition-all hover:scale-105 hover:bg-white dark:border-white/10 dark:bg-neutral-950/80 dark:text-white dark:hover:bg-neutral-900 md:left-0" aria-label="Previous articles">
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <div ref={articlesCarouselRef} className="-mx-6 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-8 [scrollbar-width:none] md:gap-12 [&::-webkit-scrollbar]:hidden">
                  {filteredPosts.map((post, index) => (
                    <div key={post.id} className="w-[82vw] max-w-[430px] shrink-0 snap-start sm:w-[58vw] md:w-[42vw] lg:w-[30vw]">
                      <ArticleCard post={post} index={index} onClick={openPost} copy={copy} />
                    </div>
                  ))}
                  {filteredPosts.length === 0 && (
                    <div className="w-[82vw] max-w-[430px] shrink-0 snap-start border-y border-neutral-200 py-16 text-[#6b6b6b] dark:border-neutral-800 dark:text-neutral-400">
                      <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em]">{copy.noArticles}</div>
                      <p className="font-serif text-2xl text-[#1a1a1a] dark:text-white">{copy.noResults} "{searchQuery}".</p>
                    </div>
                  )}
                </div>
                <button type="button" onClick={() => scrollArticles("next")} className="absolute right-2 top-[38%] z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-white/85 text-[#1a1a1a] shadow-lg shadow-black/5 backdrop-blur-md transition-all hover:scale-105 hover:bg-white dark:border-white/10 dark:bg-neutral-950/80 dark:text-white dark:hover:bg-neutral-900 md:right-0" aria-label="Next articles">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </section>

            <section id="about" className="mx-auto mt-32 max-w-7xl scroll-mt-28 px-6">
              <div className="grid gap-16 border-y border-neutral-200 py-20 dark:border-neutral-800 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-5">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">{copy.aboutLabel}</div>
                  <h2 className="font-serif text-4xl leading-tight md:text-5xl">{copy.aboutTitle}</h2>
                </div>
                <div className="grid gap-10 text-sm leading-7 text-[#6b6b6b] dark:text-neutral-400 sm:grid-cols-2">
                  {copy.aboutBlocks.map(([title, text]) => (
                    <div key={title} className="space-y-4">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a] dark:text-white">{title}</h3>
                      {text.includes("@") ? <a href="mailto:editorial@signalcollective.co" className="inline-flex border-b border-[#1a1a1a]/20 pb-1 text-[#1a1a1a] transition-colors hover:border-[#1a1a1a] dark:border-white/20 dark:text-white dark:hover:border-white">{text}</a> : <p>{text}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </motion.main>
        )}
      </AnimatePresence>

      <footer className="border-t border-neutral-200 bg-white py-24 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
          <div className="space-y-6">
            <div className="font-serif text-2xl font-bold tracking-tight">SIGNAL</div>
            <p className="text-xs leading-loose text-[#6b6b6b] dark:text-neutral-500">{copy.footerText}</p>
          </div>
          {copy.footerGroups.map(([title, links]) => (
            <div key={title as string} className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest">{title}</h4>
              <div className="flex flex-col gap-2 text-xs text-[#6b6b6b]">
                {links.map((link) => (
                  <button key={link} type="button" onClick={() => navigate(["Topics", "Themen", "Temi"].includes(link) ? "topics" : ["About", "About Signal", "Chi siamo", "Ueber Signal", "Ueber uns"].includes(link) ? "about" : "articles")} className="w-fit transition-colors hover:text-[#1a1a1a] dark:hover:text-white">
                    {link}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-20 flex max-w-7xl items-center justify-between border-t border-neutral-100 px-6 pt-8 text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:border-neutral-900">
          <span>(c) 2024 Signal Collective</span>
          <span>{copy.built}</span>
        </div>
      </footer>
    </div>
  )
}
