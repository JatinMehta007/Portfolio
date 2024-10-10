"use client";
import { MaskContainer } from "../components/ui/svg-effect";
import React from "react";

export function SVGMaskEffectDemo() {
  return (
    <div > 

    <div
      className=" flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p
            className="max-w-4xl mx-auto text-slate-800 text-center  text-5xl  font-bold">
         "Hi, I'm Jatin Mehta — <span className="text-orange-600">a Full-Stack Developer</span> "
          </p>
        }

        className=" border rounded-md  ">
            <span className="text-black text-5xl">

            "Hi, I'm Jatin Mehta — <span >a Full-Stack Developer</span> "
            </span>
      </MaskContainer>
          </div>
    </div>
  );
}
