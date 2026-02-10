// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Navbar from "@/components/Navbar"; // ✅ Adjust import path as needed
// import Footer from "@/components/Footer"; // ✅ Adjust import path as needed

// const towels = [
//   {
//     id: 1,
//     name: "Luxury Cotton Bath Towel",
//     description:
//       "Soft and highly absorbent 100% cotton bath towel that pampers your skin after every shower.",
//     image:
//       "https://images.unsplash.com/photo-1620475014039-d1b1b2dfc9a5?auto=format&fit=crop&w=900&q=80",
//     price: "₹899",
//   },
//   {
//     id: 2,
//     name: "Quick-Dry Microfiber Towel",
//     description:
//       "Lightweight, ultra-soft towel that dries fast — perfect for gym, travel, and everyday use.",
//     image:
//       "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=900&q=80",
//     price: "₹749",
//   },
//   {
//     id: 3,
//     name: "Organic Bamboo Towel",
//     description:
//       "Eco-friendly bamboo towel that’s hypoallergenic, gentle on skin, and naturally antibacterial.",
//     image:
//       "https://images.unsplash.com/photo-1603399313242-51c0b4a4ff11?auto=format&fit=crop&w=900&q=80",
//     price: "₹1,099",
//   },
//   {
//     id: 4,
//     name: "Turkish Cotton Hand Towel Set",
//     description:
//       "Luxurious Turkish cotton hand towel set that combines softness, strength, and durability.",
//     image:
//       "https://images.unsplash.com/photo-1620475014666-d7dc385a6c0b?auto=format&fit=crop&w=900&q=80",
//     price: "₹1,299",
//   },
// ];

// const TowelCollectionPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//            {/* ✅ Navbar */}
//       <Navbar /> 

//       {/* Hero Section */}
//       <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1616593986795-21c4f7b3edc5?auto=format&fit=crop&w=1920&q=80"
//           alt="Towel Collection"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative z-10 text-center text-white max-w-3xl px-6">
//           <motion.h1
//             className="text-5xl font-extrabold mb-6"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Premium Towel Collection
//           </motion.h1>
//           <motion.p
//             className="text-lg mb-8"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Discover comfort, style, and absorbency with our luxury towel range
//             made for your everyday relaxation.
//           </motion.p>
//           <Button className="bg-white text-black hover:bg-gray-200 transition-all font-semibold px-8 py-3 rounded-full">
//             Shop Now
//           </Button>
//         </div>
//       </section>

//       {/* Product Section */}
//       <section className="container mx-auto px-6 py-20">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4">Softness You’ll Love</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Wrap yourself in comfort with our luxurious towel collection — crafted from the finest materials for unmatched softness.
//           </p>
//         </div>

//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {towels.map((towel) => (
//             <motion.div
//               key={towel.id}
//               className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
//               whileHover={{ scale: 1.03 }}
//             >
//               <img
//                 src={towel.image}
//                 alt={towel.name}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold mb-2">{towel.name}</h3>
//                 <p className="text-gray-600 text-sm mb-4">{towel.description}</p>
//                 <div className="flex items-center justify-between">
//                   <span className="text-lg font-bold text-gray-800">
//                     {towel.price}
//                   </span>
//                   <Button className="bg-black text-white hover:bg-gray-800 px-5 py-2 rounded-full">
//                     Add to Cart
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//        {/* ✅ Footer */}
//       <Footer />

//     </div>
//   );
// };

// export default TowelCollectionPage;





import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const towels = [
  {
    id: 1,
    name: "Luxury Cotton Bath Towel",
    description: "Soft and highly absorbent 100% cotton bath towel that pampers your skin after every shower.",
    image: "https://i.pinimg.com/1200x/3b/66/88/3b66887913637c58fe75fed91df99dca.jpg",
    badge: "Premium"
  },
  {
    id: 2,
    name: "Quick-Dry Microfiber Towel",
    description: "Lightweight, ultra-soft towel that dries fast — perfect for gym, travel, and everyday use.",
    image: "https://i.pinimg.com/1200x/40/57/c5/4057c5a495d8ac4eb041e8ae92c92381.jpg",
    badge: "Quick-Dry"
  },
  {
    id: 3,
    name: "Organic Bamboo Towel",
    description: "Eco-friendly bamboo towel that's hypoallergenic, gentle on skin, and naturally antibacterial.",
    image: "https://i.pinimg.com/736x/10/1f/02/101f02fa4d0db1b3ab8e96b2d462a20a.jpg",
    badge: "Eco-Friendly"
  },
  {
    id: 4,
    name: "Turkish Cotton Hand Towel Set",
    description: "Luxurious Turkish cotton hand towel set that combines softness, strength, and durability.",
    image: "https://i.pinimg.com/1200x/c9/50/f6/c950f67bdccd9ed6ebbcb1169944c34f.jpg",
    badge: "Luxury"
  },
];

const TowelCollectionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* ✅ Navbar */}
      <Navbar /> 

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/04/63/a3/0463a38d8db6a9c88f9cb431d44f28f4.jpg"
          alt="Towel Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-3xl px-6"
        >
          <h1 className="text-5xl font-extrabold mb-6">
            Premium Towel Collection
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover comfort, style, and absorbency with our luxury towel range
            made for your everyday relaxation.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-[#F0E491] text-gray-900 hover:bg-amber-200 px-8 py-3 text-lg font-semibold rounded-full shadow-2xl border border-amber-300">
              Explore Collection
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Product Section */}
      <section className="container mx-auto px-6 py-20 flex-grow">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-amber-600 bg-clip-text text-transparent">
            Softness You'll Love
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wrap yourself in comfort with our luxurious towel collection — crafted from the finest materials for unmatched softness.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {towels.map((towel, index) => (
            <motion.div
              key={towel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                y: -8
              }}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-amber-100"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-[#F0E491] text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg border border-amber-200">
                  {towel.badge}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={towel.image}
                  alt={towel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-amber-700 transition-colors">
                  {towel.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {towel.description}
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* <Button className="w-full bg-[#F0E491] text-gray-900 hover:bg-amber-200 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 border border-amber-300">
                    View Details
                  </Button> */}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default TowelCollectionPage;
