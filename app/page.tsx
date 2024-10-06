import DeliverySection from "@/components/DeliverySection/DeliverySection";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProductSection from "@/components/ProductSection/ProductSection";

export default function Home() {
  return (
    <main>
      <HeroSection></HeroSection>
      <ProductSection></ProductSection>
      <DeliverySection></DeliverySection>
    </main>
  );
}
