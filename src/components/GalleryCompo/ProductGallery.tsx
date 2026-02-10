// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Star, X } from "lucide-react";

// const products = [
//   {
//     id: 1,
//     name: "Mens Collection",
//     img: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=800&q=80",
//     gallery: [
//       "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1518449075922-9c515e3d9c59?auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
//     ],
//   },
//   {
//     id: 2,
//     name: "Kids Collection",
//     img: "https://images.unsplash.com/photo-1528701800489-20be0c1485d3?auto=format&fit=crop&w=800&q=80",
//     gallery: [
//       "https://images.unsplash.com/photo-1528701800489-20be0c1485d3?auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
//     ],
//   },
//   {
//     id: 3,
//     name: "Womens Collection",
//     img: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=80",
//     gallery: [
//       "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1524678714210-9917a6c619c0?auto=format&fit=crop&w=800&q=80",
//     ],
//   },
// //   {
// //     id: 4,
// //     name: "Luxury Bag",
// //     img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
// //     gallery: [
// //       "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
// //       "https://images.unsplash.com/photo-1590874103328-602fa827fc1c?auto=format&fit=crop&w=800&q=80",
// //       "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=80",
// //       "https://images.unsplash.com/photo-1584916201218-36c6d4f01f2a?auto=format&fit=crop&w=800&q=80",
// //     ],
// //   },
// ];

// export default function ProductGallery() {
//   const [selected, setSelected] = useState(null);

//   return (
//     <section className="py-16 container mx-auto px-6">
//       <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
//         Collection Gallery
//       </h2>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//         {products.map((product) => (
//           <motion.div
//             key={product.id}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4 }}
//             viewport={{ once: true }}
//             onClick={() => setSelected(product)}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition border cursor-pointer"
//           >
//             <img
//               src={product.img}
//               alt={product.name}
//               className="w-full h-52 object-cover"
//             />

//             <div className="p-4">
//               <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//               <p className="text-gray-600 mb-3 flex items-center gap-2">
//                 <Star size={16} className="text-yellow-400" /> 4.8 Rating
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Popup Modal */}
//       {selected && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl p-6 relative animate-fadeIn">
//             <button
//               className="absolute top-3 right-3 text-gray-600 hover:text-black"
//               onClick={() => setSelected(null)}
//             >
//               <X size={24} />
//             </button>

//             <h2 className="text-2xl font-bold mb-4">{selected.name}</h2>

//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//               {selected.gallery.map((img, idx) => (
//                 <img
//                   key={idx}
//                   src={img}
//                   className="w-full h-32 sm:h-40 object-cover rounded-xl shadow"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }








// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Star, X } from "lucide-react";

// // Import all images from your assets folder
// import mensMain from "../../assets/Men/Suit1.jpeg";
// import mens1 from "../../assets/Men/Kurtapajama1.jpeg";
// import mens2 from "../../assets/Men/shirt2.jpeg";
// import mens3 from "../../assets/Men/Kurtapajama3.jpeg";
// import mens4 from "../../assets/Men/Suits12.jpeg";

// import kidsMain from "../../assets/Kids/pantset1.jpeg";
// import kids1 from "../../assets/Kids/shirt1.jpeg";
// import kids2 from "../../assets/Kids/pantset13.jpeg";
// import kids3 from "../../assets/Kids/girljeans1.jpeg";
// import kids4 from "../../assets/Kids/girljeans3.jpeg";

// import womensMain from "../../assets/Women/coordset.jpeg";
// import womens1 from "../../assets/Women/croptop2.jpeg";
// import womens2 from "../../assets/Women/gown1.jpeg";
// import womens3 from "../../assets/Women/lehanga12.jpeg";
// import womens4 from "../../assets/Women/western1.jpeg";

// const products = [
//   {
//     id: 1,
//     name: "Mens Collection",
//     img: mensMain,
//     gallery: [mensMain, mens1, mens2, mens3, mens4],
//   },
//   {
//     id: 2,
//     name: "Kids Collection",
//     img: kidsMain,
//     gallery: [kidsMain, kids1, kids2, kids3, kids4],
//   },
//   {
//     id: 3,
//     name: "Womens Collection",
//     img: womensMain,
//     gallery: [womensMain, womens1, womens2, womens3, womens4],
//   },
// ];

// export default function ProductGallery() {
//   const [selected, setSelected] = useState(null);

//   return (
//     <section className="py-16 container mx-auto px-6">
//       <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
//         Collection Gallery
//       </h2>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//         {products.map((product) => (
//           <motion.div
//             key={product.id}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4 }}
//             viewport={{ once: true }}
//             onClick={() => setSelected(product)}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition border cursor-pointer"
//           >
//             <img
//               src={product.img}
//               alt={product.name}
//               className="w-full h-52 object-cover"
//             />

//             <div className="p-4">
//               <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//               <p className="text-gray-600 mb-3 flex items-center gap-2">
//                 <Star size={16} className="text-yellow-400" /> 4.8 Rating
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Popup Modal */}
//       {selected && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl p-6 relative animate-fadeIn">
//             <button
//               className="absolute top-3 right-3 text-gray-600 hover:text-black"
//               onClick={() => setSelected(null)}
//             >
//               <X size={24} />
//             </button>

//             <h2 className="text-2xl font-bold mb-4">{selected.name}</h2>

//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//               {selected.gallery.map((img, idx) => (
//                 <img
//                   key={idx}
//                   src={img}
//                   alt={`${selected.name} ${idx + 1}`}
//                   className="w-full h-32 sm:h-40 object-cover rounded-xl shadow"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }






// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Star, X } from "lucide-react";

// // Import all images from your assets folder
// import mensMain from "../../assets/Men/Suit1.jpeg";
// import mens1 from "../../assets/Men/Kurtapajama1.jpeg";
// import mens2 from "../../assets/Men/shirt2.jpeg";
// import mens3 from "../../assets/Men/Kurtapajama3.jpeg";
// import mens4 from "../../assets/Men/Suits12.jpeg";

// import kidsMain from "../../assets/Kids/pantset1.jpeg";
// import kids1 from "../../assets/Kids/shirt1.jpeg";
// import kids2 from "../../assets/Kids/pantset13.jpeg";
// import kids3 from "../../assets/Kids/girljeans1.jpeg";
// import kids4 from "../../assets/Kids/girljeans3.jpeg";

// import womensMain from "../../assets/Women/coordset.jpeg";
// import womens1 from "../../assets/Women/croptop2.jpeg";
// import womens2 from "../../assets/Women/gown1.jpeg";
// import womens3 from "../../assets/Women/lehanga12.jpeg";
// import womens4 from "../../assets/Women/western1.jpeg";

// const products = [
//   {
//     id: 1,
//     name: "Mens Collection",
//     img: mensMain,
//     gallery: [mensMain, mens1, mens2, mens3, mens4],
//   },
//   {
//     id: 2,
//     name: "Kids Collection",
//     img: kidsMain,
//     gallery: [kidsMain, kids1, kids2, kids3, kids4],
//   },
//   {
//     id: 3,
//     name: "Womens Collection",
//     img: womensMain,
//     gallery: [womensMain, womens1, womens2, womens3, womens4],
//   },
// ];

// export default function ProductGallery() {
//   const [selected, setSelected] = useState(null);

//   return (
//     <section className="py-16 container mx-auto px-6">
//       <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
//         Collection Gallery
//       </h2>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//         {products.map((product) => (
//           <motion.div
//             key={product.id}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4 }}
//             viewport={{ once: true }}
//             onClick={() => setSelected(product)}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition border cursor-pointer"
//           >
//             <div className="w-full h-52 flex items-center justify-center bg-slate-100">
//               <img
//                 src={product.img}
//                 alt={product.name}
//                 className="max-w-full max-h-full w-auto h-auto object-contain"
//               />
//             </div>

//             <div className="p-4">
//               <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//               <p className="text-gray-600 mb-3 flex items-center gap-2">
//                 <Star size={16} className="text-yellow-400" /> 4.8 Rating
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Popup Modal - Smaller Size */}
//       {selected && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-4 relative"
//           >
//             <button
//               className="absolute top-3 right-3 text-gray-600 hover:text-black z-10"
//               onClick={() => setSelected(null)}
//             >
//               <X size={20} />
//             </button>

//             <h2 className="text-xl font-bold mb-4 text-center">{selected.name}</h2>

//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//               {selected.gallery.map((img, idx) => (
//                 <div key={idx} className="flex items-center justify-center bg-slate-50 rounded-lg p-2">
//                   <img
//                     src={img}
//                     alt={`${selected.name} ${idx + 1}`}
//                     className="max-w-full max-h-32 w-auto h-auto object-contain"
//                   />
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </section>
//   );
// }





// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Star, X } from "lucide-react";

// // Import all images from your assets folder
// import mensMain from "../../assets/Men/Suit1.jpeg";
// import mens1 from "../../assets/Men/Kurtapajama1.jpeg";
// import mens2 from "../../assets/Men/shirt2.jpeg";
// import mens3 from "../../assets/Men/Kurtapajama3.jpeg";
// import mens4 from "../../assets/Men/Suits12.jpeg";

// import kidsMain from "../../assets/Kids/pantset1.jpeg";
// import kids1 from "../../assets/Kids/shirt1.jpeg";
// import kids2 from "../../assets/Kids/pantset13.jpeg";
// import kids3 from "../../assets/Kids/girljeans1.jpeg";
// import kids4 from "../../assets/Kids/girljeans3.jpeg";

// import womensMain from "../../assets/Women/coordset.jpeg";
// import womens1 from "../../assets/Women/croptop2.jpeg";
// import womens2 from "../../assets/Women/gown1.jpeg";
// import womens3 from "../../assets/Women/lehanga12.jpeg";
// import womens4 from "../../assets/Women/western1.jpeg";

// // Add more products to have 8 total (4 per row x 2 rows)
// import mens5 from "../../assets/Men/shirt1.jpeg";
// import kids5 from "../../assets/Kids/pantset5.jpeg";
// import womens5 from "../../assets/Women/kurthiset1.jpeg";
// import ethnicMain from "../../assets/Women/lehanga1.jpeg";
// import accessoriesMain from "../../assets/accessories.jpg";

// const products = [
//   {
//     id: 1,
//     name: "Mens Collection",
//     img: mensMain,
//     gallery: [mensMain, mens1, mens2, mens3, mens4],
//   },
//   {
//     id: 2,
//     name: "Kids Collection",
//     img: kidsMain,
//     gallery: [kidsMain, kids1, kids2, kids3, kids4],
//   },
//   {
//     id: 3,
//     name: "Womens Collection",
//     img: womensMain,
//     gallery: [womensMain, womens1, womens2, womens3, womens4],
//   },
//   {
//     id: 4,
//     name: "Ethnic Wear",
//     img: ethnicMain,
//     gallery: [ethnicMain, womens1, womens2, womens3, womens4],
//   },
//   {
//     id: 5,
//     name: "Accessories",
//     img: accessoriesMain,
//     gallery: [accessoriesMain, mens1, kids1, womens1, mens2],
//   },
//   {
//     id: 6,
//     name: "Winter Collection",
//     img: mens5,
//     gallery: [mens5, mens1, mens2, mens3, mens4],
//   },
//   {
//     id: 7,
//     name: "Party Wear",
//     img: womens5,
//     gallery: [womens5, womens1, womens2, womens3, womens4],
//   },
//   {
//     id: 8,
//     name: "Casual Wear",
//     img: kids5,
//     gallery: [kids5, kids1, kids2, kids3, kids4],
//   },
// ];

// export default function ProductGallery() {
//   const [selected, setSelected] = useState(null);

//   return (
//     <section className="py-20 container mx-auto px-6">
//       <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
//         Collection Gallery
//       </h2>

//       {/* First Row - 4 cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
//         {products.slice(0, 4).map((product) => (
//           <motion.div
//             key={product.id}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             viewport={{ once: true }}
//             onClick={() => setSelected(product)}
//             className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border-2 border-gray-100 cursor-pointer group"
//           >
//             <div className="w-full h-72 flex items-center justify-center bg-slate-100 group-hover:bg-slate-200 transition-colors duration-500">
//               <img
//                 src={product.img}
//                 alt={product.name}
//                 className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
//               />
//             </div>

//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
//                 {product.name}
//               </h3>
//               <p className="text-gray-600 mb-3 flex items-center gap-2 text-base">
//                 <Star size={18} className="text-yellow-400 fill-current" /> 
//                 <span className="font-semibold">4.8 Rating</span>
//               </p>
//               <button className="w-full bg-pink-600 text-white py-3 rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-300">
//                 View Gallery
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Second Row - 4 cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
//         {products.slice(4, 8).map((product) => (
//           <motion.div
//             key={product.id}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: 0.1 }}
//             viewport={{ once: true }}
//             onClick={() => setSelected(product)}
//             className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border-2 border-gray-100 cursor-pointer group"
//           >
//             <div className="w-full h-72 flex items-center justify-center bg-slate-100 group-hover:bg-slate-200 transition-colors duration-500">
//               <img
//                 src={product.img}
//                 alt={product.name}
//                 className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
//               />
//             </div>

//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
//                 {product.name}
//               </h3>
//               <p className="text-gray-600 mb-3 flex items-center gap-2 text-base">
//                 <Star size={18} className="text-yellow-400 fill-current" /> 
//                 <span className="font-semibold">4.8 Rating</span>
//               </p>
//               <button className="w-full bg-pink-600 text-white py-3 rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-300">
//                 View Gallery
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Popup Modal - Larger Size */}
//       {selected && (
//         <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-6 z-50">
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl p-8 relative"
//           >
//             <button
//               className="absolute top-6 right-6 text-gray-600 hover:text-black z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
//               onClick={() => setSelected(null)}
//             >
//               <X size={24} />
//             </button>

//             <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
//               {selected.name} Gallery
//             </h2>

//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//               {selected.gallery.map((img, idx) => (
//                 <motion.div 
//                   key={idx} 
//                   className="flex items-center justify-center bg-slate-50 rounded-2xl p-4 hover:bg-slate-100 transition-colors duration-300 group cursor-pointer"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <img
//                     src={img}
//                     alt={`${selected.name} ${idx + 1}`}
//                     className="max-w-full max-h-48 w-auto h-auto object-contain group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </motion.div>
//               ))}
//             </div>

//             <div className="mt-8 text-center">
//               <p className="text-gray-600 text-lg">
//                 {selected.gallery.length} stunning images in this collection
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </section>
//   );
// }





// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Import all images from your assets folder
// import mensMain from "../../assets/Men/Suit1.jpeg";
// import mens1 from "../../assets/Men/Kurtapajama1.jpeg";
// import mens2 from "../../assets/Men/shirt2.jpeg";
// import mens3 from "../../assets/Men/Kurtapajama3.jpeg";
// import mens4 from "../../assets/Men/Suits12.jpeg";

// import kidsMain from "../../assets/Kids/pantset1.jpeg";
// import kids1 from "../../assets/Kids/shirt1.jpeg";
// import kids2 from "../../assets/Kids/pantset13.jpeg";
// import kids3 from "../../assets/Kids/girljeans1.jpeg";
// import kids4 from "../../assets/Kids/girljeans3.jpeg";

// import womensMain from "../../assets/Women/coordset.jpeg";
// import womens1 from "../../assets/Women/croptop2.jpeg";
// import womens2 from "../../assets/Women/gown1.jpeg";
// import womens3 from "../../assets/Women/lehanga12.jpeg";
// import womens4 from "../../assets/Women/western1.jpeg";

// // Add more products to have 8 total (4 per row x 2 rows)
// import mens5 from "../../assets/Men/shirt1.jpeg";
// import kids5 from "../../assets/Kids/pantset5.jpeg";
// import womens5 from "../../assets/Women/kurthiset1.jpeg";
// import ethnicMain from "../../assets/Women/lehanga1.jpeg";
// import accessoriesMain from "../../assets/accessories.jpg";

// const products = [
//   {
//     id: 1,
//     name: "Mens Collection",
//     img: mensMain,
//     gallery: [mensMain, mens1, mens2, mens3, mens4],
//     description: "Premium mens clothing collection"
//   },
//   {
//     id: 2,
//     name: "Kids Collection",
//     img: kidsMain,
//     gallery: [kidsMain, kids1, kids2, kids3, kids4],
//     description: "Adorable kids fashion collection"
//   },
//   {
//     id: 3,
//     name: "Womens Collection",
//     img: womensMain,
//     gallery: [womensMain, womens1, womens2, womens3, womens4],
//     description: "Elegant womens fashion range"
//   },
//   {
//     id: 4,
//     name: "Ethnic Wear",
//     img: ethnicMain,
//     gallery: [ethnicMain, womens1, womens2, womens3, womens4],
//     description: "Traditional ethnic clothing"
//   },
//   {
//     id: 5,
//     name: "Accessories",
//     img: accessoriesMain,
//     gallery: [accessoriesMain, mens1, kids1, womens1, mens2],
//     description: "Complete your look with accessories"
//   },
//   {
//     id: 6,
//     name: "Winter Collection",
//     img: mens5,
//     gallery: [mens5, mens1, mens2, mens3, mens4],
//     description: "Warm and stylish winter wear"
//   },
//   {
//     id: 7,
//     name: "Party Wear",
//     img: womens5,
//     gallery: [womens5, womens1, womens2, womens3, womens4],
//     description: "Sparkling party outfits"
//   },
//   {
//     id: 8,
//     name: "Casual Wear",
//     img: kids5,
//     gallery: [kids5, kids1, kids2, kids3, kids4],
//     description: "Comfortable casual clothing"
//   },
// ];

// export default function ProductGallery() {
//   const [selected, setSelected] = useState(null);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);

//   const openModal = (product) => {
//     setSelected(product);
//     setSelectedImageIndex(0);
//   };

//   const closeModal = () => {
//     setSelected(null);
//     setSelectedImageIndex(0);
//   };

//   const nextImage = () => {
//     setSelectedImageIndex((prev) => 
//       prev === selected.gallery.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setSelectedImageIndex((prev) => 
//       prev === 0 ? selected.gallery.length - 1 : prev - 1
//     );
//   };

//   const selectImage = (index) => {
//     setSelectedImageIndex(index);
//   };

//   // Close modal on escape key
//   React.useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape') closeModal();
//     };
    
//     if (selected) {
//       document.addEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'hidden'; // Prevent scrolling
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [selected]);

//   return (
//     <section className="py-20 container mx-auto px-6">
//       <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
//         Collection Gallery
//       </h2>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
//         {products.map((product, index) => (
//           <motion.div
//             key={product.id}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             onClick={() => openModal(product)}
//             className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border-2 border-gray-100 cursor-pointer group"
//           >
//             <div className="w-full h-72 flex items-center justify-center bg-slate-100 group-hover:bg-slate-200 transition-colors duration-500 relative overflow-hidden">
//               <img
//                 src={product.img}
//                 alt={product.name}
//                 className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
//             </div>

//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
//                 {product.name}
//               </h3>
//               <p className="text-gray-600 mb-3 flex items-center gap-2 text-base">
//                 <Star size={18} className="text-yellow-400 fill-current" /> 
//                 <span className="font-semibold">4.8 Rating</span>
//               </p>
//               <button className="w-full bg-pink-600 text-white py-3 rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-300">
//                 View Gallery
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Popup Modal */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header */}
//               <div className="flex items-center justify-between p-6 border-b border-gray-200">
//                 <div>
//                   <h2 className="text-3xl font-bold text-gray-800">
//                     {selected.name}
//                   </h2>
//                   <p className="text-gray-600 mt-1">{selected.description}</p>
//                 </div>
//                 <button
//                   className="text-gray-600 hover:text-black bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
//                   onClick={closeModal}
//                 >
//                   <X size={24} />
//                 </button>
//               </div>

//               {/* Main Image Viewer */}
//               <div className="relative bg-gray-50 p-8">
//                 <div className="flex items-center justify-center h-96">
//                   <motion.img
//                     key={selectedImageIndex}
//                     src={selected.gallery[selectedImageIndex]}
//                     alt={`${selected.name} ${selectedImageIndex + 1}`}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                     className="max-w-full max-h-full w-auto h-auto object-contain"
//                   />
//                 </div>

//                 {/* Navigation Arrows */}
//                 {selected.gallery.length > 1 && (
//                   <>
//                     <button
//                       onClick={prevImage}
//                       className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
//                     >
//                       <ChevronLeft size={24} />
//                     </button>
//                     <button
//                       onClick={nextImage}
//                       className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
//                     >
//                       <ChevronRight size={24} />
//                     </button>
//                   </>
//                 )}

//                 {/* Image Counter */}
//                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
//                   {selectedImageIndex + 1} / {selected.gallery.length}
//                 </div>
//               </div>

//               {/* Thumbnail Gallery */}
//               <div className="p-6 border-t border-gray-200">
//                 <h3 className="text-lg font-semibold mb-4 text-gray-800">
//                   Gallery ({selected.gallery.length} images)
//                 </h3>
//                 <div className="grid grid-cols-5 gap-4">
//                   {selected.gallery.map((img, idx) => (
//                     <motion.div 
//                       key={idx} 
//                       className={`flex items-center justify-center bg-slate-50 rounded-xl p-2 hover:bg-slate-100 transition-colors duration-300 cursor-pointer border-2 ${
//                         selectedImageIndex === idx ? 'border-pink-500' : 'border-transparent'
//                       }`}
//                       whileHover={{ scale: 1.05 }}
//                       onClick={() => selectImage(idx)}
//                     >
//                       <img
//                         src={img}
//                         alt={`${selected.name} ${idx + 1}`}
//                         className="w-full h-20 object-cover rounded-lg"
//                       />
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }






// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Import all images from your assets folder
// import mensMain from "../../assets/Men/Suit1.jpeg";
// import mens1 from "../../assets/Men/Kurtapajama1.jpeg";
// import mens2 from "../../assets/Men/shirt2.jpeg";
// import mens3 from "../../assets/Men/Kurtapajama3.jpeg";
// import mens4 from "../../assets/Men/Suits12.jpeg";

// import kidsMain from "../../assets/Kids/pantset1.jpeg";
// import kids1 from "../../assets/Kids/shirt1.jpeg";
// import kids2 from "../../assets/Kids/pantset13.jpeg";
// import kids3 from "../../assets/Kids/girljeans1.jpeg";
// import kids4 from "../../assets/Kids/girljeans3.jpeg";

// // Lehenga Collection Images
// import lehengaMain from "../../assets/Women/lehanga15.jpeg";
// import lehenga1 from "../../assets/Women/lehanga2.jpeg";
// import lehenga2 from "../../assets/Women/lehanga3.jpeg";
// import lehenga3 from "../../assets/Women/lehanga4.jpeg";
// import lehenga4 from "../../assets/Women/lehanga5.jpeg";

// // Western Wear Images
// import westernMain from "../../assets/Women/western1.jpeg";
// import western1 from "../../assets/Women/western2.jpeg";
// import western2 from "../../assets/Women/western3.jpeg";
// import western3 from "../../assets/Women/western4.jpeg";
// import western4 from "../../assets/Women/western5.jpeg";

// // Saree Collection Images
// import sareeMain from "../../assets/Women/saree2.jpeg";
// import saree1 from "../../assets/Women/saree10.jpeg";
// import saree2 from "../../assets/Women/saree14.jpeg";
// import saree3 from "../../assets/Women/saree4.jpeg";
// import saree4 from "../../assets/Women/saree5.jpeg";

// // Additional Collections
// import winterMain from "../../assets/Men/shirt1.jpeg";
// import partyWearMain from "../../assets/Women/kurthiset2.jpeg";
// import casualMain from "../../assets/Kids/pantset5.jpeg";

// const products = [
//   {
//     id: 1,
//     name: "Mens Collection",
//     img: mensMain,
//     gallery: [mensMain, mens1, mens2, mens3, mens4],
//     description: "Premium mens clothing collection"
//   },
//   {
//     id: 2,
//     name: "Kids Collection",
//     img: kidsMain,
//     gallery: [kidsMain, kids1, kids2, kids3, kids4],
//     description: "Adorable kids fashion collection"
//   },
//   {
//     id: 3,
//     name: "Lehenga Collection",
//     img: lehengaMain,
//     gallery: [lehengaMain, lehenga1, lehenga2, lehenga3, lehenga4],
//     description: "Elegant and traditional lehengas"
//   },
//   {
//     id: 4,
//     name: "Western Wear",
//     img: westernMain,
//     gallery: [westernMain, western1, western2, western3, western4],
//     description: "Traditional wester clothing"
//   },
//   {
//     id: 5,
//     name: "Saree Collection",
//     img: sareeMain,
//     gallery: [sareeMain, saree1, saree2, saree3, saree4],
//     description: "Beautiful saree collection"
//   },
//   {
//     id: 6,
//     name: "Winter Collection",
//     img: winterMain,
//     gallery: [winterMain, mens1, mens2, mens3, mens4],
//     description: "Warm and stylish winter wear"
//   },
//   {
//     id: 7,
//     name: "Party Wear",
//     img: partyWearMain,
//     gallery: [partyWearMain, lehenga1, lehenga2, lehenga3, lehenga4],
//     description: "Sparkling party outfits"
//   },

//   {
//     id: 8,
//     name: "Casual Wear",
//     img: casualMain,
//     gallery: [casualMain, kids1, kids2, kids3, kids4],
//     description: "Comfortable casual clothing"
//   },
// ];

// export default function ProductGallery() {
//   const [selected, setSelected] = useState(null);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);

//   const openModal = (product) => {
//     setSelected(product);
//     setSelectedImageIndex(0);
//   };

//   const closeModal = () => {
//     setSelected(null);
//     setSelectedImageIndex(0);
//   };

//   const nextImage = () => {
//     setSelectedImageIndex((prev) => 
//       prev === selected.gallery.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setSelectedImageIndex((prev) => 
//       prev === 0 ? selected.gallery.length - 1 : prev - 1
//     );
//   };

//   const selectImage = (index) => {
//     setSelectedImageIndex(index);
//   };

//   // Close modal on escape key
//   React.useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape') closeModal();
//     };
    
//     if (selected) {
//       document.addEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [selected]);

//   return (
//     <section className="py-20 container mx-auto px-6">
//       <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
//         Collection Gallery
//       </h2>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
//         {products.map((product, index) => (
//           <motion.div
//             key={product.id}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             onClick={() => openModal(product)}
//             className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border-2 border-gray-100 cursor-pointer group"
//           >
//             <div className="w-full h-72 flex items-center justify-center bg-slate-100 group-hover:bg-slate-200 transition-colors duration-500 relative overflow-hidden">
//               <img
//                 src={product.img}
//                 alt={product.name}
//                 className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
//             </div>

//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
//                 {product.name}
//               </h3>
//               <p className="text-gray-600 mb-3 flex items-center gap-2 text-base">
//                 <Star size={18} className="text-yellow-400 fill-current" /> 
//                 <span className="font-semibold">4.8 Rating</span>
//               </p>
//               <button className="w-full bg-pink-600 text-white py-3 rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-300">
//                 View Gallery
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Popup Modal - Smaller Size */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header */}
//               <div className="flex items-center justify-between p-5 border-b border-gray-200">
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-800">
//                     {selected.name}
//                   </h2>
//                   <p className="text-gray-600 mt-1 text-sm">{selected.description}</p>
//                 </div>
//                 <button
//                   className="text-gray-600 hover:text-black bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
//                   onClick={closeModal}
//                 >
//                   <X size={20} />
//                 </button>
//               </div>

//               {/* Main Image Viewer */}
//               <div className="relative bg-gray-50 p-6">
//                 <div className="flex items-center justify-center h-80">
//                   <motion.img
//                     key={selectedImageIndex}
//                     src={selected.gallery[selectedImageIndex]}
//                     alt={`${selected.name} ${selectedImageIndex + 1}`}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                     className="max-w-full max-h-full w-auto h-auto object-contain"
//                   />
//                 </div>

//                 {/* Navigation Arrows */}
//                 {selected.gallery.length > 1 && (
//                   <>
//                     <button
//                       onClick={prevImage}
//                       className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
//                     >
//                       <ChevronLeft size={20} />
//                     </button>
//                     <button
//                       onClick={nextImage}
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
//                     >
//                       <ChevronRight size={20} />
//                     </button>
//                   </>
//                 )}

//                 {/* Image Counter */}
//                 <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
//                   {selectedImageIndex + 1} / {selected.gallery.length}
//                 </div>
//               </div>

//               {/* Thumbnail Gallery */}
//               <div className="p-5 border-t border-gray-200">
//                 <h3 className="text-base font-semibold mb-3 text-gray-800">
//                   Gallery ({selected.gallery.length} images)
//                 </h3>
//                 <div className="grid grid-cols-5 gap-3">
//                   {selected.gallery.map((img, idx) => (
//                     <motion.div 
//                       key={idx} 
//                       className={`flex items-center justify-center bg-slate-50 rounded-lg p-2 hover:bg-slate-100 transition-colors duration-300 cursor-pointer border-2 ${
//                         selectedImageIndex === idx ? 'border-pink-500' : 'border-transparent'
//                       }`}
//                       whileHover={{ scale: 1.05 }}
//                       onClick={() => selectImage(idx)}
//                     >
//                       <img
//                         src={img}
//                         alt={`${selected.name} ${idx + 1}`}
//                         className="w-full h-16 object-cover rounded-md"
//                       />
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }







// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Import all images from your assets folder
// import mensMain from "../../assets/Men/Suit1.jpeg";
// import mens1 from "../../assets/Men/Kurtapajama1.jpeg";
// import mens2 from "../../assets/Men/shirt2.jpeg";
// import mens3 from "../../assets/Men/Kurtapajama3.jpeg";
// import mens4 from "../../assets/Men/Suits12.jpeg";

// import kidsMain from "../../assets/Kids/pantset1.jpeg";
// import kids1 from "../../assets/Kids/shirt1.jpeg";
// import kids2 from "../../assets/Kids/pantset13.jpeg";
// import kids3 from "../../assets/Kids/girljeans1.jpeg";
// import kids4 from "../../assets/Kids/girljeans3.jpeg";

// // Lehenga Collection Images
// import lehengaMain from "../../assets/Women/lehanga15.jpeg";
// import lehenga1 from "../../assets/Women/lehanga2.jpeg";
// import lehenga2 from "../../assets/Women/lehanga3.jpeg";
// import lehenga3 from "../../assets/Women/lehanga4.jpeg";
// import lehenga4 from "../../assets/Women/lehanga5.jpeg";

// // Western Wear Images
// import westernMain from "../../assets/Women/western1.jpeg";
// import western1 from "../../assets/Women/western2.jpeg";
// import western2 from "../../assets/Women/western3.jpeg";
// import western3 from "../../assets/Women/western4.jpeg";
// import western4 from "../../assets/Women/western5.jpeg";

// // Saree Collection Images
// import sareeMain from "../../assets/Women/saree2.jpeg";
// import saree1 from "../../assets/Women/saree10.jpeg";
// import saree2 from "../../assets/Women/saree14.jpeg";
// import saree3 from "../../assets/Women/saree4.jpeg";
// import saree4 from "../../assets/Women/saree5.jpeg";

// // Additional Collections
// import winterMain from "../../assets/Men/shirt1.jpeg";
// import partyWearMain from "../../assets/Women/kurthiset2.jpeg";
// import casualMain from "../../assets/Kids/pantset5.jpeg";

// const products = [
//   {
//     id: 1,
//     name: "Mens Collection",
//     img: mensMain,
//     gallery: [mensMain, mens1, mens2, mens3, mens4],
//     description: "Premium mens clothing collection"
//   },
//   {
//     id: 2,
//     name: "Kids Collection",
//     img: kidsMain,
//     gallery: [kidsMain, kids1, kids2, kids3, kids4],
//     description: "Adorable kids fashion collection"
//   },
//   {
//     id: 3,
//     name: "Lehenga Collection",
//     img: lehengaMain,
//     gallery: [lehengaMain, lehenga1, lehenga2, lehenga3, lehenga4],
//     description: "Elegant and traditional lehengas"
//   },
//   {
//     id: 4,
//     name: "Western Wear",
//     img: westernMain,
//     gallery: [westernMain, western1, western2, western3, western4],
//     description: "Traditional wester clothing"
//   },
//   {
//     id: 5,
//     name: "Saree Collection",
//     img: sareeMain,
//     gallery: [sareeMain, saree1, saree2, saree3, saree4],
//     description: "Beautiful saree collection"
//   },
//   {
//     id: 6,
//     name: "Winter Collection",
//     img: winterMain,
//     gallery: [winterMain, mens1, mens2, mens3, mens4],
//     description: "Warm and stylish winter wear"
//   },
//   {
//     id: 7,
//     name: " Bridal Lehenga",
//     img: partyWearMain,
//     gallery: [partyWearMain, lehenga1, lehenga2, lehenga3, lehenga4],
//     description: "Sparkling party outfits"
//   },

//   {
//     id: 8,
//     name: "Indo Western",
//     img: casualMain,
//     gallery: [casualMain, kids1, kids2, kids3, kids4],
//     description: "Comfortable casual clothing"
//   },
// ];

// export default function ProductGallery() {
//   const [selected, setSelected] = useState(null);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);

//   const openModal = (product) => {
//     setSelected(product);
//     setSelectedImageIndex(0);
//   };

//   const closeModal = () => {
//     setSelected(null);
//     setSelectedImageIndex(0);
//   };

//   const nextImage = () => {
//     setSelectedImageIndex((prev) => 
//       prev === selected.gallery.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setSelectedImageIndex((prev) => 
//       prev === 0 ? selected.gallery.length - 1 : prev - 1
//     );
//   };

//   const selectImage = (index) => {
//     setSelectedImageIndex(index);
//   };

//   // Close modal on escape key
//   React.useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape') closeModal();
//     };
    
//     if (selected) {
//       document.addEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [selected]);

//   return (
//     <section className="py-20 container mx-auto px-6">
//       <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
//         Collection Gallery
//       </h2>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
//         {products.map((product, index) => (
//           <motion.div
//             key={product.id}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             onClick={() => openModal(product)}
//             className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border-2 border-gray-100 cursor-pointer group"
//           >
//             <div className="w-full h-72 flex items-center justify-center bg-slate-100 group-hover:bg-slate-200 transition-colors duration-500 relative overflow-hidden">
//               <img
//                 src={product.img}
//                 alt={product.name}
//                 className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
//             </div>

//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
//                 {product.name}
//               </h3>
//               <p className="text-gray-600 mb-3 flex items-center gap-2 text-base">
//                 <Star size={18} className="text-yellow-400 fill-current" /> 
//                 <span className="font-semibold">4.8 Rating</span>
//               </p>
//               <button className="w-full bg-pink-600 text-white py-3 rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-300">
//                 View Gallery
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Popup Modal - Smaller Size */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header */}
//               <div className="flex items-center justify-between p-5 border-b border-gray-200">
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-800">
//                     {selected.name}
//                   </h2>
//                   <p className="text-gray-600 mt-1 text-sm">{selected.description}</p>
//                 </div>
//                 <button
//                   className="text-gray-600 hover:text-black bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
//                   onClick={closeModal}
//                 >
//                   <X size={20} />
//                 </button>
//               </div>

//               {/* Main Image Viewer */}
//               <div className="relative bg-gray-50 p-6">
//                 <div className="flex items-center justify-center h-80">
//                   <motion.img
//                     key={selectedImageIndex}
//                     src={selected.gallery[selectedImageIndex]}
//                     alt={`${selected.name} ${selectedImageIndex + 1}`}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                     className="max-w-full max-h-full w-auto h-auto object-contain"
//                   />
//                 </div>

//                 {/* Navigation Arrows */}
//                 {selected.gallery.length > 1 && (
//                   <>
//                     <button
//                       onClick={prevImage}
//                       className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
//                     >
//                       <ChevronLeft size={20} />
//                     </button>
//                     <button
//                       onClick={nextImage}
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
//                     >
//                       <ChevronRight size={20} />
//                     </button>
//                   </>
//                 )}

//                 {/* Image Counter */}
//                 <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
//                   {selectedImageIndex + 1} / {selected.gallery.length}
//                 </div>
//               </div>

//               {/* Thumbnail Gallery */}
//               <div className="p-5 border-t border-gray-200">
//                 <h3 className="text-base font-semibold mb-3 text-gray-800">
//                   Gallery ({selected.gallery.length} images)
//                 </h3>
//                 <div className="grid grid-cols-5 gap-3">
//                   {selected.gallery.map((img, idx) => (
//                     <motion.div 
//                       key={idx} 
//                       className={`flex items-center justify-center bg-slate-50 rounded-lg p-2 hover:bg-slate-100 transition-colors duration-300 cursor-pointer border-2 ${
//                         selectedImageIndex === idx ? 'border-pink-500' : 'border-transparent'
//                       }`}
//                       whileHover={{ scale: 1.05 }}
//                       onClick={() => selectImage(idx)}
//                     >
//                       <img
//                         src={img}
//                         alt={`${selected.name} ${idx + 1}`}
//                         className="w-full h-16 object-cover rounded-md"
//                       />
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }






// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Men's Collection Images
// import mensMain from "../../assets/Men/Suit1.jpeg";
// import mens1 from "../../assets/Men/Kurtapajama1.jpeg";
// import mens2 from "../../assets/Men/shirt2.jpeg";
// import mens3 from "../../assets/Men/Kurtapajama3.jpeg";
// import mens4 from "../../assets/Men/Suits12.jpeg";

// // Kids Collection Images
// import kidsMain from "../../assets/Kids/pantset1.jpeg";
// import kids1 from "../../assets/Kids/shirt1.jpeg";
// import kids2 from "../../assets/Kids/pantset13.jpeg";
// import kids3 from "../../assets/Kids/girljeans1.jpeg";
// import kids4 from "../../assets/Kids/girljeans3.jpeg";

// // Women's Lehenga Collection Images
// import lehengaMain from "../../assets/Women/lehanga15.jpeg";
// import lehenga1 from "../../assets/Women/lehanga2.jpeg";
// import lehenga2 from "../../assets/Women/lehanga3.jpeg";
// import lehenga3 from "../../assets/Women/lehanga4.jpeg";
// import lehenga4 from "../../assets/Women/lehanga5.jpeg";

// // Women's Western Wear Images
// import westernMain from "../../assets/Women/western1.jpeg";
// import western1 from "../../assets/Women/western2.jpeg";
// import western2 from "../../assets/Women/western3.jpeg";
// import western3 from "../../assets/Women/western4.jpeg";
// import western4 from "../../assets/Women/western5.jpeg";

// // Women's Saree Collection Images
// import sareeMain from "../../assets/Women/saree2.jpeg";
// import saree1 from "../../assets/Women/saree10.jpeg";
// import saree2 from "../../assets/Women/saree14.jpeg";
// import saree3 from "../../assets/Women/saree4.jpeg";
// import saree4 from "../../assets/Women/saree5.jpeg";




// // Additional Collections
// import winterMain from "../../assets/Men/shirt1.jpeg";
// import partyWearMain from "../../assets/Women/kurthiset2.jpeg";
// import casualMain from "../../assets/Kids/pantset5.jpeg";

// // Categories
// const categories = {
//   men: {
//     id: 1,
//     name: "Men's Collection",
//     products: [
//       {
//         id: 101,
//         name: "Formal Suits",
//         img: mensMain,
//         gallery: [mensMain, mens1, mens2, mens3, mens4],
//         description: "Premium formal suits for men",
//         rating: 4.8
//       },
//       {
//         id: 102,
//         name: "Winter Collection",
//         img: winterMain,
//         gallery: [winterMain, mens1, mens2, mens3, mens4],
//         description: "Warm and stylish winter wear for men",
//         rating: 4.6
//       }
//     ]
//   },
//   women: {
//     id: 2,
//     name: "Women's Collection",
//     products: [
//       {
//         id: 201,
//         name: "Lehenga Collection",
//         img: lehengaMain,
//         gallery: [lehengaMain, lehenga1, lehenga2, lehenga3, lehenga4],
//         description: "Elegant and traditional lehengas",
//         rating: 4.9
//       },
//       {
//         id: 202,
//         name: "Western Wear",
//         img: westernMain,
//         gallery: [westernMain, western1, western2, western3, western4],
//         description: "Stylish western clothing for women",
//         rating: 4.7
//       },
//       {
//         id: 203,
//         name: "Saree Collection",
//         img: sareeMain,
//         gallery: [sareeMain, saree1, saree2, saree3, saree4],
//         description: "Beautiful traditional sarees",
//         rating: 4.8
//       },
//       {
//         id: 204,
//         name: "Bridal Lehenga",
//         img: partyWearMain,
//         gallery: [partyWearMain, lehenga1, lehenga2, lehenga3, lehenga4],
//         description: "Exquisite bridal lehengas",
//         rating: 5.0
//       }
//     ]
//   },
//   kids: {
//     id: 3,
//     name: "Kids Collection",
//     products: [
//       {
//         id: 301,
//         name: "Kids Fashion",
//         img: kidsMain,
//         gallery: [kidsMain, kids1, kids2, kids3, kids4],
//         description: "Adorable kids fashion collection",
//         rating: 4.5
//       },
//       {
//         id: 302,
//         name: "Indo Western",
//         img: casualMain,
//         gallery: [casualMain, kids1, kids2, kids3, kids4],
//         description: "Comfortable casual clothing for kids",
//         rating: 4.4
//       }
//     ]
//   }
// };

// // Flatten all products for the grid view
// const allProducts = [
//   ...categories.men.products,
//   ...categories.women.products,
//   ...categories.kids.products
// ];

// export default function ProductGallery() {
//   const [selected, setSelected] = useState(null);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [activeCategory, setActiveCategory] = useState("all");

//   const openModal = (product) => {
//     setSelected(product);
//     setSelectedImageIndex(0);
//   };

//   const closeModal = () => {
//     setSelected(null);
//     setSelectedImageIndex(0);
//   };

//   const nextImage = () => {
//     setSelectedImageIndex((prev) => 
//       prev === selected.gallery.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setSelectedImageIndex((prev) => 
//       prev === 0 ? selected.gallery.length - 1 : prev - 1
//     );
//   };

//   const selectImage = (index) => {
//     setSelectedImageIndex(index);
//   };

//   // Filter products based on active category
//   const filteredProducts = activeCategory === "all" 
//     ? allProducts 
//     : categories[activeCategory]?.products || [];

//   // Close modal on escape key
//   React.useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape') closeModal();
//     };
    
//     if (selected) {
//       document.addEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [selected]);

//   return (
//     <section className="py-20 container mx-auto px-6">
//       <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
//         Collection Gallery
//       </h2>

//       {/* Category Filter */}
//       <div className="flex justify-center mb-12">
//         <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-wrap gap-2">
//           <button
//             onClick={() => setActiveCategory("all")}
//             className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//               activeCategory === "all" 
//                 ? "bg-pink-600 text-white shadow-md" 
//                 : "text-gray-600 hover:bg-gray-100"
//             }`}
//           >
//             All Collections
//           </button>
//           {Object.entries(categories).map(([key, category]) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(key)}
//               className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                 activeCategory === key 
//                   ? "bg-pink-600 text-white shadow-md" 
//                   : "text-gray-600 hover:bg-gray-100"
//               }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
//         {filteredProducts.map((product, index) => (
//           <motion.div
//             key={product.id}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             onClick={() => openModal(product)}
//             className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border-2 border-gray-100 cursor-pointer group"
//           >
//             <div className="w-full h-72 flex items-center justify-center bg-slate-100 group-hover:bg-slate-200 transition-colors duration-500 relative overflow-hidden">
//               <img
//                 src={product.img}
//                 alt={product.name}
//                 className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
//             </div>

//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
//                 {product.name}
//               </h3>
//               <p className="text-gray-600 mb-3 flex items-center gap-2 text-base">
//                 <Star size={18} className="text-yellow-400 fill-current" /> 
//                 <span className="font-semibold">{product.rating} Rating</span>
//               </p>
//               <button className="w-full bg-pink-600 text-white py-3 rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-300">
//                 View Gallery
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Popup Modal - Smaller Size */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header */}
//               <div className="flex items-center justify-between p-5 border-b border-gray-200">
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-800">
//                     {selected.name}
//                   </h2>
//                   <p className="text-gray-600 mt-1 text-sm">{selected.description}</p>
//                 </div>
//                 <button
//                   className="text-gray-600 hover:text-black bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
//                   onClick={closeModal}
//                 >
//                   <X size={20} />
//                 </button>
//               </div>

//               {/* Main Image Viewer */}
//               <div className="relative bg-gray-50 p-6">
//                 <div className="flex items-center justify-center h-80">
//                   <motion.img
//                     key={selectedImageIndex}
//                     src={selected.gallery[selectedImageIndex]}
//                     alt={`${selected.name} ${selectedImageIndex + 1}`}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                     className="max-w-full max-h-full w-auto h-auto object-contain"
//                   />
//                 </div>

//                 {/* Navigation Arrows */}
//                 {selected.gallery.length > 1 && (
//                   <>
//                     <button
//                       onClick={prevImage}
//                       className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
//                     >
//                       <ChevronLeft size={20} />
//                     </button>
//                     <button
//                       onClick={nextImage}
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
//                     >
//                       <ChevronRight size={20} />
//                     </button>
//                   </>
//                 )}

//                 {/* Image Counter */}
//                 <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
//                   {selectedImageIndex + 1} / {selected.gallery.length}
//                 </div>
//               </div>

//               {/* Thumbnail Gallery */}
//               <div className="p-5 border-t border-gray-200">
//                 <h3 className="text-base font-semibold mb-3 text-gray-800">
//                   Gallery ({selected.gallery.length} images)
//                 </h3>
//                 <div className="grid grid-cols-5 gap-3">
//                   {selected.gallery.map((img, idx) => (
//                     <motion.div 
//                       key={idx} 
//                       className={`flex items-center justify-center bg-slate-50 rounded-lg p-2 hover:bg-slate-100 transition-colors duration-300 cursor-pointer border-2 ${
//                         selectedImageIndex === idx ? 'border-pink-500' : 'border-transparent'
//                       }`}
//                       whileHover={{ scale: 1.05 }}
//                       onClick={() => selectImage(idx)}
//                     >
//                       <img
//                         src={img}
//                         alt={`${selected.name} ${idx + 1}`}
//                         className="w-full h-16 object-cover rounded-md"
//                       />
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }











// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Men's Collection Images
// import mensMain from "../../assets/Men/Suit1.jpeg";
// import mens1 from "../../assets/Men/Kurtapajama1.jpeg";
// import mens2 from "../../assets/Men/shirt10.jpeg";
// import mens3 from "../../assets/Men/Kurtapajama3.jpeg";
// import mens4 from "../../assets/Men/Suits10.jpeg";

// // Kids Collection Images
// import kidsMain from "../../assets/Kids/pantset1.jpeg";
// import kids1 from "../../assets/Kids/shirt1.jpeg";
// import kids2 from "../../assets/Kids/pantset13.jpeg";
// import kids3 from "../../assets/Kids/girljeans1.jpeg";
// import kids4 from "../../assets/Kids/girljeans3.jpeg";

// // Women's Lehenga Collection Images
// import lehengaMain from "../../assets/Women/lehanga15.jpeg";
// import lehenga1 from "../../assets/Women/lehanga2.jpeg";
// import lehenga2 from "../../assets/Women/lehanga3.jpeg";
// import lehenga3 from "../../assets/Women/lehanga4.jpeg";
// import lehenga4 from "../../assets/Women/lehanga5.jpeg";

// // Women's Western Wear Images
// import westernMain from "../../assets/Women/western1.jpeg";
// import western1 from "../../assets/Women/western2.jpeg";
// import western2 from "../../assets/Women/western3.jpeg";
// import western3 from "../../assets/Women/western4.jpeg";
// import western4 from "../../assets/Women/western5.jpeg";

// // Women's Saree Collection Images
// import sareeMain from "../../assets/Women/saree2.jpeg";
// import saree1 from "../../assets/Women/saree10.jpeg";
// import saree2 from "../../assets/Women/saree14.jpeg";
// import saree3 from "../../assets/Women/saree4.jpeg";
// import saree4 from "../../assets/Women/saree5.jpeg";

// // Additional Collections
// import winterMain from "../../assets/Men/shirt16.jpeg";
// import partyWearMain from "../../assets/Women/Bridallehenga1.jpeg";
// import casualMain from "../../assets/Kids/Kidskurtaset1.jpeg";

// // Categories
// const categories = {
//   men: {
//     id: 1,
//     name: "Men's Collection",
//     products: [
//       {
//         id: 101,
//         name: "Men's Collection",
//         img: mensMain,
//         gallery: [mensMain, mens1, mens2, mens3, mens4],
//         description: "Premium formal suits for men with perfect tailoring and premium fabrics",
//         rating: 4.8,
       
//         category: "men"
//       },
//       {
//         id: 102,
//         name: "Shirt Collection",
//         img: winterMain,
//         gallery: [winterMain, mens1, mens2, mens3, mens4],
//         description: "Warm and stylish winter wear for men with cozy fabrics",
//         rating: 4.6,
     
//         category: "men"
//       }
//     ]
//   },
//   women: {
//     id: 2,
//     name: "Women's Collection",
//     products: [
//       {
//         id: 201,
//         name: "Lehenga Collection",
//         img: lehengaMain,
//         gallery: [lehengaMain, lehenga1, lehenga2, lehenga3, lehenga4],
//         description: "Elegant and traditional lehengas with intricate embroidery",
//         rating: 4.9,
        
//         category: "women"
//       },
//       {
//         id: 202,
//         name: "Western Wear",
//         img: westernMain,
//         gallery: [westernMain, western1, western2, western3, western4],
//         description: "Stylish western clothing for modern women",
//         rating: 4.7,
     
//         category: "women"
//       },
//       {
//         id: 203,
//         name: "Saree Collection",
//         img: sareeMain,
//         gallery: [sareeMain, saree1, saree2, saree3, saree4],
//         description: "Beautiful traditional sarees in various fabrics and designs",
//         rating: 4.8,
        
//         category: "women"
//       },
//       {
//         id: 204,
//         name: "Bridal Lehenga",
//         img: partyWearMain,
//         gallery: [partyWearMain, lehenga1, lehenga2, lehenga3, lehenga4],
//         description: "Exquisite bridal lehengas for your special day",
//         rating: 5.0,
        
//         category: "women"
//       }
//     ]
//   },
//   kids: {
//     id: 3,
//     name: "Kids Collection",
//     products: [
//       {
//         id: 301,
//         name: "Kids Fashion",
//         img: kidsMain,
//         gallery: [kidsMain, kids1, kids2, kids3, kids4],
//         description: "Adorable kids fashion collection with comfortable fabrics",
//         rating: 4.5,
        
//         category: "kids"
//       },
//       {
//         id: 302,
//         name: "Kids Kurta Set",
//         img: casualMain,
//         gallery: [casualMain, kids1, kids2, kids3, kids4],
//         description: "Comfortable casual clothing for kids with modern designs",
//         rating: 4.4,
       
//         category: "kids"
//       }
//     ]
//   }
// };

// // Flatten all products for the grid view
// const allProducts = [
//   ...categories.men.products,
//   ...categories.women.products,
//   ...categories.kids.products
// ];

// // Category Filter Component
// const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
//   return (
//     <div id="category-filter-section" className="flex justify-center mb-12">
//       <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-wrap gap-2">
//         <button
//           id="filter-button-all"
//           onClick={() => setActiveCategory("all")}
//           className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//             activeCategory === "all" 
//               ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg shadow-pink-500/25" 
//               : "text-gray-600 hover:bg-gray-100 hover:text-pink-600"
//           }`}
//         >
//           All Collections
//         </button>
//         {Object.entries(categories).map(([key, category]) => (
//           <button
//             key={category.id}
//             id={`filter-button-${key}`}
//             onClick={() => setActiveCategory(key)}
//             className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//               activeCategory === key 
//                 ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg shadow-pink-500/25" 
//                 : "text-gray-600 hover:bg-gray-100 hover:text-pink-600"
//             }`}
//           >
//             {category.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Product Card Component
// const ProductCard = ({ product, index, onClick }) => {
//   return (
//     <motion.div
//       id={`product-card-${product.id}`}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       onClick={onClick}
//       className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer group overflow-hidden"
//     >
//       <div className="w-full h-72 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 group-hover:from-slate-100 group-hover:to-slate-200 transition-all duration-500 relative overflow-hidden">
//         <motion.img
//           src={product.img}
//           alt={product.name}
//           className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
//           whileHover={{ scale: 1.05 }}
//         />
//         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        
        
     
//       </div>

//       <div className="p-6">
//         <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
//           {product.name}
//         </h3>
//         <p className="text-gray-600 text-sm mb-3 line-clamp-2">
//           {product.description}
//         </p>
        
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center gap-2">
//             <Star size={16} className="text-yellow-400 fill-current" /> 
//             <span className="font-semibold text-gray-700">{product.rating}</span>
//             <span className="text-gray-400 text-sm">Rating</span>
//           </div>
//           <span className="text-lg font-bold text-pink-600">{product.price}</span>
//         </div>
        
//         <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
//           View Gallery
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// // Product Grid Component
// const ProductGrid = ({ products, onProductClick }) => {
//   return (
//     <div id="product-grid-container" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
//       {products.map((product, index) => (
//         <ProductCard
//           key={product.id}
//           product={product}
//           index={index}
//           onClick={() => onProductClick(product)}
//         />
//       ))}
//     </div>
//   );
// };

// // Modal Header Component
// const ModalHeader = ({ product, onClose }) => {
//   return (
//     <div id="modal-header-section" className="flex items-center justify-between p-6 border-b border-gray-200">
//       <div className="flex-1">
//         <h2 className="text-2xl font-bold text-gray-800">
//           {product.name}
//         </h2>
//         <p className="text-gray-600 mt-1">{product.description}</p>
//         <div className="flex items-center gap-4 mt-2">
//           <div className="flex items-center gap-1">
//             <Star size={16} className="text-yellow-400 fill-current" />
//             <span className="font-semibold text-gray-700">{product.rating}</span>
//           </div>
//           <span className="text-lg font-bold text-pink-600">{product.price}</span>
//         </div>
//       </div>
//       <button
//         id="modal-close-button"
//         className="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 ml-4"
//         onClick={onClose}
//       >
//         <X size={20} />
//       </button>
//     </div>
//   );
// };

// // Navigation Arrows Component
// const NavigationArrows = ({ onPrev, onNext, galleryLength }) => {
//   if (galleryLength <= 1) return null;
  
//   return (
//     <div id="gallery-navigation-arrows">
//       <button
//         onClick={onPrev}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-sm"
//       >
//         <ChevronLeft size={24} className="text-gray-700" />
//       </button>
//       <button
//         onClick={onNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-sm"
//       >
//         <ChevronRight size={24} className="text-gray-700" />
//       </button>
//     </div>
//   );
// };

// // Image Counter Component
// const ImageCounter = ({ currentIndex, totalImages }) => {
//   return (
//     <div id="image-counter-display" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
//       {currentIndex + 1} / {totalImages}
//     </div>
//   );
// };

// // Image Gallery Component
// const ImageGallery = ({ product, currentIndex, onPrev, onNext }) => {
//   return (
//     <div id="image-gallery-viewer" className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8">
//       <div className="flex items-center justify-center h-80">
//         <motion.img
//           key={currentIndex}
//           src={product.gallery[currentIndex]}
//           alt={`${product.name} ${currentIndex + 1}`}
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.3 }}
//           className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-lg"
//         />
//       </div>

//       <NavigationArrows 
//         onPrev={onPrev} 
//         onNext={onNext} 
//         galleryLength={product.gallery.length} 
//       />
      
//       <ImageCounter 
//         currentIndex={currentIndex} 
//         totalImages={product.gallery.length} 
//       />
//     </div>
//   );
// };

// // Thumbnail Grid Component
// const ThumbnailGrid = ({ product, currentIndex, onThumbnailClick }) => {
//   return (
//     <div id="thumbnail-grid-section" className="p-6 border-t border-gray-200">
//       <h3 className="text-lg font-semibold mb-4 text-gray-800">
//         Gallery ({product.gallery.length} images)
//       </h3>
//       <div className="grid grid-cols-5 gap-3">
//         {product.gallery.map((img, idx) => (
//           <motion.div 
//             key={idx} 
//             id={`thumbnail-${idx}`}
//             className={`flex items-center justify-center bg-slate-50 rounded-xl p-2 hover:bg-slate-100 transition-all duration-300 cursor-pointer border-2 ${
//               currentIndex === idx ? 'border-pink-500 shadow-md' : 'border-transparent hover:border-gray-300'
//             }`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => onThumbnailClick(idx)}
//           >
//             <img
//               src={img}
//               alt={`${product.name} ${idx + 1}`}
//               className="w-full h-16 object-cover rounded-lg"
//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Gallery Modal Component
// const GalleryModal = ({ product, currentIndex, onClose, onPrev, onNext, onThumbnailClick }) => {
//   return (
//     <motion.div
//       id="gallery-modal-popup"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         transition={{ type: "spring", damping: 25 }}
//         className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <ModalHeader product={product} onClose={onClose} />
        
//         <ImageGallery 
//           product={product} 
//           currentIndex={currentIndex}
//           onPrev={onPrev}
//           onNext={onNext}
//         />
        
//         <ThumbnailGrid 
//           product={product}
//           currentIndex={currentIndex}
//           onThumbnailClick={onThumbnailClick}
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// // Main Product Gallery Component
// export default function ProductGallery() {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [activeCategory, setActiveCategory] = useState("all");

//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setSelectedImageIndex(0);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     setSelectedImageIndex(0);
//   };

//   const nextImage = () => {
//     setSelectedImageIndex((prev) => 
//       prev === selectedProduct.gallery.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setSelectedImageIndex((prev) => 
//       prev === 0 ? selectedProduct.gallery.length - 1 : prev - 1
//     );
//   };

//   const selectImage = (index) => {
//     setSelectedImageIndex(index);
//   };

//   // Filter products based on active category
//   const filteredProducts = activeCategory === "all" 
//     ? allProducts 
//     : categories[activeCategory]?.products || [];

//   // Close modal on escape key
//   React.useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape') closeModal();
//     };
    
//     if (selectedProduct) {
//       document.addEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [selectedProduct]);

//   return (
//     <section id="product-gallery-main" className="py-20 container mx-auto px-6 bg-gradient-to-b from-white to-pink-50/30">
//       {/* Header Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-16"
//       >
//         <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-pink-600 to-gray-800 bg-clip-text text-transparent">
//           Fashion Collection Gallery
//         </h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//           Explore our exquisite collection of fashion wear for men, women, and kids. 
//           Each piece is crafted with attention to detail and quality.
//         </p>
//       </motion.div>

//       {/* Category Filter */}
//       <CategoryFilter 
//         activeCategory={activeCategory} 
//         setActiveCategory={setActiveCategory} 
//       />

//       {/* Product Grid */}
//       <ProductGrid 
//         products={filteredProducts} 
//         onProductClick={openModal} 
//       />

//       {/* Gallery Modal */}
//       <AnimatePresence>
//         {selectedProduct && (
//           <GalleryModal
//             product={selectedProduct}
//             currentIndex={selectedImageIndex}
//             onClose={closeModal}
//             onPrev={prevImage}
//             onNext={nextImage}
//             onThumbnailClick={selectImage}
//           />
//         )}
//       </AnimatePresence>

//       {/* Empty State */}
//       {filteredProducts.length === 0 && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-center py-20"
//         >
//           <div className="text-gray-400 text-6xl mb-4">👗</div>
//           <h3 className="text-2xl font-semibold text-gray-600 mb-2">No products found</h3>
//           <p className="text-gray-500">Try selecting a different category</p>
//         </motion.div>
//       )}
//     </section>
//   );
// }






// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Men's Collection Images
// import mensMain from "../../assets/Men/Suit1.jpeg";
// import mens1 from "../../assets/Men/Kurtapajama1.jpeg";
// import mens2 from "../../assets/Men/shirt10.jpeg";
// import mens3 from "../../assets/Men/Kurtapajama3.jpeg";
// import mens4 from "../../assets/Men/Suits10.jpeg";

// // Kids Collection Images
// import kidsMain from "../../assets/Kids/pantset1.jpeg";
// import kids1 from "../../assets/Kids/shirt1.jpeg";
// import kids2 from "../../assets/Kids/pantset13.jpeg";
// import kids3 from "../../assets/Kids/girljeans1.jpeg";
// import kids4 from "../../assets/Kids/girljeans3.jpeg";

// // Women's Lehenga Collection Images
// import lehengaMain from "../../assets/Women/lehanga15.jpeg";
// import lehenga1 from "../../assets/Women/lehanga2.jpeg";
// import lehenga2 from "../../assets/Women/lehanga3.jpeg";
// import lehenga3 from "../../assets/Women/lehanga4.jpeg";
// import lehenga4 from "../../assets/Women/lehanga5.jpeg";

// // Women's Western Wear Images
// import westernMain from "../../assets/Women/western1.jpeg";
// import western1 from "../../assets/Women/western2.jpeg";
// import western2 from "../../assets/Women/western3.jpeg";
// import western3 from "../../assets/Women/western4.jpeg";
// import western4 from "../../assets/Women/western5.jpeg";

// // Women's Saree Collection Images
// import sareeMain from "../../assets/Women/saree2.jpeg";
// import saree1 from "../../assets/Women/saree10.jpeg";
// import saree2 from "../../assets/Women/saree14.jpeg";
// import saree3 from "../../assets/Women/saree4.jpeg";
// import saree4 from "../../assets/Women/saree5.jpeg";

// // Additional Collections
// import winterMain from "../../assets/Men/shirt16.jpeg";
// import partyWearMain from "../../assets/Women/Bridallehenga1.jpeg";
// import casualMain from "../../assets/Kids/Kidskurtaset1.jpeg";

// // Categories
// const categories = {
//   men: {
//     id: 1,
//     name: "Men's Collection",
//     products: [
//       {
//         id: 101,
//         name: "",
//         img: mensMain,
//         gallery: [mensMain, mens1, mens2, mens3, mens4],
//         description: "",
//         rating: 4.8,
//         category: "men"
//       },
//       {
//         id: 102,
//         name: "",
//         img: winterMain,
//         gallery: [winterMain, mens1, mens2, mens3, mens4],
//         description: "",
//         rating: 4.6,
//         category: "men"
//       }
//     ]
//   },
//   women: {
//     id: 2,
//     name: "",
//     products: [
//       {
//         id: 201,
//         name: "Lehenga Collection",
//         img: lehengaMain,
//         gallery: [lehengaMain, lehenga1, lehenga2, lehenga3, lehenga4],
//         description: "",
//         rating: 4.9,
//         category: "women"
//       },
//       {
//         id: 202,
//         name: "",
//         img: westernMain,
//         gallery: [westernMain, western1, western2, western3, western4],
//         description: "",
//         rating: 4.7,
//         category: "women"
//       },
//       {
//         id: 203,
//         name: "",
//         img: sareeMain,
//         gallery: [sareeMain, saree1, saree2, saree3, saree4],
//         description: "",
//         rating: 4.8,
//         category: "women"
//       },
//       {
//         id: 204,
//         name: "",
//         img: partyWearMain,
//         gallery: [partyWearMain, lehenga1, lehenga2, lehenga3, lehenga4],
//         description: "",
//         rating: 5.0,
//         category: "women"
//       }
//     ]
//   },
//   kids: {
//     id: 3,
//     name: "",
//     products: [
//       {
//         id: 301,
//         name: "",
//         img: kidsMain,
//         gallery: [kidsMain, kids1, kids2, kids3, kids4],
//         description: "",
//         rating: 4.5,
//         category: "kids"
//       },
//       {
//         id: 302,
//         name: "",
//         img: casualMain,
//         gallery: [casualMain, kids1, kids2, kids3, kids4],
//         description: "",
//         rating: 4.4,
//         category: "kids"
//       }
//     ]
//   }
// };

// // Flatten all products for the grid view
// const allProducts = [
//   ...categories.men.products,
//   ...categories.women.products,
//   ...categories.kids.products
// ];

// // Category Filter Component
// const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
//   return (
//     <div id="category-filter-section" className="flex justify-center mb-12">
//       <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-wrap gap-2">
//         <button
//           id="filter-button-all"
//           onClick={() => setActiveCategory("all")}
//           className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//             activeCategory === "all" 
//               ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg shadow-pink-500/25" 
//               : "text-gray-600 hover:bg-gray-100 hover:text-pink-600"
//           }`}
//         >
//           All Collections
//         </button>
//         {Object.entries(categories).map(([key, category]) => (
//           <button
//             key={category.id}
//             id={`filter-button-${key}`}
//             onClick={() => setActiveCategory(key)}
//             className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//               activeCategory === key 
//                 ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg shadow-pink-500/25" 
//                 : "text-gray-600 hover:bg-gray-100 hover:text-pink-600"
//             }`}
//           >
//             {category.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Product Card Component
// const ProductCard = ({ product, index, onClick }) => {
//   return (
//     <motion.div
//       id={`product-card-${product.id}`}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       onClick={onClick}
//       className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer group overflow-hidden"
//     >
//       <div className="w-full h-80 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 group-hover:from-slate-100 group-hover:to-slate-200 transition-all duration-500 relative overflow-hidden">
//         <motion.img
//           src={product.img}
//           alt={product.name}
//           className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
//           whileHover={{ scale: 1.05 }}
//         />
//         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//       </div>

//       <div className="p-6">
//         <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
//           View Gallery
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// // Product Grid Component
// const ProductGrid = ({ products, onProductClick }) => {
//   return (
//     <div id="product-grid-container" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
//       {products.map((product, index) => (
//         <ProductCard
//           key={product.id}
//           product={product}
//           index={index}
//           onClick={() => onProductClick(product)}
//         />
//       ))}
//     </div>
//   );
// };

// // Modal Header Component
// const ModalHeader = ({ product, onClose }) => {
//   return (
//     <div id="modal-header-section" className="flex items-center justify-between p-6 border-b border-gray-200">
//       <div className="flex-1">
//         <h2 className="text-2xl font-bold text-gray-800">
//           {product.name}
//         </h2>
//         <p className="text-gray-600 mt-1">{product.description}</p>
//         <div className="flex items-center gap-4 mt-2">
//           <div className="flex items-center gap-1">
//             <Star size={16} className="text-yellow-400 fill-current" />
//             <span className="font-semibold text-gray-700">{product.rating}</span>
//           </div>
//         </div>
//       </div>
//       <button
//         id="modal-close-button"
//         className="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 ml-4"
//         onClick={onClose}
//       >
//         <X size={20} />
//       </button>
//     </div>
//   );
// };

// // Navigation Arrows Component
// const NavigationArrows = ({ onPrev, onNext, galleryLength }) => {
//   if (galleryLength <= 1) return null;
  
//   return (
//     <div id="gallery-navigation-arrows">
//       <button
//         onClick={onPrev}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-sm"
//       >
//         <ChevronLeft size={24} className="text-gray-700" />
//       </button>
//       <button
//         onClick={onNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-sm"
//       >
//         <ChevronRight size={24} className="text-gray-700" />
//       </button>
//     </div>
//   );
// };

// // Image Counter Component
// const ImageCounter = ({ currentIndex, totalImages }) => {
//   return (
//     <div id="image-counter-display" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
//       {currentIndex + 1} / {totalImages}
//     </div>
//   );
// };

// // Image Gallery Component
// const ImageGallery = ({ product, currentIndex, onPrev, onNext }) => {
//   return (
//     <div id="image-gallery-viewer" className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8">
//       <div className="flex items-center justify-center h-80">
//         <motion.img
//           key={currentIndex}
//           src={product.gallery[currentIndex]}
//           alt={`${product.name} ${currentIndex + 1}`}
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.3 }}
//           className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-lg"
//         />
//       </div>

//       <NavigationArrows 
//         onPrev={onPrev} 
//         onNext={onNext} 
//         galleryLength={product.gallery.length} 
//       />
      
//       <ImageCounter 
//         currentIndex={currentIndex} 
//         totalImages={product.gallery.length} 
//       />
//     </div>
//   );
// };

// // Thumbnail Grid Component
// const ThumbnailGrid = ({ product, currentIndex, onThumbnailClick }) => {
//   return (
//     <div id="thumbnail-grid-section" className="p-6 border-t border-gray-200">
//       <h3 className="text-lg font-semibold mb-4 text-gray-800">
//         Gallery ({product.gallery.length} images)
//       </h3>
//       <div className="grid grid-cols-5 gap-3">
//         {product.gallery.map((img, idx) => (
//           <motion.div 
//             key={idx} 
//             id={`thumbnail-${idx}`}
//             className={`flex items-center justify-center bg-slate-50 rounded-xl p-2 hover:bg-slate-100 transition-all duration-300 cursor-pointer border-2 ${
//               currentIndex === idx ? 'border-pink-500 shadow-md' : 'border-transparent hover:border-gray-300'
//             }`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => onThumbnailClick(idx)}
//           >
//             <img
//               src={img}
//               alt={`${product.name} ${idx + 1}`}
//               className="w-full h-16 object-cover rounded-lg"
//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Gallery Modal Component
// const GalleryModal = ({ product, currentIndex, onClose, onPrev, onNext, onThumbnailClick }) => {
//   return (
//     <motion.div
//       id="gallery-modal-popup"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         transition={{ type: "spring", damping: 25 }}
//         className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <ModalHeader product={product} onClose={onClose} />
        
//         <ImageGallery 
//           product={product} 
//           currentIndex={currentIndex}
//           onPrev={onPrev}
//           onNext={onNext}
//         />
        
//         <ThumbnailGrid 
//           product={product}
//           currentIndex={currentIndex}
//           onThumbnailClick={onThumbnailClick}
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// // Main Product Gallery Component
// export default function ProductGallery() {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [activeCategory, setActiveCategory] = useState("all");

//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setSelectedImageIndex(0);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     setSelectedImageIndex(0);
//   };

//   const nextImage = () => {
//     setSelectedImageIndex((prev) => 
//       prev === selectedProduct.gallery.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setSelectedImageIndex((prev) => 
//       prev === 0 ? selectedProduct.gallery.length - 1 : prev - 1
//     );
//   };

//   const selectImage = (index) => {
//     setSelectedImageIndex(index);
//   };

//   // Filter products based on active category
//   const filteredProducts = activeCategory === "all" 
//     ? allProducts 
//     : categories[activeCategory]?.products || [];

//   // Close modal on escape key
//   React.useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape') closeModal();
//     };
    
//     if (selectedProduct) {
//       document.addEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [selectedProduct]);

//   return (
//     <section id="product-gallery-main" className="py-20 container mx-auto px-6 bg-gradient-to-b from-white to-pink-50/30">
//       {/* Header Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-16"
//       >
//         <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-pink-600 to-gray-800 bg-clip-text text-transparent">
//           Fashion Collection Gallery
//         </h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//           Explore our exquisite collection of fashion wear for men, women, and kids. 
//           Each piece is crafted with attention to detail and quality.
//         </p>
//       </motion.div>

//       {/* Category Filter */}
//       <CategoryFilter 
//         activeCategory={activeCategory} 
//         setActiveCategory={setActiveCategory} 
//       />

//       {/* Product Grid */}
//       <ProductGrid 
//         products={filteredProducts} 
//         onProductClick={openModal} 
//       />

//       {/* Gallery Modal */}
//       <AnimatePresence>
//         {selectedProduct && (
//           <GalleryModal
//             product={selectedProduct}
//             currentIndex={selectedImageIndex}
//             onClose={closeModal}
//             onPrev={prevImage}
//             onNext={nextImage}
//             onThumbnailClick={selectImage}
//           />
//         )}
//       </AnimatePresence>

//       {/* Empty State */}
//       {filteredProducts.length === 0 && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-center py-20"
//         >
//           <div className="text-gray-400 text-6xl mb-4">👗</div>
//           <h3 className="text-2xl font-semibold text-gray-600 mb-2">No products found</h3>
//           <p className="text-gray-500">Try selecting a different category</p>
//         </motion.div>
//       )}
//     </section>
//   );
// }




// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";

// // Men's Collection Images
// import mensMain from "../../assets/Men/Suit1.jpeg";
// import mens1 from "../../assets/Men/Kurtapajama1.jpeg";
// import mens2 from "../../assets/Men/shirt10.jpeg";
// import mens3 from "../../assets/Men/Kurtapajama3.jpeg";
// import mens4 from "../../assets/Men/Suits10.jpeg";

// // Kids Collection Images
// import kidsMain from "../../assets/Kids/pantset1.jpeg";
// import kids1 from "../../assets/Kids/shirt1.jpeg";
// import kids2 from "../../assets/Kids/pantset13.jpeg";
// import kids3 from "../../assets/Kids/girljeans1.jpeg";
// import kids4 from "../../assets/Kids/girljeans3.jpeg";

// // Women's Lehenga Collection Images
// import lehengaMain from "../../assets/Women/lehanga15.jpeg";
// import lehenga1 from "../../assets/Women/lehanga2.jpeg";
// import lehenga2 from "../../assets/Women/lehanga3.jpeg";
// import lehenga3 from "../../assets/Women/lehanga4.jpeg";
// import lehenga4 from "../../assets/Women/lehanga5.jpeg";

// // Women's Western Wear Images
// import westernMain from "../../assets/Women/western1.jpeg";
// import western1 from "../../assets/Women/western2.jpeg";
// import western2 from "../../assets/Women/western3.jpeg";
// import western3 from "../../assets/Women/western4.jpeg";
// import western4 from "../../assets/Women/western5.jpeg";

// // Women's Saree Collection Images
// import sareeMain from "../../assets/Women/saree2.jpeg";
// import saree1 from "../../assets/Women/saree10.jpeg";
// import saree2 from "../../assets/Women/saree14.jpeg";
// import saree3 from "../../assets/Women/saree4.jpeg";
// import saree4 from "../../assets/Women/saree5.jpeg";

// // Additional Collections
// import winterMain from "../../assets/Men/shirt16.jpeg";
// import partyWearMain from "../../assets/Women/Bridallehenga1.jpeg";
// import casualMain from "../../assets/Kids/Kidskurtaset1.jpeg";

// // Categories
// const categories = {
//   men: {
//     id: 1,
//     name: "Men's Collection",
//     products: [
//       {
//         id: 101,
//         name: "",
//         img: mensMain,
//         gallery: [mensMain, mens1, mens2, mens3, mens4],
//         description: "",
//         category: "men"
//       },
//       {
//         id: 102,
//         name: "",
//         img: winterMain,
//         gallery: [winterMain, mens1, mens2, mens3, mens4],
//         description: "",
//         category: "men"
//       }
//     ]
//   },
//   women: {
//     id: 2,
//     name: "Women's Collection",
//     products: [
//       {
//         id: 201,
//         name: "",
//         img: lehengaMain,
//         gallery: [lehengaMain, lehenga1, lehenga2, lehenga3, lehenga4],
//         description: "",
//         category: "women"
//       },
//       {
//         id: 202,
//         name: "",
//         img: westernMain,
//         gallery: [westernMain, western1, western2, western3, western4],
//         description: "",
//         category: "women"
//       },
//       {
//         id: 203,
//         name: "",
//         img: sareeMain,
//         gallery: [sareeMain, saree1, saree2, saree3, saree4],
//         description: "",
//         category: "women"
//       },
//       {
//         id: 204,
//         name: "",
//         img: partyWearMain,
//         gallery: [partyWearMain, lehenga1, lehenga2, lehenga3, lehenga4],
//         description: "",
//         category: "women"
//       }
//     ]
//   },
//   kids: {
//     id: 3,
//     name: "Kids Collection",
//     products: [
//       {
//         id: 301,
//         name: "",
//         img: kidsMain,
//         gallery: [kidsMain, kids1, kids2, kids3, kids4],
//         description: "",
//         category: "kids"
//       },
//       {
//         id: 302,
//         name: "",
//         img: casualMain,
//         gallery: [casualMain, kids1, kids2, kids3, kids4],
//         description: "",
//         category: "kids"
//       }
//     ]
//   }
// };

// // Flatten all products for the grid view
// const allProducts = [
//   ...categories.men.products,
//   ...categories.women.products,
//   ...categories.kids.products
// ];

// // Category Filter Component
// const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
//   return (
//     <div id="category-filter-section" className="flex justify-center mb-12">
//       <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-wrap gap-2">
//         <button
//           id="filter-button-all"
//           onClick={() => setActiveCategory("all")}
//           className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//             activeCategory === "all" 
//               ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg shadow-pink-500/25" 
//               : "text-gray-600 hover:bg-gray-100 hover:text-pink-600"
//           }`}
//         >
//           All Collections
//         </button>
//         {Object.entries(categories).map(([key, category]) => (
//           <button
//             key={category.id}
//             id={`filter-button-${key}`}
//             onClick={() => setActiveCategory(key)}
//             className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//               activeCategory === key 
//                 ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg shadow-pink-500/25" 
//                 : "text-gray-600 hover:bg-gray-100 hover:text-pink-600"
//             }`}
//           >
//             {category.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Product Card Component
// const ProductCard = ({ product, index, onClick }) => {
//   return (
//     <motion.div
//       id={`product-card-${product.id}`}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       onClick={onClick}
//       className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer group overflow-hidden"
//     >
//       <div className="w-full h-80 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 group-hover:from-slate-100 group-hover:to-slate-200 transition-all duration-500 relative overflow-hidden">
//         <motion.img
//           src={product.img}
//           alt={product.name}
//           className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
//           whileHover={{ scale: 1.05 }}
//         />
//         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//       </div>

//       <div className="p-6">
//         <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
//           View Gallery
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// // Product Grid Component
// const ProductGrid = ({ products, onProductClick }) => {
//   return (
//     <div id="product-grid-container" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
//       {products.map((product, index) => (
//         <ProductCard
//           key={product.id}
//           product={product}
//           index={index}
//           onClick={() => onProductClick(product)}
//         />
//       ))}
//     </div>
//   );
// };

// // Modal Header Component
// const ModalHeader = ({ product, onClose }) => {
//   return (
//     <div id="modal-header-section" className="flex items-center justify-between p-6 border-b border-gray-200">
//       <div className="flex-1">
//         <h2 className="text-2xl font-bold text-gray-800">
//           {product.name}
//         </h2>
//         <p className="text-gray-600 mt-1">{product.description}</p>
//       </div>
//       <button
//         id="modal-close-button"
//         className="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 ml-4"
//         onClick={onClose}
//       >
//         <X size={20} />
//       </button>
//     </div>
//   );
// };

// // Navigation Arrows Component
// const NavigationArrows = ({ onPrev, onNext, galleryLength }) => {
//   if (galleryLength <= 1) return null;
  
//   return (
//     <div id="gallery-navigation-arrows">
//       <button
//         onClick={onPrev}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-sm"
//       >
//         <ChevronLeft size={24} className="text-gray-700" />
//       </button>
//       <button
//         onClick={onNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-sm"
//       >
//         <ChevronRight size={24} className="text-gray-700" />
//       </button>
//     </div>
//   );
// };

// // Image Counter Component
// const ImageCounter = ({ currentIndex, totalImages }) => {
//   return (
//     <div id="image-counter-display" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
//       {currentIndex + 1} / {totalImages}
//     </div>
//   );
// };

// // Image Gallery Component
// const ImageGallery = ({ product, currentIndex, onPrev, onNext }) => {
//   return (
//     <div id="image-gallery-viewer" className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8">
//       <div className="flex items-center justify-center h-80">
//         <motion.img
//           key={currentIndex}
//           src={product.gallery[currentIndex]}
//           alt={`${product.name} ${currentIndex + 1}`}
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.3 }}
//           className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-lg"
//         />
//       </div>

//       <NavigationArrows 
//         onPrev={onPrev} 
//         onNext={onNext} 
//         galleryLength={product.gallery.length} 
//       />
      
//       <ImageCounter 
//         currentIndex={currentIndex} 
//         totalImages={product.gallery.length} 
//       />
//     </div>
//   );
// };

// // Thumbnail Grid Component
// const ThumbnailGrid = ({ product, currentIndex, onThumbnailClick }) => {
//   return (
//     <div id="thumbnail-grid-section" className="p-6 border-t border-gray-200">
//       <h3 className="text-lg font-semibold mb-4 text-gray-800">
//         Gallery ({product.gallery.length} images)
//       </h3>
//       <div className="grid grid-cols-5 gap-3">
//         {product.gallery.map((img, idx) => (
//           <motion.div 
//             key={idx} 
//             id={`thumbnail-${idx}`}
//             className={`flex items-center justify-center bg-slate-50 rounded-xl p-2 hover:bg-slate-100 transition-all duration-300 cursor-pointer border-2 ${
//               currentIndex === idx ? 'border-pink-500 shadow-md' : 'border-transparent hover:border-gray-300'
//             }`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => onThumbnailClick(idx)}
//           >
//             <img
//               src={img}
//               alt={`${product.name} ${idx + 1}`}
//               className="w-full h-16 object-cover rounded-lg"
//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Gallery Modal Component
// const GalleryModal = ({ product, currentIndex, onClose, onPrev, onNext, onThumbnailClick }) => {
//   return (
//     <motion.div
//       id="gallery-modal-popup"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         transition={{ type: "spring", damping: 25 }}
//         className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <ModalHeader product={product} onClose={onClose} />
        
//         <ImageGallery 
//           product={product} 
//           currentIndex={currentIndex}
//           onPrev={onPrev}
//           onNext={onNext}
//         />
        
//         <ThumbnailGrid 
//           product={product}
//           currentIndex={currentIndex}
//           onThumbnailClick={onThumbnailClick}
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// // Main Product Gallery Component
// export default function ProductGallery() {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [activeCategory, setActiveCategory] = useState("all");

//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setSelectedImageIndex(0);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     setSelectedImageIndex(0);
//   };

//   const nextImage = () => {
//     setSelectedImageIndex((prev) => 
//       prev === selectedProduct.gallery.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setSelectedImageIndex((prev) => 
//       prev === 0 ? selectedProduct.gallery.length - 1 : prev - 1
//     );
//   };

//   const selectImage = (index) => {
//     setSelectedImageIndex(index);
//   };

//   // Filter products based on active category
//   const filteredProducts = activeCategory === "all" 
//     ? allProducts 
//     : categories[activeCategory]?.products || [];

//   // Close modal on escape key
//   React.useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape') closeModal();
//     };
    
//     if (selectedProduct) {
//       document.addEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [selectedProduct]);

//   return (
//     <section id="product-gallery-main" className="py-20 container mx-auto px-6 bg-gradient-to-b from-white to-pink-50/30">
//       {/* Header Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-16"
//       >
//         <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-pink-600 to-gray-800 bg-clip-text text-transparent">
//           Fashion Collection Gallery
//         </h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//           Explore our exquisite collection of fashion wear for men, women, and kids. 
//           Each piece is crafted with attention to detail and quality.
//         </p>
//       </motion.div>

//       {/* Category Filter */}
//       <CategoryFilter 
//         activeCategory={activeCategory} 
//         setActiveCategory={setActiveCategory} 
//       />

//       {/* Product Grid */}
//       <ProductGrid 
//         products={filteredProducts} 
//         onProductClick={openModal} 
//       />

//       {/* Gallery Modal */}
//       <AnimatePresence>
//         {selectedProduct && (
//           <GalleryModal
//             product={selectedProduct}
//             currentIndex={selectedImageIndex}
//             onClose={closeModal}
//             onPrev={prevImage}
//             onNext={nextImage}
//             onThumbnailClick={selectImage}
//           />
//         )}
//       </AnimatePresence>

//       {/* Empty State */}
//       {filteredProducts.length === 0 && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-center py-20"
//         >
//           <div className="text-gray-400 text-6xl mb-4">👗</div>
//           <h3 className="text-2xl font-semibold text-gray-600 mb-2">No products found</h3>
//           <p className="text-gray-500">Try selecting a different category</p>
//         </motion.div>
//       )}
//     </section>
//   );
// }






// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";
// import ProductFrame from "@/ProductFrame/ProductFrame";

// // Men's Collection Images
// import mensMain from "../../assets/Men/Suit1.jpeg";
// import mens1 from "../../assets/Men/Kurtapajama1.jpeg";
// import mens2 from "../../assets/Men/shirt10.jpeg";
// import mens3 from "../../assets/Men/Kurtapajama3.jpeg";
// import mens4 from "../../assets/Men/Suits10.jpeg";

// // Kids Collection Images
// import kidsMain from "../../assets/Kids/pantset1.jpeg";
// import kids1 from "../../assets/Kids/shirt1.jpeg";
// import kids2 from "../../assets/Kids/pantset13.jpeg";
// import kids3 from "../../assets/Kids/girljeans1.jpeg";
// import kids4 from "../../assets/Kids/girljeans3.jpeg";

// // Women's Lehenga Collection Images
// import lehengaMain from "../../assets/Women/lehanga15.jpeg";
// import lehenga1 from "../../assets/Women/lehanga2.jpeg";
// import lehenga2 from "../../assets/Women/lehanga3.jpeg";
// import lehenga3 from "../../assets/Women/lehanga4.jpeg";
// import lehenga4 from "../../assets/Women/lehanga5.jpeg";

// // Women's Western Wear Images
// import westernMain from "../../assets/Women/western1.jpeg";
// import western1 from "../../assets/Women/western2.jpeg";
// import western2 from "../../assets/Women/western3.jpeg";
// import western3 from "../../assets/Women/western4.jpeg";
// import western4 from "../../assets/Women/western5.jpeg";

// // Women's Saree Collection Images
// import sareeMain from "../../assets/Women/saree2.jpeg";
// import saree1 from "../../assets/Women/saree10.jpeg";
// import saree2 from "../../assets/Women/saree14.jpeg";
// import saree3 from "../../assets/Women/saree4.jpeg";
// import saree4 from "../../assets/Women/saree5.jpeg";

// // Additional Collections
// import winterMain from "../../assets/Men/shirt16.jpeg";
// import partyWearMain from "../../assets/Women/Bridallehenga1.jpeg";
// import casualMain from "../../assets/Kids/Kidskurtaset1.jpeg";

// interface Product {
//   id: number;
//   name: string;
//   img: string;
//   gallery: string[];
//   description: string;
//   category: string;
// }

// // Categories
// const categories = {
//   men: {
//     id: 1,
//     name: "Men's Collection",
//     products: [
//       {
//         id: 101,
//         name: "",
//         img: mensMain,
//         gallery: [mensMain, mens1, mens2, mens3, mens4],
//         description: "",
//         category: "men"
//       },
//       {
//         id: 102,
//         name: "",
//         img: winterMain,
//         gallery: [winterMain, mens1, mens2, mens3, mens4],
//         description: "",
//         category: "men"
//       }
//     ]
//   },
//   women: {
//     id: 2,
//     name: "Women's Collection",
//     products: [
//       {
//         id: 201,
//         name: "",
//         img: lehengaMain,
//         gallery: [lehengaMain, lehenga1, lehenga2, lehenga3, lehenga4],
//         description: "",
//         category: "women"
//       },
//       {
//         id: 202,
//         name: "",
//         img: westernMain,
//         gallery: [westernMain, western1, western2, western3, western4],
//         description: "",
//         category: "women"
//       },
//       {
//         id: 203,
//         name: "",
//         img: sareeMain,
//         gallery: [sareeMain, saree1, saree2, saree3, saree4],
//         description: "",
//         category: "women"
//       },
//       {
//         id: 204,
//         name: "",
//         img: partyWearMain,
//         gallery: [partyWearMain, lehenga1, lehenga2, lehenga3, lehenga4],
//         description: "",
//         category: "women"
//       }
//     ]
//   },
//   kids: {
//     id: 3,
//     name: "Kids Collection",
//     products: [
//       {
//         id: 301,
//         name: "",
//         img: kidsMain,
//         gallery: [kidsMain, kids1, kids2, kids3, kids4],
//         description: "",
//         category: "kids"
//       },
//       {
//         id: 302,
//         name: "",
//         img: casualMain,
//         gallery: [casualMain, kids1, kids2, kids3, kids4],
//         description: "",
//         category: "kids"
//       }
//     ]
//   }
// };

// // Flatten all products for the grid view
// const allProducts = [
//   ...categories.men.products,
//   ...categories.women.products,
//   ...categories.kids.products
// ];

// // Category Filter Component
// const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
//   const [hoveredCategory, setHoveredCategory] = useState("");

//   return (
//     <motion.div 
//       className="flex flex-wrap gap-3 justify-center mb-16"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}
//     >
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <Button
//           onClick={() => setActiveCategory("all")}
//           onMouseEnter={() => setHoveredCategory("all")}
//           onMouseLeave={() => setHoveredCategory("")}
//           className={`relative px-6 py-3 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
//             activeCategory === "all"
//               ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white border-pink-500 shadow-2xl shadow-pink-500/25 scale-105"
//               : "border-pink-200 bg-white/80 hover:border-pink-300 hover:bg-pink-50 hover:shadow-xl text-pink-700"
//           }`}
//           variant="outline"
//         >
//           <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-500 ${
//             hoveredCategory === "all" && activeCategory !== "all" 
//               ? "opacity-5" 
//               : "opacity-0"
//           }`}></div>
          
//           <span className="text-lg mr-2">🌟</span>
//           All Collections
          
//           {activeCategory === "all" && (
//             <motion.div
//               className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white rounded-t-full"
//               layoutId="activeIndicator"
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             />
//           )}
//         </Button>
//       </motion.div>

//       {Object.entries(categories).map(([key, category]) => (
//         <motion.div
//           key={category.id}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Button
//             onClick={() => setActiveCategory(key)}
//             onMouseEnter={() => setHoveredCategory(key)}
//             onMouseLeave={() => setHoveredCategory("")}
//             className={`relative px-6 py-3 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
//               activeCategory === key
//                 ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white border-pink-500 shadow-2xl shadow-pink-500/25 scale-105"
//                 : "border-pink-200 bg-white/80 hover:border-pink-300 hover:bg-pink-50 hover:shadow-xl text-pink-700"
//             }`}
//             variant="outline"
//           >
//             <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-500 ${
//               hoveredCategory === key && activeCategory !== key 
//                 ? "opacity-5" 
//                 : "opacity-0"
//             }`}></div>
            
//             <span className="text-lg mr-2">
//               {key === 'men' ? '👔' : key === 'women' ? '👗' : '👶'}
//             </span>
//             {category.name}
            
//             {activeCategory === key && (
//               <motion.div
//                 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white rounded-t-full"
//                 layoutId="activeIndicator"
//                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               />
//             )}
//           </Button>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// // Product Card Component
// const ProductCard = ({ product, index, onClick }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9, y: 20 }}
//       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//       whileHover={{ y: -8 }}
//       transition={{ 
//         delay: index * 0.1,
//         type: "spring",
//         stiffness: 300
//       }}
//       className="group cursor-pointer"
//       onClick={onClick}
//     >
//       <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
//         <div className="relative overflow-hidden bg-slate-50">
//           <div className="w-full h-80 flex items-center justify-center bg-slate-100">
//             <ProductFrame image={product.img} />
//           </div>
//           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
//           {/* Image count badge */}
//           <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
//             {product.gallery.length} images
//           </div>
//         </div>
        
//         {/* Removed all bottom text content including View Gallery button */}
//       </div>
//     </motion.div>
//   );
// };

// // Product Grid Component
// const ProductGrid = ({ products, onProductClick }) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//       {products.map((product, index) => (
//         <ProductCard
//           key={product.id}
//           product={product}
//           index={index}
//           onClick={() => onProductClick(product)}
//         />
//       ))}
//     </div>
//   );
// };

// // Gallery Modal Component
// const GalleryModal = ({ product, currentIndex, onClose, onPrev, onNext, onThumbnailClick }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         transition={{ type: "spring", damping: 25 }}
//         className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-hidden"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex flex-col h-full">
//           {/* Main Content */}
//           <div className="flex-1 overflow-auto relative">
//             <button
//               onClick={onClose}
//               className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 rounded-full p-2 shadow-md transition-colors duration-300 z-50"
//             >
//               <X className="w-5 h-5" />
//             </button>
            
//             <div className="p-6">
//               {/* Main Image Gallery */}
//               <div className="mb-6">
//                 <div className="relative rounded-xl overflow-hidden bg-slate-50 mb-3">
//                   <div className="flex items-center justify-center min-h-[400px] p-3">
//                     <ProductFrame image={product.gallery[currentIndex]} />
//                   </div>
                  
//                   {/* Navigation Arrows */}
//                   <button
//                     onClick={onPrev}
//                     className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 transition-all duration-300 shadow-lg"
//                   >
//                     <ChevronLeft className="w-4 h-4" />
//                   </button>
//                   <button
//                     onClick={onNext}
//                     className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 transition-all duration-300 shadow-lg"
//                   >
//                     <ChevronRight className="w-4 h-4" />
//                   </button>

//                   {/* Image Counter */}
//                   <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
//                     {currentIndex + 1} / {product.gallery.length}
//                   </div>
//                 </div>

//                 {/* Thumbnail Gallery */}
//                 <div className="flex gap-2 overflow-x-auto py-1">
//                   {product.gallery.map((image, index) => (
//                     <motion.button
//                       key={index}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => onThumbnailClick(index)}
//                       className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
//                         currentIndex === index
//                           ? "border-pink-500 shadow-md"
//                           : "border-slate-200 hover:border-slate-300"
//                       }`}
//                     >
//                       <img
//                         src={image}
//                         alt={`${product.name} ${index + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </motion.button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// // Main Product Gallery Component
// export default function ProductGallery() {
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [activeCategory, setActiveCategory] = useState("all");

//   const openModal = (product: Product) => {
//     setSelectedProduct(product);
//     setSelectedImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     if (selectedProduct) {
//       setSelectedImageIndex((prev) => 
//         prev === selectedProduct.gallery.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setSelectedImageIndex((prev) => 
//         prev === 0 ? selectedProduct.gallery.length - 1 : prev - 1
//       );
//     }
//   };

//   const selectImage = (index: number) => {
//     setSelectedImageIndex(index);
//   };

//   // Filter products based on active category
//   const filteredProducts = activeCategory === "all" 
//     ? allProducts 
//     : categories[activeCategory]?.products || [];

//   return (
//     <section className="relative overflow-hidden bg-white">
//       <div className="container mx-auto px-4 py-20 relative z-10">
//         {/* Enhanced Heading */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <Sparkles className="w-6 h-6 text-pink-500" />
//             <span className="text-sm font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
//               FEATURED COLLECTIONS
//             </span>
//             <Sparkles className="w-6 h-6 text-pink-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-pink-600 to-slate-800 bg-clip-text text-transparent">
//             Fashion Gallery
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-pink-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Explore our exquisite collection of fashion wear for men, women, and kids. 
//             Each piece is crafted with attention to detail and quality.
//           </p>
//         </motion.div>

//         {/* Category Filter */}
//         <CategoryFilter 
//           activeCategory={activeCategory} 
//           setActiveCategory={setActiveCategory} 
//         />

//         {/* Product Grid */}
//         {filteredProducts.length > 0 ? (
//           <ProductGrid 
//             products={filteredProducts} 
//             onProductClick={openModal} 
//           />
//         ) : (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-20"
//           >
//             <div className="text-gray-400 text-6xl mb-4">👗</div>
//             <h3 className="text-2xl font-semibold text-gray-600 mb-2">No products found</h3>
//             <p className="text-gray-500">Try selecting a different category</p>
//           </motion.div>
//         )}
//       </div>

//       {/* Gallery Modal */}
//       <AnimatePresence>
//         {selectedProduct && (
//           <GalleryModal
//             product={selectedProduct}
//             currentIndex={selectedImageIndex}
//             onClose={closeModal}
//             onPrev={prevImage}
//             onNext={nextImage}
//             onThumbnailClick={selectImage}
//           />
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }





// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";
// import ProductFrame from "@/ProductFrame/ProductFrame";

// // Men's Collection Images
// import mensMain from "../../assets/Men/Suit1.jpeg";
// import mens1 from "../../assets/Men/Kurtapajama1.jpeg";
// import mens2 from "../../assets/Men/shirt10.jpeg";
// import mens3 from "../../assets/Men/Kurtapajama3.jpeg";
// import mens4 from "../../assets/Men/Suits10.jpeg";

// // Kids Collection Images
// import kidsMain from "../../assets/Kids/pantset1.jpeg";
// import kids1 from "../../assets/Kids/shirt1.jpeg";
// import kids2 from "../../assets/Kids/pantset13.jpeg";
// import kids3 from "../../assets/Kids/girljeans1.jpeg";
// import kids4 from "../../assets/Kids/girljeans3.jpeg";

// // Women's Lehenga Collection Images
// import lehengaMain from "../../assets/Women/lehanga15.jpeg";
// import lehenga1 from "../../assets/Women/lehanga2.jpeg";
// import lehenga2 from "../../assets/Women/lehanga3.jpeg";
// import lehenga3 from "../../assets/Women/lehanga4.jpeg";
// import lehenga4 from "../../assets/Women/lehanga5.jpeg";

// // Women's Western Wear Images
// import westernMain from "../../assets/Women/newSalwarsuit3.jpeg";
// import western1 from "../../assets/Women/newSalwarsuit4.jpeg";
// import western2 from "../../assets/Women/newSalwarsuit5.jpeg";
// import western3 from "../../assets/Women/newSalwarsuit6.jpeg";
// import western4 from "../../assets/Women/newSalwarsuit6.jpeg";

// // Women's Saree Collection Images
// import sareeMain from "../../assets/Women/newsaree18.jpeg";
// import saree1 from "../../assets/Women/newsaree12.jpeg";
// import saree2 from "../../assets/Women/newsaree13.jpeg";
// import saree3 from "../../assets/Women/newsaree14.jpeg";
// import saree4 from "../../assets/Women/newsaree16.jpeg";

// // Additional Collections
// import winterMain from "../../assets/Men/shirt16.jpeg";
// import partyWearMain from "../../assets/Women/Bridallehenga1.jpeg";
// import casualMain from "../../assets/Kids/Kidskurtaset1.jpeg";

// interface Product {
//   id: number;
//   name: string;
//   img: string;
//   gallery: string[];
//   description: string;
//   category: string;
// }

// // Categories
// const categories = {
//   men: {
//     id: 1,
//     name: "Men's Collection",
//     products: [
//       {
//         id: 101,
//         name: "",
//         img: mensMain,
//         gallery: [mensMain, mens1, mens2, mens3, mens4],
//         description: "",
//         category: "men"
//       },
//       {
//         id: 102,
//         name: "",
//         img: winterMain,
//         gallery: [winterMain, mens1, mens2, mens3, mens4],
//         description: "",
//         category: "men"
//       }
//     ]
//   },
//   women: {
//     id: 2,
//     name: "Women's Collection",
//     products: [
//       {
//         id: 201,
//         name: "",
//         img: lehengaMain,
//         gallery: [lehengaMain, lehenga1, lehenga2, lehenga3, lehenga4],
//         description: "",
//         category: "women"
//       },
//       {
//         id: 202,
//         name: "",
//         img: westernMain,
//         gallery: [westernMain, western1, western2, western3, western4],
//         description: "",
//         category: "women"
//       },
//       {
//         id: 203,
//         name: "",
//         img: sareeMain,
//         gallery: [sareeMain, saree1, saree2, saree3, saree4],
//         description: "",
//         category: "women"
//       },
//       {
//         id: 204,
//         name: "",
//         img: partyWearMain,
//         gallery: [partyWearMain, lehenga1, lehenga2, lehenga3, lehenga4],
//         description: "",
//         category: "women"
//       }
//     ]
//   },
//   kids: {
//     id: 3,
//     name: "Kids Collection",
//     products: [
//       {
//         id: 301,
//         name: "",
//         img: kidsMain,
//         gallery: [kidsMain, kids1, kids2, kids3, kids4],
//         description: "",
//         category: "kids"
//       },
//       {
//         id: 302,
//         name: "",
//         img: casualMain,
//         gallery: [casualMain, kids1, kids2, kids3, kids4],
//         description: "",
//         category: "kids"
//       }
//     ]
//   }
// };

// // Flatten all products for the grid view
// const allProducts = [
//   ...categories.men.products,
//   ...categories.women.products,
//   ...categories.kids.products
// ];

// // Category Filter Component
// const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
//   const [hoveredCategory, setHoveredCategory] = useState("");

//   return (
//     <motion.div 
//       className="flex flex-wrap gap-3 justify-center mb-16"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}
//     >
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <Button
//           onClick={() => setActiveCategory("all")}
//           onMouseEnter={() => setHoveredCategory("all")}
//           onMouseLeave={() => setHoveredCategory("")}
//           className={`relative px-6 py-3 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
//             activeCategory === "all"
//               ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white border-pink-500 shadow-2xl shadow-pink-500/25 scale-105"
//               : "border-pink-200 bg-white/80 hover:border-pink-300 hover:bg-pink-50 hover:shadow-xl text-pink-700"
//           }`}
//           variant="outline"
//         >
//           <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-500 ${
//             hoveredCategory === "all" && activeCategory !== "all" 
//               ? "opacity-5" 
//               : "opacity-0"
//           }`}></div>
          
//           <span className="text-lg mr-2">🌟</span>
//           All Collections
          
//           {activeCategory === "all" && (
//             <motion.div
//               className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white rounded-t-full"
//               layoutId="activeIndicator"
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             />
//           )}
//         </Button>
//       </motion.div>

//       {Object.entries(categories).map(([key, category]) => (
//         <motion.div
//           key={category.id}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Button
//             onClick={() => setActiveCategory(key)}
//             onMouseEnter={() => setHoveredCategory(key)}
//             onMouseLeave={() => setHoveredCategory("")}
//             className={`relative px-6 py-3 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
//               activeCategory === key
//                 ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white border-pink-500 shadow-2xl shadow-pink-500/25 scale-105"
//                 : "border-pink-200 bg-white/80 hover:border-pink-300 hover:bg-pink-50 hover:shadow-xl text-pink-700"
//             }`}
//             variant="outline"
//           >
//             <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-500 ${
//               hoveredCategory === key && activeCategory !== key 
//                 ? "opacity-5" 
//                 : "opacity-0"
//             }`}></div>
            
//             <span className="text-lg mr-2">
//               {key === 'men' ? '👔' : key === 'women' ? '👗' : '👶'}
//             </span>
//             {category.name}
            
//             {activeCategory === key && (
//               <motion.div
//                 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white rounded-t-full"
//                 layoutId="activeIndicator"
//                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               />
//             )}
//           </Button>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// // Product Card Component
// const ProductCard = ({ product, index, onClick }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9, y: 20 }}
//       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//       whileHover={{ y: -8 }}
//       transition={{ 
//         delay: index * 0.1,
//         type: "spring",
//         stiffness: 300
//       }}
//       className="group cursor-pointer"
//       onClick={onClick}
//     >
//       <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
//         <div className="relative overflow-hidden bg-slate-50">
//           <div className="w-full h-80 flex items-center justify-center bg-slate-100">
//             <ProductFrame image={product.img} />
//           </div>
//           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // Product Grid Component
// const ProductGrid = ({ products, onProductClick }) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//       {products.map((product, index) => (
//         <ProductCard
//           key={product.id}
//           product={product}
//           index={index}
//           onClick={() => onProductClick(product)}
//         />
//       ))}
//     </div>
//   );
// };

// // Gallery Modal Component
// const GalleryModal = ({ product, currentIndex, onClose, onPrev, onNext, onThumbnailClick }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         transition={{ type: "spring", damping: 25 }}
//         className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-hidden"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex flex-col h-full">
//           {/* Main Content */}
//           <div className="flex-1 overflow-auto relative">
//             <button
//               onClick={onClose}
//               className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 rounded-full p-2 shadow-md transition-colors duration-300 z-50"
//             >
//               <X className="w-5 h-5" />
//             </button>
            
//             <div className="p-6">
//               {/* Main Image Gallery */}
//               <div className="mb-6">
//                 <div className="relative rounded-xl overflow-hidden bg-slate-50 mb-3">
//                   <div className="flex items-center justify-center min-h-[400px] p-3">
//                     <ProductFrame image={product.gallery[currentIndex]} />
//                   </div>
                  
//                   {/* Navigation Arrows */}
//                   <button
//                     onClick={onPrev}
//                     className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 transition-all duration-300 shadow-lg"
//                   >
//                     <ChevronLeft className="w-4 h-4" />
//                   </button>
//                   <button
//                     onClick={onNext}
//                     className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 transition-all duration-300 shadow-lg"
//                   >
//                     <ChevronRight className="w-4 h-4" />
//                   </button>

//                   {/* Image Counter */}
//                   <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
//                     {currentIndex + 1} / {product.gallery.length}
//                   </div>
//                 </div>

//                 {/* Thumbnail Gallery */}
//                 <div className="flex gap-2 overflow-x-auto py-1">
//                   {product.gallery.map((image, index) => (
//                     <motion.button
//                       key={index}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => onThumbnailClick(index)}
//                       className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
//                         currentIndex === index
//                           ? "border-pink-500 shadow-md"
//                           : "border-slate-200 hover:border-slate-300"
//                       }`}
//                     >
//                       <img
//                         src={image}
//                         alt={`${product.name} ${index + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </motion.button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// // Main Product Gallery Component
// export default function ProductGallery() {
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [activeCategory, setActiveCategory] = useState("all");

//   const openModal = (product: Product) => {
//     setSelectedProduct(product);
//     setSelectedImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     if (selectedProduct) {
//       setSelectedImageIndex((prev) => 
//         prev === selectedProduct.gallery.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setSelectedImageIndex((prev) => 
//         prev === 0 ? selectedProduct.gallery.length - 1 : prev - 1
//       );
//     }
//   };

//   const selectImage = (index: number) => {
//     setSelectedImageIndex(index);
//   };

//   // Filter products based on active category
//   const filteredProducts = activeCategory === "all" 
//     ? allProducts 
//     : categories[activeCategory]?.products || [];

//   return (
//     <section className="relative overflow-hidden bg-white">
//       <div className="container mx-auto px-4 py-20 relative z-10">
//         {/* Enhanced Heading */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <Sparkles className="w-6 h-6 text-pink-500" />
//             <span className="text-sm font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
//               FEATURED COLLECTIONS
//             </span>
//             <Sparkles className="w-6 h-6 text-pink-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-pink-600 to-slate-800 bg-clip-text text-transparent">
//               Clients Gallery
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-pink-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Explore our exquisite collection of fashion wear for men, women, and kids. 
//             Each piece is crafted with attention to detail and quality.
//           </p>
//         </motion.div>

//         {/* Category Filter */}
//         <CategoryFilter 
//           activeCategory={activeCategory} 
//           setActiveCategory={setActiveCategory} 
//         />

//         {/* Product Grid */}
//         {filteredProducts.length > 0 ? (
//           <ProductGrid 
//             products={filteredProducts} 
//             onProductClick={openModal} 
//           />
//         ) : (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-20"
//           >
//             <div className="text-gray-400 text-6xl mb-4">👗</div>
//             <h3 className="text-2xl font-semibold text-gray-600 mb-2">No products found</h3>
//             <p className="text-gray-500">Try selecting a different category</p>
//           </motion.div>
//         )}
//       </div>

//       {/* Gallery Modal */}
//       <AnimatePresence>
//         {selectedProduct && (
//           <GalleryModal
//             product={selectedProduct}
//             currentIndex={selectedImageIndex}
//             onClose={closeModal}
//             onPrev={prevImage}
//             onNext={nextImage}
//             onThumbnailClick={selectImage}
//           />
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }




import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// Men's Collection Images
import mensMain from "../../assets/Men/Suit1.jpeg";
import mens1 from "../../assets/Men/Kurtapajama1.jpeg";
import mens2 from "../../assets/Men/shirt10.jpeg";
import mens3 from "../../assets/Men/Kurtapajama3.jpeg";
import mens4 from "../../assets/Men/Suits10.jpeg";

// Kids Collection Images
import kidsMain from "../../assets/Kids/pantset1.jpeg";
import kids1 from "../../assets/Kids/shirt1.jpeg";
import kids2 from "../../assets/Kids/pantset13.jpeg";
import kids3 from "../../assets/Kids/girljeans1.jpeg";
import kids4 from "../../assets/Kids/girljeans3.jpeg";

// Women's Lehenga Collection Images
import lehengaMain from "../../assets/Women/lehanga15.jpeg";
import lehenga1 from "../../assets/Women/lehanga2.jpeg";
import lehenga2 from "../../assets/Women/lehanga3.jpeg";
import lehenga3 from "../../assets/Women/lehanga4.jpeg";
import lehenga4 from "../../assets/Women/lehanga5.jpeg";

// Women's Western Wear Images
import westernMain from "../../assets/Women/western1.jpeg";
import western1 from "../../assets/Women/western2.jpeg";
import western2 from "../../assets/Women/western3.jpeg";
import western3 from "../../assets/Women/western4.jpeg";
import western4 from "../../assets/Women/western5.jpeg";

// Women's Saree Collection Images
import sareeMain from "../../assets/Women/saree13.jpeg";
import saree1 from "../../assets/Women/saree14.jpeg";
import saree2 from "../../assets/Women/saree20.jpeg";
import saree3 from "../../assets/Women/saree20.jpeg";
import saree4 from "../../assets/Women/saree21.jpeg";

// Additional Collections
import winterMain from "../../assets/Men/shirt16.jpeg";
import partyWearMain from "../../assets/Women/Bridallehenga1.jpeg";
import casualMain from "../../assets/Kids/Kidskurtaset1.jpeg";

// Categories
const categories = {
  men: {
    id: 1,
    name: "Men's Collection",
    products: [
      {
        id: 101,
        name: "Men's Collection",
        img: mensMain,
        gallery: [mensMain, mens1, mens2, mens3, mens4],
        description: "Premium formal suits for men with perfect tailoring and premium fabrics",
        rating: 4.8,
       
        category: "men"
      },
      {
        id: 102,
        name: "Shirt Collection",
        img: winterMain,
        gallery: [winterMain, mens1, mens2, mens3, mens4],
        description: "Warm and stylish winter wear for men with cozy fabrics",
        rating: 4.6,
     
        category: "men"
      }
    ]
  },
  women: {
    id: 2,
    name: "Women's Collection",
    products: [
      {
        id: 201,
        name: "Lehenga Collection",
        img: lehengaMain,
        gallery: [lehengaMain, lehenga1, lehenga2, lehenga3, lehenga4],
        description: "Elegant and traditional lehengas with intricate embroidery",
        rating: 4.9,
        
        category: "women"
      },
      {
        id: 202,
        name: "Western Wear",
        img: westernMain,
        gallery: [westernMain, western1, western2, western3, western4],
        description: "Stylish western clothing for modern women",
        rating: 4.7,
     
        category: "women"
      },
      {
        id: 203,
        name: "Saree Collection",
        img: sareeMain,
        gallery: [sareeMain, saree1, saree2, saree3, saree4],
        description: "Beautiful traditional sarees in various fabrics and designs",
        rating: 4.8,
        
        category: "women"
      },
      {
        id: 204,
        name: "Bridal Lehenga",
        img: partyWearMain,
        gallery: [partyWearMain, lehenga1, lehenga2, lehenga3, lehenga4],
        description: "Exquisite bridal lehengas for your special day",
        rating: 5.0,
        
        category: "women"
      }
    ]
  },
  kids: {
    id: 3,
    name: "Kids Collection",
    products: [
      {
        id: 301,
        name: "Kids Fashion",
        img: kidsMain,
        gallery: [kidsMain, kids1, kids2, kids3, kids4],
        description: "Adorable kids fashion collection with comfortable fabrics",
        rating: 4.5,
        
        category: "kids"
      },
      {
        id: 302,
        name: "Kids Kurta Set",
        img: casualMain,
        gallery: [casualMain, kids1, kids2, kids3, kids4],
        description: "Comfortable casual clothing for kids with modern designs",
        rating: 4.4,
       
        category: "kids"
      }
    ]
  }
};

// Flatten all products for the grid view
const allProducts = [
  ...categories.men.products,
  ...categories.women.products,
  ...categories.kids.products
];

// Category Filter Component
const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
  return (
    <div id="category-filter-section" className="flex justify-center mb-12">
      <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-wrap gap-2">
        <button
          id="filter-button-all"
          onClick={() => setActiveCategory("all")}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeCategory === "all" 
              ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg shadow-pink-500/25" 
              : "text-gray-600 hover:bg-gray-100 hover:text-pink-600"
          }`}
        >
          All Collections
        </button>
        {Object.entries(categories).map(([key, category]) => (
          <button
            key={category.id}
            id={`filter-button-${key}`}
            onClick={() => setActiveCategory(key)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeCategory === key 
                ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg shadow-pink-500/25" 
                : "text-gray-600 hover:bg-gray-100 hover:text-pink-600"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, index, onClick }) => {
  return (
    <motion.div
      id={`product-card-${product.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer group overflow-hidden"
    >
      <div className="w-full h-72 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 group-hover:from-slate-100 group-hover:to-slate-200 transition-all duration-500 relative overflow-hidden">
        <motion.img
          src={product.img}
          alt={product.name}
          className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-gray-700">
          {product.category === 'men' ? '👔 Men' : product.category === 'women' ? '👗 Women' : '👶 Kids'}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Star size={16} className="text-yellow-400 fill-current" /> 
            <span className="font-semibold text-gray-700">{product.rating}</span>
            <span className="text-gray-400 text-sm">Rating</span>
          </div>
          <span className="text-lg font-bold text-pink-600">{product.price}</span>
        </div>
        
        <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
          View Gallery
        </button>
      </div>
    </motion.div>
  );
};

// Product Grid Component
const ProductGrid = ({ products, onProductClick }) => {
  return (
    <div id="product-grid-container" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
          onClick={() => onProductClick(product)}
        />
      ))}
    </div>
  );
};

// Modal Header Component
const ModalHeader = ({ product, onClose }) => {
  return (
    <div id="modal-header-section" className="flex items-center justify-between p-6 border-b border-gray-200">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-800">
          {product.name}
        </h2>
        <p className="text-gray-600 mt-1">{product.description}</p>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="font-semibold text-gray-700">{product.rating}</span>
          </div>
          <span className="text-lg font-bold text-pink-600">{product.price}</span>
        </div>
      </div>
      <button
        id="modal-close-button"
        className="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 ml-4"
        onClick={onClose}
      >
        <X size={20} />
      </button>
    </div>
  );
};

// Navigation Arrows Component
const NavigationArrows = ({ onPrev, onNext, galleryLength }) => {
  if (galleryLength <= 1) return null;
  
  return (
    <div id="gallery-navigation-arrows">
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft size={24} className="text-gray-700" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight size={24} className="text-gray-700" />
      </button>
    </div>
  );
};

// Image Counter Component
const ImageCounter = ({ currentIndex, totalImages }) => {
  return (
    <div id="image-counter-display" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
      {currentIndex + 1} / {totalImages}
    </div>
  );
};

// Image Gallery Component
const ImageGallery = ({ product, currentIndex, onPrev, onNext }) => {
  return (
    <div id="image-gallery-viewer" className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="flex items-center justify-center h-80">
        <motion.img
          key={currentIndex}
          src={product.gallery[currentIndex]}
          alt={`${product.name} ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-lg"
        />
      </div>

      <NavigationArrows 
        onPrev={onPrev} 
        onNext={onNext} 
        galleryLength={product.gallery.length} 
      />
      
      <ImageCounter 
        currentIndex={currentIndex} 
        totalImages={product.gallery.length} 
      />
    </div>
  );
};

// Thumbnail Grid Component
const ThumbnailGrid = ({ product, currentIndex, onThumbnailClick }) => {
  return (
    <div id="thumbnail-grid-section" className="p-6 border-t border-gray-200">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Gallery ({product.gallery.length} images)
      </h3>
      <div className="grid grid-cols-5 gap-3">
        {product.gallery.map((img, idx) => (
          <motion.div 
            key={idx} 
            id={`thumbnail-${idx}`}
            className={`flex items-center justify-center bg-slate-50 rounded-xl p-2 hover:bg-slate-100 transition-all duration-300 cursor-pointer border-2 ${
              currentIndex === idx ? 'border-pink-500 shadow-md' : 'border-transparent hover:border-gray-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onThumbnailClick(idx)}
          >
            <img
              src={img}
              alt={`${product.name} ${idx + 1}`}
              className="w-full h-16 object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Gallery Modal Component
const GalleryModal = ({ product, currentIndex, onClose, onPrev, onNext, onThumbnailClick }) => {
  return (
    <motion.div
      id="gallery-modal-popup"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader product={product} onClose={onClose} />
        
        <ImageGallery 
          product={product} 
          currentIndex={currentIndex}
          onPrev={onPrev}
          onNext={onNext}
        />
        
        <ThumbnailGrid 
          product={product}
          currentIndex={currentIndex}
          onThumbnailClick={onThumbnailClick}
        />
      </motion.div>
    </motion.div>
  );
};

// Main Product Gallery Component
export default function ProductGallery() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  const openModal = (product) => {
    setSelectedProduct(product);
    setSelectedImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === selectedProduct.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? selectedProduct.gallery.length - 1 : prev - 1
    );
  };

  const selectImage = (index) => {
    setSelectedImageIndex(index);
  };

  // Filter products based on active category
  const filteredProducts = activeCategory === "all" 
    ? allProducts 
    : categories[activeCategory]?.products || [];

  // Close modal on escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    
    if (selectedProduct) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

  return (
    <section id="product-gallery-main" className="py-20 container mx-auto px-6 bg-gradient-to-b from-white to-pink-50/30">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-pink-600 to-gray-800 bg-clip-text text-transparent">
          Fashion Collection Gallery
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Explore our exquisite collection of fashion wear for men, women, and kids. 
          Each piece is crafted with attention to detail and quality.
        </p>
      </motion.div>

      {/* Category Filter */}
      <CategoryFilter 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      {/* Product Grid */}
      <ProductGrid 
        products={filteredProducts} 
        onProductClick={openModal} 
      />

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <GalleryModal
            product={selectedProduct}
            currentIndex={selectedImageIndex}
            onClose={closeModal}
            onPrev={prevImage}
            onNext={nextImage}
            onThumbnailClick={selectImage}
          />
        )}
      </AnimatePresence>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="text-gray-400 text-6xl mb-4">👗</div>
          <h3 className="text-2xl font-semibold text-gray-600 mb-2">No products found</h3>
          <p className="text-gray-500">Try selecting a different category</p>
        </motion.div>
      )}
    </section>
  );
}