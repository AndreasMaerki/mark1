import { useEffect, useRef } from 'react'
import clsx from 'clsx'

interface HighlightTextProps {
  id?: string
  className?: string
  children?: React.ReactNode
}

export default function HighlightText({ children }: HighlightTextProps): JSX.Element {
  const ref = useRef<HTMLSpanElement>(null)
  const degreeRef = useRef<number>(0)

  useEffect((): (() => void) => {
    const interval = setInterval((): void => {
      degreeRef.current = (degreeRef.current + 15) % 360
      if (ref.current) {
        ref.current.style.backgroundImage = `linear-gradient(${degreeRef.current}deg, var(--tw-gradient-stops))`
      }
    }, 75)
    return (): void => clearInterval(interval)
  }, [])

  return (
    <span
      ref={ref}
      className={clsx(
        'from-fuchsia-700 to-indigo-700 bg-clip-text',
        'dark:from-fuchsia-400 dark:to-blue-400',
        'text-transparent transition'
      )}
    >
      {children}
    </span>
  )
}