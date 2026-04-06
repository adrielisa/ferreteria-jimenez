'use client';

import { motion } from 'framer-motion';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32" style={{ backgroundColor: '#131316' }}>
      <div className="container mx-auto px-8 sm:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-500 mb-4">
            Estamos para ayudarte
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            ¿No encuentras lo que{' '}
            <span className="text-orange-500">buscas?</span>
          </h2>

          <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
            Contamos con un amplio catálogo de productos. Contáctanos y con gusto
            te ayudaremos a encontrar exactamente lo que necesitas para tu proyecto.
          </p>

          <WhatsAppButton message="Hola, necesito ayuda para encontrar un producto específico" />

          <p className="text-zinc-600 text-sm mt-8">
            Respuesta inmediata &nbsp;·&nbsp; Excelentes precios &nbsp;·&nbsp; Atención de calidad
          </p>
        </motion.div>
      </div>
    </section>
  );
}
