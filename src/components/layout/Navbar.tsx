"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NICHES } from '@/lib/constants'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  // Track scroll position for header visual styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (name: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 200)
    setHoverTimeout(timeout)
  }

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout)
    }
  }, [hoverTimeout])

  // Pre-configured lists
  const services = [
    { name: "Guest Posting", href: "/guest-posting", desc: "Permanent contextual editorial links" },
    { name: "Niche Edits / Link Insertions", href: "/niche-edits", desc: "Link placement in existing ranking articles" },
    { name: "GBOB Management", href: "/gbob-management", desc: "Fully managed blogger outreach business" },
    { name: "Link Building Campaigns", href: "/link-building-campaigns", desc: "Bespoke high-authority campaigns" },
    { name: "DR / DA Improvement", href: "/dr-da-improvement", desc: "90-day structured authority campaigns" },
    { name: "Spam Score Cleanup", href: "/spam-cleanup", desc: "Audit and disavow toxic backlink profiles" }
  ]

  const resources = [
    { name: "Blog", href: "/blog" },
    { name: "Free Site Audit", href: "/free-site-audit" },
    { name: "SEO Glossary", href: "/blog" },
    { name: "Anchor Text Guide", href: "/anchor-text-guide" },
{ name: "DR vs DA Explained", href: "/dr-vs-da" }
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Partner With Us", href: "/contact" },
    { name: "Affiliate Program", href: "/contact" }
  ]

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-md border-border py-4" 
            : "bg-white border-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="hover:opacity-90 transition-opacity flex items-center"
                aria-label="Backlink Bridge Home"
              >
                <span className="text-3xl font-extrabold tracking-tight text-navy select-none">
                  <span className="text-primary font-black text-[34px]">B</span>acklink <span className="text-primary font-black text-[34px]">B</span>ridge
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex space-x-8 items-center">
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center text-[15px] font-semibold text-slate-700 hover:text-primary transition-colors py-2">
                  Services
                  <ChevronDown className={cn("ml-1 w-4 h-4 transition-transform", activeDropdown === 'services' && "rotate-180")} />
                </button>
                <div 
                  className={cn(
                    "absolute top-full -left-10 pt-3 w-[420px] transition-all duration-200 z-50",
                    activeDropdown === 'services'
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  )}
                >
                  <div className="bg-white rounded-xl shadow-xl border border-border p-6">
                    <div className="grid grid-cols-1 gap-4">
                      {services.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          className="group/item flex flex-col p-2.5 rounded-lg hover:bg-surface transition-colors"
                        >
                          <span className="font-semibold text-slate-900 group-hover/item:text-primary transition-colors text-[14px]">
                            {item.name}
                          </span>
                          <span className="text-[12px] text-slate-500 mt-0.5">
                            {item.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Niches Mega Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('niches')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center text-[15px] font-semibold text-slate-700 hover:text-primary transition-colors py-2">
                  Niches
                  <ChevronDown className={cn("ml-1 w-4 h-4 transition-transform", activeDropdown === 'niches' && "rotate-180")} />
                </button>
                <div 
                  className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[760px] transition-all duration-200 z-50",
                    activeDropdown === 'niches'
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  )}
                >
                  <div className="bg-white rounded-xl shadow-xl border border-border p-6">
                    <div className="flex justify-between items-center mb-4 border-b border-border pb-3">
                      <span className="font-semibold text-navy text-[15px]">Niches We Serve</span>
                      <Link href="/niches" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                        View All 25+ Niches <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {NICHES.slice(0, 15).map((niche) => (
                        <Link 
                          key={niche.id} 
                          href={`/niches?filter=${niche.slug}`}
                          className="text-[13px] text-slate-600 hover:text-primary hover:bg-surface py-1.5 px-2.5 rounded transition-colors font-medium"
                        >
                          {niche.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link 
                href="/how-it-works" 
                className="text-[15px] font-semibold text-slate-700 hover:text-primary transition-colors"
              >
                How It Works
              </Link>

              {/* Merged Resources & Company Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('resourcesAndCompany')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center text-[15px] font-semibold text-slate-700 hover:text-primary transition-colors py-2">
                  Insights
                  <ChevronDown className={cn("ml-1 w-4 h-4 transition-transform", activeDropdown === 'resourcesAndCompany' && "rotate-180")} />
                </button>
                <div 
                  className={cn(
                    "absolute top-full right-0 pt-3 w-[460px] transition-all duration-200 z-50",
                    activeDropdown === 'resourcesAndCompany'
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  )}
                >
                  <div className="bg-white rounded-xl shadow-xl border border-border p-6">
                    <div className="grid grid-cols-2 gap-8">
                      {/* Resources Column */}
                      <div>
                        <span className="font-bold text-navy text-[12px] uppercase tracking-wider block mb-3 border-b border-border pb-1">
                          Resources
                        </span>
                        <div className="flex flex-col gap-1">
                          {resources.map((item) => (
                            <Link 
                              key={item.name} 
                              href={item.href}
                              className="text-[13.5px] text-slate-600 hover:text-primary py-1.5 px-2 rounded-md hover:bg-surface transition-colors font-medium"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Company Column */}
                      <div>
                        <span className="font-bold text-navy text-[12px] uppercase tracking-wider block mb-3 border-b border-border pb-1">
                          Company
                        </span>
                        <div className="flex flex-col gap-1">
                          {company.map((item) => (
                            <Link 
                              key={item.name} 
                              href={item.href}
                              className="text-[13.5px] text-slate-600 hover:text-primary py-1.5 px-2 rounded-md hover:bg-surface transition-colors font-medium"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* Right Buttons */}
            <div className="hidden xl:flex items-center space-x-4">
              <Link 
                href="/free-site-audit"
                className="text-[15px] font-semibold text-primary hover:bg-primary/5 border border-primary px-5 py-2.5 rounded-lg transition-all"
              >
                Get Free Audit
              </Link>
              <Link 
                href="/contact"
                className="text-[15px] font-semibold text-white bg-primary hover:bg-primary-dark px-5 py-2.5 rounded-lg transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Hamburger Icon */}
            <div className="xl:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-navy hover:text-primary p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Menu Container */}
      <div
        className={cn(
          "fixed inset-0 top-[73px] z-40 bg-white border-t border-border flex flex-col xl:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          <div className="flex flex-col space-y-4">
            {/* Services Mobile */}
            <div>
              <button 
                onClick={() => toggleDropdown('services')}
                className="flex items-center justify-between w-full text-lg font-semibold text-navy pb-2 border-b border-surface"
              >
                <span>Services</span>
                <ChevronDown className={cn("w-5 h-5 transition-transform", activeDropdown === 'services' && "rotate-180")} />
              </button>
              {activeDropdown === 'services' && (
                <div className="pl-4 mt-2 flex flex-col space-y-2.5">
                  {services.map((item) => (
                    <Link key={item.name} href={item.href} className="text-[15px] text-slate-600 hover:text-primary font-medium">
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Niches Mobile */}
            <div>
              <button 
                onClick={() => toggleDropdown('niches')}
                className="flex items-center justify-between w-full text-lg font-semibold text-navy pb-2 border-b border-surface"
              >
                <span>Niches</span>
                <ChevronDown className={cn("w-5 h-5 transition-transform", activeDropdown === 'niches' && "rotate-180")} />
              </button>
              {activeDropdown === 'niches' && (
                <div className="pl-4 mt-2 max-h-48 overflow-y-auto flex flex-col space-y-2.5 border-l border-border">
                  {NICHES.map((niche) => (
                    <Link key={niche.id} href={`/niches?filter=${niche.slug}`} className="text-[15px] text-slate-600 hover:text-primary font-medium">
                      {niche.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/how-it-works" 
              className="text-lg font-semibold text-navy pb-2 border-b border-surface"
            >
              How It Works
            </Link>

            {/* Merged Resources & Company Mobile */}
            <div>
              <button 
                onClick={() => toggleDropdown('resourcesAndCompany')}
                className="flex items-center justify-between w-full text-lg font-semibold text-navy pb-2 border-b border-surface"
              >
                <span>Insights</span>
                <ChevronDown className={cn("w-5 h-5 transition-transform", activeDropdown === 'resourcesAndCompany' && "rotate-180")} />
              </button>
              {activeDropdown === 'resourcesAndCompany' && (
                <div className="pl-4 mt-2 flex flex-col space-y-4">
                  {/* Resources Group */}
                  <div>
                    <span className="text-navy font-bold text-xs uppercase tracking-wider block mb-2">Resources</span>
                    <div className="flex flex-col space-y-2 pl-2 border-l border-border">
                      {resources.map((item) => (
                        <Link key={item.name} href={item.href} className="text-[15px] text-slate-600 hover:text-primary font-medium">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Company Group */}
                  <div>
                    <span className="text-navy font-bold text-xs uppercase tracking-wider block mb-2">Company</span>
                    <div className="flex flex-col space-y-2 pl-2 border-l border-border">
                      {company.map((item) => (
                        <Link key={item.name} href={item.href} className="text-[15px] text-slate-600 hover:text-primary font-medium">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Action Area */}
        <div className="p-4 border-t border-border bg-surface flex flex-col gap-3">
          <Link 
            href="/free-site-audit"
            className="w-full text-center font-semibold text-primary border border-primary px-5 py-3 rounded-lg bg-white"
          >
            Get Free Audit
          </Link>
          <Link 
            href="/contact"
            className="w-full text-center font-semibold text-white bg-primary hover:bg-primary-dark px-5 py-3 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  )
}
