// src/components/nosotros/Timeline.tsx
'use client';

import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2009',
    title: 'Fundación',
    description: 'Inicia operaciones Ferretería Jiménez con un pequeño local',
  },
  {
    year: '2014',
    title: 'Expansión',
    description: 'Ampliamos nuestro inventario y alianzas con grandes marcas',
  },
  {
    year: '2019',
    title: 'Modernización',
    description: 'Implementamos sistemas digitales y mejoras en servicio',
  },
  {
    year: '2024',
    title: 'Presente',
    description: 'Presencia online y compromiso con la innovación digital',
  },
];

export default function Timeline() {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
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
            Nuestra Trayectoria
          </h2>
          <p className="text-xl text-zinc-600">
            15 años de crecimiento y confianza en el sector
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="flex gap-6 sm:gap-8 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-orange-600 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                {index < milestones.length - 1 && (
                  <div className="w-1 h-20 bg-gradient-to-b from-orange-600 to-orange-300 mt-4" />
                )}
              </div>

              {/* Content */}
              <div className="pt-2 pb-8">
                <span className="inline-block bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-2">
                  {milestone.year}
                </span>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}