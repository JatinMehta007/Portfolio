import { Nav } from "./files/navbar";
import { Grid } from "./files/projects";
import { InfiniteMovingCardsDemo } from "./main/moving-stack";
import { cn } from "./lib/utils";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconMail,
  IconBrandNotion,
} from "@tabler/icons-react";
import { TracingBeam } from "./components/ui/tracing-beam";
import GithubActivity from "./main/Github-activity";
import SmoothWrapper from "./components/ui/scroll";
import { TooltipBubble } from "./components/ui/tooltip";
import MyDemo from "./components/ui/decorative-box";


function App() {
  return (
    <>
      <SmoothWrapper>
        <div className="w-screen flex justify-center items-center  min-h-screen font-hanken  bg-white text-black dark:bg-black dark:text-white">
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

          <div className="bg-gradient-to-r w-[60%] from-white to-white dark:from-neutral-950 dark:to-neutral-950">
            <TracingBeam className="relative">
              <div className="pt-20">
              <MyDemo></MyDemo>
              </div>
              <div>
                <Nav />
              </div>

              <div className="md:text-base font-title sm:text-sm max-w-4xl text-left m-4 lg:mt-12 md:mt-8 text-gray-900 dark:text-gray-300 relative ml-10 md:ml-16 lg:ml-14 xl:ml-4 mt-0 text-xs dark:bg-black [border-image:repeating-linear-gradient(45deg,_#3f3f46_0,_#3f3f46_8px,_transparent_8px,_transparent_16px)_1] border p-2">
                A passionate Full-Stack Developer and UI Designer. I specialize
                in creating responsive, user-friendly web applications with a
                strong focus on UI/UX design. Eager to apply my skills in
                real-world scenarios, I’m actively seeking internship
                opportunities where I can contribute to impactful projects, grow
                as a developer, and learn from industry professionals.
              </div>
              {/* Projects */}
              <div>
                <Grid />
              </div>
              {/* Skills */}
              <div>
                <InfiniteMovingCardsDemo />
              </div>

            <div class="border border-dashed mt-20 rounded-xl p-6">
          <h3 class="text-lg font-medium mb-4">GitHub Sponsors</h3>

          <div class="flex flex-col gap-3 items-center mt-20 justify-center text-center text-gray-500 dark:text-gray-400">
            <p>No sponsors yet</p>
            <a
              href="https://github.com/sponsors/JatinMehta007"
              target="_blank"
              class="px-3 py-1.5 rounded-md border border-gray-600 hover:bg-gray-800 transition text-sm"
              >
              Be the first sponsor 💜
            </a>
          </div>
         </div>

         <GithubActivity></GithubActivity>
         
              {/* <Contact/> */}
              <hr className=" border-1 border-slate-800 mt-10 md:ml-20 xl:ml-0 lg:ml-16 md:mr-14 lg:mr-0 relative bottom-80 lg:bottom-0 md:bottom-28 w-[350px]  mx-auto md:w-[85%] lg:w-[92%] xl:w-full " />
              <div className=" text-zinc-500  p-5 relative bottom-80 lg:bottom-0 md:bottom-28">
                <p className="md:px-24 lg:px-16 xl:px-0 px-2 font-light text-xs sm:text-sm">
                  Jatin Mehta
                </p>
                <div className="flex justify-end gap-4 sm:gap-7 md:mr-8 lg:mr-0 cursor-pointer relative bottom-6">
                  <a
                    href="https://twitter.com/JatinMehta35630"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <TooltipBubble label="Twitter">
                      <IconBrandTwitter className="text-zinc-500 hover:text-zinc-300 w-4 sm:w-5"></IconBrandTwitter>
                    </TooltipBubble>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jatin-mehta-a70a0025a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <TooltipBubble label="Linkedin">
                      <IconBrandLinkedin className="text-zinc-500 hover:text-zinc-300 w-4 sm:w-5"></IconBrandLinkedin>
                    </TooltipBubble>
                  </a>
                  <a
                    href="mailto:mehtajatin045@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <TooltipBubble label="mail">
                      <IconMail className="text-zinc-500 hover:text-zinc-300 w-4 sm:w-5"></IconMail>
                    </TooltipBubble>
                  </a>
                  <a
                    href="https://github.com/JatinMehta007"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <TooltipBubble label="Github">
                      <IconBrandGithub className="text-zinc-500 hover:text-zinc-300 w-4 sm:w-5"></IconBrandGithub>
                    </TooltipBubble>
                  </a>
                  <a
                    href="https://www.notion.so/Jatin-Kumar-Mehta-110ba337e0ad80f78fc4dc0cd559e43d?source=copy_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <TooltipBubble label="Notion">
                      <IconBrandNotion className="text-zinc-500 hover:text-zinc-300 w-4 sm:w-5"></IconBrandNotion>
                    </TooltipBubble>
                  </a>
                </div>
              </div>
            </TracingBeam>
          </div>
        </div>
      </SmoothWrapper>
                    
    </>
  );
}

export default App;
