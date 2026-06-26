import React, { useState } from 'react';

const faqs = [
  { icon: '❓', q: 'What is the NexaFlow platform?', a: 'NexaFlow is specialized infrastructure for building and deploying custom AI agents. We provide the neural logic and edge nodes required to run autonomous workflows at enterprise scale.' },
  { icon: '👤', q: 'Who is this platform designed for?', a: 'It is built for enterprise engineering teams, data scientists, and ML operators who need secure, high-performance orchestration layers for their autonomous systems.' },
  { icon: '🤖', q: 'Does NexaFlow provide pre-built agents?', a: 'We offer foundational templates for common enterprise use cases (RAG, code generation, data structuring), but the true power lies in bringing your own models and connecting our reasoning engine.' },
  { icon: '💬', q: 'How does it differ from a standard chatbot?', a: 'Standard chatbots are reactive. NexaFlow agents are proactive, maintaining state, chaining complex tools together, and running asynchronous tasks in isolated secure environments.' },
  { icon: '🌐', q: 'Can I use my own custom domain?', a: 'Yes, custom domains are fully supported on the Pro and Enterprise tiers, complete with automated SSL issuance and dedicated routing configurations.' },
  { icon: '∞',  q: 'Is there a limit to how many agents I can build?', a: 'Pro and Enterprise tiers feature unlimited active agents. Resource utilization is bound only by your token throughput limits as specified in the pricing matrix.' },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#f0f0ee] pt-32 pb-32 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16">
        
        {/* Left: Heading & Contact */}
        <div className="md:col-span-5">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-black mb-6 tracking-tight relative">
            <span className="relative z-10">Common inquiries</span>
            {/* Faint background logo/mark hint */}
            <div className="absolute -top-8 -left-8 text-black/5 text-[120px] leading-none select-none z-0">
              NX
            </div>
          </h2>
          <p className="font-sans text-lg text-black/70 mb-10 relative z-10">
            Everything you need to know about integrating NexaFlow into your architecture. Can't find the answer you're looking for?
          </p>
          <button className="bg-black text-white px-8 py-3 text-sm font-mono tracking-wider hover:bg-forsythia hover:text-black transition-colors uppercase relative z-10">
            Contact Us
          </button>
        </div>

        {/* Right: Accordion List */}
        <div className="md:col-span-7">
          <div className="border-t border-black/10">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="faq-item">
                  <button
                    className="faq-trigger group"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(i)}
                  >
                    <span className="text-xl opacity-50 grayscale group-hover:grayscale-0 transition-all">{faq.icon}</span>
                    <span className="font-semibold">{faq.q}</span>
                    <div className="faq-toggle">
                      {/* Plus icon built with CSS, rotates to X when open */}
                      <span className="relative w-3 h-3 flex items-center justify-center">
                        <span className="absolute w-full h-[1px] bg-current"></span>
                        <span className="absolute h-full w-[1px] bg-current"></span>
                      </span>
                    </div>
                  </button>
                  <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                    <div className="pb-6 pl-12 pr-12 text-black/60">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
