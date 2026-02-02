'use client';

import ProductsHero from '@/components/productos/ProductsHero';
import CategorySection from '@/components/productos/CategorySection';
import FinalCTA from '@/components/productos/FinalCTA';
import { Hammer, Drill, Paintbrush, Droplet, Zap, Wrench } from 'lucide-react';

const categories = [
  {
    category: 'Herramientas Manuales',
    description: 'Herramientas de alta calidad para trabajos de precisión y fuerza. Ideales para profesionales y entusiastas del bricolaje.',
    icon: Hammer,
    features: [
      'Mangos ergonómicos para mayor comodidad',
      'Materiales resistentes y duraderos',
      'Amplia variedad de tamaños y especificaciones',
      'Garantía de fábrica en todas las herramientas',
    ],
    products: [
      { name: 'Martillos', description: 'Diversos tipos y pesos disponibles' },
      { name: 'Desarmadores', description: 'Planos y de cruz, profesionales' },
      { name: 'Llaves', description: 'Inglesas, españolas y allen' },
      { name: 'Pinzas', description: 'De corte, presión y electricista' },
    ],
  },
  {
    category: 'Herramientas Eléctricas',
    description: 'Potencia y precisión en cada proyecto. Herramientas profesionales para trabajos exigentes con tecnología de punta.',
    icon: Drill,
    features: [
      'Motores de alta potencia y eficiencia',
      'Sistemas de seguridad integrados',
      'Accesorios y refacciones disponibles',
      'Servicio técnico especializado',
    ],
    products: [
      { name: 'Taladros', description: 'Con y sin percusión' },
      { name: 'Sierras', description: 'Circulares, caladoras y de mano' },
      { name: 'Pulidoras', description: 'Angular y orbital' },
      { name: 'Rotomartillos', description: 'Para trabajos pesados' },
    ],
  },
  {
    category: 'Pintura y Accesorios',
    description: 'Todo lo necesario para darle color y protección a tus espacios. Pinturas de alta calidad y herramientas profesionales.',
    icon: Paintbrush,
    features: [
      'Pinturas lavables y de alto rendimiento',
      'Acabados mate, satinado y brillante',
      'Brochas y rodillos de calidad profesional',
      'Asesoría en combinación de colores',
    ],
    products: [
      { name: 'Pinturas', description: 'Vinílicas, esmaltes y más' },
      { name: 'Brochas', description: 'Varios tamaños y materiales' },
      { name: 'Rodillos', description: 'Para diferentes texturas' },
      { name: 'Selladores', description: 'Para interiores y exteriores' },
    ],
  },
  {
    category: 'Plomería',
    description: 'Soluciones completas para instalaciones hidráulicas residenciales y comerciales con materiales certificados.',
    icon: Droplet,
    features: [
      'Tubería PVC y cobre de calidad',
      'Conexiones certificadas para agua potable',
      'Llaves y accesorios ahorradores',
      'Asesoría técnica en instalación',
    ],
    products: [
      { name: 'Tubería', description: 'PVC, cobre y flexible' },
      { name: 'Conexiones', description: 'Codos, tees y reducciones' },
      { name: 'Llaves', description: 'Para lavabo, regadera y más' },
      { name: 'Accesorios', description: 'Válvulas, empaques y cintas' },
    ],
  },
  {
    category: 'Material Eléctrico',
    description: 'Componentes eléctricos seguros y certificados para instalaciones residenciales, comerciales e industriales.',
    icon: Zap,
    features: [
      'Productos certificados por normas mexicanas',
      'Cable calibrado y certificado',
      'Sistemas de protección contra sobrecarga',
      'Asesoría en cargas eléctricas',
    ],
    products: [
      { name: 'Cables', description: 'Varios calibres y colores' },
      { name: 'Contactos', description: 'Polarizados y con tierra' },
      { name: 'Interruptores', description: 'Sencillos y de 3 vías' },
      { name: 'Pastillas', description: 'Térmicas y diferenciales' },
    ],
  },
  {
    category: 'Construcción y Ferretería',
    description: 'Materiales y sujetadores esenciales para todo tipo de proyectos de construcción y reparación.',
    icon: Wrench,
    features: [
      'Tornillería métrica e inglesa',
      'Adhesivos de alta resistencia',
      'Materiales para acabados',
      'Asesoría en selección de materiales',
    ],
    products: [
      { name: 'Tornillos', description: 'Para madera, metal y concreto' },
      { name: 'Clavos', description: 'Diversos tipos y calibres' },
      { name: 'Pegamentos', description: 'Para diferentes materiales' },
      { name: 'Cintas', description: 'Adhesivas, de aislar y teflón' },
    ],
  },
];

export default function ProductosPage() {
  return (
    <>
      <ProductsHero />
      {categories.map((category, index) => (
        <CategorySection
          key={index}
          {...category}
          reverse={index % 2 !== 0}
        />
      ))}
      <FinalCTA />
    </>
  );
}