import { lazy } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import useSmoothScroll from '@/hooks/useSmootScroll'

// Keep lazy loading for large/complex components
const ArrowDownSLineIcon = lazy(() => import('remixicon-react/ArrowDownSLineIcon'))

// Direct imports for small, critical components
import MagicButton from '@/components/common/reusable/MagicButton'
import SlidingInUnderline from '@/components/common/reusable/SlidingInUnderline'
import HighlightText from '@/components/common/reusable/HighlightText'
import InlineLink from '@/components/common/reusable/InlineLink'
import SocialMediaLinks from '@/components/common/SocialMediaLinks'
import ProfileImage from '@/components/common/ProfileImage'
import Section from '@/components/layouts/Section'

export default function Hero(): JSX.Element {
  const { animationClass } = useFadeInMounted()
  const { scrollToElement } = useSmoothScroll()
  
  const scrollToProjects = (): void => {
    scrollToElement('projects', -100) // -100px offset for navbar
  }

  return (
    <Section
      className={clsx(animationClass, 'relative flex h-[88vh] min-h-[480px] flex-col justify-between')}
    >
        <div className='flex h-3/4 flex-col justify-center space-y-4 sm:space-y-6'>
          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in">
            <ProfileImage size="xl" className="mb-6" />
          </div>
          
          <h2 className={clsx('animate-fade-in !delay-200', 'text-xl sm:text-2xl lg:text-3xl')}>
            <span className="uppercase tracking-widest text-xs text-center text-primary-dark dark:text-primary-light block mb-4 opacity-70">
              iOS Development Excellence
            </span>
            Hey👋, I'm{' '}
            <SlidingInUnderline
              type='secondary'
              height='lg'
            >
              Andreas Maerki
            </SlidingInUnderline>
          </h2>
          
          <h1 className="animate-fade-in !delay-300 text-center text-3xl sm:text-5xl lg:text-6xl break-words font-extrabold tracking-tight">
            <span className="dark:text-white text-slate-900">10+ years crafting </span>
            <span className="text-purple-400">iOS applications and mobile experiences</span>
          </h1>
          
          <p
            className={clsx(
              'animate-fade-in !delay-400',
              'text-muted-dark dark:text-muted',
              'sm:text-lg lg:text-xl',
              'pb-0'
            )}
          >
            Senior iOS Developer specializing in <InlineLink href='#'>Swift & SwiftUI</InlineLink>
          </p>
          
          <SocialMediaLinks className={clsx('animate-fade-in !delay-600', 'mt-6')} />
        </div>
        
        <div className="flex justify-center">
          <MagicButton
            title="Show my work"
            icon={<ArrowDownSLineIcon />}
            position="right"
            handleClick={scrollToProjects}
          />
        </div>
    </Section>
  )
}
