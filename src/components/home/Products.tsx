// src/components/home/Products.tsx
'use client';

import { motion } from 'framer-motion';
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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-zinc-900"
        >
          Nuestros productos
        </motion.h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-zinc-400">
                <Image
                  src={product.image}
                  alt={product.category}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
            </motion.div>
          ))}
        </div>

        {/* Link to all products */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
        </motion.div>
      </div>
    </section>
  );
}