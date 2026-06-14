/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  async headers() {
    return [
      {
        source: '/niches',
        has: [{ type: 'query', key: 'filter' }],
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
        ],
      },
      {
        source: '/:all*(jpg|jpeg|png|webp|avif|svg|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:all*(woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/blog/improve-domain-rating-2025',
        destination: '/blog/improve-domain-rating-2026',
        permanent: true,
      },
      {
        source: '/blog/reduce-spam-score-guide',
        destination: '/blog/reduce-spam-score-guide-2026',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
