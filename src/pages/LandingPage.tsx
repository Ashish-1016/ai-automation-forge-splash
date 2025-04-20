import { useEffect, useState } from "react";
import { ThemeProvider } from "@/hooks/useTheme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCompanyName } from "@/hooks/useCompanyName";

// Sections
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ContactSection from "@/components/sections/ContactSection";
import BookingModal from "@/components/BookingModal";
import { Toaster } from 'react-hot-toast';
import { AnimatedTestimonialsSection } from "@/components/sections/AnimatedTestimonials.tsx";
import { GetStartedTodaySection } from "@/components/sections/GetStartedTodaySection.tsx";
import { MobileFloatingNavbar } from "@/components/MobileFloatingNavbar.tsx";
import { ThemeToggle } from "@/components/ThemeToggle.tsx";

const LandingPage = () => {
  const [mounted, setMounted] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { companyName } = useCompanyName();

  // Update document title with company name
  useEffect(() => {
    if (companyName) {
      document.title = `${companyName}`;
    }
  }, [companyName]);

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

        {/*<FollowerPointerCard>*/}


          <Navbar />
          <div className='fixed md:hidden top-6 left-[85%] w-full z-50 transition-all duration-300'>
            <ThemeToggle className='border border-foreground/30 shadow-md shadow-foreground/10' />
          </div>

          <main>
            <HeroSection onBookCall={() => setIsBookingOpen(true)} />
            <ServicesSection />
            <BenefitsSection />
            <GetStartedTodaySection />
            <AnimatedTestimonialsSection />
            <ContactSection />
          </main>

          <Footer />

        <div className='fixed bottom-6 left-[45%] right-[45%] w-full z-50 transition-all duration-300'>
          <MobileFloatingNavbar />
        </div>

          {/*<MobileFloatingNavbar/>*/}
          <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
        </div>

        {/*</FollowerPointerCard>*/}
      <Toaster
        position='bottom-right'
        reverseOrder={true}
        toastOptions={{
          duration: 5000,
          className: 'bg-background text-foreground shadow-sm shadow-primary',
        }}
      />
    </ThemeProvider>
  );
};

export default LandingPage;
