import { lazy } from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import projects from '@/_data/projects'
import ProjectProps from '@/types/components/ProjectProps'

const ArrowRightSLineIcon = lazy(() => import('remixicon-react/ArrowRightSLineIcon'))
const Heading2 = lazy(() => import('@/components/common/reusable/heading/Heading2'))
const PrimaryButton = lazy(() => import('@/components/common/reusable/button/PrimaryButton'))
const ProjectCard = lazy(() => import('@/components/common/ProjectCard'))
const Section = lazy(() => import('@/components/layouts/Section'))

export default function FeaturedProjects(): JSX.Element {
  const { animationClass } = useFadeInMounted()

  const featuredProjects = projects.filter((project: ProjectProps) => project.featured)
  const projectCards = featuredProjects.map((project: ProjectProps, index: number) => (
    <div 
      key={project.slug}
      className={clsx(
        'animate-fade-in',
        index === 0 && '!delay-200',
        index === 1 && '!delay-300',
        index === 2 && '!delay-400'
      )}
    >
      <ProjectCard {...project} />
    </div>
  ))

  return (
    <Section
      id='projects'
      className={clsx(
        animationClass,
        'relative scroll-mt-8'
      )}
    >
      {/* Subtle background effect without grid duplication */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-3xl opacity-50 blur-3xl transform -translate-y-12" />
      
      <div className="relative z-10">
        <Heading2 className='mb-8 text-center'>Featured Projects</Heading2>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8'>
          {projectCards}
        </div>
        <div className='text-center'>
          <NavLink to='/projects'>
            <PrimaryButton 
              className="hover:scale-105 transition-transform duration-200"
              icon={<ArrowRightSLineIcon size={20} />}
              inverted
            >
              View all projects
            </PrimaryButton>
          </NavLink>
        </div>
      </div>
    </Section>
  )
}
