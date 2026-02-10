import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import womenHero from "@/assets/Women/WhatsApp Image 2025-11-07 at 09.40.47.jpeg";

export default function WomenHeroSection() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden mt-16">
      {/* Background Image with Enhanced Effects */}
      <div className="absolute inset-0">
        <img
          src={womenHero}
          alt="Women's Collection"
          className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-[5000ms] ease-out"
        />
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-6"
      >
        {/* Decorative Element */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-20 h-1 bg-pink-500 mx-auto mb-8 rounded-full"
        />
        
        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight">
          Women's
          <br />
          <span className="bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
            Collection
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-xl md:text-2xl opacity-95 mb-12 font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
        >
          Discover elegance, confidence, and timeless beauty in every piece
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Button className="bg-white text-black font-semibold px-12 py-6 text-lg rounded-none hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 transform hover:-translate-y-1 border-2 border-white hover:border-pink-500">
            Explore Now
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}