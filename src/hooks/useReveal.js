import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a class that CSS or JS can hook into
          entry.target.classList.add('is-revealed');
          
          // Fire a custom event for elements that need WAAPI or specific JS logic
          entry.target.dispatchEvent(new CustomEvent('reveal'));
          
          // Unobserve so it only runs once per page load
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    const elements = document.querySelectorAll('[data-reveal]');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
}
