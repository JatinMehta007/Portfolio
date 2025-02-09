"use client";
import React from "react";
import { AnimatedTooltip } from "../components/ui/profile";

const people = [
  {
    id: 1,
    name: "Jatin Mehta",
    designation: "Developer",
    image:
      "https://i.postimg.cc/YC9vptPs/image.png",
  },
];

export function ProfilePic() {
  return (
    <div className=" mt-14 m-auto pr-[1200px]  ">
      <AnimatedTooltip items={people} />
    </div>
  );
}
