import ContactHero from '@/components/contacto/ContactHero';
import ContactInfo from '@/components/contacto/ContactInfo';
import FAQ from '@/components/contacto/FAQ';
import Map from '@/components/home/Map';

export default function ContactoPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <FAQ />
      <Map />
    </>
  );
}