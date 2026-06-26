import { useEffect, useRef } from 'react';
import SectionEyebrow from '../ui/SectionEyebrow';

function animateCounter(el, target, suffix, duration = 1500) {
  const start = performance.now();
  const isFloat = target % 1 !== 0;
  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = isFloat ? (target * eased).toFixed(1) : Math.round(target * eased);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

export default function Statistics() {
  const stat1Ref = useRef(null);
  const stat2Ref = useRef(null);
  const stat3Ref = useRef(null);

  useEffect(() => {
    const refs = [
      { ref: stat1Ref, target: 12, suffix: 'ms' },
      { ref: stat2Ref, target: 10, suffix: 'x' },
      { ref: stat3Ref, target: 98, suffix: '%' },
    ];

    const handlers = refs.map(({ ref, target, suffix }) => {
      const el = ref.current;
      if (!el) return null;
      
      const handleReveal = () => {
        animateCounter(el, target, suffix);
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
    <section data-reveal id="statistics" className="bg-oceanic-noir pt-16 pb-32 border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-start-2 md:col-span-2">
          
          <SectionEyebrow label="STATISTICS" />
          
          <h2 className="text-3xl font-sans text-white mb-6 pr-12">
            Quantifiable impact across every deployment. We measure success by the speed and scale of your neural ops.
          </h2>

          <button className="mb-20 px-6 py-3 border border-white/20 text-white font-mono text-sm tracking-wider uppercase hover:border-white/60 transition-colors">
            View Report
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative py-8 border-t border-[rgba(255,255,255,0.08)] after:absolute after:top-[-1px] after:right-0 after:w-3 after:h-3 after:border-t after:border-r after:border-white/40">
              <div 
                ref={stat1Ref} 
                data-reveal 
                className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-light text-white tracking-[-0.03em] mb-2"
              >0ms</div>
              <p className="font-mono text-xs text-[#888888] uppercase tracking-wider">Average latency</p>
            </div>
            
            <div className="relative py-8 border-t border-[rgba(255,255,255,0.08)] after:absolute after:top-[-1px] after:right-0 after:w-3 after:h-3 after:border-t after:border-r after:border-white/40">
              <div 
                ref={stat2Ref} 
                data-reveal 
                className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-light text-white tracking-[-0.03em] mb-2"
              >0x</div>
              <p className="font-mono text-xs text-[#888888] uppercase tracking-wider">Processing speed</p>
            </div>
            
            <div className="relative py-8 border-t border-[rgba(255,255,255,0.08)] after:absolute after:top-[-1px] after:right-0 after:w-3 after:h-3 after:border-t after:border-r after:border-white/40">
              <div 
                ref={stat3Ref} 
                data-reveal 
                className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-light text-white tracking-[-0.03em] mb-2"
              >0%</div>
              <p className="font-mono text-xs text-[#888888] uppercase tracking-wider">Uptime infrastructure</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
