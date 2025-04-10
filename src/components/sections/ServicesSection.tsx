
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Zap, BarChart3, PenTool } from "lucide-react";
import AnimatedSectionEntrance from "@/components/AnimatedSectionEntrance";

const services = [
  {
    title: "Conversational AI",
    description: "Custom chatbots and virtual assistants that handle repetitive customer inquiries.",
    icon: Bot,
  },
  {
    title: "Process Automation",
    description: "End-to-end automation of business processes to reduce manual tasks.",
    icon: Zap,
  },
  {
    title: "Data Analysis",
    description: "AI-powered data analysis to extract insights and make better decisions.",
    icon: BarChart3,
  },
  {
    title: "Custom AI Solutions",
    description: "Tailor-made AI solutions designed specifically for your business needs.",
    icon: PenTool,
  },
];

export default function ServicesSection() {
  return (
    <AnimatedSectionEntrance id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI automation solutions designed to streamline your business operations and reduce costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedSectionEntrance key={service.title} delay={index * 0.1} animation="fade">
              <Card className="bg-card hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedSectionEntrance>
          ))}
        </div>
      </div>
    </AnimatedSectionEntrance>
  );
}
