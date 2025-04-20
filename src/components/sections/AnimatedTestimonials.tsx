import { AnimatedTestimonials } from "@/components/ui/animated-testimonials.tsx";

export const AnimatedTestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Their AI lead generation system has completely transformed our sales pipeline. We've seen a 53% increase in qualified leads while cutting prospecting costs by nearly two-thirds. The automation works flawlessly, even with our complex qualification criteria.",
      name: "Mirka Bugaj",
      designation: "Head of Business Development at Munich Dynamics",
      src: "https://upload.wikimedia.org/wikipedia/commons/1/1c/This_Person_Does_Not_Exist_example.jpg",
    },
    {
      quote:
        "The outbound AI voice system revolutionized our customer outreach program. We're now connecting with 10× more prospects daily, and the system's ability to navigate complex phone trees and pre-qualify leads has doubled our conversion rate.",
      name: "Bram Borms",
      designation: "Marketing Director at ParisConnect Solutions",
      src: "https://i.redd.it/hcpu7df05tg21.jpg",
    },
    {
      quote:
        "Implementing their AI content generation system allowed us to scale our content marketing across seven different European markets simultaneously. The quality is consistently excellent, and we've cut our content production costs by 60%.",
      name: "Henrik Johansson",
      designation: "Content Strategy Lead at Nordic Digital Group",
      src: "https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkMDg2Mi5qcGVn",
    },
    {
      quote:
        "The recruitment automation system has been a game-changer for our HR operations. We've reduced time-to-hire by 68% while actually improving candidate quality. Their AI evaluates technical skills more accurately than our previous manual process.",
      name: "Rajiv Mehta",
      designation: "Global Talent Acquisition Head at Retell AI",
      src: "https://media.licdn.com/dms/image/v2/C4E03AQEIWtYUTkmIsA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516308779643?e=2147483647&v=beta&t=7NQ5y8q0j17ufLkvRBLY2kqqOMJ4QE3acCB21kzA1Hg",
    },
    {
      quote:
        "Their document processing automation has completely transformed our insurance claims department. What used to take a team of 12 people is now handled by AI with 99.7% accuracy, allowing us to process claims in minutes rather than days.",
      name: "Isabella Romano",
      designation: "Operations Director at Milano Insurance Group",
      src: "https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQ1Mjk2Ny5qcGVn",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}