
import { useState, useEffect } from "react";
import { ThemeProvider } from "@/hooks/useTheme";
import CustomCursor from "@/components/CustomCursor";
import ParticleAnimation from "@/components/ParticleAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sections
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  // Ensure hydration completes to avoid mismatches between SSR and client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="relative overflow-x-hidden">
        <CustomCursor />
        <ParticleAnimation />
        <Navbar />
        
        <main>
          <HeroSection />
          <ServicesSection />
          <BenefitsSection />
          <TestimonialsSection />
          <AboutSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
