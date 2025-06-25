import { BallTriangle } from 'react-loader-spinner'
import { useEffect, useState } from 'react'

export default function Preloader(): JSX.Element {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check if dark mode is active
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    
    checkTheme()
    
    // Listen for theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])

  return (
    <div className='flex h-screen items-center justify-center bg-white dark:bg-primary-dark'>
      <BallTriangle
        height={80}
        width={80}
        radius={5}
        color={isDark ? "#c084fc" : "#a855f7"}
        ariaLabel="ball-triangle-loading"
        wrapperClass="preloader"
        visible={true}
      />
    </div>
  )
}
