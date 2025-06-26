import { lazy } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import { getAboutContent } from '@/utils/contentLoader'

const Heading1 = lazy(() => import('@/components/common/reusable/heading/Heading1'))
const Heading2 = lazy(() => import('@/components/common/reusable/heading/Heading2'))
const Heading3 = lazy(() => import('@/components/common/reusable/heading/Heading3'))
const Badge = lazy(() => import('@/components/common/reusable/Badge'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink'))
const Section = lazy(() => import('@/components/layouts/Section'))
const ReactMarkdown = lazy(() => import('react-markdown'))

export default function About(): JSX.Element {
  const { animationClass } = useFadeInMounted()
  
  // Get about content from content loader
  const aboutContent = getAboutContent()

  return (
    <Section
      id='about'
      className={clsx(
        'mx-auto max-w-4xl',
        animationClass,
        'relative'
      )}
    >
      {/* Subtle background effect without grid duplication */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-50 blur-3xl transform translate-y-12" />
      
      <div className="relative z-10">
        <div className='[&>*]:animate-fade-in md:px-0 [&_p]:text-muted-dark [&_p]:dark:text-muted'>
          <ReactMarkdown
            components={{
              h1: ({ children }) => <Heading1 className='mb-8 text-center'>{children}</Heading1>,
              h2: ({ children }) => <Heading2 className='mb-6 mt-12'>{children}</Heading2>,
              h3: ({ children }) => <Heading3 className='mb-4 mt-8'>{children}</Heading3>,
              a: ({ href, children }) => <InlineLink href={href || '#'}>{children}</InlineLink>,
              ul: ({ children }) => (
                <ul className='mb-8 flex flex-wrap gap-2'>{children}</ul>
              ),
              li: ({ children }) => (
                <li>
                  <Badge>{children}</Badge>
                </li>
              )
            }}
          >
            {aboutContent}
          </ReactMarkdown>
        </div>
      </div>
    </Section>
  )
}
