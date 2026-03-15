"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SplitTextProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  once?: boolean;
}

export default function SplitText({
  children,
  className = "",
  style,
  delay = 0,
  once = true,
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, margin: "-10%" });

  const words = children.split(" ");

  return (
    <span ref={ref} className={className} style={{ ...style, display: "inline" }}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-block", overflow: "hidden", whiteSpace: "pre" }}>
          <span style={{ display: "inline-block", whiteSpace: "pre" }}>
            {word.split("").map((char, ci) => (
              <motion.span
                key={ci}
                initial={{ y: "110%", opacity: 0 }}
                animate={
                  inView
                    ? { y: "0%", opacity: 1 }
                    : { y: "110%", opacity: 0 }
                }
                transition={{
                  duration: 0.7,
                  delay: delay + wi * 0.04 + ci * 0.02,
                  ease: [0.645, 0.045, 0.355, 1],
                }}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          {wi < words.length - 1 && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.1, delay: delay + wi * 0.04 }}
              style={{ display: "inline-block" }}
            >
              &nbsp;
            </motion.span>
          )}
        </span>
      ))}
    </span>
  );
}
