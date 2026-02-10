// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Tag, Gift, Percent, ShoppingBag } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";


// const OffersPage: React.FC = () => {
//   const offers = [
//     {
//       icon: Percent,
//       title: "Mega Discount",
//       desc: "Get up to 50% OFF on top trending products.",
//       bg: "from-pink-500 to-red-500",
//     },
//     {
//       icon: Gift,
//       title: "Buy 1 Get 1 Free",
//       desc: "Applicable on selected fashion & beauty items.",
//       bg: "from-purple-500 to-indigo-500",
//     },
//     {
//       icon: ShoppingBag,
//       title: "Festive Deal",
//       desc: "Extra ₹500 OFF on orders above ₹2999.",
//       bg: "from-orange-500 to-yellow-500",
//     },
//     {
//       icon: Tag,
//       title: "Special Coupon",
//       desc: "Use code SAVE20 & get instant 20% discount.",
//       bg: "from-green-500 to-emerald-500",
//     },
//   ];

//   return (
//     <div className="w-full min-h-screen bg-gray-50">
//          {/* ✅ Navbar */}
//       <Navbar />
//       {/* ----------------------------------------------------
//         HERO SECTION
//       ------------------------------------------------------ */}
//       <section className="relative w-full h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        
//         {/* Overlay shape */}
//         <div className="absolute inset-0 bg-black/20"></div>

//         {/* Hero Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           className="relative text-center px-4"
//         >
//           <h1 className="text-5xl font-extrabold drop-shadow-lg">
//             Unbeatable Offers Just For You!
//           </h1>
//           <p className="text-xl mt-4 opacity-90">
//             Shop More. Save More. Grab the biggest deals of the season.
//           </p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-6 px-8 py-3 bg-white text-blue-700 font-bold rounded-full shadow-md hover:bg-gray-200 transition"
//           >
//             Shop Now
//           </motion.button>
//         </motion.div>
//       </section>

//       {/* ----------------------------------------------------
//         OFFERS GRID SECTION
//       ------------------------------------------------------ */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
//           Today’s Special Deals
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {offers.map((offer, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               className={`p-6 rounded-3xl shadow-xl text-white bg-gradient-to-br ${offer.bg}`}
//             >
//               <offer.icon className="w-14 h-14 mb-4" />
//               <h3 className="text-xl font-bold">{offer.title}</h3>
//               <p className="mt-2 text-sm opacity-90">{offer.desc}</p>

//               <button className="mt-4 text-sm bg-white text-gray-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-gray-100">
//                 Grab Offer
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ----------------------------------------------------
//         FOOTER BANNER SECTION
//       ------------------------------------------------------ */}
//       <section className="w-full py-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white text-center">
//         <h2 className="text-3xl font-bold">Last Day – Hurry Up!</h2>
//         <p className="mt-2 text-lg">Exclusive online offers ending tonight.</p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           className="mt-6 px-10 py-3 bg-white text-indigo-700 font-bold rounded-full shadow-md hover:bg-gray-200"
//         >
//           Explore All Deals
//         </motion.button>
//       </section>
//        {/* ✅ Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default OffersPage;






// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Tag, Gift, Percent, ShoppingBag } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import OffersHero from "@/components/OffersCompo/OffersHero";
// import Features from "@/components/OffersCompo/Features";


// const OffersPage: React.FC = () => {
//   const offers = [
//     {
//       icon: Percent,
//       title: "Mega Discount",
//       desc: "Get up to 50% OFF on top trending products.",
//       bg: "from-pink-500 to-red-500",
//     },
//     {
//       icon: Gift,
//       title: "Buy 1 Get 1 Free",
//       desc: "Applicable on selected fashion & beauty items.",
//       bg: "from-purple-500 to-indigo-500",
//     },
//     {
//       icon: ShoppingBag,
//       title: "Festive Deal",
//       desc: "Extra ₹500 OFF on orders above ₹2999.",
//       bg: "from-orange-500 to-yellow-500",
//     },
//     {
//       icon: Tag,
//       title: "Special Coupon",
//       desc: "Use code SAVE20 & get instant 20% discount.",
//       bg: "from-green-500 to-emerald-500",
//     },
//   ];

//   return (
//     <div className="w-full min-h-screen bg-gray-50">
//          {/* ✅ Navbar */}
//       <Navbar />
    

//       <OffersHero />

     
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
//           Today’s Special Deals
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {offers.map((offer, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               className={`p-6 rounded-3xl shadow-xl text-white bg-gradient-to-br ${offer.bg}`}
//             >
//               <offer.icon className="w-14 h-14 mb-4" />
//               <h3 className="text-xl font-bold">{offer.title}</h3>
//               <p className="mt-2 text-sm opacity-90">{offer.desc}</p>

//               <button className="mt-4 text-sm bg-white text-gray-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-gray-100">
//                 Grab Offer
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* <Features /> */}

      
//       <section className="w-full py-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white text-center">
//         <h2 className="text-3xl font-bold">Final Hours of the Grand Sale!</h2>
//        <p className="mt-2 text-lg">Get your favorite products at never-before prices.</p>

//         <motion.button
//   whileHover={{ scale: 1.05 }}
//   className="mt-6 px-10 py-3 bg-white text-indigo-700 font-bold rounded-full shadow-md hover:bg-gray-200"
//   onClick={() =>
//     window.open(
//       "https://www.google.com/maps/place/Super+Family+Mart/@25.5500252,81.5445692,17z/data=!3m1!4b1!4m6!3m5!1s0x399ad781594c3def:0x65e91f8e445b1b85!8m2!3d25.5500252!4d81.5445692!16s%2Fg%2F11h2cpbgj6?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
//       "_blank"
//     )
//   }
// >
//   Visit Store
//         </motion.button>

//       </section>

//        {/* ✅ Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default OffersPage;






"use client";
import React from "react";
import { motion } from "framer-motion";
import { Tag, Gift, Percent, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OffersHero from "@/components/OffersCompo/OffersHero";



const OffersPage: React.FC = () => {
 const offers = [
  {
    icon: Percent,
      title: "7th Anniversary Celebration Sale",
  
    bg: "from-pink-100 to-red-200",
  },
  {
    icon: Gift,
    title: "Buy 1 Get 1 Free",
 
    bg: "from-purple-100 to-indigo-200",
  },
  {
    icon: ShoppingBag,
    title: "Discount 10% to 50%",
  
    bg: "from-orange-100 to-yellow-200",
  },
  {
    icon: Tag,
     title: "Sales start from 20 dec to 05 jan 2026",
  
    bg: "from-green-100 to-emerald-200",
  },
];


  return (
    <div className="w-full min-h-screen bg-gray-50">
         {/* ✅ Navbar */}
      <Navbar />
    

      <OffersHero />

    
      <section className="max-w-7xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
    Today’s Special Deals
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {offers.map((offer, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        className={`p-6 rounded-3xl shadow-lg text-gray-900 bg-gradient-to-br ${offer.bg}`}
      >
        <offer.icon className="w-14 h-14 mb-4" />
        <h3 className="text-xl font-bold">{offer.title}</h3>
        

        <button className="mt-4 text-sm bg-gray-900 text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-black">
         Visit Store to Grab Offer
        </button>
      </motion.div>
    ))}
  </div>
    </section>

      <section
  className="w-full py-16 bg-center bg-cover bg-no-repeat text-white text-center relative"
  style={{
    backgroundImage:
      "url('https://i.pinimg.com/1200x/bb/13/0f/bb130f2f6d1e32df9dff86cc12e20f8b.jpg')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 px-6">
    <h2 className="text-3xl font-bold">Final Hours of the Grand Sale!</h2>
    <p className="mt-2 text-lg">
      Get your favorite products at never-before prices.
    </p>

    <motion.button
      whileHover={{ scale: 1.05 }}
      className="mt-6 px-10 py-3 bg-white text-indigo-700 font-bold rounded-full shadow-md hover:bg-gray-200"
      onClick={() =>
        window.open(
          "https://www.google.com/maps/place/Super+Family+Mart/@25.5500252,81.5445692,17z/data=!3m1!4b1!4m6!3m5!1s0x399ad781594c3def:0x65e91f8e445b1b85!8m2!3d25.5500252!4d81.5445692!16s%2Fg%2F11h2cpbgj6?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
          "_blank"
        )
      }
    >
      Visit Store
    </motion.button>
  </div>
    </section>


       {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default OffersPage;
