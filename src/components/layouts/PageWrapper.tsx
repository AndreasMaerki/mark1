import { motion } from 'framer-motion'
import clsx from 'clsx'
import ComponentProps from '@/types/components/ComponentProps'

export default function PageWrapper({ className, children }: ComponentProps): JSX.Element {
  return (
    <motion.div 
      className={clsx(className, 'pt-18 min-h-screen relative')}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {/* Content with relative positioning for z-index stacking */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
