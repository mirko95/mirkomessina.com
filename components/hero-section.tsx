"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Cpu, Layers, Github, Linkedin, Mail } from "lucide-react"
import { siteConfig } from "@/lib/site"
import { getHomeCopy } from "@/lib/site-copy"
import { localizedPath } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n"

export function HeroSection({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)
  const socialLinks = [
    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { icon: Github, href: siteConfig.social.github, label: "GitHub" },
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
  ].filter((social) => social.href)

  return (
    <section className="relative flex items-start justify-center overflow-hidden py-14 lg:py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/12 via-background to-transparent" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[560px] h-[560px] bg-violet-500/12 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[460px] h-[460px] bg-blue-500/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-5 lg:space-y-6 pt-2 lg:pt-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>{copy.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-balance">
              <span className="text-foreground">{copy.hero.headline[0]}</span>
              <br />
              <span className="text-primary">{copy.hero.headline[1]}</span>
              <br />
              <span className="text-foreground">{copy.hero.headline[2]}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              {copy.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium group">
                <Link href={localizedPath(locale, "/contact")}>
                  {copy.hero.primaryCta}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:border-primary/50 hover:bg-primary/5 px-8 py-6 text-base font-medium">
                <Link href={localizedPath(locale, "/services")}>{copy.hero.secondaryCta}</Link>
              </Button>
            </div>

            {socialLinks.length > 0 && (
            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                <p className="text-sm text-muted-foreground">Find me on</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      aria-label={social.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-card/60 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Content - Abstract Tech Visual */}
          <div className="relative flex justify-center lg:justify-end pt-2 lg:pt-8 lg:-translate-y-1">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl blur-2xl" />

              <div className="relative space-y-4 rounded-[2rem] border border-border/50 bg-card/40 p-4 backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.5rem] border border-border/40 bg-background/40">
                  <div className="divide-y divide-border/40">
                    {copy.hero.featureCards.map((card, index) => {
                      const Icon = [Code2, Cpu, Layers][index] ?? Layers
                      const iconClass =
                        index === 0
                          ? "bg-primary/10 text-primary"
                          : index === 1
                            ? "bg-accent/10 text-accent"
                            : "bg-chart-3/10 text-chart-3"

                      return (
                        <div
                          key={card.title}
                          className={`flex items-start gap-4 px-4 py-4 ${index === 0 ? "bg-background/30" : "bg-transparent"}`}
                        >
                          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconClass}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground">{card.title}</h3>
                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {copy.hero.stats.map((stat) => (
                    <div
                      key={stat.value}
                      className="rounded-2xl border border-border/40 bg-background/30 px-3 py-4 text-center"
                    >
                      <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
