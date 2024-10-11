import React from "react";
import git from "../images/git.png";
import notion from "../images/notion.png";
import linkdin from "../images/link.png";
import twitter from "../images/twitter.png";

export const Tabs=()=>{
    return (
        <div className="flex mt-20 justify-center  items-center ">
            <div className="grid grid-cols-2   gap-20 text-white h-[800px] ">
                
                <div className="col-span-1 hover:bg-gradient-to-r ease-in-out duration-1000 transition-all   bg-gradient-to-r from-black via-gray-900  w-72 rounded-3xl h-80 hover:rotate-6 hover:border-gray-700 hover:border border-transparent"> 
                <a href="">

                    <div className="text-white  m-10 bg-gradient-to-t from-pink-400 via-purple-400 to-purple-800  h-32 rounded-3xl ">
                        <div>
                        <img src={git} alt="" className="px-20 pt-9"/>
                        </div>
                    </div>
                    <div className="uppercase text-slate-500 font-semibold text-center">
                        github
                    </div>
                </a>

                    <div className="col-span-1  bg-gradient-to-r from-black via-gray-900 rounded-3xl h-80 mt-40 ease-in-out duration-1000 transition-all hover:border-gray-700 hover:border border-transparent">    
                    <div className="h-2"></div>
                    <div className="text-white m-10 bg-gradient-to-tl from-yellow-200  to-pink-400   h-32 rounded-3xl">
                    <div>
                        <img src={linkdin} alt="" className="px-20 pt-9"/>
                        </div>
                    </div>
                    <div className="uppercase text-slate-500 font-semibold text-center">
                        linkdin
                    </div>
                    </div>
                </div>

                <div className=" rounded-3xl col-span-1 h-80 mt-20  bg-gradient-to-r from-black via-gray-900 ease-in-out duration-1000 transition-all hover:-rotate-6 hover:border-gray-700 hover:border border-transparent">

                <div className="text-white m-10   bg-gradient-to-tl from-gray-600   to-gray-300 h-32 rounded-3xl">
                <div>
                        <img src={notion} alt="" className="px-20 pt-9"/>
                        </div>
                    </div>
                    <div className="uppercase text-slate-500 font-semibold text-center">
                        Notion
                    </div>


                    <div className="col-span-1  bg-gradient-to-r from-black via-gray-900 rounded-3xl mt-40 h-80 hover:border-gray-700 hover:border border-transparent">
                    <div className="h-2"></div>
                    <div className="text-white mt-10 m-10  bg-gradient-to-t from-yellow-200 to-blue-400  h-32 rounded-3xl">
                    <div>
                        <img src={twitter} alt="" className="px-20 pt-9"/>
                        </div>
                    </div>
                    <div className="uppercase text-slate-500 font-semibold text-center">
                        twitter
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}