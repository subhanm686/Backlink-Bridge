import { constructMetadata } from '@/lib/metadata'
import BottomCTA from '@/components/sections/BottomCTA'
import Link from 'next/link'

export const metadata = constructMetadata({
  title: 'Case Study: DR 14 to DR 52 in 90 Days for Real Estate Client | Backlink Bridge',
  description: 'How Backlink Bridge improved PropertyVault Domain Rating from 14 to 52 in 90 days through a structured high-authority link building campaign.',
  canonicalUrl: 'https://backlinkbridge.com/case-studies/dr-da-real-estate',
})

const results = [
  { metric: 'Domain Rating', before: 'DR 14', after: 'DR 52', change: '+38 points' },
  { metric: 'Domain Authority', before: 'DA 11', after: 'DA 44', change: '+33 points' },
  { metric: 'Referring Domains', before: '18', after: '97', change: '+79 domains' },
  { metric: 'Organic Traffic', before: '320/mo', after: '2,840/mo', change: '+787%' },
  { metric: 'Spam Score', before: '14%', after: '3%', change: '-11 points' },
  { metric: 'Keywords Ranking', before: '41', after: '310', change: '+269 keywords' },
]

const timeline = [
  {
    month: 'Month 1',
    title: 'Audit & Foundation',
    items: [
      'Full backlink profile audit using Ahrefs',
      'Identified 23 toxic backlinks dragging spam score to 14%',
      'Submitted disavow file to Google Search Console',
      'Secured 8 placements on DR 35-50 real estate and property sites',
    ]
  },
  {
    month: 'Month 2',
    title: 'Authority Acceleration',
    items: [
      'Scaled placements to 14 links from DR 45-65 domains',
      'Targeted property investment, mortgage, and home buying verticals',
      'Diversified anchor text across branded, partial match, and naked URL',
      'DR moved from 14 to 31 by end of month 2',
    ]
  },
  {
    month: 'Month 3',
    title: 'High-Authority Push',
    items: [
      'Secured 3 placements on DR 70+ real estate authority sites',
      'Total of 25 new referring domains added across the campaign',
      'Organic traffic began compounding - up 787% from campaign start',
      'DR hit 52, DA hit 44 by day 89 of the campaign',
    ]
  },
]

export default function CaseStudyRealEstatePage() {
  return (
    <main className="bg-white">

      <section className="bg-navy py-20 border-b border-navy-light/35">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link href="/case-studies" className="text-sm text-primary font-semibold hover:underline">
            Back to Case Studies
          </Link>
          <div className="flex flex-wrap gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full">DR/DA Improvement</span>
            <span className="text-xs font-semibold uppercase tracking-widest bg-white/10 text-slate-300 px-3 py-1 rounded-full">Real Estate</span>
            <span className="text-xs font-semibold uppercase tracking-widest bg-white/10 text-slate-300 px-3 py-1 rounded-full">90-Day Campaign</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            DR 14 to DR 52 in 90 Days
          </h1>
          <p className="text-[18px] text-slate-300 max-w-2xl leading-relaxed font-medium">
            How Backlink Bridge transformed PropertyVault backlink profile from a spam-heavy DR 14 to a clean, authoritative DR 52 - driving 787% organic traffic growth in one quarter.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-navy font-display mb-8">Campaign Results</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {results.map((r) => (
            <div key={r.metric} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">{r.metric}</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-extrabold text-navy">{r.after}</span>
              </div>
              <p className="text-xs text-slate-400">from {r.before}</p>
              <p className="text-sm font-bold text-teal-600 mt-1">{r.change}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-navy font-display mb-4">Client Overview</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-[15px] text-slate-600 leading-relaxed space-y-3">
            <p><strong className="text-navy">Company:</strong> PropertyVault (name changed for privacy)</p>
            <p><strong className="text-navy">Industry:</strong> Real Estate - property listings, investment guides, and mortgage comparison</p>
            <p><strong className="text-navy">Challenge:</strong> PropertyVault had been operating for 3 years but had an extremely weak backlink profile (DR 14) built mostly from low-quality directory submissions and comment spam. Their Moz Spam Score sat at 14%, suppressing rankings across all target keywords despite strong on-page content.</p>
            <p><strong className="text-navy">Goal:</strong> Reach DR 40+ within 90 days, reduce spam score below 5%, and increase organic traffic to compete on high-value terms like property investment guide and buy to let mortgage advice.</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-navy font-display mb-4">Our Strategy</h2>
          <div className="text-[15px] text-slate-600 leading-relaxed space-y-4">
            <p>
              The first priority was not link building - it was cleanup. With a spam score of 14%, adding new links on top of a toxic profile would have minimal impact. We began with a full Ahrefs backlink audit, identifying 23 domains with spam scores above 30% that were actively harming PropertyVault authority profile.
            </p>
            <p>
              After submitting the disavow file, we began a phased link building campaign targeting real estate, property investment, and mortgage verticals exclusively. Every publisher was manually vetted for DR, real organic traffic, and content quality before a single pitch was sent.
            </p>
            <p>
              Anchor text was carefully distributed across branded, partial match, and naked URL variations to build a natural-looking profile. No exact match anchors exceeded 4% of total placements.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-navy font-display mb-8">Month-by-Month Breakdown</h2>
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">{t.month}</span>
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

        <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl text-center">
          <h3 className="text-xl font-bold text-navy mb-2">Want results like PropertyVault?</h3>
          <p className="text-sm text-slate-600 mb-5">Our 90-day DR/DA improvement campaigns are built to move your authority metrics with real, editorial-grade placements.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/dr-da-improvement" className="inline-block bg-primary text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
              View DR/DA Improvement Service
            </Link>
            <Link href="/free-site-audit" className="inline-block border border-slate-300 text-navy text-sm font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors">
              Get Free Site Audit
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/case-studies" className="text-[15px] font-bold text-primary hover:underline">
            Back to All Case Studies
          </Link>
        </div>
      </section>

      <BottomCTA />
    </main>
  )
}
