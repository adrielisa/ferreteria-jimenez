// src/components/nosotros/Values.tsx
'use client';

import { motion } from 'framer-motion';
import { Award, Users, Zap, Briefcase, Shield } from 'lucide-react';

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
  {
    icon: Shield,
    title: 'Confianza',
    description: 'Honestidad y transparencia en cada transacción',
  },
];

export default function Values() {
  return (
    <section className="py-20 sm:py-28 border-t border-white/5" style={{ backgroundColor: '#131316' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase">
            Nuestros <span className="text-orange-500">Valores</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col items-center text-center gap-4"
              >
                {/* Circle */}
                <div
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#0E0E11', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <Icon className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-1">
                    {value.title}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
