import React from 'react'
import Image from 'next/image'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-32 overflow-hidden bg-navy">
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/hero-team-office.jpg"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
          quality={85}
        />
      </div>
      <div className="absolute inset-0 z-10 bg-navy/70" />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[44px] md:text-6xl font-extrabold text-white font-display leading-[1.1] tracking-tight">
            Professional Link Building Service &amp; Guest Posting Agency
          </h1>
          <p className="mt-6 text-[18px] md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-medium">
            Backlink Bridge connects your website to high-authority, niche-relevant publishers — improving your DR, DA, organic traffic, and search rankings through proven guest posting and link building strategies.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/free-site-audit" variant="primary" size="lg" className="w-full sm:w-auto">
              Get Free Site Audit
            </Button>
            <Button href="/how-it-works" variant="outline-white" size="lg" className="w-full sm:w-auto">
              See How It Works →
            </Button>
          </div>
          <p className="mt-8 text-sm font-semibold tracking-wide text-slate-300 uppercase" />
        </div>
      </div>
    </section>
  )
}
