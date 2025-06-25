import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { lazy, useEffect } from 'react'

const Heading1 = lazy(() => import('@/components/common/reusable/heading/Heading1'))

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

  // For now, we only have one blog post - ARGeoTracking
  if (slug !== 'argeotracking-analysis') {
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

  const blogContent = `
Recently, I had the opportunity to analyze a fascinating iOS project that demonstrates the intricate challenge of combining augmented reality with real-world geographical coordinates. The ARGeoTracking app represents a sophisticated solution to one of AR development's most complex problems: accurately placing virtual objects in AR space based on their real-world GPS coordinates.

At its heart, ARGeoTracking tackles a fundamental problem in location-based AR applications: **How do you accurately translate GPS coordinates into AR world space coordinates?** This seemingly simple question opens up a world of technical complexity involving multiple coordinate systems, sensor fusion, and real-world precision limitations.

The app demonstrates this by placing location markers for Swiss cities (Zurich and Basel) in the AR environment, positioned relative to the user's current location and orientation.

The project follows a clean, modular SwiftUI architecture with several key components:

- **LocationManager**: Handles GPS positioning and compass heading stabilization
- **CustomARView**: Manages ARKit integration and coordinate transformations  
- **ARLocation**: Data model representing geographical locations in AR space
- **UI Components**: Progress indicators and debug overlays for user feedback

One of the most sophisticated aspects of this implementation is the **heading stabilization system**. Rather than using raw compass readings, which can be notoriously unstable, the app implements a multi-sample averaging system using **circular statistics** to handle the unique challenge of compass bearings - where 359° and 1° are actually very close, not 358° apart.

The system:

1. Collects 10-15 heading samples
2. Calculates a circular mean using trigonometric functions
3. Measures stability using circular standard deviation
4. Only proceeds when heading variation is below 15° threshold

The heart of the system lies in converting geographical coordinates to AR space coordinates. This involves several complex transformations including great circle bearing calculations, and the implementation elegantly handles several coordinate system quirks:

- **Earth's curvature** through great circle calculations
- **Magnetic declination** by preferring true heading over magnetic heading
- **AR coordinate conventions** (negative Z for forward direction)
- **Altitude differences** for 3D positioning

Based on my analysis, the developers likely faced several significant challenges:

**GPS Accuracy Limitations**: GPS accuracy can vary from 3-5 meters in ideal conditions to 10+ meters in urban environments. The app addresses this by using \`kCLLocationAccuracyBest\` for maximum precision and implementing location change detection that triggers heading recalibration.

**Compass Instability**: Mobile device compasses are affected by magnetic interference, device orientation, and environmental factors. The solution includes multi-sample averaging with circular statistics, stability thresholds and quality indicators, and compass calibration detection.

**Coordinate System Complexity**: Converting between geographical, magnetic, and AR coordinate systems requires handling magnetic declination variations, true vs. magnetic heading calculations, AR world space coordinate conventions, and Earth's curvature for long-distance calculations.

**User Experience Challenges**: AR applications need to provide clear feedback about system state through progress indicators, quality meters, debug overlays, and graceful error handling.

The implementation showcases several innovative approaches including using modern Swift concurrency patterns (async/await) to coordinate between location and heading acquisition, billboard components for AR text that always face the camera, and fixed distance positioning that keeps objects visible while maintaining directional accuracy.

The implementation shows thoughtful performance optimization through lazy initialization of UI components, fixed distance rendering to avoid extreme far-field calculations, efficient text mesh generation with proper bounds calculation, and minimal AR session configuration.

This technology foundation could power numerous applications including tourism apps showing nearby points of interest, navigation assistance with AR waypoint overlays, social location sharing with AR friend indicators, industrial applications for equipment or hazard marking, and educational tools for geographical or historical context.

The ARGeoTracking project demonstrates the sophisticated engineering required to bridge the gap between our physical world and augmented reality experiences. While the core concept seems straightforward, the implementation reveals layers of complexity around sensor fusion, coordinate transformations, and user experience design.

The app's approach to compass stabilization through circular statistics, its thoughtful handling of coordinate system transformations, and its focus on providing clear user feedback create a robust foundation for location-based AR applications.

For iOS developers venturing into AR and location services, this project provides an excellent reference for handling the intricate details that make the difference between a prototype and a production-ready application.
`

  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.trim().startsWith('- **')) {
        // Handle bullet points
        const items = paragraph.split('\n- **').map(item => item.trim())
        return (
          <ul key={index} className="list-disc list-inside space-y-2 ml-4 mb-6">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-700 dark:text-muted">
                {item.replace(/^\*\*/, '').replace(/\*\*:/, ':')}
              </li>
            ))}
          </ul>
        )
      } else if (paragraph.match(/^\d+\./)) {
        // Handle numbered lists
        const items = paragraph.split(/\n\d+\./).map(item => item.trim()).filter(Boolean)
        return (
          <ol key={index} className="list-decimal list-inside space-y-2 ml-4 mb-6">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-700 dark:text-muted">
                {item}
              </li>
            ))}
          </ol>
        )
      } else if (paragraph.includes('**') && paragraph.includes(':')) {
        // Handle bold headers with descriptions
        const parts = paragraph.split('**')
        return (
          <div key={index} className="mb-4">
            {parts.map((part, partIndex) => {
              if (partIndex % 2 === 1) {
                return <strong key={partIndex} className="font-semibold text-primary dark:text-primary-light">{part}</strong>
              } else {
                return <span key={partIndex} className="text-gray-700 dark:text-muted">{part}</span>
              }
            })}
          </div>
        )
      } else if (paragraph.includes('`')) {
        // Handle code snippets
        const parts = paragraph.split('`')
        return (
          <p key={index} className="text-gray-700 dark:text-muted mb-6 leading-relaxed">
            {parts.map((part, partIndex) => {
              if (partIndex % 2 === 1) {
                return <code key={partIndex} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-800 dark:text-gray-200">{part}</code>
              } else {
                return <span key={partIndex}>{part}</span>
              }
            })}
          </p>
        )
      } else {
        // Regular paragraphs
        return (
          <p key={index} className="text-gray-700 dark:text-muted leading-relaxed mb-6">
            {paragraph.trim()}
          </p>
        )
      }
    })
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen bg-white dark:bg-primary-dark"
    >
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
      <article className="container mx-auto px-6 py-12 max-w-4xl">
        <header className="mb-12">
          <Heading1 className="text-4xl md:text-5xl text-primary-dark dark:text-white mb-6">
            ARGeoTracking: Bridging GPS and AR Coordinates
          </Heading1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-muted">
            <time>June 06, 2025</time>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span>iOS Development</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {renderContent(blogContent)}
          
          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700/20">
            <p className="text-sm text-gray-600 dark:text-muted italic mb-4">
              This analysis is based on examining the ARGeoTracking project codebase, which demonstrates advanced techniques in CoreLocation, ARKit, and RealityKit integration.
            </p>
          </footer>
        </div>
      </article>
    </motion.div>
  )
} 