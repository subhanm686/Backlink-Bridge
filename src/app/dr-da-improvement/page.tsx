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
  description: "Improve your DR and DA safely with high-quality contextual links. Structured 90-day authority campaigns with live reporting. Get a free site audit today.",
  canonicalUrl: "https://backlinkbridge.com/dr-da-improvement"
})

export default function DrDaImprovementPage() {
  const faqs = [
    {
      question: "What is Ahrefs DR and Moz DA?",
      answer: "Ahrefs Domain Rating (DR) and Moz Domain Authority (DA) are logarithmic search metrics scaled from 0 to 100. They measure the strength and diversity of a website's link profile, indicating how likely a site is to rank on search engine results pages."
    },
    {
      question: "How do you improve DR and DA safely?",
      answer: "We do not use spam redirects or temporary directory profiles. Instead, we build dofollow, high-DR contextual links from real, authoritative publisher sites in relevant niches. This passes legitimate 'link juice' that grows your authority organically."
    },
    {
      question: "How long does it take to see a change in DR/DA?",
      answer: "Ahrefs and Moz typically update their index databases every 2 to 4 weeks. Most campaigns show measurable metric improvements within 30 to 60 days as new referring domains are discovered and crawled."
    },
    {
      question: "Will higher DR increase my search traffic?",
      answer: "Yes, indirectly. While search engines do not use third-party metrics like DR/DA as direct ranking signals, the underlying factor (a powerful backlink profile) is a core ranking signal. Higher authority makes it easier to rank new pages and keywords."
    },
    {
      question: "Can my Domain Rating decrease over time?",
      answer: "Yes. If your link velocity stops while competitors continue building links, or if older links are lost, your relative DR can drop. Our campaigns focus on securing permanent placements to ensure long-term metric stability."
    }
  ]

  const benefits = [
    {
      title: "Indexation Boost",
      desc: "Search crawlers index high-authority sites more frequently, meaning your new pages get discovered and ranked within hours instead of weeks."
    },
    {
      title: "Competitive Sourcing",
      desc: "Rank above competitors who have lower authority scoreboards, allowing you to dominate commercial search terms easily."
    },
    {
      title: "Agency White-Labeling",
      desc: "Resell authority increases directly to clients. We provide raw Ahrefs and Moz screenshots demonstrating baseline-to-target growth."
    }
  ]

  const steps = [
    {
      num: "01",
      title: "Metric Audit",
      desc: "We analyze your starting DR, referring domains, spam distribution, and benchmark targets against competing domains."
    },
    {
      num: "02",
      title: "Authority Link Sourcing",
      desc: "Our database matches high-DR (DR 50–80+) active editorial partners in overlapping commercial industries."
    },
    {
      num: "03",
      title: "Contextual Placement",
      desc: "We place dofollow links inside niche-relevant content. This triggers the maximum authority flow to your pages."
    },
    {
      num: "04",
      title: "Monitoring & Indexing",
      desc: "We monitor database updates to ensure all placements are properly indexed and credited to your link profile."
    }
  ]

  const serviceSchema = getServiceSchema(
    "Backlink Bridge DR / DA Improvement Service",
    "Professional Domain Rating and Domain Authority metric improvement campaigns utilizing high-quality dofollow links.",
    "/dr-da-improvement"
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
            style={{ backgroundImage: `url(${getUnsplashUrl("domain authority analytics growth chart", 1920, 1080)})` }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <Badge variant="teal" className="bg-teal/20 text-white border border-teal/40">
              Authority Growth
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white max-w-4xl mx-auto leading-[1.1]">
              Increase Your Domain Rating & Authority Safely.
            </h1>
            <p className="text-[18px] md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Grow Ahrefs DR and Moz DA through natural, high-equity dofollow contextual placements on real authority sites.
            </p>
            <div className="pt-4">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Start Authority Campaign
              </Button>
            </div>
          </div>
        </section>

        {/* What is DR/DA Improvement */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge variant="primary">The Metric</Badge>
              <h2 className="text-3xl font-bold font-display text-navy leading-tight">
                Why Does Domain Authority Matter?
              </h2>
              <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                Domain Rating and Domain Authority reflect the collective voting power of your backlinks. High metrics signal to search crawlers that your site is a trusted resource, allowing you to rank competitive articles without needing an individual page link campaign.
              </p>
              <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                We focus strictly on building white-hat authority. By directing high-value dofollow links from active, organic traffic-generating sites, we transfer genuine search equity that stands up to manual reviews and algorithmic quality evaluations.
              </p>
            </div>
            <div className="relative h-[360px] w-full rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <Image
                src={getUnsplashUrl("photo-1460925895917-afdab827c52f", 600, 360)}
                alt="Search engine optimization authority charts"
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
              <Badge variant="teal">Key Benefits</Badge>
              <h2 className="text-3xl font-bold font-display text-navy mt-4">
                What a stronger authority profile delivers.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <Card key={idx} className="p-6 bg-white border border-border">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {benefit.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary">The Workflow</Badge>
            <h2 className="text-3xl font-bold font-display text-navy mt-4">
              How we improve your authority score.
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
