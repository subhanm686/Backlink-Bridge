import { constructMetadata } from '@/lib/metadata'
import BottomCTA from '@/components/sections/BottomCTA'
import Link from 'next/link'
import AuthorBio from '@/components/AuthorBio'

export const metadata = constructMetadata({
  title: 'SEO Glossary: 40+ SEO Terms Explained | Backlink Bridge',
  description: "The complete SEO glossary for beginners and professionals. 40+ terms explained clearly — anchor text, DR, spam score, and more. Read the free glossary now.",
  canonicalUrl: 'https://backlinkbridge.com/seo-glossary',
})

const terms = [
  { term: 'Anchor Text', definition: 'The clickable, visible text of a hyperlink. Google uses anchor text as a relevance signal to understand what the linked page is about. Over-optimising exact match anchor text can trigger algorithmic penalties.' },
  { term: 'Backlink', definition: 'A hyperlink from one website pointing to another. Backlinks are one of Google\'s top three ranking factors. High-quality backlinks from authoritative, niche-relevant sites pass authority (link equity) to the target page.' },
  { term: 'Domain Rating (DR)', definition: 'A metric created by Ahrefs that measures the strength of a website\'s backlink profile on a scale of 0–100. DR is logarithmic — moving from DR 60 to DR 70 requires significantly more link equity than moving from DR 20 to DR 30.' },
  { term: 'Domain Authority (DA)', definition: 'A metric created by Moz that predicts how likely a website is to rank in search engines, scored 0–100. DA is calculated using Moz\'s link index and is commonly used alongside DR when evaluating publisher quality.' },
  { term: 'Dofollow Link', definition: 'A hyperlink that passes link equity (authority) from the linking site to the target site. Dofollow links are the standard link type and are what link building campaigns focus on acquiring.' },
  { term: 'Nofollow Link', definition: 'A hyperlink with a rel="nofollow" attribute that instructs search engines not to pass link equity. Nofollow links do not directly improve DR/DA but can still drive referral traffic.' },
  { term: 'Link Equity', definition: 'Also called "link juice" — the authority and ranking power passed from one page to another through a hyperlink. Link equity is influenced by the linking page\'s authority, its relevance, and how many other links it contains.' },
  { term: 'Guest Posting', definition: 'The practice of writing and publishing an article on another website, typically in exchange for a backlink to your own site. Guest posting on high-DR, niche-relevant sites is one of the most effective white-hat link building strategies.' },
  { term: 'Niche Edit', definition: 'Also called a link insertion — adding a backlink into an existing, already-published article on another website. Niche edits can be faster to obtain than guest posts and often come from pages with existing traffic and authority.' },
  { term: 'Spam Score', definition: 'A metric by Moz that predicts the percentage of sites with similar features that have been penalised by Google. A high spam score (above 10%) indicates a risky backlink profile. Backlink Bridge targets publishers with spam scores under 3%.' },
  { term: 'PBN (Private Blog Network)', definition: 'A network of websites created specifically to build backlinks to a target site. PBNs violate Google\'s guidelines and can result in manual penalties. Backlink Bridge never uses PBNs.' },
  { term: 'White Hat SEO', definition: 'SEO practices that comply with search engine guidelines. White hat link building focuses on earning genuine, editorial backlinks through quality content and manual outreach.' },
  { term: 'Black Hat SEO', definition: 'SEO practices that violate search engine guidelines, such as buying links, using PBNs, or cloaking content. Black hat tactics may produce short-term gains but carry significant penalty risk.' },
  { term: 'Link Velocity', definition: 'The rate at which a website acquires new backlinks over time. An unnatural spike in link velocity — such as acquiring 200 links in one week after months of zero activity — can appear manipulative to Google.' },
  { term: 'Link Profile', definition: 'The complete collection of backlinks pointing to a website. A healthy link profile features diverse anchor text, links from multiple unique domains, and a mix of authority levels.' },
  { term: 'Root Domain', definition: 'The primary domain of a website (e.g., backlinkbridge.com). SEO tools measure "referring domains" — the number of unique root domains linking to a site — as a key authority metric.' },
  { term: 'Referring Domain', definition: 'A unique website that links to your site at least once. Having 100 links from 100 different domains is far more valuable than 100 links from a single domain.' },
  { term: 'PageRank', definition: 'Google\'s original algorithm for ranking web pages, based on the number and quality of links pointing to a page. While Google no longer publicly reports PageRank scores, the underlying principles still power modern link evaluation.' },
  { term: 'Organic Traffic', definition: 'Website visitors who arrive through unpaid search engine results. Organic traffic is the primary goal of SEO — high-quality backlinks improve rankings, which drives more organic visitors to your site.' },
  { term: 'SERP', definition: 'Search Engine Results Page — the page displayed by Google or other search engines in response to a query. Ranking on page one of the SERP for your target keywords is the primary objective of SEO.' },
  { term: 'On-Page SEO', definition: 'Optimisation of elements within your own website — including title tags, meta descriptions, heading structure, content quality, and internal linking — to improve search rankings.' },
  { term: 'Off-Page SEO', definition: 'SEO activities that happen outside your own website, primarily link building and brand mentions. Off-page SEO signals — especially backlinks — are among the strongest ranking factors Google uses.' },
  { term: 'E-E-A-T', definition: 'Experience, Expertise, Authoritativeness, and Trustworthiness — Google\'s framework for evaluating content quality. E-E-A-T is especially important for YMYL (Your Money or Your Life) topics like finance, health, and legal content.' },
  { term: 'Disavow', definition: 'A Google tool that allows website owners to request that certain backlinks be ignored when evaluating their site. Used to remove the negative impact of toxic, spammy, or manipulative backlinks.' },
  { term: 'Manual Action', definition: 'A penalty applied by a human reviewer at Google when a site is found to violate Google\'s Webmaster Guidelines. Manual actions can cause significant ranking drops or complete de-indexing.' },
  { term: 'Algorithmic Penalty', definition: 'A ranking drop caused by a Google algorithm update rather than a manual reviewer. Google\'s Penguin algorithm targets manipulative link building; Panda targets thin or low-quality content.' },
  { term: 'Index', definition: 'Google\'s database of web pages it has crawled and stored. A page must be indexed to appear in search results. New pages and backlinks can be submitted to Google Search Console to request faster indexing.' },
  { term: 'Crawl', definition: 'The process by which Google\'s bots (Googlebot) discover and analyse web pages. Pages must be crawled before they can be indexed. A sitemap.xml file helps Googlebot discover all pages on your site.' },
  { term: 'Canonical Tag', definition: 'An HTML tag that tells search engines which version of a page is the "master" version, used to prevent duplicate content issues. Canonical tags are important for sites with similar or paginated content.' },
  { term: 'GBOB', definition: 'Guest Blogging Outreach Business — a business model where an operator builds a network of publisher relationships and manages link placement campaigns on behalf of multiple clients simultaneously.' },
]

export default function SeoGlossaryPage() {
  const alphabet = [...new Set(terms.map(t => t.term[0].toUpperCase()))].sort()

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-navy py-20 border-b border-navy-light/35">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">SEO Resource</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            SEO Glossary
          </h1>
          <p className="text-[18px] text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            30+ essential SEO terms explained clearly — from anchor text and backlinks to Domain Rating, spam score, E-E-A-T, and beyond.
          </p>
          <p className="text-sm text-slate-400">Maintained by Muhammad Subhan · Updated June 2026</p>
        </div>
      </section>

      {/* Alphabet nav */}
      <section className="border-b border-border py-4 sticky top-0 bg-white z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2">
          {alphabet.map(letter => (
            <a key={letter} href={`#${letter}`} className="text-sm font-semibold text-primary hover:underline px-2 py-1">
              {letter}
            </a>
          ))}
        </div>
      </section>

      {/* Terms */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2">
          {alphabet.map(letter => (
            <div key={letter} id={letter} className="pt-8">
              <h2 className="text-2xl font-extrabold text-navy font-display border-b border-border pb-3 mb-6">{letter}</h2>
              <div className="space-y-6">
                {terms
                  .filter(t => t.term[0].toUpperCase() === letter)
                  .map(t => (
                    <div key={t.term} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2.5"></div>
                      <div>
                        <h3 className="text-base font-bold text-navy mb-1">{t.term}</h3>
                        <p className="text-[15px] text-slate-600 leading-relaxed font-medium">{t.definition}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
          <Link href="/blog" className="text-[15px] font-bold text-primary hover:underline">
            ← Back to Blog
          </Link>
          <Link href="/anchor-text-guide" className="text-[15px] font-bold text-primary hover:underline">
            Anchor Text Guide →
          </Link>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AuthorBio />
      </div>
      <BottomCTA />
    </main>
  )
}
