// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Navbar from "@/components/Navbar"; // ✅ Adjust import path as needed
// import Footer from "@/components/Footer"; // ✅ Adjust import path as needed

// const pardas = [
//   {
//     id: 1,
//     name: "Velvet Blackout Curtains",
//     description:
//       "Luxurious velvet curtains with blackout lining for complete privacy and light control — ideal for bedrooms.",
//     image:
//       "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=900&q=80",
//     price: "₹1,999",
//   },
//   {
//     id: 2,
//     name: "Sheer White Curtains",
//     description:
//       "Elegant sheer curtains that allow natural light while maintaining a graceful, airy look.",
//     image:
//       "https://images.unsplash.com/photo-1588856122867-8d6a3e0c1b0a?auto=format&fit=crop&w=900&q=80",
//     price: "₹1,299",
//   },
//   {
//     id: 3,
//     name: "Printed Cotton Curtains",
//     description:
//       "Beautifully patterned cotton curtains with soft texture and durable fabric for a modern home.",
//     image:
//       "https://images.unsplash.com/photo-1616628182505-6efaf7a9c4d4?auto=format&fit=crop&w=900&q=80",
//     price: "₹1,499",
//   },
//   {
//     id: 4,
//     name: "Jacquard Eyelet Curtains",
//     description:
//       "Premium jacquard weave curtains with metallic eyelets for easy hanging and a rich aesthetic.",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
//     price: "₹2,299",
//   },
// ];

// const PardaCollectionPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//            {/* ✅ Navbar */}
//       <Navbar /> 

//       {/* Hero Section */}
//       <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1598300056393-4cf0c7f6a996?auto=format&fit=crop&w=1920&q=80"
//           alt="Parda Collection"
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
//             Elegant Curtain Collection
//           </motion.h1>
//           <motion.p
//             className="text-lg mb-8"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Transform your living spaces with premium quality curtains — combining luxury, comfort, and timeless elegance.
//           </motion.p>
//           <Button className="bg-white text-black hover:bg-gray-200 transition-all font-semibold px-8 py-3 rounded-full">
//             Shop Now
//           </Button>
//         </div>
//       </section>

//       {/* Product Section */}
//       <section className="container mx-auto px-6 py-20">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4">Stylish & Comfortable Pardas</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Discover a wide variety of curtains — from blackout velvet to soft sheers — crafted to elevate your interiors.
//           </p>
//         </div>

//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {pardas.map((parda) => (
//             <motion.div
//               key={parda.id}
//               className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
//               whileHover={{ scale: 1.03 }}
//             >
//               <img
//                 src={parda.image}
//                 alt={parda.name}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold mb-2">{parda.name}</h3>
//                 <p className="text-gray-600 text-sm mb-4">{parda.description}</p>
//                 <div className="flex items-center justify-between">
//                   <span className="text-lg font-bold text-gray-800">
//                     {parda.price}
//                   </span>
//                   <Button className="bg-black text-white hover:bg-gray-800 px-5 py-2 rounded-full">
//                     Add to Cart
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//         {/* ✅ Footer */}
//       <Footer />

//     </div>
//   );
// };

// export default PardaCollectionPage;






import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pardas = [
  {
    id: 1,
    name: "Velvet Blackout Curtains",
    description: "Luxurious velvet curtains with blackout lining for complete privacy and light control — ideal for bedrooms.",
    image: "https://i.pinimg.com/1200x/2c/db/d5/2cdbd5452d43623e94eed1221b6aa2dc.jpg",
    badge: "Blackout"
  },
  {
    id: 2,
    name: "Sheer White Curtains",
    description: "Elegant sheer curtains that allow natural light while maintaining a graceful, airy look.",
    image: "https://i.pinimg.com/1200x/7e/0a/bc/7e0abc54a8990b40124dfa5098855bcf.jpg",
    badge: "Sheer"
  },
  {
    id: 3,
    name: "Printed Cotton Curtains",
    description: "Beautifully patterned cotton curtains with soft texture and durable fabric for a modern home.",
    image: "https://i.pinimg.com/1200x/ec/93/eb/ec93ebf8cd65edb090d068e35414377a.jpg",
    badge: "Printed"
  },
  {
    id: 4,
    name: "Jacquard Eyelet Curtains",
    description: "Premium jacquard weave curtains with metallic eyelets for easy hanging and a rich aesthetic.",
    image: "https://i.pinimg.com/1200x/b0/35/d8/b035d8edfb03b8c67d3a5c81e750bf41.jpg",
    badge: "Premium"
  },
];

const PardaCollectionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* ✅ Navbar */}
      <Navbar /> 

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/f7/81/fe/f781fe463199bc2a2158ce211ff09175.jpg"
          alt="Parda Collection"
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
           Premium Parda Collection
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Transform your living spaces with premium quality curtains — combining luxury, comfort, and timeless elegance.
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
            Stylish & Comfortable Pardas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover a wide variety of curtains — from blackout velvet to soft sheers — crafted to elevate your interiors.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pardas.map((parda, index) => (
            <motion.div
              key={parda.id}
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
                  {parda.badge}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={parda.image}
                  alt={parda.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-amber-700 transition-colors">
                  {parda.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {parda.description}
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

export default PardaCollectionPage;