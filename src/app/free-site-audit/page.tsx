import React from 'react'
import Badge from '@/components/ui/Badge'
import AuditForm from '@/components/ui/AuditForm'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: "Free Backlink & DR Site Audit | Backlink Bridge",
  description: "Get a free manual backlink profile audit. Discover toxic links, benchmark against competitors, and get a custom link-building action plan.",
  canonicalUrl: "https://backlinkbridge.com/free-site-audit"
})

export default function FreeSiteAuditPage() {
  const auditDeliverables = [
    { title: "Full toxic link identification", desc: "We scan your backlink profile for spam links that trigger algorithmic penalties." },
    { title: "DR and DA benchmark vs competitors", desc: "Compare your backlink authority profile against your top 3 search competitors." },
    { title: "Custom link building action plan", desc: "Get a structured roadmap mapping anchor text selection and target niches." }
  ]

  return (
    <main className="bg-surface py-24 min-h-[90vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Centered Hero Header */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <Badge variant="teal">Free Resource</Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold font-display text-navy leading-tight tracking-tight">
            Get Your Free Backlink Audit — Delivered in 24 Hours.
          </h1>
          <p className="text-[17px] md:text-[18px] text-slate-500 font-medium leading-relaxed">
            We will manually review your backlink profile and show you exactly what is hurting your DR, DA, and organic rankings — with a custom action plan.
          </p>
        </div>

        {/* Deliverables List (3 Bullets) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {auditDeliverables.map((item, idx) => (
            <div key={idx} className="bg-white border border-border p-5 rounded-xl shadow-sm space-y-2.5">
              <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-[14px] font-bold text-navy uppercase tracking-wider leading-snug">{item.title}</h4>
              <p className="text-[13px] text-slate-400 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Audit Form Wrapper */}
        <div className="max-w-xl mx-auto">
          <AuditForm />
          
          <div className="text-center mt-5">
            <span className="text-[13px] text-slate-400 font-semibold uppercase tracking-wider">
              No credit card. No commitment. Delivered in 24 hours.
            </span>
          </div>
        </div>

        {/* Trust Badging Strip */}
        <div className="text-center max-w-md mx-auto pt-6 border-t border-border/80">
          <p className="text-[14px] font-semibold text-slate-500 uppercase tracking-widest leading-relaxed">
            Reviewed by human SEO experts. Not an automated tool.
          </p>
        </div>

      </div>
    </main>
  )
}
