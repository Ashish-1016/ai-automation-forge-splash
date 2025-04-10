
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
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

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

  // Animate the counting effect
  useEffect(() => {
    const targetValues = [93, 50, 24, 100];
    const duration = 2000; // 2 seconds
    const intervals = 50; // Update every 50ms
    const steps = duration / intervals;
    
    const timer1 = setInterval(() => {
      setCount1(prev => {
        const next = prev + Math.ceil(targetValues[0] / steps);
        return next >= targetValues[0] ? targetValues[0] : next;
      });
    }, intervals);
    
    const timer2 = setInterval(() => {
      setCount2(prev => {
        const next = prev + Math.ceil(targetValues[1] / steps);
        return next >= targetValues[1] ? targetValues[1] : next;
      });
    }, intervals);
    
    const timer3 = setInterval(() => {
      setCount3(prev => {
        const next = prev + Math.ceil(targetValues[2] / steps);
        return next >= targetValues[2] ? targetValues[2] : next;
      });
    }, intervals);
    
    const timer4 = setInterval(() => {
      setCount4(prev => {
        const next = prev + Math.ceil(targetValues[3] / steps);
        return next >= targetValues[3] ? targetValues[3] : next;
      });
    }, intervals);
    
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="container max-w-5xl mx-auto text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Transform Your Business with{" "}
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-primary"
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
            <div className="text-3xl font-bold text-primary mb-2">{count1}%</div>
            <p className="text-sm text-muted-foreground">Task Automation</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-primary mb-2">{count2}%+</div>
            <p className="text-sm text-muted-foreground">Cost Reduction</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-primary mb-2">{count3}/7</div>
            <p className="text-sm text-muted-foreground">Service Operation</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-primary mb-2">{count4}+</div>
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
