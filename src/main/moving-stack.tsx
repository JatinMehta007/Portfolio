
import { InfiniteMovingCards } from "../components/ui/moving";
import stack1 from "../images/stack1.png";
import stack2 from "../images/stack2.png";
import stack3 from "../images/stack3.png";
import stack4 from "../images/stack4.png";
import stack5 from "../images/stack5.png";
import stack6 from "../images/stack6.png";
import stack7 from "../images/stack7.png";
import stack8 from "../images/stack8.png";
import stack9 from "../images/stack9.png";
import stack10 from "../images/stack10.png";
import stack11 from "../images/stack11.png";
import stack12 from "../images/stack12.png";
import stack13 from "../images/stack13.png";
import stack14 from "../images/stack14.png";
import stack15 from "../images/stack15.png";
import stack16 from "../images/stack16.webp";
import stack17 from "../images/stack17.png";
import stack18 from "../images/stack18.png";
import stack19 from "../images/stack19.png";
import stack20 from "../images/stack20.png";
import stack21 from "../images/stack21.png";
import stack22 from "../images/stack22.png";
import stack23 from "../images/stack23.png";

export function InfiniteMovingCardsDemo() {
  
  
  return (
    <div
      className=" rounded-md  lg:mt-32 bottom-80 lg:bottom-0 md:bottom-28 items-center justify-center relative overflow-hidden">
        <p className=" tracking-wider uppercase text-center  font-bold text-blue-400 dark:text-black text-4xl ">My skills</p> 
        <div className="mt-10  hover:cursor-pointer">
       <div className="flex flex-wrap justify-center lg:justify-between  gap-20 group">
  {testimonials.map((item) => (
    <div
      className="transition duration-700 ease-in-out transform group-hover:blur-sm hover:!blur-0 hover:scale-105 hover:rotate-[360deg]"
    >
      {item.quote}
    </div>
  ))}
</div>
        </div>
    </div>

    
  );
}

const testimonials = [
  {
    quote:
    <img src={stack1} alt="react" />, 
},
{
    quote:
    <img src={stack2} alt="tailwind" />, 
},
{
    quote:
    <img src={stack3} alt="nodejs" />, 
},
{
    quote:
    <img src={stack4} alt="expressjs" />, 
},
{
    quote:
    <img src={stack5} alt="nextjs" />, 
},
{
    quote:
    <img src={stack6} alt="postresql" />, 
},
{
    quote:
    <img src={stack7} alt="docker" />, 
},
{
    quote:
    <img src={stack8} alt="mongodb" />, 
},
{
    quote:
    <img src={stack9} alt="html" />, 
},
{
    quote:
    <img src={stack10} alt="css" />, 
},
{
    quote:
    <img src={stack11} alt="ts" />, 
},
{
    quote:
    <img src={stack12} alt="js" />, 
},
{
    quote:
    <img src={stack13} alt="sql" />, 
},
{
    quote:
    <img src={stack14} alt="figma" />, 
},
{
    quote:
    <img src={stack15} alt="vercel" className="w-16" />, 
},
{
    quote:
    <img src={stack16} alt="netlify" className="w-12" />, 
},
{
    quote:
    <img src={stack17} alt="postman" className="w-14" />, 
},
{
    quote:
    <img src={stack18} alt="netlify" className="w-14" />, 
},{
    quote:
    <img src={stack19} alt="github" className="w-14" />, 
},{
    quote:
    <img src={stack20} alt="vite" className="w-14" />, 
},
{
    quote:
    <img src={stack21} alt="replit" className="w-14" />, 
},
{
    quote:
    <img src={stack22} alt="c++" className="w-14" />, 
},
{
    quote:
    <img src={stack23} alt="c++" className="w-14" />, 
},
];
