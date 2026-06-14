import React from 'react'
import Image from 'next/image'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import FaqAccordion from '@/components/ui/FaqAccordion'
import BottomCTA from '@/components/sections/BottomCTA'
import { constructMetadata, getServiceSchema, getFAQSchema } from '@/lib/metadata'
import { getUnsplashUrl } from '@/lib/utils'

export const metadata = constructMetadata({
  description: "Scale your organic presence with custom outreach campaigns. High-DR contextual placements built around your competitor authority gap. Request a free audit today.",
  canonicalUrl: "https://backlinkbridge.com/link-building-campaigns"
})

export default function LinkBuildingCampaignsPage() {
  const faqs = [
    {
      question: "What is a custom link building campaign?",
      answer: "Unlike buying single placements, a custom campaign is a structured 30 to 90-day strategy. We perform a complete competitor backlink gap analysis, target exclusive niche publishers, and pace link building velocity to ensure organic, long-term search growth."
    },
    {
      question: "What criteria do you use to vet publisher websites?",
      answer: "We look at real organic search traffic (minimum 1,000+ monthly visits via Ahrefs), active editorial updates, Domain Rating (DR 30–80+), Moz Spam Score (under 5%), and overall design/engagement. We never use PBNs, link directories, or automated link hubs."
    },
    {
      question: "Can we review and select the target domains?",
      answer: "Yes. In our custom campaigns, you have full transparency. We compile lists of target domains, traffic profiles, and content ideas for your approval before starting any outreach pitches."
    },
    {
      question: "How many links do you build in a typical campaign?",
      answer: "This depends entirely on your industry competitiveness and current budget. Campaigns are fully scalable, typically delivering anywhere from 10 to 100+ high-quality contextual links per month."
    },
    {
      question: "How do you handle anchor text selection?",
      answer: "We design a balanced anchor text profile mixing brand anchors, naked URLs, generic terms, and partial-match keywords. This mimics a natural editorial citation pattern, keeping your profile safe from search algorithm updates."
    }
  ]

  const steps = [
    {
      num: "01",
      title: "Competitor Authority Audit",
      desc: "We scan your leading organic competitors, extract their best referring domains, and identify authority gaps we need to close."
    },
    {
      num: "02",
      title: "Target Sourcing & List Building",
      desc: "Our database and custom outreach teams compile clean, niche-specific lists of real websites willing to accept relevant editorial content."
    },
    {
      num: "03",
      title: "Custom Sourcing & Pitches",
      desc: "We write highly-personalized editorial pitches to webmasters and editors, presenting compelling topics that fit their audience."
    },
    {
      num: "04",
      title: "Anchor Placement & Live Links",
      desc: "We embed your contextual links with target anchor texts, publish the content, and deliver live reports showing immediate metric metrics."
    }
  ]

  const serviceSchema = getServiceSchema(
    "Backlink Bridge Bespoke Link Building Campaigns",
    "Tailored high-authority contextual link building campaigns with full competitor analysis and manual outreach.",
    "/link-building-campaigns"
  )

  const faqSchema = getFAQSchema(faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-white">
        
        {/* Hero Section */}
        <section className="relative py-32 bg-slate-900 overflow-hidden text-center">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-30" 
            style={{ backgroundImage: `url(${getUnsplashUrl("partnership handshake agreement professional business", 1920, 1080)})` }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <Badge variant="teal" className="bg-teal/20 text-white border border-teal/40">
              Bespoke SEO Campaigns
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white max-w-4xl mx-auto leading-[1.1]">
              Custom Link Building Campaigns for Page One Rankings.
            </h1>
            <p className="text-[18px] md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Accelerate your search engine presence with strategic, custom-built outreach campaigns designed to out-rank your main competitors.
            </p>
            <div className="pt-4">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Get Custom Campaign Plan
              </Button>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge variant="primary">Bespoke Sourcing</Badge>
              <h2 className="text-3xl font-bold font-display text-navy leading-tight">
                Why Choose Custom Campaigns?
              </h2>
              <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                Standard link-buying packages often use pre-existing publisher databases, which might limit niche relevance. Our custom link building campaigns are engineered from scratch based on your site&apos;s unique requirements and keyword gaps.
              </p>
              <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                We perform manual blogger outreach targeting websites that have never sold general placements. By building unique editorial relationships, we secure links that transfer the highest level of equity and are impossible for your competitors to duplicate.
              </p>
            </div>
            <div className="relative h-[360px] w-full rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <Image
                src={getUnsplashUrl("photo-1552664730-d307ca884978", 600, 360)}
                alt="Link building campaign team planning keyword strategy"
                fill
                sizes="(max-w-7xl) 50vw, 100vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="bg-surface py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="teal">Campaign Perks</Badge>
              <h2 className="text-3xl font-bold font-display text-navy mt-4">
                Structured for safety, scale, and performance.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 bg-white border border-border">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 font-bold">1</div>
                <h3 className="text-lg font-bold text-navy mb-2">Authority Gap Analysis</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  We determine the exact link volumes and Domain Ratings required to overtake your target keywords.
                </p>
              </Card>

              <Card className="p-6 bg-white border border-border">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 font-bold">2</div>
                <h3 className="text-lg font-bold text-navy mb-2">Diverse Link Profiles</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  Mix guest postings, niche edits, editorial resource links, and image citations for a balanced profile.
                </p>
              </Card>

              <Card className="p-6 bg-white border border-border">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 font-bold">3</div>
                <h3 className="text-lg font-bold text-navy mb-2">Safe Link Velocity</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  We stagger placements over a natural 30 to 90-day curve, avoiding suspicious spike patterns.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary">The Strategy</Badge>
            <h2 className="text-3xl font-bold font-display text-navy mt-4">
              Our 4-step campaign pipeline.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <Card key={idx} className="p-6 bg-white border border-border" hoverEffect={true}>
                <span className="text-3xl font-extrabold text-primary mb-3 block">{step.num}</span>
                <h4 className="text-base font-bold text-navy mb-2">{step.title}</h4>
                <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-surface py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="teal">FAQ</Badge>
              <h2 className="text-3xl font-bold font-display text-navy mt-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <FaqAccordion items={faqs} />
          </div>
        </section>

        {/* Bottom CTA */}
        <BottomCTA />

      </main>
    </>
  )
}
