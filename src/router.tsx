import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import BlogPage from '@/pages/BlogPage'
import AboutPage from '@/pages/AboutPage'
import ProjectPage from '@/pages/ProjectPage'
import NotFoundPage from '@/pages/NotFoundPage'
import Preloader from '@/components/common/Preloader'

const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'))
const TranceGuidePage = lazy(() => import('@/pages/TranceGuidePage'))
const TranceGuidePrivacyPage = lazy(() => import('@/pages/TranceGuidePrivacyPage'))

export default function Router(): JSX.Element {
  const location = useLocation()

  return (
    <Suspense fallback={<Preloader />}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:slug' element={<BlogPostPage />} />
        <Route path='/projects' element={<ProjectPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/tranceguide' element={<TranceGuidePage />} />
        <Route path='/tranceguide-privacy' element={<TranceGuidePrivacyPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}
