import { lazy, Suspense, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import about from '@/_data/about/about.md'
import Preloader from '@/components/common/Preloader'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Navbar = lazy(() => import('@/components/layouts/Navbar'))
const About = lazy(() => import('@/components/sections/About'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function AboutPage(): JSX.Element {
  const [content, setContent] = useState<string>('')

  useEffect((): void => {
    fetch(about as RequestInfo)
      .then((response: Response): Promise<string> => response.text())
      .then((text: string): void => {
        setContent(text)
        localStorage.about = text
      })
      .catch((): void => setContent('Failed to load content. Please reload the page!'))
  }, [content])

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
          <Navbar />
          <About children={content} />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
