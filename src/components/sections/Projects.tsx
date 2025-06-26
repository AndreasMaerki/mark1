import { lazy, useEffect, useState } from 'react'
import clsx from 'clsx'
import projects from '@/_data/projects'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import ProjectProps from '@/types/components/ProjectProps'

// Keep lazy loading for complex components only
const ProjectCard = lazy(() => import('@/components/common/ProjectCard'))

// Direct imports for small, frequently used components
import Badge from '@/components/common/reusable/Badge'
import Heading1 from '@/components/common/reusable/heading/Heading1'
import InlineLink from '@/components/common/reusable/InlineLink'
import Section from '@/components/layouts/Section'

export default function Projects(): JSX.Element {
  const { animationClass } = useFadeInMounted()

  const [filteredProjects, setFilteredProjects] = useState<Array<ProjectProps>>([...projects])
  const [selectedFilters, setSelectedFilters] = useState<Array<string>>([])

  // Generate filters dynamically based on available tech stacks in projects
  const availableFilters = Array.from(
    new Set(
      projects.flatMap((project: ProjectProps) => {
        let allTechStacks: string[] = [...project.techStacks]
        if (project.otherTechStacks) {
          allTechStacks = [...allTechStacks, ...project.otherTechStacks]
        }
        return allTechStacks
      })
    )
  ).sort()

  const filterProjects = (newValue: string): void => {
    if (selectedFilters.includes(newValue)) {
      setSelectedFilters(selectedFilters.filter(value => value !== newValue))
      return
    }
    setSelectedFilters([...selectedFilters, newValue])
  }
  const removeselectedFilters = (): void => {
    setSelectedFilters([])
  }

  useEffect((): void => {
    let filtered: ProjectProps[] = [...projects]

    if (selectedFilters.length) {
      filtered = projects.filter((project: ProjectProps) => {
        let allTechStacks: string[] = [...project.techStacks]
        if (project.otherTechStacks) {
          allTechStacks = [...allTechStacks, ...project.otherTechStacks]
        }
        console.log(allTechStacks)
        return selectedFilters.every((filter: string) => allTechStacks.includes(filter))
      })
    }

    setFilteredProjects(filtered)
  }, [selectedFilters])

  const projectsEntry: JSX.Element[] = filteredProjects.map(project => (
    <ProjectCard
      {...project}
      key={project.slug}
    />
  ))

  const filterEntry: JSX.Element[] = availableFilters.map((filter: string) => (
    <Badge
      key={filter}
      className='animate-fade-in cursor-pointer !delay-200'
      active={selectedFilters.includes(filter)}
      onClick={(): void => filterProjects(filter)}
    >
      {filter}
    </Badge>
  ))

  return (
    <Section className={clsx(animationClass, 'min-h-[calc(100vh-320px)]')}>
      <div className='pb-6'>
        <Heading1
          className={clsx('animate-fade-in', 'text-primary-dark dark:text-white', 'pb-2 pt-2')}
        >
          Projects
        </Heading1>
        <p className='animate-fade-in !delay-200'>Archives of my projects.</p>
        <ul className='flex flex-wrap gap-2'>
          <li className='animate-fade-in inline !delay-200'>Filters:</li>
          {filterEntry}
        </ul>
      </div>
      {!!filteredProjects.length && (
        <div
          className={clsx(
            'animate-fade-in !delay-300',
            'mx-auto mt-6 md:mt-8',
            'grid justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3'
          )}
        >
          {projectsEntry}
        </div>
      )}
      {!filteredProjects.length && (
        <div className='animate-fade-in mt-8 !delay-300'>
          <p className='text-muted-dark dark:text-muted'>
            Results not found.{' '}
            <span onClick={removeselectedFilters}>
              <InlineLink>Clear filters</InlineLink>
            </span>
          </p>
        </div>
      )}
    </Section>
  )
}
