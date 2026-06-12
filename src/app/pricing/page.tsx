import React from 'react'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import FaqAccordion from '@/components/ui/FaqAccordion'
import BottomCTA from '@/components/sections/BottomCTA'
import { constructMetadata, getFAQSchema } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: "Link Building Pricing & Packages 2026 | Backlink Bridge",
  description: "Transparent link building pricing for every budget. Guest posting packages from $199/mo. Per-link pricing on DR 30–80+ sites. No contracts. Free site audit included.",
  canonicalUrl: "https://backlinkbridge.com/pricing"
})

const MONTHLY_PLANS = [
  {
    name: "Starter",
    badge: null,
    price: 199,
    description: "For new sites and small businesses building their first backlink foundation.",
    links: 5,
    drRange: "DR 30–50",
    traffic: "5K+ monthly visitors",
    features: [
      "5 guest post placements/month",
      "DR 30–50 publishers",
      "Real traffic-verified sites only",
      "800–1,000 word human-written articles",
      "You approve all content before publish",
      "Permanent dofollow links",
      "Anchor text strategy included",
      "Live Google Sheet reporting",
      "12-month link replacement guarantee",
    ],
    notIncluded: [
      "Niche edits / link insertions",
      "Competitor backlink analysis",
      "Dedicated account manager",
    ],
    cta: "Get Started",
    ctaVariant: "secondary" as const,
    highlight: false,
  },
  {
    name: "Growth",
    badge: "Most Popular",
    price: 400,
    description: "For established sites ready to move rankings and hit DR 50+ within 6 months.",
    links: 10,
    drRange: "DR 40–65",
    traffic: "10K+ monthly visitors",
    features: [
      "10 guest post placements/month",
      "DR 40–65 publishers",
      "Real traffic-verified sites only",
      "1,000–1,200 word human-written articles",
      "You approve all content before publish",
      "Permanent dofollow links",
      "Anchor text strategy + profile audit",
      "3 niche edits / link insertions",
      "Competitor backlink gap analysis",
      "Live Google Sheet reporting",
      "Dedicated account manager",
      "12-month link replacement guarantee",
    ],
    notIncluded: [],
    cta: "Get Started",
    ctaVariant: "primary" as const,
    highlight: true,
  },
  {
    name: "Authority",
    badge: null,
    price: 1000,
    description: "For competitive niches and brands that need dominant DR 60+ authority fast.",
    links: 20,
    drRange: "DR 50–80+",
    traffic: "20K+ monthly visitors",
    features: [
      "20 guest post placements/month",
      "DR 50–80+ publishers",
      "Real traffic-verified sites only",
      "1,200+ word human-written articles",
      "You approve all content before publish",
      "Permanent dofollow links",
      "Full anchor text strategy + profile audit",
      "8 niche edits / link insertions",
      "Full competitor backlink gap analysis",
      "Digital PR outreach (2 campaigns/mo)",
      "Live Google Sheet reporting",
      "Dedicated senior account manager",
      "Priority 24hr turnaround",
      "12-month link replacement guarantee",
    ],
    notIncluded: [],
    cta: "Get Started",
    ctaVariant: "secondary" as const,
    highlight: false,
  },
]

const PER_LINK_ROWS = [
  { dr: "DR 30–40", traffic: "5K+ / mo", guestPost: "$99", nicheEdit: "$69", turnaround: "7–14 days" },
  { dr: "DR 40–50", traffic: "10K+ / mo", guestPost: "$149", nicheEdit: "$99", turnaround: "10–18 days" },
  { dr: "DR 50–60", traffic: "15K+ / mo", guestPost: "$249", nicheEdit: "$169", turnaround: "14–21 days" },
  { dr: "DR 60–70", traffic: "25K+ / mo", guestPost: "$399", nicheEdit: "$279", turnaround: "14–28 days" },
  { dr: "DR 70–80+", traffic: "50K+ / mo", guestPost: "$599", nicheEdit: "$429", turnaround: "21–35 days" },
]

const ADDONS = [
  { name: "Spam Score Cleanup Audit", desc: "Full toxic backlink audit + disavow file", price: "$199 one-off" },
  { name: "Anchor Text Profile Audit", desc: "Full anchor distribution analysis + strategy", price: "$99 one-off" },
  { name: "GBOB Setup & Training", desc: "Full outreach system setup for your team", price: "$499 one-off" },
  { name: "White-Label Reporting", desc: "Branded reports for agency clients", price: "$49/mo" },
]

const faqs = [
  {
    question: "Are your links permanent?",
    answer: "Yes. Every placement is permanent. In the rare event a link is removed or goes nofollow within 12 months of placement, we replace it with an equivalent or higher-authority site at no charge."
  },
  {
    question: "Do I need to sign a contract?",
    answer: "No long-term contracts. All monthly plans are month-to-month. Cancel anytime with no penalty. We retain clients through results, not lock-in clauses."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients see DR movement within 4–8 weeks of their first links going live. Keyword ranking improvements typically appear within 60–90 days as Google re-evaluates your backlink profile."
  },
  {
    question: "Can I approve the content before it goes live?",
    answer: "Absolutely. Every article draft is sent to you for approval before we submit it to the publisher. You can request edits to the content, anchor text, or placement context."
  },
  {
    question: "What niches do you work in?",
    answer: "We have established publisher relationships across 25+ niches including SaaS, finance, health, real estate, legal, e-commerce, travel, education, and more. If you are in a specialised niche, contact us and we will confirm publisher availability before you commit."
  },
  {
    question: "Do you work with agencies and white-label resellers?",
    answer: "Yes. We offer white-label reporting and agency-friendly pricing for resellers. Contact us with your monthly volume requirements for a custom quote."
  },
  {
    question: "How is the Growth plan different from Starter?",
    answer: "Growth adds niche edits (link insertions in existing ranking articles), a competitor backlink gap analysis, and a dedicated account manager. It also targets higher-DR publishers (DR 40–65 vs DR 30–50) for faster authority movement."
  },
  {
    question: "Can I mix guest posts and niche edits on per-link orders?",
    answer: "Yes. Per-link orders can be placed for guest posts, niche edits, or any combination. Our team will recommend the optimal mix based on your current DR, anchor profile, and target keywords."
  },
]

export default function PricingPage() {
  const faqSchema = getFAQSchema(faqs)

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Link Building Pricing & Packages | Backlink Bridge",
    "description": "Transparent link building pricing for every budget. Guest posting packages from $499/mo.",
    "url": "https://backlinkbridge.com/pricing",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": MONTHLY_PLANS.map((plan, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Offer",
          "name": `${plan.name} Link Building Package`,
          "price": plan.price,
          "priceCurrency": "USD",
          "description": plan.description,
          "url": "https://backlinkbridge.com/pricing"
        }
      }))
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-surface py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <Badge variant="teal">Transparent Pricing</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-navy leading-tight tracking-tight">
            Link Building Pricing That<br className="hidden md:block" /> Actually Makes Sense
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            No hidden fees. No lock-in contracts. Every package includes human-written content,
            traffic-verified publishers, and a 12-month link replacement guarantee.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-2 text-sm font-semibold text-slate-500">
            {["No long-term contracts", "Free site audit included", "12-month link guarantee", "Cancel anytime"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="text-teal text-base">✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-navy mb-3">Monthly Link Building Packages</h2>
            <p className="text-slate-500 font-medium">All plans include content creation, publisher outreach, and live reporting.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {MONTHLY_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border-2 p-8 relative flex flex-col ${
                  plan.highlight
                    ? 'border-primary bg-white shadow-xl shadow-primary/10'
                    : 'border-border bg-white'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{plan.name}</p>
                  <div className="flex items-end gap-1 mb-3">
                    <span className="text-5xl font-extrabold text-navy">${plan.price}</span>
                    <span className="text-slate-400 font-medium mb-2">/month</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="flex gap-4 mb-6 p-4 bg-surface rounded-xl border border-border">
                  <div className="text-center flex-1">
                    <p className="text-2xl font-extrabold text-primary">{plan.links}</p>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">Links / mo</p>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="text-center flex-1">
                    <p className="text-base font-bold text-navy">{plan.drRange}</p>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">DR range</p>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="text-center flex-1">
                    <p className="text-xs font-bold text-navy leading-tight">{plan.traffic}</p>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">Min traffic</p>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="text-teal font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-400">
                      <span className="font-bold mt-0.5 flex-shrink-0">✕</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button href="/contact" variant={plan.ctaVariant} className="w-full text-center justify-center">
                  {plan.cta} — ${plan.price}/mo
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-400 mt-8 font-medium">
            Need a custom volume or enterprise quote?{' '}
            <Link href="/contact" className="text-primary font-semibold hover:underline">Contact us →</Link>
          </p>
        </div>
      </section>

      {/* Per-Link Pricing */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="gray" className="mb-4">Pay Per Link</Badge>
            <h2 className="text-3xl font-bold font-display text-navy mb-3">Per-Link Pricing</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">
              Need full control over exactly what you order? Buy individual guest posts or niche edits by DR tier with no monthly commitment.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-6 py-4 font-semibold">DR Tier</th>
                    <th className="text-left px-6 py-4 font-semibold">Min Traffic</th>
                    <th className="text-center px-6 py-4 font-semibold">Guest Post</th>
                    <th className="text-center px-6 py-4 font-semibold">Niche Edit</th>
                    <th className="text-center px-6 py-4 font-semibold">Turnaround</th>
                  </tr>
                </thead>
                <tbody>
                  {PER_LINK_ROWS.map((row, i) => (
                    <tr key={row.dr} className={`border-t border-border ${i % 2 === 0 ? 'bg-white' : 'bg-surface'}`}>
                      <td className="px-6 py-4 font-bold text-navy">{row.dr}</td>
                      <td className="px-6 py-4 text-slate-500">{row.traffic}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="font-bold text-primary text-base">{row.guestPost}</span>
                        <span className="text-slate-400 text-xs block">per link</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="font-bold text-teal text-base">{row.nicheEdit}</span>
                        <span className="text-slate-400 text-xs block">per link</span>
                      </td>
                      <td className="px-6 py-4 text-center text-slate-500">{row.turnaround}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-surface border-t border-border text-xs text-slate-400">
              All per-link orders include content writing, publisher outreach, live link reporting, and 12-month replacement guarantee. Minimum order: 3 links.
            </div>
          </div>

          <div className="text-center mt-8">
            <Button href="/contact" variant="primary">Order Per-Link Placements →</Button>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-navy mb-3">Add-On Services</h2>
            <p className="text-slate-500 font-medium">Enhance any plan with these standalone services.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ADDONS.map((a) => (
              <div key={a.name} className="flex items-start justify-between gap-4 p-6 rounded-xl border border-border bg-surface">
                <div>
                  <p className="font-bold text-navy text-sm mb-1">{a.name}</p>
                  <p className="text-slate-500 text-sm">{a.desc}</p>
                </div>
                <span className="text-primary font-bold text-sm whitespace-nowrap">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "1,200+", label: "Websites served" },
              { stat: "50,000+", label: "Backlinks placed" },
              { stat: "25+", label: "Niches covered" },
              { stat: "98%", label: "Client retention" },
            ].map((s) => (
              <div key={s.stat}>
                <p className="text-3xl font-extrabold text-navy mb-1">{s.stat}</p>
                <p className="text-sm text-slate-500 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-navy mb-3">What Every Plan Includes</h2>
            <p className="text-slate-500 font-medium">No matter which plan you choose, these are non-negotiables.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: "✍️", title: "Human-Written Content", desc: "Every article is written by our in-house team — never AI-generated filler. 800–1,200+ words tailored to each publisher." },
              { icon: "🔍", title: "Traffic-Verified Publishers", desc: "Every site is checked for real organic traffic, not just DR. No link farms, no PBNs, no footprints." },
              { icon: "✅", title: "Full Draft Approval", desc: "You review and approve every article and anchor text before it goes live. No surprises." },
              { icon: "📊", title: "Live Link Reporting", desc: "A shared Google Sheet updated within 24 hours of every placement — DR, DA, URL, anchor text, live link." },
              { icon: "🔒", title: "12-Month Link Guarantee", desc: "If any link is removed or goes nofollow within 12 months, we replace it for free on an equal or better site." },
              { icon: "🚫", title: "No Black-Hat Tactics", desc: "Natural anchor ratios, white-hat outreach, varied link velocity. Fully compliant with Google quality guidelines." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-border bg-surface">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-navy text-sm mb-1">{item.title}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-navy mb-3">Pricing FAQs</h2>
            <p className="text-slate-500 font-medium">Everything you need to know before you commit.</p>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCTA />
    </>
  )
}
