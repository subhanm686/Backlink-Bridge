import { constructMetadata } from '@/lib/metadata'
import BottomCTA from '@/components/sections/BottomCTA'
import Link from 'next/link'

export const metadata = constructMetadata({
  title: 'Case Studies | Backlink Bridge Link Building Results',
  description: "Real results from Backlink Bridge campaigns. See how we improved DR, DA, and keyword rankings for clients across multiple industries. View the results now.",
  canonicalUrl: 'https://backlinkbridge.com/case-studies',
})

const caseStudies = [
  {
    slug: 'dr-da-real-estate',
    tag: 'DR/DA Improvement',
    industry: 'Real Estate',
    duration: '90-Day Campaign',
    company: 'PropertyVault',
    headline: 'DR 14 → DR 52 in 90 Days',
    summary: 'A full backlink profile cleanup and authority-building campaign that took a spam-heavy real estate site from DR 14 to DR 52 — with 787% organic traffic growth.',
    stats: [
      { label: 'DR Improvement', value: '+38 pts' },
      { label: 'Organic Traffic', value: '+787%' },
      { label: 'Spam Score', value: '14% → 3%' },
    ]
  },
  {
    slug: 'gbob-saas',
    tag: 'GBOB Management',
    industry: 'SaaS',
    duration: '6-Month Campaign',
    company: 'CloudSync',
    headline: '180 Links. DR 8 → DR 47. 1,240% Traffic.',
    summary: 'A fully managed GBOB operation for a B2B SaaS platform — 180 editorial placements across 156 unique domains, driving 1,240% organic traffic growth in 6 months.',
    stats: [
      { label: 'Links Placed', value: '180' },
      { label: 'Organic Traffic', value: '+1,240%' },
      { label: 'Keywords Page 1', value: '+44' },
    ]
  },
]

export default function CaseStudiesPage() {
  const caseStudiesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Backlink Bridge Case Studies",
    "description": "Real link building results from Backlink Bridge campaigns across multiple industries.",
    "url": "https://backlinkbridge.com/case-studies",
    "numberOfItems": caseStudies.length,
    "itemListElement": caseStudies.map((cs, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://backlinkbridge.com/case-studies/${cs.slug}`,
      "name": cs.headline,
      "description": cs.summary
    }))
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }} />
      <main className="bg-white">

      {/* Hero */}
      <section className="bg-navy py-20 border-b border-navy-light/35">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Proven Results</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Case Studies
          </h1>
          <p className="text-[18px] text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Real campaigns. Real numbers. See how Backlink Bridge improves DR, DA, organic traffic, and keyword rankings across industries.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {caseStudies.map((cs) => (
            <div key={cs.slug} className="border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors">
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest bg-teal-50 text-teal-700 border border-teal-100 px-3 py-1 rounded-full">{cs.tag}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest bg-slate-100 text-slate-500 px-3 py-1 rounded-full">{cs.industry}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest bg-slate-100 text-slate-500 px-3 py-1 rounded-full">{cs.duration}</span>
                </div>
                <p className="text-xs text-slate-400 mb-2 font-medium">{cs.company}</p>
                <h2 className="text-2xl font-extrabold text-navy font-display mb-3">{cs.headline}</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-6">{cs.summary}</p>
                <div className="flex flex-wrap gap-6 mb-6">
                  {cs.stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-2xl font-extrabold text-navy">{s.value}</p>
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Read Full Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BottomCTA />
    </main>
       </>
  )
}
