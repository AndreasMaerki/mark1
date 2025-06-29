import { lazy, useState, useEffect } from 'react'
import clsx from 'clsx'
import useEventListener from '@/hooks/useEventListener'

// Direct import for IconButton since it's small and critical
import IconButton from '@/components/common/reusable/button/IconButton'
const ArrowUpFillIcon = lazy(() => import('remixicon-react/ArrowUpFillIcon'))

const SCROLL_OFFSET = 120

export default function ScrollToTopFAB(): JSX.Element {
  const [isButtonVisible, setButtonVisible] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  // Check if we're on mobile to adjust positioning
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollToTop = (): void => {
    window.scrollTo(0, 0)
  }

  useEventListener('scroll', (): void => {
    const { scrollY, innerHeight } = window
    const { scrollHeight } = document.documentElement
    setButtonVisible(
      scrollY + SCROLL_OFFSET > innerHeight && scrollY + innerHeight < scrollHeight - SCROLL_OFFSET
    )
  })

  return (
    <div className={clsx(
      'fixed right-0 z-40 transition-all duration-300 ease-in-out',
      // Adjust positioning based on mobile/desktop and bottom navigation
      isMobile 
        ? 'bottom-20 mr-4 mb-safe-area-inset-bottom' // Above bottom navigation on mobile
        : 'bottom-0 mr-8 mb-8' // Standard desktop positioning
    )}>
      <IconButton
        className={clsx('duration-300 transition-opacity', {
          'opacity-100': isButtonVisible,
          'opacity-0': !isButtonVisible,
          'pointer-events-none': !isButtonVisible
        })}
        icon={<ArrowUpFillIcon size={24} />}
        screenReaderText='Scroll to top'
        onClick={scrollToTop}
      />
    </div>
  )
}
