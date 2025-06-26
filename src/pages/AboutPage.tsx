import { lazy, Suspense } from 'react'
import useDocumentTitle from '@/hooks/useDocumentTitle'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const About = lazy(() => import('@/components/sections/About'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function AboutPage(): JSX.Element {
  useDocumentTitle({
    title: 'About - Andreas Maerki | iOS Developer Journey & Expertise',
    description: 'Learn about Andreas Maerki\'s 10+ year journey in iOS development, specializing in Swift, SwiftUI, and creating exceptional mobile experiences.',
    keywords: 'iOS Developer, Swift Developer, SwiftUI, Mobile Development, iOS Apps, About Andreas Maerki',
    canonical: 'https://andreasmaerki.dev/about'
  })

  return (
    <Suspense>
      <PageWrapper>
        <About />
        <Footer />
      </PageWrapper>
    </Suspense>
  )
}
