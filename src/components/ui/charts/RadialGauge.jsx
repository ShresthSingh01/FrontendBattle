export default function RadialGauge() {
  return (
    <div className="w-full h-full flex items-end justify-center p-4">
      <svg width="160" height="80" viewBox="0 0 160 80" className="overflow-visible">
        <path 
          d="M 10 80 A 70 70 0 0 1 150 80" 
          fill="none" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="12" 
          strokeLinecap="round"
        />
        <path 
          d="M 10 80 A 70 70 0 0 1 150 80" 
          fill="none" 
          stroke="var(--forsythia)" 
          strokeWidth="12" 
          strokeLinecap="round"
          className="radial-ring"
        />
      </svg>
    </div>
  );
}
