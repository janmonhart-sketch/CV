"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = [
  { label: "Úvod", href: "#úvod", id: "úvod" },
  { label: "Výsledky", href: "#výsledky", id: "výsledky" },
  { label: "Zkušenosti", href: "#zkušenosti", id: "zkušenosti" },
  { label: "Dovednosti", href: "#dovednosti", id: "dovednosti" },
  { label: "Kontakt", href: "#kontakt", id: "kontakt" },
];

export default function Navigation() {
  const [hidden, setHidden] = useState(true);
  const [activeId, setActiveId] = useState("úvod");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHidden(latest < 300);

    // Pick the last section whose top is above 40% of viewport
    const threshold = window.innerHeight * 0.4;
    for (let i = links.length - 1; i >= 0; i--) {
      const el = document.getElementById(links[i].id);
      if (el && el.getBoundingClientRect().top <= threshold) {
        setActiveId(links[i].id);
        break;
      }
    }
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={hidden ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100]"
    >
      <div
        className="flex items-center gap-1 px-2 py-2 rounded-2xl"
        style={{
          background: "rgba(5, 5, 10, 0.7)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}
      >
        {links.map((link) => {
          const isActive = activeId === link.id;
          return (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-xl font-medium transition-all duration-300"
              style={{
                fontSize: "0.78rem",
                background: isActive ? "rgba(14,165,233,0.1)" : "transparent",
                color: isActive ? "#38bdf8" : "var(--text-muted)",
                backgroundImage: isActive
                  ? "linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(129,140,248,0.08) 100%)"
                  : "none",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "rgba(14,165,233,0.08)";
                  e.currentTarget.style.color = "#38bdf8";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--text-muted)";
                }
              }}
            >
              {isActive ? (
                <span
                  style={{
                    background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: 600,
                  }}
                >
                  {link.label}
                </span>
              ) : (
                link.label
              )}
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
