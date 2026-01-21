import React from "react";
import { ProfilePic } from "../main/profile-pic";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiNotionFill,
  RiTwitterXLine,
} from "@remixicon/react";

export const Nav = () => {
  return (
    <div className="flex ">
      <div className="absolute ">
        <ProfilePic />
      </div>
      <div className="flex mt-[180px]  md:mt-[100px] mx-auto md:ml-auto md:mx-0 text-black gap-10  md:gap-5 dark:text-white ">
        <div className="p-3 rounded-xl relative  hover:bg-stone-200 dark:hover:bg-stone-800">
          <a
            href="https://twitter.com/JatinMehta35630"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXLine size={24} className="dark:text-zinc-200 xl:size-8" />
          </a>
        </div>
        <div className="p-3 rounded-xl relative  hover:bg-stone-200 dark:hover:bg-stone-800">
          <a
            href="https://www.linkedin.com/in/jatin-mehta-a70a0025a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkedinFill size={24} className="dark:text-zinc-200 xl:size-8" />
          </a>
        </div>
        <div className="p-3  rounded-xl relative hover:bg-stone-200 dark:hover:bg-stone-800">
          <a
            href="https://github.com/JatinMehta007/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGithubFill className="dark:text-zinc-200 xl:size-8" size={24} />
          </a>
        </div>

        <div className="p-3 md:right-2 lg:right-0 rounded-xl relative hover:bg-stone-200 dark:hover:bg-stone-800">
          <a
            href="https://bramble-infinity-c93.notion.site/Jatin-Kumar-Mehta-110ba337e0ad80f78fc4dc0cd559e43d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiNotionFill className="dark:text-zinc-200 xl:size-8" size={24}></RiNotionFill>
          </a>
        </div>
      </div>
    </div>
  );
};
