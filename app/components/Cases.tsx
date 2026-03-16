"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import SplitText from "./SplitText";
import Reveal from "./Reveal";

interface Case {
  label: string;
  title: string;
  bullets: string[];
  image: string;
  accent: string;
  url?: string;
}

const cases: Case[] = [
  {
    label: "Weby & Kampaně",
    title: "Siemens",
    bullets: [
      "Vývoj a úpravy webů na míru WordPress.",
      "Přes 30 microsites naší výroby.",
      "Dlouholetá péče.",
      "Správa sociálních sítí a kampaní.",
      "Maximalizace výsledků díky synergii našich týmů (obsah + online marketing).",
    ],
    image: "/Siemens case.png",
    accent: "#34d399",
    url: "https://www.cenasiemens.cz/",
  },
  {
    label: "Branding a web",
    title: "MyMD21",
    bullets: [
      "Vytvoření firemní identity, webových stránek.",
      "Realizace webu na míru – ocenění WEBTOP100.",
      "Reklama na sociálních sítích.",
      "Materiály pro offline propagaci.",
    ],
    image: "/Mymd case 2.jpg",
    accent: "#818cf8",
    url: "https://www.mymd21.cz/",
  },
  {
    label: "Branding / Web / Kampaně",
    title: "Mercuria Laser Game",
    bullets: [
      "Vytvoření nového designového webu na míru.",
      "Komunikační a vizuální koncept.",
      "Cílení pro více cílových skupin (dětské oslavy, školy, sportovní kluby, firemní akce, příměstské tábory).",
      "Tvorba foto a video produkce přímo z arény.",
    ],
    image: "/Mercuria Case.png",
    accent: "#0ea5e9",
    url: "https://mercurialaser.cz/",
  },
];

function accentRgb(a: string) {
  if (a === "#0ea5e9") return "14,165,233";
  if (a === "#818cf8") return "129,140,248";
  return "52,211,153";
}

export default function Cases() {
  return (
    <section className="section" id="reference">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "0 clamp(2rem, 4vw, 4rem)",
          textAlign: "center",
        }}
      >
        {/* Label */}
        <Reveal>
          <div className="section-label">
            <div className="line" />
            <span>Reference</span>
            <div className="line" />
          </div>
        </Reveal>

        {/* Heading */}
        <h2
          className="font-black tracking-tight leading-tight"
          style={{
            color: "var(--text-primary)",
            fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
            marginBottom: "var(--space-block)",
          }}
        >
          <SplitText>Projekty které</SplitText>{" "}
          <span className="gradient-text" style={{ display: "inline-block" }}>
            <SplitText delay={0.2}>mluví za vše</SplitText>
          </span>
        </h2>

        {/* Case cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(2.5rem, 4vw, 4rem)",
            width: "100%",
          }}
        >
          {cases.map((c, i) => {
            const rgb = accentRgb(c.accent);
            const imageRight = i % 2 === 0;

            return (
              <Reveal key={c.title} delay={i * 0.1}>
                <div
                  className="glass rounded-2xl overflow-hidden group"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    minHeight: "360px",
                    borderColor: `rgba(${rgb}, 0.15)`,
                  }}
                >
                  {/* Text side */}
                  <div
                    style={{
                      order: imageRight ? 0 : 1,
                      padding: "clamp(2rem, 4vw, 3.5rem)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    <span
                      className="font-semibold tracking-[0.2em] uppercase"
                      style={{ color: c.accent, fontSize: "0.68rem", marginBottom: "0.75rem", display: "block" }}
                    >
                      {c.label}
                    </span>

                    <h3
                      className="font-black tracking-tight"
                      style={{
                        color: "var(--text-primary)",
                        fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
                        marginBottom: "1.5rem",
                        lineHeight: 1.1,
                      }}
                    >
                      {c.title}
                    </h3>

                    <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem", listStyle: "none" }}>
                      {c.bullets.map((b) => (
                        <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.5 }}>
                          <span
                            style={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              background: c.accent,
                              flexShrink: 0,
                              marginTop: "0.45em",
                              boxShadow: `0 0 6px rgba(${rgb},0.6)`,
                            }}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {c.url && (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-semibold transition-all duration-300 hover:gap-3"
                        style={{ color: c.accent, fontSize: "0.88rem", alignSelf: "flex-start" }}
                      >
                        Navštívit web
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  {/* Image side */}
                  <div
                    style={{
                      order: imageRight ? 1 : 0,
                      position: "relative",
                      overflow: "hidden",
                      minHeight: "320px",
                      borderRadius: imageRight ? "0 1rem 1rem 0" : "1rem 0 0 1rem",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                    }}
                  >
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Accent overlay on hover */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(135deg, rgba(${rgb},0.1) 0%, transparent 60%)` }}
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
