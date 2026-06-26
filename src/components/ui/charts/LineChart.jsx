export default function LineChart() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg width="100%" height="80" viewBox="0 0 400 80" preserveAspectRatio="none" className="overflow-visible">
        {/* Simple sine-like wave path */}
        <path 
          d="M 0 60 C 100 60, 100 20, 200 20 C 300 20, 300 50, 400 30" 
          fill="none" 
          stroke="var(--forsythia)" 
          strokeWidth="4" 
          strokeLinecap="round"
          className="line-chart-path"
        />
        {/* Fill area underneath */}
        <path 
          d="M 0 60 C 100 60, 100 20, 200 20 C 300 20, 300 50, 400 30 L 400 80 L 0 80 Z" 
          fill="url(#gradient-fill)" 
          opacity="0.3"
          className="line-chart-fill"
        />
        <defs>
          <linearGradient id="gradient-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--forsythia)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--forsythia)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
