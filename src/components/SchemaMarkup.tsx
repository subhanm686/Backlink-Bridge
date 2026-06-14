// components/SchemaMarkup.tsx

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Backlink Bridge",
    "url": "https://backlinkbridge.com",
    "logo": "https://backlinkbridge.com/logo.png",
    "description": "Backlink Bridge is an off-page SEO and link-building agency offering backlink building, DR/DA improvement, spam score reduction, and guest posting services.",
    "email": "contact@backlinkbridge.com",
    "address": {
            "@type": "PostalAddress",
            "addressLocality": "Melbourne",
            "addressRegion": "Victoria",
            "postalCode": "3000",
            "addressCountry": "AU"
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
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is link building and why does my website need it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Link building is the process of acquiring backlinks from other websites to yours. It is one of the most important off-page SEO factors because search engines like Google treat backlinks as votes of confidence. The more high-quality backlinks your site has, the higher it tends to rank in search results, driving more organic traffic and leads."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between DR and DA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DR (Domain Rating) is a metric by Ahrefs that measures the strength of a website's backlink profile on a scale of 0 to 100. DA (Domain Authority) is a similar metric created by Moz. Both measure link authority but use different algorithms and data sources. Neither is a Google ranking factor directly, but both correlate strongly with search performance."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from link building?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients start seeing measurable improvements in DR and DA within 4 to 8 weeks of a link building campaign. Organic ranking and traffic improvements typically appear within 60 to 90 days as Google re-evaluates your backlink profile and adjusts your keyword positions accordingly."
        }
      },
      {
        "@type": "Question",
        "name": "Are your backlinks safe and Google-compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Backlink Bridge only builds links through genuine guest posts, editorial placements, and white-hat outreach methods. We do not use PBNs, link farms, automated tools, or any tactics that violate Google quality guidelines. All links are placed on real, traffic-verified websites with natural anchor ratios."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer guest posting services for specific niches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide niche-specific guest posting across 28 or more industries including finance, health, technology, real estate, legal, SaaS, e-commerce, travel, education, and more. Our publisher network includes manually vetted sites in each vertical with real organic traffic and editorial standards."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
