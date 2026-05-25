import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import FaqAccordion from '@/components/ui/FaqAccordion'
import BottomCTA from '@/components/sections/BottomCTA'
import { constructMetadata, getServiceSchema, getFAQSchema } from '@/lib/metadata'
import { getUnsplashUrl } from '@/lib/utils'

export const metadata = constructMetadata({
  title: "Professional Guest Posting Service | Backlink Bridge",
  description: "Get permanent, contextual, dofollow links on real traffic-verified websites. 100% human-written content and manual blogger outreach.",
  canonicalUrl: "https://backlinkbridge.com/guest-posting"
})

export default function GuestPostingPage() {
  const faqs = [
    {
      question: "What is a guest post backlink?",
      answer: "A guest post backlink is a contextual link placed inside a newly written, editorial-grade article that is published on an external website. It transfers Domain Authority (DA) and referral traffic back to your website naturally."
    },
    {
      question: "How do you choose which publishers to target?",
      answer: "We analyze your website's niche, identify authority gaps, and perform manual email outreach to editors of real websites. We strictly verify each site's metrics, including Ahrefs Domain Rating (DR), Moz Spam Score, and real organic monthly traffic before pitching."
    },
    {
      question: "Who writes the content for the guest posts?",
      answer: "Our in-house team of professional copywriters creates high-quality, 800-1,200 word articles tailored to the publisher's editorial guidelines. All content is structured for E-E-A-T and is 100% human-written."
    },
    {
      question: "Are these guest posts permanent?",
      answer: "Yes. All our guest post placements are permanent. In the rare event that a link is removed or becomes nofollow within the first 12 months, we will replace it with a link on an equivalent or higher-authority site for free."
    },
    {
      question: "Can I approve the articles before they go live?",
      answer: "Absolutely. We submit all articles to you for approval. You can review the content, anchor text, and placement context before we submit it to the publisher."
    }
  ]



  const serviceSchema = getServiceSchema(
    "Backlink Bridge Guest Posting Service",
    "High-quality editorial guest posting service on traffic-verified publisher sites.",
    "/guest-posting"
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
            style={{ backgroundImage: `url(${getUnsplashUrl("modern office building skyline dusk", 1920, 1080)})` }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <Badge variant="teal" className="bg-teal/20 text-white border border-teal/40">
              Guest Posting Service
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white max-w-4xl mx-auto leading-[1.1]">
              High-Authority Guest Posting on Real Editorial Websites.
            </h1>
            <p className="text-[18px] md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Permanent contextual links placed inside human-written, editorial-grade articles on niche-relevant websites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Order Guest Posts
              </Button>
            </div>
          </div>
        </section>

        {/* What is Guest Posting? */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge variant="primary">The Basics</Badge>
              <h2 className="text-3xl font-bold font-display text-navy leading-tight">
                What is Guest Posting?
              </h2>
              <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                Guest posting involves writing an article in your niche and publishing it on an external website, with a hyperlink embedded back to your site. 
              </p>
              <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                Google treats these backlinks as &apos;votes of confidence.&apos; By securing links on publishers with high organic traffic and strong Domain Rating, you pass authority directly to your website, improving your search rankings and keywords coverage safely.
              </p>
            </div>
            <div className="relative h-[360px] w-full rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <Image
                src={getUnsplashUrl("writer desk laptop coffee notebook professional", 600, 360)}
                alt="Blogger outreach content creation desk"
                fill
                sizes="(max-w-7xl) 50vw, 100vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* What You Get / Core Features */}
        <section className="bg-surface py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="teal">Deliverables</Badge>
              <h2 className="text-3xl font-bold font-display text-navy mt-4">
                What you get with every guest post order.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "100% Human-Written Content", desc: "No AI fluff. Our writers produce 800–1,200 words of research-backed, niche-specific copy optimized to match publisher guidelines." },
                { title: "Permanent Placements", desc: "We guarantee all placements. If a link falls off or becomes nofollow within 12 months, we replace it at no charge." },
                { title: "No PBNs or Link Farms", desc: "Every link is placed on an active, editorial website with real monthly traffic. We have a zero-tolerance policy for private blog networks." },
                { title: "Custom Anchor Text Selection", desc: "We guide you on choosing natural anchor text distributions (brand, naked URL, partial-match, exact-match) to avoid manual review red flags." },
                { title: "Complete Draft Approvals", desc: "You maintain total control. We write and share the article draft for your sign-off before pitching editors." },
                { title: "Detailed Campaign Dashboard", desc: "Track every link in real-time. View live placements, anchor text records, DR, DA, organic traffic, and Moz spam metrics anytime." }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-white border border-border rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[17px] font-bold text-navy mb-1.5">{feature.title}</h4>
                    <p className="text-[14px] text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
                  </div>
                </div>
              ))}
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

        {/* Related Niches Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary">Industries</Badge>
            <h2 className="text-3xl font-bold font-display text-navy mt-4">
              Niches we serve with guest posts.
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ id: 1, name: "Health & Wellness", slug: "health-wellness", unsplash: "wellness yoga meditation healthy lifestyle" },
              { id: 2, name: "Finance & Investing", slug: "finance-investing", unsplash: "finance investment stock market professional" },
              { id: 3, name: "Technology & SaaS", slug: "technology-saas", unsplash: "technology software developer laptop modern" },
              { id: 4, name: "Real Estate", slug: "real-estate", unsplash: "real estate luxury home architecture" }].map((niche) => (
              <Card key={niche.id} className="flex flex-col h-full bg-white">
                <div className="relative h-[150px] w-full bg-slate-100">
                  <Image
                    src={getUnsplashUrl(niche.unsplash, 300, 150)}
                    alt={niche.name}
                    fill
                    sizes="(max-w-7xl) 25vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-base font-bold text-navy">{niche.name}</h4>
                  <Link 
                    href={`/niches?filter=${niche.slug}`}
                    className="text-[13px] font-semibold text-primary hover:underline mt-2 block"
                  >
                    View Publishers →
                  </Link>
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
