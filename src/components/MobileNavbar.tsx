
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Settings, HeartHandshake, Users, MessageSquare, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const NavItem = ({ icon, label, onClick }: NavItemProps) => {
  const [showLabel, setShowLabel] = useState(false);

  const handleClick = () => {
    setShowLabel(true);
    onClick();
    
    // Hide the label after 2 seconds
    setTimeout(() => {
      setShowLabel(false);
    }, 2000);
  };

  return (
    <div className="relative flex items-center justify-center">
      <motion.button
        onClick={handleClick}
        className="flex items-center justify-center p-3 text-white"
        whileTap={{ scale: 0.9 }}
      >
        {icon}
      </motion.button>
      <AnimatePresence>
        {showLabel && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.9 }}
            className="absolute top-[-30px] text-xs font-medium bg-black/90 text-white px-2 py-1 rounded-full whitespace-nowrap"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function MobileNavbar() {
  const { theme, setTheme } = useTheme();
  const isMobile = useIsMobile();
  
  // Don't render on larger screens
  if (!isMobile) {
    return null;
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-auto mx-auto"
    >
      <motion.div 
        className="bg-black/75 backdrop-blur-md text-white rounded-full flex items-center justify-between px-2 shadow-lg border border-white/10 max-w-fit mx-auto"
      >
        <NavItem 
          icon={<Home size={20} />}
          label="Home"
          onClick={() => scrollToSection("root")}
        />
        <NavItem 
          icon={<Settings size={20} />}
          label="Services"
          onClick={() => scrollToSection("services")}
        />
        <NavItem 
          icon={<HeartHandshake size={20} />}
          label="Benefits"
          onClick={() => scrollToSection("benefits")}
        />
        <NavItem 
          icon={<Users size={20} />}
          label="About"
          onClick={() => scrollToSection("about")}
        />
        <NavItem 
          icon={<MessageSquare size={20} />}
          label="Contact"
          onClick={() => scrollToSection("contact")}
        />
        <NavItem 
          icon={theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          label={theme === "dark" ? "Light Mode" : "Dark Mode"}
          onClick={toggleTheme}
        />
      </motion.div>
    </motion.div>
  );
}
