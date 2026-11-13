import clsx from 'clsx'

interface Heading2Props {
  id?: string
  className?: string
  children?: React.ReactNode
}

export default function Heading2({ id, className, children }: Heading2Props): JSX.Element {
  return (
    // prettier-ignore
    <h2
      id={id}
      className={clsx(
        className,
        'py-4',
        'text-2xl font-bold md:text-3xl'
      )}
    >
      {children}
    </h2>
  )
}