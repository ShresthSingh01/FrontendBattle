import React from 'react';
import SectionEyebrow from '../ui/SectionEyebrow';

export default function Footer() {
  return (
    <div className="bg-oceanic-noir text-white">
      {/* Newsletter Section */}
      <section id="newsletter" className="pt-32 pb-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionEyebrow text="GET STARTED" />
          <h2 className="text-4xl md:text-5xl font-sans font-light mb-6 tracking-tight">
            Get smarter about AI systems
          </h2>
          <p className="font-sans text-lg text-white/60 mb-10 max-w-xl">
            Weekly insights on automation, AI workflows, and real builds. No fluff, just what works.
          </p>
          
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input"
              aria-label="Email address"
              required
            />
            <button type="submit" className="newsletter-submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Main Footer */}
      <footer data-reveal className="pt-24 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-32 relative z-10">
          
          {/* Col 1: Logo */}
          <div className="flex flex-col">
            {/* Lightning Bolt SVG */}
            <svg viewBox="0 0 100 150" className="w-16 h-24 text-white fill-current mb-6">
              <path d="M60 0L0 80h40l-10 70 70-90H50l20-60z" />
            </svg>
            <p className="text-white/40 text-sm font-sans mt-auto">
              &copy; {new Date().getFullYear()} NexaFlow AI.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">Quick Links</h4>
            <ul className="space-y-4 font-sans text-sm text-white/80">
              <li><a href="#" className="hover:text-forsythia transition-colors">Home</a></li>
              <li><a href="#pricing" className="hover:text-forsythia transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Projects</a></li>
              <li><a href="#articles" className="hover:text-forsythia transition-colors">Articles</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">Company</h4>
            <ul className="space-y-4 font-sans text-sm text-white/80">
              <li><a href="#" className="hover:text-forsythia transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Book A Call</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">More Templates</a></li>
            </ul>
          </div>

          {/* Col 4: Policies & Socials */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">Legal</h4>
            <ul className="space-y-4 font-sans text-sm text-white/80 mb-10">
              <li><a href="#" className="hover:text-forsythia transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Privacy Policy</a></li>
            </ul>

            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">Social</h4>
            <div className="flex items-center gap-4 text-white/60">
              {/* X */}
              <a href="#" className="hover:text-white transition-colors" aria-label="X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Oversized Signature Wordmark */}
        <div className="footer-wordmark flex justify-center w-full pb-4">
          nexaflow
        </div>
      </footer>
    </div>
  );
}
