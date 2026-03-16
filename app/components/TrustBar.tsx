"use client";

import { motion } from "framer-motion";

const clients = [
  { src: "/logos/siemens.png", alt: "Siemens", maxW: "100px", invert: true },
  { src: "/logos/nexen.png", alt: "Nexen Tire", maxW: "80px", invert: true },
  { src: "/logos/btl.webp", alt: "BTL", maxW: "80px", invert: true },
  { src: "/logos/livesport.png", alt: "Livesport", maxW: "110px", invert: true },
  { src: "/logos/algotech.png", alt: "Algotech", maxW: "100px", invert: true },
  { src: "/logos/ecostep.png", alt: "Ecostep", maxW: "100px", invert: true },
  { src: "/logos/heureka.png", alt: "Heureka", maxW: "100px", invert: true },
  { src: "/logos/baywa-re-logo.png", alt: "BayWa r.e.", maxW: "110px", invert: false },
];

export default function TrustBar() {
  const doubled = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden" style={{ padding: "var(--space-block) 0" }}>
      <div className="section-divider" style={{ marginBottom: "var(--space-element)" }} />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-semibold tracking-[0.3em] uppercase"
        style={{
          color: "var(--text-muted)",
          fontSize: "clamp(0.6rem, 0.7vw, 0.75rem)",
          marginBottom: "var(--space-element)",
        }}
      >
        Klienti, kterým jsem pomáhal s weby a marketingem
      </motion.p>

      <div className="slider-fade overflow-hidden">
        <div className="slider-track">
          {doubled.map((client, i) => (
            <div key={i} style={{
              width: "160px",
              minWidth: "160px",
              height: "80px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <img
                src={client.src}
                alt={client.alt}
                style={{
                  maxHeight: "56px",
                  width: "auto",
                  maxWidth: client.maxW,
                  objectFit: "contain",
                  filter: "grayscale(1) opacity(0.55)",
                  display: "block",
                  transition: "filter 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0) opacity(1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter = "grayscale(1) opacity(0.55)";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider" style={{ marginTop: "var(--space-element)" }} />
    </section>
  );
}
