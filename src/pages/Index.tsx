// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import CategoryCard from "@/components/CategoryCard";
// import ProductCard from "@/components/ProductCard";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Star } from "lucide-react";
// import heroImage from "@/assets/hero-main.jpg";
// import menHero from "@/assets/men-hero.jpg";
// import womenHero from "@/assets/women-hero.jpg";
// import kidsHero from "@/assets/kids-hero.jpg";
// import ethnicCollection from "@/assets/ethnic-collection.jpg";
// import accessories from "@/assets/accessories.jpg";

// const Index = () => {
//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
//         <img
//           src={heroImage}
//           alt="Fashion Hero"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
//         <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
//           <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">
//             Fashion for the Entire Family
//           </h1>
//           <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
//             Discover premium collections that blend style, elegance, and comfort for men, women, and kids
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               size="lg"
//               className="bg-accent hover:bg-accent/90 text-primary font-semibold"
//             >
//               Explore Collections
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
//             >
//               Visit Store
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Category Highlights */}
//       <section className="container mx-auto px-4 py-20">
//         <div className="text-center mb-12 animate-slide-up">
//           <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
//             Shop by Category
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Curated collections for every member of your family
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//           <CategoryCard
//             title="Men's Collection"
//             image={menHero}
//             link="/men"
//             description="Sophisticated styles for the modern man"
//           />
//           <CategoryCard
//             title="Women's Collection"
//             image={womenHero}
//             link="/women"
//             description="Elegant fashion for every occasion"
//           />
//           <CategoryCard
//             title="Kids Collection"
//             image={kidsHero}
//             link="/kids"
//             description="Playful and comfortable styles"
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <CategoryCard
//             title="Ethnic Wear"
//             image={ethnicCollection}
//             link="/collections"
//             description="Traditional elegance meets modern design"
//           />
//           <CategoryCard
//             title="Accessories"
//             image={accessories}
//             link="/collections"
//             description="Complete your look with premium accessories"
//           />
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="bg-muted py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
//               Featured This Season
//             </h2>
//             <p className="text-muted-foreground">
//               Handpicked styles that define the season
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             <ProductCard
//               image={menHero}
//               title="Classic Tailored Suit"
//               category="Men's Formal"
//             />
//             <ProductCard
//               image={womenHero}
//               title="Elegant Summer Dress"
//               category="Women's Casual"
//             />
//             <ProductCard
//               image={kidsHero}
//               title="Kids Casual Set"
//               category="Kids Fashion"
//             />
//             <ProductCard
//               image={ethnicCollection}
//               title="Traditional Kurta Set"
//               category="Ethnic Wear"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Brand Promise */}
//       <section className="container mx-auto px-4 py-20">
//         <div className="max-w-4xl mx-auto text-center">
//           <Star className="h-12 w-12 text-accent mx-auto mb-6" />
//           <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
//             Our Promise
//           </h2>
//           <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
//             At Fashion Familia, we believe fashion is for everyone. We curate premium collections
//             that bring style, comfort, and confidence to every member of your family. From timeless
//             classics to contemporary trends, we're your one-stop destination for all things fashion.
//           </p>
//           <Button size="lg" variant="outline">
//             Learn More About Us
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative py-32 overflow-hidden">
//         <img
//           src={heroImage}
//           alt="Visit Store"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/60" />
//         <div className="relative z-10 container mx-auto px-4 text-center text-white">
//           <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
//             Visit Our Store
//           </h2>
//           <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
//             Experience our collections in person. Our fashion experts are ready to help you find
//             the perfect style for your entire family.
//           </p>
//           <Button
//             size="lg"
//             className="bg-accent hover:bg-accent/90 text-primary font-semibold"
//           >
//             Find Store Location
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Index;









import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";
import menHero from "@/assets/men-hero.jpg";
import womenHero from "@/assets/women-hero.jpg";
import kidsHero from "@/assets/kids-hero.jpg";
import ethnicCollection from "@/assets/ethnic-collection.jpg";
import accessories from "@/assets/accessories.jpg";
import HeroCarousel from "@/components/IndexCompo/HeroCarousel";
import ShopByCategory from "@/components/IndexCompo/ShopByCategory";
import SuperFamilyMartPage from "@/components/WomensCompo/SuperFamilyMartPage";
import FeaturedSection from "@/components/IndexCompo/FeaturedSection";
import OurPromiseSection from "@/components/IndexCompo/OurPromiseSection";
import VerticalVideosPage from "@/components/IndexCompo/Video";
import HorizontalVideosPage from "@/components/IndexCompo/Video";
import OffersHero from "@/components/OffersCompo/OffersHero";
import OffersPopup from "@/components/IndexCompo/OffersPopup";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* <HeroCarousel /> */}

      <HorizontalVideosPage />

      <OffersPopup />

      < ShopByCategory />

      <OffersHero />

      <FeaturedSection />

      <OurPromiseSection />

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <img
          src={heroImage}
          alt="Visit Store"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
            Visit Our Store
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Experience our collections in person. Our fashion experts are ready to help you find
            the perfect style for your entire family.
          </p>
          <Button
  size="lg"
  className="bg-accent hover:bg-accent/90 text-primary font-semibold"
  onClick={() => window.open("https://www.google.com/maps?ll=25.553318,81.544762&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=8180577435096872717", "_blank")}
>
  Find Store Location
  <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
