import LinkProps from '@/types/LinkProps'

export default interface ProjectProps {
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