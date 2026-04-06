'use client';

import { motion } from 'framer-motion';

export default function ProductsHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#0E0E11' }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orange glows */}
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-orange-500 opacity-[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-75 h-75 bg-orange-500 opacity-[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-8 sm:px-16 lg:px-24 relative z-10 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-500 mb-6"
          >
            Catálogo completo
          </motion.span>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-6xl sm:text-8xl lg:text-[9rem] font-extrabold text-white leading-none tracking-tight mb-8"
          >
            NUESTROS
            <br />
            <span className="text-orange-500">PRODUCTOS</span>
          </motion.h1>

          {/* Orange divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-0.5 bg-orange-500 origin-left mb-8"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-zinc-400 text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
          >
            Herramientas, materiales y más para cada proyecto. Encuentra todo
            lo que necesitas en un solo lugar.
          </motion.p>

          {/* Brand pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap gap-3"
          >
            {['TRUPER', 'PRETUL', 'VOLTECK', 'FOSET'].map((brand) => (
              <span
                key={brand}
                className="text-xs font-semibold tracking-widest text-zinc-400 border border-white/10 rounded-full px-4 py-2 hover:border-orange-500/40 hover:text-orange-400 transition-colors"
                style={{ backgroundColor: '#131316' }}
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
