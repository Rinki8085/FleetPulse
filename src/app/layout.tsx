import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FleetPulse — Fleet Intelligence & Telemetry Hub",
  description: "High-performance fleet operations, real-time asset telemetry & operating cost analytics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}