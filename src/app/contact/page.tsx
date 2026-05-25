import React from 'react'
import Badge from '@/components/ui/Badge'
import ContactForm from '@/components/ui/ContactForm'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: "Contact Us & Get Started | Backlink Bridge",
  description: "Get in touch with our SEO link building team. Share your website targets and authority goals to get a custom strategist proposal.",
  canonicalUrl: "https://backlinkbridge.com/contact"
})

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Backlink Bridge",
    "description": "Send us your domain URL and monthly target details to get a customized strategist outreach outline.",
    "url": "https://backlinkbridge.com/contact",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "subhan@backlinkbridge.com",
      "contactType": "customer service"
    }
  }

  const badges = [
    { title: "Free Audit", desc: "Every contact request includes a free manual link profile audit." },
    { title: "No Commitment", desc: "No contracts or minimum duration. Flat per-placement pricing." },
    { title: "24hr Response", desc: "We review and send your custom outreach plan within 24 business hours." }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <main className="bg-surface py-24 min-h-[90vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column (Info & Badges) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <Badge variant="primary">Get in Touch</Badge>
                <h1 className="text-4xl md:text-5xl font-extrabold font-display text-navy leading-tight tracking-tight">
                  Let&apos;s Build Your Link Strategy.
                </h1>
                <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                  Tell us about your website and link building goals. We will respond within one business day with a custom strategy roadmap.
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-white border border-border p-6 rounded-xl shadow-sm">
                <span className="text-navy font-bold uppercase tracking-wider text-xs block mb-2">Direct Contact</span>
                <a 
                  href="mailto:subhan@backlinkbridge.com" 
                  className="text-lg font-bold text-primary hover:underline"
                >
                  subhan@backlinkbridge.com
                </a>
                <p className="text-xs text-slate-400 font-semibold mt-1 uppercase">Response guarantee: Under 24 hours</p>
              </div>

              {/* Trust Badges */}
              <div className="space-y-4">
                {badges.map((badge, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 bg-white border border-border rounded-xl shadow-sm">
                    <div className="w-9 h-9 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy uppercase tracking-wider">{badge.title}</h4>
                      <p className="text-[13px] text-slate-500 mt-0.5 leading-relaxed font-medium">{badge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </main>
    </>
  )
}
