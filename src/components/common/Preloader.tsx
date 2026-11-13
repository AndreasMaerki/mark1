import { useState } from 'react'

export default function Preloader(): JSX.Element {
  const [isDark] = useState(() => document.documentElement.classList.contains('dark'))

  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className={`w-12 h-12 border-4 rounded-full animate-spin ${
          isDark
            ? 'border-gray-600 border-t-purple-400'
            : 'border-gray-300 border-t-purple-500'
        }`}
        aria-label="Loading..."
      />
    </div>
  )
}