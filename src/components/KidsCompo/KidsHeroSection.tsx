// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import kidsHero from "@/assets/kids-hero.jpg"; // ✅ make sure this image exists

// export default function KidsHeroSection() {
//   return (
//     <section className="relative h-[75vh] flex items-center justify-center overflow-hidden mt-20 rounded-2xl shadow-2xl">
//       {/* Background Image */}
//       <img
//         src={kidsHero}
//         alt="Kids Collection"
//         className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-transform duration-700 hover:scale-110"
//       />

//       {/* Color Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-pink-400/40 via-purple-500/40 to-blue-600/40 mix-blend-overlay" />

//       {/* Dark Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

//       {/* Text Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="relative z-10 text-center text-white max-w-3xl mx-auto px-6"
//       >
//         <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
//           Kids Collection
//         </h1>
//         <p className="text-lg md:text-2xl opacity-95 mb-8 font-light">
//           Playful, comfy, and colorful fashion made for fun and adventures!
//         </p>

//         <motion.div whileHover={{ scale: 1.05 }}>
//           <Button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-pink-400/50 transition-all duration-300">
//             Shop Now
//           </Button>
//         </motion.div>
//       </motion.div>

//       {/* Floating Fun Elements */}
//       <motion.div
//         className="absolute top-10 left-10 text-6xl text-yellow-300"
//         animate={{ y: [0, -15, 0] }}
//         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//       >
//         ⭐
//       </motion.div>
//       <motion.div
//         className="absolute bottom-10 right-10 text-6xl text-pink-300"
//         animate={{ y: [0, 15, 0] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//       >
//         💫
//       </motion.div>
//     </section>
//   );
// }






// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import kidsHero from "@/assets/kids-hero.jpg";

// export default function KidsHeroSection() {
//   return (
//     <section className="relative h-[85vh] flex items-center justify-center overflow-hidden mt-0">
//       {/* Background Image with Enhanced Effects */}
//       <div className="absolute inset-0">
//         <img
//           src="https://i.pinimg.com/1200x/83/9f/26/839f269e9e58d1b27cfc5db685ddf0db.jpg"
//           alt="Kids Collection"
//           className="w-full h-full object-cover transform scale-110 transition-all duration-1000 hover:scale-105"
//         />
        
//         {/* Enhanced Gradient Overlays */}
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20 mix-blend-soft-light" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />
//         <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 via-transparent to-purple-500/10" />
//       </div>

//       {/* Main Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, ease: "easeOut" }}
//         className="relative z-10 text-center text-white max-w-4xl mx-auto px-6"
//       >
//         {/* Animated Title */}
//         <motion.h1
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="font-bold text-6xl md:text-8xl lg:text-9xl mb-6 tracking-tight"
//         >
//           <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
//             KIDS
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="text-xl md:text-2xl lg:text-3xl mb-8 font-light max-w-2xl mx-auto leading-relaxed"
//         >
//           Where <span className="text-yellow-300 font-semibold">fun</span> meets{" "}
//           <span className="text-pink-300 font-semibold">fashion</span> in every stitch!
//         </motion.p>

//         {/* Enhanced CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.9 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//          <Button 
//   className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-lg px-12 py-6 rounded-full shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 border-2 border-white/20"
//   onClick={() => window.location.href = "/collections"}
// >
//   Explore Collection 🚀
//       </Button>
//         </motion.div>
//       </motion.div>

//       {/* Enhanced Floating Elements */}
//       <motion.div
//         className="absolute top-20 left-20 text-5xl"
//         animate={{ 
//           y: [0, -20, 0],
//           rotate: [0, 10, -10, 0]
//         }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//       >
//         🌈
//       </motion.div>
      
//       <motion.div
//         className="absolute top-32 right-24 text-4xl"
//         animate={{ 
//           y: [0, 15, 0],
//           rotate: [0, -15, 15, 0]
//         }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//       >
//         🎨
//       </motion.div>
      
//       <motion.div
//         className="absolute bottom-28 left-24 text-5xl"
//         animate={{ 
//           y: [0, 25, 0],
//           scale: [1, 1.2, 1]
//         }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//       >
//         ✨
//       </motion.div>
      
//       <motion.div
//         className="absolute bottom-32 right-20 text-4xl"
//         animate={{ 
//           y: [0, -15, 0],
//           x: [0, 10, 0]
//         }}
//         transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
//       >
//         🎯
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//       >
//         <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//           <motion.div
//             className="w-1 h-3 bg-white/70 rounded-full mt-2"
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// }




import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import kidsHero from "@/assets/Kids/Kidskurtaset2.jpeg";

export default function KidsHeroSection() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden mt-0">
      {/* Background Image with Enhanced Effects */}
      <div className="absolute inset-0">
        <img
          src={kidsHero} // Using the imported image
          alt="Kids Collection"
          className="w-full h-full object-cover transform scale-110 transition-all duration-1000 hover:scale-105"
        />
        
        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20 mix-blend-soft-light" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 via-transparent to-purple-500/10" />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-6"
      >
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-bold text-6xl md:text-8xl lg:text-9xl mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
            KIDS
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl mb-8 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Where <span className="text-yellow-300 font-semibold">fun</span> meets{" "}
          <span className="text-pink-300 font-semibold">fashion</span> in every stitch!
        </motion.p>

        {/* Enhanced CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
         <Button 
  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-lg px-12 py-6 rounded-full shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 border-2 border-white/20"
  onClick={() => window.location.href = "/collections"}
>
  Explore Collection 🚀
          </Button>
        </motion.div>
      </motion.div>

     

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}