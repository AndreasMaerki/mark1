import { lazy, useEffect, useState, useCallback, useRef } from 'react'
import clsx from 'clsx'

// Keep lazy loading for complex components
const MatrixEffect = lazy(() => import('@/components/common/reusable/MatrixEffect'))

// Direct imports for small, critical components
import NavLinks from '@/components/common/NavLinks'
import ThemeSwitcher from '@/components/common/ThemeSwitcher'
import Title from '@/components/common/Title'
import MatrixButton from '@/components/common/reusable/button/MatrixButton'

export default function Navbar(): JSX.Element {
  const [isMounted, setIsMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [matrixActive, setMatrixActive] = useState<boolean>(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)
  
  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    const prevScrollY = lastScrollY.current
    
    // Update scroll state for styling
    setIsScrolled(currentScrollY > 10)
    
    // Hide/show navigation based on scroll direction
    if (currentScrollY < 100) {
      // Always show navigation near the top
      setIsNavVisible(true)
    } else if (Math.abs(currentScrollY - prevScrollY) < 5) {
      // Ignore small scroll movements to prevent jitter
      ticking.current = false
      return
    } else if (currentScrollY > prevScrollY && currentScrollY > 100) {
      // Scrolling down - hide navigation
      setIsNavVisible(false)
    } else if (currentScrollY < prevScrollY && currentScrollY > 100) {
      // Scrolling up - show navigation (only when not near top)
      setIsNavVisible(true)
    }
    
    lastScrollY.current = currentScrollY
    ticking.current = false
  }, [])

  // Consolidate all window event listeners and mounting logic
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(handleScroll)
        ticking.current = true
      }
    }
    
    // Set initial values
    handleResize()
    handleScroll()
    
    // Mount animation timer
    const mountTimer = setTimeout(() => setIsMounted(true), 100)
    
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', onScroll, { passive: true })
    
    return () => {
      clearTimeout(mountTimer)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [handleScroll])

  const toggleMatrix = (): void => setMatrixActive(!matrixActive)

  return (
    <>
      {/* Top Navigation - Desktop and Mobile Secondary Items */}
      <nav
        className={clsx(
          'fixed top-0 z-50 w-full transition-all duration-300 ease-in-out',
          'backdrop-blur-md bg-light/80 dark:bg-dark/80',
          isScrolled 
            ? 'shadow-lg shadow-purple-500/10' 
            : 'shadow-sm shadow-purple-500/5',
          // Hide/show based on scroll direction
          isNavVisible ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className='container flex flex-wrap items-center justify-between py-4 xl:max-w-screen-xl h-18'>
          <Title size='sm' />
          <div className='flex items-center space-x-2 sm:space-x-6 min-w-0'>
            {!isMobile && (
              <div className="flex items-center">
                <NavLinks />
              </div>
            )}

            <div className="flex items-center space-x-2">
              <MatrixButton onToggle={toggleMatrix} isActive={matrixActive} />
              <div className="flex items-center w-10 h-10 justify-center">
                {isMounted ? <ThemeSwitcher /> : <div className="w-10 h-10" />}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation - Mobile Primary Items */}
      {isMobile && (
        <nav
          className={clsx(
            'fixed bottom-0 left-0 right-0 z-50',
            'backdrop-blur-md bg-light/95 dark:bg-dark/95',
            'border-t border-gray-200/30 dark:border-gray-700/30',
            'shadow-lg shadow-purple-500/10',
            'transition-all duration-300 ease-in-out',
            // Safe area padding for iOS devices
            'pb-safe-area-inset-bottom',
            // Hide/show based on scroll direction
            isNavVisible ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          <div className="container mx-auto px-4 py-3">
            <NavLinks isMobile={true} />
          </div>
        </nav>
      )}
      
      {/* Matrix Effect Overlay */}
      <MatrixEffect isActive={matrixActive} />
    </>
  )
}
