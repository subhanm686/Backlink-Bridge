import Badge from '@/components/ui/Badge'
import BottomCTA from '@/components/sections/BottomCTA'
import RoleList from '@/components/careers/RoleList'
import { constructMetadata } from '@/lib/metadata'
import { openRoles, whyWorkHere, CAREERS_EMAIL } from '@/data/careers'

export const metadata = constructMetadata({
  title: 'Careers | Join the Backlink Bridge Team',
  description:
    'Explore open roles at Backlink Bridge. We are a remote-first link building agency hiring for content, outreach, sales, and engineering. Real client impact, white-hat SEO, room to grow.',
  canonicalUrl: 'https://backlinkbridge.com/careers',
})

const careersSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://backlinkbridge.com/careers',
  name: 'Careers | Backlink Bridge',
  description:
    'Open roles and company culture at Backlink Bridge — a remote-first link building and guest posting agency.',
  publisher: {
    '@type': 'Organization',
    name: 'Backlink Bridge',
    url: 'https://backlinkbridge.com',
  },
}

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }}
      />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-surface py-20 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <Badge variant="teal">We&apos;re Hiring</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display text-navy leading-tight tracking-tight">
              Join the Backlink Bridge Team
            </h1>
            <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              We are a remote-first link building agency helping brands earn real authority through white-hat outreach.
              Work from anywhere, collaborate async, and see the direct impact of your work on client rankings and revenue.
            </p>
          </div>
        </section>

        {/* Why work here */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="primary">Why Work Here</Badge>
            <h2 className="text-3xl font-bold font-display text-navy mt-4">
              Build a career in SEO that matters
            </h2>
            <p className="mt-4 text-[16px] text-slate-500 font-medium leading-relaxed">
              We keep the team lean so everyone owns meaningful work — not busywork in a bloated org chart.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyWorkHere.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-2xl border border-border bg-surface"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-navy text-base mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Open roles */}
        <section className="py-20 bg-surface border-y border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="teal">Open Roles</Badge>
              <h2 className="text-3xl font-bold font-display text-navy mt-4">
                Current openings
              </h2>
              <p className="mt-4 text-[16px] text-slate-500 font-medium">
                Click a role to read more and apply. All positions are fully remote unless noted otherwise.
              </p>
            </div>

            <RoleList roles={openRoles} careersEmail={CAREERS_EMAIL} />
          </div>
        </section>

        <BottomCTA />
      </main>
    </>
  )
}
