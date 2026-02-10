// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// interface CategoryCardProps {
//   title: string;
//   image: string;
//   link: string;
//   description: string;
// }

// const CategoryCard = ({ title, image, link, description }: CategoryCardProps) => (
//   <motion.div
//     whileHover={{ scale: 1.03 }}
//     whileTap={{ scale: 0.98 }}
//     className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
//   >
//     <img
//       src={image}
//       alt={title}
//       className="w-full h-[380px] object-cover transform transition-transform duration-700 group-hover:scale-110"
//     />
//     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
//     <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
//       <h3 className="text-2xl font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
//         {title}
//       </h3>
//       <p className="text-sm text-gray-200 mb-3">{description}</p>
//       <Link
//         to={link}
//         className="inline-block px-4 py-2 bg-white text-black rounded-full text-sm font-semibold shadow-md hover:bg-yellow-300 transition-all duration-300"
//       >
//         Explore Now
//       </Link>
//     </div>
//   </motion.div>
// );

// const ShopByCategory = () => {
//   return (
//     <section className="container mx-auto px-4 py-24">
//       {/* Heading */}
//       <div className="text-center mb-16">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4"
//         >
//           Shop by Category
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-gray-600 max-w-2xl mx-auto text-lg"
//         >
//           Curated collections for every member of your family
//         </motion.p>

//         <div className="mt-4 w-24 h-1 bg-yellow-400 mx-auto rounded-full" />
//       </div>

//       {/* Category Grid */}
//       <div className="space-y-10">
//         {/* First Row */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <CategoryCard
//             title="Men's Collection"
//             image="https://i.pinimg.com/736x/6c/ea/e5/6ceae5218fb29ab52fe97287d40fde10.jpg"
//             link="/men"
//             description="Sophisticated styles for the modern man"
//           />
//           <CategoryCard
//             title="Women's Collection"
//             image="https://i.pinimg.com/736x/06/a0/6a/06a06aba8aa064357a96f61a3889fec2.jpg"
//             link="/women"
//             description="Elegant fashion for every occasion"
//           />
//           <CategoryCard
//             title="Kids Collection"
//             image="https://i.pinimg.com/736x/f8/29/ef/f829efb8940140c34a116091a7f74b6e.jpg"
//             link="/kids"
//             description="Playful and comfortable styles"
//           />
//         </div>

//         {/* Second Row */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <CategoryCard
//             title="Ethnic Wear"
//             image="https://i.pinimg.com/1200x/db/c9/68/dbc9686aafeddc82a0671f81bf57354e.jpg"
//             link="/collections"
//             description="Traditional elegance meets modern design"
//           />
//           <CategoryCard
//             title="Accessories"
//             image="https://i.pinimg.com/1200x/8e/15/22/8e15225c2a5c5ef0faaed20a89ec52db.jpg"
//             link="/collections"
//             description="Complete your look with premium accessories"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ShopByCategory;





// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// // Import all images
// import mensCollection from "../../assets/Men/Suits19.jpeg";
// import womensCollection from "../../assets/Women/lehanga12.jpeg";
// import kidsCollection from "../../assets/Kids/girljeans2.jpeg";
// import ethnicWear from "../../assets/Women/kurthiset5.jpeg";
// import accessories from "../../assets/accessories.jpg";
// import CategoryCard from "../CategoryCard";

// // Create an images object for easier management
// const categoryImages = {
//   mens: mensCollection,
//   womens: womensCollection,
//   kids: kidsCollection,
//   ethnic: ethnicWear,
//   accessories: accessories,
// };

// // ... rest of your CategoryCard component remains the same

// const ShopByCategory = () => {
//   return (
//     <section className="container mx-auto px-4 py-24">
//       {/* Heading */}
//       <div className="text-center mb-16">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4"
//         >
//           Shop by Category
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-gray-600 max-w-2xl mx-auto text-lg"
//         >
//           Curated collections for every member of your family
//         </motion.p>

//         <div className="mt-4 w-24 h-1 bg-yellow-400 mx-auto rounded-full" />
//       </div>

//       {/* Category Grid */}
//       <div className="space-y-10">
//         {/* First Row */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <CategoryCard
//             title="Men's Collection"
//             image={categoryImages.mens}
//             link="/men"
//             description="Sophisticated styles for the modern man"
//           />
//           <CategoryCard
//             title="Women's Collection"
//             image={categoryImages.womens}
//             link="/women"
//             description="Elegant fashion for every occasion"
//           />
//           <CategoryCard
//             title="Kids Collection"
//             image={categoryImages.kids}
//             link="/kids"
//             description="Playful and comfortable styles"
//           />
//         </div>

//         {/* Second Row */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <CategoryCard
//             title="Ethnic Wear"
//             image={categoryImages.ethnic}
//             link="/collections"
//             description="Traditional elegance meets modern design"
//           />
//           <CategoryCard
//             title="Accessories"
//             image={categoryImages.accessories}
//             link="/collections"
//             description="Complete your look with premium accessories"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ShopByCategory;





// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// interface CategoryCardProps {
//   title: string;
//   image: string;
//   link: string;
//   description: string;
// }

// const CategoryCard = ({ title, image, link, description }: CategoryCardProps) => (
//   <motion.div
//     whileHover={{ scale: 1.03 }}
//     whileTap={{ scale: 0.98 }}
//     className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer h-[380px]"
//   >
//     <img
//       src={image}
//       alt={title}
//       className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
//     />
//     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
//     <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
//       <h3 className="text-2xl font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
//         {title}
//       </h3>
//       <p className="text-sm text-gray-200 mb-3">{description}</p>
//       <Link
//         to={link}
//         className="inline-block px-4 py-2 bg-white text-black rounded-full text-sm font-semibold shadow-md hover:bg-yellow-300 transition-all duration-300"
//       >
//         Explore Now
//       </Link>
//     </div>
//   </motion.div>
// );

// // Import all images
// import mensCollection from "../../assets/Men/Suits19.jpeg";
// import womensCollection from "../../assets/Women/lehanga12.jpeg";
// import kidsCollection from "../../assets/Kids/girljeans2.jpeg";
// import ethnicWear from "../../assets/Women/kurthiset5.jpeg";
// import accessories from "../../assets/accessories.jpg";

// // Create an images object for easier management
// const categoryImages = {
//   mens: mensCollection,
//   womens: womensCollection,
//   kids: kidsCollection,
//   ethnic: ethnicWear,
//   accessories: accessories,
// };

// const ShopByCategory = () => {
//   return (
//     <section className="container mx-auto px-4 py-24">
//       {/* Heading */}
//       <div className="text-center mb-16">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4"
//         >
//           Shop by Category
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-gray-600 max-w-2xl mx-auto text-lg"
//         >
//           Curated collections for every member of your family
//         </motion.p>

//         <div className="mt-4 w-24 h-1 bg-yellow-400 mx-auto rounded-full" />
//       </div>

//       {/* Category Grid */}
//       <div className="space-y-10">
//         {/* First Row */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <CategoryCard
//             title="Men's Collection"
//             image={categoryImages.mens}
//             link="/men"
//             description="Sophisticated styles for the modern man"
//           />
//           <CategoryCard
//             title="Women's Collection"
//             image={categoryImages.womens}
//             link="/women"
//             description="Elegant fashion for every occasion"
//           />
//           <CategoryCard
//             title="Kids Collection"
//             image={categoryImages.kids}
//             link="/kids"
//             description="Playful and comfortable styles"
//           />
//         </div>

//         {/* Second Row */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <CategoryCard
//             title="Ethnic Wear"
//             image={categoryImages.ethnic}
//             link="/collections"
//             description="Traditional elegance meets modern design"
//           />
//           <CategoryCard
//             title="Accessories"
//             image={categoryImages.accessories}
//             link="/collections"
//             description="Complete your look with premium accessories"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ShopByCategory;






import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  description: string;
}

const CategoryCard = ({ title, image, link, description }: CategoryCardProps) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer h-[380px]"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
      <h3 className="text-2xl font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-200 mb-3">{description}</p>
      <Link
        to={link}
        className="inline-block px-4 py-2 bg-white text-black rounded-full text-sm font-semibold shadow-md hover:bg-yellow-300 transition-all duration-300"
      >
        Explore Now
      </Link>
    </div>
  </motion.div>
);

// Import all images
import mensCollection from "../../assets/Men/Suits19.jpeg";
import womensCollection from "../../assets/Women/lehanga12.jpeg";
import kidsCollection from "../../assets/Kids/girljeans2.jpeg";
import ethnicWear from "../../assets/Women/kurthiset5.jpeg";
import accessories from "../../assets/Men/accessories9.jpeg";

// Create an images object for easier management
const categoryImages = {
  mens: mensCollection,
  womens: womensCollection,
  kids: kidsCollection,
  ethnic: ethnicWear,
  accessories: accessories,
};

const ShopByCategory = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl font-bold text-pink-600 mb-4"
        >
          Shop by Category
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto text-lg"
        >
          Curated collections for every member of your family
        </motion.p>

        <div className="mt-4 w-24 h-1 bg-pink-500 mx-auto rounded-full" />
      </div>

      {/* Category Grid */}
      <div className="space-y-10">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard
            title="Men's Collection"
            image={categoryImages.mens}
            link="/men"
            description="Sophisticated styles for the modern man"
          />
          <CategoryCard
            title="Women's Collection"
            image={categoryImages.womens}
            link="/women"
            description="Elegant fashion for every occasion"
          />
          <CategoryCard
            title="Kids Collection"
            image={categoryImages.kids}
            link="/kids"
            description="Playful and comfortable styles"
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CategoryCard
            title="Ethnic Wear"
            image={categoryImages.ethnic}
            link="/collections"
            description="Traditional elegance meets modern design"
          />
          <CategoryCard
            title="Accessories"
            image={categoryImages.accessories}
            link="/collections"
            description="Complete your look with premium accessories"
          />
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;