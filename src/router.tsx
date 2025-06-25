import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomePage from '@/pages/HomePage'
import BlogPage from '@/pages/BlogPage'
import AboutPage from '@/pages/AboutPage'
import ProjectPage from '@/pages/ProjectPage'
import NotFoundPage from '@/pages/NotFoundPage'
import ARGeoTrackingBlogPost from '@/pages/ARGeoTrackingBlogPost'

export default function Router(): JSX.Element {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/blog'
          element={<BlogPage />}
        />
        <Route
          path='/blog/argeotracking-ar-coordinate-transformation'
          element={<ARGeoTrackingBlogPost />}
        />
        <Route
          path='/projects'
          element={<ProjectPage />}
        />
        <Route
          path='/about'
          element={<AboutPage />}
        />
        <Route
          path='/*'
          element={<NotFoundPage />}
        />
      </Routes>
    </AnimatePresence>
  )
}
