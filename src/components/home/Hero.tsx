// src/components/home/Hero.tsx
'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

const WhatsAppButton = dynamic(() => import('../ui/WhatsAppButton'), {
  loading: () => <div className="h-12 w-44 bg-orange-600 rounded-full animate-pulse" />,
});

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <div className="h-screen w-full overflow-hidden">

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
        <div className="relative z-10 h-full flex flex-col justify-center items-start text-left px-8 sm:px-16 lg:px-24 max-w-5xl">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white leading-none tracking-tight uppercase mb-8">
            Herramientas y
            <br />
            materiales de
            <br />
            <span className="text-orange-500">Calidad
            <br />
            Profesional</span>
          </h1>

          <div>
            <WhatsAppButton className="uppercase tracking-widest text-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
