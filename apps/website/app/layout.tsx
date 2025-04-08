import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import { particleConfig } from "@/config/content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Venditio AI",
  description: "Customer workflows with AI, unified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Global particle background that appears on all pages */}
        <ParticleBackground 
          id={particleConfig.id}
          particleColor={particleConfig.particleColor}
          lineColor={particleConfig.lineColor}
          zIndex={particleConfig.zIndex}
          enabled={particleConfig.enabled}
          interactive={particleConfig.interactive}
          particleCount={particleConfig.particleCount}
          moveSpeed={particleConfig.moveSpeed}
          lineDistance={particleConfig.lineLinked.distance}
        />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
