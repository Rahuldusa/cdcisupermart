import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import ProductFrame from "../../ProductFrame/ProductFrame";
import { baseURL } from "@/Api/Baseurl";

// Tabs Component
const GalleryTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-white rounded-2xl shadow-lg p-2 flex gap-2">
        <button
          onClick={() => setActiveTab("images")}
          className={`px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 ${
            activeTab === "images"
              ? "bg-[#850E35] text-white shadow-lg"
              : "bg-[#850E35] text-white"
          }`}
        >
          📸 Images Gallery
        </button>

        <button
          onClick={() => setActiveTab("videos")}
          className={`px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 ${
            activeTab === "videos"
              ? "bg-[#850E35] text-white shadow-lg"
              : "bg-[#850E35] text-white"
          }`}
        >
          🎥 Videos Gallery
        </button>
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, index, onClick }) => {
  return (
    <motion.div
      id={`product-card-${product.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => onClick(product, index)}
      className="cursor-pointer group overflow-hidden"
    >
      <ProductFrame image={product.img} />
    </motion.div>
  );
};

// Video Card Component with Preview
const VideoCard = ({ video, index, onClick }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play might be blocked by browser, that's okay
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      id={`video-card-${video.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => onClick(video, index)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer group overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
    >
      <div className="w-full h-72 relative overflow-hidden rounded-t-3xl bg-black">
        {/* Video Preview */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          poster={video.thumbnail} // You can add thumbnail support if available
        >
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Button Overlay */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}>
          {/* <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/90 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
              <Play size={24} className="text-white ml-1" />
            </div>
            <p className="text-white font-semibold text-sm">Click to play video</p>
          </div> */}
        </div>

        {/* Video Type Badge */}
        <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
          🎥 Video
        </div>

        {/* Hover Effect Overlay */}
        <div className={`absolute inset-0 bg-blue-500/10 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-10'
        }`} />
      </div>

      {/* <div className="p-6">
        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
          Play Video
        </button>
      </div> */}
    </motion.div>
  );
};

// Product Grid Component
const ProductGrid = ({ products, onProductClick }) => {
  return (
    <div id="product-grid-container" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
          onClick={onProductClick}
        />
      ))}
    </div>
  );
};

// Video Grid Component
const VideoGrid = ({ videos, onVideoClick }) => {
  return (
    <div id="video-grid-container" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      {videos.map((video, index) => (
        <VideoCard
          key={video.id}
          video={video}
          index={index}
          onClick={onVideoClick}
        />
      ))}
    </div>
  );
};

// Fixed Gallery Modal Component
const GalleryModal = ({ 
  item, 
  currentIndex, 
  onClose, 
  onPrev, 
  onNext, 
  onThumbnailClick, 
  type, 
  videoList 
}) => {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  
  // Reset gallery index when item changes
  useEffect(() => {
    setCurrentGalleryIndex(0);
  }, [item]);

  if (!item) return null;

  const images = type === 'image' ? item.gallery : [];
  const videos = type === 'video' && videoList ? videoList : [];
  
  const currentItem = type === 'video' && videoList ? videoList[currentIndex] : item;

  const handleThumbnailClick = (index) => {
    if (type === 'image') {
      setCurrentGalleryIndex(index);
    } else {
      onThumbnailClick(index);
    }
  };

  const handlePrev = () => {
    if (type === 'image' && images.length > 1) {
      setCurrentGalleryIndex(prev => 
        prev === 0 ? images.length - 1 : prev - 1
      );
    } else {
      onPrev();
    }
  };

  const handleNext = () => {
    if (type === 'image' && images.length > 1) {
      setCurrentGalleryIndex(prev => 
        prev === images.length - 1 ? 0 : prev + 1
      );
    } else {
      onNext();
    }
  };

  const getCurrentMedia = () => {
    if (type === 'image') {
      return images[currentGalleryIndex];
    } else {
      return currentItem.videoUrl || currentItem.files[0];
    }
  };

  const getTotalItems = () => {
    return type === 'image' ? images.length : videos.length;
  };

  const getCurrentIndex = () => {
    return type === 'image' ? currentGalleryIndex : currentIndex;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
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
                onClick={onClose}
                className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 rounded-full p-2 shadow-md transition-colors duration-300 z-50"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="p-6">
                {/* Main Image/Video Gallery */}
                <div className="mb-6">
                  <div className="relative rounded-xl overflow-hidden bg-slate-50 mb-3">
                    <div className="flex items-center justify-center min-h-[300px] p-3">
                      {type === 'image' ? (
                        <ProductFrame image={getCurrentMedia()} />
                      ) : (
                        <div className="w-full bg-black rounded-xl overflow-hidden">
                          <video
                            controls
                            autoPlay
                            className="w-full h-auto max-h-[400px]"
                          >
                            <source src={getCurrentMedia()} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      )}
                    </div>
                    
                    {/* Navigation Arrows */}
                    {getTotalItems() > 1 && (
                      <>
                        <button
                          onClick={handlePrev}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg z-10"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNext}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg z-10"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}

                    {/* Counter */}
                    {getTotalItems() > 1 && (
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm z-10">
                        {getCurrentIndex() + 1} / {getTotalItems()}
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Gallery */}
                  {type === 'image' && images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto py-1 px-1">
                      {images.map((image, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleThumbnailClick(index)}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                            currentGalleryIndex === index
                              ? "border-pink-500 shadow-md"
                              : "border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.button>
                      ))}
                    </div>
                  )}

                  {/* Video Thumbnail Gallery */}
                  {type === 'video' && videos.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto py-1 px-1">
                      {videos.map((video, index) => (
                        <motion.button
                          key={video.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleThumbnailClick(index)}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                            currentIndex === index
                              ? "border-blue-500 shadow-md"
                              : "border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center relative">
                            <Play className="w-4 h-4 text-blue-600" />
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Fixed Main Product Gallery Component
export default function ProductGallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("images");
  const [galleryData, setGalleryData] = useState({
    images: [],
    videos: []
  });
  const [loading, setLoading] = useState(true);

  // Fetch gallery data from API
  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseURL}/api/gallery/get`);
        const data = await response.json();
        
        console.log("API Response:", data);
        
        // Separate images and videos
        const images = data.filter(item => item.type === 'image');
        const videos = data.filter(item => item.type === 'video');
        
        // Transform API data to match our component structure
        const transformedImages = images.map((item) => ({
          id: item.id,
          img: `${baseURL}/uploads/${item.files[0]}`,
          gallery: item.files.map(file => `${baseURL}/uploads/${file}`),
          type: "image"
        }));

        const transformedVideos = videos.map((item) => ({
          id: item.id,
          videoUrl: `${baseURL}/uploads/${item.files[0]}`,
          files: item.files.map(file => `${baseURL}/uploads/${file}`),
          type: "video"
        }));

        console.log("Transformed Images:", transformedImages);
        console.log("Transformed Videos:", transformedVideos);

        setGalleryData({
          images: transformedImages,
          videos: transformedVideos
        });
      } catch (error) {
        console.error("Error fetching gallery data:", error);
        setGalleryData({
          images: [],
          videos: []
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const openModal = (item, index) => {
    console.log("Opening modal with:", item, "at index:", index);
    setSelectedItem(item);
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    console.log("Closing modal");
    setSelectedItem(null);
    setSelectedIndex(0);
    document.body.style.overflow = "unset";
  };

  const nextItem = () => {
    const items = activeTab === 'images' ? galleryData.images : galleryData.videos;
    const newIndex = selectedIndex === items.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
    setSelectedItem(items[newIndex]);
  };

  const prevItem = () => {
    const items = activeTab === 'images' ? galleryData.images : galleryData.videos;
    const newIndex = selectedIndex === 0 ? items.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    setSelectedItem(items[newIndex]);
  };

  const selectItem = (index) => {
    const items = activeTab === 'images' ? galleryData.images : galleryData.videos;
    setSelectedIndex(index);
    setSelectedItem(items[index]);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    
    if (selectedItem) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedItem]);

  console.log("Current state - selectedItem:", selectedItem, "selectedIndex:", selectedIndex, "loading:", loading);

  if (loading) {
    return (
      <section className="py-20 container mx-auto px-6 bg-gradient-to-b from-white to-pink-50/30">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading gallery...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="product-gallery-main" className="py-20 container mx-auto px-6 bg-gradient-to-b from-white to-pink-50/30">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-pink-600 to-gray-800 bg-clip-text text-transparent">
          Client Gallery
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Explore our exquisite collection of fashion wear for men, women, and kids. 
          Each piece is crafted with attention to detail and quality.
        </p>
      </motion.div>

      {/* Tabs */}
      <GalleryTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content based on active tab */}
      {activeTab === "images" ? (
        <ProductGrid 
          products={galleryData.images} 
          onProductClick={openModal} 
        />
      ) : (
        <VideoGrid 
          videos={galleryData.videos} 
          onVideoClick={openModal} 
        />
      )}

      {/* Empty States */}
      {activeTab === "images" && galleryData.images.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="text-gray-400 text-6xl mb-4">📸</div>
          <h3 className="text-2xl font-semibold text-gray-600 mb-2">No images found</h3>
          <p className="text-gray-500">Check back later for new gallery images</p>
        </motion.div>
      )}

      {activeTab === "videos" && galleryData.videos.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="text-gray-400 text-6xl mb-4">🎥</div>
          <h3 className="text-2xl font-semibold text-gray-600 mb-2">No videos found</h3>
          <p className="text-gray-500">Check back later for new video content</p>
        </motion.div>
      )}

      {/* Enhanced Gallery Modal */}
      {selectedItem && (
        <GalleryModal
          item={selectedItem}
          currentIndex={selectedIndex}
          onClose={closeModal}
          onPrev={prevItem}
          onNext={nextItem}
          onThumbnailClick={selectItem}
          type={activeTab === 'images' ? 'image' : 'video'}
          videoList={activeTab === 'videos' ? galleryData.videos : null}
        />
      )}
    </section>
  );
}