import { useEffect, useRef, useState } from 'react'

interface MatrixEffectProps {
  isActive: boolean
}

export default function MatrixEffect({ isActive }: MatrixEffectProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isActive) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      setIsVisible(false)
      return
    }

    setIsVisible(true)
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to full viewport
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Matrix characters - numbers and some symbols
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?'
    const charArray = chars.split('')
    
    const fontSize = 24
    const columns = canvas.width / fontSize
    const drops: number[] = []
    const dropChars: string[] = [] // Store current character for each drop
    const dropCharTimers: number[] = [] // Timer for character changes

    // Initialize drops at random starting positions
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100)
      dropChars[i] = charArray[Math.floor(Math.random() * charArray.length)]
      dropCharTimers[i] = 0
    }

    const draw = () => {
      if (!isActive) return

      // No background darkening - clear previous frame completely for crisp text
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px 'Courier New', monospace`
      ctx.textAlign = 'center'

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize + fontSize / 2
        const y = drops[i] * fontSize

        // Only draw if character is visible on screen
        if (y > 0 && y < canvas.height + fontSize) {
          // Create trail effect with crisp text
          const trailLength = 15
          for (let j = 0; j < trailLength; j++) {
            const trailY = y - (j * fontSize)
            if (trailY > 0 && trailY < canvas.height) {
              // Calculate alpha for trail effect
              let alpha
              if (j === 0) {
                alpha = 1.0 // Front character - fully bright
              } else if (j < 3) {
                alpha = 0.8 // Next few characters bright
              } else {
                alpha = Math.max(0.1, (trailLength - j) / trailLength * 0.7)
              }
              
              ctx.fillStyle = `rgba(139, 92, 246, ${alpha})`
              ctx.fillText(dropChars[i], x, trailY)
            }
          }
        }

        // Update character occasionally (slower change)
        dropCharTimers[i]++
        if (dropCharTimers[i] > 15) { // Change character every 15 frames (slower)
          if (Math.random() > 0.7) { // Only 30% chance to change
            dropChars[i] = charArray[Math.floor(Math.random() * charArray.length)]
          }
          dropCharTimers[i] = 0
        }

        // Reset drop randomly or when it goes off screen
        if (y > canvas.height + fontSize && Math.random() > 0.985) {
          drops[i] = Math.floor(Math.random() * -20)
          dropChars[i] = charArray[Math.floor(Math.random() * charArray.length)]
        }

        // Move drop down slower
        if (Math.random() > 0.4) { // Only move 60% of the time for slower effect
          drops[i] += 0.4 // Even slower movement
        }
      }

      animationRef.current = requestAnimationFrame(draw)
    }

    draw()

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [isActive])

  if (!isActive && !isVisible) return <></>

  return (
    <div 
      className={`fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
} 