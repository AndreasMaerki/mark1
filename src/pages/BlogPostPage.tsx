import { lazy, useEffect, Suspense } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Heading1 = lazy(() => import('@/components/common/reusable/heading/Heading1'))
const Heading2 = lazy(() => import('@/components/common/reusable/heading/Heading2'))
const Heading3 = lazy(() => import('@/components/common/reusable/heading/Heading3'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink'))
const ReactMarkdown = lazy(() => import('react-markdown'))

const markdownContent = `# Building ARGeoTracking: Bridging Real World Coordinates with Augmented Reality

*December 2024*

Recently, I had the opportunity to analyze a fascinating iOS project that demonstrates the intricate challenge of combining augmented reality with real-world geographical coordinates. The ARGeoTracking app represents a sophisticated solution to one of AR development's most complex problems: accurately placing virtual objects in AR space based on their real-world GPS coordinates.

## The Core Challenge

At its heart, ARGeoTracking tackles a fundamental problem in location-based AR applications: **How do you accurately translate GPS coordinates into AR world space coordinates?** This seemingly simple question opens up a world of technical complexity involving multiple coordinate systems, sensor fusion, and real-world precision limitations.

The app demonstrates this by placing location markers for Swiss cities (Zurich and Basel) in the AR environment, positioned relative to the user's current location and orientation.

## Architecture Overview

The project follows a clean, modular SwiftUI architecture with several key components:

- **LocationManager**: Handles GPS positioning and compass heading stabilization
- **CustomARView**: Manages ARKit integration and coordinate transformations  
- **ARLocation**: Data model representing geographical locations in AR space
- **UI Components**: Progress indicators and debug overlays for user feedback

## The Compass Stabilization Innovation

One of the most sophisticated aspects of this implementation is the **heading stabilization system**. Rather than using raw compass readings, which can be notoriously unstable, the app implements a multi-sample averaging system using **circular statistics** to handle the unique challenge of compass bearings - where 359° and 1° are actually very close, not 358° apart.

The system:

1. Collects 10-15 heading samples
2. Calculates a circular mean using trigonometric functions
3. Measures stability using circular standard deviation
4. Only proceeds when heading variation is below 15° threshold

## Coordinate System Transformations

The heart of the system lies in converting geographical coordinates to AR space coordinates. This involves several complex transformations including great circle bearing calculations, and the implementation elegantly handles several coordinate system quirks:

- **Earth's curvature** through great circle calculations
- **Magnetic declination** by preferring true heading over magnetic heading
- **AR coordinate conventions** (negative Z for forward direction)
- **Altitude differences** for 3D positioning

## Technical Challenges Identified

Based on my analysis, the developers likely faced several significant challenges:

### **GPS Accuracy Limitations**
GPS accuracy can vary from 3-5 meters in ideal conditions to 10+ meters in urban environments. The app addresses this by using \`kCLLocationAccuracyBest\` for maximum precision and implementing location change detection that triggers heading recalibration.

### **Compass Instability**
Mobile device compasses are affected by magnetic interference, device orientation, and environmental factors. The solution includes multi-sample averaging with circular statistics, stability thresholds and quality indicators, and compass calibration detection.

### **Coordinate System Complexity**
Converting between geographical, magnetic, and AR coordinate systems requires handling magnetic declination variations, true vs. magnetic heading calculations, AR world space coordinate conventions, and **Earth's curvature** for long-distance calculations.

### **User Experience Challenges**
AR applications need to provide clear feedback about system state through progress indicators, quality meters, debug overlays, and graceful error handling.

## Innovative Solutions

The implementation showcases several innovative approaches including using modern Swift concurrency patterns (async/await) to coordinate between location and heading acquisition, billboard components for AR text that always face the camera, and fixed distance positioning that keeps objects visible while maintaining directional accuracy.

## Performance Considerations

The implementation shows thoughtful performance optimization through lazy initialization of UI components, fixed distance rendering to avoid extreme far-field calculations, efficient text mesh generation with proper bounds calculation, and minimal AR session configuration.

## Real-World Applications

This technology foundation could power numerous applications including tourism apps showing nearby points of interest, navigation assistance with AR waypoint overlays, social location sharing with AR friend indicators, industrial applications for equipment or hazard marking, and educational tools for geographical or historical context.

## Conclusion

The ARGeoTracking project demonstrates the sophisticated engineering required to bridge the gap between our physical world and augmented reality experiences. While the core concept seems straightforward, the implementation reveals layers of complexity around sensor fusion, coordinate transformations, and user experience design.

The app's approach to compass stabilization through circular statistics, its thoughtful handling of coordinate system transformations, and its focus on providing clear user feedback create a robust foundation for location-based AR applications.

For iOS developers venturing into AR and location services, this project provides an excellent reference for handling the intricate details that make the difference between a prototype and a production-ready application.

---

*This analysis is based on examining the ARGeoTracking project codebase, which demonstrates advanced techniques in CoreLocation, ARKit, and RealityKit integration.*`

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
      <Suspense fallback={<div className="container mx-auto px-6 py-12 text-center">Loading...</div>}>
        <article className="container mx-auto px-6 py-12 max-w-4xl">
          <header className="mb-12">
            <div className="flex items-center gap-4 text-gray-600 dark:text-muted mb-6">
              <time>December 2024</time>
              <span>•</span>
              <span>8 min read</span>
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
              {markdownContent}
            </ReactMarkdown>
            
            <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700/20">
              <p className="text-sm text-gray-600 dark:text-muted italic mb-4">
                This analysis is based on examining the ARGeoTracking project codebase, which demonstrates advanced techniques in CoreLocation, ARKit, and RealityKit integration.
              </p>
            </footer>
          </div>
        </article>
      </Suspense>
    </motion.div>
  )
}