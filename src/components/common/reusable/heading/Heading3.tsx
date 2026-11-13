import clsx from 'clsx'

interface Heading3Props {
  id?: string
  className?: string
  children?: React.ReactNode
}

export default function Heading3({ id, className, children }: Heading3Props): JSX.Element {
  return (
    // prettier-ignore
    <h3
      id={id}
      className={clsx(
        className,
        'pb-4',
        'font-semibold text-lg'
      )}
    >
      {children}
    </h3>
  )
}