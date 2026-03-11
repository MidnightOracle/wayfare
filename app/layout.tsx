import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WAYFARE — Carry What Matters",
  description:
    "Premium travel gear crafted for the modern explorer. Backpacks, suitcases, wallets, and travel bags built to last a lifetime.",
  openGraph: {
    title: "WAYFARE — Carry What Matters",
    description: "Premium travel gear for the modern explorer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body className="bg-obsidian text-ivory font-body antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
