/**
 * Safely merges and filters class names for dynamic Tailwind configurations.
 * Lightweight replacement for clsx/classnames.
 */
export function cn(
  ...inputs: (string | boolean | undefined | null | { [key: string]: boolean | undefined | null })[]
): string {
  const classes: string[] = []
  for (const input of inputs) {
    if (!input) continue
    if (typeof input === 'string') {
      classes.push(input)
    } else if (typeof input === 'object') {
      for (const [key, value] of Object.entries(input)) {
        if (value) classes.push(key)
      }
    }
  }
  return classes.join(' ')
}

// Map descriptive search queries to unique, high-quality cinematic Unsplash photo IDs.
// This guarantees that different images are rendered for each niche card and page.
const PHOTO_MAPPING: { [key: string]: string } = {
  // Niches
  "wellness yoga meditation healthy lifestyle": "photo-1544367567-0f2fcb009e0b",
  "finance investment stock market professional": "photo-1590283603385-17ffb3a7f29f",
  "technology software developer laptop modern": "photo-1488590528505-98d2b5aba04b",
  "real estate luxury home architecture": "photo-1564013799919-ab600027ffc6",
  "law legal courtroom professional lawyer": "photo-1589829545856-d10d557cf95f",
  "law legal courtroom professional": "photo-1589829545856-d10d557cf95f",
  "travel destination landscape tourism": "photo-1507525428034-b723cf961d3e",
  "ecommerce retail shopping online store": "photo-1556742049-0cfed4f6a45d",
  "ecommerce retail shopping online": "photo-1556742049-0cfed4f6a45d",
  "education learning student classroom": "photo-1523240795612-9a054b0db644",
  "food nutrition healthy meal restaurant": "photo-1498837167922-ddd27525d352",
  "automotive car dealership modern vehicle": "photo-1503376780353-7e6692767b70",
  "home improvement interior design renovation": "photo-1581858726788-75bc0f6a952d",
  "beauty skincare cosmetics professional": "photo-1522335789203-aabd1fc54bc9",
  "fashion lifestyle style photography": "photo-1483985988355-763728e1935b",
  "sports fitness gym training athlete": "photo-1517838277536-f5f99be501cd",
  "family parenting children lifestyle home": "photo-1510154221590-ff63e90a136f",
  "family parenting children lifestyle": "photo-1510154221590-ff63e90a136f",
  "business entrepreneur office startup": "photo-1519389950473-47ba0277781c",
  "digital marketing seo analytics strategy": "photo-1460925895917-afdab827c52f",
  "cybersecurity network technology security": "photo-1550751827-4bd374c3f58b",
  "mental health therapy calm peaceful": "photo-1506126613408-eca07ce68773",
  "insurance protection business professional": "photo-1454165804606-c3d57bc86b40",
  "cryptocurrency blockchain technology digital": "photo-1516245834210-c4c142787335",
  "gaming esports computer setup professional": "photo-1538481199705-c710c4e965fc",
  "pets animals dog cat lifestyle": "photo-1450778869180-41d0601e046e",
  "environment sustainability green nature": "photo-1542601906990-b4d3fb778b09",
  "human resources recruitment hiring professional": "photo-1573497019940-1c28c88b4f3e",
  "healthcare medical hospital professional": "photo-1505751172876-fa1923c5c528",
  "architecture construction building design": "photo-1504307651254-35680f356dfd",
  "entertainment media production studio": "photo-1470225620780-dba8ba36b745",

  // Sections
  "modern office building skyline dusk": "photo-1486406146926-c627a92ad1ab",
  "frustrated marketer laptop office stressed": "photo-1542435503-956c469947f6",
  "analytics graph decline business": "photo-1551836022-d5d88e9218df",
  "google search results phone": "photo-1512941937669-90a1b58e7e9c",
  "editorial team collaboration office professional": "photo-1522071820081-009f0129c71c",
  
  // Services
  "writer desk laptop coffee notebook professional": "photo-1455390582262-044cdead277a",
  "outreach email marketing team office": "photo-1557200134-90327ee9fafa",
  "editing article website content laptop": "photo-1434030216411-0b793f4b4173",
  "domain authority analytics growth chart": "photo-1551288049-bebda4e38f71",
  "toxic links penalty google disavow": "photo-1563986768609-322da13575f3",
  "organic search traffic growth analytics": "photo-1504868584819-f8e8b4b6d7e3",

  // Innovation
  "person writing email laptop professional": "photo-1517245386807-bb43f82c33c4",
  "quality control checklist inspection professional": "photo-1450133064473-71024230f91b",
  "writer writing professional article content": "photo-1488190211105-8b0e65b80b4e",
  "dashboard analytics reporting spreadsheet": "photo-1551288049-bebda4e38f71",
  "security protection shield professional": "photo-1550751827-4bd374c3f58b",

  // Steps
  "person laptop form website professional": "photo-1501504905252-473c47e087f8",
  "research team reviewing data spreadsheet": "photo-1519389950473-47ba0277781c",
  "writer working desk coffee writing professional": "photo-1516962215378-7fa2e137ae93",
  "analytics dashboard monitor growth results": "photo-1460925895917-afdab827c52f",

  // Case Studies
  "saas software team success office": "photo-1556761175-5973dc0f32e7",
  
  // Trust
  "person inspecting document quality control professional": "photo-1554224155-8d04cb21cd6c",
  "data dashboard transparency reporting screen": "photo-1460925895917-afdab827c52f",
  "partnership handshake agreement professional business": "photo-1573497019940-1c28c88b4f3e",

  // Blog
  "domain authority seo analytics laptop": "photo-1460925895917-afdab827c52f",
  "guest posting writing content editorial": "photo-1455390582262-044cdead277a",
  "spam score moz toxic links cleanup": "photo-1526374965328-7f61d4dc18c5",

  // About Page (New Mappings to resolve fallback duplicates)
  "business meeting handshake": "photo-1573497019940-1c28c88b4f3e",
  "glass office window skyline": "photo-1497366216548-37526070297c",
  "checklist inspection documents": "photo-1450133064473-71024230f91b",
  "protection shield safety lock": "photo-1550751827-4bd374c3f58b",
  "man studio headshot business": "photo-1519085360753-af0119f7cbe7",
  "woman studio headshot business": "photo-1573496359142-b8d87734a5a2",
  "man studio headshot glasses": "photo-1506794778202-cad84cf45f1d",
  "professional team office": "photo-1556761175-5973dc0f32e7"
}

/**
 * Standardizes dynamic Unsplash URLs to deliver high-quality, lightweight WebP images.
 */
export function getUnsplashUrl(query: string, width = 800, height = 600): string {
  // If the query starts with photo- (raw Unsplash ID passed), use it directly
  if (query.startsWith('photo-')) {
    return `https://images.unsplash.com/${query}?auto=format&fit=crop&w=${width}&h=${height}&q=80`
  }

  // Lookup unique photo ID by search query parameter
  const photoId = PHOTO_MAPPING[query.trim()] || "photo-1557804506-669a67965ba0" // Fallback to office building
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&h=${height}&q=80`
}
