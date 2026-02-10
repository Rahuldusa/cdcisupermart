// import React from "react";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";

// // Slick carousel CSS
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// interface ProductCardProps {
//   images: string[];
//   title: string;
//   category: string;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ images, title, category }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 800,
//     autoplaySpeed: 2500,
//     arrows: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       transition={{ duration: 0.3 }}
//       className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all"
//     >
//       <Slider {...settings}>
//         {images.map((img, idx) => (
//           <div key={idx}>
//             <img src={img} alt={title} className="w-full h-72 object-cover" />
//           </div>
//         ))}
//       </Slider>
//       <Card className="border-t-0 rounded-none">
//         <CardContent className="text-center py-4">
//           <h3 className="font-semibold text-lg">{title}</h3>
//           <p className="text-sm text-muted-foreground">{category}</p>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// };

// const FeaturedSection: React.FC = () => {
//   return (
//     <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
//       <div className="container mx-auto px-4">
//         {/* Section Heading */}
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
//             Featured This Season
//           </h2>
//           <p className="text-muted-foreground text-lg">
//             Handpicked styles that define the season
//           </p>
//           <div className="w-24 h-1 bg-black mx-auto mt-4 rounded-full"></div>
//         </motion.div>

//         {/* Product Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           <ProductCard
//             images={[
//               "https://i.pinimg.com/736x/de/2b/5b/de2b5b6a0ef3ec8a190576b023112623.jpg",
//               "https://i.pinimg.com/736x/20/3a/23/203a2311a6279af7d985b04a7a19e0f4.jpg",
//             ]}
//             title="Classic Tailored Suit"
//             category="Men's Formal"
//           />

//           <ProductCard
//             images={[
//               "https://i.pinimg.com/1200x/67/96/18/67961814b41c6516fb2f2b787e1934e5.jpg",
//               "https://i.pinimg.com/736x/68/63/cf/6863cf510c0aa4fedfbb19676a142928.jpg",
//             ]}
//             title="Elegant Summer Dress"
//             category="Women's Casual"
//           />

//           <ProductCard
//             images={[
//               "https://i.pinimg.com/1200x/aa/fb/2d/aafb2d61742d510941a15621b13da33d.jpg",
//               "https://i.pinimg.com/736x/c5/58/20/c55820de29e3e06e8986619ad348e7f5.jpg",
//             ]}
//             title="Kids Casual Set"
//             category="Kids Fashion"
//           />

//           <ProductCard
//             images={[
//               "https://i.pinimg.com/1200x/8a/16/8d/8a168d6b6c11405c9a4c501870cd3e77.jpg",
//               "https://i.pinimg.com/1200x/36/4b/51/364b513636e5f342e46e89cc630ea7a4.jpg",
//             ]}
//             title="Traditional Kurta Set"
//             category="Ethnic Wear"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedSection;







// import React from "react";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { ChevronLeft, ChevronRight, Heart, ShoppingBag } from "lucide-react";

// // Slick carousel CSS
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// interface ProductCardProps {
//   images: string[];
//   title: string;
//   category: string;
//   price?: string;
//   rating?: number;
// }

// // Custom arrow components
// const NextArrow = ({ onClick }: { onClick?: () => void }) => (
//   <button
//     onClick={onClick}
//     className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
//   >
//     <ChevronRight size={20} />
//   </button>
// );

// const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
//   <button
//     onClick={onClick}
//     className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
//   >
//     <ChevronLeft size={20} />
//   </button>
// );

// const ProductCard: React.FC<ProductCardProps> = ({ 
//   images, 
//   title, 
//   category, 
//   price = "$129.99",
//   rating = 4.5 
// }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 800,
//     autoplaySpeed: 3000,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dotsClass: "slick-dots !bottom-3",
//   };

//   const renderStars = (rating: number) => {
//     return Array.from({ length: 5 }).map((_, index) => (
//       <span
//         key={index}
//         className={`text-sm ${
//           index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
//         }`}
//       >
//         ★
//       </span>
//     ));
//   };

//   return (
//     <motion.div
//       whileHover={{ scale: 1.03, y: -8 }}
//       transition={{ duration: 0.4, ease: "easeOut" }}
//       className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 group"
//     >
//       {/* Image Slider Container */}
//       <div className="relative overflow-hidden">
//         <Slider {...settings}>
//           {images.map((img, idx) => (
//             <div key={idx} className="relative">
//               <img 
//                 src={img} 
//                 alt={`${title} - ${idx + 1}`} 
//                 className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" 
//               />
              
//               {/* Overlay Actions */}
//               <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <button className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300">
//                   <Heart size={18} />
//                 </button>
//                 <button className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300">
//                   <ShoppingBag size={18} />
//                 </button>
//               </div>

//               {/* Quick View Button */}
//               <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <button className="bg-black/80 hover:bg-black text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                   Quick View
//                 </button>
//               </div>
//             </div>
//           ))}
//         </Slider>
        
//         {/* Category Badge */}
//         <div className="absolute top-3 left-3">
//           <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
//             {category}
//           </span>
//         </div>
//       </div>

//       {/* Product Info */}
//       <Card className="border-t-0 rounded-none border-0">
//         <CardContent className="p-5">
//           <div className="space-y-3">
//             <div>
//               <h3 className="font-semibold text-lg mb-1 line-clamp-1">{title}</h3>
//               <p className="text-sm text-muted-foreground mb-2">{category}</p>
//             </div>
            
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-1">
//                 {renderStars(rating)}
//                 <span className="text-xs text-gray-500 ml-1">({rating})</span>
//               </div>
//               <span className="text-lg font-bold text-gray-900">{price}</span>
//             </div>
            
//             <button className="w-full bg-gray-900 hover:bg-black text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-95">
//               Add to Cart
//             </button>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// };

// const FeaturedSection: React.FC = () => {
//   const featuredProducts = [
//     {
//       images: [
//         "https://i.pinimg.com/736x/de/2b/5b/de2b5b6a0ef3ec8a190576b023112623.jpg",
//         "https://i.pinimg.com/736x/20/3a/23/203a2311a6279af7d985b04a7a19e0f4.jpg",
//         "https://i.pinimg.com/736x/8a/16/8d/8a168d6b6c11405c9a4c501870cd3e77.jpg"
//       ],
//       title: "Classic Tailored Suit",
//       category: "Men's Formal",
//       price: "$299.99",
//       rating: 4.8
//     },
//     {
//       images: [
//         "https://i.pinimg.com/1200x/67/96/18/67961814b41c6516fb2f2b787e1934e5.jpg",
//         "https://i.pinimg.com/736x/68/63/cf/6863cf510c0aa4fedfbb19676a142928.jpg",
//         "https://i.pinimg.com/736x/36/4b/51/364b513636e5f342e46e89cc630ea7a4.jpg"
//       ],
//       title: "Elegant Summer Dress",
//       category: "Women's Casual",
//       price: "$89.99",
//       rating: 4.6
//     },
//     {
//       images: [
//         "https://i.pinimg.com/1200x/aa/fb/2d/aafb2d61742d510941a15621b13da33d.jpg",
//         "https://i.pinimg.com/736x/c5/58/20/c55820de29e3e06e8986619ad348e7f5.jpg",
//         "https://i.pinimg.com/736x/de/2b/5b/de2b5b6a0ef3ec8a190576b023112623.jpg"
//       ],
//       title: "Kids Casual Set",
//       category: "Kids Fashion",
//       price: "$49.99",
//       rating: 4.9
//     },
//     {
//       images: [
//         "https://i.pinimg.com/1200x/8a/16/8d/8a168d6b6c11405c9a4c501870cd3e77.jpg",
//         "https://i.pinimg.com/1200x/36/4b/51/364b513636e5f342e46e89cc630ea7a4.jpg",
//         "https://i.pinimg.com/1200x/67/96/18/67961814b41c6516fb2f2b787e1934e5.jpg"
//       ],
//       title: "Traditional Kurta Set",
//       category: "Ethnic Wear",
//       price: "$159.99",
//       rating: 4.7
//     }
//   ];

//   return (
//     <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 relative overflow-hidden">
//       {/* Background Decoration */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Heading */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.h2 
//             className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Featured This Season
//           </motion.h2>
//           <motion.p 
//             className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             Discover handpicked styles that define elegance and sophistication for the season
//           </motion.p>
//           <motion.div 
//             className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full"
//             initial={{ opacity: 0, scaleX: 0 }}
//             whileInView={{ opacity: 1, scaleX: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           ></motion.div>
//         </motion.div>

//         {/* Product Cards Grid */}
//         <motion.div 
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//         >
//           {featuredProducts.map((product, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <ProductCard {...product} />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* View All Button */}
//         <motion.div 
//           className="text-center mt-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 1.2 }}
//         >
//           <button className="bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
//             View All Collections
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedSection;






// import React from "react";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// // Slick carousel CSS
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// interface ProductCardProps {
//   images: string[];
//   title: string;
//   category: string;
// }

// // Custom arrow components
// const NextArrow = ({ onClick }: { onClick?: () => void }) => (
//   <button
//     onClick={onClick}
//     className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
//   >
//     <ChevronRight size={20} />
//   </button>
// );

// const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
//   <button
//     onClick={onClick}
//     className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
//   >
//     <ChevronLeft size={20} />
//   </button>
// );

// const ProductCard: React.FC<ProductCardProps> = ({ 
//   images, 
//   title, 
//   category 
// }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 800,
//     autoplaySpeed: 3000,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dotsClass: "slick-dots !bottom-3",
//   };

//   return (
//     <motion.div
//       whileHover={{ scale: 1.03, y: -8 }}
//       transition={{ duration: 0.4, ease: "easeOut" }}
//       className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 group"
//     >
//       {/* Image Slider Container */}
//       <div className="relative overflow-hidden">
//         <Slider {...settings}>
//           {images.map((img, idx) => (
//             <div key={idx} className="relative">
//               <img 
//                 src={img} 
//                 alt={`${title} - ${idx + 1}`} 
//                 className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" 
//               />
//             </div>
//           ))}
//         </Slider>
        
//         {/* Category Badge */}
//         <div className="absolute top-3 left-3">
//           <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
//             {category}
//           </span>
//         </div>
//       </div>

//       {/* Product Info */}
//       <Card className="border-t-0 rounded-none border-0">
//         <CardContent className="p-6 text-center">
//           <div className="space-y-2">
//             <h3 className="font-semibold text-xl mb-1">{title}</h3>
//             <p className="text-sm text-muted-foreground">{category}</p>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// };

// const FeaturedSection: React.FC = () => {
//   const featuredProducts = [
//     {
//       images: [
//         "https://i.pinimg.com/736x/de/2b/5b/de2b5b6a0ef3ec8a190576b023112623.jpg",
//         "https://i.pinimg.com/736x/20/3a/23/203a2311a6279af7d985b04a7a19e0f4.jpg",
//         "https://i.pinimg.com/736x/c6/f8/e0/c6f8e003ff1fbe287bfb78a134ab8415.jpg"
//       ],
//       title: "Classic Tailored Suit",
//       category: "Men's Formal"
//     },
//     {
//       images: [
//         "https://i.pinimg.com/1200x/67/96/18/67961814b41c6516fb2f2b787e1934e5.jpg",
//         "https://i.pinimg.com/736x/68/63/cf/6863cf510c0aa4fedfbb19676a142928.jpg",
//         "https://i.pinimg.com/736x/36/4b/51/364b513636e5f342e46e89cc630ea7a4.jpg"
//       ],
//       title: "Elegant Summer Dress",
//       category: "Women's Casual"
//     },
//     {
//       images: [
//         "https://i.pinimg.com/1200x/aa/fb/2d/aafb2d61742d510941a15621b13da33d.jpg",
//         "https://i.pinimg.com/736x/c5/58/20/c55820de29e3e06e8986619ad348e7f5.jpg",
//         "https://i.pinimg.com/736x/ac/b6/62/acb66240a0cb4eeee28356da73582c18.jpg"
//       ],
//       title: "Kids Casual Set",
//       category: "Kids Fashion"
//     },
//     {
//       images: [
//         "https://i.pinimg.com/1200x/8a/16/8d/8a168d6b6c11405c9a4c501870cd3e77.jpg",
//         "https://i.pinimg.com/1200x/36/4b/51/364b513636e5f342e46e89cc630ea7a4.jpg",
//         "https://i.pinimg.com/1200x/67/96/18/67961814b41c6516fb2f2b787e1934e5.jpg"
//       ],
//       title: "Traditional Kurta Set",
//       category: "Ethnic Wear"
//     }
//   ];

//   return (
//     <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 relative overflow-hidden">
//       {/* Background Decoration */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Heading */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.h2 
//             className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Featured This Season
//           </motion.h2>
//           <motion.p 
//             className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             Discover handpicked styles that define elegance and sophistication for the season
//           </motion.p>
//           <motion.div 
//             className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full"
//             initial={{ opacity: 0, scaleX: 0 }}
//             whileInView={{ opacity: 1, scaleX: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           ></motion.div>
//         </motion.div>

//         {/* Product Cards Grid */}
//         <motion.div 
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//         >
//           {featuredProducts.map((product, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <ProductCard {...product} />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedSection;





import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images from assets
import suit1 from "../../assets/Men/Suits3.jpeg";
import suit2 from "../../assets/Men/Suits4.jpeg";
import suit3 from "../../assets/Men/Suits5.jpeg";
import dress1 from "../../assets/Women/Bridallehenga1.jpeg";
import dress2 from "../../assets/Women/Bridallehenga11.jpeg";
import dress3 from "../../assets/Women/Bridallehenga13.jpeg";
import kids1 from "../../assets/Kids/girljeans1.jpeg";
import kids2 from "../../assets/Kids/girljeans2.jpeg";
import kids3 from "../../assets/Kids/girljeans3.jpeg";
import kurthiset1 from "../../assets/Women/kurthiset1.jpeg";
import kurthiset2 from "../../assets/Women/kurthiset2.jpeg";
import kurthiset3 from "../../assets/Women/kurthiset3.jpeg";

interface ProductCardProps {
  images: string[];
  title: string;
  category: string;
}

// Custom arrow components
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
  >
    <ChevronRight size={20} />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
  >
    <ChevronLeft size={20} />
  </button>
);

const ProductCard: React.FC<ProductCardProps> = ({ 
  images, 
  title, 
  category 
}) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots !bottom-3",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Image Slider Container */}
      <div className="relative overflow-hidden">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx} className="relative">
              <img 
                src={img} 
                alt={`${title} - ${idx + 1}`} 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          ))}
        </Slider>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <Card className="border-t-0 rounded-none border-0">
        <CardContent className="p-6 text-center">
          <div className="space-y-2">
            <h3 className="font-semibold text-xl mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{category}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeaturedSection: React.FC = () => {
  const featuredProducts = [
    {
      images: [suit1, suit2, suit3],
      title: "Classic Tailored Suit",
      category: "Men's Sherwani"
    },
    {
      images: [dress1, dress2, dress3],
      title: "Elegant Lehenga Dress",
      category: "Women's Casual"
    },
    {
      images: [kids1, kids2, kids3],
      title: "Kids Casual Set",
      category: "Kids Fashion"
    },
    {
      images: [kurthiset1, kurthiset2, kurthiset3],
      title: "Traditional Kurta Set",
      category: "Ethnic Wear"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured This Season
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover handpicked styles that define elegance and sophistication for the season
          </motion.p>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-6 rounded-full"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          ></motion.div>
        </motion.div>

        {/* Product Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;