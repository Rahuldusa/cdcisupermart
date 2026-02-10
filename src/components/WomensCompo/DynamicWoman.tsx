import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, X, ChevronLeft, ChevronRight } from "lucide-react";
import ProductFrame from "@/ProductFrame/ProductFrame";
import { baseURL } from "@/Api/Baseurl";

interface Product {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
  price?: string;
  collectionType?: string;
}

// Update CollectionItem to extend Product or match its structure
interface CollectionItem extends Omit<Product, 'id'> {
  id: number; // Keep as number for API response
  // Add other database-specific fields if needed
}
const categories = [
  { name: "Sarees", icon: "👗" },
  { name: "Lehenga", icon: "💃" },
  { name: "Crop Top", icon: "👚" },
  { name: "Gown", icon: "👗" },
  { name: "Western Dresses", icon: "👗" },
  { name: "Stitched Salwar Suit", icon: "💠" },
  { name: "Night Wear", icon: "🌙" },
  { name: "Winter Collection", icon: "🧥" },
  { name: "Unstitched Suit Collection", icon: "🪡" },
];


const WomensCollection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Sarees");
  const [hoveredCategory, setHoveredCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [collections, setCollections] = useState<CollectionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Transform CollectionItem to Product
  const transformToProduct = (item: CollectionItem): Product => ({
    id: item.id.toString(), // Convert number to string
    title: item.title || "",
    description: item.description || "",
    images: Array.isArray(item.images)
  ? item.images.map(img => `${baseURL}/uploads/${img}`)
  : [],
    category: item.category,
    sizes: Array.isArray(item.sizes) ? item.sizes : JSON.parse(item.sizes || "[]"),
    colors: Array.isArray(item.colors) ? item.colors : JSON.parse(item.colors || "[]"),
    price: item.price,
    collectionType: item.collectionType
  });

// Fetch collections from API (DEBUG MODE)
const fetchCollections = async (category: string) => {
  try {
    console.log("➡️ FETCH STARTED for category:", category);

    setLoading(true);

    const url = `${baseURL}/api/get-by-type-category/Women/${category}`;
    console.log("🌐 Requesting URL:", url);

    const response = await fetch(url);

    console.log("📥 Response Status:", response.status);
    console.log("📥 Response URL Actually Hit:", response.url);

    // Read raw text to check if HTML is coming
    const raw = await response.text();
    console.log("📄 RAW RESPONSE TEXT:", raw);

    // Try parsing JSON manually
    let data: CollectionItem[] = [];
    try {
      data = JSON.parse(raw);
      console.log("✅ Parsed JSON Successfully:", data);
    } catch (jsonErr) {
      console.error("❌ JSON PARSE FAILED! Response was HTML instead of JSON.");
      throw new Error("Invalid JSON response");
    }

    const transformedData = data.map(transformToProduct);
    console.log("🔄 TRANSFORMED DATA:", transformedData);

    setCollections(data);
    setError(null);

  } catch (err) {
    console.error(`❌ Error fetching ${category} collection:`, err);
    setError(`Failed to load ${category} collection`);
    setCollections([]);
  } finally {
    console.log("✔️ FETCH COMPLETE");
    setLoading(false);
  }
};

  // Get products for current category (transformed to Product interface)
  const getCurrentProducts = (): Product[] => {
    return collections
      .filter(item => item.category === activeCategory)
      .map(transformToProduct);
  };

  // Fetch collections when category changes
  useEffect(() => {
    fetchCollections(activeCategory);
  }, [activeCategory]);

  // Group collections by category for section data
  const getSectionData = () => {
    const currentProducts = getCurrentProducts();

    return [
      {
        title: `${getCategoryIcon(activeCategory)} ${activeCategory} Collection`,
        category: activeCategory,
        gradient: "from-pink-50 to-rose-50",
        products: currentProducts,
      }
    ];
  };

  // Helper function to get category icon
  const getCategoryIcon = (category: string) => {
    const found = categories.find(cat => cat.name === category);
    return found ? found.icon : "👕";
  };

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  const sectionData = getSectionData();

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Enhanced Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-pink-500" />
            <span className="text-sm font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
               TRENDING COLLECTION
            </span>
            <Sparkles className="w-6 h-6 text-pink-500" />
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-pink-600 to-slate-800 bg-clip-text text-transparent">
            Women's Fashion Collection
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
            <Star className="w-5 h-5 text-pink-500 fill-current" />
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
             Discover elegant fashion that celebrates your unique style — where sophistication meets 
            comfort in every design and every detail..
          </p>
        </motion.div>

        {/* Enhanced Category Buttons */}
        <motion.div 
          className="flex flex-wrap gap-3 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* <Button
                onClick={() => setActiveCategory(cat.name)}
                onMouseEnter={() => setHoveredCategory(cat.name)}
                onMouseLeave={() => setHoveredCategory("")}
                className={`relative px-6 py-3 rounded-2xl border-2 transition-all duration-500 font-semibold overflow-hidden group ${
                  activeCategory === cat.name
                    ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white border-pink-500 shadow-2xl shadow-pink-500/25 scale-105"
                    : "border-pink-200 bg-white/80 hover:border-pink-300 hover:bg-pink-50 hover:shadow-xl text-pink-700"
                }`}
                variant="outline"
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-500 ${
                  hoveredCategory === cat.name && activeCategory !== cat.name 
                    ? "opacity-5" 
                    : "opacity-0"
                }`}></div>
                
                <span className="text-lg mr-2">{cat.icon}</span>
                {cat.name}
                
                {activeCategory === cat.name && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white rounded-t-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Button> */}
              <Button
  onClick={() => setActiveCategory(cat.name)}
  onMouseEnter={() => {}}   // hover removed
  onMouseLeave={() => {}}   // hover removed
  className={`relative px-6 py-3 rounded-2xl border-2 font-semibold overflow-hidden transition-all duration-500 ${
    activeCategory === cat.name
      ? "bg-[#850E35] text-white border-[#850E35] shadow-xl scale-105"
      : "bg-[#850E35] text-white border-[#850E35]"
  }`}
  variant="outline"
>
  
  {/* Removed gradient + hover overlay */}
  <div className="hidden"></div>

  <span className="text-lg mr-2">{cat.icon}</span>
  {cat.name}

  {activeCategory === cat.name && (
    <motion.div
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white rounded-t-full"
      layoutId="activeIndicator"
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    />
  )}
      </Button>

            </motion.div>
          ))}
        </motion.div>

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center py-20"
          >
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-slate-600">Loading {activeCategory} collection...</p>
            </div>
          </motion.div>
        )}

        {/* Error State */}
        {error && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-red-600 mb-4">{error}</p>
              <Button
                onClick={() => fetchCollections(activeCategory)}
                className="bg-pink-600 text-white hover:bg-pink-700"
              >
                Try Again
              </Button>
            </div>
          </motion.div>
        )}

        {/* Enhanced Product Sections */}
        {!loading && !error && sectionData.map(
          (section) =>
            activeCategory === section.category && (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`mb-20 p-8 rounded-3xl bg-gradient-to-br ${section.gradient}`}
              >
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-12 bg-gradient-to-b from-pink-500 to-pink-400 rounded-full"></div>
                    <div>
                      <h2 className="font-serif text-4xl font-bold text-slate-800">
                        {section.title}
                      </h2>
                      <p className="text-slate-600 mt-1">
                        {section.products.length} premium items
                      </p>
                    </div>
                  </div>
                  
                  <Button className="group bg-pink-600 text-white border border-pink-600 hover:bg-pink-700 hover:border-pink-700 rounded-xl px-6 py-2 transition-all duration-300">
                    <span className="mr-2">Explore All</span>
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      →
                    </motion.span>
                  </Button>
                </div>

                {/* Products Grid */}
                {section.products.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {section.products.map((product, i) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        whileHover={{ y: -8 }}
                        transition={{ 
                          delay: i * 0.1,
                          type: "spring",
                          stiffness: 300
                        }}
                        className="group cursor-pointer"
                        onClick={() => openModal(product)}
                      >
                        <ProductFrame 
                          image={product.images[0] || "/placeholder-image.jpg"} 
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-500 text-lg">
                      No products found in {activeCategory} collection.
                    </p>
                  </div>
                )}
              </motion.div>
            )
        )}
      </div>

      {/* Enhanced Gallery Modal - Smaller Size */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                {/* Main Content */}
                <div className="flex-1 overflow-auto relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 rounded-full p-2 shadow-md transition-colors duration-300 z-50"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <div className="p-6">
                    {/* Main Image Gallery */}
                    <div className="mb-6">
                      <div className="relative rounded-xl overflow-hidden bg-slate-50 mb-3">
                        <div className="flex items-center justify-center min-h-[300px] p-3">
                          <ProductFrame image={selectedProduct.images[currentImageIndex]} />
                        </div>
                        
                        {/* Navigation Arrows */}
                        {selectedProduct.images.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 transition-all duration-300 shadow-lg"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 transition-all duration-300 shadow-lg"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </>
                        )}

                        {/* Image Counter */}
                        {selectedProduct.images.length > 1 && (
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                            {currentImageIndex + 1} / {selectedProduct.images.length}
                          </div>
                        )}
                      </div>

                      {/* Thumbnail Gallery */}
                      {selectedProduct.images.length > 1 && (
                        <div className="flex gap-2 overflow-x-auto py-1">
                          {selectedProduct.images.map((image, index) => (
                            <motion.button
                              key={index}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                                currentImageIndex === index
                                  ? "border-pink-500 shadow-md"
                                  : "border-slate-200 hover:border-slate-300"
                              }`}
                            >
                              <img
                                src={image}
                                alt={`${selectedProduct.title} ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </motion.button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="space-y-4">
                      <h3 className="font-serif text-2xl font-bold text-slate-800">
                        {selectedProduct.title || `${selectedProduct.category} Design`}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {selectedProduct.description}
                      </p>
                      
                      {selectedProduct.price && (
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold text-pink-600">
                            {selectedProduct.price}
                          </span>
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                          <div>
                            <span className="font-semibold text-slate-700">Sizes: </span>
                            <span className="text-slate-600">{selectedProduct.sizes.join(", ")}</span>
                          </div>
                        )}
                        
                        {selectedProduct.colors && selectedProduct.colors.length > 0 && (
                          <div>
                            <span className="font-semibold text-slate-700">Colors: </span>
                            <span className="text-slate-600">{selectedProduct.colors.join(", ")}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WomensCollection;