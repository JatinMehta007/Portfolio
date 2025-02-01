"use client";
import { MaskContainer } from "../components/ui/svg-effect";
import React from "react";

export function SVGMaskEffectDemo() {
  return (
    <div > 

    <div
      className=" flex items-center justify-center  overflow-hidden mt-5 sm:mt-0 ">
      <MaskContainer
        revealText={
          <p
            className="max-w-4xl mx-auto text-slate-600 text-center p-4 sm:p-0 sm:text-5xl text-3xl  font-bold">
         "Hi,👋 I'm Jatin Mehta — <span className="text-orange-600">a Full-Stack Developer</span> "
          </p>
        }

        className=" border rounded-md  ">
            <span className="text-black sm:text-5xl text-3xl">
            "Hi,👋 I'm Jatin Mehta — <span >a Full-Stack Developer</span> "
            </span>
      </MaskContainer>
          </div>
    </div>
  );
}
