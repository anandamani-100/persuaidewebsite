"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const carouselImages = [
  {
    src: "/images/f1.png",
    alt: "New Campaign Builder",
    label: "Generate persuasive campaigns in seconds"
  },
  {
    src: "/images/f2.png",
    alt: "Brand and Products Customization",
    label: "Generate campaigns customised to your brand"
  },
  {
    src: "/images/allcamp.png",
    alt: "All Campaigns Overview",
    label: "Generate unlimited number of persuasive campaigns"
  }
];

const points = [
  {
    title: "WhatsApp, SMS & RCS campaigns in seconds",
    desc: "Generate multi-channel persuasive campaigns ready to launch instantly",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641l-.523 2.052a.375.375 0 0 0 .506.44l2.502-1.251a1.125 1.125 0 0 1 1.012-.014c1.118.6 2.387.902 3.646.902Z" />
      </svg>
    ),
  },
  {
    title: "Guaranteed to increase sales",
    desc: "Every campaign is engineered to convert, backed by five decades of behavioural science research proven to work.",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Customised to your brand",
    desc: "Every persuasive campaign is tailored to your tone, voice, and brand guidelines.",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
        <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
        <line x1="4" y1="18" x2="20" y2="18" strokeLinecap="round" />
        <circle cx="8" cy="6" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="15" cy="12" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="10" cy="18" r="2.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="relative min-h-screen flex flex-col justify-center py-16 md:py-24 px-6 md:px-8 bg-gradient-to-b from-[#0038FF] to-[#001980] overflow-hidden">
      
      {/* Subtle glowing background accents for premium aesthetic */}
      <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-blue-400/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Centered Heading Section */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center text-center z-10 mb-12 md:mb-20">
        <h2 className="text-[32px] sm:text-4xl md:text-[56px] leading-[1.1] font-bold tracking-tight text-white max-w-7xl select-none mb-6">
          Fast. Accurate. Effective.
        </h2>

        <p className="text-blue-50/80 max-w-7xl text-base md:text-lg leading-[1.8] font-medium select-none">
          Everything you need to launch behaviourally-optimised campaigns that actually convert.
        </p>
      </div>

      {/* 2-Column Grid for Points and Image */}
      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch z-10">
        
        {/* Left Side: Points list expanded to fill exact visual height of right image */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full w-full gap-10 lg:gap-0 py-6 md:py-10">
          {points.map((point, index) => (
            <div key={index} className="flex gap-4 items-start group">
              {/* Enhanced circular transparent glassmorphic Icon wrapper for dark mode */}
              <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20 shadow-[0_4px_16px_rgba(255,255,255,0.05)] select-none group-hover:bg-white/15 transition-colors duration-300">
                {point.icon}
              </div>
              {/* Text Content */}
              <div className="flex-col text-left">
                <h3 className="text-[20px] md:text-[22px] font-semibold text-white font-sans mb-1 select-none leading-snug">
                  {point.title}
                </h3>
                <p className="text-blue-50/70 text-[15px] md:text-[18px] leading-[1.8] font-medium">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: High-End Interactive Mockup Carousel */}
        <div className="lg:col-span-6 w-full flex flex-col items-center justify-center relative select-none py-6 md:py-10">
          
          <div className="relative w-full max-w-[740px] bg-slate-900/90 backdrop-blur-md rounded-2xl p-2.5 border border-white/10 overflow-hidden">
            
            {/* Mockup Header Bar (Chrome dots) */}
            <div className="flex items-center justify-between w-full pb-2 px-3 border-b border-white/10 mb-2 select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] block opacity-80" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] block opacity-80" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] block opacity-80" />
              </div>
              <div className="w-10" />
            </div>

            {/* Slider Viewport */}
            <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden bg-white">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    className="object-cover select-none"
                  />
                </div>
              ))}

              {/* Manual Navigation Arrows adjusted for the dark theme */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-sm border border-slate-200 hover:bg-slate-50 text-black flex items-center justify-center transition-all duration-200 z-20 pointer-events-auto cursor-pointer"
                aria-label="Previous Slide"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((prev) => (prev + 1) % carouselImages.length);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-sm border border-slate-200 hover:bg-slate-50 text-black flex items-center justify-center transition-all duration-200 z-20 pointer-events-auto cursor-pointer"
                aria-label="Next Slide"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>



        </div>

      </div>
    </section>
  );
}
