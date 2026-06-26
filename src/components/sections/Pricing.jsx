import { useEffect, useRef } from 'react';
import SectionEyebrow from '../ui/SectionEyebrow';
import { PRICING_MATRIX, computePrice } from '../../data/pricingMatrix';

export default function Pricing() {
  const billingRef = useRef('monthly');
  const currencyRef = useRef('USD');

  useEffect(() => {
    // Initial mount hydration is handled by React markup.
    // This effect ensures any external updates are synced, but mainly we use imperative updates.
  }, []);

  function refreshPrices() {
    Object.keys(PRICING_MATRIX.tiers).forEach(tierKey => {
      const el = document.querySelector(`[data-price-display="${tierKey}"]`);
      if (el) {
        el.textContent = computePrice(tierKey, currencyRef.current, billingRef.current === 'annual');
      }
    });

    const periodEls = document.querySelectorAll('[data-period-label]');
    periodEls.forEach(periodEl => {
      periodEl.textContent = billingRef.current === 'annual' ? '/mo (billed annually)' : '/mo';
    });
  }

  function handleBillingToggle(type) {
    billingRef.current = type;
    document.querySelectorAll('[data-billing-btn]').forEach(btn => {
      if (btn.dataset.billingBtn === type) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
    refreshPrices();
  }

  function handleCurrencyChange(e) {
    currencyRef.current = e.target.value;
    refreshPrices();
  }

  return (
    <section data-reveal id="pricing" aria-label="Pricing plans" className="bg-arctic-powder text-oceanic-noir pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-8">
        
        <div className="col-start-2 col-span-3">
          
          <div className="mb-16">
            <div className="font-mono text-xs uppercase tracking-wider text-oceanic-noir flex items-center gap-4 mb-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M0,24 L24,0 M-12,24 L12,0 M12,48 L36,24" stroke="black"/>
              </svg>
              PRICING MATRIX
            </div>
            <h2 className="text-4xl font-sans font-bold text-oceanic-noir mb-6">
              Scale without surprises
            </h2>
            <p className="font-sans text-lg text-oceanic-noir/70 max-w-2xl mb-12">
              Predictable costs for unpredictable workloads. Pay only for the intelligence you deploy.
            </p>

            <div className="pricing-controls flex items-center gap-6">
              {/* Billing toggle */}
              <div role="group" aria-label="Billing cycle" className="billing-toggle-wrapper flex bg-white border border-black/10 rounded-full p-1">
                <button
                  data-billing-btn="monthly"
                  onClick={() => handleBillingToggle('monthly')}
                  aria-pressed="true"
                  className="billing-btn active px-6 py-2 rounded-full font-sans text-sm font-medium transition-colors"
                >
                  Monthly
                </button>
                <button
                  data-billing-btn="annual"
                  onClick={() => handleBillingToggle('annual')}
                  aria-pressed="false"
                  className="billing-btn px-6 py-2 rounded-full font-sans text-sm font-medium transition-colors flex items-center gap-2"
                >
                  Annual <span className="save-badge bg-[#114C5A] text-white px-2 py-0.5 rounded text-xs">Save 20%</span>
                </button>
              </div>

              {/* Currency selector */}
              <select
                onChange={handleCurrencyChange}
                aria-label="Select display currency"
                defaultValue="USD"
                className="currency-select bg-white border border-black/10 rounded-md px-4 py-2 font-mono text-sm text-oceanic-noir outline-none focus:border-forsythia transition-colors appearance-none pr-10 cursor-pointer relative"
              >
                {Object.entries(PRICING_MATRIX.currencies).map(([key, { label }]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pricing-cards grid grid-cols-3 gap-6">
            {Object.entries(PRICING_MATRIX.tiers).map(([tierKey, tier]) => (
              <article
                key={tierKey}
                aria-label={`${tier.name} pricing plan`}
                className={`pricing-card bg-white p-8 relative flex flex-col ${tier.badge ? 'featured border-2 border-forsythia shadow-lg' : 'border border-black/10'}`}
              >
                {tier.badge && (
                  <div className="pricing-badge absolute -top-3 left-1/2 -translate-x-1/2 bg-forsythia text-[#172B36] font-mono text-[10px] uppercase tracking-[0.08em] px-3 py-1 font-bold">
                    {tier.badge}
                  </div>
                )}
                
                <h3 className="pricing-tier-name font-mono text-sm uppercase tracking-widest text-[#888888] mb-4">
                  {tier.name}
                </h3>
                
                <div className="pricing-amount flex items-baseline gap-2 mb-8 border-b border-black/5 pb-8">
                  <span
                    data-price-display={tierKey}
                    aria-live="polite"
                    aria-atomic="true"
                    aria-label={`Price for ${tier.name} plan`}
                    className="font-mono text-5xl font-semibold text-[#172B36]"
                  >
                    {computePrice(tierKey, 'USD', false)}
                  </span>
                  <span data-period-label className="pricing-period font-sans text-sm text-[#888888]">
                    /mo
                  </span>
                </div>
                
                <ul aria-label={`${tier.name} features`} className="flex-1 space-y-4 mb-8">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm font-sans text-[#555555]">
                      <span aria-hidden="true" className="text-forsythia mt-0.5">✓</span> 
                      {f}
                    </li>
                  ))}
                </ul>
                
                <button className={`pricing-cta w-full py-3 text-sm font-mono tracking-wider transition-colors border ${tier.badge ? 'bg-forsythia text-[#172B36] border-forsythia hover:bg-[#FF9932] hover:border-[#FF9932]' : 'bg-transparent text-oceanic-noir border-black/20 hover:border-black'}`}>
                  {tier.cta}
                </button>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
