"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
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

  // Smooth 3D scroll-driven perspective tilt and scale
  const transformStyle = {
    transform: `perspective(1200px) rotateX(${Math.max(0, 10 - scrollY * 0.03)}deg) scale(${Math.min(1.02, 0.96 + scrollY * 0.00015)}) translateY(${Math.min(15, scrollY * 0.03)}px)`,
    transition: "transform 0.4s cubic-bezier(0.1, 0.8, 0.2, 1)",
  };

  return (
    <section className="relative min-h-screen px-6 md:px-12 bg-white overflow-hidden flex flex-col items-center justify-center z-10">
      
      {/* Custom Styles for Modern Border Beam Button Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin-gradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .border-beam-container {
          position: relative;
          padding: 1.5px;
          border-radius: 9999px;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 56, 255, 0.15);
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 56, 255, 0.2);
        }
        .border-beam-container:hover {
          box-shadow: 0 6px 20px rgba(0, 56, 255, 0.35);
          transform: translateY(-1px);
        }
        .border-beam-spinner {
          position: absolute;
          width: 250%;
          height: 250%;
          background: conic-gradient(from 0deg, transparent 65%, #0038FF 75%, transparent 76%);
          animation: spin-gradient 3s linear infinite;
          z-index: 1;
        }
        .border-beam-content {
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
        .border-beam-container:hover .border-beam-content {
          background: #0038FF;
          color: white;
        }
      `}} />

      {/* Exact reference image background: Premium soft radial gradient spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,#ffffff_0%,#f4f4f7_45%,#e4e4e9_100%)] pointer-events-none z-0" />

      {/* Interactive, Bigger (64px) Perfect Square Background Grid */}
      {mounted && (
        <div 
          className="absolute inset-0 grid overflow-hidden pointer-events-none z-10"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, 64px)',
            gridAutoRows: '64px',
            maskImage: 'radial-gradient(circle at 50% 35%, black 80%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 35%, black 80%, transparent 100%)'
          }}
        >
          {Array.from({ length: 800 }).map((_, index) => (
            <div
              key={index}
              className="border-r border-b border-slate-950/[0.05] transition-colors duration-1000 ease-out hover:bg-[#0038FF]/10 hover:duration-0 pointer-events-auto"
            />
          ))}
        </div>
      )}

      {/* Hero Content Container sitting directly on the spotlight background */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center text-center z-20 gap-5 sm:gap-6 pt-32 pb-12 md:py-0 pointer-events-none">

        {/* Heading Section — Font weight made elegant/normal-bold */}
        <h1 className="text-[38px] sm:text-[56px] md:text-[82px] leading-[1.15] sm:leading-[1.1] font-bold tracking-tight text-slate-900 max-w-4xl select-none font-sans px-4">
          Persuasive campaigns <br className="hidden sm:block" />
          <span className="text-[#0038FF]">in seconds</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-500 max-w-xl sm:max-w-2xl text-[15px] sm:text-lg leading-relaxed font-medium select-none px-6">
          Powerful campaigns made by behavioural science and AI, guaranteed to increase sales.
        </p>

        {/* CTA Button with Modern Border Beam Animation */}
        {/* <div className="pointer-events-auto mt-4">
          <a href="#contact" className="border-beam-container">
            <div className="border-beam-spinner" />
            <div className="border-beam-content !text-base !px-9 !py-3.5">
              Log in
            </div>
          </a>
        </div> */}
      </div>
    </section>
  );
}
