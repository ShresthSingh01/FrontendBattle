export default function PageSpine() {
  return (
    <div 
      className="page-spine" 
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        display: 'grid',
        gridTemplateColumns: '25% 1fr 25%',
      }}
    >
      <div className="border-l border-[rgba(255,255,255,0.08)] h-full w-full col-start-2 col-end-3" />
      <div className="border-l border-[rgba(255,255,255,0.08)] h-full w-full col-start-3 col-end-4" />
    </div>
  );
}
