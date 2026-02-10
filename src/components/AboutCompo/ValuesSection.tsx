// import { motion } from "framer-motion";
// import { 
//   Heart, 
//   Users, 
//   Star, 
//   Shield,
//   Sparkles,
//   Target,
//   Globe,
//   Award
// } from "lucide-react";

// const values = [
//   {
//     icon: Heart,
//     title: "Family First",
//     description: "We put families at the heart of everything we do, creating fashion that brings generations together."
//   },
//   {
//     icon: Users,
//     title: "Community",
//     description: "Building strong connections with our customers and supporting local communities through every purchase."
//   },
//   {
//     icon: Star,
//     title: "Excellence",
//     description: "Committed to exceptional quality, craftsmanship, and service that exceeds expectations."
//   },
//   {
//     icon: Shield,
//     title: "Trust",
//     description: "Building lasting relationships based on transparency, reliability, and ethical practices."
//   },
//   {
//     icon: Sparkles,
//     title: "Innovation",
//     description: "Constantly evolving with fashion trends while maintaining timeless family values."
//   },
//   {
//     icon: Target,
//     title: "Purpose",
//     description: "Driven by our mission to make quality fashion accessible to every family member."
//   },
//   {
//     icon: Globe,
//     title: "Sustainability",
//     description: "Committed to eco-friendly practices and sustainable fashion for future generations."
//   },
//   {
//     icon: Award,
//     title: "Quality",
//     description: "Never compromising on materials, craftsmanship, or the overall shopping experience."
//   }
// ];

// export default function ValuesSection() {
//   return (
//     <section className="relative bg-gradient-to-br from-amber-50 via-white to-yellow-50 py-24 px-4 overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl -z-10"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl -z-10"></div>
      
//       <div className="container mx-auto max-w-7xl">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="font-serif text-4xl md:text-5xl font-bold text-amber-800 mb-4"
//           >
//             Our Values
//           </motion.h2>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"
//           ></motion.div>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//             viewport={{ once: true }}
//             className="text-lg text-gray-600 max-w-2xl mx-auto"
//           >
//             The principles that guide us in creating fashion that brings families together
//           </motion.p>
//         </motion.div>

//         {/* Values Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {values.map((value, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ 
//                 duration: 0.6, 
//                 delay: index * 0.1,
//                 ease: "easeOut"
//               }}
//               viewport={{ once: true, margin: "-50px" }}
//               whileHover={{ 
//                 y: -8,
//                 scale: 1.02,
//                 transition: { duration: 0.3 }
//               }}
//               className="group relative"
//             >
//               {/* Hover Background Effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-yellow-100/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10"></div>
              
//               {/* Main Card */}
//               <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 h-full border border-amber-100/50 shadow-sm group-hover:shadow-xl group-hover:border-amber-200/70 transition-all duration-500">
                
//                 {/* Icon Container */}
//                 <motion.div
//                   whileHover={{ 
//                     scale: 1.1,
//                     rotate: 5,
//                     transition: { duration: 0.3 }
//                   }}
//                   className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl mb-6 border border-amber-200/50 group-hover:from-amber-200 group-hover:to-amber-100 transition-all duration-500"
//                 >
//                   {/* Icon Background Effect */}
//                   <div className="absolute inset-0 bg-amber-200/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
//                   {/* Icon */}
//                   <value.icon className="h-10 w-10 text-amber-700 relative z-10" />
                  
//                   {/* Floating Particles */}
//                   <motion.div
//                     animate={{ 
//                       scale: [1, 1.2, 1],
//                       opacity: [0.3, 0.6, 0.3]
//                     }}
//                     transition={{ 
//                       duration: 2,
//                       repeat: Infinity,
//                       delay: index * 0.5
//                     }}
//                     className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full"
//                   ></motion.div>
//                 </motion.div>

//                 {/* Content */}
//                 <motion.h3 
//                   className="font-semibold text-xl mb-4 text-gray-800 group-hover:text-amber-800 transition-colors duration-300"
//                 >
//                   {value.title}
//                 </motion.h3>
                
//                 <motion.p 
//                   className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
//                 >
//                   {value.description}
//                 </motion.p>

//                 {/* Bottom Accent */}
//                 <motion.div
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1 }}
//                   whileHover={{ scaleX: 1.1 }}
//                   transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
//                   className="w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-300 rounded-full mt-6 origin-left"
//                 ></motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Floating decorative elements */}
//         <motion.div
//           animate={{ 
//             y: [0, -20, 0],
//             rotate: [0, 5, 0]
//           }}
//           transition={{ 
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           className="absolute top-1/4 left-5 w-4 h-4 bg-amber-300 rounded-full opacity-60 hidden lg:block"
//         ></motion.div>
        
//         <motion.div
//           animate={{ 
//             y: [0, 15, 0],
//             rotate: [0, -5, 0]
//           }}
//           transition={{ 
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1
//           }}
//           className="absolute bottom-1/3 right-8 w-3 h-3 bg-amber-400 rounded-full opacity-40 hidden lg:block"
//         ></motion.div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { 
  Heart, 
  Users, 
  Star, 
  Shield,
  Sparkles,
  Target,
  Globe,
  Award
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Family First",
    description: "We put families at the heart of everything we do, creating fashion that brings generations together."
  },
  {
    icon: Users,
    title: "Community",
    description: "Building strong connections with our customers and supporting local communities through every purchase."
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Committed to exceptional quality, craftsmanship, and service that exceeds expectations."
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Building lasting relationships based on transparency, reliability, and ethical practices."
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Constantly evolving with fashion trends while maintaining timeless family values."
  },
  {
    icon: Target,
    title: "Purpose",
    description: "Driven by our mission to make quality fashion accessible to every family member."
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "Committed to eco-friendly practices and sustainable fashion for future generations."
  },
  {
    icon: Award,
    title: "Quality",
    description: "Never compromising on materials, craftsmanship, or the overall shopping experience."
  }
];

export default function ValuesSection() {
  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold text-amber-800 mb-4"
          >
            Our Values
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            The principles that guide us in creating fashion that brings families together
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-amber-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl p-8 h-full border border-gray-100 shadow-sm group-hover:shadow-xl group-hover:border-amber-200 transition-all duration-500">
                
                {/* Icon Container */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-2xl mb-6 border border-amber-200 group-hover:bg-amber-200 group-hover:shadow-lg transition-all duration-500"
                >
                  {/* Icon */}
                  <value.icon className="h-10 w-10 text-amber-700 relative z-10" />
                  
                  {/* Floating Particles */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full"
                  ></motion.div>
                </motion.div>

                {/* Content */}
                <motion.h3 
                  className="font-semibold text-xl mb-4 text-gray-800 group-hover:text-amber-800 transition-colors duration-300"
                >
                  {value.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                >
                  {value.description}
                </motion.p>

                {/* Bottom Accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  whileHover={{ scaleX: 1.1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="w-12 h-1 bg-amber-400 rounded-full mt-6 origin-left"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-5 w-4 h-4 bg-amber-300 rounded-full opacity-60 hidden lg:block"
        ></motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/3 right-8 w-3 h-3 bg-amber-400 rounded-full opacity-40 hidden lg:block"
        ></motion.div>
      </div>
    </section>
  );
}