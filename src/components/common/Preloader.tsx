import { useEffect, useState } from 'react'

export default function Preloader(): JSX.Element {
  const [isDark, setIsDark] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

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

    // Fade in after component mounts
    const timer = setTimeout(() => setIsVisible(true), 50)
    
    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {/* Inject CSS keyframes directly */}
      <style>{`
        @keyframes spinLoader {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spinner-rotate {
          animation: spinLoader 1s linear infinite;
        }
      `}</style>
      
      <div className={`flex h-screen items-center justify-center transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Simple spinning circle loader */}
        <div 
          className={`w-12 h-12 border-4 rounded-full transition-all duration-300 spinner-rotate ${
            isDark 
              ? 'border-gray-600 border-t-purple-400' 
              : 'border-gray-300 border-t-purple-500'
          } ${isVisible ? 'scale-100' : 'scale-95'}`}
          aria-label="Loading..."
        />
      </div>
    </>
  )
}
