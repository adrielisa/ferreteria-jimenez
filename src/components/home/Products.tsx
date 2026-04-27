// src/components/home/Products.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    category: 'Herramientas Manuales',
    image: '/herramientasManuales.webp',
    // Large left card: spans 2 cols + 2 rows on desktop
    gridClass: 'col-span-1 sm:col-span-2 sm:row-span-2',
    heightClass: 'h-52 sm:h-auto',
  },
  {
    id: 2,
    category: 'Herramientas Eléctricas',
    image: '/herramientasElectricas.webp',
    // Top right: spans 2 cols, 1 row on desktop
    gridClass: 'col-span-1 sm:col-span-2 sm:row-span-1',
    heightClass: 'h-52 sm:h-auto',
  },
  {
    id: 3,
    category: 'Pintura y Accesorios',
    image: '/pintura.webp',
    // Bottom right left: 1 col, 1 row
    gridClass: 'col-span-1 sm:col-span-1 sm:row-span-1',
    heightClass: 'h-40 sm:h-auto',
  },
  {
    id: 4,
    category: 'Plomería',
    image: '/plomeria.webp',
    // Bottom right right: 1 col, 1 row
    gridClass: 'col-span-1 sm:col-span-1 sm:row-span-1',
    heightClass: 'h-40 sm:h-auto',
  },
];

export default function Products() {
  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: '#0E0E11' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-orange-500 text-xs font-semibold uppercase tracking-[0.2em] mb-2">Categorías</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase">
            De nuestros productos
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 sm:grid-rows-2 gap-2 sm:gap-3 sm:h-130 lg:h-145">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${product.gridClass} ${product.heightClass} relative rounded-xl overflow-hidden group cursor-pointer`}
            >
              <Link href="/productos" className="absolute inset-0">
                <Image
                  src={product.image}
                  alt={product.category}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={
                    product.id === 1
                      ? '(max-width: 640px) 50vw, 50vw'
                      : product.id === 2
                      ? '(max-width: 640px) 50vw, 50vw'
                      : '(max-width: 640px) 50vw, 25vw'
                  }
                  loading={product.id === 1 ? 'eager' : 'lazy'}
                  quality={product.id === 1 ? 90 : 75}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wide drop-shadow-lg">
                    {product.category}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

