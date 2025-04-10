
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { useCompanyName } from "@/hooks/useCompanyName";

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
  {
    id: 4,
    content:
      "Their AI-powered document processing system eliminated countless hours of manual data entry. We've seen a 70% reduction in processing times and virtually eliminated errors.",
    author: "David Williams",
    role: "CTO",
    company: "DocuSign Pro",
    initials: "DW",
  },
  {
    id: 5,
    content:
      "The customer service chatbot they implemented handles 85% of our routine inquiries, allowing our team to focus on strategic initiatives. Customer satisfaction improved by 40%.",
    author: "Jennifer Lee",
    role: "Customer Experience Director",
    company: "RetailOne",
    initials: "JL",
  },
];

export default function TestimonialsSection() {
  const { companyName } = useCompanyName();
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isPaused) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isPaused]);
  
  // Effect to update the carousel position when activeIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      const scrollLeft = activeIndex * (carouselRef.current.clientWidth / 3);
      carouselRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

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

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent ref={carouselRef}>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/3 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-card hover:shadow-lg transition-all duration-300 h-full">
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4" />
            <CarouselNext className="hidden sm:flex -right-4" />
          </Carousel>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? "w-6 bg-primary" : "w-2 bg-primary/30"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
