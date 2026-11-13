import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Router from '@/router'
import Navbar from '@/components/layouts/Navbar'
import ScrollToTopFAB from '@/components/common/ScrollToTopFAB'
import Spotlight from '@/components/common/reusable/Spotlight'

export default function App(): JSX.Element {
  const navigate = useNavigate()
  const location = useLocation()
  
  useEffect((): void => {
    // Handle SPA redirects from 404.html
    const storedRedirect = sessionStorage.getItem('spa-redirect')
    if (storedRedirect && location.pathname === '/') {
      sessionStorage.removeItem('spa-redirect')
      // Navigate to the intended path
      navigate(storedRedirect, { replace: true })
    }
  }, [navigate, location])

  return (
    <>
      {/* Persistent background that never fades - stays during all transitions */}
      <div className="fixed inset-0 bg-overlay dark:bg-overlay-dark z-0">
        {/* Spotlight effects - persistent across page changes */}
        <div className="absolute inset-0 pointer-events-none">
          <Spotlight
            className="-top-20 -left-20 h-[120vh] w-[60vw] opacity-40 dark:opacity-20"
            fill="rgb(139, 92, 246)"
          />
          <Spotlight
            className="top-40 -left-40 h-[80vh] w-[40vw] opacity-30 dark:opacity-15"
            fill="rgb(59, 130, 246)"
          />
          <Spotlight 
            className="-top-40 left-20 h-[60vh] w-[30vw] opacity-20 dark:opacity-10" 
            fill="rgb(168, 85, 247)" 
          />
        </div>
        {/* Persistent grid background */}
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] pointer-events-none" />
      </div>

      {/* Persistent Navbar */}
      <Navbar />
      
      {/* Page content with transitions */}
      <div className="relative z-10">
        <Router />
      </div>
      
      <ScrollToTopFAB />
    </>
  )
}