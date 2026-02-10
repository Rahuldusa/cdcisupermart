// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Navbar from "../AdminNavbar";
// import { baseURL } from "@/Api/Baseurl";

// interface GalleryItem {
//   id: number;
//   type: "image" | "video";
//   files: string[];
// }

// const GalleryViewDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [item, setItem] = useState<GalleryItem | null>(null);

//   useEffect(() => {
//     fetch(`${baseURL}/api/gallery/getbyid/${id}`)
//       .then((res) => res.json())
//       .then((data) => setItem(data))
//       .catch((err) => console.error(err));
//   }, [id]);

//   if (!item) {
//     return (
//       <>
//         <Navbar />
//         <div className="pt-28 text-center text-gray-500">Loading...</div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />

//       <div className="pt-28 p
//       x-6 md:px-12 pb-20">
//         <button
//           onClick={() => navigate(-1)}
//           className="mb-6 text-[#850E35] font-semibold hover:underline"
//         >
//           ← Back
//         </button>

//         <h1 className="text-3xl font-bold mb-4">Gallery Item #{item.id}</h1>
//         <p className="text-gray-600 mb-8">
//           Showing all uploaded files ({item.files.length})
//         </p>

//         {/* MEDIA GRID */}
//        {/* MEDIA GRID */}
// <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//   {item.files.map((file, index) => (
//     <div
//       key={index}
//       className="bg-white shadow-lg rounded-xl overflow-hidden border"
//     >
//       <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
//         {item.type === "video" ? (
//           <video
//             src={`${baseURL}/uploads/${file}`}
//             className="w-full h-full object-cover"
//             controls
//           />
//         ) : (
//           <img
//             src={`${baseURL}/uploads/${file}`}
//             alt={`file-${index}`}
//             className="w-full h-full object-cover"
//           />
//         )}
//       </div>
//     </div>
//   ))}
// </div>

//       </div>
//     </>
//   );
// };

// export default GalleryViewDetails;






// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Navbar from "../AdminNavbar";
// import { baseURL } from "@/Api/Baseurl";

// interface GalleryItem {
//   id: number;
//   type: "image" | "video";
//   files: string[];
// }

// const GalleryViewDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [item, setItem] = useState<GalleryItem | null>(null);

//   useEffect(() => {
//     fetch(`${baseURL}/api/gallery/getbyid/${id}`)
//       .then((res) => res.json())
//       .then((data) => setItem(data))
//       .catch((err) => console.error(err));
//   }, [id]);

//   // Custom fullscreen handler for better control
//   const handleVideoFullscreen = (event: React.MouseEvent<HTMLVideoElement>) => {
//     const video = event.currentTarget;
    
//     // Add a small delay to ensure the video is ready for fullscreen
//     setTimeout(() => {
//       if (video.requestFullscreen) {
//         video.requestFullscreen();
//       } else if ((video as any).webkitRequestFullscreen) {
//         (video as any).webkitRequestFullscreen();
//       } else if ((video as any).msRequestFullscreen) {
//         (video as any).msRequestFullscreen();
//       }
//     }, 100);
//   };

//   if (!item) {
//     return (
//       <>
//         <Navbar />
//         <div className="pt-28 text-center text-gray-500">Loading...</div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />

//       <div className="pt-28 px-6 md:px-12 pb-20">
//         <button
//           onClick={() => navigate(-1)}
//           className="mb-6 text-[#850E35] font-semibold hover:underline flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
//         >
//           <span>←</span>
//           <span>Back</span>
//         </button>

//         <h1 className="text-3xl font-bold mb-4">Gallery Item #{item.id}</h1>
//         <p className="text-gray-600 mb-8">
//           Showing all uploaded files ({item.files.length})
//         </p>

//         {/* MEDIA GRID */}
//         <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {item.files.map((file, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
//                 {item.type === "video" ? (
//                   <div className="w-full h-full relative flex items-center justify-center bg-black">
//                     <video
//                       src={`${baseURL}/uploads/${file}`}
//                       className="w-full h-full object-contain max-w-full max-h-full"
//                       controls
//                       controlsList="nodownload"
//                       onClick={handleVideoFullscreen}
//                       style={{ 
//                         backgroundColor: '#000',
//                       }}
//                     />
//                     {/* Fullscreen hint overlay */}
//                     <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded pointer-events-none">
//                       Click for fullscreen
//                     </div>
//                   </div>
//                 ) : (
//                   <img
//                     src={`${baseURL}/uploads/${file}`}
//                     alt={`Gallery item ${index + 1}`}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Loading state for videos */}
//         {item.type === "video" && (
//           <div className="text-center mt-4 text-sm text-gray-500">
//             Videos may take a moment to load. Click on the video for better fullscreen experience.
//           </div>
//         )}
//       </div>

//       {/* Add global styles for fullscreen video */}
//       <style>{`
//         video::-webkit-media-controls-fullscreen-button {
//           display: none;
//         }
        
//         video:fullscreen {
//           object-fit: contain !important;
//           background-color: black !important;
//         }
        
//         video:-webkit-full-screen {
//           object-fit: contain !important;
//           background-color: black !important;
//           width: 100% !important;
//           height: 100% !important;
//         }
        
//         video:-moz-full-screen {
//           object-fit: contain !important;
//           background-color: black !important;
//         }
        
//         video:-ms-fullscreen {
//           object-fit: contain !important;
//           background-color: black !important;
//         }
//       `}</style>
//     </>
//   );
// };

// export default GalleryViewDetails;






import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../AdminNavbar";
import { baseURL } from "@/Api/Baseurl";

interface GalleryItem {
  id: number;
  type: "image" | "video";
  files: string[];
}

const GalleryViewDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState<GalleryItem | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<{ url: string; type: "image" | "video"; index: number } | null>(null);

  useEffect(() => {
    fetch(`${baseURL}/api/gallery/getbyid/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.error(err));
  }, [id]);

  // Custom fullscreen handler for better control
  const handleVideoFullscreen = (event: React.MouseEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    
    // Add a small delay to ensure the video is ready for fullscreen
    setTimeout(() => {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if ((video as any).webkitRequestFullscreen) {
        (video as any).webkitRequestFullscreen();
      } else if ((video as any).msRequestFullscreen) {
        (video as any).msRequestFullscreen();
      }
    }, 100);
  };

  // Open preview modal
  const openPreview = (file: string, index: number) => {
    setSelectedMedia({
      url: `${baseURL}/uploads/${file}`,
      type: item?.type || "image",
      index
    });
  };

  // Close preview modal
  const closePreview = () => {
    setSelectedMedia(null);
  };

  // Navigate to next/previous media in preview
  const navigatePreview = (direction: "prev" | "next") => {
    if (!selectedMedia || !item) return;

    const currentIndex = selectedMedia.index;
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % item.files.length;
    } else {
      newIndex = (currentIndex - 1 + item.files.length) % item.files.length;
    }

    setSelectedMedia({
      url: `${baseURL}/uploads/${item.files[newIndex]}`,
      type: item.type,
      index: newIndex
    });
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedMedia) return;

      if (e.key === "Escape") {
        closePreview();
      } else if (e.key === "ArrowRight") {
        navigatePreview("next");
      } else if (e.key === "ArrowLeft") {
        navigatePreview("prev");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedMedia]);

  if (!item) {
    return (
      <>
        <Navbar />
        <div className="pt-28 text-center text-gray-500">Loading...</div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="pt-28 px-6 md:px-12 pb-20">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-[#850E35] font-semibold hover:underline flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <span>←</span>
          <span>Back</span>
        </button>

        <h1 className="text-3xl font-bold mb-4">Gallery Item #{item.id}</h1>
        <p className="text-gray-600 mb-8">
          Showing all uploaded files ({item.files.length})
        </p>

        {/* MEDIA GRID */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {item.files.map((file, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openPreview(file, index)}
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
                {item.type === "video" ? (
                  <div className="w-full h-full relative flex items-center justify-center bg-black">
                    <video
                      src={`${baseURL}/uploads/${file}`}
                      className="w-full h-full object-contain max-w-full max-h-full"
                      controls
                      controlsList="nodownload"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVideoFullscreen(e);
                      }}
                      style={{ 
                        backgroundColor: '#000',
                      }}
                    />
                    {/* Fullscreen hint overlay */}
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded pointer-events-none">
                      Click for fullscreen
                    </div>
                    {/* Preview hint overlay */}
                    <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded pointer-events-none">
                      Click to preview
                    </div>
                  </div>
                ) : (
                  <>
                    <img
                      src={`${baseURL}/uploads/${file}`}
                      alt={`Gallery item ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {/* Preview hint overlay for images */}
                    <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded pointer-events-none">
                      Click to preview
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Loading state for videos */}
        {item.type === "video" && (
          <div className="text-center mt-4 text-sm text-gray-500">
            Videos may take a moment to load. Click on the video for better fullscreen experience.
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 pt-28">
          {/* Close button */}
          <button
            onClick={closePreview}
            className="absolute top-24 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
          >
            ×
          </button>

          {/* Navigation buttons */}
          {item.files.length > 1 && (
            <>
              <button
                onClick={() => navigatePreview("prev")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
              >
                ‹
              </button>
              <button
                onClick={() => navigatePreview("next")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
              >
                ›
              </button>
            </>
          )}

          {/* Media counter */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            {selectedMedia.index + 1} / {item.files.length}
          </div>

          {/* Media content */}
          <div className="max-w-4xl max-h-full w-full flex items-center justify-center">
            {selectedMedia.type === "video" ? (
              <video
                src={selectedMedia.url}
                className="max-w-full max-h-full object-contain"
                controls
                autoPlay
                style={{ backgroundColor: '#000' }}
              />
            ) : (
              <img
                src={selectedMedia.url}
                alt={`Preview ${selectedMedia.index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-lg text-center">
            Use arrow keys to navigate • Press ESC to close
          </div>
        </div>
      )}

      {/* Add global styles for fullscreen video */}
      <style>{`
        video::-webkit-media-controls-fullscreen-button {
          display: none;
        }
        
        video:fullscreen {
          object-fit: contain !important;
          background-color: black !important;
        }
        
        video:-webkit-full-screen {
          object-fit: contain !important;
          background-color: black !important;
          width: 100% !important;
          height: 100% !important;
        }
        
        video:-moz-full-screen {
          object-fit: contain !important;
          background-color: black !important;
        }
        
        video:-ms-fullscreen {
          object-fit: contain !important;
          background-color: black !important;
        }
      `}</style>
    </>
  );
};

export default GalleryViewDetails;