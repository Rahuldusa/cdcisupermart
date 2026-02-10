// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Navbar from "@/components/Navbar"; // ✅ Adjust import path as needed
// import Footer from "@/components/Footer"; // ✅ Adjust import path as needed

// const pillows = [
//   {
//     id: 1,
//     name: "Memory Foam Pillow",
//     description:
//       "Experience superior neck and head support with this soft, breathable memory foam pillow — perfect for restful sleep.",
//     image:
//       "https://images.unsplash.com/photo-1618220179428-22790b1f4a8f?auto=format&fit=crop&w=900&q=80",
//     price: "₹1,499",
//   },
//   {
//     id: 2,
//     name: "Microfiber Pillow Set",
//     description:
//       "Set of two ultra-soft microfiber pillows that provide comfort and bounce — ideal for all sleeping positions.",
//     image:
//       "https://images.unsplash.com/photo-1601972599720-b7e03e02c37c?auto=format&fit=crop&w=900&q=80",
//     price: "₹1,099",
//   },
//   {
//     id: 3,
//     name: "Orthopedic Pillow",
//     description:
//       "Designed with ergonomic support for the neck and spine — recommended for pain relief and better posture.",
//     image:
//       "https://images.unsplash.com/photo-1595526114035-0d45ed16d3f0?auto=format&fit=crop&w=900&q=80",
//     price: "₹1,899",
//   },
//   {
//     id: 4,
//     name: "Decorative Throw Pillow",
//     description:
//       "Stylish decorative throw pillow with removable cover — adds elegance and comfort to your living room.",
//     image:
//       "https://images.unsplash.com/photo-1595526114034-7dca1c4a0f37?auto=format&fit=crop&w=900&q=80",
//     price: "₹699",
//   },
// ];

// const PillowCollectionPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white text-gray-800">
//            {/* ✅ Navbar */}
//       <Navbar /> 

//       {/* Hero Section */}
//       <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1601972733360-89e8dcfaef33?auto=format&fit=crop&w=1920&q=80"
//           alt="Luxury Pillows"
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
//             Premium Pillow Collection
//           </motion.h1>
//           <motion.p
//             className="text-lg mb-8"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Discover comfort like never before — soft, supportive, and stylish pillows that redefine your sleep experience.
//           </motion.p>
//           <Button className="bg-white text-black hover:bg-gray-200 transition-all font-semibold px-8 py-3 rounded-full">
//             Shop Now
//           </Button>
//         </div>
//       </section>

//       {/* Product Section */}
//       <section className="container mx-auto px-6 py-20">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4">Trending Pillows</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Explore our exclusive range of pillows — from luxury memory foam to elegant decorative cushions designed for ultimate relaxation.
//           </p>
//         </div>

//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {pillows.map((pillow) => (
//             <motion.div
//               key={pillow.id}
//               className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
//               whileHover={{ scale: 1.03 }}
//             >
//               <img
//                 src={pillow.image}
//                 alt={pillow.name}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-5">
//                 <h3 className="text-lg font-semibold mb-2">{pillow.name}</h3>
//                 <p className="text-gray-600 text-sm mb-4">{pillow.description}</p>
//                 <div className="flex items-center justify-between">
//                   <span className="text-lg font-bold text-gray-800">
//                     {pillow.price}
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

//          {/* ✅ Footer */}
//       <Footer />

//     </div>
//   );
// };

// export default PillowCollectionPage;







import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pillows = [
  {
    id: 1,
    name: "Memory Foam Pillow",
    description: "Experience superior neck and head support with this soft, breathable memory foam pillow — perfect for restful sleep.",
    image: "https://i.pinimg.com/1200x/e9/b0/bf/e9b0bf9da1bb634d05f9cd1e075b5ddc.jpg",
    badge: "Premium"
  },
  {
    id: 2,
    name: "Microfiber Pillow Set",
    description: "Set of two ultra-soft microfiber pillows that provide comfort and bounce — ideal for all sleeping positions.",
    image: "https://i.pinimg.com/1200x/dd/3f/29/dd3f295d803e72ccdfb4c08d4fbc467c.jpg",
    badge: "Set of 2"
  },
  {
    id: 3,
    name: "Orthopedic Pillow",
    description: "Designed with ergonomic support for the neck and spine — recommended for pain relief and better posture.",
    image: "https://i.pinimg.com/1200x/c7/dc/01/c7dc019a79ace4dcb1c34f895b9f395c.jpg",
    badge: "Ergonomic"
  },
  {
    id: 4,
    name: "Decorative Throw Pillow",
    description: "Stylish decorative throw pillow with removable cover — adds elegance and comfort to your living room.",
    image: "https://i.pinimg.com/1200x/bb/a2/bd/bba2bdadedc627094b161c0168963260.jpg",
    badge: "Decorative"
  },
];

const PillowCollectionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* ✅ Navbar */}
      <Navbar /> 

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/a9/a3/4e/a9a34e9bb6a459edb1a023fa063a64b1.jpg"
          alt="Luxury Pillows"
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
            Premium Pillow Collection
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover comfort like never before — soft, supportive, and stylish pillows that redefine your sleep experience.
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
            Trending Pillows
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our exclusive range of pillows — from luxury memory foam to elegant decorative cushions designed for ultimate relaxation.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillows.map((pillow, index) => (
            <motion.div
              key={pillow.id}
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
                  {pillow.badge}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pillow.image}
                  alt={pillow.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-amber-700 transition-colors">
                  {pillow.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {pillow.description}
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

export default PillowCollectionPage;