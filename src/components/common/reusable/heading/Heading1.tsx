import clsx from 'clsx'

interface Heading1Props {
  id?: string
  className?: string
  children?: React.ReactNode
}

export default function Heading1({ id, className, children }: Heading1Props): JSX.Element {
  return (
    <h1
      id={id}
      className={clsx(
        className,
        'py-8',
        'text-[1.75rem] font-bold leading-8 md:text-4xl',
        'font-extrabold tracking-tight'
      )}
    >
      {children}
    </h1>
  )
}