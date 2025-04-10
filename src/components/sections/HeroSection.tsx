
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Calendar } from "lucide-react";
import { useCompanyName } from "@/hooks/useCompanyName";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onBookCall: () => void;
}

export default function HeroSection({ onBookCall }: HeroSectionProps) {
  const { companyName } = useCompanyName();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.15),transparent_50%)] animated-gradient"></div>
      </div>

      <div className="container max-w-5xl mx-auto text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Transform Your Business with{" "}
          <motion.span 
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
          >
            AI Automation
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
        >
          We help businesses streamline operations by automating repetitive tasks
          to reduce labor costs and boost efficiency.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
            onClick={scrollToContact}
          >
            Contact Us
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg rounded-full"
            onClick={onBookCall}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Free Audit Call
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-primary mb-2">93%</div>
            <p className="text-sm text-muted-foreground">Task Automation</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-primary mb-2">50%+</div>
            <p className="text-sm text-muted-foreground">Cost Reduction</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Service Operation</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <p className="text-sm text-muted-foreground">Happy Clients</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
        className="absolute bottom-8 w-full flex justify-center"
      >
        <button
          onClick={scrollToServices}
          className="rounded-full p-2 border border-primary/30 animate-float"
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </button>
      </motion.div>
    </section>
  );
}
