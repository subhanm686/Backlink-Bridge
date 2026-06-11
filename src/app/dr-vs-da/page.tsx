import { constructMetadata } from '@/lib/metadata'
import BottomCTA from '@/components/sections/BottomCTA'
import AuthorBio from '@/components/AuthorBio'
import Link from 'next/link'

export const metadata = constructMetadata({
  title: 'DR vs DA: Domain Rating vs Domain Authority Explained | Backlink Bridge',
  description: 'What is the difference between DR and DA? This guide explains Domain Rating (Ahrefs) vs Domain Authority (Moz), how each is calculated, and which matters more for SEO.',
  canonicalUrl: 'https://backlinkbridge.com/dr-vs-da',
})

export default function DrVsDaPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-navy py-20 border-b border-navy-light/35">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">SEO Resource</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            DR vs DA: What Is the Difference?
          </h1>
          <p className="text-[18px] text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Domain Rating and Domain Authority are both backlink metrics — but they are calculated differently, by different tools, and used for different purposes.
          </p>
          <p className="text-sm text-slate-400">By Muhammad Subhan · Updated June 2026 · 10 min read</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-medium space-y-6 text-[16px] md:text-[17px]">

          <p className="font-semibold text-navy text-lg leading-relaxed">
            DR and DA are two of the most cited metrics in SEO — yet they are frequently confused, conflated, and misused. This guide explains exactly what each metric measures, how it is calculated, and which one you should be tracking for your link building campaigns.
          </p>

          <h2 className="text-2xl font-bold text-navy font-display pt-4">What Is Domain Rating (DR)?</h2>
          <p>
            Domain Rating is a metric created by <strong>Ahrefs</strong>. It measures the strength of a website's backlink profile on a logarithmic scale of 0 to 100. A site with DR 70 has a significantly stronger backlink profile than a site with DR 50 — not just 20 points stronger, but exponentially stronger due to the logarithmic scale.
          </p>
          <p>
            DR is calculated based on three factors: the number of unique domains linking to the site, the DR of those linking domains, and how many other sites those linking domains also link to. In other words, a link from a DR 80 site that links to very few other sites is worth far more than a link from a DR 80 site that links to thousands of domains.
          </p>

          <h2 className="text-2xl font-bold text-navy font-display pt-4">What Is Domain Authority (DA)?</h2>
          <p>
            Domain Authority is a metric created by <strong>Moz</strong>. Like DR, it scores websites on a scale of 0 to 100 and is designed to predict how likely a site is to rank in search engines. DA is calculated using Moz's own link index and incorporates factors including linking root domains, total number of links, and MozRank.
          </p>
          <p>
            DA was one of the first widely adopted third-party authority metrics in SEO, predating Ahrefs' DR by several years. It remains widely used, particularly in outreach and content marketing communities.
          </p>

          <h2 className="text-2xl font-bold text-navy font-display pt-4">Key Differences Between DR and DA</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 border border-slate-200 font-semibold text-navy">Feature</th>
                  <th className="text-left p-3 border border-slate-200 font-semibold text-navy">Domain Rating (DR)</th>
                  <th className="text-left p-3 border border-slate-200 font-semibold text-navy">Domain Authority (DA)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border border-slate-200">Created by</td><td className="p-3 border border-slate-200">Ahrefs</td><td className="p-3 border border-slate-200">Moz</td></tr>
                <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Scale</td><td className="p-3 border border-slate-200">0–100 (logarithmic)</td><td className="p-3 border border-slate-200">0–100 (logarithmic)</td></tr>
                <tr><td className="p-3 border border-slate-200">Primary focus</td><td className="p-3 border border-slate-200">Backlink profile strength</td><td className="p-3 border border-slate-200">Ranking likelihood prediction</td></tr>
                <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Link index</td><td className="p-3 border border-slate-200">Ahrefs index (largest)</td><td className="p-3 border border-slate-200">Moz index</td></tr>
                <tr><td className="p-3 border border-slate-200">Update frequency</td><td className="p-3 border border-slate-200">Frequent (live crawl)</td><td className="p-3 border border-slate-200">Periodic</td></tr>
                <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Best used for</td><td className="p-3 border border-slate-200">Publisher vetting, link building</td><td className="p-3 border border-slate-200">General authority benchmarking</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-navy font-display pt-4">Which Metric Should You Use?</h2>
          <p>
            For link building purposes, <strong>DR is generally the more reliable metric</strong>. Ahrefs maintains the largest backlink index in the industry, which means its data is more comprehensive and up to date. When vetting publishers for guest posting placements, DR gives you a more accurate picture of a site's true backlink authority.
          </p>
          <p>
            DA is still useful as a secondary data point and is widely referenced in outreach communities and marketplace platforms. Many guest post sellers quote DA alongside DR. Using both together gives you a fuller picture of a site's authority.
          </p>

          <h2 className="text-2xl font-bold text-navy font-display pt-4">What Is a Good DR or DA Score?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>DR/DA 0–20:</strong> New or low-authority site. Links from these sites carry minimal value.</li>
            <li><strong>DR/DA 20–40:</strong> Developing authority. Acceptable for early-stage campaigns.</li>
            <li><strong>DR/DA 40–60:</strong> Solid mid-tier authority. Good target range for most link building campaigns.</li>
            <li><strong>DR/DA 60–80:</strong> High authority. Excellent placement targets — these links move rankings noticeably.</li>
            <li><strong>DR/DA 80+:</strong> Elite authority. Very difficult to obtain, but transformative for rankings.</li>
          </ul>
          <p>
            At Backlink Bridge, our publisher network focuses on DR 30–80+ placements, with the majority of campaigns targeting the DR 40–70 range for the best balance of quality and placement velocity.
          </p>

          <h2 className="text-2xl font-bold text-navy font-display pt-4">Can You Improve Your DR and DA?</h2>
          <p>
            Yes — both metrics improve as you earn more high-quality backlinks from authoritative domains. The most effective way to improve DR and DA is a consistent, well-planned link building campaign that prioritises quality over quantity.
          </p>
          <p>
            Key actions that improve DR and DA include: earning links from high-DR/DA domains, diversifying your linking root domains, removing or disavowing toxic backlinks that drag down your profile, and publishing linkable content assets that attract natural editorial links.
          </p>

          <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <p className="font-semibold text-navy mb-2">Want to improve your DR and DA?</p>
            <p className="text-sm text-slate-600 mb-4">Our 90-day DR/DA improvement campaigns are built specifically to move your authority metrics with real, editorial-grade placements.</p>
            <Link href="/dr-da-improvement" className="inline-block bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-primary-dark transition-colors">
              View DR/DA Improvement Service →
            </Link>
          </div>

        </div>

        <AuthorBio />

        <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
          <Link href="/anchor-text-guide" className="text-[15px] font-bold text-primary hover:underline">
            ← Anchor Text Guide
          </Link>
          <Link href="/seo-glossary" className="text-[15px] font-bold text-primary hover:underline">
            SEO Glossary →
          </Link>
        </div>
      </section>

      <BottomCTA />
    </main>
  )
}
