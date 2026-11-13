import { Link } from 'react-router-dom'
import clsx from 'clsx'
import Badge from '@/components/common/reusable/Badge'

interface BlogCardProps {
  title: string
  excerpt: string
  datePublished: string
  minRead: number
  slug: string
}

export default function BlogCard({
  title,
  excerpt,
  datePublished,
  minRead,
  slug
}: BlogCardProps): JSX.Element {
  return (
    <Link
      to={`/blog/${slug}`}
      className={clsx(
        'group block p-6 bg-white/60 dark:bg-slate-800/40 rounded-xl border border-gray-200/30 dark:border-gray-600/30',
        'hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-300',
        'hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary/5',
        'hover:-translate-y-1 hover:bg-white/80 dark:hover:bg-slate-800/60',
        'backdrop-blur-sm'
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
