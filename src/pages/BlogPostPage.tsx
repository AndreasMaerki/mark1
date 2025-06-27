import { lazy, useEffect, Suspense } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getBlogPost, getBlogPostMetadata } from '@/utils/contentLoader'

const Heading1 = lazy(() => import('@/components/common/reusable/heading/Heading1'))
const Heading2 = lazy(() => import('@/components/common/reusable/heading/Heading2'))
const Heading3 = lazy(() => import('@/components/common/reusable/heading/Heading3'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink'))
const ReactMarkdown = lazy(() => import('react-markdown'))

export default function BlogPostPage(): JSX.Element {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  // Handle Escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        navigate('/blog')
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [navigate])

  // Get blog post data
  const blogPost = slug ? getBlogPost(slug) : null

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-white dark:bg-primary-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary-dark dark:text-white mb-4">Blog post not found</h1>
          <Link to="/blog" className="text-primary dark:text-primary-light hover:text-primary/80 dark:hover:text-primary-lighter transition-colors">
            ← Back to blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-primary-dark">
      {/* Header with back button - positioned below navbar */}
      <div className="bg-white/95 dark:bg-primary-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700/20 mt-20">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/blog" 
            className="flex items-center gap-2 text-gray-600 dark:text-muted hover:text-primary dark:hover:text-primary-light transition-colors group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article content */}
      <Suspense fallback={<div className="container mx-auto px-6 py-12 text-center">Loading...</div>}>
        <article className="container mx-auto px-6 py-12 max-w-4xl">
          <header className="mb-12">
            <div className="flex items-center gap-4 text-gray-600 dark:text-muted mb-6">
              <time>{blogPost.datePublished}</time>
              <span>•</span>
              <span>{blogPost.minRead} min read</span>
              <span>•</span>
              <span>iOS Development</span>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none [&_p]:text-gray-700 [&_p]:dark:text-muted [&_p]:leading-relaxed [&_h1]:text-primary-dark [&_h1]:dark:text-white [&_h2]:text-primary-dark [&_h2]:dark:text-white [&_h3]:text-primary-dark [&_h3]:dark:text-white [&_strong]:text-primary-dark [&_strong]:dark:text-primary-light [&_code]:bg-gray-100 [&_code]:dark:bg-gray-800 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono">
            <ReactMarkdown
              components={{
                h1: ({ children }) => <Heading1 className='text-4xl md:text-5xl text-primary-dark dark:text-white mb-6'>{children}</Heading1>,
                h2: ({ children }) => <Heading2 className='mb-6 mt-8 text-primary-dark dark:text-white'>{children}</Heading2>,
                h3: ({ children }) => <Heading3 className='mb-4 mt-6 text-primary-dark dark:text-white'>{children}</Heading3>,
                a: ({ href, children }) => <InlineLink href={href || '#'}>{children}</InlineLink>,
                p: ({ children }) => <p className="text-gray-700 dark:text-muted leading-relaxed mb-6">{children}</p>,
                strong: ({ children }) => <strong className="font-semibold text-primary-dark dark:text-primary-light">{children}</strong>,
                code: ({ children }) => <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-800 dark:text-gray-200">{children}</code>,
                pre: ({ children }) => <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-6">{children}</pre>,
                ul: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-6">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-6">{children}</ol>,
                li: ({ children }) => <li className="text-gray-700 dark:text-muted">{children}</li>
              }}
            >
              {blogPost.content}
            </ReactMarkdown>
            
            {slug === 'argeotracking-analysis' && (
              <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700/20">
                <p className="text-sm text-gray-600 dark:text-muted italic mb-4">
                  This analysis is based on examining the ARGeoTracking project codebase, which demonstrates advanced techniques in CoreLocation, ARKit, and RealityKit integration.
                </p>
              </footer>
            )}
          </div>
        </article>
      </Suspense>
    </div>
  )
}