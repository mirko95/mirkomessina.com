"use client"

import { siteConfig } from "@/lib/site"
import { getHomeCopy } from "@/lib/site-copy"
import type { Locale } from "@/lib/i18n"

export function AboutSection({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />

            <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 p-8 lg:p-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary-foreground">{siteConfig.initials}</span>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2">{siteConfig.name}</h3>
              <p className="text-primary font-medium mb-6">
                {locale === "it"
                  ? "Sviluppatore web e costruttore AI"
                  : locale === "de"
                    ? "Webentwickler und KI-Builder"
                    : siteConfig.role}
              </p>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {copy.about.description.slice(0, 2).map((item) => (
                  <p key={item} className="text-pretty">
                    {item}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/50">
                {["PHP", "Laravel", "Python", "PyTorch", "JavaScript", "Git"].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 text-muted-foreground border border-border/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-lg blur-lg" />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              {copy.about.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-balance">
              {copy.about.title}
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground">
              {copy.about.description.map((item) => (
                <p key={item} className="text-pretty leading-relaxed">
                  {item}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border/50">
              {copy.about.stats.map((stat) => (
                <div key={stat.value}>
                  <p className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
