// src/components/nosotros/AboutHero.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Star, TrendingUp } from 'lucide-react';

export default function AboutHero() {
  const ref = useRef(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.43, 0.13, 0.23, 0.96]
      },
    },
  };

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 text-center mb-8"
          >
            Nuestra Historia
          </motion.h1>

          {/* Main Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-zinc-600 text-center mb-16 leading-relaxed"
          >
            Ferretería Jiménez es una empresa familiar con <span className="text-orange-600 font-semibold">15 años de experiencia</span> en el sector ferretero, comprometida con brindar productos de calidad y un excelente servicio al cliente.
          </motion.p>

          {/* Mission and Vision Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Mission Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white border border-zinc-200 rounded-2xl p-8 hover:border-zinc-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-orange-600 shrink-0">
                  <Star className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">Nuestra misión</h3>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Proveer herramientas, material eléctrico y plomería de la más alta calidad, ofreciendo un servicio excepcional que supere las expectativas de nuestros clientes.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white border border-zinc-200 rounded-2xl p-8 hover:border-zinc-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-orange-600 shrink-0">
                  <TrendingUp className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">Nuestra visión</h3>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Ser la opción preferida por calidad en herramientas, material eléctrico y plomería, con atención personalizada y un compromiso constante con la innovación.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}