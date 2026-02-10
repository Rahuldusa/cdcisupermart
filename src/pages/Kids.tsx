// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ProductCard from "@/components/ProductCard";
// import kidsHero from "@/assets/kids-hero.jpg";

// const Kids = () => {
//   const categories = [
//     { name: "Boys", count: 24 },
//     { name: "Girls", count: 28 },
//     { name: "Infants", count: 16 },
//     { name: "Accessories", count: 32 },
//   ];

//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       {/* Hero */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
//         <img
//           src={kidsHero}
//           alt="Kids Collection"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
//             Kids Collection
//           </h1>
//           <p className="text-lg md:text-xl opacity-90">
//             Playful, comfortable, and stylish fashion for little ones
//           </p>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="container mx-auto px-4 py-12">
//         <div className="flex flex-wrap gap-4 justify-center mb-12">
//           {categories.map((cat) => (
//             <button
//               key={cat.name}
//               className="px-6 py-3 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
//             >
//               {cat.name} <span className="text-muted-foreground">({cat.count})</span>
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* Products */}
//       <section className="container mx-auto px-4 pb-20">
//         <h2 className="font-serif text-3xl font-semibold mb-8">Boys Fashion</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//           {[...Array(8)].map((_, i) => (
//             <ProductCard
//               key={i}
//               image={kidsHero}
//               title="Boys Casual Set"
//               category="Boys"
//             />
//           ))}
//         </div>

//         <h2 className="font-serif text-3xl font-semibold mb-8">Girls Fashion</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//           {[...Array(8)].map((_, i) => (
//             <ProductCard
//               key={i}
//               image={kidsHero}
//               title="Girls Party Dress"
//               category="Girls"
//             />
//           ))}
//         </div>

//         <h2 className="font-serif text-3xl font-semibold mb-8">Infant Wear</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {[...Array(4)].map((_, i) => (
//             <ProductCard
//               key={i}
//               image={kidsHero}
//               title="Baby Comfort Set"
//               category="Infants"
//             />
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Kids;






import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import kidsHero from "@/assets/kids-hero.jpg";
import KidsHeroSection from "@/components/KidsCompo/KidsHeroSection";
import Product from "@/components/KidsCompo/ProductCollection";
// import ProductCollection from "@/components/KidsCompo/ProductCollection";
import ProductCollection from "@/components/KidsCompo/DynamicKids";

const Kids = () => {
  

  return (
    <div className="min-h-screen">
      <Navbar />

      < KidsHeroSection />

      <ProductCollection />

    
      <Footer />
    </div>
  );
};

export default Kids;




