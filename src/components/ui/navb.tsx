import React from "react";
import github from '../../images/github.png'
import linkdin from '../../images/linkdin.png'

export const Nav=()=>{
    return (
      <div className=" flex items-center justify-center ">
      <div className="fixed flex top-0 h-20 m-6 w-[950px] border-transparent transition duration-1000 ease-in-out bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl text-slate-200 hover:border hover:border-gray-700">
          <div  className="m-7 uppercase text-slate-600  tracking-wider font-medium">
          Jatin Mehta
          </div>

          <div className="ml-auto">
          <button>
            <img src={github} alt="" className="p-4 rounded-full transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 hover:border hover:border-gray-900" />
          </button>
          </div>
     <div>
        <button>    
        <img src={linkdin} alt="" className="p-4 rounded-full transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 hover:border hover:border-gray-900" />
        </button>
     </div>
      </div>
 </div>
    )
}