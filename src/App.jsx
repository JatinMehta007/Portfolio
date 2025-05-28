
import { Nav } from "./files/navbar"; 
import { SVGMaskEffectDemo } from "./main/svg"; 
import { Grid } from "./files/grid";
import { Tabs } from "./files/tabs";
import { InfiniteMovingCardsDemo } from "./main/moving-stack";
// import { Contact } from "./main/contact";

 function App() {
  return (
    <div className="w-screen h-full bg-gradient-to-r from-zinc-900 via-black to-zinc-900 dark:bg-white dark:bg-none">
      <div>
      <Nav/>
      </div>

        <div className="sm:mt-40 mt-28">
        <SVGMaskEffectDemo/>
        </div>
      <div className="md:text-xl text-xs text-white dark:font-medium text-center m-4 md:m-20 font-normal tracking-wider dark:text-black">
      A passionate Full-Stack Developer and UI Designer currently in the 3rd year of my B.Tech in Computer Engineering. I specialize in creating responsive, user-friendly web applications with a strong focus on UI/UX design. Eager to apply my skills in real-world scenarios, I’m actively seeking internship opportunities where I can contribute to impactful projects, grow as a developer, and learn from industry professionals.</div>
      <div>
        <Grid/>
      </div>
      <div>
        <Tabs/>
      </div>
      <div >
<InfiniteMovingCardsDemo/>
      </div>
      {/* <Contact/> */}
      <hr className=" border-1 border-slate-600 m-6"/>
      <div className="dark:text-zinc-600 text-zinc-200 text-sm text-center p-4 font-medium tracking-widest ">
              <p>2025-built by Jatin Mehta</p>
      </div>
    </div>

  );
}

export default App