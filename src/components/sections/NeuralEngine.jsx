import { useEffect, useRef } from 'react';
import SectionEyebrow from '../ui/SectionEyebrow';
import FeatureNode3D from '../ui/FeatureNode3D';

export default function NeuralEngine() {
  const revealTextRef = useRef(null);

  useEffect(() => {
    const el = revealTextRef.current;
    if (!el) return;

    const handleReveal = () => {
      el.animate(
        [{ color: '#555555' }, { color: '#ffffff' }],
        { duration: 600, easing: 'ease-out', fill: 'forwards' }
      );
    };

    el.addEventListener('reveal', handleReveal);
    return () => el.removeEventListener('reveal', handleReveal);
  }, []);

  return (
    <section data-reveal id="neural-engine" className="bg-oceanic-noir pt-32 pb-24 border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-8">
        <div className="col-start-2 col-span-2">
          
          {/* AI Model Logos */}
          <div className="flex gap-4 mb-16 opacity-80">
            {['GPT-4', 'Claude 3', 'Perplexity', 'Llama 3'].map(model => (
              <div key={model} className="flex items-center justify-center h-12 px-6 rounded-full border border-[rgba(255,255,255,0.2)] font-mono text-sm text-white">
                {model}
              </div>
            ))}
          </div>

          <p className="text-[clamp(2rem,4vw,3.5rem)] font-sans font-light leading-tight tracking-tight text-white mb-8">
            Integrate with the world's most powerful neural engines. Seamlessly connect your custom data to GPT-4, Claude 3, and Perplexity for unmatched precision. Build agents that do
            <span 
              ref={revealTextRef} 
              data-reveal 
              className="text-[#555555]"
            >n't just process, they understand.</span>
          </p>

          <p className="font-sans text-lg text-[#888888] mb-24 max-w-xl">
            Switch models on the fly, chain them together, or let our routing engine decide the most efficient path for your query. All without changing a single line of code.
          </p>

          {/* 4 Isometric Icons */}
          <div className="grid grid-cols-4 gap-8">
            {[
              { label: 'Secure Enclave', type: 'secure' },
              { label: 'Data Connectors', type: 'connectors' },
              { label: 'Compute Nodes', type: 'compute' },
              { label: 'Memory Stack', type: 'memory' },
            ].map(item => (
              <div key={item.label} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 relative flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                  <FeatureNode3D type={item.type} />
                </div>
                <div className="font-mono text-xs text-[#888888] uppercase tracking-wider group-hover:text-forsythia transition-colors">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
