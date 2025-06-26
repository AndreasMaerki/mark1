import { useState, useEffect } from 'react'

export default function useFadeInMounted(): {
  animationClass: Record<string, boolean>
} {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    // Simple timeout to trigger fade-in animation
    const timer = setTimeout(() => {
      setMounted(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  const animationClass = {
    'animate-start': mounted
  }

  return { animationClass }
}
