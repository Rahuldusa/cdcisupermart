// import React from "react";
// import { motion } from "framer-motion";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const products = [
//   {
//     id: 1,
//     name: "Luxury Velvet Curtains",
//     price: "₹1,299",
//     image:
//       "https://i.pinimg.com/736x/b0/53/f9/b053f967f3763ed0476e58bfa5aab6a3.jpg",
//   },
//   {
//     id: 2,
//     name: "Floral Print Curtains",
//     price: "₹999",
//     image:
//       "https://i.pinimg.com/736x/6f/03/9c/6f039c40163e40701ad030aa6f9f29ee.jpg",
//   },
//   {
//     id: 3,
//     name: "Sheer Transparent Curtains",
//     price: "₹799",
//     image:
//       "https://i.pinimg.com/736x/7c/1f/09/7c1f09e9c313f1dd8b6622c0e09eea6d.jpg",
//   },
//   {
//     id: 4,
//     name: "Blackout Curtains",
//     price: "₹1,499",
//     image:
//       "https://i.pinimg.com/736x/f1/92/7f/f1927ff2b6b182af3df9f3ccde2d9e1d.jpg",
//   },
//   {
//     id: 5,
//     name: "Printed Cotton Curtains",
//     price: "₹1,199",
//     image:
//       "https://i.pinimg.com/736x/15/b7/54/15b754c1969dc0159bbf32d7c57a4cf1.jpg",
//   },
//   {
//     id: 6,
//     name: "Modern Pattern Curtains",
//     price: "₹1,099",
//     image:
//       "https://i.pinimg.com/736x/7e/ef/6a/7eef6a0180b56cc68a44c2f7e4bb61f3.jpg",
//   },
// ];

// const CurtainsPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800">
//       {/* ✅ Navbar */}
//       <Navbar />

//       {/* 🌟 Hero Section */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//         <img
//           src="https://i.pinimg.com/736x/7b/bb/26/7bbb2698d8ab2f408f73ed7b9e7eb1a0.jpg"
//           alt="Curtains Hero"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40" />
//         <div className="relative z-10 text-center text-white px-6">
//           <motion.h1
//             initial={{ y: -30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="text-5xl font-bold mb-4"
//           >
//             Elegant Curtains Collection
//           </motion.h1>
//           <motion.p
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-lg max-w-2xl mx-auto"
//           >
//             Discover our premium range of curtains — from modern designs to
//             timeless classics. Add elegance and comfort to your home décor.
//           </motion.p>
//         </div>
//       </section>

//       {/* 🛍️ Product Section */}
//       <section className="container mx-auto px-6 py-16">
//         <h2 className="text-3xl font-semibold text-center mb-10">
//           Explore Our Curtain Range
//         </h2>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <motion.div
//               key={product.id}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4 text-center">
//                 <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//                 <p className="text-gray-600 mb-3">{product.price}</p>
//                 <button className="px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
//                   Add to Cart
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* 🏠 Description Section */}
//       <section className="bg-white py-12">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <h3 className="text-2xl font-semibold mb-4">
//             Why Choose Our Curtains?
//           </h3>
//           <p className="text-gray-700 leading-relaxed">
//             Our curtains are crafted from high-quality fabrics with beautiful
//             finishes that ensure long-lasting durability. Whether you prefer
//             blackout, sheer, or patterned designs — we’ve got something to match
//             every taste and interior style. Transform your living spaces with
//             elegance and comfort.
//           </p>
//         </div>
//       </section>

//       {/* ✅ Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default CurtainsPage;







import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    id: 1,
    name: "Luxury Velvet Curtains",
    description: "Premium velvet curtains with elegant texture and rich colors for a luxurious look.",
    image: "https://i.pinimg.com/1200x/d4/9f/32/d49f325497f8b065776f28fa08677cbe.jpg",
    badge: "Premium"
  },
  {
    id: 2,
    name: "Floral Print Curtains",
    description: "Beautiful floral patterns that bring nature's charm and vibrant colors to your space.",
    image: "https://i.pinimg.com/1200x/6f/25/99/6f259917d47444f96b642a0785f46c3f.jpg",
    badge: "Floral"
  },
  {
    id: 3,
    name: "Sheer Transparent Curtains",
    description: "Light and airy sheer curtains that filter natural light while maintaining privacy.",
    image: "https://i.pinimg.com/736x/21/08/7c/21087c56a9a8f34cd932a6749f6fcb32.jpg",
    badge: "Sheer"
  },
  {
    id: 4,
    name: "Blackout Curtains",
    description: "Complete light-blocking curtains for better sleep and energy efficiency.",
    image: "https://i.pinimg.com/736x/cb/22/2e/cb222eb48e2309fc213ad6c10ef9a2c3.jpg",
    badge: "Blackout"
  },
  {
    id: 5,
    name: "Printed Cotton Curtains",
    description: "Soft cotton curtains with modern prints, perfect for contemporary interiors.",
    image: "https://i.pinimg.com/736x/15/9d/46/159d4687dece63ffe59446299ba80111.jpg",
    badge: "Cotton"
  },
  {
    id: 6,
    name: "Modern Pattern Curtains",
    description: "Contemporary geometric patterns that add sophistication to any room.",
    image: "https://i.pinimg.com/1200x/ac/04/44/ac0444e32309821f1d19c2dc5d312312.jpg",
    badge: "Modern"
  },
];

const CurtainsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* ✅ Navbar */}
      <Navbar />

      {/* 🌟 Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/17/0d/51/170d512dd8753cfa24df0c090ca7e0bf.jpg"
          alt="Curtains Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-5xl font-bold mb-4">
            Elegant Curtains Collection
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Discover our premium range of curtains — from modern designs to
            timeless classics. Add elegance and comfort to your home décor.
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

      {/* 🛍️ Product Section */}
      <section className="container mx-auto px-6 py-16 flex-grow">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-gray-800 to-amber-600 bg-clip-text text-transparent">
            Explore Our Curtain Range
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover beautiful curtains that transform your living spaces with style and elegance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
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
                  {product.badge}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-amber-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {product.description}
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

      {/* 🏠 Description Section */}
      {/* <section className="bg-amber-50 py-16 border-t border-amber-100">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto px-6 text-center"
        >
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-amber-600 bg-clip-text text-transparent">
            Why Choose Our Curtains?
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
            Our curtains are crafted from high-quality fabrics with beautiful
            finishes that ensure long-lasting durability. Whether you prefer
            blackout, sheer, or patterned designs — we've got something to match
            every taste and interior style. Transform your living spaces with
            elegance and comfort.
          </p>
        </motion.div>
      </section> */}

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default CurtainsPage;