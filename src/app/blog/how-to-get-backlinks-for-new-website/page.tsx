import fs from 'fs'
import path from 'path'

export const metadata = {
  title: 'How to Get Backlinks for a New Website in 2026 | BacklinkBridge',
  description: 'A complete 2026 guide to foundational link building strategies for new websites — covering DR targets, outreach mechanics, guest posting, and dofollow link acquisition.',
}

export default function BacklinksNewWebsite() {
  const filePath = path.join(process.cwd(), 'public', 'blog-posts', 'how-to-get-backlinks-new-website.html')
  const htmlContent = fs.readFileSync(filePath, 'utf8')

  // Extract only the body content
  const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i)
  const bodyContent = bodyMatch ? bodyMatch[1] : htmlContent

  // Extract styles from head
  const styleMatch = htmlContent.match(/<style[^>]*>([\s\S]*?)<\/style>/gi)
  const styles = styleMatch ? styleMatch.join('') : ''

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: styles + bodyContent }} />
    </>
  )
}
