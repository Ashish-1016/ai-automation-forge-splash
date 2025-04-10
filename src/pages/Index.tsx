
import { useState, useEffect } from "react";
import { ThemeProvider } from "@/hooks/useTheme";
import CustomCursor from "@/components/CustomCursor";
import ParticleAnimation from "@/components/ParticleAnimation";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

// Sections
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import BookingModal from "@/components/BookingModal";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Ensure hydration completes to avoid mismatches between SSR and client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider defaultTheme="dark">
      <div id="root" className="relative overflow-x-hidden">
        <CustomCursor />
        <ParticleAnimation />
        <Navbar />
        
        <main>
          <HeroSection onBookCall={() => setIsBookingOpen(true)} />
          <ServicesSection />
          <BenefitsSection />
          <TestimonialsSection />
          <AboutSection />
          <ContactSection />
        </main>
        
        <Footer />
        <MobileNavbar />
        <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default Index;
