// src/components/contacto/ContactInfo.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';
import Link from 'next/link';

const contactMethods = [
  {
    icon: Phone,
    title: 'WhatsApp',
    description: 'Respuesta inmediata',
    value: '+52 998 126 5802',
    link: 'https://wa.me/529981265802?text=Hola,%20me%20gustaría%20obtener%20más%20información',
    color: 'from-green-50 to-emerald-50',
    iconColor: 'text-green-600',
    borderColor: 'border-green-200',
    hoverBorder: 'hover:border-green-400',
  },
  {
    icon: Mail,
    title: 'Correo Electrónico',
    description: 'Te respondemos en 24 horas',
    value: 'contacto@ferreteria-jimenez.com',
    link: 'mailto:contacto@ferreteria-jimenez.com',
    color: 'from-blue-50 to-cyan-50',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    hoverBorder: 'hover:border-blue-400',
  },
  {
    icon: MapPin,
    title: 'Visítanos',
    description: 'Cancún, Quintana Roo',
    value: 'Ver en Google Maps',
    link: 'https://maps.app.goo.gl/rxwc1VM59jnXsXnz5',
    color: 'from-orange-50 to-amber-50',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    hoverBorder: 'hover:border-orange-400',
  },
];

const socialMedia = [
  {
    icon: Facebook,
    name: 'Facebook',
    link: 'https://facebook.com',
    color: 'hover:text-blue-600',
  },
  {
    icon: Instagram,
    name: 'Instagram',
    link: 'https://instagram.com',
    color: 'hover:text-pink-600',
  },
  {
    icon: Phone,
    name: 'WhatsApp',
    link: 'https://wa.me/529981265802',
    color: 'hover:text-green-600',
  },
];

export default function ContactInfo() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                variants={itemVariants}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`block bg-linear-to-br ${method.color} border ${method.borderColor} rounded-2xl p-8 ${method.hoverBorder} hover:shadow-lg transition-all group`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white ${method.iconColor} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>
                
                <h3 className="text-xl font-bold text-zinc-900 mb-2">
                  {method.title}
                </h3>
                
                <p className="text-sm text-zinc-600 mb-3">
                  {method.description}
                </p>
                
                <p className={`font-semibold ${method.iconColor} group-hover:underline`}>
                  {method.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Business Hours & Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* Hours */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-600" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">
                Horario de atención
              </h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-zinc-600">Lunes a Viernes</span>
                <span className="font-semibold text-zinc-900">9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-600">Sábados</span>
                <span className="font-semibold text-zinc-900">9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-600">Domingos</span>
                <span className="font-semibold text-zinc-900">9:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-zinc-900 mb-6">
              Síguenos en redes sociales
            </h3>
            
            <div className="flex justify-center gap-4">
              {socialMedia.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 rounded-full bg-white border-2 border-zinc-200 flex items-center justify-center text-zinc-600 ${social.color} hover:border-current transition-colors`}
                    aria-label={social.name}
                  >
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
