import { constructMetadata } from '@/lib/metadata'
import BottomCTA from '@/components/sections/BottomCTA'
import Link from 'next/link'

export const metadata = constructMetadata({
  title: 'Case Study: GBOB Management for SaaS Client — 180 Links in 6 Months | Backlink Bridge',
  description: 'How Backlink Bridge built and managed a full GBOB operation for CloudSync, placing 180 high-authority backlinks across 6 months and growing organic traffic by 1,240%.',
  canonicalUrl: 'https://backlinkbridge.com/case-studies/gbob-saas',
})

const results = [
  { metric: 'Domain Rating', before: 'DR 8', after: 'DR 47', change: '+39 points' },
  { metric: 'Links Placed', before: '0', after: '180', change: '180 placements' },
  { metric: 'Referring Domains', before: '12', after: '156', change: '+144 domains' },
  { metric: 'Organic Traffic', before: '180/mo', after: '2,412/mo', change: '+1,240%' },
  { metric: 'Keywords Page 1', before: '3', after: '47', change: '+44 keywords' },
  { metric: 'Avg DR of Links', before: '—', after: 'DR 51', change: 'High authority' },
]

const timeline = [
  {
    period: 'Month 1–2',
    title: 'GBOB Setup & Publisher Recruitment',
    items: [
      'Audited CloudSync\'s existing backlink profile and keyword gap',
      'Identified 60+ target SaaS, technology, and B2B publisher sites',
      'Recruited and onboarded 18 active publisher relationships',
      'First 24 placements live by end of month 2',
    ]
  },
  {
    period: 'Month 3–4',
    title: 'Scaling Placements',
    items: [
      'Scaled to 35 placements per month across SaaS and tech verticals',
      'Introduced tiered publisher targeting: DR 30–50 for volume, DR 60+ for authority anchors',
      'DR moved from 8 to 28 — first major ranking improvements observed',
      'CloudSync entered page 2 for primary target keyword "project management SaaS"',
    ]
  },
  {
    period: 'Month 5–6',
    title: 'Authority Consolidation',
    items: [
      'Secured 6 placements on DR 70+ SaaS and technology publications',
      'Total 180 links placed across 156 unique referring domains',
      'CloudSync reached page 1 for 47 target keywords by month 6',
      'Organic traffic grew from 180 to 2,412 monthly visitors',
    ]
  },
]

const services = [
  { title: 'Publisher Recruitment', desc: 'We identified, vetted, and onboarded 18 active publisher relationships in SaaS, technology, and B2B niches — all manually reviewed for DR, traffic, and editorial quality.' },
  { title: 'Content Production', desc: 'Our team wrote all 180 guest post articles — editorial-grade, E-E-A-T compliant content averaging 900 words per piece, approved by CloudSync before submission.' },
  { title: 'Outreach Management', desc: 'All publisher pitches, follow-ups, and editorial negotiations handled by our outreach team. Zero automated tools — every email sent by a human.' },
  { title: 'Anchor Text Strategy', desc: 'Full anchor text audit and distribution planning. Exact match anchors kept below 4% of total placements. Branded and partial match made up 65% of the profile.' },
  { title: 'Live Reporting', desc: 'CloudSync received a live Google Sheets report updated within 24 hours of every placement — showing publisher domain, DR, DA, anchor text, and live URL.' },
]

export default function CaseStudyGbobSaasPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-navy py-20 border-b border-navy-light/35">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link href="/case-studies" className="text-sm text-primary font-semibold hover:underline">
            ← Back to Case Studies
          </Link>
          <div className="flex flex-wrap gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full">GBOB Management</span>
            <span className="text-xs font-semibold uppercase tracking-widest bg-white/10 text-slate-300 px-3 py-1 rounded-full">SaaS</span>
            <span className="text-xs font-semibold uppercase tracking-widest bg-white/10 text-slate-300 px-3 py-1 rounded-full">6-Month Campaign</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            180 Links. DR 8 → DR 47. 1,240% Traffic Growth.
          </h1>
          <p className="text-[18px] text-slate-300 max-w-2xl leading-relaxed font-medium">
            How Backlink Bridge built and managed a complete GBOB operation for CloudSync — a B2B SaaS platform — placing 180 high-authority backlinks across 6 months and transforming their organic presence.
          </p>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-navy font-display mb-8">Campaign Results</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {results.map((r) => (
            <div key={r.metric} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">{r.metric}</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-extrabold text-navy">{r.after}</span>
              </div>
              {r.before !== '—' && <p className="text-xs text-slate-400">from {r.before}</p>}
              <p className="text-sm font-bold text-teal-600 mt-1">{r.change}</p>
            </div>
          ))}
        </div>

        {/* Client Overview */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-navy font-display mb-4">Client Overview</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-[15px] text-slate-600 leading-relaxed space-y-3">
            <p><strong className="text-navy">Company:</strong> CloudSync (name changed for privacy)</p>
            <p><strong className="text-navy">Industry:</strong> B2B SaaS — project management and team collaboration software</p>
            <p><strong className="text-navy">Challenge:</strong> CloudSync had strong product-market fit and solid on-page SEO but a near-zero backlink profile (DR 8, 12 referring domains). They were invisible in organic search despite competing in a high-value keyword space. Their marketing team lacked the time and publisher relationships to run outreach at scale.</p>
            <p><strong className="text-navy">Goal:</strong> Build a fully managed GBOB operation — 25–35 placements per month — to reach DR 40+ within 6 months and break into page 1 for core SaaS target keywords.</p>
          </div>
        </div>

        {/* What We Did */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-navy font-display mb-6">What We Delivered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h3 className="font-bold text-navy mb-2 text-[15px]">{s.title}</h3>
                <p className="text-[14px] text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-navy font-display mb-8">Campaign Timeline</h2>
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">{t.period}</span>
                </div>
                <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <h3 className="font-bold text-navy mb-3">{t.title}</h3>
                  <ul className="space-y-2">
                    {t.items.map((item, j) => (
                      <li key={j} className="flex gap-3 items-start text-[14px] text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl text-center">
          <h3 className="text-xl font-bold text-navy mb-2">Ready to scale your link building like CloudSync?</h3>
          <p className="text-sm text-slate-600 mb-5">Our fully managed GBOB service handles everything — publisher recruitment, content, outreach, and reporting.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/gbob-management" className="inline-block bg-primary text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
              View GBOB Management Service
            </Link>
            <Link href="/free-site-audit" className="inline-block border border-slate-300 text-navy text-sm font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors">
              Get Free Site Audit
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/case-studies" className="text-[15px] font-bold text-primary hover:underline">
            ← View All Case Studies
          </Link>
        </div>
      </section>

      <BottomCTA />
      <div className="mt-10 p-8 bg-blue-50 border border-blue-100 rounded-2xl">
          <p className="text-[17px] text-navy italic leading-relaxed mb-4">
            &ldquo;Backlink Bridge handled everything — publisher recruitment, content, pitching, and reporting. In 6 months we went from DR 8 to DR 47 and our organic traffic grew 1,240%. Every link was on a real, traffic-verified editorial site.&rdquo;
          </p>
          <p className="text-sm font-semibold text-slate-600">— CEO, CloudSync <span className="text-slate-400 font-normal">(B2B SaaS)</span></p>
        </div>
    </main>
  )
}
