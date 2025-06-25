import { lazy } from 'react'
import clsx from 'clsx'

const PrimaryButton = lazy(() => import('@/components/common/reusable/button/PrimaryButton'))
const NavLinks = lazy(() => import('@/components/common/NavLinks'))
const SocialMediaLinks = lazy(() => import('@/components/common/SocialMediaLinks'))
const Title = lazy(() => import('@/components/common/Title'))
const ArrowUpSLineIcon = lazy(() => import('remixicon-react/ArrowUpSLineIcon'))

export default function Footer(): JSX.Element {
  const scrollToTop = (): void => {
    window.scrollTo(0, 0)
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-t from-purple-500/5 to-transparent">
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <div className={clsx(
              'h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-400',
              'animate-pulse'
            )} />
            <span className="text-lg font-bold text-primary-dark dark:text-primary-light">
              MARK1
            </span>
          </div>

          {/* Social Links */}
          <SocialMediaLinks className="hover:[&_a]:scale-110 [&_a]:transition-transform [&_a]:duration-200" />

          {/* Copyright */}
          <div className="border-t border-primary-dark/10 dark:border-primary-light/10 pt-6 w-full text-center">
            <p className="text-sm text-muted-dark dark:text-muted">
              © {currentYear} Andreas Maerki. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
