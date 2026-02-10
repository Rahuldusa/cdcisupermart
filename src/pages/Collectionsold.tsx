// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import CategoryCard from "@/components/CategoryCard";
// import { Tag, Sparkles } from "lucide-react";
// import ethnicCollection from "@/assets/ethnic-collection.jpg";
// import accessories from "@/assets/accessories.jpg";
// import menHero from "@/assets/men-hero.jpg";
// import womenHero from "@/assets/women-hero.jpg";

// const Collections = () => {
//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       {/* Hero */}
//       <section className="relative py-32 overflow-hidden mt-20 bg-gradient-to-br from-accent/20 to-background">
//         <div className="container mx-auto px-4 text-center">
//           <Sparkles className="h-12 w-12 text-accent mx-auto mb-6" />
//           <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
//             Special Collections
//           </h1>
//           <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
//             Exclusive offers and curated collections designed to elevate your family's style
//           </p>
//         </div>
//       </section>

//       {/* Seasonal Offers */}
//       <section className="container mx-auto px-4 py-20">
//         <div className="flex items-center justify-center mb-12">
//           <Tag className="h-6 w-6 text-accent mr-2" />
//           <h2 className="font-serif text-3xl md:text-4xl font-semibold">
//             Seasonal Highlights
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//           <CategoryCard
//             title="Summer Collection"
//             image={womenHero}
//             link="/collections"
//             description="Light, breezy styles for the sunny season"
//           />
//           <CategoryCard
//             title="Festive Specials"
//             image={ethnicCollection}
//             link="/collections"
//             description="Traditional elegance for celebrations"
//           />
//         </div>
//       </section>

//       {/* Featured Collections */}
//       <section className="bg-muted py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-center">
//             Curated for You
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <CategoryCard
//               title="Premium Ethnic"
//               image={ethnicCollection}
//               link="/collections"
//               description="Handpicked traditional wear"
//             />
//             <CategoryCard
//               title="Luxury Accessories"
//               image={accessories}
//               link="/collections"
//               description="Complete your look in style"
//             />
//             <CategoryCard
//               title="Smart Casuals"
//               image={menHero}
//               link="/collections"
//               description="Versatile everyday fashion"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Limited Time Offers */}
//       <section className="container mx-auto px-4 py-20">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
//             Limited Time Offers
//           </h2>
//           <p className="text-lg text-muted-foreground mb-12">
//             Don't miss out on our exclusive deals and combo offers
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="p-8 border border-border rounded-lg hover-lift">
//               <h3 className="font-serif text-2xl font-semibold mb-3">Family Combo</h3>
//               <p className="text-muted-foreground mb-4">
//                 Get matching outfits for the entire family at special prices
//               </p>
//               <span className="text-accent font-semibold text-lg">Up to 30% Off</span>
//             </div>

//             <div className="p-8 border border-border rounded-lg hover-lift">
//               <h3 className="font-serif text-2xl font-semibold mb-3">Ethnic Festival Pack</h3>
//               <p className="text-muted-foreground mb-4">
//                 Complete ethnic wear collection with accessories included
//               </p>
//               <span className="text-accent font-semibold text-lg">Special Bundle Price</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Collections;






import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import { Tag, Sparkles } from "lucide-react";
import ethnicCollection from "@/assets/Women/Bridallehenga6.jpeg";
import accessories from "@/assets/Men/accessories16.jpeg";
import menHero from "@/assets/Men/coatpant1.jpeg";
import womenHero from "@/assets/Women/newSalwarsuit12.jpeg";
import SpecialCollectionsSection from "@/components/CollectionsCompo/SpecialCollectionsSection";

const Collections = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <SpecialCollectionsSection />


      <section className="container mx-auto px-4 py-16">
  <div className="flex items-center justify-center mb-10">
    <Tag className="h-5 w-5 text-accent mr-2" />
    <h2 className="font-serif text-2xl md:text-3xl font-semibold">
      Seasonal Highlights
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
    <CategoryCard
      title="Summer Collection"
      image={womenHero}
      link="/collections"
      description="Light, breezy styles for the sunny season"
    />
    <CategoryCard
      title="Festive Specials"
      image={ethnicCollection}
      link="/collections"
      description="Traditional elegance for celebrations"
    />
  </div>
    </section>


      {/* Featured Collections */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-center">
            Curated for You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryCard
              title="Premium Ethnic"
              image={ethnicCollection}
              link="/collections"
              description="Handpicked traditional wear"
            />
            <CategoryCard
              title="Luxury Accessories"
              image={accessories}
              link="/collections"
              description="Complete your look in style"
            />
            <CategoryCard
              title="Smart Casuals"
              image={menHero}
              link="/collections"
              description="Versatile everyday fashion"
            />
          </div>
        </div>
      </section>

      {/* Limited Time Offers */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Limited Time Offers
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Don't miss out on our exclusive deals and combo offers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-border rounded-lg hover-lift">
              <h3 className="font-serif text-2xl font-semibold mb-3">Showroom 7th Anniversary Celebration</h3>
              <p className="text-muted-foreground mb-4">
                Get matching outfits for the entire family at special prices
              </p>
              <span className="text-accent font-semibold text-lg">Discount Up To 10% to 50%</span>
            </div>

            <div className="p-8 border border-border rounded-lg hover-lift">
              <h3 className="font-serif text-2xl font-semibold mb-3">Sales Start From 20 Dec to 05 Jan 2026</h3>
              <p className="text-muted-foreground mb-4">
                Complete ethnic wear collection with accessories included
              </p>
              <span className="text-accent font-semibold text-lg">Buy 1 Get 1 Free</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collections;

