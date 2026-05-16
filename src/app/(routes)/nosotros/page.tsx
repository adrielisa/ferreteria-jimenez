// src/app/(routes)/nosotros/page.tsx
import { Metadata } from 'next';
import AboutHero from '@/components/nosotros/AboutHero';
import Values from '@/components/nosotros/Values';
import Timeline from '@/components/nosotros/Timeline';
import Map from '@/components/home/Map';
import { siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Nosotros — 15 años de ferretería en Cancún',
  description:
    'Conoce la historia de Ferreterías Jiménez. Más de 15 años sirviendo a Cancún, Quintana Roo con herramientas, plomería y electricidad de calidad. Nuestra misión, visión y valores.',
  keywords:
    'ferretería Cancún nosotros, historia ferretería Jiménez, ferretería Quintana Roo, experiencia ferretería Cancún',
  alternates: {
    canonical: `${siteUrl}/nosotros`,
  },
  openGraph: {
    title: 'Nosotros — 15 años de ferretería en Cancún | Ferreterías Jiménez',
    description:
      'Más de 15 años sirviendo a Cancún con herramientas, plomería y electricidad de calidad.',
    type: 'website',
    url: `${siteUrl}/nosotros`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Nosotros', item: `${siteUrl}/nosotros` },
  ],
};

export default function NosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutHero />
      <Values />
      <Timeline />
      <Map />
    </>
  );
}