export type Role = {
  title: string
  department: 'Content' | 'Outreach' | 'Engineering' | 'Sales'
  location: string
  type: 'Full-time' | 'Contract'
  applyLink: string
  description: string
}

export const CAREERS_EMAIL = 'careers@backlinkbridge.com'

export const openRoles: Role[] = [
  {
    title: 'SEO Content Writer',
    department: 'Content',
    location: 'Remote',
    type: 'Full-time',
    applyLink: 'mailto:careers@backlinkbridge.com?subject=Application%20-%20SEO%20Content%20Writer',
    description:
      'Write in-depth, human-crafted articles for guest post placements across 25+ niches. You will research topics, follow anchor text briefs, and collaborate with outreach and account teams to deliver publish-ready content on deadline.',
  },
  {
    title: 'Link Building Outreach Specialist',
    department: 'Outreach',
    location: 'Remote',
    type: 'Full-time',
    applyLink: 'mailto:careers@backlinkbridge.com?subject=Application%20-%20Link%20Building%20Outreach%20Specialist',
    description:
      'Manage blogger outreach campaigns from prospecting through placement. You will negotiate with publishers, track pipeline in our CRM, and maintain relationships with site owners across DR 30–80+ properties.',
  },
  {
    title: 'Account Manager — Link Building',
    department: 'Sales',
    location: 'Remote',
    type: 'Full-time',
    applyLink: 'mailto:careers@backlinkbridge.com?subject=Application%20-%20Account%20Manager%20Link%20Building',
    description:
      'Own client relationships for monthly link building packages. You will coordinate content approvals, report on placements, and help clients understand DR growth and ranking impact from their campaigns.',
  },
  {
    title: 'Full-Stack Developer (Contract)',
    department: 'Engineering',
    location: 'Remote',
    type: 'Contract',
    applyLink: 'mailto:careers@backlinkbridge.com?subject=Application%20-%20Full-Stack%20Developer%20Contract',
    description:
      'Help us build internal tooling and client-facing dashboards for link reporting and campaign management. Stack includes Next.js, TypeScript, and modern API integrations. 10–20 hrs/week to start.',
  },
]

export const whyWorkHere = [
  {
    icon: '🌍',
    title: 'Remote-first, always',
    description:
      'Work from anywhere with async-friendly communication. We hire for output and trust, not office hours.',
  },
  {
    icon: '📈',
    title: 'Room to grow',
    description:
      'Small team, big impact. Take ownership of campaigns, processes, and client outcomes — not just tasks on a checklist.',
  },
  {
    icon: '🎯',
    title: 'Real client results',
    description:
      'Every link you place or article you write moves DR, rankings, and revenue for real businesses — not vanity metrics.',
  },
  {
    icon: '🤝',
    title: 'White-hat only',
    description:
      'We refuse PBNs, link farms, and black-hat shortcuts. Build a career on sustainable SEO practices you can be proud of.',
  },
]
