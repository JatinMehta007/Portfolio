import React from "react";
import { TextHoverEffectDemo } from "./main/text";
import { Nav } from "./main/navbar"; 
import { SVGMaskEffectDemo } from "./main/svg"; 
import { Grid } from "./main/grid";
import { Tabs } from "./main/tabs";
import { InfiniteMovingCardsDemo } from "./main/moving-stack";

 function App() {
  return (
    <div className="w-screen h-full bg-gradient-to-r from-gray-900 via-black to-gray-950">
      <div>
      <Nav/>
      </div>

        <div className="mt-40">
      <TextHoverEffectDemo/>
        </div>
      <div className="">
        <SVGMaskEffectDemo/>
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
      <div className="text-slate-600 text-center mt-4 font-medium tracking-widest ">
              <p>© 2024 Jatin Kumar Mehta. All Rights Reserved.</p>
        <p>mehtajatin045@gmail.com</p>
    <p>Design and developed by</p> <span className="text-orange-500">JATIN KUMAR MEHTA</span>
      </div>
    </div>

  );
}

export default App