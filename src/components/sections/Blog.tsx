import { lazy } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import { getAllBlogPosts } from '@/utils/contentLoader'

const Heading1 = lazy(() => import('@/components/common/reusable/heading/Heading1'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink'))
const BlogCard = lazy(() => import('@/components/common/BlogCard'))
const Section = lazy(() => import('@/components/layouts/Section'))

export default function Blog(): JSX.Element {
  const { animationClass } = useFadeInMounted()
  
  // Get blog posts from content loader
  const blogPosts = getAllBlogPosts()

  return (
    <Section className={clsx(animationClass, 'min-h-[calc(100vh-320px)]')}>
      <Heading1
        className={clsx('animate-fade-in', 'text-primary-dark dark:text-white', 'pb-2 pt-2')}
      >
        Blog
      </Heading1>
      <p className='animate-fade-in !delay-200'>
        Collection of my writings and thoughts on iOS development, AR technologies, and mobile engineering.
      </p>
      <div
        className={clsx(
          'animate-fade-in !delay-300',
          'grid justify-items-center gap-8 md:grid-cols-2',
          'pt-6'
        )}
      >
        {blogPosts.map((post, index) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            datePublished={post.datePublished}
            minRead={post.minRead}
            slug={post.slug}
            isLocal={post.isLocal}
          />
        ))}
      </div>
    </Section>
  )
}
