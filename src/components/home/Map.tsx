// src/components/home/Map.tsx
'use client';

import { motion } from 'framer-motion';

export default function Map() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-zinc-900"
        >
          Nuestra ubicación
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.4163117174785!2d-86.8300947889893!3d21.17561478042941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2c1b86d4a617%3A0x2192d2501e2545e6!2sJIMENEZ!5e0!3m2!1ses-419!2smx!4v1752168372461!5m2!1ses-419!2smx"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Ferretería Jiménez"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}