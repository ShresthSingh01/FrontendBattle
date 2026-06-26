export default function CircularGauge() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg width="120" height="120" viewBox="0 0 120 120" className="rotate-[-90deg]">
        <circle 
          cx="60" cy="60" r="45" 
          fill="none" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="6" 
        />
        <circle 
          cx="60" cy="60" r="45" 
          fill="none" 
          stroke="var(--forsythia)" 
          strokeWidth="6" 
          strokeLinecap="round"
          className="gauge-ring"
        />
      </svg>
    </div>
  );
}
