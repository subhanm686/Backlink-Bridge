"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import { newsletterSchema } from '@/lib/schemas'

type WaitlistInputs = z.infer<typeof newsletterSchema>

export default function SeoToolsPage() {
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<WaitlistInputs>({
    resolver: zodResolver(newsletterSchema)
  })

  const onSubmit = async (data: WaitlistInputs) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Waitlist subscription:", data.email)
    setIsSuccess(true)
    reset()
  }

  return (
    <main className="bg-surface min-h-[85vh] flex items-center justify-center py-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="space-y-4">
          <Badge variant="teal">Coming Soon</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-navy leading-tight tracking-tight">
            SEO Tools & Analytics
          </h1>
          <p className="text-[17px] text-slate-500 font-medium leading-relaxed max-w-md mx-auto">
            We are building a proprietary suite of tools to monitor backlink velocity, target DR anchors, and perform automated spam alerts.
          </p>
        </div>

        <Card hoverEffect={false} className="p-8 bg-white border border-border">
          <h3 className="text-navy font-bold text-lg mb-2">Join the Early Access Waitlist</h3>
          <p className="text-slate-400 text-sm font-medium mb-6">
            Get notified immediately when we launch and receive 5 free backlink audits.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div>
              <input
                type="email"
                placeholder="john@company.com"
                {...register("email")}
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-700 font-semibold"
              />
              {errors.email && (
                <span className="text-[12px] text-red-500 mt-1 block text-left">{errors.email.message}</span>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white font-bold text-[15px] py-3.5 rounded-lg transition-all shadow-sm cursor-pointer"
            >
              {isSubmitting ? "Submitting..." : "Request Early Access"}
            </button>
            
            {isSuccess && (
              <span className="text-[13px] text-emerald-600 font-bold block mt-2">
                Success! You&apos;ve been added to the waitlist.
              </span>
            )}
          </form>
        </Card>

        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
          Currently in private alpha testing with select accounts.
        </p>

      </div>
    </main>
  )
}
