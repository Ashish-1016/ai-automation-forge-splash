
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCompanyName } from "@/hooks/useCompanyName";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const { companyName } = useCompanyName();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Mobile navbar is now in a separate component
  if (isMobile) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md py-2 shadow-md" : "py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">{companyName}</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("benefits")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Benefits
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
