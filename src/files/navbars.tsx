import { ThemeToggle } from "../components/ui/theme";

export function Navbar2() {
    return (
      <div className="
        fixed border border-zinc-100 dark:border-none
        z-50 lg:left-1/2 lg:-translate-x-1/2
        h-16 px-6 lg:w-[61%]
         w-full
        flex items-center justify-between
         dark:bg-black/20
        backdrop-blur-xl 
      ">
        <a href="/">
        <img src="https://i.postimg.cc/DwwNdbQD/avatar.jpg" alt="avatar" className="rounded-full h-10 w-10 md:w-12 md:h-12 cursor-pointer" />
        </a>
  
        <div className="flex font-title gap-3 md:gap-10 dark:text-white text-black ">
          <a href="/contact">Contact me</a>
          <ThemeToggle></ThemeToggle>
        </div>
      </div>
    );
  }