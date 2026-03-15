"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = [
  { label: "Úvod", href: "#úvod" },
  { label: "Výsledky", href: "#výsledky" },
  { label: "Zkušenosti", href: "#zkušenosti" },
  { label: "Dovednosti", href: "#dovednosti" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navigation() {
  const [hidden, setHidden] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHidden(latest < 300);
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
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:text-white"
            style={{
              color: "var(--text-muted)",
              fontSize: "0.78rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(14,165,233,0.08)";
              e.currentTarget.style.color = "#38bdf8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--text-muted)";
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
