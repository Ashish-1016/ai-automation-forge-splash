import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  transitionDuration?: number;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isTransitioning: boolean;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  isTransitioning: false,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  transitionDuration = 500,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Add transition styles when the component mounts
  useEffect(() => {
    // Add transition styles to the document root
    const style = document.createElement('style');
    style.innerHTML = `
      :root {
        transition: background-color ${transitionDuration}ms ease, 
                    color ${transitionDuration}ms ease,
                    border-color ${transitionDuration}ms ease,
                    fill ${transitionDuration}ms ease,
                    stroke ${transitionDuration}ms ease !important;
      }
      
      * {
        transition: background-color ${transitionDuration}ms ease, 
                    color ${transitionDuration}ms ease,
                    border-color ${transitionDuration}ms ease,
                    box-shadow ${transitionDuration}ms ease !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [transitionDuration]);

  useEffect(() => {
    const root = window.document.documentElement;

    // Set transitioning state
    setIsTransitioning(true);

    // Remove existing theme classes
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }

    // Clear the transitioning state after the transition completes
    const transitionTimeout = setTimeout(() => {
      setIsTransitioning(false);
    }, transitionDuration);

    return () => clearTimeout(transitionTimeout);
  }, [theme, transitionDuration]);

  const value = {
    theme,
    isTransitioning,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};