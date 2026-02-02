import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Productos - Ferretería Jiménez | Herramientas y Materiales',
  description: 'Descubre nuestra amplia selección de herramientas manuales, eléctricas, materiales de pintura, plomería y más. Las mejores marcas al mejor precio.',
  keywords: 'herramientas, productos ferretería, herramientas manuales, herramientas eléctricas, plomería, pintura, material eléctrico',
  openGraph: {
    title: 'Productos - Ferretería Jiménez',
    description: 'Amplia selección de herramientas y materiales de construcción',
    type: 'website',
  },
};

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
