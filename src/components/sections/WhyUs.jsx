import { useEffect, useRef } from 'react';
import SectionEyebrow from '../ui/SectionEyebrow';

export default function WhyUs() {
  const svg1Ref = useRef(null);
  const svg2Ref = useRef(null);

  useEffect(() => {
    const refs = [svg1Ref, svg2Ref];
    const handlers = refs.map(ref => {
      const el = ref.current;
      if (!el) return null;
      
      const handleReveal = () => {
        el.classList.add('svg-draw-animate');
      };
      
      el.addEventListener('reveal', handleReveal);
      return { el, handleReveal };
    }).filter(Boolean);

    return () => {
      handlers.forEach(({ el, handleReveal }) => {
        el.removeEventListener('reveal', handleReveal);
      });
    };
  }, []);

  return (
    <section data-reveal id="why-us" className="grid md:grid-cols-2 min-h-[800px]">
      
      {/* Left Dark Side */}
      <div className="bg-oceanic-noir relative overflow-hidden flex items-center justify-center p-8 md:p-12 lg:p-24 min-h-[400px]">
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
      <div className="bg-arctic-powder text-oceanic-noir p-8 md:p-12 lg:p-24 flex flex-col justify-center">
        <div className="max-w-xl">
          <SectionEyebrow text="ENGINEERING TENETS" color="dark" />
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-oceanic-noir mb-6 tracking-tight">
            Built for the long term
          </h2>
          <p className="font-sans text-lg text-oceanic-noir/70 mb-16">
            We don't just ship code; we architect neural ecosystems. Our foundational principles ensure your AI infrastructure scales securely, without technical debt.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            
            {/* Feature 1 */}
            <div>
              <div className="w-12 h-12 bg-oceanic-noir rounded-lg mb-6 flex items-center justify-center">
                {/* Placeholder Isometric SVG: Prime Logic */}
                <svg ref={svg1Ref} data-reveal xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g stroke="var(--forsythia)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                    <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z"/>
                    <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/>
                  </g>
                </svg>
              </div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-oceanic-noir font-semibold mb-3">Prime Logic</h3>
              <p className="font-sans text-sm text-oceanic-noir/60 leading-relaxed">
                We prioritize high-fidelity model alignment, ensuring decision vectors remain uncorrupted under extreme query volumes.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="w-12 h-12 bg-oceanic-noir rounded-lg mb-6 flex items-center justify-center">
                {/* Placeholder Isometric SVG: Total Clarity */}
                <svg ref={svg2Ref} data-reveal xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g stroke="var(--forsythia)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                    <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"/>
                    <path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"/>
                  </g>
                </svg>
              </div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-oceanic-noir font-semibold mb-3">Total Clarity</h3>
              <p className="font-sans text-sm text-oceanic-noir/60 leading-relaxed">
                Gain full observability into how your data flows. Zero black boxes. Every token processed is logged and auditable.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="w-12 h-12 bg-oceanic-noir rounded-lg mb-6 flex items-center justify-center">
                {/* Placeholder Isometric SVG: Fast Cycles */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path stroke="var(--forsythia)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/>
                </svg>
              </div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-oceanic-noir font-semibold mb-3">Fast Cycles</h3>
              <p className="font-sans text-sm text-oceanic-noir/60 leading-relaxed">
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
