'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const hours = [
  { day: 'Lunes a Viernes', time: '9:00 AM – 8:00 PM' },
  { day: 'Sábados', time: '9:00 AM – 8:00 PM' },
  { day: 'Domingos', time: '9:00 AM – 8:00 PM' },
];

export default function ContactInfo() {
  return (
    <section
      className="pb-24 sm:pb-32 px-8 sm:px-16 lg:px-24"
      style={{ backgroundColor: '#0E0E11' }}
    >
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* WhatsApp Card */}
          <motion.a
            variants={itemVariants}
            href="https://wa.me/529981265802?text=Hola,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl p-8 border border-white/5 hover:border-orange-500/40 transition-all duration-300 md:col-start-1 md:row-start-1"
            style={{ backgroundColor: '#131316' }}
          >
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
              <MessageCircle
                className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300"
                strokeWidth={2}
              />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">WhatsApp</h3>
            <p className="text-zinc-500 text-sm mb-4">Respuesta inmediata</p>
            <p className="text-orange-400 font-semibold text-lg group-hover:text-orange-300 transition-colors">
              +52 998 126 5802
            </p>
          </motion.a>

          {/* Email Card */}
          <motion.a
            variants={itemVariants}
            href="mailto:fyt.jimenez@hotmail.com"
            className="group rounded-2xl p-8 border border-white/5 hover:border-orange-500/40 transition-all duration-300 md:col-start-2 md:row-start-1"
            style={{ backgroundColor: '#131316' }}
          >
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
              <Mail
                className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300"
                strokeWidth={2}
              />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Correo</h3>
            <p className="text-zinc-500 text-sm mb-4">Te respondemos en 24h</p>
            <p className="text-orange-400 font-semibold group-hover:text-orange-300 transition-colors break-all">
              fyt.jimenez@hotmail.com
            </p>
          </motion.a>

          {/* Visítanos Card — spans 2 rows */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-white/5 overflow-hidden md:col-start-3 md:row-start-1 md:row-span-2"
            style={{ backgroundColor: '#131316' }}
          >
            {/* Map embed */}
            <div className="relative h-56 md:h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.4163117174785!2d-86.8300947889893!3d21.17561478042941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2c1b86d4a617%3A0x2192d2501e2545e6!2sJIMENEZ!5e0!3m2!1ses-419!2smx!4v1752168372461!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Ferretería Jiménez"
                className="absolute inset-0 grayscale opacity-60"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#131316] via-[#131316]/20 to-transparent" />
            </div>

            {/* Card content */}
            <div className="p-8">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-orange-500" strokeWidth={2} />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Visítanos</h3>
              <p className="text-zinc-500 text-sm mb-6">Cancún, Quintana Roo</p>
              <a
                href="https://maps.app.goo.gl/rxwc1VM59jnXsXnz5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-400 font-semibold text-sm hover:text-orange-300 transition-colors tracking-wider"
              >
                VER EN GOOGLE MAPS
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4-4 4M3 12h18"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Horarios — spans 2 columns */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-8 border border-white/5 md:col-start-1 md:col-span-2 md:row-start-2"
            style={{ backgroundColor: '#131316' }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-orange-500" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Horarios de Atención</h3>
                <p className="text-zinc-500 text-sm">Abiertos todos los días</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {hours.map((slot, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 border border-white/5"
                  style={{ backgroundColor: '#0E0E11' }}
                >
                  <p className="text-zinc-500 text-sm mb-2">{slot.day}</p>
                  <p className="text-white font-bold">{slot.time}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
