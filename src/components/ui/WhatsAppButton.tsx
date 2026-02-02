// src/components/ui/WhatsAppButton.tsx
'use client';

interface WhatsAppButtonProps {
  message?: string;
  phoneNumber?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function WhatsAppButton({
  message = 'Hola, me interesa cotizar productos de Ferreterías Jiménez',
  phoneNumber = '529981234567', // Reemplazar con el número real
  className = '',
  children = 'Cotiza ahora',
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
}