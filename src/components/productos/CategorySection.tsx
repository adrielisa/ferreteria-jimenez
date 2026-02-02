'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            {/* Icon & Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7 text-orange-600" strokeWidth={2} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
                {category}
              </h2>
            </div>

            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              {description}
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              <h3 className="font-semibold text-zinc-900 text-lg mb-4">
                Características destacadas:
              </h3>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <svg className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-600">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <WhatsAppButton 
              message={`Hola, me interesa cotizar productos de ${category}`}
            />
          </motion.div>

          {/* Right: Products Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex-1 w-full"
          >
            <div className="grid grid-cols-2 gap-4">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-md transition-all"
                >
                  <h4 className="font-semibold text-zinc-900 mb-2">
                    {product.name}
                  </h4>
                  <p className="text-sm text-zinc-600">
                    {product.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}