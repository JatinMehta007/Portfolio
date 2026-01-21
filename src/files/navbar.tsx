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
      <div className="flex mt-[170px] md:mt-[100px] ml-auto text-black dark:text-white md:mr-12 lg:mr-4">
        <div className="p-3 rounded-xl relative sm:right-10 hover:bg-stone-200 dark:hover:bg-stone-800">
          <a
            href="https://twitter.com/JatinMehta35630"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXLine size={24} className="dark:text-zinc-200" />
          </a>
        </div>
        <div className="p-3 rounded-xl relative sm:right-6 hover:bg-stone-200 dark:hover:bg-stone-800">
          <a
            href="https://www.linkedin.com/in/jatin-mehta-a70a0025a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkedinFill size={24} className="dark:text-zinc-200" />
          </a>
        </div>
        <div className="p-3 right-3 rounded-xl relative hover:bg-stone-200 dark:hover:bg-stone-800">
          <a
            href="https://github.com/JatinMehta007/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGithubFill className="dark:text-zinc-200" size={24} />
          </a>
        </div>

        <div className="p-3  rounded-xl relative hover:bg-stone-200 dark:hover:bg-stone-800">
          <a
            href="https://github.com/JatinMehta007/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiNotionFill className="dark:text-zinc-200" size={24}></RiNotionFill>
          </a>
        </div>
      </div>
    </div>
  );
};
