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
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 640)
  const [toggle, setToggle] = useState<boolean>(false)

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
        isScrolled 
          ? 'backdrop-blur-md bg-light/80 dark:bg-dark/80 shadow-lg shadow-purple-500/5' 
          : 'backdrop-blur-xl'
      )}
    >
      <div className='container flex flex-wrap items-center justify-between py-4 xl:max-w-screen-xl'>
        <Title size='sm' />
        <div className='flex items-center space-x-2 sm:space-x-6'>
          {!isMobile && <NavLinks />}
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
          {isMounted && <ThemeSwitcher />}
        </div>
      </div>
    </nav>
  )
}
