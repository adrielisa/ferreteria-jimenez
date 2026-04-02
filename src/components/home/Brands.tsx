// src/components/home/Brands.tsx
'use client';

import Image from 'next/image';

const brands = [
  { name: 'TRUPER', src: '/TRUPER.webp', alt: 'TRUPER' },
  { name: 'PRETUL', src: '/PRETUL.webp', alt: 'PRETUL' },
  { name: 'VOLTECK', src: '/VOLTECK.webp', alt: 'VOLTECK' },
  { name: 'FOSET', src: '/FOSET.webp', alt: 'FOSET' },
  { name: 'FIERO', src: '/FIERO.webp', alt: 'FIERO' },
  { name: 'HERMEX', src: '/HERMEX.webp', alt: 'HERMEX' },
];

export default function Brands() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <style>{`
        @keyframes scroll-brands {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .brands-track {
          animation: scroll-brands 12s linear infinite;
          will-change: transform;
        }
        .brands-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Heading inside container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-zinc-900">
          Contamos con una amplia gama de marcas
        </h2>
      </div>

      {/* Carousel full-width, outside container so overflow works correctly */}
      <div className="overflow-hidden">
        <div className="brands-track flex gap-6 w-max">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={280}
                height={160}
                className="h-32 sm:h-40 w-auto object-contain"
                loading="lazy"
                quality={85}
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}