// import React from "react";
// import { motion } from "framer-motion";
// import menHero from "@/assets/men-hero.jpg"; // replace with your image
// import { Button } from "@/components/ui/button";

// interface ProductCardProps {
//   image: string;
//   title: string;
//   category: string;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ image, title, category }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
//     >
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
//       />
//       <div className="p-4 text-center">
//         <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//         <p className="text-sm text-gray-500 mt-1">{category}</p>
//         <Button className="mt-3 bg-black text-white rounded-full hover:bg-gray-800">
//           Shop Now
//         </Button>
//       </div>
//     </motion.div>
//   );
// };

// const MensCollection: React.FC = () => {
//   const categories = [
//     { name: "Formal Wear", count: 24 },
//     { name: "Casual Wear", count: 36 },
//     { name: "Traditional", count: 18 },
//     { name: "party wear", count: 42 },
//   ];

//   return (
//     <section className="bg-gray-50 min-h-screen py-16">
//       {/* Category Buttons */}
//       <div className="container mx-auto px-4">
//         <h1 className="text-center text-4xl font-extrabold mb-10 text-gray-800">
//           Men's Fashion Collection
//         </h1>
//         <div className="flex flex-wrap gap-4 justify-center mb-12">
//           {categories.map((cat, index) => (
//             <motion.button
//               key={cat.name}
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="px-6 py-3 rounded-full border border-gray-400 text-gray-700 
//                          hover:bg-black hover:text-white transition-all duration-300"
//             >
//               {cat.name}{" "}
//               <span className="text-gray-500 text-sm">({cat.count})</span>
//             </motion.button>
//           ))}
//         </div>

//         {/* Formal Wear Section */}
//         <div className="mb-20">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-8 border-l-4 border-black pl-4">
//             Formal Wear
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[...Array(8)].map((_, i) => (
//               <ProductCard
//                 key={i}
//                 image={menHero}
//                 title="Premium Tailored Suit"
//                 category="Formal"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Casual Wear Section */}
//         <div className="mb-20">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-8 border-l-4 border-black pl-4">
//             Casual Collection
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[...Array(8)].map((_, i) => (
//               <ProductCard
//                 key={i}
//                 image={menHero}
//                 title="Casual Cotton Shirt"
//                 category="Casual"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Traditional Wear Section */}
//         <div className="mb-20">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-8 border-l-4 border-black pl-4">
//             Traditional Wear
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[...Array(4)].map((_, i) => (
//               <ProductCard
//                 key={i}
//                 image={menHero}
//                 title="Ethnic Kurta Set"
//                 category="Traditional"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MensCollection;









// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import menHero from "@/assets/men-hero.jpg";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   images: string[];
//   category: string;
//   sizes: string[];
//   colors: string[];
//   price?: string;
// }

// const categories = [
//   { name: "Formal Wear", count: 24, icon: "👔" },
//   { name: "Casual Wear", count: 36, icon: "👕" },
//   { name: "Traditional", count: 18, icon: "🧥" },
//   { name: "Party Wear", count: 42, icon: "🎉" },
// ];

// // Mock product data with multiple images
// const generateProductData = () => ({
//   formal: [...Array(8)].map((_, i) => ({
//     id: `formal-${i}`,
//     title: ["Premium Tailored Suit", "Executive Blazer", "Designer Tuxedo", "Business Formal"][i % 4],
//     description: "Elegant and sophisticated formal wear crafted with premium fabrics for the modern gentleman.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Formal Wear",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Charcoal", "Burgundy"],
//     price: "$299"
//   })),
//   casual: [...Array(8)].map((_, i) => ({
//     id: `casual-${i}`,
//     title: ["Casual Cotton Shirt", "Denim Collection", "Sports Wear", "Weekend Comfort"][i % 4],
//     description: "Comfortable and stylish casual wear perfect for everyday activities and relaxed occasions.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Casual Wear",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Blue", "White", "Gray", "Green"],
//     price: "$89"
//   })),
//   traditional: [...Array(4)].map((_, i) => ({
//     id: `traditional-${i}`,
//     title: ["Ethnic Kurta Set", "Traditional Sherwani", "Cultural Wear", "Festival Collection"][i % 4],
//     description: "Rich traditional attire that celebrates heritage with contemporary style and comfort.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Traditional",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Cream", "Maroon", "Royal Blue", "Black"],
//     price: "$159"
//   })),
//   party: [...Array(8)].map((_, i) => ({
//     id: `party-${i}`,
//     title: ["Night Out Fit", "Celebration Wear", "Designer Shirt", "Party Collection"][i % 4],
//     description: "Trendy and fashionable party wear that makes you stand out in every celebration.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Party Wear",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Black", "Navy", "Burgundy", "Emerald"],
//     // price: "$129"
//   }))
// });

// const MensCollection: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState("Formal Wear");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "Formal Wear",
//       category: "Formal Wear",
//       gradient: "from-blue-50 to-cyan-50",
//       products: productData.formal,
//     },
//     {
//       title: "Casual Collection",
//       category: "Casual Wear",
//       gradient: "from-slate-50 to-gray-50",
//       products: productData.casual,
//     },
//     {
//       title: "Traditional Wear",
//       category: "Traditional",
//       gradient: "from-amber-50 to-orange-50",
//       products: productData.traditional,
//     },
//     {
//       title: "Party Wear",
//       category: "Party Wear",
//       gradient: "from-purple-50 to-violet-50",
//       products: productData.party,
//     },
//   ];

//   const openModal = (product: Product) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === selectedProduct.images.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === 0 ? selectedProduct.images.length - 1 : prev - 1
//       );
//     }
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
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//             <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
//               PREMIUM COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-accent to-slate-800 bg-clip-text text-transparent">
//             Men's Fashion Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-yellow-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover sophisticated fashion for the modern gentleman — where elegance meets contemporary 
//             style in every detail and every occasion.
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
//                     ? "bg-gradient-to-r from-accent to-accent/90 text-white border-accent shadow-2xl shadow-accent/25 scale-105"
//                     : "border-slate-200 bg-white/80 hover:border-accent/50 hover:shadow-xl text-slate-700"
//                 }`}
//                 variant="outline"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-accent to-accent/90 transition-all duration-500 ${
//                   hoveredCategory === cat.name && activeCategory !== cat.name 
//                     ? "opacity-5" 
//                     : "opacity-0"
//                 }`}></div>
                
//                 <span className="text-lg mr-2">{cat.icon}</span>
//                 {cat.name}
//                 <span className="text-slate-500 text-sm ml-2">({cat.count})</span>
                
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
//                 className="mb-20"
//               >
//                 <div className="flex items-center justify-between mb-10">
//                   <div className="flex items-center gap-4">
//                     <div className="w-2 h-12 bg-gradient-to-b from-accent to-accent/70 rounded-full"></div>
//                     <div>
//                       <h2 className="font-serif text-4xl font-bold text-slate-800">
//                         {section.title}
//                       </h2>
//                       <p className="text-slate-600 mt-1">
//                         {section.products.length} premium items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-black border border-slate-200 hover:border-accent hover:bg-black rounded-xl px-6 py-2 transition-all duration-300">
//                     <span className="mr-2 text-white">Explore All</span>
//                     <motion.span
//                       initial={{ x: 0 }}
//                       whileHover={{ x: 3 }}
//                       transition={{ type: "spring", stiffness: 400 }}
//                       className="text-white"
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
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
//                           {/* Price Tag */}
//                           {/* <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
//                             {product.price}
//                           </div> */}
//                         </div>
                        
//                         <div className="p-6">
//                           <h3 className="font-semibold text-lg text-slate-800 mb-2 group-hover:text-accent transition-colors duration-300">
//                             {product.title}
//                           </h3>
//                           <p className="text-sm text-slate-500 mb-3">{product.category}</p>
                          
//                           {/* Color Options */}
//                           <div className="flex gap-2 mb-4">
//                             {product.colors.slice(0, 3).map((color, index) => (
//                               <div
//                                 key={index}
//                                 className="w-4 h-4 rounded-full border border-slate-300"
//                                 style={{ 
//                                   backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : 
//                                     color.toLowerCase() === 'black' ? '#000000' :
//                                     color.toLowerCase() === 'navy' ? '#001f3f' :
//                                     color.toLowerCase() === 'blue' ? '#0074D9' :
//                                     color.toLowerCase() === 'red' ? '#FF4136' :
//                                     color.toLowerCase() === 'green' ? '#2ECC40' :
//                                     color.toLowerCase() === 'gray' ? '#AAAAAA' :
//                                     color.toLowerCase() === 'charcoal' ? '#36454F' :
//                                     color.toLowerCase() === 'burgundy' ? '#800020' :
//                                     color.toLowerCase() === 'cream' ? '#FFFDD0' :
//                                     color.toLowerCase() === 'maroon' ? '#800000' :
//                                     color.toLowerCase() === 'royal blue' ? '#4169E1' :
//                                     color.toLowerCase() === 'emerald' ? '#50C878' : '#f0f0f0'
//                                 }}
//                                 title={color}
//                               />
//                             ))}
//                             {product.colors.length > 3 && (
//                               <div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-xs text-slate-600">
//                                 +{product.colors.length - 3}
//                               </div>
//                             )}
//                           </div>
                          
//                           <Button className="w-full bg-black text-white rounded-xl hover:bg-accent transition-all duration-300 group">
//                             <span>Shop Now</span>
//                             <motion.span
//                               initial={{ x: 0 }}
//                               whileHover={{ x: 3 }}
//                               transition={{ type: "spring", stiffness: 400 }}
//                               className="ml-2"
//                             >
//                               →
//                             </motion.span>
//                           </Button>
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
//                                 ? "border-accent shadow-md"
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
//                         <h3 className="font-serif text-xl font-bold text-slate-800 mb-4">
//                           Product Details
//                         </h3>
//                         <p className="text-slate-600 leading-relaxed mb-4">
//                           {selectedProduct.description}
//                         </p>
                        
//                         <div className="space-y-3">
//                           <div>
//                             <h4 className="font-semibold text-slate-800 mb-2">Available Sizes</h4>
//                             <div className="flex gap-2">
//                               {selectedProduct.sizes.map((size) => (
//                                 <span key={size} className="px-3 py-1 border border-slate-300 rounded-lg text-sm">
//                                   {size}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
                          
//                           <div>
//                             <h4 className="font-semibold text-slate-800 mb-2">Color Options</h4>
//                             <div className="flex gap-2">
//                               {selectedProduct.colors.map((color) => (
//                                 <span key={color} className="px-3 py-1 border border-slate-300 rounded-lg text-sm">
//                                   {color}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="bg-slate-50 rounded-2xl p-6">
//                         <h3 className="font-serif text-xl font-bold text-slate-800 mb-4">
//                           Pricing & Options
//                         </h3>
//                         <div className="space-y-4">
//                           <div className="flex justify-between items-center">
//                             <span className="text-2xl font-bold text-slate-800">{selectedProduct.price}</span>
//                             <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">In Stock</span>
//                           </div>
                          
//                           <Button className="w-full bg-black text-white rounded-xl hover:bg-accent py-3 text-lg">
//                             Add to Cart
//                           </Button>
                          
//                           <Button variant="outline" className="w-full border-accent text-accent rounded-xl hover:bg-accent/10 py-3">
//                             Add to Wishlist
//                           </Button>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Related Products Gallery */}
//                     <div>
//                       <h3 className="font-serif text-2xl font-bold text-slate-800 mb-6">
//                         Related Collection
//                       </h3>
//                       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//                         {getRelatedProducts().map((product) => (
//                           <motion.div
//                             key={product.id}
//                             whileHover={{ scale: 1.05 }}
//                             className="cursor-pointer group"
//                             onClick={() => {
//                               setSelectedProduct(product);
//                               setCurrentImageIndex(0);
//                             }}
//                           >
//                             <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 transition-all duration-300 group-hover:border-accent group-hover:shadow-md">
//                               <img
//                                 src={product.images[0]}
//                                 alt={product.title}
//                                 className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
//                               />
//                               <div className="p-3">
//                                 <h4 className="font-semibold text-sm text-slate-800 mb-1 group-hover:text-accent transition-colors duration-300">
//                                   {product.title}
//                                 </h4>
//                                 {/* <p className="text-xs text-slate-600">{product.price}</p> */}
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
// };

// export default MensCollection;







// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import menHero from "@/assets/men-hero.jpg";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   images: string[];
//   category: string;
//   sizes: string[];
//   colors: string[];
//   price?: string;
// }

// const categories = [
//   { name: "Formal Wear", count: 24, icon: "👔" },
//   { name: "Casual Wear", count: 36, icon: "👕" },
//   { name: "Traditional", count: 18, icon: "🧥" },
//   { name: "Party Wear", count: 42, icon: "🎉" },
// ];

// // Mock product data with multiple images
// const generateProductData = () => ({
//   formal: [...Array(8)].map((_, i) => ({
//     id: `formal-${i}`,
//     title: ["Premium Tailored Suit", "Executive Blazer", "Designer Tuxedo", "Business Formal"][i % 4],
//     description: "Elegant and sophisticated formal wear crafted with premium fabrics for the modern gentleman.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Formal Wear",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Charcoal", "Burgundy"],
//     price: "$299"
//   })),
//   casual: [...Array(8)].map((_, i) => ({
//     id: `casual-${i}`,
//     title: ["Casual Cotton Shirt", "Denim Collection", "Sports Wear", "Weekend Comfort"][i % 4],
//     description: "Comfortable and stylish casual wear perfect for everyday activities and relaxed occasions.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Casual Wear",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Blue", "White", "Gray", "Green"],
//     price: "$89"
//   })),
//   traditional: [...Array(4)].map((_, i) => ({
//     id: `traditional-${i}`,
//     title: ["Ethnic Kurta Set", "Traditional Sherwani", "Cultural Wear", "Festival Collection"][i % 4],
//     description: "Rich traditional attire that celebrates heritage with contemporary style and comfort.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Traditional",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Cream", "Maroon", "Royal Blue", "Black"],
//     price: "$159"
//   })),
//   party: [...Array(8)].map((_, i) => ({
//     id: `party-${i}`,
//     title: ["Night Out Fit", "Celebration Wear", "Designer Shirt", "Party Collection"][i % 4],
//     description: "Trendy and fashionable party wear that makes you stand out in every celebration.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Party Wear",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Black", "Navy", "Burgundy", "Emerald"],
//     price: "$129"
//   }))
// });

// const MensCollection: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState("Formal Wear");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "Formal Wear",
//       category: "Formal Wear",
//       gradient: "from-blue-50 to-cyan-50",
//       products: productData.formal,
//     },
//     {
//       title: "Casual Collection",
//       category: "Casual Wear",
//       gradient: "from-slate-50 to-gray-50",
//       products: productData.casual,
//     },
//     {
//       title: "Traditional Wear",
//       category: "Traditional",
//       gradient: "from-amber-50 to-orange-50",
//       products: productData.traditional,
//     },
//     {
//       title: "Party Wear",
//       category: "Party Wear",
//       gradient: "from-purple-50 to-violet-50",
//       products: productData.party,
//     },
//   ];

//   const openModal = (product: Product) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === selectedProduct.images.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === 0 ? selectedProduct.images.length - 1 : prev - 1
//       );
//     }
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
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//             <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
//               PREMIUM COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-accent to-slate-800 bg-clip-text text-transparent">
//             Men's Fashion Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-yellow-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover sophisticated fashion for the modern gentleman — where elegance meets contemporary 
//             style in every detail and every occasion.
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
//                     ? "bg-gradient-to-r from-accent to-accent/90 text-white border-accent shadow-2xl shadow-accent/25 scale-105"
//                     : "border-slate-200 bg-white/80 hover:border-accent/50 hover:shadow-xl text-slate-700"
//                 }`}
//                 variant="outline"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-accent to-accent/90 transition-all duration-500 ${
//                   hoveredCategory === cat.name && activeCategory !== cat.name 
//                     ? "opacity-5" 
//                     : "opacity-0"
//                 }`}></div>
                
//                 <span className="text-lg mr-2">{cat.icon}</span>
//                 {cat.name}
//                 <span className="text-slate-500 text-sm ml-2">({cat.count})</span>
                
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
//                 className="mb-20"
//               >
//                 <div className="flex items-center justify-between mb-10">
//                   <div className="flex items-center gap-4">
//                     <div className="w-2 h-12 bg-gradient-to-b from-accent to-accent/70 rounded-full"></div>
//                     <div>
//                       <h2 className="font-serif text-4xl font-bold text-slate-800">
//                         {section.title}
//                       </h2>
//                       <p className="text-slate-600 mt-1">
//                         {section.products.length} premium items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-black border border-slate-200 hover:border-accent hover:bg-black rounded-xl px-6 py-2 transition-all duration-300">
//                     <span className="mr-2 text-white">Explore All</span>
//                     <motion.span
//                       initial={{ x: 0 }}
//                       whileHover={{ x: 3 }}
//                       transition={{ type: "spring", stiffness: 400 }}
//                       className="text-white"
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
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
//                           {/* Price Tag */}
//                           <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
//                             {product.price}
//                           </div>
//                         </div>
                        
//                         <div className="p-6">
//                           <h3 className="font-semibold text-lg text-slate-800 mb-2 group-hover:text-accent transition-colors duration-300">
//                             {product.title}
//                           </h3>
//                           <p className="text-sm text-slate-500 mb-3">{product.category}</p>
                          
//                           {/* Color Options */}
//                           <div className="flex gap-2 mb-4">
//                             {product.colors.map((color, index) => (
//                               <div
//                                 key={index}
//                                 className="w-4 h-4 rounded-full border border-slate-300"
//                                 style={{ 
//                                   backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : 
//                                     color.toLowerCase() === 'black' ? '#000000' :
//                                     color.toLowerCase() === 'navy' ? '#001f3f' :
//                                     color.toLowerCase() === 'blue' ? '#0074D9' :
//                                     color.toLowerCase() === 'red' ? '#FF4136' :
//                                     color.toLowerCase() === 'green' ? '#2ECC40' :
//                                     color.toLowerCase() === 'gray' ? '#AAAAAA' :
//                                     color.toLowerCase() === 'charcoal' ? '#36454F' :
//                                     color.toLowerCase() === 'burgundy' ? '#800020' :
//                                     color.toLowerCase() === 'cream' ? '#FFFDD0' :
//                                     color.toLowerCase() === 'maroon' ? '#800000' :
//                                     color.toLowerCase() === 'royal blue' ? '#4169E1' :
//                                     color.toLowerCase() === 'emerald' ? '#50C878' : '#f0f0f0'
//                                 }}
//                                 title={color}
//                               />
//                             ))}
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
//                                 ? "border-accent shadow-md"
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
//                         <h3 className="font-serif text-xl font-bold text-slate-800 mb-4">
//                           Product Details
//                         </h3>
//                         <p className="text-slate-600 leading-relaxed mb-4">
//                           {selectedProduct.description}
//                         </p>
                        
//                         <div className="space-y-3">
//                           <div>
//                             <h4 className="font-semibold text-slate-800 mb-2">Available Sizes</h4>
//                             <div className="flex gap-2">
//                               {selectedProduct.sizes.map((size) => (
//                                 <span key={size} className="px-3 py-1 border border-slate-300 rounded-lg text-sm">
//                                   {size}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
                          
//                           <div>
//                             <h4 className="font-semibold text-slate-800 mb-2">Color Options</h4>
//                             <div className="flex gap-2">
//                               {selectedProduct.colors.map((color) => (
//                                 <span key={color} className="px-3 py-1 border border-slate-300 rounded-lg text-sm">
//                                   {color}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="bg-slate-50 rounded-2xl p-6">
//                         <h3 className="font-serif text-xl font-bold text-slate-800 mb-4">
//                           Pricing & Options
//                         </h3>
//                         <div className="space-y-4">
//                           <div className="flex justify-between items-center">
//                             <span className="text-2xl font-bold text-slate-800">{selectedProduct.price}</span>
//                             <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">In Stock</span>
//                           </div>
                          
//                           <Button className="w-full bg-black text-white rounded-xl hover:bg-accent py-3 text-lg">
//                             Add to Cart
//                           </Button>
                          
//                           <Button variant="outline" className="w-full border-accent text-accent rounded-xl hover:bg-accent/10 py-3">
//                             Add to Wishlist
//                           </Button>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Related Products Gallery */}
//                     <div>
//                       <h3 className="font-serif text-2xl font-bold text-slate-800 mb-6">
//                         Related Collection
//                       </h3>
//                       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//                         {getRelatedProducts().map((product) => (
//                           <motion.div
//                             key={product.id}
//                             whileHover={{ scale: 1.05 }}
//                             className="cursor-pointer group"
//                             onClick={() => {
//                               setSelectedProduct(product);
//                               setCurrentImageIndex(0);
//                             }}
//                           >
//                             <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 transition-all duration-300 group-hover:border-accent group-hover:shadow-md">
//                               <img
//                                 src={product.images[0]}
//                                 alt={product.title}
//                                 className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
//                               />
//                               <div className="p-3">
//                                 <h4 className="font-semibold text-sm text-slate-800 mb-1 group-hover:text-accent transition-colors duration-300">
//                                   {product.title}
//                                 </h4>
//                                 <p className="text-xs text-slate-600">{product.price}</p>
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
// };

// export default MensCollection;






// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import menHero from "@/assets/men-hero.jpg";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   images: string[];
//   category: string;
//   sizes: string[];
//   colors: string[];
//   price?: string;
// }

// const categories = [
//   { name: "Formal Wear", count: 24, icon: "👔" },
//   { name: "Casual Wear", count: 36, icon: "👕" },
//   { name: "Traditional", count: 18, icon: "🧥" },
// ];

// // Mock product data with multiple images
// const generateProductData = () => ({
//   formal: [...Array(8)].map((_, i) => ({
//     id: `formal-${i}`,
//     title: ["Premium Tailored Suit", "Executive Blazer", "Designer Tuxedo", "Business Formal"][i % 4],
//     description: "Elegant and sophisticated formal wear crafted with premium fabrics for the modern gentleman.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Formal Wear",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Charcoal", "Burgundy"],
//   })),
//   casual: [...Array(8)].map((_, i) => ({
//     id: `casual-${i}`,
//     title: ["Casual Cotton Shirt", "Denim Collection", "Sports Wear", "Weekend Comfort"][i % 4],
//     description: "Comfortable and stylish casual wear perfect for everyday activities and relaxed occasions.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Casual Wear",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Blue", "White", "Gray", "Green"],
//   })),
//   traditional: [...Array(4)].map((_, i) => ({
//     id: `traditional-${i}`,
//     title: ["Ethnic Kurta Set", "Traditional Sherwani", "Cultural Wear", "Festival Collection"][i % 4],
//     description: "Rich traditional attire that celebrates heritage with contemporary style and comfort.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Traditional",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Cream", "Maroon", "Royal Blue", "Black"],
//   })),
// });

// const MensCollection: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState("Formal Wear");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "Formal Wear",
//       category: "Formal Wear",
//       gradient: "from-blue-50 to-cyan-50",
//       products: productData.formal,
//     },
//     {
//       title: "Casual Collection",
//       category: "Casual Wear",
//       gradient: "from-slate-50 to-gray-50",
//       products: productData.casual,
//     },
//     {
//       title: "Traditional Wear",
//       category: "Traditional",
//       gradient: "from-amber-50 to-orange-50",
//       products: productData.traditional,
//     },
//   ];

//   const openModal = (product: Product) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === selectedProduct.images.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === 0 ? selectedProduct.images.length - 1 : prev - 1
//       );
//     }
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
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//             <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
//               PREMIUM COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-accent to-slate-800 bg-clip-text text-transparent">
//             Men's Fashion Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-yellow-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover sophisticated fashion for the modern gentleman — where elegance meets contemporary 
//             style in every detail and every occasion.
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
//                     ? "bg-gradient-to-r from-accent to-accent/90 text-white border-accent shadow-2xl shadow-accent/25 scale-105"
//                     : "border-slate-200 bg-white/80 hover:border-accent/50 hover:shadow-xl text-slate-700"
//                 }`}
//                 variant="outline"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-accent to-accent/90 transition-all duration-500 ${
//                   hoveredCategory === cat.name && activeCategory !== cat.name 
//                     ? "opacity-5" 
//                     : "opacity-0"
//                 }`}></div>
                
//                 <span className="text-lg mr-2">{cat.icon}</span>
//                 {cat.name}
//                 <span className="text-slate-500 text-sm ml-2">({cat.count})</span>
                
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
//                 className="mb-20"
//               >
//                 <div className="flex items-center justify-between mb-10">
//                   <div className="flex items-center gap-4">
//                     <div className="w-2 h-12 bg-gradient-to-b from-accent to-accent/70 rounded-full"></div>
//                     <div>
//                       <h2 className="font-serif text-4xl font-bold text-slate-800">
//                         {section.title}
//                       </h2>
//                       <p className="text-slate-600 mt-1">
//                         {section.products.length} premium items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-black border border-slate-200 hover:border-accent hover:bg-black rounded-xl px-6 py-2 transition-all duration-300">
//                     <span className="mr-2 text-white">Explore All</span>
//                     <motion.span
//                       initial={{ x: 0 }}
//                       whileHover={{ x: 3 }}
//                       transition={{ type: "spring", stiffness: 400 }}
//                       className="text-white"
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
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                         </div>
                        
//                         <div className="p-6">
//                           <h3 className="font-semibold text-lg text-slate-800 mb-2 group-hover:text-accent transition-colors duration-300">
//                             {product.title}
//                           </h3>
//                           <p className="text-sm text-slate-500 mb-3">{product.category}</p>
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
//                                 ? "border-accent shadow-md"
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
//                         <h3 className="font-serif text-xl font-bold text-slate-800 mb-4">
//                           Product Details
//                         </h3>
//                         <p className="text-slate-600 leading-relaxed mb-4">
//                           {selectedProduct.description}
//                         </p>
                        
//                         <div className="space-y-3">
//                           <div>
//                             <h4 className="font-semibold text-slate-800 mb-2">Available Sizes</h4>
//                             <div className="flex gap-2">
//                               {selectedProduct.sizes.map((size) => (
//                                 <span key={size} className="px-3 py-1 border border-slate-300 rounded-lg text-sm">
//                                   {size}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="bg-slate-50 rounded-2xl p-6">
//                         <h3 className="font-serif text-xl font-bold text-slate-800 mb-4">
//                           Options
//                         </h3>
//                         <div className="space-y-4">
//                           <div className="flex justify-between items-center">
//                             <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">In Stock</span>
//                           </div>
                          
//                           <Button className="w-full bg-black text-white rounded-xl hover:bg-accent py-3 text-lg">
//                             Add to Cart
//                           </Button>
                          
//                           <Button variant="outline" className="w-full border-accent text-accent rounded-xl hover:bg-accent/10 py-3">
//                             Add to Wishlist
//                           </Button>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Related Products Gallery */}
//                     <div>
//                       <h3 className="font-serif text-2xl font-bold text-slate-800 mb-6">
//                         Related Collection
//                       </h3>
//                       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//                         {getRelatedProducts().map((product) => (
//                           <motion.div
//                             key={product.id}
//                             whileHover={{ scale: 1.05 }}
//                             className="cursor-pointer group"
//                             onClick={() => {
//                               setSelectedProduct(product);
//                               setCurrentImageIndex(0);
//                             }}
//                           >
//                             <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 transition-all duration-300 group-hover:border-accent group-hover:shadow-md">
//                               <img
//                                 src={product.images[0]}
//                                 alt={product.title}
//                                 className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
//                               />
//                               <div className="p-3">
//                                 <h4 className="font-semibold text-sm text-slate-800 mb-1 group-hover:text-accent transition-colors duration-300">
//                                   {product.title}
//                                 </h4>
//                                 <p className="text-xs text-slate-600">{product.category}</p>
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
// };

// export default MensCollection;









// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import menHero from "@/assets/men-hero.jpg";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   images: string[];
//   category: string;
//   sizes: string[];
//   colors: string[];
//   price?: string;
// }

// const categories = [
//   { name: "Formal Wear",  icon: "👔" },
//   { name: "Casual Wear",  icon: "👕" },
//   { name: "Traditional",  icon: "🧥" },
//   { name: "Party Wear",  icon: "🎉" },
// ];

// // Mock product data with multiple images
// const generateProductData = () => ({
//   formal: [...Array(8)].map((_, i) => ({
//     id: `formal-${i}`,
//     title: ["Premium Tailored Suit", "Executive Blazer", "Designer Tuxedo", "Business Formal"][i % 4],
//     description: "Elegant and sophisticated formal wear crafted with premium fabrics for the modern gentleman.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Formal Wear",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Charcoal", "Burgundy"],
//   })),
//   casual: [...Array(8)].map((_, i) => ({
//     id: `casual-${i}`,
//     title: ["Casual Cotton Shirt", "Denim Collection", "Sports Wear", "Weekend Comfort"][i % 4],
//     description: "Comfortable and stylish casual wear perfect for everyday activities and relaxed occasions.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Casual Wear",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Blue", "White", "Gray", "Green"],
//   })),
//   traditional: [...Array(4)].map((_, i) => ({
//     id: `traditional-${i}`,
//     title: ["Ethnic Kurta Set", "Traditional Sherwani", "Cultural Wear", "Festival Collection"][i % 4],
//     description: "Rich traditional attire that celebrates heritage with contemporary style and comfort.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Traditional",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Cream", "Maroon", "Royal Blue", "Black"],
//   })),
//   party: [...Array(8)].map((_, i) => ({
//     id: `party-${i}`,
//     title: ["Night Out Fit", "Celebration Wear", "Designer Shirt", "Party Collection"][i % 4],
//     description: "Trendy and fashionable party wear that makes you stand out in every celebration.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Party Wear",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Black", "Navy", "Burgundy", "Emerald"],
//   }))
// });

// const MensCollection: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState("Formal Wear");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "Formal Wear",
//       category: "Formal Wear",
//       gradient: "from-blue-50 to-cyan-50",
//       products: productData.formal,
//     },
//     {
//       title: "Casual Collection",
//       category: "Casual Wear",
//       gradient: "from-slate-50 to-gray-50",
//       products: productData.casual,
//     },
//     {
//       title: "Traditional Wear",
//       category: "Traditional",
//       gradient: "from-amber-50 to-orange-50",
//       products: productData.traditional,
//     },
//     {
//       title: "Party Wear",
//       category: "Party Wear",
//       gradient: "from-purple-50 to-violet-50",
//       products: productData.party,
//     },
//   ];

//   const openModal = (product: Product) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === selectedProduct.images.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === 0 ? selectedProduct.images.length - 1 : prev - 1
//       );
//     }
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
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//             <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
//               PREMIUM COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-accent to-slate-800 bg-clip-text text-transparent">
//             Men's Fashion Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-yellow-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover sophisticated fashion for the modern gentleman — where elegance meets contemporary 
//             style in every detail and every occasion.
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
//                     ? "bg-gradient-to-r from-accent to-accent/90 text-white border-accent shadow-2xl shadow-accent/25 scale-105"
//                     : "border-slate-200 bg-white/80 hover:border-accent/50 hover:shadow-xl text-slate-700"
//                 }`}
//                 variant="outline"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-accent to-accent/90 transition-all duration-500 ${
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
//                 className="mb-20"
//               >
//                 <div className="flex items-center justify-between mb-10">
//                   <div className="flex items-center gap-4">
//                     <div className="w-2 h-12 bg-gradient-to-b from-accent to-accent/70 rounded-full"></div>
//                     <div>
//                       <h2 className="font-serif text-4xl font-bold text-slate-800">
//                         {section.title}
//                       </h2>
//                       <p className="text-slate-600 mt-1">
//                         {section.products.length} premium items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-black border border-slate-200 hover:border-accent hover:bg-black rounded-xl px-6 py-2 transition-all duration-300">
//                     <span className="mr-2 text-white">Explore All</span>
//                     <motion.span
//                       initial={{ x: 0 }}
//                       whileHover={{ x: 3 }}
//                       transition={{ type: "spring", stiffness: 400 }}
//                       className="text-white"
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
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                         </div>
                        
//                         <div className="p-6">
//                           <h3 className="font-semibold text-lg text-slate-800 mb-2 group-hover:text-accent transition-colors duration-300">
//                             {product.title}
//                           </h3>
//                           <p className="text-sm text-slate-500 mb-3">{product.category}</p>
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
//                                 ? "border-accent shadow-md"
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
//                         <h3 className="font-serif text-xl font-bold text-slate-800 mb-4">
//                           Product Details
//                         </h3>
//                         <p className="text-slate-600 leading-relaxed mb-4">
//                           {selectedProduct.description}
//                         </p>
                        
//                         <div className="space-y-3">
//                           <div>
//                             <h4 className="font-semibold text-slate-800 mb-2">Available Sizes</h4>
//                             <div className="flex gap-2">
//                               {selectedProduct.sizes.map((size) => (
//                                 <span key={size} className="px-3 py-1 border border-slate-300 rounded-lg text-sm">
//                                   {size}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="bg-slate-50 rounded-2xl p-6">
//                         <h3 className="font-serif text-xl font-bold text-slate-800 mb-4">
//                           Options
//                         </h3>
//                         <div className="space-y-4">
//                           <div className="flex justify-between items-center">
//                             <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">In Stock</span>
//                           </div>
                          
//                           <Button className="w-full bg-black text-white rounded-xl hover:bg-accent py-3 text-lg">
//                             Add to Cart
//                           </Button>
                          
//                           <Button variant="outline" className="w-full border-accent text-accent rounded-xl hover:bg-accent/10 py-3">
//                             Add to Wishlist
//                           </Button>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Related Products Gallery */}
//                     <div>
//                       <h3 className="font-serif text-2xl font-bold text-slate-800 mb-6">
//                         Related Collection
//                       </h3>
//                       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//                         {getRelatedProducts().map((product) => (
//                           <motion.div
//                             key={product.id}
//                             whileHover={{ scale: 1.05 }}
//                             className="cursor-pointer group"
//                             onClick={() => {
//                               setSelectedProduct(product);
//                               setCurrentImageIndex(0);
//                             }}
//                           >
//                             <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 transition-all duration-300 group-hover:border-accent group-hover:shadow-md">
//                               <img
//                                 src={product.images[0]}
//                                 alt={product.title}
//                                 className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
//                               />
//                               <div className="p-3">
//                                 <h4 className="font-semibold text-sm text-slate-800 mb-1 group-hover:text-accent transition-colors duration-300">
//                                   {product.title}
//                                 </h4>
//                                 <p className="text-xs text-slate-600">{product.category}</p>
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
// };

// export default MensCollection;







// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import menHero from "@/assets/men-hero.jpg";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   images: string[];
//   category: string;
//   sizes: string[];
//   colors: string[];
//   price?: string;
// }

// const categories = [
  
//   { name: "Sherwani",  icon: "👑" },
//   { name: "Coat Pant",  icon: "🎩" },
//   { name: "Indo Western",  icon: "🌏" },
//   { name: "Kurta Pajama",  icon: "🧵" },
//   { name: "Blazer",  icon: "💼" },
//   { name: "Jeans & T-Shirts",  icon: "👖" },
//   { name: "Unstitched Collection",  icon: "✂️" },
//   { name: "Winter Collection",  icon: "❄️" },
// ];

// // Mock product data with multiple images
// const generateProductData = () => ({
//   formal: [...Array(8)].map((_, i) => ({
//     id: `formal-${i}`,
//     title: ["Premium Tailored Suit", "Executive Blazer", "Designer Tuxedo", "Business Formal"][i % 4],
//     description: "Elegant and sophisticated formal wear crafted with premium fabrics for the modern gentleman.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Formal Wear",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Charcoal", "Burgundy"],
//   })),
//   casual: [...Array(8)].map((_, i) => ({
//     id: `casual-${i}`,
//     title: ["Casual Cotton Shirt", "Denim Collection", "Sports Wear", "Weekend Comfort"][i % 4],
//     description: "Comfortable and stylish casual wear perfect for everyday activities and relaxed occasions.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Casual Wear",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Blue", "White", "Gray", "Green"],
//   })),
//   traditional: [...Array(4)].map((_, i) => ({
//     id: `traditional-${i}`,
//     title: ["Ethnic Kurta Set", "Traditional Sherwani", "Cultural Wear", "Festival Collection"][i % 4],
//     description: "Rich traditional attire that celebrates heritage with contemporary style and comfort.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Traditional",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Cream", "Maroon", "Royal Blue", "Black"],
//   })),
//   party: [...Array(8)].map((_, i) => ({
//     id: `party-${i}`,
//     title: ["Night Out Fit", "Celebration Wear", "Designer Shirt", "Party Collection"][i % 4],
//     description: "Trendy and fashionable party wear that makes you stand out in every celebration.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Party Wear",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Black", "Navy", "Burgundy", "Emerald"],
//   })),
//   sherwani: [...Array(6)].map((_, i) => ({
//     id: `sherwani-${i}`,
//     title: ["Royal Wedding Sherwani", "Embroidered Sherwani", "Designer Sherwani", "Premium Sherwani"][i % 4],
//     description: "Exquisite sherwanis with intricate embroidery and premium fabrics for special occasions.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Sherwani",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Ivory", "Gold", "Maroon", "Navy"],
//   })),
//   coatPant: [...Array(6)].map((_, i) => ({
//     id: `coat-pant-${i}`,
//     title: ["Premium Coat Pant", "Designer Suit", "Executive Set", "Formal Coat Pant"][i % 4],
//     description: "Perfectly tailored coat pant sets for formal occasions and professional settings.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Coat Pant",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Black", "Navy", "Gray", "Brown"],
//   })),
//   indoWestern: [...Array(6)].map((_, i) => ({
//     id: `indo-western-${i}`,
//     title: ["Fusion Wear", "Modern Ethnic", "Contemporary Traditional", "Indo-Western Set"][i % 4],
//     description: "Beautiful fusion of traditional Indian and contemporary western fashion elements.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Indo Western",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Beige", "Burgundy", "Emerald", "Mustard"],
//   })),
//   kurtaPajama: [...Array(8)].map((_, i) => ({
//     id: `kurta-pajama-${i}`,
//     title: ["Cotton Kurta Set", "Silk Kurta", "Designer Kurta", "Festive Kurta"][i % 4],
//     description: "Comfortable and stylish kurta pajama sets perfect for traditional and festive occasions.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Kurta Pajama",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["White", "Blue", "Black", "Red"],
//   })),
//   blazer: [...Array(6)].map((_, i) => ({
//     id: `blazer-${i}`,
//     title: ["Single Breasted Blazer", "Double Breasted Blazer", "Designer Blazer", "Casual Blazer"][i % 4],
//     description: "Stylish blazers that add sophistication to any outfit, perfect for various occasions.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Blazer",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Gray", "Burgundy"],
//   })),
//   jeansTshirts: [...Array(8)].map((_, i) => ({
//     id: `jeans-tshirts-${i}`,
//     title: ["Denim Jeans", "Cotton T-Shirts", "Casual Combo", "Street Wear"][i % 4],
//     description: "Comfortable jeans and trendy t-shirts for everyday casual wear and outings.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Jeans & T-Shirts",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Blue", "Black", "Gray", "White"],
//   })),
//   unstitched: [...Array(6)].map((_, i) => ({
//     id: `unstitched-${i}`,
//     title: ["Premium Fabric", "Designer Material", "Custom Tailoring", "Luxury Textile"][i % 4],
//     description: "High-quality unstitched fabrics for custom tailoring and personalized outfits.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Unstitched Collection",
//     sizes: ["2.5m", "3m", "3.5m", "4m"],
//     colors: ["Multiple", "Assorted", "Designer Prints"],
//   })),
//   winter: [...Array(8)].map((_, i) => ({
//     id: `winter-${i}`,
//     title: ["Winter Jackets", "Woolen Sweaters", "Thermal Wear", "Winter Collection"][i % 4],
//     description: "Warm and stylish winter clothing to keep you comfortable in cold weather.",
//     images: [menHero, menHero, menHero, menHero],
//     category: "Winter Collection",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Gray", "Burgundy"],
//   }))
// });

// const MensCollection: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState("Formal Wear");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "Formal Wear",
//       category: "Formal Wear",
//       gradient: "from-blue-50 to-cyan-50",
//       products: productData.formal,
//     },
//     {
//       title: "Casual Collection",
//       category: "Casual Wear",
//       gradient: "from-slate-50 to-gray-50",
//       products: productData.casual,
//     },
//     {
//       title: "Traditional Wear",
//       category: "Traditional",
//       gradient: "from-amber-50 to-orange-50",
//       products: productData.traditional,
//     },
//     {
//       title: "Party Wear",
//       category: "Party Wear",
//       gradient: "from-purple-50 to-violet-50",
//       products: productData.party,
//     },
//     {
//       title: "Sherwani Collection",
//       category: "Sherwani",
//       gradient: "from-red-50 to-pink-50",
//       products: productData.sherwani,
//     },
//     {
//       title: "Coat Pant Sets",
//       category: "Coat Pant",
//       gradient: "from-indigo-50 to-blue-50",
//       products: productData.coatPant,
//     },
//     {
//       title: "Indo Western Fusion",
//       category: "Indo Western",
//       gradient: "from-green-50 to-teal-50",
//       products: productData.indoWestern,
//     },
//     {
//       title: "Kurta Pajama",
//       category: "Kurta Pajama",
//       gradient: "from-yellow-50 to-orange-50",
//       products: productData.kurtaPajama,
//     },
//     {
//       title: "Blazer Collection",
//       category: "Blazer",
//       gradient: "from-gray-50 to-slate-50",
//       products: productData.blazer,
//     },
//     {
//       title: "Jeans & T-Shirts",
//       category: "Jeans & T-Shirts",
//       gradient: "from-blue-50 to-indigo-50",
//       products: productData.jeansTshirts,
//     },
//     {
//       title: "Unstitched Collection",
//       category: "Unstitched Collection",
//       gradient: "from-purple-50 to-pink-50",
//       products: productData.unstitched,
//     },
//     {
//       title: "Winter Collection",
//       category: "Winter Collection",
//       gradient: "from-cyan-50 to-blue-50",
//       products: productData.winter,
//     },
//   ];

//   const openModal = (product: Product) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === selectedProduct.images.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === 0 ? selectedProduct.images.length - 1 : prev - 1
//       );
//     }
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
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//             <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
//               PREMIUM COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-accent to-slate-800 bg-clip-text text-transparent">
//             Men's Fashion Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-yellow-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover sophisticated fashion for the modern gentleman — where elegance meets contemporary 
//             style in every detail and every occasion.
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
//                 className={`relative px-6 py-3 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
//                   activeCategory === cat.name
//                     ? "bg-gradient-to-r from-accent to-accent/90 text-white border-accent shadow-2xl shadow-accent/25 scale-105"
//                     : "border-slate-200 bg-white/80 hover:border-accent/50 hover:shadow-xl text-slate-700"
//                 }`}
//                 variant="outline"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-accent to-accent/90 transition-all duration-500 ${
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
//                 className="mb-20"
//               >
//                 <div className="flex items-center justify-between mb-10">
//                   <div className="flex items-center gap-4">
//                     <div className="w-2 h-12 bg-gradient-to-b from-accent to-accent/70 rounded-full"></div>
//                     <div>
//                       <h2 className="font-serif text-4xl font-bold text-slate-800">
//                         {section.title}
//                       </h2>
//                       <p className="text-slate-600 mt-1">
//                         {section.products.length} premium items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-black border border-slate-200 hover:border-accent hover:bg-black rounded-xl px-6 py-2 transition-all duration-300">
//                     <span className="mr-2 text-white">Explore All</span>
//                     <motion.span
//                       initial={{ x: 0 }}
//                       whileHover={{ x: 3 }}
//                       transition={{ type: "spring", stiffness: 400 }}
//                       className="text-white"
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
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                         </div>
                        
//                         <div className="p-6">
//                           <h3 className="font-semibold text-lg text-slate-800 mb-2 group-hover:text-accent transition-colors duration-300">
//                             {product.title}
//                           </h3>
//                           <p className="text-sm text-slate-500 mb-3">{product.category}</p>
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
//                                 ? "border-accent shadow-md"
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
//                         <h3 className="font-serif text-xl font-bold text-slate-800 mb-4">
//                           Product Details
//                         </h3>
//                         <p className="text-slate-600 leading-relaxed mb-4">
//                           {selectedProduct.description}
//                         </p>
                        
//                         <div className="space-y-3">
//                           <div>
//                             <h4 className="font-semibold text-slate-800 mb-2">Available Sizes</h4>
//                             <div className="flex gap-2">
//                               {selectedProduct.sizes.map((size) => (
//                                 <span key={size} className="px-3 py-1 border border-slate-300 rounded-lg text-sm">
//                                   {size}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="bg-slate-50 rounded-2xl p-6">
//                         <h3 className="font-serif text-xl font-bold text-slate-800 mb-4">
//                           Options
//                         </h3>
//                         <div className="space-y-4">
//                           <div className="flex justify-between items-center">
//                             <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">In Stock</span>
//                           </div>
                          
//                           <Button className="w-full bg-black text-white rounded-xl hover:bg-accent py-3 text-lg">
//                             Add to Cart
//                           </Button>
                          
//                           <Button variant="outline" className="w-full border-accent text-accent rounded-xl hover:bg-accent/10 py-3">
//                             Add to Wishlist
//                           </Button>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Related Products Gallery */}
//                     <div>
//                       <h3 className="font-serif text-2xl font-bold text-slate-800 mb-6">
//                         Related Collection
//                       </h3>
//                       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//                         {getRelatedProducts().map((product) => (
//                           <motion.div
//                             key={product.id}
//                             whileHover={{ scale: 1.05 }}
//                             className="cursor-pointer group"
//                             onClick={() => {
//                               setSelectedProduct(product);
//                               setCurrentImageIndex(0);
//                             }}
//                           >
//                             <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 transition-all duration-300 group-hover:border-accent group-hover:shadow-md">
//                               <img
//                                 src={product.images[0]}
//                                 alt={product.title}
//                                 className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
//                               />
//                               <div className="p-3">
//                                 <h4 className="font-semibold text-sm text-slate-800 mb-1 group-hover:text-accent transition-colors duration-300">
//                                   {product.title}
//                                 </h4>
//                                 <p className="text-xs text-slate-600">{product.category}</p>
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
// };

// export default MensCollection;







// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Import all your actual men's collection images
// import menHero from "@/assets/men-hero.jpg";

// // Sherwani Collection
// import sherwani1 from "@/assets/Men/shirt1.jpeg";
// import sherwani2 from "@/assets/Men/shirt2.jpeg";
// import sherwani3 from "@/assets/Men/shirt3.jpeg";
// import sherwani4 from "@/assets/Men/shirt4.jpeg";
// import sherwani5 from "@/assets/Men/shirt5.jpeg";
// import sherwani6 from "@/assets/Men/shirt6.jpeg";
// import sherwani7 from "@/assets/Men/shirt7.jpeg";
// import sherwani8 from "@/assets/Men/shirt8.jpeg";

// // Coat Pant Collection
// import coatPant1 from "@/assets/Men/shirt9.jpeg";
// import coatPant2 from "@/assets/Men/shirt10.jpeg";
// import coatPant3 from "@/assets/Men/shirt11.jpeg";
// import coatPant4 from "@/assets/Men/shirt12.jpeg";
// import coatPant5 from "@/assets/Men/shirt13.jpeg";
// import coatPant6 from "@/assets/Men/shirt15.jpeg";
// import coatPant7 from "@/assets/Men/shirt10.jpeg";
// import coatPant8 from "@/assets/Men/shirt12.jpeg";

// // Indo Western Collection
// import indoWestern1 from "@/assets/Men/groomcap1.jpeg";
// import indoWestern2 from "@/assets/Men/groomcap2.jpeg";
// import indoWestern3 from "@/assets/Men/groomcap3.jpeg";
// import indoWestern4 from "@/assets/Men/groomcap3.jpeg";
// import indoWestern5 from "@/assets/Men/groomcap5.jpeg";
// import indoWestern6 from "@/assets/Men/groomcap6.jpeg";
// import indoWestern7 from "@/assets/Men/groomcap7.jpeg";
// import indoWestern8 from "@/assets/Men/groomcap8.jpeg";

// // Kurta Pajama Collection
// import kurtaPajama1 from "@/assets/Men/Kurtapajama1.jpeg";
// import kurtaPajama2 from "@/assets/Men/Kurtapajama3.jpeg";
// import kurtaPajama3 from "@/assets/Men/Kurtapajama4.jpeg";
// import kurtaPajama4 from "@/assets/Men/Kurtapajama5.jpeg";
// import kurtaPajama5 from "@/assets/Men/Kurtapajama6.jpeg";
// import kurtaPajama6 from "@/assets/Men/Kurtapajama7.jpeg";
// import kurtaPajama7 from "@/assets/Men/Kurtapajama8.jpeg";
// import kurtaPajama8 from "@/assets/Men/Kurtapajama9.jpeg";

// // Blazer Collection
// import blazer1 from "@/assets/Men/Suit1.jpeg";
// import blazer2 from "@/assets/Men/Suits3.jpeg";
// import blazer3 from "@/assets/Men/Suits4.jpeg";
// import blazer4 from "@/assets/Men/Suits5.jpeg";
// import blazer5 from "@/assets/Men/Suits6.jpeg";
// import blazer6 from "@/assets/Men/Suits7.jpeg";
// import blazer7 from "@/assets/Men/Suits7.jpeg";
// import blazer8 from "@/assets/Men/Suits9.jpeg";

// // Jeans & T-Shirts Collection
// import jeansTshirt1 from "@/assets/Men/shirt1.jpeg";
// import jeansTshirt2 from "@/assets/Men/shirt2.jpeg";
// import jeansTshirt3 from "@/assets/Men/shirt3.jpeg";
// import jeansTshirt4 from "@/assets/Men/shirt4.jpeg";
// import jeansTshirt5 from "@/assets/Men/shirt5.jpeg";
// import jeansTshirt6 from "@/assets/Men/shirt6.jpeg";
// import jeansTshirt7 from "@/assets/Men/shirt7.jpeg";
// import jeansTshirt8 from "@/assets/Men/shirt8.jpeg";

// // Unstitched Collection
// import unstitched1 from "@/assets/Men/unstichedclothes1.jpeg";
// import unstitched2 from "@/assets/Men/unstichedclothes1.jpeg";
// import unstitched3 from "@/assets/Men/unstichedclothes3.jpeg";
// import unstitched4 from "@/assets/Men/unstichedclothes4.jpeg";
// import unstitched5 from "@/assets/Men/unstichedclothes5.jpeg";
// import unstitched6 from "@/assets/Men/unstichedclothes6.jpeg";
// import unstitched7 from "@/assets/Men/unstichedclothes7.jpeg";
// import unstitched8 from "@/assets/Men/unstichedclothes8.jpeg";

// // Winter Collection
// import winter1 from "@/assets/Men/Suit1.jpeg";
// import winter2 from "@/assets/Men/Suits3.jpeg";
// import winter3 from "@/assets/Men/Suits4.jpeg";
// import winter4 from "@/assets/Men/Suits5.jpeg";
// import winter5 from "@/assets/Men/Suits5.jpeg";
// import winter6 from "@/assets/Men/Suits6.jpeg";
// import winter7 from "@/assets/Men/Suits7.jpeg";
// import winter8 from "@/assets/Men/Suits8.jpeg";

// // For categories that might not have specific images yet, use available ones as placeholders
// const formalImages = [coatPant1, coatPant2, coatPant3, coatPant4, coatPant5, coatPant6, coatPant7, coatPant8];
// const casualImages = [jeansTshirt1, jeansTshirt2, jeansTshirt3, jeansTshirt4, jeansTshirt5, jeansTshirt6, jeansTshirt7, jeansTshirt8];
// const traditionalImages = [sherwani1, sherwani2, sherwani3, sherwani4, sherwani5, sherwani6, sherwani7, sherwani8];
// const partyImages = [blazer1, blazer2, blazer3, blazer4, blazer5, blazer6, blazer7, blazer8];

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   images: string[];
//   category: string;
//   sizes: string[];
//   colors: string[];
//   price?: string;
// }

// const categories = [
//   { name: "Sherwani", icon: "👑" },
//   { name: "Coat Pant", icon: "🎩" },
//   { name: "Indo Western", icon: "🌏" },
//   { name: "Kurta Pajama", icon: "🧵" },
//   { name: "Blazer", icon: "💼" },
//   { name: "Jeans & T-Shirts", icon: "👖" },
//   { name: "Unstitched Collection", icon: "✂️" },
//   { name: "Winter Collection", icon: "❄️" },
// ];

// // Mock product data with unique images for each product
// const generateProductData = () => ({
//   sherwani: [...Array(8)].map((_, i) => ({
//     id: `sherwani-${i}`,
//     title: [
//       "Royal Wedding Sherwani",
//       "Embroidered Sherwani",
//       "Designer Sherwani",
//       "Premium Sherwani",
//       "Silk Sherwani",
//       "Zari Work Sherwani",
//       "Traditional Sherwani",
//       "Contemporary Sherwani"
//     ][i],
//     description: "Exquisite sherwanis with intricate embroidery and premium fabrics for special occasions.",
//     images: [
//       [sherwani1, sherwani2, sherwani3, sherwani4],
//       [sherwani2, sherwani3, sherwani4, sherwani5],
//       [sherwani3, sherwani4, sherwani5, sherwani6],
//       [sherwani4, sherwani5, sherwani6, sherwani7],
//       [sherwani5, sherwani6, sherwani7, sherwani8],
//       [sherwani6, sherwani7, sherwani8, sherwani1],
//       [sherwani7, sherwani8, sherwani1, sherwani2],
//       [sherwani8, sherwani1, sherwani2, sherwani3],
//     ][i],
//     category: "Sherwani",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Ivory", "Gold", "Maroon", "Navy"],
//   })),

//   coatPant: [...Array(8)].map((_, i) => ({
//     id: `coat-pant-${i}`,
//     title: [
//       "Premium Coat Pant",
//       "Designer Suit",
//       "Executive Set",
//       "Formal Coat Pant",
//       "Tailored Suit",
//       "Business Formal",
//       "Luxury Suit",
//       "Classic Coat Pant"
//     ][i],
//     description: "Perfectly tailored coat pant sets for formal occasions and professional settings.",
//     images: [
//       [coatPant1, coatPant2, coatPant3, coatPant4],
//       [coatPant2, coatPant3, coatPant4, coatPant5],
//       [coatPant3, coatPant4, coatPant5, coatPant6],
//       [coatPant4, coatPant5, coatPant6, coatPant7],
//       [coatPant5, coatPant6, coatPant7, coatPant8],
//       [coatPant6, coatPant7, coatPant8, coatPant1],
//       [coatPant7, coatPant8, coatPant1, coatPant2],
//       [coatPant8, coatPant1, coatPant2, coatPant3],
//     ][i],
//     category: "Coat Pant",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Black", "Navy", "Gray", "Brown"],
//   })),

//   indoWestern: [...Array(8)].map((_, i) => ({
//     id: `indo-western-${i}`,
//     title: [
//       "Fusion Wear",
//       "Modern Ethnic",
//       "Contemporary Traditional",
//       "Indo-Western Set",
//       "Designer Fusion",
//       "Urban Ethnic",
//       "Luxury Fusion",
//       "Premium Indo-Western"
//     ][i],
//     description: "Beautiful fusion of traditional Indian and contemporary western fashion elements.",
//     images: [
//       [indoWestern1, indoWestern2, indoWestern3, indoWestern4],
//       [indoWestern2, indoWestern3, indoWestern4, indoWestern5],
//       [indoWestern3, indoWestern4, indoWestern5, indoWestern6],
//       [indoWestern4, indoWestern5, indoWestern6, indoWestern7],
//       [indoWestern5, indoWestern6, indoWestern7, indoWestern8],
//       [indoWestern6, indoWestern7, indoWestern8, indoWestern1],
//       [indoWestern7, indoWestern8, indoWestern1, indoWestern2],
//       [indoWestern8, indoWestern1, indoWestern2, indoWestern3],
//     ][i],
//     category: "Indo Western",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Beige", "Burgundy", "Emerald", "Mustard"],
//   })),

//   kurtaPajama: [...Array(8)].map((_, i) => ({
//     id: `kurta-pajama-${i}`,
//     title: [
//       "Cotton Kurta Set",
//       "Silk Kurta",
//       "Designer Kurta",
//       "Festive Kurta",
//       "Embroidered Kurta",
//       "Traditional Kurta",
//       "Premium Kurta",
//       "Luxury Kurta Set"
//     ][i],
//     description: "Comfortable and stylish kurta pajama sets perfect for traditional and festive occasions.",
//     images: [
//       [kurtaPajama1, kurtaPajama2, kurtaPajama3, kurtaPajama4],
//       [kurtaPajama2, kurtaPajama3, kurtaPajama4, kurtaPajama5],
//       [kurtaPajama3, kurtaPajama4, kurtaPajama5, kurtaPajama6],
//       [kurtaPajama4, kurtaPajama5, kurtaPajama6, kurtaPajama7],
//       [kurtaPajama5, kurtaPajama6, kurtaPajama7, kurtaPajama8],
//       [kurtaPajama6, kurtaPajama7, kurtaPajama8, kurtaPajama1],
//       [kurtaPajama7, kurtaPajama8, kurtaPajama1, kurtaPajama2],
//       [kurtaPajama8, kurtaPajama1, kurtaPajama2, kurtaPajama3],
//     ][i],
//     category: "Kurta Pajama",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["White", "Blue", "Black", "Red"],
//   })),

//   blazer: [...Array(8)].map((_, i) => ({
//     id: `blazer-${i}`,
//     title: [
//       "Single Breasted Blazer",
//       "Double Breasted Blazer",
//       "Designer Blazer",
//       "Casual Blazer",
//       "Formal Blazer",
//       "Linen Blazer",
//       "Wool Blazer",
//       "Designer Blazer"
//     ][i],
//     description: "Stylish blazers that add sophistication to any outfit, perfect for various occasions.",
//     images: [
//       [blazer1, blazer2, blazer3, blazer4],
//       [blazer2, blazer3, blazer4, blazer5],
//       [blazer3, blazer4, blazer5, blazer6],
//       [blazer4, blazer5, blazer6, blazer7],
//       [blazer5, blazer6, blazer7, blazer8],
//       [blazer6, blazer7, blazer8, blazer1],
//       [blazer7, blazer8, blazer1, blazer2],
//       [blazer8, blazer1, blazer2, blazer3],
//     ][i],
//     category: "Blazer",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Gray", "Burgundy"],
//   })),

//   jeansTshirts: [...Array(8)].map((_, i) => ({
//     id: `jeans-tshirts-${i}`,
//     title: [
//       "Denim Jeans",
//       "Cotton T-Shirts",
//       "Casual Combo",
//       "Street Wear",
//       "Designer Jeans",
//       "Premium T-Shirt",
//       "Casual Wear Set",
//       "Urban Collection"
//     ][i],
//     description: "Comfortable jeans and trendy t-shirts for everyday casual wear and outings.",
//     images: [
//       [jeansTshirt1, jeansTshirt2, jeansTshirt3, jeansTshirt4],
//       [jeansTshirt2, jeansTshirt3, jeansTshirt4, jeansTshirt5],
//       [jeansTshirt3, jeansTshirt4, jeansTshirt5, jeansTshirt6],
//       [jeansTshirt4, jeansTshirt5, jeansTshirt6, jeansTshirt7],
//       [jeansTshirt5, jeansTshirt6, jeansTshirt7, jeansTshirt8],
//       [jeansTshirt6, jeansTshirt7, jeansTshirt8, jeansTshirt1],
//       [jeansTshirt7, jeansTshirt8, jeansTshirt1, jeansTshirt2],
//       [jeansTshirt8, jeansTshirt1, jeansTshirt2, jeansTshirt3],
//     ][i],
//     category: "Jeans & T-Shirts",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Blue", "Black", "Gray", "White"],
//   })),

//   unstitched: [...Array(8)].map((_, i) => ({
//     id: `unstitched-${i}`,
//     title: [
//       "Premium Fabric",
//       "Designer Material",
//       "Custom Tailoring",
//       "Luxury Textile",
//       "Cotton Suit Material",
//       "Silk Fabric",
//       "Linen Material",
//       "Designer Textile"
//     ][i],
//     description: "High-quality unstitched fabrics for custom tailoring and personalized outfits.",
//     images: [
//       [unstitched1, unstitched2, unstitched3, unstitched4],
//       [unstitched2, unstitched3, unstitched4, unstitched5],
//       [unstitched3, unstitched4, unstitched5, unstitched6],
//       [unstitched4, unstitched5, unstitched6, unstitched7],
//       [unstitched5, unstitched6, unstitched7, unstitched8],
//       [unstitched6, unstitched7, unstitched8, unstitched1],
//       [unstitched7, unstitched8, unstitched1, unstitched2],
//       [unstitched8, unstitched1, unstitched2, unstitched3],
//     ][i],
//     category: "Unstitched Collection",
//     sizes: ["2.5m", "3m", "3.5m", "4m"],
//     colors: ["Multiple", "Assorted", "Designer Prints"],
//   })),

//   winter: [...Array(8)].map((_, i) => ({
//     id: `winter-${i}`,
//     title: [
//       "Winter Jackets",
//       "Woolen Sweaters",
//       "Thermal Wear",
//       "Winter Collection",
//       "Designer Jacket",
//       "Premium Sweater",
//       "Winter Coat",
//       "Luxury Winter Wear"
//     ][i],
//     description: "Warm and stylish winter clothing to keep you comfortable in cold weather.",
//     images: [
//       [winter1, winter2, winter3, winter4],
//       [winter2, winter3, winter4, winter5],
//       [winter3, winter4, winter5, winter6],
//       [winter4, winter5, winter6, winter7],
//       [winter5, winter6, winter7, winter8],
//       [winter6, winter7, winter8, winter1],
//       [winter7, winter8, winter1, winter2],
//       [winter8, winter1, winter2, winter3],
//     ][i],
//     category: "Winter Collection",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Gray", "Burgundy"],
//   }))
// });

// const MensCollection: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState("Sherwani");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "👑 Sherwani Collection",
//       category: "Sherwani",
//       gradient: "from-red-50 to-pink-50",
//       products: productData.sherwani,
//     },
//     {
//       title: "🎩 Coat Pant Sets",
//       category: "Coat Pant",
//       gradient: "from-indigo-50 to-blue-50",
//       products: productData.coatPant,
//     },
//     {
//       title: "🌏 Indo Western Fusion",
//       category: "Indo Western",
//       gradient: "from-green-50 to-teal-50",
//       products: productData.indoWestern,
//     },
//     {
//       title: "🧵 Kurta Pajama",
//       category: "Kurta Pajama",
//       gradient: "from-yellow-50 to-orange-50",
//       products: productData.kurtaPajama,
//     },
//     {
//       title: "💼 Blazer Collection",
//       category: "Blazer",
//       gradient: "from-gray-50 to-slate-50",
//       products: productData.blazer,
//     },
//     {
//       title: "👖 Jeans & T-Shirts",
//       category: "Jeans & T-Shirts",
//       gradient: "from-blue-50 to-indigo-50",
//       products: productData.jeansTshirts,
//     },
//     {
//       title: "✂️ Unstitched Collection",
//       category: "Unstitched Collection",
//       gradient: "from-purple-50 to-pink-50",
//       products: productData.unstitched,
//     },
//     {
//       title: "❄️ Winter Collection",
//       category: "Winter Collection",
//       gradient: "from-cyan-50 to-blue-50",
//       products: productData.winter,
//     },
//   ];

//   // ... rest of your component logic remains the same
//   const openModal = (product: Product) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === selectedProduct.images.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === 0 ? selectedProduct.images.length - 1 : prev - 1
//       );
//     }
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
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//             <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
//               PREMIUM COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-accent to-slate-800 bg-clip-text text-transparent">
//             Men's Fashion Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-yellow-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover sophisticated fashion for the modern gentleman — where elegance meets contemporary 
//             style in every detail and every occasion.
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
//                 className={`relative px-6 py-3 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
//                   activeCategory === cat.name
//                     ? "bg-gradient-to-r from-accent to-accent/90 text-white border-accent shadow-2xl shadow-accent/25 scale-105"
//                     : "border-slate-200 bg-white/80 hover:border-accent/50 hover:shadow-xl text-slate-700"
//                 }`}
//                 variant="outline"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-accent to-accent/90 transition-all duration-500 ${
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
//                     <div className="w-2 h-12 bg-gradient-to-b from-accent to-accent/70 rounded-full"></div>
//                     <div>
//                       <h2 className="font-serif text-4xl font-bold text-slate-800">
//                         {section.title}
//                       </h2>
//                       <p className="text-slate-600 mt-1">
//                         {section.products.length} premium items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-black text-white border border-slate-200 hover:border-accent hover:bg-black rounded-xl px-6 py-2 transition-all duration-300">
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
//                           <h3 className="font-semibold text-lg text-slate-800 group-hover:text-accent transition-colors duration-300 mb-2">
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

//       {/* Gallery Modal - Keep your existing modal code here */}
//       {/* ... (your existing modal code remains the same) */}
//     </section>
//   );
// };

// export default MensCollection;








// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Import all your actual men's collection images
// import menHero from "@/assets/men-hero.jpg";

// // Sherwani Collection
// import sherwani1 from "@/assets/Men/shirt1.jpeg";
// import sherwani2 from "@/assets/Men/shirt2.jpeg";
// import sherwani3 from "@/assets/Men/shirt3.jpeg";
// import sherwani4 from "@/assets/Men/shirt4.jpeg";
// import sherwani5 from "@/assets/Men/shirt5.jpeg";
// import sherwani6 from "@/assets/Men/shirt6.jpeg";
// import sherwani7 from "@/assets/Men/shirt7.jpeg";
// import sherwani8 from "@/assets/Men/shirt8.jpeg";

// // Coat Pant Collection
// import coatPant1 from "@/assets/Men/shirt9.jpeg";
// import coatPant2 from "@/assets/Men/shirt10.jpeg";
// import coatPant3 from "@/assets/Men/shirt11.jpeg";
// import coatPant4 from "@/assets/Men/shirt12.jpeg";
// import coatPant5 from "@/assets/Men/shirt13.jpeg";
// import coatPant6 from "@/assets/Men/shirt15.jpeg";
// import coatPant7 from "@/assets/Men/shirt10.jpeg";
// import coatPant8 from "@/assets/Men/shirt12.jpeg";

// // Indo Western Collection
// import indoWestern1 from "@/assets/Men/groomcap1.jpeg";
// import indoWestern2 from "@/assets/Men/groomcap2.jpeg";
// import indoWestern3 from "@/assets/Men/groomcap3.jpeg";
// import indoWestern4 from "@/assets/Men/groomcap3.jpeg";
// import indoWestern5 from "@/assets/Men/groomcap5.jpeg";
// import indoWestern6 from "@/assets/Men/groomcap6.jpeg";
// import indoWestern7 from "@/assets/Men/groomcap7.jpeg";
// import indoWestern8 from "@/assets/Men/groomcap8.jpeg";

// // Kurta Pajama Collection
// import kurtaPajama1 from "@/assets/Men/Kurtapajama1.jpeg";
// import kurtaPajama2 from "@/assets/Men/Kurtapajama3.jpeg";
// import kurtaPajama3 from "@/assets/Men/Kurtapajama4.jpeg";
// import kurtaPajama4 from "@/assets/Men/Kurtapajama5.jpeg";
// import kurtaPajama5 from "@/assets/Men/Kurtapajama6.jpeg";
// import kurtaPajama6 from "@/assets/Men/Kurtapajama7.jpeg";
// import kurtaPajama7 from "@/assets/Men/Kurtapajama8.jpeg";
// import kurtaPajama8 from "@/assets/Men/Kurtapajama9.jpeg";

// // Blazer Collection
// import blazer1 from "@/assets/Men/Suit1.jpeg";
// import blazer2 from "@/assets/Men/Suits3.jpeg";
// import blazer3 from "@/assets/Men/Suits4.jpeg";
// import blazer4 from "@/assets/Men/Suits5.jpeg";
// import blazer5 from "@/assets/Men/Suits6.jpeg";
// import blazer6 from "@/assets/Men/Suits7.jpeg";
// import blazer7 from "@/assets/Men/Suits7.jpeg";
// import blazer8 from "@/assets/Men/Suits9.jpeg";

// // Jeans & T-Shirts Collection
// import jeansTshirt1 from "@/assets/Men/shirt1.jpeg";
// import jeansTshirt2 from "@/assets/Men/shirt2.jpeg";
// import jeansTshirt3 from "@/assets/Men/shirt3.jpeg";
// import jeansTshirt4 from "@/assets/Men/shirt4.jpeg";
// import jeansTshirt5 from "@/assets/Men/shirt5.jpeg";
// import jeansTshirt6 from "@/assets/Men/shirt6.jpeg";
// import jeansTshirt7 from "@/assets/Men/shirt7.jpeg";
// import jeansTshirt8 from "@/assets/Men/shirt8.jpeg";

// // Unstitched Collection
// import unstitched1 from "@/assets/Men/unstichedclothes1.jpeg";
// import unstitched2 from "@/assets/Men/unstichedclothes1.jpeg";
// import unstitched3 from "@/assets/Men/unstichedclothes3.jpeg";
// import unstitched4 from "@/assets/Men/unstichedclothes4.jpeg";
// import unstitched5 from "@/assets/Men/unstichedclothes5.jpeg";
// import unstitched6 from "@/assets/Men/unstichedclothes6.jpeg";
// import unstitched7 from "@/assets/Men/unstichedclothes7.jpeg";
// import unstitched8 from "@/assets/Men/unstichedclothes8.jpeg";

// // Winter Collection
// import winter1 from "@/assets/Men/Suit1.jpeg";
// import winter2 from "@/assets/Men/Suits3.jpeg";
// import winter3 from "@/assets/Men/Suits4.jpeg";
// import winter4 from "@/assets/Men/Suits5.jpeg";
// import winter5 from "@/assets/Men/Suits5.jpeg";
// import winter6 from "@/assets/Men/Suits6.jpeg";
// import winter7 from "@/assets/Men/Suits7.jpeg";
// import winter8 from "@/assets/Men/Suits8.jpeg";

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   images: string[];
//   category: string;
//   sizes: string[];
//   colors: string[];
//   price?: string;
// }

// const categories = [
//   { name: "Sherwani", icon: "👑" },
//   { name: "Coat Pant", icon: "🎩" },
//   { name: "Indo Western", icon: "🌏" },
//   { name: "Kurta Pajama", icon: "🧵" },
//   { name: "Blazer", icon: "💼" },
//   { name: "Jeans & T-Shirts", icon: "👖" },
//   { name: "Unstitched Collection", icon: "✂️" },
//   { name: "Winter Collection", icon: "❄️" },
// ];

// // Mock product data with unique images for each product
// const generateProductData = () => ({
//   sherwani: [...Array(8)].map((_, i) => ({
//     id: `sherwani-${i}`,
//     title: [
//       "Royal Wedding Sherwani",
//       "Embroidered Sherwani",
//       "Designer Sherwani",
//       "Premium Sherwani",
//       "Silk Sherwani",
//       "Zari Work Sherwani",
//       "Traditional Sherwani",
//       "Contemporary Sherwani"
//     ][i],
//     description: "Exquisite sherwanis with intricate embroidery and premium fabrics for special occasions.",
//     images: [
//       [sherwani1, sherwani2, sherwani3, sherwani4],
//       [sherwani2, sherwani3, sherwani4, sherwani5],
//       [sherwani3, sherwani4, sherwani5, sherwani6],
//       [sherwani4, sherwani5, sherwani6, sherwani7],
//       [sherwani5, sherwani6, sherwani7, sherwani8],
//       [sherwani6, sherwani7, sherwani8, sherwani1],
//       [sherwani7, sherwani8, sherwani1, sherwani2],
//       [sherwani8, sherwani1, sherwani2, sherwani3],
//     ][i],
//     category: "Sherwani",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Ivory", "Gold", "Maroon", "Navy"],
    
//   })),

//   coatPant: [...Array(8)].map((_, i) => ({
//     id: `coat-pant-${i}`,
//     title: [
//       "Premium Coat Pant",
//       "Designer Suit",
//       "Executive Set",
//       "Formal Coat Pant",
//       "Tailored Suit",
//       "Business Formal",
//       "Luxury Suit",
//       "Classic Coat Pant"
//     ][i],
//     description: "Perfectly tailored coat pant sets for formal occasions and professional settings.",
//     images: [
//       [coatPant1, coatPant2, coatPant3, coatPant4],
//       [coatPant2, coatPant3, coatPant4, coatPant5],
//       [coatPant3, coatPant4, coatPant5, coatPant6],
//       [coatPant4, coatPant5, coatPant6, coatPant7],
//       [coatPant5, coatPant6, coatPant7, coatPant8],
//       [coatPant6, coatPant7, coatPant8, coatPant1],
//       [coatPant7, coatPant8, coatPant1, coatPant2],
//       [coatPant8, coatPant1, coatPant2, coatPant3],
//     ][i],
//     category: "Coat Pant",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Black", "Navy", "Gray", "Brown"],
//     price: "$199-$399"
//   })),

//   indoWestern: [...Array(8)].map((_, i) => ({
//     id: `indo-western-${i}`,
//     title: [
//       "Fusion Wear",
//       "Modern Ethnic",
//       "Contemporary Traditional",
//       "Indo-Western Set",
//       "Designer Fusion",
//       "Urban Ethnic",
//       "Luxury Fusion",
//       "Premium Indo-Western"
//     ][i],
//     description: "Beautiful fusion of traditional Indian and contemporary western fashion elements.",
//     images: [
//       [indoWestern1, indoWestern2, indoWestern3, indoWestern4],
//       [indoWestern2, indoWestern3, indoWestern4, indoWestern5],
//       [indoWestern3, indoWestern4, indoWestern5, indoWestern6],
//       [indoWestern4, indoWestern5, indoWestern6, indoWestern7],
//       [indoWestern5, indoWestern6, indoWestern7, indoWestern8],
//       [indoWestern6, indoWestern7, indoWestern8, indoWestern1],
//       [indoWestern7, indoWestern8, indoWestern1, indoWestern2],
//       [indoWestern8, indoWestern1, indoWestern2, indoWestern3],
//     ][i],
//     category: "Indo Western",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Beige", "Burgundy", "Emerald", "Mustard"],
//     price: "$159-$299"
//   })),

//   kurtaPajama: [...Array(8)].map((_, i) => ({
//     id: `kurta-pajama-${i}`,
//     title: [
//       "Cotton Kurta Set",
//       "Silk Kurta",
//       "Designer Kurta",
//       "Festive Kurta",
//       "Embroidered Kurta",
//       "Traditional Kurta",
//       "Premium Kurta",
//       "Luxury Kurta Set"
//     ][i],
//     description: "Comfortable and stylish kurta pajama sets perfect for traditional and festive occasions.",
//     images: [
//       [kurtaPajama1, kurtaPajama2, kurtaPajama3, kurtaPajama4],
//       [kurtaPajama2, kurtaPajama3, kurtaPajama4, kurtaPajama5],
//       [kurtaPajama3, kurtaPajama4, kurtaPajama5, kurtaPajama6],
//       [kurtaPajama4, kurtaPajama5, kurtaPajama6, kurtaPajama7],
//       [kurtaPajama5, kurtaPajama6, kurtaPajama7, kurtaPajama8],
//       [kurtaPajama6, kurtaPajama7, kurtaPajama8, kurtaPajama1],
//       [kurtaPajama7, kurtaPajama8, kurtaPajama1, kurtaPajama2],
//       [kurtaPajama8, kurtaPajama1, kurtaPajama2, kurtaPajama3],
//     ][i],
//     category: "Kurta Pajama",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["White", "Blue", "Black", "Red"],
//     price: "$79-$199"
//   })),

//   blazer: [...Array(8)].map((_, i) => ({
//     id: `blazer-${i}`,
//     title: [
//       "Single Breasted Blazer",
//       "Double Breasted Blazer",
//       "Designer Blazer",
//       "Casual Blazer",
//       "Formal Blazer",
//       "Linen Blazer",
//       "Wool Blazer",
//       "Designer Blazer"
//     ][i],
//     description: "Stylish blazers that add sophistication to any outfit, perfect for various occasions.",
//     images: [
//       [blazer1, blazer2, blazer3, blazer4],
//       [blazer2, blazer3, blazer4, blazer5],
//       [blazer3, blazer4, blazer5, blazer6],
//       [blazer4, blazer5, blazer6, blazer7],
//       [blazer5, blazer6, blazer7, blazer8],
//       [blazer6, blazer7, blazer8, blazer1],
//       [blazer7, blazer8, blazer1, blazer2],
//       [blazer8, blazer1, blazer2, blazer3],
//     ][i],
//     category: "Blazer",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Gray", "Burgundy"],
//     price: "$129-$299"
//   })),

//   jeansTshirts: [...Array(8)].map((_, i) => ({
//     id: `jeans-tshirts-${i}`,
//     title: [
//       "Denim Jeans",
//       "Cotton T-Shirts",
//       "Casual Combo",
//       "Street Wear",
//       "Designer Jeans",
//       "Premium T-Shirt",
//       "Casual Wear Set",
//       "Urban Collection"
//     ][i],
//     description: "Comfortable jeans and trendy t-shirts for everyday casual wear and outings.",
//     images: [
//       [jeansTshirt1, jeansTshirt2, jeansTshirt3, jeansTshirt4],
//       [jeansTshirt2, jeansTshirt3, jeansTshirt4, jeansTshirt5],
//       [jeansTshirt3, jeansTshirt4, jeansTshirt5, jeansTshirt6],
//       [jeansTshirt4, jeansTshirt5, jeansTshirt6, jeansTshirt7],
//       [jeansTshirt5, jeansTshirt6, jeansTshirt7, jeansTshirt8],
//       [jeansTshirt6, jeansTshirt7, jeansTshirt8, jeansTshirt1],
//       [jeansTshirt7, jeansTshirt8, jeansTshirt1, jeansTshirt2],
//       [jeansTshirt8, jeansTshirt1, jeansTshirt2, jeansTshirt3],
//     ][i],
//     category: "Jeans & T-Shirts",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Blue", "Black", "Gray", "White"],
//     price: "$29-$79"
//   })),

//   unstitched: [...Array(8)].map((_, i) => ({
//     id: `unstitched-${i}`,
//     title: [
//       "Premium Fabric",
//       "Designer Material",
//       "Custom Tailoring",
//       "Luxury Textile",
//       "Cotton Suit Material",
//       "Silk Fabric",
//       "Linen Material",
//       "Designer Textile"
//     ][i],
//     description: "High-quality unstitched fabrics for custom tailoring and personalized outfits.",
//     images: [
//       [unstitched1, unstitched2, unstitched3, unstitched4],
//       [unstitched2, unstitched3, unstitched4, unstitched5],
//       [unstitched3, unstitched4, unstitched5, unstitched6],
//       [unstitched4, unstitched5, unstitched6, unstitched7],
//       [unstitched5, unstitched6, unstitched7, unstitched8],
//       [unstitched6, unstitched7, unstitched8, unstitched1],
//       [unstitched7, unstitched8, unstitched1, unstitched2],
//       [unstitched8, unstitched1, unstitched2, unstitched3],
//     ][i],
//     category: "Unstitched Collection",
//     sizes: ["2.5m", "3m", "3.5m", "4m"],
//     colors: ["Multiple", "Assorted", "Designer Prints"],
//     price: "$49-$149"
//   })),

//   winter: [...Array(8)].map((_, i) => ({
//     id: `winter-${i}`,
//     title: [
//       "Winter Jackets",
//       "Woolen Sweaters",
//       "Thermal Wear",
//       "Winter Collection",
//       "Designer Jacket",
//       "Premium Sweater",
//       "Winter Coat",
//       "Luxury Winter Wear"
//     ][i],
//     description: "Warm and stylish winter clothing to keep you comfortable in cold weather.",
//     images: [
//       [winter1, winter2, winter3, winter4],
//       [winter2, winter3, winter4, winter5],
//       [winter3, winter4, winter5, winter6],
//       [winter4, winter5, winter6, winter7],
//       [winter5, winter6, winter7, winter8],
//       [winter6, winter7, winter8, winter1],
//       [winter7, winter8, winter1, winter2],
//       [winter8, winter1, winter2, winter3],
//     ][i],
//     category: "Winter Collection",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Gray", "Burgundy"],
//     price: "$89-$259"
//   }))
// });

// const MensCollection: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState("Sherwani");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "👑 Sherwani Collection",
//       category: "Sherwani",
//       gradient: "from-red-50 to-pink-50",
//       products: productData.sherwani,
//     },
//     {
//       title: "🎩 Coat Pant Sets",
//       category: "Coat Pant",
//       gradient: "from-indigo-50 to-blue-50",
//       products: productData.coatPant,
//     },
//     {
//       title: "🌏 Indo Western Fusion",
//       category: "Indo Western",
//       gradient: "from-green-50 to-teal-50",
//       products: productData.indoWestern,
//     },
//     {
//       title: "🧵 Kurta Pajama",
//       category: "Kurta Pajama",
//       gradient: "from-yellow-50 to-orange-50",
//       products: productData.kurtaPajama,
//     },
//     {
//       title: "💼 Blazer Collection",
//       category: "Blazer",
//       gradient: "from-gray-50 to-slate-50",
//       products: productData.blazer,
//     },
//     {
//       title: "👖 Jeans & T-Shirts",
//       category: "Jeans & T-Shirts",
//       gradient: "from-blue-50 to-indigo-50",
//       products: productData.jeansTshirts,
//     },
//     {
//       title: "✂️ Unstitched Collection",
//       category: "Unstitched Collection",
//       gradient: "from-purple-50 to-pink-50",
//       products: productData.unstitched,
//     },
//     {
//       title: "❄️ Winter Collection",
//       category: "Winter Collection",
//       gradient: "from-cyan-50 to-blue-50",
//       products: productData.winter,
//     },
//   ];

//   const openModal = (product: Product) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === selectedProduct.images.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === 0 ? selectedProduct.images.length - 1 : prev - 1
//       );
//     }
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
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//             <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
//               PREMIUM COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-accent to-slate-800 bg-clip-text text-transparent">
//             Men's Fashion Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-yellow-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover sophisticated fashion for the modern gentleman — where elegance meets contemporary 
//             style in every detail and every occasion.
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
//                 className={`relative px-6 py-3 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
//                   activeCategory === cat.name
//                     ? "bg-gradient-to-r from-accent to-accent/90 text-white border-accent shadow-2xl shadow-accent/25 scale-105"
//                     : "border-slate-200 bg-white/80 hover:border-accent/50 hover:shadow-xl text-slate-700"
//                 }`}
//                 variant="outline"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-accent to-accent/90 transition-all duration-500 ${
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
//                     <div className="w-2 h-12 bg-gradient-to-b from-accent to-accent/70 rounded-full"></div>
//                     <div>
//                       <h2 className="font-serif text-4xl font-bold text-slate-800">
//                         {section.title}
//                       </h2>
//                       <p className="text-slate-600 mt-1">
//                         {section.products.length} premium items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-black text-white border border-slate-200 hover:border-accent hover:bg-black rounded-xl px-6 py-2 transition-all duration-300">
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
//                           <h3 className="font-semibold text-lg text-slate-800 group-hover:text-accent transition-colors duration-300 mb-2">
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

//       {/* Enhanced Gallery Modal */}
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
//                                 ? "border-accent shadow-md"
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
                        
//                         {/* Price */}
//                         <div className="mb-6">
//                           <h4 className="font-semibold text-slate-800 mb-2">Price Range</h4>
//                           <p className="text-2xl font-bold text-accent">{selectedProduct.price}</p>
//                         </div>
                        
//                         {/* Size Selection */}
//                         <div className="mb-6">
//                           <h4 className="font-semibold text-slate-800 mb-3">Available Sizes</h4>
//                           <div className="flex flex-wrap gap-2">
//                             {selectedProduct.sizes.map((size) => (
//                               <button
//                                 key={size}
//                                 className="px-4 py-2 border border-slate-300 rounded-lg hover:border-accent hover:text-accent transition-colors duration-300 font-medium"
//                               >
//                                 {size}
//                               </button>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Color Selection */}
//                         <div className="mb-6">
//                           <h4 className="font-semibold text-slate-800 mb-3">Available Colors</h4>
//                           <div className="flex flex-wrap gap-2">
//                             {selectedProduct.colors.map((color) => (
//                               <button
//                                 key={color}
//                                 className="px-4 py-2 border border-slate-300 rounded-lg hover:border-accent hover:text-accent transition-colors duration-300 font-medium"
//                               >
//                                 {color}
//                               </button>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
                      
//                       {/* Action Buttons */}
//                       <div className="bg-slate-50 rounded-2xl p-6">
//                         <h3 className="font-serif text-xl font-bold text-slate-800 mb-4">
//                           Quick Actions
//                         </h3>
//                         <div className="space-y-4">
//                           <div className="flex justify-between items-center">
//                             <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">In Stock</span>
//                           </div>
                          
//                           <Button className="w-full bg-black text-white rounded-xl hover:bg-accent py-3 text-lg">
//                             Add to Cart
//                           </Button>
                          
//                           <Button variant="outline" className="w-full border-accent text-accent rounded-xl hover:bg-accent/10 py-3">
//                             Add to Wishlist
//                           </Button>
                          
//                           <Button variant="outline" className="w-full border-slate-300 text-slate-700 rounded-xl hover:bg-slate-100 py-3">
//                             Share Product
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
//                             <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 transition-all duration-300 group-hover:border-accent group-hover:shadow-md">
//                               <img
//                                 src={product.images[0]}
//                                 alt={product.title}
//                                 className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
//                               />
//                               <div className="p-3">
//                                 <h4 className="font-semibold text-sm text-slate-800 group-hover:text-accent transition-colors duration-300">
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
// };

// export default MensCollection;








// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Import all your actual men's collection images
// import menHero from "@/assets/men-hero.jpg";

// // Sherwani Collection
// import sherwani1 from "@/assets/Men/shirt1.jpeg";
// import sherwani2 from "@/assets/Men/shirt2.jpeg";
// import sherwani3 from "@/assets/Men/shirt3.jpeg";
// import sherwani4 from "@/assets/Men/shirt4.jpeg";
// import sherwani5 from "@/assets/Men/shirt5.jpeg";
// import sherwani6 from "@/assets/Men/shirt6.jpeg";
// import sherwani7 from "@/assets/Men/shirt7.jpeg";
// import sherwani8 from "@/assets/Men/shirt8.jpeg";

// // Coat Pant Collection
// import coatPant1 from "@/assets/Men/shirt9.jpeg";
// import coatPant2 from "@/assets/Men/shirt10.jpeg";
// import coatPant3 from "@/assets/Men/shirt11.jpeg";
// import coatPant4 from "@/assets/Men/shirt12.jpeg";
// import coatPant5 from "@/assets/Men/shirt13.jpeg";
// import coatPant6 from "@/assets/Men/shirt15.jpeg";
// import coatPant7 from "@/assets/Men/shirt10.jpeg";
// import coatPant8 from "@/assets/Men/shirt12.jpeg";

// // Indo Western Collection
// import indoWestern1 from "@/assets/Men/groomcap1.jpeg";
// import indoWestern2 from "@/assets/Men/groomcap2.jpeg";
// import indoWestern3 from "@/assets/Men/groomcap3.jpeg";
// import indoWestern4 from "@/assets/Men/groomcap3.jpeg";
// import indoWestern5 from "@/assets/Men/groomcap5.jpeg";
// import indoWestern6 from "@/assets/Men/groomcap6.jpeg";
// import indoWestern7 from "@/assets/Men/groomcap7.jpeg";
// import indoWestern8 from "@/assets/Men/groomcap8.jpeg";

// // Kurta Pajama Collection
// import kurtaPajama1 from "@/assets/Men/Kurtapajama1.jpeg";
// import kurtaPajama2 from "@/assets/Men/Kurtapajama3.jpeg";
// import kurtaPajama3 from "@/assets/Men/Kurtapajama4.jpeg";
// import kurtaPajama4 from "@/assets/Men/Kurtapajama5.jpeg";
// import kurtaPajama5 from "@/assets/Men/Kurtapajama6.jpeg";
// import kurtaPajama6 from "@/assets/Men/Kurtapajama7.jpeg";
// import kurtaPajama7 from "@/assets/Men/Kurtapajama8.jpeg";
// import kurtaPajama8 from "@/assets/Men/Kurtapajama9.jpeg";

// // Blazer Collection
// import blazer1 from "@/assets/Men/Suit1.jpeg";
// import blazer2 from "@/assets/Men/Suits3.jpeg";
// import blazer3 from "@/assets/Men/Suits4.jpeg";
// import blazer4 from "@/assets/Men/Suits5.jpeg";
// import blazer5 from "@/assets/Men/Suits6.jpeg";
// import blazer6 from "@/assets/Men/Suits7.jpeg";
// import blazer7 from "@/assets/Men/Suits7.jpeg";
// import blazer8 from "@/assets/Men/Suits9.jpeg";

// // Jeans & T-Shirts Collection
// import jeansTshirt1 from "@/assets/Men/shirt1.jpeg";
// import jeansTshirt2 from "@/assets/Men/shirt2.jpeg";
// import jeansTshirt3 from "@/assets/Men/shirt3.jpeg";
// import jeansTshirt4 from "@/assets/Men/shirt4.jpeg";
// import jeansTshirt5 from "@/assets/Men/shirt5.jpeg";
// import jeansTshirt6 from "@/assets/Men/shirt6.jpeg";
// import jeansTshirt7 from "@/assets/Men/shirt7.jpeg";
// import jeansTshirt8 from "@/assets/Men/shirt8.jpeg";

// // Unstitched Collection
// import unstitched1 from "@/assets/Men/unstichedclothes1.jpeg";
// import unstitched2 from "@/assets/Men/unstichedclothes1.jpeg";
// import unstitched3 from "@/assets/Men/unstichedclothes3.jpeg";
// import unstitched4 from "@/assets/Men/unstichedclothes4.jpeg";
// import unstitched5 from "@/assets/Men/unstichedclothes5.jpeg";
// import unstitched6 from "@/assets/Men/unstichedclothes6.jpeg";
// import unstitched7 from "@/assets/Men/unstichedclothes7.jpeg";
// import unstitched8 from "@/assets/Men/unstichedclothes8.jpeg";

// // Winter Collection
// import winter1 from "@/assets/Men/Suit1.jpeg";
// import winter2 from "@/assets/Men/Suits3.jpeg";
// import winter3 from "@/assets/Men/Suits4.jpeg";
// import winter4 from "@/assets/Men/Suits5.jpeg";
// import winter5 from "@/assets/Men/Suits5.jpeg";
// import winter6 from "@/assets/Men/Suits6.jpeg";
// import winter7 from "@/assets/Men/Suits7.jpeg";
// import winter8 from "@/assets/Men/Suits8.jpeg";

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   images: string[];
//   category: string;
//   sizes: string[];
//   colors: string[];
//   price?: string;
// }

// const categories = [
//   { name: "Sherwani", icon: "👑" },
//   { name: "Coat Pant", icon: "🎩" },
//   { name: "Indo Western", icon: "🌏" },
//   { name: "Kurta Pajama", icon: "🧵" },
//   { name: "Blazer", icon: "💼" },
//   { name: "Jeans & T-Shirts", icon: "👖" },
//   { name: "Unstitched Collection", icon: "✂️" },
//   { name: "Winter Collection", icon: "❄️" },
// ];

// // Mock product data with unique images for each product
// const generateProductData = () => ({
//   sherwani: [...Array(8)].map((_, i) => ({
//     id: `sherwani-${i}`,
//     title: [
//       "Royal Wedding Sherwani",
//       "Embroidered Sherwani",
//       "Designer Sherwani",
//       "Premium Sherwani",
//       "Silk Sherwani",
//       "Zari Work Sherwani",
//       "Traditional Sherwani",
//       "Contemporary Sherwani"
//     ][i],
//     description: "Exquisite sherwanis with intricate embroidery and premium fabrics for special occasions.",
//     images: [
//       [sherwani1, sherwani2, sherwani3, sherwani4],
//       [sherwani2, sherwani3, sherwani4, sherwani5],
//       [sherwani3, sherwani4, sherwani5, sherwani6],
//       [sherwani4, sherwani5, sherwani6, sherwani7],
//       [sherwani5, sherwani6, sherwani7, sherwani8],
//       [sherwani6, sherwani7, sherwani8, sherwani1],
//       [sherwani7, sherwani8, sherwani1, sherwani2],
//       [sherwani8, sherwani1, sherwani2, sherwani3],
//     ][i],
//     category: "Sherwani",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Ivory", "Gold", "Maroon", "Navy"],
    
//   })),

//   coatPant: [...Array(8)].map((_, i) => ({
//     id: `coat-pant-${i}`,
//     title: [
//       "Premium Coat Pant",
//       "Designer Suit",
//       "Executive Set",
//       "Formal Coat Pant",
//       "Tailored Suit",
//       "Business Formal",
//       "Luxury Suit",
//       "Classic Coat Pant"
//     ][i],
//     description: "Perfectly tailored coat pant sets for formal occasions and professional settings.",
//     images: [
//       [coatPant1, coatPant2, coatPant3, coatPant4],
//       [coatPant2, coatPant3, coatPant4, coatPant5],
//       [coatPant3, coatPant4, coatPant5, coatPant6],
//       [coatPant4, coatPant5, coatPant6, coatPant7],
//       [coatPant5, coatPant6, coatPant7, coatPant8],
//       [coatPant6, coatPant7, coatPant8, coatPant1],
//       [coatPant7, coatPant8, coatPant1, coatPant2],
//       [coatPant8, coatPant1, coatPant2, coatPant3],
//     ][i],
//     category: "Coat Pant",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Black", "Navy", "Gray", "Brown"],
//     price: "$199-$399"
//   })),

//   indoWestern: [...Array(8)].map((_, i) => ({
//     id: `indo-western-${i}`,
//     title: [
//       "Fusion Wear",
//       "Modern Ethnic",
//       "Contemporary Traditional",
//       "Indo-Western Set",
//       "Designer Fusion",
//       "Urban Ethnic",
//       "Luxury Fusion",
//       "Premium Indo-Western"
//     ][i],
//     description: "Beautiful fusion of traditional Indian and contemporary western fashion elements.",
//     images: [
//       [indoWestern1, indoWestern2, indoWestern3, indoWestern4],
//       [indoWestern2, indoWestern3, indoWestern4, indoWestern5],
//       [indoWestern3, indoWestern4, indoWestern5, indoWestern6],
//       [indoWestern4, indoWestern5, indoWestern6, indoWestern7],
//       [indoWestern5, indoWestern6, indoWestern7, indoWestern8],
//       [indoWestern6, indoWestern7, indoWestern8, indoWestern1],
//       [indoWestern7, indoWestern8, indoWestern1, indoWestern2],
//       [indoWestern8, indoWestern1, indoWestern2, indoWestern3],
//     ][i],
//     category: "Indo Western",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Beige", "Burgundy", "Emerald", "Mustard"],
//     price: "$159-$299"
//   })),

//   kurtaPajama: [...Array(8)].map((_, i) => ({
//     id: `kurta-pajama-${i}`,
//     title: [
//       "Cotton Kurta Set",
//       "Silk Kurta",
//       "Designer Kurta",
//       "Festive Kurta",
//       "Embroidered Kurta",
//       "Traditional Kurta",
//       "Premium Kurta",
//       "Luxury Kurta Set"
//     ][i],
//     description: "Comfortable and stylish kurta pajama sets perfect for traditional and festive occasions.",
//     images: [
//       [kurtaPajama1, kurtaPajama2, kurtaPajama3, kurtaPajama4],
//       [kurtaPajama2, kurtaPajama3, kurtaPajama4, kurtaPajama5],
//       [kurtaPajama3, kurtaPajama4, kurtaPajama5, kurtaPajama6],
//       [kurtaPajama4, kurtaPajama5, kurtaPajama6, kurtaPajama7],
//       [kurtaPajama5, kurtaPajama6, kurtaPajama7, kurtaPajama8],
//       [kurtaPajama6, kurtaPajama7, kurtaPajama8, kurtaPajama1],
//       [kurtaPajama7, kurtaPajama8, kurtaPajama1, kurtaPajama2],
//       [kurtaPajama8, kurtaPajama1, kurtaPajama2, kurtaPajama3],
//     ][i],
//     category: "Kurta Pajama",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["White", "Blue", "Black", "Red"],
//     price: "$79-$199"
//   })),

//   blazer: [...Array(8)].map((_, i) => ({
//     id: `blazer-${i}`,
//     title: [
//       "Single Breasted Blazer",
//       "Double Breasted Blazer",
//       "Designer Blazer",
//       "Casual Blazer",
//       "Formal Blazer",
//       "Linen Blazer",
//       "Wool Blazer",
//       "Designer Blazer"
//     ][i],
//     description: "Stylish blazers that add sophistication to any outfit, perfect for various occasions.",
//     images: [
//       [blazer1, blazer2, blazer3, blazer4],
//       [blazer2, blazer3, blazer4, blazer5],
//       [blazer3, blazer4, blazer5, blazer6],
//       [blazer4, blazer5, blazer6, blazer7],
//       [blazer5, blazer6, blazer7, blazer8],
//       [blazer6, blazer7, blazer8, blazer1],
//       [blazer7, blazer8, blazer1, blazer2],
//       [blazer8, blazer1, blazer2, blazer3],
//     ][i],
//     category: "Blazer",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Gray", "Burgundy"],
//     price: "$129-$299"
//   })),

//   jeansTshirts: [...Array(8)].map((_, i) => ({
//     id: `jeans-tshirts-${i}`,
//     title: [
//       "Denim Jeans",
//       "Cotton T-Shirts",
//       "Casual Combo",
//       "Street Wear",
//       "Designer Jeans",
//       "Premium T-Shirt",
//       "Casual Wear Set",
//       "Urban Collection"
//     ][i],
//     description: "Comfortable jeans and trendy t-shirts for everyday casual wear and outings.",
//     images: [
//       [jeansTshirt1, jeansTshirt2, jeansTshirt3, jeansTshirt4],
//       [jeansTshirt2, jeansTshirt3, jeansTshirt4, jeansTshirt5],
//       [jeansTshirt3, jeansTshirt4, jeansTshirt5, jeansTshirt6],
//       [jeansTshirt4, jeansTshirt5, jeansTshirt6, jeansTshirt7],
//       [jeansTshirt5, jeansTshirt6, jeansTshirt7, jeansTshirt8],
//       [jeansTshirt6, jeansTshirt7, jeansTshirt8, jeansTshirt1],
//       [jeansTshirt7, jeansTshirt8, jeansTshirt1, jeansTshirt2],
//       [jeansTshirt8, jeansTshirt1, jeansTshirt2, jeansTshirt3],
//     ][i],
//     category: "Jeans & T-Shirts",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Blue", "Black", "Gray", "White"],
//     price: "$29-$79"
//   })),

//   unstitched: [...Array(8)].map((_, i) => ({
//     id: `unstitched-${i}`,
//     title: [
//       "Premium Fabric",
//       "Designer Material",
//       "Custom Tailoring",
//       "Luxury Textile",
//       "Cotton Suit Material",
//       "Silk Fabric",
//       "Linen Material",
//       "Designer Textile"
//     ][i],
//     description: "High-quality unstitched fabrics for custom tailoring and personalized outfits.",
//     images: [
//       [unstitched1, unstitched2, unstitched3, unstitched4],
//       [unstitched2, unstitched3, unstitched4, unstitched5],
//       [unstitched3, unstitched4, unstitched5, unstitched6],
//       [unstitched4, unstitched5, unstitched6, unstitched7],
//       [unstitched5, unstitched6, unstitched7, unstitched8],
//       [unstitched6, unstitched7, unstitched8, unstitched1],
//       [unstitched7, unstitched8, unstitched1, unstitched2],
//       [unstitched8, unstitched1, unstitched2, unstitched3],
//     ][i],
//     category: "Unstitched Collection",
//     sizes: ["2.5m", "3m", "3.5m", "4m"],
//     colors: ["Multiple", "Assorted", "Designer Prints"],
//     price: "$49-$149"
//   })),

//   winter: [...Array(8)].map((_, i) => ({
//     id: `winter-${i}`,
//     title: [
//       "Winter Jackets",
//       "Woolen Sweaters",
//       "Thermal Wear",
//       "Winter Collection",
//       "Designer Jacket",
//       "Premium Sweater",
//       "Winter Coat",
//       "Luxury Winter Wear"
//     ][i],
//     description: "Warm and stylish winter clothing to keep you comfortable in cold weather.",
//     images: [
//       [winter1, winter2, winter3, winter4],
//       [winter2, winter3, winter4, winter5],
//       [winter3, winter4, winter5, winter6],
//       [winter4, winter5, winter6, winter7],
//       [winter5, winter6, winter7, winter8],
//       [winter6, winter7, winter8, winter1],
//       [winter7, winter8, winter1, winter2],
//       [winter8, winter1, winter2, winter3],
//     ][i],
//     category: "Winter Collection",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Gray", "Burgundy"],
//     price: "$89-$259"
//   }))
// });

// const MensCollection: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState("Sherwani");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "👑 Sherwani Collection",
//       category: "Sherwani",
//       gradient: "from-red-50 to-pink-50",
//       products: productData.sherwani,
//     },
//     {
//       title: "🎩 Coat Pant Sets",
//       category: "Coat Pant",
//       gradient: "from-indigo-50 to-blue-50",
//       products: productData.coatPant,
//     },
//     {
//       title: "🌏 Indo Western Fusion",
//       category: "Indo Western",
//       gradient: "from-green-50 to-teal-50",
//       products: productData.indoWestern,
//     },
//     {
//       title: "🧵 Kurta Pajama",
//       category: "Kurta Pajama",
//       gradient: "from-yellow-50 to-orange-50",
//       products: productData.kurtaPajama,
//     },
//     {
//       title: "💼 Blazer Collection",
//       category: "Blazer",
//       gradient: "from-gray-50 to-slate-50",
//       products: productData.blazer,
//     },
//     {
//       title: "👖 Jeans & T-Shirts",
//       category: "Jeans & T-Shirts",
//       gradient: "from-blue-50 to-indigo-50",
//       products: productData.jeansTshirts,
//     },
//     {
//       title: "✂️ Unstitched Collection",
//       category: "Unstitched Collection",
//       gradient: "from-purple-50 to-pink-50",
//       products: productData.unstitched,
//     },
//     {
//       title: "❄️ Winter Collection",
//       category: "Winter Collection",
//       gradient: "from-cyan-50 to-blue-50",
//       products: productData.winter,
//     },
//   ];

//   const openModal = (product: Product) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === selectedProduct.images.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === 0 ? selectedProduct.images.length - 1 : prev - 1
//       );
//     }
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
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//             <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
//               PREMIUM COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-accent to-slate-800 bg-clip-text text-transparent">
//             Men's Fashion Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-yellow-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover sophisticated fashion for the modern gentleman — where elegance meets contemporary 
//             style in every detail and every occasion.
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
//                 className={`relative px-6 py-3 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
//                   activeCategory === cat.name
//                     ? "bg-gradient-to-r from-accent to-accent/90 text-white border-accent shadow-2xl shadow-accent/25 scale-105"
//                     : "border-slate-200 bg-white/80 hover:border-accent/50 hover:shadow-xl text-slate-700"
//                 }`}
//                 variant="outline"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-accent to-accent/90 transition-all duration-500 ${
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
//                     <div className="w-2 h-12 bg-gradient-to-b from-accent to-accent/70 rounded-full"></div>
//                     <div>
//                       <h2 className="font-serif text-4xl font-bold text-slate-800">
//                         {section.title}
//                       </h2>
//                       <p className="text-slate-600 mt-1">
//                         {section.products.length} premium items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-black text-white border border-slate-200 hover:border-accent hover:bg-black rounded-xl px-6 py-2 transition-all duration-300">
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
//                           <h3 className="font-semibold text-lg text-slate-800 group-hover:text-accent transition-colors duration-300 mb-2">
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
//                                 ? "border-accent shadow-md"
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
//                               className="px-3 py-1.5 border border-slate-300 rounded-lg hover:border-accent hover:text-accent transition-colors duration-300 font-medium text-sm"
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
//                             <div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200 transition-all duration-300 group-hover:border-accent group-hover:shadow-md">
//                               <div className="flex items-center justify-center h-24 bg-slate-100">
//                                 <img
//                                   src={product.images[0]}
//                                   alt={product.title}
//                                   className="max-w-full max-h-full w-auto h-auto object-contain"
//                                 />
//                               </div>
//                               <div className="p-2">
//                                 <h4 className="font-semibold text-xs text-slate-800 group-hover:text-accent transition-colors duration-300">
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
// };

// export default MensCollection;





// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Import all your actual men's collection images
// import menHero from "@/assets/men-hero.jpg";

// // Sherwani Collection
// import sherwani1 from "@/assets/Men/shirt1.jpeg";
// import sherwani2 from "@/assets/Men/shirt2.jpeg";
// import sherwani3 from "@/assets/Men/shirt3.jpeg";
// import sherwani4 from "@/assets/Men/shirt4.jpeg";
// import sherwani5 from "@/assets/Men/shirt5.jpeg";
// import sherwani6 from "@/assets/Men/shirt6.jpeg";
// import sherwani7 from "@/assets/Men/shirt7.jpeg";
// import sherwani8 from "@/assets/Men/shirt8.jpeg";

// // Coat Pant Collection
// import coatPant1 from "@/assets/Men/shirt9.jpeg";
// import coatPant2 from "@/assets/Men/shirt10.jpeg";
// import coatPant3 from "@/assets/Men/shirt11.jpeg";
// import coatPant4 from "@/assets/Men/shirt12.jpeg";
// import coatPant5 from "@/assets/Men/shirt13.jpeg";
// import coatPant6 from "@/assets/Men/shirt15.jpeg";
// import coatPant7 from "@/assets/Men/shirt10.jpeg";
// import coatPant8 from "@/assets/Men/shirt12.jpeg";

// // Indo Western Collection
// import indoWestern1 from "@/assets/Men/groomcap1.jpeg";
// import indoWestern2 from "@/assets/Men/groomcap2.jpeg";
// import indoWestern3 from "@/assets/Men/groomcap3.jpeg";
// import indoWestern4 from "@/assets/Men/groomcap3.jpeg";
// import indoWestern5 from "@/assets/Men/groomcap5.jpeg";
// import indoWestern6 from "@/assets/Men/groomcap6.jpeg";
// import indoWestern7 from "@/assets/Men/groomcap7.jpeg";
// import indoWestern8 from "@/assets/Men/groomcap8.jpeg";

// // Kurta Pajama Collection
// import kurtaPajama1 from "@/assets/Men/Kurtapajama1.jpeg";
// import kurtaPajama2 from "@/assets/Men/Kurtapajama3.jpeg";
// import kurtaPajama3 from "@/assets/Men/Kurtapajama4.jpeg";
// import kurtaPajama4 from "@/assets/Men/Kurtapajama5.jpeg";
// import kurtaPajama5 from "@/assets/Men/Kurtapajama6.jpeg";
// import kurtaPajama6 from "@/assets/Men/Kurtapajama7.jpeg";
// import kurtaPajama7 from "@/assets/Men/Kurtapajama8.jpeg";
// import kurtaPajama8 from "@/assets/Men/Kurtapajama9.jpeg";

// // Blazer Collection
// import blazer1 from "@/assets/Men/Suit1.jpeg";
// import blazer2 from "@/assets/Men/Suits3.jpeg";
// import blazer3 from "@/assets/Men/Suits4.jpeg";
// import blazer4 from "@/assets/Men/Suits5.jpeg";
// import blazer5 from "@/assets/Men/Suits6.jpeg";
// import blazer6 from "@/assets/Men/Suits7.jpeg";
// import blazer7 from "@/assets/Men/Suits7.jpeg";
// import blazer8 from "@/assets/Men/Suits9.jpeg";

// // Jeans & T-Shirts Collection
// import jeansTshirt1 from "@/assets/Men/shirt1.jpeg";
// import jeansTshirt2 from "@/assets/Men/shirt2.jpeg";
// import jeansTshirt3 from "@/assets/Men/shirt3.jpeg";
// import jeansTshirt4 from "@/assets/Men/shirt4.jpeg";
// import jeansTshirt5 from "@/assets/Men/shirt5.jpeg";
// import jeansTshirt6 from "@/assets/Men/shirt6.jpeg";
// import jeansTshirt7 from "@/assets/Men/shirt7.jpeg";
// import jeansTshirt8 from "@/assets/Men/shirt8.jpeg";

// // Unstitched Collection
// import unstitched1 from "@/assets/Men/unstichedclothes1.jpeg";
// import unstitched2 from "@/assets/Men/unstichedclothes1.jpeg";
// import unstitched3 from "@/assets/Men/unstichedclothes3.jpeg";
// import unstitched4 from "@/assets/Men/unstichedclothes4.jpeg";
// import unstitched5 from "@/assets/Men/unstichedclothes5.jpeg";
// import unstitched6 from "@/assets/Men/unstichedclothes6.jpeg";
// import unstitched7 from "@/assets/Men/unstichedclothes7.jpeg";
// import unstitched8 from "@/assets/Men/unstichedclothes8.jpeg";

// // Winter Collection
// import winter1 from "@/assets/Men/Suit1.jpeg";
// import winter2 from "@/assets/Men/Suits3.jpeg";
// import winter3 from "@/assets/Men/Suits4.jpeg";
// import winter4 from "@/assets/Men/Suits5.jpeg";
// import winter5 from "@/assets/Men/Suits5.jpeg";
// import winter6 from "@/assets/Men/Suits6.jpeg";
// import winter7 from "@/assets/Men/Suits7.jpeg";
// import winter8 from "@/assets/Men/Suits8.jpeg";

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   images: string[];
//   category: string;
//   sizes: string[];
//   colors: string[];
//   price?: string;
// }

// const categories = [
//   { name: "Sherwani", icon: "👑" },
//   { name: "Coat Pant", icon: "🎩" },
//   { name: "Indo Western", icon: "🌏" },
//   { name: "Kurta Pajama", icon: "🧵" },
//   { name: "Blazer", icon: "💼" },
//   { name: "Jeans & T-Shirts", icon: "👖" },
//   { name: "Unstitched Collection", icon: "✂️" },
//   { name: "Winter Collection", icon: "❄️" },
// ];

// // Mock product data with unique images for each product
// const generateProductData = () => ({
//   sherwani: [...Array(8)].map((_, i) => ({
//     id: `sherwani-${i}`,
//     title: [
//       "Royal Wedding Sherwani",
//       "Embroidered Sherwani",
//       "Designer Sherwani",
//       "Premium Sherwani",
//       "Silk Sherwani",
//       "Zari Work Sherwani",
//       "Traditional Sherwani",
//       "Contemporary Sherwani"
//     ][i],
//     description: "Exquisite sherwanis with intricate embroidery and premium fabrics for special occasions.",
//     images: [
//       [sherwani1, sherwani2, sherwani3, sherwani4],
//       [sherwani2, sherwani3, sherwani4, sherwani5],
//       [sherwani3, sherwani4, sherwani5, sherwani6],
//       [sherwani4, sherwani5, sherwani6, sherwani7],
//       [sherwani5, sherwani6, sherwani7, sherwani8],
//       [sherwani6, sherwani7, sherwani8, sherwani1],
//       [sherwani7, sherwani8, sherwani1, sherwani2],
//       [sherwani8, sherwani1, sherwani2, sherwani3],
//     ][i],
//     category: "Sherwani",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Ivory", "Gold", "Maroon", "Navy"],
    
//   })),

//   coatPant: [...Array(8)].map((_, i) => ({
//     id: `coat-pant-${i}`,
//     title: [
//       "Premium Coat Pant",
//       "Designer Suit",
//       "Executive Set",
//       "Formal Coat Pant",
//       "Tailored Suit",
//       "Business Formal",
//       "Luxury Suit",
//       "Classic Coat Pant"
//     ][i],
//     description: "Perfectly tailored coat pant sets for formal occasions and professional settings.",
//     images: [
//       [coatPant1, coatPant2, coatPant3, coatPant4],
//       [coatPant2, coatPant3, coatPant4, coatPant5],
//       [coatPant3, coatPant4, coatPant5, coatPant6],
//       [coatPant4, coatPant5, coatPant6, coatPant7],
//       [coatPant5, coatPant6, coatPant7, coatPant8],
//       [coatPant6, coatPant7, coatPant8, coatPant1],
//       [coatPant7, coatPant8, coatPant1, coatPant2],
//       [coatPant8, coatPant1, coatPant2, coatPant3],
//     ][i],
//     category: "Coat Pant",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Black", "Navy", "Gray", "Brown"],
//     price: "$199-$399"
//   })),

//   indoWestern: [...Array(8)].map((_, i) => ({
//     id: `indo-western-${i}`,
//     title: [
//       "Fusion Wear",
//       "Modern Ethnic",
//       "Contemporary Traditional",
//       "Indo-Western Set",
//       "Designer Fusion",
//       "Urban Ethnic",
//       "Luxury Fusion",
//       "Premium Indo-Western"
//     ][i],
//     description: "Beautiful fusion of traditional Indian and contemporary western fashion elements.",
//     images: [
//       [indoWestern1, indoWestern2, indoWestern3, indoWestern4],
//       [indoWestern2, indoWestern3, indoWestern4, indoWestern5],
//       [indoWestern3, indoWestern4, indoWestern5, indoWestern6],
//       [indoWestern4, indoWestern5, indoWestern6, indoWestern7],
//       [indoWestern5, indoWestern6, indoWestern7, indoWestern8],
//       [indoWestern6, indoWestern7, indoWestern8, indoWestern1],
//       [indoWestern7, indoWestern8, indoWestern1, indoWestern2],
//       [indoWestern8, indoWestern1, indoWestern2, indoWestern3],
//     ][i],
//     category: "Indo Western",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Beige", "Burgundy", "Emerald", "Mustard"],
//     price: "$159-$299"
//   })),

//   kurtaPajama: [...Array(8)].map((_, i) => ({
//     id: `kurta-pajama-${i}`,
//     title: [
//       "Cotton Kurta Set",
//       "Silk Kurta",
//       "Designer Kurta",
//       "Festive Kurta",
//       "Embroidered Kurta",
//       "Traditional Kurta",
//       "Premium Kurta",
//       "Luxury Kurta Set"
//     ][i],
//     description: "Comfortable and stylish kurta pajama sets perfect for traditional and festive occasions.",
//     images: [
//       [kurtaPajama1, kurtaPajama2, kurtaPajama3, kurtaPajama4],
//       [kurtaPajama2, kurtaPajama3, kurtaPajama4, kurtaPajama5],
//       [kurtaPajama3, kurtaPajama4, kurtaPajama5, kurtaPajama6],
//       [kurtaPajama4, kurtaPajama5, kurtaPajama6, kurtaPajama7],
//       [kurtaPajama5, kurtaPajama6, kurtaPajama7, kurtaPajama8],
//       [kurtaPajama6, kurtaPajama7, kurtaPajama8, kurtaPajama1],
//       [kurtaPajama7, kurtaPajama8, kurtaPajama1, kurtaPajama2],
//       [kurtaPajama8, kurtaPajama1, kurtaPajama2, kurtaPajama3],
//     ][i],
//     category: "Kurta Pajama",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["White", "Blue", "Black", "Red"],
//     price: "$79-$199"
//   })),

//   blazer: [...Array(8)].map((_, i) => ({
//     id: `blazer-${i}`,
//     title: [
//       "Single Breasted Blazer",
//       "Double Breasted Blazer",
//       "Designer Blazer",
//       "Casual Blazer",
//       "Formal Blazer",
//       "Linen Blazer",
//       "Wool Blazer",
//       "Designer Blazer"
//     ][i],
//     description: "Stylish blazers that add sophistication to any outfit, perfect for various occasions.",
//     images: [
//       [blazer1, blazer2, blazer3, blazer4],
//       [blazer2, blazer3, blazer4, blazer5],
//       [blazer3, blazer4, blazer5, blazer6],
//       [blazer4, blazer5, blazer6, blazer7],
//       [blazer5, blazer6, blazer7, blazer8],
//       [blazer6, blazer7, blazer8, blazer1],
//       [blazer7, blazer8, blazer1, blazer2],
//       [blazer8, blazer1, blazer2, blazer3],
//     ][i],
//     category: "Blazer",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Gray", "Burgundy"],
//     price: "$129-$299"
//   })),

//   jeansTshirts: [...Array(8)].map((_, i) => ({
//     id: `jeans-tshirts-${i}`,
//     title: [
//       "Denim Jeans",
//       "Cotton T-Shirts",
//       "Casual Combo",
//       "Street Wear",
//       "Designer Jeans",
//       "Premium T-Shirt",
//       "Casual Wear Set",
//       "Urban Collection"
//     ][i],
//     description: "Comfortable jeans and trendy t-shirts for everyday casual wear and outings.",
//     images: [
//       [jeansTshirt1, jeansTshirt2, jeansTshirt3, jeansTshirt4],
//       [jeansTshirt2, jeansTshirt3, jeansTshirt4, jeansTshirt5],
//       [jeansTshirt3, jeansTshirt4, jeansTshirt5, jeansTshirt6],
//       [jeansTshirt4, jeansTshirt5, jeansTshirt6, jeansTshirt7],
//       [jeansTshirt5, jeansTshirt6, jeansTshirt7, jeansTshirt8],
//       [jeansTshirt6, jeansTshirt7, jeansTshirt8, jeansTshirt1],
//       [jeansTshirt7, jeansTshirt8, jeansTshirt1, jeansTshirt2],
//       [jeansTshirt8, jeansTshirt1, jeansTshirt2, jeansTshirt3],
//     ][i],
//     category: "Jeans & T-Shirts",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Blue", "Black", "Gray", "White"],
//     price: "$29-$79"
//   })),

//   unstitched: [...Array(8)].map((_, i) => ({
//     id: `unstitched-${i}`,
//     title: [
//       "Premium Fabric",
//       "Designer Material",
//       "Custom Tailoring",
//       "Luxury Textile",
//       "Cotton Suit Material",
//       "Silk Fabric",
//       "Linen Material",
//       "Designer Textile"
//     ][i],
//     description: "High-quality unstitched fabrics for custom tailoring and personalized outfits.",
//     images: [
//       [unstitched1, unstitched2, unstitched3, unstitched4],
//       [unstitched2, unstitched3, unstitched4, unstitched5],
//       [unstitched3, unstitched4, unstitched5, unstitched6],
//       [unstitched4, unstitched5, unstitched6, unstitched7],
//       [unstitched5, unstitched6, unstitched7, unstitched8],
//       [unstitched6, unstitched7, unstitched8, unstitched1],
//       [unstitched7, unstitched8, unstitched1, unstitched2],
//       [unstitched8, unstitched1, unstitched2, unstitched3],
//     ][i],
//     category: "Unstitched Collection",
//     sizes: ["2.5m", "3m", "3.5m", "4m"],
//     colors: ["Multiple", "Assorted", "Designer Prints"],
//     price: "$49-$149"
//   })),

//   winter: [...Array(8)].map((_, i) => ({
//     id: `winter-${i}`,
//     title: [
//       "Winter Jackets",
//       "Woolen Sweaters",
//       "Thermal Wear",
//       "Winter Collection",
//       "Designer Jacket",
//       "Premium Sweater",
//       "Winter Coat",
//       "Luxury Winter Wear"
//     ][i],
//     description: "Warm and stylish winter clothing to keep you comfortable in cold weather.",
//     images: [
//       [winter1, winter2, winter3, winter4],
//       [winter2, winter3, winter4, winter5],
//       [winter3, winter4, winter5, winter6],
//       [winter4, winter5, winter6, winter7],
//       [winter5, winter6, winter7, winter8],
//       [winter6, winter7, winter8, winter1],
//       [winter7, winter8, winter1, winter2],
//       [winter8, winter1, winter2, winter3],
//     ][i],
//     category: "Winter Collection",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Gray", "Burgundy"],
//     price: "$89-$259"
//   }))
// });

// const MensCollection: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState("Sherwani");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "👑 Sherwani Collection",
//       category: "Sherwani",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.sherwani,
//     },
//     {
//       title: "🎩 Coat Pant Sets",
//       category: "Coat Pant",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.coatPant,
//     },
//     {
//       title: "🌏 Indo Western Fusion",
//       category: "Indo Western",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.indoWestern,
//     },
//     {
//       title: "🧵 Kurta Pajama",
//       category: "Kurta Pajama",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.kurtaPajama,
//     },
//     {
//       title: "💼 Blazer Collection",
//       category: "Blazer",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.blazer,
//     },
//     {
//       title: "👖 Jeans & T-Shirts",
//       category: "Jeans & T-Shirts",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.jeansTshirts,
//     },
//     {
//       title: "✂️ Unstitched Collection",
//       category: "Unstitched Collection",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.unstitched,
//     },
//     {
//       title: "❄️ Winter Collection",
//       category: "Winter Collection",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.winter,
//     },
//   ];

//   const openModal = (product: Product) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === selectedProduct.images.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === 0 ? selectedProduct.images.length - 1 : prev - 1
//       );
//     }
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
//             <span className="text-sm font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
//               PREMIUM COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-pink-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-pink-600 to-slate-800 bg-clip-text text-transparent">
//             Men's Fashion Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-pink-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover sophisticated fashion for the modern gentleman — where elegance meets contemporary 
//             style in every detail and every occasion.
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
//                 className={`relative px-6 py-3 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
//                   activeCategory === cat.name
//                     ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white border-pink-500 shadow-2xl shadow-pink-500/25 scale-105"
//                     : "border-pink-200 bg-white/80 hover:border-pink-300 hover:bg-pink-50 hover:shadow-xl text-pink-700"
//                 }`}
//                 variant="outline"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-500 ${
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
//                     <div className="w-2 h-12 bg-gradient-to-b from-pink-500 to-pink-400 rounded-full"></div>
//                     <div>
//                       <h2 className="font-serif text-4xl font-bold text-slate-800">
//                         {section.title}
//                       </h2>
//                       <p className="text-slate-600 mt-1">
//                         {section.products.length} premium items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-pink-600 text-white border border-pink-600 hover:bg-pink-700 hover:border-pink-700 rounded-xl px-6 py-2 transition-all duration-300">
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
//                                 ? "border-pink-500 shadow-md"
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
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default MensCollection;






// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Import all your actual men's collection images
// import menHero from "@/assets/men-hero.jpg";

// // Sherwani Collection
// import sherwani1 from "@/assets/Men/Kurtapajama1.jpeg";
// import sherwani2 from "@/assets/Men/Kurtapajama3.jpeg";
// import sherwani3 from "@/assets/Men/Kurtapajama4.jpeg";
// import sherwani4 from "@/assets/Men/Kurtapajama5.jpeg";
// import sherwani5 from "@/assets/Men/Kurtapajama6.jpeg";
// import sherwani6 from "@/assets/Men/Kurtapajama7.jpeg";
// import sherwani7 from "@/assets/Men/Kurtapajama8.jpeg";
// import sherwani8 from "@/assets/Men/Kurtapajama9.jpeg";

// // Coat Pant Collection
// import coatPant1 from "@/assets/Men/coatpant1.jpeg";
// import coatPant2 from "@/assets/Men/coatpant2.jpeg";
// import coatPant3 from "@/assets/Men/coatpant3.jpeg";
// import coatPant4 from "@/assets/Men/coatpant4.jpeg";
// import coatPant5 from "@/assets/Men/coatpant5.jpeg";
// import coatPant6 from "@/assets/Men/coatpant6.jpeg";
// import coatPant7 from "@/assets/Men/coatpant1.jpeg";
// import coatPant8 from "@/assets/Men/coatpant2.jpeg";

// // Indo Western Collection
// import indoWestern1 from "@/assets/Men/indowestern1.jpeg";
// import indoWestern2 from "@/assets/Men/indowestern2.jpeg";
// import indoWestern3 from "@/assets/Men/indowestern3.jpeg";
// import indoWestern4 from "@/assets/Men/indowestern4.jpeg";
// import indoWestern5 from "@/assets/Men/indowestern5.jpeg";
// import indoWestern6 from "@/assets/Men/indowestern6.jpeg";
// import indoWestern7 from "@/assets/Men/indowestern7.jpeg";
// import indoWestern8 from "@/assets/Men/indowestern8.jpeg";

// // Kurta Pajama Collection
// import kurtaPajama1 from "@/assets/Men/Kurtapajama1.jpeg";
// import kurtaPajama2 from "@/assets/Men/Kurtapajama3.jpeg";
// import kurtaPajama3 from "@/assets/Men/Kurtapajama4.jpeg";
// import kurtaPajama4 from "@/assets/Men/Kurtapajama5.jpeg";
// import kurtaPajama5 from "@/assets/Men/Kurtapajama6.jpeg";
// import kurtaPajama6 from "@/assets/Men/Kurtapajama7.jpeg";
// import kurtaPajama7 from "@/assets/Men/Kurtapajama8.jpeg";
// import kurtaPajama8 from "@/assets/Men/Kurtapajama9.jpeg";

// // Blazer Collection
// import blazer1 from "@/assets/Men/blazercollection1.jpeg";
// import blazer2 from "@/assets/Men/blazercollection2.jpeg";
// import blazer3 from "@/assets/Men/blazercollection3.jpeg";
// import blazer4 from "@/assets/Men/blazercollection4.jpeg";
// import blazer5 from "@/assets/Men/blazercollection5.jpeg";
// import blazer6 from "@/assets/Men/blazercollection6.jpeg";
// import blazer7 from "@/assets/Men/blazercollection7.jpeg";
// import blazer8 from "@/assets/Men/blazercollection1.jpeg";

// // Jeans & T-Shirts Collection
// import jeansTshirt1 from "@/assets/Men/Jeans1.jpeg";
// import jeansTshirt2 from "@/assets/Men/Jeans2.jpeg";
// import jeansTshirt3 from "@/assets/Men/Jeans3.jpeg";
// import jeansTshirt4 from "@/assets/Men/Jeans5.jpeg";
// import jeansTshirt5 from "@/assets/Men/Jeans1.jpeg";
// import jeansTshirt6 from "@/assets/Men/Jeans2.jpeg";
// import jeansTshirt7 from "@/assets/Men/Jeans3.jpeg";
// import jeansTshirt8 from "@/assets/Men/Jeans5.jpeg";

// // Unstitched Collection
// import unstitched1 from "@/assets/Men/unstichedclothes1.jpeg";
// import unstitched2 from "@/assets/Men/unstichedclothes1.jpeg";
// import unstitched3 from "@/assets/Men/unstichedclothes3.jpeg";
// import unstitched4 from "@/assets/Men/unstichedclothes4.jpeg";
// import unstitched5 from "@/assets/Men/unstichedclothes5.jpeg";
// import unstitched6 from "@/assets/Men/unstichedclothes6.jpeg";
// import unstitched7 from "@/assets/Men/unstichedclothes7.jpeg";
// import unstitched8 from "@/assets/Men/unstichedclothes8.jpeg";

// // Winter Collection
// import winter1 from "@/assets/Men/woolencollection1.jpeg";
// import winter2 from "@/assets/Men/woolencollection2.jpeg";
// import winter3 from "@/assets/Men/woolencollection3.jpeg";
// import winter4 from "@/assets/Men/woolencollection4.jpeg";
// import winter5 from "@/assets/Men/woolencollection5.jpeg";
// import winter6 from "@/assets/Men/woolencollection6.jpeg";
// import winter7 from "@/assets/Men/woolencollection7.jpeg";
// import winter8 from "@/assets/Men/woolencollection8.jpeg";

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   images: string[];
//   category: string;
//   sizes: string[];
//   colors: string[];
//   price?: string;
// }

// const categories = [
//   { name: "Sherwani", icon: "👑" },
//   { name: "Coat Pant", icon: "🎩" },
//   { name: "Indo Western", icon: "🌏" },
//   { name: "Kurta Pajama", icon: "🧵" },
//   { name: "Blazer", icon: "💼" },
//   { name: "Jeans & T-Shirts", icon: "👖" },
//   { name: "Unstitched Collection", icon: "✂️" },
//   { name: "Winter Collection", icon: "❄️" },
// ];

// // Mock product data with unique images for each product
// const generateProductData = () => ({
//   sherwani: [...Array(8)].map((_, i) => ({
//     id: `sherwani-${i}`,
//     title: [
//       "Royal Wedding Sherwani",
//       "Embroidered Sherwani",
//       "Designer Sherwani",
//       "Premium Sherwani",
//       "Silk Sherwani",
//       "Zari Work Sherwani",
//       "Traditional Sherwani",
//       "Contemporary Sherwani"
//     ][i],
//     description: "Exquisite sherwanis with intricate embroidery and premium fabrics for special occasions.",
//     images: [
//       [sherwani1, sherwani2, sherwani3, sherwani4],
//       [sherwani2, sherwani3, sherwani4, sherwani5],
//       [sherwani3, sherwani4, sherwani5, sherwani6],
//       [sherwani4, sherwani5, sherwani6, sherwani7],
//       [sherwani5, sherwani6, sherwani7, sherwani8],
//       [sherwani6, sherwani7, sherwani8, sherwani1],
//       [sherwani7, sherwani8, sherwani1, sherwani2],
//       [sherwani8, sherwani1, sherwani2, sherwani3],
//     ][i],
//     category: "Sherwani",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Ivory", "Gold", "Maroon", "Navy"],
    
//   })),

//   coatPant: [...Array(8)].map((_, i) => ({
//     id: `coat-pant-${i}`,
//     title: [
//       "Premium Coat Pant",
//       "Designer Suit",
//       "Executive Set",
//       "Formal Coat Pant",
//       "Tailored Suit",
//       "Business Formal",
//       "Luxury Suit",
//       "Classic Coat Pant"
//     ][i],
//     description: "Perfectly tailored coat pant sets for formal occasions and professional settings.",
//     images: [
//       [coatPant1, coatPant2, coatPant3, coatPant4],
//       [coatPant2, coatPant3, coatPant4, coatPant5],
//       [coatPant3, coatPant4, coatPant5, coatPant6],
//       [coatPant4, coatPant5, coatPant6, coatPant7],
//       [coatPant5, coatPant6, coatPant7, coatPant8],
//       [coatPant6, coatPant7, coatPant8, coatPant1],
//       [coatPant7, coatPant8, coatPant1, coatPant2],
//       [coatPant8, coatPant1, coatPant2, coatPant3],
//     ][i],
//     category: "Coat Pant",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Black", "Navy", "Gray", "Brown"],
//     price: "$199-$399"
//   })),

//   indoWestern: [...Array(8)].map((_, i) => ({
//     id: `indo-western-${i}`,
//     title: [
//       "Fusion Wear",
//       "Modern Ethnic",
//       "Contemporary Traditional",
//       "Indo-Western Set",
//       "Designer Fusion",
//       "Urban Ethnic",
//       "Luxury Fusion",
//       "Premium Indo-Western"
//     ][i],
//     description: "Beautiful fusion of traditional Indian and contemporary western fashion elements.",
//     images: [
//       [indoWestern1, indoWestern2, indoWestern3, indoWestern4],
//       [indoWestern2, indoWestern3, indoWestern4, indoWestern5],
//       [indoWestern3, indoWestern4, indoWestern5, indoWestern6],
//       [indoWestern4, indoWestern5, indoWestern6, indoWestern7],
//       [indoWestern5, indoWestern6, indoWestern7, indoWestern8],
//       [indoWestern6, indoWestern7, indoWestern8, indoWestern1],
//       [indoWestern7, indoWestern8, indoWestern1, indoWestern2],
//       [indoWestern8, indoWestern1, indoWestern2, indoWestern3],
//     ][i],
//     category: "Indo Western",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Beige", "Burgundy", "Emerald", "Mustard"],
//     price: "$159-$299"
//   })),

//   kurtaPajama: [...Array(8)].map((_, i) => ({
//     id: `kurta-pajama-${i}`,
//     title: [
//       "Cotton Kurta Set",
//       "Silk Kurta",
//       "Designer Kurta",
//       "Festive Kurta",
//       "Embroidered Kurta",
//       "Traditional Kurta",
//       "Premium Kurta",
//       "Luxury Kurta Set"
//     ][i],
//     description: "Comfortable and stylish kurta pajama sets perfect for traditional and festive occasions.",
//     images: [
//       [kurtaPajama1, kurtaPajama2, kurtaPajama3, kurtaPajama4],
//       [kurtaPajama2, kurtaPajama3, kurtaPajama4, kurtaPajama5],
//       [kurtaPajama3, kurtaPajama4, kurtaPajama5, kurtaPajama6],
//       [kurtaPajama4, kurtaPajama5, kurtaPajama6, kurtaPajama7],
//       [kurtaPajama5, kurtaPajama6, kurtaPajama7, kurtaPajama8],
//       [kurtaPajama6, kurtaPajama7, kurtaPajama8, kurtaPajama1],
//       [kurtaPajama7, kurtaPajama8, kurtaPajama1, kurtaPajama2],
//       [kurtaPajama8, kurtaPajama1, kurtaPajama2, kurtaPajama3],
//     ][i],
//     category: "Kurta Pajama",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["White", "Blue", "Black", "Red"],
//     price: "$79-$199"
//   })),

//   blazer: [...Array(8)].map((_, i) => ({
//     id: `blazer-${i}`,
//     title: [
//       "Single Breasted Blazer",
//       "Double Breasted Blazer",
//       "Designer Blazer",
//       "Casual Blazer",
//       "Formal Blazer",
//       "Linen Blazer",
//       "Wool Blazer",
//       "Designer Blazer"
//     ][i],
//     description: "Stylish blazers that add sophistication to any outfit, perfect for various occasions.",
//     images: [
//       [blazer1, blazer2, blazer3, blazer4],
//       [blazer2, blazer3, blazer4, blazer5],
//       [blazer3, blazer4, blazer5, blazer6],
//       [blazer4, blazer5, blazer6, blazer7],
//       [blazer5, blazer6, blazer7, blazer8],
//       [blazer6, blazer7, blazer8, blazer1],
//       [blazer7, blazer8, blazer1, blazer2],
//       [blazer8, blazer1, blazer2, blazer3],
//     ][i],
//     category: "Blazer",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Gray", "Burgundy"],
//     price: "$129-$299"
//   })),

//   jeansTshirts: [...Array(8)].map((_, i) => ({
//     id: `jeans-tshirts-${i}`,
//     title: [
//       "Denim Jeans",
//       "Cotton T-Shirts",
//       "Casual Combo",
//       "Street Wear",
//       "Designer Jeans",
//       "Premium T-Shirt",
//       "Casual Wear Set",
//       "Urban Collection"
//     ][i],
//     description: "Comfortable jeans and trendy t-shirts for everyday casual wear and outings.",
//     images: [
//       [jeansTshirt1, jeansTshirt2, jeansTshirt3, jeansTshirt4],
//       [jeansTshirt2, jeansTshirt3, jeansTshirt4, jeansTshirt5],
//       [jeansTshirt3, jeansTshirt4, jeansTshirt5, jeansTshirt6],
//       [jeansTshirt4, jeansTshirt5, jeansTshirt6, jeansTshirt7],
//       [jeansTshirt5, jeansTshirt6, jeansTshirt7, jeansTshirt8],
//       [jeansTshirt6, jeansTshirt7, jeansTshirt8, jeansTshirt1],
//       [jeansTshirt7, jeansTshirt8, jeansTshirt1, jeansTshirt2],
//       [jeansTshirt8, jeansTshirt1, jeansTshirt2, jeansTshirt3],
//     ][i],
//     category: "Jeans & T-Shirts",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Blue", "Black", "Gray", "White"],
//     price: "$29-$79"
//   })),

//   unstitched: [...Array(8)].map((_, i) => ({
//     id: `unstitched-${i}`,
//     title: [
//       "Premium Fabric",
//       "Designer Material",
//       "Custom Tailoring",
//       "Luxury Textile",
//       "Cotton Suit Material",
//       "Silk Fabric",
//       "Linen Material",
//       "Designer Textile"
//     ][i],
//     description: "High-quality unstitched fabrics for custom tailoring and personalized outfits.",
//     images: [
//       [unstitched1, unstitched2, unstitched3, unstitched4],
//       [unstitched2, unstitched3, unstitched4, unstitched5],
//       [unstitched3, unstitched4, unstitched5, unstitched6],
//       [unstitched4, unstitched5, unstitched6, unstitched7],
//       [unstitched5, unstitched6, unstitched7, unstitched8],
//       [unstitched6, unstitched7, unstitched8, unstitched1],
//       [unstitched7, unstitched8, unstitched1, unstitched2],
//       [unstitched8, unstitched1, unstitched2, unstitched3],
//     ][i],
//     category: "Unstitched Collection",
//     sizes: ["2.5m", "3m", "3.5m", "4m"],
//     colors: ["Multiple", "Assorted", "Designer Prints"],
//     price: "$49-$149"
//   })),

//   winter: [...Array(8)].map((_, i) => ({
//     id: `winter-${i}`,
//     title: [
//       "Winter Jackets",
//       "Woolen Sweaters",
//       "Thermal Wear",
//       "Winter Collection",
//       "Designer Jacket",
//       "Premium Sweater",
//       "Winter Coat",
//       "Luxury Winter Wear"
//     ][i],
//     description: "Warm and stylish winter clothing to keep you comfortable in cold weather.",
//     images: [
//       [winter1, winter2, winter3, winter4],
//       [winter2, winter3, winter4, winter5],
//       [winter3, winter4, winter5, winter6],
//       [winter4, winter5, winter6, winter7],
//       [winter5, winter6, winter7, winter8],
//       [winter6, winter7, winter8, winter1],
//       [winter7, winter8, winter1, winter2],
//       [winter8, winter1, winter2, winter3],
//     ][i],
//     category: "Winter Collection",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Gray", "Burgundy"],
//     price: "$89-$259"
//   }))
// });

// const MensCollection: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState("Sherwani");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "👑 Sherwani Collection",
//       category: "Sherwani",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.sherwani,
//     },
//     {
//       title: "🎩 Coat Pant Sets",
//       category: "Coat Pant",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.coatPant,
//     },
//     {
//       title: "🌏 Indo Western Fusion",
//       category: "Indo Western",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.indoWestern,
//     },
//     {
//       title: "🧵 Kurta Pajama",
//       category: "Kurta Pajama",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.kurtaPajama,
//     },
//     {
//       title: "💼 Blazer Collection",
//       category: "Blazer",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.blazer,
//     },
//     {
//       title: "👖 Jeans & T-Shirts",
//       category: "Jeans & T-Shirts",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.jeansTshirts,
//     },
//     {
//       title: "✂️ Unstitched Collection",
//       category: "Unstitched Collection",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.unstitched,
//     },
//     {
//       title: "❄️ Winter Collection",
//       category: "Winter Collection",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.winter,
//     },
//   ];

//   const openModal = (product: Product) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === selectedProduct.images.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === 0 ? selectedProduct.images.length - 1 : prev - 1
//       );
//     }
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
//             <span className="text-sm font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
//               PREMIUM COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-pink-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-pink-600 to-slate-800 bg-clip-text text-transparent">
//             Men's Fashion Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-pink-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover sophisticated fashion for the modern gentleman — where elegance meets contemporary 
//             style in every detail and every occasion.
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
//                 className={`relative px-6 py-3 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
//                   activeCategory === cat.name
//                     ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white border-pink-500 shadow-2xl shadow-pink-500/25 scale-105"
//                     : "border-pink-200 bg-white/80 hover:border-pink-300 hover:bg-pink-50 hover:shadow-xl text-pink-700"
//                 }`}
//                 variant="outline"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-500 ${
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
//                     <div className="w-2 h-12 bg-gradient-to-b from-pink-500 to-pink-400 rounded-full"></div>
//                     <div>
//                       <h2 className="font-serif text-4xl font-bold text-slate-800">
//                         {section.title}
//                       </h2>
//                       <p className="text-slate-600 mt-1">
//                         {section.products.length} premium items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-pink-600 text-white border border-pink-600 hover:bg-pink-700 hover:border-pink-700 rounded-xl px-6 py-2 transition-all duration-300">
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
//                                 ? "border-pink-500 shadow-md"
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
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default MensCollection;







// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Import all your actual men's collection images
// import menHero from "@/assets/men-hero.jpg";

// // Sherwani Collection
// import sherwani1 from "@/assets/Men/Kurtapajama1.jpeg";
// import sherwani2 from "@/assets/Men/Kurtapajama3.jpeg";
// import sherwani3 from "@/assets/Men/Kurtapajama4.jpeg";
// import sherwani4 from "@/assets/Men/Kurtapajama5.jpeg";
// import sherwani5 from "@/assets/Men/Kurtapajama6.jpeg";
// import sherwani6 from "@/assets/Men/Kurtapajama7.jpeg";
// import sherwani7 from "@/assets/Men/Kurtapajama8.jpeg";
// import sherwani8 from "@/assets/Men/Kurtapajama9.jpeg";

// // Coat Pant Collection
// import coatPant1 from "@/assets/Men/coatpant1.jpeg";
// import coatPant2 from "@/assets/Men/coatpant2.jpeg";
// import coatPant3 from "@/assets/Men/coatpant3.jpeg";
// import coatPant4 from "@/assets/Men/coatpant4.jpeg";
// import coatPant5 from "@/assets/Men/coatpant5.jpeg";
// import coatPant6 from "@/assets/Men/coatpant6.jpeg";
// import coatPant7 from "@/assets/Men/coatpant1.jpeg";
// import coatPant8 from "@/assets/Men/coatpant2.jpeg";

// // Indo Western Collection
// import indoWestern1 from "@/assets/Men/indowestern1.jpeg";
// import indoWestern2 from "@/assets/Men/indowestern2.jpeg";
// import indoWestern3 from "@/assets/Men/indowestern3.jpeg";
// import indoWestern4 from "@/assets/Men/indowestern4.jpeg";
// import indoWestern5 from "@/assets/Men/indowestern5.jpeg";
// import indoWestern6 from "@/assets/Men/indowestern6.jpeg";
// import indoWestern7 from "@/assets/Men/indowestern7.jpeg";
// import indoWestern8 from "@/assets/Men/indowestern8.jpeg";

// // Kurta Pajama Collection
// import kurtaPajama1 from "@/assets/Men/Kurtapajama1.jpeg";
// import kurtaPajama2 from "@/assets/Men/Kurtapajama3.jpeg";
// import kurtaPajama3 from "@/assets/Men/Kurtapajama4.jpeg";
// import kurtaPajama4 from "@/assets/Men/Kurtapajama5.jpeg";
// import kurtaPajama5 from "@/assets/Men/Kurtapajama6.jpeg";
// import kurtaPajama6 from "@/assets/Men/Kurtapajama7.jpeg";
// import kurtaPajama7 from "@/assets/Men/Kurtapajama8.jpeg";
// import kurtaPajama8 from "@/assets/Men/Kurtapajama9.jpeg";

// // Blazer Collection
// import blazer1 from "@/assets/Men/blazercollection1.jpeg";
// import blazer2 from "@/assets/Men/blazercollection2.jpeg";
// import blazer3 from "@/assets/Men/blazercollection3.jpeg";
// import blazer4 from "@/assets/Men/blazercollection4.jpeg";
// import blazer5 from "@/assets/Men/blazercollection5.jpeg";
// import blazer6 from "@/assets/Men/blazercollection6.jpeg";
// import blazer7 from "@/assets/Men/blazercollection7.jpeg";
// import blazer8 from "@/assets/Men/blazercollection1.jpeg";

// // Jeans & T-Shirts Collection
// import jeansTshirt1 from "@/assets/Men/Jeans1.jpeg";
// import jeansTshirt2 from "@/assets/Men/Jeans2.jpeg";
// import jeansTshirt3 from "@/assets/Men/Jeans3.jpeg";
// import jeansTshirt4 from "@/assets/Men/Jeans5.jpeg";
// import jeansTshirt5 from "@/assets/Men/Jeans1.jpeg";
// import jeansTshirt6 from "@/assets/Men/Jeans2.jpeg";
// import jeansTshirt7 from "@/assets/Men/Jeans3.jpeg";
// import jeansTshirt8 from "@/assets/Men/Jeans5.jpeg";

// // Shirts Collection - Add your shirt images here
// import shirt1 from "@/assets/Men/shirt1.jpeg";
// import shirt2 from "@/assets/Men/shirt2.jpeg";
// import shirt3 from "@/assets/Men/shirt3.jpeg";
// import shirt4 from "@/assets/Men/shirt4.jpeg";
// import shirt5 from "@/assets/Men/shirt5.jpeg";
// import shirt6 from "@/assets/Men/shirt6.jpeg";
// import shirt7 from "@/assets/Men/shirt7.jpeg";
// import shirt8 from "@/assets/Men/shirt8.jpeg";

// // Unstitched Collection
// import unstitched1 from "@/assets/Men/unstichedclothes1.jpeg";
// import unstitched2 from "@/assets/Men/unstichedclothes1.jpeg";
// import unstitched3 from "@/assets/Men/unstichedclothes3.jpeg";
// import unstitched4 from "@/assets/Men/unstichedclothes4.jpeg";
// import unstitched5 from "@/assets/Men/unstichedclothes5.jpeg";
// import unstitched6 from "@/assets/Men/unstichedclothes6.jpeg";
// import unstitched7 from "@/assets/Men/unstichedclothes7.jpeg";
// import unstitched8 from "@/assets/Men/unstichedclothes8.jpeg";

// // Winter Collection
// import winter1 from "@/assets/Men/woolencollection1.jpeg";
// import winter2 from "@/assets/Men/woolencollection2.jpeg";
// import winter3 from "@/assets/Men/woolencollection3.jpeg";
// import winter4 from "@/assets/Men/woolencollection4.jpeg";
// import winter5 from "@/assets/Men/woolencollection5.jpeg";
// import winter6 from "@/assets/Men/woolencollection6.jpeg";
// import winter7 from "@/assets/Men/woolencollection7.jpeg";
// import winter8 from "@/assets/Men/woolencollection8.jpeg";

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   images: string[];
//   category: string;
//   sizes: string[];
//   colors: string[];
//   price?: string;
// }

// const categories = [
//   { name: "Sherwani", icon: "👑" },
//   { name: "Coat Pant", icon: "🎩" },
//   { name: "Indo Western", icon: "🌏" },
//   { name: "Kurta Pajama", icon: "🧵" },
//   { name: "Blazer", icon: "💼" },
//   { name: "Shirts", icon: "👔" }, // Added Shirts category
//   { name: "Jeans & T-Shirts", icon: "👖" },
//   { name: "Unstitched Collection", icon: "✂️" },
//   { name: "Winter Collection", icon: "❄️" },
// ];

// // Mock product data with unique images for each product
// const generateProductData = () => ({
//   sherwani: [...Array(8)].map((_, i) => ({
//     id: `sherwani-${i}`,
//     title: [
//       "Royal Wedding Sherwani",
//       "Embroidered Sherwani",
//       "Designer Sherwani",
//       "Premium Sherwani",
//       "Silk Sherwani",
//       "Zari Work Sherwani",
//       "Traditional Sherwani",
//       "Contemporary Sherwani"
//     ][i],
//     description: "Exquisite sherwanis with intricate embroidery and premium fabrics for special occasions.",
//     images: [
//       [sherwani1, sherwani2, sherwani3, sherwani4],
//       [sherwani2, sherwani3, sherwani4, sherwani5],
//       [sherwani3, sherwani4, sherwani5, sherwani6],
//       [sherwani4, sherwani5, sherwani6, sherwani7],
//       [sherwani5, sherwani6, sherwani7, sherwani8],
//       [sherwani6, sherwani7, sherwani8, sherwani1],
//       [sherwani7, sherwani8, sherwani1, sherwani2],
//       [sherwani8, sherwani1, sherwani2, sherwani3],
//     ][i],
//     category: "Sherwani",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Ivory", "Gold", "Maroon", "Navy"],
    
//   })),

//   coatPant: [...Array(8)].map((_, i) => ({
//     id: `coat-pant-${i}`,
//     title: [
//       "Premium Coat Pant",
//       "Designer Suit",
//       "Executive Set",
//       "Formal Coat Pant",
//       "Tailored Suit",
//       "Business Formal",
//       "Luxury Suit",
//       "Classic Coat Pant"
//     ][i],
//     description: "Perfectly tailored coat pant sets for formal occasions and professional settings.",
//     images: [
//       [coatPant1, coatPant2, coatPant3, coatPant4],
//       [coatPant2, coatPant3, coatPant4, coatPant5],
//       [coatPant3, coatPant4, coatPant5, coatPant6],
//       [coatPant4, coatPant5, coatPant6, coatPant7],
//       [coatPant5, coatPant6, coatPant7, coatPant8],
//       [coatPant6, coatPant7, coatPant8, coatPant1],
//       [coatPant7, coatPant8, coatPant1, coatPant2],
//       [coatPant8, coatPant1, coatPant2, coatPant3],
//     ][i],
//     category: "Coat Pant",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Black", "Navy", "Gray", "Brown"],
//     price: "$199-$399"
//   })),

//   indoWestern: [...Array(8)].map((_, i) => ({
//     id: `indo-western-${i}`,
//     title: [
//       "Fusion Wear",
//       "Modern Ethnic",
//       "Contemporary Traditional",
//       "Indo-Western Set",
//       "Designer Fusion",
//       "Urban Ethnic",
//       "Luxury Fusion",
//       "Premium Indo-Western"
//     ][i],
//     description: "Beautiful fusion of traditional Indian and contemporary western fashion elements.",
//     images: [
//       [indoWestern1, indoWestern2, indoWestern3, indoWestern4],
//       [indoWestern2, indoWestern3, indoWestern4, indoWestern5],
//       [indoWestern3, indoWestern4, indoWestern5, indoWestern6],
//       [indoWestern4, indoWestern5, indoWestern6, indoWestern7],
//       [indoWestern5, indoWestern6, indoWestern7, indoWestern8],
//       [indoWestern6, indoWestern7, indoWestern8, indoWestern1],
//       [indoWestern7, indoWestern8, indoWestern1, indoWestern2],
//       [indoWestern8, indoWestern1, indoWestern2, indoWestern3],
//     ][i],
//     category: "Indo Western",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Beige", "Burgundy", "Emerald", "Mustard"],
//     price: "$159-$299"
//   })),

//   kurtaPajama: [...Array(8)].map((_, i) => ({
//     id: `kurta-pajama-${i}`,
//     title: [
//       "Cotton Kurta Set",
//       "Silk Kurta",
//       "Designer Kurta",
//       "Festive Kurta",
//       "Embroidered Kurta",
//       "Traditional Kurta",
//       "Premium Kurta",
//       "Luxury Kurta Set"
//     ][i],
//     description: "Comfortable and stylish kurta pajama sets perfect for traditional and festive occasions.",
//     images: [
//       [kurtaPajama1, kurtaPajama2, kurtaPajama3, kurtaPajama4],
//       [kurtaPajama2, kurtaPajama3, kurtaPajama4, kurtaPajama5],
//       [kurtaPajama3, kurtaPajama4, kurtaPajama5, kurtaPajama6],
//       [kurtaPajama4, kurtaPajama5, kurtaPajama6, kurtaPajama7],
//       [kurtaPajama5, kurtaPajama6, kurtaPajama7, kurtaPajama8],
//       [kurtaPajama6, kurtaPajama7, kurtaPajama8, kurtaPajama1],
//       [kurtaPajama7, kurtaPajama8, kurtaPajama1, kurtaPajama2],
//       [kurtaPajama8, kurtaPajama1, kurtaPajama2, kurtaPajama3],
//     ][i],
//     category: "Kurta Pajama",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["White", "Blue", "Black", "Red"],
//     price: "$79-$199"
//   })),

//   blazer: [...Array(8)].map((_, i) => ({
//     id: `blazer-${i}`,
//     title: [
//       "Single Breasted Blazer",
//       "Double Breasted Blazer",
//       "Designer Blazer",
//       "Casual Blazer",
//       "Formal Blazer",
//       "Linen Blazer",
//       "Wool Blazer",
//       "Designer Blazer"
//     ][i],
//     description: "Stylish blazers that add sophistication to any outfit, perfect for various occasions.",
//     images: [
//       [blazer1, blazer2, blazer3, blazer4],
//       [blazer2, blazer3, blazer4, blazer5],
//       [blazer3, blazer4, blazer5, blazer6],
//       [blazer4, blazer5, blazer6, blazer7],
//       [blazer5, blazer6, blazer7, blazer8],
//       [blazer6, blazer7, blazer8, blazer1],
//       [blazer7, blazer8, blazer1, blazer2],
//       [blazer8, blazer1, blazer2, blazer3],
//     ][i],
//     category: "Blazer",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Gray", "Burgundy"],
//     price: "$129-$299"
//   })),

//   // Added Shirts Collection
//   shirts: [...Array(8)].map((_, i) => ({
//     id: `shirts-${i}`,
//     title: [
//       "Formal Cotton Shirt",
//       "Designer Casual Shirt",
//       "Premium Linen Shirt",
//       "Slim Fit Shirt",
//       "Office Formal Shirt",
//       "Party Wear Shirt",
//       "Classic Fit Shirt",
//       "Designer Printed Shirt"
//     ][i],
//     description: "Premium quality shirts for formal and casual occasions, available in various fits and fabrics.",
//     images: [
//       [shirt1, shirt2, shirt3, shirt4],
//       [shirt2, shirt3, shirt4, shirt5],
//       [shirt3, shirt4, shirt5, shirt6],
//       [shirt4, shirt5, shirt6, shirt7],
//       [shirt5, shirt6, shirt7, shirt8],
//       [shirt6, shirt7, shirt8, shirt1],
//       [shirt7, shirt8, shirt1, shirt2],
//       [shirt8, shirt1, shirt2, shirt3],
//     ][i],
//     category: "Shirts",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["White", "Blue", "Black", "Pink", "Gray"],
//     price: "$39-$129"
//   })),

//   jeansTshirts: [...Array(8)].map((_, i) => ({
//     id: `jeans-tshirts-${i}`,
//     title: [
//       "Denim Jeans",
//       "Cotton T-Shirts",
//       "Casual Combo",
//       "Street Wear",
//       "Designer Jeans",
//       "Premium T-Shirt",
//       "Casual Wear Set",
//       "Urban Collection"
//     ][i],
//     description: "Comfortable jeans and trendy t-shirts for everyday casual wear and outings.",
//     images: [
//       [jeansTshirt1, jeansTshirt2, jeansTshirt3, jeansTshirt4],
//       [jeansTshirt2, jeansTshirt3, jeansTshirt4, jeansTshirt5],
//       [jeansTshirt3, jeansTshirt4, jeansTshirt5, jeansTshirt6],
//       [jeansTshirt4, jeansTshirt5, jeansTshirt6, jeansTshirt7],
//       [jeansTshirt5, jeansTshirt6, jeansTshirt7, jeansTshirt8],
//       [jeansTshirt6, jeansTshirt7, jeansTshirt8, jeansTshirt1],
//       [jeansTshirt7, jeansTshirt8, jeansTshirt1, jeansTshirt2],
//       [jeansTshirt8, jeansTshirt1, jeansTshirt2, jeansTshirt3],
//     ][i],
//     category: "Jeans & T-Shirts",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Blue", "Black", "Gray", "White"],
//     price: "$29-$79"
//   })),

//   unstitched: [...Array(8)].map((_, i) => ({
//     id: `unstitched-${i}`,
//     title: [
//       "Premium Fabric",
//       "Designer Material",
//       "Custom Tailoring",
//       "Luxury Textile",
//       "Cotton Suit Material",
//       "Silk Fabric",
//       "Linen Material",
//       "Designer Textile"
//     ][i],
//     description: "High-quality unstitched fabrics for custom tailoring and personalized outfits.",
//     images: [
//       [unstitched1, unstitched2, unstitched3, unstitched4],
//       [unstitched2, unstitched3, unstitched4, unstitched5],
//       [unstitched3, unstitched4, unstitched5, unstitched6],
//       [unstitched4, unstitched5, unstitched6, unstitched7],
//       [unstitched5, unstitched6, unstitched7, unstitched8],
//       [unstitched6, unstitched7, unstitched8, unstitched1],
//       [unstitched7, unstitched8, unstitched1, unstitched2],
//       [unstitched8, unstitched1, unstitched2, unstitched3],
//     ][i],
//     category: "Unstitched Collection",
//     sizes: ["2.5m", "3m", "3.5m", "4m"],
//     colors: ["Multiple", "Assorted", "Designer Prints"],
//     price: "$49-$149"
//   })),

//   winter: [...Array(8)].map((_, i) => ({
//     id: `winter-${i}`,
//     title: [
//       "Winter Jackets",
//       "Woolen Sweaters",
//       "Thermal Wear",
//       "Winter Collection",
//       "Designer Jacket",
//       "Premium Sweater",
//       "Winter Coat",
//       "Luxury Winter Wear"
//     ][i],
//     description: "Warm and stylish winter clothing to keep you comfortable in cold weather.",
//     images: [
//       [winter1, winter2, winter3, winter4],
//       [winter2, winter3, winter4, winter5],
//       [winter3, winter4, winter5, winter6],
//       [winter4, winter5, winter6, winter7],
//       [winter5, winter6, winter7, winter8],
//       [winter6, winter7, winter8, winter1],
//       [winter7, winter8, winter1, winter2],
//       [winter8, winter1, winter2, winter3],
//     ][i],
//     category: "Winter Collection",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Gray", "Burgundy"],
//     price: "$89-$259"
//   }))
// });

// const MensCollection: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState("Sherwani");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "👑 Sherwani Collection",
//       category: "Sherwani",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.sherwani,
//     },
//     {
//       title: "🎩 Coat Pant Sets",
//       category: "Coat Pant",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.coatPant,
//     },
//     {
//       title: "🌏 Indo Western Fusion",
//       category: "Indo Western",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.indoWestern,
//     },
//     {
//       title: "🧵 Kurta Pajama",
//       category: "Kurta Pajama",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.kurtaPajama,
//     },
//     {
//       title: "💼 Blazer Collection",
//       category: "Blazer",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.blazer,
//     },
//     {
//       title: "👔 Shirts Collection", // Added Shirts section
//       category: "Shirts",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.shirts,
//     },
//     {
//       title: "👖 Jeans & T-Shirts",
//       category: "Jeans & T-Shirts",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.jeansTshirts,
//     },
//     {
//       title: "✂️ Unstitched Collection",
//       category: "Unstitched Collection",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.unstitched,
//     },
//     {
//       title: "❄️ Winter Collection",
//       category: "Winter Collection",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.winter,
//     },
//   ];

//   const openModal = (product: Product) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === selectedProduct.images.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === 0 ? selectedProduct.images.length - 1 : prev - 1
//       );
//     }
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
//             <span className="text-sm font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
//               PREMIUM COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-pink-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-pink-600 to-slate-800 bg-clip-text text-transparent">
//             Men's Fashion Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-pink-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover sophisticated fashion for the modern gentleman — where elegance meets contemporary 
//             style in every detail and every occasion.
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
//                 className={`relative px-6 py-3 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
//                   activeCategory === cat.name
//                     ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white border-pink-500 shadow-2xl shadow-pink-500/25 scale-105"
//                     : "border-pink-200 bg-white/80 hover:border-pink-300 hover:bg-pink-50 hover:shadow-xl text-pink-700"
//                 }`}
//                 variant="outline"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-500 ${
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
//                     <div className="w-2 h-12 bg-gradient-to-b from-pink-500 to-pink-400 rounded-full"></div>
//                     <div>
//                       <h2 className="font-serif text-4xl font-bold text-slate-800">
//                         {section.title}
//                       </h2>
//                       <p className="text-slate-600 mt-1">
//                         {section.products.length} premium items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-pink-600 text-white border border-pink-600 hover:bg-pink-700 hover:border-pink-700 rounded-xl px-6 py-2 transition-all duration-300">
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
//                                 ? "border-pink-500 shadow-md"
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
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default MensCollection;







// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Import all your actual men's collection images
// import menHero from "@/assets/men-hero.jpg";

// // Sherwani Collection
// import sherwani1 from "@/assets/Men/Kurtapajama1.jpeg";
// import sherwani2 from "@/assets/Men/Kurtapajama3.jpeg";
// import sherwani3 from "@/assets/Men/Kurtapajama4.jpeg";
// import sherwani4 from "@/assets/Men/Kurtapajama5.jpeg";
// import sherwani5 from "@/assets/Men/Kurtapajama6.jpeg";
// import sherwani6 from "@/assets/Men/Kurtapajama7.jpeg";
// import sherwani7 from "@/assets/Men/Kurtapajama8.jpeg";
// import sherwani8 from "@/assets/Men/Kurtapajama9.jpeg";

// // Coat Pant Collection
// import coatPant1 from "@/assets/Men/coatpant1.jpeg";
// import coatPant2 from "@/assets/Men/coatpant2.jpeg";
// import coatPant3 from "@/assets/Men/coatpant3.jpeg";
// import coatPant4 from "@/assets/Men/coatpant4.jpeg";
// import coatPant5 from "@/assets/Men/coatpant5.jpeg";
// import coatPant6 from "@/assets/Men/coatpant6.jpeg";
// import coatPant7 from "@/assets/Men/coatpant1.jpeg";
// import coatPant8 from "@/assets/Men/coatpant2.jpeg";

// // Indo Western Collection
// import indoWestern1 from "@/assets/Men/indowestern1.jpeg";
// import indoWestern2 from "@/assets/Men/indowestern2.jpeg";
// import indoWestern3 from "@/assets/Men/indowestern3.jpeg";
// import indoWestern4 from "@/assets/Men/indowestern4.jpeg";
// import indoWestern5 from "@/assets/Men/indowestern5.jpeg";
// import indoWestern6 from "@/assets/Men/indowestern6.jpeg";
// import indoWestern7 from "@/assets/Men/indowestern7.jpeg";
// import indoWestern8 from "@/assets/Men/indowestern8.jpeg";

// // Kurta Pajama Collection
// import kurtaPajama1 from "@/assets/Men/Kurtapajama1.jpeg";
// import kurtaPajama2 from "@/assets/Men/Kurtapajama3.jpeg";
// import kurtaPajama3 from "@/assets/Men/Kurtapajama4.jpeg";
// import kurtaPajama4 from "@/assets/Men/Kurtapajama5.jpeg";
// import kurtaPajama5 from "@/assets/Men/Kurtapajama6.jpeg";
// import kurtaPajama6 from "@/assets/Men/Kurtapajama7.jpeg";
// import kurtaPajama7 from "@/assets/Men/Kurtapajama8.jpeg";
// import kurtaPajama8 from "@/assets/Men/Kurtapajama9.jpeg";

// // Blazer Collection
// import blazer1 from "@/assets/Men/blazercollection1.jpeg";
// import blazer2 from "@/assets/Men/blazercollection2.jpeg";
// import blazer3 from "@/assets/Men/blazercollection3.jpeg";
// import blazer4 from "@/assets/Men/blazercollection4.jpeg";
// import blazer5 from "@/assets/Men/blazercollection5.jpeg";
// import blazer6 from "@/assets/Men/blazercollection6.jpeg";
// import blazer7 from "@/assets/Men/blazercollection7.jpeg";
// import blazer8 from "@/assets/Men/blazercollection1.jpeg";

// // Jeans & T-Shirts Collection
// import jeansTshirt1 from "@/assets/Men/Jeans1.jpeg";
// import jeansTshirt2 from "@/assets/Men/Jeans2.jpeg";
// import jeansTshirt3 from "@/assets/Men/Jeans3.jpeg";
// import jeansTshirt4 from "@/assets/Men/Jeans5.jpeg";
// import jeansTshirt5 from "@/assets/Men/Jeans1.jpeg";
// import jeansTshirt6 from "@/assets/Men/Jeans2.jpeg";
// import jeansTshirt7 from "@/assets/Men/Jeans3.jpeg";
// import jeansTshirt8 from "@/assets/Men/Jeans5.jpeg";

// // Shirts Collection
// import shirt1 from "@/assets/Men/shirt1.jpeg";
// import shirt2 from "@/assets/Men/shirt2.jpeg";
// import shirt3 from "@/assets/Men/shirt3.jpeg";
// import shirt4 from "@/assets/Men/shirt4.jpeg";
// import shirt5 from "@/assets/Men/shirt5.jpeg";
// import shirt6 from "@/assets/Men/shirt6.jpeg";
// import shirt7 from "@/assets/Men/shirt7.jpeg";
// import shirt8 from "@/assets/Men/shirt8.jpeg";

// // Unstitched Collection
// import unstitched1 from "@/assets/Men/unstichedclothes1.jpeg";
// import unstitched2 from "@/assets/Men/unstichedclothes1.jpeg";
// import unstitched3 from "@/assets/Men/unstichedclothes3.jpeg";
// import unstitched4 from "@/assets/Men/unstichedclothes4.jpeg";
// import unstitched5 from "@/assets/Men/unstichedclothes5.jpeg";
// import unstitched6 from "@/assets/Men/unstichedclothes6.jpeg";
// import unstitched7 from "@/assets/Men/unstichedclothes7.jpeg";
// import unstitched8 from "@/assets/Men/unstichedclothes8.jpeg";

// // Winter Collection
// import winter1 from "@/assets/Men/woolencollection1.jpeg";
// import winter2 from "@/assets/Men/woolencollection2.jpeg";
// import winter3 from "@/assets/Men/woolencollection3.jpeg";
// import winter4 from "@/assets/Men/woolencollection4.jpeg";
// import winter5 from "@/assets/Men/woolencollection5.jpeg";
// import winter6 from "@/assets/Men/woolencollection6.jpeg";
// import winter7 from "@/assets/Men/woolencollection7.jpeg";
// import winter8 from "@/assets/Men/woolencollection8.jpeg";

// // Accessories Collection - Add your accessory images here
// import accessory1 from "@/assets/Men/accessories1.jpeg";
// import accessory2 from "@/assets/Men/accessories3.jpeg";
// import accessory3 from "@/assets/Men/accessories4.jpeg";
// import accessory4 from "@/assets/Men/accessories5.jpeg";
// import accessory5 from "@/assets/Men/accessories6.jpeg";
// import accessory6 from "@/assets/Men/accessories7.jpeg";
// import accessory7 from "@/assets/Men/accessories8.jpeg";
// import accessory8 from "@/assets/Men/accessories9.jpeg";

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   images: string[];
//   category: string;
//   sizes: string[];
//   colors: string[];
//   price?: string;
// }

// const categories = [
//   { name: "Sherwani", icon: "👑" },
//   { name: "Coat Pant", icon: "🎩" },
//   { name: "Indo Western", icon: "🌏" },
//   { name: "Kurta Pajama", icon: "🧵" },
//   { name: "Blazer", icon: "💼" },
//   { name: "Shirts", icon: "👔" },
//   { name: "Jeans & T-Shirts", icon: "👖" },
//   { name: "Unstitched Collection", icon: "✂️" },
//   { name: "Winter Collection", icon: "❄️" },
//   { name: "Accessories", icon: "🕶️" }, // Added Accessories category
// ];

// // Mock product data with unique images for each product
// const generateProductData = () => ({
//   sherwani: [...Array(8)].map((_, i) => ({
//     id: `sherwani-${i}`,
//     title: [
//       "Royal Wedding Sherwani",
//       "Embroidered Sherwani",
//       "Designer Sherwani",
//       "Premium Sherwani",
//       "Silk Sherwani",
//       "Zari Work Sherwani",
//       "Traditional Sherwani",
//       "Contemporary Sherwani"
//     ][i],
//     description: "Exquisite sherwanis with intricate embroidery and premium fabrics for special occasions.",
//     images: [
//       [sherwani1, sherwani2, sherwani3, sherwani4],
//       [sherwani2, sherwani3, sherwani4, sherwani5],
//       [sherwani3, sherwani4, sherwani5, sherwani6],
//       [sherwani4, sherwani5, sherwani6, sherwani7],
//       [sherwani5, sherwani6, sherwani7, sherwani8],
//       [sherwani6, sherwani7, sherwani8, sherwani1],
//       [sherwani7, sherwani8, sherwani1, sherwani2],
//       [sherwani8, sherwani1, sherwani2, sherwani3],
//     ][i],
//     category: "Sherwani",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Ivory", "Gold", "Maroon", "Navy"],
//   })),

//   coatPant: [...Array(8)].map((_, i) => ({
//     id: `coat-pant-${i}`,
//     title: [
//       "Premium Coat Pant",
//       "Designer Suit",
//       "Executive Set",
//       "Formal Coat Pant",
//       "Tailored Suit",
//       "Business Formal",
//       "Luxury Suit",
//       "Classic Coat Pant"
//     ][i],
//     description: "Perfectly tailored coat pant sets for formal occasions and professional settings.",
//     images: [
//       [coatPant1, coatPant2, coatPant3, coatPant4],
//       [coatPant2, coatPant3, coatPant4, coatPant5],
//       [coatPant3, coatPant4, coatPant5, coatPant6],
//       [coatPant4, coatPant5, coatPant6, coatPant7],
//       [coatPant5, coatPant6, coatPant7, coatPant8],
//       [coatPant6, coatPant7, coatPant8, coatPant1],
//       [coatPant7, coatPant8, coatPant1, coatPant2],
//       [coatPant8, coatPant1, coatPant2, coatPant3],
//     ][i],
//     category: "Coat Pant",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Black", "Navy", "Gray", "Brown"],
//     price: "$199-$399"
//   })),

//   indoWestern: [...Array(8)].map((_, i) => ({
//     id: `indo-western-${i}`,
//     title: [
//       "Fusion Wear",
//       "Modern Ethnic",
//       "Contemporary Traditional",
//       "Indo-Western Set",
//       "Designer Fusion",
//       "Urban Ethnic",
//       "Luxury Fusion",
//       "Premium Indo-Western"
//     ][i],
//     description: "Beautiful fusion of traditional Indian and contemporary western fashion elements.",
//     images: [
//       [indoWestern1, indoWestern2, indoWestern3, indoWestern4],
//       [indoWestern2, indoWestern3, indoWestern4, indoWestern5],
//       [indoWestern3, indoWestern4, indoWestern5, indoWestern6],
//       [indoWestern4, indoWestern5, indoWestern6, indoWestern7],
//       [indoWestern5, indoWestern6, indoWestern7, indoWestern8],
//       [indoWestern6, indoWestern7, indoWestern8, indoWestern1],
//       [indoWestern7, indoWestern8, indoWestern1, indoWestern2],
//       [indoWestern8, indoWestern1, indoWestern2, indoWestern3],
//     ][i],
//     category: "Indo Western",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Beige", "Burgundy", "Emerald", "Mustard"],
//     price: "$159-$299"
//   })),

//   kurtaPajama: [...Array(8)].map((_, i) => ({
//     id: `kurta-pajama-${i}`,
//     title: [
//       "Cotton Kurta Set",
//       "Silk Kurta",
//       "Designer Kurta",
//       "Festive Kurta",
//       "Embroidered Kurta",
//       "Traditional Kurta",
//       "Premium Kurta",
//       "Luxury Kurta Set"
//     ][i],
//     description: "Comfortable and stylish kurta pajama sets perfect for traditional and festive occasions.",
//     images: [
//       [kurtaPajama1, kurtaPajama2, kurtaPajama3, kurtaPajama4],
//       [kurtaPajama2, kurtaPajama3, kurtaPajama4, kurtaPajama5],
//       [kurtaPajama3, kurtaPajama4, kurtaPajama5, kurtaPajama6],
//       [kurtaPajama4, kurtaPajama5, kurtaPajama6, kurtaPajama7],
//       [kurtaPajama5, kurtaPajama6, kurtaPajama7, kurtaPajama8],
//       [kurtaPajama6, kurtaPajama7, kurtaPajama8, kurtaPajama1],
//       [kurtaPajama7, kurtaPajama8, kurtaPajama1, kurtaPajama2],
//       [kurtaPajama8, kurtaPajama1, kurtaPajama2, kurtaPajama3],
//     ][i],
//     category: "Kurta Pajama",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["White", "Blue", "Black", "Red"],
//     price: "$79-$199"
//   })),

//   blazer: [...Array(8)].map((_, i) => ({
//     id: `blazer-${i}`,
//     title: [
//       "Single Breasted Blazer",
//       "Double Breasted Blazer",
//       "Designer Blazer",
//       "Casual Blazer",
//       "Formal Blazer",
//       "Linen Blazer",
//       "Wool Blazer",
//       "Designer Blazer"
//     ][i],
//     description: "Stylish blazers that add sophistication to any outfit, perfect for various occasions.",
//     images: [
//       [blazer1, blazer2, blazer3, blazer4],
//       [blazer2, blazer3, blazer4, blazer5],
//       [blazer3, blazer4, blazer5, blazer6],
//       [blazer4, blazer5, blazer6, blazer7],
//       [blazer5, blazer6, blazer7, blazer8],
//       [blazer6, blazer7, blazer8, blazer1],
//       [blazer7, blazer8, blazer1, blazer2],
//       [blazer8, blazer1, blazer2, blazer3],
//     ][i],
//     category: "Blazer",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Gray", "Burgundy"],
//     price: "$129-$299"
//   })),

//   shirts: [...Array(8)].map((_, i) => ({
//     id: `shirts-${i}`,
//     title: [
//       "Formal Cotton Shirt",
//       "Designer Casual Shirt",
//       "Premium Linen Shirt",
//       "Slim Fit Shirt",
//       "Office Formal Shirt",
//       "Party Wear Shirt",
//       "Classic Fit Shirt",
//       "Designer Printed Shirt"
//     ][i],
//     description: "Premium quality shirts for formal and casual occasions, available in various fits and fabrics.",
//     images: [
//       [shirt1, shirt2, shirt3, shirt4],
//       [shirt2, shirt3, shirt4, shirt5],
//       [shirt3, shirt4, shirt5, shirt6],
//       [shirt4, shirt5, shirt6, shirt7],
//       [shirt5, shirt6, shirt7, shirt8],
//       [shirt6, shirt7, shirt8, shirt1],
//       [shirt7, shirt8, shirt1, shirt2],
//       [shirt8, shirt1, shirt2, shirt3],
//     ][i],
//     category: "Shirts",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["White", "Blue", "Black", "Pink", "Gray"],
//     price: "$39-$129"
//   })),

//   jeansTshirts: [...Array(8)].map((_, i) => ({
//     id: `jeans-tshirts-${i}`,
//     title: [
//       "Denim Jeans",
//       "Cotton T-Shirts",
//       "Casual Combo",
//       "Street Wear",
//       "Designer Jeans",
//       "Premium T-Shirt",
//       "Casual Wear Set",
//       "Urban Collection"
//     ][i],
//     description: "Comfortable jeans and trendy t-shirts for everyday casual wear and outings.",
//     images: [
//       [jeansTshirt1, jeansTshirt2, jeansTshirt3, jeansTshirt4],
//       [jeansTshirt2, jeansTshirt3, jeansTshirt4, jeansTshirt5],
//       [jeansTshirt3, jeansTshirt4, jeansTshirt5, jeansTshirt6],
//       [jeansTshirt4, jeansTshirt5, jeansTshirt6, jeansTshirt7],
//       [jeansTshirt5, jeansTshirt6, jeansTshirt7, jeansTshirt8],
//       [jeansTshirt6, jeansTshirt7, jeansTshirt8, jeansTshirt1],
//       [jeansTshirt7, jeansTshirt8, jeansTshirt1, jeansTshirt2],
//       [jeansTshirt8, jeansTshirt1, jeansTshirt2, jeansTshirt3],
//     ][i],
//     category: "Jeans & T-Shirts",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Blue", "Black", "Gray", "White"],
//     price: "$29-$79"
//   })),

//   unstitched: [...Array(8)].map((_, i) => ({
//     id: `unstitched-${i}`,
//     title: [
//       "Premium Fabric",
//       "Designer Material",
//       "Custom Tailoring",
//       "Luxury Textile",
//       "Cotton Suit Material",
//       "Silk Fabric",
//       "Linen Material",
//       "Designer Textile"
//     ][i],
//     description: "High-quality unstitched fabrics for custom tailoring and personalized outfits.",
//     images: [
//       [unstitched1, unstitched2, unstitched3, unstitched4],
//       [unstitched2, unstitched3, unstitched4, unstitched5],
//       [unstitched3, unstitched4, unstitched5, unstitched6],
//       [unstitched4, unstitched5, unstitched6, unstitched7],
//       [unstitched5, unstitched6, unstitched7, unstitched8],
//       [unstitched6, unstitched7, unstitched8, unstitched1],
//       [unstitched7, unstitched8, unstitched1, unstitched2],
//       [unstitched8, unstitched1, unstitched2, unstitched3],
//     ][i],
//     category: "Unstitched Collection",
//     sizes: ["2.5m", "3m", "3.5m", "4m"],
//     colors: ["Multiple", "Assorted", "Designer Prints"],
//     price: "$49-$149"
//   })),

//   winter: [...Array(8)].map((_, i) => ({
//     id: `winter-${i}`,
//     title: [
//       "Winter Jackets",
//       "Woolen Sweaters",
//       "Thermal Wear",
//       "Winter Collection",
//       "Designer Jacket",
//       "Premium Sweater",
//       "Winter Coat",
//       "Luxury Winter Wear"
//     ][i],
//     description: "Warm and stylish winter clothing to keep you comfortable in cold weather.",
//     images: [
//       [winter1, winter2, winter3, winter4],
//       [winter2, winter3, winter4, winter5],
//       [winter3, winter4, winter5, winter6],
//       [winter4, winter5, winter6, winter7],
//       [winter5, winter6, winter7, winter8],
//       [winter6, winter7, winter8, winter1],
//       [winter7, winter8, winter1, winter2],
//       [winter8, winter1, winter2, winter3],
//     ][i],
//     category: "Winter Collection",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Gray", "Burgundy"],
//     price: "$89-$259"
//   })),

//   // Added Accessories Collection
//   accessories: [...Array(8)].map((_, i) => ({
//     id: `accessories-${i}`,
//     title: [
//       "Leather Belts",
//       "Designer Watches",
//       "Premium Sunglasses",
//       "Classic Ties",
//       "Cufflinks Set",
//       "Men's Wallets",
//       "Pocket Squares",
//       "Stylish Caps"
//     ][i],
//     description: "Complete your look with our premium accessories collection - from watches to belts and more.",
//     images: [
//       [accessory1, accessory2, accessory3, accessory4],
//       [accessory2, accessory3, accessory4, accessory5],
//       [accessory3, accessory4, accessory5, accessory6],
//       [accessory4, accessory5, accessory6, accessory7],
//       [accessory5, accessory6, accessory7, accessory8],
//       [accessory6, accessory7, accessory8, accessory1],
//       [accessory7, accessory8, accessory1, accessory2],
//       [accessory8, accessory1, accessory2, accessory3],
//     ][i],
//     category: "Accessories",
//     sizes: ["One Size", "S", "M", "L"],
//     colors: ["Black", "Brown", "Silver", "Gold", "Navy"],
//     price: "$19-$199"
//   }))
// });

// const MensCollection: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState("Sherwani");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "👑 Sherwani Collection",
//       category: "Sherwani",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.sherwani,
//     },
//     {
//       title: "🎩 Coat Pant Sets",
//       category: "Coat Pant",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.coatPant,
//     },
//     {
//       title: "🌏 Indo Western Fusion",
//       category: "Indo Western",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.indoWestern,
//     },
//     {
//       title: "🧵 Kurta Pajama",
//       category: "Kurta Pajama",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.kurtaPajama,
//     },
//     {
//       title: "💼 Blazer Collection",
//       category: "Blazer",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.blazer,
//     },
//     {
//       title: "👔 Shirts Collection",
//       category: "Shirts",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.shirts,
//     },
//     {
//       title: "👖 Jeans & T-Shirts",
//       category: "Jeans & T-Shirts",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.jeansTshirts,
//     },
//     {
//       title: "✂️ Unstitched Collection",
//       category: "Unstitched Collection",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.unstitched,
//     },
//     {
//       title: "❄️ Winter Collection",
//       category: "Winter Collection",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.winter,
//     },
//     {
//       title: "🕶️ Accessories Collection", // Added Accessories section
//       category: "Accessories",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.accessories,
//     },
//   ];

//   const openModal = (product: Product) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === selectedProduct.images.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === 0 ? selectedProduct.images.length - 1 : prev - 1
//       );
//     }
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
//             <span className="text-sm font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
//               PREMIUM COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-pink-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-pink-600 to-slate-800 bg-clip-text text-transparent">
//             Men's Fashion Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-pink-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover sophisticated fashion for the modern gentleman — where elegance meets contemporary 
//             style in every detail and every occasion.
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
//                 className={`relative px-6 py-3 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
//                   activeCategory === cat.name
//                     ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white border-pink-500 shadow-2xl shadow-pink-500/25 scale-105"
//                     : "border-pink-200 bg-white/80 hover:border-pink-300 hover:bg-pink-50 hover:shadow-xl text-pink-700"
//                 }`}
//                 variant="outline"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-500 ${
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
//                     <div className="w-2 h-12 bg-gradient-to-b from-pink-500 to-pink-400 rounded-full"></div>
//                     <div>
//                       <h2 className="font-serif text-4xl font-bold text-slate-800">
//                         {section.title}
//                       </h2>
//                       <p className="text-slate-600 mt-1">
//                         {section.products.length} premium items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-pink-600 text-white border border-pink-600 hover:bg-pink-700 hover:border-pink-700 rounded-xl px-6 py-2 transition-all duration-300">
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
//                                 ? "border-pink-500 shadow-md"
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
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default MensCollection;







// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Import all your actual men's collection images
// import menHero from "@/assets/men-hero.jpg";

// // Sherwani Collection
// import sherwani1 from "@/assets/Men/Kurtapajama1.jpeg";
// import sherwani2 from "@/assets/Men/Kurtapajama3.jpeg";
// import sherwani3 from "@/assets/Men/Kurtapajama4.jpeg";
// import sherwani4 from "@/assets/Men/Kurtapajama5.jpeg";
// import sherwani5 from "@/assets/Men/Kurtapajama6.jpeg";
// import sherwani6 from "@/assets/Men/Kurtapajama7.jpeg";
// import sherwani7 from "@/assets/Men/Kurtapajama8.jpeg";
// import sherwani8 from "@/assets/Men/Kurtapajama9.jpeg";

// // Coat Pant Collection
// import coatPant1 from "@/assets/Men/coatpant1.jpeg";
// import coatPant2 from "@/assets/Men/coatpant2.jpeg";
// import coatPant3 from "@/assets/Men/coatpant3.jpeg";
// import coatPant4 from "@/assets/Men/coatpant4.jpeg";
// import coatPant5 from "@/assets/Men/coatpant5.jpeg";
// import coatPant6 from "@/assets/Men/coatpant6.jpeg";
// import coatPant7 from "@/assets/Men/coatpant1.jpeg";
// import coatPant8 from "@/assets/Men/coatpant2.jpeg";

// // Indo Western Collection
// import indoWestern1 from "@/assets/Men/indowestern1.jpeg";
// import indoWestern2 from "@/assets/Men/indowestern2.jpeg";
// import indoWestern3 from "@/assets/Men/indowestern3.jpeg";
// import indoWestern4 from "@/assets/Men/indowestern4.jpeg";
// import indoWestern5 from "@/assets/Men/indowestern5.jpeg";
// import indoWestern6 from "@/assets/Men/indowestern6.jpeg";
// import indoWestern7 from "@/assets/Men/indowestern7.jpeg";
// import indoWestern8 from "@/assets/Men/indowestern8.jpeg";

// // Kurta Pajama Collection
// import kurtaPajama1 from "@/assets/Men/Kurtapajama1.jpeg";
// import kurtaPajama2 from "@/assets/Men/Kurtapajama3.jpeg";
// import kurtaPajama3 from "@/assets/Men/Kurtapajama4.jpeg";
// import kurtaPajama4 from "@/assets/Men/Kurtapajama5.jpeg";
// import kurtaPajama5 from "@/assets/Men/Kurtapajama6.jpeg";
// import kurtaPajama6 from "@/assets/Men/Kurtapajama7.jpeg";
// import kurtaPajama7 from "@/assets/Men/Kurtapajama8.jpeg";
// import kurtaPajama8 from "@/assets/Men/Kurtapajama9.jpeg";

// // Blazer Collection
// import blazer1 from "@/assets/Men/blazercollection1.jpeg";
// import blazer2 from "@/assets/Men/blazercollection2.jpeg";
// import blazer3 from "@/assets/Men/blazercollection3.jpeg";
// import blazer4 from "@/assets/Men/blazercollection4.jpeg";
// import blazer5 from "@/assets/Men/blazercollection5.jpeg";
// import blazer6 from "@/assets/Men/blazercollection6.jpeg";
// import blazer7 from "@/assets/Men/blazercollection7.jpeg";
// import blazer8 from "@/assets/Men/blazercollection1.jpeg";

// // Jeans & T-Shirts Collection
// import jeansTshirt1 from "@/assets/Men/Jeans1.jpeg";
// import jeansTshirt2 from "@/assets/Men/Jeans2.jpeg";
// import jeansTshirt3 from "@/assets/Men/Jeans3.jpeg";
// import jeansTshirt4 from "@/assets/Men/Jeans5.jpeg";
// import jeansTshirt5 from "@/assets/Men/Jeans1.jpeg";
// import jeansTshirt6 from "@/assets/Men/Jeans2.jpeg";
// import jeansTshirt7 from "@/assets/Men/Jeans3.jpeg";
// import jeansTshirt8 from "@/assets/Men/Jeans5.jpeg";

// // Shirts Collection
// import shirt1 from "@/assets/Men/shirt1.jpeg";
// import shirt2 from "@/assets/Men/shirt2.jpeg";
// import shirt3 from "@/assets/Men/shirt3.jpeg";
// import shirt4 from "@/assets/Men/shirt4.jpeg";
// import shirt5 from "@/assets/Men/shirt5.jpeg";
// import shirt6 from "@/assets/Men/shirt6.jpeg";
// import shirt7 from "@/assets/Men/shirt7.jpeg";
// import shirt8 from "@/assets/Men/shirt8.jpeg";

// // Unstitched Collection
// import unstitched1 from "@/assets/Men/unstichedclothes1.jpeg";
// import unstitched2 from "@/assets/Men/unstichedclothes1.jpeg";
// import unstitched3 from "@/assets/Men/unstichedclothes3.jpeg";
// import unstitched4 from "@/assets/Men/unstichedclothes4.jpeg";
// import unstitched5 from "@/assets/Men/unstichedclothes5.jpeg";
// import unstitched6 from "@/assets/Men/unstichedclothes6.jpeg";
// import unstitched7 from "@/assets/Men/unstichedclothes7.jpeg";
// import unstitched8 from "@/assets/Men/unstichedclothes8.jpeg";

// // Winter Collection
// import winter1 from "@/assets/Men/woolencollection1.jpeg";
// import winter2 from "@/assets/Men/woolencollection2.jpeg";
// import winter3 from "@/assets/Men/woolencollection3.jpeg";
// import winter4 from "@/assets/Men/woolencollection4.jpeg";
// import winter5 from "@/assets/Men/woolencollection5.jpeg";
// import winter6 from "@/assets/Men/woolencollection6.jpeg";
// import winter7 from "@/assets/Men/woolencollection7.jpeg";
// import winter8 from "@/assets/Men/woolencollection8.jpeg";

// // Accessories Collection - Add your accessory images here
// import accessory1 from "@/assets/Men/accessories1.jpeg";
// import accessory2 from "@/assets/Men/accessories3.jpeg";
// import accessory3 from "@/assets/Men/accessories4.jpeg";
// import accessory4 from "@/assets/Men/accessories5.jpeg";
// import accessory5 from "@/assets/Men/accessories6.jpeg";
// import accessory6 from "@/assets/Men/accessories7.jpeg";
// import accessory7 from "@/assets/Men/accessories8.jpeg";
// import accessory8 from "@/assets/Men/accessories9.jpeg";

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   images: string[];
//   category: string;
//   sizes: string[];
//   colors: string[];
//   price?: string;
// }

// const categories = [
//   { name: "Sherwani", icon: "👑" },
//   { name: "Coat Pant", icon: "🎩" },
//   { name: "Indo Western", icon: "🌏" },
//   { name: "Kurta Pajama", icon: "🧵" },
//   { name: "Blazer", icon: "💼" },
//   { name: "Shirts", icon: "👔" },
//   { name: "Jeans & T-Shirts", icon: "👖" },
//   { name: "Unstitched Collection", icon: "✂️" },
//   { name: "Winter Collection", icon: "❄️" },
//   { name: "Accessories", icon: "🕶️" }, // Added Accessories category
// ];

// // Mock product data with unique images for each product
// const generateProductData = () => ({
//   sherwani: [...Array(8)].map((_, i) => ({
//     id: `sherwani-${i}`,
//     title: [
      
//     ][i],
//     description: "Exquisite sherwanis with intricate embroidery and premium fabrics for special occasions.",
//     images: [
//       [sherwani1, sherwani2, sherwani3, sherwani4],
//       [sherwani2, sherwani3, sherwani4, sherwani5],
//       [sherwani3, sherwani4, sherwani5, sherwani6],
//       [sherwani4, sherwani5, sherwani6, sherwani7],
//       [sherwani5, sherwani6, sherwani7, sherwani8],
//       [sherwani6, sherwani7, sherwani8, sherwani1],
//       [sherwani7, sherwani8, sherwani1, sherwani2],
//       [sherwani8, sherwani1, sherwani2, sherwani3],
//     ][i],
//     category: "Sherwani",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Ivory", "Gold", "Maroon", "Navy"],
//   })),

//   coatPant: [...Array(8)].map((_, i) => ({
//     id: `coat-pant-${i}`,
//     title: [
      
//     ][i],
//     description: "Perfectly tailored coat pant sets for formal occasions and professional settings.",
//     images: [
//       [coatPant1, coatPant2, coatPant3, coatPant4],
//       [coatPant2, coatPant3, coatPant4, coatPant5],
//       [coatPant3, coatPant4, coatPant5, coatPant6],
//       [coatPant4, coatPant5, coatPant6, coatPant7],
//       [coatPant5, coatPant6, coatPant7, coatPant8],
//       [coatPant6, coatPant7, coatPant8, coatPant1],
//       [coatPant7, coatPant8, coatPant1, coatPant2],
//       [coatPant8, coatPant1, coatPant2, coatPant3],
//     ][i],
//     category: "Coat Pant",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Black", "Navy", "Gray", "Brown"],
//     price: "$199-$399"
//   })),

//   indoWestern: [...Array(8)].map((_, i) => ({
//     id: `indo-western-${i}`,
//     title: [
      
//     ][i],
//     description: "Beautiful fusion of traditional Indian and contemporary western fashion elements.",
//     images: [
//       [indoWestern1, indoWestern2, indoWestern3, indoWestern4],
//       [indoWestern2, indoWestern3, indoWestern4, indoWestern5],
//       [indoWestern3, indoWestern4, indoWestern5, indoWestern6],
//       [indoWestern4, indoWestern5, indoWestern6, indoWestern7],
//       [indoWestern5, indoWestern6, indoWestern7, indoWestern8],
//       [indoWestern6, indoWestern7, indoWestern8, indoWestern1],
//       [indoWestern7, indoWestern8, indoWestern1, indoWestern2],
//       [indoWestern8, indoWestern1, indoWestern2, indoWestern3],
//     ][i],
//     category: "Indo Western",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Beige", "Burgundy", "Emerald", "Mustard"],
//     price: "$159-$299"
//   })),

//   kurtaPajama: [...Array(8)].map((_, i) => ({
//     id: `kurta-pajama-${i}`,
//     title: [
     
//     ][i],
//     description: "Comfortable and stylish kurta pajama sets perfect for traditional and festive occasions.",
//     images: [
//       [kurtaPajama1, kurtaPajama2, kurtaPajama3, kurtaPajama4],
//       [kurtaPajama2, kurtaPajama3, kurtaPajama4, kurtaPajama5],
//       [kurtaPajama3, kurtaPajama4, kurtaPajama5, kurtaPajama6],
//       [kurtaPajama4, kurtaPajama5, kurtaPajama6, kurtaPajama7],
//       [kurtaPajama5, kurtaPajama6, kurtaPajama7, kurtaPajama8],
//       [kurtaPajama6, kurtaPajama7, kurtaPajama8, kurtaPajama1],
//       [kurtaPajama7, kurtaPajama8, kurtaPajama1, kurtaPajama2],
//       [kurtaPajama8, kurtaPajama1, kurtaPajama2, kurtaPajama3],
//     ][i],
//     category: "Kurta Pajama",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["White", "Blue", "Black", "Red"],
//     price: "$79-$199"
//   })),

//   blazer: [...Array(8)].map((_, i) => ({
//     id: `blazer-${i}`,
//     title: [
    
//     ][i],
//     description: "Stylish blazers that add sophistication to any outfit, perfect for various occasions.",
//     images: [
//       [blazer1, blazer2, blazer3, blazer4],
//       [blazer2, blazer3, blazer4, blazer5],
//       [blazer3, blazer4, blazer5, blazer6],
//       [blazer4, blazer5, blazer6, blazer7],
//       [blazer5, blazer6, blazer7, blazer8],
//       [blazer6, blazer7, blazer8, blazer1],
//       [blazer7, blazer8, blazer1, blazer2],
//       [blazer8, blazer1, blazer2, blazer3],
//     ][i],
//     category: "Blazer",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Gray", "Burgundy"],
//     price: "$129-$299"
//   })),

//   shirts: [...Array(8)].map((_, i) => ({
//     id: `shirts-${i}`,
//     title: [
     
//     ][i],
//     description: "Premium quality shirts for formal and casual occasions, available in various fits and fabrics.",
//     images: [
//       [shirt1, shirt2, shirt3, shirt4],
//       [shirt2, shirt3, shirt4, shirt5],
//       [shirt3, shirt4, shirt5, shirt6],
//       [shirt4, shirt5, shirt6, shirt7],
//       [shirt5, shirt6, shirt7, shirt8],
//       [shirt6, shirt7, shirt8, shirt1],
//       [shirt7, shirt8, shirt1, shirt2],
//       [shirt8, shirt1, shirt2, shirt3],
//     ][i],
//     category: "Shirts",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["White", "Blue", "Black", "Pink", "Gray"],
//     price: "$39-$129"
//   })),

//   jeansTshirts: [...Array(8)].map((_, i) => ({
//     id: `jeans-tshirts-${i}`,
//     title: [
      
//     ][i],
//     description: "Comfortable jeans and trendy t-shirts for everyday casual wear and outings.",
//     images: [
//       [jeansTshirt1, jeansTshirt2, jeansTshirt3, jeansTshirt4],
//       [jeansTshirt2, jeansTshirt3, jeansTshirt4, jeansTshirt5],
//       [jeansTshirt3, jeansTshirt4, jeansTshirt5, jeansTshirt6],
//       [jeansTshirt4, jeansTshirt5, jeansTshirt6, jeansTshirt7],
//       [jeansTshirt5, jeansTshirt6, jeansTshirt7, jeansTshirt8],
//       [jeansTshirt6, jeansTshirt7, jeansTshirt8, jeansTshirt1],
//       [jeansTshirt7, jeansTshirt8, jeansTshirt1, jeansTshirt2],
//       [jeansTshirt8, jeansTshirt1, jeansTshirt2, jeansTshirt3],
//     ][i],
//     category: "Jeans & T-Shirts",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Blue", "Black", "Gray", "White"],
//     price: "$29-$79"
//   })),

//   unstitched: [...Array(8)].map((_, i) => ({
//     id: `unstitched-${i}`,
//     title: [
      
//     ][i],
//     description: "High-quality unstitched fabrics for custom tailoring and personalized outfits.",
//     images: [
//       [unstitched1, unstitched2, unstitched3, unstitched4],
//       [unstitched2, unstitched3, unstitched4, unstitched5],
//       [unstitched3, unstitched4, unstitched5, unstitched6],
//       [unstitched4, unstitched5, unstitched6, unstitched7],
//       [unstitched5, unstitched6, unstitched7, unstitched8],
//       [unstitched6, unstitched7, unstitched8, unstitched1],
//       [unstitched7, unstitched8, unstitched1, unstitched2],
//       [unstitched8, unstitched1, unstitched2, unstitched3],
//     ][i],
//     category: "Unstitched Collection",
//     sizes: ["2.5m", "3m", "3.5m", "4m"],
//     colors: ["Multiple", "Assorted", "Designer Prints"],
//     price: "$49-$149"
//   })),

//   winter: [...Array(8)].map((_, i) => ({
//     id: `winter-${i}`,
//     title: [
     
//     ][i],
//     description: "Warm and stylish winter clothing to keep you comfortable in cold weather.",
//     images: [
//       [winter1, winter2, winter3, winter4],
//       [winter2, winter3, winter4, winter5],
//       [winter3, winter4, winter5, winter6],
//       [winter4, winter5, winter6, winter7],
//       [winter5, winter6, winter7, winter8],
//       [winter6, winter7, winter8, winter1],
//       [winter7, winter8, winter1, winter2],
//       [winter8, winter1, winter2, winter3],
//     ][i],
//     category: "Winter Collection",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Navy", "Black", "Gray", "Burgundy"],
//     price: "$89-$259"
//   })),

//   // Added Accessories Collection
//   accessories: [...Array(8)].map((_, i) => ({
//     id: `accessories-${i}`,
//     title: [
    
//     ][i],
//     description: "Complete your look with our premium accessories collection - from watches to belts and more.",
//     images: [
//       [accessory1, accessory2, accessory3, accessory4],
//       [accessory2, accessory3, accessory4, accessory5],
//       [accessory3, accessory4, accessory5, accessory6],
//       [accessory4, accessory5, accessory6, accessory7],
//       [accessory5, accessory6, accessory7, accessory8],
//       [accessory6, accessory7, accessory8, accessory1],
//       [accessory7, accessory8, accessory1, accessory2],
//       [accessory8, accessory1, accessory2, accessory3],
//     ][i],
//     category: "Accessories",
//     sizes: ["One Size", "S", "M", "L"],
//     colors: ["Black", "Brown", "Silver", "Gold", "Navy"],
//     price: "$19-$199"
//   }))
// });

// const MensCollection: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState("Sherwani");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "👑 Sherwani Collection",
//       category: "Sherwani",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.sherwani,
//     },
//     {
//       title: "🎩 Coat Pant Sets",
//       category: "Coat Pant",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.coatPant,
//     },
//     {
//       title: "🌏 Indo Western Fusion",
//       category: "Indo Western",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.indoWestern,
//     },
//     {
//       title: "🧵 Kurta Pajama",
//       category: "Kurta Pajama",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.kurtaPajama,
//     },
//     {
//       title: "💼 Blazer Collection",
//       category: "Blazer",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.blazer,
//     },
//     {
//       title: "👔 Shirts Collection",
//       category: "Shirts",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.shirts,
//     },
//     {
//       title: "👖 Jeans & T-Shirts",
//       category: "Jeans & T-Shirts",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.jeansTshirts,
//     },
//     {
//       title: "✂️ Unstitched Collection",
//       category: "Unstitched Collection",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.unstitched,
//     },
//     {
//       title: "❄️ Winter Collection",
//       category: "Winter Collection",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.winter,
//     },
//     {
//       title: "🕶️ Accessories Collection", // Added Accessories section
//       category: "Accessories",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.accessories,
//     },
//   ];

//   const openModal = (product: Product) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === selectedProduct.images.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevImage = () => {
//     if (selectedProduct) {
//       setCurrentImageIndex((prev) => 
//         prev === 0 ? selectedProduct.images.length - 1 : prev - 1
//       );
//     }
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
//             <span className="text-sm font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
//               PREMIUM COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-pink-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-pink-600 to-slate-800 bg-clip-text text-transparent">
//             Men's Fashion Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-pink-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover sophisticated fashion for the modern gentleman — where elegance meets contemporary 
//             style in every detail and every occasion.
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
//                 className={`relative px-6 py-3 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
//                   activeCategory === cat.name
//                     ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white border-pink-500 shadow-2xl shadow-pink-500/25 scale-105"
//                     : "border-pink-200 bg-white/80 hover:border-pink-300 hover:bg-pink-50 hover:shadow-xl text-pink-700"
//                 }`}
//                 variant="outline"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-500 ${
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
//                     <div className="w-2 h-12 bg-gradient-to-b from-pink-500 to-pink-400 rounded-full"></div>
//                     <div>
//                       <h2 className="font-serif text-4xl font-bold text-slate-800">
//                         {section.title}
//                       </h2>
//                       <p className="text-slate-600 mt-1">
//                         {section.products.length} premium items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-pink-600 text-white border border-pink-600 hover:bg-pink-700 hover:border-pink-700 rounded-xl px-6 py-2 transition-all duration-300">
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
//                                 ? "border-pink-500 shadow-md"
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
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default MensCollection;






import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// Import all your actual men's collection images
import menHero from "@/assets/men-hero.jpg";

// Sherwani Collection
import sherwani1 from "@/assets/Men/Kurtapajama1.jpeg";
import sherwani2 from "@/assets/Men/Kurtapajama3.jpeg";
import sherwani3 from "@/assets/Men/Kurtapajama4.jpeg";
import sherwani4 from "@/assets/Men/Kurtapajama5.jpeg";
import sherwani5 from "@/assets/Men/Kurtapajama6.jpeg";
import sherwani6 from "@/assets/Men/Kurtapajama7.jpeg";
import sherwani7 from "@/assets/Men/Kurtapajama8.jpeg";
import sherwani8 from "@/assets/Men/Kurtapajama9.jpeg";

// Coat Pant Collection
import coatPant1 from "@/assets/Men/coatpant1.jpeg";
import coatPant2 from "@/assets/Men/coatpant2.jpeg";
import coatPant3 from "@/assets/Men/coatpant3.jpeg";
import coatPant4 from "@/assets/Men/coatpant4.jpeg";
import coatPant5 from "@/assets/Men/coatpant5.jpeg";
import coatPant6 from "@/assets/Men/coatpant6.jpeg";
import coatPant7 from "@/assets/Men/coatpant1.jpeg";
import coatPant8 from "@/assets/Men/coatpant2.jpeg";

// Indo Western Collection
import indoWestern1 from "@/assets/Men/indowestern1.jpeg";
import indoWestern2 from "@/assets/Men/indowestern2.jpeg";
import indoWestern3 from "@/assets/Men/indowestern3.jpeg";
import indoWestern4 from "@/assets/Men/indowestern4.jpeg";
import indoWestern5 from "@/assets/Men/indowestern5.jpeg";
import indoWestern6 from "@/assets/Men/indowestern6.jpeg";
import indoWestern7 from "@/assets/Men/indowestern7.jpeg";
import indoWestern8 from "@/assets/Men/indowestern8.jpeg";

// Kurta Pajama Collection
import kurtaPajama1 from "@/assets/Men/Kurtapajama1.jpeg";
import kurtaPajama2 from "@/assets/Men/Kurtapajama3.jpeg";
import kurtaPajama3 from "@/assets/Men/Kurtapajama4.jpeg";
import kurtaPajama4 from "@/assets/Men/Kurtapajama5.jpeg";
import kurtaPajama5 from "@/assets/Men/Kurtapajama6.jpeg";
import kurtaPajama6 from "@/assets/Men/Kurtapajama7.jpeg";
import kurtaPajama7 from "@/assets/Men/Kurtapajama8.jpeg";
import kurtaPajama8 from "@/assets/Men/Kurtapajama9.jpeg";

// Blazer Collection
import blazer1 from "@/assets/Men/blazercollection1.jpeg";
import blazer2 from "@/assets/Men/blazercollection2.jpeg";
import blazer3 from "@/assets/Men/blazercollection3.jpeg";
import blazer4 from "@/assets/Men/blazercollection4.jpeg";
import blazer5 from "@/assets/Men/blazercollection5.jpeg";
import blazer6 from "@/assets/Men/blazercollection6.jpeg";
import blazer7 from "@/assets/Men/blazercollection7.jpeg";
import blazer8 from "@/assets/Men/blazercollection1.jpeg";

// Jeans & T-Shirts Collection
import jeansTshirt1 from "@/assets/Men/Jeans1.jpeg";
import jeansTshirt2 from "@/assets/Men/Jeans2.jpeg";
import jeansTshirt3 from "@/assets/Men/Jeans3.jpeg";
import jeansTshirt4 from "@/assets/Men/Jeans5.jpeg";
import jeansTshirt5 from "@/assets/Men/Jeans1.jpeg";
import jeansTshirt6 from "@/assets/Men/Jeans2.jpeg";
import jeansTshirt7 from "@/assets/Men/Jeans3.jpeg";
import jeansTshirt8 from "@/assets/Men/Jeans5.jpeg";

// Shirts Collection
import shirt1 from "@/assets/Men/shirt16.jpeg";
import shirt2 from "@/assets/Men/shirt17.jpeg";
import shirt3 from "@/assets/Men/shirt18.jpeg";
import shirt4 from "@/assets/Men/shirt18.jpeg";
import shirt5 from "@/assets/Men/shirt19.jpeg";
import shirt6 from "@/assets/Men/shirt20.jpeg";
import shirt7 from "@/assets/Men/shirt10.jpeg";
import shirt8 from "@/assets/Men/shirt16.jpeg";

// Unstitched Collection
import unstitched1 from "@/assets/Men/unstitchedcolthes9.jpeg";
import unstitched2 from "@/assets/Men/unstitchedcolthes10.jpeg";
import unstitched3 from "@/assets/Men/unstitchedcolthes11.jpeg";
import unstitched4 from "@/assets/Men/unstitchedcolthes12.jpeg";
import unstitched5 from "@/assets/Men/unstitchedcolthes13.jpeg";
import unstitched6 from "@/assets/Men/unstitchedcolthes14.jpeg";
import unstitched7 from "@/assets/Men/unstitchedcolthes15.jpeg";
import unstitched8 from "@/assets/Men/unstitchedcolthes16.jpeg";

// Winter Collection
import winter1 from "@/assets/Men/woolencollection1.jpeg";
import winter2 from "@/assets/Men/woolencollection2.jpeg";
import winter3 from "@/assets/Men/woolencollection3.jpeg";
import winter4 from "@/assets/Men/woolencollection4.jpeg";
import winter5 from "@/assets/Men/woolencollection5.jpeg";
import winter6 from "@/assets/Men/woolencollection6.jpeg";
import winter7 from "@/assets/Men/woolencollection7.jpeg";
import winter8 from "@/assets/Men/woolencollection8.jpeg";

// Accessories Collection - Add your accessory images here
import accessory1 from "@/assets/Men/accessories1.jpeg";
import accessory2 from "@/assets/Men/accessories3.jpeg";
import accessory3 from "@/assets/Men/accessories4.jpeg";
import accessory4 from "@/assets/Men/accessories5.jpeg";
import accessory5 from "@/assets/Men/accessories6.jpeg";
import accessory6 from "@/assets/Men/accessories7.jpeg";
import accessory7 from "@/assets/Men/accessories8.jpeg";
import accessory8 from "@/assets/Men/accessories9.jpeg";
import ProductFrame from "@/ProductFrame/ProductFrame";


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
  { name: "Sherwani", icon: "👑" },
  { name: "Coat Pant", icon: "🎩" },
  { name: "Indo Western", icon: "🌏" },
  { name: "Kurta Pajama", icon: "🧵" },
  { name: "Blazer", icon: "💼" },
  { name: "Shirts", icon: "👔" },
  { name: "Jeans & T-Shirts", icon: "👖" },
  { name: "Unstitched Collection", icon: "✂️" },
  { name: "Winter Collection", icon: "❄️" },
  { name: "Accessories", icon: "🕶️" }, // Added Accessories category
];

// Mock product data with unique images for each product
const generateProductData = () => ({
  sherwani: [...Array(8)].map((_, i) => ({
    id: `sherwani-${i}`,
    title: ``,
    description: "Exquisite sherwanis with intricate embroidery and premium fabrics for special occasions.",
    images: [
      [sherwani1, sherwani2, sherwani3, sherwani4],
      [sherwani2, sherwani3, sherwani4, sherwani5],
      [sherwani3, sherwani4, sherwani5, sherwani6],
      [sherwani4, sherwani5, sherwani6, sherwani7],
      [sherwani5, sherwani6, sherwani7, sherwani8],
      [sherwani6, sherwani7, sherwani8, sherwani1],
      [sherwani7, sherwani8, sherwani1, sherwani2],
      [sherwani8, sherwani1, sherwani2, sherwani3],
    ][i],
    category: "Sherwani",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Ivory", "Gold", "Maroon", "Navy"],
  })),

  coatPant: [...Array(8)].map((_, i) => ({
    id: `coat-pant-${i}`,
    title: ``,
    description: "Perfectly tailored coat pant sets for formal occasions and professional settings.",
    images: [
      [coatPant1, coatPant2, coatPant3, coatPant4],
      [coatPant2, coatPant3, coatPant4, coatPant5],
      [coatPant3, coatPant4, coatPant5, coatPant6],
      [coatPant4, coatPant5, coatPant6, coatPant7],
      [coatPant5, coatPant6, coatPant7, coatPant8],
      [coatPant6, coatPant7, coatPant8, coatPant1],
      [coatPant7, coatPant8, coatPant1, coatPant2],
      [coatPant8, coatPant1, coatPant2, coatPant3],
    ][i],
    category: "Coat Pant",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Gray", "Brown"],
    price: "$199-$399"
  })),

  indoWestern: [...Array(8)].map((_, i) => ({
    id: `indo-western-${i}`,
    title: ``,
    description: "Beautiful fusion of traditional Indian and contemporary western fashion elements.",
    images: [
      [indoWestern1, indoWestern2, indoWestern3, indoWestern4],
      [indoWestern2, indoWestern3, indoWestern4, indoWestern5],
      [indoWestern3, indoWestern4, indoWestern5, indoWestern6],
      [indoWestern4, indoWestern5, indoWestern6, indoWestern7],
      [indoWestern5, indoWestern6, indoWestern7, indoWestern8],
      [indoWestern6, indoWestern7, indoWestern8, indoWestern1],
      [indoWestern7, indoWestern8, indoWestern1, indoWestern2],
      [indoWestern8, indoWestern1, indoWestern2, indoWestern3],
    ][i],
    category: "Indo Western",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Burgundy", "Emerald", "Mustard"],
    price: "$159-$299"
  })),

  kurtaPajama: [...Array(8)].map((_, i) => ({
    id: `kurta-pajama-${i}`,
    title: ``,
    description: "Comfortable and stylish kurta pajama sets perfect for traditional and festive occasions.",
    images: [
      [kurtaPajama1, kurtaPajama2, kurtaPajama3, kurtaPajama4],
      [kurtaPajama2, kurtaPajama3, kurtaPajama4, kurtaPajama5],
      [kurtaPajama3, kurtaPajama4, kurtaPajama5, kurtaPajama6],
      [kurtaPajama4, kurtaPajama5, kurtaPajama6, kurtaPajama7],
      [kurtaPajama5, kurtaPajama6, kurtaPajama7, kurtaPajama8],
      [kurtaPajama6, kurtaPajama7, kurtaPajama8, kurtaPajama1],
      [kurtaPajama7, kurtaPajama8, kurtaPajama1, kurtaPajama2],
      [kurtaPajama8, kurtaPajama1, kurtaPajama2, kurtaPajama3],
    ][i],
    category: "Kurta Pajama",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Black", "Red"],
    price: "$79-$199"
  })),

  blazer: [...Array(8)].map((_, i) => ({
    id: `blazer-${i}`,
    title: ``,
    description: "Stylish blazers that add sophistication to any outfit, perfect for various occasions.",
    images: [
      [blazer1, blazer2, blazer3, blazer4],
      [blazer2, blazer3, blazer4, blazer5],
      [blazer3, blazer4, blazer5, blazer6],
      [blazer4, blazer5, blazer6, blazer7],
      [blazer5, blazer6, blazer7, blazer8],
      [blazer6, blazer7, blazer8, blazer1],
      [blazer7, blazer8, blazer1, blazer2],
      [blazer8, blazer1, blazer2, blazer3],
    ][i],
    category: "Blazer",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Black", "Gray", "Burgundy"],
    price: "$129-$299"
  })),

  shirts: [...Array(8)].map((_, i) => ({
    id: `shirts-${i}`,
    title: ``,
    description: "Premium quality shirts for formal and casual occasions, available in various fits and fabrics.",
    images: [
      [shirt1, shirt2, shirt3, shirt4],
      [shirt2, shirt3, shirt4, shirt5],
      [shirt3, shirt4, shirt5, shirt6],
      [shirt4, shirt5, shirt6, shirt7],
      [shirt5, shirt6, shirt7, shirt8],
      [shirt6, shirt7, shirt8, shirt1],
      [shirt7, shirt8, shirt1, shirt2],
      [shirt8, shirt1, shirt2, shirt3],
    ][i],
    category: "Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Black", "Pink", "Gray"],
    price: "$39-$129"
  })),

  jeansTshirts: [...Array(8)].map((_, i) => ({
    id: `jeans-tshirts-${i}`,
    title: ``,
    description: "Comfortable jeans and trendy t-shirts for everyday casual wear and outings.",
    images: [
      [jeansTshirt1, jeansTshirt2, jeansTshirt3, jeansTshirt4],
      [jeansTshirt2, jeansTshirt3, jeansTshirt4, jeansTshirt5],
      [jeansTshirt3, jeansTshirt4, jeansTshirt5, jeansTshirt6],
      [jeansTshirt4, jeansTshirt5, jeansTshirt6, jeansTshirt7],
      [jeansTshirt5, jeansTshirt6, jeansTshirt7, jeansTshirt8],
      [jeansTshirt6, jeansTshirt7, jeansTshirt8, jeansTshirt1],
      [jeansTshirt7, jeansTshirt8, jeansTshirt1, jeansTshirt2],
      [jeansTshirt8, jeansTshirt1, jeansTshirt2, jeansTshirt3],
    ][i],
    category: "Jeans & T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "Black", "Gray", "White"],
    price: "$29-$79"
  })),

  unstitched: [...Array(8)].map((_, i) => ({
    id: `unstitched-${i}`,
    title: ``,
    description: "High-quality unstitched fabrics for custom tailoring and personalized outfits.",
    images: [
      [unstitched1, unstitched2, unstitched3, unstitched4],
      [unstitched2, unstitched3, unstitched4, unstitched5],
      [unstitched3, unstitched4, unstitched5, unstitched6],
      [unstitched4, unstitched5, unstitched6, unstitched7],
      [unstitched5, unstitched6, unstitched7, unstitched8],
      [unstitched6, unstitched7, unstitched8, unstitched1],
      [unstitched7, unstitched8, unstitched1, unstitched2],
      [unstitched8, unstitched1, unstitched2, unstitched3],
    ][i],
    category: "Unstitched Collection",
    sizes: ["2.5m", "3m", "3.5m", "4m"],
    colors: ["Multiple", "Assorted", "Designer Prints"],
    price: "$49-$149"
  })),

  winter: [...Array(8)].map((_, i) => ({
    id: `winter-${i}`,
    title: ``,
    description: "Warm and stylish winter clothing to keep you comfortable in cold weather.",
    images: [
      [winter1, winter2, winter3, winter4],
      [winter2, winter3, winter4, winter5],
      [winter3, winter4, winter5, winter6],
      [winter4, winter5, winter6, winter7],
      [winter5, winter6, winter7, winter8],
      [winter6, winter7, winter8, winter1],
      [winter7, winter8, winter1, winter2],
      [winter8, winter1, winter2, winter3],
    ][i],
    category: "Winter Collection",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Black", "Gray", "Burgundy"],
    price: "$89-$259"
  })),

  // Added Accessories Collection
  accessories: [...Array(8)].map((_, i) => ({
    id: `accessories-${i}`,
    title: ``,
    description: "Complete your look with our premium accessories collection - from watches to belts and more.",
    images: [
      [accessory1, accessory2, accessory3, accessory4],
      [accessory2, accessory3, accessory4, accessory5],
      [accessory3, accessory4, accessory5, accessory6],
      [accessory4, accessory5, accessory6, accessory7],
      [accessory5, accessory6, accessory7, accessory8],
      [accessory6, accessory7, accessory8, accessory1],
      [accessory7, accessory8, accessory1, accessory2],
      [accessory8, accessory1, accessory2, accessory3],
    ][i],
    category: "Accessories",
    sizes: ["One Size", "S", "M", "L"],
    colors: ["Black", "Brown", "Silver", "Gold", "Navy"],
    price: "$19-$199"
  }))
});

const MensCollection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Sherwani");
  const [hoveredCategory, setHoveredCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productData = generateProductData();

  const sectionData = [
    {
      title: "👑 Sherwani Collection",
      category: "Sherwani",
      gradient: "from-pink-50 to-rose-50",
      products: productData.sherwani,
    },
    {
      title: "🎩 Coat Pant Sets",
      category: "Coat Pant",
      gradient: "from-pink-50 to-rose-50",
      products: productData.coatPant,
    },
    {
      title: "🌏 Indo Western Fusion",
      category: "Indo Western",
      gradient: "from-pink-50 to-rose-50",
      products: productData.indoWestern,
    },
    {
      title: "🧵 Kurta Pajama",
      category: "Kurta Pajama",
      gradient: "from-pink-50 to-rose-50",
      products: productData.kurtaPajama,
    },
    {
      title: "💼 Blazer Collection",
      category: "Blazer",
      gradient: "from-pink-50 to-rose-50",
      products: productData.blazer,
    },
    {
      title: "👔 Shirts Collection",
      category: "Shirts",
      gradient: "from-pink-50 to-rose-50",
      products: productData.shirts,
    },
    {
      title: "👖 Jeans & T-Shirts",
      category: "Jeans & T-Shirts",
      gradient: "from-pink-50 to-rose-50",
      products: productData.jeansTshirts,
    },
    {
      title: "✂️ Unstitched Collection",
      category: "Unstitched Collection",
      gradient: "from-pink-50 to-rose-50",
      products: productData.unstitched,
    },
    {
      title: "❄️ Winter Collection",
      category: "Winter Collection",
      gradient: "from-pink-50 to-rose-50",
      products: productData.winter,
    },
    {
      title: "🕶️ Accessories Collection", // Added Accessories section
      category: "Accessories",
      gradient: "from-pink-50 to-rose-50",
      products: productData.accessories,
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
              PREMIUM COLLECTION
            </span>
            <Sparkles className="w-6 h-6 text-pink-500" />
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-pink-600 to-slate-800 bg-clip-text text-transparent">
            Men's Fashion Collection
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
            <Star className="w-5 h-5 text-pink-500 fill-current" />
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover sophisticated fashion for the modern gentleman — where elegance meets contemporary 
            style in every detail and every occasion.
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
                        {section.products.length} premium items
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
                {/* Header */}
                {/* <div className="flex justify-between items-center p-4 border-b border-slate-200">
                  <h2 className="font-serif text-xl font-bold text-slate-800">
                    {selectedProduct.title}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors duration-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div> */}

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
};

export default MensCollection;