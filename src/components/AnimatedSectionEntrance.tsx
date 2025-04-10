
import { useRef, useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedSectionEntranceProps {
  children: ReactNode;
  id?: string;
  className?: string;
  animation?: "fade" | "scale" | "sequence" | "stagger";
  delay?: number;
}

export default function AnimatedSectionEntrance({
  children,
  id,
  className,
  animation = "fade",
  delay = 0
}: AnimatedSectionEntranceProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px" 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Define different animation variants
  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        delay: delay 
      } 
    }
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.5, 
        delay: delay 
      } 
    }
  };

  const sequenceVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay
      }
    }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: delay
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  // Select the appropriate variant based on animation type
  const getVariants = () => {
    switch (animation) {
      case "scale":
        return scaleVariants;
      case "sequence":
        return sequenceVariants;
      case "stagger":
        return staggerVariants;
      case "fade":
      default:
        return fadeVariants;
    }
  };

  // For sequence and stagger animations, we need to wrap each child
  if (animation === "sequence" || animation === "stagger") {
    return (
      <motion.div
        ref={sectionRef}
        id={id}
        className={className}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={getVariants()}
      >
        {Array.isArray(children) 
          ? children.map((child, index) => (
              <motion.div key={index} variants={childVariants}>
                {child}
              </motion.div>
            ))
          : <motion.div variants={childVariants}>{children}</motion.div>
        }
      </motion.div>
    );
  }

  // For fade and scale animations
  return (
    <motion.div
      ref={sectionRef}
      id={id}
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
}
