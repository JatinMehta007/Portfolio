import { useRef, useState } from "react";
import { TracingBeam } from "../components/ui/tracing-beam";
import { cn } from "../lib/utils";
import { RiSendPlaneFill } from "@remixicon/react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_ih7vqzq",        // YOUR SERVICE ID
        "template_g8nl7bw",       // YOUR TEMPLATE ID
        formRef.current,
        "3viO0JAEwr94WDwQW"       // YOUR PUBLIC KEY
      )
      .then(
        () => {
          setSending(false);
          formRef.current.reset();
          alert("Message sent successfully! I'll get back to you soon.");
        },
        () => {
          setSending(false);
          alert("Failed to send. Please try again later.");
        }
      );
  };

  return (
    <div className="w-screen min-h-screen font-hanken relative bg-white text-black dark:bg-black dark:text-white">

      <div
        className={cn(
          "absolute inset-0",
          "[background-size:48px_50px]",
          "bg-white [background-image:linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)]",
          "dark:bg-black dark:[background-image:linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      ></div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>

      <div className="bg-gradient-to-r from-white to-white dark:from-neutral-950 dark:to-neutral-950 relative z-10">
        <TracingBeam className="relative">

          <div className="absolute mt-20 border p-2 text-center [border-image:repeating-linear-gradient(45deg,_#3f3f46_0,_#3f3f46_8px,_transparent_5px,_transparent_16px)_1] dark:bg-black bg-white left-1/2 -translate-x-1/2">
            <p>Contact me</p>
            <p>If you want me to talk to you.</p>
          </div>

          <div className="pt-40 w-full font-title">
            <form ref={formRef} onSubmit={sendEmail}>
              
              <div>
                <p>Name</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Rohit Sharma"
                  required
                  className="w-full mt-2 dark:bg-black border p-2 border-zinc-700"
                />
              </div>

              <div className="mt-10">
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  placeholder="rohit@gmail.com"
                  required
                  className="w-full mt-2 dark:bg-black border p-2 border-zinc-700"
                />
              </div>

              <div className="mt-10">
                <p>Message</p>
                <textarea
                  name="message"
                  placeholder="Enter your message here..."
                  required
                  className="w-full mt-5 dark:bg-black border p-2 border-zinc-700 h-20 resize-none"
                />

                <button
                  type="submit"
                  disabled={sending}
                  className={`flex gap-1 bg-zinc-200 hover:bg-gray-300 font-hanken p-[10px] rounded-xl mt-5 text-black font-normal ${
                    sending && "opacity-50 cursor-not-allowed"
                  }`}
                >
                  <RiSendPlaneFill className="h-[22px]" />
                  {sending ? "Sending..." : "Send"}
                </button>
              </div>

            </form>
          </div>
        </TracingBeam>
      </div>
    </div>
  );
}