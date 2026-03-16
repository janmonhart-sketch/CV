"use client";

import { useEffect, useState } from "react";
import {
  Brain,
  BarChart3,
  Users2,
  Zap,
  Target,
  Palette,
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

const aiUseCases = [
  { name: "Meet → nabídka", sub: "automatizace od A do Z" },
  { name: "AI projektový manažer", sub: "řízení bez manuální práce" },
  { name: "Vibe coding", sub: "prototypy a nástroje na klik" },
  { name: "AI kampaně", sub: "videa, copy, vizuály v minutách" },
];

const aiTags = ["Claude", "ChatGPT", "Figma AI", "Make.com", "Nano Banana", "CodeX", "Midjourney", "n8n"];

export default function Skills() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const span2 = isDesktop ? { gridColumn: "span 2" } : {};
  const col3 = isDesktop
    ? { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", width: "100%" }
    : { display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem", width: "100%" };

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
        {/* Label */}
        <Reveal>
          <div className="section-label">
            <div className="line" />
            <span>Co umím</span>
            <div className="line" />
          </div>
        </Reveal>

        {/* Heading */}
        <h2
          className="font-black tracking-tight leading-tight"
          style={{ color: "var(--text-primary)", fontSize: "clamp(2.5rem, 5.5vw, 5rem)", marginBottom: "0.75rem" }}
        >
          <SplitText>Iniciátor růstu</SplitText>{" "}
          <span className="gradient-text" style={{ display: "inline-block" }}>
            <SplitText delay={0.2}>v digitální éře.</SplitText>
          </span>
        </h2>

        {/* Signature */}
        <Reveal delay={0.1}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
            — Jan Monhart
          </p>
        </Reveal>

        {/* Bio */}
        <Reveal delay={0.2}>
          <p
            className="leading-relaxed"
            style={{
              color: "var(--text-secondary)",
              fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
              maxWidth: "620px",
              marginBottom: "clamp(2.5rem, 4vw, 4rem)",
            }}
          >
            Neřeším jen kampaně — stavím marketingová oddělení od nuly,
            vedu 50+ klientů k&nbsp;měřitelným výsledkům a&nbsp;implementuji{" "}
            <span style={{ color: "#38bdf8" }}>AI do obchodních procesů.</span>
          </p>
        </Reveal>

        {/* ── Bento Grid ── */}
        <div style={col3}>

          {/* Řada 1: Full-funnel (2/3) + Leadership (1/3) */}
          <div style={span2}>
            <Card
              icon={Target}
              title="Full-funnel strategie"
              desc="Stavím marketing, který prodává – ne jen vypadá dobře. Od brand awareness přes lead gen až po konverzi. Go-to-market strategie, positioning a rozpočty v řádu milionů."
              tags={["GTM", "Brand Strategy", "Lead Gen", "Rozpočty", "Positioning"]}
              accent="#0ea5e9"
              delay={0}
            />
          </div>
          <div>
            <Card
              icon={Users2}
              title="Leadership, týmy & data"
              desc="Vedu lidi, ne jen reporty. Buduju marketingová oddělení od nuly, nastavuju KPIs a dělám rozhodnutí která jsou podložená daty – ne intuicí."
              tags={["Team Building", "GA4", "Looker Studio", "OKR", "A/B Testing"]}
              accent="#818cf8"
              delay={0.08}
            />
          </div>

          {/* Řada 2: Výkonnostní + Data + Brand (3 stejné čtverce) */}
          <div>
            <Card
              icon={Zap}
              title="Výkonnostní marketing"
              desc="Google Ads, Meta Ads, LinkedIn – řídím kampaně s měsíčním spendem v statisících. Optimalizuju ROAS, snižuju CPA a škáluju co funguje."
              tags={["Google Ads", "Meta Ads", "LinkedIn", "SEO", "PPC", "ROAS"]}
              accent="#f59e0b"
              delay={0.16}
            />
          </div>
          <div>
            <Card
              icon={BarChart3}
              title="Data & Analytika"
              desc="GA4, Looker Studio, A/B testování, attribution modelling a reportování KPIs."
              tags={["GA4", "Looker Studio", "A/B Testing"]}
              accent="#34d399"
              delay={0.2}
            />
          </div>
          <div>
            <Card
              icon={Palette}
              title="Brand & Kreativa"
              desc="Branding který se pamatuje. Vizuální identita, messaging a kreativa pro kampaně – konzistentně napříč všemi kanály."
              tags={["Branding", "Visual Identity", "Copywriting", "Video"]}
              accent="#818cf8"
              delay={0.24}
            />
          </div>

          {/* Řada 3: AI featured (2/3) + Web (1/3) */}
          <div style={span2}>
            <Reveal delay={0.28} direction="scale">
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
                  AI & Automatizace
                </h3>
                <p className="leading-relaxed relative" style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                  Nasazuju AI do reálných procesů – ne jen experimentuju.
                  Od prvního meetingu po hotovou nabídku během minut.
                </p>
                <div className="grid grid-cols-2 gap-2 relative w-full" style={{ marginBottom: "1.5rem" }}>
                  {aiUseCases.map((uc) => (
                    <div
                      key={uc.name}
                      className="rounded-xl text-center"
                      style={{ background: "rgba(14,165,233,0.05)", border: "1px solid rgba(14,165,233,0.12)", padding: "0.85rem" }}
                    >
                      <div className="font-bold" style={{ color: "#38bdf8", fontSize: "0.75rem", marginBottom: "0.15rem" }}>{uc.name}</div>
                      <div style={{ color: "var(--text-muted)", fontSize: "0.68rem" }}>{uc.sub}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 justify-center mt-auto relative">
                  {aiTags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg font-medium" style={{ background: "rgba(14,165,233,0.07)", color: "#0ea5e9", border: "1px solid rgba(14,165,233,0.15)", fontSize: "0.7rem" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
          <div>
            <Card
              icon={Globe}
              title="Komplexní webová řešení"
              desc="Navrhuju a realizuju weby a e-shopy které konvertují – od strategie přes UX po technickou implementaci."
              tags={["WordPress", "React", "Next.js", "Laravel", "E-shop", "Headless", "CMS", "International"]}
              accent="#34d399"
              delay={0.32}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
