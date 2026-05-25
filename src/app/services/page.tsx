import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import BottomCTA from '@/components/sections/BottomCTA'
import { constructMetadata, getServiceSchema } from '@/lib/metadata'
import { getUnsplashUrl } from '@/lib/utils'

export const metadata = constructMetadata({
  title: "Complete Link Building Services | Backlink Bridge",
  description: "Browse our guest posting, niche edits, GBOB management, and spam cleanup services designed to improve your authority safely.",
  canonicalUrl: "https://backlinkbridge.com/services"
})

export default function ServicesPage() {
  const serviceList = [
    {
      title: "Guest Posting",
      desc: "Editorial content placement on high-quality real websites.",
      photo: "writer desk laptop coffee notebook professional",
      href: "/guest-posting",
      bullets: [
        "Human written E-E-A-T articles",
        "Direct editor outreach",
        "Permanent dofollow placements",
        "Vetted DR 30 to 80+ sites"
      ]
    },
    {
      title: "GBOB Management",
      desc: "Fully outsourced guest blogging outreach management.",
      photo: "outreach email marketing team office",
      href: "/gbob-management",
      bullets: [
        "Complete campaign management",
        "Dedicated SEO account lead",
        "Custom publisher relations",
        "Flexible, scalable volumes"
      ]
    },
    {
      title: "Niche Edits",
      desc: "Contextual links placed inside already ranking content.",
      photo: "editing article website content laptop",
      href: "/niche-edits",
      bullets: [
        "Indexation and authority instantly",
        "Contextual relevant anchor text",
        "Zero new content writing needed",
        "Placed on active traffic pages"
      ]
    },
    {
      title: "DR / DA Improvement",
      desc: "Structured authority campaigns over a 90-day period.",
      photo: "domain authority analytics growth chart",
      href: "/dr-da-improvement",
      bullets: [
        "Deep competitor gap audit",
        "Velocity-controlled natural link profiles",
        "High-tier DR publisher focus",
        "Monthly rating progress reports"
      ]
    },
    {
      title: "Spam Score Cleanup",
      desc: "Backlink auditing and disavowing toxic spam links.",
      photo: "toxic links penalty google disavow",
      href: "/spam-cleanup",
      bullets: [
        "Moz spam score audit",
        "Google Disavow file production",
        "Spam profile clean guarantee",
        "Niche placement swap offsets"
      ]
    },
    {
      title: "Organic Traffic Growth",
      desc: "Strategic keyword target links designed to drive visitors.",
      photo: "organic search traffic growth analytics",
      href: "/link-building-campaigns",
      bullets: [
        "Commercial intent anchor analysis",
        "Niche publisher placement overlaps",
        "Referral click monitoring",
        "Rank-driving velocity schemes"
      ]
    }
  ]

  const serviceSchema = getServiceSchema(
    "Backlink Bridge Link Building Services",
    "Professional guest posting, niche edits, GBOB management, and spam score reduction services.",
    "/services"
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-navy py-20 border-b border-navy-light/35 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light/90 opacity-80" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <Badge variant="teal" className="bg-teal/20 text-white border border-teal/40">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight max-w-3xl mx-auto">
              Complete Link Building Services.
            </h1>
            <p className="text-[18px] text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium font-sans">
              Improve your search rankings, Domain Rating, and organic traffic using manual blogger outreach and white-hat contextual placements.
            </p>
            <div className="pt-2">
              <Button href="/free-site-audit" variant="primary">
                Get Free Site Audit
              </Button>
            </div>
          </div>
        </section>

        {/* 3x2 Grid Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service, index) => (
              <Card key={index} className="flex flex-col h-full bg-white">
                <div className="relative h-[220px] w-full bg-slate-100">
                  <Image
                    src={getUnsplashUrl(service.photo, 400, 220)}
                    alt={`${service.title} - Backlink Bridge SEO Service`}
                    fill
                    sizes="(max-w-7xl) 33vw, 100vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-navy">{service.title}</h3>
                    <p className="text-[14px] text-slate-500 leading-relaxed font-medium">
                      {service.desc}
                    </p>
                    <ul className="space-y-2 pt-2">
                      {service.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-[13px] text-slate-700 font-semibold">
                          <svg className="w-4.5 h-4.5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6 mt-6 border-t border-border/80">
                    <Link
                      href={service.href}
                      className="text-[14px] font-bold text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Learn More
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <BottomCTA />
      </main>
    </>
  )
}
