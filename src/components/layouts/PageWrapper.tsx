import { useEffect } from 'react'
import clsx from 'clsx'

interface PageWrapperProps {
  id?: string
  className?: string
  children?: React.ReactNode
}

export default function PageWrapper({ className, children }: PageWrapperProps): JSX.Element {
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