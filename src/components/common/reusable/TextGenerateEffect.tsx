"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import clsx from "clsx";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current, animate, duration, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={clsx(
                idx > 3 ? 'text-purple-400' : "dark:text-white text-slate-900",
                "opacity-0"
              )}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={clsx("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-slate-900 leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect; 