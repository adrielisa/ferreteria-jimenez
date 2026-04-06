'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section
      className="relative overflow-hidden pt-40 pb-20 text-center"
      style={{ backgroundColor: '#0E0E11' }}
    >
      {/* Thin top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-orange-500/40 to-transparent" />

      {/* Subtle orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-87.5 bg-orange-500 opacity-[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 px-8 sm:px-16 lg:px-24">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-500 mb-6"
        >
          Estamos aquí para ayudarte
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-6xl sm:text-8xl lg:text-[9rem] font-extrabold text-white leading-none tracking-tight mb-6"
        >
          CONTACTO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-zinc-400 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed"
        >
          Comunícate con nosotros por{' '}
          <span className="text-orange-400 font-medium">WhatsApp</span>,{' '}
          <span className="text-orange-400 font-medium">correo electrónico</span>{' '}
          o visítanos directamente en nuestra tienda.
        </motion.p>
      </div>
    </section>
  );
}
