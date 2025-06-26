import { lazy, Suspense } from 'react'
import clsx from 'clsx'
import { getAboutContent } from '@/utils/contentLoader'
import Preloader from '@/components/common/Preloader'
import useFadeInMounted from '@/hooks/useFadeInMounted'

// Lazy load ReactMarkdown to avoid blocking render
const ReactMarkdown = lazy(() => import('react-markdown'))

// Import all other components directly for better performance
import Section from '@/components/layouts/Section'
import Heading1 from '@/components/common/reusable/heading/Heading1'
import Heading2 from '@/components/common/reusable/heading/Heading2'
import Heading3 from '@/components/common/reusable/heading/Heading3'
import Badge from '@/components/common/reusable/Badge'
import InlineLink from '@/components/common/reusable/InlineLink'

export default function About(): JSX.Element {
  const { animationClass } = useFadeInMounted()
  
  // Get about content from content loader
  const aboutContent = getAboutContent()

  return (
    <Section
      id='about'
      className={clsx(animationClass, 'mx-auto max-w-4xl relative')}
    >
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-50 blur-3xl transform translate-y-12" />
      
      <div className="relative z-10 animate-fade-in">
        <div className='md:px-0 [&_p]:text-muted-dark [&_p]:dark:text-muted'>
          <Suspense fallback={<Preloader />}>
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
          </Suspense>
        </div>
      </div>
    </Section>
  )
}
