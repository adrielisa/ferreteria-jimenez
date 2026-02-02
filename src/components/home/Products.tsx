// src/components/home/Products.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    id: 1,
    category: 'Herramientas Manuales',
    image: '/herramientasManuales.webp',
  },
  {
    id: 2,
    category: 'Herramientas Eléctricas',
    image: '/herramientasElectricas.webp',
  },
  {
    id: 3,
    category: 'Pintura y Accesorios',
    image: '/pintura.webp',
  },
  {
    id: 4,
    category: 'Plomería',
    image: '/plomeria.webp',
  },
];

export default function Products() {
  return (
    <section className="py-16 sm:py-24 bg-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-zinc-900">
          Nuestros productos
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 bg-zinc-400 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.category}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  quality={80}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4 text-zinc-900">{product.category}</h3>
                <Link
                  href="/productos"
                  className="inline-block bg-zinc-900 text-white px-6 py-2 rounded-full hover:bg-zinc-800 transition-colors"
                >
                  Ver productos
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}