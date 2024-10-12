import React from "react";
import github from '../images/github.png';
import linkdin from '../images/linkdin.png'; 
import resume from '../images/resume.png'; 

export const Nav=()=>{
     
    return (
      <div className=" flex items-center justify-center ">
      <div className="fixed flex top-0 h-14 w-96 sm:h-20 m-6   sm:w-[950px] border-transparent transition duration-1000 ease-in-out bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl text-slate-200 hover:border hover:border-gray-700">
          <div  className="sm:m-7 m-4 text-sm sm:text-base uppercase text-slate-600  tracking-wider sm:font-medium">
          Jatin Mehta
          </div>

          <div className="ml-auto">
            <a href="https://github.com/JatinMehta007/Portfolio" target="_blank" rel="noopener noreferrer">
          <button>
            <img src={github} alt="" className="sm:p-4 h-7 w-7 mt-4 sm:h-20 sm:w-20 sm:mt-0  rounded-full transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 border-gray-600 hover:border hover:border-gray-900" />
          </button>
          </a>
          </div>
     <div>
        <a href="https://www.linkedin.com/in/jatin-mehta-a70a0025a/" target="_blank" rel="noopener noreferrer">
        <button>    
        <img src={linkdin} alt="" className="sm:p-4 h-7 w-7 m-4 sm:h-20 sm:w-20 sm:m-0 rounded-full transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 border-gray-600 hover:border hover:border-gray-900" />
        </button>
        </a>
     </div>
     <div>
        <a href="images/resume.pdf" download target="_blank" rel="noopener noreferrer">
        <button>    
        <img src={resume} alt="" className="sm:p-4 h-7 w-7 mt-4 mr-2 sm:h-20 sm:w-20 sm:m-0 rounded-full transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 sm:border-gray-600 sm:hover:border sm:hover:border-gray-900" />
        </button>
        </a>
     </div>
     
      </div>
 </div>
    )
}