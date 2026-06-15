import Breadcrumb from '@/components/ui/Breadcrumb'
import React from 'react'
import Image from 'next/image'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import FaqAccordion from '@/components/ui/FaqAccordion'
import BottomCTA from '@/components/sections/BottomCTA'
import { constructMetadata, getServiceSchema, getFAQSchema } from '@/lib/metadata'
import { getUnsplashUrl } from '@/lib/utils'

export const metadata = constructMetadata({
  title: "Niche Edits & Link Insertions Service | Backlink Bridge",
description: "Get contextual links inserted into already-indexed, traffic-generating articles. Boost your rankings fast with high-authority placements. Get a free audit today.",
  canonicalUrl: "https://backlinkbridge.com/niche-edits"
})

export default function NicheEditsPage() {
  const faqs = [
    {
      question: "What is a niche edit link insertion?",
      answer: "A niche edit (also known as a link insertion) is the process of placing your website hyperlink into a contextually relevant, already-indexed blog post or article that is already ranking on search engines."
    },
    {
      question: "How do niche edits differ from guest posts?",
      answer: "While guest posts require writing new content to publish on a site, niche edits insert your link into existing articles. Since the target page is already cached, indexed, and sometimes already ranking, authority transfer happens much faster, requiring no new content drafts."
    },
    {
      question: "Are niche edits safe for SEO?",
      answer: "Yes, provided they are placed contextually in high-quality articles with real organic traffic. We manually vet publisher pages for traffic stability, domain metrics, and anchor text naturalness to ensure full compliance with search safety guidelines."
    },
    {
      question: "How quickly do niche edits index and show results?",
      answer: "Niche edits typically show indexing improvements within 5 to 14 days because the page is already cached and actively crawled by Google. The authority transfer is faster compared to guest posting."
    },
    {
      question: "Can I select the target anchor text?",
      answer: "Yes. You specify the target URL and preferred anchor text. Our outreach team works with publisher editors to insert the link into a paragraph that flows naturally, adjusting adjacent text slightly if needed for contextual fit."
    }
  ]



  const serviceSchema = getServiceSchema(
    "Backlink Bridge Niche Edits Service",
    "High-quality contextual link insertions into already-indexed articles on traffic-verified publisher sites.",
    "/niche-edits"
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

        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Niche Edits" }]} />
        
        {/* Hero Section */}
        <section className="relative py-32 bg-slate-900 overflow-hidden text-center">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-30" 
            style={{ backgroundImage: `url(${getUnsplashUrl("editing article website content laptop", 1920, 1080)})` }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <Badge variant="teal" className="bg-teal/20 text-white border border-teal/40">
              Niche Edits & Insertions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white max-w-4xl mx-auto leading-[1.1]">
              Immediate Authority with Contextual Link Insertions.
            </h1>
            <p className="text-[18px] md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Place your link into existing, high-authority articles that are already indexed, ranking, and generating real organic traffic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Order Niche Edits
              </Button>
            </div>
          </div>
        </section>

        {/* What are Niche Edits? */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge variant="primary">How it works</Badge>
              <h2 className="text-3xl font-bold font-display text-navy leading-tight">
                What are Niche Edits / Link Insertions?
              </h2>
              <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                Niche edits differ from traditional guest posting in one key aspect: they use existing, older pages rather than creating a brand-new blog post. 
              </p>
              <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                Because these articles have been live for months or years, they already have established trust with Google, search index cache, and sometimes their own internal link power. By inserting a link into an existing, topic-relevant paragraph, you capture immediate authority transfer and indexation speed.
              </p>
            </div>
            <div className="relative h-[360px] w-full rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <Image
                src={getUnsplashUrl("editing article website content laptop", 600, 360)}
                alt="Contextual link insertion on live ranking article"
                fill
                sizes="(max-w-7xl) 50vw, 100vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Guest Posts vs Niche Edits Comparison */}
        <section className="bg-surface py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="teal">Comparison</Badge>
              <h2 className="text-3xl font-bold font-display text-navy mt-4">
                Guest Posts vs. Niche Edits: When to use which?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-border p-8 rounded-xl shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-navy">Use Guest Posts If:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-[14.5px] text-slate-600 font-medium">
                    <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You want full control over the article narrative and topical framework.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[14.5px] text-slate-600 font-medium">
                    <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You want your brand heavily featured or discussed in the content itself.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[14.5px] text-slate-600 font-medium">
                    <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You are building links to key commercial service landing pages.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-border p-8 rounded-xl shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-navy">Use Niche Edits If:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-[14.5px] text-slate-600 font-medium">
                    <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You want the fastest possible indexing speed and authority transmission.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[14.5px] text-slate-600 font-medium">
                    <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You want to inherit link equity from page URLs that Google already crawls frequently.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[14.5px] text-slate-600 font-medium">
                    <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You want a highly cost-efficient placement (lower price per link).</span>
                  </li>
                </ul>
              </div>
            </div>
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
