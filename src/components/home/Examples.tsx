// src/components/home/Examples.tsx
'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = dynamic(() => import('../ui/WhatsAppButton'));

function useCountUp(target: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let rafId: number;
    let startTime: number | null = null;

    const animate = (now: number) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [trigger, target, duration]);

  return count;
}

export default function Examples() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const productsCount = useCountUp(500, 2400, inView);
  const brandsCount = useCountUp(20, 1800, inView);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24" style={{ backgroundColor: '#131316' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left: Store image with badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative mb-6"
          >
            <div className="relative h-80 sm:h-115 lg:h-135 rounded-2xl overflow-hidden">
              <Image
                src="/imagenTienda.webp"
                alt="Interior de Ferretería Jiménez"
                fill
                className="object-cover"
                quality={80}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* +15 badge — hangs from bottom-right corner */}
            <div className="absolute -bottom-6 right-4 bg-orange-600 text-white px-6 py-4 rounded-xl shadow-2xl text-left">
              <div className="text-4xl font-bold leading-none">+15</div>
              <div className="text-[10px] uppercase tracking-[0.18em] mt-1 font-semibold">
                Años de servicio
              </div>
            </div>
          </motion.div>

          {/* Right: Text & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight uppercase mb-6">
              Tu ferretería de confianza:{' '}
              <span className="text-orange-500">Calidad, precio y servicio.</span>
            </h2>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-10">
              Ferretería Jiménez es una empresa familiar con 15 años de experiencia en el sector
              ferretero, comprometida con brindarte productos de calidad y un excelente servicio
              al cliente.
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-5xl sm:text-6xl font-bold text-white tabular-nums">
                  {productsCount}
                  <span className="text-orange-500">+</span>
                </div>
                <div className="text-zinc-400 text-xs uppercase tracking-[0.15em] mt-2 font-medium">
                  Productos disponibles
                </div>
              </div>
              <div>
                <div className="text-5xl sm:text-6xl font-bold text-white tabular-nums">
                  {brandsCount}
                  <span className="text-orange-500">+</span>
                </div>
                <div className="text-zinc-400 text-xs uppercase tracking-[0.15em] mt-2 font-medium">
                  Marcas a tu disposición
                </div>
              </div>
            </div>

            <WhatsAppButton className="uppercase tracking-widest text-sm" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
