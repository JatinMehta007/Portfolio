"use client";
import React from "react";
import { AnimatedTooltip } from "../components/ui/profile";

const people = [
  {
    id: 1,
    name: "Jatin Mehta",
    designation: "Developer",
    image:
      "https://i.postimg.cc/KvHtCFjC/Whats-App-Image-2025-04-26-at-22-42-37.jpg",
  },
];

export function ProfilePic() {
  return (
    <div className=" lg:mt-16 md:mt-11 m-auto  lg:pr-[1200px] md:pr-[750px]  ">

      <AnimatedTooltip items={people} /> 
    </div>
  );
}
