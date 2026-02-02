// src/components/home/Hero.tsx
'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WhatsAppButton = dynamic(() => import('../ui/WhatsAppButton'), {
  loading: () => <div className="h-12 w-40 bg-orange-600 rounded-full animate-pulse" />,
});

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end center'],
  });

  // Scale: 1 -> 1.5 (zoom in)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  
  // Opacity: 1 -> 0 (fade out)
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // Blur: 0px -> 10px (blur effect)
  const blur = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[150vh] w-full"
    >
      {/* Sticky container for the visual effect */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 bg-zinc-900"
          style={{ 
            scale,
            filter: blur.get() !== undefined ? `blur(${blur.get()}px)` : 'blur(0px)',
          }}
        >
          <Image
            src="/hero.webp"
            alt="Herramientas de ferretería"
            fill
            priority
            fetchPriority="high"
            quality={75}
            className="object-cover"
            sizes="100vw"
          />
          {/* Overlay oscuro que aumenta con el scroll */}
          <motion.div 
            className="absolute inset-0 bg-black"
            style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.3, 0.7]) }}
          />
        </motion.div>

        {/* Content con fade out */}
        <motion.div 
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
          style={{ opacity }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Herramientas y materiales de calidad para tu obra o proyecto
          </h1>

          <p className="text-lg sm:text-xl text-zinc-200 mb-8">
            Todo lo que necesitas para tus proyectos de construcción
          </p>

          <div>
            <WhatsAppButton />
          </div>
        </motion.div>

        {/* Scroll Indicator con fade out */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow"
          style={{ opacity }}
        >
          <svg
            className="w-8 h-8 text-white"
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
      </div>
    </section>
  );
}