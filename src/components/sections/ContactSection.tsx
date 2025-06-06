
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { useCompanyName } from "@/hooks/useCompanyName";
import AnimatedSectionEntrance from "@/components/AnimatedSectionEntrance";
import toast from "react-hot-toast";
import emailjs from '@emailjs/browser';
import { BackgroundGradient } from "@/components/ui/background-gradient.tsx";

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    details: "hello@myailabs.in",
    action: "mailto:hello@myailabs.in",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "Pune, India",
    action: "https://maps.google.com",
  },
];

export default function ContactSection() {
  const { companyName } = useCompanyName();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast.success("Message Sent!. We'll get back to you as soon as possible.");
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    }, 1500);


  };

  return (
    <section id="contact" className="py-20 px-4">

      <AnimatedSectionEntrance>

        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business with AI automation? Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <AnimatedSectionEntrance animation="sequence" className="lg:col-span-2 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactDetails.map((item) => (
                    <a
                      key={item.title}
                      href={item.action}
                      className="flex items-start gap-4 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">
                          {item.details}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Our Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Availability:</span>
                    <span>24x7</span>
                  </div>
                </div>
              </div>
            </AnimatedSectionEntrance>

              <AnimatedSectionEntrance animation="fade" delay={0.3} className="lg:col-span-3 rounded-2xl">
                <BackgroundGradient className='p-1'>
                  <Card className="overflow-hidden w-full rounded-lg">
                    <CardContent className="p-6 rounded-3xl">
                      <h3 className="text-2xl font-bold mb-6">Send your Query</h3>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="name" className="block font-medium">
                              Name
                            </label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="Your name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="block font-medium">
                              Email
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="your@email.com"
                              required
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="company" className="block font-medium">
                            Company
                          </label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Your company name"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="block font-medium">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="How can we help you?"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full py-6 bg-primary hover:bg-primary/90 text-white"
                          disabled={loading}
                        >
                          {loading ? (
                            "Sending..."
                          ) : (
                            <>
                              Send Message <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </BackgroundGradient>
              </AnimatedSectionEntrance>
          </div>
        </div>
      </AnimatedSectionEntrance>
    </section>
  );
}
