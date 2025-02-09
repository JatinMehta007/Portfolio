import React from "react";
import git from "../images/git.png";
import notion from "../images/notion.png";
import linkdin from "../images/link.png";
import twitter from "../images/twitter.png";

export const Tabs=()=>{
    return (
        <div className="flex sm:mt-20 justify-center  items-center ">
            <div className="sm:grid sm:grid-cols-2 sm:gap-20 text-white sm:h-[800px] h-[1400px]">
                
                <div className="sm:col-span-1 hover:bg-gradient-to-r ease-in-out duration-1000 transition-all   bg-gradient-to-r from-black via-gray-900  w-72 rounded-3xl h-80 hover:rotate-6 hover:border-gray-700 hover:border border-transparent dark:bg-white dark:dark:bg-none"> 
                <a href="https://github.com/JatinMehta007" target="_blank" rel="noopener noreferrer">
                    <div className="h-2 sm:hidden"></div>
                    <div className="text-white  m-10 bg-gradient-to-t from-pink-400 via-purple-400 to-purple-800  h-32 rounded-3xl ">
                        <div>
                        <img src={git} alt="" className="px-20 pt-9"/>
                        </div>
                    </div>
                    <div className="uppercase text-slate-500 font-semibold text-center">
                        <p>github</p>
                        <span className="text-xs text-center m-2">Be sure to browse my GitHub to delve into the repositories of my latest projects.</span>
                    </div>
                </a>

                    <div className="sm:col-span-1  bg-gradient-to-r from-black via-gray-900 rounded-3xl h-80 sm:mt-20 mt-10 ease-in-out duration-1000 transition-all hover:border-gray-700 hover:border border-transparent dark:bg-white dark:bg-none">    
                    <div className="h-2"></div>
                    <a href="https://www.linkedin.com/in/jatin-mehta-a70a0025a/" target="_blank" rel="noopener noreferrer">
                    <div className="text-white m-10 bg-gradient-to-tl from-yellow-200  to-pink-400   h-32 rounded-3xl">
                    <div>
                        <img src={linkdin} alt="" className="px-20 pt-9"/>
                        </div>
                    </div>
                    <div className="uppercase text-slate-500 font-semibold text-center">
                        <p>linkdin</p>
                        <span className="text-xs text-center m-4 ">Let’s connect on LinkedIn! Reach out to me.  </span>
                    </div>
                    </a>
                    </div>
                </div>

                <div className=" rounded-3xl col-span-1 w-72 h-80 sm:mt-20 mt-96 bg-gradient-to-r from-black via-gray-900 ease-in-out duration-1000 transition-all hover:-rotate-6 hover:border-gray-700 hover:border border-transparent dark:bg-white dark:bg-none">
            <a href="https://www.notion.so/Jatin-Kumar-Mehta-110ba337e0ad80f78fc4dc0cd559e43d" target="_blank" rel="noopener noreferrer">
                <div className="h-2 sm:hidden"></div>
                <div className="text-white m-10   bg-gradient-to-tl from-gray-600   to-gray-300 h-32 rounded-3xl">
                <div>
                        <img src={notion} alt="" className="px-20 pt-9"/>
                        </div>
                    </div>
                    <div className="uppercase text-slate-500 font-semibold text-center">
                        <p>Notion</p>
                        <span className="text-xs text-center m-4">Discover all my projects here to experience the amazing interfaces of my great works.</span>
                    </div>
            </a>

                    <div className="col-span-1  bg-gradient-to-r from-black via-gray-900 rounded-3xl mt-20 h-80 hover:border-gray-700 hover:border border-transparent dark:bg-white dark:bg-none">
                    <div className="h-2"></div>
                    <a href="
                    https://x.com/JatinMehta35630" target="_blank" rel="noopener noreferrer">

                    <div className="text-white mt-10 m-10  bg-gradient-to-t from-yellow-200 to-blue-400  h-32 rounded-3xl">
                    <div>
                        <img src={twitter} alt="" className="px-20 pt-9"/>
                        </div>
                    </div>
                    <div className="uppercase text-slate-500 font-semibold text-center">
                        <p>twitter</p>
                        
                        <span className="text-xs text-center m-2">Let's connect with me and work together.</span>

                    </div>
                    </a>
                </div>
                </div>

            </div>
        </div>

)
}