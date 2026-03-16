"use client";

import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import SplitText from "./SplitText";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "ANT studio s.r.o.",
    role: "Key Account Manager",
    period: "2022 — současnost",
    color: "#0ea5e9",
    highlights: [
      "Strategické vedení a akvizice B2B a B2C klíčových klientů",
      "Navrhování a implementace kompletních strategií (brand, video produkce, SEO, výkonnostní kampaně, webové/e-shopové projekty)",
      "Výsledkově orientovaný KAM: proaktivní zvyšování efektivity celého marketing a sales funnelu",
    ],
    tags: ["B2B", "B2C", "Brand", "SEO", "PPC", "Web"],
  },
  {
    company: "myTimi s.r.o.",
    role: "Marketing Leader",
    period: "2020 — 2022",
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
    period: "2018 — 2020",
    color: "#34d399",
    highlights: [
      "Koordinace rozjezdu provozu a továrny jedné z největších zahraničních značek v ČR",
      "Řízení výběrových řízení pro klíčové dodavatele a partnery",
      "Spolupráce s korejským managementem na strategických projektech",
    ],
    tags: ["International", "Operations", "B2B", "Procurement"],
  },
  {
    company: "Karlova Univerzita",
    role: "Mgr. – Tělesná výchova a sport",
    period: "2010 – 2016",
    color: "#f59e0b",
    highlights: [
      "Fakulta tělesné výchovy a sportu",
      "Nejvyšší hokejová trenérská licence v ČR",
    ],
    tags: ["Leadership", "Analytické myšlení", "Coaching"],
  },
];

function colorRgb(c: string) {
  if (c === "#0ea5e9") return "14,165,233";
  if (c === "#818cf8") return "129,140,248";
  if (c === "#f59e0b") return "245,158,11";
  return "52,211,153";
}

export default function Timeline() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="section" id="zkušenosti">
      <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "0 clamp(2rem, 4vw, 4rem)" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "var(--space-block)" }}>
          <Reveal>
            <div className="section-label">
              <div className="line" />
              <span>Pracovní cesta</span>
              <div className="line" />
            </div>
          </Reveal>
          <h2
            className="font-black tracking-tight"
            style={{ color: "var(--text-primary)", fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}
          >
            <SplitText>Od stratéga po</SplitText>{" "}
            <span className="gradient-text" style={{ display: "inline-block" }}>
              <SplitText delay={0.2}>lídra</SplitText>
            </span>
          </h2>
        </div>

        {/* Timeline wrapper — relativní pozice pro linku */}
        <div style={{ position: "relative", marginTop: "4rem" }}>

          {/* Vertikální linka — přesně uprostřed, jen na desktopu */}
          {isDesktop && (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "1px",
                transform: "translateX(-50%)",
                background:
                  "linear-gradient(180deg, transparent 0%, var(--accent) 15%, rgba(129,140,248,0.5) 70%, transparent 100%)",
              }}
            />
          )}

          {/* Položky */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {experiences.map((exp, i) => {
              const rgb = colorRgb(exp.color);
              const isLeft = i % 2 === 0;

              return (
                <Reveal key={exp.company} delay={i * 0.12}>
                  <div style={{ position: "relative", display: "flex", marginTop: i === 0 ? "0" : "-10rem" }}>

                    {/* Dot uprostřed linky — jen na desktopu */}
                    {isDesktop && (
                      <div
                        style={{
                          position: "absolute",
                          left: "50%",
                          top: "2.5rem",
                          transform: "translateX(-50%)",
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: exp.color,
                          boxShadow: `0 0 0 4px rgba(${rgb},0.15), 0 0 20px rgba(${rgb},0.35)`,
                          zIndex: 2,
                        }}
                      />
                    )}

                    {/* Karta — střídá strany na desktopu, full width na mobilu */}
                    <div
                      style={
                        isDesktop
                          ? {
                              width: "calc(50% - 2rem)",
                              marginLeft: isLeft ? "0" : "auto",
                              marginRight: isLeft ? "auto" : "0",
                              paddingRight: isLeft ? "1rem" : "0",
                              paddingLeft: isLeft ? "0" : "1rem",
                            }
                          : { width: "100%" }
                      }
                    >
                      <div
                        className="glass rounded-2xl"
                        style={{ padding: "clamp(2rem, 3vw, 2.5rem)", textAlign: "center" }}
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
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.375rem",
                            color: "var(--text-secondary)",
                            fontSize: "0.8rem",
                            fontWeight: 500,
                            marginBottom: "1.25rem",
                          }}
                        >
                          <CalendarDays size={13} />
                          {exp.period}
                        </div>

                        <ul
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                            marginBottom: "1.25rem",
                            listStyle: "none",
                          }}
                        >
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

                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.5rem",
                            justifyContent: "center",
                          }}
                        >
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                padding: "0.25rem 0.75rem",
                                borderRadius: "9999px",
                                fontWeight: 500,
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
