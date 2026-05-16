import { Metadata } from 'next';
import { siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contacto y Ubicación en Cancún',
  description:
    'Contáctanos por WhatsApp al +52 998 126 5802 o visítanos en Cancún, Quintana Roo. Horarios de atención, dirección y preguntas frecuentes de Ferreterías Jiménez.',
  keywords:
    'contacto ferretería Cancún, ferretería Jiménez teléfono, dirección ferretería Cancún, horarios ferretería Cancún, WhatsApp ferretería',
  alternates: {
    canonical: `${siteUrl}/contacto`,
  },
  openGraph: {
    title: 'Contacto y Ubicación en Cancún | Ferreterías Jiménez',
    description:
      'Contáctanos por WhatsApp o visítanos en Cancún, Q.R. Horarios de atención y ubicación de nuestras sucursales.',
    type: 'website',
    url: `${siteUrl}/contacto`,
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
