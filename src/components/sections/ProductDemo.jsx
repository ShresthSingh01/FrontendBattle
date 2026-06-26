export default function ProductDemo() {
  return (
    <section 
      id="product-demo" 
      aria-label="Product demonstration video" 
      className="relative h-screen bg-[#0a0a0a] flex items-center justify-center border-t border-[rgba(255,255,255,0.08)]"
    >
      {/* Ambient glow background */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,1,0.05)_0%,transparent_60%)]"
      />

      {/* Large brand logo center */}
      <div className="text-center relative z-10">
        <div className="text-[8rem] mb-12" aria-hidden="true">⚡</div>

        {/* Play button with 4-corner bracket decoration */}
        <button 
          className="play-btn relative px-10 py-4 bg-transparent border border-white/40 text-white font-mono text-sm tracking-[0.15em] cursor-pointer transition-colors duration-150 ease-out hover:border-white"
          aria-label="Play 2 minute product demonstration video"
        >
          <span>PLAY VIDEO</span>
        </button>
      </div>

      <span className="absolute top-8 right-8 font-mono text-xs text-[#888888]">
        ⏱ 2 Minutes Watch
      </span>
    </section>
  );
}
