"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../components/ui/navbar"; 
import { cn } from "../lib/utils"; 
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

export function NavbarDemo() {
  return (
    (<div className="relative w-full flex items-center justify-center ">
      <Navbar className="top-2" />
      
    </div>)
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}>
      
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          
        </MenuItem>
      </Menu>
      
    </div>)
  );
}
