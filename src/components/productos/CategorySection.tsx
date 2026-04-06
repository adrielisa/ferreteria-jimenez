'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Product {
  name: string;
  description: string;
}

interface CategorySectionProps {
  category: string;
  description: string;
  icon: LucideIcon;
  products: Product[];
  features: string[];
  reverse?: boolean;
}

export default function CategorySection({
  category,
  description,
  icon: Icon,
  products,
  features,
  reverse = false,
}: CategorySectionProps) {
  const sectionBg = reverse ? '#131316' : '#0E0E11';
  const cardBg = reverse ? '#0E0E11' : '#131316';

  return (
    <section className="py-24 sm:py-32" style={{ backgroundColor: sectionBg }}>
      <div className="container mx-auto px-8 sm:px-16 lg:px-24">
        <div
          className={`flex flex-col gap-16 items-center ${
            reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
          }`}
        >
          {/* Info column */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Icon + Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-orange-500">
                Categoría
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              {category}
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              {description}
            </p>

            {/* Features */}
            <ul className="space-y-3">
              {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300">
                  <span className="mt-1.5 w-4 h-4 rounded-full bg-orange-500 shrink-0 flex items-center justify-center">
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="none"
                      viewBox="0 0 10 8"
                    >
                      <path
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M1 4l2.5 2.5L9 1"
                      />
                    </svg>
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products grid */}
          <motion.div
            className="flex-1 w-full grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: reverse ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className="rounded-2xl p-6 border border-white/5 hover:border-orange-500/30 transition-colors group"
                style={{ backgroundColor: cardBg }}
              >
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center mb-3 group-hover:bg-orange-500/20 transition-colors">
                  <Icon className="w-4 h-4 text-orange-500" strokeWidth={2} />
                </div>
                <h4 className="text-white font-semibold mb-1">{product.name}</h4>
                <p className="text-zinc-500 text-sm">{product.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
