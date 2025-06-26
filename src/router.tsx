import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import BlogPage from '@/pages/BlogPage'
import AboutPage from '@/pages/AboutPage'
import ProjectPage from '@/pages/ProjectPage'
import NotFoundPage from '@/pages/NotFoundPage'
import BlogPostPage from '@/pages/BlogPostPage'

export default function Router(): JSX.Element {
  const location = useLocation()
  
  return (
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
        path='/blog/:slug'
        element={<BlogPostPage />}
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
  )
}
