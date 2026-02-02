import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - Ferretería Jiménez | Contáctanos',
  description: 'Comunícate con Ferretería Jiménez. WhatsApp, correo electrónico, visítanos en Cancún. Horarios, ubicación y respuestas a preguntas frecuentes.',
  keywords: 'contacto, ferretería cancún, whatsapp, correo, ubicación, horarios, preguntas frecuentes',
  openGraph: {
    title: 'Contacto - Ferretería Jiménez',
    description: 'Estamos aquí para ayudarte. Múltiples canales de comunicación disponibles.',
    type: 'website',
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
