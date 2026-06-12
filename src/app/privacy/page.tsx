import React from 'react'
import Link from 'next/link'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: "Privacy Policy | Backlink Bridge",
  description: "Backlink Bridge privacy policy. How we collect, use, and protect your personal information when you use our link building services.",
  canonicalUrl: "https://backlinkbridge.com/privacy"
})

const LAST_UPDATED = "12 June 2026"

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-surface py-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-extrabold font-display text-navy mb-4">Privacy Policy</h1>
          <p className="text-slate-500 font-medium">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-10 text-[15px]">

          <div>
            <p>
              Backlink Bridge (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the website at backlinkbridge.com and provides link building and guest posting services. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or use our services. Please read it carefully.
            </p>
            <p className="mt-4">
              By using our website or services, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">1. Information we collect</h2>
            <p>We collect the following types of information:</p>
            <h3 className="text-base font-bold text-navy mt-4 mb-2">Information you provide directly</h3>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Name and email address when you submit a contact form or request a free site audit</li>
              <li>Website URL and business details you share when discussing our services</li>
              <li>Payment and billing information processed through our secure payment provider</li>
              <li>Communications and correspondence you send to us via email or contact forms</li>
            </ul>
            <h3 className="text-base font-bold text-navy mt-4 mb-2">Information collected automatically</h3>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>IP address, browser type, and operating system</li>
              <li>Pages visited, time spent on pages, and referring URLs</li>
              <li>Cookie data and similar tracking technologies (see Section 5)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">2. How we use your information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-3">
              <li>Provide, operate, and improve our link building and guest posting services</li>
              <li>Respond to enquiries, deliver free site audits, and communicate about your campaigns</li>
              <li>Process payments and send transactional emails (receipts, invoices, campaign reports)</li>
              <li>Send marketing emails about new services or blog content — only with your consent</li>
              <li>Analyse website usage to improve our content and user experience</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
            <p className="mt-4">
              We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">3. Legal basis for processing (GDPR)</h2>
            <p>If you are located in the European Economic Area, we process your personal data under the following legal bases:</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-3">
              <li><strong>Contract performance</strong> — processing necessary to deliver services you have purchased</li>
              <li><strong>Legitimate interests</strong> — improving our services, fraud prevention, and security</li>
              <li><strong>Consent</strong> — marketing emails and non-essential cookies, where you have opted in</li>
              <li><strong>Legal obligation</strong> — where processing is required by applicable law</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">4. Information sharing and disclosure</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-3">
              <li><strong>Service providers</strong> — trusted third-party vendors who assist in operating our website and delivering services (e.g. email providers, payment processors, analytics tools). These parties are contractually bound to keep your information confidential.</li>
              <li><strong>Legal authorities</strong> — where required by law, court order, or to protect our legal rights.</li>
              <li><strong>Business transfers</strong> — in the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction.</li>
            </ul>
            <p className="mt-4">We do not share your data with any third parties beyond these limited circumstances.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">5. Cookies</h2>
            <p>
              Our website uses cookies — small text files stored on your device — to improve your browsing experience and analyse site traffic. We use:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 mt-3">
              <li><strong>Essential cookies</strong> — required for the website to function correctly</li>
              <li><strong>Analytics cookies</strong> — to understand how visitors use our site (e.g. Google Analytics)</li>
              <li><strong>Marketing cookies</strong> — to deliver relevant advertising (only with your consent)</li>
            </ul>
            <p className="mt-4">
              You can control cookie settings through your browser. Disabling certain cookies may affect website functionality.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">6. Data retention</h2>
            <p>
              We retain your personal information only as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Client campaign data is retained for 3 years after the end of a service engagement. Contact form submissions are retained for 12 months.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">7. Data security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information, including SSL/TLS encryption, access controls, and secure hosting. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">8. Your rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-3">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data (&quot;right to be forgotten&quot;)</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Request portability of your data in a machine-readable format</li>
              <li>Withdraw consent at any time where processing is based on consent</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:contact@backlinkbridge.com" className="text-primary font-semibold hover:underline">
                contact@backlinkbridge.com
              </a>.
              We will respond within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">9. Third-party links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any external sites you visit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">10. Children&apos;s privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">11. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the &quot;Last updated&quot; date at the top of this page. We encourage you to review this policy periodically. Continued use of our website or services after changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy font-display mb-3">12. Contact us</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="mt-4 p-5 bg-surface rounded-xl border border-border text-sm space-y-1">
              <p><strong className="text-navy">Backlink Bridge</strong></p>
              <p>Email: <a href="mailto:contact@backlinkbridge.com" className="text-primary hover:underline">contact@backlinkbridge.com</a></p>
              <p>Website: <a href="https://backlinkbridge.com" className="text-primary hover:underline">backlinkbridge.com</a></p>
            </div>
          </div>

          <div className="pt-4 border-t border-border flex flex-wrap gap-4 text-sm">
            <Link href="/terms" className="text-primary font-semibold hover:underline">Terms of Service →</Link>
            <Link href="/refund" className="text-primary font-semibold hover:underline">Refund Policy →</Link>
            <Link href="/contact" className="text-primary font-semibold hover:underline">Contact Us →</Link>
          </div>

        </div>
      </section>
    </div>
  )
}
