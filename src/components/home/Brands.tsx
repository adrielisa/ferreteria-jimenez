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
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-zinc-900">
          Contamos con una amplia gama de marcas
        </h2>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set */}
            {brands.map((brand, index) => (
              <div key={`first-${index}`} className="shrink-0 mx-3">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={200}
                  height={130}
                  className="object-contain rounded-xl"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div key={`second-${index}`} className="shrink-0 mx-3">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={200}
                  height={130}
                  className="object-contain rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}