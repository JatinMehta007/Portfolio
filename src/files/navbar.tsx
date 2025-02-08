import React from "react";
import github from '../images/github.png';
import linkdin from '../images/linkdin.png'; 
import resume from "../images/resume.png"
import { ProfilePic } from "../main/profile-pic";

export const Nav=()=>{
     
    return (
      <div className=" flex items-center justify-center ">
        <div className="">
        <ProfilePic/>
        </div>
      <div className="fixed flex items-center justify-center top-5 h-14 w-[90%] md:w-[80%] lg:h-20 m-6   lg:w-[70%] border-transparent transition duration-1000 ease-in-out bg-gradient-to-r from-zinc-900 via-transparent to-zinc-900 rounded-3xl text-slate-200 hover:border hover:border-gray-700">
          <div  className="lg:m-7 m-4 text-sm md:text-base lg:text-lg  uppercase text-slate-400  tracking-wider lg:font-medium">
          Jatin Mehta
          </div>

          <div className="ml-auto ">
            <a href="https://github.com/JatinMehta007/Portfolio" target="_blank" rel="noopener noreferrer">
          <button>
            <img src={github} alt="" className="lg:p-4 h-7 mt-2 w-7 md:h-8 md:w-8  lg:h-20 lg:w-20 lg:mt-0  rounded-full transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 border-gray-600 hover:border hover:border-gray-900" />
          </button>
          </a>
          </div>
     <div>
        <a href="https://www.linkedin.com/in/jatin-mehta-a70a0025a/" target="_blank" rel="noopener noreferrer">
        <button>    
        <img src={linkdin} alt="" className="lg:p-4 h-7 m-3 mt-5 lg:m-0  w-7 md:h-8 md:w-8   lg:h-20 lg:w-20 lg:mt-0 rounded-full transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 border-gray-600 hover:border hover:border-gray-900" />
        </button>
        </a>
     </div>
     <div>
        <a href="/Jatin_Resume.pdf" download target="_blank" rel="noopener noreferrer">
        <button>    
        <img src={resume} alt="" className="lg:p-4 h-7 mt-2 w-7 md:h-8 md:w-8  mr-2 lg:h-20 lg:w-20 lg:m-0 rounded-full transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 lg:border-gray-600 lg:hover:border lg:hover:border-gray-900" />
        </button>
        </a>
     </div>
      </div>
     <div>
      dafads
     </div>
 </div>
    )
}