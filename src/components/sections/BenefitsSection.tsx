import { ArrowUpRight, Banknote, CheckCircle, Clock, Heart, Trophy } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation.tsx";

const whyChooseAIAutomationEntries = [
  {
    title: "Reduce Operational Costs",
    content: "Transform your financial outlook by cutting operational expenses by up to 70%. Our AI automation solutions replace costly manual processes with efficient systems that work around the clock at a fraction of the cost. Most clients see complete ROI within the first 6 months and continue to benefit from reduced overhead year after year.",
    icon: Banknote,
    description: "Cut expenses by up to 70%"
  },
  {
    title: "Save Valuable Time",
    content: "Reclaim thousands of work hours with 24/7 automation that never sleeps, never takes breaks, and processes tasks at machine speed. Tasks that once took days now complete in minutes, freeing your team to focus on creative and strategic work that drives innovation and customer satisfaction.",
    icon: Clock,
    description: "24/7 operation with machine-speed execution"
  },
  {
    title: "Scale With Demand",
    content: "Eliminate growth constraints with infinitely scalable systems that expand instantly with your business needs. Whether it's handling seasonal spikes, market opportunities, or sustained growth, our AI solutions adjust processing capacity automatically without the delays of recruiting, hiring, and training new staff.",
    icon: ArrowUpRight,
    description: "Infinitely scalable without hiring constraints"
  },
  {
    title: "Improve Accuracy",
    content: "Achieve near-perfect precision in your operations by eliminating human error from repetitive processes. Our AI systems deliver consistent, high-quality results with 99.9% accuracy, reducing costly mistakes, rework, and customer service issues while building trust in your brand through reliable performance.",
    icon: CheckCircle,
    description: "99.9% accuracy in all operations"
  },
  {
    title: "Gain Competitive Edge",
    content: "Lead your industry with capabilities that outpace competitors still relying on traditional methods. Our AI systems process information, respond to customers, and execute tasks at speeds impossible for manual teams, allowing you to be more responsive, innovative, and agile in meeting market demands.",
    icon: Trophy,
    description: "Outperform competitors with superior capabilities"
  },
  {
    title: "Enhance Customer Experience",
    content: "Delight your customers with instant responses, personalized interactions, and frictionless service at every touchpoint. Our AI solutions reduce wait times to zero, customize experiences based on customer history, and ensure consistent quality across all interactions, driving loyalty and positive word-of-mouth.",
    icon: Heart,
    description: "Instant, personalized customer interactions"
  }
];


export default function BenefitsSection() {
  return (
    <section id="benefits" className="bg-secondary/50">

      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl top-0 sticky font-semibold text-black dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                AI Automations
              </span>
              </h1>
            </>
          }
        >

          <div className="grid h-full w-full grid-cols-1 md:grid-cols-2 p-4 gap-10">
            {whyChooseAIAutomationEntries.map((benefit) => (
              <div
                key={benefit.title}
                className="flex cursor-pointer items-start gap-4 group"
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


        </ContainerScroll>

      </div>
    </section>
  );
}
