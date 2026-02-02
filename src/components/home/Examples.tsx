// src/components/home/Examples.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import WhatsAppButton from '../ui/WhatsAppButton';

const examples = [
  {
    id: 1,
    title: 'Construcción Residencial',
    image: '/examples/example1.jpg',
  },
  {
    id: 2,
    title: 'Proyectos Comerciales',
    image: '/examples/example2.jpg',
  },
  {
    id: 3,
    title: 'Remodelaciones',
    image: '/examples/example3.jpg',
  },
];

export default function Examples() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % examples.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + examples.length) % examples.length);
  };

  return (
    <section className="py-16 sm:py-24 bg-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-4 text-zinc-900"
        >
          Los grandes trabajos, comienzan con grandes herramientas
        </motion.h2>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto mt-12">
          <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden bg-zinc-300">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                backgroundImage: `url(${examples[currentIndex].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/30" />
              <h3 className="relative z-10 text-2xl sm:text-3xl font-bold text-white">
                {examples[currentIndex].title}
              </h3>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
              aria-label="Previous"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
              aria-label="Next"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {examples.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-orange-600 w-8' : 'bg-zinc-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <WhatsAppButton />
        </motion.div>
      </div>
    </section>
  );
}