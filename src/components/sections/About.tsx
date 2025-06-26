import { lazy, Suspense, useState, useEffect } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { getAboutContent } from '@/utils/contentLoader'
import Preloader from '@/components/common/Preloader'

// Lazy load ReactMarkdown to avoid blocking render
const ReactMarkdown = lazy(() => import('react-markdown'))

// Import all other components directly for better Safari performance
import Section from '@/components/layouts/Section'
import Heading1 from '@/components/common/reusable/heading/Heading1'
import Heading2 from '@/components/common/reusable/heading/Heading2'
import Heading3 from '@/components/common/reusable/heading/Heading3'
import Badge from '@/components/common/reusable/Badge'
import InlineLink from '@/components/common/reusable/InlineLink'

export default function About(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false)
  const [isSafari, setIsSafari] = useState(false)
  
  // Get about content from content loader
  const aboutContent = getAboutContent()

  // Safari detection and visibility management
  useEffect(() => {
    // Detect Safari
    const userAgent = navigator.userAgent.toLowerCase()
    const isSafariBrowser = userAgent.includes('safari') && !userAgent.includes('chrome')
    setIsSafari(isSafariBrowser)
    
    // Show content immediately for Safari, with small delay for others
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, isSafariBrowser ? 0 : 50)
    
    return () => clearTimeout(timeout)
  }, [])

  const containerClasses = clsx(
    'relative z-10 transition-opacity duration-300 ease-out',
    isVisible ? 'opacity-100' : 'opacity-0'
  )

  // For Safari, use simple CSS animations and skip framer-motion entirely
  if (isSafari) {
    return (
      <Section
        id='about'
        className={clsx('mx-auto max-w-4xl relative')}
      >
        {/* Subtle background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-50 blur-3xl transform translate-y-12" />
        
        <div className={containerClasses}>
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

  // For non-Safari browsers, use framer-motion
  return (
    <Section
      id='about'
      className={clsx('mx-auto max-w-4xl relative')}
    >
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-50 blur-3xl transform translate-y-12" />
      
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
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
      </motion.div>
    </Section>
  )
}
