"use client"

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to contact page after 4 seconds
    const timer = setTimeout(() => {
      router.push("/contact?ref=dashboard-gate")
    }, 4000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="bg-surface min-h-[85vh] flex items-center justify-center py-24">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <Badge variant="warning">Access Suspended</Badge>
        
        <Card hoverEffect={false} className="p-8 bg-white border border-border space-y-4">
          <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m0-6v2m0-6h.01M12 2a10 10 0 11-10 10A10 10 0 0112 2z" />
            </svg>
          </div>
          
          <h2 className="text-xl font-bold text-navy">Auth-Gated Client Portal</h2>
          
          <p className="text-[14px] text-slate-500 leading-relaxed font-medium">
            Our client portal dashboard is currently in private beta and limited to active campaigns. 
          </p>
          
          <p className="text-[13px] text-slate-400 bg-surface p-3 rounded-lg border border-border">
            <strong>Redirecting to Contact Page...</strong><br />
            Please submit a request to your SEO strategist to set up your login credentials.
          </p>
        </Card>

        <button 
          onClick={() => router.push("/contact")}
          className="text-sm font-semibold text-primary hover:underline"
        >
          Click here if you are not redirected automatically
        </button>

      </div>
    </main>
  )
}
