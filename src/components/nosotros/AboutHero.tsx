// src/components/nosotros/AboutHero.tsx
'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="pt-32 pb-20" style={{ backgroundColor: '#0E0E11' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold text-white uppercase leading-none tracking-tight mb-8">
            Nuestra historia
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Ferretería Jiménez es una empresa familiar con{' '}
            <span className="text-orange-500 font-semibold">15 años de experiencia</span>{' '}
            en el sector ferretero, comprometida con brindar productos de calidad y
            un excelente servicio al cliente.
          </p>
        </motion.div>

        {/* Mission / Vision cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="grid md:grid-cols-2 max-w-4xl mx-auto"
          style={{ gap: '1px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '1rem', overflow: 'hidden' }}
        >
          {/* Mission */}
          <div className="p-10" style={{ backgroundColor: '#131316' }}>
            <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] font-semibold mb-5">
              Nuestra Misión
            </p>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              Comercializar productos ferreteros de la mejor calidad y garantía para nuestros
              clientes, con la mayor satisfacción de lo que se llevan; de esta manera,
              contribuimos cada día para que nuestros clientes estén satisfechos.
            </p>
          </div>

          {/* Vision */}
          <div className="p-10" style={{ backgroundColor: '#131316' }}>
            <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] font-semibold mb-5">
              Nuestra Visión
            </p>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              Ser la ferretería líder de la región y reconocida por ofrecer los mejores
              productos y soluciones para el hogar, convirtiendo nos en el referente principal
              del sector ferretero local, expandiendo nuestra presencia a través de nuevos
              puntos de venta. Somos reconocidos no solo como vendedores, sino como asesores
              técnicos de nuestros clientes.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
