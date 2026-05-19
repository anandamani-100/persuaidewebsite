import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "Cookie Policy | Persuaide",
  description: "Persuaide Cookie Policy - Learn about cookies we use to improve platform delivery.",
};

export default function CookiePolicyPage() {
  return (
    <main className="flex-1 flex flex-col bg-white font-sans">
      {/* Hero Header (Brand Blue Matching Main Theme) */}
      <section className="relative pt-40 pb-24 px-6 md:px-8 bg-[#0038FF] overflow-hidden flex flex-col items-center justify-center text-center select-none">
        {/* Ultra-premium radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#0038FF_0%,#002DB3_50%,#001980_100%)] pointer-events-none z-0" />
        
        {/* Elegant Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none z-10" />
        
        {/* Header Navigation overlay */}
        <Navbar />
        
        {/* Content container aligned to center of screen */}
        <div className="relative z-20 max-w-7xl mx-auto mt-8 flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]">
              Cookie Policy
            </h1>
            <p className="text-blue-100/70 text-[12px] md:text-sm font-semibold uppercase tracking-widest">
              Last Updated: May 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Area aligned to max-w-7xl with centered content block */}
      <section className="py-16 md:py-24 px-6 md:px-8 w-full flex-1">
        <div className="max-w-7xl mx-auto relative">
          
          {/* Policy Block POSITIONED in the Center (mx-auto) but with TEXT left-aligned (text-left) */}
          <article className="max-w-3xl mx-auto w-full text-left text-slate-600 text-base md:text-lg leading-relaxed space-y-10">
            <p>
              This Cookie Policy explains how <span className="font-bold text-[#0038FF]">PERSUAIDE</span> uses tracking mechanisms to deliver core functionality, analyze traffic metrics, and enhance user experiences across our services.
            </p>

            <hr className="border-slate-100 w-full" />

            {/* Section 1 */}
            <div className="space-y-4 w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">1. What Are Cookies?</h2>
              <p>
                Cookies are lightweight alphanumeric identifiers placed on storage configurations of client browsers. They allow websites to maintain state across page renders, verify workspace sessions, and gather telemetry regarding system interactions.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4 w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">2. How We Use Cookies</h2>
              <p>
                PERSUAIDE utilizes tracking technologies solely to support workspace stability, analytical metric verification, and application security. We prohibit tracking for external profiling.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4 w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">3. Categories & Classification</h2>
              <ul className="list-disc pl-5 space-y-3 mt-2 text-slate-600 marker:text-[#0038FF]">
                <li>
                  <span className="font-bold text-slate-800">Strictly Necessary:</span> 
                  Crucial for core login services and backend verification. These are default-configured.
                </li>
                <li>
                  <span className="font-bold text-slate-800">Performance & Telemetry:</span> 
                  Provides insights regarding generation latency to optimize platform response profiles.
                </li>
                <li>
                  <span className="font-bold text-slate-800">User Context:</span> 
                  Enables caching of dashboard layouts for faster, seamless future load states.
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4 w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">4. Control & Preferences</h2>
              <p>
                Most web browsers automatically permit cookie configurations. However, you can manually adjust preferences within settings to delete, block, or toggle acceptance profiles.
              </p>
              <p>
                If you desire a detailed list of specific storage items, contact us: <br />
                <a href="mailto:anand@persuaide.ai" className="text-[#0038FF] font-bold hover:underline">anand@persuaide.ai</a>
              </p>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
