"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { src: "/logos/siemens.png", alt: "Siemens" },
  { src: "/logos/nexen.png", alt: "Nexen Tire" },
  { src: "/logos/btl.webp", alt: "BTL" },
  { src: "/logos/livesport.png", alt: "Livesport" },
  { src: "/logos/algotech.png", alt: "Algotech" },
  { src: "/logos/ecostep.png", alt: "Ecostep" },
  { src: "/logos/mercuria.png", alt: "Mercuria Laser Game" },
  { src: "/logos/md21.png", alt: "MD21" },
];

export default function TrustBar() {
  const doubled = [...clients, ...clients, ...clients];

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
            <div
              key={i}
              className="flex items-center justify-center flex-shrink-0 rounded-2xl"
              style={{
                padding: "14px 32px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.07)",
                minWidth: "140px",
                height: "72px",
              }}
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={120}
                height={40}
                style={{
                  width: "120px",
                  height: "40px",
                  objectFit: "contain",
                  filter: "grayscale(1) brightness(2) opacity(0.65)",
                  transition: "filter 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLImageElement).style.filter = "grayscale(0) brightness(1) opacity(1)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLImageElement).style.filter = "grayscale(1) brightness(2) opacity(0.65)";
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
