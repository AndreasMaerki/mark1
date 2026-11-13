import clsx from 'clsx'

interface SectionProps {
  id?: string
  className?: string
  children?: React.ReactNode
  maxWidthClass?: string
}

export default function Section({
  id,
  className,
  maxWidthClass,
  children
}: SectionProps): JSX.Element {
  return (
    <section
      id={id || ''}
      className={clsx(
        className,
        maxWidthClass,
        {
          'xl:max-w-screen-xl': !maxWidthClass
        },
        'container py-6 sm:py-12'
      )}
    >
      {children}
    </section>
  )
}