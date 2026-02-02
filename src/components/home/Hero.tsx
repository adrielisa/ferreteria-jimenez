// src/components/home/Hero.tsx
'use client';

import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Drill, CircleDot } from 'lucide-react';

const WhatsAppButton = dynamic(() => import('../ui/WhatsAppButton'), {
  loading: () => <div className="h-12 w-40 bg-orange-600 rounded-full animate-pulse" />,
});

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end center'],
  });

  // Smooth spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax effects
  const y = useTransform(smoothProgress, [0, 1], [0, -200]);
  const opacity = useTransform(smoothProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.8]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[150vh] w-full"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-linear-to-br from-zinc-900 via-zinc-800 to-black">
          {/* Animated mesh gradient overlay */}
          <div className="absolute inset-0 opacity-30">
            <motion.div
              animate={{
                background: [
                  'radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 50% 80%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)',
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="w-full h-full"
            />
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }} />
          </div>
        </div>

        {/* Main drill animation - EPIC centerpiece */}
        <motion.div
          initial={{ y: -500, rotate: 0, opacity: 0 }}
          animate={{ y: 0, rotate: 360, opacity: 0.08 }}
          transition={{
            duration: 2,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          style={{
            y: useTransform(smoothProgress, [0, 1], [0, 300]),
            rotate: useTransform(smoothProgress, [0, 1], [360, 720]),
            scale: useTransform(smoothProgress, [0, 1], [1, 2]),
          }}
          className="absolute"
        >

        </motion.div>

        {/* Rotating circles decoration */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{
              width: 300 + i * 200,
              height: 300 + i * 200,
              marginLeft: -(150 + i * 100),
              marginTop: -(150 + i * 100),
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{
              duration: 20 + i * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div className="w-full h-full rounded-full border border-orange-500/10" />
            <CircleDot 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 text-orange-500" 
              fill="currentColor"
            />
          </motion.div>
        ))}

        {/* Content */}
        <motion.div 
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
          style={{ y, opacity, scale }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="inline-block"
            >
              Herramientas y materiales
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"
            >
              de calidad profesional
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="text-lg sm:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto"
          >
            Todo lo que necesitas para tus proyectos de construcción con las mejores marcas del mercado
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <WhatsAppButton />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm"
          >
            {[
              { value: '15+', label: 'Años de experiencia' },
              { value: '1000+', label: 'Clientes satisfechos' },
              { value: '10+', label: 'Marcas reconocidas' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-orange-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-zinc-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-zinc-400 uppercase tracking-wider">Scroll</span>
            <svg
              className="w-6 h-6 text-orange-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}