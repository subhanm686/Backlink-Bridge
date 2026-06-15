import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import BottomCTA from '@/components/sections/BottomCTA'
import { constructMetadata } from '@/lib/metadata'
import { getUnsplashUrl } from '@/lib/utils'
import { STATS } from '@/lib/constants'

export const metadata = constructMetadata({
  title: "About Our Link Building Agency | Backlink Bridge",
  description: "Learn how we built the bridge most link builders skip. Discover our manual outreach philosophy and meet our editorial team. See why 1,200+ sites trust us.",
  canonicalUrl: "https://backlinkbridge.com/about"
})


const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "url": "https://backlinkbridge.com/about",
  "name": "About Backlink Bridge",
  "description": "Backlink Bridge is a manual link building agency helping websites improve Domain Rating, reduce spam score, and grow organic traffic through ethical guest posting and outreach.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Backlink Bridge",
    "url": "https://backlinkbridge.com",
    "logo": "https://backlinkbridge.com/logo.png",
    "foundingDate": "2021",
    "email": "contact@backlinkbridge.com",
    "description": "Manual link building agency specialising in guest posting, niche edits, DR/DA improvement, and spam score cleanup for websites worldwide.",
    "areaServed": "Worldwide",
    "priceRange": "$$",
    "sameAs": [
      "https://www.linkedin.com/company/backlink-bridge/",
      "https://www.facebook.com/profile.php?id=61590615572279"
    ]
  }
}


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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
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

        {/* Founder & Team Section */}
        <section className="py-24 border-t border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="primary">Our Team</Badge>
              <h2 className="text-3xl font-bold font-display text-navy mt-4">
                The People Behind Backlink Bridge
              </h2>
              <p className="mt-4 text-[16px] text-slate-500 font-medium">
                Built by SEO practitioners who have done the outreach, written the content, and earned the links themselves.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <div className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl" style={{ backgroundColor: '#0f2444' }}>
                <img src="/founder-photo.jpg" alt="Muhammad Subhan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-navy mb-1">Muhammad Subhan</h3>
                <p className="text-sm font-semibold mb-4" style={{ color: '#1d6fb8' }}>
                  Founder &amp; SEO Consultant · Backlink Bridge
                </p>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
                  Muhammad Subhan is the founder of Backlink Bridge and an SEO consultant
                  with 5+ years of hands-on experience in off-page SEO and link building.
                  He specialises in manual blogger outreach, guest posting campaigns, and
                  building high-authority backlink profiles that measurably improve Domain
                  Rating (DR), Domain Authority (DA), and organic search visibility. His
                  work spans 25+ industries — including finance, technology, health, real
                  estate, and e-commerce — helping websites reduce Moz spam score, recover
                  from Google penalties, disavow toxic backlinks, and achieve sustainable
                  organic traffic growth through white-hat, editorial-grade link placements.
                  As an SEO consultant, Subhan advises clients on full off-page strategy:
                  anchor text diversification, link velocity, niche relevance, and long-term
                  DR improvement roadmaps.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {['Off-Page SEO', 'Link Building', 'Guest Posting', 'DR/DA Improvement', 'Spam Score Cleanup', 'Blogger Outreach', 'Anchor Text Strategy', 'Organic Growth'].map((skill) => (
                    <span key={skill} className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      {skill}
                    </span>
                  ))}
                </div>
                <Link
                  href="https://www.linkedin.com/company/backlink-bridge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white px-4 py-2 rounded-lg transition-colors"
                  style={{ backgroundColor: '#0a66c2' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Follow Backlink Bridge on LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}

      {/* Bottom CTA */}
      <BottomCTA />
    </main>
        </>
  )
}
