// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

// const SuperFamilyMartPage: React.FC = () => {
//   return (
//     <section
//       className="relative min-h-screen flex items-center justify-center text-white"
//       style={{
//         backgroundImage: "url('https://images.unsplash.com/photo-1556742400-b5a63aa0b9b7?auto=format&fit=crop&w=1920&q=80')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 md:px-12">
//         <motion.h1
//           className="text-4xl md:text-6xl font-extrabold mb-6 font-serif"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Welcome to <span className="text-yellow-400">Super Family Mart</span>
//         </motion.h1>

//         <motion.p
//           className="max-w-2xl mx-auto text-lg md:text-xl mb-8 text-gray-200"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 1 }}
//         >
//           Discover the perfect blend of style, comfort, and convenience for your
//           entire family — all under one roof. From fashion to daily essentials,
//           we’ve got you covered.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 1 }}
//           className="flex justify-center gap-4"
//         >
//           <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full shadow-lg">
//             Explore Collections
//           </Button>
//           <Button className="bg-transparent border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-semibold">
//             Visit Store
//           </Button>
//         </motion.div>

//         {/* Highlight Section */}
//         <motion.div
//           className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//         >
//           <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
//             <h3 className="text-xl font-semibold mb-2 text-yellow-400">Men’s Wear</h3>
//             <p className="text-gray-200">Trendy outfits to match every occasion.</p>
//           </div>
//           <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
//             <h3 className="text-xl font-semibold mb-2 text-yellow-400">Women’s Wear</h3>
//             <p className="text-gray-200">Elegance meets style in our curated collection.</p>
//           </div>
//           <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
//             <h3 className="text-xl font-semibold mb-2 text-yellow-400">Kids & Family</h3>
//             <p className="text-gray-200">Comfortable fashion for your little ones.</p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default SuperFamilyMartPage;







import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SuperFamilyMartPage: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1556742400-b5a63aa0b9b7?auto=format&fit=crop&w=1920&q=80" // Fallback image
        >
          <source
            src="
               https://www.shutterstock.com/shutterstock/videos/3475317667/preview/stock-footage-wedding-accessories-hd-video-we.webm"
            type="video/mp4"
          />
          {/* Add additional sources for better browser compatibility */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-people-shopping-in-a-modern-mall-44759-large.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 font-serif"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-yellow-400">Super Family Mart</span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl mb-8 text-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Discover the perfect blend of style, comfort, and convenience for your
          entire family — all under one roof. From fashion to daily essentials,
          we've got you covered.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex justify-center gap-4"
        >
         <Button 
  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full shadow-lg"
  onClick={() => window.location.href = "/collections"}
>
  Explore Collections
        </Button>
          <Button 
  className="bg-transparent border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-semibold"
  onClick={() => window.open("https://www.google.com/maps?ll=25.553318,81.544762&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=8180577435096872717", "_blank")}
>
  Visit Store
        </Button>
        </motion.div>

        {/* Highlight Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
        
        </motion.div>
      </div>
    </section>
  );
};

export default SuperFamilyMartPage;