/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
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
