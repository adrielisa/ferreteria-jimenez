// src/components/home/Hero.tsx
'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const WhatsAppButton = dynamic(() => import('../ui/WhatsAppButton'), {
  loading: () => <div className="h-12 w-44 bg-orange-600 rounded-full animate-pulse" />,
});

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, [0, 1], [0, -120]);
  const opacity = useTransform(smoothProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[130vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Background: dark base #0E0E11 + hero.webp at 20% opacity */}
        <div className="absolute inset-0" style={{ backgroundColor: '#0E0E11' }}>
          <Image
            src="/hero.webp"
            alt=""
            fill
            priority
            quality={80}
            className="object-cover opacity-20"
            sizes="100vw"
          />
          {/* Bottom gradient for readability */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0E0E11]/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 h-full flex flex-col justify-center items-start text-left px-8 sm:px-16 lg:px-24 max-w-5xl"
          style={{ y, opacity }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white leading-none tracking-tight uppercase mb-8"
          >
            Herramientas y
            <br />
            materiales de
            <br />
            <span className="text-orange-500">Calidad
            <br />
            Profesional</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <WhatsAppButton className="uppercase tracking-widest text-sm" />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
