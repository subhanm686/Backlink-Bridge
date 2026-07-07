import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import FaqAccordion from '@/components/ui/FaqAccordion'
import AffiliateForm from '@/components/ui/AffiliateForm'
import AffiliateProcess from '@/components/sections/AffiliateProcess'
import { constructMetadata, getFAQSchema } from '@/lib/metadata'
import { AFFILIATES_EMAIL, affiliateFaqs, commissionRows } from '@/data/affiliates'

export const metadata = constructMetadata({
  title: 'Affiliate Program | Earn Commission Referring Clients | Backlink Bridge',
  description:
    'Join the Backlink Bridge affiliate program. Earn recurring commission when you refer clients to our link building services. Free to join, 90-day cookie window.',
  canonicalUrl: 'https://backlinkbridge.com/affiliates',
})

const affiliatesSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://backlinkbridge.com/affiliates',
  name: 'Affiliate Program | Backlink Bridge',
  description:
    'Earn commission by referring clients to Backlink Bridge link building services. Recurring payouts on monthly plans, one-time on per-link orders.',
  publisher: {
    '@type': 'Organization',
    name: 'Backlink Bridge',
    url: 'https://backlinkbridge.com',
  },
}

export default function AffiliatesPage() {
  const faqSchema = getFAQSchema(affiliateFaqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(affiliatesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-surface py-20 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <Badge variant="teal">Affiliate Program</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display text-navy leading-tight tracking-tight">
              Earn Commission Referring Clients to Backlink Bridge
            </h1>
            <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Know someone who needs better backlinks? Share your referral link and earn commission on every client
              who signs up — with recurring payouts on monthly plans.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-2 text-sm font-semibold text-slate-500">
              {['Free to join', '90-day cookie window', '$100 minimum payout', 'Monthly PayPal or bank transfer'].map(
                (t) => (
                  <span key={t} className="flex items-center gap-2">
                    <span className="text-teal text-base">✓</span> {t}
                  </span>
                )
              )}
            </div>
            <div className="pt-2">
              <Button href="#affiliate-form" variant="primary" size="lg">
                Apply Now — It&apos;s Free
              </Button>
            </div>
          </div>
        </section>

        {/* How it works */}
        <AffiliateProcess />

        {/* Commission structure */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="primary">Commission Structure</Badge>
            <h2 className="text-3xl font-bold font-display text-navy mt-4">What you earn per referral</h2>
            <p className="mt-4 text-[16px] text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Transparent rates on every referral type. Recurring commissions apply for up to 12 months on active
              monthly plans.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-6 py-4 font-semibold">Referral Type</th>
                    <th className="text-center px-6 py-4 font-semibold">Commission</th>
                    <th className="text-center px-6 py-4 font-semibold">Payout Type</th>
                    <th className="text-center px-6 py-4 font-semibold">Cookie</th>
                  </tr>
                </thead>
                <tbody>
                  {commissionRows.map((row, i) => (
                    <tr key={row.referralType} className={`border-t border-border ${i % 2 === 0 ? 'bg-white' : 'bg-surface'}`}>
                      <td className="px-6 py-4 font-bold text-navy">{row.referralType}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="font-bold text-primary text-base">{row.rate}</span>
                      </td>
                      <td className="px-6 py-4 text-center text-slate-500">{row.payoutType}</td>
                      <td className="px-6 py-4 text-center text-slate-500">{row.cookie}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-surface border-t border-border text-xs text-slate-400">
              Commission rates are indicative and subject to approval. Enterprise deals may qualify for custom terms.
              Contact{' '}
              <a href={`mailto:${AFFILIATES_EMAIL}`} className="text-primary font-semibold hover:underline">
                {AFFILIATES_EMAIL}
              </a>{' '}
              to confirm current rates before promoting.
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-surface border-y border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-navy mb-3">Affiliate FAQs</h2>
              <p className="text-slate-500 font-medium">Common questions about the program.</p>
            </div>
            <FaqAccordion items={affiliateFaqs} />
          </div>
        </section>

        {/* Signup form */}
        <section id="affiliate-form" className="py-20 scroll-mt-28">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 space-y-4">
              <Badge variant="primary">Get Started</Badge>
              <h2 className="text-3xl font-bold font-display text-navy">Apply to become an affiliate</h2>
              <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                Fill out the form below and we&apos;ll review your application within one business day. You can also
                email us at{' '}
                <a href={`mailto:${AFFILIATES_EMAIL}`} className="text-primary font-semibold hover:underline">
                  {AFFILIATES_EMAIL}
                </a>
                .
              </p>
            </div>
            <AffiliateForm />
            <p className="text-sm text-slate-400 text-center mt-6">
              Running an agency and want to resell under your brand? See our{' '}
              <Link href="/partners" className="text-primary hover:underline font-medium">
                partner program
              </Link>{' '}
              instead.
            </p>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-navy py-24 text-center border-t border-navy-light/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light/80 opacity-70" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white leading-tight">
              Start earning from your network today
            </h2>
            <p className="text-[17px] text-slate-200 leading-relaxed font-medium">
              Join affiliates already earning commission by connecting businesses with high-quality link building
              services they actually need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button href="#affiliate-form" variant="primary" size="lg">
                Apply to Become an Affiliate
              </Button>
              <Button href="/pricing" variant="outline-white" size="lg">
                View Client Pricing
              </Button>
            </div>
            <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider pt-2">
              Free to join. No minimum referrals required.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
