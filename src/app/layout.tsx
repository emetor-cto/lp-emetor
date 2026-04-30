import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emetor - Performance, eficiência e tecnologia",
  description: "A Emetor estrutura os processos, otimiza o uso das ferramentas e implementa tecnologia de ponta para sua empresa crescer sem atritos.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
};

import { DiagnosticoOverlay } from "@/components/layout/DiagnosticoOverlay";

export default function RootLayout({
  children,
  diagnostico,
}: Readonly<{
  children: React.ReactNode;
  diagnostico: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        <DiagnosticoOverlay />
      </body>
    </html>
  );
}
