import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Navbar = lazy(() => import('@/components/layouts/Navbar'))
const Hero = lazy(() => import('@/components/sections/Hero'))
const FeaturedProjects = lazy(() => import('@/components/sections/FeaturedProjects'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function HomePage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Andreas Maerki | Senior iOS Developer & Swift Specialist</title>
        <meta
          name='description'
          content='Andreas Maerki is a Senior iOS Developer with 10+ years of experience specializing in Swift, SwiftUI, and mobile app development for retail and e-commerce platforms.'
        />
        <link
          rel='canonical'
          href='https://andreasmaerki.dev'
        />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <Hero />
          <FeaturedProjects />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
