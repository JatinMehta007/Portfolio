
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
          text: "Project's",
          className:"text-slate-600 sm:text-9xl text-4xl"
        },
        {
            text: "link below",
            className:"text-orange-600 sm:text-4xl "
          },
      ];
    return (
        <div className="">
            <div className="uppercase sm:text-5xl text-3xl font-bold sm:m-20 m-10 text-center sm:text-left text-slate-500 tracking-widest   relative   overflow-hidden">
                selected work
            </div>
            <div className="grid grid-cols-3  text-white sm:gap-4 sm:m-10 m-5 sm:max-w-7xl  sm:w-screen">
                
                <div className="col-span-2 border-white rounded-3xl sm:h-[300px] w-56 sm:w-[848px] " >
                    <a href="https://victor--delta.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img src={icon3} alt="Victor" className="sm:rounded-3xl rounded-lg"/>
                    </a>
                <div className=" col-span-2 mt-6  border-white  rounded-3xl sm:h-[300px] w-56 sm:w-[848px]" >
                <a href="https://alabayjatinmehta-jatins-projects-a1a570d0.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img src={icon1} alt="Alabay" className="sm:rounded-3xl rounded-lg "/>
                    </a>
                </div>
                <div className=" col-span-2 sm:mt-32 mt-6 border-white  rounded-3xl sm:h-[300px] w-56 sm:w-[848px]" >
                <a href="https://jatinmehta007.github.io/IXIGO-TRAIN-APP-CLONE/" target="_blank" rel="noopener noreferrer">
                    <img src={icon5} alt="Ixigo" className="sm:rounded-3xl rounded-lg"/>
                    </a>
                </div>
                <div className="sm:mt-32 mt-10">
                    <TypewriterEffectSmooth words={words}/>
                </div>
                </div>
                
                <div className="border-white   rounded-3xl ">
                <a href="https://victor--delta.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src={icon4} alt="Victor" className="sm:rounded-3xl rounded-lg " />
                </a>
                <div className="border-white  mt-4 rounded-3xl ">
                <a href="https://alabayjatinmehta-jatins-projects-a1a570d0.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src={icon2} alt="Alabay" className="sm:rounded-2xl rounded-lg " />
                </a>
                </div>
                </div>
                

            </div>

        </div>
    )
}