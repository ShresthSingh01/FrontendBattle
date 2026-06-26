import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '1.5rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a href="/" aria-label="NexaFlow AI home" className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-forsythia">
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
          </svg>
          <span className="font-mono font-bold text-white tracking-wide">NexaFlow</span>
        </a>
        <button
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={toggleMenu}
          className="relative w-8 h-8 flex items-center justify-center text-white"
        >
          <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-200 ease-out ${menuOpen ? 'rotate-45' : '-translate-y-2'}`} />
          <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-200 ease-out ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-200 ease-out ${menuOpen ? '-rotate-45' : 'translate-y-2'}`} />
        </button>
      </header>

      {/* Dropdown nav — slides down from top */}
      <nav
        id="main-nav"
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 40,
          background: '#0a0a0a',
          transform: `translateY(${menuOpen ? '0' : '-100%'})`,
          transition: 'transform 300ms ease-in-out',
          padding: '8rem 2rem 3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div className="w-full h-full max-w-7xl mx-auto grid grid-cols-[25%_1fr_25%]">
          <div className="col-start-2 col-end-3">
            <ul className="flex flex-col gap-6">
              {[
                { label: 'AI Strategy', href: '#features' },
                { label: 'Custom Agents', href: '#features' },
                { label: 'Process Automation', href: '#features' },
                { label: 'Data Intelligence', href: '#pricing' },
              ].map((item, index) => (
                <li key={item.label} style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: `translateX(${menuOpen ? '0' : '-10px'})`,
                  transition: `opacity 400ms ease-out ${300 + index * 80}ms, transform 400ms ease-out ${300 + index * 80}ms`,
                }}>
                  <a href={item.href} onClick={() => setMenuOpen(false)} className="text-4xl font-sans font-light text-white hover:text-forsythia transition-colors duration-150">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
