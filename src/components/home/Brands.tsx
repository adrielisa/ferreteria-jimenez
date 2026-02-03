// src/components/home/Brands.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const brands = [
  { name: 'TRUPER', src: '/TRUPER.webp', alt: 'TRUPER' },
  { name: 'PRETUL', src: '/PRETUL.webp', alt: 'PRETUL' },
  { name: 'VOLTECK', src: '/VOLTECK.webp', alt: 'VOLTECK' },
  { name: 'FOSET', src: '/FOSET.webp', alt: 'FOSET' },
  { name: 'FIERO', src: '/FIERO.webp', alt: 'FIERO' },
  { name: 'HERMEX', src: '/HERMEX.webp', alt: 'HERMEX' },
];

export default function Brands() {
  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-zinc-900">
          Contamos con una amplia gama de marcas
        </h2>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Double the brands for seamless looping */}
            {[...brands, ...brands].map((brand, index) => (
              <motion.div
                key={index}
                className="shrink-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={280}
                  height={160}
                  className="h-32 sm:h-40 w-auto object-contain"
                  loading="lazy"
                  quality={85}
                  decoding="async"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}