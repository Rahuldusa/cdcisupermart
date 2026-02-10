// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ProductCard from "@/components/ProductCard";
// import womenHero from "@/assets/women-hero.jpg";

// const Women = () => {
//   const categories = [
//     { name: "Dresses", count: 32 },
//     { name: "Ethnic Wear", count: 28 },
//     { name: "Western", count: 42 },
//     { name: "Accessories", count: 56 },
//   ];

//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       {/* Hero */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
//         <img
//           src={womenHero}
//           alt="Women's Collection"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
//             Women's Collection
//           </h1>
//           <p className="text-lg md:text-xl opacity-90">
//             Elegant fashion that celebrates your unique style
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
//         <h2 className="font-serif text-3xl font-semibold mb-8">New Arrivals</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//           {[...Array(8)].map((_, i) => (
//             <ProductCard
//               key={i}
//               image={womenHero}
//               title="Elegant Summer Dress"
//               category="Dresses"
//             />
//           ))}
//         </div>

//         <h2 className="font-serif text-3xl font-semibold mb-8">Ethnic Collection</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//           {[...Array(8)].map((_, i) => (
//             <ProductCard
//               key={i}
//               image={womenHero}
//               title="Traditional Saree"
//               category="Ethnic"
//             />
//           ))}
//         </div>

//         <h2 className="font-serif text-3xl font-semibold mb-8">Western Wear</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {[...Array(4)].map((_, i) => (
//             <ProductCard
//               key={i}
//               image={womenHero}
//               title="Contemporary Top"
//               category="Western"
//             />
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Women;







import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import womenHero from "@/assets/women-hero.jpg";
import WomenHeroSection from "@/components/WomensCompo/WomenHeroSection";
// import WomenCollection from "@/components/WomensCompo/WomenCollection";
import SuperFamilyMartPage from "@/components/WomensCompo/SuperFamilyMartPage";
import WomenCollection from "@/components/WomensCompo/DynamicWoman";


const Women = () => {
  

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* <WomenHeroSection /> */}

      <SuperFamilyMartPage />

        <WomenCollection />

      <Footer />
    </div>
  );
};

export default Women;
