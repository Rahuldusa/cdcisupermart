// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const OffersHero: React.FC = () => {
//   return (
//     <section
//       className="relative w-full h-[70vh] flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage:
//           "url('https://i.pinimg.com/736x/85/c1/3e/85c13e77741b870377c289396b6ff72b.jpg')",
//       }}
//     >
    

//       {/* Hero Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9 }}
//         className="relative text-center px-4"
//       >
//         <h1 className="text-5xl font-extrabold drop-shadow-xl text-white">
//           Unbeatable Offers Just For You!
//         </h1>

//         <p className="text-xl mt-4 text-white opacity-90 font-medium">
//           Shop More. Save More. Grab the biggest deals of the season.
//         </p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           className="mt-6 px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition"
//         >
//           Shop Now
//         </motion.button>
//       </motion.div>
//     </section>
//   );
// };

// export default OffersHero;






// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const OffersHero: React.FC = () => {
//   const images = [
//     "https://i.pinimg.com/736x/85/c1/3e/85c13e77741b870377c289396b6ff72b.jpg",
//     "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1300&q=80",
//     "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1300&q=80",
//   ];

//   const [index, setIndex] = useState(0);

//   // Auto-slide every 4 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [images.length]);

//   return (
//     <section className="relative w-full h-[70vh] overflow-hidden text-white">
//       {/* Background Carousel */}
//       <div className="absolute inset-0">
//         <AnimatePresence>
//           <motion.div
//             key={index}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//             style={{
//               backgroundImage: `url(${images[index]})`,
//             }}
//           />
//         </AnimatePresence>
//       </div>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Hero Content */}
//       <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//         >
//           <h1 className="text-5xl font-extrabold drop-shadow-2xl">
//             Unbeatable Offers Just For You!
//           </h1>

//           <p className="text-xl mt-4 opacity-90 font-medium">
//             Shop More. Save More. Grab the biggest deals of the season.
//           </p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-6 px-10 py-3 bg-blue-600 text-white font-bold rounded-full shadow-xl hover:bg-blue-700 transition"
//           >
//             Shop Now
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Dot Indicators */}
//       <div className="absolute bottom-6 w-full flex justify-center gap-3 z-20">
//         {images.map((_, i) => (
//           <div
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`w-3 h-3 rounded-full cursor-pointer transition ${
//               i === index ? "bg-white" : "bg-white/40"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OffersHero;





// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const OffersHero: React.FC = () => {
//   const images = [
//     "https://i.pinimg.com/736x/85/c1/3e/85c13e77741b870377c289396b6ff72b.jpg",
//     "https://i.pinimg.com/736x/aa/8a/90/aa8a908b2b0d8073ae409051e4a723bf.jpg",
//     "https://i.pinimg.com/736x/bf/5a/b0/bf5ab0ba3d90e1de9cc7d11601d754f6.jpg",
//   ];

//   const [index, setIndex] = useState(0);

//   const nextSlide = () => {
//     setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   // Auto-slide every 4 seconds
//   useEffect(() => {
//     const timer = setInterval(nextSlide, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full h-[70vh] overflow-hidden text-white">
//       {/* Background Carousel */}
//       <div className="absolute inset-0">
//         <AnimatePresence>
//           <motion.div
//             key={index}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//             style={{
//               backgroundImage: `url(${images[index]})`,
//             }}
//           />
//         </AnimatePresence>
//       </div>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Hero Content */}
//       <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//         >
//           <h1 className="text-5xl font-extrabold drop-shadow-2xl">
//             Unbeatable Offers Just For You!
//           </h1>

//           <p className="text-xl mt-4 opacity-90 font-medium">
//             Shop More. Save More. Grab the biggest deals of the season.
//           </p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-6 px-10 py-3 bg-blue-600 text-white font-bold rounded-full shadow-xl hover:bg-blue-700 transition"
//           >
//             Shop Now
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Left Arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-md transition text-2xl"
//       >
//         ‹
//       </button>

//       {/* Right Arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-md transition text-2xl"
//       >
//         ›
//       </button>

//       {/* Dot Indicators */}
//       <div className="absolute bottom-6 w-full flex justify-center gap-3 z-20">
//         {images.map((_, i) => (
//           <div
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`w-3 h-3 rounded-full cursor-pointer transition ${
//               i === index ? "bg-white" : "bg-white/40"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OffersHero;






// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const OffersHero: React.FC = () => {
//   const images = [
//     "https://i.pinimg.com/736x/85/c1/3e/85c13e77741b870377c289396b6ff72b.jpg",
//     "https://i.pinimg.com/736x/7a/e7/07/7ae70700807169d31e3c5d685eaca72f.jpg",
//     "https://i.pinimg.com/736x/8a/b7/68/8ab7689c84e176931356fe5f758b7bee.jpg",
//     "https://i.pinimg.com/1200x/d7/74/1c/d7741c5294cbcb50f8c137fbd47de8c9.jpg",
//   ];

//   const [index, setIndex] = useState(0);

//   const nextSlide = () => {
//     setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full h-[70vh] overflow-hidden text-white">

//       {/* Background Carousel */}
//       <div className="absolute inset-0">
//         <AnimatePresence>
//           <motion.div
//             key={index}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//             style={{ backgroundImage: `url(${images[index]})` }}
//           />
//         </AnimatePresence>
//       </div>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* HERO CONTENT */}
//       <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//         >
//           <h1 className="text-5xl font-extrabold drop-shadow-2xl">
//             Unbeatable Offers Just For You!
//           </h1>

//           <p className="text-xl mt-4 opacity-90 font-medium">
//             Shop More. Save More. Grab the biggest deals of the season.
//           </p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-6 px-10 py-3 bg-blue-600 text-white font-bold rounded-full shadow-xl hover:bg-blue-700 transition"
//           >
//             Shop Now
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* LEFT ARROW */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-5 top-1/2 -translate-y-1/2 z-20 
//         bg-white/30 hover:bg-white/50 text-white p-3 rounded-full 
//         backdrop-blur-md transition text-3xl font-bold"
//       >
//         ‹
//       </button>

//       {/* RIGHT ARROW */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-5 top-1/2 -translate-y-1/2 z-20 
//         bg-white/30 hover:bg-white/50 text-white p-3 rounded-full 
//         backdrop-blur-md transition text-3xl font-bold"
//       >
//         ›
//       </button>

//     </section>
//   );
// };

// export default OffersHero;








"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import images from assets folder
import image1 from "../../assets/banner7.png";
import image2 from "../../assets/banner8.jpeg";
// import image3 from "../../assets/banner3.png";
// import image4 from "../../assets/banner4.png";

const OffersHero: React.FC = () => {
  const images = [image1, image2,  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden text-white">

      {/* Background Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${images[index]})` }} 
          />
        </AnimatePresence>
      </div>

      

     

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 
        bg-white/30 hover:bg-white/50 text-white p-3 rounded-full 
        backdrop-blur-md transition text-3xl font-bold"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 
        bg-white/30 hover:bg-white/50 text-white p-3 rounded-full 
        backdrop-blur-md transition text-3xl font-bold"
      >
        ›
      </button>

    </section>
  );
};

export default OffersHero;