import React from "react";
import * as motion from "motion/react-client";

const items = ["Paginas Web", "Apps para PyMEs", "Consultoria IT"];

const repeatedItems = [...items, ...items, ...items, ...items];

const textVariants = {
  animate: {
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export default function Slider() {
  return (
    <div className="w-full overflow-hidden py-10 bg-zinc-900">
      <div className="flex w-max">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}

function MarqueeContent() {
  return (
    <motion.ul
      className="flex shrink-0 items-center gap-16 pr-16"
      initial={{ x: "-100%" }}
      animate={{ x: "0" }}
      transition={{
        duration: 40,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      {repeatedItems.map((text, i) => (
        <AnimatedItem key={i} text={text} />
      ))}
    </motion.ul>
  );
}

function AnimatedItem({ text }: { text: string }) {
  return (
    <li className="text-6xl text-lime-100 shrink-0 font-sans">
      <motion.span
        className="inline-flex items-center gap-4" // gap-4 para separar asteriscos
        variants={textVariants}
        animate="animate"
      >
        <span style={{ willChange: "font-weight" }}>{text}</span>
      </motion.span>
    </li>
  );
}