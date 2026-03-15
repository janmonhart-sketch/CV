import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Jan Monhart — Marketing Leader & CMO",
  description:
    "Architekt marketingových strategií. Buduji marketingová oddělení od nuly, optimalizuji sales funnely a implementuji AI do obchodních procesů. 10+ let zkušeností.",
  openGraph: {
    title: "Jan Monhart — Marketing Leader & CMO",
    description: "Architekt růstu v digitální éře.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body className={`${geist.variable} noise`}>
        {children}
      </body>
    </html>
  );
}
