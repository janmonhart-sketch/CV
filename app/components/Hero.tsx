"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import SplitText from "./SplitText";
import Reveal from "./Reveal";

export default function Hero() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 120]);
  const opacityFade = useTransform(scrollY, [0, 600], [1, 0]);
  const imgScale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const imgY = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="úvod">
      <div className="mesh-bg" />
      <div className="absolute inset-0 grid-pattern" />

      <motion.div
        style={{ y: yParallax, opacity: opacityFade }}
        className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20"
      >
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-12 items-center min-h-screen py-40">
          {/* Left: Text — 3 cols, centered text */}
          <div className="order-2 lg:order-1 lg:col-span-3 text-center lg:text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 1.8, ease: [0.645, 0.045, 0.355, 1] }}
              className="mb-10"
            >
              <span
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold tracking-[0.2em] uppercase"
                style={{
                  border: "1px solid rgba(14,165,233,0.3)",
                  color: "#38bdf8",
                  background: "rgba(14,165,233,0.06)",
                  fontSize: "0.7rem",
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
                marginBottom: "clamp(2.5rem, 4vw, 4rem)",
              }}
            >
              <span className="block" style={{ color: "var(--text-primary)" }}>
                <SplitText delay={2}>Jan</SplitText>
              </span>
              <span className="block gradient-text glow-text">
                <SplitText delay={2.15}>Monhart</SplitText>
              </span>
            </h1>

            {/* Bio */}
            <Reveal delay={2.4}>
              <p
                className="mx-auto leading-relaxed"
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
                  marginBottom: "clamp(2.5rem, 4vw, 4rem)",
                  maxWidth: "520px",
                }}
              >
                Strategický marketingový leader s&nbsp;10 lety zkušeností
                v&nbsp;budování marketingových oddělení, řízení růstu
                a&nbsp;implementaci online strategií. Prokazatelné výsledky
                v&nbsp;B2B i&nbsp;B2C sektoru.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={2.55}>
              <div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                style={{ marginBottom: "clamp(4rem, 7vw, 7rem)" }}
              >
                <a href="#kontakt" className="btn-primary">Kontaktujte mě</a>
                <a href="#zkušenosti" className="btn-secondary">Zkušenosti &rarr;</a>
              </div>
            </Reveal>

            {/* Mini stats */}
            <Reveal delay={2.7}>
              <div
                className="flex items-center justify-center gap-12 md:gap-16"
                style={{
                  paddingTop: "clamp(2rem, 3vw, 3rem)",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {[
                  { value: "10+", label: "let zkušeností" },
                  { value: "50+", label: "spokojených klientů" },
                  { value: "35%", label: "nárůst leadů" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div
                      className="font-black gradient-text leading-none"
                      style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="mt-3 tracking-wider uppercase"
                      style={{ color: "var(--text-muted)", fontSize: "clamp(0.6rem, 0.7vw, 0.72rem)" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Photo — 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(16px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 2.2, ease: [0.645, 0.045, 0.355, 1] }}
            className="order-1 lg:order-2 lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div
                className="absolute -inset-16 rounded-3xl"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(14,165,233,0.1) 0%, transparent 70%)",
                  filter: "blur(60px)",
                }}
              />
              <motion.div
                style={{ scale: imgScale, y: imgY }}
                className="relative rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
              >
                <div
                  style={{
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    boxShadow: "0 30px 100px rgba(0,0,0,0.6), 0 0 60px rgba(14,165,233,0.06)",
                  }}
                >
                  <Image
                    src="/portrait.png"
                    alt="Jan Monhart"
                    width={460}
                    height={580}
                    className="object-cover"
                    style={{ maxHeight: "620px", width: "auto" }}
                    priority
                  />
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-44"
                  style={{ background: "linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)" }}
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 2.8, duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
                className="absolute -bottom-5 -left-8 glass rounded-xl px-5 py-3"
                style={{ borderColor: "rgba(52,211,153,0.25)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: "#34d399", animation: "pulse-glow 2s ease-in-out infinite" }}
                  />
                  <span className="font-semibold" style={{ color: "#34d399", fontSize: "0.78rem" }}>
                    Dostupný pro spolupráce
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
