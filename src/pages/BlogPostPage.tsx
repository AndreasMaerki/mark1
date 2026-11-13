import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import { getBlogPost } from '@/utils/contentLoader'
import Markdown from '@/components/common/Markdown'

export default function BlogPostPage(): JSX.Element {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { animationClass } = useFadeInMounted()

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
    <div className={clsx(animationClass, 'min-h-screen bg-white dark:bg-primary-dark')}>
      {/* Header with back button - positioned below navbar */}
      <div className={clsx('animate-fade-in', 'bg-white/95 dark:bg-primary-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700/20 mt-20')}>
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
      <article className={clsx('animate-fade-in !delay-200', 'container mx-auto px-6 py-12 max-w-4xl')}>
        <header className="mb-12">
          <div className="flex items-center gap-4 text-gray-600 dark:text-muted mb-6">
            <time>{blogPost.datePublished}</time>
            <span>•</span>
            <span>{blogPost.minRead} min read</span>
            <span>•</span>
            <span>iOS Development</span>
          </div>
        </header>

        <Markdown
          content={blogPost.content}
          className="[&_p]:text-gray-700 [&_p]:dark:text-muted [&_p]:leading-relaxed [&_h1]:text-primary-dark [&_h1]:dark:text-white [&_h2]:text-primary-dark [&_h2]:dark:text-white [&_h3]:text-primary-dark [&_h3]:dark:text-white [&_strong]:text-primary-dark [&_strong]:dark:text-primary-light [&_code]:bg-gray-100 [&_code]:dark:bg-gray-800 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono"
        />

        {slug === 'argeotracking-analysis' && (
          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700/20">
            <p className="text-sm text-gray-600 dark:text-muted italic mb-4">
              This analysis is based on examining the ARGeoTracking project codebase, which demonstrates advanced techniques in CoreLocation, ARKit, and RealityKit integration.
            </p>
          </footer>
        )}
        
        {slug === 'swift-android-workgroup' && (
          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700/20">
            <p className="text-sm text-gray-600 dark:text-muted italic mb-4">
              This analysis is based on the official Swift Android Workgroup announcement and community discussions from the Swift Forums. 
              Information sourced from <a href="https://www.swift.org/android-workgroup/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">swift.org/android-workgroup</a> and <a href="https://forums.swift.org/t/announcing-the-android-workgroup/80666" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Swift Forums discussions</a>.
            </p>
          </footer>
        )}
      </article>
    </div>
  )
}