// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Navbar from "@/components/Navbar"; // ✅ Adjust import path as needed
// import Footer from "@/components/Footer"; // ✅ Adjust import path as needed

// const products = [
//   {
//     id: 1,
//     name: "Velvet Cushion Cover Set",
//     description: "Soft premium velvet fabric with zipper closure — perfect for adding luxury to your living space.",
//     image: "https://images.unsplash.com/photo-1595526114035-0d45ed16d3f0?auto=format&fit=crop&w=800&q=80",
//     price: "₹699",
//   },
//   {
//     id: 2,
//     name: "Geometric Sofa Cover",
//     description: "Stretchable sofa cover with geometric design — protects your furniture while adding elegance.",
//     image: "https://images.unsplash.com/photo-1622057494989-6b1a91b95a67?auto=format&fit=crop&w=800&q=80",
//     price: "₹1,299",
//   },
//   {
//     id: 3,
//     name: "Cotton Cushion Set",
//     description: "Breathable cotton cushion covers in assorted colors — great comfort and durability.",
//     image: "https://images.unsplash.com/photo-1601972599720-b7e03e02c37c?auto=format&fit=crop&w=800&q=80",
//     price: "₹499",
//   },
//   {
//     id: 4,
//     name: "Floral Sofa Protector",
//     description: "Water-resistant floral pattern sofa cover — easy to clean and elegant for modern homes.",
//     image: "https://images.unsplash.com/photo-1601972747051-6ad5e19a8c68?auto=format&fit=crop&w=800&q=80",
//     price: "₹1,099",
//   },
// ];

// const CushionsSofaCoverPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white text-gray-800">
//          {/* ✅ Navbar */}
//       <Navbar /> 

//       {/* Hero Section */}
//       <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1601972733360-89e8dcfaef33?auto=format&fit=crop&w=1920&q=80"
//           alt="Cushions and Sofa Covers"
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
//             Cushions & Sofa Covers
//           </motion.h1>
//           <motion.p
//             className="text-lg mb-8"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Discover elegant, soft, and stylish cushion covers and sofa protectors that bring comfort and charm to your home decor.
//           </motion.p>
//           <Button className="bg-white text-black hover:bg-gray-200 transition-all font-semibold px-8 py-3 rounded-full">
//             Shop Now
//           </Button>
//         </div>
//       </section>

//       {/* Product Section */}
//       <section className="container mx-auto px-6 py-20">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4">Trending Cushions & Sofa Covers</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Upgrade your living room style with our exclusive collection of premium cushion covers and sofa protectors.
//           </p>
//         </div>

//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {products.map((product) => (
//             <motion.div
//               key={product.id}
//               className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
//               whileHover={{ scale: 1.03 }}
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-5">
//                 <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//                 <p className="text-gray-600 text-sm mb-4">{product.description}</p>
//                 <div className="flex items-center justify-between">
//                   <span className="text-lg font-bold text-gray-800">{product.price}</span>
//                   <Button className="bg-black text-white hover:bg-gray-800 px-5 py-2 rounded-full">
//                     Add to Cart
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ✅ Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default CushionsSofaCoverPage;




import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    id: 1,
    name: "Velvet Cushion Cover Set",
    description: "Soft premium velvet fabric with zipper closure — perfect for adding luxury to your living space.",
    image: "https://i.pinimg.com/1200x/8e/fc/5c/8efc5c049e8b49789df93339708054a4.jpg",
    badge: "Premium"
  },
  {
    id: 2,
    name: "Geometric Sofa Cover",
    description: "Stretchable sofa cover with geometric design — protects your furniture while adding elegance.",
    image: "https://i.pinimg.com/1200x/44/75/0c/44750c2dc40cd4b484f39fc5219305bb.jpg",
    badge: "Modern"
  },
  {
    id: 3,
    name: "Cotton Cushion Set",
    description: "Breathable cotton cushion covers in assorted colors — great comfort and durability.",
    image: "https://i.pinimg.com/736x/49/37/64/4937644f20fe545dfa59d3ea0be4264c.jpg",
    badge: "Cotton"
  },
  {
    id: 4,
    name: "Floral Sofa Protector",
    description: "Water-resistant floral pattern sofa cover — easy to clean and elegant for modern homes.",
    image: "https://i.pinimg.com/1200x/84/ff/9b/84ff9b9a520f78b097af8ad2028b53e5.jpg",
    badge: "Floral"
  },
];

const CushionsSofaCoverPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* ✅ Navbar */}
      <Navbar /> 

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1920&q=80"
          alt="Cushions and Sofa Covers"
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
            Cushions & Sofa Covers
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover elegant, soft, and stylish cushion covers and sofa protectors that bring comfort and charm to your home decor.
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
            Trending Cushions & Sofa Covers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upgrade your living room style with our exclusive collection of premium cushion covers and sofa protectors.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default CushionsSofaCoverPage;