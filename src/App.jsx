import { Nav } from "./files/navbar";
import { SVGMaskEffectDemo } from "./main/svg";
import { Grid } from "./files/grid";
import { InfiniteMovingCardsDemo } from "./main/moving-stack";
import { cn } from "./lib/utils";
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin,IconMail } from "@tabler/icons-react";
import { TracingBeam } from "./components/ui/tracing-beam";

function App() {
  return (
    <>
      <div className="w-screen min-h-screen relative ">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:48px_50px]",
            "[background-image:linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)]",
            "[background-image:linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        ></div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)] "></div>
        
        <div className="bg-gradient-to-r  from-neutral-950 to-neutral-950 ">
          <TracingBeam className="relative">
            {/* Navbar */}
            <div>
              <Nav />
            </div>

            <div className="sm:mt-14 mt-10 ml-5 md:ml-16 xl:ml-0 lg:ml-14">
              <SVGMaskEffectDemo />
            </div>

            <div className="md:text-base  sm:text-sm max-w-xl  dark:font-medium text-left m-4 lg:mt-12 md:mt-8   text-gray-100 dark:text-black relative ml-10 md:ml-16 lg:ml-14 xl:ml-4 mt-0  text-xs">
              A passionate Full-Stack Developer and UI Designer. I specialize in
              creating responsive, user-friendly web applications with a strong
              focus on UI/UX design. Eager to apply my skills in real-world
              scenarios, I’m actively seeking internship opportunities where I
              can contribute to impactful projects, grow as a developer, and
              learn from industry professionals.
            </div>
            {/* Projects */}
            <div>
              <Grid />
            </div>
            {/* Skills */}
            <div>
              <InfiniteMovingCardsDemo />
            </div>
            {/* <Contact/> */}
            <hr className=" border-1 border-slate-800 md:ml-20 xl:ml-0 lg:ml-16 md:mr-14 lg:mr-0 relative bottom-80 lg:bottom-0 md:bottom-28 w-[350px]  mx-auto md:w-[85%] lg:w-[92%] xl:w-full " />
            <div className=" text-zinc-500  p-5 relative bottom-80 lg:bottom-0 md:bottom-28">
              <p className="md:px-24 lg:px-16 xl:px-0 px-2 font-light text-xs sm:text-sm">Jatin Mehta</p>
              <div className="flex justify-end gap-4 sm:gap-7 md:mr-8 lg:mr-0 cursor-pointer relative bottom-6">
                <a href="https://twitter.com/JatinMehta35630" target="_blank"
                rel="noopener noreferrer">
                <IconBrandTwitter className="text-zinc-500 hover:text-zinc-300 w-4 sm:w-5" ></IconBrandTwitter>
                </a>
                <a href="https://www.linkedin.com/in/jatin-mehta-a70a0025a/" target="_blank"
                rel="noopener noreferrer">
                <IconBrandLinkedin className="text-zinc-500 hover:text-zinc-300 w-4 sm:w-5" ></IconBrandLinkedin>
                </a>
                <a href="mailto:mehtajatin045@gmail.com" target="_blank"
                rel="noopener noreferrer">
                <IconMail className="text-zinc-500 hover:text-zinc-300 w-4 sm:w-5"></IconMail>
                </a>
                <a href="https://github.com/JatinMehta007" target="_blank"
                rel="noopener noreferrer"> 
                <IconBrandGithub className="text-zinc-500 hover:text-zinc-300 w-4 sm:w-5" ></IconBrandGithub>
                </a>
              </div>
               </div>
          </TracingBeam>
        </div>
      </div>
    </>
  );
}

export default App;
