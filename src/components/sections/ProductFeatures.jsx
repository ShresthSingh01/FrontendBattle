import { useEffect, useRef } from 'react';
import SectionEyebrow from '../ui/SectionEyebrow';

export default function ProductFeatures() {
  const rowRef = useRef(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const handleReveal = () => {
      const children = Array.from(el.children);
      children.forEach((child, i) => {
        child.animate(
          [
            { opacity: 0, transform: 'translateY(40px)' },
            { opacity: 1, transform: 'translateY(0)' }
          ],
          {
            duration: 600,
            delay: i * 100,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fill: 'forwards'
          }
        );
      });
    };

    el.addEventListener('reveal', handleReveal);
    return () => el.removeEventListener('reveal', handleReveal);
  }, []);

  return (
    <section data-reveal id="product-features" className="bg-oceanic-noir pt-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header section (restricted to 2 center cols, same as spine width) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <div className="col-span-1 md:col-start-2 md:col-span-2">
            <SectionEyebrow label="OUR PRODUCT" />
            <h2 className="text-4xl font-sans font-light text-white mb-6">
              Build logic at scale
            </h2>
            <p className="font-sans text-lg text-[#888888] max-w-xl">
              Design, deploy, and manage sophisticated AI workflows through an intuitive visual interface. No complex coding—just pure logic.
            </p>
          </div>
        </div>

        {/* Workflow Canvas Mockup (spanning entire spine, e.g. col 2 to 3) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
          <div className="col-span-1 md:col-start-2 md:col-span-2 border border-[rgba(255,255,255,0.1)] rounded-xl bg-[#0f0f0f] p-8 min-h-[400px] flex items-center justify-center relative overflow-hidden">
            {/* Grid background pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />
            
            {/* Minimal CSS Wireframe Boxes */}
            <div className="flex items-center gap-8 relative z-10 opacity-70">
              
              <div className="w-32 h-20 border border-[rgba(255,255,255,0.2)] bg-[#1a1a1a] rounded flex flex-col items-center justify-center gap-2">
                <div className="w-6 h-6 border border-white/40 rounded-full" />
                <span className="font-mono text-[10px] text-white/60">Email Trigger</span>
              </div>

              {/* Dotted Line */}
              <div className="w-8 border-t-2 border-dashed border-white/20" />

              <div className="w-32 h-20 border border-[rgba(255,255,255,0.2)] bg-[#1a1a1a] rounded flex flex-col items-center justify-center gap-2">
                <div className="w-4 h-4 border border-white/40" />
                <span className="font-mono text-[10px] text-white/60">Edit Fields</span>
              </div>

              {/* Dotted Line */}
              <div className="w-8 border-t-2 border-dashed border-white/20" />

              {/* Sub-group box */}
              <div className="border border-[rgba(255,255,255,0.1)] p-4 rounded-lg flex gap-8 items-center bg-nocturnal-exp">
                <div className="w-32 h-24 border border-forsythia/40 bg-forsythia/5 rounded flex flex-col items-center justify-center gap-2">
                  <div className="text-xl">⚡</div>
                  <span className="font-mono text-[10px] text-forsythia">AI Agent</span>
                </div>
                
                <div className="w-8 border-t-2 border-dashed border-white/20" />
                
                <div className="w-32 h-24 border border-[rgba(255,255,255,0.2)] bg-[#1a1a1a] rounded flex flex-col items-center justify-center gap-2">
                  <div className="font-mono text-white/40">&lt;/&gt;</div>
                  <span className="font-mono text-[10px] text-white/60">Code Node</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 4-column feature row */}
        <div ref={rowRef} data-reveal className="grid grid-cols-1 md:grid-cols-4 border-t border-[rgba(255,255,255,0.08)]">
          {[
            {
              title: "Infinite Visual Canvas",
              desc: "Map complex agentic workflows without losing the big picture.",
              icon: "⊹"
            },
            {
              title: "Autonomous Execution",
              desc: "Agents self-correct and handle exceptions seamlessly.",
              icon: "⟳"
            },
            {
              title: "End-to-End Encryption",
              desc: "Zero-trust architecture ensuring your prompts stay private.",
              icon: "⌅"
            },
            {
              title: "Production-Ready Stack",
              desc: "Deploy instantly to high-availability global edge networks.",
              icon: "⎍"
            }
          ].map((feat, idx) => (
            <div key={idx} className="p-8 border-r border-[rgba(255,255,255,0.08)] last:border-r-0">
              <div className="w-12 h-12 mb-6 border border-white/20 flex items-center justify-center text-xl text-white">
                {feat.icon}
              </div>
              <h3 className="font-mono text-base font-semibold text-white mb-3">
                {feat.title}
              </h3>
              <p className="font-sans text-sm text-[#888888] leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
