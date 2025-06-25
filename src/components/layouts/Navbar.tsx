import { lazy, useEffect, useState } from 'react'
import clsx from 'clsx'
import useMounted from '@/hooks/useMounted'
import useEventListener from '@/hooks/useEventListener'
import Dropdown from '@/components/common/Dropdown'

const Menu3FillIcon = lazy(() => import('remixicon-react/Menu3FillIcon'))
const IconButton = lazy(() => import('@/components/common/reusable/button/IconButton'))
const NavLinks = lazy(() => import('@/components/common/NavLinks'))
const ThemeSwitcher = lazy(() => import('@/components/common/ThemeSwitcher'))
const Title = lazy(() => import('@/components/common/Title'))

export default function Navbar(): JSX.Element {
  const isMounted = useMounted()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [toggle, setToggle] = useState<boolean>(false)
  
  // Initialize mobile state safely after mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 640)
  }, [])

  const handleWidthChange = (): void => setIsMobile(window.innerWidth < 640)
  useEventListener('resize', handleWidthChange)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const onThemeButtonClick = (): void => setToggle(!toggle)

  return (
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
            <div className='relative'>
              <IconButton
                icon={<Menu3FillIcon size={20} />}
                screenReaderText='Toggle dropdown'
                onClick={onThemeButtonClick}
              />
              {toggle && <Dropdown />}
            </div>
          )}
          <div className="flex items-center w-10 h-10 justify-center">
            {isMounted ? <ThemeSwitcher /> : <div className="w-10 h-10" />}
          </div>
        </div>
      </div>
    </nav>
  )
}
