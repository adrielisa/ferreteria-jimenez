// src/app/page.tsx
import Hero from "@/components/home/Hero";
import Examples from "@/components/home/Examples";
import Brands from "@/components/home/Brands";
import Products from "@/components/home/Products";
import Map from "@/components/home/Map";

export default function Home() {
  return (
    <>
      <Hero />
      <Examples />
      <Brands />
      <Products />
      <Map />
    </>
  );
}