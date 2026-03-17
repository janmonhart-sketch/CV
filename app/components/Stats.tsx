"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { Handshake, Banknote, Rocket, Globe, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

function accentRgb(accent: string): string {
  if (accent === "#0ea5e9") return "14,165,233";
  if (accent === "#818cf8") return "129,140,248";
  if (accent === "#34d399") return "52,211,153";
  if (accent === "#f59e0b") return "245,158,11";
  return "14,165,233";
}

function StatCard({
  value,
  suffix = "",
  label,
  sublabel,
  icon: Icon,
  accent = "#0ea5e9",
  delay = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  accent?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const rgb = accentRgb(accent);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2.2,
        delay,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [inView, value, count, delay]);

  return (
    <div
      ref={ref}
      className="glass rounded-2xl flex flex-col items-center text-center relative overflow-hidden group"
      style={{
        padding: "clamp(1.75rem, 3vw, 2.5rem) clamp(1rem, 1.5vw, 1.5rem)",
        borderBottom: `2px solid rgba(${rgb}, 0.4)`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 30%, rgba(${rgb},0.08) 0%, transparent 70%)` }}
      />

      {/* Icon box */}
      <div
        className="w-12 h-12 flex items-center justify-center relative"
        style={{
          borderRadius: "0.875rem",
          background: `rgba(${rgb},0.1)`,
          border: `1px solid rgba(${rgb},0.35)`,
          marginBottom: "clamp(1rem, 2vw, 1.5rem)",
          boxShadow: `0 6px 20px rgba(${rgb}, 0.25)`,
        }}
      >
        <Icon size={22} color={accent} strokeWidth={1.8} />
      </div>

      {/* Number */}
      <div
        className="relative font-black leading-none"
        style={{
          fontSize: "clamp(2.8rem, 4vw, 3.8rem)",
          whiteSpace: "nowrap",
          background: `linear-gradient(135deg, ${accent} 0%, #818cf8 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: `drop-shadow(0 0 16px rgba(${rgb}, 0.5))`,
          marginBottom: "clamp(0.75rem, 1.5vw, 1rem)",
        }}
      >
        <motion.span>{rounded}</motion.span>{suffix}
      </div>

      {/* Label */}
      <h3
        className="font-bold relative"
        style={{ color: "var(--text-primary)", fontSize: "clamp(1rem, 1.15vw, 1.15rem)", marginBottom: "0.35rem" }}
      >
        {label}
      </h3>
      <p
        className="leading-relaxed relative"
        style={{ color: "var(--text-secondary)", fontSize: "clamp(0.8rem, 0.88vw, 0.88rem)" }}
      >
        {sublabel}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="section" id="výsledky">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "0 clamp(2rem, 4vw, 4rem)",
        }}
      >
        <Reveal>
          <div className="section-label">
            <div className="line" />
            <span>Výsledky &amp; Data</span>
            <div className="line" />
          </div>
        </Reveal>
        <h2
          className="font-black tracking-tight"
          style={{ color: "var(--text-primary)", fontSize: "clamp(2.5rem, 5.5vw, 5rem)", marginBottom: "var(--space-block)" }}
        >
          <SplitText>Čísla, která</SplitText>{" "}
          <span className="gradient-text" style={{ display: "inline-block" }}>
            <SplitText delay={0.2}>mluví za vše</SplitText>
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          <Reveal delay={0}>
            <StatCard value={50} suffix="+" label="Spokojených klientů" sublabel="Siemens, BTL, Livesport, Heureka a další" icon={Handshake} accent="#0ea5e9" delay={0} />
          </Reveal>
          <Reveal delay={0.1}>
            <StatCard value={10} suffix="M+" label="Spravovaných budgetů" sublabel="ročně v aktivně řízených kampaních" icon={Banknote} accent="#818cf8" delay={0.1} />
          </Reveal>
          <Reveal delay={0.2}>
            <StatCard value={10} suffix="" label="Let v oboru" sublabel="od KAM po Marketing Leadera" icon={Rocket} accent="#0ea5e9" delay={0.2} />
          </Reveal>
          <Reveal delay={0.3}>
            <StatCard value={18} suffix="+" label="Zemí světa" sublabel="marketing v mezinárodním prostředí" icon={Globe} accent="#34d399" delay={0.3} />
          </Reveal>
          <Reveal delay={0.4}>
            <StatCard value={35} suffix="%" label="Průměrné navýšení" sublabel="leadů, obratu a ziskovosti klientů" icon={TrendingUp} accent="#f59e0b" delay={0.4} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
