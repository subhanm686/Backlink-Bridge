import React from 'react'
import Badge from '@/components/ui/Badge'

const testimonials = [
  {
    quote: "We went from DR 14 to DR 52 in 90 days. Two previous agencies failed to move the needle. Backlink Bridge delivered real links on real sites with real traffic — the reporting was completely transparent.",
    name: "James R.",
    role: "Head of Marketing",
    company: "PropertyVault",
    niche: "Real Estate",
    rating: 5,
  },
  {
    quote: "In 6 months we went from DR 8 to DR 47 and organic traffic grew 1,240%. Every link was editorial-grade. They handled everything — content, outreach, and live reporting — without us lifting a finger.",
    name: "Sarah K.",
    role: "CEO",
    company: "CloudSync",
    niche: "SaaS",
    rating: 5,
  },
  {
    quote: "Our spam score dropped from 18% to 2% and our DR jumped 22 points in 60 days. The disavow strategy was thorough and the replacement links were high quality. Exactly what we needed.",
    name: "Daniel M.",
    role: "SEO Director",
    company: "LegalEdge",
    niche: "Legal",
    rating: 5,
  },
  {
    quote: "I've tried 4 link building services. Backlink Bridge is the only one where every link was on a site I'd actually be proud to be featured on. DR 40+ placements, zero spam.",
    name: "Priya T.",
    role: "Founder",
    company: "HealthStack",
    niche: "Health & Wellness",
    rating: 5,
  },
  {
    quote: "The anchor text strategy they recommended was spot-on. Natural ratios, no over-optimisation, and our target keywords moved from page 3 to page 1 within 10 weeks of the campaign.",
    name: "Marcus L.",
    role: "Growth Lead",
    company: "FinanceEdge",
    niche: "Finance",
    rating: 5,
  },
  {
    quote: "Backlink Bridge genuinely understand E-commerce SEO. Every placement was in a relevant niche — no random placements just to hit numbers. Our organic revenue increased 34% in Q1.",
    name: "Olivia C.",
    role: "eCommerce Manager",
    company: "StyleVault",
    niche: "E-Commerce",
    rating: 5,
  },
]

export default function Testimonials() {
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Backlink Bridge",
    "url": "https://backlinkbridge.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "127"
    },
    "review": testimonials.map((t) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewBody": t.quote
    }))
  }

  return (
    <section className="py-24 bg-white border-t border-border">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="teal">Client Results</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-navy mt-4 leading-tight">
            Trusted by 1,200+ websites worldwide.
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-slate-600">4.9/5 from 127 clients</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between">
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[14.5px] text-slate-600 leading-relaxed italic mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy leading-tight">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}, {t.company} · <span className="text-primary">{t.niche}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
