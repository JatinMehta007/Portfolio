import { useState } from "react";
import { IconWorld } from "@tabler/icons-react";
import reactLogo from "../images/stack1.png";
import tailwind from "../images/stack2.png";
import accertinity from "../images/stack18.png";
import { PinContainer } from "../components/ui/3d-pin";
import { RiGithubFill } from "@remixicon/react";

export function ProjectDetails() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      img: "./dev.png",
      title: "DevToolBox",
      desc: "For tech logos, icons, color palettes or even AI-powered developer tools — DevToolbox has it all, right at your fingertips.",
      pinTitle:"devtoolbox.com",
      pinLink : "https://dev-tool-box-jatin.vercel.app/",
      stack: [reactLogo, tailwind, accertinity],
    },
    {
      img: "./docplatter.png",
      title: "DocPlatter",
      desc: "For tech logos, icons, color palettes or even AI-powered developer tools — DevToolbox has it all, right at your fingertips.",
      pinTitle:"docplatter.com",
      pinLink:"https://docplatter-jatinmehta.vercel.app/", 
      stack: [reactLogo, tailwind, accertinity],
    },
    {
      img: "./victor.png",
      title: "Victor Blog",
      desc: "For tech logos, icons, color palettes or even AI-powered developer tools — DevToolbox has it all, right at your fingertips.",
      pinTitle : "victor.com",
      pinLink : "https://victor-jatinmehta.vercel.app/",
      stack: [reactLogo, tailwind, accertinity],
    },
    {
      img: "./freelance.png",
      title: "Freelance Portfolio",
      desc: "For tech logos, icons, color palettes or even AI-powered developer tools — DevToolbox has it all, right at your fingertips.",
      pinTitle: "gemstone.com",
      pinLink : "https://freelance-project-demo.vercel.app/",
      stack: [reactLogo, tailwind, accertinity],
    },
    {
      img: "./dev.png",
      title: "Project 5",
      desc: "For tech logos, icons, color palettes or even AI-powered developer tools — DevToolbox has it all, right at your fingertips.",
      stack: [reactLogo, tailwind, accertinity],
    },
    {
      img: "./dev.png",
      title: "Project 6",
      desc: "For tech logos, icons, color palettes or even AI-powered developer tools — DevToolbox has it all, right at your fingertips.",
      stack: [reactLogo, tailwind, accertinity],
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className=" font-hanken bg-white text-black dark:bg-black dark:text-white">
      <div className="bg-gradient-to-r from-white to-white dark:from-neutral-950 dark:to-neutral-950">
        <div className=" gap-10 w-full grid grid-cols-2  ">
          {visibleProjects.map((p, i) => (
            <div key={i} className="dark:bg-black bg-white [border-image:repeating-linear-gradient(45deg,_#3f3f46_0,_#3f3f46_8px,_transparent_5px,_transparent_16px)_1] border p-3">
              <PinContainer
            title={p.pinTitle}
            className=" md:w-[400px] lg:w-[90%] xl:w-[100%]  w-[110%] xl:left-0  left-1/4 lg:left-20 relative  "
            href={p.pinLink}
            >
              <img src={p.img} alt="" className=" transition ease-in-out delay-150 hover:translate-x-1 hover:scale-95 duration-1000" />
            </PinContainer>
              <div className="flex justify-between px-3 mt-2">
                <p>{p.title}</p>
                <div className="flex gap-7">
                  <RiGithubFill  />
                  <IconWorld className="text-slate-700" />
                </div>
              </div>
              <div className="font-title text-justify text-zinc-400 text-sm mt-5 px-3">
                {p.desc}
              </div>
              <div className="flex justify-between items-center mt-5 px-3">
                <div className="flex gap-2">
                {p.stack.map((s, idx) => (
                  <img key={idx} src={s} alt="stack" className="h-7" />
                ))}
                </div>

                <div className="flex items-center justify-end gap-2 ">
              <div className="relative flex items-center justify-center">
                {/* <!-- ping ring --> */}
                <div className="absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75 animate-ping"></div>

                {/* <!-- inner dot --> */}
                <div className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></div>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-300 font-medium">
                Live
              </p>
              </div>
            </div>
              
            </div>
          ))}
        </div>

      </div>
        {projects.length > 4 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-4 py-2 border border-gray-600 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              {showAll ? "Show Less" : "Load More"}
            </button>
          </div>
        )}
    </div>
  );
}