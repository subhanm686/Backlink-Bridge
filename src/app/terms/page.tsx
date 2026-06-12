import React from 'react'
import Link from 'next/link'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: "Terms of Service | Backlink Bridge",
  description: "Backlink Bridge terms of service. The terms and conditions governing your use of our link building and guest posting services.",
  canonicalUrl: "https://backlinkbridge.com/terms"
})

const LAST_UPDATED = "12 June 2026"

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-surface py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-extrabold font-display text-navy mb-4">Terms of Service</h1>
          <p className="text-slate-500 font-medium">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-10 text-[15px]">

          <div>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of the Backlink Bridge website at backlinkbridge.com and all link building, guest posting, and related services provided by Backlink Bridge (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing our website or purchasing our services, you agree to be bound by these Terms.
            </p>
            <p className="mt-4">
              If you do not agree to these Terms, please do not use our website or services. We reserve the right to update these Terms at any time. Continued use of our services after changes constitutes your acceptance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">1. Services</h2>
            <p>
              Backlink Bridge provides off-page SEO services including guest posting, niche edits, link insertions, domain rating improvement campaigns, spam score cleanup, and GBOB management. All services are described on our website and confirmed in writing before any work begins.
            </p>
            <p className="mt-4">
              We reserve the right to refuse service to any client at our discretion, including if the client&apos;s website contains illegal content, violates Google&apos;s quality guidelines in ways that would put publishers at risk, or promotes harmful products or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">2. Orders and payment</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>All orders are confirmed once payment has been received in full or a payment agreement has been signed.</li>
              <li>Prices are listed in USD and are subject to change. Quoted prices are valid for 14 days from the date of issue.</li>
              <li>Monthly retainer plans are billed at the start of each billing cycle and are non-refundable once a campaign has commenced (see Refund Policy).</li>
              <li>Per-link orders require full payment upfront before any outreach or content creation begins.</li>
              <li>We accept payment via bank transfer, PayPal, and major credit cards.</li>
              <li>Invoices are due within 7 days of issue unless otherwise agreed in writing.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">3. Delivery and timelines</h2>
            <p>
              Estimated delivery timelines are provided at the time of order and represent good-faith estimates, not guarantees. Link building involves third-party publishers whose editorial schedules and response times are outside our control. We do not guarantee specific delivery dates unless confirmed in writing.
            </p>
            <p className="mt-4">
              Typical turnaround times by DR tier are listed on our pricing page. Delays caused by a client failing to provide required information, approve content drafts, or respond to communications within 5 business days are not the responsibility of Backlink Bridge.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">4. Content approval</h2>
            <p>
              For all guest posting services, Backlink Bridge will provide the client with a draft article for review before submission to any publisher. The client has 3 business days to approve the draft or request revisions. Up to 2 rounds of revisions are included per placement. If no response is received within 3 business days, we will proceed with submission.
            </p>
            <p className="mt-4">
              By approving content, the client confirms the article is factually accurate for their business. Backlink Bridge is not liable for inaccuracies in approved content.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">5. Link replacement guarantee</h2>
            <p>
              We guarantee that all placed links will remain live and dofollow for a minimum of 12 months from the date of placement. If a link is removed or changed to nofollow within this period through no fault of the client, we will replace it with a link on an equivalent or higher-authority site at no additional charge.
            </p>
            <p className="mt-4">
              This guarantee does not apply if: (a) the client&apos;s website is penalised by Google due to the client&apos;s own actions; (b) the publisher removes the link due to content the client insisted be included against our editorial recommendation; or (c) the client requests removal of the link.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">6. Client responsibilities</h2>
            <p>The client agrees to:</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-3">
              <li>Provide accurate information about their website, target pages, and anchor text preferences</li>
              <li>Respond to content approval requests within 3 business days</li>
              <li>Not engage in activities that could result in a Google manual penalty to their own domain during an active campaign</li>
              <li>Not reverse-engineer, replicate, or resell our publisher database or outreach processes without written consent</li>
              <li>Keep campaign details, publisher contacts, and reporting data confidential</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">7. Intellectual property</h2>
            <p>
              All content created by Backlink Bridge — including articles, outreach templates, and campaign strategies — remains the intellectual property of Backlink Bridge until full payment has been received. Upon full payment, clients receive a non-exclusive licence to use placed articles for their marketing purposes.
            </p>
            <p className="mt-4">
              Our website content, logos, and brand materials are the exclusive property of Backlink Bridge and may not be reproduced without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">8. Results disclaimer</h2>
            <p>
              Backlink Bridge provides link building services in accordance with white-hat SEO best practices. However, we do not guarantee specific ranking improvements, traffic increases, or Domain Rating changes. Search engine algorithms are controlled by third parties (Google, Bing, etc.) and are subject to change at any time. Past results shown in case studies are illustrative and not a guarantee of future performance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">9. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, Backlink Bridge shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of revenue, rankings, or business opportunity, arising from or related to your use of our services, even if we have been advised of the possibility of such damages.
            </p>
            <p className="mt-4">
              Our total liability for any claim arising from our services shall not exceed the amount paid by you to Backlink Bridge in the 3 months preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">10. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the business relationship, including publisher lists, outreach strategies, client websites, and pricing agreements. This obligation survives termination of services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">11. Termination</h2>
            <p>
              Either party may terminate a monthly retainer with 14 days written notice. Work already completed or in progress at the time of termination will be delivered and invoiced. No refund is provided for work already commenced. Per-link orders are non-cancellable once outreach has begun.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">12. Governing law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of Tasmania, Australia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Tasmania, Australia.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">13. Contact</h2>
            <p>
              For questions about these Terms, please contact us:
            </p>
            <div className="mt-4 p-5 bg-surface rounded-xl border border-border text-sm space-y-1">
              <p><strong className="text-navy">Backlink Bridge</strong></p>
              <p>Email: <a href="mailto:contact@backlinkbridge.com" className="text-primary hover:underline">contact@backlinkbridge.com</a></p>
              <p>Website: <a href="https://backlinkbridge.com" className="text-primary hover:underline">backlinkbridge.com</a></p>
            </div>
          </div>

          <div className="pt-4 border-t border-border flex flex-wrap gap-4 text-sm">
            <Link href="/privacy" className="text-primary font-semibold hover:underline">Privacy Policy →</Link>
            <Link href="/refund" className="text-primary font-semibold hover:underline">Refund Policy →</Link>
            <Link href="/contact" className="text-primary font-semibold hover:underline">Contact Us →</Link>
          </div>

        </div>
      </section>
    </div>
  )
}
