import React from "react";
import { TextHoverEffectDemo } from "./main/text";
import { Nav } from "./main/navbar"; 
import { SVGMaskEffectDemo } from "./main/svg"; 
import { Grid } from "./main/grid";
import { Tabs } from "./main/tabs";

 function App() {
  return (
    <div className="w-screen h-full bg-gradient-to-r from-gray-950 via-black to-gray-950">
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
    </div>

  );
}

export default App