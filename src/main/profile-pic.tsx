"use client";
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
    <div className="lg:mt-16 mt-20 ml-10 sm:ml-0 relative md:left-16 lg:left-14 xl:left-0 md:mt-16 m-auto xl:pr-[700px] ">

      <AnimatedTooltip items={people} /> 
    </div>
  );
}
