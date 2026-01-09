import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import icon5 from "../images/doc-mobile.png";
import icon6 from "../images/devtoolbox.png";
import icon7 from "../images/freelance.png";
import icon8 from "../images/free.png";
import docplatter from "../images/docplatter.png";
import FadeInSection from "../components/ui/fadeInsection";
import { PinContainer } from "../components/ui/3d-pin";
import { useState } from "react";

export const Grid = () => {
  const [activeTab , setActiveTab] = useState("personal");
  
  return (
    <div className="">
      <div className="uppercase md:text-5xl text-3xl   font-bold md:my-20 mx-auto m-10 text-center   text-blue-400 tracking-widest   relative   overflow-hidden ">
        Projects
      </div>
      <div className="text-white text-center p-10 text-base">
        <div className="">
        <button onClick={() => setActiveTab("personal")} className={`rounded-lg rounded-r-none  border-r-0 border px-10 py-1 ${activeTab === "personal" ? "py-[5px] bg-stone-900 border-dashed"   : "py-[7px] p-1 "}` }>
       Personal Projects 
        </button>
        <button  onClick={() => setActiveTab("client")}   className={`rounded-lg rounded-l-none  border-l-0 border px-10 ${activeTab === "client" ? "p-1 bg-stone-900 border-dashed" : "p-2 "}`} >
          Client   Projects
        </button>
        </div>
      </div>
      {activeTab === "personal" && (
        <div className="grid grid-cols-3  text-white  md:gap-16 ">
        <div className="col-span-2 border-white rounded-3xl   ">
          <PinContainer
            title="docplatter.com"
            className="md:w-[400px] lg:w-[90%] xl:w-[100%] w-[110%] xl:left-0  left-1/4 lg:left-20 relative"
            href="https://docplatter-jatinmehta.vercel.app/"
            >
            <FadeInSection direction="left">
              <img
                src={docplatter}
                alt="Docplatter"
                className="md:rounded-3xl rounded-lg transition ease-in-out delay-150 hover:translate-x-1 hover:scale-95 duration-1000 border border-white "
                />
            </FadeInSection>
          </PinContainer>

          <div className=" col-span-2   border-white   rounded-3xl ">
            <FadeInSection direction="left">
              <PinContainer
                title="victor.com"
                className=" xl:w-[100%] lg:w-[90%] md:w-[400px] bottom-[100px] lg:left-20  left-1/4 xl:left-0   xl:top-7 lg:top-4 md:-top-14  w-[110%] relative  "
                href="https://victor-jatinmehta.vercel.app/"
                >
                <img
                  src={icon3}
                  alt="Victor"
                  className="md:rounded-3xl rounded-lg transition ease-in-out delay-150 hover:translate-x-1 hover:scale-95 duration-1000 border border-white "
                  />
              </PinContainer>
            </FadeInSection>
          </div>
          <FadeInSection direction="left">
            <div className=" col-span-2  border-white  rounded-3xl ">
              <PinContainer
                title="alabay.com"
                className="  xl:w-[100%] md:w-[400px] lg:w-[90%]   lg:left-20 xl:top-5 bottom-[225px] left-1/4 xl:left-0 lg:top-4 md:-top-32  w-[110%]"
                href="https://alibay-jatinmehta.vercel.app/"
                >
                <img
                  src={icon1}
                  alt="Alabay"
                  className="md:rounded-3xl rounded-lg transition ease-in-out delay-150 hover:translate-x-1  hover:scale-95 duration-1000 border border-white"
                  />
              </PinContainer>
            </div>
          </FadeInSection>
          <FadeInSection direction="left">
            <div className=" col-span-2  border-white  rounded-3xl ">
              <PinContainer
                title="devtoolbox.com"
                className="  xl:w-[100%] md:w-[400px] lg:w-[90%]   lg:left-20 xl:top-5 bottom-[320px] left-1/4 xl:left-0 lg:top-4 md:-top-32  w-[110%]"
                href="https://dev-tool-box-jatin.vercel.app/"
                >
                <img
                  src={icon6}
                  alt="DevToolbox"
                  className="md:rounded-3xl rounded-lg transition ease-in-out delay-150 hover:translate-x-1  hover:scale-95 duration-1000 border border-white"
                  />
              </PinContainer>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection direction="right">
          <div className="border-white  rounded-3xl hidden md:block ">
            <PinContainer
              title="victor.com"
              className="md:w-[200px] xl:w-[100%]  lg:w-[100%] relative hidden md:block md:right-10 lg:right-0"
              href="https://victor-jatinmehta.vercel.app/"
              >
              <img
                src={icon4}
                alt="Victor"
                className="md:rounded-3xl rounded-lg transition ease-in-out delay-150 hover:translate-x-1 hover:scale-95 duration-1000 border border-white"
                />
            </PinContainer>

            <div className="border-white rounded-3xl xl:mt-44 md:mt-10 lg:mt-36">
              <PinContainer
                title="docplatter.com"
                className="md:w-[200px]  xl:w-[100%] lg:w-[100%]  md:bottom-0   hidden md:block  relative md:right-10   lg:right-0   "
                href="https://docplatter-jatinmehta.vercel.app/"
                >
                <img
                  src={icon5}
                  alt="Docplatter"
                  className="md:rounded-2xl rounded-lg transition  ease-in-out delay-150 hover:translate-x-1    hover:scale-95 duration-1000 border border-white"
                  />
              </PinContainer>
            </div>
             <div className="border-white rounded-3xl xl:mt-44 md:mt-10 lg:mt-36">
              <PinContainer
                title="alabay.com"
                className="md:w-[200px]  xl:w-[100%]  lg:w-[100%]  md:bottom-0   hidden md:block  relative md:right-10   lg:right-0   "
                href="https://alabayjatinmehta-jatins-projects-a1a570d0.vercel.app/"
                >
                <img
                  src={icon2}
                  alt="Alabay"
                  className="md:rounded-2xl rounded-lg transition  ease-in-out delay-150 hover:translate-x-1 hover:scale-95 duration-1000 border border-white"
                  />
              </PinContainer>
            </div>
          </div>
        </FadeInSection>
        
      </div>
      )}
      {activeTab === "client" && <Freelance />}
    </div>
  );
};


export const Freelance = () => {
  return (
    <div className="text-center text-white h-full">
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

