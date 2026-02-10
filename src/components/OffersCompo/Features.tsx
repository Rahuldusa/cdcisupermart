"use client";

import React from "react";
import { motion } from "framer-motion";

const Features: React.FC = () => {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=500&q=80",
      title: "Flat 50% OFF",
      text: "On all fashion wear",
    },
    {
      img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=500&q=80",
      title: "Buy 1 Get 1 Free",
      text: "On home essentials",
    },
    {
      img: "https://images.unsplash.com/photo-1556742521-9713bf272f8b?auto=format&fit=crop&w=500&q=80",
      title: "Mega Combo Deals",
      text: "Festival special savings",
    },
    {
      img: "https://images.unsplash.com/photo-1561715276-a2d09c7c972b?auto=format&fit=crop&w=500&q=80",
      title: "Clearance Sale",
      text: "Last day to grab offers",
    },
  ];

  return (
    <div className="w-full py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Special Offers For You
      </h2>

      {/* AUTO-SCROLL CONTAINER */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-6"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* DOUBLE LOOP FOR SEAMLESS SCROLL */}
          {[...cards, ...cards].map((card, idx) => (
            <div
              key={idx}
              className="min-w-[250px] bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
            >
              <img src={card.img} className="w-full h-40 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{card.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
