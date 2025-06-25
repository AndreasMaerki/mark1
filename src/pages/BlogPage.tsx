import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Blog = lazy(() => import('@/components/sections/Blog'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function BlogPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Blog | iOS Development Insights by Andreas Maerki</title>
        <meta
          name='description'
          content="Read Andreas Maerki's blog for iOS development insights. Learn about Swift, SwiftUI, mobile app development, AR, and geo-location tracking."
        />
        <link
          rel='canonical'
          href='https://andreasmaerki.dev/blog'
        />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Blog />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
