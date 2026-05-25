"use client"

import React from 'react'
import { STATS } from '@/lib/constants'

export default function StatsBanner() {
  return (
    <section className="bg-navy py-20 border-y border-navy-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 text-center">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center ${
                idx < STATS.length - 1 ? "lg:border-r lg:border-white/10" : ""
              }`}
            >
              <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-[14px] md:text-[15px] text-slate-400 font-semibold tracking-wider uppercase mt-3">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
