import { lazy, useState } from 'react'
import clsx from 'clsx'
import useEventListener from '@/hooks/useEventListener'

// Direct import for IconButton since it's small and critical
import IconButton from '@/components/common/reusable/button/IconButton'
const ArrowUpFillIcon = lazy(() => import('remixicon-react/ArrowUpFillIcon'))

const SCROLL_OFFSET = 120

export default function ScrollToTopFAB(): JSX.Element {
  const [isButtonVisible, setButtonVisible] = useState<boolean>(false)

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEventListener('scroll', (): void => {
    const { scrollY, innerHeight } = window
    const { scrollHeight } = document.documentElement
    setButtonVisible(
      scrollY + SCROLL_OFFSET > innerHeight && scrollY + innerHeight < scrollHeight - SCROLL_OFFSET
    )
  })

  return (
    <div className='fixed bottom-0 right-0 mb-8 mr-8 z-50'>
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
