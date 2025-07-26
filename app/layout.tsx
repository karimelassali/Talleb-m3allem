import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Tlob M3allem - Your Local Craftsmen, On Demand",
    template: "%s | Tlob M3allem"
  },
  description: "Connect with verified local artisans for all your home service needs. Find skilled professionals for plumbing, electrical work, carpentry, and more in your area.",
  keywords: ["handyman", "home services", "local artisans", "home repair", "plumber", "electrician", "carpenter", "Morocco", "home improvement"],
  generator: 'Next.js',
  applicationName: 'Tlob M3allem',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://tlob-m3allem.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/fr',
      'ar-MA': '/ar',
    },
  },
  openGraph: {
    title: 'Tlob M3allem - Find Local Craftsmen & Home Service Professionals',
    description: 'Connect with verified local artisans for all your home service needs in Morocco.',
    url: 'https://tlob-m3allem.vercel.app',
    siteName: 'Tlob M3allem',
    images: [
      {
        url: '/logo.jpeg',
        width: 800,
        height: 600,
        alt: 'Tlob M3allem Logo',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tlob M3allem - Find Local Craftsmen & Home Service Professionals',
    description: 'Connect with verified local artisans for all your home service needs in Morocco.',
    creator: '@tlobm3allem',
    images: ['/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1e293b' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'home services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
