// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

// const MensFashionPage: React.FC = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
//       {/* Background Video */}
//       <div className="absolute inset-0 w-full h-full">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="w-full h-full object-cover"
//           poster="https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=1920&q=80" // fallback image
//         >
//           <source
//             src="https://assets.mixkit.co/videos/preview/mixkit-fashion-male-model-walking-in-slow-motion-41441-large.mp4"
//             type="video/mp4"
//           />
//           <source
//             src="https://assets.mixkit.co/videos/preview/mixkit-elegant-men-suits-on-display-41442-large.webm"
//             type="video/webm"
//           />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 md:px-12">
//         <motion.h1
//           className="text-4xl md:text-6xl font-extrabold mb-6 font-serif"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Elevate Your <span className="text-blue-400">Style</span> with{" "}
//           <span className="text-yellow-400">Men’s Fashion</span>
//         </motion.h1>

//         <motion.p
//           className="max-w-2xl mx-auto text-lg md:text-xl mb-8 text-gray-200"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 1 }}
//         >
//           Discover timeless styles and bold trends for the modern man.
//           From everyday essentials to premium formals — redefine your wardrobe
//           with sophistication and comfort.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 1 }}
//           className="flex justify-center gap-4"
//         >
//           <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg">
//             Shop Now
//           </Button>
//           <Button className="bg-transparent border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-semibold">
//             View Collections
//           </Button>
//         </motion.div>

//         {/* Highlight Categories */}
//         <motion.div
//           className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//         >
//           <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
//             <h3 className="text-xl font-semibold mb-2 text-blue-400">
//               Formal Wear
//             </h3>
//             <p className="text-gray-200">
//               Premium suits, shirts, and blazers for every occasion.
//             </p>
//           </div>
//           <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
//             <h3 className="text-xl font-semibold mb-2 text-blue-400">
//               Casual Styles
//             </h3>
//             <p className="text-gray-200">
//               T-shirts, jeans, and outerwear that blend comfort and fashion.
//             </p>
//           </div>
//           <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
//             <h3 className="text-xl font-semibold mb-2 text-blue-400">
//               Accessories
//             </h3>
//             <p className="text-gray-200">
//               Watches, belts, and shoes that complete your look.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default MensFashionPage;








import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const MensFashionPage: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Enhanced Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-105" // Slight zoom for better coverage
          poster="https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-fashion-male-model-walking-in-slow-motion-41441-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://media.istockphoto.com/id/1417099164/video/a-row-of-jackets-in-a-clothing-store-show-of-clothes-in-a-shopping-center-sales-promotion-and.mp4?s=mp4-640x640-is&k=20&c=pJ_cYsaAVSJQV7BcWL_qthRq8NVWWw1Gc894iBAF7Dc"
            type="video/webm"
          />
          {/* Fallback image if video fails */}
          <img 
            src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=1920&q=80" 
            alt="Men's Fashion Fallback"
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Loading state */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-white text-lg"></div>
        </div>
      </div>

      {/* Enhanced Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-6xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-serif tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Elevate Your <span className="text-blue-400">Style</span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-xl md:text-2xl mb-10 text-gray-200 font-light leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Discover timeless styles and bold trends for the modern man.
          Redefine your wardrobe with sophistication and comfort.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
            Shop Collection
          </Button>
          <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-black px-8 py-4 text-lg rounded-full font-semibold transform hover:scale-105 transition-all duration-300">
            Explore Lookbook
          </Button>
        </motion.div>

        {/* Enhanced Category Cards */}
        {/* <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {[
            {
              title: "Formal Wear",
              description: "Premium suits, shirts, and blazers for every occasion.",
              color: "text-blue-400"
            },
            {
              title: "Casual Styles", 
              description: "T-shirts, jeans, and outerwear that blend comfort and fashion.",
              color: "text-green-400"
            },
            {
              title: "Accessories",
              description: "Watches, belts, and shoes that complete your look.",
              color: "text-yellow-400"
            }
          ].map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className={`text-xl font-bold mb-3 ${category.color}`}>
                {category.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </motion.div> */}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default MensFashionPage;