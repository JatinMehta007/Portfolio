
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
import stack24 from "../images/stack24.png";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="rounded-md mt-10 m-5 sm:mt-10 sm:m-0  items-center justify-center relative overflow-hidden">
      <p className="tracking-wider  text-center font-bold text-zinc-400 text-2xl [border-image:repeating-linear-gradient(45deg,_#3f3f46_0,_#3f3f46_8px,_transparent_5px,_transparent_16px)_1] border p-2 w-[97%]">
        Tech Stack
      </p>
      <div className="mt-16 hover:cursor-pointer">
        <div className="flex flex-wrap justify-center gap-20 group">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative  transition duration-700 ease-in-out transform group-hover:blur-sm hover:!blur-0 hover:scale-110 hover:rotate-[360deg] "
            >
                <div>
              {item.quote}
                </div>
              {item.text && (
                  <div className=" absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 hover:opacity-100 bg-zinc-800 text-white text-sm font-black px-3 py-1 rounded-md whitespace-nowrap transition-opacity duration-300 ">
                  {item.text}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  { quote: <img src={stack1} alt="react" />, text: "React" },
  { quote: <img src={stack2} alt="tailwind" />, text: "TailwindCSS" },
  { quote: <img src={stack3} alt="nodejs" />, text: "Node.js" },
  { quote: <img src={stack4} alt="expressjs" />, text: "Express.js" },
  { quote: <img src={stack5} alt="nextjs" />, text: "Next.js" },
  { quote: <img src={stack6} alt="postgresql" />, text: "PostgreSQL" },
  { quote: <img src={stack7} alt="docker" />, text: "Docker" },
  { quote: <img src={stack8} alt="mongodb" />, text: "MongoDB" },
  { quote: <img src={stack9} alt="html" />, text: "HTML" },
  { quote: <img src={stack10} alt="css" />, text: "CSS" },
  { quote: <img src={stack11} alt="ts" />, text: "TypeScript" },
  { quote: <img src={stack12} alt="js" />, text: "JavaScript" },
  { quote: <img src={stack13} alt="sql" />, text: "SQL" },
  { quote: <img src={stack14} alt="figma" />, text: "Figma" },
  { quote: <img src={stack15} alt="vercel" className="w-16" />, text: "Vercel" },
  { quote: <img src={stack16} alt="netlify" className="w-12" />, text: "Netlify" },
  { quote: <img src={stack17} alt="postman" className="w-14" />, text: "Postman" },
  { quote: <img src={stack18} alt="Aceternity" className="w-14" />, text: "Aceternity UI" },
  { quote: <img src={stack19} alt="github" className="w-14" />, text: "GitHub" },
  { quote: <img src={stack20} alt="vite" className="w-14" />, text: "Vite" },
  { quote: <img src={stack21} alt="replit" className="w-14" />, text: "Replit" },
  { quote: <img src={stack22} alt="c++" className="w-14" />, text: "C++" },
  { quote: <img src={stack23} alt="vscode" className="w-14" />, text: "VS Code" },
  { quote: <img src={stack24} alt="prisma orm" className="w-14" />, text: "Prisma ORM" },
];