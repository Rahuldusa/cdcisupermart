
// import { motion } from "framer-motion";

// export default function MissionVisionSection() {
//   return (
//     <section className="relative bg-gradient-to-br from-amber-50 to-yellow-50 py-24 px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
//             Our Mission & Vision
//           </h2>
//           <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Image Side */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//               <img
//                 src="/api/placeholder/600/600"
//                 alt="Happy family shopping together"
//                 className="w-full h-[500px] object-cover"
//               />
//               {/* Overlay gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
//             </div>
            
//             {/* Decorative elements */}
//             <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-200 rounded-full opacity-60"></div>
//             <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-amber-300 rounded-full opacity-40"></div>
//           </motion.div>

//           {/* Content Side */}
//           <div className="space-y-8">
//             {/* Mission Card */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="relative group"
//             >
//               <div className="absolute -inset-2 bg-amber-200/30 rounded-2xl blur-lg group-hover:bg-amber-300/40 transition-all duration-300"></div>
//               <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-amber-100 group-hover:shadow-2xl transition-all duration-300">
//                 <div className="flex items-center mb-6">
//                   <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
//                     <span className="text-amber-700 font-bold text-lg">M</span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-amber-800">
//                     Our Mission
//                   </h3>
//                 </div>
//                 <p className="text-gray-700 text-lg leading-relaxed mb-4">
//                   At <span className="font-semibold text-amber-700">Super Family Mart</span>, we're more than just a clothing store — 
//                   we're a destination where <span className="italic text-amber-600">style meets family values</span>. 
//                   Our mission is to make premium fashion accessible to every family member.
//                 </p>
//                 <p className="text-gray-700 text-lg leading-relaxed">
//                   From sophisticated menswear and elegant women's fashion to adorable kids' clothing, 
//                   we ensure that every piece reflects quality, comfort, and enduring style.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Vision Card */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="relative group"
//             >
//               <div className="absolute -inset-2 bg-amber-200/30 rounded-2xl blur-lg group-hover:bg-amber-300/40 transition-all duration-300"></div>
//               <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-amber-100 group-hover:shadow-2xl transition-all duration-300">
//                 <div className="flex items-center mb-6">
//                   <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
//                     <span className="text-amber-700 font-bold text-lg">V</span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-amber-800">
//                     Our Vision
//                   </h3>
//                 </div>
//                 <p className="text-gray-700 text-lg leading-relaxed mb-4">
//                   Our vision is to become a trusted fashion destination that celebrates every family's individuality and togetherness. 
//                   We aspire to inspire confidence, joy, and pride through our carefully curated collections.
//                 </p>
//                 <p className="text-gray-700 text-lg leading-relaxed">
//                   We aim to lead with innovation, sustainability, and love for fashion — empowering families to express their unique 
//                   style stories beautifully and affordably.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Background decorative elements */}
//       <div className="absolute top-10 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl -z-10"></div>
//       <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl -z-10"></div>
      
//       {/* Floating elements */}
//       <motion.div
//         animate={{ y: [0, -20, 0] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-20 right-20 w-6 h-6 bg-amber-400 rounded-full opacity-60 hidden lg:block"
//       ></motion.div>
//       <motion.div
//         animate={{ y: [0, 15, 0] }}
//         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//         className="absolute bottom-32 left-32 w-4 h-4 bg-amber-500 rounded-full opacity-40 hidden lg:block"
//       ></motion.div>
//     </section>
//   );
// }




import { motion } from "framer-motion";

export default function MissionVisionSection() {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Our Mission & Vision
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Building a fashion legacy that brings families together through style and quality
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-100">
              <img
                src="https://i.pinimg.com/1200x/02/06/99/0206992a1e62efd85e5e48769787dd66.jpg"
                alt="Happy family shopping together"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-100 rounded-full opacity-80"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-amber-200 rounded-full opacity-60"></div>
          </motion.div>

          {/* Content Side */}
          <div className="space-y-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-amber-100/50 rounded-2xl blur-lg group-hover:bg-amber-200/60 transition-all duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-amber-50 group-hover:shadow-xl transition-all duration-300 hover:border-amber-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 shadow-md">
                    <span className="text-amber-700 font-bold text-lg">M</span>
                  </div>
                  <h3 className="text-2xl font-bold text-amber-800">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  At <span className="font-semibold text-amber-700">Super Family Mart</span>, we're more than just a clothing store — 
                  we're a destination where <span className="italic text-amber-600">style meets family values</span>. 
                  Our mission is to make premium fashion accessible to every family member.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  From sophisticated menswear and elegant women's fashion to adorable kids' clothing, 
                  we ensure that every piece reflects quality, comfort, and enduring style.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-amber-100/50 rounded-2xl blur-lg group-hover:bg-amber-200/60 transition-all duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-amber-50 group-hover:shadow-xl transition-all duration-300 hover:border-amber-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 shadow-md">
                    <span className="text-amber-700 font-bold text-lg">V</span>
                  </div>
                  <h3 className="text-2xl font-bold text-amber-800">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Our vision is to become a trusted fashion destination that celebrates every family's individuality and togetherness. 
                  We aspire to inspire confidence, joy, and pride through our carefully curated collections.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We aim to lead with innovation, sustainability, and love for fashion — empowering families to express their unique 
                  style stories beautifully and affordably.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decorative elements - Subtle */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -z-10"></div>
      
      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-6 h-6 bg-amber-300 rounded-full opacity-60 hidden lg:block"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 left-32 w-4 h-4 bg-amber-400 rounded-full opacity-40 hidden lg:block"
      ></motion.div>

      {/* Additional decorative dots */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-5 w-3 h-3 bg-amber-200 rounded-full hidden lg:block"
      ></motion.div>
      <motion.div
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/4 right-8 w-2 h-2 bg-amber-300 rounded-full hidden lg:block"
      ></motion.div>
    </section>
  );
}