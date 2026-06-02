"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { contactFormSchema } from '@/lib/schemas'
import { cn } from '@/lib/utils'

type ContactInputs = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      servicesNeeded: []
    }
  })

const onSubmit = async (data: ContactInputs) => {
  try {
    setSubmitError(null)
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "0677421c-40ff-4a83-918e-3b169f1f3a12", // ← paste your key
        name: data.name,
        email: data.email,
        website: data.websiteUrl,
        services: data.servicesNeeded.join(", "),
        message: data.message,
      }),
    })
    const result = await response.json()
    if (result.success) {
      setIsSuccess(true)
      reset()
    } else {
      setSubmitError("Something went wrong. Please try again.")
    }
  } catch {
    setSubmitError("Something went wrong. Please try again.")
  }
}
  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Request Submitted Successfully</h3>
        <p className="text-slate-600 text-[15px] max-w-md mx-auto">
          Thank you for sharing your website goals! A senior SEO strategist will review your application and respond with a custom roadmap within one business day.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-sm font-semibold text-primary hover:underline"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-border rounded-xl p-8 shadow-sm space-y-6">
      <h3 className="text-xl font-bold text-navy">Get Your Free Backlink Strategy</h3>
      
      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-4 rounded-lg">
          {submitError}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-[14px] font-semibold text-slate-700 mb-2">Full Name</label>
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
          <label className="block text-[14px] font-semibold text-slate-700 mb-2">Work Email</label>
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



      {/* Services Checklist */}
      <div>
        <label className="block text-[14px] font-semibold text-slate-700 mb-2">Services Needed</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {[
            { id: "guest-posting", label: "Guest Posting" },
            { id: "niche-edits", label: "Niche Edits / Insertions" },
            { id: "gbob", label: "GBOB Outreach Management" },
            { id: "dr-improvement", label: "DR / DA Improvement" },
            { id: "spam-cleanup", label: "Spam Score Cleanup" },
            { id: "traffic-growth", label: "Organic Traffic Growth" }
          ].map((item) => (
            <label key={item.id} className="flex items-center gap-3 bg-surface hover:bg-slate-100/70 border border-border rounded-lg p-3 cursor-pointer select-none transition-colors">
              <input
                type="checkbox"
                value={item.id}
                {...register("servicesNeeded")}
                className="w-4.5 h-4.5 text-primary focus:ring-primary rounded border-border"
              />
              <span className="text-[14px] text-slate-700 font-medium">{item.label}</span>
            </label>
          ))}
        </div>
        {errors.servicesNeeded && <span className="text-[12px] text-red-500 mt-2 block">{errors.servicesNeeded.message}</span>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-[14px] font-semibold text-slate-700 mb-2">Additional Website Details</label>
        <textarea
          rows={4}
          placeholder="Tell us about your competitors, target keywords, or any rankings challenges you are currently facing..."
          {...register("message")}
          className={cn(
            "w-full bg-surface border rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
            errors.message ? "border-red-500" : "border-border"
          )}
        />
        {errors.message && <span className="text-[12px] text-red-500 mt-1 block">{errors.message.message}</span>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full font-semibold text-white bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-[15px] rounded-lg py-3.5 transition-all shadow-sm active:scale-[0.99] cursor-pointer"
      >
        {isSubmitting ? "Submitting Request..." : "Send My Request"}
      </button>
    </form>
  )
}
