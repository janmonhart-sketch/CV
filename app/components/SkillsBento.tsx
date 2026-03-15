"use client";

import {
  Brain,
  BarChart3,
  Users2,
  Zap,
  Target,
  Workflow,
  Globe,
} from "lucide-react";
import SplitText from "./SplitText";
import Reveal from "./Reveal";

function rgb(color: string): string {
  const m: Record<string, string> = {
    "#0ea5e9": "14,165,233",
    "#818cf8": "129,140,248",
    "#34d399": "52,211,153",
    "#f59e0b": "245,158,11",
  };
  return m[color] ?? "14,165,233";
}

interface CardProps {
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  title: string;
  desc: string;
  tags: string[];
  accent: string;
  delay?: number;
}

function Card({ icon: Icon, title, desc, tags, accent, delay = 0 }: CardProps) {
  const c = rgb(accent);
  return (
    <Reveal delay={delay} direction="scale">
      <div
        className="glass rounded-2xl flex flex-col items-center text-center relative overflow-hidden group h-full"
        style={{ padding: "clamp(1.5rem, 2.5vw, 2.25rem)" }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 30%, rgba(${c},0.09) 0%, transparent 65%)` }}
        />
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center relative"
          style={{ background: `rgba(${c},0.1)`, border: `1px solid rgba(${c},0.25)`, marginBottom: "1.5rem" }}
        >
          <Icon size={22} color={accent} strokeWidth={1.8} />
        </div>
        <h3
          className="font-bold relative"
          style={{ color: "var(--text-primary)", fontSize: "clamp(1rem, 1.15vw, 1.15rem)", marginBottom: "0.6rem" }}
        >
          {title}
        </h3>
        <p
          className="leading-relaxed relative flex-grow"
          style={{ color: "var(--text-secondary)", fontSize: "clamp(0.82rem, 0.9vw, 0.9rem)", marginBottom: "1.25rem" }}
        >
          {desc}
        </p>
        <div className="flex flex-wrap gap-2 justify-center mt-auto relative">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg font-medium"
              style={{ background: `rgba(${c},0.07)`, color: accent, border: `1px solid rgba(${c},0.15)`, fontSize: "0.7rem" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function SkillsBento() {
  return (
    <section className="section" id="dovednosti">
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
        {/* Heading */}
        <Reveal>
          <div className="section-label">
            <div className="line" />
            <span>Dovednosti</span>
            <div className="line" />
          </div>
        </Reveal>
        <h2
          className="font-black tracking-tight"
          style={{ color: "var(--text-primary)", fontSize: "clamp(2.5rem, 5.5vw, 5rem)", marginBottom: "var(--space-block)" }}
        >
          <SplitText>Co přináším</SplitText>{" "}
          <span className="gradient-text">
            <SplitText delay={0.2}>do vašeho týmu</SplitText>
          </span>
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Strategy — wide */}
          <div className="lg:col-span-2">
            <Card
              icon={Target}
              title="Strategické řízení marketingu"
              desc="Strategické řízení marketingu a rozpočtů s důrazem na byznys prosperitu a budování brandu. Go-to-market strategie, brand positioning."
              tags={["GTM", "Brand Strategy", "Rozpočty", "KPI"]}
              accent="#0ea5e9"
              delay={0}
            />
          </div>

          <Card
            icon={Users2}
            title="Leadership & Analytika"
            desc="Vedení týmů a datově řízená rozhodnutí. Mentoring, performance reviews, budování oddělení."
            tags={["Team Building", "Data-driven", "Mentoring"]}
            accent="#818cf8"
            delay={0.08}
          />

          {/* AI — featured tall */}
          <div className="lg:row-span-2">
            <Reveal delay={0.16} direction="scale">
              <div
                className="glass rounded-2xl flex flex-col items-center text-center relative overflow-hidden group h-full"
                style={{ padding: "clamp(1.5rem, 2.5vw, 2.25rem)" }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 20%, rgba(14,165,233,0.1) 0%, transparent 60%)" }}
                />
                <div
                  className="absolute top-5 right-5 px-3 py-1 rounded-full font-bold tracking-wider"
                  style={{ background: "rgba(14,165,233,0.15)", color: "#38bdf8", border: "1px solid rgba(14,165,233,0.3)", fontSize: "0.65rem" }}
                >
                  HOT
                </div>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center relative"
                  style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.25)", marginBottom: "1.5rem" }}
                >
                  <Brain size={24} color="#0ea5e9" strokeWidth={1.8} />
                </div>
                <h3 className="font-bold relative" style={{ color: "var(--text-primary)", fontSize: "1.15rem", marginBottom: "0.75rem" }}>
                  AI Implementace
                </h3>
                <p className="leading-relaxed relative" style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                  Implementace AI nástrojů pro maximalizaci efektivity marketingových procesů. Prompt Engineering, AI workflow automatizace.
                </p>
                <div className="grid grid-cols-2 gap-2 relative w-full" style={{ marginBottom: "1.5rem" }}>
                  {[
                    { name: "ChatGPT", sub: "Content & Copy" },
                    { name: "Claude", sub: "Research" },
                    { name: "Midjourney", sub: "Vizuály" },
                    { name: "Make.com", sub: "Automatizace" },
                  ].map((tool) => (
                    <div
                      key={tool.name}
                      className="rounded-xl text-center"
                      style={{ background: "rgba(14,165,233,0.05)", border: "1px solid rgba(14,165,233,0.12)", padding: "0.85rem" }}
                    >
                      <div className="font-bold" style={{ color: "#38bdf8", fontSize: "0.75rem", marginBottom: "0.15rem" }}>{tool.name}</div>
                      <div style={{ color: "var(--text-muted)", fontSize: "0.68rem" }}>{tool.sub}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 justify-center mt-auto relative">
                  {["Prompt Eng.", "LLM", "Automation", "AI Workflows"].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg font-medium" style={{ background: "rgba(14,165,233,0.07)", color: "#0ea5e9", border: "1px solid rgba(14,165,233,0.15)", fontSize: "0.7rem" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Card
            icon={Zap}
            title="Výkonnostní marketing"
            desc="Google Ads, Meta Ads, LinkedIn Ads, SEO, PPC, SMM — od strategie po optimalizaci ROAS."
            tags={["Google Ads", "Meta", "SEO", "PPC"]}
            accent="#f59e0b"
            delay={0.2}
          />

          <Card
            icon={BarChart3}
            title="Data & Analytika"
            desc="GA4, Looker Studio, A/B testování, attribution modelling a reportování KPIs."
            tags={["GA4", "Looker Studio", "A/B Testing"]}
            accent="#34d399"
            delay={0.24}
          />

          <Card
            icon={Workflow}
            title="Marketing Automation"
            desc="HubSpot, Pipedrive, Make.com — automatizace lead nurturingu a CRM procesů."
            tags={["HubSpot", "Make.com", "CRM"]}
            accent="#818cf8"
            delay={0.28}
          />

          {/* Wide bottom */}
          <div className="lg:col-span-2">
            <Card
              icon={Globe}
              title="Komplexní webová řešení"
              desc="Navrhování a realizace webových a e-shopových projektů na CMS i headless řešeních. Zkušenosti s mezinárodními projekty."
              tags={["Web Development", "E-shop", "CMS", "Headless", "International"]}
              accent="#34d399"
              delay={0.32}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
