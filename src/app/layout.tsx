import React from 'react'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'
import { OrganizationSchema, ServiceSchema } from '@/components/SchemaMarkup'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: "Link Building & Guest Posting Service | Backlink Bridge",
    template: "%s | Backlink Bridge",
  },
  description: "Connect to high-authority, niche-relevant publishers. Improve your DR, DA, and organic traffic with human blogger outreach. Get a free site audit today.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <OrganizationSchema />
        <ServiceSchema />
       <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white antialiased text-slate-600 font-sans">
        <Script
          id="live-chat-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: `// Future Phase: live chat placeholder` }}
        />
        <Navbar />
        <div className="pt-[73px] min-h-[75vh]">
          {children}
        </div>
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      </body>
    </html>
  )
}
