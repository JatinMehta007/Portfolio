"use client";
import { FlipWords } from "../components/ui/flipword";
import React from "react";

export function SVGMaskEffectDemo() {
  const words = ["a full stack developer" , "coder" , "Freelancer", ]
  return (
    <div > 

    <div
      className=" flex items-center justify-center  overflow-hidden mt-5 sm:mt-0 ">
      
          <p
            className="max-w-4xl mx-auto text-slate-600 text-center p-4 sm:p-0 sm:text-5xl text-3xl  font-bold">
         "Hi,👋 I'm Jatin Mehta — <FlipWords words={words}/> "
          </p>
        

          </div>
    </div>
  );
}
