import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import Preloader from '@/components/common/Preloader'
import clsx from 'clsx'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Footer = lazy(() => import('@/components/layouts/Footer'))
const Heading1 = lazy(() => import('@/components/common/reusable/heading/Heading1'))
const Heading2 = lazy(() => import('@/components/common/reusable/heading/Heading2'))
const Heading3 = lazy(() => import('@/components/common/reusable/heading/Heading3'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink'))
const Section = lazy(() => import('@/components/layouts/Section'))
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

One of the most sophisticated aspects of this implementation is the **heading stabilization system**. Rather than using raw compass readings, which can be notoriously unstable, the app implements a multi-sample averaging system:

\`\`\`swift
private func calculateStableCircularMean(headings: [Double]) -> Double {
    var sinSum = 0.0
    var cosSum = 0.0
    
    for heading in headings {
        let radians = heading * .pi / 180.0
        sinSum += sin(radians)
        cosSum += cos(radians)
    }
    
    let meanRadians = atan2(sinSum / Double(headings.count), cosSum / Double(headings.count))
    // ... normalize to 0-360 range
}
\`\`\`

This approach uses **circular statistics** to handle the unique challenge of compass bearings - where 359° and 1° are actually very close, not 358° apart. The system:

1. Collects 10-15 heading samples
2. Calculates a circular mean using trigonometric functions
3. Measures stability using circular standard deviation
4. Only proceeds when heading variation is below 15° threshold

## Coordinate System Transformations

The heart of the system lies in converting geographical coordinates to AR space coordinates. This involves several complex transformations:

### 1. Great Circle Bearing Calculation
\`\`\`swift
let dLon = lon2 - lon1
let y = sin(dLon) * cos(lat2)
let x = cos(lat1) * sin(lat2) - sin(lat1) * cos(lat2) * cos(dLon)
let bearing = atan2(y, x)
\`\`\`

### 2. AR Space Transformation
\`\`\`swift
let adjustedBearing = Float(bearing - (phoneTrueHeading.toRadians()))
let xPosition = distance * sin(adjustedBearing)
let zPosition = -distance * cos(adjustedBearing) // Negative for AR coordinate system
let yPosition = Float(targetLocation.altitude - phoneLocation.altitude)
\`\`\`

The implementation elegantly handles several coordinate system quirks:
- **Earth's curvature** through great circle calculations
- **Magnetic declination** by preferring true heading over magnetic heading
- **AR coordinate conventions** (negative Z for forward direction)
- **Altitude differences** for 3D positioning

## Technical Challenges Identified

Based on my analysis, the developers likely faced several significant challenges:

### 1. **GPS Accuracy Limitations**
GPS accuracy can vary from 3-5 meters in ideal conditions to 10+ meters in urban environments. The app addresses this by:
- Using \`kCLLocationAccuracyBest\` for maximum precision
- Implementing location change detection (10m threshold) that triggers heading recalibration
- Fixed distance positioning (100m) to minimize distance calculation errors

### 2. **Compass Instability**
Mobile device compasses are affected by magnetic interference, device orientation, and environmental factors. The solution:
- Multi-sample averaging with circular statistics
- Stability thresholds and quality indicators
- Compass calibration detection and recovery mechanisms
- Real-time quality feedback to users

### 3. **Coordinate System Complexity**
Converting between geographical, magnetic, and AR coordinate systems requires handling:
- Magnetic declination variations by location
- True vs. magnetic heading calculations  
- AR world space coordinate conventions
- **Earth's curvature** for long-distance calculations

### 4. **User Experience Challenges**
AR applications need to provide clear feedback about system state:
- Progress indicators for heading stabilization
- Quality meters for compass accuracy
- Debug overlays for troubleshooting
- Graceful error handling and recovery

## Innovative Solutions

The implementation showcases several innovative approaches:

### **Async/Await for Sensor Coordination**
\`\`\`swift
func placeLocationMarkerWithStableHeading() async {
    let stableHeading = try await locationManager.getStableHeading()
    // Place markers only after heading is stable
}
\`\`\`

Using modern Swift concurrency patterns to coordinate between location and heading acquisition creates a more reliable and user-friendly experience.

### **Billboard Components for AR Text**
\`\`\`swift
locationMarker.components.set(BillboardComponent())
\`\`\`

Ensuring location labels always face the camera regardless of user movement - a crucial UX detail for AR readability.

### **Fixed Distance Positioning**
Rather than trying to accurately represent real distances (which would put Zurich 100+ km away), the app normalizes all markers to 100m distance. This keeps objects visible and interactable while maintaining relative directional accuracy.

## Performance Considerations

The implementation shows thoughtful performance optimization:

- **Lazy initialization** of UI components
- **Fixed distance rendering** to avoid extreme far-field calculations  
- **Efficient text mesh generation** with proper bounds calculation
- **Minimal AR session configuration** (horizontal plane detection only)

## Real-World Applications

This technology foundation could power numerous applications:

- **Tourism apps** showing nearby points of interest
- **Navigation assistance** with AR waypoint overlays
- **Social location sharing** with AR friend indicators
- **Industrial applications** for equipment or hazard marking
- **Educational tools** for geographical or historical context

## Conclusion

The ARGeoTracking project demonstrates the sophisticated engineering required to bridge the gap between our physical world and augmented reality experiences. While the core concept seems straightforward, the implementation reveals layers of complexity around sensor fusion, coordinate transformations, and user experience design.

The app's approach to compass stabilization through circular statistics, its thoughtful handling of coordinate system transformations, and its focus on providing clear user feedback create a robust foundation for location-based AR applications.

For iOS developers venturing into AR and location services, this project provides an excellent reference for handling the intricate details that make the difference between a prototype and a production-ready application.

*What challenges do you think were the most difficult to solve in this implementation? Have you worked with similar coordinate transformation problems in your projects?*

---

*This analysis is based on examining the ARGeoTracking project codebase, which demonstrates advanced techniques in CoreLocation, ARKit, and RealityKit integration.*`

export default function ARGeoTrackingBlogPost(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Building ARGeoTracking: AR Coordinate Transformation | Andreas Maerki</title>
        <meta
          name='description'
          content='Deep dive into the technical challenges of combining augmented reality with real-world GPS coordinates. Analysis of compass stabilization, coordinate transformations, and AR development.'
        />
        <meta
          name='keywords'
          content='iOS development, ARKit, RealityKit, GPS, augmented reality, coordinate transformation, Swift, CoreLocation, compass stabilization'
        />
        <link
          rel='canonical'
          href='https://andreasmaerki.dev/blog/argeotracking-ar-coordinate-transformation'
        />
        <meta property="og:title" content="Building ARGeoTracking: AR Coordinate Transformation" />
        <meta property="og:description" content="Deep dive into the technical challenges of combining augmented reality with real-world GPS coordinates." />
        <meta property="og:type" content="article" />
        <meta property="article:author" content="Andreas Maerki" />
        <meta property="article:published_time" content="2024-12-18" />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Section className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <header className="mb-8">
                <div className="flex items-center gap-4 text-sm text-muted-dark dark:text-muted mb-6">
                  <time dateTime="2024-12-18">December 2024</time>
                  <span>•</span>
                  <span>8 min read</span>
                  <span>•</span>
                  <span>iOS Development</span>
                </div>
              </header>

              <div className="prose prose-lg dark:prose-invert max-w-none [&_p]:text-muted-dark [&_p]:dark:text-muted [&_p]:leading-relaxed [&_h1]:text-primary-dark [&_h1]:dark:text-white [&_h2]:text-primary-dark [&_h2]:dark:text-white [&_h3]:text-primary-dark [&_h3]:dark:text-white [&_strong]:text-primary-dark [&_strong]:dark:text-primary-light [&_code]:bg-gray-100 [&_code]:dark:bg-gray-800 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => <Heading1 className='mb-4 text-primary-dark dark:text-white'>{children}</Heading1>,
                    h2: ({ children }) => <Heading2 className='mb-6 mt-8 text-primary-dark dark:text-white'>{children}</Heading2>,
                    h3: ({ children }) => <Heading3 className='mb-4 mt-6 text-primary-dark dark:text-white'>{children}</Heading3>,
                    a: ({ href, children }) => <InlineLink href={href || '#'}>{children}</InlineLink>,
                    p: ({ children }) => <p className="text-muted-dark dark:text-muted leading-relaxed mb-4">{children}</p>,
                    strong: ({ children }) => <strong className="font-semibold text-primary-dark dark:text-primary-light">{children}</strong>,
                    code: ({ children }) => <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-800 dark:text-gray-200">{children}</code>,
                    pre: ({ children }) => <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-6">{children}</pre>,
                    ul: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-6">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-6">{children}</ol>,
                    li: ({ children }) => <li className="text-muted-dark dark:text-muted">{children}</li>
                  }}
                >
                  {markdownContent}
                </ReactMarkdown>
              </div>

              <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="mt-6">
                  <InlineLink href="/blog">← Back to Blog</InlineLink>
                </div>
              </footer>
            </motion.article>
          </Section>
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
} 