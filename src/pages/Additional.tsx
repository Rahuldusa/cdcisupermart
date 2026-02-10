import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Sparkles, Star, CheckCircle, Heart, Shield, Truck, Award } from "lucide-react";

export const Additional = () => {
  const categories = [
    { 
      name: "Blankets", 
      image: "/images/additional/blankets.jpg",
      description: "Ultra-soft warmth for cozy nights",
      color: "from-blue-500 to-purple-600",
      items: ["Winter Wool", "Fleece", "Weighted", "Electric"]
    },
    { 
      name: "Bedsheets", 
      image: "/images/additional/bedsheets.jpg",
      description: "Luxurious comfort for perfect sleep",
      color: "from-emerald-500 to-teal-600",
      items: ["Cotton", "Silk", "Linen", "Sateen"]
    },
    { 
      name: "Cushions & Sofa Covers", 
      image: "/images/additional/cushions.jpg",
      description: "Transform your living space instantly",
      color: "from-orange-500 to-red-500",
      items: ["Decorative", "Memory Foam", "Waterproof", "Custom Fit"]
    },
    { 
      name: "Pillows", 
      image: "/images/additional/pillows.jpg",
      description: "Support and comfort combined",
      color: "from-purple-500 to-pink-600",
      items: ["Orthopedic", "Memory", "Feather", "Cooling"]
    },
    { 
      name: "Doormats", 
      image: "/images/additional/doormats.jpg",
      description: "Welcome in style and cleanliness",
      color: "from-amber-600 to-orange-600",
      items: ["Coir", "Rubber", "Decorative", "Anti-fatigue"]
    },
    { 
      name: "Towels", 
      image: "/images/additional/towels.jpg",
      description: "Premium absorbency and softness",
      color: "from-cyan-500 to-blue-600",
      items: ["Bath", "Face", "Beach", "Microfiber"]
    },
    { 
      name: "Parda", 
      image: "/images/additional/parda.jpg",
      description: "Elegant privacy solutions",
      color: "from-rose-500 to-pink-600",
      items: ["Sheer", "Blackout", "Embroidered", "Thermal"]
    },
    { 
      name: "Curtains", 
      image: "/images/additional/curtains.jpg",
      description: "Complete your window treatments",
      color: "from-indigo-500 to-purple-600",
      items: ["Voile", "Velvet", "Patterned", "Room Darkening"]
    },
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Certified materials with international quality standards",
      color: "text-yellow-500 bg-yellow-50"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer Love",
      description: "Trusted by 50,000+ happy families across the region",
      color: "text-red-500 bg-red-50"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "1 Year Warranty",
      description: "Complete protection on all our premium products",
      color: "text-green-500 bg-green-50"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Free Delivery",
      description: "Quick and safe delivery right to your doorstep",
      color: "text-blue-500 bg-blue-50"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Families" },
    { number: "15+", label: "Years Experience" },
    { number: "200+", label: "Product Varieties" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      {/* 🎯 Enhanced Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-indigo-700/90 z-10"></div>
        <img
          src="/images/additional/hero-bg.jpg"
          alt="Super Family Mart Home Decor"
          className="absolute inset-0 w-full h-full object-cover transform scale-110"
        />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -100],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-30 text-center text-white px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-6xl md:text-7xl font-black tracking-tight uppercase mb-6 drop-shadow-2xl"
            >
              Super Family <span className="text-yellow-300">Mart</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-2xl md:text-3xl font-light mb-8 opacity-95 leading-relaxed"
            >
              Premium Home Essentials for <span className="font-semibold text-yellow-300">Your Loving Family</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-yellow-400 text-gray-900 font-bold text-lg rounded-full shadow-2xl hover:bg-yellow-300 hover:shadow-yellow-300/30 transition-all duration-300 flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Shop Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                View Collection
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* 📊 Stats Section */}
      <section className="bg-white py-16 shadow-lg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 font-semibold text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏡 Enhanced Categories Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Premium Collection</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover the perfect blend of comfort, style, and quality for every corner of your home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Category Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  {/* Floating Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-bold shadow-lg`}>
                    Popular
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium hover:bg-gray-200 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 bg-gradient-to-r ${category.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:from-purple-700 group-hover:to-indigo-700`}
                  >
                    Explore {category.name}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✨ Features Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Why <span className="text-purple-600">Super Family Mart</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to bringing you the best home essentials with unmatched quality and service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-black text-white mb-6"
          >
            Ready to Transform Your Home?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-purple-100 mb-8 leading-relaxed"
          >
            Join thousands of families who've elevated their living experience with Super Family Mart's premium collection
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-yellow-400 text-gray-900 font-bold text-lg rounded-full shadow-2xl hover:bg-yellow-300 hover:shadow-yellow-300/50 transition-all duration-300"
            >
              Start Shopping Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Visit Our Store
            </motion.button>
          </motion.div>
          
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              <span className="font-semibold">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Quality Guarantee</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Additional;