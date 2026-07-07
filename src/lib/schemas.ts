import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  websiteUrl: z.string().url({ message: "Please enter a valid URL (e.g., https://example.com)." }).or(
    z.string().refine((val) => {
      // Allow urls that don't start with http but look like domains
      const pattern = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/
      return pattern.test(val)
    }, { message: "Please enter a valid domain name." })
  ),
  servicesNeeded: z.array(z.string()).min(1, { message: "Please select at least one service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
})

export const auditFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  websiteUrl: z.string().url({ message: "Please enter a valid URL (e.g., https://example.com)." }).or(
    z.string().refine((val) => {
      const pattern = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/
      return pattern.test(val)
    }, { message: "Please enter a valid domain name." })
  ),
  mainProblem: z.enum(["stuck-rankings", "high-spam-score", "low-organic-traffic", "unstably-dr", "other"], {
    message: "Please select your main SEO challenge."
  })
})

export const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." })
})

const websiteUrlField = z
  .string()
  .url({ message: 'Please enter a valid URL (e.g., https://example.com).' })
  .or(
    z.string().refine(
      (val) => {
        const pattern = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/
        return pattern.test(val)
      },
      { message: 'Please enter a valid domain name.' }
    )
  )

export const partnerFormSchema = z.object({
  companyName: z.string().min(2, { message: 'Company name must be at least 2 characters.' }),
  websiteUrl: websiteUrlField,
  monthlyClientVolume: z.enum(['1-5', '6-15', '16-30', '31-50', '50+'], {
    message: 'Please select your monthly client volume.',
  }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
})

export const affiliateFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  websiteUrl: z
    .string()
    .optional()
    .refine(
      (val) => !val || val.length === 0 || websiteUrlField.safeParse(val).success,
      { message: 'Please enter a valid URL or domain.' }
    ),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
})

export const pitchFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  websiteUrl: z.string().url({ message: "Please enter a valid URL (e.g., https://example.com)." }).or(
    z.string().refine((val) => {
      const pattern = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/
      return pattern.test(val)
    }, { message: "Please enter a valid domain name." })
  ),
  articleTitle: z.string().min(5, { message: "Please enter your proposed article title." }),
  pitch: z.string().min(50, { message: "Please provide a brief outline (at least 50 characters)." }),
})
