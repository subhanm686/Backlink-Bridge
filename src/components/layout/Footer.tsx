"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { newsletterSchema } from '@/lib/schemas'

type NewsletterInputs = z.infer<typeof newsletterSchema>

export default function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<NewsletterInputs>({
    resolver: zodResolver(newsletterSchema)
  })

  const onSubmit = async (data: NewsletterInputs) => {
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 800))
    console.log("Newsletter subscription details:", data)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const columns = {
    services: [
      { name: "Guest Posting", href: "/guest-posting" },
      { name: "Niche Edits", href: "/niche-edits" },
      { name: "GBOB Management", href: "/gbob-management" },
      { name: "DR/DA Improvement", href: "/dr-da-improvement" },
      { name: "Spam Score Cleanup", href: "/spam-cleanup" },
      { name: "Link Building Campaigns", href: "/link-building-campaigns" }
    ],
    niches: [
      { name: "Health & Wellness", href: "/niches?filter=health-wellness" },
      { name: "Finance", href: "/niches?filter=finance-investing" },
      { name: "Technology", href: "/niches?filter=technology-saas" },
      { name: "Real Estate", href: "/niches?filter=real-estate" },
      { name: "Legal", href: "/niches?filter=legal-law" },
      { name: "Travel", href: "/niches?filter=travel-tourism" },
      { name: "E-Commerce", href: "/niches?filter=ecommerce-retail" },
      { name: "Education", href: "/niches?filter=education" },
      { name: "View All 25+ Niches →", href: "/niches", isHighlight: true }
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Write for Us", href: "/write-for-us" },
      { name: "Free Site Audit", href: "/free-site-audit" },
      { name: "SEO Glossary", href: "/seo-glossary" },
      { name: "Anchor Text Guide", href: "/anchor-text-guide" },
      { name: "DR vs DA Explained", href: "/dr-vs-da" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "Contact", href: "/contact" },
      { name: "Partner With Us", href: "/partners" },
      { name: "Affiliate Program", href: "/affiliates" },
      { name: "Careers", href: "/careers" }
    ]
  }

  return (
    <footer className="bg-navy text-slate-400 py-16 border-t border-navy-light/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Info */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 border-b border-white/10 gap-6">
          <div>
            <span className="text-3xl font-extrabold tracking-tight text-white block mb-2 select-none">
              <span className="text-primary font-black text-[34px]">B</span>acklink <span className="text-primary font-black text-[34px]">B</span>ridge
            </span>
            <p className="mt-2 text-slate-400 text-[15px] max-w-md">
              The bridge between great content and page one rankings.
            </p>
            <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[14px]">
              <Link href="/contact" className="text-white hover:text-primary transition-colors font-semibold">
                Contact Us
              </Link>
              <span className="text-white/20 hidden sm:inline">|</span>
              <a href="mailto:contact@backlinkbridge.com" className="text-slate-300 hover:text-white transition-colors font-medium">
                contact@backlinkbridge.com
              </a>
            </div>
          </div>
          
          <div className="flex space-x-6 text-[15px]">
            
           <a href="https://www.linkedin.com/company/backlink-bridge/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://www.facebook.com/profile.php?id=61590615572279" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Facebook
            </a>
          </div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
          
          {/* Services */}
          <div>
            <span className="font-semibold text-white uppercase tracking-wider text-[13px]">
              Services
            </span>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {columns.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Niches */}
          <div>
            <span className="font-semibold text-white uppercase tracking-wider text-[13px]">
              Niches
            </span>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {columns.niches.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className={item.isHighlight ? "text-primary hover:text-primary-dark transition-colors font-semibold" : "hover:text-white transition-colors"}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <span className="font-semibold text-white uppercase tracking-wider text-[13px]">
              Resources
            </span>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {columns.resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <span className="font-semibold text-white uppercase tracking-wider text-[13px]">
              Company
            </span>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {columns.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Connect */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <span className="font-semibold text-white uppercase tracking-wider text-[13px]">
              Stay Updated
            </span>
            <p className="mt-4 text-[14px] text-slate-400">
              Subscribe to our monthly newsletter for actionable SEO strategy breakdowns.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  className="bg-white/10 text-white placeholder-slate-500 rounded-lg px-3.5 py-2 text-[14px] w-full focus:outline-none focus:ring-1 focus:ring-primary border border-white/10"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white font-semibold text-[14px] rounded-lg px-4 py-2 transition-all shrink-0"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
              {errors.email && (
                <span className="text-[12px] text-red-400">{errors.email.message}</span>
              )}
              {isSubmitted && (
                <span className="text-[12px] text-emerald-400 font-medium">Successfully subscribed!</span>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-16 pt-8 border-t border-white/10 text-[13px] text-slate-500 gap-4">
          <div>
            © 2026 Backlink Bridge. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/refund">Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
