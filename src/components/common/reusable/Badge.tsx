import clsx from 'clsx'

interface BadgeProps {
  id?: string
  className?: string
  children?: React.ReactNode
  active?: boolean | false
  onClick?: () => void
}

export default function Badge({ className, children, active, onClick }: BadgeProps): JSX.Element {
  // prettier-ignore
  return (
    <div
      className={clsx(
        className,
        'relative overflow-hidden list-none rounded-lg px-2 py-1 my-auto text-sm font-semibold',
        'shadow-md transition-colors duration-300',
        'bg-primary-dark/10 dark:bg-primary-light/10',
        active ? 'text-white' : 'text-primary-dark/95 dark:text-primary-light/95',
        // Only add cursor and hover effects if onClick is provided (clickable)
        onClick && 'cursor-pointer',
        onClick && 'hover:bg-primary-dark/[0.175] hover:dark:bg-primary-light/[0.175]',
        onClick && active && 'hover:shadow-lg'
      )}
      onClick={onClick}
    >
      {/* Gradient is a separate layer so it can fade - background-image can't be transitioned */}
      <div
        className={clsx(
          'pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-opacity duration-300',
          active ? 'opacity-100' : 'opacity-0'
        )}
      />
      <span className='relative'>{children}</span>
    </div>
  )
}