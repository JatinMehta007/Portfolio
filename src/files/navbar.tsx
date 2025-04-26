import React, { useEffect, useState } from "react";
import github from '../images/github.png';
import linkdin from '../images/linkdin.png'; 
import resume from "../images/resume.png"
import { ProfilePic } from "../main/profile-pic";
import { FollowerPointerCard } from "../components/ui/following_pointer";
// import Image from "next/image";

export const Nav=()=>{
     const [theme,setTheme] = useState(()=>{
      return localStorage.getItem("theme") || "light";
     })

     useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
      <div className=" flex items-center justify-center ">
        <div className="invisible md:visible lg:visible">
       
        <ProfilePic/>
        </div>
       
      <div className="fixed z-50 flex first-letter  items-center justify-center  top-5 lg:top-10  h-14 w-[320px]  md:w-[80%] lg:h-20 m-6   lg:w-[70%] border-transparent transition duration-1000 ease-in-out bg-gradient-to-r from-zinc-900 via-transparent to-zinc-900 rounded-3xl text-slate-200 hover:border hover:border-gray-700  dark:bg-zinc-300 dark:bg-none ">
          <div  className="lg:m-7 m-4 text-sm md:text-base lg:text-lg  uppercase text-slate-400  tracking-wider lg:font-medium dark:text-black">
          Jatin Mehta
          </div>

          <div className="ml-auto ">
            <a href="https://github.com/JatinMehta007/Portfolio" target="_blank" rel="noopener noreferrer">
          <button>
            <img src={github} alt="" className="lg:p-4 h-7 mt-2 w-7 md:h-8 md:w-8  lg:h-20 lg:w-20 lg:mt-0  rounded-full transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 border-gray-600 hover:border hover:border-gray-900 dark:hover:border-gray-300 dark:hover:scale-100" />
          </button>
          </a>
          </div>
     <div>
        <a href="https://www.linkedin.com/in/jatin-mehta-a70a0025a/" target="_blank" rel="noopener noreferrer">
        <button>    
        <img src={linkdin} alt="" className="lg:p-4 h-7 m-3 mt-5 lg:m-0  w-7 md:h-8 md:w-8   lg:h-20 lg:w-20 lg:mt-0 rounded-full transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 border-gray-600 hover:border hover:border-gray-900 dark:hover:border-gray-300 dark:hover:scale-100" />
        </button>
        </a>
     </div>
     <div>
        <a href="/Jatin_Resume 1.pdf" download target="_blank" rel="noopener noreferrer">
        <button>    
        <img src={resume} alt="" className="lg:p-4 h-7 mt-2 w-7 md:h-8 md:w-8  mr-2 lg:h-20 lg:w-20 lg:m-0 rounded-full transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 lg:border-gray-600 lg:hover:border lg:hover:border-gray-900 dark:hover:border-gray-300 dark:hover:scale-100 " />
        </button>
        </a>
     </div>
      </div>
     <div
      onClick={toggleTheme}
      className="border absolute w-auto top-6 lg:top-10 right-1  md:right-4 lg:right-0  p-1 lg:p-2 rounded-md mt-8 lg:mt-11 border-zinc-700 cursor-pointer hover:bg-zinc-700  lg:mr-20 z-50"

    >
      {theme === "light" ? (
        // Moon icon for light mode
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ) : (
        // Sun icon for dark mode
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050505" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
      )}
    </div>
 </div>
    )
}
