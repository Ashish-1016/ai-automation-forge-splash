
import { ArrowUp } from "lucide-react";
import { useCompanyName } from "@/hooks/useCompanyName.tsx";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { companyName } = useCompanyName();


  return (
    <footer className="bg-card py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">{companyName}</h2>
            <p className="text-muted-foreground mt-2 max-w-md">
              Custom AI automation solutions for businesses of all sizes.
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="rounded-full p-3 border border-primary/30 hover:bg-primary/10 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6 text-primary" />
          </button>
        </div>

        <div className="flex flex-wrap justify-between items-center pt-8 border-t border-border">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </div>
          {/*<div className="flex space-x-6 mt-4 md:mt-0">*/}
          {/*  <a href="#" className="text-muted-foreground hover:text-primary">*/}
          {/*    Privacy*/}
          {/*  </a>*/}
          {/*  <a href="#" className="text-muted-foreground hover:text-primary">*/}
          {/*    Terms*/}
          {/*  </a>*/}
          {/*  <a href="#" className="text-muted-foreground hover:text-primary">*/}
          {/*    Cookies*/}
          {/*  </a>*/}
          {/*</div>*/}
        </div>
      </div>
    </footer>
  );
}
