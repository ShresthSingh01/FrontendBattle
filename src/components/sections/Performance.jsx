import React, { useRef, useState, useEffect } from 'react';
import SectionEyebrow from '../ui/SectionEyebrow';
import Accordion from '../ui/Accordion';
import CircularGauge from '../ui/charts/CircularGauge';
import BarChart from '../ui/charts/BarChart';
import RadialGauge from '../ui/charts/RadialGauge';
import LineChart from '../ui/charts/LineChart';

const bentoCards = [
  {
    id: 'system-load',
    title: 'System Load',
    subtitle: 'Active neural processing',
    metric: '98.7%',
    chart: <CircularGauge />,
    stats: [{ label: 'CACHE', value: '99%' }, { label: 'UPTIME', value: '6M' }]
  },
  {
    id: 'sla-response',
    title: 'SLA Response',
    subtitle: 'Global uptime monitoring',
    metric: '99.99%',
    chart: <BarChart />
  },
  {
    id: 'token-usage',
    title: 'Token Usage',
    subtitle: 'Monthly volume throughput',
    metric: '8.4M',
    chart: <RadialGauge />,
    stats: [{ label: 'TOTAL QUERIES', value: '152' }, { label: 'ACTIVE NODES', value: '115' }]
  },
  {
    id: 'growth-vector',
    title: 'Growth Vector',
    subtitle: 'Efficiency gains over 30 days',
    metric: '82%',
    label: 'NET GROWTH',
    chart: <LineChart />,
    wide: true
  }
];

export default function Performance() {
  const [accordionIndex, setAccordionIndex] = useState(null);
  const activeIndexRef = useRef(null);
  const lastHoveredBentoRef = useRef(null);
  const breakpointRef = useRef(window.innerWidth >= 768);
  const roRef = useRef(null);
  const sectionRef = useRef(null);

  // ResizeObserver for context transfer
  useEffect(() => {
    let timeoutId;
    roRef.current = new ResizeObserver(() => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const isNowMobile = window.innerWidth < 768;
        const wasDesktop = breakpointRef.current;

        if (isNowMobile && wasDesktop && lastHoveredBentoRef.current !== null) {
          setAccordionIndex(lastHoveredBentoRef.current);
          lastHoveredBentoRef.current = null;
        }
        breakpointRef.current = !isNowMobile;
      }, 50); // debounce 50ms to prevent resize jank
    });
    
    roRef.current.observe(document.documentElement);
    return () => {
      clearTimeout(timeoutId);
      roRef.current?.disconnect();
    };
  }, []);

  // IntersectionObserver for CSS animations (.is-visible)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.2 });

    const cards = document.querySelectorAll('.bento-card, .bento-chart-container');
    cards.forEach(c => observer.observe(c));

    return () => observer.disconnect();
  }, []);

  function handleBentoEnter(index) {
    lastHoveredBentoRef.current = index;
    activeIndexRef.current = index;
  }

  return (
    <section data-reveal id="performance" ref={sectionRef} className="bg-oceanic-noir pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <SectionEyebrow text="PRODUCT STATISTICS" />
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 tracking-tight">
            Optimized for performance
          </h2>
          <p className="font-sans text-lg text-white/60 max-w-2xl">
            Monitor every neural pulse in real-time. Unmatched observability ensuring your agents execute flawlessly under pressure.
          </p>
        </div>

        {/* DESKTOP BENTO GRID */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {bentoCards.map((card, i) => (
            <div 
              key={card.id}
              className={`bento-card flex flex-col ${card.wide ? 'col-span-3 min-h-[300px]' : 'col-span-1 min-h-[400px]'}`}
              onMouseEnter={() => handleBentoEnter(i)}
            >
              <div className="bento-x-icon top-6 left-6" />
              <div className="relative z-10 pt-8">
                <div className="bento-card-label">{card.label || card.subtitle}</div>
                <div className="bento-card-title">{card.title}</div>
              </div>
              <div className="bento-metric">{card.metric}</div>
              
              <div className="flex-1 w-full relative mt-8 bento-chart-container">
                {card.chart}
              </div>

              {card.stats && (
                <div className="flex gap-8 mt-6">
                  {card.stats.map(s => (
                    <div key={s.label}>
                      <div className="text-white text-2xl font-mono">{s.value}</div>
                      <div className="text-xs text-white/50 font-mono tracking-widest">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* MOBILE ACCORDION */}
        <Accordion 
          cards={bentoCards} 
          activeIndex={accordionIndex} 
          setActiveIndex={setAccordionIndex} 
        />

      </div>
    </section>
  );
}
