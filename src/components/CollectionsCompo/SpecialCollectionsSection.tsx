import React from "react";
import { Sparkles } from "lucide-react";
// import specialBg from "@/assets/accessories.jpg"; // 🖼️ Replace with your actual image path

const SpecialCollectionsSection: React.FC = () => {
  return (
    <section
      className="relative py-32 overflow-hidden mt-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/09/8c/68/098c68ef387f3f3950f5b40183468656.jpg')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-transparent" />

      <div className="relative container mx-auto px-4 text-center text-white">
        <Sparkles className="h-12 w-12 text-accent mx-auto mb-6" />
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Special Collections
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Exclusive offers and curated collections designed to elevate your family's style
        </p>
      </div>
    </section>
  );
};

export default SpecialCollectionsSection;