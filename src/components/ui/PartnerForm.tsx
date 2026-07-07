'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { partnerFormSchema } from '@/lib/schemas'
import { cn } from '@/lib/utils'
import { clientVolumeOptions } from '@/data/partners'

type PartnerInputs = z.infer<typeof partnerFormSchema>

export default function PartnerForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PartnerInputs>({
    resolver: zodResolver(partnerFormSchema),
  })

  const onSubmit = async (data: PartnerInputs) => {
    try {
      setSubmitError(null)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '0677421c-40ff-4a83-918e-3b169f1f3a12',
          subject: 'Partner Lead — Backlink Bridge',
          type: 'partner',
          source: 'partners-page',
          company_name: data.companyName,
          website: data.websiteUrl,
          monthly_client_volume: data.monthlyClientVolume,
          email: data.email,
          message: data.message,
        }),
      })
      const result = await response.json()
      if (result.success) {
        setIsSuccess(true)
        reset()
      } else {
        setSubmitError('Something went wrong. Please try again.')
      }
    } catch {
      setSubmitError('Something went wrong. Please try again.')
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
        <h3 className="text-xl font-bold text-navy mb-2">Application Received</h3>
        <p className="text-slate-600 text-[15px] max-w-md mx-auto">
          Thank you for your interest in partnering with Backlink Bridge. Our partnerships team will review your
          application and respond within one business day.
        </p>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-sm font-semibold text-primary hover:underline"
        >
          Submit another application
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white border border-border rounded-xl p-8 shadow-sm space-y-6"
    >
      <h3 className="text-xl font-bold text-navy">Partner Application</h3>
      <p className="text-[14px] text-slate-500 font-medium -mt-2">
        Tell us about your agency and client volume. We&apos;ll follow up with custom pricing and onboarding details.
      </p>

      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-4 rounded-lg">{submitError}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[14px] font-semibold text-slate-700 mb-2">Company Name</label>
          <input
            type="text"
            placeholder="Your Agency Ltd."
            {...register('companyName')}
            className={cn(
              'w-full bg-surface border rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all',
              errors.companyName ? 'border-red-500' : 'border-border'
            )}
          />
          {errors.companyName && (
            <span className="text-[12px] text-red-500 mt-1 block">{errors.companyName.message}</span>
          )}
        </div>

        <div>
          <label className="block text-[14px] font-semibold text-slate-700 mb-2">Work Email</label>
          <input
            type="email"
            placeholder="you@agency.com"
            {...register('email')}
            className={cn(
              'w-full bg-surface border rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all',
              errors.email ? 'border-red-500' : 'border-border'
            )}
          />
          {errors.email && <span className="text-[12px] text-red-500 mt-1 block">{errors.email.message}</span>}
        </div>
      </div>

      <div>
        <label className="block text-[14px] font-semibold text-slate-700 mb-2">Website</label>
        <input
          type="text"
          placeholder="https://youragency.com"
          {...register('websiteUrl')}
          className={cn(
            'w-full bg-surface border rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all',
            errors.websiteUrl ? 'border-red-500' : 'border-border'
          )}
        />
        {errors.websiteUrl && (
          <span className="text-[12px] text-red-500 mt-1 block">{errors.websiteUrl.message}</span>
        )}
      </div>

      <div>
        <label className="block text-[14px] font-semibold text-slate-700 mb-2">Monthly Client Volume</label>
        <select
          {...register('monthlyClientVolume')}
          defaultValue=""
          className={cn(
            'w-full bg-surface border rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all',
            errors.monthlyClientVolume ? 'border-red-500' : 'border-border',
            'text-slate-700'
          )}
        >
          <option value="" disabled>
            Select approximate volume
          </option>
          {clientVolumeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.monthlyClientVolume && (
          <span className="text-[12px] text-red-500 mt-1 block">{errors.monthlyClientVolume.message}</span>
        )}
      </div>

      <div>
        <label className="block text-[14px] font-semibold text-slate-700 mb-2">Message</label>
        <textarea
          rows={4}
          placeholder="Tell us about your agency, the services you resell, and what you're looking for in a link building partner..."
          {...register('message')}
          className={cn(
            'w-full bg-surface border rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all',
            errors.message ? 'border-red-500' : 'border-border'
          )}
        />
        {errors.message && <span className="text-[12px] text-red-500 mt-1 block">{errors.message.message}</span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full font-semibold text-white bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-[15px] rounded-lg py-3.5 transition-all shadow-sm active:scale-[0.99] cursor-pointer"
      >
        {isSubmitting ? 'Submitting Application...' : 'Apply to Partner'}
      </button>
    </form>
  )
}
