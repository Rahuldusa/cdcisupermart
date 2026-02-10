// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Navbar from "@/components/Navbar"; // ✅ Adjust path if needed
// import Footer from "@/components/Footer"; // ✅ Adjust path if needed

// const bedsheets = [
//   {
//     id: 1,
//     name: "Cotton Luxe Bedsheet",
//     description: "100% premium cotton bedsheet for breathable comfort and elegance.",
//     price: "$69.99",
//     image:
//       "https://images.unsplash.com/photo-1615874959474-d609d8b70b19?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: 2,
//     name: "Silk Satin Bedsheet",
//     description: "Smooth and silky texture for a luxurious bedroom experience.",
//     price: "$129.99",
//     image:
//       "https://images.unsplash.com/photo-1600172454216-5b4c3c1b9c8f?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: 3,
//     name: "Floral Printed Bedsheet",
//     description: "Vibrant floral patterns that add charm and freshness to your room.",
//     price: "$59.99",
//     image:
//       "https://images.unsplash.com/photo-1616627561937-09afad77c4de?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: 4,
//     name: "Minimalist Grey Bedsheet",
//     description: "Soft, wrinkle-free fabric designed for minimal modern homes.",
//     price: "$79.99",
//     image:
//       "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: 5,
//     name: "Kids Cartoon Bedsheet",
//     description: "Colorful and playful designs perfect for children's rooms.",
//     price: "$49.99",
//     image:
//       "https://images.unsplash.com/photo-1616627454431-b22caa7b6e0a?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: 6,
//     name: "Organic Bamboo Bedsheet",
//     description: "Eco-friendly, hypoallergenic bamboo material for gentle comfort.",
//     price: "$99.99",
//     image:
//       "https://images.unsplash.com/photo-1598300053651-9f43be4e8a4c?auto=format&fit=crop&w=900&q=80",
//   },
// ];

// const BedsheetsPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
//       {/* ✅ Navbar */}
//       <Navbar />

//       {/* 🌟 Hero Section */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1616627454431-b22caa7b6e0a?auto=format&fit=crop&w=1600&q=80"
//           alt="Bedsheets Hero"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative z-10 text-center text-white px-6">
//           <h1 className="text-5xl font-extrabold mb-4">Dream in Comfort</h1>
//           <p className="text-lg mb-6 max-w-2xl mx-auto">
//             Explore our soft, stylish, and durable bedsheets — designed to make every night a luxurious one.
//           </p>
//           <Button className="bg-white text-black hover:bg-gray-200 transition-all">
//             Shop Now
//           </Button>
//         </div>
//       </section>

//       {/* 🛏️ Bedsheets Collection Section */}
//       <section className="container mx-auto px-6 py-16 flex-grow">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-3">Our Bedsheet Collection</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Whether you love minimal elegance or colorful prints, our curated bedsheets are made to match your comfort and style.
//           </p>
//         </div>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {bedsheets.map((item) => (
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

// export default BedsheetsPage;






// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const bedsheets = [
//   {
//     id: 1,
//     name: "Cotton Luxe Bedsheet",
//     description: "100% premium cotton bedsheet for breathable comfort and elegance.",
//     image: "https://i.pinimg.com/736x/2b/cc/20/2bcc2051a5afcbd9ca2e41a0427b9acd.jpg",
//     badge: "Premium"
//   },
//   {
//     id: 2,
//     name: "Silk Satin Bedsheet",
//     description: "Smooth and silky texture for a luxurious bedroom experience.",
//     image: "https://i.pinimg.com/1200x/12/1e/ec/121eeca14bed6cb8e5bf18c6350b28ab.jpg",
//     badge: "Luxury"
//   },
//   {
//     id: 3,
//     name: "Floral Printed Bedsheet",
//     description: "Vibrant floral patterns that add charm and freshness to your room.",
//     image: "https://i.pinimg.com/736x/6d/5f/e3/6d5fe3f092a37982373e0e33363be3b7.jpg",
//     badge: "Floral"
//   },
//   {
//     id: 4,
//     name: "Minimalist Grey Bedsheet",
//     description: "Soft, wrinkle-free fabric designed for minimal modern homes.",
//     image: "https://i.pinimg.com/1200x/ca/c1/01/cac1015b47c8269789968e504c152bf0.jpg",
//     badge: "Minimalist"
//   },
//   {
//     id: 5,
//     name: "Kids Cartoon Bedsheet",
//     description: "Colorful and playful designs perfect for children's rooms.",
//     image: "https://i.pinimg.com/736x/ec/f0/b8/ecf0b820be9b830bbb1db7fbfab93150.jpg",
//     badge: "Kids"
//   },
//   {
//     id: 6,
//     name: "Organic Bamboo Bedsheet",
//     description: "Eco-friendly, hypoallergenic bamboo material for gentle comfort.",
//     image: "https://i.pinimg.com/736x/f2/64/fc/f264fcef938a92f272d8d611c07dea7b.jpg",
//     badge: "Eco-Friendly"
//   },
// ];

// const BedsheetsPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white text-gray-900 flex flex-col">
//       {/* ✅ Navbar */}
//       <Navbar />

//       {/* 🌟 Hero Section */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
//           alt="Bedsheets Hero"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50" />
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center text-white px-6"
//         >
//           <h1 className="text-5xl font-extrabold mb-4">Dream in Comfort</h1>
//           <p className="text-lg mb-6 max-w-2xl mx-auto">
//             Explore our soft, stylish, and durable bedsheets — designed to make every night a luxurious one.
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

//       {/* 🛏️ Bedsheets Collection Section */}
//       <section className="container mx-auto px-6 py-16 flex-grow">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-amber-600 bg-clip-text text-transparent">
//             Our Bedsheet Collection
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Whether you love minimal elegance or colorful prints, our curated bedsheets are made to match your comfort and style.
//           </p>
//         </motion.div>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {bedsheets.map((item, index) => (
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
//       </section>

//       {/* ✅ Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default BedsheetsPage;




import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import images from assets folder
import cottonLuxeBedsheet from "@/assets/Bedsheets/bedsheet1.jpeg";
import silkSatinBedsheet from "@/assets/Bedsheets/bedsheet2.jpeg";
import floralPrintedBedsheet from "@/assets/bedsheets/bedsheet3.jpeg";
import minimalistGreyBedsheet from "@/assets/Bedsheets/bedsheet4.jpeg";
import kidsCartoonBedsheet from "@/assets/Bedsheets/bedsheet5.jpeg";
import organicBambooBedsheet from "@/assets/Bedsheets/bedsheet6.jpeg";
import heroBedsheet from "@/assets/Bedsheets/bedsheet26.jpeg";

const bedsheets = [
  {
    id: 1,
    name: "Cotton Luxe Bedsheet",
    description: "100% premium cotton bedsheet for breathable comfort and elegance.",
    image: cottonLuxeBedsheet,
    badge: "Premium"
  },
  {
    id: 2,
    name: "Silk Satin Bedsheet",
    description: "Smooth and silky texture for a luxurious bedroom experience.",
    image: silkSatinBedsheet,
    badge: "Luxury"
  },
  {
    id: 3,
    name: "Floral Printed Bedsheet",
    description: "Vibrant floral patterns that add charm and freshness to your room.",
    image: floralPrintedBedsheet,
    badge: "Floral"
  },
  {
    id: 4,
    name: "Minimalist Grey Bedsheet",
    description: "Soft, wrinkle-free fabric designed for minimal modern homes.",
    image: minimalistGreyBedsheet,
    badge: "Minimalist"
  },
  {
    id: 5,
    name: "Kids Cartoon Bedsheet",
    description: "Colorful and playful designs perfect for children's rooms.",
    image: kidsCartoonBedsheet,
    badge: "Kids"
  },
  {
    id: 6,
    name: "Organic Bamboo Bedsheet",
    description: "Eco-friendly, hypoallergenic bamboo material for gentle comfort.",
    image: organicBambooBedsheet,
    badge: "Eco-Friendly"
  },
];

const BedsheetsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* ✅ Navbar */}
      <Navbar />

      {/* 🌟 Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroBedsheet}
          alt="Bedsheets Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-5xl font-extrabold mb-4">Dream in Comfort</h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Explore our soft, stylish, and durable bedsheets — designed to make every night a luxurious one.
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

      {/* 🛏️ Bedsheets Collection Section */}
      <section className="container mx-auto px-6 py-16 flex-grow">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-amber-600 bg-clip-text text-transparent">
            Our Bedsheet Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you love minimal elegance or colorful prints, our curated bedsheets are made to match your comfort and style.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {bedsheets.map((item, index) => (
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

export default BedsheetsPage;