import React from 'react'
import Hero from '@/components/sections/Hero'
import LogoTicker from '@/components/sections/LogoTicker'
import ProblemSection from '@/components/sections/ProblemSection'
import PlatformOverview from '@/components/sections/PlatformOverview'
import ServicesTab from '@/components/sections/ServicesTab'
import InnovationTabs from '@/components/sections/InnovationTabs'
import NicheGrid from '@/components/sections/NicheGrid'
import HowItWorks from '@/components/sections/HowItWorks'

import TrustSection from '@/components/sections/TrustSection'
import StatsBanner from '@/components/sections/StatsBanner'
import BlogPreview from '@/components/sections/BlogPreview'
import BottomCTA from '@/components/sections/BottomCTA'
import { constructMetadata, getOrganizationSchema } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: "Backlink Bridge | High-Authority Link Building & Guest Posting Services",
  description: "Connect to high-authority, niche-relevant publishers. Backlink Bridge improves your DR, DA, organic traffic, and keywords rankings with human blogger outreach.",
  canonicalUrl: "https://backlinkbridge.com"
})

export default function Home() {
  const orgSchema = getOrganizationSchema()
  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Backlink Bridge",
    "url": "https://backlinkbridge.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://backlinkbridge.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://backlinkbridge.com"
      }
    ]
  }
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is link building and why does my website need it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Link building is the process of acquiring backlinks from other websites to yours. It is one of the most important off-page SEO factors because search engines like Google use backlinks as votes of authority and trust. More high-quality backlinks typically lead to higher rankings and more organic traffic."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between DR and DA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DR (Domain Rating) is a metric by Ahrefs that measures the strength of a website's backlink profile on a scale of 0–100. DA (Domain Authority) is a similar metric by Moz. Both are used to gauge how authoritative a domain is — a higher score generally correlates with better search rankings."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from link building?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients start seeing measurable improvements in DR/DA within 4–8 weeks of a link building campaign. Organic ranking and traffic improvements typically follow within 2–4 months, depending on the competitiveness of the niche and the current state of your backlink profile."
        }
      },
      {
        "@type": "Question",
        "name": "Are your backlinks safe and Google-compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. BacklinkBridge only builds links through genuine guest posts, editorial placements, and white-hat outreach methods. We do not use PBNs, link farms, or any techniques that violate Google's Webmaster Guidelines."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer guest posting services for specific niches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide niche-specific guest posting across 28+ industries including finance, health, technology, real estate, legal, SaaS, e-commerce, and more. All placements are on relevant, real-traffic websites with strong DR."
        }
      }
    ]
  }
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      <main className="overflow-x-hidden-marquee">
        <Hero />
        <LogoTicker />
        <ProblemSection />
        <PlatformOverview />
        <ServicesTab />
        <InnovationTabs />
        <NicheGrid />
        <HowItWorks />
    
        <TrustSection />
        <StatsBanner />
        <BlogPreview />
        <BottomCTA />
      </main>
    </>
  )
}
