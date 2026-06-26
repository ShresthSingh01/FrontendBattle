import React from 'react';
import SectionEyebrow from '../ui/SectionEyebrow';

const logos = [
  { name: 'Anthropic', symbol: 'A\\' },
  { name: 'AWS', symbol: 'aws' },
  { name: 'Microsoft', symbol: '⊞' },
  { name: 'Bolt', symbol: '⚡' },
  { name: 'Claude', symbol: '✻' },
  { name: 'Figma', symbol: '◉' },
  { name: 'Gemini', symbol: '✦' },
  { name: 'Perplexity', symbol: '⌖' },
  { name: 'Meta', symbol: '∞' },
  { name: 'Perplexity Variant', symbol: '⌘' },
  { name: 'Mistral', symbol: 'M' },
  { name: 'v0', symbol: 'v0' }
];

export default function Integrations() {
  return (
    <section id="integrations" className="bg-[#0a0a0a] pt-32 pb-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <SectionEyebrow text="INTEGRATIONS" />
          <p className="text-3xl md:text-4xl font-sans font-light text-white leading-tight">
            NexaFlow bridges the gap between your data and your tools. 
            <br/><br/>
            Deploy agents that live where you work, from Slack to GitHub and beyond.
          </p>
        </div>

        {/* 4x3 Logo Grid */}
        <div className="grid grid-cols-4 gap-y-12 gap-x-8">
          {logos.map((logo, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center h-[60px] text-white/50 hover:text-white transition-all duration-150 ease-out hover:scale-110 cursor-default"
              title={logo.name}
            >
              {/* Using text representation for the missing SVG assets */}
              <span className="font-sans text-3xl font-bold select-none">{logo.symbol}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
