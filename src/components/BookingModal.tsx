import { useState } from "react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Clock, LoaderCircle } from "lucide-react";
import toast from "react-hot-toast";

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


      toast.error("Missing information Please fill in all fields to book your call.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(`Call scheduled! Your audit call is scheduled for ${format(date, "PPP")} at ${timeSlot}.`);
      
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
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className='max-h-[90dvh]'>
        <div className="md:w-full mx-auto md:max-w-2xl h-full overflow-auto pr-1">
          <DrawerHeader className="text-center">
            <DrawerTitle className="text-2xl">Book Your Free Audit Call</DrawerTitle>
            <DrawerDescription>
              Schedule a 30-minute call with our AI automation experts to discover how we can help your business.
            </DrawerDescription>
          </DrawerHeader>

          
          <div className="p-6 pt-0">
            <form onSubmit={handleSubmit} className="space-y-6">

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
                <div className="border rounded-md p-3 flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="mx-auto pointer-events-auto"
                    disabled={(date) => date < new Date()}
                  />
                </div>
              </div>
              
              {date && (
                <div className="space-y-2">
                  <Label>Select Time</Label>
                  <div className="grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto pr-1">
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
                className="w-full sticky bottom-2 py-6 bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? <span className='flex justify-between items-center gap-3'><LoaderCircle className='animate-spin' /> <text>Scheduling...</text> </span> : "Schedule" +
                  " Call"}
              </Button>
            </form>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
