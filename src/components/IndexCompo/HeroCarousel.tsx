// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";

// // Import your hero images
// // import hero1 from "@/assets/fashion-hero1.jpg";
// // import hero2 from "@/assets/fashion-hero2.jpg";
// // import hero3 from "@/assets/fashion-hero3.jpg";

// const images = [];

// const HeroCarousel: React.FC = () => {
//   const [current, setCurrent] = useState(0);

//   // Automatically change images every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
//       {/* Background Carousel */}
//       <div className="absolute inset-0 w-full h-full">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={current}
//             src="https://i.pinimg.com/736x/ac/10/ac/ac10ac7d9c316ba5aac1d484a31f71e2.jpg"
//             alt={`Slide ${current + 1}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.2 }}
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//         </AnimatePresence>
//       </div>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />

//       {/* Text Content */}
//       <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
//         <motion.h1
//           key={current + "-title"}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="font-serif text-5xl md:text-7xl font-bold mb-6"
//         >
//           Fashion for the Entire Family
//         </motion.h1>
//         <motion.p
//           key={current + "-desc"}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto"
//         >
//           Discover premium collections that blend style, elegance, and comfort
//           for men, women, and kids
//         </motion.p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Button
//             size="lg"
//             className="bg-accent hover:bg-accent/90 text-primary font-semibold"
//           >
//             Explore Collections
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//           <Button
//             size="lg"
//             variant="outline"
//             className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
//           >
//             Visit Store
//           </Button>
//         </div>
//       </div>

//       {/* Dots Navigation */}
//       <div className="absolute bottom-8 flex justify-center w-full gap-3 z-20">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               current === index ? "bg-white w-6" : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroCarousel;





// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// // Hero images - replace with your actual images
// const images = [
//   "https://i.pinimg.com/736x/ac/10/ac/ac10ac7d9c316ba5aac1d484a31f71e2.jpg",
//   "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//   "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//   "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
// ];

// const heroContent = [
//   {
//     title: "Fashion for the Entire Family",
//     description: "Discover premium collections that blend style, elegance, and comfort for men, women, and kids"
//   },
//   {
//     title: "Summer Collection 2024",
//     description: "Explore our latest summer trends with fresh colors and comfortable fabrics"
//   },
//   {
//     title: "Elegant Style Redefined",
//     description: "Find the perfect outfit for every occasion with our curated collections"
//   },
//   {
//     title: "Quality Meets Fashion",
//     description: "Premium materials and exceptional craftsmanship in every piece"
//   }
// ];

// const HeroCarousel: React.FC = () => {
//   const [current, setCurrent] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + images.length) % images.length);
//   };

//   const goToSlide = (index: number) => {
//     setCurrent(index);
//   };

//   // Automatically change images every 5 seconds
//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const timer = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [isAutoPlaying]);

//   // Pause auto-play when user interacts with carousel
//   const handleUserInteraction = () => {
//     setIsAutoPlaying(false);
//     // Resume auto-play after 10 seconds of inactivity
//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   return (
//     <section 
//       className="relative h-screen flex items-center justify-center overflow-hidden mt-20"
//       onMouseEnter={() => setIsAutoPlaying(false)}
//       onMouseLeave={() => setIsAutoPlaying(true)}
//     >
//       {/* Background Carousel */}
//       <div className="absolute inset-0 w-full h-full">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={current}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.2 }}
//             className="absolute inset-0 w-full h-full"
//           >
//             <img
//               src={images[current]}
//               alt={`Slide ${current + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />

//       {/* Navigation Arrows */}
//       <button
//         onClick={() => {
//           prevSlide();
//           handleUserInteraction();
//         }}
//         className="absolute left-4 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="h-6 w-6 text-white" />
//       </button>
      
//       <button
//         onClick={() => {
//           nextSlide();
//           handleUserInteraction();
//         }}
//         className="absolute right-4 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="h-6 w-6 text-white" />
//       </button>

//       {/* Text Content */}
//       <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={current}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
//               {heroContent[current].title}
//             </h1>
//             <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
//               {heroContent[current].description}
//             </p>
//           </motion.div>
//         </AnimatePresence>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="flex flex-col sm:flex-row gap-4 justify-center"
//         >
//           <Button
//             size="lg"
//             className="bg-accent hover:bg-accent/90 text-primary font-semibold"
//           >
//             Explore Collections
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//           <Button
//             size="lg"
//             variant="outline"
//             className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
//           >
//             Visit Store
//           </Button>
//         </motion.div>
//       </div>

//       {/* Dots Navigation */}
//       <div className="absolute bottom-8 flex justify-center w-full gap-3 z-20">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               goToSlide(index);
//               handleUserInteraction();
//             }}
//             className={`w-3 h-3 rounded-full transition-all duration-300 hover:bg-white ${
//               current === index ? "bg-white w-6" : "bg-white/50"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Slide Counter */}
//       <div className="absolute top-8 right-8 z-20 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
//         {current + 1} / {images.length}
//       </div>
//     </section>
//   );
// };

// export default HeroCarousel;








import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Hero images - replace with your actual images
const images = [
  "https://i.pinimg.com/736x/ac/10/ac/ac10ac7d9c316ba5aac1d484a31f71e2.jpg",
  "https://i.pinimg.com/1200x/92/5c/2c/925c2caa59e15d65c9d0bb0b3421b574.jpg",
  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://i.pinimg.com/1200x/dd/67/90/dd6790968879a186d992b1a9afabed01.jpg"
];

const heroContent = [
  {
    title: "Fashion for the Entire Family",
    description: "Discover premium collections that blend style, elegance, and comfort for men, women, and kids"
  },
  {
    title: "Summer Collection 2024",
    description: "Explore our latest summer trends with fresh colors and comfortable fabrics"
  },
  {
    title: "Elegant Style Redefined",
    description: "Find the perfect outfit for every occasion with our curated collections"
  },
  {
    title: "Quality Meets Fashion",
    description: "Premium materials and exceptional craftsmanship in every piece"
  }
];

const HeroCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  // Automatically change images every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  // Pause auto-play when user interacts with carousel
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden mt-20"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={images[current]}
              alt={`Slide ${current + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          prevSlide();
          handleUserInteraction();
        }}
        className="absolute left-4 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button
        onClick={() => {
          nextSlide();
          handleUserInteraction();
        }}
        className="absolute right-4 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
              {heroContent[current].title}
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {heroContent[current].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
         
          <Button
  size="lg"
  className="bg-accent hover:bg-accent/90 text-primary font-semibold"
  onClick={() => window.location.href = "/collections"}
>
  Explore Collections
  <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        
    
        <Button
  size="lg"
  variant="outline"
  className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
  onClick={() => window.open("https://www.google.com/maps?ll=25.553318,81.544762&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=8180577435096872717", "_blank")}
>
  Visit Store
      </Button>
        </motion.div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 flex justify-center w-full gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToSlide(index);
              handleUserInteraction();
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:bg-white ${
              current === index ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;