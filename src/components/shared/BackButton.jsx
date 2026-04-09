export default function BackButton({ onClick, label = "Back" }) {
  return (
    <button onClick={onClick} className="inline-flex items-center gap-2.5 bg-white border-2 border-[#F15A29] text-[#F15A29] font-bold text-[0.9rem] px-5 py-2.5 rounded-full hover:bg-[#F15A29] hover:text-white transition-all duration-200 shadow-sm hover:shadow-md">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
      {label}
    </button>
  );
}
