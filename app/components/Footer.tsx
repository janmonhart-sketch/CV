"use client";

import {
  GraduationCap,
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Instagram,
} from "lucide-react";
import SplitText from "./SplitText";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer id="kontakt" className="relative overflow-hidden">
      <div className="section-divider" />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(14,165,233,0.06) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative z-10"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "var(--space-section) clamp(2rem, 4vw, 4rem)",
        }}
      >
        {/* Heading */}
        <Reveal>
          <div className="section-label">
            <div className="line" />
            <span>Kontakt</span>
            <div className="line" />
          </div>
        </Reveal>

        <h2
          className="font-black tracking-tight leading-tight"
          style={{
            color: "var(--text-primary)",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            marginBottom: "clamp(1rem, 2vw, 1.5rem)",
          }}
        >
          <SplitText>Pojďme</SplitText>{" "}
          <span className="gradient-text">
            <SplitText delay={0.15}>spolupracovat</SplitText>
          </span>
        </h2>

        <Reveal delay={0.2}>
          <p
            className="mx-auto leading-relaxed"
            style={{
              color: "var(--text-secondary)",
              fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
              maxWidth: "500px",
              marginBottom: "clamp(2.5rem, 4vw, 3.5rem)",
            }}
          >
            Hledáte Marketing Leadera, který přinese výsledky?
            Napište mi a domluvíme se na nezávazné konzultaci.
          </p>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={0.3}>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ marginBottom: "var(--space-block)" }}
          >
            <a href="mailto:jan.monhart@gmail.com" className="btn-primary">
              <Mail size={16} />
              Napsat email
            </a>
            <a
              href="https://linkedin.com/in/janmonhart"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin size={16} />
              LinkedIn profil
              <ExternalLink size={12} style={{ opacity: 0.6 }} />
            </a>
          </div>
        </Reveal>

        {/* Contact details — centered */}
        <Reveal delay={0.4}>
          <div
            className="glass rounded-2xl mx-auto"
            style={{ padding: "clamp(2rem, 3vw, 2.5rem)", maxWidth: "480px" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              {[
                { icon: Mail, value: "jan.monhart@gmail.com", href: "mailto:jan.monhart@gmail.com" },
                { icon: Phone, value: "+420 725 154 505", href: "tel:+420725154505" },
                { icon: Linkedin, value: "linkedin.com/in/janmonhart", href: "https://linkedin.com/in/janmonhart" },
                { icon: MapPin, value: "Nové Butovice, Praha 5", href: null },
              ].map(({ icon: Icon, value, href }) => (
                <div key={value} className="flex items-center gap-3">
                  <Icon size={15} color="#38bdf8" strokeWidth={1.8} />
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="transition-colors hover:text-white"
                      style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
                    >
                      {value}
                    </a>
                  ) : (
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                      {value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Education */}
        <Reveal delay={0.5}>
          <div
            className="glass rounded-2xl mx-auto text-center"
            style={{
              padding: "clamp(1.5rem, 2.5vw, 2rem)",
              maxWidth: "480px",
              marginTop: "1.5rem",
            }}
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <GraduationCap size={16} color="#818cf8" strokeWidth={1.8} />
              <span
                className="font-semibold tracking-[0.2em] uppercase"
                style={{ color: "#818cf8", fontSize: "0.65rem" }}
              >
                Vzdělání
              </span>
            </div>
            <p className="font-bold" style={{ color: "var(--text-primary)", fontSize: "1rem" }}>
              Karlova Univerzita
            </p>
            <p style={{ color: "#818cf8", fontSize: "0.85rem" }}>
              Mgr. &mdash; Fakulta tělesné výchovy a sportu, obor TVS (2016)
            </p>
          </div>
        </Reveal>

        {/* Social links */}
        <Reveal delay={0.55}>
          <div
            className="flex items-center justify-center gap-4"
            style={{ marginTop: "var(--space-element)" }}
          >
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/janmonhart", label: "LinkedIn" },
              { icon: Instagram, href: "https://instagram.com/janmonhart", label: "Instagram" },
              { icon: Mail, href: "mailto:jan.monhart@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-11 h-11 rounded-xl flex items-center justify-center glass transition-all duration-300"
                style={{ borderColor: "transparent" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(14,165,233,0.3)";
                  e.currentTarget.style.background = "rgba(14,165,233,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.background = "var(--bg-card)";
                }}
                title={label}
              >
                <Icon size={16} color="#94a3b8" strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </Reveal>

        {/* Availability badge */}
        <Reveal delay={0.6}>
          <div
            className="inline-flex items-center gap-3 glass rounded-full px-6 py-3"
            style={{
              borderColor: "rgba(52,211,153,0.2)",
              marginTop: "var(--space-element)",
            }}
          >
            <div
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{
                background: "#34d399",
                animation: "pulse-glow 2s ease-in-out infinite",
              }}
            />
            <span style={{ color: "#34d399", fontSize: "0.82rem", fontWeight: 600 }}>
              Dostupný pro nové projekty
            </span>
          </div>
        </Reveal>

        {/* Bottom */}
        <Reveal delay={0.65}>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
            style={{
              marginTop: "var(--space-block)",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border-glass)",
            }}
          >
            <p style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
              &copy; {new Date().getFullYear()} Jan Monhart
            </p>
            <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
              &middot;
            </span>
            <p style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
              Marketing Leader
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
