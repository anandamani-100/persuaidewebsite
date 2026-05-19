"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className={`${isOpen ? "fixed inset-0 bg-[#001F99]/98 backdrop-blur-xl z-[100] flex-col items-center pt-6 pb-10 overflow-y-auto px-6" : "absolute top-6 left-0 right-0 z-50 px-4 flex justify-center"} flex transition-all duration-300`}>
      
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
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease forwards;
        }
      `}} />

      <nav className={`flex flex-col w-full max-w-7xl select-none transition-all duration-300 ${isOpen ? "h-full" : "py-3 md:py-4"}`}>
        
        {/* Main Row */}
        <div className="relative flex items-center justify-between w-full">
          
          {/* Logo */}
          <div className="flex items-center select-none pt-2 pl-[7px] md:pl-0">
            <Image
              src="/images/Logo.svg"
              alt="Persuaide Logo"
              width={170}
              height={38}
              priority
              className="h-9 md:h-12 w-auto object-contain brightness-0 invert opacity-95"
            />
          </div>

          {/* Desktop Navigation Links: Mathematically Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-9">
            <a href="#" className="text-lg font-medium text-blue-100/80 hover:text-white transition-colors duration-200">
              Home
            </a>
            <a href="#trust" className="text-lg font-medium text-blue-100/80 hover:text-white transition-colors duration-200">
              Proof
            </a>
            <a href="#features" className="text-lg font-medium text-blue-100/80 hover:text-white transition-colors duration-200">
              Product
            </a>
            <a href="#founder" className="text-lg font-medium text-blue-100/80 hover:text-white transition-colors duration-200">
              Founder
            </a>
          </div>

          {/* Right Action Trigger Zone */}
          <div className="flex items-center gap-2">
            
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center">
              <a href="#contact" className="border-beam-container">
                <div className="border-beam-spinner" />
                <div className="border-beam-content">
                  Log in
                </div>
              </a>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-blue-100/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg className="w-6 h-[27px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 21L18 6M6 6l12 15" />
                </svg>
              ) : (
                <svg className="w-7 h-[27px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 27">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 1.25h18M3 13.5h18M3 25.75h18" />
                </svg>
              )}
            </button>

          </div>

        </div>

        {/* Mobile Fullscreen Vertical Menu Links Stack */}
        {isOpen && (
          <div className="md:hidden flex-1 flex flex-col items-center justify-center gap-8 py-12 animate-slide-down w-full">
            <a href="#" onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-white hover:text-blue-200 transition-colors duration-200">
              Home
            </a>
            <a href="#trust" onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-blue-100/90 hover:text-white transition-colors duration-200">
              Proof
            </a>
            <a href="#features" onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-blue-100/90 hover:text-white transition-colors duration-200">
              Product
            </a>
            <a href="#founder" onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-blue-100/90 hover:text-white transition-colors duration-200">
              Founder
            </a>
            {/* Mobile Log In Button with full Border Beam animation */}
            <a href="#contact" onClick={() => setIsOpen(false)} className="border-beam-container mt-6 scale-110">
              <div className="border-beam-spinner" />
              <div className="border-beam-content">
                Log in
              </div>
            </a>
          </div>
        )}

      </nav>
    </header>
  );
}
