"use client";

import { Target, TrendingUp, Cpu } from "lucide-react";
import SplitText from "./SplitText";
import Reveal from "./Reveal";

const aiTools = [
  { name: "AI videa", sub: "do kampaní a sociálních sítí" },
  { name: "Nabídky na klik", sub: "prezentace a offery během minut" },
  { name: "Prompt engineering", sub: "firemní AI workflow" },
  { name: "Automatizace", sub: "Make.com, n8n pipelines" },
];

const aiTags = ["ChatGPT", "Claude", "Midjourney", "Make.com", "Nano Banana", "CodeX"];

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
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "0 clamp(2rem, 4vw, 4rem)",
        }}
      >
        {/* Label */}
        <Reveal>
          <div className="section-label">
            <div className="line" />
            <span>Proč já</span>
            <div className="line" />
          </div>
        </Reveal>

        {/* Heading — bez uvozovek */}
        <h2
          className="font-black leading-tight tracking-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: "var(--text-primary)",
            marginBottom: "0.75rem",
          }}
        >
          <SplitText>Iniciátor růstu</SplitText>{" "}
          <span className="gradient-text" style={{ display: "inline-block" }}>
            <SplitText delay={0.3}>v digitální éře.</SplitText>
          </span>
        </h2>

        {/* Podpis */}
        <Reveal delay={0.15}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "-0.25rem", marginBottom: "clamp(1.5rem, 2.5vw, 2.5rem)" }}>
            — Jan Monhart
          </p>
        </Reveal>

        {/* Bio */}
        <Reveal delay={0.25}>
          <p
            className="leading-relaxed"
            style={{
              color: "var(--text-secondary)",
              fontSize: "clamp(1rem, 1.5vw, 1.3rem)",
              maxWidth: "680px",
              marginBottom: "clamp(2rem, 3vw, 3rem)",
            }}
          >
            Neřeším jen kampaně &mdash; stavím marketingová oddělení od nuly,
            vedu 50+ klientů k&nbsp;měřitelným výsledkům a&nbsp;implementuji{" "}
            <span style={{ color: "#38bdf8" }}>AI do obchodních procesů.</span>
          </p>
        </Reveal>

        {/* Three pillars */}
        <div
          className="grid md:grid-cols-4 gap-6 w-full"
        >
          {/* Pilíř 1 — wider (md:col-span-2) */}
          <div style={{ gridColumn: "span 2" }}>
          <Reveal delay={0} direction="scale">
            <div
              className="glass rounded-2xl p-10 text-center h-full"
              style={{
                border: "1px solid rgba(14,165,233,0.2)",
                boxShadow: "0 0 40px rgba(14,165,233,0.05) inset",
              }}
            >
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto"
                style={{
                  background: "rgba(14,165,233,0.1)",
                  border: "1px solid rgba(14,165,233,0.25)",
                  marginBottom: "2rem",
                }}
              >
                <Target size={32} color="#38bdf8" strokeWidth={1.6} />
              </div>
              <h3
                className="font-bold"
                style={{ color: "var(--text-primary)", fontSize: "clamp(1.1rem, 1.3vw, 1.35rem)", marginBottom: "1rem" }}
              >
                Full-funnel strategie
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)", fontSize: "clamp(0.85rem, 0.95vw, 0.95rem)" }}
              >
                Od brand awareness po konverze – B2B i&nbsp;B2C.
                Komplexní marketingové strategie zahrnující branding,
                webové projekty, SEO a&nbsp;výkonnostní kampaně.
              </p>
            </div>
          </Reveal>
          </div>

          {/* Pilíř 2 */}
          <Reveal delay={0.12} direction="scale">
            <div className="glass rounded-2xl p-10 text-center h-full">
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto"
                style={{
                  background: "rgba(129,140,248,0.1)",
                  border: "1px solid rgba(129,140,248,0.25)",
                  marginBottom: "2rem",
                }}
              >
                <TrendingUp size={32} color="#818cf8" strokeWidth={1.6} />
              </div>
              <h3
                className="font-bold"
                style={{ color: "var(--text-primary)", fontSize: "clamp(1.1rem, 1.3vw, 1.35rem)", marginBottom: "1rem" }}
              >
                50+ klientů, měřitelné výsledky
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)", fontSize: "clamp(0.85rem, 0.95vw, 0.95rem)" }}
              >
                Siemens, BTL, Livesport, Heureka a&nbsp;další.
                Průměrný nárůst prodejů a&nbsp;leadů o&nbsp;35&nbsp;%
                napříč projekty.
              </p>
            </div>
          </Reveal>

          {/* Pilíř 3 — AI */}
          <Reveal delay={0.24} direction="scale">
            <div className="glass rounded-2xl p-10 text-center h-full">
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto"
                style={{
                  background: "rgba(52,211,153,0.1)",
                  border: "1px solid rgba(52,211,153,0.25)",
                  marginBottom: "2rem",
                }}
              >
                <Cpu size={32} color="#34d399" strokeWidth={1.6} />
              </div>
              <h3
                className="font-bold"
                style={{ color: "var(--text-primary)", fontSize: "clamp(1.1rem, 1.3vw, 1.35rem)", marginBottom: "0.75rem" }}
              >
                AI & automatizace
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)", fontSize: "clamp(0.85rem, 0.95vw, 0.95rem)", marginBottom: "1.25rem" }}
              >
                Nasazuji AI nástroje přímo do marketingových procesů –
                od tvorby obsahu po automatizaci celých workflow.
              </p>

              {/* AI use cases 2×2 */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.5rem",
                  marginBottom: "1.25rem",
                }}
              >
                {aiTools.map((t) => (
                  <div
                    key={t.name}
                    className="rounded-xl"
                    style={{
                      background: "rgba(52,211,153,0.06)",
                      border: "1px solid rgba(52,211,153,0.15)",
                      padding: "0.6rem 0.75rem",
                    }}
                  >
                    <div style={{ color: "#34d399", fontSize: "0.72rem", fontWeight: 600 }}>{t.name}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.65rem", marginTop: "0.15rem" }}>{t.sub}</div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-1.5">
                {aiTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-2.5 py-0.5 font-medium"
                    style={{
                      background: "rgba(52,211,153,0.07)",
                      border: "1px solid rgba(52,211,153,0.18)",
                      color: "#34d399",
                      fontSize: "0.68rem",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
