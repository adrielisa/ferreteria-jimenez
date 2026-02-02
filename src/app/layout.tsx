// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Ferreterías Jiménez - Herramientas y Materiales de Calidad",
  description: "Herramientas y materiales de calidad para tu obra o proyecto. Contamos con las mejores marcas en ferretería: TRUPER, PRETUL, VOLTECK, FOSET, FIERO, HERMEX.",
  keywords: "ferretería, herramientas, construcción, materiales, Jiménez, TRUPER, PRETUL, plomería, pintura",
  authors: [{ name: "Ferreterías Jiménez" }],
  openGraph: {
    title: "Ferreterías Jiménez - Herramientas y Materiales",
    description: "Herramientas y materiales de calidad para tu obra o proyecto",
    type: "website",
    locale: "es_MX",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}