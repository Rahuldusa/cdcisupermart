// import React, { useRef, useState } from "react";

// type VideoItem = {
//   id: number;
//   title: string;
//   src: string;
//   poster?: string;
// };

// const videos: VideoItem[] = [
//   {
//     id: 1,
//     title: "City Walk",
//     src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
//   },
//   {
//     id: 2,
//     title: "Mountain Time",
//     src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
//   },
//   {
//     id: 3,
//     title: "Ocean Breeze",
//     src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
//   },
// ];

// export default function ECommerceGalleryPage() {
//   const refs = useRef<Record<number, HTMLVideoElement | null>>({});
//   const [playingId, setPlayingId] = useState<number | null>(null);

//   const togglePlay = (id: number) => {
//     const video = refs.current[id];
//     if (!video) return;
//     if (video.paused) {
//       video.play();
//       setPlayingId(id);
//     } else {
//       video.pause();
//       setPlayingId(null);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gray-50 p-6">
//       <h1 className="text-2xl font-bold mb-6">Vertical Videos (9:16)</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {videos.map((v) => (
//           <div
//             key={v.id}
//             className="rounded-xl shadow-md bg-white overflow-hidden"
//           >
//             <div
//               className="relative w-full"
//               style={{ paddingTop: "177.77%" }}
//             >
//               <video
//                 ref={(el) => (refs.current[v.id] = el)}
//                 src={v.src}
//                 loop
//                 muted
//                 playsInline
//                 className="absolute inset-0 w-full h-full object-cover"
//                 onClick={() => togglePlay(v.id)}
//               />

//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   togglePlay(v.id);
//                 }}
//                 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
//               >
//                 {playingId === v.id ? "❚❚" : "▶"}
//               </button>
//             </div>

//             <div className="p-3">
//               <h3 className="font-medium">{v.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }





// import React, { useRef, useState } from "react";

// type VideoItem = {
//   id: number;
//   title: string;
//   src: string;
//   poster?: string;
// };

// const videos: VideoItem[] = [
//   {
//     id: 1,
//     title: "City Walk",
//     src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
//   },
//   {
//     id: 2,
//     title: "Mountain Time",
//     src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
//   },
//   {
//     id: 3,
//     title: "Ocean Breeze",
//     src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
//   },
// ];

// export default function ECommerceGalleryPage() {
//   const refs = useRef<Record<number, HTMLVideoElement | null>>({});
//   const [playingId, setPlayingId] = useState<number | null>(null);

//   const togglePlay = (id: number) => {
//     const video = refs.current[id];
//     if (!video) return;

//     if (video.paused) {
//       video.play();
//       setPlayingId(id);
//     } else {
//       video.pause();
//       setPlayingId(null);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gray-50">

//       {/* ================= HERO SECTION ================= */}
//       <section
//         className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center text-white"
//         style={{
//           backgroundImage: `url('/assets/your-hero-image.jpg')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50" />

//         <div className="relative z-10 px-4">
//           <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
//             Discover Premium Collections
//           </h1>

//           <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
//             Hand-picked luxury products crafted for elegance. Shop your favorite items with top quality and stunning designs.
//           </p>

//           <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto">
//             🛍 Shop Now
//           </button>
//         </div>
//       </section>


     
//     </main>
//   );
// }







// import React, { useRef, useState } from "react";

// type VideoItem = {
//   id: number;
//   title: string;
//   src: string;
//   poster?: string;
// };

// const videos: VideoItem[] = [
//   {
//     id: 1,
//     title: "City Walk",
//     src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
//   },
//   {
//     id: 2,
//     title: "Mountain Time",
//     src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
//   },
//   {
//     id: 3,
//     title: "Ocean Breeze",
//     src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
//   },
// ];

// export default function ECommerceGalleryPage() {
//   const refs = useRef<Record<number, HTMLVideoElement | null>>({});
//   const [playingId, setPlayingId] = useState<number | null>(null);
//   const backgroundVideoRef = useRef<HTMLVideoElement>(null);

//   const togglePlay = (id: number) => {
//     const video = refs.current[id];
//     if (!video) return;

//     if (video.paused) {
//       video.play();
//       setPlayingId(id);
//     } else {
//       video.pause();
//       setPlayingId(null);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gray-50">

//       {/* ================= HERO SECTION WITH BACKGROUND VIDEO ================= */}
//       <section className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center text-white overflow-hidden">
//         {/* Background Video */}
//         <video
//           ref={backgroundVideoRef}
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover z-0"
//           poster="/assets/your-hero-poster.jpg" // Optional: fallback image while video loads
//         >
//           <source 
//             src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" 
//             type="video/mp4" 
//           />
//           {/* Fallback for browsers that don't support video */}
//           <div 
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage: `url('/assets/your-hero-fallback.jpg')`
//             }}
//           />
//         </video>

//         {/* Dark overlay for better text readability */}
//         <div className="absolute inset-0 bg-black/50 z-1" />

//         {/* Content */}
//         <div className="relative z-10 px-4">
//           <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
//             Discover Premium Collections
//           </h1>

//           <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
//             Hand-picked luxury products crafted for elegance. Shop your favorite items with top quality and stunning designs.
//           </p>

//           <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto transition-colors duration-300">
//             🛍 Shop Now
//           </button>
//         </div>
//       </section>

//     </main>
//   );
// }






import React, { useRef, useState } from "react";
import heroVideo from "../../assets/Videos/SFMvideo.mp4";
// import heroPoster from "../assets/hero-poster.jpg";
// import heroFallback from "../assets/hero-fallback.jpg";

export default function ECommerceGalleryPage() {
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center text-white overflow-hidden">
        {/* Background Video */}
        {!videoError ? (
          <video
            ref={backgroundVideoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            // poster={heroPoster}
            onError={handleVideoError}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
          <div 
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
            // style={{ backgroundImage: `url(${heroFallback})` }}
          />
        )}

        {/* Dark overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black/50 z-1" /> */}

        {/* Content */}
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
            Discover Premium Collections
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
            Hand-picked luxury products crafted for elegance. Shop your favorite items with top quality and stunning designs.
          </p>

          <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto transition-colors duration-300">
            🛍 Shop Now
          </button>
        </div>
      </section>
    </main>
  );
}