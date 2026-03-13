import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PainPointsSection from '@/components/PainPointsSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import SecuritySection from '@/components/SecuritySection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <SecuritySection />
      <FinalCTASection />
      <Footer />
    </>
  );
}
