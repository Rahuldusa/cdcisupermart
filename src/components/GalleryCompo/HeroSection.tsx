import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

// Import image from assets
import heroImg from "@/assets/Women/lehanga12.jpeg"; // <-- update image name accordingly

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[75vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#F0E491]/40" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center text-white max-w-3xl px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-5 drop-shadow-xl tracking-wide">
          Discover Premium Collections
        </h1>

        <p className="text-lg md:text-xl mb-8 text-white/95 leading-relaxed font-light">
          Hand-picked luxury products crafted for elegance. Shop your favorite items 
          with top quality and stunning designs.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-3 rounded-2xl font-semibold shadow-lg transition-all flex items-center gap-3 mx-auto
                     bg-[#F0E491] text-gray-900 hover:bg-[#e6d479]"
        >
          <ShoppingBag size={22} />
          Shop Now
        </motion.button>
      </motion.div>
    </section>
  );
}
