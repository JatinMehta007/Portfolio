"use client";
import { IconLocation, IconMapPin } from "@tabler/icons-react";
import { AnimatedTooltip } from "../components/ui/profile";

const people = [
  {
    id : 1,
    name: "Jatin Mehta",
    designation: "Developer",
    image:
      "https://i.postimg.cc/DwwNdbQD/avatar.jpg",
  },
];

export function ProfilePic() {
  return (
    <div className="lg:mt-16 mt-20 ml-10 sm:ml-0 relative md:left-16 lg:left-14 xl:left-0 md:mt-16 m-auto xl:pr-[700px] flex">
      <AnimatedTooltip items={people} /> 
      <div className="relative left-6 w-screen ">
      <p className=" font-semibold text-3xl">Jatin Mehta</p>
      <div className="flex gap-1 text-xs ">
      <IconMapPin className="w-[15px]"></IconMapPin>
      <p className="mt-1">Jaipur,India</p>
      </div>
      </div>
      
    </div>
  );
}
