
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "The AI automation solution reduced our customer response time by 80% while handling 3x more inquiries. Our team now focuses on complex cases, improving overall satisfaction.",
    author: "Sarah Johnson",
    role: "Customer Service Manager",
    company: "TechCorp Inc.",
    initials: "SJ",
  },
  {
    id: 2,
    content:
      "We've cut operational costs by 45% since implementing the AI workflow automation. What used to take our team days now happens automatically in minutes.",
    author: "Michael Chen",
    role: "Operations Director",
    company: "Logistics Plus",
    initials: "MC",
  },
  {
    id: 3,
    content:
      "The custom AI solution transformed our data processing. We're now extracting actionable insights that directly impact our bottom line within hours instead of weeks.",
    author: "Alicia Rodriguez",
    role: "Data Analytics Lead",
    company: "FinancePro",
    initials: "AR",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how our AI automation solutions have transformed businesses like yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-card hover:shadow-lg transition-all duration-300 h-full"
            >
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="mb-6 text-foreground">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
