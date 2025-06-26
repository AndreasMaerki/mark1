/**
 * Content loader utility for importing markdown files
 * This keeps large text content out of component files
 */

// Import markdown content
import blogPostContent from '@/_data/blog-post-argeotracking.md?raw'

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
    case 'argeotracking-analysis':
      return {
        slug: 'argeotracking-analysis',
        title: 'Building ARGeoTracking: Bridging Real World Coordinates with Augmented Reality',
        excerpt: 'A deep dive into the sophisticated engineering required to accurately translate GPS coordinates into AR world space coordinates, exploring the challenges of sensor fusion and coordinate system transformations.',
        datePublished: 'December 2024',
        minRead: 8,
        content: blogPostContent,
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
      slug: 'argeotracking-analysis',
      title: 'ARGeoTracking: Bridging GPS and AR Coordinates',
      excerpt: 'A deep dive into the sophisticated engineering required to accurately translate GPS coordinates into AR world space coordinates, exploring the challenges of sensor fusion and coordinate system transformations.',
      datePublished: 'June 06, 2025',
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
    case 'argeotracking-analysis':
      return {
        title: 'Building ARGeoTracking: AR Coordinate Transformation | Andreas Maerki',
        description: 'Deep dive into the technical challenges of combining augmented reality with real-world GPS coordinates. Analysis of compass stabilization, coordinate transformations, and AR development.',
        author: 'Andreas Maerki',
        publishedTime: '2024-12-18',
        keywords: ['iOS development', 'ARKit', 'RealityKit', 'GPS', 'augmented reality', 'coordinate transformation', 'Swift', 'CoreLocation', 'compass stabilization']
      }
    default:
      return null
  }
} 