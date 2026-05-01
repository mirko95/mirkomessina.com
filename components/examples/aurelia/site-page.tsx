"use client"

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
import { useEffect, useState } from "react"
import type { Locale } from "@/lib/i18n"

const imagePath = "/images/aurelia"

function Navbar() {
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
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`font-serif text-2xl tracking-widest ${isScrolled ? "text-[#121212]" : "text-white"}`}
        >
          AURELIA
        </motion.div>

        <div className="hidden items-center space-x-12 md:flex">
          {["Projects", "Services", "About", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`text-sm uppercase tracking-widest transition-colors ${isScrolled ? "text-[#121212]/70 hover:text-[#c5a67c]" : "text-white/80 hover:text-white"}`}
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`border px-6 py-2 text-xs uppercase tracking-widest transition-all ${isScrolled ? "border-[#c5a67c] text-[#c5a67c] hover:bg-[#c5a67c] hover:text-white" : "border-white/30 text-white hover:bg-white hover:text-[#121212]"}`}
          >
            Inquire
          </motion.button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen((open) => !open)}>
          {mobileMenuOpen ? <X className={isScrolled ? "text-[#121212]" : "text-white"} /> : <Menu className={isScrolled ? "text-[#121212]" : "text-white"} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-black/5 bg-[#f8f5f0] md:hidden"
          >
            <div className="flex flex-col space-y-6 p-8">
              {["Projects", "Services", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-lg tracking-wide text-[#121212]"
                >
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

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 200])

  return (
    <section className="relative h-screen overflow-hidden bg-[#121212]">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img src={`${imagePath}/hero-interior.jpg`} alt="Luxury interior" className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#f8f5f0]/10" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-[#c5a67c]"
        >
          Established 2012 - London
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8 max-w-4xl font-serif text-5xl leading-[1.1] text-white md:text-7xl lg:text-8xl"
        >
          Designing spaces that feel calm, refined, and unforgettable.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-12 max-w-2xl text-lg font-light leading-relaxed text-white/70 md:text-xl"
        >
          Aurelia Interiors creates elegant homes, boutique hotels, and premium commercial spaces with timeless design and modern detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col gap-6 sm:flex-row"
        >
          <button className="bg-[#c5a67c] px-10 py-5 text-xs font-semibold uppercase tracking-widest text-white shadow-xl transition-all duration-500 hover:bg-white hover:text-[#121212]">
            Book a Consultation
          </button>
          <button className="border border-white/40 px-10 py-5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-500 hover:bg-white hover:text-[#121212]">
            View Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({
  title,
  location,
  description,
  image,
  index,
}: {
  title: string
  location: string
  description: string
  image: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative flex flex-col space-y-6"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
          className="h-full w-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />
      </div>

      <div className="flex flex-col space-y-2">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="font-serif text-3xl text-[#121212]">{title}</h3>
            <div className="mt-2 flex items-center text-xs uppercase tracking-widest text-[#c5a67c]">
              <MapPin size={12} className="mr-2" />
              {location}
            </div>
          </div>
          <motion.div
            whileHover={{ x: 5 }}
            className="cursor-pointer rounded-full border border-black/10 p-3 transition-all group-hover:bg-[#121212] group-hover:text-white"
          >
            <ChevronRight size={20} />
          </motion.div>
        </div>
        <p className="max-w-xs pt-2 text-sm leading-relaxed text-[#121212]/60">{description}</p>
      </div>
    </motion.div>
  )
}

function FeaturedProjects() {
  const projects = [
    {
      title: "The Belvedere Villa",
      location: "Como, Italy",
      description: "A seamless blend of classical Italian architecture and modern minimalist interior design.",
      image: `${imagePath}/belvedere-villa.jpg`,
    },
    {
      title: "L'Hexagone Suite",
      location: "Paris, France",
      description: "A boutique hotel suite designed to evoke luxury through texture, light, and symmetry.",
      image: `${imagePath}/hexagone-suite.jpg`,
    },
    {
      title: "Urban Sanctuary",
      location: "London, UK",
      description: "A high-end apartment project focusing on neutral palettes and artisanal bespoke furniture.",
      image: `${imagePath}/urban-sanctuary.jpg`,
    },
  ]

  return (
    <section id="projects" className="overflow-hidden bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-end justify-between md:flex-row">
          <div>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-xs font-medium uppercase tracking-[0.3em] text-[#c5a67c]">
              Curation - 01
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mt-4 font-serif text-5xl text-[#121212] md:text-6xl">
              Selected Masterpieces
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="hidden pb-2 md:block">
            <a href="#" className="group flex items-center space-x-3 text-[#121212]/60 transition-colors hover:text-[#121212]">
              <span className="text-xs uppercase tracking-widest">View All Gallery</span>
              <div className="h-px w-10 bg-[#121212]/30 transition-all group-hover:w-16" />
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    {
      title: "Residential Interior Design",
      icon: <Home size={32} strokeWidth={1} />,
      desc: "Bespoke living environments that reflect your personality and elevate your daily rituals.",
    },
    {
      title: "Boutique Hotel Design",
      icon: <Building2 size={32} strokeWidth={1} />,
      desc: "Creating immersive hospitality experiences through cinematic lighting and luxury materiality.",
    },
    {
      title: "Space Styling",
      icon: <Layout size={32} strokeWidth={1} />,
      desc: "Final layer detailing that brings a room to life with curated art, textiles, and artifacts.",
    },
    {
      title: "Furniture Selection",
      icon: <Armchair size={32} strokeWidth={1} />,
      desc: "Sourcing rare artisanal pieces and custom-made furniture from across the globe.",
    },
  ]

  return (
    <section id="services" className="relative bg-[#f8f5f0] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-xs font-medium uppercase tracking-[0.3em] text-[#c5a67c]">
            Expertise - 02
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mt-4 font-serif text-5xl text-[#121212] md:text-6xl">
            Design Excellence
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex h-full flex-col border border-black/[0.03] bg-white p-10 transition-colors duration-500 hover:border-[#c5a67c]"
            >
              <div className="mb-8 origin-left text-[#c5a67c] transition-transform duration-500 group-hover:scale-110">{item.icon}</div>
              <h3 className="mb-4 font-serif text-2xl text-[#121212]">{item.title}</h3>
              <p className="mb-8 flex-grow text-sm leading-relaxed text-[#121212]/50">{item.desc}</p>
              <button className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#c5a67c] transition-all group-hover:space-x-4">
                <span>Learn More</span>
                <ChevronRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-white px-6 py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-24 lg:grid-cols-2">
        <div className="relative">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative z-10 aspect-[3/4] overflow-hidden">
            <img src={`${imagePath}/design-philosophy.jpg`} alt="Design philosophy" className="h-full w-full object-cover" />
          </motion.div>
          <div className="absolute -bottom-10 -right-10 hidden h-64 w-64 bg-[#f8f5f0] lg:block" />
          <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="absolute -left-20 top-1/2 hidden h-40 w-40 bg-[#c5a67c]/10 backdrop-blur-xl lg:block" />
        </div>

        <div className="flex flex-col space-y-10">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#c5a67c]">Philosophy - 03</span>
            <h2 className="mt-4 font-serif text-5xl text-[#121212] md:text-6xl">Crafting Legacy Interiors</h2>
          </div>

          <div className="space-y-6 text-lg font-light leading-relaxed text-[#121212]/70">
            <p>
              Founded by Aurelia Vance, our studio operates at the intersection of architecture, art, and high-fashion. We believe that a true luxury home is not defined by excess, but by the perfect orchestration of space, light, and materiality.
            </p>
            <p>
              Every project is a unique narrative. We collaborate with master artisans and heritage workshops across Europe to ensure that every texture, from hand-applied plaster to custom-woven silks, tells a story of unparalleled quality.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 pt-6">
            <div>
              <div className="font-serif text-3xl text-[#121212]">12+</div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-[#c5a67c]">Years Experience</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[#121212]">150+</div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-[#c5a67c]">Global Projects</div>
            </div>
          </div>

          <div className="pt-6">
            <button className="group flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#121212]/10 transition-all duration-500 group-hover:bg-[#121212] group-hover:text-white">
                <ChevronRight size={20} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#121212]">Discover our heritage</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { number: "01", title: "Consultation", desc: "A deep dive into your lifestyle, aesthetic preferences, and vision for the project." },
    { number: "02", title: "Concept", desc: "Detailed moodboards, spatial layouts, and sensory palettes that define the narrative." },
    { number: "03", title: "Design", desc: "Bespoke technical drawings, 3D visualizations, and artisanal material selection." },
    { number: "04", title: "Delivery", desc: "Seamless project management and styling for a ready-to-live luxurious home." },
  ]

  return (
    <section className="overflow-hidden bg-[#121212] px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 flex flex-col items-end justify-between md:flex-row">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#c5a67c]">Method - 04</span>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl">The Aurelia Journey</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-px lg:bg-white/10">
          {steps.map((step, index) => (
            <motion.div key={step.number} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }} className="flex flex-col space-y-8 lg:bg-[#121212] p-10">
              <div className="font-serif text-5xl text-[#c5a67c]/30">{step.number}</div>
              <h3 className="font-serif text-2xl">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const feedback = [
    {
      name: "Eleanor Sterling",
      role: "Estate Homeowner",
      text: "Aurelia transformed our chaotic penthouse into a serene sanctuary. Their attention to minor details is what truly sets them apart.",
    },
    {
      name: "Marcus Dupont",
      role: "Hotel Group Director",
      text: "Cinema for the eyes. Aurelia Interiors brought a level of sophistication to our lobby that increased our occupancy immediately.",
    },
    {
      name: "Sienna Rossi",
      role: "Architectural Critic",
      text: "Rarely do you find a studio that understands the dialogue between shadow and luxury as well as Aurelia does.",
    },
  ]

  return (
    <section className="bg-[#f8f5f0] px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={16} className="fill-[#c5a67c] text-[#c5a67c]" />
          ))}
        </div>

        <div className="relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 font-serif text-8xl italic text-[#121212]/5 opacity-10">&quot;</div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-col space-y-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {feedback.map((item) => (
                <div key={item.name} className="flex flex-col items-center">
                  <p className="mb-8 font-serif text-xl italic leading-relaxed text-[#121212]">{item.text}</p>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#121212]">{item.name}</h4>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-[#c5a67c]">{item.role}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#121212] px-6 pb-12 pt-32 text-white">
      <div className="absolute right-0 top-0 hidden h-full w-1/2 origin-top-right -skew-x-12 bg-white/[0.01] lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-32 grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
          <div className="flex flex-col space-y-12">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#c5a67c]">Inquiry - 05</span>
              <h2 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">Ready to transform your space?</h2>
            </div>

            <p className="max-w-lg text-xl font-light leading-relaxed text-white/60">
              We take on a limited number of projects each year to ensure uncompromising excellence. Contact us to begin your journey.
            </p>

            <div className="flex flex-col gap-6 pt-4 sm:flex-row">
              <button className="bg-white px-12 py-6 text-xs font-bold uppercase tracking-widest text-[#121212] shadow-2xl transition-all duration-500 hover:bg-[#c5a67c] hover:text-white">
                Start Your Project
              </button>
              <div className="flex items-center space-x-8 sm:ml-8">
                <a href="#" className="text-white/40 transition-colors hover:text-white"><Instagram size={24} /></a>
                <a href="#" className="text-white/40 transition-colors hover:text-white"><Facebook size={24} /></a>
                <a href="#" className="text-white/40 transition-colors hover:text-white"><Linkedin size={24} /></a>
              </div>
            </div>
          </div>

          <div className="relative flex aspect-square items-center justify-center opacity-30 lg:opacity-100">
            <div className="h-full w-full animate-[spin_60s_linear_infinite] rounded-full border border-white/5 p-20">
              <div className="h-full w-full rounded-full border border-white/10 p-20">
                <div className="flex h-full w-full items-center justify-center rounded-full border border-[#c5a67c]/20">
                  <div className="font-serif text-8xl italic text-white">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between space-y-4 border-t border-white/10 pt-12 text-[10px] uppercase tracking-widest text-white/30 md:flex-row md:space-y-0">
          <div>&copy; 2026 Aurelia Interiors. All Rights Reserved.</div>
          <div className="flex space-x-12">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-white">Cookie Policy</a>
          </div>
          <div>London / Milan / New York</div>
        </div>
      </div>
    </footer>
  )
}

export function AureliaPage({ locale = "en" }: { locale?: Locale }) {
  void locale

  return (
    <div className="aurelia-page relative min-h-screen bg-[#f8f5f0] text-[#121212] selection:bg-[#c5a67c] selection:text-white">
      <style jsx global>{`
        .aurelia-page {
          font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
        }

        .aurelia-page .font-serif {
          font-family: "Cormorant Garamond", serif;
        }
      `}</style>
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <Footer />
    </div>
  )
}
