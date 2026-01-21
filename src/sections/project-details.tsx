import { useState } from "react";
import { IconWorld } from "@tabler/icons-react";
import reactLogo from "../images/stack1.png";
import tailwind from "../images/stack2.png";
import accertinity from "../images/stack18.png";
import nodejs from "../images/stack3.png";
import express from "../images/stack4.png";
import prisma from "../images/stack24.png";
import typescript from "../images/stack11.png";
import html from "../images/stack9.png";
import CSS from "../images/stack10.png";
import { PinContainer } from "../components/ui/3d-pin";
import { RiGithubFill } from "@remixicon/react";
 
export function ProjectDetails() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      img: "./coming.png",
      img1: "./bg1.jpg",
      title: "Jame",
      status: "building",
      alt:"Jame",
      pinTitle: "Jame.com",
      desc: "A Payment website.......",
      stack: [reactLogo, tailwind, accertinity],
    },
    {
      img: "./dev1.png",
      img1: "./bg.png",
      title: "DevToolBox",
      status: "live",
      alt:"DevToolBox",
      desc: "For tech logos, icons, color palettes or even AI-powered developer tools — DevToolbox has it all, right at your fingertips....",
      pinTitle: "devtoolbox.com",
      github_Link : "https://github.com/JatinMehta007/DevToolBox",
      pinLink: "https://dev-tool-box-jatin.vercel.app/",
      stack: [reactLogo, tailwind, accertinity],
    },
    {
      img: "./decplatter.png",
      img1: "./bg3.jpg",
      title: "DocPlatter",
      status: "live",
      alt:"Docplatter",
      github_Link: "https://github.com/JatinMehta007/DocPlatter",
      desc: "Is a simple yet powerful patient meal management system. It allows managers to register patients and assign meals....",
      pinTitle: "docplatter.com",
      pinLink: "https://docplatter-jatinmehta.vercel.app/",
      stack: [reactLogo, tailwind, accertinity, nodejs, express, prisma],
    },
    {
      img: "./victor.png",
      img1: "./bg2.jpg",
      title: "Victor Blog",
      status: "live",
      alt:"Victor",
      desc: "Where Words Build Worlds - a platform designed for the passionate storyteller. Is a powerful and user-friendly blogging....",
      pinTitle: "victor.com",
      github_Link: "https://github.com/JatinMehta007/Victor",
      pinLink: "https://victor-jatinmehta.vercel.app/",
      stack: [reactLogo, tailwind, accertinity, typescript, prisma],
    },
    {
      img: "./freelance.png",
      img1: "./bg3.jpg",
      title: "Freelance Portfolio",
      status: "live",
      alt:"Gemstone",
      desc: "A visually rich and responsive gemstone showcase website that allows users to explore a curated collection.......",
      pinTitle: "gemstone.com",
      github_Link: "https://github.com/JatinMehta007/Freelance-project",
      pinLink: "https://freelance-project-demo.vercel.app/",
      stack: [reactLogo, tailwind, accertinity],
    },
    {
      img: "./alabay.png",
      img1: "./bg4.jpg",
      title: "Alabay",
      status: "live",
      alt:"Alabay",
      pinTitle: "alabay.com",
      github_Link: "https://github.com/JatinMehta007/Alabay",
      pinLink : "https://alabayjatinmehta-jatins-projects-a1a570d0.vercel.app/",
      desc: "For tech logos, icons, color palettes or even AI-powered developer tools — DevToolbox has it all, right at your fingertips......",
      stack: [reactLogo, tailwind, accertinity],
    },
    {
      img: "./github.png",
      img1: "./bg1.jpg",
      title: "Github Activity Viewer",
      status: "live",
      alt:"Github Activity Viewer",
      pinTitle: "Repo.com",
      github_Link: "https://github.com/JatinMehta007/Github_repo_viewer",
      pinLink : "https://repo-jatinmehta.vercel.app/",
      desc: "A React + TypeScript application that takes a GitHub username and shows: A list of their public repositories An advanced daily commit....",
      stack: [reactLogo, tailwind, accertinity],
    },
    {
      img: "./royal.png",
      img1: "./bg4.jpg",
      title: "Royal Enfield Clone",
      status: "live",
      alt:"Royal Enfield",
      pinTitle: "Royal.com",
      github_Link: "https://github.com/JatinMehta007/Royal",
      pinLink : "https://royal-enfield-jatin.vercel.app/",
      desc: "In my First Year I built A beautifully designed static website inspired by Royal Enfield motorcycles....",
      stack:[html, CSS],
    }, {
      img: "./amazon.png",
      img1: "./bg2.jpg",
      title: "Amazon Clone",
      status: "live",
      alt:"Amazon",
      pinTitle: "amazon.com",
      github_Link: "https://github.com/JatinMehta007/Amazon-Clone",
      pinLink : "https://jatinmehta007.github.io/Amazon-Clone/",
      desc: "As we all start to code by creating the first clone which is Amazon Clone....",
      stack: [html, CSS],
    },
    {
      img: "./ixigo.png",
      img1: "./bg3.jpg",
      title: "Ixigo Clone",
      status: "live",
      alt:"Ixigo",
      pinTitle: "ixigo.com",
      github_Link: "https://github.com/JatinMehta007/IXIGO-TRAIN-APP-CLONE",
      pinLink : "https://jatinmehta007.github.io/IXIGO-TRAIN-APP-CLONE/",
      desc: "In my First Year I designed the Ixigo Train website clone....",
      stack: [html,CSS],
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className=" font-hanken text-black dark:text-white">
      <div className="bg-gradient-to-r from-white to-white dark:from-neutral-950 dark:to-neutral-950">
        <div className=" md:gap-1 lg:gap-10 w-full  grid sm:grid-cols-2  ">
          {visibleProjects.map((p, i) => (
            <div key={i} className= "group dark:bg-black  m-5 lg:m-0 bg-white [border-image:repeating-linear-gradient(45deg,_#3f3f46_0,_#3f3f46_8px,_transparent_5px,_transparent_16px)_1] border p-3">
              <div className="dark:bg-neutral-900 h-[150px] md:h-auto bg-neutral-200 border-2 border-double rounded-lg  border-zinc-700  overflow-hidden">
                <PinContainer
                  title={p.pinTitle}
                  className="w-[100%]   relative group "
                  href={p.pinLink}
                >
                  {/* background image */}
                  <img
                    src={p.img1}
                    className="absolute inset-0 w-full h-full object-cover sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    alt=""
                  />

                  {/* front image */}
                  <div className="p-5 sm:p-10">
                    <img
                      src={p.img}
                      className="relative dark:border-zinc-600 border rounded-lg  transition  ease-in-out delay-150 group-hover:translate-y-3  duration-100 "
                      alt={p.alt}
                    />
                  </div>
                </PinContainer>
              </div>

              <div className="flex justify-between px-3 mt-2">
                <p>{p.title}</p>
                <div className="flex gap-7">
                  <a href={p.github_Link} target="_blank" rel="noopener noreferrer">
                  <RiGithubFill className="hover:text-zinc-600"/>
                  </a>
                  <a href={p.pinLink}>
                  <IconWorld className="dark:text-slate-300 hover:text-zinc-500 dark:hover:text-zinc-600" />
                  </a>
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
                    <div className={`absolute inline-flex h-3 w-3 rounded-full opacity-75 animate-ping ${p.status === "live" ? "bg-green-400" : "bg-red-400"}`}></div>

                    {/* <!-- inner dot --> */}
                    <div className={`relative inline-flex h-2 w-2 rounded-full ${p.status === "live" ? "bg-green-500" : "bg-red-500"}`}></div>
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-300 font-medium">
                    {p.status === "live" ? "Live" : "Building"}
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
            className="px-4 py-2 border bg-neutral-700 text-white dark:text-black font-bold border-white dark:border-gray-600 dark:bg-neutral-300 rounded-lg text-sm hover:bg-neutral-600 dark:hover:bg-neutral-100 transition outline-double outline-2 dark:outline-white outline-black"
          >
            {showAll ? "Show Less" : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}