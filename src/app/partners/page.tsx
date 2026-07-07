import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import PartnerForm from '@/components/ui/PartnerForm'
import { constructMetadata } from '@/lib/metadata'
import { audienceCards, partnerBenefits, PARTNERS_EMAIL } from '@/data/partners'

export const metadata = constructMetadata({
  title: 'Partner With Us | Agency & Reseller Program | Backlink Bridge',
  description:
    'White-label link building for SEO agencies, marketing consultants, and web dev shops. Volume discounts, branded reporting, and a dedicated partner manager.',
  canonicalUrl: 'https://backlinkbridge.com/partners',
})

const partnersSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://backlinkbridge.com/partners',
  name: 'Partner With Us | Backlink Bridge',
  description:
    'B2B partnership program for agencies and resellers offering white-label guest posting, niche edits, and link building at volume.',
  publisher: {
    '@type': 'Organization',
    name: 'Backlink Bridge',
    url: 'https://backlinkbridge.com',
  },
}

export default function PartnersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnersSchema) }}
      />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-surface py-20 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <Badge variant="primary">Agency & Reseller Program</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display text-navy leading-tight tracking-tight">
              Partner With Backlink Bridge
            </h1>
            <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              White-label our link building infrastructure for your clients. Whether you resell placements under your
              brand or refer accounts for a revenue share, we give agencies the outreach capacity to scale without
              building an in-house team.
            </p>
            <div className="pt-2">
              <Button href="#partner-form" variant="primary" size="lg">
                Apply to Partner
              </Button>
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="teal">Who This Is For</Badge>
            <h2 className="text-3xl font-bold font-display text-navy mt-4">
              Built for agencies that sell SEO outcomes
            </h2>
            <p className="mt-4 text-[16px] text-slate-500 font-medium leading-relaxed">
              If your clients need authority, rankings, and DR growth — but you don&apos;t want to manage blogger
              outreach in-house — this program is for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audienceCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-4 p-6 rounded-2xl border border-border bg-surface"
              >
                <span className="text-2xl">{card.icon}</span>
                <div>
                  <h3 className="font-bold text-navy text-base mb-2">{card.title}</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed font-medium">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What you get */}
        <section className="py-20 bg-surface border-y border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="primary">What You Get</Badge>
              <h2 className="text-3xl font-bold font-display text-navy mt-4">
                Everything you need to resell link building
              </h2>
            </div>

            <ul className="space-y-5">
              {partnerBenefits.map((benefit) => (
                <li
                  key={benefit.title}
                  className="flex gap-4 items-start p-5 rounded-xl border border-border bg-white shadow-sm"
                >
                  <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-[15px]">{benefit.title}</h3>
                    <p className="text-slate-500 text-[15px] leading-relaxed font-medium mt-1">
                      {benefit.description}
                      {'href' in benefit && benefit.href && (
                        <>
                          {' '}
                          <Link href={benefit.href} className="text-primary font-semibold hover:underline">
                            {benefit.linkLabel}
                          </Link>
                          .
                        </>
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Partner form */}
        <section id="partner-form" className="py-20 scroll-mt-28">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 space-y-4">
              <Badge variant="primary">Get Started</Badge>
              <h2 className="text-3xl font-bold font-display text-navy">Apply to become a partner</h2>
              <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                Fill out the form below and our partnerships team will respond within one business day. You can also
                email us directly at{' '}
                <a href={`mailto:${PARTNERS_EMAIL}`} className="text-primary font-semibold hover:underline">
                  {PARTNERS_EMAIL}
                </a>
                .
              </p>
            </div>
            <PartnerForm />
            <p className="text-sm text-slate-400 text-center mt-6">
              Looking for a single-site quote instead? Visit our{' '}
              <Link href="/contact" className="text-primary hover:underline font-medium">
                contact page
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-navy py-24 text-center border-t border-navy-light/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light/80 opacity-70" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white leading-tight">
              Ready to scale link building for your clients?
            </h2>
            <p className="text-[17px] text-slate-200 leading-relaxed font-medium">
              Join agencies already using Backlink Bridge to deliver white-hat placements without the overhead of an
              in-house outreach team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button href="#partner-form" variant="primary" size="lg">
                Apply to Partner
              </Button>
              <Button href="/pricing" variant="outline-white" size="lg">
                View Agency Pricing
              </Button>
            </div>
            <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider pt-2">
              No commitment required. Custom quote within 24 hours.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
