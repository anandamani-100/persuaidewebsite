"use client";

import React from "react";
import Image from "next/image";

export default function Trust() {
  // Define exactly the 13 partners shown in the provided Figma layout
  const partners = [
    // Row 1
    { name: "HDFC Bank", logoPath: "/images/logo/hdfc.png", customClass: "" },
    { name: "Airtel", logoPath: "/images/logo/airtel.png", customClass: "scale-[0.85]" },
    { name: "HDFC Life", logoPath: "/images/hfclife.png", customClass: "" },
    { name: "DBS", logoPath: "/images/logo/dbs_trans.png", customClass: "" },
    
    // Remaining Rows
    { name: "YPO", logoPath: "/images/logo/ypo.png", customClass: "scale-[1.45]" },
    { name: "Franklin", logoPath: "/images/logo/ff.png", customClass: "scale-[2.5] md:scale-[2.0]" },
    { 
      name: "VI", 
      isElement: true, 
      element: (
        <div className="flex items-baseline font-extrabold text-red-600 text-[34px] select-none relative tracking-tighter transform -translate-y-0.5 scale-[1.3] md:scale-[1.5]" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
          <span>VI</span>
          <span className="absolute bottom-[2px] right-[2px] w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
        </div>
      )
    },
    { name: "Amdocs", logoPath: "/images/logo/amdocs_trans.webp", customClass: "" },
    { name: "Viacom", logoPath: "/images/logo/viacom.svg", customClass: "" },
    { 
      name: "Deloitte", 
      isElement: true, 
      element: (
        <div className="flex items-center font-bold text-black text-[34px] select-none tracking-tight" style={{ fontFamily: 'Arial, sans-serif' }}>
          Deloitte<span className="text-[#86BC25] ml-[1px]">.</span>
        </div>
      ) 
    },
    { name: "Mercedes-Benz", logoPath: "/images/logo/Merc.webp", customClass: "invert scale-[1.9] md:scale-[1.8]" },
    { name: "Gartner", logoPath: "/images/logo/gartner.svg", customClass: "scale-[2] md:scale-[2.2]" },
    { name: "Bajaj", logoPath: "/images/logo/bajaj.svg", customClass: "scale-[1.0] md:scale-[1.3] opacity-25" },
    { name: "Tata AIG", logoPath: "/images/logo/tataaig.png", customClass: "scale-[1.9] opacity-40" },
    { name: "Entorg", logoPath: "/images/logo/entorg.webp", customClass: "scale-[1.25]" },
      { name: "SBI Mutual Fund", logoPath: "/images/logo/sbi_trans.png", customClass: "scale-[1.9] opacity-40" },
  ];

  return (
    <section id="trust" className="relative py-16 md:py-24 px-6 md:px-8 bg-white overflow-hidden flex flex-col items-center justify-start border-t border-slate-100">

      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center text-center z-10">

        {/* Heading */}
        <h2 className="text-[32px] sm:text-4xl md:text-[56px] leading-[1.1] font-bold tracking-tight text-slate-900 max-w-7xl select-none mb-4">
       Years of proven <br />
          <span className="text-[#0038FF] whitespace-nowrap">behavioral science</span>
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 max-w-7xl text-base md:text-lg leading-[1.8] font-medium mb-12 md:mb-20 select-none">
          Proven for India's leading banks, insurers, telcos and global organizations.
        </p>

        {/* Universally Scaled Flex Cluster - Automatically centers any leftover items on 4th line */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-12 md:gap-x-20 md:gap-y-20 w-full max-w-5xl mx-auto">
          {partners.map((partner, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center select-none w-28 md:w-36 h-10 md:h-12"
              >
                {partner.isElement ? (
                  <div className="filter grayscale contrast-[1.2] opacity-80 flex items-center justify-center scale-[0.85]">
                    {/* Synthetic text normalized scaled down internally */}
                    {partner.element}
                  </div>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={partner.logoPath!}
                      alt={`${partner.name} Logo`}
                      width={140}
                      height={50}
                      priority={index < 8}
                      className={`max-h-full max-w-[120px] md:max-w-[140px] w-auto h-auto object-contain grayscale contrast-[1.2] opacity-80 mix-blend-multiply transition-transform ${partner.customClass || ""}`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
