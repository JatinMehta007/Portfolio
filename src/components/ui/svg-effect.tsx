"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils"
import React from "react";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const containerRef = useRef(null);
  const updateMousePosition = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    containerRef.current.addEventListener("mousemove", updateMousePosition);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", updateMousePosition);
      }
    };
  }, []);
  let maskSize = isHovered ? revealSize : size;

  return (
    (<motion.div
      ref={containerRef}
      className={cn("sm:h-40 h-20  w-screen border-none relative ", className)}
      animate={{
        backgroundColor: isHovered ? "var(--gray)" : "var(--gray)",
      }}>
      <motion.div
        className="w-full h-full flex items-center bg-orange-500 justify-center text-6xl  absolute  [mask-image:url(/mask.svg)]  [mask-repeat:no-repeat]"
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{
          duration: 0,
        }}>
        <div className="absolute inset-0 bg-orange-600  h-full w-full z-0 opacity-50" />
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="max-w-4xl mx-auto text-center  text-white  text-4xl font-bold relative z-20">
          {children}
        </div>
      </motion.div>
      <div className="w-full hover:invisible h-full  flex items-center justify-center  text-white">
        {revealText}
      </div>
    </motion.div>)
  );
};
