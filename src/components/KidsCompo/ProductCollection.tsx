// import { motion } from "framer-motion";
// import { useState } from "react";
// import kidsHero from "@/assets/kids-hero.jpg"; // Replace with your actual image
// import { Button } from "@/components/ui/button";
// import ProductCard from "@/components/ProductCard"; // Assuming you already have this component

// const categories = [
//   { name: "Boys", count: 24 },
//   { name: "Girls", count: 28 },
//   { name: "Infants", count: 16 },
//   { name: "Accessories", count: 32 },
// ];

// export default function ProductCollection() {
//   const [activeCategory, setActiveCategory] = useState("Boys");

//   const sectionData = [
//     {
//       title: "Boys Fashion",
//       category: "Boys",
//       products: [...Array(8)].map(() => ({
//         title: "Boys Casual Set",
//         image: kidsHero,
//       })),
//     },
//     {
//       title: "Girls Fashion",
//       category: "Girls",
//       products: [...Array(8)].map(() => ({
//         title: "Girls Party Dress",
//         image: kidsHero,
//       })),
//     },
//     {
//       title: "Infant Wear",
//       category: "Infants",
//       products: [...Array(4)].map(() => ({
//         title: "Baby Comfort Set",
//         image: kidsHero,
//       })),
//     },
//   ];

//   return (
//     <section className="container mx-auto px-4 py-20">
//       {/* Heading */}
//       <motion.div
//         className="text-center mb-16"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <h2 className="font-serif text-5xl font-semibold mb-4 tracking-tight">
//           Kids Collection
//         </h2>
//         <div className="w-24 h-1 bg-accent mx-auto mb-4 rounded-full"></div>
//         <p className="text-muted-foreground max-w-2xl mx-auto">
//           Explore the cutest trends for every little star — from playful casuals to festive favorites.
//         </p>
//       </motion.div>

//       {/* Category Buttons */}
//       <div className="flex flex-wrap gap-4 justify-center mb-16">
//         {categories.map((cat) => (
//           <Button
//             key={cat.name}
//             onClick={() => setActiveCategory(cat.name)}
//             className={`px-6 py-3 rounded-full border transition-all duration-300 ${
//               activeCategory === cat.name
//                 ? "bg-accent text-white border-accent shadow-lg scale-105"
//                 : "border-border hover:border-accent hover:text-accent"
//             }`}
//             variant="outline"
//           >
//             {cat.name}{" "}
//             <span className="text-muted-foreground ml-1">({cat.count})</span>
//           </Button>
//         ))}
//       </div>

//       {/* Product Sections */}
//       {sectionData.map(
//         (section) =>
//           (activeCategory === section.category || activeCategory === "All") && (
//             <motion.div
//               key={section.category}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="mb-20"
//             >
//               <h2 className="font-serif text-3xl font-semibold mb-8 flex items-center gap-2">
//                 <span>{section.title}</span>
//                 <span className="flex-grow h-[1px] bg-border"></span>
//               </h2>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                 {section.products.map((product, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: i * 0.05 }}
//                   >
//                     <ProductCard
//                       image={product.image}
//                       title={product.title}
//                       category={section.category}
//                     />
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           )
//       )}
//     </section>
//   );
// }











// import { motion } from "framer-motion";
// import { useState } from "react";
// import kidsHero from "@/assets/kids-hero.jpg";
// import { Button } from "@/components/ui/button";
// import ProductCard from "@/components/ProductCard";
// import { Sparkles, Star, Zap } from "lucide-react";

// const categories = [
//   { name: "Boys",  icon: "👦" },
//   { name: "Girls",  icon: "👧" },
//   { name: "Infants",  icon: "👶" },
//   { name: "Accessories",  icon: "🎀" },
// ];

// export default function ProductCollection() {
//   const [activeCategory, setActiveCategory] = useState("Boys");
//   const [hoveredCategory, setHoveredCategory] = useState("");

//   const sectionData = [
//     {
//       title: "Boys Fashion",
//       category: "Boys",
//       gradient: "from-blue-50 to-cyan-50",
//       products: [...Array(8)].map((_, i) => ({
//         title: ["Casual Play Set", "Denim Adventure", "Sports Collection", "Party Wear"][i % 4],
//         image: kidsHero,
//       })),
//     },
//     {
//       title: "Girls Fashion",
//       category: "Girls",
//       gradient: "from-pink-50 to-rose-50",
//       products: [...Array(8)].map((_, i) => ({
//         title: ["Princess Dress", "Floral Fantasy", "Sparkle Outfit", "Casual Chic"][i % 4],
//         image: kidsHero,
//       })),
//     },
//     {
//       title: "Infant Wear",
//       category: "Infants",
//       gradient: "from-green-50 to-emerald-50",
//       products: [...Array(4)].map((_, i) => ({
//         title: ["Cozy Onesie", "Soft Romper", "Sleep Set", "Play Time"][i % 4],
//         image: kidsHero,
//       })),
//     },
//     {
//       title: "Kids Accessories",
//       category: "Accessories",
//       gradient: "from-purple-50 to-violet-50",
//       products: [...Array(8)].map((_, i) => ({
//         title: ["Colorful Backpacks", "Funny Hats", "Character Shoes", "Water Bottles"][i % 4],
//         image: kidsHero,
//       })),
//     },
//   ];

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
//               TRENDING COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-accent to-slate-800 bg-clip-text text-transparent">
//             Kids Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-yellow-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover the most adorable fashion for your little stars — where comfort meets style 
//             in every stitch and every smile.
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
//                 {/* Hover effect background */}
//                 <div className={`absolute inset-0 bg-gradient-to-r from-accent to-accent/90 transition-all duration-500 ${
//                   hoveredCategory === cat.name && activeCategory !== cat.name 
//                     ? "opacity-5" 
//                     : "opacity-0"
//                 }`}></div>
                
//                 <span className="text-lg mr-2">{cat.icon}</span>
//                 {cat.name}
               
                
//                 {/* Active indicator */}
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
//             (activeCategory === section.category || activeCategory === "All") && (
//               <motion.div
//                 key={section.category}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="mb-20"
//               >
//                 {/* Section Header */}
//                 <div className="flex items-center justify-between mb-10">
//                   <div className="flex items-center gap-4">
//                     <div className="w-2 h-12 bg-gradient-to-b from-accent to-accent/70 rounded-full"></div>
//                     <div>
//                       <h2 className="font-serif text-4xl font-bold text-slate-800">
//                         {section.title}
//                       </h2>
//                       <p className="text-slate-600 mt-1">
//                         {section.products.length} amazing items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-white border border-slate-200 hover:border-accent hover:bg-white rounded-xl px-6 py-2 transition-all duration-300">
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
//                       key={i}
//                       initial={{ opacity: 0, scale: 0.9, y: 20 }}
//                       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                       whileHover={{ y: -8 }}
//                       transition={{ 
//                         delay: i * 0.1,
//                         type: "spring",
//                         stiffness: 300
//                       }}
//                       className="group cursor-pointer"
//                     >
//                       <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
//                         {/* Product Image Container */}
//                         <div className="relative overflow-hidden bg-slate-50">
//                           <motion.img
//                             src={product.image}
//                             alt={product.title}
//                             className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                             whileHover={{ scale: 1.05 }}
//                             transition={{ type: "spring", stiffness: 300 }}
//                           />
//                           {/* Overlay gradient */}
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                         </div>
                        
//                         {/* Product Info */}
//                         <div className="p-6">
//                           <h3 className="font-semibold text-lg text-slate-800 mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300 text-center">
//                             {product.title}
//                           </h3>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             )
//         )}
//       </div>
//     </section>
//   );
// }






// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import kidsHero from "@/assets/kids-hero.jpg";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, Zap, X, ChevronLeft, ChevronRight } from "lucide-react";

// const categories = [
//   { name: "Boys",  icon: "👦" },
//   { name: "Girls",  icon: "👧" },
//   { name: "Infants",  icon: "👶" },
//   { name: "Accessories",  icon: "🎀" },
// ];

// // Mock product data with multiple images
// const generateProductData = () => ({
//   boys: [...Array(8)].map((_, i) => ({
//     id: `boy-${i}`,
//     title: ["Casual Play Set", "Denim Adventure", "Sports Collection", "Party Wear"][i % 4],
//     price: `$${(25 + i * 5).toFixed(2)}`,
//     description: "Comfortable and stylish clothing perfect for everyday wear and play.",
//     images: [kidsHero, kidsHero, kidsHero, kidsHero], // In real app, use different images
//     category: "Boys",
//     sizes: ["2T", "3T", "4T", "5T"],
//     colors: ["Blue", "Navy", "Red", "Green"]
//   })),
//   girls: [...Array(8)].map((_, i) => ({
//     id: `girl-${i}`,
//     title: ["Princess Dress", "Floral Fantasy", "Sparkle Outfit", "Casual Chic"][i % 4],
//     price: `$${(28 + i * 5).toFixed(2)}`,
//     description: "Beautiful dresses and outfits that make every day special.",
//     images: [kidsHero, kidsHero, kidsHero, kidsHero],
//     category: "Girls",
//     sizes: ["2T", "3T", "4T", "5T"],
//     colors: ["Pink", "Purple", "White", "Yellow"]
//   })),
//   infants: [...Array(4)].map((_, i) => ({
//     id: `infant-${i}`,
//     title: ["Cozy Onesie", "Soft Romper", "Sleep Set", "Play Time"][i % 4],
//     price: `$${(20 + i * 4).toFixed(2)}`,
//     description: "Soft and gentle clothing for your little ones.",
//     images: [kidsHero, kidsHero, kidsHero, kidsHero],
//     category: "Infants",
//     sizes: ["0-3M", "3-6M", "6-9M", "9-12M"],
//     colors: ["White", "Blue", "Pink", "Gray"]
//   })),
//   accessories: [...Array(8)].map((_, i) => ({
//     id: `accessory-${i}`,
//     title: ["Colorful Backpacks", "Funny Hats", "Character Shoes", "Water Bottles"][i % 4],
//     price: `$${(15 + i * 3).toFixed(2)}`,
//     description: "Fun accessories that complete every outfit.",
//     images: [kidsHero, kidsHero, kidsHero, kidsHero],
//     category: "Accessories",
//     sizes: ["One Size"],
//     colors: ["Multi", "Red", "Blue", "Green"]
//   }))
// });

// export default function ProductCollection() {
//   const [activeCategory, setActiveCategory] = useState("Boys");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "Boys Fashion",
//       category: "Boys",
//       gradient: "from-blue-50 to-cyan-50",
//       products: productData.boys,
//     },
//     {
//       title: "Girls Fashion",
//       category: "Girls",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.girls,
//     },
//     {
//       title: "Infant Wear",
//       category: "Infants",
//       gradient: "from-green-50 to-emerald-50",
//       products: productData.infants,
//     },
//     {
//       title: "Kids Accessories",
//       category: "Accessories",
//       gradient: "from-purple-50 to-violet-50",
//       products: productData.accessories,
//     },
//   ];

//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden"; // Prevent background scrolling
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
//     return currentSection.products.filter(product => product.id !== selectedProduct.id).slice(0, 4);
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
//               TRENDING COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-accent to-slate-800 bg-clip-text text-transparent">
//             Kids Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-yellow-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover the most adorable fashion for your little stars — where comfort meets style 
//             in every stitch and every smile.
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
//             (activeCategory === section.category || activeCategory === "All") && (
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
//                         {section.products.length} amazing items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-white border border-slate-200 hover:border-accent hover:bg-white rounded-xl px-6 py-2 transition-all duration-300">
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
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                         </div>
                        
//                         <div className="p-6">
//                           <h3 className="font-semibold text-lg text-slate-800 mb-2 group-hover:text-accent transition-colors duration-300">
//                             {product.title}
//                           </h3>
//                           <p className="text-accent font-bold text-lg">{product.price}</p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             )
//         )}
//       </div>

//       {/* Product Modal */}
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
//               <div className="flex flex-col lg:flex-row h-full">
//                 {/* Image Gallery Section */}
//                 <div className="lg:w-1/2 p-8">
//                   <div className="relative">
//                     {/* Main Image */}
//                     <div className="relative rounded-2xl overflow-hidden bg-slate-50">
//                       <motion.img
//                         key={currentImageIndex}
//                         src={selectedProduct.images[currentImageIndex]}
//                         alt={selectedProduct.title}
//                         className="w-full h-96 object-cover"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                       />
                      
//                       {/* Navigation Arrows */}
//                       <button
//                         onClick={prevImage}
//                         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
//                       >
//                         <ChevronLeft className="w-6 h-6" />
//                       </button>
//                       <button
//                         onClick={nextImage}
//                         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
//                       >
//                         <ChevronRight className="w-6 h-6" />
//                       </button>
//                     </div>

//                     {/* Thumbnail Gallery */}
//                     <div className="flex gap-3 mt-4 overflow-x-auto py-2">
//                       {selectedProduct.images.map((image, index) => (
//                         <motion.button
//                           key={index}
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={() => setCurrentImageIndex(index)}
//                           className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
//                             currentImageIndex === index
//                               ? "border-accent shadow-md"
//                               : "border-slate-200 hover:border-slate-300"
//                           }`}
//                         >
//                           <img
//                             src={image}
//                             alt={`${selectedProduct.title} ${index + 1}`}
//                             className="w-full h-full object-cover"
//                           />
//                         </motion.button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Product Details Section */}
//                 <div className="lg:w-1/2 p-8 flex flex-col">
//                   <div className="flex-1">
//                     <div className="flex justify-between items-start mb-6">
//                       <div>
//                         <h2 className="font-serif text-3xl font-bold text-slate-800 mb-2">
//                           {selectedProduct.title}
//                         </h2>
//                         <p className="text-accent font-bold text-2xl mb-4">
//                           {selectedProduct.price}
//                         </p>
//                       </div>
//                       <button
//                         onClick={closeModal}
//                         className="bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors duration-300"
//                       >
//                         <X className="w-6 h-6" />
//                       </button>
//                     </div>

//                     <p className="text-slate-600 mb-6 leading-relaxed">
//                       {selectedProduct.description}
//                     </p>

//                     {/* Size Selection */}
//                     <div className="mb-6">
//                       <h3 className="font-semibold text-slate-800 mb-3">Size</h3>
//                       <div className="flex gap-2 flex-wrap">
//                         {selectedProduct.sizes.map((size) => (
//                           <button
//                             key={size}
//                             className="px-4 py-2 border border-slate-200 rounded-lg hover:border-accent hover:bg-accent/5 transition-all duration-300"
//                           >
//                             {size}
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Color Selection */}
//                     <div className="mb-8">
//                       <h3 className="font-semibold text-slate-800 mb-3">Color</h3>
//                       <div className="flex gap-3 flex-wrap">
//                         {selectedProduct.colors.map((color) => (
//                           <button
//                             key={color}
//                             className="px-4 py-2 border border-slate-200 rounded-lg hover:border-accent hover:bg-accent/5 transition-all duration-300"
//                           >
//                             {color}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex gap-4">
//                     <Button className="flex-1 bg-accent hover:bg-accent/90 text-white py-3 rounded-xl text-lg font-semibold">
//                       Add to Cart
//                     </Button>
//                     <Button className="px-8 border border-accent text-accent hover:bg-accent/5 py-3 rounded-xl text-lg font-semibold">
//                       ♡
//                     </Button>
//                   </div>
//                 </div>
//               </div>

//               {/* Related Products Section */}
//               <div className="border-t border-slate-200 p-8">
//                 <h3 className="font-serif text-2xl font-bold text-slate-800 mb-6">
//                   Related Products
//                 </h3>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                   {getRelatedProducts().map((product) => (
//                     <motion.div
//                       key={product.id}
//                       whileHover={{ scale: 1.05 }}
//                       className="cursor-pointer"
//                       onClick={() => openModal(product)}
//                     >
//                       <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
//                         <img
//                           src={product.images[0]}
//                           alt={product.title}
//                           className="w-full h-32 object-cover"
//                         />
//                         <div className="p-3">
//                           <h4 className="font-semibold text-sm text-slate-800 mb-1">
//                             {product.title}
//                           </h4>
//                           <p className="text-accent font-bold">{product.price}</p>
//                         </div>
//                       </div>
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









// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import kidsHero from "@/assets/kids-hero.jpg";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// const categories = [
//   { name: "Boys",  icon: "👦" },
//   { name: "Girls",  icon: "👧" },
//   { name: "Infants",  icon: "👶" },
  
// ];

// // Mock product data with multiple images
// const generateProductData = () => ({
//   boys: [...Array(8)].map((_, i) => ({
//     id: `boy-${i}`,
//     title: ["Casual Play Set", "Denim Adventure", "Sports Collection", "Party Wear"][i % 4],
//     description: "Comfortable and stylish clothing perfect for everyday wear and play.",
//     images: [kidsHero, kidsHero, kidsHero, kidsHero], // In real app, use different images
//     category: "Boys",
//     sizes: ["2T", "3T", "4T", "5T"],
//     colors: ["Blue", "Navy", "Red", "Green"]
//   })),
//   girls: [...Array(8)].map((_, i) => ({
//     id: `girl-${i}`,
//     title: ["Princess Dress", "Floral Fantasy", "Sparkle Outfit", "Casual Chic"][i % 4],
//     description: "Beautiful dresses and outfits that make every day special.",
//     images: [kidsHero, kidsHero, kidsHero, kidsHero],
//     category: "Girls",
//     sizes: ["2T", "3T", "4T", "5T"],
//     colors: ["Pink", "Purple", "White", "Yellow"]
//   })),
//   infants: [...Array(4)].map((_, i) => ({
//     id: `infant-${i}`,
//     title: ["Cozy Onesie", "Soft Romper", "Sleep Set", "Play Time"][i % 4],
//     description: "Soft and gentle clothing for your little ones.",
//     images: [kidsHero, kidsHero, kidsHero, kidsHero],
//     category: "Infants",
//     sizes: ["0-3M", "3-6M", "6-9M", "9-12M"],
//     colors: ["White", "Blue", "Pink", "Gray"]
//   })),
//   accessories: [...Array(8)].map((_, i) => ({
//     id: `accessory-${i}`,
//     title: ["Colorful Backpacks", "Funny Hats", "Character Shoes", "Water Bottles"][i % 4],
//     description: "Fun accessories that complete every outfit.",
//     images: [kidsHero, kidsHero, kidsHero, kidsHero],
//     category: "Accessories",
//     sizes: ["One Size"],
//     colors: ["Multi", "Red", "Blue", "Green"]
//   }))
// });

// export default function ProductCollection() {
//   const [activeCategory, setActiveCategory] = useState("Boys");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "Boys Fashion",
//       category: "Boys",
//       gradient: "from-blue-50 to-cyan-50",
//       products: productData.boys,
//     },
//     {
//       title: "Girls Fashion",
//       category: "Girls",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.girls,
//     },
//     {
//       title: "Infant Wear",
//       category: "Infants",
//       gradient: "from-green-50 to-emerald-50",
//       products: productData.infants,
//     },
//     {
//       title: "Kids Accessories",
//       category: "Accessories",
//       gradient: "from-purple-50 to-violet-50",
//       products: productData.accessories,
//     },
//   ];

//   const openModal = (product) => {
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
//     return currentSection.products.filter(product => product.id !== selectedProduct.id);
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
//               TRENDING COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-accent to-slate-800 bg-clip-text text-transparent">
//             Kids Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-yellow-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover the most adorable fashion for your little stars — where comfort meets style 
//             in every stitch and every smile.
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
//             (activeCategory === section.category || activeCategory === "All") && (
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
//                         {section.products.length} amazing items
//                       </p>
//                     </div>
//                   </div>
                  
//                   <Button className="group bg-black border border-slate-200 hover:border-accent hover:bg-black rounded-xl px-6 py-2 transition-all duration-300">
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
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                         </div>
                        
//                         <div className="p-6">
//                           <h3 className="font-semibold text-lg text-slate-800 mb-2 group-hover:text-accent transition-colors duration-300">
//                             {product.title}
//                           </h3>
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

//                     {/* Product Description */}
//                     <div className="mb-8">
//                       <p className="text-slate-600 leading-relaxed">
//                         {selectedProduct.description}
//                       </p>
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

// // Import all your actual kids collection images
// import kidsHero from "@/assets/kids-hero.jpg";

// // Boys Collection
// import boys1 from "@/assets/Kids/pantset1.jpeg";
// import boys2 from "@/assets/Kids/pantset3.jpeg";
// import boys3 from "@/assets/Kids/pantset4.jpeg";
// import boys4 from "@/assets/Kids/pantset5.jpeg";
// import boys5 from "@/assets/Kids/pantset5.jpeg";
// import boys6 from "@/assets/Kids/pantset6.jpeg";
// import boys7 from "@/assets/Kids/pantset7.jpeg";
// import boys8 from "@/assets/Kids/pantset8.jpeg";

// // Girls Collection
// import girls1 from "@/assets/Kids/girljeans1.jpeg";
// import girls2 from "@/assets/Kids/girljeans2.jpeg";
// import girls3 from "@/assets/Kids/girljeans3.jpeg";
// import girls4 from "@/assets/Kids/girljeans4.jpeg";
// import girls5 from "@/assets/Kids/girljeans1.jpeg";
// import girls6 from "@/assets/Kids/girljeans2.jpeg";
// import girls7 from "@/assets/Kids/girljeans3.jpeg";
// import girls8 from "@/assets/Kids/girljeans4.jpeg";

// // Infants Collection
// import infants1 from "@/assets/Kids/shirt1.jpeg";
// import infants2 from "@/assets/Kids/shirt2.jpeg";
// import infants3 from "@/assets/Kids/shirt3.jpeg";
// import infants4 from "@/assets/Kids/shirt4.jpeg";
// import infants5 from "@/assets/Kids/shirt5.jpeg";
// import infants6 from "@/assets/Kids/shirt6.jpeg";
// import infants7 from "@/assets/Kids/shirt7.jpeg";
// import infants8 from "@/assets/Kids/shirt8.jpeg";

// // Accessories Collection
// import accessories1 from "@/assets/Kids/pantset1.jpeg";
// import accessories2 from "@/assets/Kids/pantset3.jpeg";
// import accessories3 from "@/assets/Kids/pantset4.jpeg";
// import accessories4 from "@/assets/Kids/pantset5.jpeg";
// import accessories5 from "@/assets/Kids/pantset6.jpeg";
// import accessories6 from "@/assets/Kids/pantset7.jpeg";
// import accessories7 from "@/assets/Kids/pantset8.jpeg";
// import accessories8 from "@/assets/Kids/pantset9.jpeg";

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
//   { name: "Boys", icon: "👦" },
//   { name: "Girls", icon: "👧" },
//   { name: "Infants", icon: "👶" },
//   // { name: "Accessories", icon: "🎒" },
// ];

// // Mock product data with unique images for each product
// const generateProductData = () => ({
//   boys: [...Array(8)].map((_, i) => ({
//     id: `boy-${i}`,
//     title: [
//       "Casual Play Set",
//       "Denim Adventure",
//       "Sports Collection",
//       "Party Wear",
//       "School Uniform",
//       "Winter Jacket",
//       "Summer Combo",
//       "Festive Outfit"
//     ][i],
//     description: "Comfortable and stylish clothing perfect for everyday wear and play. Made with soft, breathable fabrics for active kids.",
//     images: [
//       [boys1, boys2, boys3, boys4],
//       [boys2, boys3, boys4, boys5],
//       [boys3, boys4, boys5, boys6],
//       [boys4, boys5, boys6, boys7],
//       [boys5, boys6, boys7, boys8],
//       [boys6, boys7, boys8, boys1],
//       [boys7, boys8, boys1, boys2],
//       [boys8, boys1, boys2, boys3],
//     ][i],
//     category: "Boys",
//     sizes: ["2T", "3T", "4T", "5T", "6T"],
//     colors: ["Blue", "Navy", "Red", "Green", "Gray"],
   
//   })),

//   girls: [...Array(8)].map((_, i) => ({
//     id: `girl-${i}`,
//     title: [
//       "Princess Dress",
//       "Floral Fantasy",
//       "Sparkle Outfit",
//       "Casual Chic",
//       "Party Gown",
//       "School Dress",
//       "Playtime Set",
//       "Designer Frocks"
//     ][i],
//     description: "Beautiful dresses and outfits that make every day special. Designed with comfort and style for your little princess.",
//     images: [
//       [girls1, girls2, girls3, girls4],
//       [girls2, girls3, girls4, girls5],
//       [girls3, girls4, girls5, girls6],
//       [girls4, girls5, girls6, girls7],
//       [girls5, girls6, girls7, girls8],
//       [girls6, girls7, girls8, girls1],
//       [girls7, girls8, girls1, girls2],
//       [girls8, girls1, girls2, girls3],
//     ][i],
//     category: "Girls",
//     sizes: ["2T", "3T", "4T", "5T", "6T"],
//     colors: ["Pink", "Purple", "White", "Yellow", "Lavender"],
//     price: "$29-$59"
//   })),

//   infants: [...Array(8)].map((_, i) => ({
//     id: `infant-${i}`,
//     title: [
//       "Cozy Onesie",
//       "Soft Romper",
//       "Sleep Set",
//       "Play Time",
//       "Baby Grow",
//       "Cuddle Set",
//       "Organic Cotton",
//       "Premium Infant Wear"
//     ][i],
//     description: "Soft and gentle clothing for your little ones. Made from hypoallergenic materials perfect for sensitive skin.",
//     images: [
//       [infants1, infants2, infants3, infants4],
//       [infants2, infants3, infants4, infants5],
//       [infants3, infants4, infants5, infants6],
//       [infants4, infants5, infants6, infants7],
//       [infants5, infants6, infants7, infants8],
//       [infants6, infants7, infants8, infants1],
//       [infants7, infants8, infants1, infants2],
//       [infants8, infants1, infants2, infants3],
//     ][i],
//     category: "Infants",
//     sizes: ["0-3M", "3-6M", "6-9M", "9-12M", "12-18M"],
//     colors: ["White", "Blue", "Pink", "Gray", "Pastel Yellow"],
//     price: "$19-$39"
//   })),

//   accessories: [...Array(8)].map((_, i) => ({
//     id: `accessory-${i}`,
//     title: [
//       "Colorful Backpacks",
//       "Funny Hats",
//       "Character Shoes",
//       "Water Bottles",
//       "Kids Watches",
//       "Hair Accessories",
//       "School Bags",
//       "Playtime Gear"
//     ][i],
//     description: "Fun accessories that complete every outfit. Durable and child-friendly designs for everyday use.",
//     images: [
//       [accessories1, accessories2, accessories3, accessories4],
//       [accessories2, accessories3, accessories4, accessories5],
//       [accessories3, accessories4, accessories5, accessories6],
//       [accessories4, accessories5, accessories6, accessories7],
//       [accessories5, accessories6, accessories7, accessories8],
//       [accessories6, accessories7, accessories8, accessories1],
//       [accessories7, accessories8, accessories1, accessories2],
//       [accessories8, accessories1, accessories2, accessories3],
//     ][i],
//     category: "Accessories",
//     sizes: ["One Size", "Adjustable", "Small", "Medium"],
//     colors: ["Multi", "Red", "Blue", "Green", "Pink"],
//     price: "$12-$35"
//   }))
// });

// export default function KidsCollection() {
//   const [activeCategory, setActiveCategory] = useState("Boys");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "👦 Boys Fashion",
//       category: "Boys",
//       gradient: "from-blue-50 to-cyan-50",
//       products: productData.boys,
//     },
//     {
//       title: "👧 Girls Fashion",
//       category: "Girls",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.girls,
//     },
//     {
//       title: "👶 Infant Wear",
//       category: "Infants",
//       gradient: "from-green-50 to-emerald-50",
//       products: productData.infants,
//     },
//     {
//       title: "🎒 Kids Accessories",
//       category: "Accessories",
//       gradient: "from-purple-50 to-violet-50",
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
//               ADORABLE COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-accent to-slate-800 bg-clip-text text-transparent">
//             Kids Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-yellow-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover the most adorable fashion for your little stars — where comfort meets style 
//             in every stitch and every smile.
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
//                         {section.products.length} amazing items
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
//                             src={product.images[0]}
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
//                             <span className="text-sm text-slate-600">Free Shipping</span>
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
// }
  









// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Import all your actual kids collection images
// import kidsHero from "@/assets/kids-hero.jpg";

// // Boys Collection
// import boys1 from "@/assets/Kids/pantset1.jpeg";
// import boys2 from "@/assets/Kids/pantset3.jpeg";
// import boys3 from "@/assets/Kids/pantset4.jpeg";
// import boys4 from "@/assets/Kids/pantset5.jpeg";
// import boys5 from "@/assets/Kids/pantset5.jpeg";
// import boys6 from "@/assets/Kids/pantset6.jpeg";
// import boys7 from "@/assets/Kids/pantset7.jpeg";
// import boys8 from "@/assets/Kids/pantset8.jpeg";

// // Girls Collection
// import girls1 from "@/assets/Kids/girljeans1.jpeg";
// import girls2 from "@/assets/Kids/girljeans2.jpeg";
// import girls3 from "@/assets/Kids/girljeans3.jpeg";
// import girls4 from "@/assets/Kids/girljeans4.jpeg";
// import girls5 from "@/assets/Kids/girljeans1.jpeg";
// import girls6 from "@/assets/Kids/girljeans2.jpeg";
// import girls7 from "@/assets/Kids/girljeans3.jpeg";
// import girls8 from "@/assets/Kids/girljeans4.jpeg";

// // Infants Collection
// import infants1 from "@/assets/Kids/shirt1.jpeg";
// import infants2 from "@/assets/Kids/shirt2.jpeg";
// import infants3 from "@/assets/Kids/shirt3.jpeg";
// import infants4 from "@/assets/Kids/shirt4.jpeg";
// import infants5 from "@/assets/Kids/shirt5.jpeg";
// import infants6 from "@/assets/Kids/shirt6.jpeg";
// import infants7 from "@/assets/Kids/shirt7.jpeg";
// import infants8 from "@/assets/Kids/shirt8.jpeg";

// // Accessories Collection
// import accessories1 from "@/assets/Kids/pantset1.jpeg";
// import accessories2 from "@/assets/Kids/pantset3.jpeg";
// import accessories3 from "@/assets/Kids/pantset4.jpeg";
// import accessories4 from "@/assets/Kids/pantset5.jpeg";
// import accessories5 from "@/assets/Kids/pantset6.jpeg";
// import accessories6 from "@/assets/Kids/pantset7.jpeg";
// import accessories7 from "@/assets/Kids/pantset8.jpeg";
// import accessories8 from "@/assets/Kids/pantset9.jpeg";

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
//   { name: "Boys", icon: "👦" },
//   { name: "Girls", icon: "👧" },
//   { name: "Infants", icon: "👶" },
//   // { name: "Accessories", icon: "🎒" },
// ];

// // Mock product data with unique images for each product
// const generateProductData = () => ({
//   boys: [...Array(8)].map((_, i) => ({
//     id: `boy-${i}`,
//     title: [
//       "Casual Play Set",
//       "Denim Adventure",
//       "Sports Collection",
//       "Party Wear",
//       "School Uniform",
//       "Winter Jacket",
//       "Summer Combo",
//       "Festive Outfit"
//     ][i],
//     description: "Comfortable and stylish clothing perfect for everyday wear and play. Made with soft, breathable fabrics for active kids.",
//     images: [
//       [boys1, boys2, boys3, boys4],
//       [boys2, boys3, boys4, boys5],
//       [boys3, boys4, boys5, boys6],
//       [boys4, boys5, boys6, boys7],
//       [boys5, boys6, boys7, boys8],
//       [boys6, boys7, boys8, boys1],
//       [boys7, boys8, boys1, boys2],
//       [boys8, boys1, boys2, boys3],
//     ][i],
//     category: "Boys",
//     sizes: ["2T", "3T", "4T", "5T", "6T"],
//     colors: ["Blue", "Navy", "Red", "Green", "Gray"],
   
//   })),

//   girls: [...Array(8)].map((_, i) => ({
//     id: `girl-${i}`,
//     title: [
//       "Princess Dress",
//       "Floral Fantasy",
//       "Sparkle Outfit",
//       "Casual Chic",
//       "Party Gown",
//       "School Dress",
//       "Playtime Set",
//       "Designer Frocks"
//     ][i],
//     description: "Beautiful dresses and outfits that make every day special. Designed with comfort and style for your little princess.",
//     images: [
//       [girls1, girls2, girls3, girls4],
//       [girls2, girls3, girls4, girls5],
//       [girls3, girls4, girls5, girls6],
//       [girls4, girls5, girls6, girls7],
//       [girls5, girls6, girls7, girls8],
//       [girls6, girls7, girls8, girls1],
//       [girls7, girls8, girls1, girls2],
//       [girls8, girls1, girls2, girls3],
//     ][i],
//     category: "Girls",
//     sizes: ["2T", "3T", "4T", "5T", "6T"],
//     colors: ["Pink", "Purple", "White", "Yellow", "Lavender"],
//     price: "$29-$59"
//   })),

//   infants: [...Array(8)].map((_, i) => ({
//     id: `infant-${i}`,
//     title: [
//       "Cozy Onesie",
//       "Soft Romper",
//       "Sleep Set",
//       "Play Time",
//       "Baby Grow",
//       "Cuddle Set",
//       "Organic Cotton",
//       "Premium Infant Wear"
//     ][i],
//     description: "Soft and gentle clothing for your little ones. Made from hypoallergenic materials perfect for sensitive skin.",
//     images: [
//       [infants1, infants2, infants3, infants4],
//       [infants2, infants3, infants4, infants5],
//       [infants3, infants4, infants5, infants6],
//       [infants4, infants5, infants6, infants7],
//       [infants5, infants6, infants7, infants8],
//       [infants6, infants7, infants8, infants1],
//       [infants7, infants8, infants1, infants2],
//       [infants8, infants1, infants2, infants3],
//     ][i],
//     category: "Infants",
//     sizes: ["0-3M", "3-6M", "6-9M", "9-12M", "12-18M"],
//     colors: ["White", "Blue", "Pink", "Gray", "Pastel Yellow"],
//     price: "$19-$39"
//   })),

//   accessories: [...Array(8)].map((_, i) => ({
//     id: `accessory-${i}`,
//     title: [
//       "Colorful Backpacks",
//       "Funny Hats",
//       "Character Shoes",
//       "Water Bottles",
//       "Kids Watches",
//       "Hair Accessories",
//       "School Bags",
//       "Playtime Gear"
//     ][i],
//     description: "Fun accessories that complete every outfit. Durable and child-friendly designs for everyday use.",
//     images: [
//       [accessories1, accessories2, accessories3, accessories4],
//       [accessories2, accessories3, accessories4, accessories5],
//       [accessories3, accessories4, accessories5, accessories6],
//       [accessories4, accessories5, accessories6, accessories7],
//       [accessories5, accessories6, accessories7, accessories8],
//       [accessories6, accessories7, accessories8, accessories1],
//       [accessories7, accessories8, accessories1, accessories2],
//       [accessories8, accessories1, accessories2, accessories3],
//     ][i],
//     category: "Accessories",
//     sizes: ["One Size", "Adjustable", "Small", "Medium"],
//     colors: ["Multi", "Red", "Blue", "Green", "Pink"],
//     price: "$12-$35"
//   }))
// });

// export default function KidsCollection() {
//   const [activeCategory, setActiveCategory] = useState("Boys");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "👦 Boys Fashion",
//       category: "Boys",
//       gradient: "from-blue-50 to-cyan-50",
//       products: productData.boys,
//     },
//     {
//       title: "👧 Girls Fashion",
//       category: "Girls",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.girls,
//     },
//     {
//       title: "👶 Infant Wear",
//       category: "Infants",
//       gradient: "from-green-50 to-emerald-50",
//       products: productData.infants,
//     },
//     {
//       title: "🎒 Kids Accessories",
//       category: "Accessories",
//       gradient: "from-purple-50 to-violet-50",
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
//               ADORABLE COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-yellow-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-accent to-slate-800 bg-clip-text text-transparent">
//             Kids Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-yellow-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover the most adorable fashion for your little stars — where comfort meets style 
//             in every stitch and every smile.
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
//                         {section.products.length} amazing items
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
// }





// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Import all your actual kids collection images
// import kidsHero from "@/assets/kids-hero.jpg";

// // Boys Collection
// import boys1 from "@/assets/Kids/pantset1.jpeg";
// import boys2 from "@/assets/Kids/pantset3.jpeg";
// import boys3 from "@/assets/Kids/pantset4.jpeg";
// import boys4 from "@/assets/Kids/pantset5.jpeg";
// import boys5 from "@/assets/Kids/pantset5.jpeg";
// import boys6 from "@/assets/Kids/pantset6.jpeg";
// import boys7 from "@/assets/Kids/pantset7.jpeg";
// import boys8 from "@/assets/Kids/pantset8.jpeg";

// // Girls Collection
// import girls1 from "@/assets/Kids/girljeans1.jpeg";
// import girls2 from "@/assets/Kids/girljeans2.jpeg";
// import girls3 from "@/assets/Kids/girljeans3.jpeg";
// import girls4 from "@/assets/Kids/girljeans4.jpeg";
// import girls5 from "@/assets/Kids/girljeans1.jpeg";
// import girls6 from "@/assets/Kids/girljeans2.jpeg";
// import girls7 from "@/assets/Kids/girljeans3.jpeg";
// import girls8 from "@/assets/Kids/girljeans4.jpeg";

// // Infants Collection
// import infants1 from "@/assets/Kids/shirt1.jpeg";
// import infants2 from "@/assets/Kids/shirt2.jpeg";
// import infants3 from "@/assets/Kids/shirt3.jpeg";
// import infants4 from "@/assets/Kids/shirt4.jpeg";
// import infants5 from "@/assets/Kids/shirt5.jpeg";
// import infants6 from "@/assets/Kids/shirt6.jpeg";
// import infants7 from "@/assets/Kids/shirt7.jpeg";
// import infants8 from "@/assets/Kids/shirt8.jpeg";

// // Accessories Collection
// import accessories1 from "@/assets/Kids/pantset1.jpeg";
// import accessories2 from "@/assets/Kids/pantset3.jpeg";
// import accessories3 from "@/assets/Kids/pantset4.jpeg";
// import accessories4 from "@/assets/Kids/pantset5.jpeg";
// import accessories5 from "@/assets/Kids/pantset6.jpeg";
// import accessories6 from "@/assets/Kids/pantset7.jpeg";
// import accessories7 from "@/assets/Kids/pantset8.jpeg";
// import accessories8 from "@/assets/Kids/pantset9.jpeg";

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
//   { name: "Boys", icon: "👦" },
//   { name: "Girls", icon: "👧" },
//   { name: "Infants", icon: "👶" },
//   // { name: "Accessories", icon: "🎒" },
// ];

// // Mock product data with unique images for each product
// const generateProductData = () => ({
//   boys: [...Array(8)].map((_, i) => ({
//     id: `boy-${i}`,
//     title: [
//       "Casual Play Set",
//       "Denim Adventure",
//       "Sports Collection",
//       "Party Wear",
//       "School Uniform",
//       "Winter Jacket",
//       "Summer Combo",
//       "Festive Outfit"
//     ][i],
//     description: "Comfortable and stylish clothing perfect for everyday wear and play. Made with soft, breathable fabrics for active kids.",
//     images: [
//       [boys1, boys2, boys3, boys4],
//       [boys2, boys3, boys4, boys5],
//       [boys3, boys4, boys5, boys6],
//       [boys4, boys5, boys6, boys7],
//       [boys5, boys6, boys7, boys8],
//       [boys6, boys7, boys8, boys1],
//       [boys7, boys8, boys1, boys2],
//       [boys8, boys1, boys2, boys3],
//     ][i],
//     category: "Boys",
//     sizes: ["2T", "3T", "4T", "5T", "6T"],
//     colors: ["Blue", "Navy", "Red", "Green", "Gray"],
   
//   })),

//   girls: [...Array(8)].map((_, i) => ({
//     id: `girl-${i}`,
//     title: [
//       "Princess Dress",
//       "Floral Fantasy",
//       "Sparkle Outfit",
//       "Casual Chic",
//       "Party Gown",
//       "School Dress",
//       "Playtime Set",
//       "Designer Frocks"
//     ][i],
//     description: "Beautiful dresses and outfits that make every day special. Designed with comfort and style for your little princess.",
//     images: [
//       [girls1, girls2, girls3, girls4],
//       [girls2, girls3, girls4, girls5],
//       [girls3, girls4, girls5, girls6],
//       [girls4, girls5, girls6, girls7],
//       [girls5, girls6, girls7, girls8],
//       [girls6, girls7, girls8, girls1],
//       [girls7, girls8, girls1, girls2],
//       [girls8, girls1, girls2, girls3],
//     ][i],
//     category: "Girls",
//     sizes: ["2T", "3T", "4T", "5T", "6T"],
//     colors: ["Pink", "Purple", "White", "Yellow", "Lavender"],
//     price: "$29-$59"
//   })),

//   infants: [...Array(8)].map((_, i) => ({
//     id: `infant-${i}`,
//     title: [
//       "Cozy Onesie",
//       "Soft Romper",
//       "Sleep Set",
//       "Play Time",
//       "Baby Grow",
//       "Cuddle Set",
//       "Organic Cotton",
//       "Premium Infant Wear"
//     ][i],
//     description: "Soft and gentle clothing for your little ones. Made from hypoallergenic materials perfect for sensitive skin.",
//     images: [
//       [infants1, infants2, infants3, infants4],
//       [infants2, infants3, infants4, infants5],
//       [infants3, infants4, infants5, infants6],
//       [infants4, infants5, infants6, infants7],
//       [infants5, infants6, infants7, infants8],
//       [infants6, infants7, infants8, infants1],
//       [infants7, infants8, infants1, infants2],
//       [infants8, infants1, infants2, infants3],
//     ][i],
//     category: "Infants",
//     sizes: ["0-3M", "3-6M", "6-9M", "9-12M", "12-18M"],
//     colors: ["White", "Blue", "Pink", "Gray", "Pastel Yellow"],
//     price: "$19-$39"
//   })),

//   accessories: [...Array(8)].map((_, i) => ({
//     id: `accessory-${i}`,
//     title: [
//       "Colorful Backpacks",
//       "Funny Hats",
//       "Character Shoes",
//       "Water Bottles",
//       "Kids Watches",
//       "Hair Accessories",
//       "School Bags",
//       "Playtime Gear"
//     ][i],
//     description: "Fun accessories that complete every outfit. Durable and child-friendly designs for everyday use.",
//     images: [
//       [accessories1, accessories2, accessories3, accessories4],
//       [accessories2, accessories3, accessories4, accessories5],
//       [accessories3, accessories4, accessories5, accessories6],
//       [accessories4, accessories5, accessories6, accessories7],
//       [accessories5, accessories6, accessories7, accessories8],
//       [accessories6, accessories7, accessories8, accessories1],
//       [accessories7, accessories8, accessories1, accessories2],
//       [accessories8, accessories1, accessories2, accessories3],
//     ][i],
//     category: "Accessories",
//     sizes: ["One Size", "Adjustable", "Small", "Medium"],
//     colors: ["Multi", "Red", "Blue", "Green", "Pink"],
//     price: "$12-$35"
//   }))
// });

// export default function KidsCollection() {
//   const [activeCategory, setActiveCategory] = useState("Boys");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "👦 Boys Fashion",
//       category: "Boys",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.boys,
//     },
//     {
//       title: "👧 Girls Fashion",
//       category: "Girls",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.girls,
//     },
//     {
//       title: "👶 Infant Wear",
//       category: "Infants",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.infants,
//     },
//     {
//       title: "🎒 Kids Accessories",
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
//               ADORABLE COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-pink-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-pink-600 to-slate-800 bg-clip-text text-transparent">
//             Kids Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-pink-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover the most adorable fashion for your little stars — where comfort meets style 
//             in every stitch and every smile.
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
//                         {section.products.length} amazing items
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
// }







// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Import all your actual kids collection images
// import kidsHero from "@/assets/kids-hero.jpg";

// // Boys Collection
// import boys1 from "@/assets/Kids/pantset1.jpeg";
// import boys2 from "@/assets/Kids/pantset3.jpeg";
// import boys3 from "@/assets/Kids/pantset4.jpeg";
// import boys4 from "@/assets/Kids/pantset5.jpeg";
// import boys5 from "@/assets/Kids/pantset5.jpeg";
// import boys6 from "@/assets/Kids/pantset6.jpeg";
// import boys7 from "@/assets/Kids/pantset7.jpeg";
// import boys8 from "@/assets/Kids/pantset8.jpeg";

// // Girls Collection
// import girls1 from "@/assets/Kids/girljeans1.jpeg";
// import girls2 from "@/assets/Kids/girljeans2.jpeg";
// import girls3 from "@/assets/Kids/girljeans3.jpeg";
// import girls4 from "@/assets/Kids/girljeans4.jpeg";
// import girls5 from "@/assets/Kids/girljeans1.jpeg";
// import girls6 from "@/assets/Kids/girljeans2.jpeg";
// import girls7 from "@/assets/Kids/girljeans3.jpeg";
// import girls8 from "@/assets/Kids/girljeans4.jpeg";

// // Infants Collection
// import infants1 from "@/assets/Kids/shirt1.jpeg";
// import infants2 from "@/assets/Kids/shirt2.jpeg";
// import infants3 from "@/assets/Kids/shirt3.jpeg";
// import infants4 from "@/assets/Kids/shirt4.jpeg";
// import infants5 from "@/assets/Kids/shirt5.jpeg";
// import infants6 from "@/assets/Kids/shirt6.jpeg";
// import infants7 from "@/assets/Kids/shirt7.jpeg";
// import infants8 from "@/assets/Kids/shirt8.jpeg";

// // Kurta Collection
// import kurta1 from "@/assets/Kids/Kidskurtaset1.jpeg";
// import kurta2 from "@/assets/Kids/Kidskurtaset2.jpeg";
// import kurta3 from "@/assets/Kids/Kidskurtaset3.jpeg";
// import kurta4 from "@/assets/Kids/Kidskurtaset4.jpeg";
// import kurta5 from "@/assets/Kids/Kidskurtaset5.jpeg";
// import kurta6 from "@/assets/Kids/Kidskurtaset1.jpeg";
// import kurta7 from "@/assets/Kids/Kidskurtaset2.jpeg";
// import kurta8 from "@/assets/Kids/Kidskurtaset3.jpeg";

// // Accessories Collection
// import accessories1 from "@/assets/Kids/pantset1.jpeg";
// import accessories2 from "@/assets/Kids/pantset3.jpeg";
// import accessories3 from "@/assets/Kids/pantset4.jpeg";
// import accessories4 from "@/assets/Kids/pantset5.jpeg";
// import accessories5 from "@/assets/Kids/pantset6.jpeg";
// import accessories6 from "@/assets/Kids/pantset7.jpeg";
// import accessories7 from "@/assets/Kids/pantset8.jpeg";
// import accessories8 from "@/assets/Kids/pantset9.jpeg";

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
//   { name: "Boys", icon: "👦" },
//   { name: "Girls", icon: "👧" },
//   { name: "Infants", icon: "👶" },
//   { name: "Kurta Sets", icon: "👕" },
//   // { name: "Accessories", icon: "🎒" },
// ];

// // Mock product data with unique images for each product
// const generateProductData = () => ({
//   boys: [...Array(8)].map((_, i) => ({
//     id: `boy-${i}`,
//     title: [
//       "Casual Play Set",
//       "Denim Adventure",
//       "Sports Collection",
//       "Party Wear",
//       "School Uniform",
//       "Winter Jacket",
//       "Summer Combo",
//       "Festive Outfit"
//     ][i],
//     description: "Comfortable and stylish clothing perfect for everyday wear and play. Made with soft, breathable fabrics for active kids.",
//     images: [
//       [boys1, boys2, boys3, boys4],
//       [boys2, boys3, boys4, boys5],
//       [boys3, boys4, boys5, boys6],
//       [boys4, boys5, boys6, boys7],
//       [boys5, boys6, boys7, boys8],
//       [boys6, boys7, boys8, boys1],
//       [boys7, boys8, boys1, boys2],
//       [boys8, boys1, boys2, boys3],
//     ][i],
//     category: "Boys",
//     sizes: ["2T", "3T", "4T", "5T", "6T"],
//     colors: ["Blue", "Navy", "Red", "Green", "Gray"],
   
//   })),

//   girls: [...Array(8)].map((_, i) => ({
//     id: `girl-${i}`,
//     title: [
//       "Princess Dress",
//       "Floral Fantasy",
//       "Sparkle Outfit",
//       "Casual Chic",
//       "Party Gown",
//       "School Dress",
//       "Playtime Set",
//       "Designer Frocks"
//     ][i],
//     description: "Beautiful dresses and outfits that make every day special. Designed with comfort and style for your little princess.",
//     images: [
//       [girls1, girls2, girls3, girls4],
//       [girls2, girls3, girls4, girls5],
//       [girls3, girls4, girls5, girls6],
//       [girls4, girls5, girls6, girls7],
//       [girls5, girls6, girls7, girls8],
//       [girls6, girls7, girls8, girls1],
//       [girls7, girls8, girls1, girls2],
//       [girls8, girls1, girls2, girls3],
//     ][i],
//     category: "Girls",
//     sizes: ["2T", "3T", "4T", "5T", "6T"],
//     colors: ["Pink", "Purple", "White", "Yellow", "Lavender"],
//     price: "$29-$59"
//   })),

//   infants: [...Array(8)].map((_, i) => ({
//     id: `infant-${i}`,
//     title: [
//       "Cozy Onesie",
//       "Soft Romper",
//       "Sleep Set",
//       "Play Time",
//       "Baby Grow",
//       "Cuddle Set",
//       "Organic Cotton",
//       "Premium Infant Wear"
//     ][i],
//     description: "Soft and gentle clothing for your little ones. Made from hypoallergenic materials perfect for sensitive skin.",
//     images: [
//       [infants1, infants2, infants3, infants4],
//       [infants2, infants3, infants4, infants5],
//       [infants3, infants4, infants5, infants6],
//       [infants4, infants5, infants6, infants7],
//       [infants5, infants6, infants7, infants8],
//       [infants6, infants7, infants8, infants1],
//       [infants7, infants8, infants1, infants2],
//       [infants8, infants1, infants2, infants3],
//     ][i],
//     category: "Infants",
//     sizes: ["0-3M", "3-6M", "6-9M", "9-12M", "12-18M"],
//     colors: ["White", "Blue", "Pink", "Gray", "Pastel Yellow"],
//     price: "$19-$39"
//   })),

//   kurta: [...Array(8)].map((_, i) => ({
//     id: `kurta-${i}`,
//     title: [
//       "Traditional Kurta Set",
//       "Festival Special",
//       "Designer Kurta",
//       "Casual Kurta",
//       "Party Wear Kurta",
//       "Embroidered Kurta",
//       "Silk Kurta Set",
//       "Cotton Kurta Combo"
//     ][i],
//     description: "Elegant and comfortable kurta sets perfect for festivals, parties, and special occasions. Traditional designs with modern comfort.",
//     images: [
//       [kurta1, kurta2, kurta3, kurta4],
//       [kurta2, kurta3, kurta4, kurta5],
//       [kurta3, kurta4, kurta5, kurta6],
//       [kurta4, kurta5, kurta6, kurta7],
//       [kurta5, kurta6, kurta7, kurta8],
//       [kurta6, kurta7, kurta8, kurta1],
//       [kurta7, kurta8, kurta1, kurta2],
//       [kurta8, kurta1, kurta2, kurta3],
//     ][i],
//     category: "Kurta Sets",
//     sizes: ["2-3 Years", "3-4 Years", "4-5 Years", "5-6 Years", "6-7 Years"],
//     colors: ["Red", "Blue", "Green", "Yellow", "White", "Maroon"],
//     price: "$25-$65"
//   })),

//   accessories: [...Array(8)].map((_, i) => ({
//     id: `accessory-${i}`,
//     title: [
//       "Colorful Backpacks",
//       "Funny Hats",
//       "Character Shoes",
//       "Water Bottles",
//       "Kids Watches",
//       "Hair Accessories",
//       "School Bags",
//       "Playtime Gear"
//     ][i],
//     description: "Fun accessories that complete every outfit. Durable and child-friendly designs for everyday use.",
//     images: [
//       [accessories1, accessories2, accessories3, accessories4],
//       [accessories2, accessories3, accessories4, accessories5],
//       [accessories3, accessories4, accessories5, accessories6],
//       [accessories4, accessories5, accessories6, accessories7],
//       [accessories5, accessories6, accessories7, accessories8],
//       [accessories6, accessories7, accessories8, accessories1],
//       [accessories7, accessories8, accessories1, accessories2],
//       [accessories8, accessories1, accessories2, accessories3],
//     ][i],
//     category: "Accessories",
//     sizes: ["One Size", "Adjustable", "Small", "Medium"],
//     colors: ["Multi", "Red", "Blue", "Green", "Pink"],
//     price: "$12-$35"
//   }))
// });

// export default function KidsCollection() {
//   const [activeCategory, setActiveCategory] = useState("Boys");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "👦 Boys Fashion",
//       category: "Boys",
//       gradient: "from-blue-50 to-cyan-50",
//       products: productData.boys,
//     },
//     {
//       title: "👧 Girls Fashion",
//       category: "Girls",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.girls,
//     },
//     {
//       title: "👶 Infant Wear",
//       category: "Infants",
//       gradient: "from-green-50 to-emerald-50",
//       products: productData.infants,
//     },
//     {
//       title: "👕 Kurta Sets",
//       category: "Kurta Sets",
//       gradient: "from-orange-50 to-amber-50",
//       products: productData.kurta,
//     },
//     {
//       title: "🎒 Kids Accessories",
//       category: "Accessories",
//       gradient: "from-purple-50 to-violet-50",
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
//               ADORABLE COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-pink-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-pink-600 to-slate-800 bg-clip-text text-transparent">
//             Kids Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-pink-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover the most adorable fashion for your little stars — where comfort meets style 
//             in every stitch and every smile.
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
//                         {section.products.length} amazing items
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
// }







// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";

// // Import all your actual kids collection images
// import kidsHero from "@/assets/kids-hero.jpg";

// // Boys Collection
// import boys1 from "@/assets/Kids/pantset1.jpeg";
// import boys2 from "@/assets/Kids/pantset3.jpeg";
// import boys3 from "@/assets/Kids/pantset4.jpeg";
// import boys4 from "@/assets/Kids/pantset5.jpeg";
// import boys5 from "@/assets/Kids/pantset5.jpeg";
// import boys6 from "@/assets/Kids/pantset6.jpeg";
// import boys7 from "@/assets/Kids/pantset7.jpeg";
// import boys8 from "@/assets/Kids/pantset8.jpeg";

// // Girls Collection
// import girls1 from "@/assets/Kids/girljeans1.jpeg";
// import girls2 from "@/assets/Kids/girljeans2.jpeg";
// import girls3 from "@/assets/Kids/girljeans3.jpeg";
// import girls4 from "@/assets/Kids/girljeans4.jpeg";
// import girls5 from "@/assets/Kids/girljeans1.jpeg";
// import girls6 from "@/assets/Kids/girljeans2.jpeg";
// import girls7 from "@/assets/Kids/girljeans3.jpeg";
// import girls8 from "@/assets/Kids/girljeans4.jpeg";

// // Infants Collection
// import infants1 from "@/assets/Kids/shirt1.jpeg";
// import infants2 from "@/assets/Kids/shirt2.jpeg";
// import infants3 from "@/assets/Kids/shirt3.jpeg";
// import infants4 from "@/assets/Kids/shirt4.jpeg";
// import infants5 from "@/assets/Kids/shirt5.jpeg";
// import infants6 from "@/assets/Kids/shirt6.jpeg";
// import infants7 from "@/assets/Kids/shirt7.jpeg";
// import infants8 from "@/assets/Kids/shirt8.jpeg";

// // Kurta Collection
// import kurta1 from "@/assets/Kids/Kidskurtaset1.jpeg";
// import kurta2 from "@/assets/Kids/Kidskurtaset2.jpeg";
// import kurta3 from "@/assets/Kids/Kidskurtaset3.jpeg";
// import kurta4 from "@/assets/Kids/Kidskurtaset4.jpeg";
// import kurta5 from "@/assets/Kids/Kidskurtaset5.jpeg";
// import kurta6 from "@/assets/Kids/Kidskurtaset1.jpeg";
// import kurta7 from "@/assets/Kids/Kidskurtaset2.jpeg";
// import kurta8 from "@/assets/Kids/Kidskurtaset3.jpeg";

// // Accessories Collection
// import accessories1 from "@/assets/Kids/pantset1.jpeg";
// import accessories2 from "@/assets/Kids/pantset3.jpeg";
// import accessories3 from "@/assets/Kids/pantset4.jpeg";
// import accessories4 from "@/assets/Kids/pantset5.jpeg";
// import accessories5 from "@/assets/Kids/pantset6.jpeg";
// import accessories6 from "@/assets/Kids/pantset7.jpeg";
// import accessories7 from "@/assets/Kids/pantset8.jpeg";
// import accessories8 from "@/assets/Kids/pantset9.jpeg";

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
//   { name: "Boys", icon: "👦" },
//   { name: "Girls", icon: "👧" },
//   { name: "Infants", icon: "👶" },
//   { name: "Kurta Sets", icon: "👕" },
//   // { name: "Accessories", icon: "🎒" },
// ];

// // Mock product data with unique images for each product
// const generateProductData = () => ({
//   boys: [...Array(8)].map((_, i) => ({
//     id: `boy-${i}`,
//     title: [
//       // "Casual Play Set",
//       // "Denim Adventure",
//       // "Sports Collection",
//       // "Party Wear",
//       // "School Uniform",
//       // "Winter Jacket",
//       // "Summer Combo",
//       // "Festive Outfit"
//     ][i],
//     description: "Comfortable and stylish clothing perfect for everyday wear and play. Made with soft, breathable fabrics for active kids.",
//     images: [
//       [boys1, boys2, boys3, boys4],
//       [boys2, boys3, boys4, boys5],
//       [boys3, boys4, boys5, boys6],
//       [boys4, boys5, boys6, boys7],
//       [boys5, boys6, boys7, boys8],
//       [boys6, boys7, boys8, boys1],
//       [boys7, boys8, boys1, boys2],
//       [boys8, boys1, boys2, boys3],
//     ][i],
//     category: "Boys",
//     sizes: ["2T", "3T", "4T", "5T", "6T"],
//     colors: ["Blue", "Navy", "Red", "Green", "Gray"],
   
//   })),

//   girls: [...Array(8)].map((_, i) => ({
//     id: `girl-${i}`,
//     title: [
//       "Princess Dress",
//       "Floral Fantasy",
//       "Sparkle Outfit",
//       "Casual Chic",
//       "Party Gown",
//       "School Dress",
//       "Playtime Set",
//       "Designer Frocks"
//     ][i],
//     description: "Beautiful dresses and outfits that make every day special. Designed with comfort and style for your little princess.",
//     images: [
//       [girls1, girls2, girls3, girls4],
//       [girls2, girls3, girls4, girls5],
//       [girls3, girls4, girls5, girls6],
//       [girls4, girls5, girls6, girls7],
//       [girls5, girls6, girls7, girls8],
//       [girls6, girls7, girls8, girls1],
//       [girls7, girls8, girls1, girls2],
//       [girls8, girls1, girls2, girls3],
//     ][i],
//     category: "Girls",
//     sizes: ["2T", "3T", "4T", "5T", "6T"],
//     colors: ["Pink", "Purple", "White", "Yellow", "Lavender"],
//     price: "$29-$59"
//   })),

//   infants: [...Array(8)].map((_, i) => ({
//     id: `infant-${i}`,
//     title: [
//       "Cozy Onesie",
//       "Soft Romper",
//       "Sleep Set",
//       "Play Time",
//       "Baby Grow",
//       "Cuddle Set",
//       "Organic Cotton",
//       "Premium Infant Wear"
//     ][i],
//     description: "Soft and gentle clothing for your little ones. Made from hypoallergenic materials perfect for sensitive skin.",
//     images: [
//       [infants1, infants2, infants3, infants4],
//       [infants2, infants3, infants4, infants5],
//       [infants3, infants4, infants5, infants6],
//       [infants4, infants5, infants6, infants7],
//       [infants5, infants6, infants7, infants8],
//       [infants6, infants7, infants8, infants1],
//       [infants7, infants8, infants1, infants2],
//       [infants8, infants1, infants2, infants3],
//     ][i],
//     category: "Infants",
//     sizes: ["0-3M", "3-6M", "6-9M", "9-12M", "12-18M"],
//     colors: ["White", "Blue", "Pink", "Gray", "Pastel Yellow"],
//     price: "$19-$39"
//   })),

//   kurta: [...Array(8)].map((_, i) => ({
//     id: `kurta-${i}`,
//     title: [
//       "Traditional Kurta Set",
//       "Festival Special",
//       "Designer Kurta",
//       "Casual Kurta",
//       "Party Wear Kurta",
//       "Embroidered Kurta",
//       "Silk Kurta Set",
//       "Cotton Kurta Combo"
//     ][i],
//     description: "Elegant and comfortable kurta sets perfect for festivals, parties, and special occasions. Traditional designs with modern comfort.",
//     images: [
//       [kurta1, kurta2, kurta3, kurta4],
//       [kurta2, kurta3, kurta4, kurta5],
//       [kurta3, kurta4, kurta5, kurta6],
//       [kurta4, kurta5, kurta6, kurta7],
//       [kurta5, kurta6, kurta7, kurta8],
//       [kurta6, kurta7, kurta8, kurta1],
//       [kurta7, kurta8, kurta1, kurta2],
//       [kurta8, kurta1, kurta2, kurta3],
//     ][i],
//     category: "Kurta Sets",
//     sizes: ["2-3 Years", "3-4 Years", "4-5 Years", "5-6 Years", "6-7 Years"],
//     colors: ["Red", "Blue", "Green", "Yellow", "White", "Maroon"],
//     price: "$25-$65"
//   })),

//   accessories: [...Array(8)].map((_, i) => ({
//     id: `accessory-${i}`,
//     title: [
//       "Colorful Backpacks",
//       "Funny Hats",
//       "Character Shoes",
//       "Water Bottles",
//       "Kids Watches",
//       "Hair Accessories",
//       "School Bags",
//       "Playtime Gear"
//     ][i],
//     description: "Fun accessories that complete every outfit. Durable and child-friendly designs for everyday use.",
//     images: [
//       [accessories1, accessories2, accessories3, accessories4],
//       [accessories2, accessories3, accessories4, accessories5],
//       [accessories3, accessories4, accessories5, accessories6],
//       [accessories4, accessories5, accessories6, accessories7],
//       [accessories5, accessories6, accessories7, accessories8],
//       [accessories6, accessories7, accessories8, accessories1],
//       [accessories7, accessories8, accessories1, accessories2],
//       [accessories8, accessories1, accessories2, accessories3],
//     ][i],
//     category: "Accessories",
//     sizes: ["One Size", "Adjustable", "Small", "Medium"],
//     colors: ["Multi", "Red", "Blue", "Green", "Pink"],
//     price: "$12-$35"
//   }))
// });

// export default function KidsCollection() {
//   const [activeCategory, setActiveCategory] = useState("Boys");
//   const [hoveredCategory, setHoveredCategory] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productData = generateProductData();

//   const sectionData = [
//     {
//       title: "👦 Boys Fashion",
//       category: "Boys",
//       gradient: "from-blue-50 to-cyan-50",
//       products: productData.boys,
//     },
//     {
//       title: "👧 Girls Fashion",
//       category: "Girls",
//       gradient: "from-pink-50 to-rose-50",
//       products: productData.girls,
//     },
//     {
//       title: "👶 Infant Wear",
//       category: "Infants",
//       gradient: "from-green-50 to-emerald-50",
//       products: productData.infants,
//     },
//     {
//       title: "👕 Kurta Sets",
//       category: "Kurta Sets",
//       gradient: "from-orange-50 to-amber-50",
//       products: productData.kurta,
//     },
//     {
//       title: "🎒 Kids Accessories",
//       category: "Accessories",
//       gradient: "from-purple-50 to-violet-50",
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
//               ADORABLE COLLECTION
//             </span>
//             <Sparkles className="w-6 h-6 text-pink-500" />
//           </div>
          
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-pink-600 to-slate-800 bg-clip-text text-transparent">
//             Kids Collection
//           </h2>
          
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//             <Star className="w-5 h-5 text-pink-500 fill-current" />
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
//           </div>
          
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Discover the most adorable fashion for your little stars — where comfort meets style 
//             in every stitch and every smile.
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
//                         {section.products.length} amazing items
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
                        
//                         {/* Removed bottom text section for all categories */}
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
// }




import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";
import ProductFrame from "@/ProductFrame/ProductFrame";

// Import all your actual kids collection images
import kidsHero from "@/assets/kids-hero.jpg";

// Boys Collection
import boys1 from "@/assets/Kids/pantset1.jpeg";
import boys2 from "@/assets/Kids/pantset3.jpeg";
import boys3 from "@/assets/Kids/pantset4.jpeg";
import boys4 from "@/assets/Kids/pantset5.jpeg";
import boys5 from "@/assets/Kids/pantset5.jpeg";
import boys6 from "@/assets/Kids/pantset6.jpeg";
import boys7 from "@/assets/Kids/pantset7.jpeg";
import boys8 from "@/assets/Kids/pantset8.jpeg";

// Girls Collection
import girls1 from "@/assets/Kids/girljeans1.jpeg";
import girls2 from "@/assets/Kids/girljeans2.jpeg";
import girls3 from "@/assets/Kids/girljeans3.jpeg";
import girls4 from "@/assets/Kids/girljeans4.jpeg";
import girls5 from "@/assets/Kids/girljeans1.jpeg";
import girls6 from "@/assets/Kids/girljeans2.jpeg";
import girls7 from "@/assets/Kids/girljeans3.jpeg";
import girls8 from "@/assets/Kids/girljeans4.jpeg";

// Infants Collection
import infants1 from "@/assets/Kids/shirt1.jpeg";
import infants2 from "@/assets/Kids/shirt2.jpeg";
import infants3 from "@/assets/Kids/shirt3.jpeg";
import infants4 from "@/assets/Kids/shirt4.jpeg";
import infants5 from "@/assets/Kids/shirt5.jpeg";
import infants6 from "@/assets/Kids/shirt6.jpeg";
import infants7 from "@/assets/Kids/shirt7.jpeg";
import infants8 from "@/assets/Kids/shirt8.jpeg";

// Kurta Collection
import kurta1 from "@/assets/Kids/Kidskurtaset1.jpeg";
import kurta2 from "@/assets/Kids/Kidskurtaset2.jpeg";
import kurta3 from "@/assets/Kids/Kidskurtaset3.jpeg";
import kurta4 from "@/assets/Kids/Kidskurtaset4.jpeg";
import kurta5 from "@/assets/Kids/Kidskurtaset5.jpeg";
import kurta6 from "@/assets/Kids/Kidskurtaset1.jpeg";
import kurta7 from "@/assets/Kids/Kidskurtaset2.jpeg";
import kurta8 from "@/assets/Kids/Kidskurtaset3.jpeg";

// Accessories Collection
import accessories1 from "@/assets/Kids/pantset1.jpeg";
import accessories2 from "@/assets/Kids/pantset3.jpeg";
import accessories3 from "@/assets/Kids/pantset4.jpeg";
import accessories4 from "@/assets/Kids/pantset5.jpeg";
import accessories5 from "@/assets/Kids/pantset6.jpeg";
import accessories6 from "@/assets/Kids/pantset7.jpeg";
import accessories7 from "@/assets/Kids/pantset8.jpeg";
import accessories8 from "@/assets/Kids/pantset9.jpeg";

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
  { name: "Boys", icon: "👦" },
  { name: "Girls", icon: "👧" },
  { name: "Infants", icon: "👶" },
  { name: "Kurta Sets", icon: "👕" },
  // { name: "Accessories", icon: "🎒" },
];

// Mock product data with unique images for each product
const generateProductData = () => ({
  boys: [...Array(8)].map((_, i) => ({
    id: `boy-${i}`,
    title: ``,
    description: "Comfortable and stylish clothing perfect for everyday wear and play. Made with soft, breathable fabrics for active kids.",
    images: [
      [boys1, boys2, boys3, boys4],
      [boys2, boys3, boys4, boys5],
      [boys3, boys4, boys5, boys6],
      [boys4, boys5, boys6, boys7],
      [boys5, boys6, boys7, boys8],
      [boys6, boys7, boys8, boys1],
      [boys7, boys8, boys1, boys2],
      [boys8, boys1, boys2, boys3],
    ][i],
    category: "Boys",
    sizes: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Blue", "Navy", "Red", "Green", "Gray"],
    price: "$24-$49"
  })),

  girls: [...Array(8)].map((_, i) => ({
    id: `girl-${i}`,
    title: ``,
    description: "Beautiful dresses and outfits that make every day special. Designed with comfort and style for your little princess.",
    images: [
      [girls1, girls2, girls3, girls4],
      [girls2, girls3, girls4, girls5],
      [girls3, girls4, girls5, girls6],
      [girls4, girls5, girls6, girls7],
      [girls5, girls6, girls7, girls8],
      [girls6, girls7, girls8, girls1],
      [girls7, girls8, girls1, girls2],
      [girls8, girls1, girls2, girls3],
    ][i],
    category: "Girls",
    sizes: ["2T", "3T", "4T", "5T", "6T"],
    colors: ["Pink", "Purple", "White", "Yellow", "Lavender"],
    price: "$29-$59"
  })),

  infants: [...Array(8)].map((_, i) => ({
    id: `infant-${i}`,
    title: ``,
    description: "Soft and gentle clothing for your little ones. Made from hypoallergenic materials perfect for sensitive skin.",
    images: [
      [infants1, infants2, infants3, infants4],
      [infants2, infants3, infants4, infants5],
      [infants3, infants4, infants5, infants6],
      [infants4, infants5, infants6, infants7],
      [infants5, infants6, infants7, infants8],
      [infants6, infants7, infants8, infants1],
      [infants7, infants8, infants1, infants2],
      [infants8, infants1, infants2, infants3],
    ][i],
    category: "Infants",
    sizes: ["0-3M", "3-6M", "6-9M", "9-12M", "12-18M"],
    colors: ["White", "Blue", "Pink", "Gray", "Pastel Yellow"],
    price: "$19-$39"
  })),

  kurta: [...Array(8)].map((_, i) => ({
    id: `kurta-${i}`,
    title: ``,
    description: "Elegant and comfortable kurta sets perfect for festivals, parties, and special occasions. Traditional designs with modern comfort.",
    images: [
      [kurta1, kurta2, kurta3, kurta4],
      [kurta2, kurta3, kurta4, kurta5],
      [kurta3, kurta4, kurta5, kurta6],
      [kurta4, kurta5, kurta6, kurta7],
      [kurta5, kurta6, kurta7, kurta8],
      [kurta6, kurta7, kurta8, kurta1],
      [kurta7, kurta8, kurta1, kurta2],
      [kurta8, kurta1, kurta2, kurta3],
    ][i],
    category: "Kurta Sets",
    sizes: ["2-3 Years", "3-4 Years", "4-5 Years", "5-6 Years", "6-7 Years"],
    colors: ["Red", "Blue", "Green", "Yellow", "White", "Maroon"],
    price: "$25-$65"
  })),

  accessories: [...Array(8)].map((_, i) => ({
    id: `accessory-${i}`,
    title: ``,
    description: "Fun accessories that complete every outfit. Durable and child-friendly designs for everyday use.",
    images: [
      [accessories1, accessories2, accessories3, accessories4],
      [accessories2, accessories3, accessories4, accessories5],
      [accessories3, accessories4, accessories5, accessories6],
      [accessories4, accessories5, accessories6, accessories7],
      [accessories5, accessories6, accessories7, accessories8],
      [accessories6, accessories7, accessories8, accessories1],
      [accessories7, accessories8, accessories1, accessories2],
      [accessories8, accessories1, accessories2, accessories3],
    ][i],
    category: "Accessories",
    sizes: ["One Size", "Adjustable", "Small", "Medium"],
    colors: ["Multi", "Red", "Blue", "Green", "Pink"],
    price: "$12-$35"
  }))
});

export default function KidsCollection() {
  const [activeCategory, setActiveCategory] = useState("Boys");
  const [hoveredCategory, setHoveredCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productData = generateProductData();

  const sectionData = [
    {
      title: "👦 Boys Fashion",
      category: "Boys",
      gradient: "from-pink-50 to-rose-50",
      products: productData.boys,
    },
    {
      title: "👧 Girls Fashion",
      category: "Girls",
      gradient: "from-pink-50 to-rose-50",
      products: productData.girls,
    },
    {
      title: "👶 Infant Wear",
      category: "Infants",
      gradient: "from-pink-50 to-rose-50",
      products: productData.infants,
    },
    {
      title: "👕 Kurta Sets",
      category: "Kurta Sets",
      gradient: "from-pink-50 to-rose-50",
      products: productData.kurta,
    },
    {
      title: "🎒 Kids Accessories",
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
              ADORABLE COLLECTION
            </span>
            <Sparkles className="w-6 h-6 text-pink-500" />
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-pink-600 to-slate-800 bg-clip-text text-transparent">
            Kids Fashion Collection
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
            <Star className="w-5 h-5 text-pink-500 fill-current" />
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the most adorable fashion for your little stars — where comfort meets style 
            in every stitch and every smile.
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
                        {section.products.length} amazing items
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