"use client";
import { useEffect, useState } from 'react';

export default function Testimonials() {
  // Replace these with your actual image paths in /public
  // Suggested: Square images of "BigFoot sightings" or community profile pics
  const images = [
    "/testimonial-1.JPG",
    "/testimonial-2.jpg",
    "/testimonial-3.jpg",
    "/testimonial-4.jpg",
    "/testimonial-5.jpg",
    
  ];

  return (
    <section className="py-24 bg-emerald-950/50 overflow-hidden relative">
      {/* Section Header */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic text-white mb-4">
          COMMUNITY <span className="text-lime-400">SIGHTINGS</span>
        </h2>
        <div className="h-1 w-24 bg-lime-400 mx-auto rounded-full shadow-[0_0_15px_rgba(163,230,53,0.8)]" />
      </div>

      {/* Infinite Scroll Container */}
      <div className="flex w-full relative">
        <div className="flex animate-scroll hover:pause-scroll gap-6 px-6">
          {/* We double the array to create a seamless loop */}
          {[...images, ...images].map((src, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 relative group"
            >
              <div className="absolute inset-0 bg-lime-400/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full w-full rounded-[2rem] border-2 border-emerald-800 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:border-lime-400/50">
                <img 
                  src={src} 
                  alt={`BigFoot Sighting ${index}`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-lime-400 text-2xl">👣</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global CSS for the Animation (Add to your globals.css or use style tag) */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 2)); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
          width: max-content;
        }
        .hover\:pause-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}