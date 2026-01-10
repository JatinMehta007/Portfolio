"use client";
import { FlipWords } from "../components/ui/flipword";


export function SVGMaskEffectDemo() {
  const words = ["Full stack developer" , "coder" , "Freelancer"]
  return (
    <div > 

    <div
      className="relative flex   overflow-hidden mt-5 sm:mt-0 ">
      
          <div
            className=" dark:text-white text-black  p-4 sm:p-0 sm:text-5xl text-3xl  font-bold">
         "Hi,👋 I'm Jatin —<FlipWords words={words}/>"
          </div>
        

          </div>
    </div>
  );
}
