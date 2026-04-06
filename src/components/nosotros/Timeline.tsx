// src/components/nosotros/Timeline.tsx
'use client';

import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2009',
    title: 'Fundación',
    description: 'Inicia operaciones Ferretería Jiménez con un pequeño local en Cancún, ofreciendo herramientas y materiales básicos de construcción.',
  },
  {
    year: '2014',
    title: 'Expansión',
    description: 'Ampliamos nuestro inventario con nuevas categorías: material eléctrico, plomería y pintura, para brindar más opciones a nuestros clientes.',
  },
  {
    year: '2019',
    title: 'Modernización',
    description: 'Incorporamos marcas líderes del mercado como TRUPER, DEWALT y PRETUL, fortaleciendo nuestra oferta de productos de calidad profesional.',
  },
  {
    year: '2026',
    title: 'Presente',
    description: 'Presencia online, atención personalizada y un compromiso constante con nuestros clientes en todo momento.',
  },
];

export default function Timeline() {
  return (
    <section className="py-20 sm:py-28 border-t border-white/5" style={{ backgroundColor: '#0E0E11' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Visual timeline */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Vertical line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-px"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
            />

            <div className="space-y-10">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex gap-8 pl-0"
                >
                  {/* Dot + year */}
                  <div className="flex flex-col items-center shrink-0 w-10">
                    <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center z-10 shrink-0">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pb-2">
                    <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">
                      {milestone.year}
                    </span>
                    <h3 className="text-white font-bold text-lg uppercase mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Heading & description */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:pt-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight mb-6">
              Nuestra trayectoria:{' '}
              <span className="text-orange-500">15 años de experiencia</span>{' '}
              y conocimiento en el sector
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Ferretería Jiménez es una empresa familiar con 15 años de experiencia en el
              sector ferretero, comprometida con brindar productos de calidad y un excelente
              servicio al cliente en cada visita.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
