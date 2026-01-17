
import icon7 from "../images/freelance.png";
import icon8 from "../images/free.png";
import FadeInSection from "../components/ui/fadeInsection";
import { PinContainer } from "../components/ui/3d-pin";
import { useState } from "react";
import { ProjectDetails } from "./project-details";

export const Grid = () => {
  const [activeTab , setActiveTab] = useState("personal");
  
  return (
    <div className="">
      <div className="uppercase md:text-2xl text-3xl   font-bold md:my-20 mx-auto text-center   text-zinc-300 tracking-widest   relative  overflow-hidden [border-image:repeating-linear-gradient(45deg,_#3f3f46_0,_#3f3f46_8px,_transparent_5px,_transparent_16px)_1] border p-2 w-[97%]">
        Projects
      </div>
      <div className="text-white text-center p-10 text-base">
        <div className="">
        <button onClick={() => setActiveTab("personal")} className={`rounded-lg rounded-r-none  border-r-0 border px-10 py-1 ${activeTab === "personal" ? "py-[5px] dark:bg-stone-900 dark:text-white dark:border-white text-black border-black border-dashed "   : "py-[7px] p-1 dark:border-white border-black dark:text-white text-black"}` }>
       Personal Projects 
        </button>
        <button  onClick={() => setActiveTab("client")}   className={`rounded-lg rounded-l-none  border-l-0 border px-10 ${activeTab === "client" ? "p-1  dark:bg-stone-900 dark:text-white dark:border-white text-black border-black border-dashed" : "p-2 dark:border-white border-black dark:text-white text-black"}`} >
          Client   Projects
        </button>
        </div>
      </div>
      {activeTab === "personal" && (
      <ProjectDetails></ProjectDetails>
      )}
      {activeTab === "client" && <Freelance  />}
    </div>
  );
};


export const Freelance = () => {
  return (
    <div className="text-center   text-white h-[420px]">
      <div className="grid grid-cols-3  text-white  md:gap-16 ">
        <div className="col-span-2 border-white rounded-3xl  ">
          <PinContainer
            title="gemstone.com"
            className=" md:w-[400px] lg:w-[90%] xl:w-[100%]  w-[110%] xl:left-0  left-1/4 lg:left-20 relative  "
            href="https://freelance-project-demo.vercel.app/"
            >
            <FadeInSection direction="left">
              <img
                src={icon7}
                alt="freelance"
                className="md:rounded-3xl rounded-lg transition ease-in-out delay-150 hover:translate-x-1 hover:scale-95 duration-1000 border border-white "
                />
            </FadeInSection>
          </PinContainer>
          </div>

        <FadeInSection direction="right">
          <div className="border-white  rounded-3xl hidden md:block ">
            <PinContainer
              title="gemstone.com"
              className="md:w-[200px] xl:w-[100%]  lg:w-[100%] relative hidden md:block md:right-10 lg:right-0"
              href="https://freelance-project-demo.vercel.app/"
              >
              <img
                src={icon8}
                alt="freelance"
                className="md:rounded-3xl rounded-lg transition ease-in-out delay-150 hover:translate-x-1 hover:scale-95 duration-1000 border border-white"
                />
            </PinContainer>
          </div>
        </FadeInSection>
          </div>
    </div>
  );
};

