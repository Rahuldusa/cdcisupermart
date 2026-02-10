// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, ShoppingBag } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Men", path: "/men" },
//     { name: "Women", path: "/women" },
//     { name: "Kids", path: "/kids" },
//     { name: "Collections", path: "/collections" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <ShoppingBag className="h-6 w-6 text-accent" />
//             <span className="font-serif text-2xl font-semibold tracking-tight">
//               Fashion Familia
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`text-sm font-medium transition-colors hover:text-accent relative ${
//                   isActive(link.path) ? "text-accent" : "text-foreground"
//                 }`}
//               >
//                 {link.name}
//                 {isActive(link.path) && (
//                   <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                 )}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden py-4 border-t border-border">
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   onClick={() => setIsOpen(false)}
//                   className={`text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                     isActive(link.path) ? "text-accent bg-muted rounded" : "text-foreground"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers 
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "About", path: "/about", icon: Info },
//     { name: "Contact", path: "/contact", icon: Phone },
//   ];

//   const collectionItems = [
//     "ADDITIONAL ITEM",
//     "BLANKETS",
//     "BEDSHEETS",
//     "CUSHIONS SOFA COVER",
//     "PILLOW",
//     "DOORMAT",
//     "TOWEL",
//     "PARDA",
//     "CURTAINS"
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <ShoppingBag className="h-6 w-6 text-accent" />
//             <span className="font-serif text-2xl font-semibold tracking-tight">
//               Fashion Familia
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => {
//               const IconComponent = link.icon;
//               return (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                     isActive(link.path) ? "text-accent" : "text-foreground"
//                   }`}
//                 >
//                   <IconComponent className="h-4 w-4" />
//                   <span>{link.name}</span>
//                   {isActive(link.path) && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                   )}
//                 </Link>
//               );
//             })}
            
//             {/* Collections Dropdown */}
//             <div 
//               className="relative"
//               onMouseEnter={() => setIsCollectionsOpen(true)}
//               onMouseLeave={() => setIsCollectionsOpen(false)}
//             >
//               <button
//                 className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                   location.pathname === "/collections" ? "text-accent" : "text-foreground"
//                 }`}
//               >
//                 <Layers className="h-4 w-4" />
//                 <span>Collections</span>
//                 <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                 {location.pathname === "/collections" && (
//                   <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                 )}
//               </button>
              
//               {/* Dropdown Menu */}
//               {isCollectionsOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
//                   {collectionItems.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                       className="flex items-center space-x-3 px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-muted transition-colors"
//                       onClick={() => setIsCollectionsOpen(false)}
//                     >
//                       <Layers className="h-4 w-4" />
//                       <span>{item}</span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden py-4 border-t border-border">
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                       isActive(link.path) ? "text-accent bg-muted rounded" : "text-foreground"
//                     }`}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               {/* Mobile Collections Dropdown */}
//               <div className="px-2">
//                 <button
//                   onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                   className="flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-accent py-2"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Layers className="h-4 w-4" />
//                     <span>Collections</span>
//                   </div>
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                 </button>
                
//                 {/* Mobile Dropdown Items */}
//                 {isCollectionsOpen && (
//                   <div className="ml-8 mt-2 space-y-2 border-l border-border pl-4">
//                     {collectionItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         onClick={() => {
//                           setIsOpen(false);
//                           setIsCollectionsOpen(false);
//                         }}
//                         className="flex items-center space-x-3 text-sm text-foreground hover:text-accent py-1 transition-colors"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span>{item}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers 
// } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "About", path: "/about", icon: Info },
//   ];

//   const collectionItems = [
//     "ADDITIONAL ITEM",
//     "BLANKETS",
//     "BEDSHEETS",
//     "CUSHIONS SOFA COVER",
//     "PILLOW",
//     "DOORMAT",
//     "TOWEL",
//     "PARDA",
//     "CURTAINS"
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <ShoppingBag className="h-6 w-6 text-accent" />
//             <span className="font-serif text-2xl font-semibold tracking-tight">
//              Super Family Mart
//             </span>
//           </Link>

//           {/* Desktop Navigation - Moved to left side */}
//           <div className="hidden md:flex items-center space-x-8 ml-8">
//             {navLinks.map((link) => {
//               const IconComponent = link.icon;
//               return (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                     isActive(link.path) ? "text-accent" : "text-foreground"
//                   }`}
//                 >
//                   <IconComponent className="h-4 w-4" />
//                   <span>{link.name}</span>
//                   {isActive(link.path) && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                   )}
//                 </Link>
//               );
//             })}
            
//             {/* Collections Dropdown */}
//             <div 
//               className="relative"
//               onMouseEnter={() => setIsCollectionsOpen(true)}
//               onMouseLeave={() => setIsCollectionsOpen(false)}
//             >
//               <button
//                 className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                   location.pathname === "/collections" ? "text-accent" : "text-foreground"
//                 }`}
//               >
//                 <Layers className="h-4 w-4" />
//                 <span>Collections</span>
//                 <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                 {location.pathname === "/collections" && (
//                   <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                 )}
//               </button>
              
//               {/* Dropdown Menu */}
//               {isCollectionsOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
//                   {collectionItems.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                       className="flex items-center space-x-3 px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-muted transition-colors"
//                       onClick={() => setIsCollectionsOpen(false)}
//                     >
//                       <Layers className="h-4 w-4" />
//                       <span>{item}</span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Contact Link - Separate on the right */}
//             <Link
//               to="/contact"
//               className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                 isActive("/contact") ? "text-accent" : "text-foreground"
//               }`}
//             >
//               <Phone className="h-4 w-4" />
//               <span>Contact</span>
//               {isActive("/contact") && (
//                 <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//               )}
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden py-4 border-t border-border">
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                       isActive(link.path) ? "text-accent bg-muted rounded" : "text-foreground"
//                     }`}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               {/* Mobile Collections Dropdown */}
//               <div className="px-2">
//                 <button
//                   onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                   className="flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-accent py-2"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Layers className="h-4 w-4" />
//                     <span>Collections</span>
//                   </div>
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                 </button>
                
//                 {/* Mobile Dropdown Items */}
//                 {isCollectionsOpen && (
//                   <div className="ml-8 mt-2 space-y-2 border-l border-border pl-4">
//                     {collectionItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         onClick={() => {
//                           setIsOpen(false);
//                           setIsCollectionsOpen(false);
//                         }}
//                         className="flex items-center space-x-3 text-sm text-foreground hover:text-accent py-1 transition-colors"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span>{item}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Contact Link */}
//               <Link
//                 to="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                   isActive("/contact") ? "text-accent bg-muted rounded" : "text-foreground"
//                 }`}
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers 
// } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "About", path: "/about", icon: Info },
//   ];

//   const collectionItems = [
//     "ADDITIONAL ITEM",
//     "BLANKETS",
//     "BEDSHEETS",
//     "CUSHIONS SOFA COVER",
//     "PILLOW",
//     "DOORMAT",
//     "TOWEL",
//     "PARDA",
//     "CURTAINS"
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   // Toggle collections dropdown
//   const toggleCollections = () => {
//     setIsCollectionsOpen(!isCollectionsOpen);
//   };

//   // Close collections dropdown when clicking outside (optional enhancement)
//   const closeCollections = () => {
//     setIsCollectionsOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <ShoppingBag className="h-6 w-6 text-accent" />
//             <span className="font-serif text-2xl font-semibold tracking-tight">
//              Super Family Mart
//             </span>
//           </Link>

//           {/* Desktop Navigation - Moved to left side */}
//           <div className="hidden md:flex items-center space-x-8 ml-8">
//             {navLinks.map((link) => {
//               const IconComponent = link.icon;
//               return (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                     isActive(link.path) ? "text-accent" : "text-foreground"
//                   }`}
//                   onClick={closeCollections}
//                 >
//                   <IconComponent className="h-4 w-4" />
//                   <span>{link.name}</span>
//                   {isActive(link.path) && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                   )}
//                 </Link>
//               );
//             })}
            
//             {/* Collections Dropdown */}
//             <div 
//               className="relative"
//               onMouseEnter={() => setIsCollectionsOpen(true)}
//               onMouseLeave={() => setIsCollectionsOpen(false)}
//             >
//               <button
//                 onClick={toggleCollections}
//                 className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                   location.pathname.startsWith("/collections") ? "text-accent" : "text-foreground"
//                 }`}
//               >
//                 <Layers className="h-4 w-4" />
//                 <span>Collections</span>
//                 <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                 {location.pathname.startsWith("/collections") && (
//                   <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                 )}
//               </button>
              
//               {/* Dropdown Menu */}
//               {isCollectionsOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
//                   {collectionItems.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                       className="flex items-center space-x-3 px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-muted transition-colors"
//                       onClick={() => {
//                         setIsCollectionsOpen(false);
//                         closeCollections();
//                       }}
//                     >
//                       <Layers className="h-4 w-4" />
//                       <span>{item}</span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Contact Link - Separate on the right */}
//             <Link
//               to="/contact"
//               className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                 isActive("/contact") ? "text-accent" : "text-foreground"
//               }`}
//               onClick={closeCollections}
//             >
//               <Phone className="h-4 w-4" />
//               <span>Contact</span>
//               {isActive("/contact") && (
//                 <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//               )}
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden py-4 border-t border-border">
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                       isActive(link.path) ? "text-accent bg-muted rounded" : "text-foreground"
//                     }`}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               {/* Mobile Collections Dropdown */}
//               <div className="px-2">
//                 <button
//                   onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                   className="flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-accent py-2"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Layers className="h-4 w-4" />
//                     <span>Collections</span>
//                   </div>
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                 </button>
                
//                 {/* Mobile Dropdown Items */}
//                 {isCollectionsOpen && (
//                   <div className="ml-8 mt-2 space-y-2 border-l border-border pl-4">
//                     {collectionItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         onClick={() => {
//                           setIsOpen(false);
//                           setIsCollectionsOpen(false);
//                         }}
//                         className="flex items-center space-x-3 text-sm text-foreground hover:text-accent py-1 transition-colors"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span>{item}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Contact Link */}
//               <Link
//                 to="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                   isActive("/contact") ? "text-accent bg-muted rounded" : "text-foreground"
//                 }`}
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers 
// } from "lucide-react";

// // Import your logo - adjust the path as needed
// import logo from "../assets/logo.png"; // or logo.svg, logo.webp, etc.

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "About", path: "/about", icon: Info },
//   ];

//   const collectionItems = [
//     "ADDITIONAL ITEM",
//     "BLANKETS",
//     "BEDSHEETS",
//     "CUSHIONS SOFA COVER",
//     "PILLOW",
//     "DOORMAT",
//     "TOWEL",
//     "PARDA",
//     "CURTAINS"
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   // Toggle collections dropdown
//   const toggleCollections = () => {
//     setIsCollectionsOpen(!isCollectionsOpen);
//   };

//   // Close collections dropdown when clicking outside (optional enhancement)
//   const closeCollections = () => {
//     setIsCollectionsOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             {/* Use your imported logo */}
//             <img 
//               src={logo} 
//               alt="Super Family Mart" 
//               className="h-8 w-8 object-contain" // Adjust size as needed
//             />
//             <span className="font-serif text-2xl font-semibold tracking-tight">
//               Super Family Mart
//             </span>
//           </Link>

//           {/* Desktop Navigation - Moved to left side */}
//           <div className="hidden md:flex items-center space-x-8 ml-8">
//             {navLinks.map((link) => {
//               const IconComponent = link.icon;
//               return (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                     isActive(link.path) ? "text-accent" : "text-foreground"
//                   }`}
//                   onClick={closeCollections}
//                 >
//                   <IconComponent className="h-4 w-4" />
//                   <span>{link.name}</span>
//                   {isActive(link.path) && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                   )}
//                 </Link>
//               );
//             })}
            
//             {/* Collections Dropdown */}
//             <div 
//               className="relative"
//               onMouseEnter={() => setIsCollectionsOpen(true)}
//               onMouseLeave={() => setIsCollectionsOpen(false)}
//             >
//               <button
//                 onClick={toggleCollections}
//                 className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                   location.pathname.startsWith("/collections") ? "text-accent" : "text-foreground"
//                 }`}
//               >
//                 <Layers className="h-4 w-4" />
//                 <span>Collections</span>
//                 <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                 {location.pathname.startsWith("/collections") && (
//                   <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                 )}
//               </button>
              
//               {/* Dropdown Menu */}
//               {isCollectionsOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
//                   {collectionItems.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                       className="flex items-center space-x-3 px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-muted transition-colors"
//                       onClick={() => {
//                         setIsCollectionsOpen(false);
//                         closeCollections();
//                       }}
//                     >
//                       <Layers className="h-4 w-4" />
//                       <span>{item}</span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Contact Link - Separate on the right */}
//             <Link
//               to="/contact"
//               className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                 isActive("/contact") ? "text-accent" : "text-foreground"
//               }`}
//               onClick={closeCollections}
//             >
//               <Phone className="h-4 w-4" />
//               <span>Contact</span>
//               {isActive("/contact") && (
//                 <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//               )}
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden py-4 border-t border-border">
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                       isActive(link.path) ? "text-accent bg-muted rounded" : "text-foreground"
//                     }`}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               {/* Mobile Collections Dropdown */}
//               <div className="px-2">
//                 <button
//                   onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                   className="flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-accent py-2"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Layers className="h-4 w-4" />
//                     <span>Collections</span>
//                   </div>
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                 </button>
                
//                 {/* Mobile Dropdown Items */}
//                 {isCollectionsOpen && (
//                   <div className="ml-8 mt-2 space-y-2 border-l border-border pl-4">
//                     {collectionItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         onClick={() => {
//                           setIsOpen(false);
//                           setIsCollectionsOpen(false);
//                         }}
//                         className="flex items-center space-x-3 text-sm text-foreground hover:text-accent py-1 transition-colors"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span>{item}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Contact Link */}
//               <Link
//                 to="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                   isActive("/contact") ? "text-accent bg-muted rounded" : "text-foreground"
//                 }`}
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers 
// } from "lucide-react";

// // Import your logo - adjust the path as needed
// import logo from "../assets/logo.png"; // or logo.svg, logo.webp, etc.

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "About", path: "/about", icon: Info },
//   ];

//   const collectionItems = [
//     "ADDITIONAL PRODUCT",
//     "BLANKETS",
//     "BEDSHEETS",
//     "CUSHIONS SOFA COVER",
//     "PILLOW",
//     "DOORMAT",
//     "TOWEL",
//     "PARDA",
//     "CURTAINS"
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   // Toggle collections dropdown
//   const toggleCollections = () => {
//     setIsCollectionsOpen(!isCollectionsOpen);
//   };

//   // Close collections dropdown
//   const closeCollections = () => {
//     setIsCollectionsOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <img 
//               src={logo} 
//               alt="Super Family Mart" 
//               className="h-8 w-8 object-contain"
//             />
//             <span className="font-serif text-2xl font-semibold tracking-tight">
//               Super Family Mart
//             </span>
//           </Link>

//           {/* Desktop Navigation - Moved to left side */}
//           <div className="hidden md:flex items-center space-x-8 ml-8">
//             {navLinks.map((link) => {
//               const IconComponent = link.icon;
//               return (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                     isActive(link.path) ? "text-accent" : "text-foreground"
//                   }`}
//                   onClick={closeCollections}
//                 >
//                   <IconComponent className="h-4 w-4" />
//                   <span>{link.name}</span>
//                   {isActive(link.path) && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                   )}
//                 </Link>
//               );
//             })}
            
//             {/* Collections Dropdown - Fixed hover area */}
//             <div 
//               className="relative"
//               onMouseEnter={() => setIsCollectionsOpen(true)}
//               onMouseLeave={() => setIsCollectionsOpen(false)}
//             >
//               <div className="relative">
//                 <button
//                   onClick={toggleCollections}
//                   className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative py-2 ${
//                     location.pathname.startsWith("/collections") ? "text-accent" : "text-foreground"
//                   }`}
//                 >
//                   <Layers className="h-4 w-4" />
//                   <span>Collections</span>
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                   {location.pathname.startsWith("/collections") && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                   )}
//                 </button>
//               </div>
              
//               {/* Dropdown Menu with improved positioning */}
//               {isCollectionsOpen && (
//                 <div className="absolute top-full left-0 mt-0 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
//                   {collectionItems.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                       className="flex items-center space-x-3 px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-muted transition-colors"
//                       onClick={() => {
//                         setIsCollectionsOpen(false);
//                         closeCollections();
//                       }}
//                     >
//                       <Layers className="h-4 w-4" />
//                       <span>{item}</span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Contact Link - Separate on the right */}
//             <Link
//               to="/contact"
//               className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                 isActive("/contact") ? "text-accent" : "text-foreground"
//               }`}
//               onClick={closeCollections}
//             >
//               <Phone className="h-4 w-4" />
//               <span>Contact</span>
//               {isActive("/contact") && (
//                 <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//               )}
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden py-4 border-t border-border">
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                       isActive(link.path) ? "text-accent bg-muted rounded" : "text-foreground"
//                     }`}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               {/* Mobile Collections Dropdown */}
//               <div className="px-2">
//                 <button
//                   onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                   className="flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-accent py-2"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Layers className="h-4 w-4" />
//                     <span>Collections</span>
//                   </div>
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                 </button>
                
//                 {/* Mobile Dropdown Items */}
//                 {isCollectionsOpen && (
//                   <div className="ml-8 mt-2 space-y-2 border-l border-border pl-4">
//                     {collectionItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         onClick={() => {
//                           setIsOpen(false);
//                           setIsCollectionsOpen(false);
//                         }}
//                         className="flex items-center space-x-3 text-sm text-foreground hover:text-accent py-1 transition-colors"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span>{item}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Contact Link */}
//               <Link
//                 to="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                   isActive("/contact") ? "text-accent bg-muted rounded" : "text-foreground"
//                 }`}
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers 
// } from "lucide-react";

// // Import your logo - adjust the path as needed
// import logo from "../assets/logo.png"; // or logo.svg, logo.webp, etc.

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "About", path: "/about", icon: Info },
//   ];

//   const collectionItems = [
//     "ADDITIONAL PRODUCT",
//     "BLANKETS",
//     "BEDSHEETS",
//     "CUSHIONS SOFA COVER",
//     "PILLOW",
//     "DOORMAT",
//     "TOWEL",
    
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   // Toggle collections dropdown
//   const toggleCollections = () => {
//     setIsCollectionsOpen(!isCollectionsOpen);
//   };

//   // Close collections dropdown
//   const closeCollections = () => {
//     setIsCollectionsOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <img 
//               src={logo} 
//               alt="Super Family Mart" 
//               className="h-8 w-8 object-contain"
//             />
//             <span className="font-serif text-2xl font-semibold tracking-tight">
//               Super Family Mart
//             </span>
//           </Link>

//           {/* Desktop Navigation - Moved to left side */}
//           <div className="hidden md:flex items-center space-x-8 ml-8">
//             {navLinks.map((link) => {
//               const IconComponent = link.icon;
//               return (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                     isActive(link.path) ? "text-accent" : "text-foreground"
//                   }`}
//                   onClick={closeCollections}
//                 >
//                   <IconComponent className="h-4 w-4" />
//                   <span>{link.name}</span>
//                   {isActive(link.path) && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                   )}
//                 </Link>
//               );
//             })}
            
//             {/* Collections Dropdown - Fixed hover area */}
//             <div 
//               className="relative"
//               onMouseEnter={() => setIsCollectionsOpen(true)}
//               onMouseLeave={() => setIsCollectionsOpen(false)}
//             >
//               <div className="relative">
//                 <button
//                   onClick={toggleCollections}
//                   className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative py-2 ${
//                     location.pathname.startsWith("/collections") ? "text-accent" : "text-foreground"
//                   }`}
//                 >
//                   <Layers className="h-4 w-4" />
//                   <span>Collections</span>
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                   {location.pathname.startsWith("/collections") && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                   )}
//                 </button>
//               </div>
              
//               {/* Dropdown Menu with improved positioning */}
//               {isCollectionsOpen && (
//                 <div className="absolute top-full left-0 mt-0 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
//                   {collectionItems.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                       className="flex items-center space-x-3 px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-muted transition-colors"
//                       onClick={() => {
//                         setIsCollectionsOpen(false);
//                         closeCollections();
//                       }}
//                     >
//                       <Layers className="h-4 w-4" />
//                       <span>{item}</span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Contact Link - Separate on the right */}
//             <Link
//               to="/contact"
//               className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                 isActive("/contact") ? "text-accent" : "text-foreground"
//               }`}
//               onClick={closeCollections}
//             >
//               <Phone className="h-4 w-4" />
//               <span>Contact</span>
//               {isActive("/contact") && (
//                 <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//               )}
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden py-4 border-t border-border">
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                       isActive(link.path) ? "text-accent bg-muted rounded" : "text-foreground"
//                     }`}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               {/* Mobile Collections Dropdown */}
//               <div className="px-2">
//                 <button
//                   onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                   className="flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-accent py-2"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Layers className="h-4 w-4" />
//                     <span>Collections</span>
//                   </div>
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                 </button>
                
//                 {/* Mobile Dropdown Items */}
//                 {isCollectionsOpen && (
//                   <div className="ml-8 mt-2 space-y-2 border-l border-border pl-4">
//                     {collectionItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         onClick={() => {
//                           setIsOpen(false);
//                           setIsCollectionsOpen(false);
//                         }}
//                         className="flex items-center space-x-3 text-sm text-foreground hover:text-accent py-1 transition-colors"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span>{item}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Contact Link */}
//               <Link
//                 to="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                   isActive("/contact") ? "text-accent bg-muted rounded" : "text-foreground"
//                 }`}
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers 
// } from "lucide-react";

// // Import your logo - adjust the path as needed
// import logo from "../assets/logo.png"; // or logo.svg, logo.webp, etc.

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "About", path: "/about", icon: Info },
//   ];

//   const collectionItems = [
//     "ADDITIONAL PRODUCT",
//     "BLANKETS",
//     "BEDSHEETS",
//     "CUSHIONS SOFA COVER",
//     "PILLOW",
//     "DOORMAT",
//     "TOWEL",
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   // Toggle collections dropdown
//   const toggleCollections = () => {
//     setIsCollectionsOpen(!isCollectionsOpen);
//   };

//   // Close collections dropdown
//   const closeCollections = () => {
//     setIsCollectionsOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo - Increased size */}
//           <Link to="/" className="flex items-center space-x-3">
//             <img 
//               src={logo} 
//               alt="Super Family Mart" 
//               className="h-12 w-12 object-contain" // Increased from h-8 w-8 to h-12 w-12
//             />
//             <span className="font-serif text-2xl font-semibold tracking-tight">
//               Super Family Mart
//             </span>
//           </Link>

//           {/* Desktop Navigation - Moved to left side */}
//           <div className="hidden md:flex items-center space-x-8 ml-8">
//             {navLinks.map((link) => {
//               const IconComponent = link.icon;
//               return (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                     isActive(link.path) ? "text-accent" : "text-foreground"
//                   }`}
//                   onClick={closeCollections}
//                 >
//                   <IconComponent className="h-4 w-4" />
//                   <span>{link.name}</span>
//                   {isActive(link.path) && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                   )}
//                 </Link>
//               );
//             })}
            
//             {/* Collections Dropdown - Fixed hover area */}
//             <div 
//               className="relative"
//               onMouseEnter={() => setIsCollectionsOpen(true)}
//               onMouseLeave={() => setIsCollectionsOpen(false)}
//             >
//               <div className="relative">
//                 <button
//                   onClick={toggleCollections}
//                   className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative py-2 ${
//                     location.pathname.startsWith("/collections") ? "text-accent" : "text-foreground"
//                   }`}
//                 >
//                   <Layers className="h-4 w-4" />
//                   <span>Collections</span>
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                   {location.pathname.startsWith("/collections") && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                   )}
//                 </button>
//               </div>
              
//               {/* Dropdown Menu with improved positioning */}
//               {isCollectionsOpen && (
//                 <div className="absolute top-full left-0 mt-0 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
//                   {collectionItems.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                       className="flex items-center space-x-3 px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-muted transition-colors"
//                       onClick={() => {
//                         setIsCollectionsOpen(false);
//                         closeCollections();
//                       }}
//                     >
//                       <Layers className="h-4 w-4" />
//                       <span>{item}</span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Contact Link - Separate on the right */}
//             <Link
//               to="/contact"
//               className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                 isActive("/contact") ? "text-accent" : "text-foreground"
//               }`}
//               onClick={closeCollections}
//             >
//               <Phone className="h-4 w-4" />
//               <span>Contact</span>
//               {isActive("/contact") && (
//                 <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//               )}
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden py-4 border-t border-border">
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                       isActive(link.path) ? "text-accent bg-muted rounded" : "text-foreground"
//                     }`}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               {/* Mobile Collections Dropdown */}
//               <div className="px-2">
//                 <button
//                   onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                   className="flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-accent py-2"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Layers className="h-4 w-4" />
//                     <span>Collections</span>
//                   </div>
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                 </button>
                
//                 {/* Mobile Dropdown Items */}
//                 {isCollectionsOpen && (
//                   <div className="ml-8 mt-2 space-y-2 border-l border-border pl-4">
//                     {collectionItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         onClick={() => {
//                           setIsOpen(false);
//                           setIsCollectionsOpen(false);
//                         }}
//                         className="flex items-center space-x-3 text-sm text-foreground hover:text-accent py-1 transition-colors"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span>{item}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Contact Link */}
//               <Link
//                 to="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                   isActive("/contact") ? "text-accent bg-muted rounded" : "text-foreground"
//                 }`}
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers 
// } from "lucide-react";

// // Import your logo - adjust the path as needed
// import logo from "../assets/logo.png"; // or logo.svg, logo.webp, etc.

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "About", path: "/about", icon: Info },
//   ];

//   const collectionItems = [
//     "ADDITIONAL PRODUCT",
//     "BLANKETS",
//     "BEDSHEETS",
//     "CUSHIONS SOFA COVER",
//     "PILLOW",
//     "DOORMAT",
//     "TOWEL",
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   // Toggle collections dropdown
//   const toggleCollections = () => {
//     setIsCollectionsOpen(!isCollectionsOpen);
//   };

//   // Close collections dropdown
//   const closeCollections = () => {
//     setIsCollectionsOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo - Increased size a bit more */}
//           <Link to="/" className="flex items-center space-x-3">
//             <img 
//               src={logo} 
//               alt="Super Family Mart" 
//               className="h-14 w-14 object-contain" // Increased from h-12 w-12 to h-14 w-14
//             />
//             <span className="font-serif text-2xl font-semibold tracking-tight">
//               Super Family Mart
//             </span>
//           </Link>

//           {/* Desktop Navigation - Moved to left side */}
//           <div className="hidden md:flex items-center space-x-8 ml-8">
//             {navLinks.map((link) => {
//               const IconComponent = link.icon;
//               return (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                     isActive(link.path) ? "text-accent" : "text-foreground"
//                   }`}
//                   onClick={closeCollections}
//                 >
//                   <IconComponent className="h-4 w-4" />
//                   <span>{link.name}</span>
//                   {isActive(link.path) && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                   )}
//                 </Link>
//               );
//             })}
            
//             {/* Collections Dropdown - Fixed hover area */}
//             <div 
//               className="relative"
//               onMouseEnter={() => setIsCollectionsOpen(true)}
//               onMouseLeave={() => setIsCollectionsOpen(false)}
//             >
//               <div className="relative">
//                 <button
//                   onClick={toggleCollections}
//                   className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative py-2 ${
//                     location.pathname.startsWith("/collections") ? "text-accent" : "text-foreground"
//                   }`}
//                 >
//                   <Layers className="h-4 w-4" />
//                   <span>Collections</span>
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                   {location.pathname.startsWith("/collections") && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                   )}
//                 </button>
//               </div>
              
//               {/* Dropdown Menu with improved positioning */}
//               {isCollectionsOpen && (
//                 <div className="absolute top-full left-0 mt-0 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
//                   {collectionItems.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                       className="flex items-center space-x-3 px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-muted transition-colors"
//                       onClick={() => {
//                         setIsCollectionsOpen(false);
//                         closeCollections();
//                       }}
//                     >
//                       <Layers className="h-4 w-4" />
//                       <span>{item}</span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Contact Link - Separate on the right */}
//             <Link
//               to="/contact"
//               className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                 isActive("/contact") ? "text-accent" : "text-foreground"
//               }`}
//               onClick={closeCollections}
//             >
//               <Phone className="h-4 w-4" />
//               <span>Contact</span>
//               {isActive("/contact") && (
//                 <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//               )}
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden py-4 border-t border-border">
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                       isActive(link.path) ? "text-accent bg-muted rounded" : "text-foreground"
//                     }`}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               {/* Mobile Collections Dropdown */}
//               <div className="px-2">
//                 <button
//                   onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                   className="flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-accent py-2"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Layers className="h-4 w-4" />
//                     <span>Collections</span>
//                   </div>
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                 </button>
                
//                 {/* Mobile Dropdown Items */}
//                 {isCollectionsOpen && (
//                   <div className="ml-8 mt-2 space-y-2 border-l border-border pl-4">
//                     {collectionItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         onClick={() => {
//                           setIsOpen(false);
//                           setIsCollectionsOpen(false);
//                         }}
//                         className="flex items-center space-x-3 text-sm text-foreground hover:text-accent py-1 transition-colors"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span>{item}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Contact Link */}
//               <Link
//                 to="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                   isActive("/contact") ? "text-accent bg-muted rounded" : "text-foreground"
//                 }`}
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers 
// } from "lucide-react";

// // Import your logo - adjust the path as needed
// import logo from "../assets/logo.png"; // or logo.svg, logo.webp, etc.

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "About", path: "/about", icon: Info },
//   ];

//   const collectionItems = [
//     "ADDITIONAL PRODUCT",
//     "BLANKETS",
//     "BEDSHEETS",
//     "CUSHIONS SOFA COVER",
//     "PILLOW",
//     "DOORMAT",
//     "TOWEL",
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   // Toggle collections dropdown
//   const toggleCollections = () => {
//     setIsCollectionsOpen(!isCollectionsOpen);
//   };

//   // Close collections dropdown
//   const closeCollections = () => {
//     setIsCollectionsOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo with color filter */}
//           <Link to="/" className="flex items-center space-x-3">
//             <div className="relative">
//               <img 
//                 src={logo} 
//                 alt="Super Family Mart" 
//                 className="h-14 w-14 object-contain filter brightness-0 saturate-100 invert-[30%] sepia-[50%] hue-rotate-[200deg] saturate-[500%]"
//                 // You can adjust these filters:
//                 // - For blue: hue-rotate-[200deg]
//                 // - For red: hue-rotate-[0deg] sepia-[100%] saturate-[10000%]
//                 // - For green: hue-rotate-[90deg] saturate-[200%]
//                 // - For purple: hue-rotate-[270deg] saturate-[200%]
//               />
//             </div>
//             <span className="font-serif text-2xl font-semibold tracking-tight">
//               Super Family Mart
//             </span>
//           </Link>

//           {/* Rest of your navbar code remains the same */}
//           <div className="hidden md:flex items-center space-x-8 ml-8">
//             {navLinks.map((link) => {
//               const IconComponent = link.icon;
//               return (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                     isActive(link.path) ? "text-accent" : "text-foreground"
//                   }`}
//                   onClick={closeCollections}
//                 >
//                   <IconComponent className="h-4 w-4" />
//                   <span>{link.name}</span>
//                   {isActive(link.path) && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                   )}
//                 </Link>
//               );
//             })}
            
//             {/* Collections Dropdown */}
//             <div 
//               className="relative"
//               onMouseEnter={() => setIsCollectionsOpen(true)}
//               onMouseLeave={() => setIsCollectionsOpen(false)}
//             >
//               <div className="relative">
//                 <button
//                   onClick={toggleCollections}
//                   className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative py-2 ${
//                     location.pathname.startsWith("/collections") ? "text-accent" : "text-foreground"
//                   }`}
//                 >
//                   <Layers className="h-4 w-4" />
//                   <span>Collections</span>
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                   {location.pathname.startsWith("/collections") && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                   )}
//                 </button>
//               </div>
              
//               {isCollectionsOpen && (
//                 <div className="absolute top-full left-0 mt-0 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
//                   {collectionItems.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                       className="flex items-center space-x-3 px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-muted transition-colors"
//                       onClick={() => {
//                         setIsCollectionsOpen(false);
//                         closeCollections();
//                       }}
//                     >
//                       <Layers className="h-4 w-4" />
//                       <span>{item}</span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Contact Link */}
//             <Link
//               to="/contact"
//               className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                 isActive("/contact") ? "text-accent" : "text-foreground"
//               }`}
//               onClick={closeCollections}
//             >
//               <Phone className="h-4 w-4" />
//               <span>Contact</span>
//               {isActive("/contact") && (
//                 <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//               )}
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation - remains the same */}
//         {isOpen && (
//           <div className="md:hidden py-4 border-t border-border">
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                       isActive(link.path) ? "text-accent bg-muted rounded" : "text-foreground"
//                     }`}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               <div className="px-2">
//                 <button
//                   onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                   className="flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-accent py-2"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Layers className="h-4 w-4" />
//                     <span>Collections</span>
//                   </div>
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                 </button>
                
//                 {isCollectionsOpen && (
//                   <div className="ml-8 mt-2 space-y-2 border-l border-border pl-4">
//                     {collectionItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         onClick={() => {
//                           setIsOpen(false);
//                           setIsCollectionsOpen(false);
//                         }}
//                         className="flex items-center space-x-3 text-sm text-foreground hover:text-accent py-1 transition-colors"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span>{item}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link
//                 to="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                   isActive("/contact") ? "text-accent bg-muted rounded" : "text-foreground"
//                 }`}
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers 
// } from "lucide-react";

// // Import your logo - adjust the path as needed
// import logo from "../assets/logo.png"; // or logo.svg, logo.webp, etc.

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "About", path: "/about", icon: Info },
//   ];

//   const collectionItems = [
//     "ADDITIONAL PRODUCT",
//     "BLANKETS",
//     "BEDSHEETS",
//     "CUSHIONS SOFA COVER",
//     "PILLOW",
//     "DOORMAT",
//     "TOWEL",
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   // Toggle collections dropdown
//   const toggleCollections = () => {
//     setIsCollectionsOpen(!isCollectionsOpen);
//   };

//   // Close collections dropdown
//   const closeCollections = () => {
//     setIsCollectionsOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo with increased size */}
//           <Link to="/" className="flex items-center space-x-3">
//             <div className="relative">
//               <img 
//                 src={logo} 
//                 alt="Super Family Mart" 
//                 className="h-24 w-26 object-contain filter brightness-0 saturate-100 invert-[30%] sepia-[50%] hue-rotate-[200deg] saturate-[500%]"
//                 // Increased from h-14 w-14 to h-16 w-16
//               />
//             </div>
//             <span className="font-serif text-2xl font-semibold tracking-tight">
//               Super Family Mart
//             </span>
//           </Link>

//           {/* Rest of your navbar code remains the same */}
//           <div className="hidden md:flex items-center space-x-8 ml-8">
//             {navLinks.map((link) => {
//               const IconComponent = link.icon;
//               return (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                     isActive(link.path) ? "text-accent" : "text-foreground"
//                   }`}
//                   onClick={closeCollections}
//                 >
//                   <IconComponent className="h-4 w-4" />
//                   <span>{link.name}</span>
//                   {isActive(link.path) && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                   )}
//                 </Link>
//               );
//             })}
            
//             {/* Collections Dropdown */}
//             <div 
//               className="relative"
//               onMouseEnter={() => setIsCollectionsOpen(true)}
//               onMouseLeave={() => setIsCollectionsOpen(false)}
//             >
//               <div className="relative">
//                 <button
//                   onClick={toggleCollections}
//                   className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative py-2 ${
//                     location.pathname.startsWith("/collections") ? "text-accent" : "text-foreground"
//                   }`}
//                 >
//                   <Layers className="h-4 w-4" />
//                   <span>Collections</span>
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                   {location.pathname.startsWith("/collections") && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//                   )}
//                 </button>
//               </div>
              
//               {isCollectionsOpen && (
//                 <div className="absolute top-full left-0 mt-0 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
//                   {collectionItems.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                       className="flex items-center space-x-3 px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-muted transition-colors"
//                       onClick={() => {
//                         setIsCollectionsOpen(false);
//                         closeCollections();
//                       }}
//                     >
//                       <Layers className="h-4 w-4" />
//                       <span>{item}</span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Contact Link */}
//             <Link
//               to="/contact"
//               className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-accent relative ${
//                 isActive("/contact") ? "text-accent" : "text-foreground"
//               }`}
//               onClick={closeCollections}
//             >
//               <Phone className="h-4 w-4" />
//               <span>Contact</span>
//               {isActive("/contact") && (
//                 <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent" />
//               )}
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation - remains the same */}
//         {isOpen && (
//           <div className="md:hidden py-4 border-t border-border">
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                       isActive(link.path) ? "text-accent bg-muted rounded" : "text-foreground"
//                     }`}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               <div className="px-2">
//                 <button
//                   onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                   className="flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-accent py-2"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Layers className="h-4 w-4" />
//                     <span>Collections</span>
//                   </div>
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                 </button>
                
//                 {isCollectionsOpen && (
//                   <div className="ml-8 mt-2 space-y-2 border-l border-border pl-4">
//                     {collectionItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         onClick={() => {
//                           setIsOpen(false);
//                           setIsCollectionsOpen(false);
//                         }}
//                         className="flex items-center space-x-3 text-sm text-foreground hover:text-accent py-1 transition-colors"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span>{item}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link
//                 to="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-accent px-2 py-2 ${
//                   isActive("/contact") ? "text-accent bg-muted rounded" : "text-foreground"
//                 }`}
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers,
//   Images
// } from "lucide-react";

// // Import your logo - adjust the path as needed
// import logo from "../assets/SFMLogo.png"; // or logo.svg, logo.webp, etc.

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "Gallery", path: "/gallery", icon: Images },
//     { name: "About", path: "/about", icon: Info },
//   ];

//   const collectionItems = [
//     "ADDITIONAL PRODUCT",
//     "BLANKETS",
//     "BEDSHEETS",
//     "CUSHIONS SOFA COVER",
//     "PILLOW",
//     "DOORMAT",
//     "TOWEL",
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   // Toggle collections dropdown
//   const toggleCollections = () => {
//     setIsCollectionsOpen(!isCollectionsOpen);
//   };

//   // Close collections dropdown
//   const closeCollections = () => {
//     setIsCollectionsOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" style={{ backgroundColor: '#850E35' }}>
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo with increased size */}
//           <Link to="/" className="flex items-center space-x-3">
//             <div className="relative">
//               <img 
//                 src={logo} 
//                 alt="Super Family Mart" 
//                 className="h-38 w-40 object-contain"
//                 // Removed the filter to use the original logo colors
//               />
//             </div>
//             {/* <span className="font-serif text-2xl font-semibold tracking-tight text-white">
//               Super Family Mart
//             </span> */}
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8 ml-8">
//             {navLinks.map((link) => {
//               const IconComponent = link.icon;
//               return (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                     isActive(link.path) ? "text-white" : "text-gray-200"
//                   }`}
//                   onClick={closeCollections}
//                 >
//                   <IconComponent className="h-4 w-4" />
//                   <span>{link.name}</span>
//                   {isActive(link.path) && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                   )}
//                 </Link>
//               );
//             })}
            
//             {/* Collections Dropdown */}
//             <div 
//               className="relative"
//               onMouseEnter={() => setIsCollectionsOpen(true)}
//               onMouseLeave={() => setIsCollectionsOpen(false)}
//             >
//               <div className="relative">
//                 <button
//                   onClick={toggleCollections}
//                   className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative py-2 ${
//                     location.pathname.startsWith("/collections") ? "text-white" : "text-gray-200"
//                   }`}
//                 >
//                   <Layers className="h-4 w-4" />
//                   <span>Collections</span>
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                   {location.pathname.startsWith("/collections") && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                   )}
//                 </button>
//               </div>
              
//               {isCollectionsOpen && (
//                 <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
//                   {collectionItems.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                       className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                       onClick={() => {
//                         setIsCollectionsOpen(false);
//                         closeCollections();
//                       }}
//                     >
//                       <Layers className="h-4 w-4" />
//                       <span>{item}</span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Contact Link */}
//             <Link
//               to="/contact"
//               className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                 isActive("/contact") ? "text-white" : "text-gray-200"
//               }`}
//               onClick={closeCollections}
//             >
//               <Phone className="h-4 w-4" />
//               <span>Contact</span>
//               {isActive("/contact") && (
//                 <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//               )}
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 text-white"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden py-4 border-t border-[#9A2A4F] bg-[#850E35]">
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-2 py-2 ${
//                       isActive(link.path) ? "text-white bg-[#9A2A4F] rounded" : "text-gray-200"
//                     }`}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               <div className="px-2">
//                 <button
//                   onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                   className="flex items-center justify-between w-full text-sm font-medium text-gray-200 hover:text-white py-2"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Layers className="h-4 w-4" />
//                     <span>Collections</span>
//                   </div>
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                 </button>
                
//                 {isCollectionsOpen && (
//                   <div className="ml-8 mt-2 space-y-2 border-l border-[#9A2A4F] pl-4">
//                     {collectionItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         onClick={() => {
//                           setIsOpen(false);
//                           setIsCollectionsOpen(false);
//                         }}
//                         className="flex items-center space-x-3 text-sm text-gray-200 hover:text-white py-1 transition-colors"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span>{item}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link
//                 to="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-2 py-2 ${
//                   isActive("/contact") ? "text-white bg-[#9A2A4F] rounded" : "text-gray-200"
//                 }`}
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers,
//   Images,
//   Facebook,
//   Instagram,
//   MessageCircle,
//   Youtube,
//   MapPin,
//   Mail
// } from "lucide-react";

// // Import your logo - adjust the path as needed
// import logo from "../assets/SFMLogo.png"; // or logo.svg, logo.webp, etc.

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "Gallery", path: "/gallery", icon: Images },
//     { name: "About", path: "/about", icon: Info },
//   ];

//   const collectionItems = [
//     "ADDITIONAL PRODUCT",
//     "BLANKETS",
//     "BEDSHEETS",
//     "CUSHIONS SOFA COVER",
//     "PILLOW",
//     "DOORMAT",
//     "TOWEL",
//   ];

//   const socialLinks = [
//     { icon: Facebook, url: "https://www.facebook.com/share/1DP7QSDAJB/", name: "Facebook" },
//     { icon: Instagram, url: "https://www.instagram.com/superfamilym?igsh=MW84OHN6dWR1OHFhNA%3D%3D", name: "Instagram" },
//     { icon: MessageCircle, url: "https://wa.me/message/IS5ZG2CRHGYSC1", name: "WhatsApp" },
//     { icon: Youtube, url: "https://www.youtube.com/@SuperFamilyMart", name: "YouTube" },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   // Toggle collections dropdown
//   const toggleCollections = () => {
//     setIsCollectionsOpen(!isCollectionsOpen);
//   };

//   // Close collections dropdown
//   const closeCollections = () => {
//     setIsCollectionsOpen(false);
//   };

//   return (
//     <>
//       {/* Top Bar with Social Links and Contact Info */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white py-2 text-sm">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
//             {/* Social Links - Left Side */}
//             <div className="flex items-center space-x-4">
//               {socialLinks.map((social, index) => {
//                 const IconComponent = social.icon;
//                 return (
//                   <a
//                     key={index}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-white hover:text-gray-300 transition-colors duration-200"
//                     aria-label={social.name}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                   </a>
//                 );
//               })}
//             </div>

//             {/* Contact Information - Right Side */}
//             <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-xs md:text-sm">
//               <div className="flex items-center space-x-2">
//                 <Phone className="h-3 w-3" />
//                 <span>9936370892</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Mail className="h-3 w-3" />
//                 <span>superfamilymart2019@gmail.com</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <MapPin className="h-3 w-3" />
//                 <span>PALHANA ROAD MURATGANJ KAUSHAMBI</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation Bar - adjusted margin top for top bar */}
//       <nav 
//         className="fixed top-8 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border" 
//         style={{ backgroundColor: '#850E35' }}
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo with increased size */}
//             <Link to="/" className="flex items-center space-x-3">
//               <div className="relative">
//                 <img 
//                   src={logo} 
//                   alt="Super Family Mart" 
//                   className="h-38 w-40 object-contain"
//                 />
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8 ml-8">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                       isActive(link.path) ? "text-white" : "text-gray-200"
//                     }`}
//                     onClick={closeCollections}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                     {isActive(link.path) && (
//                       <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                     )}
//                   </Link>
//                 );
//               })}
              
//               {/* Collections Dropdown */}
//               <div 
//                 className="relative"
//                 onMouseEnter={() => setIsCollectionsOpen(true)}
//                 onMouseLeave={() => setIsCollectionsOpen(false)}
//               >
//                 <div className="relative">
//                   <button
//                     onClick={toggleCollections}
//                     className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative py-2 ${
//                       location.pathname.startsWith("/collections") ? "text-white" : "text-gray-200"
//                     }`}
//                   >
//                     <Layers className="h-4 w-4" />
//                     <span>Collections</span>
//                     <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                     {location.pathname.startsWith("/collections") && (
//                       <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                     )}
//                   </button>
//                 </div>
                
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
//                     {collectionItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                         onClick={() => {
//                           setIsCollectionsOpen(false);
//                           closeCollections();
//                         }}
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span>{item}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Contact Link */}
//               <Link
//                 to="/contact"
//                 className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                   isActive("/contact") ? "text-white" : "text-gray-200"
//                 }`}
//                 onClick={closeCollections}
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//                 {isActive("/contact") && (
//                   <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                 )}
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2 text-white"
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           {isOpen && (
//             <div className="md:hidden py-4 border-t border-[#9A2A4F] bg-[#850E35]">
//               <div className="flex flex-col space-y-4">
//                 {navLinks.map((link) => {
//                   const IconComponent = link.icon;
//                   return (
//                     <Link
//                       key={link.path}
//                       to={link.path}
//                       onClick={() => setIsOpen(false)}
//                       className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-2 py-2 ${
//                         isActive(link.path) ? "text-white bg-[#9A2A4F] rounded" : "text-gray-200"
//                       }`}
//                     >
//                       <IconComponent className="h-4 w-4" />
//                       <span>{link.name}</span>
//                     </Link>
//                   );
//                 })}
                
//                 <div className="px-2">
//                   <button
//                     onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                     className="flex items-center justify-between w-full text-sm font-medium text-gray-200 hover:text-white py-2"
//                   >
//                     <div className="flex items-center space-x-3">
//                       <Layers className="h-4 w-4" />
//                       <span>Collections</span>
//                     </div>
//                     <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                   </button>
                  
//                   {isCollectionsOpen && (
//                     <div className="ml-8 mt-2 space-y-2 border-l border-[#9A2A4F] pl-4">
//                       {collectionItems.map((item, index) => (
//                         <Link
//                           key={index}
//                           to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                           onClick={() => {
//                             setIsOpen(false);
//                             setIsCollectionsOpen(false);
//                           }}
//                           className="flex items-center space-x-3 text-sm text-gray-200 hover:text-white py-1 transition-colors"
//                         >
//                           <Layers className="h-4 w-4" />
//                           <span>{item}</span>
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 <Link
//                   to="/contact"
//                   onClick={() => setIsOpen(false)}
//                   className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-2 py-2 ${
//                     isActive("/contact") ? "text-white bg-[#9A2A4F] rounded" : "text-gray-200"
//                   }`}
//                 >
//                   <Phone className="h-4 w-4" />
//                   <span>Contact</span>
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;





// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers,
//   Images,
//   Facebook,
//   Instagram,
//   MessageCircle,
//   Youtube,
//   MapPin,
//   Mail
// } from "lucide-react";

// // Import your logo - adjust the path as needed
// import logo from "../assets/SFM Logo enhanced.png"; // or logo.svg, logo.webp, etc.

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "Gallery", path: "/gallery", icon: Images },
//     { name: "About", path: "/about", icon: Info },
//   ];

//   const collectionItems = [
//     "ADDITIONAL PRODUCT",
//     "BLANKETS",
//     "BEDSHEETS",
//     "CUSHIONS SOFA COVER",
//     "PILLOW",
//     "DOORMAT",
//     "TOWEL",
//   ];

//   const socialLinks = [
//     { icon: Facebook, url: "https://www.facebook.com/share/1DP7QSDAJB/", name: "Facebook" },
//     { icon: Instagram, url: "https://www.instagram.com/superfamilym?igsh=MW84OHN6dWR1OHFhNA%3D%3D", name: "Instagram" },
//     { icon: MessageCircle, url: "https://wa.me/message/IS5ZG2CRHGYSC1", name: "WhatsApp" },
//     { icon: Youtube, url: "https://www.youtube.com/@SuperFamilyMart", name: "YouTube" },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   // Toggle collections dropdown
//   const toggleCollections = () => {
//     setIsCollectionsOpen(!isCollectionsOpen);
//   };

//   // Close collections dropdown
//   const closeCollections = () => {
//     setIsCollectionsOpen(false);
//   };

//   // Close mobile menu
//   const closeMobileMenu = () => {
//     setIsOpen(false);
//     setIsCollectionsOpen(false);
//   };

//   return (
//     <>
//       {/* Top Bar with Social Links and Contact Info */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white py-1 md:py-2 text-xs md:text-sm">
//         <div className="container mx-auto px-3 md:px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
//             {/* Social Links - Left Side */}
//             <div className="flex items-center space-x-3 md:space-x-4">
//               {socialLinks.map((social, index) => {
//                 const IconComponent = social.icon;
//                 return (
//                   <a
//                     key={index}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-white hover:text-gray-300 transition-colors duration-200"
//                     aria-label={social.name}
//                   >
//                     <IconComponent className="h-3 w-3 md:h-4 md:w-4" />
//                   </a>
//                 );
//               })}
//             </div>

//             {/* Contact Information - Right Side */}
//             <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6 text-[10px] md:text-sm">
//               {/* Phone - show on all screens */}
//               {/* <div className="flex items-center space-x-1 md:space-x-2">
//                 <Phone className="h-2 w-2 md:h-3 md:w-3" />
//                 <span className="hidden xs:inline">9936370892</span>
//               </div> */}
              
//               {/* Email - hide on small mobile, show on larger mobile and up */}
//               <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
//                 <Mail className="h-2 w-2 md:h-3 md:w-3" />
//                 <span className="hidden md:inline">superfamilymart2019@gmail.com</span>
//                 <span className="md:hidden text-xs">Email</span>
//               </div>


              
//               {/* Address - hide on mobile, show on tablet and up */}
//               <div className="hidden md:flex items-center space-x-2">
//                 <MapPin className="h-3 w-3" />
//                 <span className="hidden lg:inline">PALHANA ROAD MURATGANJ KAUSHAMBI</span>
//                 <span className="lg:hidden">PALHANA ROAD...</span>
//               </div>

//               <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
              
//                  <Phone className="h-2 w-2 md:h-3 md:w-3" />
//                 <span className="hidden md:inline">9936370892</span>
//                 <span className="md:hidden text-xs">Mobile</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation Bar */}
//       <nav 
//         className="fixed top-6 md:top-8 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border" 
//         style={{ backgroundColor: '#850E35' }}
//       >
//         <div className="container mx-auto px-3 md:px-4">
//           <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
//             {/* Logo with responsive sizing */}
//             <Link to="/" className="flex items-center space-x-2 md:space-x-3" onClick={closeMobileMenu}>
//               <div className="relative">
//                 <img 
//                   src={logo} 
//                   alt="Super Family Mart" 
//                   className="h-24 w-28 sm:h-28 sm:w-32 md:h-32 md:w-36 lg:h-38 lg:w-40 object-contain"
//                 />
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 ml-6 xl:ml-8">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                       isActive(link.path) ? "text-white" : "text-gray-200"
//                     }`}
//                     onClick={closeCollections}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                     {isActive(link.path) && (
//                       <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                     )}
//                   </Link>
//                 );
//               })}
              
//               {/* Collections Dropdown */}
//               <div 
//                 className="relative"
//                 onMouseEnter={() => setIsCollectionsOpen(true)}
//                 onMouseLeave={() => setIsCollectionsOpen(false)}
//               >
//                 <div className="relative">
//                   <button
//                     onClick={toggleCollections}
//                     className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative py-2 ${
//                       location.pathname.startsWith("/collections") ? "text-white" : "text-gray-200"
//                     }`}
//                   >
//                     <Layers className="h-4 w-4" />
//                     <span>Collections</span>
//                     <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                     {location.pathname.startsWith("/collections") && (
//                       <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                     )}
//                   </button>
//                 </div>
                
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
//                     {collectionItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                         onClick={() => {
//                           setIsCollectionsOpen(false);
//                           closeCollections();
//                         }}
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span>{item}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Contact Link */}
//               <Link
//                 to="/contact"
//                 className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                   isActive("/contact") ? "text-white" : "text-gray-200"
//                 }`}
//                 onClick={closeCollections}
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//                 {isActive("/contact") && (
//                   <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                 )}
//               </Link>
//             </div>

//             {/* Tablet Navigation (simplified) */}
//             <div className="hidden md:flex lg:hidden items-center space-x-4 ml-4">
//               {navLinks.slice(0, 4).map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     className={`flex items-center space-x-1 text-xs font-medium transition-colors hover:text-white relative ${
//                       isActive(link.path) ? "text-white" : "text-gray-200"
//                     }`}
//                     onClick={closeCollections}
//                   >
//                     <IconComponent className="h-3 w-3" />
//                     <span className="hidden sm:inline">{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               {/* More dropdown for tablet */}
//               <div className="relative">
//                 <button
//                   onClick={toggleCollections}
//                   className="flex items-center space-x-1 text-xs font-medium text-gray-200 hover:text-white"
//                 >
//                   <span>More</span>
//                   <ChevronDown className="h-3 w-3" />
//                 </button>
                
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full right-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
//                     {/* Remaining nav links */}
//                     {navLinks.slice(4).map((link) => {
//                       const IconComponent = link.icon;
//                       return (
//                         <Link
//                           key={link.path}
//                           to={link.path}
//                           className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                           onClick={closeCollections}
//                         >
//                           <IconComponent className="h-4 w-4" />
//                           <span>{link.name}</span>
//                         </Link>
//                       );
//                     })}
                    
//                     {/* Collection items */}
//                     <div className="border-t border-gray-200 mt-2 pt-2">
//                       <div className="px-3 py-1 text-xs font-semibold text-gray-500">COLLECTIONS</div>
//                       {collectionItems.slice(0, 4).map((item, index) => (
//                         <Link
//                           key={index}
//                           to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                           className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                           onClick={closeCollections}
//                         >
//                           <Layers className="h-4 w-4" />
//                           <span className="text-xs">{item}</span>
//                         </Link>
//                       ))}
//                     </div>
                    
//                     {/* Contact */}
//                     <Link
//                       to="/contact"
//                       className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors border-t border-gray-200 mt-2"
//                       onClick={closeCollections}
//                     >
//                       <Phone className="h-4 w-4" />
//                       <span>Contact</span>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2 text-white"
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           {isOpen && (
//             <div className="md:hidden py-4 border-t border-[#9A2A4F] bg-[#850E35] max-h-[80vh] overflow-y-auto">
//               <div className="flex flex-col space-y-3">
//                 {navLinks.map((link) => {
//                   const IconComponent = link.icon;
//                   return (
//                     <Link
//                       key={link.path}
//                       to={link.path}
//                       onClick={closeMobileMenu}
//                       className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg ${
//                         isActive(link.path) ? "text-white bg-[#9A2A4F]" : "text-gray-200"
//                       }`}
//                     >
//                       <IconComponent className="h-4 w-4" />
//                       <span>{link.name}</span>
//                     </Link>
//                   );
//                 })}
                
//                 {/* Collections Section */}
//                 <div className="px-3">
//                   <button
//                     onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                     className="flex items-center justify-between w-full text-sm font-medium text-gray-200 hover:text-white py-2 rounded-lg"
//                   >
//                     <div className="flex items-center space-x-3">
//                       <Layers className="h-4 w-4" />
//                       <span>Collections</span>
//                     </div>
//                     <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                   </button>
                  
//                   {isCollectionsOpen && (
//                     <div className="ml-4 mt-2 space-y-2 border-l-2 border-[#9A2A4F] pl-4">
//                       {collectionItems.map((item, index) => (
//                         <Link
//                           key={index}
//                           to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                           onClick={closeMobileMenu}
//                           className="flex items-center space-x-3 text-sm text-gray-200 hover:text-white py-2 transition-colors rounded-lg px-2"
//                         >
//                           <Layers className="h-4 w-4" />
//                           <span className="text-xs">{item}</span>
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Contact Link */}
//                 <Link
//                   to="/contact"
//                   onClick={closeMobileMenu}
//                   className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg ${
//                     isActive("/contact") ? "text-white bg-[#9A2A4F]" : "text-gray-200"
//                   }`}
//                 >
//                   <Phone className="h-4 w-4" />
//                   <span>Contact</span>
//                 </Link>

//                 {/* Social Links in Mobile Menu */}
//                 <div className="px-3 pt-4 border-t border-[#9A2A4F]">
//                   <div className="flex items-center justify-center space-x-6">
//                     {socialLinks.map((social, index) => {
//                       const IconComponent = social.icon;
//                       return (
//                         <a
//                           key={index}
//                           href={social.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-white hover:text-gray-300 transition-colors duration-200 p-2"
//                           aria-label={social.name}
//                           onClick={closeMobileMenu}
//                         >
//                           <IconComponent className="h-5 w-5" />
//                         </a>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Add padding to prevent content from being hidden behind fixed navbar */}
//       <div className="h-20 md:h-24 lg:h-28"></div>
//     </>
//   );
// };

// export default Navbar;








// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers,
//   Images,
//   Facebook,
//   Instagram,
//   MessageCircle,
//   Youtube,
//   MapPin,
//   Mail
// } from "lucide-react";

// // Import your logo - adjust the path as needed
// import logo from "../assets/SFM Logo enhanced.png"; // or logo.svg, logo.webp, etc.

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "Gallery", path: "/gallery", icon: Images },
//     { name: "About", path: "/about", icon: Info },
//   ];

//   const collectionItems = [
//     "ADDITIONAL PRODUCT",
//     "BLANKETS",
//     "BEDSHEETS",
//     "CUSHIONS SOFA COVER",
//     "PILLOW",
//     "DOORMAT",
//     "TOWEL",
//   ];

//   const socialLinks = [
//     { icon: Facebook, url: "https://www.facebook.com/share/1DP7QSDAJB/", name: "Facebook" },
//     { icon: Instagram, url: "https://www.instagram.com/superfamilym?igsh=MW84OHN6dWR1OHFhNA%3D%3D", name: "Instagram" },
//     { icon: MessageCircle, url: "https://wa.me/message/IS5ZG2CRHGYSC1", name: "WhatsApp" },
//     { icon: Youtube, url: "https://www.youtube.com/@SuperFamilyMart", name: "YouTube" },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   // Toggle collections dropdown
//   const toggleCollections = () => {
//     setIsCollectionsOpen(!isCollectionsOpen);
//   };

//   // Close collections dropdown
//   const closeCollections = () => {
//     setIsCollectionsOpen(false);
//   };

//   // Close mobile menu
//   const closeMobileMenu = () => {
//     setIsOpen(false);
//     setIsCollectionsOpen(false);
//   };

//   return (
//     <>
//       {/* Top Bar with Social Links and Contact Info */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white py-1 md:py-2 text-xs md:text-sm">
//         <div className="container mx-auto px-3 md:px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
//             {/* Social Links - Left Side */}
//             <div className="flex items-center space-x-3 md:space-x-4">
//               {socialLinks.map((social, index) => {
//                 const IconComponent = social.icon;
//                 return (
//                   <a
//                     key={index}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-white hover:text-gray-300 transition-colors duration-200"
//                     aria-label={social.name}
//                   >
//                     <IconComponent className="h-3 w-3 md:h-4 md:w-4" />
//                   </a>
//                 );
//               })}
//             </div>

//             {/* Contact Information - Right Side */}
//             <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6 text-[10px] md:text-sm">
//               {/* Phone - show on all screens */}
//               {/* <div className="flex items-center space-x-1 md:space-x-2">
//                 <Phone className="h-2 w-2 md:h-3 md:w-3" />
//                 <span className="hidden xs:inline">9936370892</span>
//               </div> */}
              
//               {/* Email - hide on small mobile, show on larger mobile and up */}
//               <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
//                 <Mail className="h-2 w-2 md:h-3 md:w-3" />
//                 <span className="hidden md:inline">superfamilymart2019@gmail.com</span>
//                 <span className="md:hidden text-xs">Email</span>
//               </div>


              
//               {/* Address - hide on mobile, show on tablet and up */}
//               <div className="hidden md:flex items-center space-x-2">
//                 <MapPin className="h-3 w-3" />
//                 <span className="hidden lg:inline">PALHANA ROAD MURATGANJ KAUSHAMBI</span>
//                 <span className="lg:hidden">PALHANA ROAD...</span>
//               </div>

//               <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
              
//                  <Phone className="h-2 w-2 md:h-3 md:w-3" />
//                 <span className="hidden md:inline">9936370892</span>
//                 <span className="md:hidden text-xs">Mobile</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation Bar */}
//       <nav 
//         className="fixed top-6 md:top-8 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border" 
//         style={{ backgroundColor: '#850E35' }}
//       >
//         <div className="container mx-auto px-3 md:px-4">
//           <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
//             {/* Logo with responsive sizing */}
//             <Link to="/" className="flex items-center space-x-2 md:space-x-3" onClick={closeMobileMenu}>
//               <div className="relative">
//                 <img 
//                   src={logo} 
//                   alt="Super Family Mart" 
//                   className="h-24 w-28 sm:h-28 sm:w-32 md:h-32 md:w-36 lg:h-38 lg:w-40 object-contain"
//                 />
//               </div>
//       <span className="font-serif text-2xl font-semibold tracking-tight text-white italic">
//   Super Family Mart
//       </span>

//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 ml-6 xl:ml-8">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                       isActive(link.path) ? "text-white" : "text-gray-200"
//                     }`}
//                     onClick={closeCollections}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                     {isActive(link.path) && (
//                       <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                     )}
//                   </Link>
//                 );
//               })}
              
//               {/* Collections Dropdown */}
//               <div 
//                 className="relative"
//                 onMouseEnter={() => setIsCollectionsOpen(true)}
//                 onMouseLeave={() => setIsCollectionsOpen(false)}
//               >
//                 <div className="relative">
//                   <button
//                     onClick={toggleCollections}
//                     className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative py-2 ${
//                       location.pathname.startsWith("/collections") ? "text-white" : "text-gray-200"
//                     }`}
//                   >
//                     <Layers className="h-4 w-4" />
//                     <span>Collections</span>
//                     <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                     {location.pathname.startsWith("/collections") && (
//                       <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                     )}
//                   </button>
//                 </div>
                
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
//                     {collectionItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                         onClick={() => {
//                           setIsCollectionsOpen(false);
//                           closeCollections();
//                         }}
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span>{item}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Contact Link */}
//               <Link
//                 to="/contact"
//                 className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                   isActive("/contact") ? "text-white" : "text-gray-200"
//                 }`}
//                 onClick={closeCollections}
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//                 {isActive("/contact") && (
//                   <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                 )}
//               </Link>
//             </div>

//             {/* Tablet Navigation (simplified) */}
//             <div className="hidden md:flex lg:hidden items-center space-x-4 ml-4">
//               {navLinks.slice(0, 4).map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     className={`flex items-center space-x-1 text-xs font-medium transition-colors hover:text-white relative ${
//                       isActive(link.path) ? "text-white" : "text-gray-200"
//                     }`}
//                     onClick={closeCollections}
//                   >
//                     <IconComponent className="h-3 w-3" />
//                     <span className="hidden sm:inline">{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               {/* More dropdown for tablet */}
//               <div className="relative">
//                 <button
//                   onClick={toggleCollections}
//                   className="flex items-center space-x-1 text-xs font-medium text-gray-200 hover:text-white"
//                 >
//                   <span>More</span>
//                   <ChevronDown className="h-3 w-3" />
//                 </button>
                
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full right-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
//                     {/* Remaining nav links */}
//                     {navLinks.slice(4).map((link) => {
//                       const IconComponent = link.icon;
//                       return (
//                         <Link
//                           key={link.path}
//                           to={link.path}
//                           className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                           onClick={closeCollections}
//                         >
//                           <IconComponent className="h-4 w-4" />
//                           <span>{link.name}</span>
//                         </Link>
//                       );
//                     })}
                    
//                     {/* Collection items */}
//                     <div className="border-t border-gray-200 mt-2 pt-2">
//                       <div className="px-3 py-1 text-xs font-semibold text-gray-500">COLLECTIONS</div>
//                       {collectionItems.slice(0, 4).map((item, index) => (
//                         <Link
//                           key={index}
//                           to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                           className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                           onClick={closeCollections}
//                         >
//                           <Layers className="h-4 w-4" />
//                           <span className="text-xs">{item}</span>
//                         </Link>
//                       ))}
//                     </div>
                    
//                     {/* Contact */}
//                     <Link
//                       to="/contact"
//                       className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors border-t border-gray-200 mt-2"
//                       onClick={closeCollections}
//                     >
//                       <Phone className="h-4 w-4" />
//                       <span>Contact</span>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2 text-white"
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           {isOpen && (
//             <div className="md:hidden py-4 border-t border-[#9A2A4F] bg-[#850E35] max-h-[80vh] overflow-y-auto">
//               <div className="flex flex-col space-y-3">
//                 {navLinks.map((link) => {
//                   const IconComponent = link.icon;
//                   return (
//                     <Link
//                       key={link.path}
//                       to={link.path}
//                       onClick={closeMobileMenu}
//                       className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg ${
//                         isActive(link.path) ? "text-white bg-[#9A2A4F]" : "text-gray-200"
//                       }`}
//                     >
//                       <IconComponent className="h-4 w-4" />
//                       <span>{link.name}</span>
//                     </Link>
//                   );
//                 })}
                
//                 {/* Collections Section */}
//                 <div className="px-3">
//                   <button
//                     onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                     className="flex items-center justify-between w-full text-sm font-medium text-gray-200 hover:text-white py-2 rounded-lg"
//                   >
//                     <div className="flex items-center space-x-3">
//                       <Layers className="h-4 w-4" />
//                       <span>Collections</span>
//                     </div>
//                     <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                   </button>
                  
//                   {isCollectionsOpen && (
//                     <div className="ml-4 mt-2 space-y-2 border-l-2 border-[#9A2A4F] pl-4">
//                       {collectionItems.map((item, index) => (
//                         <Link
//                           key={index}
//                           to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                           onClick={closeMobileMenu}
//                           className="flex items-center space-x-3 text-sm text-gray-200 hover:text-white py-2 transition-colors rounded-lg px-2"
//                         >
//                           <Layers className="h-4 w-4" />
//                           <span className="text-xs">{item}</span>
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Contact Link */}
//                 <Link
//                   to="/contact"
//                   onClick={closeMobileMenu}
//                   className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg ${
//                     isActive("/contact") ? "text-white bg-[#9A2A4F]" : "text-gray-200"
//                   }`}
//                 >
//                   <Phone className="h-4 w-4" />
//                   <span>Contact</span>
//                 </Link>

//                 {/* Social Links in Mobile Menu */}
//                 <div className="px-3 pt-4 border-t border-[#9A2A4F]">
//                   <div className="flex items-center justify-center space-x-6">
//                     {socialLinks.map((social, index) => {
//                       const IconComponent = social.icon;
//                       return (
//                         <a
//                           key={index}
//                           href={social.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-white hover:text-gray-300 transition-colors duration-200 p-2"
//                           aria-label={social.name}
//                           onClick={closeMobileMenu}
//                         >
//                           <IconComponent className="h-5 w-5" />
//                         </a>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Add padding to prevent content from being hidden behind fixed navbar */}
//       <div className="h-20 md:h-24 lg:h-28"></div>
//     </>
//   );
// };

// export default Navbar;






// import { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers,
//   Images,
//   Facebook,
//   Instagram,
//   MessageCircle,
//   Youtube,
//   MapPin,
//   Mail
// } from "lucide-react";

// // Import your logo - adjust the path as needed
// import logo from "../assets/SFM Logo enhanced.png"; // or logo.svg, logo.webp, etc.

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "Gallery", path: "/gallery", icon: Images },
//     { name: "About", path: "/about", icon: Info },
//   ];

//   const socialLinks = [
//     { icon: Facebook, url: "https://www.facebook.com/share/1DP7QSDAJB/", name: "Facebook" },
//     { icon: Instagram, url: "https://www.instagram.com/superfamilym?igsh=MW84OHN6dWR1OHFhNA%3D%3D", name: "Instagram" },
//     { icon: MessageCircle, url: "https://wa.me/message/IS5ZG2CRHGYSC1", name: "WhatsApp" },
//     { icon: Youtube, url: "https://www.youtube.com/@SuperFamilyMart", name: "YouTube" },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   // Handle collection click - redirect to /collections
//   const handleCollectionClick = () => {
//     navigate("/collections");
//     setIsCollectionsOpen(false);
//     setIsOpen(false);
//   };

//   // Close mobile menu
//   const closeMobileMenu = () => {
//     setIsOpen(false);
//     setIsCollectionsOpen(false);
//   };

//   return (
//     <>
//       {/* Top Bar with Social Links and Contact Info */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white py-1 md:py-2 text-xs md:text-sm">
//         <div className="container mx-auto px-3 md:px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
//             {/* Social Links - Left Side */}
//             <div className="flex items-center space-x-3 md:space-x-4">
//               {socialLinks.map((social, index) => {
//                 const IconComponent = social.icon;
//                 return (
//                   <a
//                     key={index}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-white hover:text-gray-300 transition-colors duration-200"
//                     aria-label={social.name}
//                   >
//                     <IconComponent className="h-3 w-3 md:h-4 md:w-4" />
//                   </a>
//                 );
//               })}
//             </div>

//             {/* Contact Information - Right Side */}
//             <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6 text-[10px] md:text-sm">
//               {/* Email - hide on small mobile, show on larger mobile and up */}
//               <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
//                 <Mail className="h-2 w-2 md:h-3 md:w-3" />
//                 <span className="hidden md:inline">superfamilymart2019@gmail.com</span>
//                 <span className="md:hidden text-xs">Email</span>
//               </div>
              
//               {/* Address - hide on mobile, show on tablet and up */}
//               <div className="hidden md:flex items-center space-x-2">
//                 <MapPin className="h-3 w-3" />
//                 <span className="hidden lg:inline">PALHANA ROAD MURATGANJ KAUSHAMBI</span>
//                 <span className="lg:hidden">PALHANA ROAD...</span>
//               </div>

//               <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
//                 <Phone className="h-2 w-2 md:h-3 md:w-3" />
//                 <span className="hidden md:inline">9936370892</span>
//                 <span className="md:hidden text-xs">Mobile</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation Bar */}
//       <nav 
//         className="fixed top-6 md:top-8 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border" 
//         style={{ backgroundColor: '#850E35' }}
//       >
//         <div className="container mx-auto px-3 md:px-4">
//           <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
//             {/* Logo with responsive sizing */}
//             <Link to="/" className="flex items-center space-x-2 md:space-x-3" onClick={closeMobileMenu}>
//               <div className="relative">
//                 <img 
//                   src={logo} 
//                   alt="Super Family Mart" 
//                   className="h-24 w-28 sm:h-28 sm:w-32 md:h-32 md:w-36 lg:h-38 lg:w-40 object-contain"
//                 />
//               </div>
//               <span className="font-serif text-2xl font-semibold tracking-tight text-white italic">
//                 Super Family Mart
//               </span>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 ml-6 xl:ml-8">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                       isActive(link.path) ? "text-white" : "text-gray-200"
//                     }`}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                     {isActive(link.path) && (
//                       <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                     )}
//                   </Link>
//                 );
//               })}
              
//               {/* Collections Link - Directly redirects to /collections */}
//               <button
//                 onClick={handleCollectionClick}
//                 className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative py-2 ${
//                   location.pathname.startsWith("/collections") ? "text-white" : "text-gray-200"
//                 }`}
//               >
//                 <Layers className="h-4 w-4" />
//                 <span>Collections</span>
//                 {location.pathname.startsWith("/collections") && (
//                   <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                 )}
//               </button>

//               {/* Contact Link */}
//               <Link
//                 to="/contact"
//                 className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                   isActive("/contact") ? "text-white" : "text-gray-200"
//                 }`}
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//                 {isActive("/contact") && (
//                   <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                 )}
//               </Link>
//             </div>

//             {/* Tablet Navigation (simplified) */}
//             <div className="hidden md:flex lg:hidden items-center space-x-4 ml-4">
//               {navLinks.slice(0, 4).map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     className={`flex items-center space-x-1 text-xs font-medium transition-colors hover:text-white relative ${
//                       isActive(link.path) ? "text-white" : "text-gray-200"
//                     }`}
//                   >
//                     <IconComponent className="h-3 w-3" />
//                     <span className="hidden sm:inline">{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               {/* Collections Link for Tablet */}
//               <button
//                 onClick={handleCollectionClick}
//                 className="flex items-center space-x-1 text-xs font-medium text-gray-200 hover:text-white"
//               >
//                 <Layers className="h-3 w-3" />
//                 <span className="hidden sm:inline">Collections</span>
//               </button>

//               {/* More dropdown for tablet - Only for remaining links */}
//               <div className="relative">
//                 <button
//                   onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                   className="flex items-center space-x-1 text-xs font-medium text-gray-200 hover:text-white"
//                 >
//                   <span>More</span>
//                   <ChevronDown className="h-3 w-3" />
//                 </button>
                
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full right-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
//                     {/* Remaining nav links */}
//                     {navLinks.slice(4).map((link) => {
//                       const IconComponent = link.icon;
//                       return (
//                         <Link
//                           key={link.path}
//                           to={link.path}
//                           className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                           onClick={() => setIsCollectionsOpen(false)}
//                         >
//                           <IconComponent className="h-4 w-4" />
//                           <span>{link.name}</span>
//                         </Link>
//                       );
//                     })}
                    
//                     {/* Contact */}
//                     <Link
//                       to="/contact"
//                       className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors border-t border-gray-200 mt-2"
//                       onClick={() => setIsCollectionsOpen(false)}
//                     >
//                       <Phone className="h-4 w-4" />
//                       <span>Contact</span>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2 text-white"
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           {isOpen && (
//             <div className="md:hidden py-4 border-t border-[#9A2A4F] bg-[#850E35] max-h-[80vh] overflow-y-auto">
//               <div className="flex flex-col space-y-3">
//                 {navLinks.map((link) => {
//                   const IconComponent = link.icon;
//                   return (
//                     <Link
//                       key={link.path}
//                       to={link.path}
//                       onClick={closeMobileMenu}
//                       className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg ${
//                         isActive(link.path) ? "text-white bg-[#9A2A4F]" : "text-gray-200"
//                       }`}
//                     >
//                       <IconComponent className="h-4 w-4" />
//                       <span>{link.name}</span>
//                     </Link>
//                   );
//                 })}
                
//                 {/* Collections Link for Mobile */}
//                 <button
//                   onClick={handleCollectionClick}
//                   className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg text-left ${
//                     location.pathname.startsWith("/collections") ? "text-white bg-[#9A2A4F]" : "text-gray-200"
//                   }`}
//                 >
//                   <Layers className="h-4 w-4" />
//                   <span>Collections</span>
//                 </button>

//                 {/* Contact Link */}
//                 <Link
//                   to="/contact"
//                   onClick={closeMobileMenu}
//                   className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg ${
//                     isActive("/contact") ? "text-white bg-[#9A2A4F]" : "text-gray-200"
//                   }`}
//                 >
//                   <Phone className="h-4 w-4" />
//                   <span>Contact</span>
//                 </Link>

//                 {/* Social Links in Mobile Menu */}
//                 <div className="px-3 pt-4 border-t border-[#9A2A4F]">
//                   <div className="flex items-center justify-center space-x-6">
//                     {socialLinks.map((social, index) => {
//                       const IconComponent = social.icon;
//                       return (
//                         <a
//                           key={index}
//                           href={social.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-white hover:text-gray-300 transition-colors duration-200 p-2"
//                           aria-label={social.name}
//                           onClick={closeMobileMenu}
//                         >
//                           <IconComponent className="h-5 w-5" />
//                         </a>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Add padding to prevent content from being hidden behind fixed navbar */}
//       <div className="h-20 md:h-24 lg:h-28"></div>
//     </>
//   );
// };

// export default Navbar;









// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers,
//   Images,
//   Facebook,
//   Instagram,
//   MessageCircle,
//   Youtube,
//   MapPin,
//   Mail
// } from "lucide-react";

// // Import your logo - adjust the path as needed
// import logo from "../assets/SFM Logo enhanced.png"; // or logo.svg, logo.webp, etc.

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "Gallery", path: "/gallery", icon: Images },
//     { name: "About", path: "/about", icon: Info },
//   ];

//   const collectionItems = [
//     "ADDITIONAL PRODUCT"
//   ];

//   const socialLinks = [
//     { icon: Facebook, url: "https://www.facebook.com/share/1DP7QSDAJB/", name: "Facebook" },
//     { icon: Instagram, url: "https://www.instagram.com/superfamilym?igsh=MW84OHN6dWR1OHFhNA%3D%3D", name: "Instagram" },
//     { icon: MessageCircle, url: "https://wa.me/message/IS5ZG2CRHGYSC1", name: "WhatsApp" },
//     { icon: Youtube, url: "https://www.youtube.com/@SuperFamilyMart", name: "YouTube" },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   // Toggle collections dropdown
//   const toggleCollections = () => {
//     setIsCollectionsOpen(!isCollectionsOpen);
//   };

//   // Close collections dropdown
//   const closeCollections = () => {
//     setIsCollectionsOpen(false);
//   };

//   // Close mobile menu
//   const closeMobileMenu = () => {
//     setIsOpen(false);
//     setIsCollectionsOpen(false);
//   };

//   // Handle collection click - redirect to /collections
//   const handleCollectionClick = () => {
//     window.location.href = "/collections";
//     closeCollections();
//     closeMobileMenu();
//   };

//   return (
//     <>
//       {/* Top Bar with Social Links and Contact Info */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white py-1 md:py-2 text-xs md:text-sm">
//         <div className="container mx-auto px-3 md:px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
//             {/* Social Links - Left Side */}
//             <div className="flex items-center space-x-3 md:space-x-4">
//               {socialLinks.map((social, index) => {
//                 const IconComponent = social.icon;
//                 return (
//                   <a
//                     key={index}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-white hover:text-gray-300 transition-colors duration-200"
//                     aria-label={social.name}
//                   >
//                     <IconComponent className="h-3 w-3 md:h-4 md:w-4" />
//                   </a>
//                 );
//               })}
//             </div>

//             {/* Contact Information - Right Side */}
//             <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6 text-[10px] md:text-sm">
//               {/* Email - hide on small mobile, show on larger mobile and up */}
//               <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
//                 <Mail className="h-2 w-2 md:h-3 md:w-3" />
//                 <span className="hidden md:inline">superfamilymart2019@gmail.com</span>
//                 <span className="md:hidden text-xs">Email</span>
//               </div>
              
//               {/* Address - hide on mobile, show on tablet and up */}
//               <div className="hidden md:flex items-center space-x-2">
//                 <MapPin className="h-3 w-3" />
//                 <span className="hidden lg:inline">PALHANA ROAD MURATGANJ KAUSHAMBI</span>
//                 <span className="lg:hidden">PALHANA ROAD...</span>
//               </div>

//               <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
//                 <Phone className="h-2 w-2 md:h-3 md:w-3" />
//                 <span className="hidden md:inline">9936370892</span>
//                 <span className="md:hidden text-xs">Mobile</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation Bar */}
//       <nav 
//         className="fixed top-6 md:top-8 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border" 
//         style={{ backgroundColor: '#850E35' }}
//       >
//         <div className="container mx-auto px-3 md:px-4">
//           <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
//             {/* Logo with responsive sizing */}
//             <Link to="/" className="flex items-center space-x-2 md:space-x-3" onClick={closeMobileMenu}>
//               <div className="relative">
//                 <img 
//                   src={logo} 
//                   alt="Super Family Mart" 
//                   className="h-24 w-28 sm:h-28 sm:w-32 md:h-32 md:w-36 lg:h-38 lg:w-40 object-contain"
//                 />
//               </div>
//               <span className="font-serif text-2xl font-semibold tracking-tight text-white italic">
//                 Super Family Mart
//               </span>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 ml-6 xl:ml-8">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                       isActive(link.path) ? "text-white" : "text-gray-200"
//                     }`}
//                     onClick={closeCollections}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                     {isActive(link.path) && (
//                       <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                     )}
//                   </Link>
//                 );
//               })}
              
//               {/* Collections Dropdown */}
//               <div 
//                 className="relative"
//                 onMouseEnter={() => setIsCollectionsOpen(true)}
//                 onMouseLeave={() => setIsCollectionsOpen(false)}
//               >
//                 <div className="relative">
//                   <button
//                     onClick={toggleCollections}
//                     className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative py-2 ${
//                       location.pathname.startsWith("/collections") ? "text-white" : "text-gray-200"
//                     }`}
//                   >
//                     <Layers className="h-4 w-4" />
//                     <span>Collections</span>
//                     <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                     {location.pathname.startsWith("/collections") && (
//                       <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                     )}
//                   </button>
//                 </div>
                
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
//                     {/* Collection link that redirects to /collections */}
                   
                    
//                     {/* Single collection item */}
//                     {collectionItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                         onClick={() => {
//                           setIsCollectionsOpen(false);
//                           closeCollections();
//                         }}
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span>{item}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Contact Link */}
//               <Link
//                 to="/contact"
//                 className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                   isActive("/contact") ? "text-white" : "text-gray-200"
//                 }`}
//                 onClick={closeCollections}
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//                 {isActive("/contact") && (
//                   <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                 )}
//               </Link>
//             </div>

//             {/* Tablet Navigation (simplified) */}
//             <div className="hidden md:flex lg:hidden items-center space-x-4 ml-4">
//               {navLinks.slice(0, 4).map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     className={`flex items-center space-x-1 text-xs font-medium transition-colors hover:text-white relative ${
//                       isActive(link.path) ? "text-white" : "text-gray-200"
//                     }`}
//                     onClick={closeCollections}
//                   >
//                     <IconComponent className="h-3 w-3" />
//                     <span className="hidden sm:inline">{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               {/* More dropdown for tablet */}
//               <div className="relative">
//                 <button
//                   onClick={toggleCollections}
//                   className="flex items-center space-x-1 text-xs font-medium text-gray-200 hover:text-white"
//                 >
//                   <span>More</span>
//                   <ChevronDown className="h-3 w-3" />
//                 </button>
                
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full right-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
//                     {/* Remaining nav links */}
//                     {navLinks.slice(4).map((link) => {
//                       const IconComponent = link.icon;
//                       return (
//                         <Link
//                           key={link.path}
//                           to={link.path}
//                           className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                           onClick={closeCollections}
//                         >
//                           <IconComponent className="h-4 w-4" />
//                           <span>{link.name}</span>
//                         </Link>
//                       );
//                     })}
                    
//                     {/* Collection items */}
//                     <div className="border-t border-gray-200 mt-2 pt-2">
//                       <div className="px-3 py-1 text-xs font-semibold text-gray-500">COLLECTIONS</div>
//                       {/* Collection link that redirects to /collections */}
//                       <button
//                         onClick={handleCollectionClick}
//                         className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors w-full text-left"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span className="text-xs">View All Collections</span>
//                       </button>
                      
//                       {/* Single collection item */}
//                       {collectionItems.map((item, index) => (
//                         <Link
//                           key={index}
//                           to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                           className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                           onClick={closeCollections}
//                         >
//                           <Layers className="h-4 w-4" />
//                           <span className="text-xs">{item}</span>
//                         </Link>
//                       ))}
//                     </div>
                    
//                     {/* Contact */}
//                     <Link
//                       to="/contact"
//                       className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors border-t border-gray-200 mt-2"
//                       onClick={closeCollections}
//                     >
//                       <Phone className="h-4 w-4" />
//                       <span>Contact</span>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2 text-white"
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           {isOpen && (
//             <div className="md:hidden py-4 border-t border-[#9A2A4F] bg-[#850E35] max-h-[80vh] overflow-y-auto">
//               <div className="flex flex-col space-y-3">
//                 {navLinks.map((link) => {
//                   const IconComponent = link.icon;
//                   return (
//                     <Link
//                       key={link.path}
//                       to={link.path}
//                       onClick={closeMobileMenu}
//                       className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg ${
//                         isActive(link.path) ? "text-white bg-[#9A2A4F]" : "text-gray-200"
//                       }`}
//                     >
//                       <IconComponent className="h-4 w-4" />
//                       <span>{link.name}</span>
//                     </Link>
//                   );
//                 })}
                
//                 {/* Collections Section */}
//                 <div className="px-3">
//                   <button
//                     onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                     className="flex items-center justify-between w-full text-sm font-medium text-gray-200 hover:text-white py-2 rounded-lg"
//                   >
//                     <div className="flex items-center space-x-3">
//                       <Layers className="h-4 w-4" />
//                       <span>Collections</span>
//                     </div>
//                     <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                   </button>
                  
//                   {isCollectionsOpen && (
//                     <div className="ml-4 mt-2 space-y-2 border-l-2 border-[#9A2A4F] pl-4">
//                       {/* Collection link that redirects to /collections */}
//                       <button
//                         onClick={handleCollectionClick}
//                         className="flex items-center space-x-3 text-sm text-gray-200 hover:text-white py-2 transition-colors rounded-lg px-2 w-full text-left"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span className="text-xs">View All Collections</span>
//                       </button>
                      
//                       {/* Single collection item */}
//                       {collectionItems.map((item, index) => (
//                         <Link
//                           key={index}
//                           to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                           onClick={closeMobileMenu}
//                           className="flex items-center space-x-3 text-sm text-gray-200 hover:text-white py-2 transition-colors rounded-lg px-2"
//                         >
//                           <Layers className="h-4 w-4" />
//                           <span className="text-xs">{item}</span>
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Contact Link */}
//                 <Link
//                   to="/contact"
//                   onClick={closeMobileMenu}
//                   className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg ${
//                     isActive("/contact") ? "text-white bg-[#9A2A4F]" : "text-gray-200"
//                   }`}
//                 >
//                   <Phone className="h-4 w-4" />
//                   <span>Contact</span>
//                 </Link>

//                 {/* Social Links in Mobile Menu */}
//                 <div className="px-3 pt-4 border-t border-[#9A2A4F]">
//                   <div className="flex items-center justify-center space-x-6">
//                     {socialLinks.map((social, index) => {
//                       const IconComponent = social.icon;
//                       return (
//                         <a
//                           key={index}
//                           href={social.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-white hover:text-gray-300 transition-colors duration-200 p-2"
//                           aria-label={social.name}
//                           onClick={closeMobileMenu}
//                         >
//                           <IconComponent className="h-5 w-5" />
//                         </a>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Add padding to prevent content from being hidden behind fixed navbar */}
//       <div className="h-20 md:h-24 lg:h-28"></div>
//     </>
//   );
// };

// export default Navbar;









// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers,
//   Images,
//   Facebook,
//   Instagram,
//   MessageCircle,
//   Youtube,
//   MapPin,
//   Mail,
//   Star,
//   Gift
// } from "lucide-react";

// // Import your logo - adjust the path as needed
// import logo from "../assets/SFM Logo enhanced.png"; // or logo.svg, logo.webp, etc.

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "Gallery", path: "/gallery", icon: Images },
//     { name: "About", path: "/about", icon: Info },
//   ];

//   const collectionItems = [
//     "ADDITIONAL PRODUCT"
//   ];

//   const socialLinks = [
//     { icon: Facebook, url: "https://www.facebook.com/share/1DP7QSDAJB/", name: "Facebook" },
//     { icon: Instagram, url: "https://www.instagram.com/superfamilym?igsh=MW84OHN6dWR1OHFhNA%3D%3D", name: "Instagram" },
//     { icon: MessageCircle, url: "https://wa.me/message/IS5ZG2CRHGYSC1", name: "WhatsApp" },
//     { icon: Youtube, url: "https://www.youtube.com/@SuperFamilyMart", name: "YouTube" },
//   ];

//   // Promotional messages that will scroll automatically
//   const promotionalMessages = [
//     {
//       text: "🎉 Flat 30% Off on All Products!",
//       icon: Gift,
//       color: "text-white-300"
//     },
//     {
//       text: "⭐ Give us your valuable reviews and get 5% Off!",
//       icon: Star,
//       color: "text-white-300"
//     },
//     {
//       text: "🎁 Buy One Get One 10% Off!",
//       icon: Gift,
//       color: "text-white-300"
//     }
//   ];

//   const contactInfo = [
//     {
//       text: "superfamilymart2019@gmail.com",
//       icon: Mail,
//       mobileText: "Email"
//     },
//     {
//       text: "PALHANA ROAD MURATGANJ KAUSHAMBI",
//       icon: MapPin,
//       mobileText: "Address"
//     },
//     {
//       text: "9936370892",
//       icon: Phone,
//       mobileText: "Mobile"
//     }
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   // Auto-scroll promotional messages
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentPromoIndex((prev) => (prev + 1) % promotionalMessages.length);
//     }, 3000); // Change message every 3 seconds

//     return () => clearInterval(interval);
//   }, [promotionalMessages.length]);

//   // Toggle collections dropdown
//   const toggleCollections = () => {
//     setIsCollectionsOpen(!isCollectionsOpen);
//   };

//   // Close collections dropdown
//   const closeCollections = () => {
//     setIsCollectionsOpen(false);
//   };

//   // Close mobile menu
//   const closeMobileMenu = () => {
//     setIsOpen(false);
//     setIsCollectionsOpen(false);
//   };

//   // Handle collection click - redirect to /collections
//   const handleCollectionClick = () => {
//     window.location.href = "/collections";
//     closeCollections();
//     closeMobileMenu();
//   };

//   return (
//     <>
//       {/* Top Bar with Scrolling Promotional Messages and Contact Info */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white py-1 md:py-2 text-xs md:text-sm overflow-hidden">
//         <div className="container mx-auto px-3 md:px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
//             {/* Scrolling Promotional Messages - Left Side */}
//             <div className="flex-1 flex items-center justify-center md:justify-start overflow-hidden">
//               <div className="relative h-5 md:h-6 w-full max-w-md">
//                 {promotionalMessages.map((promo, index) => {
//                   const IconComponent = promo.icon;
//                   return (
//                     <div
//                       key={index}
//                       className={`absolute inset-0 flex items-center justify-center md:justify-start space-x-2 transition-all duration-500 ${
//                         index === currentPromoIndex
//                           ? "translate-y-0 opacity-100"
//                           : "-translate-y-full opacity-0"
//                       }`}
//                     >
//                       <IconComponent className={`h-3 w-3 md:h-4 md:w-4 ${promo.color}`} />
//                       <span className={`font-semibold ${promo.color} text-xs md:text-sm whitespace-nowrap`}>
//                         {promo.text}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Contact Information - Right Side */}
//             <div className="flex items-center gap-3 md:gap-6 text-[10px] md:text-sm">
//               {/* Email */}
//               <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
//                 <Mail className="h-2 w-2 md:h-3 md:w-3" />
//                 <span className="hidden md:inline">superfamilymart2019@gmail.com</span>
//                 <span className="md:hidden text-xs">Email</span>
//               </div>
              
//               {/* Address - hide on mobile, show on tablet and up */}
//               <div className="hidden md:flex items-center space-x-2">
//                 <MapPin className="h-3 w-3" />
//                 <span className="hidden lg:inline">PALHANA ROAD MURATGANJ KAUSHAMBI</span>
//                 <span className="lg:hidden">PALHANA ROAD...</span>
//               </div>

//               {/* Mobile */}
//               <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
//                 <Phone className="h-2 w-2 md:h-3 md:w-3" />
//                 <span className="hidden md:inline">9936370892</span>
//                 <span className="md:hidden text-xs">Mobile</span>
//               </div>

//               {/* Social Links */}
//               <div className="flex items-center space-x-2 md:space-x-3 border-l border-gray-600 pl-2 md:pl-3">
//                 {socialLinks.map((social, index) => {
//                   const IconComponent = social.icon;
//                   return (
//                     <a
//                       key={index}
//                       href={social.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-white hover:text-gray-300 transition-colors duration-200"
//                       aria-label={social.name}
//                     >
//                       <IconComponent className="h-3 w-3 md:h-4 md:w-4" />
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation Bar */}
//       <nav 
//         className="fixed top-6 md:top-8 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border" 
//         style={{ backgroundColor: '#850E35' }}
//       >
//         <div className="container mx-auto px-3 md:px-4">
//           <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
//             {/* Logo with responsive sizing */}
//             <Link to="/" className="flex items-center space-x-2 md:space-x-3" onClick={closeMobileMenu}>
//               <div className="relative">
//                 <img 
//                   src={logo} 
//                   alt="Super Family Mart" 
//                   className="h-24 w-28 sm:h-28 sm:w-32 md:h-32 md:w-36 lg:h-38 lg:w-40 object-contain"
//                 />
//               </div>
//               <span className="font-serif text-2xl font-semibold tracking-tight text-white italic">
//                 Super Family Mart
//               </span>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 ml-6 xl:ml-8">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                       isActive(link.path) ? "text-white" : "text-gray-200"
//                     }`}
//                     onClick={closeCollections}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                     {isActive(link.path) && (
//                       <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                     )}
//                   </Link>
//                 );
//               })}
              
//               {/* Collections Dropdown */}
//               <div 
//                 className="relative"
//                 onMouseEnter={() => setIsCollectionsOpen(true)}
//                 onMouseLeave={() => setIsCollectionsOpen(false)}
//               >
//                 <div className="relative">
//                   <button
//                     onClick={toggleCollections}
//                     className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative py-2 ${
//                       location.pathname.startsWith("/collections") ? "text-white" : "text-gray-200"
//                     }`}
//                   >
//                     <Layers className="h-4 w-4" />
//                     <span>Collections</span>
//                     <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                     {location.pathname.startsWith("/collections") && (
//                       <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                     )}
//                   </button>
//                 </div>
                
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
//                     {/* Single collection item */}
//                     {collectionItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                         onClick={() => {
//                           setIsCollectionsOpen(false);
//                           closeCollections();
//                         }}
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span>{item}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Contact Link */}
//               <Link
//                 to="/contact"
//                 className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                   isActive("/contact") ? "text-white" : "text-gray-200"
//                 }`}
//                 onClick={closeCollections}
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//                 {isActive("/contact") && (
//                   <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                 )}
//               </Link>
//             </div>

//             {/* Tablet Navigation (simplified) */}
//             <div className="hidden md:flex lg:hidden items-center space-x-4 ml-4">
//               {navLinks.slice(0, 4).map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     className={`flex items-center space-x-1 text-xs font-medium transition-colors hover:text-white relative ${
//                       isActive(link.path) ? "text-white" : "text-gray-200"
//                     }`}
//                     onClick={closeCollections}
//                   >
//                     <IconComponent className="h-3 w-3" />
//                     <span className="hidden sm:inline">{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               {/* More dropdown for tablet */}
//               <div className="relative">
//                 <button
//                   onClick={toggleCollections}
//                   className="flex items-center space-x-1 text-xs font-medium text-gray-200 hover:text-white"
//                 >
//                   <span>More</span>
//                   <ChevronDown className="h-3 w-3" />
//                 </button>
                
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full right-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
//                     {/* Remaining nav links */}
//                     {navLinks.slice(4).map((link) => {
//                       const IconComponent = link.icon;
//                       return (
//                         <Link
//                           key={link.path}
//                           to={link.path}
//                           className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                           onClick={closeCollections}
//                         >
//                           <IconComponent className="h-4 w-4" />
//                           <span>{link.name}</span>
//                         </Link>
//                       );
//                     })}
                    
//                     {/* Collection items */}
//                     <div className="border-t border-gray-200 mt-2 pt-2">
//                       <div className="px-3 py-1 text-xs font-semibold text-gray-500">COLLECTIONS</div>
//                       {/* Collection link that redirects to /collections */}
//                       <button
//                         onClick={handleCollectionClick}
//                         className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors w-full text-left"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span className="text-xs">View All Collections</span>
//                       </button>
                      
//                       {/* Single collection item */}
//                       {collectionItems.map((item, index) => (
//                         <Link
//                           key={index}
//                           to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                           className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                           onClick={closeCollections}
//                         >
//                           <Layers className="h-4 w-4" />
//                           <span className="text-xs">{item}</span>
//                         </Link>
//                       ))}
//                     </div>
                    
//                     {/* Contact */}
//                     <Link
//                       to="/contact"
//                       className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors border-t border-gray-200 mt-2"
//                       onClick={closeCollections}
//                     >
//                       <Phone className="h-4 w-4" />
//                       <span>Contact</span>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2 text-white"
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           {isOpen && (
//             <div className="md:hidden py-4 border-t border-[#9A2A4F] bg-[#850E35] max-h-[80vh] overflow-y-auto">
//               <div className="flex flex-col space-y-3">
//                 {navLinks.map((link) => {
//                   const IconComponent = link.icon;
//                   return (
//                     <Link
//                       key={link.path}
//                       to={link.path}
//                       onClick={closeMobileMenu}
//                       className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg ${
//                         isActive(link.path) ? "text-white bg-[#9A2A4F]" : "text-gray-200"
//                       }`}
//                     >
//                       <IconComponent className="h-4 w-4" />
//                       <span>{link.name}</span>
//                     </Link>
//                   );
//                 })}
                
//                 {/* Collections Section */}
//                 <div className="px-3">
//                   <button
//                     onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                     className="flex items-center justify-between w-full text-sm font-medium text-gray-200 hover:text-white py-2 rounded-lg"
//                   >
//                     <div className="flex items-center space-x-3">
//                       <Layers className="h-4 w-4" />
//                       <span>Collections</span>
//                     </div>
//                     <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                   </button>
                  
//                   {isCollectionsOpen && (
//                     <div className="ml-4 mt-2 space-y-2 border-l-2 border-[#9A2A4F] pl-4">
//                       {/* Collection link that redirects to /collections */}
//                       <button
//                         onClick={handleCollectionClick}
//                         className="flex items-center space-x-3 text-sm text-gray-200 hover:text-white py-2 transition-colors rounded-lg px-2 w-full text-left"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span className="text-xs">View All Collections</span>
//                       </button>
                      
//                       {/* Single collection item */}
//                       {collectionItems.map((item, index) => (
//                         <Link
//                           key={index}
//                           to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                           onClick={closeMobileMenu}
//                           className="flex items-center space-x-3 text-sm text-gray-200 hover:text-white py-2 transition-colors rounded-lg px-2"
//                         >
//                           <Layers className="h-4 w-4" />
//                           <span className="text-xs">{item}</span>
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Contact Link */}
//                 <Link
//                   to="/contact"
//                   onClick={closeMobileMenu}
//                   className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg ${
//                     isActive("/contact") ? "text-white bg-[#9A2A4F]" : "text-gray-200"
//                   }`}
//                 >
//                   <Phone className="h-4 w-4" />
//                   <span>Contact</span>
//                 </Link>

//                 {/* Promotional Messages in Mobile Menu */}
//                 <div className="px-3 pt-4 border-t border-[#9A2A4F]">
//                   <div className="space-y-2">
//                     {promotionalMessages.map((promo, index) => {
//                       const IconComponent = promo.icon;
//                       return (
//                         <div key={index} className="flex items-center space-x-2">
//                           <IconComponent className={`h-4 w-4 ${promo.color}`} />
//                           <span className={`text-xs ${promo.color} font-medium`}>
//                             {promo.text}
//                           </span>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 {/* Social Links in Mobile Menu */}
//                 <div className="px-3 pt-4 border-t border-[#9A2A4F]">
//                   <div className="flex items-center justify-center space-x-6">
//                     {socialLinks.map((social, index) => {
//                       const IconComponent = social.icon;
//                       return (
//                         <a
//                           key={index}
//                           href={social.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-white hover:text-gray-300 transition-colors duration-200 p-2"
//                           aria-label={social.name}
//                           onClick={closeMobileMenu}
//                         >
//                           <IconComponent className="h-5 w-5" />
//                         </a>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Add padding to prevent content from being hidden behind fixed navbar */}
//       <div className="h-20 md:h-24 lg:h-28"></div>
//     </>
//   );
// };

// export default Navbar;






// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers,
//   Images,
//   Facebook,
//   Instagram,
//   MessageCircle,
//   Youtube,
//   MapPin,
//   Mail,
//   Star,
//   Gift,
//   Tag // Added Tag icon for Offers
// } from "lucide-react";

// // Import your logo - adjust the path as needed
// import logo from "../assets/SFM Logo enhanced.png"; // or logo.svg, logo.webp, etc.

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "Gallery", path: "/gallery", icon: Images },
//     { name: "Offers", path: "/offers", icon: Tag }, // Added Offers page
//     { name: "About", path: "/about", icon: Info },
//   ];

//   const collectionItems = [
//     "ADDITIONAL PRODUCT"
//   ];

//   const socialLinks = [
//     { icon: Facebook, url: "https://www.facebook.com/share/1DP7QSDAJB/", name: "Facebook" },
//     { icon: Instagram, url: "https://www.instagram.com/superfamilym?igsh=MW84OHN6dWR1OHFhNA%3D%3D", name: "Instagram" },
//     { icon: MessageCircle, url: "https://wa.me/message/IS5ZG2CRHGYSC1", name: "WhatsApp" },
//     { icon: Youtube, url: "https://www.youtube.com/@SuperFamilyMart", name: "YouTube" },
//   ];

//   // Promotional messages that will scroll automatically
//   const promotionalMessages = [
//     {
//       text: "🎉 Flat 30% Off on All Products!",
//       icon: Gift,
//       color: "text-white-300"
//     },
//     {
//       text: "⭐ Give us your valuable reviews and get 5% Off!",
//       icon: Star,
//       color: "text-white-300"
//     },
//     {
//       text: "🎁 Buy One Get One 10% Off!",
//       icon: Gift,
//       color: "text-white-300"
//     }
//   ];

//   const contactInfo = [
//     {
//       text: "superfamilymart2019@gmail.com",
//       icon: Mail,
//       mobileText: "Email"
//     },
//     {
//       text: "PALHANA ROAD MURATGANJ KAUSHAMBI",
//       icon: MapPin,
//       mobileText: "Address"
//     },
//     {
//       text: "9936370892",
//       icon: Phone,
//       mobileText: "Mobile"
//     }
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   // Auto-scroll promotional messages
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentPromoIndex((prev) => (prev + 1) % promotionalMessages.length);
//     }, 3000); // Change message every 3 seconds

//     return () => clearInterval(interval);
//   }, [promotionalMessages.length]);

//   // Toggle collections dropdown
//   const toggleCollections = () => {
//     setIsCollectionsOpen(!isCollectionsOpen);
//   };

//   // Close collections dropdown
//   const closeCollections = () => {
//     setIsCollectionsOpen(false);
//   };

//   // Close mobile menu
//   const closeMobileMenu = () => {
//     setIsOpen(false);
//     setIsCollectionsOpen(false);
//   };

//   // Handle collection click - redirect to /collections
//   const handleCollectionClick = () => {
//     window.location.href = "/collections";
//     closeCollections();
//     closeMobileMenu();
//   };

//   return (
//     <>
//       {/* Top Bar with Scrolling Promotional Messages and Contact Info */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white py-1 md:py-2 text-xs md:text-sm overflow-hidden">
//         <div className="container mx-auto px-3 md:px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
//             {/* Scrolling Promotional Messages - Left Side */}
//             <div className="flex-1 flex items-center justify-center md:justify-start overflow-hidden">
//               <div className="relative h-5 md:h-6 w-full max-w-md">
//                 {promotionalMessages.map((promo, index) => {
//                   const IconComponent = promo.icon;
//                   return (
//                     <div
//                       key={index}
//                       className={`absolute inset-0 flex items-center justify-center md:justify-start space-x-2 transition-all duration-500 ${
//                         index === currentPromoIndex
//                           ? "translate-y-0 opacity-100"
//                           : "-translate-y-full opacity-0"
//                       }`}
//                     >
//                       <IconComponent className={`h-3 w-3 md:h-4 md:w-4 ${promo.color}`} />
//                       <span className={`font-semibold ${promo.color} text-xs md:text-sm whitespace-nowrap`}>
//                         {promo.text}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Contact Information - Right Side */}
//             <div className="flex items-center gap-3 md:gap-6 text-[10px] md:text-sm">
//               {/* Email */}
//               <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
//                 <Mail className="h-2 w-2 md:h-3 md:w-3" />
//                 <span className="hidden md:inline">superfamilymart2019@gmail.com</span>
//                 <span className="md:hidden text-xs">Email</span>
//               </div>
              
//               {/* Address - hide on mobile, show on tablet and up */}
//               <div className="hidden md:flex items-center space-x-2">
//                 <MapPin className="h-3 w-3" />
//                 <span className="hidden lg:inline">PALHANA ROAD MURATGANJ KAUSHAMBI</span>
//                 <span className="lg:hidden">PALHANA ROAD...</span>
//               </div>

//               {/* Mobile */}
//               <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
//                 <Phone className="h-2 w-2 md:h-3 md:w-3" />
//                 <span className="hidden md:inline">9936370892</span>
//                 <span className="md:hidden text-xs">Mobile</span>
//               </div>

//               {/* Social Links */}
//               <div className="flex items-center space-x-2 md:space-x-3 border-l border-gray-600 pl-2 md:pl-3">
//                 {socialLinks.map((social, index) => {
//                   const IconComponent = social.icon;
//                   return (
//                     <a
//                       key={index}
//                       href={social.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-white hover:text-gray-300 transition-colors duration-200"
//                       aria-label={social.name}
//                     >
//                       <IconComponent className="h-3 w-3 md:h-4 md:w-4" />
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation Bar */}
//       <nav 
//         className="fixed top-6 md:top-8 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border" 
//         style={{ backgroundColor: '#850E35' }}
//       >
//         <div className="container mx-auto px-3 md:px-4">
//           <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
//             {/* Logo with responsive sizing */}
//             <Link to="/" className="flex items-center space-x-2 md:space-x-3" onClick={closeMobileMenu}>
//               <div className="relative">
//                 <img 
//                   src={logo} 
//                   alt="Super Family Mart" 
//                   className="h-24 w-28 sm:h-28 sm:w-32 md:h-32 md:w-36 lg:h-38 lg:w-40 object-contain"
//                 />
//               </div>
//               <span className="font-serif text-2xl font-semibold tracking-tight text-white italic">
//                 Super Family Mart
//               </span>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 ml-6 xl:ml-8">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                       isActive(link.path) ? "text-white" : "text-gray-200"
//                     }`}
//                     onClick={closeCollections}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                     {isActive(link.path) && (
//                       <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                     )}
//                   </Link>
//                 );
//               })}
              
//               {/* Collections Dropdown */}
//               <div 
//                 className="relative"
//                 onMouseEnter={() => setIsCollectionsOpen(true)}
//                 onMouseLeave={() => setIsCollectionsOpen(false)}
//               >
//                 <div className="relative">
//                   <button
//                     onClick={toggleCollections}
//                     className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative py-2 ${
//                       location.pathname.startsWith("/collections") ? "text-white" : "text-gray-200"
//                     }`}
//                   >
//                     <Layers className="h-4 w-4" />
//                     <span>Collections</span>
//                     <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                     {location.pathname.startsWith("/collections") && (
//                       <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                     )}
//                   </button>
//                 </div>
                
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
//                     {/* Single collection item */}
//                     {collectionItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                         onClick={() => {
//                           setIsCollectionsOpen(false);
//                           closeCollections();
//                         }}
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span>{item}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Contact Link */}
//               <Link
//                 to="/contact"
//                 className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                   isActive("/contact") ? "text-white" : "text-gray-200"
//                 }`}
//                 onClick={closeCollections}
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//                 {isActive("/contact") && (
//                   <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                 )}
//               </Link>
//             </div>

//             {/* Tablet Navigation (simplified) */}
//             <div className="hidden md:flex lg:hidden items-center space-x-4 ml-4">
//               {navLinks.slice(0, 4).map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     className={`flex items-center space-x-1 text-xs font-medium transition-colors hover:text-white relative ${
//                       isActive(link.path) ? "text-white" : "text-gray-200"
//                     }`}
//                     onClick={closeCollections}
//                   >
//                     <IconComponent className="h-3 w-3" />
//                     <span className="hidden sm:inline">{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               {/* More dropdown for tablet */}
//               <div className="relative">
//                 <button
//                   onClick={toggleCollections}
//                   className="flex items-center space-x-1 text-xs font-medium text-gray-200 hover:text-white"
//                 >
//                   <span>More</span>
//                   <ChevronDown className="h-3 w-3" />
//                 </button>
                
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full right-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
//                     {/* Remaining nav links */}
//                     {navLinks.slice(4).map((link) => {
//                       const IconComponent = link.icon;
//                       return (
//                         <Link
//                           key={link.path}
//                           to={link.path}
//                           className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                           onClick={closeCollections}
//                         >
//                           <IconComponent className="h-4 w-4" />
//                           <span>{link.name}</span>
//                         </Link>
//                       );
//                     })}
                    
//                     {/* Collection items */}
//                     <div className="border-t border-gray-200 mt-2 pt-2">
//                       <div className="px-3 py-1 text-xs font-semibold text-gray-500">COLLECTIONS</div>
//                       {/* Collection link that redirects to /collections */}
//                       <button
//                         onClick={handleCollectionClick}
//                         className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors w-full text-left"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span className="text-xs">View All Collections</span>
//                       </button>
                      
//                       {/* Single collection item */}
//                       {collectionItems.map((item, index) => (
//                         <Link
//                           key={index}
//                           to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                           className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                           onClick={closeCollections}
//                         >
//                           <Layers className="h-4 w-4" />
//                           <span className="text-xs">{item}</span>
//                         </Link>
//                       ))}
//                     </div>
                    
//                     {/* Contact */}
//                     <Link
//                       to="/contact"
//                       className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors border-t border-gray-200 mt-2"
//                       onClick={closeCollections}
//                     >
//                       <Phone className="h-4 w-4" />
//                       <span>Contact</span>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2 text-white"
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           {isOpen && (
//             <div className="md:hidden py-4 border-t border-[#9A2A4F] bg-[#850E35] max-h-[80vh] overflow-y-auto">
//               <div className="flex flex-col space-y-3">
//                 {navLinks.map((link) => {
//                   const IconComponent = link.icon;
//                   return (
//                     <Link
//                       key={link.path}
//                       to={link.path}
//                       onClick={closeMobileMenu}
//                       className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg ${
//                         isActive(link.path) ? "text-white bg-[#9A2A4F]" : "text-gray-200"
//                       }`}
//                     >
//                       <IconComponent className="h-4 w-4" />
//                       <span>{link.name}</span>
//                     </Link>
//                   );
//                 })}
                
//                 {/* Collections Section */}
//                 <div className="px-3">
//                   <button
//                     onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                     className="flex items-center justify-between w-full text-sm font-medium text-gray-200 hover:text-white py-2 rounded-lg"
//                   >
//                     <div className="flex items-center space-x-3">
//                       <Layers className="h-4 w-4" />
//                       <span>Collections</span>
//                     </div>
//                     <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                   </button>
                  
//                   {isCollectionsOpen && (
//                     <div className="ml-4 mt-2 space-y-2 border-l-2 border-[#9A2A4F] pl-4">
//                       {/* Collection link that redirects to /collections */}
//                       <button
//                         onClick={handleCollectionClick}
//                         className="flex items-center space-x-3 text-sm text-gray-200 hover:text-white py-2 transition-colors rounded-lg px-2 w-full text-left"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span className="text-xs">View All Collections</span>
//                       </button>
                      
//                       {/* Single collection item */}
//                       {collectionItems.map((item, index) => (
//                         <Link
//                           key={index}
//                           to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                           onClick={closeMobileMenu}
//                           className="flex items-center space-x-3 text-sm text-gray-200 hover:text-white py-2 transition-colors rounded-lg px-2"
//                         >
//                           <Layers className="h-4 w-4" />
//                           <span className="text-xs">{item}</span>
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Contact Link */}
//                 <Link
//                   to="/contact"
//                   onClick={closeMobileMenu}
//                   className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg ${
//                     isActive("/contact") ? "text-white bg-[#9A2A4F]" : "text-gray-200"
//                   }`}
//                 >
//                   <Phone className="h-4 w-4" />
//                   <span>Contact</span>
//                 </Link>

//                 {/* Promotional Messages in Mobile Menu */}
//                 <div className="px-3 pt-4 border-t border-[#9A2A4F]">
//                   <div className="space-y-2">
//                     {promotionalMessages.map((promo, index) => {
//                       const IconComponent = promo.icon;
//                       return (
//                         <div key={index} className="flex items-center space-x-2">
//                           <IconComponent className={`h-4 w-4 ${promo.color}`} />
//                           <span className={`text-xs ${promo.color} font-medium`}>
//                             {promo.text}
//                           </span>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 {/* Social Links in Mobile Menu */}
//                 <div className="px-3 pt-4 border-t border-[#9A2A4F]">
//                   <div className="flex items-center justify-center space-x-6">
//                     {socialLinks.map((social, index) => {
//                       const IconComponent = social.icon;
//                       return (
//                         <a
//                           key={index}
//                           href={social.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-white hover:text-gray-300 transition-colors duration-200 p-2"
//                           aria-label={social.name}
//                           onClick={closeMobileMenu}
//                         >
//                           <IconComponent className="h-5 w-5" />
//                         </a>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Add padding to prevent content from being hidden behind fixed navbar */}
//       <div className="h-20 md:h-24 lg:h-28"></div>
//     </>
//   );
// };

// export default Navbar;







// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {  MessageSquareHeart, BadgePercent } from "lucide-react";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers,
//   Images,
//   Facebook,
//   Instagram,
//   MessageCircle,
//   Youtube,
//   MapPin,
//   Mail,
//   Star,
//   Gift,
//   Tag // Added Tag icon for Offers
// } from "lucide-react";

// // Import your logo - adjust the path as needed
// import logo from "../assets/SFM Logo enhanced.png"; // or logo.svg, logo.webp, etc.

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "Gallery", path: "/gallery", icon: Images },
//     { name: "Offers", path: "/offers", icon: Tag }, // Added Offers page
//     { name: "About", path: "/about", icon: Info },
//   ];

//   const collectionItems = [
//     "ADDITIONAL PRODUCT"
//   ];

//   const socialLinks = [
//     { icon: Facebook, url: "https://www.facebook.com/share/1DP7QSDAJB/", name: "Facebook" },
//     { icon: Instagram, url: "https://www.instagram.com/superfamilym?igsh=MW84OHN6dWR1OHFhNA%3D%3D", name: "Instagram" },
//     { icon: MessageCircle, url: "https://wa.me/message/IS5ZG2CRHGYSC1", name: "WhatsApp" },
//     { icon: Youtube, url: "https://www.youtube.com/@SuperFamilyMart", name: "YouTube" },
//   ];

  

//   const contactInfo = [
//     {
//       text: "superfamilymart2019@gmail.com",
//       icon: Mail,
//       mobileText: "Email"
//     },
//     {
//       text: "PALHANA ROAD MURATGANJ KAUSHAMBI",
//       icon: MapPin,
//       mobileText: "Address"
//     },
//     {
//       text: "9936370892",
//       icon: Phone,
//       mobileText: "Mobile"
//     },
//       {
//     text: "Flat 30% Off on All Products!",
//     icon: BadgePercent,
//     mobileText: "Offer"
//   },
  
//   {
//     text: "Buy One Get One 10% Off!",
//     icon: Gift,
//     mobileText: "BOGO"
//   }
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   // Toggle collections dropdown
//   const toggleCollections = () => {
//     setIsCollectionsOpen(!isCollectionsOpen);
//   };

//   // Close collections dropdown
//   const closeCollections = () => {
//     setIsCollectionsOpen(false);
//   };

//   // Close mobile menu
//   const closeMobileMenu = () => {
//     setIsOpen(false);
//     setIsCollectionsOpen(false);
//   };

//   // Handle collection click - redirect to /collections
//   const handleCollectionClick = () => {
//     window.location.href = "/collections";
//     closeCollections();
//     closeMobileMenu();
//   };

//   return (
//     <>
//       {/* Top Bar with Promotional Messages and Contact Info */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white py-1 md:py-2 text-xs md:text-sm overflow-hidden">
//         <div className="container mx-auto px-3 md:px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
//             {/* Promotional Messages - Side by Side */}
//             <div className="flex-1 flex items-center justify-center md:justify-start overflow-hidden">
             
//             </div>

//             {/* Contact Information - Right Side */}
//             <div className="flex items-center gap-3 md:gap-6 text-[10px] md:text-sm">
//               {/* Email */}
//               <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
//                 <Mail className="h-2 w-2 md:h-3 md:w-3" />
//                 <span className="hidden md:inline">superfamilymart2019@gmail.com</span>
//                 <span className="md:hidden text-xs">Email</span>
//               </div>
              
//               {/* Address - hide on mobile, show on tablet and up */}
//               <div className="hidden md:flex items-center space-x-2">
//                 <MapPin className="h-3 w-3" />
//                 <span className="hidden lg:inline">PALHANA ROAD MURATGANJ KAUSHAMBI</span>
//                 <span className="lg:hidden">PALHANA ROAD...</span>
//               </div>

//               {/* Mobile */}
//               <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
//                 <Phone className="h-2 w-2 md:h-3 md:w-3" />
//                 <span className="hidden md:inline">9936370892</span>
//                 <span className="md:hidden text-xs">Mobile</span>
//               </div>

//              <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
//   <BadgePercent className="h-2 w-2 md:h-3 md:w-3" />
//   {/* Desktop text */}
//   <span className="hidden md:inline">Flat 30% Off on All Products!</span>
//   {/* Mobile short text */}
//   <span className="md:hidden text-xs">30% Off</span>
//           </div>

//         <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
//   <Gift className="h-2 w-2 md:h-3 md:w-3" />
//   {/* Desktop text */}
//   <span className="hidden md:inline">Buy One Get One 10% Off!</span>
//   {/* Mobile short text */}
//   <span className="md:hidden text-xs">BOGO Offer</span>
//         </div>

//               {/* Social Links */}
//               <div className="flex items-center space-x-2 md:space-x-3 border-l border-gray-600 pl-2 md:pl-3">
//                 {socialLinks.map((social, index) => {
//                   const IconComponent = social.icon;
//                   return (
//                     <a
//                       key={index}
//                       href={social.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-white hover:text-gray-300 transition-colors duration-200"
//                       aria-label={social.name}
//                     >
//                       <IconComponent className="h-3 w-3 md:h-4 md:w-4" />
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation Bar */}
//       <nav 
//         className="fixed top-6 md:top-8 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border" 
//         style={{ backgroundColor: '#850E35' }}
//       >
//         <div className="container mx-auto px-3 md:px-4">
//           <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
//             {/* Logo with responsive sizing */}
//             <Link to="/" className="flex items-center space-x-2 md:space-x-3" onClick={closeMobileMenu}>
//               <div className="relative">
//                 <img 
//                   src={logo} 
//                   alt="Super Family Mart" 
//                   className="h-24 w-28 sm:h-28 sm:w-32 md:h-32 md:w-36 lg:h-38 lg:w-40 object-contain"
//                 />
//               </div>
//               <span className="font-serif text-2xl font-semibold tracking-tight text-white italic">
//                 Super Family Mart
//               </span>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 ml-6 xl:ml-8">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                       isActive(link.path) ? "text-white" : "text-gray-200"
//                     }`}
//                     onClick={closeCollections}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                     {isActive(link.path) && (
//                       <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                     )}
//                   </Link>
//                 );
//               })}
              
//               {/* Collections Dropdown */}
//               <div 
//                 className="relative"
//                 onMouseEnter={() => setIsCollectionsOpen(true)}
//                 onMouseLeave={() => setIsCollectionsOpen(false)}
//               >
//                 <div className="relative">
//                   <button
//                     onClick={toggleCollections}
//                     className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative py-2 ${
//                       location.pathname.startsWith("/collections") ? "text-white" : "text-gray-200"
//                     }`}
//                   >
//                     <Layers className="h-4 w-4" />
//                     <span>Collections</span>
//                     <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                     {location.pathname.startsWith("/collections") && (
//                       <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                     )}
//                   </button>
//                 </div>
                
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
//                     {/* Single collection item */}
//                     {collectionItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                         onClick={() => {
//                           setIsCollectionsOpen(false);
//                           closeCollections();
//                         }}
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span>{item}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Contact Link */}
//               <Link
//                 to="/contact"
//                 className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                   isActive("/contact") ? "text-white" : "text-gray-200"
//                 }`}
//                 onClick={closeCollections}
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//                 {isActive("/contact") && (
//                   <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                 )}
//               </Link>
//             </div>

//             {/* Tablet Navigation (simplified) */}
//             <div className="hidden md:flex lg:hidden items-center space-x-4 ml-4">
//               {navLinks.slice(0, 4).map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     className={`flex items-center space-x-1 text-xs font-medium transition-colors hover:text-white relative ${
//                       isActive(link.path) ? "text-white" : "text-gray-200"
//                     }`}
//                     onClick={closeCollections}
//                   >
//                     <IconComponent className="h-3 w-3" />
//                     <span className="hidden sm:inline">{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               {/* More dropdown for tablet */}
//               <div className="relative">
//                 <button
//                   onClick={toggleCollections}
//                   className="flex items-center space-x-1 text-xs font-medium text-gray-200 hover:text-white"
//                 >
//                   <span>More</span>
//                   <ChevronDown className="h-3 w-3" />
//                 </button>
                
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full right-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
//                     {/* Remaining nav links */}
//                     {navLinks.slice(4).map((link) => {
//                       const IconComponent = link.icon;
//                       return (
//                         <Link
//                           key={link.path}
//                           to={link.path}
//                           className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                           onClick={closeCollections}
//                         >
//                           <IconComponent className="h-4 w-4" />
//                           <span>{link.name}</span>
//                         </Link>
//                       );
//                     })}
                    
//                     {/* Collection items */}
//                     <div className="border-t border-gray-200 mt-2 pt-2">
//                       <div className="px-3 py-1 text-xs font-semibold text-gray-500">COLLECTIONS</div>
//                       {/* Collection link that redirects to /collections */}
//                       <button
//                         onClick={handleCollectionClick}
//                         className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors w-full text-left"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span className="text-xs">View All Collections</span>
//                       </button>
                      
//                       {/* Single collection item */}
//                       {collectionItems.map((item, index) => (
//                         <Link
//                           key={index}
//                           to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                           className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                           onClick={closeCollections}
//                         >
//                           <Layers className="h-4 w-4" />
//                           <span className="text-xs">{item}</span>
//                         </Link>
//                       ))}
//                     </div>
                    
//                     {/* Contact */}
//                     <Link
//                       to="/contact"
//                       className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors border-t border-gray-200 mt-2"
//                       onClick={closeCollections}
//                     >
//                       <Phone className="h-4 w-4" />
//                       <span>Contact</span>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2 text-white"
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           {isOpen && (
//             <div className="md:hidden py-4 border-t border-[#9A2A4F] bg-[#850E35] max-h-[80vh] overflow-y-auto">
//               <div className="flex flex-col space-y-3">
//                 {navLinks.map((link) => {
//                   const IconComponent = link.icon;
//                   return (
//                     <Link
//                       key={link.path}
//                       to={link.path}
//                       onClick={closeMobileMenu}
//                       className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg ${
//                         isActive(link.path) ? "text-white bg-[#9A2A4F]" : "text-gray-200"
//                       }`}
//                     >
//                       <IconComponent className="h-4 w-4" />
//                       <span>{link.name}</span>
//                     </Link>
//                   );
//                 })}
                
//                 {/* Collections Section */}
//                 <div className="px-3">
//                   <button
//                     onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                     className="flex items-center justify-between w-full text-sm font-medium text-gray-200 hover:text-white py-2 rounded-lg"
//                   >
//                     <div className="flex items-center space-x-3">
//                       <Layers className="h-4 w-4" />
//                       <span>Collections</span>
//                     </div>
//                     <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                   </button>
                  
//                   {isCollectionsOpen && (
//                     <div className="ml-4 mt-2 space-y-2 border-l-2 border-[#9A2A4F] pl-4">
//                       {/* Collection link that redirects to /collections */}
//                       <button
//                         onClick={handleCollectionClick}
//                         className="flex items-center space-x-3 text-sm text-gray-200 hover:text-white py-2 transition-colors rounded-lg px-2 w-full text-left"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span className="text-xs">View All Collections</span>
//                       </button>
                      
//                       {/* Single collection item */}
//                       {collectionItems.map((item, index) => (
//                         <Link
//                           key={index}
//                           to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                           onClick={closeMobileMenu}
//                           className="flex items-center space-x-3 text-sm text-gray-200 hover:text-white py-2 transition-colors rounded-lg px-2"
//                         >
//                           <Layers className="h-4 w-4" />
//                           <span className="text-xs">{item}</span>
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Contact Link */}
//                 <Link
//                   to="/contact"
//                   onClick={closeMobileMenu}
//                   className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg ${
//                     isActive("/contact") ? "text-white bg-[#9A2A4F]" : "text-gray-200"
//                   }`}
//                 >
//                   <Phone className="h-4 w-4" />
//                   <span>Contact</span>
//                 </Link>

                

//                 {/* Social Links in Mobile Menu */}
//                 <div className="px-3 pt-4 border-t border-[#9A2A4F]">
//                   <div className="flex items-center justify-center space-x-6">
//                     {socialLinks.map((social, index) => {
//                       const IconComponent = social.icon;
//                       return (
//                         <a
//                           key={index}
//                           href={social.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-white hover:text-gray-300 transition-colors duration-200 p-2"
//                           aria-label={social.name}
//                           onClick={closeMobileMenu}
//                         >
//                           <IconComponent className="h-5 w-5" />
//                         </a>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Add padding to prevent content from being hidden behind fixed navbar */}
//       <div className="h-20 md:h-24 lg:h-28"></div>
//     </>
//   );
// };

// export default Navbar;








// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { MessageSquareHeart, BadgePercent } from "lucide-react";
// import { 
//   Menu, 
//   X, 
//   ShoppingBag, 
//   ChevronDown, 
//   Home, 
//   Shirt, 
//   Users, 
//   Baby, 
//   Info, 
//   Phone, 
//   Layers,
//   Images,
//   Facebook,
//   Instagram,
//   MessageCircle,
//   Youtube,
//   MapPin,
//   Mail,
//   Star,
//   Gift,
//   Tag
// } from "lucide-react";

// // Import your logo - adjust the path as needed
// import logo from "../assets/SFM Logo enhanced.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
//   const location = useLocation();

//   // Complete scrolling content with all fields
//   const scrollingContent = [
//     // First set of content
//     {
//       id: 1,
//       content: (
//         <div className="flex items-center space-x-4 md:space-x-8">
//           {/* Email */}
//           <div className="flex items-center space-x-1 md:space-x-2">
//             <Mail className="h-2 w-2 md:h-3 md:w-3" />
//             <span className="hidden md:inline">superfamilymart2019@gmail.com</span>
//             <span className="md:hidden text-xs">Email</span>
//           </div>
          
//           {/* Address */}
//           <div className="hidden md:flex items-center space-x-2">
//             <MapPin className="h-3 w-3" />
//             <span className="hidden lg:inline">PALHANA ROAD MURATGANJ KAUSHAMBI</span>
//             <span className="lg:hidden">PALHANA ROAD...</span>
//           </div>

//           {/* Mobile */}
//           <div className="flex items-center space-x-1 md:space-x-2">
//             <Phone className="h-2 w-2 md:h-3 md:w-3" />
//             <span className="hidden md:inline">9936370892</span>
//             <span className="md:hidden text-xs">Mobile</span>
//           </div>
//         </div>
//       )
//     },
//     // Second set - Promotional offers
//     {
//       id: 2,
//       content: (
//         <div className="flex items-center space-x-4 md:space-x-8">
//           {/* Offer 1 */}
//           <div className="flex items-center space-x-1 md:space-x-2">
//             <BadgePercent className="h-2 w-2 md:h-3 md:w-3" />
//             <span className="hidden md:inline">Flat 30% Off on All Products!</span>
//             <span className="md:hidden text-xs">30% Off</span>
//           </div>

//           {/* Offer 2 */}
//           <div className="flex items-center space-x-1 md:space-x-2">
//             <Gift className="h-2 w-2 md:h-3 md:w-3" />
//             <span className="hidden md:inline">Buy One Get One 10% Off!</span>
//             <span className="md:hidden text-xs">BOGO Offer</span>
//           </div>

//           {/* Free Shipping */}
//           <div className="flex items-center space-x-1 md:space-x-2">
//             <ShoppingBag className="h-2 w-2 md:h-3 md:w-3" />
//             <span className="hidden md:inline">Free Shipping on Orders Over ₹999!</span>
//             <span className="md:hidden text-xs">Free Shipping</span>
//           </div>
//         </div>
//       )
//     },
//     // Third set - Social media and additional info
//     {
//       id: 3,
//       content: (
//         <div className="flex items-center space-x-4 md:space-x-8">
//           {/* Social Links */}
//           <div className="flex items-center space-x-2 md:space-x-3">
//             {[
//               { icon: Facebook, url: "https://www.facebook.com/share/1DP7QSDAJB/", name: "Facebook" },
//               { icon: Instagram, url: "https://www.instagram.com/superfamilym?igsh=MW84OHN6dWR1OHFhNA%3D%3D", name: "Instagram" },
//               { icon: MessageCircle, url: "https://wa.me/message/IS5ZG2CRHGYSC1", name: "WhatsApp" },
//               { icon: Youtube, url: "https://www.youtube.com/@SuperFamilyMart", name: "YouTube" },
//             ].map((social, index) => {
//               const IconComponent = social.icon;
//               return (
//                 <a
//                   key={index}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-white hover:text-gray-300 transition-colors duration-200"
//                   aria-label={social.name}
//                 >
//                   <IconComponent className="h-3 w-3 md:h-4 md:w-4" />
//                 </a>
//               );
//             })}
//           </div>

//           {/* Additional Promo */}
//           <div className="flex items-center space-x-1 md:space-x-2">
//             <Star className="h-2 w-2 md:h-3 md:w-3" />
//             <span className="hidden md:inline">New Arrivals Every Week!</span>
//             <span className="md:hidden text-xs">New Arrivals</span>
//           </div>
//         </div>
//       )
//     }
//   ];

//   const navLinks = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "Men", path: "/men", icon: Shirt },
//     { name: "Women", path: "/women", icon: Users },
//     { name: "Kids", path: "/kids", icon: Baby },
//     { name: "Gallery", path: "/gallery", icon: Images },
//     { name: "Offers", path: "/offers", icon: Tag },
//     { name: "About", path: "/about", icon: Info },
//   ];

//   const collectionItems = [
//     "ADDITIONAL PRODUCT"
//   ];

//   const socialLinks = [
//     { icon: Facebook, url: "https://www.facebook.com/share/1DP7QSDAJB/", name: "Facebook" },
//     { icon: Instagram, url: "https://www.instagram.com/superfamilym?igsh=MW84OHN6dWR1OHFhNA%3D%3D", name: "Instagram" },
//     { icon: MessageCircle, url: "https://wa.me/message/IS5ZG2CRHGYSC1", name: "WhatsApp" },
//     { icon: Youtube, url: "https://www.youtube.com/@SuperFamilyMart", name: "YouTube" },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   // Toggle collections dropdown
//   const toggleCollections = () => {
//     setIsCollectionsOpen(!isCollectionsOpen);
//   };

//   // Close collections dropdown
//   const closeCollections = () => {
//     setIsCollectionsOpen(false);
//   };

//   // Close mobile menu
//   const closeMobileMenu = () => {
//     setIsOpen(false);
//     setIsCollectionsOpen(false);
//   };

//   // Handle collection click - redirect to /collections
//   const handleCollectionClick = () => {
//     window.location.href = "/collections";
//     closeCollections();
//     closeMobileMenu();
//   };

//   return (
//     <>
//       {/* Top Bar with Auto-scrolling Content */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white py-1 md:py-2 text-xs md:text-sm overflow-hidden">
//         <div className="container mx-auto px-3 md:px-4">
//           <div className="flex items-center justify-center overflow-hidden relative">
//             {/* Auto-scrolling container */}
//             <div className="scrolling-container w-full overflow-hidden">
//               <div className="scrolling-content whitespace-nowrap animate-scroll">
//                 {/* Original content */}
//                 {scrollingContent.map((item) => (
//                   <div key={item.id} className="inline-block mx-4 md:mx-8">
//                     {item.content}
//                   </div>
//                 ))}
//                 {/* Duplicate for seamless loop */}
//                 {scrollingContent.map((item) => (
//                   <div key={`dup-${item.id}`} className="inline-block mx-4 md:mx-8">
//                     {item.content}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation Bar */}
//       <nav 
//         className="fixed top-6 md:top-8 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border" 
//         style={{ backgroundColor: '#850E35' }}
//       >
//         <div className="container mx-auto px-3 md:px-4">
//           <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
//             {/* Logo with responsive sizing */}
//             <Link to="/" className="flex items-center space-x-2 md:space-x-3" onClick={closeMobileMenu}>
//               <div className="relative">
//                 <img 
//                   src={logo} 
//                   alt="Super Family Mart" 
//                   className="h-24 w-28 sm:h-28 sm:w-32 md:h-32 md:w-36 lg:h-38 lg:w-40 object-contain"
//                 />
//               </div>
//               <span className="font-serif text-2xl font-semibold tracking-tight text-white italic">
//                 Super Family Mart
//               </span>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 ml-6 xl:ml-8">
//               {navLinks.map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                       isActive(link.path) ? "text-white" : "text-gray-200"
//                     }`}
//                     onClick={closeCollections}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     <span>{link.name}</span>
//                     {isActive(link.path) && (
//                       <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                     )}
//                   </Link>
//                 );
//               })}
              
//               {/* Collections Dropdown */}
//               <div 
//                 className="relative"
//                 onMouseEnter={() => setIsCollectionsOpen(true)}
//                 onMouseLeave={() => setIsCollectionsOpen(false)}
//               >
//                 <div className="relative">
//                   <button
//                     onClick={toggleCollections}
//                     className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative py-2 ${
//                       location.pathname.startsWith("/collections") ? "text-white" : "text-gray-200"
//                     }`}
//                   >
//                     <Layers className="h-4 w-4" />
//                     <span>Collections</span>
//                     <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                     {location.pathname.startsWith("/collections") && (
//                       <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                     )}
//                   </button>
//                 </div>
                
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
//                     {/* Single collection item */}
//                     {collectionItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                         onClick={() => {
//                           setIsCollectionsOpen(false);
//                           closeCollections();
//                         }}
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span>{item}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Contact Link */}
//               <Link
//                 to="/contact"
//                 className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
//                   isActive("/contact") ? "text-white" : "text-gray-200"
//                 }`}
//                 onClick={closeCollections}
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Contact</span>
//                 {isActive("/contact") && (
//                   <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
//                 )}
//               </Link>
//             </div>

//             {/* Tablet Navigation (simplified) */}
//             <div className="hidden md:flex lg:hidden items-center space-x-4 ml-4">
//               {navLinks.slice(0, 4).map((link) => {
//                 const IconComponent = link.icon;
//                 return (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     className={`flex items-center space-x-1 text-xs font-medium transition-colors hover:text-white relative ${
//                       isActive(link.path) ? "text-white" : "text-gray-200"
//                     }`}
//                     onClick={closeCollections}
//                   >
//                     <IconComponent className="h-3 w-3" />
//                     <span className="hidden sm:inline">{link.name}</span>
//                   </Link>
//                 );
//               })}
              
//               {/* More dropdown for tablet */}
//               <div className="relative">
//                 <button
//                   onClick={toggleCollections}
//                   className="flex items-center space-x-1 text-xs font-medium text-gray-200 hover:text-white"
//                 >
//                   <span>More</span>
//                   <ChevronDown className="h-3 w-3" />
//                 </button>
                
//                 {isCollectionsOpen && (
//                   <div className="absolute top-full right-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
//                     {/* Remaining nav links */}
//                     {navLinks.slice(4).map((link) => {
//                       const IconComponent = link.icon;
//                       return (
//                         <Link
//                           key={link.path}
//                           to={link.path}
//                           className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                           onClick={closeCollections}
//                         >
//                           <IconComponent className="h-4 w-4" />
//                           <span>{link.name}</span>
//                         </Link>
//                       );
//                     })}
                    
//                     {/* Collection items */}
//                     <div className="border-t border-gray-200 mt-2 pt-2">
//                       <div className="px-3 py-1 text-xs font-semibold text-gray-500">COLLECTIONS</div>
//                       {/* Collection link that redirects to /collections */}
//                       <button
//                         onClick={handleCollectionClick}
//                         className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors w-full text-left"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span className="text-xs">View All Collections</span>
//                       </button>
                      
//                       {/* Single collection item */}
//                       {collectionItems.map((item, index) => (
//                         <Link
//                           key={index}
//                           to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                           className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
//                           onClick={closeCollections}
//                         >
//                           <Layers className="h-4 w-4" />
//                           <span className="text-xs">{item}</span>
//                         </Link>
//                       ))}
//                     </div>
                    
//                     {/* Contact */}
//                     <Link
//                       to="/contact"
//                       className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors border-t border-gray-200 mt-2"
//                       onClick={closeCollections}
//                     >
//                       <Phone className="h-4 w-4" />
//                       <span>Contact</span>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2 text-white"
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           {isOpen && (
//             <div className="md:hidden py-4 border-t border-[#9A2A4F] bg-[#850E35] max-h-[80vh] overflow-y-auto">
//               <div className="flex flex-col space-y-3">
//                 {navLinks.map((link) => {
//                   const IconComponent = link.icon;
//                   return (
//                     <Link
//                       key={link.path}
//                       to={link.path}
//                       onClick={closeMobileMenu}
//                       className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg ${
//                         isActive(link.path) ? "text-white bg-[#9A2A4F]" : "text-gray-200"
//                       }`}
//                     >
//                       <IconComponent className="h-4 w-4" />
//                       <span>{link.name}</span>
//                     </Link>
//                   );
//                 })}
                
//                 {/* Collections Section */}
//                 <div className="px-3">
//                   <button
//                     onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
//                     className="flex items-center justify-between w-full text-sm font-medium text-gray-200 hover:text-white py-2 rounded-lg"
//                   >
//                     <div className="flex items-center space-x-3">
//                       <Layers className="h-4 w-4" />
//                       <span>Collections</span>
//                     </div>
//                     <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
//                   </button>
                  
//                   {isCollectionsOpen && (
//                     <div className="ml-4 mt-2 space-y-2 border-l-2 border-[#9A2A4F] pl-4">
//                       {/* Collection link that redirects to /collections */}
//                       <button
//                         onClick={handleCollectionClick}
//                         className="flex items-center space-x-3 text-sm text-gray-200 hover:text-white py-2 transition-colors rounded-lg px-2 w-full text-left"
//                       >
//                         <Layers className="h-4 w-4" />
//                         <span className="text-xs">View All Collections</span>
//                       </button>
                      
//                       {/* Single collection item */}
//                       {collectionItems.map((item, index) => (
//                         <Link
//                           key={index}
//                           to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                           onClick={closeMobileMenu}
//                           className="flex items-center space-x-3 text-sm text-gray-200 hover:text-white py-2 transition-colors rounded-lg px-2"
//                         >
//                           <Layers className="h-4 w-4" />
//                           <span className="text-xs">{item}</span>
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Contact Link */}
//                 <Link
//                   to="/contact"
//                   onClick={closeMobileMenu}
//                   className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg ${
//                     isActive("/contact") ? "text-white bg-[#9A2A4F]" : "text-gray-200"
//                   }`}
//                 >
//                   <Phone className="h-4 w-4" />
//                   <span>Contact</span>
//                 </Link>

//                 {/* Social Links in Mobile Menu */}
//                 <div className="px-3 pt-4 border-t border-[#9A2A4F]">
//                   <div className="flex items-center justify-center space-x-6">
//                     {socialLinks.map((social, index) => {
//                       const IconComponent = social.icon;
//                       return (
//                         <a
//                           key={index}
//                           href={social.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-white hover:text-gray-300 transition-colors duration-200 p-2"
//                           aria-label={social.name}
//                           onClick={closeMobileMenu}
//                         >
//                           <IconComponent className="h-5 w-5" />
//                         </a>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Add padding to prevent content from being hidden behind fixed navbar */}
//       <div className="h-20 md:h-24 lg:h-28"></div>

//       {/* Add CSS for scrolling animation */}
//       <style >{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
        
//         .scrolling-container {
//           overflow: hidden;
//           position: relative;
//           width: 100%;
//         }
        
//         .scrolling-content {
//           display: inline-block;
//           animation: scroll 40s linear infinite;
//           white-space: nowrap;
//         }
        
//         .scrolling-content:hover {
//           animation-play-state: paused;
//         }
        
//         /* Responsive adjustments */
//         @media (max-width: 768px) {
//           .scrolling-content {
//             animation: scroll 30s linear infinite;
//           }
//         }
        
//         @media (max-width: 480px) {
//           .scrolling-content {
//             animation: scroll 25s linear infinite;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;








import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageSquareHeart, BadgePercent, PartyPopper } from "lucide-react";
import { 
  Menu, 
  X, 
  ShoppingBag, 
  ChevronDown, 
  Home, 
  Shirt, 
  Users, 
  Baby, 
  Info, 
  Phone, 
  Layers,
  Images,
  Facebook,
  Instagram,
  MessageCircle,
  Youtube,
  MapPin,
  Mail,
  Star,
  Gift,
  Tag
} from "lucide-react";

// Import your logo - adjust the path as needed
import logo from "../assets/SFM Logo enhanced.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const location = useLocation();

  // Complete scrolling content with all fields
  const scrollingContent = [
    // First set of content
    {
      id: 1,
      content: (
        <div className="flex items-center space-x-4 md:space-x-8">
          {/* Email */}
          <div className="flex items-center space-x-1 md:space-x-2">
            <Mail className="h-2 w-2 md:h-3 md:w-3" />
            <span className="hidden md:inline">superfamilymart2019@gmail.com</span>
            <span className="md:hidden text-xs">Email</span>
          </div>
          
          {/* Address */}
          <div className="hidden md:flex items-center space-x-2">
            <MapPin className="h-3 w-3" />
            <span className="hidden lg:inline">PALHANA ROAD MURATGANJ KAUSHAMBI</span>
            <span className="lg:hidden">PALHANA ROAD...</span>
          </div>

          {/* Mobile */}
          <div className="flex items-center space-x-1 md:space-x-2">
            <Phone className="h-2 w-2 md:h-3 md:w-3" />
            <span className="hidden md:inline">9936370892</span>
            <span className="md:hidden text-xs">Mobile</span>
          </div>
        </div>
      )
    },
    // Second set - Promotional offers
    {
      id: 2,
      content: (
        <div className="flex items-center space-x-4 md:space-x-8">
          {/* Offer 1 */}
        <div className="flex items-center space-x-1 md:space-x-2">
  <PartyPopper className="h-2 w-2 md:h-3 md:w-3" />
  <span className="hidden md:inline"> Showroom 7th Anniversary Celebration</span>
  <span className="md:hidden text-xs">30% Off</span>
    </div>


          {/* Offer 2 */}
          <div className="flex items-center space-x-1 md:space-x-2">
            <Gift className="h-2 w-2 md:h-3 md:w-3" />
            <span className="hidden md:inline">Sales Start From 20 Dec to 05 Jan 2026</span>
            <span className="md:hidden text-xs">BOGO Offer</span>
          </div>

          {/* Free Shipping */}
          <div className="flex items-center space-x-1 md:space-x-2">
            <ShoppingBag className="h-2 w-2 md:h-3 md:w-3" />
            <span className="hidden md:inline">Discount Up To 10% to 50%</span>
            <span className="md:hidden text-xs">Free Shipping</span>
          </div>

            <div className="flex items-center space-x-1 md:space-x-2">
            <Star className="h-2 w-2 md:h-3 md:w-3" />
            <span className="hidden md:inline">Buy 1 Get 1  Free</span>
            <span className="md:hidden text-xs">New Arrivals</span>
          </div>
        </div>
      )
    },
    // Third set - Social media and additional info
    {
      id: 3,
      content: (
        <div className="flex items-center space-x-4 md:space-x-8">
          {/* Social Links */}
          <div className="flex items-center space-x-2 md:space-x-3">
            {[
              { icon: Facebook, url: "https://www.facebook.com/share/1DP7QSDAJB/", name: "Facebook" },
              { icon: Instagram, url: "https://www.instagram.com/superfamilym?igsh=MW84OHN6dWR1OHFhNA%3D%3D", name: "Instagram" },
              { icon: MessageCircle, url: "https://wa.me/message/IS5ZG2CRHGYSC1", name: "WhatsApp" },
              { icon: Youtube, url: "https://www.youtube.com/@SuperFamilyMart", name: "YouTube" },
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <IconComponent className="h-3 w-3 md:h-4 md:w-4" />
                </a>
              );
            })}
          </div>

       
        
        </div>
      )
    }
  ];

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Men", path: "/men", icon: Shirt },
    { name: "Women", path: "/women", icon: Users },
    { name: "Kids", path: "/kids", icon: Baby },
    { name: "Gallery", path: "/gallery", icon: Images },
    { name: "Offers", path: "/offers", icon: Tag },
    { name: "About", path: "/about", icon: Info },
  ];

  const collectionItems = [
    "ADDITIONAL PRODUCT"
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/share/1DP7QSDAJB/", name: "Facebook" },
    { icon: Instagram, url: "https://www.instagram.com/superfamilym?igsh=MW84OHN6dWR1OHFhNA%3D%3D", name: "Instagram" },
    { icon: MessageCircle, url: "https://wa.me/message/IS5ZG2CRHGYSC1", name: "WhatsApp" },
    { icon: Youtube, url: "https://www.youtube.com/@SuperFamilyMart", name: "YouTube" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Toggle collections dropdown
  const toggleCollections = () => {
    setIsCollectionsOpen(!isCollectionsOpen);
  };

  // Close collections dropdown
  const closeCollections = () => {
    setIsCollectionsOpen(false);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsCollectionsOpen(false);
  };

  // Handle collection click - redirect to /collections
  const handleCollectionClick = () => {
    window.location.href = "/collections";
    closeCollections();
    closeMobileMenu();
  };

  return (
    <>
      {/* Top Bar with Auto-scrolling Content */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white py-1 md:py-2 text-xs md:text-sm overflow-hidden">
        <div className="container mx-auto px-3 md:px-4">
          <div className="flex items-center justify-center overflow-hidden relative">
            {/* Auto-scrolling container */}
            <div className="scrolling-container w-full overflow-hidden">
              <div className="scrolling-content whitespace-nowrap animate-scroll">
                {/* Original content */}
                {scrollingContent.map((item) => (
                  <div key={item.id} className="inline-block mx-4 md:mx-8">
                    {item.content}
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {scrollingContent.map((item) => (
                  <div key={`dup-${item.id}`} className="inline-block mx-4 md:mx-8">
                    {item.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className="fixed top-6 md:top-8 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border" 
        style={{ backgroundColor: '#850E35' }}
      >
        <div className="container mx-auto px-3 md:px-4">
          <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
            {/* Logo with responsive sizing */}
            <Link to="/" className="flex items-center space-x-2 md:space-x-3" onClick={closeMobileMenu}>
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Super Family Mart" 
                  className="h-24 w-28 sm:h-28 sm:w-32 md:h-32 md:w-36 lg:h-38 lg:w-40 object-contain"
                />
              </div>
              <span className="font-serif text-2xl font-semibold tracking-tight text-white italic">
                Super Family Mart
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 ml-6 xl:ml-8">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
                      isActive(link.path) ? "text-white" : "text-gray-200"
                    }`}
                    onClick={closeCollections}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{link.name}</span>
                    {isActive(link.path) && (
                      <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
                    )}
                  </Link>
                );
              })}
              
              {/* Collections Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsCollectionsOpen(true)}
                onMouseLeave={() => setIsCollectionsOpen(false)}
              >
                <div className="relative">
                  <button
                    onClick={toggleCollections}
                    className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative py-2 ${
                      location.pathname.startsWith("/collections") ? "text-white" : "text-gray-200"
                    }`}
                  >
                    <Layers className="h-4 w-4" />
                    <span>Collections</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
                    {location.pathname.startsWith("/collections") && (
                      <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
                    )}
                  </button>
                </div>
                
                {isCollectionsOpen && (
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    {/* Single collection item */}
                    {collectionItems.map((item, index) => (
                      <Link
                        key={index}
                        to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
                        onClick={() => {
                          setIsCollectionsOpen(false);
                          closeCollections();
                        }}
                      >
                        <Layers className="h-4 w-4" />
                        <span>{item}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Link */}
              <Link
                to="/contact"
                className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white relative ${
                  isActive("/contact") ? "text-white" : "text-gray-200"
                }`}
                onClick={closeCollections}
              >
                <Phone className="h-4 w-4" />
                <span>Contact</span>
                {isActive("/contact") && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-white" />
                )}
              </Link>
            </div>

            {/* Tablet Navigation (simplified) */}
            <div className="hidden md:flex lg:hidden items-center space-x-4 ml-4">
              {navLinks.slice(0, 4).map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center space-x-1 text-xs font-medium transition-colors hover:text-white relative ${
                      isActive(link.path) ? "text-white" : "text-gray-200"
                    }`}
                    onClick={closeCollections}
                  >
                    <IconComponent className="h-3 w-3" />
                    <span className="hidden sm:inline">{link.name}</span>
                  </Link>
                );
              })}
              
              {/* More dropdown for tablet */}
              <div className="relative">
                <button
                  onClick={toggleCollections}
                  className="flex items-center space-x-1 text-xs font-medium text-gray-200 hover:text-white"
                >
                  <span>More</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
                
                {isCollectionsOpen && (
                  <div className="absolute top-full right-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    {/* Remaining nav links */}
                    {navLinks.slice(4).map((link) => {
                      const IconComponent = link.icon;
                      return (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
                          onClick={closeCollections}
                        >
                          <IconComponent className="h-4 w-4" />
                          <span>{link.name}</span>
                        </Link>
                      );
                    })}
                    
                    {/* Collection items */}
                    <div className="border-t border-gray-200 mt-2 pt-2">
                      <div className="px-3 py-1 text-xs font-semibold text-gray-500">COLLECTIONS</div>
                      {/* Collection link that redirects to /collections */}
                      <button
                        onClick={handleCollectionClick}
                        className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors w-full text-left"
                      >
                        <Layers className="h-4 w-4" />
                        <span className="text-xs">View All Collections</span>
                      </button>
                      
                      {/* Single collection item */}
                      {collectionItems.map((item, index) => (
                        <Link
                          key={index}
                          to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors"
                          onClick={closeCollections}
                        >
                          <Layers className="h-4 w-4" />
                          <span className="text-xs">{item}</span>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Contact */}
                    <Link
                      to="/contact"
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#850E35] hover:bg-gray-100 transition-colors border-t border-gray-200 mt-2"
                      onClick={closeCollections}
                    >
                      <Phone className="h-4 w-4" />
                      <span>Contact</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-[#9A2A4F] bg-[#850E35] max-h-[80vh] overflow-y-auto">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={closeMobileMenu}
                      className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg ${
                        isActive(link.path) ? "text-white bg-[#9A2A4F]" : "text-gray-200"
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
                
                {/* Collections Section */}
                <div className="px-3">
                  <button
                    onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                    className="flex items-center justify-between w-full text-sm font-medium text-gray-200 hover:text-white py-2 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <Layers className="h-4 w-4" />
                      <span>Collections</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  {isCollectionsOpen && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-[#9A2A4F] pl-4">
                      {/* Collection link that redirects to /collections */}
                      <button
                        onClick={handleCollectionClick}
                        className="flex items-center space-x-3 text-sm text-gray-200 hover:text-white py-2 transition-colors rounded-lg px-2 w-full text-left"
                      >
                        <Layers className="h-4 w-4" />
                        <span className="text-xs">View All Collections</span>
                      </button>
                      
                      {/* Single collection item */}
                      {collectionItems.map((item, index) => (
                        <Link
                          key={index}
                          to={`/collections/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={closeMobileMenu}
                          className="flex items-center space-x-3 text-sm text-gray-200 hover:text-white py-2 transition-colors rounded-lg px-2"
                        >
                          <Layers className="h-4 w-4" />
                          <span className="text-xs">{item}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Contact Link */}
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-lg ${
                    isActive("/contact") ? "text-white bg-[#9A2A4F]" : "text-gray-200"
                  }`}
                >
                  <Phone className="h-4 w-4" />
                  <span>Contact</span>
                </Link>

                {/* Social Links in Mobile Menu */}
                <div className="px-3 pt-4 border-t border-[#9A2A4F]">
                  <div className="flex items-center justify-center space-x-6">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-300 transition-colors duration-200 p-2"
                          aria-label={social.name}
                          onClick={closeMobileMenu}
                        >
                          <IconComponent className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Add padding to prevent content from being hidden behind fixed navbar */}
      <div className="h-20 md:h-24 lg:h-28"></div>

      {/* Add CSS for scrolling animation */}
      <style >{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .scrolling-container {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        
        .scrolling-content {
          display: inline-block;
          animation: scroll 40s linear infinite;
          white-space: nowrap;
        }
        
        .scrolling-content:hover {
          animation-play-state: paused;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .scrolling-content {
            animation: scroll 30s linear infinite;
          }
        }
        
        @media (max-width: 480px) {
          .scrolling-content {
            animation: scroll 25s linear infinite;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;