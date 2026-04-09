export default function ContentBlock({ block }) {
  switch (block.type) {
    case "intro":
      return <p className="text-[1.1rem] font-light text-[#3a3a36] leading-[1.85] mb-8 pb-8 border-b border-[#f2f2f0]">{block.text}</p>;
    case "heading":
      return <h2 className="text-[1.25rem] font-bold text-[#1a1a17] mt-10 mb-4 leading-tight">{block.text}</h2>;
    case "text":
      return <p className="text-[1rem] text-[#3a3a36] font-light leading-[1.85] mb-6">{block.text}</p>;
    case "callout":
      return (
        <div className="my-8 pl-6 border-l-4 border-[#F15A29] bg-[rgba(241,90,41,0.04)] py-5 pr-6 rounded-r-xl">
          <p className="text-[0.97rem] text-[#1a1a17] font-medium leading-[1.75] italic">{block.text}</p>
        </div>
      );
    case "list":
      return (
        <ul className="mb-6 flex flex-col gap-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(241,90,41,0.1)] flex items-center justify-center mt-0.5">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#F15A29" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              <span className="text-[0.97rem] text-[#3a3a36] font-light leading-[1.75]">{item}</span>
            </li>
          ))}
        </ul>
      );
    default: return null;
  }
}
