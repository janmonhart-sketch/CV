"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import SplitText from "./SplitText";
import Reveal from "./Reveal";

export default function Hero() {
  const { scrollY } = useScroll();
  // Removed opacityFade — stats and content no longer disappear on scroll
  const yParallax = useTransform(scrollY, [0, 800], [0, 80]);
  const imgScale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const imgY = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="úvod" style={{ position: "relative" }}>
      <div className="mesh-bg" />
      <div className="absolute inset-0 grid-pattern" />

      <motion.div
        style={{ y: yParallax, paddingLeft: "clamp(2.5rem, 6vw, 6rem)", paddingRight: 0 }}
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        <div
          className="grid lg:grid-cols-5 items-start min-h-screen"
          style={{ gap: "clamp(3rem, 5vw, 5rem)", paddingTop: "clamp(7rem, 12vw, 10rem)", paddingBottom: "clamp(4rem, 7vw, 6rem)" }}
        >
          {/* ── Left: Text — full width, photo is absolute overlay ── */}
          <div className="order-2 lg:order-1 lg:col-span-5">

            {/* Badge — gold */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 1.8, ease: [0.645, 0.045, 0.355, 1] }}
              style={{ marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              <span
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold tracking-[0.2em] uppercase"
                style={{
                  border: "1px solid rgba(245,158,11,0.4)",
                  color: "#fbbf24",
                  background: "rgba(245,158,11,0.07)",
                  fontSize: "0.75rem",
                  boxShadow: "0 0 24px rgba(245,158,11,0.15)",
                }}
              >
                Marketing Leader
              </span>
            </motion.div>

            {/* Name */}
            <h1
              className="font-black leading-[0.88] tracking-tighter"
              style={{
                fontSize: "clamp(4.5rem, 10vw, 10rem)",
                marginBottom: "clamp(2rem, 3.5vw, 3.5rem)",
              }}
            >
              <span className="block" style={{ color: "var(--text-primary)" }}>
                <SplitText delay={2}>Jan</SplitText>
              </span>
              {/* inline-block fixes the visible gradient background box on "Monhart" */}
              <span
                className="gradient-text"
                style={{ display: "inline-block" }}
              >
                <SplitText delay={2.15}>Monhart</SplitText>
              </span>
            </h1>

            {/* Bio */}
            <Reveal delay={2.4}>
              <p
                className="leading-relaxed"
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
                  marginBottom: "clamp(2rem, 3.5vw, 3.5rem)",
                  maxWidth: "520px",
                }}
              >
                Strategický marketingový leader s&nbsp;10 lety zkušeností
                v&nbsp;budování marketingových oddělení a&nbsp;řízení růstu.
                Řídil jsem projekty pro 50+ klientů včetně Siemens, BTL, Livesport
                a&nbsp;Algotech. Specializuji se na výkonnostní marketing,
                komplexní webová řešení a&nbsp;implementaci AI do marketingových procesů.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={2.55}>
              <div
                className="flex flex-col sm:flex-row items-start gap-4"
                style={{ marginBottom: "clamp(3rem, 5vw, 5rem)" }}
              >
                <a href="#kontakt" className="btn-primary">Kontaktujte mě</a>
                <a href="#zkušenosti" className="btn-secondary">Zkušenosti &rarr;</a>
              </div>
            </Reveal>

          </div>

          {/* ── Right: Photo — absolute overlay ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: "blur(16px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 2.2, ease: [0.645, 0.045, 0.355, 1] }}
            className="order-1 lg:order-2 lg:col-span-2"
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "42%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              pointerEvents: "none",
            }}
          >
            <div className="relative" style={{ width: "100%", height: "100%" }}>
              <div className="absolute inset-0" style={{
                background: "radial-gradient(ellipse at center, rgba(14,165,233,0.1) 0%, transparent 70%)",
                filter: "blur(60px)",
              }} />
              <motion.div style={{ scale: imgScale, y: imgY, height: "100%",
                display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                <Image
                  src="/portrait.png"
                  alt="Jan Monhart"
                  width={460}
                  height={580}
                  priority
                  style={{
                    height: "85vh",
                    width: "auto",
                    maxWidth: "100%",
                    objectFit: "contain",
                    objectPosition: "right center",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-44"
                  style={{ background: "linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)" }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 0.6 }}
                className="absolute glass rounded-xl px-5 py-3"
                style={{ bottom: "10%", left: "2rem", borderColor: "rgba(52,211,153,0.25)", zIndex: 2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: "#34d399", animation: "pulse-glow 2s ease-in-out infinite" }} />
                  <span className="font-semibold" style={{ color: "#34d399", fontSize: "0.78rem" }}>
                    Otevřený novým příležitostem
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ color: "var(--text-muted)" }}
      >
        <span className="tracking-widest uppercase" style={{ fontSize: "0.65rem" }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
