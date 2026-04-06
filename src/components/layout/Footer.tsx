// src/components/layout/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Acerca de', href: '/nosotros' },
    { name: 'Productos', href: '/productos' },
  ];

  return (
    <footer className="border-t border-white/5 py-8" style={{ backgroundColor: '#0E0E11' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold text-orange-500 uppercase tracking-wide hover:text-orange-400 transition-colors shrink-0"
          >
            Ferreterías Jiménez
          </Link>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-zinc-500 text-center sm:text-right shrink-0">
            © {new Date().getFullYear()} Ferreterías Jiménez.
            <br className="sm:hidden" />
            {' '}Todos los derechos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
}