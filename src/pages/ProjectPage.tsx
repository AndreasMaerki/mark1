import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Navbar = lazy(() => import('@/components/layouts/Navbar'))
const Projects = lazy(() => import('@/components/sections/Projects'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function AboutPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Projects by Andreas Maerki | iOS Development</title>
        <meta
          name='description'
          content="Explore Andreas Maerki's iOS development projects featuring Swift, SwiftUI, UIKit, and mobile app solutions!"
        />
        <link
          rel='canonical'
          href='https://andreasmaerki.dev/projects'
        />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <Projects />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
