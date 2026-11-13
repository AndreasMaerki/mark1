/**
 * Content loader for blog posts.
 * Keeps large markdown content out of component files.
 */
import mvMvvmContent from '@/_data/blog-post-mv-mvvm-debate.md?raw'
import argeoTrackingContent from '@/_data/blog-post-argeotracking.md?raw'
import liquidGlassContent from '@/_data/blog-post-apple-liquid-glass.md?raw'
import swiftAndroidContent from '@/_data/blog-post-swift-android-workgroup.md?raw'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  datePublished: string
  minRead: number
  content: string
}

const blogPosts: BlogPost[] = [
  {
    slug: 'swift-android-workgroup',
    title: 'Swift on Android: The Game-Changing Workgroup That\'s Breaking Platform Barriers',
    excerpt: 'The Swift Android Workgroup announcement represents a seismic shift in mobile development. This isn\'t just another community project—it\'s Swift\'s bold step toward true cross-platform ubiquity with official Android support.',
    datePublished: 'July 11, 2025',
    minRead: 12,
    content: swiftAndroidContent
  },
  {
    slug: 'mv-mvvm-debate',
    title: 'MV vs. MVVM: The iOS Development Debate',
    excerpt: 'In the dynamic world of iOS development, a contentious debate has emerged between MV and MVVM architectures. Exploring the pros and cons of each pattern and why the best choice depends on your app\'s complexity and scale.',
    datePublished: 'June 29, 2025',
    minRead: 7,
    content: mvMvvmContent
  },
  {
    slug: 'apple-liquid-glass',
    title: 'Apple\'s Liquid Glass: Just a Redesign or a Strategic Vision?',
    excerpt: 'Apple\'s controversial Liquid Glass interface has sparked criticism, but could it be another case of initial resistance to groundbreaking design? An analysis of Apple\'s strategic vision for spatial computing.',
    datePublished: 'June 24, 2025',
    minRead: 6,
    content: liquidGlassContent
  },
  {
    slug: 'argeotracking-analysis',
    title: 'ARGeoTracking: Bridging GPS and AR Coordinates',
    excerpt: 'A deep dive into the sophisticated engineering required to accurately translate GPS coordinates into AR world space coordinates, exploring the challenges of sensor fusion and coordinate system transformations.',
    datePublished: 'June 04, 2025',
    minRead: 8,
    content: argeoTrackingContent
  }
]

export const getAllBlogPosts = (): BlogPost[] => blogPosts

export const getBlogPost = (slug: string): BlogPost | null =>
  blogPosts.find((post) => post.slug === slug) ?? null
