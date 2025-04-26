
import React from "react";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import icon5 from "../images/icon5.png";
import jatin from "../images/jatin.jpeg";

import { TypewriterEffectSmooth } from "../components/ui/text-writer"; 
import { FollowerPointerCard } from "../components/ui/following_pointer";

export const Grid=()=>{
    const words = [
        {
          text: "Project's",
          className:"dark:text-slate-600 text-white md:text-7xl lg:text-8xl xl:text-9xl  text-4xl"
        },
        {
            text: "link below",
            className:"text-orange-600 lg:text-4xl md:text-3xl dark:text-orange-500 "
          },
      ];
    return (
        <div className="">
            <div className="uppercase md:text-5xl text-3xl dark:font-normal font-bold md:m-20 m-10 text-center md:text-left dark:text-black text-zinc-200 tracking-widest   relative   overflow-hidden ">
                selected work
            </div>
                         <FollowerPointerCard
                                title={
                                  <TitleComponent
                                    title={blogContent.author}
                                  />
                                }
                              >
            <div className="grid grid-cols-3  text-white  md:gap-4 lg:m-10 m-5 lg:max-w-7xl gap-2 ">
                
                <div className="col-span-2 border-white rounded-3xl  md:h-[300px] w-[100%] md:w-[500px] lg:w-[100%] " >
                    <a href="https://victor--delta.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img src={icon3} alt="Victor" className="md:rounded-3xl rounded-lg transition ease-in-out delay-150 hover:translate-x-1 hover:scale-95 duration-1000 "/>
                    </a>

                <div className=" col-span-2 mt-6  border-white  rounded-3xl md:h-[300px] w-[100%] md:w-[500px] lg:w-[100%]" >
                <a href="https://alabayjatinmehta-jatins-projects-a1a570d0.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img src={icon1} alt="Alabay" className="md:rounded-3xl rounded-lg transition ease-in-out delay-150 hover:translate-x-1 hover:scale-95 duration-1000 "/>
                    </a>

                </div>
                
                <div className=" col-span-2 md:mt-[-29px] lg:mt-5 xl:mt-32 mt-6 border-white  rounded-3xl md:h-[300px] w-[100%] md:w-[500px] lg:w-[100%]" >
                <a href="https://jatinmehta007.github.io/IXIGO-TRAIN-APP-CLONE/" target="_blank" rel="noopener noreferrer">
                    <img src={icon5} alt="Ixigo" className="md:rounded-3xl rounded-lg transition ease-in-out delay-150 hover:translate-x-1 hover:scale-95 duration-1000 "/>
                    </a>
                </div>
                <div className="lg:mt-4 xl:mt-32 md:mt-[-70px] ">
                    <TypewriterEffectSmooth words={words}/>
                </div>
                </div>
                
                <div className="border-white   rounded-3xl ">
                <a href="https://victor--delta.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src={icon4} alt="Victor" className="md:rounded-3xl rounded-lg transition ease-in-out delay-150 hover:translate-x-1 hover:scale-95 duration-1000 " />
                </a>
                <div className="border-white  mt-4 rounded-3xl ">
                <a href="https://alabayjatinmehta-jatins-projects-a1a570d0.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src={icon2} alt="Alabay" className="md:rounded-2xl rounded-lg transition ease-in-out delay-150 hover:translate-x-1 hover:scale-95 duration-1000 " />
                </a>
                </div>
                </div>
                

            </div>
            </FollowerPointerCard>
        </div>
    )
}



const blogContent = {
    author: "Jatin Mehta",
    image: "/demo/thumbnail.png",
  };
  
  const TitleComponent = ({
    title,
  }: {
    title: string;
  }) => (
    <div className="flex space-x-2 items-center">
      
       <img src={jatin} alt="" className="h-5 w-5 rounded-full border-2 border-white" />
      <p>{title}</p>
    </div>
  );
  