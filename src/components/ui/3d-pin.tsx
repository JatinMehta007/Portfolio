"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%, -50%) rotateX(0deg) scale(1)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%, -50%) rotateX(40deg) scale(0.92)");
  };

  const onMouseLeave = () => {
    setTransform("translate(-50%, -50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn("relative group/pin cursor-pointer", containerClassName)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Entire card clickable */}
      <a
        href={href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* 3D Tilt Container */}
        <div
          className="absolute"
          style={{
            perspective: "1000px",
          }}
        >
          <div className={cn("relative z-10", className)}>
            {children}
          </div>
        </div>
      </a>

      <PinPerspective title={title} />
    </div>
  );
};

export const PinPerspective = ({
  title,
}: {
  title?: string;
}) => {
  return (
    <motion.div
      className="pointer-events-none w-full h-52 invisible md:visible flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500"
    >
      <div className="w-full h-full -mt-2 relative">
        {/* Title Badge */}
        {title && (
          <div className="flex justify-center items-center">
            <div className="relative flex items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
              <span className="relative z-20 text-white text-base font-bold inline-block py-0.5">
                {title}
              </span>
              <span className="absolute -bottom-0 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/pin:opacity-40"></span>
            </div>
          </div>
        )}

        {/* Glowing Circles */}
        {[0, 2, 4].map((delay) => (
          <motion.div
            key={delay}
            initial={{
              opacity: 0,
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,
              z: 0,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay,
            }}
            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
        ))}

        {/* Vertical beam + Dot */}
        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-28 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-28" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};