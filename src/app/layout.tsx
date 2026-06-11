import React from 'react'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'
import { OrganizationSchema, ServiceSchema } from "@/components/SchemaMarkup";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Backlink Bridge | High-Authority Link Building & Guest Posting",
  description: "Backlink Bridge is a done-for-you link building service that manually sources, vets, and places your content on real, high-authority websites across 25+ niches.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white antialiased text-slate-600 font-sans">
        {/* Future Phase: Crisp or Intercom Live Chat Script (Placeholder) */}
        <Script
          id="live-chat-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `// Future Phase: Crisp or Intercom live chat script placeholder`
          }}
        />
        <Navbar />
        {/* Padding-top to avoid content clipping behind the sticky header */}
        <div className="pt-[73px] min-h-[75vh]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
