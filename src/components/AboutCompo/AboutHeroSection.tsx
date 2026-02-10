
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-main.jpg"; // replace with your actual image path

export default function AboutHeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-0 shadow-2xl">
      {/* Background Image with smooth zoom-in animation */}
      <motion.img
        src={heroImage}
        alt="Our Story"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Gradient + dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />

      {/* Centered Content */}
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
        <motion.h1
          className="font-serif text-5xl md:text-6xl font-bold mb-4 tracking-wide"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Story
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl opacity-90 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Bringing premium fashion to families since{" "}
          <span className="font-semibold text-yellow-400">2010</span>
        </motion.p>

        {/* Optional Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition duration-300">
            Discover More
          </button>
        </motion.div>
      </div>
    </section>
  );
}