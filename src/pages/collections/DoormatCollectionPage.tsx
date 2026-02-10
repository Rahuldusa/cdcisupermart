// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Navbar from "@/components/Navbar"; // ✅ Adjust import path as needed
// import Footer from "@/components/Footer"; // ✅ Adjust import path as needed

// const doormats = [
//   {
//     id: 1,
//     name: "Coir Welcome Doormat",
//     description:
//       "Eco-friendly coir doormat with a bold 'Welcome' design that keeps dirt outside and style inside.",
//     image:
//       "https://images.unsplash.com/photo-1574790398664-0cb03682ed4a?auto=format&fit=crop&w=900&q=80",
//     price: "₹599",
//   },
//   {
//     id: 2,
//     name: "Rubber Backed Doormat",
//     description:
//       "Durable rubber-backed doormat with non-slip grip — ideal for heavy foot traffic areas.",
//     image:
//       "https://images.unsplash.com/photo-1582979512210-5a6caa40d79b?auto=format&fit=crop&w=900&q=80",
//     price: "₹799",
//   },
//   {
//     id: 3,
//     name: "Patterned Fabric Doormat",
//     description:
//       "Soft and stylish doormat with geometric fabric print, perfect for modern interiors.",
//     image:
//       "https://images.unsplash.com/photo-1601987077671-6c46d104b9c3?auto=format&fit=crop&w=900&q=80",
//     price: "₹699",
//   },
//   {
//     id: 4,
//     name: "Outdoor All-Weather Mat",
//     description:
//       "Weather-resistant mat suitable for outdoor spaces, made from heavy-duty PVC fibers.",
//     image:
//       "https://images.unsplash.com/photo-1560185007-c5b201e7c9bb?auto=format&fit=crop&w=900&q=80",
//     price: "₹999",
//   },
// ];

// const DoormatCollectionPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//              {/* ✅ Navbar */}
//       <Navbar /> 

//       {/* Hero Section */}
//       <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1582979512210-5a6caa40d79b?auto=format&fit=crop&w=1920&q=80"
//           alt="Doormat Collection"
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
//             Elegant Doormat Collection
//           </motion.h1>
//           <motion.p
//             className="text-lg mb-8"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Add a welcoming touch to your home with our stylish, durable, and eco-friendly doormats designed for every entrance.
//           </motion.p>
//           <Button className="bg-white text-black hover:bg-gray-200 transition-all font-semibold px-8 py-3 rounded-full">
//             Explore Now
//           </Button>
//         </div>
//       </section>

//       {/* Product Section */}
//       <section className="container mx-auto px-6 py-20">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4">Top Picks in Doormats</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Whether you prefer natural textures or modern prints, find the perfect doormat to enhance your home’s entrance.
//           </p>
//         </div>

//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {doormats.map((mat) => (
//             <motion.div
//               key={mat.id}
//               className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
//               whileHover={{ scale: 1.03 }}
//             >
//               <img
//                 src={mat.image}
//                 alt={mat.name}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold mb-2">{mat.name}</h3>
//                 <p className="text-gray-600 text-sm mb-4">{mat.description}</p>
//                 <div className="flex items-center justify-between">
//                   <span className="text-lg font-bold text-gray-800">
//                     {mat.price}
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

//           {/* ✅ Footer */}
//       <Footer />

//     </div>
//   );
// };

// export default DoormatCollectionPage;




import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const doormats = [
  {
    id: 1,
    name: "Coir Welcome Doormat",
    description: "Eco-friendly coir doormat with a bold 'Welcome' design that keeps dirt outside and style inside.",
    image: "https://i.pinimg.com/1200x/9f/15/62/9f156241bae3f5d721f56bf723fb1063.jpg",
    badge: "Eco-Friendly"
  },
  {
    id: 2,
    name: "Rubber Backed Doormat",
    description: "Durable rubber-backed doormat with non-slip grip — ideal for heavy foot traffic areas.",
    image: "https://i.pinimg.com/1200x/a1/74/a1/a174a13c68298712c19a7f6f151660f8.jpg",
    badge: "Non-Slip"
  },
  {
    id: 3,
    name: "Patterned Fabric Doormat",
    description: "Soft and stylish doormat with geometric fabric print, perfect for modern interiors.",
    image: "https://i.pinimg.com/736x/fa/62/e6/fa62e698918edce292fb9ef3ee06dc3d.jpg",
    badge: "Modern"
  },
  {
    id: 4,
    name: "Outdoor All-Weather Mat",
    description: "Weather-resistant mat suitable for outdoor spaces, made from heavy-duty PVC fibers.",
    image: "https://i.pinimg.com/1200x/29/b0/7e/29b07e2578664d87c52e386386905826.jpg",
    badge: "All-Weather"
  },
];

const DoormatCollectionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* ✅ Navbar */}
      <Navbar /> 

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/49/97/3d/49973d1afb24a253861f147c1369a043.jpg"
          alt="Doormat Collection"
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
            Elegant Doormat Collection
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Add a welcoming touch to your home with our stylish, durable, and eco-friendly doormats designed for every entrance.
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
            Top Picks in Doormats
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you prefer natural textures or modern prints, find the perfect doormat to enhance your home's entrance.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doormats.map((mat, index) => (
            <motion.div
              key={mat.id}
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
                  {mat.badge}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={mat.image}
                  alt={mat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-amber-700 transition-colors">
                  {mat.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {mat.description}
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

export default DoormatCollectionPage;