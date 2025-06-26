import { lazy, Suspense } from 'react'
import useDocumentTitle from '@/hooks/useDocumentTitle'
import Preloader from '@/components/common/Preloader'
import clsx from 'clsx'
import { getBlogPost, getBlogPostMetadata } from '@/utils/contentLoader'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Footer = lazy(() => import('@/components/layouts/Footer'))
const Heading1 = lazy(() => import('@/components/common/reusable/heading/Heading1'))
const Heading2 = lazy(() => import('@/components/common/reusable/heading/Heading2'))
const Heading3 = lazy(() => import('@/components/common/reusable/heading/Heading3'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink'))
const Section = lazy(() => import('@/components/layouts/Section'))
const ReactMarkdown = lazy(() => import('react-markdown'))

export default function ARGeoTrackingBlogPost(): JSX.Element {
  // Get blog post data and metadata
  const blogPost = getBlogPost('argeotracking-analysis')
  const metadata = getBlogPostMetadata('argeotracking-analysis')

  useDocumentTitle({
    title: metadata?.title || 'ARGeoTracking Analysis',
    description: metadata?.description || '',
    keywords: metadata?.keywords?.join(', ') || '',
    canonical: 'https://andreasmaerki.dev/blog/argeotracking-ar-coordinate-transformation',
    ogTitle: blogPost?.title || '',
    ogDescription: metadata?.description || '',
    ogType: 'article',
    articleAuthor: metadata?.author || '',
    articlePublishedTime: metadata?.publishedTime || ''
  })

  if (!blogPost || !metadata) {
    return (
      <div className="min-h-screen bg-white dark:bg-primary-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary-dark dark:text-white mb-4">Blog post not found</h1>
        </div>
      </div>
    )
  }

  return (
    <Suspense fallback={<Preloader />}>
      <PageWrapper>
        <Section className="max-w-4xl mx-auto">
          <article className="prose prose-lg dark:prose-invert max-w-none animate-fade-in">
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-dark dark:text-muted mb-6">
                <time dateTime={metadata.publishedTime}>{blogPost.datePublished}</time>
                <span>•</span>
                <span>{blogPost.minRead} min read</span>
                <span>•</span>
                <span>iOS Development</span>
              </div>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none [&_p]:text-muted-dark [&_p]:dark:text-muted [&_p]:leading-relaxed [&_h1]:text-primary-dark [&_h1]:dark:text-white [&_h2]:text-primary-dark [&_h2]:dark:text-white [&_h3]:text-primary-dark [&_h3]:dark:text-white [&_strong]:text-primary-dark [&_strong]:dark:text-primary-light [&_code]:bg-gray-100 [&_code]:dark:bg-gray-800 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <Heading1 className='mb-4 text-primary-dark dark:text-white'>{children}</Heading1>,
                  h2: ({ children }) => <Heading2 className='mb-6 mt-8 text-primary-dark dark:text-white'>{children}</Heading2>,
                  h3: ({ children }) => <Heading3 className='mb-4 mt-6 text-primary-dark dark:text-white'>{children}</Heading3>,
                  a: ({ href, children }) => <InlineLink href={href || '#'}>{children}</InlineLink>,
                  p: ({ children }) => <p className="text-muted-dark dark:text-muted leading-relaxed mb-4">{children}</p>,
                  strong: ({ children }) => <strong className="font-semibold text-primary-dark dark:text-primary-light">{children}</strong>,
                  code: ({ children }) => <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-800 dark:text-gray-200">{children}</code>,
                  pre: ({ children }) => <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-6">{children}</pre>,
                  ul: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-6">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-6">{children}</ol>,
                  li: ({ children }) => <li className="text-muted-dark dark:text-muted">{children}</li>
                }}
              >
                {blogPost.content}
              </ReactMarkdown>
            </div>

            <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="mt-6">
                <InlineLink href="/blog">← Back to Blog</InlineLink>
              </div>
            </footer>
          </article>
        </Section>
        <Footer />
      </PageWrapper>
    </Suspense>
  )
} 