"use client";

import { FiInstagram } from "react-icons/fi";

const videos = [
  "https://50cagafsvzsoyz75.public.blob.vercel-storage.com/Creator%20House.mp4",
  "https://50cagafsvzsoyz75.public.blob.vercel-storage.com/Aqua%20ambience.mp4",
  "https://50cagafsvzsoyz75.public.blob.vercel-storage.com/Drone%20shot%20night%20tavera.mp4",
];

function VideoCard({ src }) {
  return (
    <div className="bg-[#010101] rounded-lg overflow-hidden border border-white/10 aspect-[9/16] relative w-full group">
      <video
        src={src}
        controls
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function ReelsGrid() {
  return (
    <section className="py-24 px-6 border-b border-white/10 bg-[#010101]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-xs font-medium uppercase tracking-widest mb-5 text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffd800]" />
              Our Work
            </div>

            <h2 className="font-bold text-4xl md:text-5xl leading-tight text-white max-w-xl">
              Reels that{" "}
              <span className="bg-[#ffd800] text-[#010101] px-2">
                stop the scroll.
              </span>
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:border-[#ffd800] hover:text-[#ffd800] transition-colors"
          >
            <FiInstagram className="w-4 h-4" />
            @the.creators.house
          </a>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoCard key={index} src={video} />
          ))}
        </div>
      </div>
    </section>
  );
}














// "use client";

// import { FiInstagram } from "react-icons/fi";

// // Replace these names with the actual video filenames you place inside your Next.js 'public' folder
// const videos = [
//   "Aqua.mp4",
//   "Creator.mp4",
//   "Drone.mp4",
// ];

// function VideoCard({ filename }) {
//   return (
//     <div className="bg-[#010101] rounded-lg overflow-hidden border border-white/10 aspect-[9/16] relative w-full group">
//       <video
//         src={`/${filename}`}
//         controls
//         autoPlay
//         muted
//         playsInline
//         preload="metadata"
//         className="w-full h-full object-cover"
//       />
//     </div>
//   );
// }

// export default function ReelsGrid() {
//   return (
//     <section className="py-24 px-6 border-b border-white/10 bg-[#010101]">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
//           <div>
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-xs font-medium uppercase tracking-widest mb-5 text-white/60">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#ffd800]" /> Our Work
//             </div>
//             <h2 className="font-bold text-4xl md:text-5xl leading-tight text-white max-w-xl">
//               Reels that{" "}
//               <span className="bg-[#ffd800] text-[#010101] px-2">
//                 stop the scroll.
//               </span>
//             </h2>
//           </div>
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:border-[#ffd800] hover:text-[#ffd800] transition-colors"
//           >
//             <FiInstagram className="w-4 h-4" /> @the.creators.house
//           </a>
//         </div>

//         {/* Reels Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {videos.map((filename, index) => (
//             <VideoCard key={index} filename={filename} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
