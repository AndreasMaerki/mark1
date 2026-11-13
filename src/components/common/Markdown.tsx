import { lazy, Suspense } from 'react'
import clsx from 'clsx'
import Heading1 from '@/components/common/reusable/heading/Heading1'
import Heading2 from '@/components/common/reusable/heading/Heading2'
import Heading3 from '@/components/common/reusable/heading/Heading3'
import InlineLink from '@/components/common/reusable/InlineLink'

const ReactMarkdown = lazy(() => import('react-markdown'))

interface MarkdownProps {
  content: string
  className?: string
}

export default function Markdown({ content, className }: MarkdownProps): JSX.Element {
  return (
    <div className={clsx('prose prose-lg dark:prose-invert max-w-none', className)}>
      <Suspense fallback={null}>
        <ReactMarkdown
          components={{
            h1: ({ children }) => <Heading1 className='text-4xl md:text-5xl text-primary-dark dark:text-white mb-6'>{children}</Heading1>,
            h2: ({ children }) => <Heading2 className='mb-6 mt-8 text-primary-dark dark:text-white'>{children}</Heading2>,
            h3: ({ children }) => <Heading3 className='mb-4 mt-6 text-primary-dark dark:text-white'>{children}</Heading3>,
            a: ({ href, children }) => <InlineLink href={href || '#'}>{children}</InlineLink>,
            p: ({ children }) => <p className="text-gray-700 dark:text-muted leading-relaxed mb-6">{children}</p>,
            strong: ({ children }) => <strong className="font-semibold text-primary-dark dark:text-primary-light">{children}</strong>,
            code: ({ children }) => <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-800 dark:text-gray-200">{children}</code>,
            pre: ({ children }) => <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-6">{children}</pre>,
            ul: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-6">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-6">{children}</ol>,
            li: ({ children }) => <li className="text-gray-700 dark:text-muted">{children}</li>
          }}
        >
          {content}
        </ReactMarkdown>
      </Suspense>
    </div>
  )
}