import { useEffect } from 'react'
import useDocumentTitle from '@/hooks/useDocumentTitle'
import privacyContent from '@/_data/tranceguide-privacy.md?raw'
import PageWrapper from '@/components/layouts/PageWrapper'
import Footer from '@/components/layouts/Footer'
import Markdown from '@/components/common/Markdown'

export default function TranceGuidePrivacyPage(): JSX.Element {
  useDocumentTitle({
    title: 'TranceGuide Privacy Policy',
    description: 'Privacy Policy for the TranceGuide iOS app.',
    canonical: undefined
  })

  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => {
      document.head.removeChild(meta)
    }
  }, [])

  return (
    <PageWrapper>
      <div className="min-h-screen bg-transparent">
        <article className="container mx-auto px-6 py-12 max-w-4xl">
          <Markdown
            content={privacyContent}
            className="[&_p]:text-gray-700 [&_p]:dark:text-muted [&_p]:leading-relaxed [&_h1]:text-primary-dark [&_h1]:dark:text-white [&_h2]:text-primary-dark [&_h2]:dark:text-white [&_h3]:text-primary-dark [&_h3]:dark:text-white [&_strong]:text-primary-dark [&_strong]:dark:text-primary-light [&_code]:bg-gray-100 [&_code]:dark:bg-gray-800 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono [&_li>p]:mt-0 [&_li>p]:mb-2"
          />
        </article>
      </div>
      <Footer />
    </PageWrapper>
  )
}