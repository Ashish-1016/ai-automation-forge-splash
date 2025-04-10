
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="absolute top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.15),transparent_50%)]" />
      </div>

      <div className="container max-w-5xl mx-auto text-center">
        <h1 className="opacity-0 animate-fade-in text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Transform Your Business with{" "}
          <span className="text-primary">AI Automation</span>
        </h1>
        
        <p className="opacity-0 animate-fade-in-delay-200 text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          We help businesses streamline operations by automating repetitive tasks
          to reduce labor costs and boost efficiency.
        </p>
        
        <div className="opacity-0 animate-fade-in-delay-400 flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
            onClick={scrollToServices}
          >
            Learn More
          </Button>
        </div>

        <div className="opacity-0 animate-fade-in-delay-600 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
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
        </div>
      </div>

      <div className="absolute bottom-8 w-full flex justify-center opacity-0 animate-fade-in-delay-800">
        <button
          onClick={scrollToServices}
          className="rounded-full p-2 border border-primary/30 animate-float"
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </button>
      </div>
    </section>
  );
}
