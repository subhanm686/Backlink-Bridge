import React from 'react'

export default function LogoTicker() {
  const trustBadges = [
    "DR 50+",
    "DA 40+",
    "Traffic 10K+/mo",
    "Spam Score Under 3%",
    "Google Indexed",
    "Dofollow Links",
    "Niche-Relevant",
    "Manual Outreach Only",
    "Real Editorial Sites",
    "Permanent Placements"
  ]

  return (
    <section className="bg-surface py-12 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h2 className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest">
          Publishers in our network include sites with:
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex overflow-x-hidden w-full select-none gap-4">
        {/* First Marquee Row */}
        <div className="animate-marquee flex shrink-0 whitespace-nowrap gap-4">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="bg-white border border-border px-5 py-2.5 rounded-full text-slate-600 text-sm font-semibold shadow-sm inline-block whitespace-nowrap"
            >
              {badge}
            </div>
          ))}
        </div>

        {/* Second Marquee Row (duplicate for seamless looping) */}
        <div className="animate-marquee flex shrink-0 whitespace-nowrap gap-4" aria-hidden="true">
          {trustBadges.map((badge, idx) => (
            <div
              key={`dup-${idx}`}
              className="bg-white border border-border px-5 py-2.5 rounded-full text-slate-600 text-sm font-semibold shadow-sm inline-block whitespace-nowrap"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
