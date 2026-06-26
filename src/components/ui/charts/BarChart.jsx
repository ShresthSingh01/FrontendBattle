export default function BarChart() {
  // 6 bars
  const heights = [30, 50, 40, 80, 60, 95];
  
  return (
    <div className="w-full h-full flex items-end justify-center p-4 gap-2 relative">
      {/* Horizontal SLA threshold line at 90% */}
      <div className="absolute top-[10%] left-4 right-4 border-t border-dashed border-white/30 z-0"></div>
      
      {heights.map((h, i) => (
        <div 
          key={i} 
          className="w-8 bg-white/80 bar relative z-10" 
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}
