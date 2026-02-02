// src/components/productos/ProductsHero.tsx
'use client';

import { motion } from 'framer-motion';
import { Hammer, Wrench } from 'lucide-react';

export default function ProductsHero() {
  return (
    <section className="relative py-24 sm:py-32 bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-bounce-slow">
          <Hammer className="w-20 h-20 text-orange-500" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce-slow" style={{ animationDelay: '1s' }}>
          <Wrench className="w-16 h-16 text-orange-500" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Nuestros Productos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-zinc-300 mb-8 leading-relaxed"
          >
            Descubre nuestra amplia selección de herramientas y materiales de las mejores marcas del mercado
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-zinc-400"
          >
            <span className="bg-zinc-800 px-4 py-2 rounded-full">TRUPER</span>
            <span className="bg-zinc-800 px-4 py-2 rounded-full">PRETUL</span>
            <span className="bg-zinc-800 px-4 py-2 rounded-full">VOLTECK</span>
            <span className="bg-zinc-800 px-4 py-2 rounded-full">FOSET</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}