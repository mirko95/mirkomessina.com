"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/lib/site"
import { getHomeCopy } from "@/lib/site-copy"
import { localizedPath } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n"

const localeLinks: Array<{ locale: Locale; label: string }> = [
  { locale: "en", label: "EN" },
  { locale: "it", label: "IT" },
  { locale: "de", label: "DE" },
]

function localeSwitchHref(locale: Locale) {
  return locale === "en" ? "/en" : localizedPath(locale, "/")
}

export function Navbar({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href={localizedPath(locale, "/")}
            className="whitespace-nowrap text-xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            {siteConfig.firstName.toLowerCase()}
            <span className="text-primary">.</span>
            {siteConfig.name.split(" ")[1].toLowerCase()}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {copy.navbar.links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center rounded-full border border-border/60 bg-card/80 p-1">
              {localeLinks.map((item) => (
                <Link
                  key={item.locale}
                  href={localeSwitchHref(item.locale)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                    locale === item.locale
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label={
                    locale === "it"
                      ? `Passa a ${item.label}`
                      : locale === "de"
                        ? `Wechsle zu ${item.label}`
                        : `Switch to ${item.label}`
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              {copy.navbar.cta}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={copy.navbar.ariaLabel}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {copy.navbar.links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-3 px-4 text-left hover:bg-secondary/50 rounded-lg"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-2 px-4 pt-2">
                {localeLinks.map((item) => (
                  <Link
                    key={item.locale}
                    href={localeSwitchHref(item.locale)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                      locale === item.locale
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="px-4 pt-2">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {copy.navbar.cta}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
