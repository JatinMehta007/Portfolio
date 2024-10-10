import React from "react";
import { TextHoverEffectDemo } from "./image/text";
import { NavbarDemo } from "./image/nav";
import { Nav } from "./components/ui/navb";

 function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-gray-950 via-black to-gray-950">
      <div>
      <Nav/>
      </div>
      <div className="mt-20">
      <TextHoverEffectDemo/>
      </div>
      <div className="text-9xl text-white">
        adsfsadf
      </div>

      <div className="text-9xl text-white">
        adsfsadf
      </div>

      <div className="text-9xl text-white">
        adsfsadf
      </div>

      <div className="text-9xl text-white">
        adsfsadf
      </div>
    </div>

  );
}

export default App