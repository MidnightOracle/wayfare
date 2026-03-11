import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeTicker from "@/components/sections/MarqueeTicker";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import CategoryShowcase from "@/components/sections/CategoryShowcase";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import EditorialSection from "@/components/sections/EditorialSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <div className="grain">
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeTicker />
        <FeaturedProducts />
        <CategoryShowcase />
        <FeaturesSection />
        <EditorialSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
