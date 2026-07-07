"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { pitchFormSchema } from '@/lib/schemas'
import { cn } from '@/lib/utils'

type PitchInputs = z.infer<typeof pitchFormSchema>

export default function PitchForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PitchInputs>({
    resolver: zodResolver(pitchFormSchema),
  })

  const onSubmit = async (data: PitchInputs) => {
    try {
      setSubmitError(null)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '0677421c-40ff-4a83-918e-3b169f1f3a12',
          subject: 'Write for Us - Article Pitch',
          from_name: data.name,
          name: data.name,
          email: data.email,
          website: data.websiteUrl,
          article_title: data.articleTitle,
          message: data.pitch,
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
        <h3 className="text-xl font-bold text-navy mb-2">Pitch Submitted Successfully</h3>
        <p className="text-slate-600 text-[15px] max-w-md mx-auto">
          Thank you! Our editorial team will review your pitch and respond within 3–5 business days.
        </p>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-sm font-semibold text-primary hover:underline"
        >
          Submit another pitch
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-border rounded-xl p-8 shadow-sm space-y-6">
      <h3 className="text-xl font-bold text-navy">Submit Your Article Pitch</h3>
      <p className="text-[14px] text-slate-500 font-medium -mt-2">
        Fill in the form below and our team will get back to you within 3–5 business days.
      </p>

      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-4 rounded-lg">
          {submitError}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[14px] font-semibold text-slate-700 mb-2">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            {...register('name')}
            className={cn(
              'w-full bg-surface border rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all',
              errors.name ? 'border-red-500' : 'border-border'
            )}
          />
          {errors.name && <span className="text-[12px] text-red-500 mt-1 block">{errors.name.message}</span>}
        </div>

        <div>
          <label className="block text-[14px] font-semibold text-slate-700 mb-2">Email Address</label>
          <input
            type="email"
            placeholder="john@example.com"
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
        <label className="block text-[14px] font-semibold text-slate-700 mb-2">Your Website</label>
        <input
          type="text"
          placeholder="https://yourwebsite.com"
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
        <label className="block text-[14px] font-semibold text-slate-700 mb-2">Proposed Article Title</label>
        <input
          type="text"
          placeholder="e.g. How to Build High-DR Backlinks in 2026"
          {...register('articleTitle')}
          className={cn(
            'w-full bg-surface border rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all',
            errors.articleTitle ? 'border-red-500' : 'border-border'
          )}
        />
        {errors.articleTitle && (
          <span className="text-[12px] text-red-500 mt-1 block">{errors.articleTitle.message}</span>
        )}
      </div>

      <div>
        <label className="block text-[14px] font-semibold text-slate-700 mb-2">Article Outline / Pitch</label>
        <textarea
          rows={5}
          placeholder="Briefly describe what your article will cover, the target keyword, estimated word count, and what readers will learn..."
          {...register('pitch')}
          className={cn(
            'w-full bg-surface border rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all',
            errors.pitch ? 'border-red-500' : 'border-border'
          )}
        />
        {errors.pitch && <span className="text-[12px] text-red-500 mt-1 block">{errors.pitch.message}</span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full font-semibold text-white bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-[15px] rounded-lg py-3.5 transition-all shadow-sm active:scale-[0.99] cursor-pointer"
      >
        {isSubmitting ? 'Submitting Pitch...' : 'Send My Pitch'}
      </button>
    </form>
  )
}
