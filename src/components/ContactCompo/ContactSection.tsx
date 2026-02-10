// import { MapPin, Phone, Mail, Clock } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

// export default function ContactSection() {
//   return (
//     <>
//       {/* 🌟 Contact Info + Form Section */}
//       <section className="container mx-auto px-4 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Left Column - Store Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="font-serif text-3xl font-semibold mb-8 text-[#FCB53B]">
//               Visit Our Store
//             </h2>

//             <div className="space-y-6 mb-8 text-gray-700">
//               <div className="flex items-start space-x-4">
//                 <MapPin className="h-6 w-6 text-[#FCB53B] mt-1" />
//                 <div>
//                   <h3 className="font-semibold mb-1">Store Address</h3>
//                   <p className="text-muted-foreground">
//                     SUPER FAMILY MART PALHANA ROAD MURATGANJ KAUSHAMBI 212201<br />
//                     GSTIN/UIN: 09ADTFS8993C1Z5 STATE: UTTAR PRADESH<br />
                   
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <Phone className="h-6 w-6 text-[#FCB53B] mt-1" />
//                 <div>
//                   <h3 className="font-semibold mb-1">Phone</h3>
//                   <p className="text-muted-foreground">9936370892</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <Mail className="h-6 w-6 text-[#FCB53B] mt-1" />
//                 <div>
//                   <h3 className="font-semibold mb-1">Email</h3>
//                   <p className="text-muted-foreground">superfamilymart2019@gmail.com</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <Clock className="h-6 w-6 text-[#FCB53B] mt-1" />
//                 <div>
//                   <h3 className="font-semibold mb-1">Store Hours</h3>
//                   <p className="text-muted-foreground">
//                     Monday - Sunday: 9:00 AM - 9:30 PM<br />
//                     {/* Sunday: 11:00 AM - 6:00 PM */}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Column - Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="font-serif text-3xl font-semibold mb-8 text-[#FCB53B]">
//               Send Us a Message
//             </h2>

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
//                 <Input type="email" placeholder="superfamilymart2019@gmail.com" />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">Phone</label>
//                 <Input type="tel" placeholder="9936370892" />
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
//                 className="w-full bg-[#FCB53B] hover:bg-[#FCB53B] text-gray-900 font-semibold shadow-md transition-colors duration-200"
//               >
//                 Send Message
//               </Button>
//             </form>
//           </motion.div>
//         </div>
//       </section>

//       {/* 🗺️ Separate Full-Width Map Section */}
//       <section className="relative w-full h-[400px] bg-gray-200 mt-[-40px]">
//         {/* Replace with actual Google Map iframe if needed */}
//         <iframe
//           title="Store Location"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0193518437366!2d-122.41941568468292!3d37.77492927975909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8a3d4c8f%3A0x3a39a0c3bfc24b3b!2sFashion%20Street!5e0!3m2!1sen!2sus!4v1700000000000"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//           className="rounded-none"
//         ></iframe>
//       </section>
//     </>
//   );
// }





import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { baseURL } from "@/Api/Baseurl";

export default function ContactSection() {
  // 🧠 Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // 🧩 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🚀 Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("⚠️ Please fill in all required fields.");
      return;
    }

    try {
      const res = await fetch(`${baseURL}/api/post-contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        alert("❌ Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("❌ Server error. Please check your connection.");
    }
  };

  return (
    <>
      {/* 🌟 Contact Info + Form Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Store Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl font-semibold mb-8 text-[#FCB53B]">
              Visit Our Store
            </h2>

            <div className="space-y-6 mb-8 text-gray-700">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#FCB53B] mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Store Address</h3>
                  <p className="text-muted-foreground">
                    SUPER FAMILY MART PALHANA ROAD MURATGANJ KAUSHAMBI 212201<br />
                    GSTIN/UIN: 09ADTFS8993C1Z5 STATE: UTTAR PRADESH<br />
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-[#FCB53B] mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">9936370892</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-[#FCB53B] mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">superfamilymart2019@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-[#FCB53B] mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Store Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Sunday: 9:30 AM - 8:30 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl font-semibold mb-8 text-[#FCB53B]">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> */}
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    name="name"
                    placeholder="John"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              {/* </div> */}

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="superfamilymart2019@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="9936370892"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  name="subject"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  placeholder="Tell us more about your inquiry..."
                  className="min-h-[150px]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#FCB53B] hover:bg-[#f1a82f] text-gray-900 font-semibold shadow-md transition-colors duration-200"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 🗺️ Map Section */}
      <section className="relative w-full h-[400px] bg-gray-200 mt-[-40px]">
  <iframe
    title="Super Family Mart Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.0507263186434!2d81.5445692!3d25.5500252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ad781594c3def%3A0x65e91f8e445b1b85!2sSuper%20Family%20Mart!5e0!3m2!1sen!2sin!4v1700000000001"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-none"
  ></iframe>
</section>

    </>
  );
}
