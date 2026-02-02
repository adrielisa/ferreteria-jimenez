// src/app/(routes)/nosotros/page.tsx
import { Metadata } from 'next';
import AboutHero from '@/components/nosotros/AboutHero';
import Values from '@/components/nosotros/Values';
import Timeline from '@/components/nosotros/Timeline';
import Map from '@/components/home/Map';

export const metadata: Metadata = {
  title: 'Nosotros - Ferretería Jiménez | 15 años de experiencia',
  description: 'Conoce la historia de Ferretería Jiménez. 15 años de experiencia brindando productos de calidad y excelente servicio al cliente en el sector ferretero.',
  keywords: 'ferretería, nosotros, historia, misión, visión, valores, Jiménez',
  openGraph: {
    title: 'Nosotros - Ferretería Jiménez',
    description: '15 años de experiencia en el sector ferretero',
    type: 'website',
  },
};

export default function NosotrosPage() {
  return (
    <>
      <AboutHero />
      <Values />
      <Timeline />
      <Map />
    </>
  );
}