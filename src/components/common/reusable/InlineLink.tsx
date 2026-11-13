import clsx from 'clsx'
import SlidingInUnderline from '@/components/common/reusable/SlidingInUnderline'

interface InlineLinkProps {
  id?: string
  className?: string
  children?: React.ReactNode
  href?: string
}

export default function InlineLink({ href, children }: InlineLinkProps): JSX.Element {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className={clsx(
        'cursor-pointer',
        'font-semibold duration-300',
        'text-primary-dark hover:text-primary-lighter-dark',
        'dark:text-primary-light dark:hover:text-primary-lighter'
      )}
    >
      <SlidingInUnderline>{children}</SlidingInUnderline>
    </a>
  )
}