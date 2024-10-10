
import React from "react";

import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import icon5 from "../images/icon5.png";


import { TypewriterEffectSmooth } from "../components/ui/type-writer"

export const Grid=()=>{
    const words = [
        {
          text: "Projects",
          className:"text-slate-600 text-9xl"
        },
        {
            text: "link's below",
            className:"text-orange-600 text-4xl "
          },
      ];
    return (
        <div className="">
            <div className="uppercase text-5xl font-bold m-20 text-slate-500 tracking-widest   relative   overflow-hidden">
                selected work
            </div>
            <div className="grid grid-cols-3  text-white gap-4 m-10 max-w-7xl  w-full">
                
                <div className="col-span-2 border-white  rounded-3xl h-[300px]" >
                    <img src={icon3} alt="" className="rounded-3xl"/>
                <div className=" col-span-2 mt-6  border-white  rounded-3xl h-[300px]" >
                    <img src={icon1} alt="" className="rounded-3xl"/>
                </div>
                <div className=" col-span-2 mt-32   border-white  rounded-3xl h-[300px]" >
                    <img src={icon5} alt="" className="rounded-3xl"/>
                </div>
                <div className="mt-32">
                    <TypewriterEffectSmooth words={words}/>
                </div>
                </div>
                
                <div className="border-white   rounded-3xl ">
                <img src={icon4} alt="" className="rounded-3xl " />
                <div className="border-white  mt-4 rounded-3xl ">
                <img src={icon2} alt="" className="rounded-3xl " />
                </div>
                </div>
                

            </div>

        </div>
    )
}