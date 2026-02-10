// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Navbar from "@/components/Navbar"; // ✅ Adjust import path as needed
// import Footer from "@/components/Footer"; // ✅ Adjust import path as needed

// const blankets = [
//   {
//     id: 1,
//     name: "Velvet Soft Blanket",
//     description: "Luxuriously soft velvet blanket for cozy nights and elegant decor.",
//     price: "$79.99",
//     image:
//       "https://images.unsplash.com/photo-1616627454431-b22caa7b6e0a?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: 2,
//     name: "Cotton Comfort Blanket",
//     description: "Breathable and lightweight cotton blanket perfect for all seasons.",
//     price: "$59.99",
//     image:
//       "https://images.unsplash.com/photo-1602610488748-89a5a66c89b8?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: 3,
//     name: "Fleece Warm Blanket",
//     description: "Plush fleece design offering extra warmth and softness.",
//     price: "$49.99",
//     image:
//       "https://images.unsplash.com/photo-1603481546579-65d935ba9c4b?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: 4,
//     name: "Weighted Blanket",
//     description: "Promotes relaxation and better sleep with gentle, even pressure.",
//     price: "$129.99",
//     image:
//       "https://images.unsplash.com/photo-1616627561937-09afad77c4de?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: 5,
//     name: "Knitted Chunky Blanket",
//     description: "A stylish, hand-knit chunky blanket perfect for cozy home vibes.",
//     price: "$99.99",
//     image:
//       "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: 6,
//     name: "Bamboo Cooling Blanket",
//     description: "Eco-friendly bamboo fabric for a cool and breathable sleep.",
//     price: "$89.99",
//     image:
//       "https://images.unsplash.com/photo-1616627454851-6483a37b324d?auto=format&fit=crop&w=900&q=80",
//   },
// ];

// const BlanketsPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
//       {/* ✅ Navbar */}
//       <Navbar />

//       {/* 🌟 Hero Section */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1578894381116-5c2b4b235b24?auto=format&fit=crop&w=1600&q=80"
//           alt="Blankets Hero"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative z-10 text-center text-white px-6">
//           <h1 className="text-5xl font-extrabold mb-4">
//             Cozy Up with Our Blankets
//           </h1>
//           <p className="text-lg mb-6 max-w-2xl mx-auto">
//             Discover our luxurious and comfortable blankets designed to keep you
//             warm and stylish year-round.
//           </p>
//           <Button className="bg-white text-black hover:bg-gray-200 transition-all">
//             Shop Now
//           </Button>
//         </div>
//       </section>

//       {/* 🛏️ Blankets Section */}
//       <section className="container mx-auto px-6 py-16 flex-grow">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-3">Our Blanket Collection</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Wrap yourself in comfort with our wide selection of blankets, made
//             from the finest materials to match every season and style.
//           </p>
//         </div>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {blankets.map((item) => (
//             <motion.div
//               key={item.id}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-64 object-cover"
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

// export default BlanketsPage;





import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blankets = [
  {
    id: 1,
    name: "Velvet Soft Blanket",
    description: "Luxuriously soft velvet blanket for cozy nights and elegant decor.",
    image: "https://i.pinimg.com/1200x/49/21/39/492139fe0a1e8e03393fb0aa72878a08.jpg",
    badge: "Premium"
  },
  {
    id: 2,
    name: "Cotton Comfort Blanket",
    description: "Breathable and lightweight cotton blanket perfect for all seasons.",
    image: "https://i.pinimg.com/1200x/eb/d5/96/ebd5965ff36c0125a3cec744aeba64fd.jpg",
    badge: "All Season"
  },
  {
    id: 3,
    name: "Fleece Warm Blanket",
    description: "Plush fleece design offering extra warmth and softness.",
    image: "https://i.pinimg.com/1200x/5f/8a/3b/5f8a3bccf0c8dcf563ddcf1bda3bc586.jpg",
    badge: "Extra Warm"
  },
  {
    id: 4,
    name: "Weighted Blanket",
    description: "Promotes relaxation and better sleep with gentle, even pressure.",
    image: "https://i.pinimg.com/1200x/45/18/16/451816a697b955fc41b3d721f4eb024c.jpg",
    badge: "Therapeutic"
  },
  {
    id: 5,
    name: "Knitted Chunky Blanket",
    description: "A stylish, hand-knit chunky blanket perfect for cozy home vibes.",
    image: "https://i.pinimg.com/1200x/82/46/65/8246658bdfc31b07333221ddfd3d7b8d.jpg",
    badge: "Handmade"
  },
  {
    id: 6,
    name: "Bamboo Cooling Blanket",
    description: "Eco-friendly bamboo fabric for a cool and breathable sleep.",
    image: "https://i.pinimg.com/736x/fd/d6/30/fdd630298881fda937d9addd8fe83eb5.jpg",
    badge: "Eco-Friendly"
  },
];

const BlanketsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* ✅ Navbar */}
      <Navbar />

      {/* 🌟 Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/68/26/04/6826045cdaf6389cf866e557a2a750c9.jpg"
          alt="Blankets Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-5xl font-extrabold mb-4">
            Cozy Up with Our Blankets
          </h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Discover our luxurious and comfortable blankets designed to keep you
            warm and stylish year-round.
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

      {/* 🛏️ Blankets Section */}
      <section className="container mx-auto px-6 py-16 flex-grow">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-amber-600 bg-clip-text text-transparent">
            Our Blanket Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wrap yourself in comfort with our wide selection of blankets, made
            from the finest materials to match every season and style.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blankets.map((item, index) => (
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
      </section>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default BlanketsPage;