export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Backlink Bridge",
    "url": "https://backlinkbridge.com",
    "logo": "https://backlinkbridge.com/logo.png",
    "description": "Backlink Bridge is an off-page SEO and link-building agency offering backlink building, DR/DA improvement, spam score reduction, and guest posting services.",
    "email": "contact@backlinkbridge.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Melbourne",
      "addressRegion": "Victoria",
      "postalCode": "3000",
      "addressCountry": "AU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@backlinkbridge.com",
      "availableLanguage": "English",
      "areaServed": "Worldwide"
    },
    "sameAs": [
      "https://www.linkedin.com/company/backlink-bridge/",
      "https://www.facebook.com/profile.php?id=61590615572279"
    ],
    "foundingDate": "2021",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 1,
      "maxValue": 10
    },
    "knowsAbout": [
      "Link Building",
      "Guest Posting",
      "Domain Rating Improvement",
      "SEO",
      "Backlink Outreach",
      "Spam Score Cleanup"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Link Building & Guest Posting Services",
    "provider": {
      "@type": "Organization",
      "name": "Backlink Bridge",
      "url": "https://backlinkbridge.com"
    },
    "serviceType": "SEO Link Building",
    "description": "Professional off-page SEO services including backlink building, DR/DA improvement, spam score reduction, organic traffic growth, and niche-specific guest posting.",
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Guest Post Link Building",
            "description": "High-quality guest posts on relevant niche websites to build authority backlinks."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DR/DA Improvement",
            "description": "Targeted backlink campaigns to increase Domain Rating and Domain Authority scores."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spam Score Reduction",
            "description": "Toxic backlink removal and disavow strategy to reduce Moz Spam Score."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Organic Traffic Growth",
            "description": "Off-page SEO strategies designed to increase organic search traffic and rankings."
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
