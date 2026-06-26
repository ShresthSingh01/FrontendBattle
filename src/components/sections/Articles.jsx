import React from 'react';
import SectionEyebrow from '../ui/SectionEyebrow';

export default function Articles() {
  return (
    <section data-reveal id="articles" className="bg-arctic-powder text-oceanic-noir pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <SectionEyebrow text="ARTICLES" color="dark" />
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-oceanic-noir mb-6 tracking-tight">
            Insights on neural logic
          </h2>
          <p className="font-sans text-lg text-oceanic-noir/70 max-w-2xl">
            Deep dives from our engineering team on building scalable AI architecture and optimizing context window efficiency.
          </p>
        </div>

        <div className="articles-grid">
          {/* Featured Article (Left, spanning 2 rows) */}
          <article className="article-featured cursor-pointer bg-oceanic-noir">
            <img 
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" 
              alt="Neural network visualization" 
              className="article-featured-img"
            />
            <div className="article-featured-title">
              <h3 className="mb-2">What It Takes to Turn AI Into a Business Asset</h3>
              <div className="font-mono text-xs text-white/70 uppercase tracking-wider font-normal">
                Oct 14, 2026 • 8 MIN READ
              </div>
            </div>
          </article>

          {/* Small Articles (Right) */}
          <div className="flex flex-col">
            <article className="article-small p-6 cursor-pointer hover:bg-oceanic-noir/5 transition-colors group">
              <div className="w-[140px] h-[100px] overflow-hidden bg-oceanic-noir mr-6">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop" 
                  alt="Server racks"
                  className="w-full h-full object-cover filter brightness-75 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-sans font-bold text-lg text-oceanic-noir mb-2 line-clamp-2">
                  Optimizing Context Windows for Large Language Models
                </h3>
                <div className="font-mono text-xs text-oceanic-noir/50 uppercase tracking-wider">
                  Oct 02, 2026
                </div>
              </div>
            </article>

            <article className="article-small p-6 cursor-pointer hover:bg-oceanic-noir/5 transition-colors border-none group">
              <div className="w-[140px] h-[100px] overflow-hidden bg-oceanic-noir mr-6">
                <img 
                  src="https://images.unsplash.com/photo-1633398361644-8df61111d4d3?q=80&w=400&auto=format&fit=crop" 
                  alt="Abstract code"
                  className="w-full h-full object-cover filter brightness-75 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-sans font-bold text-lg text-oceanic-noir mb-2 line-clamp-2">
                  Zero-Latency Vectors: The New Standard
                </h3>
                <div className="font-mono text-xs text-oceanic-noir/50 uppercase tracking-wider">
                  Sep 18, 2026
                </div>
              </div>
            </article>

            {/* Bottom-right CTA */}
            <div className="flex-1 border-t border-black/10 p-6 flex flex-col justify-center bg-transparent">
              <p className="font-sans text-oceanic-noir/70 mb-4">Access all our articles in one place.</p>
              <div>
                <button className="bg-transparent border border-black/20 text-oceanic-noir px-6 py-2 text-sm font-mono tracking-wider hover:border-black transition-colors uppercase">
                  View Articles
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
