import { lazy, useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import useEventListener from '@/hooks/useEventListener'
import useMounted from '@/hooks/useMounted'

const Heading1 = lazy(() => import('@/components/common/reusable/heading/Heading1'))
const Heading2 = lazy(() => import('@/components/common/reusable/heading/Heading2'))
const Section = lazy(() => import('@/components/layouts/Section'))
const SearchEyeLineIcon = lazy(() => import('remixicon-react/SearchEyeLineIcon'))

export default function NotFound(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const mounted: boolean = useMounted()

  useEventListener('mousemove', (e: Event): void => {
    if (!(e instanceof MouseEvent) || !ref.current) {
      return
    }
    const { clientX, clientY } = e
    ref.current.style.setProperty('--gradientPosition', `${clientX}px ${clientY}px`)
  })

  // Handle redirect parameter for SPA routing
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const redirectPath = urlParams.get('redirect')
    if (redirectPath && redirectPath !== '/') {
      // Remove the redirect parameter and navigate to the intended path
      window.history.replaceState({}, '', redirectPath)
      navigate(redirectPath, { replace: true })
    }
  }, [navigate])

  const commonPages = [
    { name: 'Home', path: '/', description: 'Back to the main page' },
    { name: 'About', path: '/about', description: 'Learn more about me' },
    { name: 'Projects', path: '/projects', description: 'View my work' },
    { name: 'Blog', path: '/blog', description: 'Read my articles' }
  ]

  return (
    <div
      className={clsx({
        'animate-start': mounted
      })}
    >
      <div
        ref={ref}
        className='cursor-tracking-gradient'
      >
        <Section
          className='flex min-h-screen flex-col justify-center md:items-center py-20'
          maxWidthClass='md:max-w-screen-lg'
        >
          {/* Large 404 Number */}
          <div className="text-center mb-8">
            <div className="text-8xl md:text-9xl font-bold text-primary/20 dark:text-primary-light/20 animate-fade-in">
              404
            </div>
          </div>

          {/* Main Heading */}
          <Heading1 className={clsx(
            'animate-fade-in !delay-200', 
            'text-primary-dark dark:text-white',
            'text-3xl md:text-center md:text-4xl lg:text-5xl mb-6'
            )}
          >
            Oops! Page Not Found
          </Heading1>

          {/* Description */}
          <p
            className={clsx(
              'animate-fade-in !delay-300',
              'mb-8 text-lg md:text-center md:text-xl text-muted-dark dark:text-muted max-w-2xl'
            )}
          >
            The page you're looking for seems to have wandered off into the digital void. 
            But don't worry – let's get you back on track!
          </p>



          {/* Popular Pages */}
          <div className="w-full max-w-2xl animate-fade-in !delay-500">
            <Heading2 className="text-center mb-6 text-primary-dark dark:text-white">
              Popular Pages
            </Heading2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commonPages.map((page) => (
                <NavLink
                  key={page.path}
                  to={page.path}
                  className="group p-4 bg-white/60 dark:bg-slate-800/40 rounded-lg border border-gray-200/30 dark:border-gray-600/30 hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary/5 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <SearchEyeLineIcon className="w-5 h-5 text-primary dark:text-primary-light" />
                    <div>
                      <h3 className="font-semibold text-primary-dark dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                        {page.name}
                      </h3>
                      <p className="text-sm text-muted-dark dark:text-muted">
                        {page.description}
                      </p>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
