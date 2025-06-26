import { lazy, Suspense } from 'react'
import useDocumentTitle from '@/hooks/useDocumentTitle'

const NotFound = lazy(() => import('@/components/sections/NotFound'))

export default function NotFoundPage(): JSX.Element {
  useDocumentTitle({
    title: '404 - Page Not Found | Andreas Maerki',
    description: 'The page you are looking for could not be found. Return to Andreas Maerki\'s iOS development portfolio.',
    canonical: 'https://andreasmaerki.dev/404'
  })

  return (
    <Suspense>
      <NotFound />
    </Suspense>
  )
}
