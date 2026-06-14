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
  title: "Managed GBOB & Blogger Outreach Service | Backlink Bridge",
description: "Outsource your entire link building operation. We handle publisher vetting, editor relationships, copywriters, and pitches. Get a free strategy call today.",
  canonicalUrl: "https://backlinkbridge.com/gbob-management"
})

export default function GbobManagementPage() {
  const faqs = [
    {
      question: "What does GBOB stand for?",
      answer: "GBOB stands for Guest Blogging Outreach Business. It is a business model and outreach methodology focused on building direct relationships with website owners and editors to publish high-quality content with contextually integrated backlinks."
    },
    {
      question: "How does GBOB management work?",
      answer: "We act as your outsourced outreach department. You tell us your target niches and link requirements. Our team finds publisher sites, builds editor relationships, writes all content, pitches the articles, and delivers live links. You do not need to do any manual outreach yourself."
    },
    {
      question: "Is this safe for search rankings?",
      answer: "Yes, it is the safest form of link building. Because we work directly with real editorial websites (no PBNs, no link directories, no automated tools), the links look 100% natural to search crawlers. Every placement passes a manual review."
    },
    {
      question: "Can I choose my own anchor text and target URLs?",
      answer: "Absolutely. We work with you during onboarding to plan your anchor text strategy (mixing brand, naked URL, and keyword terms) and align them with your top-priority landing pages."
    },
    {
      question: "Do you offer white-label GBOB services for SEO agencies?",
      answer: "Yes. Many of our clients are digital marketing and SEO agencies. We provide white-label reporting documents and raw outreach capacity so you can resell our placements to your clients under your own brand."
    }
  ]

  const steps = [
    {
      num: "01",
      title: "Strategy & Target Alignment",
      desc: "We analyze your site's current link profile, identify target keywords, benchmark competitors, and map out target publisher categories."
    },
    {
      num: "02",
      title: "Publisher Outreach & Vetting",
      desc: "Our outreach team pitches niche-relevant webmasters and editors, vetting each domain for organic traffic stability and quality standards."
    },
    {
      num: "03",
      title: "E-E-A-T Content Creation",
      desc: "In-house copywriters draft high-quality educational posts matching the publisher's guidelines and integrating your backlink contextually."
    },
    {
      num: "04",
      title: "Live Placement Reporting",
      desc: "Once the editor approves and publishes the post, we log the live link in your campaign spreadsheet with all domain metrics."
    }
  ]

  const serviceSchema = getServiceSchema(
    "Backlink Bridge GBOB Management Service",
    "Fully managed guest blogging outreach business service handling end-to-end publisher sourcing and copy pitches.",
    "/gbob-management"
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
            style={{ backgroundImage: `url(${getUnsplashUrl("outreach email marketing team office", 1920, 1080)})` }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <Badge variant="teal" className="bg-teal/20 text-white border border-teal/40">
              GBOB Outreach Management
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white max-w-4xl mx-auto leading-[1.1]">
              Outsource Your Entire Blogger Outreach Operation.
            </h1>
            <p className="text-[18px] md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Fully managed guest blogging campaigns. We pitch editors, write high-authority content, and secure permanent placements on real sites.
            </p>
            <div className="pt-4">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Get Managed Outreach Plan
              </Button>
            </div>
          </div>
        </section>

        {/* What is GBOB? */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge variant="primary">Outsourced Outreach</Badge>
              <h2 className="text-3xl font-bold font-display text-navy leading-tight">
                What is GBOB Management?
              </h2>
              <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                Blogger outreach is time-consuming, expensive, and difficult to scale. Hiring team members, managing email scripts, vetting webmasters, and editing drafts takes focus away from your product or clients.
              </p>
              <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                Our GBOB (Guest Blogging Outreach Business) Management service handles the entire pipeline. We run outreach templates from our domains, pitch active editorial calendars, pay publisher fees, draft articles, and deliver high-impact contextual links with full metric reports.
              </p>
            </div>
            <div className="relative h-[360px] w-full rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <Image
                src={getUnsplashUrl("editorial team collaboration office professional", 600, 360)}
                alt="Blogger outreach campaign manager dashboard"
                fill
                sizes="(max-w-7xl) 50vw, 100vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Managed Outreach Benefits */}
        <section className="bg-surface py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="teal">Why Outsource?</Badge>
              <h2 className="text-3xl font-bold font-display text-navy mt-4">
                Benefits of outsourcing your GBOB campaigns.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 bg-white border border-border">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 font-bold">1</div>
                <h3 className="text-lg font-bold text-navy mb-2">Zero Software Fees</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  Save thousands of dollars on outreach platforms, domain purchases, hosting nodes, email verification tools, and crawler databases.
                </p>
              </Card>

              <Card className="p-6 bg-white border border-border">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 font-bold">2</div>
                <h3 className="text-lg font-bold text-navy mb-2">Dedicated SEO Analyst</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  Your strategist runs competition gaps, monitors link health, reviews anchor profiles, and custom-targets overlapping niches.
                </p>
              </Card>

              <Card className="p-6 bg-white border border-border">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 font-bold">3</div>
                <h3 className="text-lg font-bold text-navy mb-2">Pre-Vetted Publisher Base</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  Gain instant access to our database of 2,000+ active publisher relationships with clean metrics, real traffic, and strict spam gates.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary">Our Workflow</Badge>
            <h2 className="text-3xl font-bold font-display text-navy mt-4">
              Blogger outreach on auto-pilot.
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
