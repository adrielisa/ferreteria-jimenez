// src/components/home/Hero.tsx
'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

const WhatsAppButton = dynamic(() => import('../ui/WhatsAppButton'), {
  loading: () => <div className="h-12 w-40 bg-orange-600 rounded-full animate-pulse" />,
});

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0 bg-zinc-700">
        <Image
          src="/hero.webp"
          alt="Herramientas de ferretería"
          fill
          priority
          quality={85}
          className="object-cover opacity-50"
          sizes="100vw"
        />
      </div>

      {/* Content - Sin animaciones pesadas */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
          Herramientas y materiales de calidad para tu obra o proyecto
        </h1>

        <p className="text-lg sm:text-xl text-zinc-200 mb-8 animate-fade-in-delay">
          Todo lo que necesitas para tus proyectos de construcción
        </p>

        <div className="animate-fade-in-delay-2">
          <WhatsAppButton />
        </div>
      </div>

      {/* Scroll Indicator - CSS only */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
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
      </div>
    </section>
  );
}