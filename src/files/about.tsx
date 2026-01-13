import { IconBrandGithub, IconWorld } from "@tabler/icons-react";
import { TracingBeam } from "../components/ui/tracing-beam";
import { cn } from "../lib/utils";
import react from "../images/stack1.png";
import tailwind from "../images/stack2.png";
import accertinity from "../images/stack18.png";
import { Link } from "react-router-dom";

export function About() {
  return (
    <>
      <div className=" w-screen min-h-screen font-hanken relative bg-white text-black dark:bg-black dark:text-white">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:48px_50px]",
            // light grid
            "bg-white [background-image:linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)]",
            // dark grid
            "dark:bg-black dark:[background-image:linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        ></div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)] "></div>

        <div className="bg-gradient-to-r from-white to-white dark:from-neutral-950 dark:to-neutral-950">
          <TracingBeam className="relative">
            <div className=" relative gap-10 top-40 h-52 w-full grid grid-cols-2">
              <div className="dark:bg-black bg-white">
                <img src="./dev.png" alt="" />
                <div className="flex justify-between px-3 mt-2">
                  <p>DevToolBox</p>
                  <div className="flex gap-7">
                    <IconBrandGithub className="text-slate-400"></IconBrandGithub>
                    <IconWorld className="text-slate-400"></IconWorld>
                  </div>
                </div>
                <div className="font-title text-justify text-zinc-400 text-sm mt-5 px-3">
                  For tech logos, icons, color palettes or even AI-powered
                  developer tools — DevToolbox has it all, right at your
                  fingertips.
                </div>
                <div className="flex gap-2 mt-5 px-3">
                    <img src={react} alt="react" className="h-7" />

                    <img src={tailwind} alt="tailwind" className="h-7"/>

                    <img src={accertinity} alt="accertintity" className="h-7" />
                </div>
              </div>

              <div className="dark:bg-black bg-white ">
                <img src="./dev.png" alt="" />
                <div className="flex justify-between px-3 mt-2">
                  <p>DevToolBox</p>
                  <div className="flex gap-7">
                    <a href="">
                    <IconBrandGithub className="text-slate-400"></IconBrandGithub>
                    </a>
                    <a href="">
                    <IconWorld className="text-slate-400"></IconWorld>
                    </a>
                  </div>
                </div>
                <div className="font-title text-justify text-zinc-400 text-sm mt-5 px-3">
                  For tech logos, icons, color palettes or even AI-powered
                  developer tools — DevToolbox has it all, right at your
                  fingertips.
                </div>
                <div className="flex gap-2 mt-5 px-3">
                    <img src={react} alt="react" className="h-7" />

                    <img src={tailwind} alt="tailwind" className="h-7"/>

                    <img src={accertinity} alt="accertintity" className="h-7" />
                </div>
              </div>
            </div>


            {/* <div className=" relative gap-10 top-40 h-52 w-full grid grid-cols-2">
              <div className="bg-black ">
                <img src="./dev.png" alt="" />
                <div className="flex justify-between px-3 mt-2">
                  <p>DevToolBox</p>
                  <div className="flex gap-7">
                    <IconBrandGithub></IconBrandGithub>
                    <IconWorld></IconWorld>
                  </div>
                </div>
                <div className="font-title text-justify text-zinc-400 text-sm mt-5 px-3">
                  For tech logos, icons, color palettes or even AI-powered
                  developer tools — DevToolbox has it all, right at your
                  fingertips.
                </div>
                <div className="flex gap-2 mt-5 px-3">
                    <img src={react} alt="react" className="h-7" />

                    <img src={tailwind} alt="tailwind" className="h-7"/>

                    <img src={accertinity} alt="accertintity" className="h-7" />
                </div>
              </div>

              <div className="bg-black ">
                <img src="./dev.png" alt="" />
                <div className="flex justify-between px-3 mt-2">
                  <p>DevToolBox</p>
                  <div className="flex gap-7">
                    <a href="">
                    <IconBrandGithub></IconBrandGithub>
                    </a>
                    <a href="">
                    <IconWorld></IconWorld>
                    </a>
                  </div>
                </div>
                <div className="font-title text-justify text-zinc-400 text-sm mt-5 px-3">
                  For tech logos, icons, color palettes or even AI-powered
                  developer tools — DevToolbox has it all, right at your
                  fingertips.
                </div>
                <div className="flex gap-2 mt-5 px-3">
                    <img src={react} alt="react" className="h-7" />

                    <img src={tailwind} alt="tailwind" className="h-7"/>

                    <img src={accertinity} alt="accertintity" className="h-7" />
                </div>
              </div>
            </div> */}
          </TracingBeam>
        </div>
      </div>
    </>
  );
}
