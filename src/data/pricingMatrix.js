// src/data/pricingMatrix.js
export const PRICING_MATRIX = {
  tiers: {
    starter: {
      name: 'Starter',
      baseUSD: 29,
      badge: null,
      features: [
        '10M events/month',
        '3 active pipelines',
        'Community support',
        'Basic analytics dashboard',
        'API access'
      ],
      cta: 'Get Started'
    },
    pro: {
      name: 'Pro',
      baseUSD: 79,
      badge: 'Most Popular',
      features: [
        '100M events/month',
        'Unlimited pipelines',
        'Priority support',
        'Advanced analytics',
        'Custom connectors',
        'Team collaboration'
      ],
      cta: 'Get Pro'
    },
    enterprise: {
      name: 'Enterprise',
      baseUSD: 299,
      badge: null,
      features: [
        'Unlimited events',
        'Unlimited pipelines',
        'Dedicated support engineer',
        'SLA guarantee',
        'Custom SLAs',
        'SSO / SAML',
        'Audit logs',
        'On-premise option'
      ],
      cta: 'Contact Sales'
    }
  },
  annualMultiplier: 0.80,  // 20% discount
  currencies: {
    USD: { symbol: '$', rate: 1.00,   locale: 'en-US', label: 'USD ($)' },
    INR: { symbol: '₹', rate: 83.50,  locale: 'en-IN', label: 'INR (₹)' },
    EUR: { symbol: '€', rate: 0.92,   locale: 'de-DE', label: 'EUR (€)' }
  }
};

export function computePrice(tierKey, currencyKey, isAnnual) {
  const tier = PRICING_MATRIX.tiers[tierKey];
  const { rate, symbol, locale } = PRICING_MATRIX.currencies[currencyKey];
  const multiplier = isAnnual ? PRICING_MATRIX.annualMultiplier : 1;
  const raw = tier.baseUSD * rate * multiplier;
  const rounded = Math.round(raw);
  const formatted = new Intl.NumberFormat(locale).format(rounded);
  return `${symbol}${formatted}`;
}
