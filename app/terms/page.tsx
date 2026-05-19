import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "Terms of Service | Persuaide",
  description: "Persuaide Terms of Service - Read the terms governing your use of our platform.",
};

export default function TermsPage() {
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
              Terms of Service
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
              Welcome to <span className="font-bold text-[#0038FF]">PERSUAIDE</span>. By accessing or utilizing our software solutions, behavioral models, and generation tools, you agree to abide by the terms established below.
            </p>

            <hr className="border-slate-100 w-full" />

            {/* Section 1 */}
            <div className="space-y-4 w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">1. Acceptance & Agreement</h2>
              <p>
                By creating a workspace or using our API endpoints, you confirm acceptance of these Terms and agree to comply with applicable regulatory frameworks. If entering into this agreement on behalf of an organization, you certify authorized signing capacity.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4 w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">2. Workspace & Acceptable Use</h2>
              <p>
                You maintain full liability for credentials and activity executed within your assigned workspaces. Prohibited conduct incorporates:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-slate-600 marker:text-[#0038FF]">
                <li>Reverse engineering behavioural science weights or platform infrastructure.</li>
                <li>Extracting model assets or outputs to develop competing software.</li>
                <li>Generating campaigns facilitating deceptive or illegal activities.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4 w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">3. Intellectual Property</h2>
              <p>
                PERSUAIDE retains fully exclusive ownership of underlying platform architectures, logos, behavioral science insights, models, and generated layouts. While you retain ownership rights over campaign input copy, Persuaide owns the technological architecture enabling generation.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4 w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">4. Warranties & Liability Limit</h2>
              <p>
                PERSUAIDE services are furnished "As Is" without implicit performance or conversion guarantees. Campaign performance relies extensively on contextual factors. PERSUAIDE maximum aggregate liability for claims is limited to total fees paid in the 12 months preceding.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4 w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">5. Account Termination</h2>
              <p>
                We reserve fundamental rights to restrict, freeze, or terminate account access immediately without notification upon material breach of Acceptable Use restrictions or compliance obligations. 
              </p>
              <p>
                If you have queries about legal status, please write directly: <br />
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
