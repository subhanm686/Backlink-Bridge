import React from 'react'
import Image from 'next/image'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import BottomCTA from '@/components/sections/BottomCTA'
import { constructMetadata } from '@/lib/metadata'
import { getUnsplashUrl } from '@/lib/utils'

export const metadata = constructMetadata({
  title: "How It Works | Backlink Bridge Outreach Process",
  description: "Learn about our 12-point publisher vetting process, human content standards, live reporting, and link-building delivery timeline.",
  canonicalUrl: "https://backlinkbridge.com/how-it-works"
})

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Share Your SEO Goals",
      desc: "Begin by listing your target landing page URLs, preferred keywords for anchor text, current Domain Rating, and monthly link budget. Our onboarding takes under 5 minutes.",
      photo: "person laptop form website professional"
    },
    {
      num: "02",
      title: "Manual Sourcing & Vetting",
      desc: "We scan our publisher network and perform custom manual outreach to find active sites that overlap with your niche. Every publisher must pass our strict 12-point metrics audit.",
      photo: "research team reviewing data spreadsheet"
    },
    {
      num: "03",
      title: "Content Creation & Outreach",
      desc: "Our writing team drafts educational articles that match the publisher's tone, integrating your backlink contextually. You approve every content draft before publication.",
      photo: "writer working desk coffee writing professional"
    },
    {
      num: "04",
      title: "Live Placements & Indexation",
      desc: "Articles go live with permanent, dofollow backlinks. Placements are logged in your live report within 24 hours. Rankings begin climbing in the subsequent weeks.",
      photo: "analytics dashboard monitor growth results"
    }
  ]

  const vettingCriteria = [
    { title: "Domain Rating (DR)", desc: "We target real authority. All publisher sites are audited via Ahrefs to ensure they fit within your DR 30 to DR 80+ tier commitments." },
    { title: "Organic Traffic Flow", desc: "No dead sites. We verify consistent organic traffic (minimum 1,000+ monthly visits) with no sudden algorithmic traffic drops." },
    { title: "Moz Spam Score", desc: "Strict filters. We reject any domain showing a Moz Spam Score higher than 3% to preserve your website's safety profile." },
    { title: "Google Cache Status", desc: "Active indexing. We ensure the publisher's articles index quickly by verifying their latest Google cache and crawl frequency." },
    { title: "Outbound Link Ratio", desc: "No link farms. We look at the ratio of outbound to inbound links. If a site exists solely to sell links, it is blacklisted immediately." },
    { title: "Editorial Genuineness", desc: "Real audiences. We inspect the blog comments, writer profiles, and layout. If a site lacks real editors and real readers, we skip it." }
  ]

  const timelineSteps = [
    { period: "Week 1", activity: "Campaign Setup & Sourcing", detail: "Onboarding audit completed. Anchors and target URLs aligned. Manual outreach starts to find overlapping publishers." },
    { period: "Week 2–3", activity: "Content Drafting & Vetting", detail: "Articles drafted by our professional copywriters. Domains selected and shared with you for approval. Editor pitches initiated." },
    { period: "Week 3–4", activity: "Publishing & Reporting", detail: "Publisher editors review drafts, publish articles, and links go live. Live reporting document updated with target URLs." },
    { period: "Day 30+ Results", activity: "Indexation & Growth", detail: "Google crawls new links. Search Console logs link associations. Domain Rating metrics and keyword search ranks rise." }
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-navy py-20 border-b border-navy-light/35 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light/90 opacity-80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="teal" className="bg-teal/20 text-white border border-teal/40">The Workflow</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight max-w-3xl mx-auto">
            How Backlink Bridge Works.
          </h1>
          <p className="text-[18px] text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium font-sans">
            A transparent, manual link-building process that delivers high-authority placements without shortcuts.
          </p>
        </div>
      </section>

      {/* 4-Step Expanded Process */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {steps.map((step, idx) => (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={`space-y-4 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <span className="text-4xl font-extrabold text-primary">{step.num}</span>
                <h3 className="text-2xl font-bold text-navy font-display">{step.title}</h3>
                <p className="text-[16px] text-slate-600 leading-relaxed font-medium">{step.desc}</p>
              </div>
              <div className={`relative h-[260px] md:h-[320px] rounded-xl overflow-hidden shadow-sm bg-slate-100 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image
                  src={getUnsplashUrl(step.photo, 600, 320)}
                  alt={`Step ${step.num}: ${step.title}`}
                  fill
                  sizes="(max-w-7xl) 50vw, 100vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publisher Vetting Process (6 Criteria) */}
      <section className="bg-surface py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="teal">Vetting Gating</Badge>
            <h2 className="text-3xl font-bold font-display text-navy mt-4">
              Our 12-point publisher vetting process.
            </h2>
            <p className="mt-4 text-[16px] text-slate-500 font-medium">
              We vet every publisher. If a site fails even one check, we discard it immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vettingCriteria.map((crit, idx) => (
              <Card key={idx} className="p-6 bg-white border border-border">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-sm">{idx + 1}</span>
                </div>
                <h4 className="text-lg font-bold text-navy mb-2">{crit.title}</h4>
                <p className="text-[14px] text-slate-500 leading-relaxed font-medium">{crit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Timeline Expectations */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary">Expectations</Badge>
          <h2 className="text-3xl font-bold font-display text-navy mt-4">
            Campaign Timeline & Milestones.
          </h2>
          <p className="mt-4 text-[16px] text-slate-500 font-medium">
            What you can expect during a typical 30-day link building cycle.
          </p>
        </div>

        {/* Responsive Table */}
        <div className="border border-border rounded-xl overflow-hidden shadow-sm bg-white max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface border-b border-border">
                  <th className="px-6 py-4 font-bold text-navy uppercase text-[12px] tracking-wider w-1/4">Timeline</th>
                  <th className="px-6 py-4 font-bold text-navy uppercase text-[12px] tracking-wider w-1/4">Milestone</th>
                  <th className="px-6 py-4 font-bold text-navy uppercase text-[12px] tracking-wider w-2/4">Campaign Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-[14.5px]">
                {timelineSteps.map((row, idx) => (
                  <tr key={idx} className="hover:bg-surface/50 transition-colors">
                    <td className="px-6 py-5 font-bold text-primary">{row.period}</td>
                    <td className="px-6 py-5 font-semibold text-navy">{row.activity}</td>
                    <td className="px-6 py-5 text-slate-500 font-medium leading-relaxed">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <BottomCTA />
    </main>
  )
}
