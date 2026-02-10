
// import React, { useEffect, useState } from "react";
// import { X, Download, Tag, Star, ChevronLeft, ChevronRight } from "lucide-react";

// import offer1 from "../../assets/accessories.jpg";
// import offer2 from "../../assets/accessories.jpg";
// import offer3 from "../../assets/accessories.jpg";

// const OffersPopup: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       image: offer1,
//       title: "Flat 30% OFF on Annual Plans",
//       description: "Grab the limited-time mega discount on all premium plans!",
//     },
//     {
//       image: offer2,
//       title: "Free Upgrade to Gold Plan",
//       description: "Subscribe now & enjoy premium features at no extra cost.",
//     },
//     {
//       image: offer3,
//       title: "Exclusive Festive Deals",
//       description: "Special festive offers available only for a few days.",
//     },
//   ];

//   useEffect(() => {
//     const popupCounter = localStorage.getItem("offersPopupCounter");
//     const count = popupCounter ? parseInt(popupCounter) : 0;
//     const newCount = count + 1;
//     localStorage.setItem("offersPopupCounter", newCount.toString());

//     if (newCount % 3 === 0) {
//       const timer = setTimeout(() => setIsOpen(true), 1500);
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   useEffect(() => {
//     if (!isOpen) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [isOpen, slides.length]);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % slides.length);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg animate-fadeIn">
      
//       {/* DESKTOP */}
//       <div className="hidden md:flex">
//         <div className="relative bg-gradient-to-br from-[#FFF4E6] to-[#FFECD1] rounded-2xl shadow-2xl p-6 max-w-3xl w-[90%] mx-4 border border-orange-200">

//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute -top-2 -right-2 bg-white hover:bg-orange-100 text-black w-7 h-7 rounded-full shadow-md flex items-center justify-center border border-orange-300"
//           >
//             <X className="w-3.5 h-3.5" />
//           </button>

//           <div className="flex items-center gap-6">

//             {/* LEFT CONTENT */}
//             <div className="flex-1">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="relative">
//                   <div className="w-12 h-12 bg-black rounded-xl shadow flex items-center justify-center">
//                     <Tag className="w-6 h-6 text-yellow-300" />
//                   </div>
//                   <div className="absolute -bottom-1 -right-1 bg-black w-5 h-5 rounded-full flex items-center justify-center">
//                     <Star className="w-2.5 h-2.5 text-yellow-300" />
//                   </div>
//                 </div>

//                 <div className="flex-1">
//                   <h2 className="text-2xl font-bold text-black">
//                     Special Offers Just For You!
//                   </h2>
//                   <p className="text-black/70 text-sm mt-1">
//                     Don’t miss out on exclusive discounts & rewards.
//                   </p>
//                 </div>
//               </div>

//               {/* BULLET POINTS */}
//               <div className="space-y-3 mb-6">
//                 {[
//                   "Limited-time mega discounts",
//                   "Exclusive festive offers",
//                   "Special rewards for new users",
//                   "Extra cashback on upgrades",
//                 ].map((item, i) => (
//                   <div key={i} className="flex items-center gap-2">
//                     <div className="w-2 h-2 bg-black rounded-full"></div>
//                     <span className="text-black">{item}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA BUTTON */}
//            <button
//   onClick={() => window.open("https://www.google.com/maps/place/Super+Family+Mart/@25.5500252,81.5445692,17z/data=!3m1!4b1!4m6!3m5!1s0x399ad781594c3def:0x65e91f8e445b1b85!8m2!3d25.5500252!4d81.5445692!16s%2Fg%2F11h2cpbgj6?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D", "_blank")}
//   className="w-full px-4 py-3 bg-black text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
// >
 
//   <span>Claim Offer Now</span>
//             </button>
//             </div>

//             {/* RIGHT — IMAGE BOX (UPDATED) */}
//             <div className="flex-1 flex flex-col items-center">

//               {/* IMAGE BOX SHAPE */}
//               <div className="relative w-full h-[300px] rounded-xl overflow-hidden border border-black shadow-xl bg-white">

//                 {/* Previous Button */}
//                 <button
//                   onClick={prevSlide}
//                   className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full z-10"
//                 >
//                   <ChevronLeft className="w-5 h-5" />
//                 </button>

//                 {/* IMAGE */}
//                 <img
//                   src={slides[currentIndex].image}
//                   alt=""
//                   className="w-full h-full object-cover"
//                 />

//                 {/* TEXT OVERLAY */}
//                 <div className="absolute bottom-0 w-full bg-black/80 p-4">
//                   <h3 className="text-white font-bold">{slides[currentIndex].title}</h3>
//                   <p className="text-white/80 text-sm">{slides[currentIndex].description}</p>
//                 </div>

//                 {/* Next Button */}
//                 <button
//                   onClick={nextSlide}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full z-10"
//                 >
//                   <ChevronRight className="w-5 h-5" />
//                 </button>
//               </div>

//               {/* DOTS */}
//               <div className="flex justify-center mt-4 space-x-2">
//                 {slides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     className={`w-2 h-2 rounded-full ${
//                       index === currentIndex ? "bg-black w-6" : "bg-black/30"
//                     }`}
//                   />
//                 ))}
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE VERSION */}
//       <div className="md:hidden">
//         <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-[90%] mx-4 border border-orange-200">
          
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute -top-2 -right-2 bg-white hover:bg-orange-100 text-black w-7 h-7 rounded-full shadow-md flex items-center justify-center border"
//           >
//             <X className="w-3.5 h-3.5" />
//           </button>

//           {/* Heading */}
//           <div className="flex items-center gap-3 mb-5">
//             <div className="relative">
//               <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center">
//                 <Tag className="w-7 h-7 text-yellow-300" />
//               </div>
//               <div className="absolute -bottom-1 -right-1 bg-black w-5 h-5 rounded-full flex items-center justify-center">
//                 <Star className="w-2.5 h-2.5 text-yellow-300" />
//               </div>
//             </div>
//             <div className="flex-1">
//               <h2 className="text-xl font-bold text-black">Exclusive Offers!</h2>
//               <p className="text-black/70 text-sm">Grab today’s best deals</p>
//             </div>
//           </div>

//           {/* MOBILE BOX-SHAPED IMAGE */}
//           <div className="relative w-full h-72 rounded-xl overflow-hidden border border-black shadow-lg mb-5">

//             <button
//               onClick={prevSlide}
//               className="absolute left-2 z-10 bg-black/50 text-white p-2 rounded-full"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>

//             <img
//               src={slides[currentIndex].image}
//               className="w-full h-full object-cover"
//             />

//             <div className="absolute bottom-0 w-full bg-black/70 p-3">
//               <h3 className="text-white text-sm font-semibold">{slides[currentIndex].title}</h3>
//               <p className="text-white/80 text-xs">{slides[currentIndex].description}</p>
//             </div>

//             <button
//               onClick={nextSlide}
//               className="absolute right-2 z-10 bg-black/50 text-white p-2 rounded-full"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>

//           <div className="flex justify-center mb-4 space-x-2">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-2 h-2 rounded-full ${
//                   index === currentIndex ? "bg-black w-5" : "bg-black/30"
//                 }`}
//               />
//             ))}
//           </div>

//           <button
//             onClick={() => window.open("#", "_blank")}
//             className="w-full px-5 py-4 bg-black text-white rounded-xl shadow-lg"
//           >
//             View All Offers
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OffersPopup;








// import React, { useEffect, useState } from "react";
// import { X, Download, Tag, Star, ChevronLeft, ChevronRight } from "lucide-react";

// import offer1 from "../../assets/accessories.jpg";
// import offer2 from "../../assets/accessories.jpg";
// import offer3 from "../../assets/accessories.jpg";

// const OffersPopup: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       image: offer1,
//       title: "Christmas Sale - Up to 40% OFF",
//       description: "Festive special discounts on all categories! Limited time offer.",
//     },
//     {
//       image: offer2,
//       title: "New Year Special - 25% OFF",
//       description: "Start 2024 with amazing deals on premium collections.",
//     },
//     {
//       image: offer3,
//       title: "Men's Winter Collection - 15% OFF",
//       description: "Exclusive discount on all men's apparel and accessories.",
//     },
//     {
//       image: offer1,
//       title: "Free Shipping + 10% Cashback",
//       description: "Shop above $99 and get free delivery with extra cashback.",
//     },
//     {
//       image: offer2,
//       title: "Weekend Special - 30% OFF",
//       description: "Flash sale! Valid only this weekend. Don't miss out!",
//     },
//   ];

//   useEffect(() => {
//     const popupCounter = localStorage.getItem("offersPopupCounter");
//     const count = popupCounter ? parseInt(popupCounter) : 0;
//     const newCount = count + 1;
//     localStorage.setItem("offersPopupCounter", newCount.toString());

//     if (newCount % 3 === 0) {
//       const timer = setTimeout(() => setIsOpen(true), 1500);
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   useEffect(() => {
//     if (!isOpen) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [isOpen, slides.length]);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % slides.length);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg animate-fadeIn">
      
//       {/* DESKTOP */}
//       <div className="hidden md:flex">
//         <div className="relative bg-gradient-to-br from-[#850E35] to-[#850E35] rounded-2xl shadow-2xl p-6 max-w-3xl w-[90%] mx-4 border border-[#F9E7B2]">

//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute -top-2 -right-2 bg-[#F9E7B2] hover:bg-[#850E35] text-[#850E35] hover:text-[#F9E7B2] w-7 h-7 rounded-full shadow-md flex items-center justify-center border border-[#850E35] transition-colors duration-200"
//           >
//             <X className="w-3.5 h-3.5" />
//           </button>

//           <div className="flex items-center gap-6">

//             {/* LEFT CONTENT */}
//             <div className="flex-1">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="relative">
//                   <div className="w-12 h-12 bg-[#F9E7B2] rounded-xl shadow flex items-center justify-center">
//                     <Tag className="w-6 h-6 text-[#850E35]" />
//                   </div>
//                   <div className="absolute -bottom-1 -right-1 bg-[#F9E7B2] w-5 h-5 rounded-full flex items-center justify-center">
//                     <Star className="w-2.5 h-2.5 text-[#850E35]" />
//                   </div>
//                 </div>

//                 <div className="flex-1">
//                   <h2 className="text-2xl font-bold text-[#F9E7B2]">
//                     Sepcail Offers Just For You!
//                   </h2>
//                   <p className="text-[#F9E7B2]/80 text-sm mt-1">
//                     Don't miss out on exclusive seasonal discounts & rewards.
//                   </p>
//                 </div>
//               </div>

//               {/* BULLET POINTS */}
//               <div className="space-y-3 mb-6">
//                 {[
//                   "Christmas Special - Up to 40% OFF",
//                   "New Year Launch - 25% OFF All Items",
//                   "Men's Collection - 15% OFF",
//                   "Free Shipping on Orders Above $99",
//                   "Weekend Flash Sales - 30% OFF",
//                 ].map((item, i) => (
//                   <div key={i} className="flex items-center gap-2">
//                     <div className="w-2 h-2 bg-[#F9E7B2] rounded-full"></div>
//                     <span className="text-[#F9E7B2] text-sm">{item}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA BUTTON */}
//               <button
//                 onClick={() => window.open("https://www.google.com/maps/place/Super+Family+Mart/@25.5500252,81.5445692,17z/data=!3m1!4b1!4m6!3m5!1s0x399ad781594c3def:0x65e91f8e445b1b85!8m2!3d25.5500252!4d81.5445692!16s%2Fg%2F11h2cpbgj6?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D", "_blank")}
//                 className="w-full px-4 py-3 bg-[#F9E7B2] text-[#850E35] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 hover:bg-[#850E35] hover:text-[#F9E7B2] border border-[#F9E7B2]"
//               >
                
//                 <span>Claim Offer Now</span>
//               </button>
//             </div>

//             {/* RIGHT — IMAGE BOX */}
//             <div className="flex-1 flex flex-col items-center">

//               {/* IMAGE BOX SHAPE */}
//               <div className="relative w-full h-[300px] rounded-xl overflow-hidden border border-[#F9E7B2] shadow-xl bg-white">

//                 {/* Previous Button */}
//                 <button
//                   onClick={prevSlide}
//                   className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#850E35]/80 text-[#F9E7B2] p-2 rounded-full z-10 hover:bg-[#850E35] transition-colors"
//                 >
//                   <ChevronLeft className="w-5 h-5" />
//                 </button>

//                 {/* IMAGE */}
//                 <img
//                   src={slides[currentIndex].image}
//                   alt=""
//                   className="w-full h-full object-cover"
//                 />

//                 {/* TEXT OVERLAY */}
//                 <div className="absolute bottom-0 w-full bg-[#850E35]/90 p-4 border-t border-[#F9E7B2]">
//                   <h3 className="text-[#F9E7B2] font-bold text-sm">{slides[currentIndex].title}</h3>
//                   <p className="text-[#F9E7B2]/80 text-xs">{slides[currentIndex].description}</p>
//                 </div>

//                 {/* Next Button */}
//                 <button
//                   onClick={nextSlide}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#850E35]/80 text-[#F9E7B2] p-2 rounded-full z-10 hover:bg-[#850E35] transition-colors"
//                 >
//                   <ChevronRight className="w-5 h-5" />
//                 </button>
//               </div>

//               {/* DOTS */}
//               <div className="flex justify-center mt-4 space-x-2">
//                 {slides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                       index === currentIndex ? "bg-[#F9E7B2] w-6" : "bg-[#F9E7B2]/30"
//                     }`}
//                   />
//                 ))}
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE VERSION */}
//       <div className="md:hidden">
//         <div className="relative bg-[#850E35] rounded-2xl shadow-2xl p-6 max-w-sm w-[90%] mx-4 border border-[#F9E7B2]">
          
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute -top-2 -right-2 bg-[#F9E7B2] hover:bg-[#850E35] text-[#850E35] hover:text-[#F9E7B2] w-7 h-7 rounded-full shadow-md flex items-center justify-center border border-[#850E35] transition-colors"
//           >
//             <X className="w-3.5 h-3.5" />
//           </button>

//           {/* Heading */}
//           <div className="flex items-center gap-3 mb-5">
//             <div className="relative">
//               <div className="w-14 h-14 bg-[#F9E7B2] rounded-xl flex items-center justify-center">
//                 <Tag className="w-7 h-7 text-[#850E35]" />
//               </div>
//               <div className="absolute -bottom-1 -right-1 bg-[#F9E7B2] w-5 h-5 rounded-full flex items-center justify-center">
//                 <Star className="w-2.5 h-2.5 text-[#850E35]" />
//               </div>
//             </div>
//             <div className="flex-1">
//               <h2 className="text-xl font-bold text-[#F9E7B2]">Festive Offers!</h2>
//               <p className="text-[#F9E7B2]/80 text-sm">Grab today's best deals</p>
//             </div>
//           </div>

//           {/* MOBILE BOX-SHAPED IMAGE */}
//           <div className="relative w-full h-72 rounded-xl overflow-hidden border border-[#F9E7B2] shadow-lg mb-5">

//             <button
//               onClick={prevSlide}
//               className="absolute left-2 z-10 bg-[#850E35]/80 text-[#F9E7B2] p-2 rounded-full hover:bg-[#850E35]"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>

//             <img
//               src={slides[currentIndex].image}
//               className="w-full h-full object-cover"
//             />

//             <div className="absolute bottom-0 w-full bg-[#850E35]/90 p-3 border-t border-[#F9E7B2]">
//               <h3 className="text-[#F9E7B2] text-sm font-semibold">{slides[currentIndex].title}</h3>
//               <p className="text-[#F9E7B2]/80 text-xs">{slides[currentIndex].description}</p>
//             </div>

//             <button
//               onClick={nextSlide}
//               className="absolute right-2 z-10 bg-[#850E35]/80 text-[#F9E7B2] p-2 rounded-full hover:bg-[#850E35]"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>

//           <div className="flex justify-center mb-4 space-x-2">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   index === currentIndex ? "bg-[#F9E7B2] w-5" : "bg-[#F9E7B2]/30"
//                 }`}
//               />
//             ))}
//           </div>

//           <button
//             onClick={() => window.open("#", "_blank")}
//             className="w-full px-5 py-4 bg-[#F9E7B2] text-[#850E35] font-semibold rounded-xl shadow-lg hover:bg-[#850E35] hover:text-[#F9E7B2] border border-[#F9E7B2] transition-colors"
//           >
//             View All Offers
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OffersPopup;








// import React, { useEffect, useState } from "react";
// import { X, Download, Tag, Star, ChevronLeft, ChevronRight } from "lucide-react";

// import offer1 from "../../assets/accessories.jpg";
// import offer2 from "../../assets/accessories.jpg";
// import offer3 from "../../assets/accessories.jpg";

// const OffersPopup: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       image: offer1,
//       title: "Christmas Sale - Up to 40% OFF",
//       description: "Festive special discounts on all categories! Limited time offer.",
//     },
//     {
//       image: offer2,
//       title: "New Year Special - 25% OFF",
//       description: "Start 2024 with amazing deals on premium collections.",
//     },
//     {
//       image: offer3,
//       title: "Men's Winter Collection - 15% OFF",
//       description: "Exclusive discount on all men's apparel and accessories.",
//     },
//     {
//       image: offer1,
//       title: "Free Shipping + 10% Cashback",
//       description: "Shop above $99 and get free delivery with extra cashback.",
//     },
//     {
//       image: offer2,
//       title: "Weekend Special - 30% OFF",
//       description: "Flash sale! Valid only this weekend. Don't miss out!",
//     },
//   ];

//   useEffect(() => {
//     const popupCounter = localStorage.getItem("offersPopupCounter");
//     const count = popupCounter ? parseInt(popupCounter) : 0;
//     const newCount = count + 1;
//     localStorage.setItem("offersPopupCounter", newCount.toString());

//     if (newCount % 3 === 0) {
//       const timer = setTimeout(() => setIsOpen(true), 1500);
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   useEffect(() => {
//     if (!isOpen) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [isOpen, slides.length]);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % slides.length);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg animate-fadeIn">
      
//       {/* DESKTOP */}
//       <div className="hidden md:flex">
//         <div className="relative bg-gradient-to-br from-[#850E35] to-[#850E35] rounded-2xl shadow-2xl p-6 max-w-3xl w-[90%] mx-4 border border-[#F9E7B2]">

//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute -top-2 -right-2 bg-[#F9E7B2] hover:bg-[#850E35] text-[#850E35] hover:text-[#F9E7B2] w-7 h-7 rounded-full shadow-md flex items-center justify-center border border-[#850E35] transition-colors duration-200"
//           >
//             <X className="w-3.5 h-3.5" />
//           </button>

//           <div className="flex items-center gap-6">

//             {/* LEFT CONTENT */}
//             <div className="flex-1">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="relative">
//                   <div className="w-12 h-12 bg-[#F9E7B2] rounded-xl shadow flex items-center justify-center">
//                     <Tag className="w-6 h-6 text-[#850E35]" />
//                   </div>
//                   <div className="absolute -bottom-1 -right-1 bg-[#F9E7B2] w-5 h-5 rounded-full flex items-center justify-center">
//                     <Star className="w-2.5 h-2.5 text-[#850E35]" />
//                   </div>
//                 </div>

//                 <div className="flex-1">
//                   <h2 className="text-2xl font-bold text-[#F9E7B2]">
//                     Special Offers Just For You!
//                   </h2>
//                   <p className="text-[#F9E7B2]/80 text-sm mt-1">
//                     Don't miss out on exclusive seasonal discounts & rewards.
//                   </p>
//                 </div>
//               </div>

//               {/* BULLET POINTS */}
//               <div className="space-y-3 mb-6">
//                 {[
//                   "Christmas Special - Up to 40% OFF",
//                   "New Year Launch - 25% OFF All Items",
//                   "Men's Collection - 15% OFF",
//                   "Free Shipping on Orders Above $99",
//                   "Weekend Flash Sales - 30% OFF",
//                 ].map((item, i) => (
//                   <div key={i} className="flex items-center gap-2">
//                     <div className="w-2 h-2 bg-[#F9E7B2] rounded-full"></div>
//                     <span className="text-[#F9E7B2] text-sm">{item}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA BUTTON */}
//               <button
//                 onClick={() => window.open("https://www.google.com/maps/place/Super+Family+Mart/@25.5500252,81.5445692,17z/data=!3m1!4b1!4m6!3m5!1s0x399ad781594c3def:0x65e91f8e445b1b85!8m2!3d25.5500252!4d81.5445692!16s%2Fg%2F11h2cpbgj6?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D", "_blank")}
//                 className="w-full px-4 py-3 bg-[#F9E7B2] text-[#850E35] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 hover:bg-[#850E35] hover:text-[#F9E7B2] border border-[#F9E7B2]"
//               >
//                 <span>Claim Offer Now</span>
//               </button>
//             </div>

//             {/* RIGHT — IMAGE BOX */}
//             <div className="flex-1 flex flex-col items-center">

//               {/* IMAGE BOX SHAPE */}
//               <div className="relative w-full h-[300px] rounded-xl overflow-hidden border border-[#F9E7B2] shadow-xl bg-white">

//                 {/* Previous Button */}
//                 <button
//                   onClick={prevSlide}
//                   className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#850E35]/80 text-[#F9E7B2] p-2 rounded-full z-10 hover:bg-[#850E35] transition-colors"
//                 >
//                   <ChevronLeft className="w-5 h-5" />
//                 </button>

//                 {/* IMAGE */}
//                 <img
//                   src={slides[currentIndex].image}
//                   alt={slides[currentIndex].title}
//                   className="w-full h-full object-cover"
//                 />

//                 {/* TEXT OVERLAY */}
//                 <div className="absolute bottom-0 w-full bg-[#850E35]/90 p-4 border-t border-[#F9E7B2]">
//                   <h3 className="text-[#F9E7B2] font-bold text-sm">{slides[currentIndex].title}</h3>
//                   <p className="text-[#F9E7B2]/80 text-xs">{slides[currentIndex].description}</p>
//                 </div>

//                 {/* Next Button */}
//                 <button
//                   onClick={nextSlide}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#850E35]/80 text-[#F9E7B2] p-2 rounded-full z-10 hover:bg-[#850E35] transition-colors"
//                 >
//                   <ChevronRight className="w-5 h-5" />
//                 </button>
//               </div>

//               {/* DOTS */}
//               <div className="flex justify-center mt-4 space-x-2">
//                 {slides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                       index === currentIndex ? "bg-[#F9E7B2] w-6" : "bg-[#F9E7B2]/30"
//                     }`}
//                   />
//                 ))}
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE VERSION */}
//       <div className="md:hidden">
//         <div className="relative bg-[#850E35] rounded-2xl shadow-2xl p-6 max-w-sm w-[90%] mx-4 border border-[#F9E7B2]">
          
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute -top-2 -right-2 bg-[#F9E7B2] hover:bg-[#850E35] text-[#850E35] hover:text-[#F9E7B2] w-7 h-7 rounded-full shadow-md flex items-center justify-center border border-[#850E35] transition-colors"
//           >
//             <X className="w-3.5 h-3.5" />
//           </button>

//           {/* Heading */}
//           <div className="flex items-center gap-3 mb-5">
//             <div className="relative">
//               <div className="w-14 h-14 bg-[#F9E7B2] rounded-xl flex items-center justify-center">
//                 <Tag className="w-7 h-7 text-[#850E35]" />
//               </div>
//               <div className="absolute -bottom-1 -right-1 bg-[#F9E7B2] w-5 h-5 rounded-full flex items-center justify-center">
//                 <Star className="w-2.5 h-2.5 text-[#850E35]" />
//               </div>
//             </div>
//             <div className="flex-1">
//               <h2 className="text-xl font-bold text-[#F9E7B2]">Festive Offers!</h2>
//               <p className="text-[#F9E7B2]/80 text-sm">Grab today's best deals</p>
//             </div>
//           </div>

//           {/* MOBILE BOX-SHAPED IMAGE */}
//           <div className="relative w-full h-72 rounded-xl overflow-hidden border border-[#F9E7B2] shadow-lg mb-5">

//             <button
//               onClick={prevSlide}
//               className="absolute left-2 z-10 bg-[#850E35]/80 text-[#F9E7B2] p-2 rounded-full hover:bg-[#850E35]"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>

//             <img
//               src={slides[currentIndex].image}
//               alt={slides[currentIndex].title}
//               className="w-full h-full object-cover"
//             />

//             <div className="absolute bottom-0 w-full bg-[#850E35]/90 p-3 border-t border-[#F9E7B2]">
//               <h3 className="text-[#F9E7B2] text-sm font-semibold">{slides[currentIndex].title}</h3>
//               <p className="text-[#F9E7B2]/80 text-xs">{slides[currentIndex].description}</p>
//             </div>

//             <button
//               onClick={nextSlide}
//               className="absolute right-2 z-10 bg-[#850E35]/80 text-[#F9E7B2] p-2 rounded-full hover:bg-[#850E35]"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>

//           <div className="flex justify-center mb-4 space-x-2">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   index === currentIndex ? "bg-[#F9E7B2] w-5" : "bg-[#F9E7B2]/30"
//                 }`}
//               />
//             ))}
//           </div>

//           <button
//             onClick={() => window.open("#", "_blank")}
//             className="w-full px-5 py-4 bg-[#F9E7B2] text-[#850E35] font-semibold rounded-xl shadow-lg hover:bg-[#850E35] hover:text-[#F9E7B2] border border-[#F9E7B2] transition-colors"
//           >
//             View All Offers
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OffersPopup;








// import React, { useEffect, useState } from "react";
// import { X, Tag, Star, ChevronLeft, ChevronRight } from "lucide-react";

// import offer1 from "../../assets/accessories.jpg";
// import offer2 from "../../assets/accessories.jpg";
// import offer3 from "../../assets/accessories.jpg";

// const OffersPopup: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       image: offer1,
//       title: "Christmas Sale - Up to 40% OFF",
//       description: "Festive special discounts on all categories! Limited time offer.",
//     },
//     {
//       image: offer2,
//       title: "New Year Special - 25% OFF",
//       description: "Start 2024 with amazing deals on premium collections.",
//     },
//     {
//       image: offer3,
//       title: "Men's Winter Collection - 15% OFF",
//       description: "Exclusive discount on all men's apparel and accessories.",
//     },
//     {
//       image: offer1,
//       title: "Special Deal Flat ₹200 OFF on First Purchase",
//       description: "Make your first purchase extra special with a flat ₹200 discount.",
//     },
//     {
//       image: offer2,
//       title: "Weekend Special - 30% OFF",
//       description: "Flash sale! Valid only this weekend. Don't miss out!",
//     },
//   ];

//   useEffect(() => {
//     const popupCounter = localStorage.getItem("offersPopupCounter");
//     const count = popupCounter ? parseInt(popupCounter) : 0;
//     const newCount = count + 1;
//     localStorage.setItem("offersPopupCounter", newCount.toString());

//     if (newCount % 3 === 0) {
//       const timer = setTimeout(() => setIsOpen(true), 1500);
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   useEffect(() => {
//     if (!isOpen) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [isOpen, slides.length]);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % slides.length);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg animate-fadeIn">
      
//       {/* DESKTOP */}
//       <div className="hidden md:flex">
//         <div className="relative bg-gradient-to-br from-[#F9E7B2] to-[#F9E7B2] rounded-2xl shadow-2xl p-6 max-w-3xl w-[90%] mx-4 border border-[#850E35]">

//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute -top-2 -right-2 bg-[#850E35] hover:bg-[#F9E7B2] text-[#F9E7B2] hover:text-[#850E35] w-7 h-7 rounded-full shadow-md flex items-center justify-center border border-[#850E35] transition-colors duration-200"
//           >
//             <X className="w-3.5 h-3.5" />
//           </button>

//           <div className="flex items-center gap-6">

//             {/* LEFT CONTENT */}
//             <div className="flex-1">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="relative">
//                   <div className="w-12 h-12 bg-[#850E35] rounded-xl shadow flex items-center justify-center">
//                     <Tag className="w-6 h-6 text-[#F9E7B2]" />
//                   </div>
//                   <div className="absolute -bottom-1 -right-1 bg-[#850E35] w-5 h-5 rounded-full flex items-center justify-center">
//                     <Star className="w-2.5 h-2.5 text-[#F9E7B2]" />
//                   </div>
//                 </div>

//                 <div className="flex-1">
//                   <h2 className="text-2xl font-bold text-[#850E35]">
//                     Special Offers Just For You!
//                   </h2>
//                   <p className="text-[#850E35]/80 text-sm mt-1">
//                     Don't miss out on exclusive seasonal discounts & rewards.
//                   </p>
//                 </div>
//               </div>

//               {/* BULLET POINTS */}
//               <div className="space-y-3 mb-6">
//                 {[
//                   "Christmas Special - Up to 40% OFF",
//                   "New Year Launch - 25% OFF All Items",
//                   "Men's Collection - 15% OFF",
//                   "Weekend Flash Sales - 30% OFF",
//                   "Little Ones’ Collection – Exclusive Discounts",
//                 ].map((item, i) => (
//                   <div key={i} className="flex items-center gap-2">
//                     <div className="w-2 h-2 bg-[#850E35] rounded-full"></div>
//                     <span className="text-[#850E35] text-sm">{item}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA BUTTON */}
//               <button
//                 onClick={() => window.open("https://www.google.com/maps/place/Super+Family+Mart/@25.5500252,81.5445692,17z/data=!3m1!4b1!4m6!3m5!1s0x399ad781594c3def:0x65e91f8e445b1b85!8m2!3d25.5500252!4d81.5445692!16s%2Fg%2F11h2cpbgj6?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D", "_blank")}
//                 className="w-full px-4 py-3 bg-[#850E35] text-[#F9E7B2] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 hover:bg-[#F9E7B2] hover:text-[#850E35] border border-[#850E35]"
//               >
//                 <span>Claim Offer Now</span>
//               </button>
//             </div>

//             {/* RIGHT — IMAGE BOX */}
//             <div className="flex-1 flex flex-col items-center">

//               {/* IMAGE BOX SHAPE */}
//               <div className="relative w-full h-[300px] rounded-xl overflow-hidden border border-[#850E35] shadow-xl bg-white">

//                 {/* Previous Button */}
//                 <button
//                   onClick={prevSlide}
//                   className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#850E35]/80 text-[#F9E7B2] p-2 rounded-full z-10 hover:bg-[#850E35] transition-colors"
//                 >
//                   <ChevronLeft className="w-5 h-5" />
//                 </button>

//                 {/* IMAGE */}
//                 <img
//                   src={slides[currentIndex].image}
//                   alt={slides[currentIndex].title}
//                   className="w-full h-full object-cover"
//                 />

//                 {/* TEXT OVERLAY */}
//                 <div className="absolute bottom-0 w-full bg-[#850E35]/90 p-4 border-t border-[#F9E7B2]">
//                   <h3 className="text-[#F9E7B2] font-bold text-sm">{slides[currentIndex].title}</h3>
//                   <p className="text-[#F9E7B2]/80 text-xs">{slides[currentIndex].description}</p>
//                 </div>

//                 {/* Next Button */}
//                 <button
//                   onClick={nextSlide}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#850E35]/80 text-[#F9E7B2] p-2 rounded-full z-10 hover:bg-[#850E35] transition-colors"
//                 >
//                   <ChevronRight className="w-5 h-5" />
//                 </button>
//               </div>

//               {/* DOTS */}
//               <div className="flex justify-center mt-4 space-x-2">
//                 {slides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                       index === currentIndex ? "bg-[#850E35] w-6" : "bg-[#850E35]/30"
//                     }`}
//                   />
//                 ))}
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE VERSION */}
//       <div className="md:hidden">
//         <div className="relative bg-[#F9E7B2] rounded-2xl shadow-2xl p-6 max-w-sm w-[90%] mx-4 border border-[#850E35]">
          
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute -top-2 -right-2 bg-[#850E35] hover:bg-[#F9E7B2] text-[#F9E7B2] hover:text-[#850E35] w-7 h-7 rounded-full shadow-md flex items-center justify-center border border-[#850E35] transition-colors"
//           >
//             <X className="w-3.5 h-3.5" />
//           </button>

//           {/* Heading */}
//           <div className="flex items-center gap-3 mb-5">
//             <div className="relative">
//               <div className="w-14 h-14 bg-[#850E35] rounded-xl flex items-center justify-center">
//                 <Tag className="w-7 h-7 text-[#F9E7B2]" />
//               </div>
//               <div className="absolute -bottom-1 -right-1 bg-[#850E35] w-5 h-5 rounded-full flex items-center justify-center">
//                 <Star className="w-2.5 h-2.5 text-[#F9E7B2]" />
//               </div>
//             </div>
//             <div className="flex-1">
//               <h2 className="text-xl font-bold text-[#850E35]">Festive Offers!</h2>
//               <p className="text-[#850E35]/80 text-sm">Grab today's best deals</p>
//             </div>
//           </div>

//           {/* MOBILE BOX-SHAPED IMAGE */}
//           <div className="relative w-full h-72 rounded-xl overflow-hidden border border-[#850E35] shadow-lg mb-5">

//             <button
//               onClick={prevSlide}
//               className="absolute left-2 z-10 bg-[#850E35]/80 text-[#F9E7B2] p-2 rounded-full hover:bg-[#850E35]"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>

//             <img
//               src={slides[currentIndex].image}
//               alt={slides[currentIndex].title}
//               className="w-full h-full object-cover"
//             />

//             <div className="absolute bottom-0 w-full bg-[#850E35]/90 p-3 border-t border-[#F9E7B2]">
//               <h3 className="text-[#F9E7B2] text-sm font-semibold">{slides[currentIndex].title}</h3>
//               <p className="text-[#F9E7B2]/80 text-xs">{slides[currentIndex].description}</p>
//             </div>

//             <button
//               onClick={nextSlide}
//               className="absolute right-2 z-10 bg-[#850E35]/80 text-[#F9E7B2] p-2 rounded-full hover:bg-[#850E35]"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>

//           <div className="flex justify-center mb-4 space-x-2">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   index === currentIndex ? "bg-[#850E35] w-5" : "bg-[#850E35]/30"
//                 }`}
//               />
//             ))}
//           </div>

//           <button
//             onClick={() => window.open("#", "_blank")}
//             className="w-full px-5 py-4 bg-[#850E35] text-[#F9E7B2] font-semibold rounded-xl shadow-lg hover:bg-[#F9E7B2] hover:text-[#850E35] border border-[#850E35] transition-colors"
//           >
//             View All Offers
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OffersPopup;









// import React, { useEffect, useState } from "react";
// import { X, Tag, Star, ChevronLeft, ChevronRight } from "lucide-react";

// import offer1 from "../../assets/accessories.jpg";
// import offer2 from "../../assets/accessories.jpg";
// import offer3 from "../../assets/accessories.jpg";

// const OffersPopup: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       image: offer1,
//       title: "Christmas Sale - Up to 40% OFF",
//       description: "Festive special discounts on all categories! Limited time offer.",
//     },
//     {
//       image: offer2,
//       title: "New Year Special - 25% OFF",
//       description: "Start 2024 with amazing deals on premium collections.",
//     },
//     {
//       image: offer3,
//       title: "Men's Winter Collection - 15% OFF",
//       description: "Exclusive discount on all men's apparel and accessories.",
//     },
//     {
//       image: offer1,
//       title: "Special Deal Flat ₹200 OFF on First Purchase",
//       description: "Make your first purchase extra special with a flat ₹200 discount.",
//     },
//     {
//       image: offer2,
//       title: "Weekend Special - 30% OFF",
//       description: "Flash sale! Valid only this weekend. Don't miss out!",
//     },
//   ];

//   useEffect(() => {
//     const popupCounter = localStorage.getItem("offersPopupCounter");
//     const count = popupCounter ? parseInt(popupCounter) : 0;
//     const newCount = count + 1;
//     localStorage.setItem("offersPopupCounter", newCount.toString());

//     if (newCount % 3 === 0) {
//       const timer = setTimeout(() => setIsOpen(true), 1500);
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   useEffect(() => {
//     if (!isOpen) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [isOpen, slides.length]);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % slides.length);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg animate-fadeIn">
      
//       {/* DESKTOP - ENLARGED */}
//       <div className="hidden md:flex">
//         <div className="relative bg-gradient-to-br from-[#F9E7B2] to-[#F9E7B2] rounded-3xl shadow-2xl p-8 max-w-5xl w-[95%] mx-4 border-2 border-[#850E35]">

//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute -top-4 -right-4 bg-[#850E35] hover:bg-[#F9E7B2] text-[#F9E7B2] hover:text-[#850E35] w-10 h-10 rounded-full shadow-xl flex items-center justify-center border-2 border-[#850E35] transition-colors duration-200"
//           >
//             <X className="w-6 h-6" />
//           </button>

//           <div className="flex items-center gap-8">

//             {/* LEFT CONTENT - ENLARGED */}
//             <div className="flex-1">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="relative">
//                   <div className="w-16 h-16 bg-[#850E35] rounded-2xl shadow-lg flex items-center justify-center">
//                     <Tag className="w-8 h-8 text-[#F9E7B2]" />
//                   </div>
//                   <div className="absolute -bottom-2 -right-2 bg-[#850E35] w-7 h-7 rounded-full flex items-center justify-center">
//                     <Star className="w-4 h-4 text-[#F9E7B2]" />
//                   </div>
//                 </div>

//                 <div className="flex-1">
//                   <h2 className="text-3xl font-bold text-[#850E35]">
//                     Special Offers Just For You!
//                   </h2>
//                   <p className="text-[#850E35]/80 text-lg mt-2">
//                     Don't miss out on exclusive seasonal discounts & rewards.
//                   </p>
//                 </div>
//               </div>

//               {/* BULLET POINTS - ENLARGED */}
//               <div className="space-y-4 mb-8">
//                 {[
//                   "Christmas Special - Up to 40% OFF",
//                   "New Year Launch - 25% OFF All Items",
//                   "Men's Collection - 15% OFF",
//                   "Weekend Flash Sales - 30% OFF",
//                   "Little Ones' Collection – Exclusive Discounts",
//                 ].map((item, i) => (
//                   <div key={i} className="flex items-center gap-3">
//                     <div className="w-3 h-3 bg-[#850E35] rounded-full"></div>
//                     <span className="text-[#850E35] text-lg">{item}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA BUTTON - ENLARGED */}
//               <button
//                 onClick={() => window.open("https://www.google.com/maps/place/Super+Family+Mart/@25.5500252,81.5445692,17z/data=!3m1!4b1!4m6!3m5!1s0x399ad781594c3def:0x65e91f8e445b1b85!8m2!3d25.5500252!4d81.5445692!16s%2Fg%2F11h2cpbgj6?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D", "_blank")}
//                 className="w-full px-6 py-4 bg-[#850E35] text-[#F9E7B2] font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-3 hover:bg-[#F9E7B2] hover:text-[#850E35] border-2 border-[#850E35]"
//               >
//                 <span>Claim Offer Now</span>
//               </button>
//             </div>

//             {/* RIGHT — IMAGE BOX - ENLARGED */}
//             <div className="flex-1 flex flex-col items-center">

//               {/* IMAGE BOX SHAPE - ENLARGED */}
//               <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border-2 border-[#850E35] shadow-2xl bg-white">

//                 {/* Previous Button */}
//                 <button
//                   onClick={prevSlide}
//                   className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#850E35]/80 text-[#F9E7B2] p-3 rounded-full z-10 hover:bg-[#850E35] transition-colors"
//                 >
//                   <ChevronLeft className="w-7 h-7" />
//                 </button>

//                 {/* IMAGE */}
//                 <img
//                   src={slides[currentIndex].image}
//                   alt={slides[currentIndex].title}
//                   className="w-full h-full object-cover"
//                 />

//                 {/* TEXT OVERLAY - ENLARGED */}
//                 <div className="absolute bottom-0 w-full bg-[#850E35]/90 p-5 border-t-2 border-[#F9E7B2]">
//                   <h3 className="text-[#F9E7B2] font-bold text-lg mb-1">{slides[currentIndex].title}</h3>
//                   <p className="text-[#F9E7B2]/80 text-base">{slides[currentIndex].description}</p>
//                 </div>

//                 {/* Next Button */}
//                 <button
//                   onClick={nextSlide}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#850E35]/80 text-[#F9E7B2] p-3 rounded-full z-10 hover:bg-[#850E35] transition-colors"
//                 >
//                   <ChevronRight className="w-7 h-7" />
//                 </button>
//               </div>

//               {/* DOTS - ENLARGED */}
//               <div className="flex justify-center mt-6 space-x-3">
//                 {slides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       index === currentIndex ? "bg-[#850E35] w-8" : "bg-[#850E35]/30"
//                     }`}
//                   />
//                 ))}
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE VERSION - ENLARGED */}
//       <div className="md:hidden">
//         <div className="relative bg-[#F9E7B2] rounded-3xl shadow-2xl p-6 max-w-md w-[95%] mx-4 border-2 border-[#850E35]">
          
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute -top-3 -right-3 bg-[#850E35] hover:bg-[#F9E7B2] text-[#F9E7B2] hover:text-[#850E35] w-9 h-9 rounded-full shadow-lg flex items-center justify-center border-2 border-[#850E35] transition-colors"
//           >
//             <X className="w-5 h-5" />
//           </button>

//           {/* Heading - ENLARGED */}
//           <div className="flex items-center gap-4 mb-6">
//             <div className="relative">
//               <div className="w-16 h-16 bg-[#850E35] rounded-2xl flex items-center justify-center">
//                 <Tag className="w-8 h-8 text-[#F9E7B2]" />
//               </div>
//               <div className="absolute -bottom-2 -right-2 bg-[#850E35] w-6 h-6 rounded-full flex items-center justify-center">
//                 <Star className="w-3.5 h-3.5 text-[#F9E7B2]" />
//               </div>
//             </div>
//             <div className="flex-1">
//               <h2 className="text-2xl font-bold text-[#850E35]">Festive Offers!</h2>
//               <p className="text-[#850E35]/80 text-base mt-1">Grab today's best deals</p>
//             </div>
//           </div>

//           {/* MOBILE BOX-SHAPED IMAGE - ENLARGED */}
//           <div className="relative w-full h-80 rounded-2xl overflow-hidden border-2 border-[#850E35] shadow-xl mb-6">

//             <button
//               onClick={prevSlide}
//               className="absolute left-3 z-10 bg-[#850E35]/80 text-[#F9E7B2] p-2 rounded-full hover:bg-[#850E35]"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>

//             <img
//               src={slides[currentIndex].image}
//               alt={slides[currentIndex].title}
//               className="w-full h-full object-cover"
//             />

//             <div className="absolute bottom-0 w-full bg-[#850E35]/90 p-4 border-t-2 border-[#F9E7B2]">
//               <h3 className="text-[#F9E7B2] text-base font-semibold mb-1">{slides[currentIndex].title}</h3>
//               <p className="text-[#F9E7B2]/80 text-sm">{slides[currentIndex].description}</p>
//             </div>

//             <button
//               onClick={nextSlide}
//               className="absolute right-3 z-10 bg-[#850E35]/80 text-[#F9E7B2] p-2 rounded-full hover:bg-[#850E35]"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>

//           {/* DOTS - ENLARGED */}
//           <div className="flex justify-center mb-5 space-x-3">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentIndex ? "bg-[#850E35] w-6" : "bg-[#850E35]/30"
//                 }`}
//               />
//             ))}
//           </div>

//           {/* CTA BUTTON - ENLARGED */}
//           <button
//             onClick={() => window.open("#", "_blank")}
//             className="w-full px-6 py-4 bg-[#850E35] text-[#F9E7B2] font-bold text-lg rounded-2xl shadow-xl hover:bg-[#F9E7B2] hover:text-[#850E35] border-2 border-[#850E35] transition-colors"
//           >
//             View All Offers
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OffersPopup;







// import React, { useEffect, useState } from "react";
// import { X, Tag, Star, ChevronLeft, ChevronRight } from "lucide-react";

// import offer1 from "../../assets/offerimage4.jpg";
// import offer2 from "../../assets/offerimage5.jpg";
// import offer3 from "../../assets/offerimage6.jpg";

// const OffersPopup: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       image: offer1,
//       title: " Showroom 7th Anniversary  Celebration",
   
//     },
//     {
//       image: offer2,
//       title: "Sales Start From 20 Dec to 05 Jan 2026",
    
//     },
//     {
//       image: offer3,
//       title: "Discount Up To 10% to 50%",
    
//     },
//     {
//       image: offer1,
//       title: "Buy 1 Get 1  Free",
     
//     },
    
//   ];

//   useEffect(() => {
//     const popupCounter = localStorage.getItem("offersPopupCounter");
//     const count = popupCounter ? parseInt(popupCounter) : 0;
//     const newCount = count + 1;
//     localStorage.setItem("offersPopupCounter", newCount.toString());

//     if (newCount % 3 === 0) {
//       const timer = setTimeout(() => setIsOpen(true), 1500);
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   useEffect(() => {
//     if (!isOpen) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [isOpen, slides.length]);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % slides.length);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg animate-fadeIn">
      
//       {/* DESKTOP - ENLARGED */}
//       <div className="hidden md:flex">
//         <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-5xl w-[95%] mx-4 border-2 border-[#850E35]">

//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute -top-4 -right-4 bg-[#850E35] hover:bg-white text-white hover:text-[#850E35] w-10 h-10 rounded-full shadow-xl flex items-center justify-center border-2 border-[#850E35] transition-colors duration-200"
//           >
//             <X className="w-6 h-6" />
//           </button>

//           <div className="flex items-center gap-8">

//             {/* LEFT CONTENT - ENLARGED */}
//             <div className="flex-1">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="relative">
//                   <div className="w-16 h-16 bg-[#850E35] rounded-2xl shadow-lg flex items-center justify-center">
//                     <Tag className="w-8 h-8 text-white" />
//                   </div>
//                   <div className="absolute -bottom-2 -right-2 bg-[#850E35] w-7 h-7 rounded-full flex items-center justify-center">
//                     <Star className="w-4 h-4 text-white" />
//                   </div>
//                 </div>

//                 <div className="flex-1">
//                   <h2 className="text-3xl font-bold text-[#850E35]">
//                     Special Offers Just For You!
//                   </h2>
//                   <p className="text-gray-600 text-lg mt-2">
//                     Don't Miss Out On Exclusive Seasonal Discounts & Rewards.
//                   </p>
//                 </div>
//               </div>

//               {/* BULLET POINTS - ENLARGED */}
//               <div className="space-y-4 mb-8">
//                 {[
//                   "Showroom 7th Anniversary Celebration",
//                   "Sales Start From 20 Dec to 05 Jan 2026",
//                   "Discount Up To 10% to 50%",
//                   "Buy 1 Get 1  Free",
                 
//                 ].map((item, i) => (
//                   <div key={i} className="flex items-center gap-3">
//                     <div className="w-3 h-3 bg-[#850E35] rounded-full"></div>
//                     <span className="text-gray-800 text-lg">{item}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA BUTTON - ENLARGED */}
//               <button
//   onClick={() =>
//     window.open(
//       "https://www.google.com/maps/place/Super+Family+Mart/@25.5500252,81.5445692,17z/data=!3m1!4b1!4m6!3m5!1s0x399ad781594c3def:0x65e91f8e445b1b85!8m2!3d25.5500252!4d81.5445692!16s%2Fg%2F11h2cpbgj6?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
//       "_blank"
//     )
//   }
//   className="w-full px-6 py-4 bg-[#850E35] text-white font-bold text-lg rounded-2xl shadow-xl transition-all duration-200 flex items-center justify-center gap-3 border-2 border-[#850E35]"
// >
//   <span>Claim Offer Now</span>
//         </button>

//             </div>

//             {/* RIGHT — IMAGE BOX - ENLARGED */}
//             <div className="flex-1 flex flex-col items-center">

//               {/* IMAGE BOX SHAPE - ENLARGED */}
//               <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border-2 border-[#850E35] shadow-2xl bg-white">

//                 {/* Previous Button */}
//                 <button
//                   onClick={prevSlide}
//                   className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#850E35]/80 text-white p-3 rounded-full z-10 hover:bg-[#850E35] transition-colors"
//                 >
//                   <ChevronLeft className="w-7 h-7" />
//                 </button>

//                 {/* IMAGE */}
//                 <img
//                   src={slides[currentIndex].image}
//                   alt={slides[currentIndex].title}
//                   className="w-full h-full object-cover"
//                 />

//                 {/* TEXT OVERLAY - ENLARGED */}
//                 <div className="absolute bottom-0 w-full bg-[#850E35]/90 p-5 border-t-2 border-white">
//                   <h3 className="text-white font-bold text-lg mb-1">{slides[currentIndex].title}</h3>
               
//                 </div>

//                 {/* Next Button */}
//                 <button
//                   onClick={nextSlide}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#850E35]/80 text-white p-3 rounded-full z-10 hover:bg-[#850E35] transition-colors"
//                 >
//                   <ChevronRight className="w-7 h-7" />
//                 </button>
//               </div>

//               {/* DOTS - ENLARGED */}
//               <div className="flex justify-center mt-6 space-x-3">
//                 {slides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       index === currentIndex ? "bg-[#850E35] w-8" : "bg-[#850E35]/30"
//                     }`}
//                   />
//                 ))}
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE VERSION - ENLARGED */}
//       <div className="md:hidden">
//         <div className="relative bg-white rounded-3xl shadow-2xl p-6 max-w-md w-[95%] mx-4 border-2 border-[#850E35]">
          
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute -top-3 -right-3 bg-[#850E35] hover:bg-white text-white hover:text-[#850E35] w-9 h-9 rounded-full shadow-lg flex items-center justify-center border-2 border-[#850E35] transition-colors"
//           >
//             <X className="w-5 h-5" />
//           </button>

//           {/* Heading - ENLARGED */}
//           <div className="flex items-center gap-4 mb-6">
//             <div className="relative">
//               <div className="w-16 h-16 bg-[#850E35] rounded-2xl flex items-center justify-center">
//                 <Tag className="w-8 h-8 text-white" />
//               </div>
//               <div className="absolute -bottom-2 -right-2 bg-[#850E35] w-6 h-6 rounded-full flex items-center justify-center">
//                 <Star className="w-3.5 h-3.5 text-white" />
//               </div>
//             </div>
//             <div className="flex-1">
//               <h2 className="text-2xl font-bold text-[#850E35]">Festive Offers!</h2>
//               <p className="text-gray-600 text-base mt-1">Grab today's best deals</p>
//             </div>
//           </div>

//           {/* MOBILE BOX-SHAPED IMAGE - ENLARGED */}
//           <div className="relative w-full h-80 rounded-2xl overflow-hidden border-2 border-[#850E35] shadow-xl mb-6">

//             <button
//               onClick={prevSlide}
//               className="absolute left-3 z-10 bg-[#850E35]/80 text-white p-2 rounded-full hover:bg-[#850E35]"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>

//             <img
//               src={slides[currentIndex].image}
//               alt={slides[currentIndex].title}
//               className="w-full h-full object-cover"
//             />

//             <div className="absolute bottom-0 w-full bg-[#850E35]/90 p-4 border-t-2 border-white">
//               <h3 className="text-white text-base font-semibold mb-1">{slides[currentIndex].title}</h3>
            
//             </div>

//             <button
//               onClick={nextSlide}
//               className="absolute right-3 z-10 bg-[#850E35]/80 text-white p-2 rounded-full hover:bg-[#850E35]"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>

//           {/* DOTS - ENLARGED */}
//           <div className="flex justify-center mb-5 space-x-3">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentIndex ? "bg-[#850E35] w-6" : "bg-[#850E35]/30"
//                 }`}
//               />
//             ))}
//           </div>

//           {/* CTA BUTTON - ENLARGED */}
//           <button
//             onClick={() => window.open("#", "_blank")}
//             className="w-full px-6 py-4 bg-[#850E35] text-white font-bold text-lg rounded-2xl shadow-xl hover:bg-white hover:text-[#850E35] border-2 border-[#850E35] transition-colors"
//           >
//             View All Offers
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OffersPopup;






// import React, { useEffect, useState } from "react";
// import { X, Tag, Star, ChevronLeft, ChevronRight } from "lucide-react";

// import offer1 from "../../assets/offerimage4.jpg";
// import offer2 from "../../assets/offerimage5.jpg";
// import offer3 from "../../assets/offerimage6.jpg";

// const OffersPopup: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       image: offer1,
//       title: " Showroom 7th Anniversary  Celebration",
//     },
//     {
//       image: offer2,
//       title: "Sales Start From 20 Dec to 05 Jan 2026",
//     },
//     {
//       image: offer3,
//       title: "Discount Up To 10% to 50%",
//     },
//     {
//       image: offer1,
//       title: "Buy 1 Get 1  Free",
//     },
//   ];

//   // Popup should open quickly on homepage load
//   useEffect(() => {
//     const timer = setTimeout(() => setIsOpen(true), 500); // 0.5 sec delay
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (!isOpen) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [isOpen, slides.length]);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % slides.length);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg animate-fadeIn">
      
//       {/* DESKTOP VIEW */}
//       <div className="hidden md:flex">
//         <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-5xl w-[95%] mx-4 border-2 border-[#850E35]">

//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute -top-4 -right-4 bg-[#850E35] hover:bg-white text-white hover:text-[#850E35] w-10 h-10 rounded-full shadow-xl flex items-center justify-center border-2 border-[#850E35] transition-colors duration-200"
//           >
//             <X className="w-6 h-6" />
//           </button>

//           <div className="flex items-center gap-8">

//             {/* LEFT CONTENT */}
//             <div className="flex-1">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="relative">
//                   <div className="w-16 h-16 bg-[#850E35] rounded-2xl shadow-lg flex items-center justify-center">
//                     <Tag className="w-8 h-8 text-white" />
//                   </div>
//                   <div className="absolute -bottom-2 -right-2 bg-[#850E35] w-7 h-7 rounded-full flex items-center justify-center">
//                     <Star className="w-4 h-4 text-white" />
//                   </div>
//                 </div>

//                 <div className="flex-1">
//                   <h2 className="text-3xl font-bold text-[#850E35]">
//                     Special Offers Just For You!
//                   </h2>
//                   <p className="text-gray-600 text-lg mt-2">
//                     Don't Miss Out On Exclusive Seasonal Discounts & Rewards.
//                   </p>
//                 </div>
//               </div>

//               <div className="space-y-4 mb-8">
//                 {[
//                   "Showroom 7th Anniversary Celebration",
//                   "Sales Start From 20 Dec to 05 Jan 2026",
//                   "Discount Up To 10% to 50%",
//                   "Buy 1 Get 1  Free",
//                 ].map((item, i) => (
//                   <div key={i} className="flex items-center gap-3">
//                     <div className="w-3 h-3 bg-[#850E35] rounded-full"></div>
//                     <span className="text-gray-800 text-lg">{item}</span>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={() =>
//                   window.open(
//                     "https://www.google.com/maps/place/Super+Family+Mart/@25.5500252,81.5445692,17z/data=!3m1!4b1!4m6!3m5!1s0x399ad781594c3def:0x65e91f8e445b1b85!8m2!3d25.5500252!4d81.5445692!16s%2Fg%2F11h2cpbgj6?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
//                     "_blank"
//                   )
//                 }
//                 className="w-full px-6 py-4 bg-[#850E35] text-white font-bold text-lg rounded-2xl shadow-xl transition-all duration-200 flex items-center justify-center gap-3 border-2 border-[#850E35]"
//               >
//                 <span>Claim Offer Now</span>
//               </button>
//             </div>

//             {/* RIGHT — IMAGE */}
//             <div className="flex-1 flex flex-col items-center">
//               <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border-2 border-[#850E35] shadow-2xl bg-white">

//                 <button
//                   onClick={prevSlide}
//                   className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#850E35]/80 text-white p-3 rounded-full z-10 hover:bg-[#850E35]"
//                 >
//                   <ChevronLeft className="w-7 h-7" />
//                 </button>

//                 <img
//                   src={slides[currentIndex].image}
//                   alt={slides[currentIndex].title}
//                   className="w-full h-full object-cover"
//                 />

//                 <div className="absolute bottom-0 w-full bg-[#850E35]/90 p-5 border-t-2 border-white">
//                   <h3 className="text-white font-bold text-lg mb-1">
//                     {slides[currentIndex].title}
//                   </h3>
//                 </div>

//                 <button
//                   onClick={nextSlide}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#850E35]/80 text-white p-3 rounded-full hover:bg-[#850E35]"
//                 >
//                   <ChevronRight className="w-7 h-7" />
//                 </button>
//               </div>

//               <div className="flex justify-center mt-6 space-x-3">
//                 {slides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       index === currentIndex ? "bg-[#850E35] w-8" : "bg-[#850E35]/30"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE VIEW */}
//       <div className="md:hidden">
//         <div className="relative bg-white rounded-3xl shadow-2xl p-6 max-w-md w-[95%] mx-4 border-2 border-[#850E35]">
          
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute -top-3 -right-3 bg-[#850E35] hover:bg-white text-white hover:text-[#850E35] w-9 h-9 rounded-full shadow-lg flex items-center justify-center border-2 border-[#850E35]"
//           >
//             <X className="w-5 h-5" />
//           </button>

//           <div className="flex items-center gap-4 mb-6">
//             <div className="relative">
//               <div className="w-16 h-16 bg-[#850E35] rounded-2xl flex items-center justify-center">
//                 <Tag className="w-8 h-8 text-white" />
//               </div>
//               <div className="absolute -bottom-2 -right-2 bg-[#850E35] w-6 h-6 rounded-full flex items-center justify-center">
//                 <Star className="w-3.5 h-3.5 text-white" />
//               </div>
//             </div>
//             <div className="flex-1">
//               <h2 className="text-2xl font-bold text-[#850E35]">Festive Offers!</h2>
//               <p className="text-gray-600 text-base mt-1">Grab today's best deals</p>
//             </div>
//           </div>

//           <div className="relative w-full h-80 rounded-2xl overflow-hidden border-2 border-[#850E35] shadow-xl mb-6">

//             <button
//               onClick={prevSlide}
//               className="absolute left-3 z-10 bg-[#850E35]/80 text-white p-2 rounded-full hover:bg-[#850E35]"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>

//             <img
//               src={slides[currentIndex].image}
//               alt={slides[currentIndex].title}
//               className="w-full h-full object-cover"
//             />

//             <div className="absolute bottom-0 w-full bg-[#850E35]/90 p-4 border-t-2 border-white">
//               <h3 className="text-white text-base font-semibold mb-1">
//                 {slides[currentIndex].title}
//               </h3>
//             </div>

//             <button
//               onClick={nextSlide}
//               className="absolute right-3 z-10 bg-[#850E35]/80 text-white p-2 rounded-full hover:bg-[#850E35]"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>

//           <div className="flex justify-center mb-5 space-x-3">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentIndex ? "bg-[#850E35] w-6" : "bg-[#850E35]/30"
//                 }`}
//               />
//             ))}
//           </div>

//           <button
//             onClick={() => window.open("#", "_blank")}
//             className="w-full px-6 py-4 bg-[#850E35] text-white font-bold text-lg rounded-2xl shadow-xl hover:bg-white hover:text-[#850E35] border-2 border-[#850E35]"
//           >
//             View All Offers
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OffersPopup;








import React, { useEffect, useState } from "react";
import { X, Tag, Star, ChevronLeft, ChevronRight } from "lucide-react";

import offer1 from "../../assets/offerimage4.jpg";
import offer2 from "../../assets/offerimage5.jpg";
import offer3 from "../../assets/offerimage6.jpg";

const OffersPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { image: offer1, title: "Showroom 7th Anniversary Celebration" },
    { image: offer2, title: "Sales Start From 20 Dec to 05 Jan 2026" },
    { image: offer3, title: "Discount Up To 10% to 50%" },
    { image: offer1, title: "Buy 1 Get 1 Free" },
  ];

  // Open popup quickly
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto slide only when popup is open
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isOpen, slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg animate-fadeIn">

      {/* =============================== */}
      {/*        DESKTOP VIEW (MD+)       */}
      {/* =============================== */}
      <div className="hidden md:flex">
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-5xl w-[95%] mx-4 border-2 border-[#850E35]">

          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-4 -right-4 bg-[#850E35] hover:bg-white text-white hover:text-[#850E35] 
            w-10 h-10 rounded-full shadow-xl flex items-center justify-center border-2 border-[#850E35]"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-8">

            {/* LEFT CONTENT */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-[#850E35] rounded-2xl flex items-center justify-center shadow-lg">
                    <Tag className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-[#850E35] w-7 h-7 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-[#850E35]">
                    Special Offers Just For You!
                  </h2>
                  <p className="text-gray-600 text-lg mt-2">
                    Don't Miss Out On Exclusive Seasonal Discounts & Rewards.
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {slides.map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#850E35] rounded-full"></div>
                    <span className="text-gray-800 text-lg">{s.title}</span>
                  </div>
                ))}
              </div>

              <button
  onClick={() =>
    window.open(
      "https://www.google.com/maps/place/Super+Family+Mart/@25.5500252,81.5445692,17z/data=!3m1!4b1!4m6!3m5!1s0x399ad781594c3def:0x65e91f8e445b1b85!8m2!3d25.5500252!4d81.5445692!16s%2Fg%2F11h2cpbgj6?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    )
  }
  className="w-full px-6 py-4 bg-[#850E35] text-white font-bold text-lg 
  rounded-2xl shadow-xl border-2 border-[#850E35]"
>
  Claim Offer Now
          </button>

            </div>

            {/* RIGHT IMAGE SLIDER */}
            <div className="flex-1 flex flex-col items-center">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border-2 border-[#850E35] shadow-2xl bg-white">

                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#850E35]/80 
                  text-white p-3 rounded-full z-10 hover:bg-[#850E35]"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>

                <img
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 w-full bg-[#850E35]/90 p-5 border-t-2 border-white">
                  <h3 className="text-white font-bold text-lg">
                    {slides[currentIndex].title}
                  </h3>
                </div>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#850E35]/80 
                  text-white p-3 rounded-full hover:bg-[#850E35]"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </div>

              <div className="flex justify-center mt-6 space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-[#850E35] w-8" : "bg-[#850E35]/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============================== */}
      {/*          MOBILE VIEW            */}
      {/* =============================== */}
      <div className="md:hidden px-3">
        <div className="relative bg-white rounded-3xl shadow-2xl p-5 w-full border-2 border-[#850E35]">

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-3 -right-3 bg-[#850E35] hover:bg-white 
            text-white hover:text-[#850E35] w-9 h-9 rounded-full shadow-lg 
            flex items-center justify-center border-2 border-[#850E35]"
          >
            <X className="w-5 h-5" />
          </button>

          {/* HEADER + LEFT CONTENT (Visible on Mobile) */}
          <div className="flex items-center gap-3 mb-5">
            <div className="relative">
              <div className="w-14 h-14 bg-[#850E35] rounded-2xl flex items-center justify-center">
                <Tag className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#850E35] w-6 h-6 rounded-full flex items-center justify-center">
                <Star className="w-3.5 h-3.5 text-white" />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#850E35]">Special Offers!</h2>
              <p className="text-gray-600 text-sm">Limited festive deals</p>
            </div>
          </div>

          {/* LEFT CONTENT LIST (ADDED FOR MOBILE) */}
          <div className="space-y-3 mb-5">
            {slides.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-[#850E35] rounded-full"></div>
                <span className="text-gray-800 text-sm">{s.title}</span>
              </div>
            ))}
          </div>

          {/* Mobile Image Slider */}
          <div className="relative w-full h-64 rounded-2xl overflow-hidden border-2 border-[#850E35] shadow-xl mb-5">

            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#850E35]/80 text-white p-2 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 w-full bg-[#850E35]/90 p-3 border-t-2 border-white">
              <h3 className="text-white text-sm font-semibold">
                {slides[currentIndex].title}
              </h3>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#850E35]/80 text-white p-2 rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mb-4 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#850E35] w-6" : "bg-[#850E35]/30 w-2"
                }`}
              />
            ))}
          </div>

          {/* CTA Button */}
         <button
  onClick={() =>
    window.open(
      "https://www.google.com/maps/place/Super+Family+Mart/@25.5500252,81.5445692,17z/data=!3m1!4b1!4m6!3m5!1s0x399ad781594c3def:0x65e91f8e445b1b85!8m2!3d25.5500252!4d81.5445692!16s%2Fg%2F11h2cpbgj6?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    )
  }
  className="w-full px-6 py-4 bg-[#850E35] text-white font-bold text-lg 
  rounded-2xl shadow-xl border-2 border-[#850E35]"
>
  Claim Offer Now
      </button>

        </div>
      </div>
    </div>
  );
};

export default OffersPopup;
