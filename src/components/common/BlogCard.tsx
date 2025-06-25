import { lazy } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

const Badge = lazy(() => import('@/components/common/reusable/Badge'))

interface BlogCardProps {
  title: string
  excerpt: string
  datePublished: string
  minRead: number
  slug: string
  isLocal?: boolean
}

export default function BlogCard({
  title,
  excerpt,
  datePublished,
  minRead,
  slug,
  isLocal = false
}: BlogCardProps): JSX.Element {
  
  if (isLocal) {
    return (
      <Link
        to={`/blog/${slug}`}
        className={clsx(
          'group block p-6 bg-overlay dark:bg-overlay-dark rounded-xl border border-gray-200/20 dark:border-gray-700/20',
          'hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300',
          'hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary/5',
          'hover:-translate-y-1'
        )}
      >
        <article>
          <div className="flex items-center gap-3 mb-3">
            <Badge className="text-xs">
              iOS Development
            </Badge>
            <time className="text-sm text-muted-dark dark:text-muted">
              {datePublished}
            </time>
            <span className="text-sm text-muted-dark dark:text-muted">
              • {minRead} min read
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-primary-dark dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-dark dark:text-muted leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </article>
      </Link>
    )
  }

  // External blog posts (existing functionality)
  return (
    <a
      href={slug}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'group block p-6 bg-overlay dark:bg-overlay-dark rounded-xl border border-gray-200/20 dark:border-gray-700/20',
        'hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300',
        'hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary/5',
        'hover:-translate-y-1'
      )}
    >
      <article>
        <div className="flex items-center gap-3 mb-3">
          <Badge className="text-xs">
            iOS Development
          </Badge>
          <time className="text-sm text-muted-dark dark:text-muted">
            {datePublished}
          </time>
          <span className="text-sm text-muted-dark dark:text-muted">
            • {minRead} min read
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-primary-dark dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-dark dark:text-muted leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-primary hover:text-primary/80 transition-colors">
            Read more →
          </span>
          <svg className="w-4 h-4 text-muted-dark dark:text-muted group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </article>
    </a>
  )
}
