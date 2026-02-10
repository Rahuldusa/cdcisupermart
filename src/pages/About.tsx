// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Heart, Users, Leaf, Award } from "lucide-react";
// import heroImage from "@/assets/hero-main.jpg";

// const About = () => {
//   const values = [
//     {
//       icon: Heart,
//       title: "Family First",
//       description: "We believe in creating fashion that brings families together and celebrates every moment."
//     },
//     {
//       icon: Users,
//       title: "Inclusive Style",
//       description: "Fashion for everyone, regardless of age, size, or style preference."
//     },
//     {
//       icon: Leaf,
//       title: "Sustainability",
//       description: "Committed to ethical practices and sustainable fashion choices."
//     },
//     {
//       icon: Award,
//       title: "Premium Quality",
//       description: "Only the finest materials and craftsmanship make it to our collection."
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       {/* Hero */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
//         <img
//           src={heroImage}
//           alt="About Us"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
//             Our Story
//           </h1>
//           <p className="text-lg md:text-xl opacity-90">
//             Bringing premium fashion to families since 2010
//           </p>
//         </div>
//       </section>

//       {/* Mission */}
//       <section className="container mx-auto px-4 py-20">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
//             Our Mission
//           </h2>
//           <p className="text-lg text-muted-foreground leading-relaxed mb-8">
//             At Fashion Familia, we're more than just a clothing store – we're a destination where style meets family values. 
//             Founded with the vision of making premium fashion accessible to every family member, we curate collections that 
//             blend contemporary trends with timeless elegance.
//           </p>
//           <p className="text-lg text-muted-foreground leading-relaxed">
//             From sophisticated menswear and elegant women's fashion to adorable kids' clothing and traditional ethnic wear, 
//             we believe that great style should never be compromised. Every piece in our collection is carefully selected to 
//             ensure quality, comfort, and style that lasts.
//           </p>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="bg-muted py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-center">
//             Our Values
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <div key={index} className="text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
//                   <value.icon className="h-8 w-8 text-accent" />
//                 </div>
//                 <h3 className="font-semibold text-xl mb-3">{value.title}</h3>
//                 <p className="text-muted-foreground">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Journey */}
//       <section className="container mx-auto px-4 py-20">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-center">
//             Our Journey
//           </h2>

//           <div className="space-y-12">
//             <div className="flex gap-6">
//               <div className="flex-shrink-0">
//                 <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
//                   <span className="font-serif text-xl font-semibold text-accent">2010</span>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">The Beginning</h3>
//                 <p className="text-muted-foreground">
//                   Started with a small store and a big dream – to bring quality fashion to families.
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-6">
//               <div className="flex-shrink-0">
//                 <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
//                   <span className="font-serif text-xl font-semibold text-accent">2015</span>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">Expansion</h3>
//                 <p className="text-muted-foreground">
//                   Opened multiple locations and expanded our collections to include ethnic and traditional wear.
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-6">
//               <div className="flex-shrink-0">
//                 <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
//                   <span className="font-serif text-xl font-semibold text-accent">2020</span>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
//                 <p className="text-muted-foreground">
//                   Launched our online presence to serve families across the nation.
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-6">
//               <div className="flex-shrink-0">
//                 <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
//                   <span className="font-serif text-xl font-semibold text-accent">Today</span>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">Growing Together</h3>
//                 <p className="text-muted-foreground">
//                   Serving thousands of families with premium fashion and expanding our sustainable practices.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default About;








import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Users, Leaf, Award } from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";
import AboutHeroSection from "@/components/AboutCompo/AboutHeroSection";
import MissionVisionSection from "@/components/AboutCompo/MissionVisionSection";
import ValuesSection from "@/components/AboutCompo/ValuesSection";
import OurJourneySection from "@/components/AboutCompo/OurJourneySection";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Family First",
      description: "We believe in creating fashion that brings families together and celebrates every moment."
    },
    {
      icon: Users,
      title: "Inclusive Style",
      description: "Fashion for everyone, regardless of age, size, or style preference."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to ethical practices and sustainable fashion choices."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest materials and craftsmanship make it to our collection."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      < AboutHeroSection />

      <MissionVisionSection />

      <ValuesSection />

      <OurJourneySection />

      <Footer />
    </div>
  );
};

export default About;
