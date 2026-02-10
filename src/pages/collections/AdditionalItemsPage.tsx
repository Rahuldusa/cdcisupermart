// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Navbar from "@/components/Navbar"; // ✅ Make sure the path matches your project structure
// import Footer from "@/components/Footer"; // ✅ Adjust import path accordingly

// const additionalItems = [
//   {
//     id: 1,
//     name: "Leather Wallet",
//     description: "Crafted from genuine leather with multiple card slots.",
//     price: "$49.99",
//     image:
//       "https://images.unsplash.com/photo-1606813902802-05b25261b43b?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 2,
//     name: "Smart Watch",
//     description: "Track your fitness, heart rate, and stay connected on the go.",
//     price: "$199.99",
//     image:
//       "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 3,
//     name: "Sunglasses",
//     description: "Stylish UV-protected sunglasses perfect for any occasion.",
//     price: "$59.99",
//     image:
//       "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 4,
//     name: "Wireless Earbuds",
//     description: "Enjoy crystal clear sound with long-lasting battery life.",
//     price: "$89.99",
//     image:
//       "https://images.unsplash.com/photo-1590658268037-6b1cc79b0e2a?auto=format&fit=crop&w=800&q=80",
//   },
// ];

// const AdditionalItemsPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
//       {/* ✅ Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80"
//           alt="E-Commerce Hero"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative z-10 text-center text-white px-6">
//           <h1 className="text-5xl font-extrabold mb-4">
//             Enhance Your Shopping Experience
//           </h1>
//           <p className="text-lg mb-6 max-w-2xl mx-auto">
//             Discover premium accessories and add-ons to complement your
//             lifestyle.
//           </p>
//           <Button className="bg-white text-black hover:bg-gray-200 transition-all">
//             Shop Now
//           </Button>
//         </div>
//       </section>

//       {/* Additional Items Section */}
//       <section className="container mx-auto px-6 py-16 flex-grow">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-3">Additional Items</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Explore our curated collection of must-have accessories and add-ons
//             that complete your shopping journey.
//           </p>
//         </div>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {additionalItems.map((item) => (
//             <motion.div
//               key={item.id}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
//                 <p className="text-gray-500 mb-3 text-sm">{item.description}</p>
//                 <p className="text-lg font-bold mb-4">{item.price}</p>
//                 <Button className="bg-black text-white hover:bg-gray-800">
//                   Add to Cart
//                 </Button>
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

// export default AdditionalItemsPage;






// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const additionalItems = [
//   {
//     id: 1,
//     name: "Leather Wallet",
//     description: "Crafted from genuine leather with multiple card slots. Premium quality that ages beautifully.",
//     image: "https://images.unsplash.com/photo-1606813902802-05b25261b43b?auto=format&fit=crop&w=800&q=80",
//     badge: "Premium"
//   },
//   {
//     id: 2,
//     name: "Smart Watch",
//     description: "Track your fitness, heart rate, and stay connected on the go. Advanced health monitoring features.",
//     image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
//     badge: "Smart Tech"
//   },
//   {
//     id: 3,
//     name: "Sunglasses",
//     description: "Stylish UV-protected sunglasses perfect for any occasion. Polarized lenses for optimal clarity.",
//     image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
//     badge: "Trending"
//   },
//   {
//     id: 4,
//     name: "Wireless Earbuds",
//     description: "Enjoy crystal clear sound with long-lasting battery life. Noise cancellation technology included.",
//     image: "https://images.unsplash.com/photo-1590658268037-6b1cc79b0e2a?auto=format&fit=crop&w=800&q=80",
//     badge: "Bestseller"
//   },
// ];

// const AdditionalItemsPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 text-gray-900 flex flex-col">
//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
//         <img
//           src="https://i.pinimg.com/736x/44/bf/97/44bf9728081447df056774f8ae181cac.jpg"
//           alt="E-Commerce Hero"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 to-yellow-800/30" />
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center text-white px-6"
//         >
//           <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
//             Elevate Your Style
//           </h1>
//           <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
//             Discover premium accessories that complement your lifestyle and enhance your everyday experience.
//           </p>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Button className="bg-[#F0E491] text-gray-900 hover:bg-amber-200 px-8 py-3 text-lg font-semibold rounded-full shadow-2xl border border-amber-300">
//               Explore Collection
//             </Button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Additional Items Section */}
//       <section className="container mx-auto px-6 py-20 flex-grow">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-amber-600 bg-clip-text text-transparent">
//             Curated Accessories
//           </h2>
//           <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
//             Handpicked collection of essential accessories designed to elevate your daily routine with style and functionality.
//           </p>
//         </motion.div>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {additionalItems.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ 
//                 scale: 1.03,
//                 y: -8
//               }}
//               className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-amber-100"
//             >
//               {/* Badge */}
//               <div className="absolute top-4 right-4 z-10">
//                 <span className="bg-[#F0E491] text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg border border-amber-200">
//                   {item.badge}
//                 </span>
//               </div>

//               {/* Image Container */}
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>

//               {/* Content */}
//               <div className="p-6 text-center">
//                 <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-amber-700 transition-colors">
//                   {item.name}
//                 </h3>
//                 <p className="text-gray-600 mb-6 leading-relaxed text-sm">
//                   {item.description}
//                 </p>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {/* <Button className="w-full bg-[#F0E491] text-gray-900 hover:bg-amber-200 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 border border-amber-300">
//                     View Details
//                   </Button> */}
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         {/* <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="text-center mt-16"
//         >
//           <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-12 shadow-xl border border-amber-200">
//             <h3 className="text-3xl font-bold mb-4 text-gray-800">
//               Ready to Transform Your Collection?
//             </h3>
//             <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
//               Join thousands of satisfied customers who have elevated their style with our premium accessories.
//             </p>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Button className="bg-[#F0E491] text-gray-900 hover:bg-amber-200 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl border border-amber-300">
//                 Start Your Journey
//               </Button>
//             </motion.div>
//           </div>
//         </motion.div> */}
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default AdditionalItemsPage;





import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const additionalItems = [
  {
    id: 1,
    name: "Leather Wallet",
    description: "Crafted from genuine leather with multiple card slots. Premium quality that ages beautifully.",
    image: "https://i.pinimg.com/736x/1f/34/a0/1f34a0c6657ca4feca3c28d0bf0e4a5d.jpg",
    badge: "Premium"
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness, heart rate, and stay connected on the go. Advanced health monitoring features.",
    image: "https://i.pinimg.com/736x/ea/11/9b/ea119b8168a2b8fb325cd5b0403089be.jpg",
    badge: "Smart Tech"
  },
  {
    id: 3,
    name: "Sunglasses",
    description: "Stylish UV-protected sunglasses perfect for any occasion. Polarized lenses for optimal clarity.",
    image: "https://i.pinimg.com/1200x/87/43/46/874346679a00b05f00cfaa766e44b952.jpg",
    badge: "Trending"
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    description: "Enjoy crystal clear sound with long-lasting battery life. Noise cancellation technology included.",
    image: "https://i.pinimg.com/736x/f6/15/71/f61571f79aec2ee9559109b811ebd8b1.jpg",
    badge: "Bestseller"
  },
];

const AdditionalItemsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/44/bf/97/44bf9728081447df056774f8ae181cac.jpg"
          alt="E-Commerce Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 to-yellow-800/30" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
            Elevate Your Style
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover premium accessories that complement your lifestyle and enhance your everyday experience.
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

      {/* Additional Items Section */}
      <section className="container mx-auto px-6 py-20 flex-grow">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-amber-600 bg-clip-text text-transparent">
            Curated Accessories
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Handpicked collection of essential accessories designed to elevate your daily routine with style and functionality.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {additionalItems.map((item, index) => (
            <motion.div
              key={item.id}
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
                  {item.badge}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-amber-700 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {item.description}
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

        {/* Call to Action */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-12 shadow-xl border border-amber-200">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Ready to Transform Your Collection?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have elevated their style with our premium accessories.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-[#F0E491] text-gray-900 hover:bg-amber-200 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl border border-amber-300">
                Start Your Journey
              </Button>
            </motion.div>
          </div>
        </motion.div> */}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdditionalItemsPage;