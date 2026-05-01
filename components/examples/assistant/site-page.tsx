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

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Treatments", href: "#treatments" },
  { name: "Pricing", href: "#pricing" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

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

function Navbar() {
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
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium uppercase tracking-widest transition-colors duration-300 hover:text-primary">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:bg-neutral-dark hover:shadow-lg">
            <Phone size={14} />
            Book Now
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
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="py-2 text-center text-lg uppercase tracking-widest">
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="rounded-xl bg-primary px-6 py-4 text-center text-lg uppercase tracking-widest text-white shadow-lg">
                Book a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function Hero() {
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
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-primary">Premium Medical Aesthetics</span>
          <h1 className="mb-6 text-5xl font-serif leading-[1.1] text-neutral-dark md:text-7xl lg:text-8xl">
            Reveal Your <br />
            <span className="font-normal italic">Authentic</span> Radiance
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-neutral-dark/70 md:text-xl">
            Experience the pinnacle of non-invasive aesthetic excellence. Bespoke treatments designed to enhance your natural beauty with surgical precision and artistic vision.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <motion.a href="#contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-white shadow-xl transition-all duration-300 hover:shadow-primary/30">
              Book a Consultation
              <ArrowRight size={16} />
            </motion.a>
            <motion.a href="#treatments" whileHover={{ scale: 1.02, backgroundColor: "rgba(197, 160, 89, 0.1)" }} whileTap={{ scale: 0.98 }} className="flex items-center justify-center rounded-full border border-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary transition-all duration-300">
              Explore Treatments
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
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
                <p className="font-serif text-lg italic leading-snug text-primary">"Beauty is the harmony of spirit and science."</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-neutral-dark/60">Dr. Elena Rossi</p>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2">
            <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Meet the Expert</span>
            <h2 className="mb-8 text-4xl font-serif leading-tight text-neutral-dark md:text-5xl">
              Dedicated to the Art of <br />
              <span className="font-normal italic">Subtle Enhancement</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-neutral-dark/70">
              Dr. Elena Rossi is a board-certified aesthetic physician with over 15 years of international experience. Her philosophy centers on the Invisible Touch: achieving remarkable results that look entirely natural.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-neutral-dark/70">
              Specializing in facial harmony and regenerative medicine, Dr. Rossi combines the latest clinical innovations with an artist's eye for proportion and balance.
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

function Treatments() {
  return (
    <section id="treatments" className="bg-neutral-base py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Our Services</span>
            <h2 className="mb-6 text-4xl font-serif text-neutral-dark md:text-5xl">
              Bespoke <span className="font-normal italic">Treatments</span>
            </h2>
            <div className="mx-auto h-px w-20 bg-primary" />
            <p className="mt-8 text-lg text-neutral-dark/60">We offer a curated selection of world-class aesthetic procedures tailored to your unique facial anatomy and aesthetic goals.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((item, index) => (
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

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Pricing</span>
          <h2 className="mb-6 text-4xl font-serif text-neutral-dark md:text-5xl">
            Transparent <span className="font-normal italic">Starting Prices</span>
          </h2>
          <p className="text-lg leading-relaxed text-neutral-dark/60">Final treatment plans are confirmed after consultation, so every recommendation is tailored to your anatomy, goals, and clinical needs.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricing.map((item, index) => (
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

function WhyChooseUs() {
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
            <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary underline decoration-primary/30 underline-offset-8">The Eterna Standard</span>
            <h2 className="mb-8 text-4xl font-serif leading-tight md:text-5xl">
              Where <span className="font-normal italic">Surgical Excellence</span> <br />
              Meets Artistic Vision
            </h2>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-neutral-base/60">We believe that true beauty is never forced. Our approach combines rigorous medical evaluation with a nuanced understanding of facial aesthetics to ensure you leave our clinic looking like a more rested, radiant version of yourself.</p>
            <div className="flex gap-10 border-t border-white/10 pt-10">
              <div>
                <p className="text-3xl font-serif text-primary">98%</p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-neutral-base/40">Patient Loyalty</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-primary">150+</p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-neutral-base/40">Annual Training Hours</p>
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

function Gallery() {
  const atmosphereImages = ["/images/gallery-treatment-room.png", "/images/gallery-clinic-entrance.png", "/images/gallery-product-showcase.png"]
  const transformationImages = ["/images/gallery-transformation-1.png", "/images/gallery-transformation-2.png"]

  return (
    <section id="gallery" className="overflow-hidden bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 lg:flex-row">
          <div className="max-w-2xl">
            <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">The Experience</span>
            <h2 className="text-4xl font-serif leading-tight text-neutral-dark md:text-5xl">
              A Refined Sanctuary <br />
              <span className="font-normal italic">of Wellness</span>
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
            <h3 className="text-3xl font-serif text-neutral-dark">Subtle Transformations</h3>
            <p className="mx-auto mt-4 max-w-lg text-neutral-dark/50">Our goal is to enhance, not alter. View our patient outcomes that celebrate natural beauty.</p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {transformationImages.map((image, index) => (
              <motion.div key={image} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="group relative aspect-video overflow-hidden rounded-[2rem] bg-neutral-base shadow-inner">
                <img src={image} alt={`Before and after transformation ${index + 1}`} className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-dark/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium uppercase tracking-widest text-white backdrop-blur-sm">Patient Result: Filler and Hydration</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    { name: "Sarah Montgomery", role: "Fashion Consultant", text: "Dr. Elena's eye for detail is unmatched. I have had botox elsewhere, but the natural movement she preserved while smoothing my skin is simply incredible.", image: "/images/testimonial-sarah-montgomery.png" },
    { name: "James Harrison", role: "Executive", text: "As a man, I was hesitant about aesthetic treatments. The team made me feel completely at ease. The results were subtle and professional.", image: "/images/testimonial-james-harrison.png" },
    { name: "Sophie Chen", role: "Influencer", text: "The clinic atmosphere is so serene. Their skin booster treatment changed my bridal prep entirely. My skin felt lit from within.", image: "/images/testimonial-sophie-chen.png" },
  ]

  return (
    <section className="relative overflow-hidden bg-neutral-base py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Testimonials</span>
          <h2 className="text-4xl font-serif text-neutral-dark md:text-5xl">
            Patient <span className="font-normal italic">Experiences</span>
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

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-20 lg:flex-row">
          <div className="lg:w-1/3">
            <span className="text-gold-gradient mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Your Questions</span>
            <h2 className="mb-6 text-4xl font-serif text-neutral-dark">
              Frequently Asked <span className="font-normal italic">Questions</span>
            </h2>
            <p className="mb-8 leading-relaxed text-neutral-dark/50">We believe in full transparency and education. If you cannot find your answer here, please reach out to our team.</p>
            <div className="rounded-[2rem] border border-primary/10 bg-neutral-base p-8">
              <p className="mb-4 text-xl font-serif text-neutral-dark">Still unsure?</p>
              <a href="#contact" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary transition-all duration-300 hover:gap-4">
                Talk to a specialist <span>-&gt;</span>
              </a>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
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

function Contact() {
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
              <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Get in Touch</span>
              <h2 className="mb-10 text-4xl font-serif text-neutral-dark">
                Book Your <span className="font-normal italic">Private Consultation</span>
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <label className="flex flex-col space-y-2">
                    <span className="ml-4 text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">Full Name</span>
                    <input type="text" placeholder="e.g. Arabella Smith" required minLength={2} autoComplete="name" className="rounded-2xl border border-neutral-base bg-neutral-base/50 px-6 py-4 text-neutral-dark transition-all duration-300 focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary" />
                  </label>
                  <label className="flex flex-col space-y-2">
                    <span className="ml-4 text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">Email Address</span>
                    <input type="email" placeholder="e.g. arabella@email.com" required autoComplete="email" className="rounded-2xl border border-neutral-base bg-neutral-base/50 px-6 py-4 text-neutral-dark transition-all duration-300 focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary" />
                  </label>
                </div>

                <label className="flex flex-col space-y-2">
                  <span className="ml-4 text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">Preferred Treatment</span>
                  <select required defaultValue="" className="rounded-2xl border border-neutral-base bg-neutral-base/50 px-6 py-4 text-neutral-dark transition-all duration-300 focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="" disabled>
                      Select a treatment
                    </option>
                    <option>General Consultation</option>
                    <option>Botox & Toxins</option>
                    <option>Dermal Fillers</option>
                    <option>Skin Rejuvenation</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className="flex flex-col space-y-2">
                  <span className="ml-4 text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">Message</span>
                  <textarea rows={4} placeholder="Tell us about your aesthetic goals..." required minLength={10} className="resize-none rounded-2xl border border-neutral-base bg-neutral-base/50 px-6 py-4 text-neutral-dark transition-all duration-300 focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary" />
                </label>

                <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} disabled={isSubmitting} className="mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-neutral-dark py-5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-500 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-70">
                  {isSuccess ? <CheckCircle2 size={16} /> : <Calendar size={16} />}
                  {isSubmitting ? "Sending Request..." : isSuccess ? "Appointment Requested" : "Request Appointment"}
                </motion.button>

                {isSuccess && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-primary/20 bg-primary/10 px-6 py-4 text-sm text-neutral-dark" role="status" aria-live="polite">
                    Thank you. Your appointment request has been received and our concierge team will contact you shortly.
                  </motion.div>
                )}
              </form>
            </div>

            <div className="relative flex flex-col justify-between overflow-hidden bg-neutral-dark p-8 text-white md:p-16 lg:w-2/5">
              <div>
                <h3 className="mb-10 text-3xl font-serif">Our Studio</h3>
                <div className="space-y-8">
                  {[
                    { icon: MapPin, label: "Address", value: "12 Curzon Street, Mayfair\nLondon W1J 5HL United Kingdom" },
                    { icon: Phone, label: "Phone", value: "+44 (0) 20 7123 4567" },
                    { icon: Mail, label: "Email", value: "concierge@eterna-aesthetics.com" },
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
                <p className="mb-6 text-[10px] font-bold uppercase tracking-widest text-neutral-base/40">Follow our journey</p>
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
                <p className="font-serif font-bold text-neutral-dark">Find us in Mayfair</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-neutral-dark/40">Open Directions in Maps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
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
            <p className="mb-8 text-sm leading-relaxed text-neutral-dark/50">Redefining aesthetic excellence through medical precision and artistic vision. London's premier sanctuary for natural rejuvenation.</p>
            <div className="flex items-center gap-2 text-primary">
              <ShieldCheck size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest">CQC Registered Clinic</span>
            </div>
          </div>

          {[
            { title: "Treatments", links: ["Botox & Fillers", "Skin Boosters", "PRP Therapy", "Chemical Peels", "Laser Resurfacing"] },
            { title: "Quick Links", links: ["About Dr. Rossi", "Pricing", "Patient Gallery", "Common Questions", "Location & Contact"] },
          ].map((group) => (
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
            <h4 className="mb-8 text-sm font-bold uppercase tracking-widest text-neutral-dark">Opening Hours</h4>
            <ul className="space-y-4 text-sm text-neutral-dark/60">
              <li className="flex justify-between">
                <span>Mon - Fri</span> <span>09:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span> <span>10:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span> <span>Closed</span>
              </li>
            </ul>
            <div className="mt-8 rounded-2xl bg-neutral-base p-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-neutral-dark/40">Concierge Service</p>
              <p className="font-serif text-neutral-dark">+44 20 7123 4567</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-neutral-base pt-12 md:flex-row">
          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-dark/30">&copy; {currentYear} Eterna Aesthetics. All rights reserved.</p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-neutral-dark/30">
            <a href="#home" className="transition-colors hover:text-primary">Privacy Policy</a>
            <a href="#home" className="transition-colors hover:text-primary">Terms of Service</a>
            <a href="#home" className="transition-colors hover:text-primary">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function ReplyPilotPage(_props: { locale?: string }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="estetic-clinique relative bg-neutral-base font-sans text-neutral-dark antialiased">
      <motion.div className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-primary" style={{ scaleX }} />
      <Navbar />
      <main>
        <Hero />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true, margin: "-100px" }}>
          <About />
        </motion.div>
        <Treatments />
        <Pricing />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
