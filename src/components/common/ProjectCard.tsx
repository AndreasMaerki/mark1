import { lazy } from 'react'
import clsx from 'clsx'
import ProjectProps from '@/types/components/ProjectProps'
import LinkProps from '@/types/LinkProps'

const Badge = lazy(() => import('@/components/common/reusable/Badge'))
const Card = lazy(() => import('@/components/common/reusable/Card'))
const Heading3 = lazy(() => import('@/components/common/reusable/heading/Heading3'))

export default function ProjectCard({
  title,
  description,
  techStacks,
  links
}: ProjectProps): JSX.Element {
  const techStacksEntry = techStacks.map(
    (techStack: string, index: number): JSX.Element => (
      <Badge
        key={index}
        className={clsx(
          'mr-2 last-of-type:mr-0',
          'text-base font-medium text-primary-dark dark:text-primary-light',
          'hover:scale-105 transition-transform duration-200'
        )}
      >
        {techStack}
      </Badge>
    )
  )

  const linksEntry = links.map(
    (link: LinkProps, index: number): JSX.Element => (
      <li
        key={index}
        className='z-10'
      >
        <a
          href={link.url}
          target='_blank'
          rel='noreferrer'
          aria-label={link.label}
          className="hover:scale-110 transition-transform duration-200 hover:text-purple-400"
        >
          {link.icon}
        </a>
      </li>
    )
  )

  return (
    <Card className={clsx(
      'flex flex-col justify-between h-full',
      'hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300',
      'hover:-translate-y-1 group',
      'border border-transparent hover:border-purple-500/20'
    )}>
      <header>
        <Heading3>
          <a
            href={
              links.find(({ label }) => label === 'Source code')?.url ??
              links.find(({ label }) => label === 'Live')?.url
            }
            className={clsx(
              'no-default z-0',
              'group-hover:text-primary-dark group-hover:dark:text-primary-light',
              'transition-colors duration-200'
            )}
            target='_blank'
            rel='noreferrer'
          >
            {title}
          </a>
        </Heading3>
        <p className='text-muted-dark dark:text-muted'>{description}</p>
      </header>
      <footer>
        <div className='mb-6 flex flex-wrap'>{techStacksEntry}</div>
        <ul className='flex space-x-3'>{linksEntry}</ul>
      </footer>
    </Card>
  )
}
