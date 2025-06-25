import { lazy } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'

const Heading1 = lazy(() => import('@/components/common/reusable/heading/Heading1'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink'))
const BlogCard = lazy(() => import('@/components/common/BlogCard'))
const Section = lazy(() => import('@/components/layouts/Section'))

export default function Blog(): JSX.Element {
  const { animationClass } = useFadeInMounted()

  const blogPosts = [
    {
      title: "ARGeoTracking: Bridging GPS and AR Coordinates",
      excerpt: "A deep dive into the sophisticated engineering required to accurately translate GPS coordinates into AR world space coordinates, exploring the challenges of sensor fusion and coordinate system transformations.",
      datePublished: "June 06, 2025",
      minRead: 8,
      slug: "argeotracking-analysis",
      isLocal: true
    }
    // Add more blog posts here in the future
  ]

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
            key={index}
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
