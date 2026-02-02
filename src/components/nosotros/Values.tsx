// src/components/nosotros/Values.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { Award, Users, Zap, Briefcase } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Calidad',
    description: 'Productos certificados de las mejores marcas del mercado',
  },
  {
    icon: Users,
    title: 'Servicio',
    description: 'Atención personalizada y profesional en cada compra',
  },
  {
    icon: Zap,
    title: 'Innovación',
    description: 'Siempre trayendo nuevos productos para nuestros clientes',
  },
  {
    icon: Briefcase,
    title: 'Experiencia',
    description: 'Más de 15 años en el sector ferretero',
  },
];

export default function Values() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 sm:py-32 bg-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-4">
            Nuestros Valores
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Lo que nos define como empresa y nos diferencia en el mercado
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border border-zinc-200 rounded-2xl p-8 text-center hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-orange-100 text-orange-600 mb-4">
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}