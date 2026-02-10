// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ProductCard from "@/components/ProductCard";
// import menHero from "@/assets/men-hero.jpg";

// const Men = () => {
//   const categories = [
//     { name: "Formal Wear", count: 24 },
//     { name: "Casual Wear", count: 36 },
//     { name: "Traditional", count: 18 },
//     { name: "Accessories", count: 42 },
//   ];

//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       {/* Hero */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
//         <img
//           src={menHero}
//           alt="Men's Collection"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
//             Men's Collection
//           </h1>
//           <p className="text-lg md:text-xl opacity-90">
//             Sophisticated styles crafted for the modern gentleman
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
//         <h2 className="font-serif text-3xl font-semibold mb-8">Formal Wear</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//           {[...Array(8)].map((_, i) => (
//             <ProductCard
//               key={i}
//               image={menHero}
//               title="Premium Tailored Suit"
//               category="Formal"
//             />
//           ))}
//         </div>

//         <h2 className="font-serif text-3xl font-semibold mb-8">Casual Collection</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//           {[...Array(8)].map((_, i) => (
//             <ProductCard
//               key={i}
//               image={menHero}
//               title="Casual Cotton Shirt"
//               category="Casual"
//             />
//           ))}
//         </div>

//         <h2 className="font-serif text-3xl font-semibold mb-8">Traditional Wear</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {[...Array(4)].map((_, i) => (
//             <ProductCard
//               key={i}
//               image={menHero}
//               title="Ethnic Kurta Set"
//               category="Traditional"
//             />
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Men;







// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ProductCard from "@/components/ProductCard";
// import menHero from "@/assets/men-hero.jpg";
// import MenHeroSection from "@/components/MensCompo/MenHeroSection";
// import MensFashionPage from "@/components/MensCompo/MensFashionPage";
// // import MensCollection from "@/components/MensCompo/MensCollection";
// import MensCollection from "@/components/MensCompo/DynamicMens";

// const Men = () => {
//   const categories = [
//     { name: "Formal Wear", count: 24 },
//     { name: "Casual Wear", count: 36 },
//     { name: "Traditional", count: 18 },
//     { name: "Accessories", count: 42 },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       <Navbar />

//       {/* Hero */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
//         <img
//           src={menHero}
//           alt="Men's Collection"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
//             Men's Collection
//           </h1>
//           <p className="text-lg md:text-xl opacity-90">
//             Sophisticated styles crafted for the modern gentleman
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
//         <h2 className="font-serif text-3xl font-semibold mb-8">Formal Wear</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//           {[...Array(8)].map((_, i) => (
//             <ProductCard
//               key={i}
//               image={menHero}
//               title="Premium Tailored Suit"
//               category="Formal"
//             />
//           ))}
//         </div>

//         <h2 className="font-serif text-3xl font-semibold mb-8">Casual Collection</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//           {[...Array(8)].map((_, i) => (
//             <ProductCard
//               key={i}
//               image={menHero}
//               title="Casual Cotton Shirt"
//               category="Casual"
//             />
//           ))}
//         </div>

//         <h2 className="font-serif text-3xl font-semibold mb-8">Traditional Wear</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {[...Array(4)].map((_, i) => (
//             <ProductCard
//               key={i}
//               image={menHero}
//               title="Ethnic Kurta Set"
//               category="Traditional"
//             />
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Men;




import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import menHero from "@/assets/men-hero.jpg";
import MenHeroSection from "@/components/MensCompo/MenHeroSection";
import MensFashionPage from "@/components/MensCompo/MensFashionPage";
// import MensCollection from "@/components/MensCompo/MensCollection";
import MensCollection from "@/components/MensCompo/DynamicMens";

const Men = () => {
  

  return (
    <div className="min-h-screen">
      <Navbar />

      <MenHeroSection />

      {/* <MensFashionPage /> */}

      <MensCollection />

  
      <Footer />
    </div>
  );
};

export default Men;

