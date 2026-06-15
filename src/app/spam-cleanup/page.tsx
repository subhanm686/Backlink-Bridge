import Breadcrumb from '@/components/ui/Breadcrumb'
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
  title: "Spam Score Cleanup Service | Backlink Bridge",
  description: "Drop your Moz Spam Score and neutralise search penalties. Full backlink audit, toxic link identification, and Google Disavow preparation. Get started today.",
  canonicalUrl: "https://backlinkbridge.com/spam-cleanup"
})

export default function SpamCleanupPage() {
  const faqs = [
    {
      question: "What is a Moz Spam Score?",
      answer: "Moz Spam Score is a metric that rates the likelihood of a website being penalized or flagged by Google. It is calculated based on 27 common signals, such as thin content, lack of contact information, and suspicious backlink footprints."
    },
    {
      question: "How do toxic links harm my search rankings?",
      answer: "Google's algorithms (like Penguin and subsequent quality updates) evaluate the quality of websites pointing to you. If your profile is dominated by spam, porn, or automated link-farms, it sends a strong quality red flag that can cause search impressions and rankings to drop."
    },
    {
      question: "What is a Google Disavow file?",
      answer: "A Google Disavow file is a plain text document (`.txt`) containing list records of spammy URLs or entire domains that you want Google to ignore when evaluating your backlink profile. We compile this file according to Google's strict syntax guidelines."
    },
    {
      question: "Will disavowing links immediately restore my traffic?",
      answer: "It is not instantaneous. Once the disavow file is uploaded via Google Search Console, Google takes a few weeks to re-crawl the listed domains and apply the disavow directive. Most sites see index recovery within 30 to 60 days."
    },
    {
      question: "Do you offer replacement links for disavowed ones?",
      answer: "Yes. In our premium cleanup campaigns, we don't just eliminate the bad links — we replace them with high-quality, traffic-verified guest posts in your niche to restore and exceed your original authority levels."
    }
  ]

  const benefits = [
    {
      title: "Algorithmic Protection",
      desc: "Neutralize negative SEO attacks from competitors who may be blasting spam links at your website."
    },
    {
      title: "Clean Metric Health",
      desc: "Reduce your visible Moz Spam Score, making your domain much more attractive for partnerships and sponsorships."
    },
    {
      title: "GSC Verification",
      desc: "Receive a fully formatted, tested disavow file ready to upload directly to your Google Search Console profile."
    }
  ]

  const steps = [
    {
      num: "01",
      title: "Deep Backlink Scan",
      desc: "We run a comprehensive crawl extracting every referring domain pointing to your site via Ahrefs, Semrush, and Moz."
    },
    {
      num: "02",
      title: "Spam Profile Audit",
      desc: "Each domain is programmatically and manually evaluated for toxic anchor text, hosting nodes, and thin content patterns."
    },
    {
      num: "03",
      title: "Disavow File Compilation",
      desc: "We generate your clean Google-compliant Disavow text document containing domain-level ignore directives."
    },
    {
      num: "04",
      title: "Authority Recovery",
      desc: "We guide you on GSC uploading and plan high-DR clean replacement placements to restore authority flow."
    }
  ]

  const serviceSchema = getServiceSchema(
    "Backlink Bridge Spam Score Cleanup Service",
    "Comprehensive toxic backlink profile audit and Google Disavow file compilation service to reduce Moz Spam Score.",
    "/spam-cleanup"
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

        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Spam Score Cleanup" }]} />
        {/* Hero Section */}
        <section className="relative py-32 bg-slate-900 overflow-hidden text-center">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-30" 
            style={{ backgroundImage: `url(${getUnsplashUrl("spam score moz toxic links cleanup", 1920, 1080)})` }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <Badge variant="teal" className="bg-teal/20 text-white border border-teal/40">
              SEO Profile Cleanup
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white max-w-4xl mx-auto leading-[1.1]">
              Audit, Disavow, and Clean Up Toxic Backlinks.
            </h1>
            <p className="text-[18px] md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Identify and disarm spammy links dragging down your search engine visibility and Moz Spam Score.
            </p>
            <div className="pt-4">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Request Profile Audit
              </Button>
            </div>
          </div>
        </section>

        {/* What is Spam Cleanup */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge variant="primary">The Risk</Badge>
              <h2 className="text-3xl font-bold font-display text-navy leading-tight">
                Neutralize Toxic Spam Scores Immediately.
              </h2>
              <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                Over time, websites accumulate low-quality links from scraper bots, directory indexers, and sometimes malicious negative SEO attempts. If left unchecked, these toxic links can suppress your keywords ranking velocity or trigger manual action flags.
              </p>
              <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                Our Spam Score Cleanup service does a complete diagnostic scan of your referring domains. We isolate spammy link hubs, compile a Google-format disavow list, and walk you through submitting it to Search Console to safely separate your rankings from toxic neighborhoods.
              </p>
            </div>
            <div className="relative h-[360px] w-full rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <Image
                src={getUnsplashUrl("photo-1563986768609-322da13575f3", 600, 360)}
                alt="Cybersecurity data protection disavow analysis"
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
              <Badge variant="teal">Why Audit?</Badge>
              <h2 className="text-3xl font-bold font-display text-navy mt-4">
                Restore organic search potential safely.
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
              Our cleanup process.
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
