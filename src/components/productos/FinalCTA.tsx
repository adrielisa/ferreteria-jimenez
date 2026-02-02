'use client';

import { motion } from 'framer-motion';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { Package } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-32 bg-linear-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-600 text-white mb-6">
            <Package className="w-10 h-10" strokeWidth={2} />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-6">
            ¿No encuentras lo que buscas?
          </h2>

          <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
            Contamos con un amplio catálogo de productos. Contáctanos y con gusto te ayudaremos a encontrar exactamente lo que necesitas para tu proyecto.
          </p>

          <WhatsAppButton message="Hola, necesito ayuda para encontrar un producto específico" />

          <p className="text-sm text-zinc-500 mt-6">
            Respuesta inmediata • Asesoría personalizada • Mejores precios
          </p>
        </motion.div>
      </div>
    </section>
  );
}