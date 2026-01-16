"use client";
import { FlipWords } from "../components/ui/flipword";


export function SVGMaskEffectDemo() {
  const words = ["Full stack developer" , "coder" , "Freelancer"]
  return (
    <div > 

    <div
      className="relative flex   overflow-hidden mt-5 sm:mt-0 ">
      
          <div
            className=" dark:text-zinc-300 text-black  text-lg  ">
          <FlipWords words={words}/>
          </div>
          </div>
    </div>
  );
}
