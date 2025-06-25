import { lazy } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import useSmoothScroll from '@/hooks/useSmootScroll'

const ArrowDownSLineIcon = lazy(() => import('remixicon-react/ArrowDownSLineIcon'))
const Spotlight = lazy(() => import('@/components/common/reusable/Spotlight'))
const TextGenerateEffect = lazy(() => import('@/components/common/reusable/TextGenerateEffect'))
const MagicButton = lazy(() => import('@/components/common/reusable/MagicButton'))
const SlidingInUnderline = lazy(() => import('@/components/common/reusable/SlidingInUnderline'))
const HighlightText = lazy(() => import('@/components/common/reusable/HighlightText'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink'))
const SocialMediaLinks = lazy(() => import('@/components/common/SocialMediaLinks'))
const Section = lazy(() => import('@/components/layouts/Section'))

export default function Hero(): JSX.Element {
  const { animationClass } = useFadeInMounted()
  const { scrollToElement } = useSmoothScroll()
  
  const scrollToProjects = (): void => {
    scrollToElement('projects', -100) // -100px offset for navbar
  }

  return (
    <div className="relative">
      {/* Full-width spotlight effects - extending to viewport edges */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Main spotlight from top-left viewport edge */}
        <Spotlight
          className="-top-20 -left-20 h-[120vh] w-[60vw] opacity-40 dark:opacity-20"
          fill="rgb(139, 92, 246)"
        />
        {/* Secondary spotlight from left viewport edge */}
        <Spotlight
          className="top-40 -left-40 h-[80vh] w-[40vw] opacity-30 dark:opacity-15"
          fill="rgb(59, 130, 246)"
        />
        {/* Accent spotlight from top viewport edge */}
        <Spotlight 
          className="-top-40 left-20 h-[60vh] w-[30vw] opacity-20 dark:opacity-10" 
          fill="rgb(168, 85, 247)" 
        />
      </div>

      {/* Full-width subtle grid background */}
      <div className="fixed inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] pointer-events-none" />

      <Section
        className={clsx(animationClass, 'relative flex h-[88vh] min-h-[480px] flex-col justify-between z-10')}
      >
        <div className='flex h-3/4 flex-col justify-center space-y-4 sm:space-y-6'>
          <h2 className={clsx('animate-fade-in', 'text-xl sm:text-2xl lg:text-3xl')}>
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
          
          <TextGenerateEffect
            className="text-center text-3xl sm:text-5xl lg:text-6xl break-words font-extrabold tracking-tight"
            words="10+ years crafting iOS applications and mobile experiences"
          />
          
          <p
            className={clsx(
              'animate-fade-in !delay-300',
              'text-muted-dark dark:text-muted',
              'sm:text-lg lg:text-xl',
              'pb-0'
            )}
          >
            Senior iOS Developer specializing in <InlineLink href='#'>Swift & SwiftUI</InlineLink>
          </p>
          
          <SocialMediaLinks className={clsx('animate-fade-in !delay-500', 'mt-6')} />
        </div>
        
        <div className="flex justify-center">
          <MagicButton
            title="Show my work"
            icon={<ArrowDownSLineIcon />}
            position="right"
            handleClick={scrollToProjects}
            className="animate-floating"
          />
        </div>
      </Section>
    </div>
  )
}
