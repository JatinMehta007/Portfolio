import React from "react";
import { Nav } from "./files/navbar"; 
import { SVGMaskEffectDemo } from "./main/svg"; 
import { Grid } from "./files/grid";
import { Tabs } from "./files/tabs";
import { InfiniteMovingCardsDemo } from "./main/moving-stack";

 function App() {
  return (
    <div className="w-screen h-full bg-gradient-to-r from-gray-900 via-black to-gray-950 dark:bg-white dark:bg-none">
      <div>
      <Nav/>
      </div>

        <div className="sm:mt-40 mt-28">
        <SVGMaskEffectDemo/>
        </div>
      <div className="text-xl text-slate-400 text-center m-20 font-semibold tracking-wider">
      A passionate Full-Stack Developer and UI Designer dedicated to crafting intuitive and dynamic digital experiences.
      </div>
      <div>
        <Grid/>
      </div>
      <div>
        <Tabs/>
      </div>
      <div >
<InfiniteMovingCardsDemo/>
      </div>
      <hr className=" border-1 border-slate-600 m-6"/>
      <div className="text-slate-400 text-center mt-4 font-medium tracking-widest ">
              <p>© 2024 Jatin Kumar Mehta.</p>
        <p>mehtajatin045@gmail.com</p>
    <p>Design and developed by</p> <span className="text-orange-500">JATIN KUMAR MEHTA</span>
      </div>
    </div>

  );
}

export default App