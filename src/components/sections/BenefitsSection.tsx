
import { BarChart3, Clock, DollarSign, Zap } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Reduce Operational Costs",
    description:
      "Save up to 50% on operational costs by automating repetitive tasks that would normally require human labor.",
  },
  {
    icon: Clock,
    title: "Save Valuable Time",
    description:
      "Automation works 24/7, completing tasks faster and more efficiently than manual processes.",
  },
  {
    icon: BarChart3,
    title: "Scale With Demand",
    description:
      "AI systems can easily scale to handle increasing workloads without additional headcount.",
  },
  {
    icon: Zap,
    title: "Improve Accuracy",
    description:
      "Eliminate human error in repetitive tasks, ensuring consistent, high-quality results.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose AI Automation?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI solutions deliver concrete business benefits that directly impact your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-start gap-4 group"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                <benefit.icon className="h-6 w-6 text-primary group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

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
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-primary/10 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-1">93%</div>
              <p className="text-sm text-muted-foreground">Task Automation</p>
            </div>
            <div className="bg-primary/10 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-1">50%+</div>
              <p className="text-sm text-muted-foreground">Cost Reduction</p>
            </div>
            <div className="bg-primary/10 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <p className="text-sm text-muted-foreground">Operation</p>
            </div>
            <div className="bg-primary/10 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-1">14d</div>
              <p className="text-sm text-muted-foreground">Implementation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
