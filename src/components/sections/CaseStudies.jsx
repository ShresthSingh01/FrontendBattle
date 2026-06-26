import SectionEyebrow from '../ui/SectionEyebrow';

const caseStudies = [
  {
    logo: 'CIGNA',
    year: '//2026',
    title: 'Cigna Smart Health Systems',
    desc: 'Revolutionizing patient care through predictive analytics and seamless AI-driven diagnostic integration tools.'
  },
  {
    logo: 'AETNA',
    year: '//2026',
    title: 'Aetna Health Data Ecosystem',
    desc: "We automated Aetna's member data management using secure AI to provide personalized care and clinical insights."
  },
  {
    logo: 'ANTHEM',
    year: '//2026',
    title: 'Anthem Neural Care Network',
    desc: "We deployed a custom LLM to automate Anthem's provider relations, reducing ticket latency by eighty-five percent."
  }
];

export default function CaseStudies() {
  return (
    <section data-reveal id="case-studies" className="bg-arctic-powder text-oceanic-noir pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-8">
        <div className="col-start-2 col-span-3">
          
          <div className="mb-16">
            {/* The hatched icon + text for light bg - we might need to tweak SectionEyebrow if it assumes dark bg */}
            <div className="font-mono text-xs uppercase tracking-wider text-oceanic-noir flex items-center gap-4 mb-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M0,24 L24,0 M-12,24 L12,0 M12,48 L36,24" stroke="black"/>
              </svg>
              CASE STUDIES
            </div>
            
            <h2 className="text-4xl font-sans font-bold text-oceanic-noir mb-4">
              Proven neural solutions
            </h2>
            <p className="font-sans text-lg text-oceanic-noir/70 max-w-2xl">
              From Fortune 500 healthcare to global logistics, see how we deploy agentic infrastructure at scale.
            </p>
          </div>

          <div className="border-t border-black/10">
            {caseStudies.map((study, idx) => (
              <div 
                key={idx} 
                className="group grid grid-cols-[180px_120px_1fr_60px] items-center py-10 border-b border-black/10 cursor-pointer transition-colors duration-150 ease-out hover:bg-oceanic-noir/[0.03] overflow-hidden"
              >
                <div className="font-sans font-bold text-xl text-oceanic-noir pl-4">
                  {study.logo}
                </div>
                <div className="font-mono text-sm text-[#888888]">
                  {study.year}
                </div>
                <div>
                  <h3 className="font-sans text-xl font-medium text-oceanic-noir mb-2">
                    {study.title}
                  </h3>
                  <p className="font-mono text-xs text-[#555555] leading-relaxed max-w-xl">
                    {study.desc}
                  </p>
                </div>
                <div className="font-mono text-xl text-oceanic-noir transition-transform duration-150 ease-out group-hover:translate-x-1.5">
                  &gt;&gt;
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
