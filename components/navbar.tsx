"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between gap-3 h-16 lg:h-20">
          {/* Logo */}
          <a
            href={localizedPath(locale, "/")}
            className="relative block h-12 w-12 shrink-0 transition-opacity hover:opacity-85 sm:h-14 sm:w-14"
            aria-label="Mirko Messina"
          >
            <Image
              src="/images/home/logo.svg"
              alt="Mirko Messina"
              fill
              unoptimized
              priority
              sizes="(max-width: 640px) 48px, 56px"
              className="object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {copy.navbar.links.map((link) => (
              <Link
                key={link.href}
                href={localizedPath(locale, link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
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
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
              <Link href={localizedPath(locale, "/contact")}>{copy.navbar.cta}</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <div className="flex items-center rounded-full border border-border/60 bg-card/80 p-1">
              {localeLinks.map((item) => (
                <Link
                  key={item.locale}
                  href={localeSwitchHref(item.locale)}
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] transition-colors ${
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
            <button
              className="text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={copy.navbar.ariaLabel}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {copy.navbar.links.map((link) => (
                <Link
                  key={link.href}
                  href={localizedPath(locale, link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-3 px-4 text-left hover:bg-secondary/50 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href={localizedPath(locale, "/contact")}>{copy.navbar.cta}</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
