import { ThemeToggle } from "../components/ui/theme";

export function Navbar2() {
    return (
      <div className="
        fixed border border-zinc-100 dark:border-none
        z-50 left-1/2 -translate-x-1/2
        h-14 px-6 w-[61%]
        flex items-center justify-between
         dark:bg-black/20
        backdrop-blur-xl 
      ">
        <a href="/">
        <img src="https://i.postimg.cc/DwwNdbQD/avatar.jpg" alt="avatar" className="rounded-full w-12 h-12 cursor-pointer" />
        </a>
  
        <div className="flex font-title gap-10 dark:text-white text-black ">
          <a href="/contact">Contact me</a>
          <ThemeToggle></ThemeToggle>
        </div>
      </div>
    );
  }