import { CardStack } from "@/components/ui/card-stack.tsx";
import { cn } from "@/lib/utils.ts";


export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-primary/35 text-primary px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    content: (
      <div className="bg-primary/25 h-full w-full flex flex-col gap-4 items-center justify-center rounded-3xl p-4 text-center">
        <div className="text-6xl font-bold text-primary mb-1">93%</div>
        <p className="text-lg text-black dark:text-white">Task Automation</p>
      </div>
    ),
  },
  {
    id: 1,
    content: (
      <div className="bg-primary/25 h-full w-full flex flex-col gap-4 items-center justify-center rounded-3xl p-4 text-center">
        <div className="text-6xl font-bold text-primary mb-1">24/7</div>
        <p className="text-lg text-black dark:text-white">Working Operations</p>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="bg-primary/25 h-full w-full flex flex-col gap-4 items-center justify-center rounded-3xl p-4 text-center">
        <div className="text-6xl font-bold text-primary mb-1">Within 3 days</div>
        <p className="text-lg text-black dark:text-white">Implementation</p>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="bg-primary/25 h-full w-full flex flex-col gap-4 items-center justify-center rounded-3xl p-4 text-center">
        <div className="text-6xl font-bold text-primary mb-1">50%+</div>
        <p className="text-lg text-black dark:text-white">Cost Reduction for client</p>
      </div>
    )
  }
];


export const GetStartedTodaySection = () => {

  return (
    <div className="mt-16 bg-card rounded-lg p-6 md:p-10 flex flex-col md:flex-row gap-10 items-center">
      <div className="md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Get Started Today
        </h3>
        <p className="text-muted-foreground mb-4">
          Our automation solutions can be implemented in as little as two weeks,
          with minimal disruption to your existing operations.
        </p>
        <ul className="space-y-2">
          {["Free initial consultation", "Custom solution design", "Seamless integration", "Ongoing support"].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <CardStack duration={3000} items={CARDS} />
    </div>
  )

}