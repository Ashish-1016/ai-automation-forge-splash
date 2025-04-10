
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cpu, Code, BarChart3 } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Lisa Murray",
    role: "Chief AI Scientist",
    description: "Ph.D. in Machine Learning with 10+ years experience developing enterprise AI solutions.",
    icon: Brain,
  },
  {
    name: "James Wilson",
    role: "Automation Engineer",
    description: "Specialized in developing and implementing end-to-end process automation systems.",
    icon: Cpu,
  },
  {
    name: "Ana Martinez",
    role: "Solution Architect",
    description: "Expert at translating business requirements into efficient, scalable AI systems.",
    icon: Code,
  },
  {
    name: "David Chen",
    role: "Data Scientist",
    description: "Specializes in turning raw business data into actionable intelligence through AI.",
    icon: BarChart3,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're a team of AI specialists dedicated to helping businesses achieve operational excellence through automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              To empower businesses of all sizes with custom AI automation solutions that eliminate repetitive tasks, reduce operational costs, and allow teams to focus on high-value activities.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
            <p className="text-muted-foreground">
              We believe in creating practical, effective solutions that deliver immediate ROI. Every automation solution we design is tailored to your specific business processes, ensuring maximum impact with minimal disruption.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="aspect-square bg-primary/10 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.2),transparent_70%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary opacity-20">AutomateAI</div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.name} className="bg-card hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <member.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
