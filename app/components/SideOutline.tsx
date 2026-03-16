"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";

const sections = [
  { label: "Úvod", id: "úvod" },
  { label: "Výsledky", id: "výsledky" },
  { label: "Co umím", id: "dovednosti" },
  { label: "Reference", id: "reference" },
  { label: "Zkušenosti", id: "zkušenosti" },
  { label: "Kontakt", id: "kontakt" },
];

export default function SideOutline() {
  const [activeId, setActiveId] = useState("úvod");
  const [visible, setVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (typeof window === "undefined") return;
    setVisible(latest > 400);
    const threshold = window.innerHeight * 0.45;
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i].id);
      if (el && el.getBoundingClientRect().top <= threshold) {
        setActiveId(sections[i].id);
        break;
      }
    }
  });

  if (!isDesktop) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
      className="fixed right-6 top-1/2 z-[90]"
      style={{ transform: "translateY(-50%)" }}
    >
      <div className="flex flex-col items-center gap-0" style={{ position: "relative" }}>
        {/* Vertical track line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "10px",
            bottom: "10px",
            width: "1px",
            transform: "translateX(-50%)",
            background: "rgba(255,255,255,0.06)",
          }}
        />

        {sections.map((section, i) => {
          const isActive = activeId === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group relative flex items-center gap-3"
              style={{
                height: "28px",
                marginBottom: i < sections.length - 1 ? "20px" : "0",
                textDecoration: "none",
              }}
            >
              {/* Label — always visible, to the left of dot */}
              <span
                style={{
                  whiteSpace: "nowrap",
                  fontSize: "0.7rem",
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: "0.08em",
                  color: isActive ? "#38bdf8" : "rgba(255,255,255,0.3)",
                  transition: "color 0.3s",
                  textTransform: "uppercase",
                }}
              >
                {section.label}
              </span>

              {/* Dot */}
              <motion.div
                animate={{
                  background: isActive
                    ? "linear-gradient(135deg, #38bdf8, #818cf8)"
                    : "rgba(255,255,255,0.15)",
                  boxShadow: isActive
                    ? "0 0 12px rgba(14,165,233,0.6), 0 0 24px rgba(14,165,233,0.2)"
                    : "none",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  width: isActive ? "10px" : "6px",
                  height: isActive ? "10px" : "6px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  transition: "width 0.3s, height 0.3s",
                }}
              />
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}
