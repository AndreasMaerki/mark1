import { lazy, Suspense } from 'react'
import useDocumentTitle from '@/hooks/useDocumentTitle'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Projects = lazy(() => import('@/components/sections/Projects'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function ProjectPage(): JSX.Element {
  useDocumentTitle({
    title: 'Projects - Andreas Maerki | iOS App Portfolio & Development Work',
    description: 'Explore Andreas Maerki\'s iOS development portfolio featuring Swift applications, SwiftUI projects, and mobile solutions for various industries.',
    keywords: 'iOS Projects, Swift Apps, Mobile Portfolio, iOS Development Work, SwiftUI Applications, iPhone Apps',
    canonical: 'https://andreasmaerki.dev/projects'
  })

  return (
    <Suspense>
      <PageWrapper>
        <Projects />
        <Footer />
      </PageWrapper>
    </Suspense>
  )
}
