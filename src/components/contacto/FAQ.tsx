// src/components/contacto/FAQ.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: '¿Aceptan tarjetas de crédito y débito?',
    answer: 'Sí, aceptamos todas las tarjetas de crédito y débito principales. También aceptamos efectivo.',
  },
  {
    question: '¿Ofrecen garantía en sus productos?',
    answer: 'Todos nuestros productos cuentan con la garantía del fabricante. El tiempo de garantía varía según la marca y el tipo de producto. Te asesoramos personalmente sobre cada caso.',
  },
  {
    question: '¿Puedo solicitar una cotización?',
    answer: 'Por supuesto. Puedes solicitar cotizaciones a través de WhatsApp, correo electrónico o visitándonos en nuestra tienda. Proporciónanos detalles de lo que necesitas y te responderemos rápidamente.',
  },
  {
    question: '¿Tienen servicio de asesoría técnica?',
    answer: 'Sí, nuestro equipo tiene amplia experiencia y puede asesorarte en la selección de herramientas y materiales adecuados para tu proyecto, ya sea residencial, comercial o industrial.',
  },
  {
    question: '¿Manejan ventas por mayoreo?',
    answer: 'Sí, ofrecemos precios especiales para compras por mayoreo y para contratistas. Contáctanos para conocer nuestras condiciones y descuentos disponibles.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-32 bg-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-6">
            <HelpCircle className="w-8 h-8" strokeWidth={2} />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-4">
            Preguntas Frecuentes
          </h2>
          
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes de nuestros clientes
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-orange-300 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 sm:px-8 py-6 flex items-center justify-between gap-4 text-left hover:bg-zinc-50 transition-colors"
              >
                <span className="font-semibold text-zinc-900 text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-zinc-600" strokeWidth={2} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-6 text-zinc-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Extra CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-zinc-600 mb-4">
            ¿No encuentras la respuesta que buscas?
          </p>
          <a
            href="https://wa.me/529981265802?text=Hola,%20tengo%20una%20pregunta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Contáctanos directamente
          </a>
        </motion.div>
      </div>
    </section>
  );
}
