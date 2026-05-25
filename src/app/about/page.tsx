import React from 'react'
import Image from 'next/image'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import BottomCTA from '@/components/sections/BottomCTA'
import { constructMetadata } from '@/lib/metadata'
import { getUnsplashUrl } from '@/lib/utils'
import { STATS } from '@/lib/constants'

export const metadata = constructMetadata({
  title: "About Our Link Building Agency | Backlink Bridge",
  description: "Learn how we built the bridge most link builders skip. Discover our manual email outreach philosophy, values, and meet our editorial team.",
  canonicalUrl: "https://backlinkbridge.com/about"
})

export default function AboutPage() {
  const values = [
    {
      title: "Relationships First",
      desc: "We build direct, active relationships with publisher editors, discarding reseller shortcuts and database scraping.",
      photo: "business meeting handshake"
    },
    {
      title: "Complete Transparency",
      desc: "No hidden domains or masked urls. We provide live document reporting logs updated within 24 hours of live placements.",
      photo: "glass office window skyline"
    },
    {
      title: "Quality Gating",
      desc: "Every target domain must pass our multi-point metrics checklist, filtering out low-traffic, spammy link farms.",
      photo: "checklist inspection documents"
    },
    {
      title: "Risk Avoidance",
      desc: "We prioritize long-term safety, maintaining natural anchor profiles and rejection of private blog networks (PBNs).",
      photo: "protection shield safety lock"
    }
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-navy py-20 border-b border-navy-light/35 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light/90 opacity-80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="teal" className="bg-teal/20 text-white border border-teal/40">Our Story</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight max-w-3xl mx-auto leading-tight">
            We Built the Bridge Most Link Builders Skip.
          </h1>
          <p className="text-[18px] text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Helping enterprise marketing teams and fast-growing startups scale their organic rankings through safe, manual outreach.
          </p>
        </div>
      </section>

      {/* Our Story Block */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Badge variant="teal">Why We Exist</Badge>
            <h2 className="text-3xl font-bold font-display text-navy leading-tight">
              Genuine blogger outreach is hard. So we made it simple.
            </h2>
            <div className="text-[16px] text-slate-600 space-y-4 leading-relaxed font-medium">
              <p>
                In 2021, we noticed a critical flaw in the SEO industry. Most &apos;link building services&apos; were buying links from database lists populated entirely by private blog networks (PBNs) or spammy link farms. These placements didn&apos;t improve search ranks — they triggered Google penalties.
              </p>
              <p>
                Backlink Bridge was founded with a single mission: to do the manual groundwork required to secure genuine, editor-approved contextual links. We handle editor pitches, write quality content, and build long-term relationships so that your backlink footprint is 100% natural.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg bg-slate-100">
            <Image
              src={getUnsplashUrl("professional team office", 600, 400)}
              alt="Backlink Bridge team collaborating inside their office"
              fill
              sizes="(max-w-7xl) 50vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-surface py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary">Values</Badge>
            <h2 className="text-3xl font-bold font-display text-navy mt-4">
              Our Operational Values
            </h2>
            <p className="mt-4 text-[16px] text-slate-500 font-medium">
              The principles behind every blogger outreach email, content piece, and link placement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, idx) => (
              <Card key={idx} className="flex flex-col bg-white overflow-hidden border border-border">
                <div className="relative h-[200px] w-full bg-slate-100">
                  <Image
                    src={getUnsplashUrl(val.photo, 400, 200)}
                    alt={val.title}
                    fill
                    sizes="(max-w-7xl) 50vw, 100vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-navy mb-2">{val.title}</h4>
                  <p className="text-[14.5px] text-slate-500 leading-relaxed font-medium">{val.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* By The Numbers Stats Banner */}
      <section className="bg-navy py-16 text-center text-white border-y border-navy-light/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-4xl font-extrabold">{stat.value}</span>
              <span className="text-xs uppercase font-semibold text-slate-400 mt-2 tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>



      {/* Manual Outreach Matters Section */}
      <section className="bg-surface py-24 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="primary">Safety First</Badge>
          <h2 className="text-3xl font-bold font-display text-navy">Why Manual Outreach Matters.</h2>
          <p className="text-[16.5px] text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
            Search engine algorithm updates continue to crack down on automated link-building schemes. Google&apos;s quality guidelines are simple: backlinks must be earned, natural, and editor-reviewed. By building links through real relationships and publishing top-tier human content, we keep your backlink campaigns completely safe from algorithmic penalties.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <BottomCTA />
    </main>
  )
}
