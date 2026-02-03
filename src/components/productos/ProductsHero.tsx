// src/components/productos/ProductsHero.tsx
'use client';

import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

export default function ProductsHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-600 text-white mb-8"
          >
            <Package className="w-10 h-10" strokeWidth={2} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Nuestros Productos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-zinc-300 mb-8 leading-relaxed"
          >
            Descubre nuestra amplia selección de herramientas y materiales de las mejores marcas del mercado
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
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