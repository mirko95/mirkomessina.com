"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Cpu, Layers, Github, Linkedin, Mail } from "lucide-react"
import { siteConfig } from "@/lib/site"
import { getHomeCopy } from "@/lib/site-copy"
import type { Locale } from "@/lib/i18n"

export function HeroSection({ locale = "en" }: { locale?: Locale }) {
  const copy = getHomeCopy(locale)
  const socialLinks = [
    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { icon: Github, href: siteConfig.social.github, label: "GitHub" },
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
  ].filter((social) => social.href)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
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
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium group"
              >
                {copy.hero.primaryCta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#services")}
                className="border-border hover:border-primary/50 hover:bg-primary/5 px-8 py-6 text-base font-medium"
              >
                {copy.hero.secondaryCta}
              </Button>
            </div>

            {socialLinks.length > 0 && (
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
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
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main visual container */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl blur-2xl" />
                
                {/* Main card grid */}
                <div className="relative grid grid-cols-2 gap-4">
                  {/* Large feature card */}
                  <div className="col-span-2 bg-card/60 backdrop-blur-xl rounded-2xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-500 group">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Code2 className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{copy.hero.featureCards[0].title}</h3>
                        <p className="text-sm text-muted-foreground">{copy.hero.featureCards[0].description}</p>
                        </div>
                      </div>
                  </div>

                  {/* Smaller cards */}
                  <div className="bg-card/60 backdrop-blur-xl rounded-2xl border border-border/50 p-5 hover:border-primary/30 transition-all duration-500 group">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                      <Cpu className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{copy.hero.featureCards[1].title}</h3>
                    <p className="text-xs text-muted-foreground">{copy.hero.featureCards[1].description}</p>
                  </div>

                  <div className="bg-card/60 backdrop-blur-xl rounded-2xl border border-border/50 p-5 hover:border-primary/30 transition-all duration-500 group">
                    <div className="w-10 h-10 rounded-lg bg-chart-3/10 flex items-center justify-center mb-3 group-hover:bg-chart-3/20 transition-colors">
                      <Layers className="w-5 h-5 text-chart-3" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{copy.hero.featureCards[2].title}</h3>
                    <p className="text-xs text-muted-foreground">{copy.hero.featureCards[2].description}</p>
                  </div>

                  {/* Stats row */}
                  <div className="col-span-2 grid grid-cols-3 gap-3">
                    {copy.hero.stats.map((stat) => (
                      <div key={stat.value} className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/30 p-4 text-center">
                        <p className="text-2xl font-bold text-primary">{stat.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
