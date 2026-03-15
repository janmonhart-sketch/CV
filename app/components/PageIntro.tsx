"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PageIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "var(--bg-primary)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.645, 0.045, 0.355, 1],
            }}
            className="text-center"
          >
            <div
              className="font-black tracking-tighter gradient-text"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Jan Monhart
            </div>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
              className="h-px mx-auto mt-4"
              style={{
                width: "80px",
                background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
