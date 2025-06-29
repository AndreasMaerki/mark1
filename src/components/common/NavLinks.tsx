import { lazy } from 'react'
import { NavLink } from 'react-router-dom'
import navItems from '@/_data/navItems'
import NavItemsProps from '@/types/NavItemsProps'

const PrimaryButton = lazy(() => import('@/components/common/reusable/button/PrimaryButton'))

interface NavLinksProps {
  isMobile?: boolean
}

export default function NavLinks({ isMobile = false }: NavLinksProps): JSX.Element {
  const links = navItems.map(
    (item: NavItemsProps, index: number): JSX.Element => (
      <li
        className={isMobile ? 'flex-1' : 'flex'}
        key={index}
      >
        <NavLink
          key={index}
          to={item.href}
          className={isMobile ? 'w-full' : ''}
        >
          {({ isActive }) => (
            <PrimaryButton 
              active={isActive}
              className={isMobile ? 'w-full justify-center py-3 px-2 text-sm min-h-[44px] touch-manipulation' : ''}
            >
              {item.name}
            </PrimaryButton>
          )}
        </NavLink>
      </li>
    )
  )

  return (
    <ul className={
      isMobile 
        ? 'flex flex-row w-full space-x-2' 
        : 'flex flex-row items-center space-x-4'
    }>
      {links}
    </ul>
  )
}
