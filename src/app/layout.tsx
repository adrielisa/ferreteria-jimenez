// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Ferreterías Jiménez - Herramientas y de Calidad",
  description: "Herramientas de calidad para tu obra o proyecto. Contamos con las mejores marcas en ferretería: TRUPER, PRETUL, VOLTECK, FOSET, FIERO, HERMEX.",
  keywords: "ferretería, herramientas, construcción, Jiménez, TRUPER, PRETUL, plomería, pintura",
  authors: [{ name: "Ferreterías Jiménez" }],
  openGraph: {
    title: "Ferreterías Jiménez - Herramientas",
    description: "Herramientas de calidad para tu obra o proyecto",
    type: "website",
    locale: "es_MX",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />
      </head>
      <body className={`${spaceGrotesk.variable} ${plusJakarta.variable} antialiased`} suppressHydrationWarning>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}