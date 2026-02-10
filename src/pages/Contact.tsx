// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { MapPin, Phone, Mail, Clock } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// const Contact = () => {
//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       {/* Hero */}
//       <section className="relative py-20 overflow-hidden mt-20 bg-gradient-to-br from-accent/20 to-background">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
//             Get in Touch
//           </h1>
//           <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
//             Have questions? We'd love to hear from you. Visit our store or reach out online.
//           </p>
//         </div>
//       </section>

//       {/* Contact Info & Form */}
//       <section className="container mx-auto px-4 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Information */}
//           <div>
//             <h2 className="font-serif text-3xl font-semibold mb-8">Visit Our Store</h2>
            
//             <div className="space-y-6 mb-8">
//               <div className="flex items-start space-x-4">
//                 <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
//                 <div>
//                   <h3 className="font-semibold mb-1">Store Address</h3>
//                   <p className="text-muted-foreground">
//                     123 Fashion Street<br />
//                     Style City, FC 12345<br />
//                     United States
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
//                 <div>
//                   <h3 className="font-semibold mb-1">Phone</h3>
//                   <p className="text-muted-foreground">+1 (555) 123-4567</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
//                 <div>
//                   <h3 className="font-semibold mb-1">Email</h3>
//                   <p className="text-muted-foreground">hello@fashionfamilia.com</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
//                 <div>
//                   <h3 className="font-semibold mb-1">Store Hours</h3>
//                   <p className="text-muted-foreground">
//                     Monday - Saturday: 10:00 AM - 8:00 PM<br />
//                     Sunday: 11:00 AM - 6:00 PM
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Map Placeholder */}
//             <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
//               <p className="text-muted-foreground">Map placeholder</p>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div>
//             <h2 className="font-serif text-3xl font-semibold mb-8">Send Us a Message</h2>
            
//             <form className="space-y-6">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">First Name</label>
//                   <Input placeholder="John" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Last Name</label>
//                   <Input placeholder="Doe" />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">Email</label>
//                 <Input type="email" placeholder="john@example.com" />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">Phone</label>
//                 <Input type="tel" placeholder="+1 (555) 123-4567" />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">Subject</label>
//                 <Input placeholder="How can we help you?" />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">Message</label>
//                 <Textarea 
//                   placeholder="Tell us more about your inquiry..."
//                   className="min-h-[150px]"
//                 />
//               </div>

//               <Button 
//                 type="submit" 
//                 size="lg" 
//                 className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold"
//               >
//                 Send Message
//               </Button>
//             </form>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;







import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ContactHeroSection from "@/components/ContactCompo/ContactHeroSection";
import ContactSection from "@/components/ContactCompo/ContactSection";
import CustomerTestimonials from "@/components/ContactCompo/Testimonials";
import FAQSection from "@/components/ContactCompo/FAQSection";


const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />


      <ContactHeroSection />

      <ContactSection />

      <CustomerTestimonials />

      <FAQSection />

      <Footer />
    </div>
  );
};

export default Contact;
