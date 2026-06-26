import { useEffect } from 'react';
export default function Hero() {
  useEffect(() => {
    // Elements tagged data-hero-animate
    // Parallel with stagger — total orchestration stays under 500ms
    const heroEls = document.querySelectorAll('[data-hero-animate]');
    heroEls.forEach((el, i) => {
      el.animate(
        [
          { opacity: 0, transform: 'translateY(24px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        {
          duration: 250,
          delay: i * 70,       // 0, 70, 140, 210ms
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          fill: 'forwards'
        }
      );
    });
  }, []);

  return (
    <section id="hero" aria-label="Hero" className="min-h-screen relative flex items-end pb-24 overflow-hidden pt-32">
      <div className="w-full max-w-7xl mx-auto px-8 w-full grid grid-cols-[25%_1fr_25%]">
        <div className="col-start-2 col-end-3 relative z-10 flex flex-col justify-end">
          <h1 
            style={{ opacity: 0 }}
            className="font-sans text-[clamp(3rem,7vw,6rem)] font-bold text-white leading-[1.05] tracking-tight mb-6" 
            data-hero-animate
          >
            Power your<br/>future with AI
          </h1>

          <p 
            style={{ opacity: 0 }}
            className="font-sans text-lg text-mid-gray max-w-[480px] leading-[1.6] mb-10" 
            data-hero-animate
          >
            Deploy custom enterprise agents and automate complex workflows.
            Scale your intelligence with NexaFlow today.
          </p>

          <div>
            <button 
              style={{ opacity: 0 }}
              className="inline-flex items-center gap-2.5 py-3 px-6 bg-transparent border border-white/60 text-white font-mono text-sm tracking-wider cursor-pointer transition-colors duration-150 hover:bg-white/5 hover:border-white group" 
              data-hero-animate 
              aria-label="Build a workflow — get started"
            >
              <span className="group-hover:animate-[spin360_300ms_ease-out_forwards] flex items-center justify-center" aria-hidden="true">⚡</span>
              Build A Workflow
            </button>
          </div>
        </div>

        {/* Logo strip — right quadrant, vertical arrangement */}
        <div 
          className="col-start-3 col-end-4 flex flex-col gap-6 justify-center items-end pl-8" 
          aria-label="Trusted by"
          data-hero-animate
          style={{ opacity: 0 }}
        >
          {/* Placeholders for logos */}
          <div className="w-24 h-8 bg-white/20 rounded"></div>
          <div className="w-24 h-8 bg-white/20 rounded"></div>
          <div className="w-24 h-8 bg-white/20 rounded"></div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin360 { to { transform: rotate(360deg); } }
      `}} />
    </section>
  );
}
