/**
 * Content loader utility for importing markdown files
 * This keeps large text content out of component files
 */

// Import markdown content
import blogPostContent from '@/_data/blog-post-argeotracking.md?raw'
import liquidGlassContent from '@/_data/blog-post-apple-liquid-glass.md?raw'
import mvMvvmContent from '@/_data/blog-post-mv-mvvm-debate.md?raw'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  datePublished: string
  minRead: number
  content: string
  isLocal: boolean
}

export interface ContentMetadata {
  title: string
  description: string
  author: string
  publishedTime: string
  keywords: string[]
}

/**
 * Get blog post content by slug
 */
export const getBlogPost = (slug: string): BlogPost | null => {
  switch (slug) {
    case 'mv-mvvm-debate':
      return {
        slug: 'mv-mvvm-debate',
        title: 'MV vs. MVVM: The iOS Development Debate',
        excerpt: 'In the dynamic world of iOS development, a contentious debate has emerged between MV and MVVM architectures. Exploring the pros and cons of each pattern and why the best choice depends on your app\'s complexity and scale.',
        datePublished: 'June 29, 2025',
        minRead: 7,
        content: mvMvvmContent,
        isLocal: true
      }
    case 'argeotracking-analysis':
      return {
        slug: 'argeotracking-analysis',
        title: 'Building ARGeoTracking: Bridging Real World Coordinates with Augmented Reality',
        excerpt: 'A deep dive into the sophisticated engineering required to accurately translate GPS coordinates into AR world space coordinates, exploring the challenges of sensor fusion and coordinate system transformations.',
        datePublished: 'June 04, 2025',
        minRead: 8,
        content: blogPostContent,
        isLocal: true
      }
    case 'apple-liquid-glass':
      return {
        slug: 'apple-liquid-glass',
        title: 'Apple\'s Liquid Glass: Just a Redesign or Strategic a Vision?',
        excerpt: 'Apple\'s controversial Liquid Glass interface has sparked criticism, but could it be another case of initial resistance to groundbreaking design? An analysis of Apple\'s strategic vision for spatial computing and the future of human-machine interaction.',
        datePublished: 'June 24, 2025',
        minRead: 6,
        content: liquidGlassContent,
        isLocal: true
      }
    default:
      return null
  }
}

/**
 * Get all available blog posts
 */
export const getAllBlogPosts = (): BlogPost[] => {
  return [
    {
      slug: 'mv-mvvm-debate',
      title: 'MV vs. MVVM: The iOS Development Debate',
      excerpt: 'In the dynamic world of iOS development, a contentious debate has emerged between MV and MVVM architectures. Exploring the pros and cons of each pattern and why the best choice depends on your app\'s complexity and scale.',
      datePublished: 'June 29, 2025',
      minRead: 7,
      content: mvMvvmContent,
      isLocal: true
    },
    {
      slug: 'apple-liquid-glass',
      title: 'Apple\'s Liquid Glass: Just a Redesign or a Strategic Vision?',
      excerpt: 'Apple\'s controversial Liquid Glass interface has sparked criticism, but could it be another case of initial resistance to groundbreaking design? An analysis of Apple\'s strategic vision for spatial computing.',
      datePublished: 'June 24, 2025',
      minRead: 6,
      content: liquidGlassContent,
      isLocal: true
    },
    {
      slug: 'argeotracking-analysis',
      title: 'ARGeoTracking: Bridging GPS and AR Coordinates',
      excerpt: 'A deep dive into the sophisticated engineering required to accurately translate GPS coordinates into AR world space coordinates, exploring the challenges of sensor fusion and coordinate system transformations.',
      datePublished: 'June 04, 2025',
      minRead: 8,
      content: blogPostContent,
      isLocal: true
    }
  ]
}

/**
 * Get metadata for blog posts
 */
export const getBlogPostMetadata = (slug: string): ContentMetadata | null => {
  switch (slug) {
    case 'mv-mvvm-debate':
      return {
        title: 'MV vs. MVVM: The iOS Development Debate | Andreas Maerki',
        description: 'Exploring the contentious debate between MV and MVVM architectures in iOS development. Analysis of when to use each pattern, their pros and cons, and why architecture choice depends on app complexity.',
        author: 'Andreas Maerki',
        publishedTime: '2025-06-29',
        keywords: ['iOS development', 'MVVM', 'MV', 'SwiftUI', 'architecture patterns', 'software design', 'mobile development', 'clean architecture', 'separation of concerns', 'testability']
      }
    case 'argeotracking-analysis':
      return {
        title: 'Building ARGeoTracking: AR Coordinate Transformation | Andreas Maerki',
        description: 'Deep dive into the technical challenges of combining augmented reality with real-world GPS coordinates. Analysis of compass stabilization, coordinate transformations, and AR development.',
        author: 'Andreas Maerki',
        publishedTime: '2025-06-04',
        keywords: ['iOS development', 'ARKit', 'RealityKit', 'GPS', 'augmented reality', 'coordinate transformation', 'Swift', 'CoreLocation', 'compass stabilization']
      }
    case 'apple-liquid-glass':
      return {
        title: 'Apple\'s Liquid Glass: A Strategic Vision for the Future | Andreas Maerki',
        description: 'Analysis of Apple\'s controversial Liquid Glass interface and its strategic role in preparing for spatial computing, AR, and the future of human-machine interaction.',
        author: 'Andreas Maerki',
        publishedTime: '2025-06-24',
        keywords: ['Apple', 'Liquid Glass', 'UI design', 'spatial computing', 'Vision Pro', 'user interface', 'design strategy', 'cognitive science', 'accessibility', 'innovation']
      }
    default:
      return null
  }
} 