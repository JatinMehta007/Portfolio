import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function FadeInSection({
  children,
  direction = "left"
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
}) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={direction === "left" ? "hiddenLeft" : "hiddenRight"}
      animate={inView ? "visible" : direction === "left" ? "hiddenLeft" : "hiddenRight"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}