// import React from "react";
// import { motion } from "framer-motion";
// import { ShoppingBag, Star } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";


// const products = [
//   {
//     id: 1,
//     name: "Premium Headphones",
//     price: "$120",
//     img: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 2,
//     name: "Sports Shoes",
//     price: "$95",
//     img: "https://images.unsplash.com/photo-1528701800489-20be0c1485d3?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 3,
//     name: "Smart Watch",
//     price: "$150",
//     img: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 4,
//     name: "Luxury Bag",
//     price: "$230",
//     img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
//   },
// ];

// const ECommerceGalleryPage: React.FC = () => {
//   return (
//     <div className="w-full min-h-screen bg-gray-50 text-gray-900">
//          {/* ✅ Navbar */}
//       <Navbar /> 

//       {/* Hero Section */}
//       <section
//         className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50" />
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative text-center text-white max-w-2xl px-6"
//         >
//           <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
//             Explore Exclusive Products
//           </h1>
//           <p className="text-lg mb-6 opacity-90">
//             Discover top‑quality products curated just for you. Shop the best collections
//             with premium designs.
//           </p>
//           <button className="px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold shadow-md hover:bg-gray-100 transition-all flex items-center gap-2 mx-auto">
//             <ShoppingBag size={20} /> Shop Now
//           </button>
//         </motion.div>
//       </section>

//       {/* Gallery Section */}
//       <section className="py-16 container mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
//           Featured Products
//         </h2>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//           {products.map((product) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.4 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition border"
//             >
//               <img
//                 src={product.img}
//                 alt={product.name}
//                 className="w-full h-52 object-cover"
//               />

//               <div className="p-4">
//                 <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//                 <p className="text-gray-600 mb-3 flex items-center gap-2">
//                   <Star size={16} className="text-yellow-400" /> 4.8 Rating
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <p className="text-xl font-bold text-blue-600">{product.price}</p>
//                   <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
//                     Add to Cart
//                   </button>
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

// export default ECommerceGalleryPage;





import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/GalleryCompo/HeroSection";
// import ProductGallery from "@/components/GalleryCompo/ProductGallery";
import VerticalVideosPage from "@/components/GalleryCompo/VerticalVideosPage";
import FashionGalleryPage from "@/components/GalleryCompo/FashionGalleryPage";
import ProductGallery from "@/components/GalleryCompo/DynamicGallery";




const ECommerceGalleryPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-900">
         {/* ✅ Navbar */}
      <Navbar /> 

       <VerticalVideosPage />

      {/* <HeroSection /> */}

      <ProductGallery />

      {/* <FashionGalleryPage /> */}

     

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default ECommerceGalleryPage;
