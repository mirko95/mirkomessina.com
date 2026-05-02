import type { Metadata } from 'next'
import { headers } from "next/headers"
import { SpeedInsights } from '@vercel/speed-insights/next'
import { siteConfig } from '@/lib/site'
import { getOrganizationJsonLd, getSiteUrl } from '@/lib/seo'
import { resolveLocale } from '@/lib/i18n'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "web developer Vienna",
    "AI tools",
    "automation",
    "Next.js freelancer",
    "SaaS websites",
  ],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AT',
    url: '/',
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      it: '/it',
      de: '/de',
      'x-default': '/',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport = {
  themeColor: '#0a0a0f',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = resolveLocale((await headers()).get("x-locale"))

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationJsonLd()) }}
        />
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
