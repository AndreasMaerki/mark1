import { lazy } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import useSmoothScroll from '@/hooks/useSmootScroll'

const ArrowDownSLineIcon = lazy(() => import('remixicon-react/ArrowDownSLineIcon'))
const TextGenerateEffect = lazy(() => import('@/components/common/reusable/TextGenerateEffect'))
const MagicButton = lazy(() => import('@/components/common/reusable/MagicButton'))
const SlidingInUnderline = lazy(() => import('@/components/common/reusable/SlidingInUnderline'))
const HighlightText = lazy(() => import('@/components/common/reusable/HighlightText'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink'))
const SocialMediaLinks = lazy(() => import('@/components/common/SocialMediaLinks'))
const ProfileImage = lazy(() => import('@/components/common/ProfileImage'))
const Section = lazy(() => import('@/components/layouts/Section'))

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
          
          <TextGenerateEffect
            className="text-center text-3xl sm:text-5xl lg:text-6xl break-words font-extrabold tracking-tight !delay-300"
            words="10+ years crafting iOS applications and mobile experiences"
          />
          
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
            className="animate-floating"
          />
        </div>
    </Section>
  )
}
