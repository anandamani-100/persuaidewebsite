"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: "X",
      href: "https://twitter.com",
      icon: (
        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="w-full bg-[#0E0E10] text-[#8E8E93] select-none border-t border-zinc-900 pt-16 pb-12">
      
      {/* Master Call to Action Intro */}
      <div className="w-full px-6 sm:px-12 md:px-[84px] mb-14 flex flex-col items-center text-center md:items-start md:text-left gap-4">
        <h2 className="text-[32px] sm:text-4xl md:text-[56px] font-bold text-white tracking-tight select-none leading-[1.1]">
          Want to create persuasive campaigns?
        </h2>
        <div className="mt-3">
          <a 
            href="mailto:anand@persuaide.ai" 
            className="inline-flex items-center justify-center bg-[#0038FF] hover:bg-[#002ecf] text-white px-7 py-3 md:px-9 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 shadow-[0_10px_30px_rgba(0,56,255,0.25)] hover:shadow-[0_15px_35px_rgba(0,56,255,0.4)] hover:-translate-y-0.5 tracking-wide"
          >
            anand@persuaide.ai
          </a>
        </div>
      </div>





      {/* Bottom Copyright & Attribution Section */}
      <div className="w-full px-6 sm:px-12 md:px-[84px] pt-6">
        <div className="flex flex-col gap-6 pt-6 border-t border-zinc-800/40">
          {/* Merged Logo & Menu Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 w-full">
            {/* Left aligned logo on desktop */}
            <div className="flex items-center justify-center md:justify-start select-none">
              <Image
                src="/images/Logo.svg"
                alt="PERSUAIDE Logo"
                width={150}
                height={38}
                priority
                className="h-7 w-auto object-contain brightness-0 invert opacity-95"
              />
            </div>

            {/* Centered Menu Links Row */}
            {/* <div className="flex items-center justify-center gap-x-8 md:gap-x-10 py-1">
              <a href="#" className="hover:text-white transition-colors duration-200 text-[13px] md:text-[14px] font-medium text-zinc-400">Home</a>
              <a href="#trust" className="hover:text-white transition-colors duration-200 text-[13px] md:text-[14px] font-medium text-zinc-400">Proven</a>
              <a href="#features" className="hover:text-white transition-colors duration-200 text-[13px] md:text-[14px] font-medium text-zinc-400">Product</a>
              <a href="#founder" className="hover:text-white transition-colors duration-200 text-[13px] md:text-[14px] font-medium text-zinc-400">Founder</a>
            </div> */}

            {/* Right balance spacer */}
            <div className="hidden md:block" aria-hidden="true"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between text-[12px] font-medium text-zinc-500 gap-6 select-none text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <span>© {currentYear} PERSUAIDE. All rights reserved.</span>
              <span className="hidden sm:inline text-[10px] text-zinc-600">|</span>
              <div className="flex items-center gap-1.5">
                <span>Built by</span>
                <a 
                  href="https://softexedge.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zinc-500 hover:text-zinc-300 font-semibold transition-colors duration-200"
                >
                  Softexedge
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2">
              <a href="/privacy-policy" className="hover:text-zinc-300 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-zinc-300 transition-colors duration-200">
                Terms of Service
              </a>
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


