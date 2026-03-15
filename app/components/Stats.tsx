"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { TrendingUp, Users, Clock, Award } from "lucide-react";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

function StatCard({
  value,
  suffix,
  prefix = "",
  label,
  sublabel,
  icon: Icon,
  accent = "#0ea5e9",
  delay = 0,
}: {
  value: number;
  suffix: string;
  prefix?: string;
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

  const rgb =
    accent === "#0ea5e9" ? "14,165,233" : accent === "#818cf8" ? "129,140,248" : "52,211,153";

  return (
    <div
      ref={ref}
      className="glass rounded-2xl flex flex-col items-center text-center relative overflow-hidden group"
      style={{ padding: "clamp(2.5rem, 3.5vw, 3.5rem) clamp(1.5rem, 2vw, 2rem)" }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 30%, rgba(${rgb},0.08) 0%, transparent 70%)` }}
      />
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center relative"
        style={{ background: `rgba(${rgb},0.1)`, border: `1px solid rgba(${rgb},0.25)`, marginBottom: "clamp(1.5rem, 2.5vw, 2rem)" }}
      >
        <Icon size={24} color={accent} strokeWidth={1.8} />
      </div>
      <div className="relative" style={{ marginBottom: "clamp(0.75rem, 1.5vw, 1rem)" }}>
        <div
          className="font-black leading-none"
          style={{
            fontSize: "clamp(3rem, 5vw, 4.5rem)",
            background: `linear-gradient(135deg, ${accent} 0%, #818cf8 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {prefix}
          <motion.span>{rounded}</motion.span>
          {suffix}
        </div>
      </div>
      <h3 className="font-bold relative" style={{ color: "var(--text-primary)", fontSize: "clamp(1rem, 1.15vw, 1.15rem)", marginBottom: "0.35rem" }}>
        {label}
      </h3>
      <p className="leading-relaxed relative" style={{ color: "var(--text-secondary)", fontSize: "clamp(0.8rem, 0.88vw, 0.88rem)" }}>
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
          <span className="gradient-text">
            <SplitText delay={0.2}>mluví za vše</SplitText>
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Reveal delay={0}><StatCard value={35} suffix="%" label="Průměrný nárůst" sublabel="prodejů a leadů napříč projekty" icon={TrendingUp} accent="#0ea5e9" delay={0} /></Reveal>
          <Reveal delay={0.1}><StatCard value={50} suffix="+" label="Spokojených klientů" sublabel="B2B i B2C — Siemens, Huawei, BTL…" icon={Users} accent="#818cf8" delay={0.1} /></Reveal>
          <Reveal delay={0.2}><StatCard value={10} suffix="+" label="Let v oboru" sublabel="od KAM po Marketing Leadera" icon={Clock} accent="#0ea5e9" delay={0.2} /></Reveal>
          <Reveal delay={0.3}><StatCard value={3} suffix="." label="Největší investice v ČR" sublabel="Nexen Tire — zahraniční management" icon={Award} accent="#34d399" delay={0.3} /></Reveal>
        </div>
      </div>
    </section>
  );
}
