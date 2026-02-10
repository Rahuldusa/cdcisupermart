import React from "react";
import menHero from "@/assets/men-hero.jpg"; // Replace with your actual image

const MenHeroSection: React.FC = () => {
  return (
    <section className="relative h-[75vh] flex items-center justify-center overflow-hidden mt-0">
      {/* Background Image with Enhanced Effects */}
      <div className="absolute inset-0">
        <img
          src={menHero}
          alt="Men's Collection"
          className="w-full h-full object-cover transform scale-100 transition-all duration-1000 hover:scale-105"
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/35 to-black/15" />
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.1)_0%,_rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
        {/* Main Heading with Adjusted Typography */}
        <div className="mb-8">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight drop-shadow-2xl">
            MEN'S
          </h1>
          <div className="w-20 h-0.5 bg-white mx-auto mb-5"></div>
          <h2 className="font-sans text-2xl md:text-3xl font-light tracking-widest uppercase">
            COLLECTION
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl font-light text-gray-200 mb-10 max-w-xl mx-auto leading-relaxed">
          Sophisticated styles crafted for the modern gentleman. Discover timeless elegance and contemporary design.
        </p>

        {/* Enhanced Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
  className="px-10 py-3 bg-white text-black font-semibold text-base tracking-wide shadow-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 border border-transparent"
  onClick={() => window.location.href = "/collections"}
>
  SHOP COLLECTION
        </button>
         <button 
  className="px-10 py-3 bg-transparent text-white font-semibold text-base tracking-wide border border-white shadow-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 active:scale-95"
  onClick={() => window.location.href = "/contact"}
>
  LOOKBOOK
        </button>
        </div>
      </div>

      {/* Bottom Gradient with Sharp Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-8 border border-white rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default MenHeroSection;