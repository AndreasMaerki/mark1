import { useState } from 'react'

interface MatrixButtonProps {
  onToggle: () => void
  isActive: boolean
}

export default function MatrixButton({ onToggle, isActive }: MatrixButtonProps): JSX.Element {

  return (
    <button
      onClick={onToggle}
      className={`
        relative p-2 rounded-lg transition-all duration-300 group
        ${isActive 
          ? 'bg-purple-600/20 text-purple-300 border-purple-400/60' 
          : 'bg-slate-800/50 hover:bg-purple-600/10 text-slate-400 hover:text-purple-400 border-slate-600/30 hover:border-purple-500/50'
        }
        border
      `}
      title={isActive ? "Stop Matrix Effect" : "Start Matrix Effect"}
    >
      <div className="relative w-5 h-5">
        {/* Matrix-like icon */}
        <div className="absolute inset-0 grid grid-cols-3 gap-px">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`
                w-1 h-1 rounded-full transition-all duration-300
                ${isActive 
                  ? 'bg-purple-400 animate-pulse' 
                  : 'bg-current group-hover:bg-purple-400'
                }
              `}
              style={{
                animationDelay: `${i * 100}ms`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>
      </div>
    </button>
  )
} 