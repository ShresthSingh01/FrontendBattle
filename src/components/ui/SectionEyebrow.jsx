export default function SectionEyebrow({ label, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-forsythia flex-shrink-0">
        <path d="M4 18L18 4M8 22L22 8M0 14L14 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
      </svg>
      <span className="font-mono text-sm tracking-widest uppercase text-mid-gray">
        {label}
      </span>
    </div>
  );
}
