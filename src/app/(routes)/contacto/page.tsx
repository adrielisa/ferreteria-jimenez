import ContactHero from '@/components/contacto/ContactHero';
import ContactInfo from '@/components/contacto/ContactInfo';
import FAQ from '@/components/contacto/FAQ';
import { siteUrl } from '@/lib/seo';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Contacto', item: `${siteUrl}/contacto` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Aceptan tarjetas de crédito y débito?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, aceptamos todas las tarjetas de crédito y débito principales. También aceptamos efectivo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Ofrecen garantía en sus productos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Todos nuestros productos cuentan con la garantía del fabricante. El tiempo de garantía varía según la marca y el tipo de producto. Te asesoramos personalmente sobre cada caso.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo solicitar una cotización?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Por supuesto. Puedes solicitar cotizaciones a través de WhatsApp, correo electrónico o visitándonos en nuestra tienda. Proporciónanos detalles de lo que necesitas y te responderemos rápidamente.',
      },
    },
  ],
};

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContactHero />
      <ContactInfo />
      <FAQ />
    </>
  );
}