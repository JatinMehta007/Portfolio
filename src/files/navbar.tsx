
import { ProfilePic } from "../main/profile-pic";
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin } from "@tabler/icons-react";

export const Nav=()=>{
   
    return (
      <div className=" flex ">
        <div className=" absolute  ">
        <ProfilePic/>
        </div>
  
          <div className="flex mt-[100px] ml-auto md:mr-12 lg:mr-4">
          <div className=" hover:bg-stone-800 p-3 rounded-xl relative sm:right-10">
            <a href="https://twitter.com/JatinMehta35630" target="_blank" rel="noopener noreferrer">
             <IconBrandTwitter size={24} color="#d1d1d1" ></IconBrandTwitter>
          </a>
          </div>
     <div className=" hover:bg-stone-800 p-3 rounded-xl relative sm:right-6">
        <a href="https://www.linkedin.com/in/jatin-mehta-a70a0025a/" target="_blank" rel="noopener noreferrer">
        <IconBrandLinkedin size={24} color="#d1d1d1"></IconBrandLinkedin>
        </a>
     </div>
     <div className=" hover:bg-stone-800 p-3 rounded-xl relative ">
        <a href="https://github.com/JatinMehta007/Portfolio"  target="_blank" rel="noopener noreferrer">
            <IconBrandGithub size={24} color="#d1d1d1" className=""></IconBrandGithub>
       
        </a>
     </div>
          </div>
      </div>

    )
}
