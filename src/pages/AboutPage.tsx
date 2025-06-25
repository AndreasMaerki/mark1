import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const About = lazy(() => import('@/components/sections/About'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function AboutPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>About | Andreas Maerki</title>
        <meta
          name='description'
          content='Learn the journey of Andreas Maerki, a Senior iOS Developer with 10+ years of experience developing mobile applications using Swift, SwiftUI, and UIKit for retail and e-commerce platforms.'
        />
        <link
          rel='canonical'
          href='https://andreasmaerki.dev/about'
        />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <About />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
