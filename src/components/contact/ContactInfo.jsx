import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

// ─── Constants ───────────────────────────────────────────────────────────────

const LABELS = {
  heading:    { en: "We'd Love to Hear From You",                                                                    ar: "يسعدنا التواصل معك"                                             },
  subheading: { en: "Fill out the form and our team will reach out within one business day. No commitment required.", ar: "أكمل النموذج وسيتواصل فريقنا معك خلال يوم عمل واحد. بدون أي التزام." },
  mapTitle:   { en: "CODE LTD Location",                                                                             ar: "موقع كود المحدودة"                                              },
};

const MAP_COORDS = "24.7007065,46.7102727";
const MAP_URL    = `https://www.google.com/maps?q=${MAP_COORDS}`;

// ─── Icons ────────────────────────────────────────────────────────────────────

const ICONS = {
  "map-pin": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F15A29" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  phone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F15A29" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 9.6a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.82 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 8 8l1-1a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  mail: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F15A29" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  clock: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F15A29" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

const isLtrValue = (value) => /[\d@+]/.test(value);

// ─── Sub-components ───────────────────────────────────────────────────────────

function ContactItem({ label, value, icon }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-[46px] h-[46px] bg-[#f8f8f6] rounded-[10px] flex items-center justify-center">
        {ICONS[icon]}
      </div>
      <div>
        <div className="text-[0.75rem] font-bold text-[#a0a09a] uppercase tracking-[0.08em] mb-1">{label}</div>
        <div className="text-[0.92rem] font-semibold text-[#1a1a17]" dir={isLtrValue(value) ? "ltr" : undefined}>{value}</div>
      </div>
    </div>
  );
}

function MapEmbed({ isAr }) {
  return (
    <div
      className="mt-10 rounded-2xl overflow-hidden border border-[#e0e0dc] aspect-[4/3] bg-[#f8f8f6] relative cursor-pointer"
      onClick={() => window.open(MAP_URL, "_blank")}
    >
      <iframe
        title={isAr ? LABELS.mapTitle.ar : LABELS.mapTitle.en}
        width="100%"
        height="100%"
        style={{ border: 0, display: "block", pointerEvents: "none" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://maps.google.com/maps?q=${MAP_COORDS}&output=embed&hl=${isAr ? "ar" : "en"}&z=15`}
      />
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactInfo() {
  const { CONTACT_ITEMS } = useData("contact");
  const { isAr }          = useLang();
  const t = (key) => isAr ? LABELS[key].ar : LABELS[key].en;

  return (
    <div>

      <h2 className="text-[clamp(1.75rem,2.4vw,2.5rem)] font-bold text-[#1a1a17] leading-tight mb-3.5">
        {t("heading")}
      </h2>

      <p className="text-[1.05rem] font-light text-[#a0a09a] leading-[1.7] mb-10">
        {t("subheading")}
      </p>

      <div className="flex flex-col gap-6">
        {CONTACT_ITEMS.map((item) => (
          <ContactItem key={item.label} {...item} />
        ))}
      </div>

      <MapEmbed isAr={isAr} />

    </div>
  );
}