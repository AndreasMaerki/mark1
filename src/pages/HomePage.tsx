import { lazy, Suspense } from 'react'
import useDocumentTitle from '@/hooks/useDocumentTitle'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Hero = lazy(() => import('@/components/sections/Hero'))
const FeaturedProjects = lazy(() => import('@/components/sections/FeaturedProjects'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function HomePage(): JSX.Element {
  useDocumentTitle({
    title: 'Andreas Maerki - Senior iOS Developer | Swift & SwiftUI Expert',
    description: 'Experienced iOS developer specializing in Swift, SwiftUI, and mobile app development. 10+ years of crafting exceptional iOS applications.',
    keywords: 'iOS Developer, Swift, SwiftUI, Mobile App Development, iOS Apps, iPhone Developer',
    canonical: 'https://andreasmaerki.dev/',
    ogTitle: 'Andreas Maerki - Senior iOS Developer',
    ogDescription: 'Experienced iOS developer specializing in Swift, SwiftUI, and mobile app development.',
    ogType: 'website'
  })

  return (
    <Suspense>
      <PageWrapper>
        <Hero />
        <FeaturedProjects />
        <Footer />
      </PageWrapper>
    </Suspense>
  )
}
