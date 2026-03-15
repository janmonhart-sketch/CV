"use client";

import { motion, type Variants } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  style?: React.CSSProperties;
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 80, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  left: {
    hidden: { opacity: 0, x: -60, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  right: {
    hidden: { opacity: 0, x: 60, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.85, filter: "blur(8px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
};

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  style,
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12%" }}
      variants={variants[direction]}
      transition={{
        duration: 1,
        delay,
        ease: [0.645, 0.045, 0.355, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
