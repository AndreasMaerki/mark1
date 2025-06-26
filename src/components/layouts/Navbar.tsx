import { lazy, useEffect, useState, useRef } from 'react'
import clsx from 'clsx'
import Dropdown from '@/components/common/Dropdown'

// Keep lazy loading for complex components
const Menu3FillIcon = lazy(() => import('remixicon-react/Menu3FillIcon'))
const MatrixEffect = lazy(() => import('@/components/common/reusable/MatrixEffect'))

// Direct imports for small, critical components
import IconButton from '@/components/common/reusable/button/IconButton'
import NavLinks from '@/components/common/NavLinks'
import ThemeSwitcher from '@/components/common/ThemeSwitcher'
import Title from '@/components/common/Title'
import MatrixButton from '@/components/common/reusable/button/MatrixButton'

export default function Navbar(): JSX.Element {
  const [isMounted, setIsMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [toggle, setToggle] = useState<boolean>(false)
  const [matrixActive, setMatrixActive] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  // Consolidate all window event listeners and mounting logic
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    
    // Set initial values
    handleResize()
    handleScroll()
    
    // Mount animation timer
    const mountTimer = setTimeout(() => setIsMounted(true), 100)
    
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      clearTimeout(mountTimer)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close dropdown when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setToggle(false)
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setToggle(false)
      }
    }

    if (toggle) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [toggle])

  const onThemeButtonClick = (): void => setToggle(!toggle)
  const closeDropdown = (): void => setToggle(false)
  const toggleMatrix = (): void => setMatrixActive(!matrixActive)

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 z-50 w-full transition-all duration-300',
          'backdrop-blur-md bg-light/80 dark:bg-dark/80',
          isScrolled 
            ? 'shadow-lg shadow-purple-500/10' 
            : 'shadow-sm shadow-purple-500/5'
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
            {isMobile && (
              <div className='relative' ref={dropdownRef}>
                <IconButton
                  icon={<Menu3FillIcon size={20} />}
                  screenReaderText='Toggle dropdown'
                  onClick={onThemeButtonClick}
                />
                {toggle && <Dropdown onItemClick={closeDropdown} />}
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
      
      {/* Matrix Effect Overlay */}
      <MatrixEffect isActive={matrixActive} />
    </>
  )
}
