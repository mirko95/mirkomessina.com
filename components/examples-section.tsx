"use client"

"use client"

import Link from "next/link"
import { forwardRef, useEffect, useRef, useState, type ReactNode } from "react"
import {
  ArrowRight,
  Bot,
  Building2,
  ExternalLink,
  Globe2,
  Layers3,
  MessagesSquare,
  Workflow,
} from "lucide-react"
import { getExampleSites } from "@/lib/examples"
import { getExampleIndexCopy } from "@/lib/site-copy"
import { localizedPath, type Locale } from "@/lib/i18n"

type ExampleSiteItem = ReturnType<typeof getExampleSites>[number]
type ExampleCopy = ReturnType<typeof getExampleIndexCopy>

function Frame({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`h-full overflow-hidden rounded-[1.6rem] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.28)] ${className}`}
    >
      {children}
    </div>
  )
}

function LussoLabPreview() {
  return (
    <Frame className="bg-[#fdfbf7] text-[#121212]">
      <div className="p-4">
        <div className="relative overflow-hidden rounded-[1.4rem] bg-[#121212]">
          <img src="/images/lussolab/hero-image.png" alt="" className="h-44 w-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center p-5">
            <p className="text-[0.55rem] font-semibold uppercase tracking-[0.32em] text-white/70">
              New Arrivals
            </p>
            <p className="mt-3 text-3xl font-light leading-tight text-white">
              Designed for simplicity.
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-b border-[#121212]/10 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#121212]">
              Premium shop
            </p>
            <p className="mt-1 text-sm text-[#121212]/55">Minimal e-commerce experience</p>
          </div>
          <div className="bg-[#121212] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
            Cart
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            ["/images/lussolab/luna-tote-image.png", "Luna Tote"],
            ["/images/lussolab/folio-case-image.png", "Folio Case"],
            ["/images/lussolab/horizon-wallet-image.png", "Wallet"],
          ].map(([image, label]) => (
            <div key={label} className="space-y-2">
              <img src={image} alt="" className="aspect-[4/5] w-full bg-[#f5f2ed] object-cover" />
              <p className="text-[0.55rem] uppercase tracking-[0.14em] text-[#121212]/55">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="bg-white p-3">
            <p className="text-lg font-light">Product Detail</p>
            <p className="mt-1 text-xs leading-5 text-[#121212]/50">Color selectors, specs, and add-to-bag flow.</p>
          </div>
          <div className="bg-[#121212] p-3 text-white">
            <p className="text-lg font-light">Checkout</p>
            <p className="mt-1 text-xs leading-5 text-white/50">Cart drawer, summary, and order confirmation.</p>
          </div>
        </div>
      </div>
    </Frame>
  )
}

function ModelWatchPreview() {
  return (
    <Frame className="bg-[#f9f8f6] text-[#1a1a1a]">
      <div className="p-4">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
          <div>
            <p className="font-serif text-2xl font-bold tracking-tight">SIGNAL</p>
            <p className="mt-1 text-sm text-[#6b6b6b]">Editorial publication</p>
          </div>
          <div className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-[#6b6b6b]">
            Dark mode
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">Featured Article</p>
              <p className="mt-2 font-serif text-3xl leading-tight">The Silent Shift: Why AI-First Design is the New Standard</p>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6b6b6b]">Infrastructure is catching up to imagination. The next generation of products starts from intelligence.</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-bold uppercase tracking-widest text-[#6b6b6b]">
              {["AI", "Startups", "Engineering", "Design"].map((item) => (
                <div key={item} className="border border-neutral-200 bg-white p-3">{item}</div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <img src="/images/ai-first-design-hero.png" alt="" className="aspect-[16/10] w-full object-cover grayscale-[0.2]" />
            <div className="grid grid-cols-2 gap-3">
              <img src="/images/modern-startups.png" alt="" className="aspect-[16/10] w-full object-cover grayscale-[0.2]" />
              <img src="/images/digital-minimalism.png" alt="" className="aspect-[16/10] w-full object-cover grayscale-[0.2]" />
            </div>
          </div>
        </div>
      </div>
    </Frame>
  )
}

function ReplyPilotPreview() {
  return (
    <Frame className="bg-white text-slate-900">
      <div className="p-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
              Support workspace
            </p>
            <p className="mt-1 text-sm text-slate-500">Human review before send</p>
          </div>
          <div className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
            Guardrails on
          </div>
        </div>
        <div className="mt-4 grid gap-3">
          <div className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Customer message</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              I was charged after canceling. Can you check this?
            </p>
          </div>
          <div className="rounded-[1.2rem] border border-cyan-200 bg-cyan-50 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-700">Draft reply</p>
            <p className="mt-2 text-sm leading-7 text-slate-800">
              Thanks for flagging this. I checked the cancellation date and invoice
              status. I can confirm the final cycle charge or escalate it to billing for a
              manual review.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Tone preset", "Approved sources", "Review step"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-3 text-xs font-medium text-slate-600"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  )
}

function FlowForgePreview() {
  return (
    <Frame className="bg-[#f8f5f0] text-[#121212]">
      <div className="p-4">
        <div className="relative overflow-hidden rounded-[1.4rem] bg-[#121212]">
          <img src="/images/hero-interior.jpg" alt="" className="h-44 w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
            <p className="text-[0.55rem] font-semibold uppercase tracking-[0.32em] text-[#c5a67c]">
              Established 2012
            </p>
            <p className="mt-3 font-serif text-3xl leading-tight text-white">
              Calm, refined interiors
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-b border-[#c5a67c]/25 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a67c]">
              Velora Interiors
            </p>
            <p className="mt-1 text-sm text-[#121212]/55">Luxury portfolio website</p>
          </div>
          <div className="border border-[#c5a67c]/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#c5a67c]">
            Inquire
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            ["/images/belvedere-villa.jpg", "Como"],
            ["/images/hexagone-suite.jpg", "Paris"],
            ["/images/urban-sanctuary.jpg", "London"],
          ].map(([image, label]) => (
            <div key={label} className="space-y-2">
              <img src={image} alt="" className="aspect-[4/5] w-full object-cover" />
              <p className="text-[0.6rem] uppercase tracking-[0.18em] text-[#c5a67c]">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="bg-white p-3">
            <p className="font-serif text-xl">Design Excellence</p>
            <p className="mt-1 text-xs leading-5 text-[#121212]/50">Residential, hotel, styling, and furniture selection.</p>
          </div>
          <div className="bg-[#121212] p-3 text-white">
            <p className="font-serif text-xl">Velora Journey</p>
            <p className="mt-1 text-xs leading-5 text-white/50">Consultation, concept, design, delivery.</p>
          </div>
        </div>
      </div>
    </Frame>
  )
}

function HarborKitchenPreview() {
  return (
    <Frame className="border-[#c5a059]/25 bg-[#0a0a0a] text-[#e8e2d6] shadow-[0_24px_60px_rgba(0,0,0,0.32)]">
      <div className="p-4">
        <div className="flex items-center justify-between border-b border-[#c5a059]/20 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c5a059]">
              A Tavola
            </p>
            <p className="mt-1 text-sm text-[#e8e2d6]/55">Modern Italian fine dining</p>
          </div>
          <div className="bg-[#c5a059] px-3 py-1 text-xs font-semibold text-[#0a0a0a]">
            Since 1982
          </div>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-52 overflow-hidden bg-[#141414] p-4 text-white">
            <img src="/images/a-tavola-restaurant-interior-hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover brightness-[0.35]" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.2em] text-[#c5a059]">Reserve a table</p>
              <p className="mt-2 font-serif text-3xl italic leading-tight">A modern taste of Italy</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="border border-[#c5a059]/20 bg-[#141414] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#c5a059]">La Carta</p>
              <p className="mt-2 text-sm text-[#e8e2d6]/60">
                Antipasti, primi, secondi, dolci.
              </p>
            </div>
            <div className="border border-[#c5a059]/20 bg-[#141414] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#c5a059]">Opening hours</p>
              <p className="mt-2 text-sm text-[#e8e2d6]/60">
                Mon-Sun, 18:00-00:00.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="overflow-hidden">
                <img src="/images/wild-mushroom-risotto.png" alt="" className="aspect-square w-full object-cover" />
              </div>
              <div className="overflow-hidden">
                <img src="/images/romantic-candlelit-table-detail.png" alt="" className="aspect-square w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  )
}

function AffectSensePreview() {
  return (
    <Frame className="bg-[#040507] text-white">
      <div className="p-4">
        <div className="rounded-[1.4rem] border border-white/10 bg-[#0a0d14] p-3">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-2.5 w-24 rounded-full bg-cyan-400/80" />
              <div className="h-2.5 w-36 rounded-full bg-white/10" />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
              <Globe2 className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.2rem] border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-violet-200">Signal</p>
              <p className="mt-2 text-3xl font-semibold">64%</p>
            </div>
            <div className="rounded-[1.2rem] border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Latency</p>
              <p className="mt-2 text-3xl font-semibold">86</p>
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.2rem] border border-white/10 bg-black/30 p-4">
              <p className="text-xs text-slate-400">Dominant</p>
              <p className="mt-2 text-sm text-slate-200">Happy</p>
              <div className="mt-4 flex h-24 items-end gap-2 rounded-2xl bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(168,85,247,0.12))] p-3">
                {[42, 58, 76, 66, 84].map((height, index) => (
                  <div key={index} className="flex-1 rounded-t-full bg-cyan-300" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
            <div className="rounded-[1.2rem] border border-white/10 bg-black/30 p-4">
              <p className="text-xs text-slate-400">Pipeline</p>
              <div className="mt-3 space-y-2">
                {["Webcam frame", "YuNet alignment", "ONNX scores"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  )
}

function GenericPreview() {
  return (
    <Frame className="bg-[#050608] text-white">
      <div className="p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Portfolio visual</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
            <div className="h-12 rounded-xl bg-white/8" />
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
            <div className="h-12 rounded-xl bg-white/8" />
          </div>
        </div>
      </div>
    </Frame>
  )
}

function ExamplePreview({ slug }: { slug: string }) {
  if (slug === "affect-sense") return <AffectSensePreview />
  if (slug === "lussolab") return <LussoLabPreview />
  if (slug === "blog") return <ModelWatchPreview />
  if (slug === "estetic-clinique") return <ReplyPilotPreview />
  if (slug === "velora") return <FlowForgePreview />
  if (slug === "a-tavola") return <HarborKitchenPreview />
  return <GenericPreview />
}

const ExampleCard = forwardRef<
  HTMLAnchorElement,
  {
    site: ExampleSiteItem
    copy: ExampleCopy
    locale: Locale
    mobile?: boolean
  }
>(function ExampleCard({ site, copy, locale, mobile = false }, ref) {
  return (
    <Link
      ref={ref}
      href={localizedPath(locale, `/${site.slug}`)}
      target="_blank"
      rel="noreferrer"
      aria-label={`${copy.openLabel}: ${site.name}`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-card/60 text-foreground backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 ${
        mobile ? "w-[88vw] max-w-[24rem] shrink-0 snap-center" : ""
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${site.colorClass}`} />
      <div className={`relative flex h-full flex-col ${mobile ? "p-5" : "p-6 lg:p-8"}`}>
        <div className={`mb-8 flex items-center justify-between gap-4 ${mobile ? "mb-6" : ""}`}>
          <div
            className={`flex items-center justify-center rounded-2xl border border-border/50 bg-background/80 ${
              mobile ? "h-11 w-11" : "h-12 w-12"
            }`}
          >
            <site.icon className={`h-6 w-6 ${site.accentClass}`} />
          </div>
          <Layers3 className="h-5 w-5 text-muted-foreground/70" />
        </div>

        <div className={`space-y-4 ${mobile ? "mb-6" : "mb-8"}`}>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {site.category}
          </p>

          <h3
            className={`font-semibold text-foreground ${
              mobile ? "line-clamp-2 text-xl" : "min-h-[3.5rem] text-2xl"
            }`}
          >
            {site.name}
          </h3>

          <p
            className={`text-pretty text-sm leading-relaxed text-muted-foreground ${
              mobile ? "line-clamp-3" : "min-h-[5.5rem]"
            }`}
          >
            {site.summary}
          </p>
        </div>

        <div
          className={`group/frame rounded-2xl border border-border/40 bg-background/60 p-4 overflow-hidden ${
            mobile ? "mb-6 h-[260px]" : "mb-8 min-h-[380px]"
          }`}
        >
          <div className={mobile ? "origin-top scale-[0.82] w-[122%]" : "h-full"}>
            <ExamplePreview slug={site.slug} />
          </div>
        </div>

        <div className={`space-y-3 ${mobile ? "mb-6" : "mb-8"}`}>
          <p className="text-sm font-medium text-foreground">{site.heroStat}</p>
          <div className="flex flex-wrap gap-2">
            {site.highlights
              .slice(0, mobile ? 2 : site.highlights.length)
              .map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/40 bg-background/70 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
          </div>
        </div>

        <div className="mt-auto flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          {copy.openLabel}
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </Link>
  )
})

export function ExamplesSection({ locale = "en" }: { locale?: Locale }) {
  const sites = getExampleSites(locale)
  const copy = getExampleIndexCopy(locale)
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<Array<HTMLElement | null>>([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const container = carouselRef.current

    if (!container) {
      return
    }

    let frame = 0

    const updateActiveIndex = () => {
      const containerCenter = container.scrollLeft + container.clientWidth / 2
      let bestIndex = 0
      let bestDistance = Number.POSITIVE_INFINITY

      itemRefs.current.forEach((item, index) => {
        if (!item) {
          return
        }

        const itemCenter = item.offsetLeft + item.offsetWidth / 2
        const distance = Math.abs(itemCenter - containerCenter)

        if (distance < bestDistance) {
          bestDistance = distance
          bestIndex = index
        }
      })

      setActiveIndex((current) => (current === bestIndex ? current : bestIndex))
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(updateActiveIndex)
    }

    updateActiveIndex()
    container.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      cancelAnimationFrame(frame)
      container.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [sites.length])

  const scrollToExample = (index: number) => {
    const item = itemRefs.current[index]

    if (!item) {
      return
    }

    item.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    })
  }

  return (
    <section id="examples" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.035),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.03),transparent_40%)]" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mb-16 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-wider text-primary">
              {copy.eyebrow}
            </span>
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {copy.title}
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">{copy.description}</p>
          </div>

        </div>

        <div className="md:hidden">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">{copy.note}</p>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Swipe</p>
          </div>
          <div
            ref={carouselRef}
            className="-mx-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex items-stretch gap-4 snap-x snap-mandatory scroll-pl-4 pr-4">
              {sites.map((site, index) => (
                <ExampleCard
                  key={site.slug}
                  ref={(element) => {
                    itemRefs.current[index] = element
                  }}
                  site={site}
                  copy={copy}
                  locale={locale}
                  mobile
                />
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2" aria-label="Example carousel navigation">
            {sites.map((site, index) => (
              <button
                key={site.slug}
                type="button"
                onClick={() => scrollToExample(index)}
                aria-label={`Show ${site.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-primary shadow-[0_0_0_4px_rgba(34,211,238,0.12)]"
                    : "w-2 bg-border/70 hover:bg-border"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="hidden gap-6 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {sites.map((site) => (
            <ExampleCard key={site.slug} site={site} copy={copy} locale={locale} />
          ))}
        </div>

      </div>
    </section>
  )
}
