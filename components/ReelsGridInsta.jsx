"use client";

import { useEffect } from "react";
import { FiInstagram } from "react-icons/fi";

const reels = [
  "DVDKvGPEmvZ",
  "DW1CDJukSiW",
  "DOGa4cMkoPZ",
  "DNnRZYqRZ6P",
  "DH8fWfiytBt",
  "DJkQaj8tA0e",
  "DJiot7pIxry",
  "DHrgIb3tvC_",
  "DHLg3aGy49D",
];

function ReelCard({ shortcode }) {
  return (
    <div className="bg-[#010101] rounded-lg overflow-hidden border border-white/10">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={`https://www.instagram.com/reel/${shortcode}/`}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          margin: 0,
          maxWidth: "100%",
          minWidth: "100%",
          width: "100%",
        }}
      />
    </div>
  );
}

export default function ReelsGrid() {
  useEffect(() => {
    const loadInstagram = () => {
      if (window.instgrm?.Embeds) {
        window.instgrm.Embeds.process();
        return;
      }

      const existingScript = document.getElementById(
        "instagram-embed-script"
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "instagram-embed-script";
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;

        script.onload = () => {
          window.instgrm?.Embeds?.process();
        };

        document.body.appendChild(script);
      }
    };

    loadInstagram();
  }, []);

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
            href="https://www.instagram.com/the.creators.house"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:border-[#ffd800] hover:text-[#ffd800] transition-colors"
          >
            <FiInstagram className="w-4 h-4" />
            @the.creators.house
          </a>
        </div>

        {/* Reels */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {reels.map((id) => (
            <ReelCard key={id} shortcode={id} />
          ))}
        </div>
      </div>
    </section>
  );
}