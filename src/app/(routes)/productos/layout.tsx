import { Metadata } from 'next';
import { siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Herramientas y Materiales de Construcción en Cancún',
  description:
    'Amplia selección de herramientas manuales, eléctricas, plomería, pintura y material eléctrico en Cancún. Las mejores marcas: TRUPER, PRETUL, VOLTECK, FOSET, FIERO, HERMEX.',
  keywords:
    'herramientas Cancún, herramientas manuales Cancún, herramientas eléctricas Cancún, plomería Cancún, pintura Cancún, material eléctrico Cancún, TRUPER Cancún, PRETUL, ferretería productos',
  alternates: {
    canonical: `${siteUrl}/productos`,
  },
  openGraph: {
    title: 'Herramientas y Materiales de Construcción en Cancún | Ferreterías Jiménez',
    description:
      'Herramientas manuales, eléctricas, plomería, pintura y electricidad. Las mejores marcas al mejor precio en Cancún.',
    type: 'website',
    url: `${siteUrl}/productos`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Productos', item: `${siteUrl}/productos` },
  ],
};

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
