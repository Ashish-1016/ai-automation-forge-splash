
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { Clock } from "lucide-react";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM"
];

const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "500+ employees"
];

export default function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companySize: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot || !formData.name || !formData.email || !formData.companySize) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields to book your call.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Call scheduled!",
        description: `Your audit call is scheduled for ${format(date, "PPP")} at ${timeSlot}.`,
      });
      
      // Reset form
      setDate(undefined);
      setTimeSlot("");
      setFormData({
        name: "",
        email: "",
        companySize: ""
      });
      
      // Close modal
      onOpenChange(false);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book Your Free Audit Call</DialogTitle>
          <DialogDescription>
            Schedule a 30-minute call with our AI automation experts to discover how we can help your business.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="your@email.com" 
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="companySize">Company Size</Label>
            <Select 
              value={formData.companySize} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, companySize: value }))}
            >
              <SelectTrigger id="companySize">
                <SelectValue placeholder="Select company size" />
              </SelectTrigger>
              <SelectContent>
                {companySizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Select Date</Label>
            <div className="border rounded-md p-3">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="mx-auto pointer-events-auto"
                disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
              />
            </div>
          </div>
          
          {date && (
            <div className="space-y-2">
              <Label>Select Time</Label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    type="button"
                    variant={timeSlot === time ? "default" : "outline"}
                    className="gap-1"
                    onClick={() => setTimeSlot(time)}
                  >
                    <Clock className="h-3 w-3" />
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full py-6 bg-primary hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Scheduling..." : "Schedule Call"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
