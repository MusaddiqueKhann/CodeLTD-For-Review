import React from "react";

const FormattedText = ({ text }) => {
  const lines = text.split("\n");
  return (
    <div className="flex flex-col gap-1.5">
      {lines.map((line, i) => {
        let cur = line.trim();
        if (!cur) return <div key={i} className="h-1" />;

        let html = cur
          .replace(/\*\*(.+?)\*\*/g, (_, m) => `<strong class="font-semibold">${m}</strong>`)
          .replace(/\*(.+?)\*/g, (_, m) => `<em class="italic">${m}</em>`);

        if (/^[-*•]\s/.test(cur)) {
          html = html.replace(/^[-*•]\s/, "");
          return (
            <div key={i} className="flex items-start gap-2 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F15A29] mt-[5px] flex-shrink-0" />
              <p
                className="m-0 leading-relaxed flex-1"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          );
        }

        if (/^(\d+)\.\s/.test(cur)) {
          const match = cur.match(/^(\d+)\.\s/);
          html = html.replace(/^(\d+)\.\s/, "");
          return (
            <div key={i} className="flex items-start gap-2 mt-0.5">
              <span className="text-[#F15A29] font-bold text-[11px] mt-0.5 w-4 flex-shrink-0">
                {match[1]}.
              </span>
              <p
                className="m-0 leading-relaxed flex-1"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          );
        }

        return (
          <p
            key={i}
            className="m-0 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      })}
    </div>
  );
};

export default FormattedText;
