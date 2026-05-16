// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteUrl } from "@/lib/seo";

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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ferretería Jiménez Cancún — Herramientas, Plomería y Electricidad",
    template: "%s | Ferretería Jiménez Cancún",
  },
  description:
    "Ferretería en Cancún con más de 15 años de experiencia. Herramientas, plomería, electricidad y materiales de construcción. Las mejores marcas: TRUPER, PRETUL, VOLTECK, FOSET, FIERO, HERMEX. 2 sucursales en Cancún, Q.R.",
  keywords:
    "ferretería Cancún, ferretería Jiménez, herramientas Cancún, plomería Cancún, electricidad Cancún, materiales construcción Cancún, TRUPER, PRETUL, VOLTECK, FOSET, FIERO, HERMEX, ferretería Quintana Roo, ferretería cerca de mí",
  authors: [{ name: "Ferreterías Jiménez" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ferretería Jiménez Cancún — Herramientas, Plomería y Electricidad",
    description:
      "Ferretería en Cancún con más de 15 años de experiencia. Herramientas, plomería y electricidad con las mejores marcas.",
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "Ferreterías Jiménez",
    images: [
      {
        url: "/imagenTienda.webp",
        width: 1200,
        height: 630,
        alt: "Ferretería Jiménez — Cancún, Quintana Roo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferretería Jiménez Cancún — Herramientas, Plomería y Electricidad",
    description:
      "Ferretería en Cancún con más de 15 años de experiencia. 2 sucursales disponibles.",
    images: ["/imagenTienda.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "MX-ROO",
    "geo.placename": "Cancún, Quintana Roo",
    "geo.position": "21.17561;-86.83009",
    ICBM: "21.17561, -86.83009",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ferreterías Jiménez",
  url: siteUrl,
  description:
    "Ferretería en Cancún con más de 15 años de experiencia. Herramientas, plomería y electricidad.",
  inLanguage: "es-MX",
};

const hardwareStoreSchema = {
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  "@id": `${siteUrl}/#negocio`,
  name: "Ferreterías Jiménez",
  description:
    "Ferretería en Cancún con más de 15 años de experiencia. Herramientas, plomería, pintura y electricidad con las mejores marcas.",
  url: siteUrl,
  telephone: "+529981265802",
  email: "fyt.jimenez@hotmail.com",
  priceRange: "$$",
  currenciesAccepted: "MXN",
  paymentAccepted: "Efectivo, Tarjeta de Crédito, Tarjeta de Débito",
  image: `${siteUrl}/imagenTienda.webp`,
  logo: `${siteUrl}/imagenTienda.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Centro Comercial El Crucero, Supermercado 66",
    addressLocality: "Cancún",
    addressRegion: "Quintana Roo",
    postalCode: "77510",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.17561,
    longitude: -86.83009,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  hasMap: "https://maps.app.goo.gl/rxwc1VM59jnXsXnz5",
  sameAs: ["https://maps.app.goo.gl/rxwc1VM59jnXsXnz5"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hardwareStoreSchema) }}
        />
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