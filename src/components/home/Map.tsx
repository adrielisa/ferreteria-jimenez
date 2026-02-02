// src/components/home/Map.tsx
'use client';

import { useState, useEffect, useRef } from 'react';

export default function Map() {
  const [isLoaded, setIsLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-zinc-900">
          Nuestra ubicación
        </h2>

        <div ref={mapRef} className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
          {!isLoaded ? (
            <div className="relative w-full h-96 bg-zinc-200 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-zinc-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-zinc-600 text-sm">Cargando mapa...</p>
              </div>
            </div>
          ) : (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.4163117174785!2d-86.8300947889893!3d21.17561478042941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2c1b86d4a617%3A0x2192d2501e2545e6!2sJIMENEZ!5e0!3m2!1ses-419!2smx!4v1752168372461!5m2!1ses-419!2smx"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Ferretería Jiménez"
              className="w-full"
            />
          )}
        </div>
      </div>
    </section>
  );
}