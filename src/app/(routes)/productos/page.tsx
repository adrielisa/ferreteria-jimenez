import Link from 'next/link';

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 px-4">
      <div className="max-w-2xl w-full text-center">

        
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
          Página en construcción
        </h1>
        
        <p className="text-lg text-zinc-600 mb-8">
          Estamos trabajando para traerte esta sección muy pronto.
        </p>
        
        <Link
          href="/"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}