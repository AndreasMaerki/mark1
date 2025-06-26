import clsx from 'clsx'
import BadgeProps from '@/types/components/BadgeProps'

export default function Badge({ className, children, active, onClick }: BadgeProps): JSX.Element {
  // prettier-ignore
  return (
    <div
      className={clsx(
        className,
        'list-none rounded-lg px-2 py-1 my-auto text-sm font-semibold',
        'shadow-md',
        {
          'bg-primary-dark/10 text-primary-dark/95 dark:bg-primary-light/10 dark:text-primary-light/95': !active,
          'bg-gradient-to-r from-purple-600 to-blue-600 text-white': active
        },
        // Only add cursor and hover effects if onClick is provided (clickable)
        onClick && 'cursor-pointer',
        onClick && 'hover:bg-primary-dark/[0.175] hover:dark:bg-primary-light/[0.175]',
        onClick && active && 'hover:shadow-lg'
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
