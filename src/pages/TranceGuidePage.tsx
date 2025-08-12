import { lazy, Suspense, useEffect } from 'react'
import useDocumentTitle from '@/hooks/useDocumentTitle'
import tranceGuideContent from '@/_data/tranceguide-faq.md?raw'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Footer = lazy(() => import('@/components/layouts/Footer'))
const ReactMarkdown = lazy(() => import('react-markdown'))
const Heading1 = lazy(() => import('@/components/common/reusable/heading/Heading1'))
const Heading2 = lazy(() => import('@/components/common/reusable/heading/Heading2'))
const Heading3 = lazy(() => import('@/components/common/reusable/heading/Heading3'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink'))

export default function TranceGuidePage(): JSX.Element {
  useDocumentTitle({
    title: 'TranceGuide FAQ',
    description: 'Frequently Asked Questions for the TranceGuide iOS app.',
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
    <Suspense fallback={<div className="container mx-auto px-6 py-12 text-center">Loading...</div>}>
      <PageWrapper>
        <div className="min-h-screen bg-transparent">
          <article className="container mx-auto px-6 py-12 max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none [&_p]:text-gray-700 [&_p]:dark:text-muted [&_p]:leading-relaxed [&_h1]:text-primary-dark [&_h1]:dark:text-white [&_h2]:text-primary-dark [&_h2]:dark:text-white [&_h3]:text-primary-dark [&_h3]:dark:text-white [&_strong]:text-primary-dark [&_strong]:dark:text-primary-light [&_code]:bg-gray-100 [&_code]:dark:bg-gray-800 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <Heading1 className="text-4xl md:text-5xl text-primary-dark dark:text-white mb-6">{children}</Heading1>
                  ),
                  h2: ({ children }) => (
                    <Heading2 className="mb-6 mt-8 text-primary-dark dark:text-white">{children}</Heading2>
                  ),
                  h3: ({ children }) => (
                    <Heading3 className="mb-4 mt-6 text-primary-dark dark:text-white">{children}</Heading3>
                  ),
                  a: ({ href, children }) => <InlineLink href={href || '#'}>{children}</InlineLink>,
                  p: ({ children }) => (
                    <p className="text-gray-700 dark:text-muted leading-relaxed mb-6">{children}</p>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-primary-dark dark:text-primary-light">{children}</strong>
                  ),
                  ul: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-6">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-6">{children}</ol>,
                  li: ({ children }) => <li className="text-gray-700 dark:text-muted">{children}</li>
                }}
              >
                {tranceGuideContent}
              </ReactMarkdown>
            </div>
          </article>
        </div>
        <Footer />
      </PageWrapper>
    </Suspense>
  )
}


