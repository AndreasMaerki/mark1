import { lazy, Suspense } from 'react'
import useDocumentTitle from '@/hooks/useDocumentTitle'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Blog = lazy(() => import('@/components/sections/Blog'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function BlogPage(): JSX.Element {
  useDocumentTitle({
    title: 'Blog - Andreas Maerki | iOS Development Insights & Tutorials',
    description: 'Read Andreas Maerki\'s thoughts on iOS development, Swift programming, mobile architecture, and industry insights from a senior iOS developer.',
    keywords: 'iOS Blog, Swift Tutorials, Mobile Development, iOS Programming, SwiftUI Guides, iOS Developer Blog',
    canonical: 'https://andreasmaerki.dev/blog'
  })

  return (
    <Suspense>
      <PageWrapper>
        <Blog />
        <Footer />
      </PageWrapper>
    </Suspense>
  )
}
