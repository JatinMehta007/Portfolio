import React from "react";
export const Tabs=()=>{
    return (
        <div className="flex mt-20 justify-center items-center ">
            <div className="grid grid-cols-2  gap-20 text-white h-[800px]">
                <div className="col-span-1 bg-gray-900  w-72 rounded-3xl h-80">
                    <div className="text-white m-10 bg-gradient-to-tl from-pink-400 via-purple-500 to-purple-800  h-28 rounded-3xl">
                        sda
                    </div>
                    <div className="uppercase text-slate-500 font-semibold text-center">
                        github
                    </div>
                    <div className="col-span-1 bg-gray-900 rounded-3xl h-80 mt-40">    
                    <div className="text-white m-10 bg-gradient-to-tl from-pink-400 via-purple-500 to-purple-800  h-28 rounded-3xl">
                    assd
                    </div>
                    <div className="uppercase text-slate-500 font-semibold text-center">
                        linkdin
                    </div>

                    </div>
                </div>

                <div className="bg-gray-900 rounded-3xl col-span-1 h-80 mt-20">

                <div className="text-white m-10   bg-gradient-to-tl from-pink-400 via-purple-500 to-purple-800  h-28 rounded-3xl">
                    adsf
                    </div>

                    <div className="uppercase text-slate-500 font-semibold text-center">
                        Notion
                    </div>
                    <div className="col-span-1 bg-gray-900 rounded-3xl mt-40 h-80">
                    <div className="text-white m-10 bg-gradient-to-tl from-pink-400 via-purple-500 to-purple-800  h-28 rounded-3xl">
                        as
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