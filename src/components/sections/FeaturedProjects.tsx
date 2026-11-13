import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import projects from '@/_data/projects'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'
import Heading2 from '@/components/common/reusable/heading/Heading2'
import PrimaryButton from '@/components/common/reusable/button/PrimaryButton'
import ProjectCard from '@/components/common/ProjectCard'
import Section from '@/components/layouts/Section'

interface LinkProps {
  label: string
  icon: JSX.Element
  url?: string
}

interface ProjectProps {
  id?: string
  className?: string
  children?: React.ReactNode
  slug?: string
  title: string
  featured?: boolean | false
  description: string | JSX.Element
  category: string
  techStacks: string[]
  otherTechStacks?: string[]
  links: LinkProps[]
}

export default function FeaturedProjects(): JSX.Element {
  const { animationClass } = useFadeInMounted()

  const featuredProjects = projects.filter((project: ProjectProps) => project.featured)
  const projectCards = featuredProjects.map((project: ProjectProps, index: number) => (
    <div 
      key={project.slug}
      className={clsx(
        'animate-fade-in h-full',
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