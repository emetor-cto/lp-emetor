import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emetor - Performance, eficiência e tecnologia",
  description: "A Emetor estrutura os processos, otimiza o uso das ferramentas e implementa tecnologia de ponta para sua empresa crescer sem atritos.",
  other: {
    "facebook-domain-verification": "l372fjj5lrmye57680f46ha581r51k",
  },
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

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DiagnosticoOverlay } from "@/components/layout/DiagnosticoOverlay";
import { PageTransition } from "@/components/layout/PageTransition";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function RootLayout({
  children,
  diagnostico,
}: Readonly<{
  children: React.ReactNode;
  diagnostico: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="facebook-domain-verification" content="l372fjj5lrmye57680f46ha581r51k" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TTZ4PP7B');`,
          }}
        />
      </head>
      <body
        className="antialiased min-h-screen bg-[#0A0A0A] text-neutral-900 selection:bg-[#b9915e] selection:text-white flex flex-col px-4 sm:px-8 md:px-[60px] pb-4 sm:pb-6 md:pb-8 pt-0 relative"
      >
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TTZ4PP7B" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Header />

        <div className="flex-1 flex flex-col pt-0">
          <main className="flex-1 bg-white rounded-[32px] md:rounded-[40px] relative shadow-2xl flex flex-col min-h-screen">
            <div className="flex-1 pt-[80px]">
              <PageTransition>
                {children}
              </PageTransition>
            </div>
            <Footer />
          </main>
        </div>

        <div className="fixed bottom-0 left-0 right-0 h-4 sm:h-6 md:h-8 bg-[#0A0A0A] pointer-events-none z-40">
          <svg className="absolute bottom-[16px] sm:bottom-[24px] md:bottom-[32px] left-4 sm:left-8 md:left-[60px] w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 text-[#0A0A0A] fill-current pointer-events-none" viewBox="0 0 40 40">
            <path d="M 0 0 L 0 40 L 40 40 C 17.91 40 0 22.09 0 0 Z" />
          </svg>

          <svg className="absolute bottom-[16px] sm:bottom-[24px] md:bottom-[32px] right-4 sm:right-8 md:right-[60px] w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 text-[#0A0A0A] fill-current pointer-events-none" viewBox="0 0 40 40">
            <path d="M 40 0 L 40 40 L 0 40 C 22.09 40 40 22.09 40 0 Z" />
          </svg>
        </div>

        <WhatsAppButton />
        <DiagnosticoOverlay />
      </body>
    </html>
  );
}
