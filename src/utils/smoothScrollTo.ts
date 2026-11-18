const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

export default function smoothScrollTo(targetY: number, duration = 600): void {
  const startY = window.scrollY
  const distance = targetY - startY
  if (distance === 0) return

  let startTime: number | null = null

  const step = (timestamp: number): void => {
    if (startTime === null) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY + distance * easeInOutCubic(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}