"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { auditFormSchema } from '@/lib/schemas'
import { cn } from '@/lib/utils'

type AuditInputs = z.infer<typeof auditFormSchema>

export default function AuditForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<AuditInputs>({
    resolver: zodResolver(auditFormSchema)
  })

  const onSubmit = async (data: AuditInputs) => {
    try {
      setSubmitError(null)
      // Simulate API submit
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Audit capture details submitted:", data)
      setIsSuccess(true)
      reset()
    } catch {
      setSubmitError("Something went wrong. Please check your inputs and try again.")
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center max-w-xl mx-auto shadow-sm">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Audit Confirmed</h3>
        <p className="text-slate-600 text-[15px]">
          We have queued your website for a manual backlink profile audit. A PDF report containing our toxic link findings, authority gaps, and customized checklist will be sent to your email within 24 hours.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-sm font-semibold text-primary hover:underline"
        >
          Audit another website
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-border rounded-xl p-8 shadow-sm space-y-6 max-w-xl mx-auto">
      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-4 rounded-lg">
          {submitError}
        </div>
      )}

      {/* Name */}
      <div>
        <label className="block text-[14px] font-semibold text-slate-700 mb-2">Your Name</label>
        <input
          type="text"
          placeholder="John Doe"
          {...register("name")}
          className={cn(
            "w-full bg-surface border rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
            errors.name ? "border-red-500" : "border-border"
          )}
        />
        {errors.name && <span className="text-[12px] text-red-500 mt-1 block">{errors.name.message}</span>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-[14px] font-semibold text-slate-700 mb-2">Business Email</label>
        <input
          type="email"
          placeholder="john@company.com"
          {...register("email")}
          className={cn(
            "w-full bg-surface border rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
            errors.email ? "border-red-500" : "border-border"
          )}
        />
        {errors.email && <span className="text-[12px] text-red-500 mt-1 block">{errors.email.message}</span>}
      </div>

      {/* Website URL */}
      <div>
        <label className="block text-[14px] font-semibold text-slate-700 mb-2">Website URL</label>
        <input
          type="text"
          placeholder="https://example.com"
          {...register("websiteUrl")}
          className={cn(
            "w-full bg-surface border rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
            errors.websiteUrl ? "border-red-500" : "border-border"
          )}
        />
        {errors.websiteUrl && <span className="text-[12px] text-red-500 mt-1 block">{errors.websiteUrl.message}</span>}
      </div>

      {/* Main Problem */}
      <div>
        <label className="block text-[14px] font-semibold text-slate-700 mb-2">Current Main SEO Problem</label>
        <select
          {...register("mainProblem")}
          className={cn(
            "w-full bg-surface border rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-700",
            errors.mainProblem ? "border-red-500" : "border-border"
          )}
        >
          <option value="">Select challenge...</option>
          <option value="stuck-rankings">Stuck Google keyword rankings</option>
          <option value="high-spam-score">High Moz Spam Score penalty warning</option>
          <option value="low-organic-traffic">Low search traffic / zero leads</option>
          <option value="unstably-dr">Unstable or low Domain Rating (DR)</option>
          <option value="other">Other backlink profile audits</option>
        </select>
        {errors.mainProblem && <span className="text-[12px] text-red-500 mt-1 block">{errors.mainProblem.message}</span>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full font-semibold text-white bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-[15px] rounded-lg py-3.5 transition-all shadow-sm active:scale-[0.99] cursor-pointer"
      >
        {isSubmitting ? "Processing Audit..." : "Send Me My Free Audit"}
      </button>
    </form>
  )
}
