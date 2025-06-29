import { useEffect } from 'react'
import clsx from 'clsx'
import ComponentProps from '@/types/components/ComponentProps'

export default function PageWrapper({ className, children }: ComponentProps): JSX.Element {
  useEffect(() => {
    // Ensure scroll position is at top immediately when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={clsx(className, 'pt-18 min-h-screen relative mobile-bottom-nav-spacing')}>
      {/* Content with relative positioning for z-index stacking */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
