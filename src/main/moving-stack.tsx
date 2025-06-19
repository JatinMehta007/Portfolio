
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

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className=" rounded-md flex flex-col lg:mt-10 bottom-80 lg:bottom-0 md:bottom-28 items-center justify-center relative overflow-hidden">
        <p className=" tracking-wider uppercase font-bold text-blue-400 dark:text-black text-4xl ">My skills</p> 
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
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
];
