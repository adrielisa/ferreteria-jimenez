// src/components/home/Products.tsx
'use client';

import { motion, useMotionValue } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    category: 'Herramientas Manuales',
    image: '/products/product1.jpg',
  },
  {
    id: 2,
    category: 'Herramientas Eléctricas',
    image: '/products/product2.jpg',
  },
  {
    id: 3,
    category: 'Material de Construcción',
    image: '/products/product3.jpg',
  },
  {
    id: 4,
    category: 'Pintura y Accesorios',
    image: '/products/product4.jpg',
  },
  {
    id: 5,
    category: 'Plomería',
    image: '/products/product5.jpg',
  },
];

export default function Products() {
  const [dragging, setDragging] = useState(false);
  const x = useMotionValue(0);

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

        {/* Multi-item Carousel */}
        <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            style={{ x }}
            onDragStart={() => setDragging(true)}
            onDragEnd={() => setDragging(false)}
            className="flex gap-6 pb-4"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-xl overflow-hidden shadow-lg"
                whileHover={{ scale: dragging ? 1 : 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="h-48 bg-zinc-300 flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Placeholder for product image */}
                  <div className="bg-zinc-400 w-full h-full flex items-center justify-center">
                    <span className="text-zinc-600 font-semibold">Imagen del producto</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4 text-zinc-900">{product.category}</h3>
                  <Link
                    href="/productos"
                    className="inline-block bg-zinc-900 text-white px-6 py-2 rounded-full hover:bg-zinc-800 transition-colors"
                    onClick={(e) => dragging && e.preventDefault()}
                  >
                    Ver productos
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <p className="text-center text-zinc-500 mt-6 text-sm">
          Desliza para ver más categorías →
        </p>
      </div>
    </section>
  );
}