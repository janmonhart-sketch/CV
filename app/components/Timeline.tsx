"use client";

import { CalendarDays } from "lucide-react";
import SplitText from "./SplitText";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "ANT studio s.r.o.",
    role: "Key Account Manager",
    period: "2016 — 2020",
    color: "#0ea5e9",
    highlights: [
      "Strategické vedení a akvizice B2B a B2C klíčových klientů",
      "Navrhování a implementace kompletních strategií (brand, video produkce, SEO, výkonnostní kampaně, webové/e-shopové projekty)",
      "Výsledkově orientovaný KAM: proaktivní zvyšování efektivity celého marketing a sales funnelu",
    ],
    tags: ["B2B", "B2C", "SEO", "PPC", "Web", "E-shop"],
  },
  {
    company: "myTimi s.r.o.",
    role: "Marketing Leader",
    period: "2020 — 2023",
    color: "#818cf8",
    highlights: [
      "Založení a plné řízení B2B/B2C marketingové agentury od nuly",
      "Nastavení a optimalizace marketingových procesů (WebDev, SEO, PPC, SMM)",
      "Řízení rozpočtů a kampaní pro 20+ klientů, s průměrným navýšením prodejů/leadů o 35 %",
    ],
    tags: ["Agentura", "Leadership", "Performance", "Growth"],
  },
  {
    company: "Nexen Tire s.r.o.",
    role: "General Affairs Specialist",
    period: "2023 — současnost",
    color: "#34d399",
    highlights: [
      "Rozjezd 3. největšího investičního projektu v rámci ČR ve spolupráci s korejským managementem",
      "Tvorba, realizace a řízení výběrových řízení pro klíčové oblasti mimo výrobu",
    ],
    tags: ["Korporát", "International", "Procurement"],
  },
];

function colorRgb(c: string) {
  return c === "#0ea5e9" ? "14,165,233" : c === "#818cf8" ? "129,140,248" : "52,211,153";
}

export default function Timeline() {
  return (
    <section className="section" id="zkušenosti">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
      <div
        style={{
          width: "100%",
          maxWidth: "56rem",
          margin: "0 auto",
          padding: "0 clamp(2rem, 4vw, 4rem)",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <Reveal>
          <div className="section-label">
            <div className="line" />
            <span>Pracovní cesta</span>
            <div className="line" />
          </div>
        </Reveal>
        <h2
          className="font-black tracking-tight"
          style={{
            color: "var(--text-primary)",
            fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
            marginBottom: "var(--space-block)",
          }}
        >
          <SplitText>Od stratéga po</SplitText>{" "}
          <span className="gradient-text">
            <SplitText delay={0.2}>lídra</SplitText>
          </span>
        </h2>
      </div>

      {/* Timeline */}
      <div
        style={{
          width: "100%",
          maxWidth: "56rem",
          margin: "0 auto",
          padding: "0 clamp(2rem, 4vw, 4rem)",
          position: "relative",
        }}
      >
        {/* Vertical line — centered */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, var(--accent) 15%, rgba(129,140,248,0.5) 70%, transparent 100%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(2rem, 4vw, 3.5rem)",
          }}
        >
          {experiences.map((exp, i) => {
            const rgb = colorRgb(exp.color);
            const isLeft = i % 2 === 0;

            return (
              <Reveal key={exp.company} delay={i * 0.12}>
                <div className="relative">
                  {/* Center dot */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-10 timeline-dot hidden md:block"
                    style={{
                      background: exp.color,
                      boxShadow: `0 0 0 4px rgba(${rgb},0.15), 0 0 20px rgba(${rgb},0.35)`,
                      zIndex: 2,
                    }}
                  />

                  {/* Card — alternating sides on desktop, full width on mobile */}
                  <div
                    className={`md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"}`}
                  >
                    <div
                      className="glass rounded-2xl text-center"
                      style={{ padding: "clamp(2rem, 3vw, 2.5rem)" }}
                    >
                      <span
                        className="font-semibold tracking-wider uppercase"
                        style={{ color: exp.color, fontSize: "0.7rem" }}
                      >
                        {exp.company}
                      </span>
                      <h3
                        className="font-bold mt-1"
                        style={{ color: "var(--text-primary)", fontSize: "1.2rem", marginBottom: "0.5rem" }}
                      >
                        {exp.role}
                      </h3>
                      <span
                        className="inline-flex items-center gap-1.5 font-medium"
                        style={{ color: "var(--text-secondary)", fontSize: "0.8rem", marginBottom: "1.25rem", display: "flex", justifyContent: "center" }}
                      >
                        <CalendarDays size={13} />
                        {exp.period}
                      </span>

                      <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="leading-relaxed"
                            style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}
                          >
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 justify-center">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full font-medium"
                            style={{
                              background: `rgba(${rgb},0.08)`,
                              color: exp.color,
                              border: `1px solid rgba(${rgb},0.2)`,
                              fontSize: "0.72rem",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}
