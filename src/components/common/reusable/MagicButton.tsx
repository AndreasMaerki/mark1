import React from "react";
import clsx from "clsx";

interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: 'left' | 'right';
  handleClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position = 'right',
  handleClick,
  className,
  children
}) => {
  return (
    <button 
      onClick={handleClick}
      className={clsx(
        "relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px]",
        "focus:outline-none md:w-60 md:mt-4",
        "group hover:scale-105 transition-transform duration-200",
        className
      )}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#8B5CF6_50%,#E2CBFF_100%)] opacity-80" />
      <span
        className={clsx(
          "inline-flex h-full w-full cursor-pointer items-center justify-center",
          "rounded-lg bg-white dark:bg-slate-950 px-7 py-1 text-sm font-medium",
          "text-slate-900 dark:text-white backdrop-blur-3xl gap-2 border border-slate-200 dark:border-slate-800",
          "group-hover:bg-slate-50 dark:group-hover:bg-slate-900 transition-colors duration-200"
        )}
      >
        {position === "left" && icon}
        {title || children}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton; 