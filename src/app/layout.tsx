import React from 'react'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

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
  title: 'Backlink Bridge',
  description: 'Professional guest posting and high-authority link building campaigns.',
}

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
