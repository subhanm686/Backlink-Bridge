export const AFFILIATES_EMAIL = 'partnerships@backlinkbridge.com'

/** Update commission rates with the business owner before publishing. */
export const commissionRows = [
  {
    referralType: 'Monthly packages ($199–$1,000/mo)',
    rate: '15%',
    payoutType: 'Recurring (12 months)',
    cookie: '90 days',
  },
  {
    referralType: 'Per-link orders',
    rate: '10%',
    payoutType: 'One-time',
    cookie: '90 days',
  },
  {
    referralType: 'Custom / enterprise deals',
    rate: '20%',
    payoutType: 'Negotiated',
    cookie: '90 days',
  },
]

export const affiliateSteps = [
  {
    number: '01',
    title: 'Sign Up',
    body: 'Apply through the form below. Once approved, you receive a unique referral link and access to your affiliate dashboard.',
    photo: 'person laptop signup form professional',
  },
  {
    number: '02',
    title: 'Share Your Link',
    body: 'Promote Backlink Bridge to your audience — blog posts, newsletters, social media, or direct referrals. Your link tracks every signup.',
    photo: 'social media marketing share content professional',
  },
  {
    number: '03',
    title: 'Earn Commission',
    body: 'When a referred client becomes a paying customer, you earn commission on their order. Recurring plans pay out monthly for up to 12 months.',
    photo: 'payment commission earnings finance professional',
  },
]

export const affiliateFaqs = [
  {
    question: 'How do I get paid?',
    answer:
      'Commissions are paid monthly via PayPal or bank transfer once you reach the $100 minimum payout threshold. You receive a statement showing each referred client, order value, and commission earned.',
  },
  {
    question: 'How long does my referral link stay active?',
    answer:
      'Our default cookie window is 90 days. If someone clicks your link and signs up within that period, you receive credit for the referral — even if they convert later.',
  },
  {
    question: 'Can I refer my own company or clients I already manage?',
    answer:
      'Self-referrals are not eligible for commission. Referrals must be new clients who have not previously contacted or purchased from Backlink Bridge.',
  },
  {
    question: "What's the difference between the affiliate and partner programs?",
    answer:
      'The affiliate program is for individuals who refer clients and earn commission on conversions. The partner program is for agencies and resellers who white-label our link building services under their own brand with volume pricing and dedicated support.',
  },
  {
    question: 'Is there an approval process?',
    answer:
      'Yes. We review every application to ensure affiliates align with our brand values and promotion methods. Most applications are reviewed within one business day.',
  },
  {
    question: 'How do I track my referrals?',
    answer:
      'Approved affiliates receive access to a dashboard showing clicks, signups, conversions, and pending commissions in real time.',
  },
]
