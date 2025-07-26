import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "طلب معلم - عندنا المعلم اللي بغيتي",
    template: "%s | طلب معلم"
  },
  description: "وصل أحسن المعلمين في بلادك. جيب المعلم اللي عندو الخبرة ولا المعلمة اللي بغيتي بسهولة وسرعة.",
  keywords: ["معلم", "صناعي", "تعمير الدار", "سباك", "خراج", "نجار", "بلدي", "المغرب", "دار", "تعمير"],
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
    title: 'طلب معلم - جيب المعلم اللي بغيتي بسهولة وسرعة',
    description: 'وصل أحسن المعلمين في بلادك. جيب المعلم اللي عندو الخبرة ولا المعلمة اللي بغيتي.',
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
    locale: 'ar_MA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'طلب معلم - جيب المعلم اللي بغيتي بسهولة وسرعة',
    description: 'وصل أحسن المعلمين في بلادك. جيب المعلم اللي عندو الخبرة ولا المعلمة اللي بغيتي.',
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
  category: 'خدمة وتعليم',
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
