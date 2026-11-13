import clsx from 'clsx'
import socialList from '@/_data/social'

interface SocialProps {
  name: string
  url: string
  icon: JSX.Element
}

interface SocialMediaLinksProps {
  id?: string
  className?: string
  children?: React.ReactNode
}

export default function SocialMediaLinks({ className }: SocialMediaLinksProps): JSX.Element {
  const social = socialList.map(
    (item: SocialProps, index: number): JSX.Element => (
      <li key={index}>
        <a
          href={item.url}
          target='_blank'
          rel='noreferrer'
          aria-label={item.name}
        >
          {item.icon}
        </a>
      </li>
    )
  )

  return (
    // prettier-ignore
    <ul
      className={clsx(
        className,
        'flex list-none items-center space-x-4'
      )}
    >
      {social}
    </ul>
  )
}