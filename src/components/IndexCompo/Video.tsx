// import React from "react";

// // HorizontalVideosPage.tsx
// // Displays 3 videos side by side (responsive).
// // Tailwind CSS required. Replace video src/poster paths with your own.

// export default function HorizontalVideosPage() {
//   return (
//     <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <header className="mb-10 text-center">
//           <h1 className="text-3xl font-semibold text-slate-800">Horizontal Video Showcase</h1>
//           <p className="mt-2 text-sm text-slate-500">
//             Three videos displayed horizontally — responsive and visually balanced.
//           </p>
//         </header>

//         {/* Horizontal video layout */}
//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Video card 1 */}
//           <article className="bg-white rounded-2xl shadow p-4">
//             <h2 className="text-lg font-medium text-slate-800 mb-3">Introduction</h2>
//             <div className="relative overflow-hidden rounded-lg">
//               <video
//                 controls
//                 preload="metadata"
//                 poster="/path/to/poster1.jpg"
//                 className="w-full h-auto rounded-lg"
//                 src="https://www.w3schools.com/html/mov_bbb.mp4"
//               >
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//             <p className="mt-3 text-sm text-slate-500">
//               Short description for the first video. Use an MP4, WebM, or HLS source as needed.
//             </p>
//           </article>

//           {/* Video card 2 */}
//           <article className="bg-white rounded-2xl shadow p-4">
//             <h2 className="text-lg font-medium text-slate-800 mb-3">Demo / Walkthrough</h2>
//             <div className="relative overflow-hidden rounded-lg">
//               <video
//                 controls
//                 preload="metadata"
//                 poster="/path/to/poster2.jpg"
//                 className="w-full h-auto rounded-lg"
//                 src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//               >
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//             <p className="mt-3 text-sm text-slate-500">
//               Second video. Replace with your recorded demo or presentation.
//             </p>
//           </article>

//           {/* Video card 3 */}
//           <article className="bg-white rounded-2xl shadow p-4">
//             <h2 className="text-lg font-medium text-slate-800 mb-3">Outro / Tips</h2>
//             <div className="relative overflow-hidden rounded-lg">
//               <video
//                 controls
//                 preload="metadata"
//                 poster="/path/to/poster3.jpg"
//                 className="w-full h-auto rounded-lg"
//                 src="/videos/sample-video-3.mp4"
//               >
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//             <p className="mt-3 text-sm text-slate-500">
//               Third video with final tips or credits. Local paths should live in your public/ or static/ folder.
//             </p>
//           </article>
//         </section>

//         <footer className="mt-12 text-center text-xs text-slate-400">
//           Tip: add{" "}
//           <code className="bg-slate-100 px-1 rounded">loading="lazy"</code> to
//           large video tags where supported for better performance.
//         </footer>
//       </div>
//     </main>
//   );
// }





// import React from "react";

// // HorizontalVideosPage.tsx
// // Displays 3 videos side by side, each in a mobile-like 9:16 aspect ratio.

// export default function HorizontalVideosPage() {
//   return (
//     <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <header className="mb-10 text-center">
//           <h1 className="text-3xl font-semibold text-slate-800">Horizontal Mobile-Style Videos</h1>
//           <p className="mt-2 text-sm text-slate-500">
//             Each video is displayed in a vertical (mobile-like) aspect ratio, aligned horizontally.
//           </p>
//         </header>

//         {/* Horizontal video layout */}
//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//           {/* Video card 1 */}
//           <article className="bg-white rounded-2xl shadow p-4 w-full max-w-xs">
//             <h2 className="text-lg font-medium text-slate-800 mb-3 text-center">Introduction</h2>
//             <div className="relative overflow-hidden rounded-xl bg-black aspect-[9/16]">
//               <video
//                 controls
//                 preload="metadata"
//                 poster="/path/to/poster1.jpg"
//                 className="absolute inset-0 w-full h-full object-cover rounded-xl"
//                 src="https://www.w3schools.com/html/mov_bbb.mp4"
//               >
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//             <p className="mt-3 text-sm text-slate-500 text-center">
//               Short intro video in mobile format.
//             </p>
//           </article>

//           {/* Video card 2 */}
//           <article className="bg-white rounded-2xl shadow p-4 w-full max-w-xs">
//             <h2 className="text-lg font-medium text-slate-800 mb-3 text-center">Demo / Walkthrough</h2>
//             <div className="relative overflow-hidden rounded-xl bg-black aspect-[9/16]">
//               <video
//                 controls
//                 preload="metadata"
//                 poster="/path/to/poster2.jpg"
//                 className="absolute inset-0 w-full h-full object-cover rounded-xl"
//                 src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//               >
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//             <p className="mt-3 text-sm text-slate-500 text-center">
//               Second video showing walkthrough or demo.
//             </p>
//           </article>

//           {/* Video card 3 */}
//           <article className="bg-white rounded-2xl shadow p-4 w-full max-w-xs">
//             <h2 className="text-lg font-medium text-slate-800 mb-3 text-center">Outro / Tips</h2>
//             <div className="relative overflow-hidden rounded-xl bg-black aspect-[9/16]">
//               <video
//                 controls
//                 preload="metadata"
//                 poster="/path/to/poster3.jpg"
//                 className="absolute inset-0 w-full h-full object-cover rounded-xl"
//                 src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//               >
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//             <p className="mt-3 text-sm text-slate-500 text-center">
//               Outro or final tips video.
//             </p>
//           </article>
//         </section>

      
//       </div>
//     </main>
//   );
// }






// import React from "react";

// // Full-width horizontal 3-video layout (mobile-style vertical videos)
// export default function HorizontalVideosPage() {
//   return (
//     <main className="min-h-screen bg-black flex justify-center items-center overflow-hidden">
//       {/* Container with no padding or gaps */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full h-screen">
//         {/* Video 1 */}
//         <div className="relative w-full h-full overflow-hidden">
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-full h-full object-cover"
//             src="https://www.w3schools.com/html/mov_bbb.mp4"
//           ></video>
//         </div>

//         {/* Video 2 */}
//         <div className="relative w-full h-full overflow-hidden">
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-full h-full object-cover"
//             src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//           ></video>
//         </div>

//         {/* Video 3 */}
//         <div className="relative w-full h-full overflow-hidden">
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-full h-full object-cover"
//             src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//           ></video>
//         </div>
//       </div>
//     </main>
//   );
// }








import React from "react";

// Import videos from assets folder
import video1 from "../../assets/Videos/video1.mp4";
import video2 from "../../assets/Videos/video2.mp4";
import video3 from "../../assets/Videos/video3.mp4";

// If you have different video formats, you can import them like this:
// import video1 from "./assets/video1.mp4";
// import video2 from "./assets/video2.mov";
// import video3 from "./assets/video3.webm";

export default function HorizontalVideosPage() {
  return (
    <main className="min-h-screen bg-black flex justify-center items-center overflow-hidden">
      {/* Container with no padding or gaps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full h-screen">
        {/* Video 1 */}
        <div className="relative w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src={video1}
          ></video>
        </div>

        {/* Video 2 */}
        <div className="relative w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src={video2}
          ></video>
        </div>

        {/* Video 3 */}
        <div className="relative w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src={video3}
          ></video>
        </div>
      </div>
    </main>
  );
}