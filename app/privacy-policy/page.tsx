import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "Privacy Policy | Persuaide",
  description: "Persuaide Privacy Policy - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
              At <span className="font-bold text-[#0038FF]">PERSUAIDE</span>, we believe privacy is a fundamental human right. We are committed to transparency and to protecting your information. This policy describes what data we process, why we process it, and your choices regarding your personal information.
            </p>

            <hr className="border-slate-100 w-full" />

            {/* Section 1 */}
            <div className="space-y-4 w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">1. Information We Collect</h2>
              <p>
                We gather limited analytical and operational data when you utilize our persuasion engineering services:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-slate-600 marker:text-[#0038FF]">
                <li><span className="font-semibold text-slate-800">Account Metadata:</span> Email address, names, and authentication credentials required for securing your workspace.</li>
                <li><span className="font-semibold text-slate-800">Campaign Inputs:</span> Anonymized copy or data models you input into our platform for analysis.</li>
                <li><span className="font-semibold text-slate-800">Analytics Data:</span> Device characteristics, IP logs, and navigation metadata to maintain platform system health.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-4 w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">2. How We Use Information</h2>
              <p>
                Your inputs are processed through our proprietary behavioural models to generate actionable persuasive assets. Specifically, we use data to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-slate-600 marker:text-[#0038FF]">
                <li>Verify compliance and maintain analytical platform operations.</li>
                <li>Refine proprietary algorithmic models for optimal persuasive efficacy.</li>
                <li>Provide user support and crucial technical notices related to requests.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4 w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">3. Information Sharing</h2>
              <p>
                PERSUAIDE does not monetize, sell, or trade your campaign data. We only share operational metadata with secured third-party processors (like server hosting and database providers) absolutely required to host our software infrastructures. All processors conform to rigid international privacy standards.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4 w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">4. Data Security</h2>
              <p>
                We incorporate bank-grade encryption protocols (AES-256 and TLS 1.3) for all data both in transit and at rest. We apply restricted, least-privilege permissions across our data architectures to prohibit unauthorized access or extraction attempts.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4 w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">5. Your Rights & Contact</h2>
              <p>
                Depending on jurisdiction, you retain the right to request deletion, correction, or extraction of stored accounts and associated generational metadata. 
              </p>
              <p>
                For any specific inquiries regarding data handling or exercise of rights, please write to us directly at: <br />
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
