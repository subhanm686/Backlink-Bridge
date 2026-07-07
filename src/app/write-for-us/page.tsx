import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import PitchForm from '@/components/ui/PitchForm'
import BottomCTA from '@/components/sections/BottomCTA'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Write for Us | Contribute SEO & Link Building Articles | Backlink Bridge',
  description:
    'Submit guest articles on SEO, link building, guest posting, and off-page strategy. Read our editorial guidelines and pitch your idea to the Backlink Bridge blog team.',
  canonicalUrl: 'https://backlinkbridge.com/write-for-us',
})

const writeForUsSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://backlinkbridge.com/write-for-us',
  name: 'Write for Us | Backlink Bridge',
  description:
    'Guest contributor guidelines for submitting SEO, link building, and digital marketing articles to the Backlink Bridge blog.',
  publisher: {
    '@type': 'Organization',
    name: 'Backlink Bridge',
    url: 'https://backlinkbridge.com',
  },
}

const topics = [
  {
    title: 'Link Building & Outreach',
    items: ['Guest posting strategies', 'Blogger outreach', 'Niche edits', 'Digital PR for links'],
  },
  {
    title: 'SEO Fundamentals',
    items: ['On-page & off-page SEO', 'Technical SEO basics', 'Keyword research', 'Content SEO'],
  },
  {
    title: 'Authority & Metrics',
    items: ['Domain Rating (DR)', 'Domain Authority (DA)', 'Spam score cleanup', 'Backlink audits'],
  },
  {
    title: 'Industry Trends',
    items: ['Google algorithm updates', 'AI in SEO', 'E-E-A-T', 'SaaS & e-commerce SEO'],
  },
]

const guidelines = [
  {
    title: 'Original & unpublished',
    desc: 'We only accept content that has not been published elsewhere. No spun, AI-only, or duplicate articles.',
  },
  {
    title: '1,500+ words',
    desc: 'In-depth guides perform best. Short promotional posts or listicles without actionable depth will be declined.',
  },
  {
    title: 'Practical & data-backed',
    desc: 'Include real examples, screenshots, step-by-step processes, or cited statistics — not generic filler.',
  },
  {
    title: 'Written for practitioners',
    desc: 'Our audience is SEO managers, agency owners, and marketers who want tactics they can apply immediately.',
  },
]

const submissionSteps = [
  {
    step: '01',
    title: 'Send your pitch',
    desc: 'Use the submission form on this page with your proposed title, target keyword, word count, and 2–3 bullet points on what readers will learn.',
  },
  {
    step: '02',
    title: 'Wait for approval',
    desc: 'Our editorial team reviews pitches within 3–5 business days. We may suggest angle changes before you write.',
  },
  {
    step: '03',
    title: 'Submit your draft',
    desc: 'Send your completed article in Google Docs or Word format. Include suggested headings and any image placeholders.',
  },
  {
    step: '04',
    title: 'Editorial review',
    desc: 'We may edit for clarity, SEO structure, and brand voice. Final approval is required before publication.',
  },
]

export default function WriteForUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(writeForUsSchema) }}
      />
      <main className="bg-white">
        {/* Hero */}
        <section className="bg-navy py-20 border-b border-navy-light/35 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light/90 opacity-80" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <Badge variant="teal" className="bg-teal/20 text-white border border-teal/40">
              Guest Contributors
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
              Write for Backlink Bridge
            </h1>
            <p className="text-[18px] text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
              Share your expertise on SEO, link building, and organic growth with thousands of marketers who read our blog every month.
            </p>
            <div className="pt-2">
              <Button href="#pitch-form" variant="primary" size="lg">
                Submit Your Pitch
              </Button>
            </div>
          </div>
        </section>

        {/* Why contribute */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="primary">Why Contribute</Badge>
            <h2 className="text-3xl font-bold font-display text-navy mt-4">
              Reach an audience that cares about links
            </h2>
            <p className="mt-4 text-[16px] text-slate-500 font-medium leading-relaxed">
              Backlink Bridge publishes practical SEO content for agency teams, in-house marketers, and founders scaling organic traffic. Accepted contributors get a byline, author bio with a dofollow link, and exposure to our growing readership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Author byline', value: 'Full credit with bio' },
              { label: 'Dofollow link', value: '1 contextual link in bio' },
              { label: 'Response time', value: '3–5 business days' },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-6 rounded-2xl border border-border bg-surface"
              >
                <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                  {item.label}
                </p>
                <p className="text-lg font-bold text-navy">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Topics */}
        <section className="bg-surface py-20 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Badge variant="teal">Topics We Accept</Badge>
              <h2 className="text-3xl font-bold font-display text-navy mt-4">
                What we publish
              </h2>
              <p className="mt-4 text-[16px] text-slate-500 font-medium">
                We welcome original articles on the topics below. Pitches outside these areas may still be considered if they offer clear value to our SEO audience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topics.map((topic) => (
                <Card key={topic.title} className="p-6 bg-white border border-border">
                  <h3 className="text-lg font-bold text-navy mb-4">{topic.title}</h3>
                  <ul className="space-y-2">
                    {topic.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[15px] text-slate-600 font-medium">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Guidelines */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="primary">Editorial Standards</Badge>
            <h2 className="text-3xl font-bold font-display text-navy mt-4">
              Submission guidelines
            </h2>
            <p className="mt-4 text-[16px] text-slate-500 font-medium">
              Articles that do not meet these standards will not be published, even if the topic is relevant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guidelines.map((rule) => (
              <div key={rule.title} className="p-6 rounded-2xl border border-border">
                <h3 className="text-lg font-bold text-navy mb-2">{rule.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed font-medium">{rule.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-amber-50 border border-amber-200">
            <h3 className="text-lg font-bold text-navy mb-2">What we do not accept</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[15px] text-slate-600 font-medium">
              {[
                'Promotional or advertorial content',
                'Plagiarised or AI-generated articles without human editing',
                'Topics unrelated to SEO or digital marketing',
                'Excessive self-promotional links in the body',
                'Previously published content',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-amber-600">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section className="bg-navy py-20 border-y border-navy-light/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge variant="teal" className="bg-teal/20 text-white border border-teal/40">
                How It Works
              </Badge>
              <h2 className="text-3xl font-bold font-display text-white mt-4">
                From pitch to publication
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {submissionSteps.map((item) => (
                <div
                  key={item.step}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5"
                >
                  <span className="text-sm font-bold text-primary">{item.step}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-2">{item.title}</h3>
                  <p className="text-[15px] text-slate-300 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pitch Form */}
        <section id="pitch-form" className="py-20 bg-surface border-t border-border scroll-mt-28">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 space-y-4">
              <Badge variant="primary">Ready to Submit?</Badge>
              <h2 className="text-3xl font-bold font-display text-navy">
                Pitch your article idea
              </h2>
              <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                Fill out the form below with your proposed title and outline. You can also email us directly at{' '}
                <a
                  href="mailto:contact@backlinkbridge.com?subject=Write%20for%20Us%20-%20Article%20Pitch"
                  className="text-primary font-semibold hover:underline"
                >
                  contact@backlinkbridge.com
                </a>
                .
              </p>
            </div>
            <PitchForm />
            <p className="text-sm text-slate-400 text-center mt-6">
              Prefer a general inquiry? Visit our{' '}
              <Link href="/contact" className="text-primary hover:underline font-medium">
                contact page
              </Link>
              .
            </p>
          </div>
        </section>

        <BottomCTA />
      </main>
    </>
  )
}
