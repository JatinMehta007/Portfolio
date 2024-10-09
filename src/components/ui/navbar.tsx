"use client";
import React from "react";
import { motion } from "framer-motion";
import { Input } from "./input";



const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children
}) => {
  return (
    (<div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white  hover:opacity-[0.9] dark:text-white">
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div
              className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                // layoutId ensures smooth animation
                layoutId="active"
                className=" dark:bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] dark:border-white shadow-xl">
                <motion.div
                  // layout ensures smooth animation
                  layout
                  className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>)
  );
};

export const Menu = ({
  setActive,
  children
}) => {
  return (
    
        <div>

        <nav
      // resets the state
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-slate-700 dark:bg-white dark:border-white/[0.2] bg-black shadow-input flex justify-center space-x-4 px-8 py-6 ">
   {children}
    </nav>
          </div>
  );
};
