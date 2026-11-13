import clsx from 'clsx'

interface CardProps {
  id?: string
  className?: string
  children?: React.ReactNode
}

export default function Card({ className, children }: CardProps): JSX.Element {
  return (
    <div
      className={clsx(
        'group',
        'w-full',
        'transform duration-300',
        'rounded-2xl border border-slate-500/20 dark:border-slate-600/30',
        'bg-slate-100/20 dark:bg-slate-600/20',
        'hover:bg-slate-100/30 dark:hover:bg-slate-600/30',
        'p-4 sm:p-6',
        className
      )}
    >
      {children}
    </div>
  )
}