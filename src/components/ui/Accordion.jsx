import React from 'react';

export default function Accordion({ cards, activeIndex, setActiveIndex }) {
  return (
    <div role="list" className="accordion md:hidden">
      {cards.map((card, i) => (
        <div key={card.id} role="listitem">
          <button
            role="button"
            aria-expanded={activeIndex === i}
            aria-controls={`accordion-panel-${i}`}
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            className="accordion-trigger"
          >
            <span>{card.title}</span>
            <span className={`accordion-chevron flex items-center justify-center transform transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`}
              aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"/>
              </svg>
            </span>
          </button>
          <div
            id={`accordion-panel-${i}`}
            role="region"
            aria-hidden={activeIndex !== i}
            className="accordion-panel"
            style={{ maxHeight: activeIndex === i ? '400px' : '0' }}
          >
            <div className="accordion-content bg-nocturnal-exp border border-white/5 p-4 mt-2 mb-4 relative overflow-hidden">
               {/* Replicate bento layout for mobile inside the accordion */}
               <div className="bento-card-label">{card.label || card.subtitle}</div>
               <div className="bento-metric mb-4">{card.metric}</div>
               <div className="h-32 mb-4 bento-chart-container is-visible">
                 {card.chart}
               </div>
               {card.stats && (
                 <div className="flex gap-6 mt-4">
                   {card.stats.map(s => (
                     <div key={s.label}>
                       <div className="text-white text-xl font-mono">{s.value}</div>
                       <div className="text-xs text-white/50 font-mono tracking-widest">{s.label}</div>
                     </div>
                   ))}
                 </div>
               )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
