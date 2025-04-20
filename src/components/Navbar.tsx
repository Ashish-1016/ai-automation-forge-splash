import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCompanyName } from "@/hooks/useCompanyName";
import { Award, Briefcase, Contact, Home, MessageSquareQuote, Users } from "lucide-react";

// Navigation items as a reusable array of objects
export const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "benefits", label: "Benefits", icon: Award },
  { id: "testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { id: "contact", label: "Contact", icon: Contact }
];

// Reusable scroll function
export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Reusable NavItem component
export const NavItem = ({
  item,
  className = "text-foreground hover:text-primary transition-colors"
}: {
  item: { id: string; label: string };
  className?: string;
}) => (
  <button
    onClick={() => scrollToSection(item.id)}
    className={className}
  >
    {item.label}
  </button>
);

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

  // Mobile navbar is now in a separate component
  if (isMobile) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 dark:shadow-white/[0.1] backdrop-blur-md py-2 shadow-md" : "py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">{companyName}</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <NavItem key={item.id} item={item} />
          ))}
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