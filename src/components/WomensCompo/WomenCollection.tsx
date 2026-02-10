// import { motion } from "framer-motion";
// import womenHero from "@/assets/Women/WhatsApp Image 2025-11-07 at 09.41.14 (1).jpeg"; // replace with your actual image
// import ProductCard from "@/components/ProductCard"; // adjust the import path

// export default function WomenCollection() {
//   const categories = [
//     { name: "Dresses", count: 32 },
//     { name: "Ethnic Wear", count: 28 },
//     { name: "Western", count: 42 },
//     { name: "Accessories", count: 56 },
//   ];

//   return (
//     <section className="bg-gradient-to-b from-pink-50 to-white py-20 mt-20">
//       <div className="container mx-auto px-4">
//         {/* Category Buttons */}
//         <motion.div
//           className="flex flex-wrap gap-4 justify-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           {categories.map((cat) => (
//             <motion.button
//               key={cat.name}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-3 rounded-full border border-gray-300 bg-white shadow-sm 
//                          hover:bg-pink-600 hover:text-white hover:border-pink-600 
//                          transition-all duration-300 text-gray-700 font-medium"
//             >
//               {cat.name}{" "}
//               <span className="text-gray-400 text-sm font-normal">({cat.count})</span>
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* New Arrivals Section */}
//         <CollectionBlock
//           title="✨ New Arrivals"
//           count={8}
//           image={womenHero}
//           productTitle="Elegant Summer Dress"
//           category="Dresses"
//         />

//         {/* Ethnic Collection Section */}
//         <CollectionBlock
//           title="🌸 Ethnic Collection"
//           count={8}
//           image={womenHero}
//           productTitle="Traditional Saree"
//           category="Ethnic"
//         />

//         {/* Western Wear Section */}
//         <CollectionBlock
//           title="💃 Western Wear"
//           count={4}
//           image={womenHero}
//           productTitle="Contemporary Top"
//           category="Western"
//         />
//       </div>
//     </section>
//   );
// }

// // 🛍️ Reusable Collection Block Component
// interface CollectionBlockProps {
//   title: string;
//   count: number;
//   image: string;
//   productTitle: string;
//   category: string;
// }

// function CollectionBlock({ title, count, image, productTitle, category }: CollectionBlockProps) {
//   return (
//     <motion.div
//       className="mb-20"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <h2 className="font-serif text-3xl font-semibold mb-8 text-gray-800 border-l-4 border-pink-500 pl-4">
//         {title}
//       </h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {[...Array(count)].map((_, i) => (
//           <ProductCard key={i} image={image} title={productTitle} category={category} />
//         ))}
//       </div>
//     </motion.div>
//   );
// }







// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import womenHero from "@/assets/Women/WhatsApp Image 2025-11-07 at 09.41.14 (1).jpeg";
// import ProductCard from "@/components/ProductCard";

// export default function WomenCollection() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const categories = [
//     { name: "All", count: 158 },
//     { name: "Dresses", count: 32 },
//     { name: "Ethnic Wear", count: 28 },
//     { name: "Western", count: 42 },
//     { name: "Accessories", count: 56 },
//   ];

//   // Mock product data with gallery images
//   const productData = {
//     "Elegant Summer Dress": {
//       title: "Elegant Summer Dress",
//       category: "Dresses",
//       gallery: [
//         womenHero,
//         womenHero, // replace with actual different images
//         womenHero,
//         womenHero,
//         womenHero,
//       ],
//       description: "Beautiful summer dress with floral patterns",
//       price: "$89.99"
//     },
//     "Traditional Saree": {
//       title: "Traditional Saree",
//       category: "Ethnic",
//       gallery: [
//         womenHero,
//         womenHero,
//         womenHero,
//         womenHero,
//       ],
//       description: "Elegant traditional silk saree",
//       price: "$129.99"
//     },
//     "Contemporary Top": {
//       title: "Contemporary Top",
//       category: "Western",
//       gallery: [
//         womenHero,
//         womenHero,
//         womenHero,
//       ],
//       description: "Modern contemporary top for casual wear",
//       price: "$49.99"
//     }
//   };

//   const handleCategoryClick = (categoryName: string) => {
//     setActiveCategory(categoryName);
//   };

//   const handleProductClick = (productTitle: string) => {
//     setSelectedProduct(productData[productTitle]);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//   };

//   return (
//     <section className="bg-gradient-to-b from-pink-50 to-white py-20 mt-20">
//       <div className="container mx-auto px-4">
//         {/* Category Buttons */}
//         <motion.div
//           className="flex flex-wrap gap-4 justify-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           {categories.map((cat) => (
//             <motion.button
//               key={cat.name}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => handleCategoryClick(cat.name)}
//               className={`px-8 py-3 rounded-full border transition-all duration-300 font-medium ${
//                 activeCategory === cat.name
//                   ? "bg-pink-600 text-white border-pink-600"
//                   : "border-gray-300 bg-white shadow-sm text-gray-700 hover:bg-pink-600 hover:text-white hover:border-pink-600"
//               }`}
//             >
//               {cat.name}{" "}
//               <span className={`text-sm font-normal ${
//                 activeCategory === cat.name ? "text-pink-200" : "text-gray-400"
//               }`}>
//                 ({cat.count})
//               </span>
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* New Arrivals Section - 2 rows (8 items) */}
//         <CollectionBlock
//           title="✨ New Arrivals"
//           count={8}
//           image={womenHero}
//           productTitle="Elegant Summer Dress"
//           category="Dresses"
//           onProductClick={handleProductClick}
//         />

//         {/* Ethnic Collection Section - 2 rows (8 items) */}
//         <CollectionBlock
//           title="🌸 Ethnic Collection"
//           count={8}
//           image={womenHero}
//           productTitle="Traditional Saree"
//           category="Ethnic"
//           onProductClick={handleProductClick}
//         />

//         {/* Western Wear Section - 2 rows (8 items) */}
//         <CollectionBlock
//           title="💃 Western Wear"
//           count={8}
//           image={womenHero}
//           productTitle="Contemporary Top"
//           category="Western"
//           onProductClick={handleProductClick}
//         />

//         {/* Product Modal */}
//         <AnimatePresence>
//           {selectedProduct && (
//             <ProductModal 
//               product={selectedProduct} 
//               onClose={closeModal} 
//             />
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }

// // Updated CollectionBlock with onClick
// interface CollectionBlockProps {
//   title: string;
//   count: number;
//   image: string;
//   productTitle: string;
//   category: string;
//   onProductClick: (title: string) => void;
// }

// function CollectionBlock({ 
//   title, 
//   count, 
//   image, 
//   productTitle, 
//   category, 
//   onProductClick 
// }: CollectionBlockProps) {
//   return (
//     <motion.div
//       className="mb-20"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <h2 className="font-serif text-3xl font-semibold mb-8 text-gray-800 border-l-4 border-pink-500 pl-4">
//         {title}
//       </h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {[...Array(count)].map((_, i) => (
//           <div 
//             key={i} 
//             onClick={() => onProductClick(productTitle)}
//             className="cursor-pointer"
//           >
//             <ProductCard 
//               image={image} 
//               title={productTitle} 
//               category={category} 
//             />
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// // Product Modal Component
// function ProductModal({ product, onClose }: { product: any; onClose: () => void }) {
//   const [selectedImage, setSelectedImage] = useState(0);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="p-6">
//           {/* Header */}
//           <div className="flex justify-between items-start mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
//             >
//               ×
//             </button>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Image Gallery */}
//             <div>
//               {/* Main Image */}
//               <div className="mb-4 rounded-lg overflow-hidden">
//                 <img
//                   src={product.gallery[selectedImage]}
//                   alt={product.title}
//                   className="w-full h-80 object-cover"
//                 />
//               </div>
              
//               {/* Thumbnail Gallery */}
//               <div className="grid grid-cols-4 gap-2">
//                 {product.gallery.map((img: string, index: number) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedImage(index)}
//                     className={`rounded-lg overflow-hidden border-2 ${
//                       selectedImage === index ? "border-pink-500" : "border-gray-200"
//                     }`}
//                   >
//                     <img
//                       src={img}
//                       alt={`${product.title} ${index + 1}`}
//                       className="w-full h-20 object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Product Details */}
//             <div>
//               <div className="mb-4">
//                 <span className="inline-block bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
//                   {product.category}
//                 </span>
//               </div>
              
//               <p className="text-gray-600 mb-4">{product.description}</p>
              
//               <div className="text-2xl font-bold text-gray-800 mb-6">
//                 {product.price}
//               </div>

//               {/* Size Selection */}
//               <div className="mb-6">
//                 <h4 className="font-semibold mb-2">Size</h4>
//                 <div className="flex gap-2">
//                   {["S", "M", "L", "XL"].map((size) => (
//                     <button
//                       key={size}
//                       className="w-12 h-12 border border-gray-300 rounded-lg hover:border-pink-500 hover:text-pink-600 transition-colors"
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex gap-3">
//                 <button className="flex-1 bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
//                   Add to Cart
//                 </button>
//                 <button className="flex-1 border border-pink-600 text-pink-600 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors">
//                   Add to Wishlist
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }







// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import womenHero from "@/assets/Women/WhatsApp Image 2025-11-07 at 09.41.14 (1).jpeg";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight, Heart, ShoppingBag } from "lucide-react";

// const categories = [
//   { name: "All", icon: "🌟", count: 158 },
//   { name: "Dresses", icon: "👗", count: 32 },
//   { name: "Ethnic Wear", icon: "🎎", count: 28 },
//   { name: "Western", icon: "👚", count: 42 },
//   { name: "Accessories", icon: "💍", count: 56 },
// ];

// // Mock product data with gallery images
// const generateProductData = () => ({
//   dresses: [...Array(8)].map((_, i) => ({
//     id: `dress-${i}`,
//     title: ["Elegant Summer Dress", "Floral Maxi Dress", "Cocktail Party Dress", "Evening Gown"][i % 4],
//     description: "Beautiful and elegant dresses perfect for any occasion. Made with premium fabrics for ultimate comfort and style.",
//     images: [womenHero, womenHero, womenHero, womenHero],
//     category: "Dresses",
//     price: "$89.99 - $129.99",
//     sizes: ["XS", "S", "M", "L", "XL"],
//     colors: ["Pink", "Black", "White", "Navy"]
//   })),
//   ethnic: [...Array(8)].map((_, i) => ({
//     id: `ethnic-${i}`,
//     title: ["Traditional Saree", "Designer Lehenga", "Anarkali Suit", "Silk Kurti"][i % 4],
//     description: "Exquisite ethnic wear that celebrates tradition with contemporary elegance. Perfect for weddings and festivals.",
//     images: [womenHero, womenHero, womenHero, womenHero],
//     category: "Ethnic Wear",
//     price: "$129.99 - $299.99",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Red", "Blue", "Green", "Gold"]
//   })),
//   western: [...Array(8)].map((_, i) => ({
//     id: `western-${i}`,
//     title: ["Contemporary Top", "Designer Jeans", "Casual Blazer", "Party Wear"][i % 4],
//     description: "Modern western wear that combines comfort with style. Perfect for casual outings and professional settings.",
//     images: [womenHero, womenHero, womenHero, womenHero],
//     category: "Western",
//     price: "$49.99 - $89.99",
//     sizes: ["XS", "S", "M", "L", "XL"],
//     colors: ["White", "Black", "Grey", "Beige"]
//   })),
//   accessories: [...Array(8)].map((_, i) => ({
//     id: `accessory-${i}`,
//     title: ["Designer Handbags", "Elegant Jewelry", "Stylish Scarves", "Luxury Watches"][i % 4],
//     description: "Complete your look with our exquisite collection of accessories that add the perfect finishing touch.",
//     images: [womenHero, womenHero, womenHero, womenHero],
//     category: "Accessories",
//     price: "$29.99 - $199.99",
//     sizes: ["One Size"],
//     colors: ["Gold", "Silver", "Multi", "Rose Gold"]
//   }))
// });

// export default function WomenCollection() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "✨ New Arrivals",
//       category: "Dresses",
//       gradient: "from-purple-50 to-pink-50",
//       products: productData.dresses,
//     },
//     {
//       title: "🌸 Ethnic Collection",
//       category: "Ethnic Wear",
//       gradient: "from-rose-50 to-orange-50",
//       products: productData.ethnic,
//     },
//     {
//       title: "💃 Western Wear",
//       category: "Western",
//       gradient: "from-blue-50 to-cyan-50",
//       products: productData.western,
//     },
//     {
//       title: "💎 Luxury Accessories",
//       category: "Accessories",
//       gradient: "from-emerald-50 to-teal-50",
//       products: productData.accessories,
//     },
//   ];

//   const openModal = (product: any) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === selectedProduct.images.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === 0 ? selectedProduct.images.length - 1 : prev - 1
//     );
//   };

//   // Get related products (same category, excluding current product)
//   const getRelatedProducts = () => {
//     if (!selectedProduct) return [];
//     const currentSection = sectionData.find(section => section.category === selectedProduct.category);
//     return currentSection?.products.filter(product => product.id !== selectedProduct.id) || [];
//   };

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
//             <span className="text-sm font-semibold text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
//               TRENDING COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-pink-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-pink-600 to-slate-800 bg-clip-text text-transparent">
//             Women's Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-600 to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-pink-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-600 to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
//             Discover elegant fashion that celebrates your unique style — where sophistication meets 
//             comfort in every design and every detail.
//           </p>
//         </motion.div>

//         {/* Enhanced Category Buttons */}
//         <motion.div 
//           className="flex flex-wrap gap-3 justify-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           {categories.map((cat) => (
//             <motion.div
//               key={cat.name}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Button
//                 onClick={() => setActiveCategory(cat.name)}
//                 onMouseEnter={() => setHoveredCategory(cat.name)}
//                 onMouseLeave={() => setHoveredCategory("")}
//                 className={`relative px-8 py-4 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
//                   activeCategory === cat.name
//                     ? "bg-gradient-to-r from-pink-600 to-pink-500 text-white border-pink-600 shadow-2xl shadow-pink-500/25 scale-105"
//                     : "border-slate-200 bg-white/80 hover:border-pink-500/50 hover:shadow-xl text-slate-700"
//                 }`}
//                 variant="outline"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 transition-all duration-500 ${
//                   hoveredCategory === cat.name && activeCategory !== cat.name 
//                     ? "opacity-5" 
//                     : "opacity-0"
//                 }`}></div>
                
//                 <span className="text-lg mr-2">{cat.icon}</span>
//                 {cat.name}
//                 <span className={`text-sm font-normal ml-2 ${
//                   activeCategory === cat.name ? "text-pink-200" : "text-slate-400"
//                 }`}>
//                   ({cat.count})
//                 </span>
                
//                 {activeCategory === cat.name && (
//                   <motion.div
//                     className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white rounded-t-full"
//                     layoutId="activeIndicator"
//                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                   />
//                 )}
//               </Button>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Enhanced Product Sections */}
//         {sectionData.map(
//           (section) =>
//             (activeCategory === "All" || activeCategory === section.category) && (
//               <motion.div
//                 key={section.category}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className={`mb-20 p-8 rounded-3xl bg-gradient-to-br ${section.gradient}`}
//               >
//                 <div className="flex items-center justify-between mb-10">
//                   <div className="flex items-center gap-4">
//                     <div className="w-2 h-12 bg-gradient-to-b from-pink-600 to-pink-400 rounded-full"></div>
//                     <div>
//                       <h2 className="font-serif text-4xl font-bold text-slate-800">
//                         {section.title}
//                       </h2>
//                       <p className="text-slate-600 mt-1">
//                         {section.products.length} stunning items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-white border border-slate-200 hover:border-pink-500 hover:bg-white rounded-xl px-6 py-2 transition-all duration-300">
//                     <span className="mr-2">Explore All</span>
//                     <motion.span
//                       initial={{ x: 0 }}
//                       whileHover={{ x: 3 }}
//                       transition={{ type: "spring", stiffness: 400 }}
//                     >
//                       →
//                     </motion.span>
//                   </Button>
//                 </div>

//                 {/* Products Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                   {section.products.map((product, i) => (
//                     <motion.div
//                       key={product.id}
//                       initial={{ opacity: 0, scale: 0.9, y: 20 }}
//                       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                       whileHover={{ y: -8 }}
//                       transition={{ 
//                         delay: i * 0.1,
//                         type: "spring",
//                         stiffness: 300
//                       }}
//                       className="group cursor-pointer"
//                       onClick={() => openModal(product)}
//                     >
//                       <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
//                         <div className="relative overflow-hidden bg-slate-50">
//                           <motion.img
//                             src={product.images[0]}
//                             alt={product.title}
//                             className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                             whileHover={{ scale: 1.05 }}
//                             transition={{ type: "spring", stiffness: 300 }}
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
//                           {/* Quick Actions */}
//                           <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                             <button className="bg-white/90 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg">
//                               <Heart className="w-4 h-4 text-slate-700" />
//                             </button>
//                             <button className="bg-white/90 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg">
//                               <ShoppingBag className="w-4 h-4 text-slate-700" />
//                             </button>
//                           </div>
//                         </div>
                        
//                         <div className="p-6">
//                           <div className="flex justify-between items-start mb-2">
//                             <h3 className="font-semibold text-lg text-slate-800 group-hover:text-pink-600 transition-colors duration-300">
//                               {product.title}
//                             </h3>
//                             <span className="text-pink-600 font-bold">{product.price.split(' - ')[0]}</span>
//                           </div>
//                           <p className="text-slate-600 text-sm mb-3 line-clamp-2">
//                             {product.description}
//                           </p>
//                           <div className="flex gap-1">
//                             {product.colors.slice(0, 3).map((color, index) => (
//                               <div
//                                 key={index}
//                                 className="w-3 h-3 rounded-full border border-slate-200"
//                                 style={{ 
//                                   backgroundColor: color.toLowerCase() === 'multi' ? 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)' : 
//                                     color.toLowerCase() === 'pink' ? '#ec4899' :
//                                     color.toLowerCase() === 'black' ? '#1f2937' :
//                                     color.toLowerCase() === 'white' ? '#f8fafc' :
//                                     color.toLowerCase() === 'red' ? '#dc2626' :
//                                     color.toLowerCase() === 'blue' ? '#2563eb' :
//                                     color.toLowerCase() === 'green' ? '#16a34a' :
//                                     color.toLowerCase() === 'gold' ? '#f59e0b' :
//                                     color.toLowerCase() === 'silver' ? '#94a3b8' :
//                                     color.toLowerCase() === 'grey' ? '#6b7280' :
//                                     color.toLowerCase() === 'beige' ? '#e5e7eb' :
//                                     color.toLowerCase() === 'navy' ? '#1e3a8a' : '#6b7280'
//                                 }}
//                               />
//                             ))}
//                             {product.colors.length > 3 && (
//                               <span className="text-xs text-slate-500 ml-1">
//                                 +{product.colors.length - 3}
//                               </span>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             )
//         )}
//       </div>

//       {/* Gallery Modal */}
//       <AnimatePresence>
//         {selectedProduct && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", damping: 25 }}
//               className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex flex-col h-full">
//                 {/* Header */}
//                 <div className="flex justify-between items-center p-6 border-b border-slate-200">
//                   <h2 className="font-serif text-2xl font-bold text-slate-800">
//                     {selectedProduct.title}
//                   </h2>
//                   <button
//                     onClick={closeModal}
//                     className="bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors duration-300"
//                   >
//                     <X className="w-6 h-6" />
//                   </button>
//                 </div>

//                 {/* Main Content */}
//                 <div className="flex-1 overflow-auto">
//                   <div className="p-8">
//                     {/* Main Image Gallery */}
//                     <div className="mb-8">
//                       <div className="relative rounded-2xl overflow-hidden bg-slate-50 mb-4">
//                         <motion.img
//                           key={currentImageIndex}
//                           src={selectedProduct.images[currentImageIndex]}
//                           alt={selectedProduct.title}
//                           className="w-full h-96 object-cover"
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           transition={{ duration: 0.3 }}
//                         />
                        
//                         {/* Navigation Arrows */}
//                         <button
//                           onClick={prevImage}
//                           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
//                         >
//                           <ChevronLeft className="w-6 h-6" />
//                         </button>
//                         <button
//                           onClick={nextImage}
//                           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
//                         >
//                           <ChevronRight className="w-6 h-6" />
//                         </button>
//                       </div>

//                       {/* Thumbnail Gallery */}
//                       <div className="flex gap-3 overflow-x-auto py-2">
//                         {selectedProduct.images.map((image, index) => (
//                           <motion.button
//                             key={index}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => setCurrentImageIndex(index)}
//                             className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
//                               currentImageIndex === index
//                                 ? "border-pink-600 shadow-md"
//                                 : "border-slate-200 hover:border-slate-300"
//                             }`}
//                           >
//                             <img
//                               src={image}
//                               alt={`${selectedProduct.title} ${index + 1}`}
//                               className="w-full h-full object-cover"
//                             />
//                           </motion.button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Product Details */}
//                     <div className="grid md:grid-cols-2 gap-8 mb-8">
//                       <div>
//                         <h3 className="font-serif text-xl font-bold text-slate-800 mb-4">Product Details</h3>
//                         <p className="text-slate-600 leading-relaxed mb-4">
//                           {selectedProduct.description}
//                         </p>
//                         <div className="text-2xl font-bold text-pink-600 mb-4">
//                           {selectedProduct.price}
//                         </div>
//                       </div>
                      
//                       <div>
//                         {/* Size Selection */}
//                         <div className="mb-6">
//                           <h4 className="font-semibold text-slate-800 mb-3">Size</h4>
//                           <div className="flex flex-wrap gap-2">
//                             {selectedProduct.sizes.map((size) => (
//                               <button
//                                 key={size}
//                                 className="px-4 py-2 border border-slate-300 rounded-lg hover:border-pink-600 hover:text-pink-600 transition-colors duration-300 font-medium"
//                               >
//                                 {size}
//                               </button>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Color Selection */}
//                         <div className="mb-6">
//                           <h4 className="font-semibold text-slate-800 mb-3">Color</h4>
//                           <div className="flex flex-wrap gap-2">
//                             {selectedProduct.colors.map((color) => (
//                               <button
//                                 key={color}
//                                 className="px-4 py-2 border border-slate-300 rounded-lg hover:border-pink-600 hover:text-pink-600 transition-colors duration-300 font-medium"
//                               >
//                                 {color}
//                               </button>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="flex gap-3">
//                           <Button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-semibold transition-all duration-300">
//                             <ShoppingBag className="w-5 h-5 mr-2" />
//                             Add to Cart
//                           </Button>
//                           <Button className="flex-1 border border-pink-600 text-pink-600 hover:bg-pink-50 py-3 rounded-xl font-semibold transition-all duration-300">
//                             <Heart className="w-5 h-5 mr-2" />
//                             Wishlist
//                           </Button>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Related Products Gallery */}
//                     <div>
//                       <h3 className="font-serif text-2xl font-bold text-slate-800 mb-6">
//                         You Might Also Like
//                       </h3>
//                       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//                         {getRelatedProducts().slice(0, 5).map((product) => (
//                           <motion.div
//                             key={product.id}
//                             whileHover={{ scale: 1.05 }}
//                             className="cursor-pointer group"
//                             onClick={() => {
//                               setSelectedProduct(product);
//                               setCurrentImageIndex(0);
//                             }}
//                           >
//                             <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 transition-all duration-300 group-hover:border-pink-600 group-hover:shadow-md">
//                               <img
//                                 src={product.images[0]}
//                                 alt={product.title}
//                                 className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
//                               />
//                               <div className="p-3">
//                                 <h4 className="font-semibold text-sm text-slate-800 mb-1 group-hover:text-pink-600 transition-colors duration-300">
//                                   {product.title}
//                                 </h4>
//                                 <p className="text-pink-600 font-bold text-sm">{product.price.split(' - ')[0]}</p>
//                               </div>
//                             </div>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }








// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import womenHero from "@/assets/Women/WhatsApp Image 2025-11-07 at 09.41.14 (1).jpeg";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight, Heart, ShoppingBag } from "lucide-react";

// const categories = [
//   { name: "All", icon: "🌟", count: 158 },
//   { name: "Dresses", icon: "👗", count: 32 },
//   { name: "Ethnic Wear", icon: "🎎", count: 28 },
//   { name: "Western", icon: "👚", count: 42 },
//   { name: "Accessories", icon: "💍", count: 56 },
// ];

// // Mock product data with gallery images
// const generateProductData = () => ({
//   dresses: [...Array(8)].map((_, i) => ({
//     id: `dress-${i}`,
//     title: ["Elegant Summer Dress", "Floral Maxi Dress", "Cocktail Party Dress", "Evening Gown"][i % 4],
//     description: "Beautiful and elegant dresses perfect for any occasion. Made with premium fabrics for ultimate comfort and style.",
//     images: [womenHero, womenHero, womenHero, womenHero],
//     category: "Dresses",
//     sizes: ["XS", "S", "M", "L", "XL"],
//     colors: ["Pink", "Black", "White", "Navy"]
//   })),
//   ethnic: [...Array(8)].map((_, i) => ({
//     id: `ethnic-${i}`,
//     title: ["Traditional Saree", "Designer Lehenga", "Anarkali Suit", "Silk Kurti"][i % 4],
//     description: "Exquisite ethnic wear that celebrates tradition with contemporary elegance.",
//     images: [womenHero, womenHero, womenHero, womenHero],
//     category: "Ethnic Wear",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Red", "Blue", "Green", "Gold"]
//   })),
//   western: [...Array(8)].map((_, i) => ({
//     id: `western-${i}`,
//     title: ["Contemporary Top", "Designer Jeans", "Casual Blazer", "Party Wear"][i % 4],
//     description: "Modern western wear that combines comfort with style.",
//     images: [womenHero, womenHero, womenHero, womenHero],
//     category: "Western",
//     sizes: ["XS", "S", "M", "L", "XL"],
//     colors: ["White", "Black", "Grey", "Beige"]
//   })),
//   accessories: [...Array(8)].map((_, i) => ({
//     id: `accessory-${i}`,
//     title: ["Designer Handbags", "Elegant Jewelry", "Stylish Scarves", "Luxury Watches"][i % 4],
//     description: "Complete your look with our exquisite collection.",
//     images: [womenHero, womenHero, womenHero, womenHero],
//     category: "Accessories",
//     sizes: ["One Size"],
//     colors: ["Gold", "Silver", "Multi", "Rose Gold"]
//   }))
// });

// export default function WomenCollection() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "✨ New Arrivals",
//       category: "Dresses",
//       gradient: "from-purple-50 to-pink-50",
//       products: productData.dresses,
//     },
//     {
//       title: "🌸 Ethnic Collection",
//       category: "Ethnic Wear",
//       gradient: "from-rose-50 to-orange-50",
//       products: productData.ethnic,
//     },
//     {
//       title: "💃 Western Wear",
//       category: "Western",
//       gradient: "from-blue-50 to-cyan-50",
//       products: productData.western,
//     },
//     {
//       title: "💎 Luxury Accessories",
//       category: "Accessories",
//       gradient: "from-emerald-50 to-teal-50",
//       products: productData.accessories,
//     },
//   ];

//   const openModal = (product: any) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === selectedProduct.images.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === 0 ? selectedProduct.images.length - 1 : prev - 1
//     );
//   };

//   // Get related products (same category, excluding current product)
//   const getRelatedProducts = () => {
//     if (!selectedProduct) return [];
//     const currentSection = sectionData.find(section => section.category === selectedProduct.category);
//     return currentSection?.products.filter(product => product.id !== selectedProduct.id) || [];
//   };

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
//             <span className="text-sm font-semibold text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
//               TRENDING COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-pink-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-pink-600 to-slate-800 bg-clip-text text-transparent">
//             Women's Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-600 to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-pink-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-600 to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
//             Discover elegant fashion that celebrates your unique style — where sophistication meets 
//             comfort in every design and every detail.
//           </p>
//         </motion.div>

//         {/* Enhanced Category Buttons */}
//         <motion.div 
//           className="flex flex-wrap gap-3 justify-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           {categories.map((cat) => (
//             <motion.div
//               key={cat.name}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Button
//                 onClick={() => setActiveCategory(cat.name)}
//                 onMouseEnter={() => setHoveredCategory(cat.name)}
//                 onMouseLeave={() => setHoveredCategory("")}
//                 className={`relative px-8 py-4 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
//                   activeCategory === cat.name
//                     ? "bg-gradient-to-r from-pink-600 to-pink-500 text-white border-pink-600 shadow-2xl shadow-pink-500/25 scale-105"
//                     : "border-slate-200 bg-white/80 hover:border-pink-500/50 hover:shadow-xl text-slate-700"
//                 }`}
//                 variant="outline"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 transition-all duration-500 ${
//                   hoveredCategory === cat.name && activeCategory !== cat.name 
//                     ? "opacity-5" 
//                     : "opacity-0"
//                 }`}></div>
                
//                 <span className="text-lg mr-2">{cat.icon}</span>
//                 {cat.name}
//                 <span className={`text-sm font-normal ml-2 ${
//                   activeCategory === cat.name ? "text-pink-200" : "text-slate-400"
//                 }`}>
//                   ({cat.count})
//                 </span>
                
//                 {activeCategory === cat.name && (
//                   <motion.div
//                     className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white rounded-t-full"
//                     layoutId="activeIndicator"
//                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                   />
//                 )}
//               </Button>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Enhanced Product Sections */}
//         {sectionData.map(
//           (section) =>
//             (activeCategory === "All" || activeCategory === section.category) && (
//               <motion.div
//                 key={section.category}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className={`mb-20 p-8 rounded-3xl bg-gradient-to-br ${section.gradient}`}
//               >
//                 <div className="flex items-center justify-between mb-10">
//                   <div className="flex items-center gap-4">
//                     <div className="w-2 h-12 bg-gradient-to-b from-pink-600 to-pink-400 rounded-full"></div>
//                     <div>
//                       <h2 className="font-serif text-4xl font-bold text-slate-800">
//                         {section.title}
//                       </h2>
//                       <p className="text-slate-600 mt-1">
//                         {section.products.length} stunning items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-white border border-slate-200 hover:border-pink-500 hover:bg-white rounded-xl px-6 py-2 transition-all duration-300">
//                     <span className="mr-2">Explore All</span>
//                     <motion.span
//                       initial={{ x: 0 }}
//                       whileHover={{ x: 3 }}
//                       transition={{ type: "spring", stiffness: 400 }}
//                     >
//                       →
//                     </motion.span>
//                   </Button>
//                 </div>

//                 {/* Products Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                   {section.products.map((product, i) => (
//                     <motion.div
//                       key={product.id}
//                       initial={{ opacity: 0, scale: 0.9, y: 20 }}
//                       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                       whileHover={{ y: -8 }}
//                       transition={{ 
//                         delay: i * 0.1,
//                         type: "spring",
//                         stiffness: 300
//                       }}
//                       className="group cursor-pointer"
//                       onClick={() => openModal(product)}
//                     >
//                       <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
//                         <div className="relative overflow-hidden bg-slate-50">
//                           <motion.img
//                             src={product.images[0]}
//                             alt={product.title}
//                             className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                             whileHover={{ scale: 1.05 }}
//                             transition={{ type: "spring", stiffness: 300 }}
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
//                           {/* Quick Actions */}
//                           <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                             <button className="bg-white/90 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg">
//                               <Heart className="w-4 h-4 text-slate-700" />
//                             </button>
//                             <button className="bg-white/90 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg">
//                               <ShoppingBag className="w-4 h-4 text-slate-700" />
//                             </button>
//                           </div>
//                         </div>
                        
//                         <div className="p-6">
//                           <h3 className="font-semibold text-lg text-slate-800 group-hover:text-pink-600 transition-colors duration-300 mb-3">
//                             {product.title}
//                           </h3>
//                           <div className="flex gap-1">
//                             {product.colors.slice(0, 3).map((color, index) => (
//                               <div
//                                 key={index}
//                                 className="w-3 h-3 rounded-full border border-slate-200"
//                                 style={{ 
//                                   backgroundColor: color.toLowerCase() === 'multi' ? 'conic-gradient(from 45deg, #ff6b6b, #4ecdc4, #45b7d1, #ff6b6b)' : 
//                                     color.toLowerCase() === 'pink' ? '#ec4899' :
//                                     color.toLowerCase() === 'black' ? '#1f2937' :
//                                     color.toLowerCase() === 'white' ? '#f8fafc' :
//                                     color.toLowerCase() === 'red' ? '#dc2626' :
//                                     color.toLowerCase() === 'blue' ? '#2563eb' :
//                                     color.toLowerCase() === 'green' ? '#16a34a' :
//                                     color.toLowerCase() === 'gold' ? '#f59e0b' :
//                                     color.toLowerCase() === 'silver' ? '#94a3b8' :
//                                     color.toLowerCase() === 'grey' ? '#6b7280' :
//                                     color.toLowerCase() === 'beige' ? '#e5e7eb' :
//                                     color.toLowerCase() === 'navy' ? '#1e3a8a' : '#6b7280'
//                                 }}
//                               />
//                             ))}
//                             {product.colors.length > 3 && (
//                               <span className="text-xs text-slate-500 ml-1">
//                                 +{product.colors.length - 3}
//                               </span>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             )
//         )}
//       </div>

//       {/* Gallery Modal */}
//       <AnimatePresence>
//         {selectedProduct && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", damping: 25 }}
//               className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex flex-col h-full">
//                 {/* Header */}
//                 <div className="flex justify-between items-center p-6 border-b border-slate-200">
//                   <h2 className="font-serif text-2xl font-bold text-slate-800">
//                     {selectedProduct.title}
//                   </h2>
//                   <button
//                     onClick={closeModal}
//                     className="bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors duration-300"
//                   >
//                     <X className="w-6 h-6" />
//                   </button>
//                 </div>

//                 {/* Main Content */}
//                 <div className="flex-1 overflow-auto">
//                   <div className="p-8">
//                     {/* Main Image Gallery */}
//                     <div className="mb-8">
//                       <div className="relative rounded-2xl overflow-hidden bg-slate-50 mb-4">
//                         <motion.img
//                           key={currentImageIndex}
//                           src={selectedProduct.images[currentImageIndex]}
//                           alt={selectedProduct.title}
//                           className="w-full h-96 object-cover"
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           transition={{ duration: 0.3 }}
//                         />
                        
//                         {/* Navigation Arrows */}
//                         <button
//                           onClick={prevImage}
//                           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
//                         >
//                           <ChevronLeft className="w-6 h-6" />
//                         </button>
//                         <button
//                           onClick={nextImage}
//                           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
//                         >
//                           <ChevronRight className="w-6 h-6" />
//                         </button>
//                       </div>

//                       {/* Thumbnail Gallery */}
//                       <div className="flex gap-3 overflow-x-auto py-2">
//                         {selectedProduct.images.map((image, index) => (
//                           <motion.button
//                             key={index}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => setCurrentImageIndex(index)}
//                             className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
//                               currentImageIndex === index
//                                 ? "border-pink-600 shadow-md"
//                                 : "border-slate-200 hover:border-slate-300"
//                             }`}
//                           >
//                             <img
//                               src={image}
//                               alt={`${selectedProduct.title} ${index + 1}`}
//                               className="w-full h-full object-cover"
//                             />
//                           </motion.button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Product Details */}
//                     <div className="grid md:grid-cols-2 gap-8 mb-8">
//                       <div>
//                         <h3 className="font-serif text-xl font-bold text-slate-800 mb-4">Product Details</h3>
//                         <p className="text-slate-600 leading-relaxed mb-4">
//                           {selectedProduct.description}
//                         </p>
//                       </div>
                      
//                       <div>
//                         {/* Size Selection */}
//                         <div className="mb-6">
//                           <h4 className="font-semibold text-slate-800 mb-3">Size</h4>
//                           <div className="flex flex-wrap gap-2">
//                             {selectedProduct.sizes.map((size) => (
//                               <button
//                                 key={size}
//                                 className="px-4 py-2 border border-slate-300 rounded-lg hover:border-pink-600 hover:text-pink-600 transition-colors duration-300 font-medium"
//                               >
//                                 {size}
//                               </button>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Color Selection */}
//                         <div className="mb-6">
//                           <h4 className="font-semibold text-slate-800 mb-3">Color</h4>
//                           <div className="flex flex-wrap gap-2">
//                             {selectedProduct.colors.map((color) => (
//                               <button
//                                 key={color}
//                                 className="px-4 py-2 border border-slate-300 rounded-lg hover:border-pink-600 hover:text-pink-600 transition-colors duration-300 font-medium"
//                               >
//                                 {color}
//                               </button>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="flex gap-3">
//                           <Button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-semibold transition-all duration-300">
//                             <ShoppingBag className="w-5 h-5 mr-2" />
//                             Add to Cart
//                           </Button>
//                           <Button className="flex-1 border border-pink-600 text-pink-600 hover:bg-pink-50 py-3 rounded-xl font-semibold transition-all duration-300">
//                             <Heart className="w-5 h-5 mr-2" />
//                             Wishlist
//                           </Button>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Related Products Gallery */}
//                     <div>
//                       <h3 className="font-serif text-2xl font-bold text-slate-800 mb-6">
//                         You Might Also Like
//                       </h3>
//                       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//                         {getRelatedProducts().slice(0, 5).map((product) => (
//                           <motion.div
//                             key={product.id}
//                             whileHover={{ scale: 1.05 }}
//                             className="cursor-pointer group"
//                             onClick={() => {
//                               setSelectedProduct(product);
//                               setCurrentImageIndex(0);
//                             }}
//                           >
//                             <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 transition-all duration-300 group-hover:border-pink-600 group-hover:shadow-md">
//                               <img
//                                 src={product.images[0]}
//                                 alt={product.title}
//                                 className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
//                               />
//                               <div className="p-3">
//                                 <h4 className="font-semibold text-sm text-slate-800 group-hover:text-pink-600 transition-colors duration-300">
//                                   {product.title}
//                                 </h4>
//                               </div>
//                             </div>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }








// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import womenHero from "@/assets/Women/WhatsApp Image 2025-11-07 at 09.41.14 (1).jpeg";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// const categories = [
//   { name: "All", icon: "🌟",  },
//   { name: "Dresses", icon: "👗",  },
//   { name: "Ethnic Wear", icon: "🎎",  },
//   { name: "Western", icon: "👚",  },
//   { name: "Accessories", icon: "💍",  },
// ];

// // Mock product data with gallery images
// const generateProductData = () => ({
//   dresses: [...Array(8)].map((_, i) => ({
//     id: `dress-${i}`,
//     title: ["Elegant Summer Dress", "Floral Maxi Dress", "Cocktail Party Dress", "Evening Gown"][i % 4],
//     description: "Beautiful and elegant dresses perfect for any occasion. Made with premium fabrics for ultimate comfort and style.",
//     images: [womenHero, womenHero, womenHero, womenHero],
//     category: "Dresses",
//     sizes: ["XS", "S", "M", "L", "XL"],
//     colors: ["Pink", "Black", "White", "Navy"]
//   })),
//   ethnic: [...Array(8)].map((_, i) => ({
//     id: `ethnic-${i}`,
//     title: ["Traditional Saree", "Designer Lehenga", "Anarkali Suit", "Silk Kurti"][i % 4],
//     description: "Exquisite ethnic wear that celebrates tradition with contemporary elegance.",
//     images: [womenHero, womenHero, womenHero, womenHero],
//     category: "Ethnic Wear",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Red", "Blue", "Green", "Gold"]
//   })),
//   western: [...Array(8)].map((_, i) => ({
//     id: `western-${i}`,
//     title: ["Contemporary Top", "Designer Jeans", "Casual Blazer", "Party Wear"][i % 4],
//     description: "Modern western wear that combines comfort with style.",
//     images: [womenHero, womenHero, womenHero, womenHero],
//     category: "Western",
//     sizes: ["XS", "S", "M", "L", "XL"],
//     colors: ["White", "Black", "Grey", "Beige"]
//   })),
//   accessories: [...Array(8)].map((_, i) => ({
//     id: `accessory-${i}`,
//     title: ["Designer Handbags", "Elegant Jewelry", "Stylish Scarves", "Luxury Watches"][i % 4],
//     description: "Complete your look with our exquisite collection.",
//     images: [womenHero, womenHero, womenHero, womenHero],
//     category: "Accessories",
//     sizes: ["One Size"],
//     colors: ["Gold", "Silver", "Multi", "Rose Gold"]
//   }))
// });

// export default function WomenCollection() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "✨ New Arrivals",
//       category: "Dresses",
//       gradient: "from-purple-50 to-pink-50",
//       products: productData.dresses,
//     },
//     {
//       title: "🌸 Ethnic Collection",
//       category: "Ethnic Wear",
//       gradient: "from-rose-50 to-orange-50",
//       products: productData.ethnic,
//     },
//     {
//       title: "💃 Western Wear",
//       category: "Western",
//       gradient: "from-blue-50 to-cyan-50",
//       products: productData.western,
//     },
//     {
//       title: "💎 Luxury Accessories",
//       category: "Accessories",
//       gradient: "from-emerald-50 to-teal-50",
//       products: productData.accessories,
//     },
//   ];

//   const openModal = (product: any) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === selectedProduct.images.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === 0 ? selectedProduct.images.length - 1 : prev - 1
//     );
//   };

//   // Get related products (same category, excluding current product)
//   const getRelatedProducts = () => {
//     if (!selectedProduct) return [];
//     const currentSection = sectionData.find(section => section.category === selectedProduct.category);
//     return currentSection?.products.filter(product => product.id !== selectedProduct.id) || [];
//   };

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
//             <span className="text-sm font-semibold text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
//               TRENDING COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-pink-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-pink-600 to-slate-800 bg-clip-text text-transparent">
//             Women's Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-600 to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-pink-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-600 to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
//             Discover elegant fashion that celebrates your unique style — where sophistication meets 
//             comfort in every design and every detail.
//           </p>
//         </motion.div>

//         {/* Enhanced Category Buttons */}
//         <motion.div 
//           className="flex flex-wrap gap-3 justify-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           {categories.map((cat) => (
//             <motion.div
//               key={cat.name}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Button
//                 onClick={() => setActiveCategory(cat.name)}
//                 onMouseEnter={() => setHoveredCategory(cat.name)}
//                 onMouseLeave={() => setHoveredCategory("")}
//                 className={`relative px-8 py-4 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
//                   activeCategory === cat.name
//                     ? "bg-gradient-to-r from-pink-600 to-pink-500 text-white border-pink-600 shadow-2xl shadow-pink-500/25 scale-105"
//                     : "border-slate-200 bg-white/80 hover:border-pink-500/50 hover:shadow-xl text-slate-700"
//                 }`}
//                 variant="outline"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 transition-all duration-500 ${
//                   hoveredCategory === cat.name && activeCategory !== cat.name 
//                     ? "opacity-5" 
//                     : "opacity-0"
//                 }`}></div>
                
//                 <span className="text-lg mr-2">{cat.icon}</span>
//                 {cat.name}
              
                
//                 {activeCategory === cat.name && (
//                   <motion.div
//                     className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white rounded-t-full"
//                     layoutId="activeIndicator"
//                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                   />
//                 )}
//               </Button>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Enhanced Product Sections */}
//         {sectionData.map(
//           (section) =>
//             (activeCategory === "All" || activeCategory === section.category) && (
//               <motion.div
//                 key={section.category}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className={`mb-20 p-8 rounded-3xl bg-gradient-to-br ${section.gradient}`}
//               >
//                 <div className="flex items-center justify-between mb-10">
//                   <div className="flex items-center gap-4">
//                     <div className="w-2 h-12 bg-gradient-to-b from-pink-600 to-pink-400 rounded-full"></div>
//                     <div>
//                       <h2 className="font-serif text-4xl font-bold text-slate-800">
//                         {section.title}
//                       </h2>
//                       <p className="text-slate-600 mt-1">
//                         {section.products.length} stunning items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-black border border-slate-200 hover:border-pink-500 hover:bg-black rounded-xl px-6 py-2 transition-all duration-300">
//                     <span className="mr-2">Explore All</span>
//                     <motion.span
//                       initial={{ x: 0 }}
//                       whileHover={{ x: 3 }}
//                       transition={{ type: "spring", stiffness: 400 }}
//                     >
//                       →
//                     </motion.span>
//                   </Button>
//                 </div>

//                 {/* Products Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                   {section.products.map((product, i) => (
//                     <motion.div
//                       key={product.id}
//                       initial={{ opacity: 0, scale: 0.9, y: 20 }}
//                       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                       whileHover={{ y: -8 }}
//                       transition={{ 
//                         delay: i * 0.1,
//                         type: "spring",
//                         stiffness: 300
//                       }}
//                       className="group cursor-pointer"
//                       onClick={() => openModal(product)}
//                     >
//                       <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
//                         <div className="relative overflow-hidden bg-slate-50">
//                           <motion.img
//                             src={product.images[0]}
//                             alt={product.title}
//                             className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                             whileHover={{ scale: 1.05 }}
//                             transition={{ type: "spring", stiffness: 300 }}
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                         </div>
                        
//                         <div className="p-6">
//                           <h3 className="font-semibold text-lg text-slate-800 group-hover:text-pink-600 transition-colors duration-300 mb-3">
//                             {product.title}
//                           </h3>
//                           <div className="flex gap-1">
//                             {product.colors.slice(0, 3).map((color, index) => (
//                               <div
//                                 key={index}
//                                 className="w-3 h-3 rounded-full border border-slate-200"
//                                 style={{ 
//                                   backgroundColor: color.toLowerCase() === 'multi' ? 'conic-gradient(from 45deg, #ff6b6b, #4ecdc4, #45b7d1, #ff6b6b)' : 
//                                     color.toLowerCase() === 'pink' ? '#ec4899' :
//                                     color.toLowerCase() === 'black' ? '#1f2937' :
//                                     color.toLowerCase() === 'white' ? '#f8fafc' :
//                                     color.toLowerCase() === 'red' ? '#dc2626' :
//                                     color.toLowerCase() === 'blue' ? '#2563eb' :
//                                     color.toLowerCase() === 'green' ? '#16a34a' :
//                                     color.toLowerCase() === 'gold' ? '#f59e0b' :
//                                     color.toLowerCase() === 'silver' ? '#94a3b8' :
//                                     color.toLowerCase() === 'grey' ? '#6b7280' :
//                                     color.toLowerCase() === 'beige' ? '#e5e7eb' :
//                                     color.toLowerCase() === 'navy' ? '#1e3a8a' : '#6b7280'
//                                 }}
//                               />
//                             ))}
//                             {product.colors.length > 3 && (
//                               <span className="text-xs text-slate-500 ml-1">
//                                 +{product.colors.length - 3}
//                               </span>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             )
//         )}
//       </div>

//       {/* Gallery Modal */}
//       <AnimatePresence>
//         {selectedProduct && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", damping: 25 }}
//               className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex flex-col h-full">
//                 {/* Header */}
//                 <div className="flex justify-between items-center p-6 border-b border-slate-200">
//                   <h2 className="font-serif text-2xl font-bold text-slate-800">
//                     {selectedProduct.title}
//                   </h2>
//                   <button
//                     onClick={closeModal}
//                     className="bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors duration-300"
//                   >
//                     <X className="w-6 h-6" />
//                   </button>
//                 </div>

//                 {/* Main Content */}
//                 <div className="flex-1 overflow-auto">
//                   <div className="p-8">
//                     {/* Main Image Gallery */}
//                     <div className="mb-8">
//                       <div className="relative rounded-2xl overflow-hidden bg-slate-50 mb-4">
//                         <motion.img
//                           key={currentImageIndex}
//                           src={selectedProduct.images[currentImageIndex]}
//                           alt={selectedProduct.title}
//                           className="w-full h-96 object-cover"
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           transition={{ duration: 0.3 }}
//                         />
                        
//                         {/* Navigation Arrows */}
//                         <button
//                           onClick={prevImage}
//                           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
//                         >
//                           <ChevronLeft className="w-6 h-6" />
//                         </button>
//                         <button
//                           onClick={nextImage}
//                           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
//                         >
//                           <ChevronRight className="w-6 h-6" />
//                         </button>
//                       </div>

//                       {/* Thumbnail Gallery */}
//                       <div className="flex gap-3 overflow-x-auto py-2">
//                         {selectedProduct.images.map((image, index) => (
//                           <motion.button
//                             key={index}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => setCurrentImageIndex(index)}
//                             className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
//                               currentImageIndex === index
//                                 ? "border-pink-600 shadow-md"
//                                 : "border-slate-200 hover:border-slate-300"
//                             }`}
//                           >
//                             <img
//                               src={image}
//                               alt={`${selectedProduct.title} ${index + 1}`}
//                               className="w-full h-full object-cover"
//                             />
//                           </motion.button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Product Details */}
//                     <div className="grid md:grid-cols-2 gap-8 mb-8">
//                       <div>
//                         <h3 className="font-serif text-xl font-bold text-slate-800 mb-4">Product Details</h3>
//                         <p className="text-slate-600 leading-relaxed mb-4">
//                           {selectedProduct.description}
//                         </p>
//                       </div>
                      
//                       <div>
//                         {/* Size Selection */}
//                         <div className="mb-6">
//                           <h4 className="font-semibold text-slate-800 mb-3">Size</h4>
//                           <div className="flex flex-wrap gap-2">
//                             {selectedProduct.sizes.map((size) => (
//                               <button
//                                 key={size}
//                                 className="px-4 py-2 border border-slate-300 rounded-lg hover:border-pink-600 hover:text-pink-600 transition-colors duration-300 font-medium"
//                               >
//                                 {size}
//                               </button>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Color Selection */}
//                         <div className="mb-6">
//                           <h4 className="font-semibold text-slate-800 mb-3">Color</h4>
//                           <div className="flex flex-wrap gap-2">
//                             {selectedProduct.colors.map((color) => (
//                               <button
//                                 key={color}
//                                 className="px-4 py-2 border border-slate-300 rounded-lg hover:border-pink-600 hover:text-pink-600 transition-colors duration-300 font-medium"
//                               >
//                                 {color}
//                               </button>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Related Products Gallery */}
//                     <div>
//                       <h3 className="font-serif text-2xl font-bold text-slate-800 mb-6">
//                         You Might Also Like
//                       </h3>
//                       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//                         {getRelatedProducts().slice(0, 5).map((product) => (
//                           <motion.div
//                             key={product.id}
//                             whileHover={{ scale: 1.05 }}
//                             className="cursor-pointer group"
//                             onClick={() => {
//                               setSelectedProduct(product);
//                               setCurrentImageIndex(0);
//                             }}
//                           >
//                             <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 transition-all duration-300 group-hover:border-pink-600 group-hover:shadow-md">
//                               <img
//                                 src={product.images[0]}
//                                 alt={product.title}
//                                 className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
//                               />
//                               <div className="p-3">
//                                 <h4 className="font-semibold text-sm text-slate-800 group-hover:text-pink-600 transition-colors duration-300">
//                                   {product.title}
//                                 </h4>
//                               </div>
//                             </div>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }








// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Import all your actual images
// import womenHero from "@/assets/Women/WhatsApp Image 2025-11-07 at 09.41.14 (1).jpeg";
// import saree1 from "@/assets/Women/saree1.jpeg";
// import saree2 from "@/assets/Women/saree2.jpeg";
// import saree3 from "@/assets/Women/saree3.jpeg";
// import saree4 from "@/assets/Women/saree4.jpeg";
// import saree5 from "@/assets/Women/saree5.jpeg";
// import saree6 from "@/assets/Women/saree6.jpeg";
// import saree7 from "@/assets/Women/saree7.jpeg";
// import saree8 from "@/assets/Women/saree8.jpeg";

// import lehenga1 from "@/assets/Women/lehanga1.jpeg";
// import lehenga2 from "@/assets/Women/lehanga2.jpeg";
// import lehenga3 from "@/assets/Women/lehanga3.jpeg";
// import lehenga4 from "@/assets/Women/lehanga4.jpeg";
// import lehenga5 from "@/assets/Women/lehanga5.jpeg";
// import lehenga6 from "@/assets/Women/lehanga6.jpeg";
// import lehenga7 from "@/assets/Women/lehanga7.jpeg";
// import lehenga8 from "@/assets/Women/lehanga8.jpeg";

// import cropTop1 from "@/assets/Women/croptop1.jpeg";
// import cropTop2 from "@/assets/Women/croptop2.jpeg";
// import cropTop3 from "@/assets/Women/croptop3.jpeg";
// import cropTop4 from "@/assets/Women/croptop4.jpeg";
// import cropTop5 from "@/assets/Women/croptop5.jpeg";
// import cropTop6 from "@/assets/Women/croptop6.jpeg";
// import cropTop7 from "@/assets/Women/croptop7.jpeg";
// import cropTop8 from "@/assets/Women/croptop8.jpeg";
// import gown1 from "@/assets/Women/gown1.jpeg";
// import gown2 from "@/assets/Women/gown2.jpeg";
// import gown3 from "@/assets/Women/gown3.jpeg";
// import gown4 from "@/assets/Women/gown4.jpeg";
// import gown5 from "@/assets/Women/gown5.jpeg";
// import gown6 from "@/assets/Women/gown6.jpeg";
// import gown7 from "@/assets/Women/gown7.jpeg";
// import gown8 from "@/assets/Women/gown8.jpeg";


// import western1 from "@/assets/Women/western1.jpeg";
// import western2 from "@/assets/Women/western2.jpeg";
// import western3 from "@/assets/Women/western3.jpeg";
// import western4 from "@/assets/Women/western4.jpeg";
// import western5 from "@/assets/Women/western5.jpeg";
// import western6 from "@/assets/Women/western6.jpeg";
// import western7 from "@/assets/Women/western7.jpeg";
// import western8 from "@/assets/Women/western1.jpeg";

// import stitched1 from "@/assets/Women/kurthiset1.jpeg";
// import stitched2 from "@/assets/Women/kurthiset2.jpeg";
// import stitched3 from "@/assets/Women/kurthiset3.jpeg";
// import stitched4 from "@/assets/Women/kurthiset4.jpeg";
// import stitched5 from "@/assets/Women/kurthiset5.jpeg";
// import stitched6 from "@/assets/Women/kurthiset6.jpeg";
// import stitched7 from "@/assets/Women/kurthiset2.jpeg";
// import stitched8 from "@/assets/Women/kurthiset1.jpeg";

// // For categories without images, using available ones as placeholders
// const nightwearImages = [western1, western2, western3, western4, western5, western6, western7, western8];
// const winterImages = [cropTop1, cropTop2, cropTop3, cropTop4, cropTop5, cropTop6, cropTop7, cropTop8];
// const unstitchedImages = [stitched1, stitched2, stitched3, stitched4, stitched5, stitched6, stitched7, stitched8];

// const categories = [
//   { name: "Sarees", icon: "👗" },
//   { name: "Lehenga", icon: "💃" },
//   { name: "Crop Top", icon: "👚" },
//   { name: "Gown", icon: "👗" },
//   { name: "Western Dresses", icon: "👗" },
//   { name: "Stitched Salwar Suit", icon: "💠" },
//   { name: "Night Wear", icon: "🌙" },
//   { name: "Winter Collection", icon: "🧥" },
//   { name: "Unstitched Suit Collection", icon: "🪡" },
// ];

// // Mock product data with unique images for each product
// const generateProductData = () => ({
//   sarees: [...Array(8)].map((_, i) => ({
//     id: `saree-${i}`,
//     title: [
//       "Silk Saree",
//       "Cotton Saree",
//       "Designer Saree",
//       "Banarasi Saree",
//       "Georgette Saree",
//       "Chiffon Saree",
//       "Printed Saree",
//       "Embroidered Saree",
//     ][i],
//     description:
//       "Elegant saree collection crafted with traditional weaves and modern patterns for every occasion.",
//     images: [
//       [saree1, saree2, saree3, saree4],
//       [saree2, saree3, saree4, saree5],
//       [saree3, saree4, saree5, saree6],
//       [saree4, saree5, saree6, saree7],
//       [saree5, saree6, saree7, saree8],
//       [saree6, saree7, saree8, saree1],
//       [saree7, saree8, saree1, saree2],
//       [saree8, saree1, saree2, saree3],
//     ][i],
//     category: "Sarees",
//     sizes: ["Free Size"],
//     colors: ["Red", "Green", "Gold", "Maroon"],
//   })),

//   lehenga: [...Array(8)].map((_, i) => ({
//     id: `lehenga-${i}`,
//     title: [
//       "Designer Lehenga",
//       "Bridal Lehenga",
//       "Festival Lehenga",
//       "Traditional Lehenga",
//       "A-Line Lehenga",
//       "Circular Lehenga",
//       "Mermaid Lehenga",
//       "Sharara Lehenga",
//     ][i],
//     description:
//       "Exquisite lehenga collection featuring intricate embroidery and premium fabrics for special occasions.",
//     images: [
//       [lehenga1, lehenga2, lehenga3, lehenga4],
//       [lehenga2, lehenga3, lehenga4, lehenga5],
//       [lehenga3, lehenga4, lehenga5, lehenga6],
//       [lehenga4, lehenga5, lehenga6, lehenga7],
//       [lehenga5, lehenga6, lehenga7, lehenga8],
//       [lehenga6, lehenga7, lehenga8, lehenga1],
//       [lehenga7, lehenga8, lehenga1, lehenga2],
//       [lehenga8, lehenga1, lehenga2, lehenga3],
//     ][i],
//     category: "Lehenga",
//     sizes: ["XS", "S", "M", "L", "XL"],
//     colors: ["Red", "Maroon", "Pink", "Gold"],
//   })),

//   cropTop: [...Array(8)].map((_, i) => ({
//     id: `croptop-${i}`,
//     title: [
//       "Floral Crop Top",
//       "Sequin Crop Top",
//       "Embroidered Crop Top",
//       "Sleeveless Crop Top",
//       "Off-Shoulder Crop Top",
//       "Peplum Crop Top",
//       "Printed Crop Top",
//       "Chiffon Crop Top",
//     ][i],
//     description:
//       "Trendy crop tops designed for festive occasions and parties, blending comfort with elegant style.",
//     images: [
//       [cropTop1, cropTop2, cropTop3, cropTop4],
//       [cropTop2, cropTop3, cropTop4, cropTop5],
//       [cropTop3, cropTop4, cropTop5, cropTop6],
//       [cropTop4, cropTop5, cropTop6, cropTop7],
//       [cropTop5, cropTop6, cropTop7, cropTop8],
//       [cropTop6, cropTop7, cropTop8, cropTop1],
//       [cropTop7, cropTop8, cropTop1, cropTop2],
//       [cropTop8, cropTop1, cropTop2, cropTop3],
//     ][i],
//     category: "Crop Top",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Navy", "Wine", "Peach", "Lavender"],
//   })),

//   gown: [...Array(8)].map((_, i) => ({
//     id: `gown-${i}`,
//     title: [
//       "Designer Gown",
//       "Layered Gown",
//       "Anarkali Gown",
//       "Off-Shoulder Gown",
//       "Mermaid Gown",
//       "Ball Gown",
//       "High-Low Gown",
//       "Evening Gown",
//     ][i],
//     description:
//       "Elegant gown collection crafted for grand occasions with luxurious fabrics and intricate designs.",
//     images: [
//       [gown1, gown2, gown3, gown4],
//       [gown2, gown3, gown4, gown5],
//       [gown3, gown4, gown5, gown6],
//       [gown4, gown5, gown6, gown7],
//       [gown5, gown6, gown7, gown8],
//       [gown6, gown7, gown8, gown1],
//       [gown7, gown8, gown1, gown2],
//       [gown8, gown1, gown2, gown3],
//     ][i],
//     category: "Gown",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Maroon", "Royal Blue", "Beige", "Black"],
//   })),

//   western: [...Array(8)].map((_, i) => ({
//     id: `western-${i}`,
//     title: [
//       "Evening Dress",
//       "Casual Dress",
//       "Maxi Dress",
//       "Bodycon Dress",
//       "Cocktail Dress",
//       "Shift Dress",
//       "Wrap Dress",
//       "Shirt Dress",
//     ][i],
//     description:
//       "Chic western wear collection combining comfort and contemporary style for modern women.",
//     images: [
//       [western1, western2, western3, western4],
//       [western2, western3, western4, western5],
//       [western3, western4, western5, western6],
//       [western4, western5, western6, western7],
//       [western5, western6, western7, western8],
//       [western6, western7, western8, western1],
//       [western7, western8, western1, western2],
//       [western8, western1, western2, western3],
//     ][i],
//     category: "Western Dresses",
//     sizes: ["XS", "S", "M", "L", "XL"],
//     colors: ["Black", "Blue", "Beige", "Pink"],
//   })),

//   stitchedSuit: [...Array(8)].map((_, i) => ({
//     id: `stitched-${i}`,
//     title: [
//       "Embroidered Suit",
//       "Straight Cut Suit",
//       "Anarkali Suit",
//       "Front-Slit Suit",
//       "Palazzo Suit",
//       "Jacket Style Suit",
//       "Angrakha Suit",
//       "Dhoti Style Suit",
//     ][i],
//     description:
//       "Ready-to-wear stitched suits offering a perfect blend of traditional design and modern tailoring.",
//     images: [
//       [stitched1, stitched2, stitched3, stitched4],
//       [stitched2, stitched3, stitched4, stitched5],
//       [stitched3, stitched4, stitched5, stitched6],
//       [stitched4, stitched5, stitched6, stitched7],
//       [stitched5, stitched6, stitched7, stitched8],
//       [stitched6, stitched7, stitched8, stitched1],
//       [stitched7, stitched8, stitched1, stitched2],
//       [stitched8, stitched1, stitched2, stitched3],
//     ][i],
//     category: "Stitched Salwar Suit",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Pink", "Olive", "Cream", "Mustard"],
//   })),

//   nightwear: [...Array(8)].map((_, i) => ({
//     id: `nightwear-${i}`,
//     title: [
//       "Satin Nighty",
//       "Cotton Pyjama Set",
//       "Robe Set",
//       "Lounge Wear",
//       "Chemise",
//       "Pajama Shorts Set",
//       "Night Shirt",
//       "Lounge Jumpsuit",
//     ][i],
//     description:
//       "Soft and comfortable nightwear designed for relaxation and cozy nights.",
//     images: [
//       [nightwearImages[0], nightwearImages[1], nightwearImages[2], nightwearImages[3]],
//       [nightwearImages[1], nightwearImages[2], nightwearImages[3], nightwearImages[4]],
//       [nightwearImages[2], nightwearImages[3], nightwearImages[4], nightwearImages[5]],
//       [nightwearImages[3], nightwearImages[4], nightwearImages[5], nightwearImages[6]],
//       [nightwearImages[4], nightwearImages[5], nightwearImages[6], nightwearImages[7]],
//       [nightwearImages[5], nightwearImages[6], nightwearImages[7], nightwearImages[0]],
//       [nightwearImages[6], nightwearImages[7], nightwearImages[0], nightwearImages[1]],
//       [nightwearImages[7], nightwearImages[0], nightwearImages[1], nightwearImages[2]],
//     ][i],
//     category: "Night Wear",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Peach", "Grey", "Lavender", "Mint"],
//   })),

//   winter: [...Array(8)].map((_, i) => ({
//     id: `winter-${i}`,
//     title: [
//       "Woollen Sweater",
//       "Coat",
//       "Cardigan",
//       "Shawl",
//       "Puffer Jacket",
//       "Trench Coat",
//       "Knit Dress",
//       "Thermal Set",
//     ][i],
//     description:
//       "Stylish winter collection that keeps you warm while adding a touch of elegance to your look.",
//     images: [
//       [winterImages[0], winterImages[1], winterImages[2], winterImages[3]],
//       [winterImages[1], winterImages[2], winterImages[3], winterImages[4]],
//       [winterImages[2], winterImages[3], winterImages[4], winterImages[5]],
//       [winterImages[3], winterImages[4], winterImages[5], winterImages[6]],
//       [winterImages[4], winterImages[5], winterImages[6], winterImages[7]],
//       [winterImages[5], winterImages[6], winterImages[7], winterImages[0]],
//       [winterImages[6], winterImages[7], winterImages[0], winterImages[1]],
//       [winterImages[7], winterImages[0], winterImages[1], winterImages[2]],
//     ][i],
//     category: "Winter Collection",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Brown", "Grey", "Maroon", "Navy"],
//   })),

//   unstitched: [...Array(8)].map((_, i) => ({
//     id: `unstitched-${i}`,
//     title: [
//       "Cotton Suit Set",
//       "Silk Suit Material",
//       "Printed Suit Set",
//       "Chiffon Suit Fabric",
//       "Linen Suit Set",
//       "Velvet Suit Material",
//       "Organza Suit Set",
//       "Net Suit Fabric",
//     ][i],
//     description:
//       "Beautiful unstitched suit materials ready to be tailored into your perfect outfit.",
//     images: [
//       [unstitchedImages[0], unstitchedImages[1], unstitchedImages[2], unstitchedImages[3]],
//       [unstitchedImages[1], unstitchedImages[2], unstitchedImages[3], unstitchedImages[4]],
//       [unstitchedImages[2], unstitchedImages[3], unstitchedImages[4], unstitchedImages[5]],
//       [unstitchedImages[3], unstitchedImages[4], unstitchedImages[5], unstitchedImages[6]],
//       [unstitchedImages[4], unstitchedImages[5], unstitchedImages[6], unstitchedImages[7]],
//       [unstitchedImages[5], unstitchedImages[6], unstitchedImages[7], unstitchedImages[0]],
//       [unstitchedImages[6], unstitchedImages[7], unstitchedImages[0], unstitchedImages[1]],
//       [unstitchedImages[7], unstitchedImages[0], unstitchedImages[1], unstitchedImages[2]],
//     ][i],
//     category: "Unstitched Suit Collection",
//     sizes: ["Fabric Set"],
//     colors: ["Blue", "Yellow", "Beige", "Pink"],
//   })),
// });


// export default function WomenCollection() {
//   const [activeCategory, setActiveCategory] = useState("Lehenga");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

// const sectionData = [
//   { title: "👗 Sarees Collection", category: "Sarees", gradient: "from-rose-50 to-pink-50", products: productData.sarees },
//   { title: "💃 Lehenga Collection", category: "Lehenga", gradient: "from-purple-50 to-pink-50", products: productData.lehenga },
//   { title: "👚 Crop Tops", category: "Crop Top", gradient: "from-indigo-50 to-blue-50", products: productData.cropTop },
//   { title: "👗 Gown Collection", category: "Gown", gradient: "from-violet-50 to-fuchsia-50", products: productData.gown },
//   { title: "👗 Western Dresses", category: "Western Dresses", gradient: "from-blue-50 to-cyan-50", products: productData.western },
//   { title: "💠 Stitched Salwar Suit", category: "Stitched Salwar Suit", gradient: "from-yellow-50 to-amber-50", products: productData.stitchedSuit },
//   { title: "🌙 Night Wear", category: "Night Wear", gradient: "from-gray-50 to-slate-50", products: productData.nightwear },
//   { title: "🧥 Winter Collection", category: "Winter Collection", gradient: "from-sky-50 to-blue-50", products: productData.winter },
//   { title: "🪡 Unstitched Suit Collection", category: "Unstitched Suit Collection", gradient: "from-green-50 to-emerald-50", products: productData.unstitched },
// ];


//   const openModal = (product: any) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === selectedProduct.images.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === 0 ? selectedProduct.images.length - 1 : prev - 1
//     );
//   };

//   // Get related products (same category, excluding current product)
//   const getRelatedProducts = () => {
//     if (!selectedProduct) return [];
//     const currentSection = sectionData.find(section => section.category === selectedProduct.category);
//     return currentSection?.products.filter(product => product.id !== selectedProduct.id) || [];
//   };

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
//             <span className="text-sm font-semibold text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
//               TRENDING COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-pink-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-pink-600 to-slate-800 bg-clip-text text-transparent">
//             Women's Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-600 to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-pink-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-600 to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
//             Discover elegant fashion that celebrates your unique style — where sophistication meets 
//             comfort in every design and every detail.
//           </p>
//         </motion.div>

//         {/* Enhanced Category Buttons */}
//         <motion.div 
//           className="flex flex-wrap gap-4 justify-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           {categories.map((cat) => (
//             <motion.div
//               key={cat.name}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Button
//                 onClick={() => setActiveCategory(cat.name)}
//                 onMouseEnter={() => setHoveredCategory(cat.name)}
//                 onMouseLeave={() => setHoveredCategory("")}
//                 className={`relative px-8 py-4 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
//                   activeCategory === cat.name
//                     ? "bg-gradient-to-r from-pink-600 to-pink-500 text-white border-pink-600 shadow-2xl shadow-pink-500/25 scale-105"
//                     : "border-slate-200 bg-white/80 hover:border-pink-500/50 hover:shadow-xl text-slate-700"
//                 }`}
//                 variant="outline"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 transition-all duration-500 ${
//                   hoveredCategory === cat.name && activeCategory !== cat.name 
//                     ? "opacity-5" 
//                     : "opacity-0"
//                 }`}></div>
                
//                 <span className="text-lg mr-2">{cat.icon}</span>
//                 {cat.name}
                
//                 {activeCategory === cat.name && (
//                   <motion.div
//                     className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white rounded-t-full"
//                     layoutId="activeIndicator"
//                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                   />
//                 )}
//               </Button>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Enhanced Product Sections */}
//         {sectionData.map(
//           (section) =>
//             activeCategory === section.category && (
//               <motion.div
//                 key={section.category}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className={`mb-20 p-8 rounded-3xl bg-gradient-to-br ${section.gradient}`}
//               >
//                 <div className="flex items-center justify-between mb-10">
//                   <div className="flex items-center gap-4">
//                     <div className="w-2 h-12 bg-gradient-to-b from-pink-600 to-pink-400 rounded-full"></div>
//                     <div>
//                       <h2 className="font-serif text-4xl font-bold text-slate-800">
//                         {section.title}
//                       </h2>
//                       <p className="text-slate-600 mt-1">
//                         {section.products.length} stunning items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-black text-white border border-slate-200 hover:border-pink-500 hover:bg-black rounded-xl px-6 py-2 transition-all duration-300">
//                     <span className="mr-2">Explore All</span>
//                     <motion.span
//                       initial={{ x: 0 }}
//                       whileHover={{ x: 3 }}
//                       transition={{ type: "spring", stiffness: 400 }}
//                     >
//                       →
//                     </motion.span>
//                   </Button>
//                 </div>

//                 {/* Products Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                   {section.products.map((product, i) => (
//                     <motion.div
//                       key={product.id}
//                       initial={{ opacity: 0, scale: 0.9, y: 20 }}
//                       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                       whileHover={{ y: -8 }}
//                       transition={{ 
//                         delay: i * 0.1,
//                         type: "spring",
//                         stiffness: 300
//                       }}
//                       className="group cursor-pointer"
//                       onClick={() => openModal(product)}
//                     >
//                       <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
//                         <div className="relative overflow-hidden bg-slate-50">
//                           <motion.img
//                             src={product.images[0]} // First image as main display
//                             alt={product.title}
//                             className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                             whileHover={{ scale: 1.05 }}
//                             transition={{ type: "spring", stiffness: 300 }}
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
//                           {/* Image count badge */}
//                           <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
//                             {product.images.length} images
//                           </div>
//                         </div>
                        
//                         <div className="p-6">
//                           <h3 className="font-semibold text-lg text-slate-800 group-hover:text-pink-600 transition-colors duration-300 mb-2">
//                             {product.title}
//                           </h3>
//                           <p className="text-sm text-slate-500">{product.category}</p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             )
//         )}
//       </div>

//       {/* Gallery Modal */}
//       <AnimatePresence>
//         {selectedProduct && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", damping: 25 }}
//               className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex flex-col h-full">
//                 {/* Header */}
//                 <div className="flex justify-between items-center p-6 border-b border-slate-200">
//                   <h2 className="font-serif text-2xl font-bold text-slate-800">
//                     {selectedProduct.title}
//                   </h2>
//                   <button
//                     onClick={closeModal}
//                     className="bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors duration-300"
//                   >
//                     <X className="w-6 h-6" />
//                   </button>
//                 </div>

//                 {/* Main Content */}
//                 <div className="flex-1 overflow-auto">
//                   <div className="p-8">
//                     {/* Main Image Gallery */}
//                     <div className="mb-8">
//                       <div className="relative rounded-2xl overflow-hidden bg-slate-50 mb-4">
//                         <motion.img
//                           key={currentImageIndex}
//                           src={selectedProduct.images[currentImageIndex]}
//                           alt={selectedProduct.title}
//                           className="w-full h-96 object-cover"
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           transition={{ duration: 0.3 }}
//                         />
                        
//                         {/* Navigation Arrows */}
//                         <button
//                           onClick={prevImage}
//                           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
//                         >
//                           <ChevronLeft className="w-6 h-6" />
//                         </button>
//                         <button
//                           onClick={nextImage}
//                           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
//                         >
//                           <ChevronRight className="w-6 h-6" />
//                         </button>

//                         {/* Image Counter */}
//                         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
//                           {currentImageIndex + 1} / {selectedProduct.images.length}
//                         </div>
//                       </div>

//                       {/* Thumbnail Gallery */}
//                       <div className="flex gap-3 overflow-x-auto py-2">
//                         {selectedProduct.images.map((image, index) => (
//                           <motion.button
//                             key={index}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => setCurrentImageIndex(index)}
//                             className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
//                               currentImageIndex === index
//                                 ? "border-pink-600 shadow-md"
//                                 : "border-slate-200 hover:border-slate-300"
//                             }`}
//                           >
//                             <img
//                               src={image}
//                               alt={`${selectedProduct.title} ${index + 1}`}
//                               className="w-full h-full object-cover"
//                             />
//                           </motion.button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Product Details */}
//                     <div className="grid md:grid-cols-2 gap-8 mb-8">
//                       <div>
//                         <h3 className="font-serif text-xl font-bold text-slate-800 mb-4">Product Details</h3>
//                         <p className="text-slate-600 leading-relaxed mb-4">
//                           {selectedProduct.description}
//                         </p>
//                       </div>
                      
//                       <div>
//                         {/* Size Selection */}
//                         <div className="mb-6">
//                           <h4 className="font-semibold text-slate-800 mb-3">Size</h4>
//                           <div className="flex flex-wrap gap-2">
//                             {selectedProduct.sizes.map((size) => (
//                               <button
//                                 key={size}
//                                 className="px-4 py-2 border border-slate-300 rounded-lg hover:border-pink-600 hover:text-pink-600 transition-colors duration-300 font-medium"
//                               >
//                                 {size}
//                               </button>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Color Selection */}
//                         <div className="mb-6">
//                           <h4 className="font-semibold text-slate-800 mb-3">Color</h4>
//                           <div className="flex flex-wrap gap-2">
//                             {selectedProduct.colors.map((color) => (
//                               <button
//                                 key={color}
//                                 className="px-4 py-2 border border-slate-300 rounded-lg hover:border-pink-600 hover:text-pink-600 transition-colors duration-300 font-medium"
//                               >
//                                 {color}
//                               </button>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Related Products Gallery */}
//                     <div>
//                       <h3 className="font-serif text-2xl font-bold text-slate-800 mb-6">
//                         You Might Also Like
//                       </h3>
//                       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//                         {getRelatedProducts().slice(0, 5).map((product) => (
//                           <motion.div
//                             key={product.id}
//                             whileHover={{ scale: 1.05 }}
//                             className="cursor-pointer group"
//                             onClick={() => {
//                               setSelectedProduct(product);
//                               setCurrentImageIndex(0);
//                             }}
//                           >
//                             <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 transition-all duration-300 group-hover:border-pink-600 group-hover:shadow-md">
//                               <img
//                                 src={product.images[0]}
//                                 alt={product.title}
//                                 className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
//                               />
//                               <div className="p-3">
//                                 <h4 className="font-semibold text-sm text-slate-800 group-hover:text-pink-600 transition-colors duration-300">
//                                   {product.title}
//                                 </h4>
//                               </div>
//                             </div>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }








// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Import all your actual images
// import womenHero from "@/assets/Women/WhatsApp Image 2025-11-07 at 09.41.14 (1).jpeg";
// import saree1 from "@/assets/Women/saree13.jpeg";
// import saree2 from "@/assets/Women/saree14.jpeg";
// import saree3 from "@/assets/Women/saree14.jpeg";
// import saree4 from "@/assets/Women/newsaree10.jpeg";
// import saree5 from "@/assets/Women/newsaree12.jpeg";
// import saree6 from "@/assets/Women/newsaree14.jpeg";
// import saree7 from "@/assets/Women/newsaree14.jpeg";
// import saree8 from "@/assets/Women/newsaree10.jpeg";

// import lehenga1 from "@/assets/Women/lehanga1.jpeg";
// import lehenga2 from "@/assets/Women/lehanga2.jpeg";
// import lehenga3 from "@/assets/Women/lehanga3.jpeg";
// import lehenga4 from "@/assets/Women/lehanga4.jpeg";
// import lehenga5 from "@/assets/Women/lehanga5.jpeg";
// import lehenga6 from "@/assets/Women/lehanga6.jpeg";
// import lehenga7 from "@/assets/Women/lehanga7.jpeg";
// import lehenga8 from "@/assets/Women/lehanga8.jpeg";

// import cropTop1 from "@/assets/Women/croptop1.jpeg";
// import cropTop2 from "@/assets/Women/croptop2.jpeg";
// import cropTop3 from "@/assets/Women/croptop3.jpeg";
// import cropTop4 from "@/assets/Women/croptop4.jpeg";
// import cropTop5 from "@/assets/Women/croptop5.jpeg";
// import cropTop6 from "@/assets/Women/croptop6.jpeg";
// import cropTop7 from "@/assets/Women/croptop7.jpeg";
// import cropTop8 from "@/assets/Women/croptop8.jpeg";
// import gown1 from "@/assets/Women/gown1.jpeg";
// import gown2 from "@/assets/Women/gown2.jpeg";
// import gown3 from "@/assets/Women/gown3.jpeg";
// import gown4 from "@/assets/Women/gown4.jpeg";
// import gown5 from "@/assets/Women/gown5.jpeg";
// import gown6 from "@/assets/Women/gown6.jpeg";
// import gown7 from "@/assets/Women/gown7.jpeg";
// import gown8 from "@/assets/Women/gown8.jpeg";


// import western1 from "@/assets/Women/western1.jpeg";
// import western2 from "@/assets/Women/western2.jpeg";
// import western3 from "@/assets/Women/western3.jpeg";
// import western4 from "@/assets/Women/western4.jpeg";
// import western5 from "@/assets/Women/western5.jpeg";
// import western6 from "@/assets/Women/western6.jpeg";
// import western7 from "@/assets/Women/western7.jpeg";
// import western8 from "@/assets/Women/western1.jpeg";

// import stitched1 from "@/assets/Women/kurthiset1.jpeg";
// import stitched2 from "@/assets/Women/kurthiset2.jpeg";
// import stitched3 from "@/assets/Women/kurthiset3.jpeg";
// import stitched4 from "@/assets/Women/kurthiset4.jpeg";
// import stitched5 from "@/assets/Women/kurthiset5.jpeg";
// import stitched6 from "@/assets/Women/kurthiset6.jpeg";
// import stitched7 from "@/assets/Women/kurthiset2.jpeg";
// import stitched8 from "@/assets/Women/kurthiset1.jpeg";

// // For categories without images, using available ones as placeholders
// const nightwearImages = [western1, western2, western3, western4, western5, western6, western7, western8];
// const winterImages = [cropTop1, cropTop2, cropTop3, cropTop4, cropTop5, cropTop6, cropTop7, cropTop8];
// const unstitchedImages = [stitched1, stitched2, stitched3, stitched4, stitched5, stitched6, stitched7, stitched8];

// const categories = [
//   { name: "Sarees", icon: "👗" },
//   { name: "Lehenga", icon: "💃" },
//   { name: "Crop Top", icon: "👚" },
//   { name: "Gown", icon: "👗" },
//   { name: "Western Dresses", icon: "👗" },
//   { name: "Stitched Salwar Suit", icon: "💠" },
//   { name: "Night Wear", icon: "🌙" },
//   { name: "Winter Collection", icon: "🧥" },
//   { name: "Unstitched Suit Collection", icon: "🪡" },
// ];

// // Mock product data with unique images for each product
// const generateProductData = () => ({
//   sarees: [...Array(8)].map((_, i) => ({
//     id: `saree-${i}`,
//     title: [
//       "Silk Saree",
//       "Cotton Saree",
//       "Designer Saree",
//       "Banarasi Saree",
//       "Georgette Saree",
//       "Chiffon Saree",
//       "Printed Saree",
//       "Embroidered Saree",
//     ][i],
//     description:
//       "Elegant saree collection crafted with traditional weaves and modern patterns for every occasion.",
//     images: [
//       [saree1, saree2, saree3, saree4],
//       [saree2, saree3, saree4, saree5],
//       [saree3, saree4, saree5, saree6],
//       [saree4, saree5, saree6, saree7],
//       [saree5, saree6, saree7, saree8],
//       [saree6, saree7, saree8, saree1],
//       [saree7, saree8, saree1, saree2],
//       [saree8, saree1, saree2, saree3],
//     ][i],
//     category: "Sarees",
//     sizes: ["Free Size"],
//     colors: ["Red", "Green", "Gold", "Maroon"],
//   })),

//   lehenga: [...Array(8)].map((_, i) => ({
//     id: `lehenga-${i}`,
//     title: [
//       "Designer Lehenga",
//       "Bridal Lehenga",
//       "Festival Lehenga",
//       "Traditional Lehenga",
//       "A-Line Lehenga",
//       "Circular Lehenga",
//       "Mermaid Lehenga",
//       "Sharara Lehenga",
//     ][i],
//     description:
//       "Exquisite lehenga collection featuring intricate embroidery and premium fabrics for special occasions.",
//     images: [
//       [lehenga1, lehenga2, lehenga3, lehenga4],
//       [lehenga2, lehenga3, lehenga4, lehenga5],
//       [lehenga3, lehenga4, lehenga5, lehenga6],
//       [lehenga4, lehenga5, lehenga6, lehenga7],
//       [lehenga5, lehenga6, lehenga7, lehenga8],
//       [lehenga6, lehenga7, lehenga8, lehenga1],
//       [lehenga7, lehenga8, lehenga1, lehenga2],
//       [lehenga8, lehenga1, lehenga2, lehenga3],
//     ][i],
//     category: "Lehenga",
//     sizes: ["XS", "S", "M", "L", "XL"],
//     colors: ["Red", "Maroon", "Pink", "Gold"],
//   })),

//   cropTop: [...Array(8)].map((_, i) => ({
//     id: `croptop-${i}`,
//     title: [
//       "Floral Crop Top",
//       "Sequin Crop Top",
//       "Embroidered Crop Top",
//       "Sleeveless Crop Top",
//       "Off-Shoulder Crop Top",
//       "Peplum Crop Top",
//       "Printed Crop Top",
//       "Chiffon Crop Top",
//     ][i],
//     description:
//       "Trendy crop tops designed for festive occasions and parties, blending comfort with elegant style.",
//     images: [
//       [cropTop1, cropTop2, cropTop3, cropTop4],
//       [cropTop2, cropTop3, cropTop4, cropTop5],
//       [cropTop3, cropTop4, cropTop5, cropTop6],
//       [cropTop4, cropTop5, cropTop6, cropTop7],
//       [cropTop5, cropTop6, cropTop7, cropTop8],
//       [cropTop6, cropTop7, cropTop8, cropTop1],
//       [cropTop7, cropTop8, cropTop1, cropTop2],
//       [cropTop8, cropTop1, cropTop2, cropTop3],
//     ][i],
//     category: "Crop Top",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Navy", "Wine", "Peach", "Lavender"],
//   })),

//   gown: [...Array(8)].map((_, i) => ({
//     id: `gown-${i}`,
//     title: [
//       "Designer Gown",
//       "Layered Gown",
//       "Anarkali Gown",
//       "Off-Shoulder Gown",
//       "Mermaid Gown",
//       "Ball Gown",
//       "High-Low Gown",
//       "Evening Gown",
//     ][i],
//     description:
//       "Elegant gown collection crafted for grand occasions with luxurious fabrics and intricate designs.",
//     images: [
//       [gown1, gown2, gown3, gown4],
//       [gown2, gown3, gown4, gown5],
//       [gown3, gown4, gown5, gown6],
//       [gown4, gown5, gown6, gown7],
//       [gown5, gown6, gown7, gown8],
//       [gown6, gown7, gown8, gown1],
//       [gown7, gown8, gown1, gown2],
//       [gown8, gown1, gown2, gown3],
//     ][i],
//     category: "Gown",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Maroon", "Royal Blue", "Beige", "Black"],
//   })),

//   western: [...Array(8)].map((_, i) => ({
//     id: `western-${i}`,
//     title: [
//       "Evening Dress",
//       "Casual Dress",
//       "Maxi Dress",
//       "Bodycon Dress",
//       "Cocktail Dress",
//       "Shift Dress",
//       "Wrap Dress",
//       "Shirt Dress",
//     ][i],
//     description:
//       "Chic western wear collection combining comfort and contemporary style for modern women.",
//     images: [
//       [western1, western2, western3, western4],
//       [western2, western3, western4, western5],
//       [western3, western4, western5, western6],
//       [western4, western5, western6, western7],
//       [western5, western6, western7, western8],
//       [western6, western7, western8, western1],
//       [western7, western8, western1, western2],
//       [western8, western1, western2, western3],
//     ][i],
//     category: "Western Dresses",
//     sizes: ["XS", "S", "M", "L", "XL"],
//     colors: ["Black", "Blue", "Beige", "Pink"],
//   })),

//   stitchedSuit: [...Array(8)].map((_, i) => ({
//     id: `stitched-${i}`,
//     title: [
//       "Embroidered Suit",
//       "Straight Cut Suit",
//       "Anarkali Suit",
//       "Front-Slit Suit",
//       "Palazzo Suit",
//       "Jacket Style Suit",
//       "Angrakha Suit",
//       "Dhoti Style Suit",
//     ][i],
//     description:
//       "Ready-to-wear stitched suits offering a perfect blend of traditional design and modern tailoring.",
//     images: [
//       [stitched1, stitched2, stitched3, stitched4],
//       [stitched2, stitched3, stitched4, stitched5],
//       [stitched3, stitched4, stitched5, stitched6],
//       [stitched4, stitched5, stitched6, stitched7],
//       [stitched5, stitched6, stitched7, stitched8],
//       [stitched6, stitched7, stitched8, stitched1],
//       [stitched7, stitched8, stitched1, stitched2],
//       [stitched8, stitched1, stitched2, stitched3],
//     ][i],
//     category: "Stitched Salwar Suit",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Pink", "Olive", "Cream", "Mustard"],
//   })),

//   nightwear: [...Array(8)].map((_, i) => ({
//     id: `nightwear-${i}`,
//     title: [
//       "Satin Nighty",
//       "Cotton Pyjama Set",
//       "Robe Set",
//       "Lounge Wear",
//       "Chemise",
//       "Pajama Shorts Set",
//       "Night Shirt",
//       "Lounge Jumpsuit",
//     ][i],
//     description:
//       "Soft and comfortable nightwear designed for relaxation and cozy nights.",
//     images: [
//       [nightwearImages[0], nightwearImages[1], nightwearImages[2], nightwearImages[3]],
//       [nightwearImages[1], nightwearImages[2], nightwearImages[3], nightwearImages[4]],
//       [nightwearImages[2], nightwearImages[3], nightwearImages[4], nightwearImages[5]],
//       [nightwearImages[3], nightwearImages[4], nightwearImages[5], nightwearImages[6]],
//       [nightwearImages[4], nightwearImages[5], nightwearImages[6], nightwearImages[7]],
//       [nightwearImages[5], nightwearImages[6], nightwearImages[7], nightwearImages[0]],
//       [nightwearImages[6], nightwearImages[7], nightwearImages[0], nightwearImages[1]],
//       [nightwearImages[7], nightwearImages[0], nightwearImages[1], nightwearImages[2]],
//     ][i],
//     category: "Night Wear",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Peach", "Grey", "Lavender", "Mint"],
//   })),

//   winter: [...Array(8)].map((_, i) => ({
//     id: `winter-${i}`,
//     title: [
//       "Woollen Sweater",
//       "Coat",
//       "Cardigan",
//       "Shawl",
//       "Puffer Jacket",
//       "Trench Coat",
//       "Knit Dress",
//       "Thermal Set",
//     ][i],
//     description:
//       "Stylish winter collection that keeps you warm while adding a touch of elegance to your look.",
//     images: [
//       [winterImages[0], winterImages[1], winterImages[2], winterImages[3]],
//       [winterImages[1], winterImages[2], winterImages[3], winterImages[4]],
//       [winterImages[2], winterImages[3], winterImages[4], winterImages[5]],
//       [winterImages[3], winterImages[4], winterImages[5], winterImages[6]],
//       [winterImages[4], winterImages[5], winterImages[6], winterImages[7]],
//       [winterImages[5], winterImages[6], winterImages[7], winterImages[0]],
//       [winterImages[6], winterImages[7], winterImages[0], winterImages[1]],
//       [winterImages[7], winterImages[0], winterImages[1], winterImages[2]],
//     ][i],
//     category: "Winter Collection",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Brown", "Grey", "Maroon", "Navy"],
//   })),

//   unstitched: [...Array(8)].map((_, i) => ({
//     id: `unstitched-${i}`,
//     title: [
//       "Cotton Suit Set",
//       "Silk Suit Material",
//       "Printed Suit Set",
//       "Chiffon Suit Fabric",
//       "Linen Suit Set",
//       "Velvet Suit Material",
//       "Organza Suit Set",
//       "Net Suit Fabric",
//     ][i],
//     description:
//       "Beautiful unstitched suit materials ready to be tailored into your perfect outfit.",
//     images: [
//       [unstitchedImages[0], unstitchedImages[1], unstitchedImages[2], unstitchedImages[3]],
//       [unstitchedImages[1], unstitchedImages[2], unstitchedImages[3], unstitchedImages[4]],
//       [unstitchedImages[2], unstitchedImages[3], unstitchedImages[4], unstitchedImages[5]],
//       [unstitchedImages[3], unstitchedImages[4], unstitchedImages[5], unstitchedImages[6]],
//       [unstitchedImages[4], unstitchedImages[5], unstitchedImages[6], unstitchedImages[7]],
//       [unstitchedImages[5], unstitchedImages[6], unstitchedImages[7], unstitchedImages[0]],
//       [unstitchedImages[6], unstitchedImages[7], unstitchedImages[0], unstitchedImages[1]],
//       [unstitchedImages[7], unstitchedImages[0], unstitchedImages[1], unstitchedImages[2]],
//     ][i],
//     category: "Unstitched Suit Collection",
//     sizes: ["Fabric Set"],
//     colors: ["Blue", "Yellow", "Beige", "Pink"],
//   })),
// });


// export default function WomenCollection() {
//   const [activeCategory, setActiveCategory] = useState("Lehenga");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

// const sectionData = [
//   { title: "👗 Sarees Collection", category: "Sarees", gradient: "from-rose-50 to-pink-50", products: productData.sarees },
//   { title: "💃 Lehenga Collection", category: "Lehenga", gradient: "from-purple-50 to-pink-50", products: productData.lehenga },
//   { title: "👚 Crop Tops", category: "Crop Top", gradient: "from-indigo-50 to-blue-50", products: productData.cropTop },
//   { title: "👗 Gown Collection", category: "Gown", gradient: "from-violet-50 to-fuchsia-50", products: productData.gown },
//   { title: "👗 Western Dresses", category: "Western Dresses", gradient: "from-blue-50 to-cyan-50", products: productData.western },
//   { title: "💠 Stitched Salwar Suit", category: "Stitched Salwar Suit", gradient: "from-yellow-50 to-amber-50", products: productData.stitchedSuit },
//   { title: "🌙 Night Wear", category: "Night Wear", gradient: "from-gray-50 to-slate-50", products: productData.nightwear },
//   { title: "🧥 Winter Collection", category: "Winter Collection", gradient: "from-sky-50 to-blue-50", products: productData.winter },
//   { title: "🪡 Unstitched Suit Collection", category: "Unstitched Suit Collection", gradient: "from-green-50 to-emerald-50", products: productData.unstitched },
// ];


//   const openModal = (product: any) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === selectedProduct.images.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === 0 ? selectedProduct.images.length - 1 : prev - 1
//     );
//   };

//   // Get related products (same category, excluding current product)
//   const getRelatedProducts = () => {
//     if (!selectedProduct) return [];
//     const currentSection = sectionData.find(section => section.category === selectedProduct.category);
//     return currentSection?.products.filter(product => product.id !== selectedProduct.id) || [];
//   };

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
//             <span className="text-sm font-semibold text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
//               TRENDING COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-pink-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-pink-600 to-slate-800 bg-clip-text text-transparent">
//             Women's Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-600 to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-pink-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-600 to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
//             Discover elegant fashion that celebrates your unique style — where sophistication meets 
//             comfort in every design and every detail.
//           </p>
//         </motion.div>

//         {/* Enhanced Category Buttons */}
//         <motion.div 
//           className="flex flex-wrap gap-4 justify-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           {categories.map((cat) => (
//             <motion.div
//               key={cat.name}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Button
//                 onClick={() => setActiveCategory(cat.name)}
//                 onMouseEnter={() => setHoveredCategory(cat.name)}
//                 onMouseLeave={() => setHoveredCategory("")}
//                 className={`relative px-8 py-4 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
//                   activeCategory === cat.name
//                     ? "bg-gradient-to-r from-pink-600 to-pink-500 text-white border-pink-600 shadow-2xl shadow-pink-500/25 scale-105"
//                     : "border-slate-200 bg-white/80 hover:border-pink-500/50 hover:shadow-xl text-slate-700"
//                 }`}
//                 variant="outline"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 transition-all duration-500 ${
//                   hoveredCategory === cat.name && activeCategory !== cat.name 
//                     ? "opacity-5" 
//                     : "opacity-0"
//                 }`}></div>
                
//                 <span className="text-lg mr-2">{cat.icon}</span>
//                 {cat.name}
                
//                 {activeCategory === cat.name && (
//                   <motion.div
//                     className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white rounded-t-full"
//                     layoutId="activeIndicator"
//                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                   />
//                 )}
//               </Button>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Enhanced Product Sections */}
//         {sectionData.map(
//           (section) =>
//             activeCategory === section.category && (
//               <motion.div
//                 key={section.category}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className={`mb-20 p-8 rounded-3xl bg-gradient-to-br ${section.gradient}`}
//               >
//                 <div className="flex items-center justify-between mb-10">
//                   <div className="flex items-center gap-4">
//                     <div className="w-2 h-12 bg-gradient-to-b from-pink-600 to-pink-400 rounded-full"></div>
//                     <div>
//                       <h2 className="font-serif text-4xl font-bold text-slate-800">
//                         {section.title}
//                       </h2>
//                       <p className="text-slate-600 mt-1">
//                         {section.products.length} stunning items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-black text-white border border-slate-200 hover:border-pink-500 hover:bg-black rounded-xl px-6 py-2 transition-all duration-300">
//                     <span className="mr-2">Explore All</span>
//                     <motion.span
//                       initial={{ x: 0 }}
//                       whileHover={{ x: 3 }}
//                       transition={{ type: "spring", stiffness: 400 }}
//                     >
//                       →
//                     </motion.span>
//                   </Button>
//                 </div>

//                 {/* Products Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                   {section.products.map((product, i) => (
//                     <motion.div
//                       key={product.id}
//                       initial={{ opacity: 0, scale: 0.9, y: 20 }}
//                       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                       whileHover={{ y: -8 }}
//                       transition={{ 
//                         delay: i * 0.1,
//                         type: "spring",
//                         stiffness: 300
//                       }}
//                       className="group cursor-pointer"
//                       onClick={() => openModal(product)}
//                     >
//                       <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
//                         <div className="relative overflow-hidden bg-slate-50">
//                           <div className="w-full h-64 flex items-center justify-center bg-slate-100">
//                             <motion.img
//                               src={product.images[0]}
//                               alt={product.title}
//                               className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-700 group-hover:scale-110"
//                               whileHover={{ scale: 1.05 }}
//                               transition={{ type: "spring", stiffness: 300 }}
//                             />
//                           </div>
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
//                           {/* Image count badge */}
//                           <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
//                             {product.images.length} images
//                           </div>
//                         </div>
                        
//                         <div className="p-6">
//                           <h3 className="font-semibold text-lg text-slate-800 group-hover:text-pink-600 transition-colors duration-300 mb-2">
//                             {product.title}
//                           </h3>
//                           <p className="text-sm text-slate-500">{product.category}</p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             )
//         )}
//       </div>

//       {/* Enhanced Gallery Modal - Smaller Size */}
//       <AnimatePresence>
//         {selectedProduct && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", damping: 25 }}
//               className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex flex-col h-full">
//                 {/* Header */}
//                 <div className="flex justify-between items-center p-4 border-b border-slate-200">
//                   <h2 className="font-serif text-xl font-bold text-slate-800">
//                     {selectedProduct.title}
//                   </h2>
//                   <button
//                     onClick={closeModal}
//                     className="bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors duration-300"
//                   >
//                     <X className="w-5 h-5" />
//                   </button>
//                 </div>

//                 {/* Main Content */}
//                 <div className="flex-1 overflow-auto">
//                   <div className="p-6">
//                     {/* Main Image Gallery */}
//                     <div className="mb-6">
//                       <div className="relative rounded-xl overflow-hidden bg-slate-50 mb-3">
//                         <div className="flex items-center justify-center min-h-[300px] p-3">
//                           <motion.img
//                             key={currentImageIndex}
//                             src={selectedProduct.images[currentImageIndex]}
//                             alt={selectedProduct.title}
//                             className="max-w-full max-h-[280px] w-auto h-auto object-contain"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 0.3 }}
//                           />
//                         </div>
                        
//                         {/* Navigation Arrows */}
//                         <button
//                           onClick={prevImage}
//                           className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 transition-all duration-300 shadow-lg"
//                         >
//                           <ChevronLeft className="w-4 h-4" />
//                         </button>
//                         <button
//                           onClick={nextImage}
//                           className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 transition-all duration-300 shadow-lg"
//                         >
//                           <ChevronRight className="w-4 h-4" />
//                         </button>

//                         {/* Image Counter */}
//                         <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
//                           {currentImageIndex + 1} / {selectedProduct.images.length}
//                         </div>
//                       </div>

//                       {/* Thumbnail Gallery */}
//                       <div className="flex gap-2 overflow-x-auto py-1">
//                         {selectedProduct.images.map((image, index) => (
//                           <motion.button
//                             key={index}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => setCurrentImageIndex(index)}
//                             className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
//                               currentImageIndex === index
//                                 ? "border-pink-600 shadow-md"
//                                 : "border-slate-200 hover:border-slate-300"
//                             }`}
//                           >
//                             <img
//                               src={image}
//                               alt={`${selectedProduct.title} ${index + 1}`}
//                               className="w-full h-full object-cover"
//                             />
//                           </motion.button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Color Selection Only */}
//                     {/* <div className="mb-6">
//                       <div className="bg-slate-50 rounded-xl p-4">
//                         <h4 className="font-semibold text-slate-800 mb-3 text-sm">
//                           Available Colors
//                         </h4>
//                         <div className="flex flex-wrap gap-2">
//                           {selectedProduct.colors.map((color) => (
//                             <button
//                               key={color}
//                               className="px-3 py-1.5 border border-slate-300 rounded-lg hover:border-pink-600 hover:text-pink-600 transition-colors duration-300 font-medium text-sm"
//                             >
//                               {color}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     </div> */}

//                     {/* Related Products Gallery */}
//                     {/* <div>
//                       <h3 className="font-serif text-xl font-bold text-slate-800 mb-4">
//                         You Might Also Like
//                       </h3>
//                       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
//                         {getRelatedProducts().slice(0, 5).map((product) => (
//                           <motion.div
//                             key={product.id}
//                             whileHover={{ scale: 1.05 }}
//                             className="cursor-pointer group"
//                             onClick={() => {
//                               setSelectedProduct(product);
//                               setCurrentImageIndex(0);
//                             }}
//                           >
//                             <div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200 transition-all duration-300 group-hover:border-pink-600 group-hover:shadow-md">
//                               <div className="flex items-center justify-center h-24 bg-slate-100">
//                                 <img
//                                   src={product.images[0]}
//                                   alt={product.title}
//                                   className="max-w-full max-h-full w-auto h-auto object-contain"
//                                 />
//                               </div>
//                               <div className="p-2">
//                                 <h4 className="font-semibold text-xs text-slate-800 group-hover:text-pink-600 transition-colors duration-300">
//                                   {product.title}
//                                 </h4>
//                               </div>
//                             </div>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div> */}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }








import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";
import ProductFrame from "@/ProductFrame/ProductFrame";

// Import all your actual images
import womenHero from "@/assets/Women/WhatsApp Image 2025-11-07 at 09.41.14 (1).jpeg";
import saree1 from "@/assets/Women/newsaree1.jpeg";
import saree2 from "@/assets/Women/saree13.jpeg";
import saree3 from "@/assets/Women/saree9.jpeg";
import saree4 from "@/assets/Women/saree20.jpeg";
import saree5 from "@/assets/Women/newsaree13.jpeg";
import saree6 from "@/assets/Women/saree20.jpeg";
import saree7 from "@/assets/Women/newsaree10.jpeg";
import saree8 from "@/assets/Women/newsaree15.jpeg";

import lehenga1 from "@/assets/Women/Bridallehenga1.jpeg";
import lehenga2 from "@/assets/Women/Bridallehenga3.jpeg";
import lehenga3 from "@/assets/Women/Bridallehenga4.jpeg";
import lehenga4 from "@/assets/Women/Bridallehenga5.jpeg";
import lehenga5 from "@/assets/Women/Bridallehenga6.jpeg";
import lehenga6 from "@/assets/Women/Bridallehenga7.jpeg";
import lehenga7 from "@/assets/Women/Bridallehenga8.jpeg";
import lehenga8 from "@/assets/Women/Bridallehenga9.jpeg";

import cropTop1 from "@/assets/Women/croptop1.jpeg";
import cropTop2 from "@/assets/Women/croptop2.jpeg";
import cropTop3 from "@/assets/Women/croptop3.jpeg";
import cropTop4 from "@/assets/Women/croptop4.jpeg";
import cropTop5 from "@/assets/Women/croptop5.jpeg";
import cropTop6 from "@/assets/Women/croptop6.jpeg";
import cropTop7 from "@/assets/Women/croptop7.jpeg";
import cropTop8 from "@/assets/Women/croptop8.jpeg";

import gown1 from "@/assets/Women/gown1.jpeg";
import gown2 from "@/assets/Women/gown2.jpeg";
import gown3 from "@/assets/Women/gown3.jpeg";
import gown4 from "@/assets/Women/gown4.jpeg";
import gown5 from "@/assets/Women/gown5.jpeg";
import gown6 from "@/assets/Women/gown6.jpeg";
import gown7 from "@/assets/Women/gown7.jpeg";
import gown8 from "@/assets/Women/gown8.jpeg";

import western1 from "@/assets/Women/nightwear1.jpeg";
import western2 from "@/assets/Women/nightwear2.jpeg";
import western3 from "@/assets/Women/nightwear3.jpeg";
import western4 from "@/assets/Women/nightwear4.jpeg";
import western5 from "@/assets/Women/nightwear5.jpeg";
import western6 from "@/assets/Women/nightwear6.jpeg";
import western7 from "@/assets/Women/nightwear7.jpeg";
import western8 from "@/assets/Women/nightwear3.jpeg";

import stitched1 from "@/assets/Women/newSalwarsuit1.jpeg";
import stitched2 from "@/assets/Women/newSalwarsuit2.jpeg";
import stitched3 from "@/assets/Women/newSalwarsuit3.jpeg";
import stitched4 from "@/assets/Women/newSalwarsuit4.jpeg";
import stitched5 from "@/assets/Women/newSalwarsuit5.jpeg";
import stitched6 from "@/assets/Women/newSalwarsuit6.jpeg";
import stitched7 from "@/assets/Women/newSalwarsuit7.jpeg";
import stitched8 from "@/assets/Women/newSalwarsuit8.jpeg";

// For categories without images, using available ones as placeholders
const nightwearImages = [western1, western2, western3, western4, western5, western6, western7, western8];
const winterImages = [cropTop1, cropTop2, cropTop3, cropTop4, cropTop5, cropTop6, cropTop7, cropTop8];
const unstitchedImages = [stitched1, stitched2, stitched3, stitched4, stitched5, stitched6, stitched7, stitched8];

interface Product {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
  price?: string;
}

const categories = [
  { name: "Sarees", icon: "👗" },
  { name: "Lehenga", icon: "💃" },
  { name: "Crop Top", icon: "👚" },
  { name: "Gown", icon: "👗" },
  { name: "Western Dresses", icon: "👗" },
  { name: "Stitched Salwar Suit", icon: "💠" },
  { name: "Night Wear", icon: "🌙" },
  { name: "Winter Collection", icon: "🧥" },
  { name: "Unstitched Suit Collection", icon: "🪡" },
];

// Mock product data with unique images for each product
const generateProductData = () => ({
  sarees: [...Array(8)].map((_, i) => ({
    id: `saree-${i}`,
    title: ``,
    description: "Elegant saree collection crafted with traditional weaves and modern patterns for every occasion.",
    images: [
      [saree1, saree2, saree3, saree4],
      [saree2, saree3, saree4, saree5],
      [saree3, saree4, saree5, saree6],
      [saree4, saree5, saree6, saree7],
      [saree5, saree6, saree7, saree8],
      [saree6, saree7, saree8, saree1],
      [saree7, saree8, saree1, saree2],
      [saree8, saree1, saree2, saree3],
    ][i],
    category: "Sarees",
    sizes: ["Free Size"],
    colors: ["Red", "Green", "Gold", "Maroon"],
    price: "$99-$299"
  })),

  lehenga: [...Array(8)].map((_, i) => ({
    id: `lehenga-${i}`,
    title: ``,
    description: "Exquisite lehenga collection featuring intricate embroidery and premium fabrics for special occasions.",
    images: [
      [lehenga1, lehenga2, lehenga3, lehenga4],
      [lehenga2, lehenga3, lehenga4, lehenga5],
      [lehenga3, lehenga4, lehenga5, lehenga6],
      [lehenga4, lehenga5, lehenga6, lehenga7],
      [lehenga5, lehenga6, lehenga7, lehenga8],
      [lehenga6, lehenga7, lehenga8, lehenga1],
      [lehenga7, lehenga8, lehenga1, lehenga2],
      [lehenga8, lehenga1, lehenga2, lehenga3],
    ][i],
    category: "Lehenga",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Red", "Maroon", "Pink", "Gold"],
    price: "$199-$599"
  })),

  cropTop: [...Array(8)].map((_, i) => ({
    id: `croptop-${i}`,
    title: ``,
    description: "Trendy crop tops designed for festive occasions and parties, blending comfort with elegant style.",
    images: [
      [cropTop1, cropTop2, cropTop3, cropTop4],
      [cropTop2, cropTop3, cropTop4, cropTop5],
      [cropTop3, cropTop4, cropTop5, cropTop6],
      [cropTop4, cropTop5, cropTop6, cropTop7],
      [cropTop5, cropTop6, cropTop7, cropTop8],
      [cropTop6, cropTop7, cropTop8, cropTop1],
      [cropTop7, cropTop8, cropTop1, cropTop2],
      [cropTop8, cropTop1, cropTop2, cropTop3],
    ][i],
    category: "Crop Top",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Wine", "Peach", "Lavender"],
    price: "$49-$129"
  })),

  gown: [...Array(8)].map((_, i) => ({
    id: `gown-${i}`,
    title: ``,
    description: "Elegant gown collection crafted for grand occasions with luxurious fabrics and intricate designs.",
    images: [
      [gown1, gown2, gown3, gown4],
      [gown2, gown3, gown4, gown5],
      [gown3, gown4, gown5, gown6],
      [gown4, gown5, gown6, gown7],
      [gown5, gown6, gown7, gown8],
      [gown6, gown7, gown8, gown1],
      [gown7, gown8, gown1, gown2],
      [gown8, gown1, gown2, gown3],
    ][i],
    category: "Gown",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Maroon", "Royal Blue", "Beige", "Black"],
    price: "$149-$399"
  })),

  western: [...Array(8)].map((_, i) => ({
    id: `western-${i}`,
    title: ``,
    description: "Chic western wear collection combining comfort and contemporary style for modern women.",
    images: [
      [western1, western2, western3, western4],
      [western2, western3, western4, western5],
      [western3, western4, western5, western6],
      [western4, western5, western6, western7],
      [western5, western6, western7, western8],
      [western6, western7, western8, western1],
      [western7, western8, western1, western2],
      [western8, western1, western2, western3],
    ][i],
    category: "Western Dresses",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Blue", "Beige", "Pink"],
    price: "$59-$199"
  })),

  stitchedSuit: [...Array(8)].map((_, i) => ({
    id: `stitched-${i}`,
    title: ``,
    description: "Ready-to-wear stitched suits offering a perfect blend of traditional design and modern tailoring.",
    images: [
      [stitched1, stitched2, stitched3, stitched4],
      [stitched2, stitched3, stitched4, stitched5],
      [stitched3, stitched4, stitched5, stitched6],
      [stitched4, stitched5, stitched6, stitched7],
      [stitched5, stitched6, stitched7, stitched8],
      [stitched6, stitched7, stitched8, stitched1],
      [stitched7, stitched8, stitched1, stitched2],
      [stitched8, stitched1, stitched2, stitched3],
    ][i],
    category: "Stitched Salwar Suit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Pink", "Olive", "Cream", "Mustard"],
    price: "$79-$259"
  })),

  nightwear: [...Array(8)].map((_, i) => ({
    id: `nightwear-${i}`,
    title: ``,
    description: "Soft and comfortable nightwear designed for relaxation and cozy nights.",
    images: [
      [nightwearImages[0], nightwearImages[1], nightwearImages[2], nightwearImages[3]],
      [nightwearImages[1], nightwearImages[2], nightwearImages[3], nightwearImages[4]],
      [nightwearImages[2], nightwearImages[3], nightwearImages[4], nightwearImages[5]],
      [nightwearImages[3], nightwearImages[4], nightwearImages[5], nightwearImages[6]],
      [nightwearImages[4], nightwearImages[5], nightwearImages[6], nightwearImages[7]],
      [nightwearImages[5], nightwearImages[6], nightwearImages[7], nightwearImages[0]],
      [nightwearImages[6], nightwearImages[7], nightwearImages[0], nightwearImages[1]],
      [nightwearImages[7], nightwearImages[0], nightwearImages[1], nightwearImages[2]],
    ][i],
    category: "Night Wear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Peach", "Grey", "Lavender", "Mint"],
    price: "$29-$89"
  })),

  winter: [...Array(8)].map((_, i) => ({
    id: `winter-${i}`,
    title: ``,
    description: "Stylish winter collection that keeps you warm while adding a touch of elegance to your look.",
    images: [
      [winterImages[0], winterImages[1], winterImages[2], winterImages[3]],
      [winterImages[1], winterImages[2], winterImages[3], winterImages[4]],
      [winterImages[2], winterImages[3], winterImages[4], winterImages[5]],
      [winterImages[3], winterImages[4], winterImages[5], winterImages[6]],
      [winterImages[4], winterImages[5], winterImages[6], winterImages[7]],
      [winterImages[5], winterImages[6], winterImages[7], winterImages[0]],
      [winterImages[6], winterImages[7], winterImages[0], winterImages[1]],
      [winterImages[7], winterImages[0], winterImages[1], winterImages[2]],
    ][i],
    category: "Winter Collection",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Brown", "Grey", "Maroon", "Navy"],
    price: "$89-$299"
  })),

  unstitched: [...Array(8)].map((_, i) => ({
    id: `unstitched-${i}`,
    title: ``,
    description: "Beautiful unstitched suit materials ready to be tailored into your perfect outfit.",
    images: [
      [unstitchedImages[0], unstitchedImages[1], unstitchedImages[2], unstitchedImages[3]],
      [unstitchedImages[1], unstitchedImages[2], unstitchedImages[3], unstitchedImages[4]],
      [unstitchedImages[2], unstitchedImages[3], unstitchedImages[4], unstitchedImages[5]],
      [unstitchedImages[3], unstitchedImages[4], unstitchedImages[5], unstitchedImages[6]],
      [unstitchedImages[4], unstitchedImages[5], unstitchedImages[6], unstitchedImages[7]],
      [unstitchedImages[5], unstitchedImages[6], unstitchedImages[7], unstitchedImages[0]],
      [unstitchedImages[6], unstitchedImages[7], unstitchedImages[0], unstitchedImages[1]],
      [unstitchedImages[7], unstitchedImages[0], unstitchedImages[1], unstitchedImages[2]],
    ][i],
    category: "Unstitched Suit Collection",
    sizes: ["Fabric Set"],
    colors: ["Blue", "Yellow", "Beige", "Pink"],
    price: "$39-$159"
  })),
});

export default function WomenCollection() {
  const [activeCategory, setActiveCategory] = useState("Sarees");
  const [hoveredCategory, setHoveredCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productData = generateProductData();

  const sectionData = [
    { 
      title: "👗 Sarees Collection", 
      category: "Sarees", 
      gradient: "from-pink-50 to-rose-50", 
      products: productData.sarees 
    },
    { 
      title: "💃 Lehenga Collection", 
      category: "Lehenga", 
      gradient: "from-pink-50 to-rose-50", 
      products: productData.lehenga 
    },
    { 
      title: "👚 Crop Tops", 
      category: "Crop Top", 
      gradient: "from-pink-50 to-rose-50", 
      products: productData.cropTop 
    },
    { 
      title: "👗 Gown Collection", 
      category: "Gown", 
      gradient: "from-pink-50 to-rose-50", 
      products: productData.gown 
    },
    { 
      title: "👗 Western Dresses", 
      category: "Western Dresses", 
      gradient: "from-pink-50 to-rose-50", 
      products: productData.western 
    },
    { 
      title: "💠 Stitched Salwar Suit", 
      category: "Stitched Salwar Suit", 
      gradient: "from-pink-50 to-rose-50", 
      products: productData.stitchedSuit 
    },
    { 
      title: "🌙 Night Wear", 
      category: "Night Wear", 
      gradient: "from-pink-50 to-rose-50", 
      products: productData.nightwear 
    },
    { 
      title: "🧥 Winter Collection", 
      category: "Winter Collection", 
      gradient: "from-pink-50 to-rose-50", 
      products: productData.winter 
    },
    { 
      title: "🪡 Unstitched Suit Collection", 
      category: "Unstitched Suit Collection", 
      gradient: "from-pink-50 to-rose-50", 
      products: productData.unstitched 
    },
  ];

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Enhanced Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-pink-500" />
            <span className="text-sm font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
              TRENDING COLLECTION
            </span>
            <Sparkles className="w-6 h-6 text-pink-500" />
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-pink-600 to-slate-800 bg-clip-text text-transparent">
            Women's Fashion Collection
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
            <Star className="w-5 h-5 text-pink-500 fill-current" />
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover elegant fashion that celebrates your unique style — where sophistication meets 
            comfort in every design and every detail.
          </p>
        </motion.div>

        {/* Enhanced Category Buttons */}
        <motion.div 
          className="flex flex-wrap gap-3 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setActiveCategory(cat.name)}
                onMouseEnter={() => setHoveredCategory(cat.name)}
                onMouseLeave={() => setHoveredCategory("")}
                className={`relative px-6 py-3 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
                  activeCategory === cat.name
                    ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white border-pink-500 shadow-2xl shadow-pink-500/25 scale-105"
                    : "border-pink-200 bg-white/80 hover:border-pink-300 hover:bg-pink-50 hover:shadow-xl text-pink-700"
                }`}
                variant="outline"
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-500 ${
                  hoveredCategory === cat.name && activeCategory !== cat.name 
                    ? "opacity-5" 
                    : "opacity-0"
                }`}></div>
                
                <span className="text-lg mr-2">{cat.icon}</span>
                {cat.name}
                
                {activeCategory === cat.name && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white rounded-t-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Product Sections */}
        {sectionData.map(
          (section) =>
            activeCategory === section.category && (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`mb-20 p-8 rounded-3xl bg-gradient-to-br ${section.gradient}`}
              >
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-12 bg-gradient-to-b from-pink-500 to-pink-400 rounded-full"></div>
                    <div>
                      <h2 className="font-serif text-4xl font-bold text-slate-800">
                        {section.title}
                      </h2>
                      <p className="text-slate-600 mt-1">
                        {section.products.length} stunning items
                      </p>
                    </div>
                  </div>
                  
                  <Button className="group bg-pink-600 text-white border border-pink-600 hover:bg-pink-700 hover:border-pink-700 rounded-xl px-6 py-2 transition-all duration-300">
                    <span className="mr-2">Explore All</span>
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      →
                    </motion.span>
                  </Button>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {section.products.map((product, i) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      whileHover={{ y: -8 }}
                      transition={{ 
                        delay: i * 0.1,
                        type: "spring",
                        stiffness: 300
                      }}
                      className="group cursor-pointer"
                      onClick={() => openModal(product)}
                    >
                      <ProductFrame image={product.images[0]} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
        )}
      </div>

      {/* Enhanced Gallery Modal - Smaller Size */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                {/* Main Content */}
                <div className="flex-1 overflow-auto relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 rounded-full p-2 shadow-md transition-colors duration-300 z-50"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <div className="p-6">
                    {/* Main Image Gallery */}
                    <div className="mb-6">
                      <div className="relative rounded-xl overflow-hidden bg-slate-50 mb-3">
                        <div className="flex items-center justify-center min-h-[300px] p-3">
                          <ProductFrame image={selectedProduct.images[currentImageIndex]} />
                        </div>
                        
                        {/* Navigation Arrows */}
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 transition-all duration-300 shadow-lg"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 transition-all duration-300 shadow-lg"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                          {currentImageIndex + 1} / {selectedProduct.images.length}
                        </div>
                      </div>

                      {/* Thumbnail Gallery */}
                      <div className="flex gap-2 overflow-x-auto py-1">
                        {selectedProduct.images.map((image, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                              currentImageIndex === index
                                ? "border-pink-500 shadow-md"
                                : "border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            <img
                              src={image}
                              alt={`${selectedProduct.title} ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}