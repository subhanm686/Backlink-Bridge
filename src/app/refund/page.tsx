import React from 'react'
import Link from 'next/link'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: "Refund Policy | Backlink Bridge",
  description: "Backlink Bridge refund policy. Understand our fair refund terms for link building and guest posting services, including our 12-month link replacement guarantee.",
  canonicalUrl: "https://backlinkbridge.com/refund"
})

const LAST_UPDATED = "12 June 2026"

export default function RefundPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-surface py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-extrabold font-display text-navy mb-4">Refund Policy</h1>
          <p className="text-slate-500 font-medium">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-10 text-[15px]">

          <div>
            <p>
              At Backlink Bridge, we stand behind the quality of our link building and guest posting services. This Refund Policy outlines when refunds are available, how our link replacement guarantee works, and how to contact us if you have a concern about your order.
            </p>
            <p className="mt-4">
              We encourage you to read this policy carefully before placing an order. By purchasing our services, you agree to the terms outlined below.
            </p>
          </div>

          <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200">
            <h2 className="text-lg font-bold text-emerald-800 mb-2">Our 12-month link replacement guarantee</h2>
            <p className="text-emerald-700 text-sm leading-relaxed">
              Every link we place is guaranteed to remain live and dofollow for 12 months from the date of placement. If any link is removed or changed to nofollow within this period, we will replace it free of charge on an equivalent or higher-authority site — no questions asked.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">1. General refund policy</h2>
            <p>
              Due to the labour-intensive nature of link building — which involves real human outreach, content creation, and publisher relationships — refunds are not available once work has commenced on an order. This applies to both per-link orders and monthly retainer plans.
            </p>
            <p className="mt-4">
              &quot;Work commenced&quot; means any of the following have begun: publisher prospecting, email outreach, content writing, or article submission. We begin work on most orders within 1–3 business days of payment confirmation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">2. When refunds are available</h2>
            <p>Refunds will be issued in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong className="text-navy">Order not started:</strong> If you request a cancellation before any outreach or content creation has begun, you are entitled to a full refund. Please contact us within 24 hours of placing your order to request a cancellation.
              </li>
              <li>
                <strong className="text-navy">Duplicate payment:</strong> If you are charged twice for the same order due to a technical error, a full refund of the duplicate charge will be issued within 5 business days.
              </li>
              <li>
                <strong className="text-navy">Service not delivered:</strong> If we are unable to deliver a confirmed link placement after 90 days of active outreach and no suitable publisher has been identified, you are entitled to a full refund for that specific placement.
              </li>
              <li>
                <strong className="text-navy">Publisher quality failure:</strong> If a delivered link is placed on a site that materially misrepresents its metrics (e.g. a site advertised as DR 50+ is verified to be below DR 30), we will replace the link or issue a partial credit equivalent to the price difference.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">3. Monthly retainer cancellations</h2>
            <p>
              Monthly retainer plans may be cancelled at any time with 14 days written notice. The following applies:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 mt-3">
              <li>You will not be billed for the next billing cycle after your cancellation notice is received.</li>
              <li>Work completed or in progress during the current billing cycle will be delivered in full.</li>
              <li>No partial refunds are issued for unused days within a billing cycle that has already been charged.</li>
              <li>Your 12-month link replacement guarantee continues to apply for all links placed during your campaign, even after cancellation.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">4. Link replacement vs refund</h2>
            <p>
              In most cases where a link issue arises after delivery, we will offer a link replacement rather than a refund. Replacements are typically the better outcome for our clients — they retain the SEO value of the placement and receive a fresh link on an active, indexed page. We will always attempt a replacement first before considering a credit or refund.
            </p>
            <p className="mt-4">
              Replacements are provided within 30 days of a valid replacement request.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">5. Non-refundable situations</h2>
            <p>Refunds are not available in the following situations:</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-3">
              <li>Dissatisfaction with search engine ranking results — link building affects but does not guarantee rankings</li>
              <li>Links removed because the client&apos;s website received a manual Google penalty due to the client&apos;s own actions</li>
              <li>Links removed at the client&apos;s own request after placement</li>
              <li>Change of mind after work has commenced</li>
              <li>Delays caused by the client failing to approve content drafts within the agreed timeframe</li>
              <li>Domain Rating or traffic changes on the publisher site after placement — DR naturally fluctuates</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">6. How to request a refund or replacement</h2>
            <p>
              To request a refund or link replacement, please email us at{' '}
              <a href="mailto:contact@backlinkbridge.com" className="text-primary font-semibold hover:underline">
                contact@backlinkbridge.com
              </a>{' '}
              with the subject line &quot;Refund Request&quot; or &quot;Link Replacement Request&quot; and include:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 mt-3">
              <li>Your name and order reference number</li>
              <li>The URL of the affected placement</li>
              <li>A brief description of the issue</li>
              <li>Screenshot or evidence of the problem (if applicable)</li>
            </ul>
            <p className="mt-4">
              We will acknowledge your request within 2 business days and aim to resolve all issues within 10 business days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">7. Refund processing</h2>
            <p>
              Approved refunds are processed within 5–10 business days. Refunds are issued to the original payment method used at checkout. Processing times may vary depending on your bank or payment provider.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">8. Contact us</h2>
            <p>
              If you have questions about this Refund Policy or a specific order, please reach out:
            </p>
            <div className="mt-4 p-5 bg-surface rounded-xl border border-border text-sm space-y-1">
              <p><strong className="text-navy">Backlink Bridge</strong></p>
              <p>Email: <a href="mailto:contact@backlinkbridge.com" className="text-primary hover:underline">contact@backlinkbridge.com</a></p>
              <p>Website: <a href="https://backlinkbridge.com" className="text-primary hover:underline">backlinkbridge.com</a></p>
              <p className="text-slate-400 text-xs pt-1">Response time: within 2 business days</p>
            </div>
          </div>

          <div className="pt-4 border-t border-border flex flex-wrap gap-4 text-sm">
            <Link href="/privacy" className="text-primary font-semibold hover:underline">Privacy Policy →</Link>
            <Link href="/terms" className="text-primary font-semibold hover:underline">Terms of Service →</Link>
            <Link href="/contact" className="text-primary font-semibold hover:underline">Contact Us →</Link>
          </div>

        </div>
      </section>
    </div>
  )
}
