"use client";
import React, { useState, useEffect } from "react";
export default function HeroBlue() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen px-6 md:px-12 bg-[#0038FF] overflow-hidden flex flex-col items-center justify-center z-10">

      {/* Custom Styles for Modern Border Beam Button Animation — Harmonized for light background */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spin-gradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .border-beam-container-harmonized {
          position: relative;
          padding: 1.5px;
          border-radius: 9999px;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 56, 255, 0.15);
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 56, 255, 0.1);
        }
        .border-beam-container-harmonized:hover {
          box-shadow: 0 8px 30px rgba(0, 56, 255, 0.2);
          transform: translateY(-1px);
        }
        .border-beam-spinner-harmonized {
          position: absolute;
          width: 250%;
          height: 250%;
          background: conic-gradient(from 0deg, transparent 65%, #0038FF 75%, transparent 76%);
          animation: spin-gradient 3s linear infinite;
          z-index: 1;
        }
        .border-beam-content-harmonized {
          position: relative;
          background: white;
          color: #0038FF;
          font-size: 14px;
          font-weight: 700;
          padding: 9px 24px;
          border-radius: 9999px;
          z-index: 2;
          transition: all 0.3s ease;
        }
        .border-beam-container-harmonized:hover .border-beam-content-harmonized {
          background: #0038FF;
          color: white;
        }
      `}} />

      {/* Ultra-premium, ultra-soft deep blue radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#0038FF_0%,#002DB3_50%,#001980_100%)] pointer-events-none z-0" />

      {/* Interactive, Bigger (64px) Grid - Adapted to look elegant on light blue */}
      {mounted && (
        <div
          className="absolute inset-0 grid overflow-hidden pointer-events-none z-10"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, 64px)',
            gridAutoRows: '64px',
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(circle at 50% 35%, black 80%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 35%, black 80%, transparent 100%)'
          }}
        >
          {Array.from({ length: 2000 }).map((_, index) => (
            <div
              key={index}
              className="transition-colors duration-1000 ease-out hover:bg-white/[0.06] hover:duration-0 pointer-events-auto"
            />
          ))}
        </div>
      )}

      {/* Hero Content Container */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center text-center z-20 gap-4 md:gap-5 mt-12 pointer-events-none">

        <h1 className="text-[32px] sm:text-4xl md:text-[56px] leading-[1.1] font-bold tracking-tight text-white max-w-7xl select-none">
          <span className="whitespace-nowrap">Persuasive campaigns</span> <br /> in seconds
        </h1>

        {/* Subtitle - Soft light grey/blue for ultimate premium dark readability */}
        <p className="text-blue-100/80 max-w-7xl text-base md:text-lg leading-[1.8] font-medium mt-0.5 select-none">
          Powerful campaigns made by <br className="md:hidden" /> 
          behavioural science and AI, <br className="md:hidden" /> 
          guaranteed to increase sales.
        </p>

        {/* CTA Button with Modern Border Beam Animation matching light context */}
        {/* <div className="pointer-events-auto mt-2">
          <a href="#contact" className="border-beam-container-harmonized">
            <div className="border-beam-spinner-harmonized" />
            <div className="border-beam-content-harmonized !text-base !px-9 !py-3.5">
              Log in
            </div>
          </a>
        </div> */}
      </div>
    </section>
  );
}
