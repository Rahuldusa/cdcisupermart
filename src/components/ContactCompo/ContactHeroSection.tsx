// import { motion } from "framer-motion";
 

// export default function ContactHeroSection() {
//   return (
//     <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-20 rounded-2xl shadow-2xl">
//       {/* Background Image */}
//       <img
//         src="https://i.pinimg.com/1200x/cc/1b/49/cc1b49ba7f3a6ec2319741995b8de1f8.jpg"
//         alt="Contact Background"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-6">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="font-serif text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg"
//         >
//           Get in Touch
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
//         >
//           Have questions? We’d love to hear from you. Visit our store or reach out online — 
//           we’re here to make your shopping experience delightful and personal.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="mt-10 flex flex-wrap justify-center gap-6"
//         >
//           <a
//             href="mailto:info@superfamilymart.com"
//             className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:text-white transition-all duration-300"
//           >
//             Email Us
//           </a>
//           <a
//             href="#contact-form"
//             className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-700 transition-all duration-300"
//           >
//             Visit Store
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }








// import { motion } from "framer-motion";

// export default function ContactHeroSection() {
//   return (
//     <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
//       {/* Background Image with Gradient Overlay */}
//       <div className="absolute inset-0">
//         <img
//           src="https://i.pinimg.com/1200x/fa/f4/00/faf400b4d3667b79ea5804dc85420ce7.jpg"
//           alt="Contact Background"
//           className="w-full h-full object-cover"
//         />
//         {/* Enhanced Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 tracking-normal"
//         >
//           Get In Touch
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
//         >
//           Ready to assist you. Visit our store or connect with us online — 
//           we're committed to making your experience exceptional.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="flex flex-col sm:flex-row justify-center items-center gap-5"
//         >
//           <a
//             href="mailto:info@superfamilymart.com"
//             className="group bg-white text-gray-900 font-semibold px-8 py-3 text-base hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 min-w-[180px] justify-center"
//           >
//             <span>Email Us</span>
//             <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//             </svg>
//           </a>
          
//           <a
//             href="#contact-form"
//             className="group border-2 border-white text-white font-semibold px-8 py-3 text-base hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300 flex items-center gap-2 min-w-[180px] justify-center"
//           >
//             <span>Visit Store</span>
//             <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//           </a>
//         </motion.div>

//         {/* Additional Info */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-12 flex flex-wrap justify-center gap-6 text-gray-200 text-sm"
//         >
//           <div className="flex items-center gap-2">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <span>Mon-Sun: 9AM - 9:30PM</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//             </svg>
//             <span>9936370892</span>
//           </div>
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1 }}
//         viewport={{ once: true }}
//         className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
//       >
//         <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center">
//           <motion.div
//             animate={{ y: [0, 8, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="w-1 h-2 bg-white rounded-full mt-2"
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// }






import { motion } from "framer-motion";

export default function ContactHeroSection() {
  return (
    <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/1200x/fa/f4/00/faf400b4d3667b79ea5804dc85420ce7.jpg"
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 tracking-normal"
        >
          Get In Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Ready to assist you. Visit our store or connect with us online — 
          we're committed to making your experience exceptional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center gap-5"
        >
          <a
            href="mailto:info@superfamilymart.com"
            className="group bg-white text-gray-900 font-semibold px-8 py-3 text-base hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 min-w-[180px] justify-center"
          >
            <span>Email Us</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          
          <a
            href="https://www.google.com/maps/place/Super+Family+Mart/@25.5500252,81.5445692,17z/data=!3m1!4b1!4m6!3m5!1s0x399ad781594c3def:0x65e91f8e445b1b85!8m2!3d25.5500252!4d81.5445692!16s%2Fg%2F11h2cpbgj6?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
            className="group border-2 border-white text-white font-semibold px-8 py-3 text-base hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300 flex items-center gap-2 min-w-[180px] justify-center"
          >
            <span>Visit Store</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </a>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-gray-200 text-sm"
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Mon-Sun: 9:30 - 8:30PM</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>9936370892</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}