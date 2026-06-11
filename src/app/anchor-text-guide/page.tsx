import { constructMetadata } from '@/lib/metadata'
import BottomCTA from '@/components/sections/BottomCTA'
import AuthorBio from '@/components/AuthorBio'
import Link from 'next/link'

export const metadata = constructMetadata({
  title: 'Anchor Text Guide: Types, Ratios & SEO Best Practices | Backlink Bridge',
  description: 'The complete anchor text guide for SEO. Learn the different types of anchor text, ideal ratios, and how to build a natural backlink profile that ranks.',
  canonicalUrl: 'https://backlinkbridge.com/anchor-text-guide',
})

export default function AnchorTextGuidePage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-navy py-20 border-b border-navy-light/35">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">SEO Resource</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            The Complete Anchor Text Guide
          </h1>
          <p className="text-[18px] text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Types, ratios, and best practices for building a natural backlink profile that improves rankings without triggering Google penalties.
          </p>
          <p className="text-sm text-slate-400">By Muhammad Subhan · Updated June 2026 · 12 min read</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-medium space-y-6 text-[16px] md:text-[17px]">

          <p className="font-semibold text-navy text-lg leading-relaxed">
            Anchor text is the clickable, visible text of a hyperlink. It is one of the most influential — and most misunderstood — elements of an off-page SEO strategy. Get it right and your rankings climb steadily. Get it wrong and you risk a manual penalty that can wipe years of progress overnight.
          </p>

          <h2 className="text-2xl font-bold text-navy font-display pt-4">What Is Anchor Text?</h2>
          <p>
            When a website links to your page, the words used as the clickable link are the anchor text. For example, if a site links to you using the phrase "link building services", that phrase is the anchor text. Google uses anchor text as a strong signal to understand what the linked page is about and how authoritative it should rank for that topic.
          </p>
          <p>
            Anchor text passes two things: relevance signals (what your page is about) and authority signals (how trustworthy your page is). Both matter enormously for organic search rankings.
          </p>

          <h2 className="text-2xl font-bold text-navy font-display pt-4">The 7 Types of Anchor Text</h2>

          <h3 className="text-xl font-bold text-navy pt-2">1. Exact Match</h3>
          <p>
            The anchor text matches your target keyword exactly. Example: linking to your guest posting page with the anchor "guest posting services". Exact match anchors are powerful but dangerous in high volumes — Google's Penguin algorithm specifically targets over-optimised exact match profiles.
          </p>

          <h3 className="text-xl font-bold text-navy pt-2">2. Partial Match</h3>
          <p>
            The anchor contains your keyword alongside other words. Example: "professional guest posting services for SaaS companies". Partial match anchors are safer than exact match and pass strong relevance signals without the same penalty risk.
          </p>

          <h3 className="text-xl font-bold text-navy pt-2">3. Branded</h3>
          <p>
            Your brand name is used as the anchor. Example: "Backlink Bridge". Branded anchors are the safest and most natural-looking type. A healthy backlink profile will have branded anchors making up a significant portion of total links.
          </p>

          <h3 className="text-xl font-bold text-navy pt-2">4. Naked URL</h3>
          <p>
            The full URL is used as the anchor text. Example: "https://backlinkbridge.com". Naked URL anchors look natural and are common in citations, directories, and resource pages.
          </p>

          <h3 className="text-xl font-bold text-navy pt-2">5. Generic</h3>
          <p>
            Non-descriptive phrases used as anchors. Examples: "click here", "read more", "visit this site". Generic anchors pass minimal relevance signal but contribute to a natural-looking profile.
          </p>

          <h3 className="text-xl font-bold text-navy pt-2">6. LSI / Semantic</h3>
          <p>
            Latent Semantic Indexing anchors use synonyms or related phrases. Example: "backlink acquisition strategy" or "off-page SEO techniques" when linking to a link building page. These help Google understand topical context without exact keyword repetition.
          </p>

          <h3 className="text-xl font-bold text-navy pt-2">7. Image Anchors</h3>
          <p>
            When an image is used as a link, Google reads the image alt text as the anchor. Always optimise your image alt text — it doubles as an anchor text signal.
          </p>

          <h2 className="text-2xl font-bold text-navy font-display pt-4">Ideal Anchor Text Ratios</h2>
          <p>
            There is no single perfect ratio — it varies by niche, competition level, and existing profile. However, as a general benchmark for a healthy, penalty-safe backlink profile:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Branded anchors:</strong> 40–50% of total links</li>
            <li><strong>Naked URL anchors:</strong> 20–25%</li>
            <li><strong>Generic anchors:</strong> 10–15%</li>
            <li><strong>Partial match anchors:</strong> 10–15%</li>
            <li><strong>Exact match anchors:</strong> 1–5% maximum</li>
            <li><strong>LSI / semantic anchors:</strong> 5–10%</li>
          </ul>
          <p>
            The key principle: exact match anchors should always be a small minority. If your profile is heavily weighted toward exact match, Google will interpret it as manipulation — regardless of how high-quality the linking sites are.
          </p>

          <h2 className="text-2xl font-bold text-navy font-display pt-4">Common Anchor Text Mistakes</h2>

          <h3 className="text-xl font-bold text-navy pt-2">Over-optimising exact match anchors</h3>
          <p>
            The most common mistake. Buying 50 links all using "best link building agency" as the anchor is an immediate red flag. Google's Penguin update in 2012 was built specifically to target this pattern, and it has been integrated into the core algorithm since 2016.
          </p>

          <h3 className="text-xl font-bold text-navy pt-2">Using identical anchors across all placements</h3>
          <p>
            Even if your anchors are not exact match, using the same phrase on every placement looks unnatural. Real editorial links use varied language. Your outreach campaigns should deliberately vary anchor text across placements.
          </p>

          <h3 className="text-xl font-bold text-navy pt-2">Ignoring anchor text on internal links</h3>
          <p>
            Internal links matter too. Use descriptive, keyword-relevant anchor text on your own internal links to pass relevance signals to your important pages.
          </p>

          <h2 className="text-2xl font-bold text-navy font-display pt-4">How Backlink Bridge Manages Anchor Text</h2>
          <p>
            Every campaign we run at Backlink Bridge includes an anchor text audit before any placements are made. We analyse your existing profile using Ahrefs, identify the current ratio breakdown, and then plan new placements to correct imbalances and build toward a natural distribution.
          </p>
          <p>
            We never allow clients to dictate exact match anchors on every placement. If your target keyword is "link building services", we will distribute that exact phrase across no more than 5% of total placements — the rest will be branded, partial match, and naked URL variations.
          </p>

          <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <p className="font-semibold text-navy mb-2">Want a free anchor text audit?</p>
            <p className="text-sm text-slate-600 mb-4">We will analyse your current backlink profile, identify anchor text imbalances, and recommend a correction strategy — at no cost.</p>
            <Link href="/free-site-audit" className="inline-block bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-primary-dark transition-colors">
              Get Free Anchor Text Audit →
            </Link>
          </div>

        </div>

        <AuthorBio />

        <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
          <Link href="/blog" className="text-[15px] font-bold text-primary hover:underline">
            ← Back to Blog
          </Link>
          <Link href="/dr-vs-da" className="text-[15px] font-bold text-primary hover:underline">
            DR vs DA Explained →
          </Link>
        </div>
      </section>

      <BottomCTA />
    </main>
  )
}
