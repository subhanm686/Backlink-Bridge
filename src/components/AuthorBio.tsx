import Link from 'next/link'

export default function AuthorBio() {
  return (
    <div className="flex gap-5 items-start border border-gray-200 rounded-2xl p-6 mt-10 bg-gray-50">
      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center text-white font-semibold text-xl">
        MS
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Written by</p>
        <h3 className="text-base font-semibold text-gray-900 mb-0.5">
          Muhammad Subhan
        </h3>
        <p className="text-sm text-blue-700 font-medium mb-3">
          Founder, Backlink Bridge · SEO Consultant · 5+ Years Off-Page SEO
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Muhammad Subhan is the founder of Backlink Bridge and an SEO consultant
          with 5+ years of hands-on experience in off-page SEO and link building.
          He specialises in manual blogger outreach, guest posting strategy, and
          building high-authority backlink profiles that improve Domain Rating (DR),
          Domain Authority (DA), and organic search visibility. His work spans
          25+ industries including finance, technology, health, real estate, and
          e-commerce — helping websites reduce spam score, recover from Google
          penalties, and achieve sustainable organic traffic growth through
          white-hat, editorial-grade link placements.
        </p>
        <Link
          href="https://www.linkedin.com/company/backlink-bridge"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-blue-700 border border-blue-200 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors"
          >
            View Full Bio →
          </Link>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          Follow on LinkedIn
        </Link>
      </div>
    </div>
  )
}
