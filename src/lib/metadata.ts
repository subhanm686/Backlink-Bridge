import { Metadata } from 'next'

interface MetadataProps {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
  canonicalUrl?: string
}

export function constructMetadata({
 title = "Link Building & Guest Posting Service | Backlink Bridge",
  description = "Connect to high-authority, niche-relevant publishers. Improve your DR, DA, and organic traffic with human blogger outreach. Get a free site audit today.",
  image = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80",
  noIndex = false,
  canonicalUrl = "https://backlinkbridge.com"
}: MetadataProps = {}): Metadata {
  return {
    title,
    description,
    metadataBase: new URL('https://backlinkbridge.com'),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Backlink Bridge",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      }
    }
  }
}

/**
 * Shared JSON-LD Structured Data generator for Organization and WebSite
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Backlink Bridge",
    "url": "https://backlinkbridge.com",
    "logo": "https://backlinkbridge.com/logo.png",
    "description": "Professional guest posting and high-authority manual link building campaigns.",
    "sameAs": [
      "https://twitter.com/backlinkbridge",
      "https://www.linkedin.com/company/backlinkbridge"
    ]
  }
}

export function getServiceSchema(serviceName: string, serviceDescription: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "provider": {
      "@type": "Organization",
      "name": "Backlink Bridge"
    },
    "description": serviceDescription,
    "url": `https://backlinkbridge.com${url}`
  }
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}
