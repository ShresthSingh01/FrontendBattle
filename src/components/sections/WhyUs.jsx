import React from 'react';
import SectionEyebrow from '../ui/SectionEyebrow';

export default function WhyUs() {
  return (
    <section id="why-us" className="grid md:grid-cols-2 min-h-[800px]">
      
      {/* Left Dark Side */}
      <div className="bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center p-12 lg:p-24">
        {/* Animated dot matrix background */}
        <div className="dot-grid-bg"></div>
        
        <div className="relative z-10 w-full max-w-md">
          {/* Abstract geometric element overlapping the split */}
          <div className="w-64 h-64 border border-white/10 rounded-full flex items-center justify-center">
            <div className="w-32 h-32 border border-forsythia/30 rotate-45 transform transition-transform duration-1000 hover:rotate-90"></div>
          </div>
        </div>
      </div>

      {/* Right Light Side */}
      <div className="bg-[#f0f0ee] p-12 lg:p-24 flex flex-col justify-center">
        <div className="max-w-xl">
          <SectionEyebrow text="ENGINEERING TENETS" color="dark" />
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-black mb-6 tracking-tight">
            Built for the long term
          </h2>
          <p className="font-sans text-lg text-black/70 mb-16">
            We don't just ship code; we architect neural ecosystems. Our foundational principles ensure your AI infrastructure scales securely, without technical debt.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            
            {/* Feature 1 */}
            <div>
              <div className="w-12 h-12 bg-black rounded-lg mb-6 flex items-center justify-center">
                {/* Placeholder Isometric SVG: Prime Logic */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--forsythia)" strokeWidth="1.5">
                  <path d="M12 3l10 5.5v11L12 25l-10-5.5v-11L12 3z" />
                  <path d="M12 3v11" />
                  <path d="M22 8.5l-10 5.5" />
                  <path d="M2 8.5l10 5.5" />
                </svg>
              </div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-black font-semibold mb-3">Prime Logic</h3>
              <p className="font-sans text-sm text-black/60 leading-relaxed">
                We prioritize high-fidelity model alignment, ensuring decision vectors remain uncorrupted under extreme query volumes.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="w-12 h-12 bg-black rounded-lg mb-6 flex items-center justify-center">
                {/* Placeholder Isometric SVG: Total Clarity */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--forsythia)" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-black font-semibold mb-3">Total Clarity</h3>
              <p className="font-sans text-sm text-black/60 leading-relaxed">
                Gain full observability into how your data flows. Zero black boxes. Every token processed is logged and auditable.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="w-12 h-12 bg-black rounded-lg mb-6 flex items-center justify-center">
                {/* Placeholder Isometric SVG: Fast Cycles */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--forsythia)" strokeWidth="1.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-black font-semibold mb-3">Fast Cycles</h3>
              <p className="font-sans text-sm text-black/60 leading-relaxed">
                Transition from prototype to production in weeks, leveraging our standardized neural node templates.
              </p>
            </div>

            {/* Feature 4 (Empty slot for asymmetric layout per spec) */}
            <div></div>

          </div>
        </div>
      </div>

    </section>
  );
}
