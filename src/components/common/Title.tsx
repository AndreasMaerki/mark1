import { Link } from 'react-router-dom'
import clsx from 'clsx'

interface TitleProps {
  size?: string | 'sm'
}

export default function Title({ size }: TitleProps): JSX.Element {
  const textSize = (): string => {
    if (size === 'lg') {
      return 'text-2xl md:text-3xl'
    }
    return 'text-xl'
  }

  return (
    <Link
      to='/'
      className='title'
    >
      <p className={clsx('pb-0 font-light uppercase', textSize())}>
        MARK1<span className='font-bold'>SOLUTIONS</span>
      </p>
    </Link>
  )
}