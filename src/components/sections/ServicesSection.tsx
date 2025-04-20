import {
  BarChart,
  Briefcase,
  FileSearch,
  FileText,
  HeartHandshake,
  PhoneIncoming,
  PhoneOutgoing,
  Users
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSectionEntrance from "@/components/AnimatedSectionEntrance";
import { Timeline } from "@/components/ui/timeline.tsx";
import { useIsMobile } from "@/hooks/use-mobile";

const servicesTimelineEntries = [
  {
    title: "AI-Powered Lead Generation Pipeline",
    content: "Transform your sales funnel with our end-to-end lead generation system. We automate the entire process from lead discovery and qualification to booking appointments and nurturing relationships. Our AI tools continuously refine your lead pool, ensuring your team focuses only on the most promising prospects while our automated follow-up sequences maintain engagement with every potential customer.",
    icon: Users,
    description: "Complete lead generation automation"
  },
  {
    title: "Intelligent Inbound Call Management",
    content: "Never miss an opportunity with our AI-powered inbound call system. Our solution answers every call promptly, understands customer needs, routes inquiries intelligently, and seamlessly transfers to human representatives when needed. The system records conversations, analyzes patterns, extracts valuable insights, and syncs all information with your CRM—creating a comprehensive customer interaction database that improves with every call.",
    icon: PhoneIncoming,
    description: "Smart inbound call handling and analysis"
  },
  {
    title: "High-Volume Outbound Calling Automation",
    content: "Scale your outreach efforts exponentially with our outbound AI voice system. Engage hundreds or thousands of leads simultaneously, navigate IVRs effortlessly, pre-qualify prospects, and connect hot leads directly to your sales team. Our system handles everything from initial contact to detailed reporting, giving you unprecedented reach without expanding your staff.",
    icon: PhoneOutgoing,
    description: "Massive outbound call scaling"
  },
  {
    title: "Omnichannel Content Creation Engine",
    content: "Fuel your content marketing with AI-powered creation and distribution. Our system generates high-quality blogs, articles, social posts, tweets, images, and videos tailored to your brand voice and aligned with your knowledge base. We handle everything from scripting and validation to distribution across all relevant channels, maintaining consistent engagement with your audience at scale.",
    icon: FileText,
    description: "Automated content creation and distribution"
  },
  {
    title: "24/7 Customer Support Intelligence",
    content: "Deliver exceptional customer experiences around the clock with our AI support system. Deploy intelligent chatbots across your website and social media platforms that understand context, resolve common issues instantly, and seamlessly escalate complex matters to your team. Reduce response times while capturing valuable customer feedback that helps improve your products and services.",
    icon: HeartHandshake,
    description: "Round-the-clock automated customer service"
  },
  {
    title: "Intelligent Document Management",
    content: "Eliminate manual data entry and document handling with our AI document processing system. Our solution automatically extracts, validates, and organizes information from invoices, contracts, forms, and other business documents. Reduce errors, save countless hours, and gain instant access to critical business information stored in your unstructured documents.",
    icon: FileSearch,
    description: "Automated document processing and extraction"
  },
  {
    title: "Actionable Analytics Automation",
    content: "Transform raw data into strategic decisions with our automated business intelligence platform. Our system continuously collects, analyzes, and visualizes your most important metrics, delivering predictive insights about sales trends, inventory needs, and market shifts. Replace gut feelings with data-driven decisions through customized dashboards that highlight exactly what your team needs to know.",
    icon: BarChart,
    description: "Data-driven business intelligence automation"
  },
  {
    title: "AI Talent Acquisition System",
    content: "Streamline your hiring process and identify top talent faster with our recruitment automation platform. Our AI tools screen resumes at scale, rank candidates based on customizable criteria, conduct initial outreach, and coordinate interview scheduling. Focus your human touch where it matters most while our system handles the repetitive aspects of building your team.",
    icon: Briefcase,
    description: "Automated recruitment and candidate processing"
  }
];

export default function ServicesSection() {

  const isMobile = useIsMobile();

  return (
    <AnimatedSectionEntrance id="services" className="py-20">

      <div className="container mx-auto max-w-6xl">

        <div className="relative w-full overflow-clip">
          <Timeline
            sectionTitle={
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive AI automation solutions designed to streamline your business operations and reduce costs.
                </p>
              </div>
            }
            data={servicesTimelineEntries.map((service, index) => ({
              ...service,
              content: <AnimatedSectionEntrance key={service.title} delay={index * 0.1} animation="fade">
                <Card className="bg-card shadow-primary hover:shadow-primary shadow-sm max-md:shadow-lg hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="h-12 w-12  cursor-pointer rounded-lg hover:bg-primary hover:text-white bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 max-md:text-primary" />
                    </div>
                    <CardTitle>{service.description}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground">
                      <ul className="list-disc pl-5 space-y-1">
                        {service.content.split(".").slice(isMobile ? 2 : undefined).filter(item => item.trim() !== "").map((item, index) => (
                          <li key={index}>{item.trim()}</li>
                        ))}
                      </ul>
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSectionEntrance>
            }))}
          />
        </div>

      </div>
    </AnimatedSectionEntrance>
  );
}
