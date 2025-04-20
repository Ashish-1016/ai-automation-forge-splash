
import { useState, useEffect } from "react";

// Default company name
export const DEFAULT_COMPANY_NAME = "My AI Labs";

export function useCompanyName() {
  const [companyName, setCompanyName] = useState(DEFAULT_COMPANY_NAME);

  // Load company name from localStorage on initial render
  useEffect(() => {
    const storedName = localStorage.getItem("companyName");
    if (storedName) {
      setCompanyName(storedName);
    } else {
      // Set default if not found
      localStorage.setItem("companyName", DEFAULT_COMPANY_NAME);
    }
  }, []);

  // Update company name in localStorage
  const updateCompanyName = (newName: string) => {
    localStorage.setItem("companyName", newName);
    setCompanyName(newName);
  };

  return { companyName, updateCompanyName };
}
