import clsx from 'clsx'
import BadgeProps from '@/types/components/BadgeProps'

export default function Badge({ className, children, active, onClick }: BadgeProps): JSX.Element {
  // prettier-ignore
  return (
    <div
      className={clsx(
        className,
        'list-none',
        {
          'bg-primary-dark/10 font-semibold text-primary-dark/95 dark:bg-primary-light/10 dark:text-primary-light/95': !active,
          'bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-lg scale-105 ring-2 ring-purple-400/50': active
        },
        'duration-300 hover:bg-primary-dark/[0.175] hover:dark:bg-primary-light/[0.175] transition-all',
        'rounded-lg px-2 py-1 my-auto text-sm cursor-pointer',
        active && 'hover:scale-110 hover:shadow-xl'
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
