import clsx from 'clsx'

interface ProfileImageProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function ProfileImage({ className, size = 'lg' }: ProfileImageProps): JSX.Element {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24', 
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  }

  return (
    <div className={clsx(
      'relative group cursor-pointer',
      className
    )}>
      {/* Gradient border */}
      <div className={clsx(
        'absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600',
        'opacity-40 group-hover:opacity-60 transition-opacity duration-500',
        'scale-105 blur-sm group-hover:blur-none group-hover:scale-102'
      )} />
      
      {/* Glow effect */}
      <div className={clsx(
        'absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400',
        'opacity-10 group-hover:opacity-20 transition-opacity duration-500',
        'scale-120 blur-xl'
      )} />
      
      {/* Image container */}
      <div className={clsx(
        'relative rounded-full overflow-hidden border-4 border-white dark:border-gray-900',
        'shadow-2xl group-hover:shadow-purple-500/15 transition-all duration-500',
        'group-hover:scale-102 transform flex items-end justify-center',
        sizeClasses[size]
      )}>
        <img
          src="/src/assets/images/andreas-profile.png"
          alt="Andreas Maerki"
          className="w-[85%] h-[85%] object-cover rounded-full relative -left-2 top-3"
        />
        
        {/* Overlay for hover effect */}
        <div className={clsx(
          'absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent',
          'opacity-0 group-hover:opacity-100 transition-opacity duration-500'
        )} />
      </div>
      
      
    </div>
  )
} 