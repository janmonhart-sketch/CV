"use client";

import { TrendingUp, Cpu, Building2 } from "lucide-react";
import SplitText from "./SplitText";
import Reveal from "./Reveal";

const pillars = [
  {
    icon: Building2,
    title: "Budování od nuly",
    desc: "Zakládám a škáluji marketingová oddělení včetně procesů, nástrojů a týmů. Agentura myTimi vznikla pod mým vedením.",
  },
  {
    icon: TrendingUp,
    title: "Výkonnostní marketing",
    desc: "WebDev, SEO, PPC, SMM — řízení rozpočtů a kampaní pro 20+ klientů s průměrným navýšením prodejů o 35 %.",
  },
  {
    icon: Cpu,
    title: "AI implementace",
    desc: "Implementace AI nástrojů pro maximalizaci efektivity marketingových procesů. Prompt Engineering a automatizace.",
  },
];

export default function WhyMe() {
  return (
    <section className="section overflow-hidden" id="proč-já">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
          maxWidth: "64rem",
          margin: "0 auto",
          padding: "0 clamp(2rem, 4vw, 4rem)",
        }}
      >
        {/* Quote */}
        <Reveal>
          <div className="section-label">
            <div className="line" />
            <span>Proč já</span>
            <div className="line" />
          </div>
        </Reveal>

        <h2
          className="font-black leading-tight tracking-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: "var(--text-primary)",
            marginBottom: "clamp(1rem, 2vw, 1.5rem)",
          }}
        >
          <SplitText>&bdquo;Architekt růstu</SplitText>{" "}
          <span className="gradient-text">
            <SplitText delay={0.3}>v digitální éře.&ldquo;</SplitText>
          </span>
        </h2>

        <Reveal delay={0.4}>
          <p
            className="mx-auto leading-relaxed"
            style={{
              color: "var(--text-secondary)",
              fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
              maxWidth: "700px",
              marginBottom: "var(--space-block)",
            }}
          >
            Neřeším jen kampaně &mdash; stavím marketingová oddělení
            od nuly, optimalizuji sales funnely a&nbsp;implementuji{" "}
            <span style={{ color: "#38bdf8" }}>AI do obchodních procesů.</span>
          </p>
        </Reveal>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12} direction="scale">
              <div
                className="glass rounded-2xl p-10 text-center group h-full"
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto"
                  style={{
                    background: "rgba(14,165,233,0.1)",
                    border: "1px solid rgba(14,165,233,0.2)",
                    marginBottom: "2rem",
                  }}
                >
                  <p.icon size={26} color="#38bdf8" strokeWidth={1.6} />
                </div>
                <h3
                  className="font-bold"
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "clamp(1.15rem, 1.4vw, 1.4rem)",
                    marginBottom: "1rem",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "clamp(0.85rem, 0.95vw, 0.95rem)",
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
