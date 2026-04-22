"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
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

const socialLinks = [
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Github, href: siteConfig.social.github, label: "GitHub" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
].filter((social) => social.href)

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)

  return (
    <footer className="relative py-12 lg:py-16 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center lg:items-start gap-3">
            <a
              href={localizedPath(locale, "/")}
              className="whitespace-nowrap text-xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
            >
              {siteConfig.firstName.toLowerCase()}
              <span className="text-primary">.</span>
              {siteConfig.name.split(" ")[1].toLowerCase()}
            </a>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {siteConfig.name}. {copy.footer.copyright}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {copy.footer.links.map((link) => (
              <Link
                key={link.label}
                href={localizedPath(locale, link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center rounded-full border border-border/60 bg-card/80 p-1">
              {localeLinks.map((item) => (
                <Link
                  key={item.locale}
                  href={localeSwitchHref(item.locale)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                    locale === item.locale
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/40 pt-6">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              {copy.footer.note}
            </p>
            <div className="flex items-center gap-4">
              {copy.footer.legal.map((link) => (
                <Link
                  key={link.label}
                  href={localizedPath(locale, link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
