"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({
  text,
  className,
  delay = 0,
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      <motion.span className="inline-block overflow-hidden">
        {words.map((word, i) => (
          <motion.span key={i} variants={child} className="inline-block mr-[0.25em]">
            {word}
          </motion.span>
        ))}
      </motion.span>
    </motion.div>
  );
}
