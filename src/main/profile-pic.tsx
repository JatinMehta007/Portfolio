"use client";
import React from "react";
import { AnimatedTooltip } from "../components/ui/profile";

const people = [
  {
    id: 1,
    name: "Jatin Mehta",
    designation: "Developer",
    image:
      "https://i.postimg.cc/4xPPDK1z/5B0A5467.jpg",
  },
];

export function ProfilePic() {
  return (
    <div className=" lg:mt-16 md:mt-11 m-auto  lg:pr-[1200px] md:pr-[750px]  ">

      <AnimatedTooltip items={people} /> 
    </div>
  );
}
