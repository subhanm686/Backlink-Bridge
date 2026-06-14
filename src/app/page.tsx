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
 title: "Link Building & Guest Posting Service | Backlink Bridge",
description: "Connect to high-authority, niche-relevant publishers. Improve your DR, DA, and organic traffic with human blogger outreach. Get a free site audit today.",
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
