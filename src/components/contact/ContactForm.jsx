import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Toast } from "../UI";
import { useData } from "../../hooks/useData";
import { useLang } from "../../context/LanguageContext";

// ─── Constants ───────────────────────────────────────────────────────────────

const INITIAL_FORM = {
  fname: "", lname: "", email: "", phone: "", company: "", solution: "", message: "",
};

const INPUT_CLS = "w-full bg-white border-[1.5px] border-[#e0e0dc] rounded-xl px-4 py-3 text-[0.9rem] text-[#1a1a17] outline-none transition-all duration-300 focus:border-[#F15A29] focus:shadow-[0_0_0_3px_rgba(241,90,41,0.1)]";

const LABELS = {
  heading:   { en: "Request a Free Demo",                                              ar: "طلب عرض توضيحي مجاني"                              },
  subtitle:  { en: "Fill out the form and our team will reach out within one business day.", ar: "أكمل النموذج وسيتواصل فريقنا معك خلال يوم عمل." },
  fname:     { en: "First Name",                                                       ar: "الاسم الأول"                                       },
  lname:     { en: "Last Name",                                                        ar: "اسم العائلة"                                      },
  email:     { en: "Business Email",                                                   ar: "البريد الإلكتروني للعمل"                           },
  phone:     { en: "Phone / WhatsApp",                                                 ar: "الهاتف / واتساب"                                  },
  company:   { en: "Company",                                                          ar: "الشركة"                                           },
  solution:  { en: "Solution of Interest",                                             ar: "الحل المطلوب"                                     },
  selectSol: { en: "Select a Solution",                                                ar: "اختر حلاً"                                         },
  message:   { en: "Message (Optional)",                                               ar: "الرسالة (اختياري)"                                },
  submit:    { en: "Submit Request",                                                   ar: "إرسال الطلب"                                      },
  sending:   { en: "Sending...",                                                       ar: "جارٍ الإرسال..."                                  },
  privacy:   { en: "🔒 Your information is secure and will never be shared.",          ar: "🔒 معلوماتك آمنة ولن تتم مشاركتها مع أطراف ثالثة." },
  phFname:   { en: "Ahmed",                                                            ar: "أحمد"                                             },
  phLname:   { en: "Al-Mansour",                                                       ar: "المنصور"                                          },
  phCompany: { en: "Your Company",                                                     ar: "اسم شركتك"                                        },
  phMessage: { en: "Tell us about your business...",                                   ar: "أخبرنا عن عملك..."                                },
};

const TOAST_MSG = {
  success:       { en: "✅ Sent! We'll contact you within 24 hours.",      ar: "✅ تم الإرسال! سنتواصل معك خلال ٢٤ ساعة." },
  error:         { en: "❌ Something went wrong. Please try again later.", ar: "❌ حدث خطأ. يرجى المحاولة لاحقاً."        },
  missingFields: { en: "⚠️ Please fill in the required fields.",           ar: "⚠️ يرجى ملء الحقول المطلوبة."            },
};

// ─── Icons ────────────────────────────────────────────────────────────────────

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const SpinIcon = () => (
  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

const ChevronIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a0a09a" strokeWidth="2">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// ─── Sub-components ───────────────────────────────────────────────────────────

function FieldLabel({ label, required }) {
  return (
    <label className="block text-[0.8rem] font-bold text-[#3a3a36] uppercase tracking-[0.06em] mb-1.5">
      {label} {required && <span className="text-[#F15A29]">*</span>}
    </label>
  );
}

function Field({ label, required, children }) {
  return (
    <div>
      <FieldLabel label={label} required={required} />
      {children}
    </div>
  );
}

function SelectField({ label, value, onChange, placeholder, options }) {
  const { isAr } = useLang();
  return (
    <Field label={label}>
      <div className="relative">
        <select
          className={`${INPUT_CLS} cursor-pointer appearance-none ${isAr ? "pl-10" : "pr-10"}`}
          value={value}
          onChange={onChange}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <span className={`absolute ${isAr ? "left-3.5" : "right-3.5"} top-1/2 -translate-y-1/2 pointer-events-none`}>
          <ChevronIcon />
        </span>
      </div>
    </Field>
  );
}

function SubmitButton({ sending, t }) {
  return (
    <button
      type="submit"
      disabled={sending}
      className="w-full bg-[#F15A29] text-white font-bold text-[0.95rem] py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(241,90,41,0.28)] hover:bg-[#d44a1d] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
    >
      {sending ? <SpinIcon /> : <SendIcon />}
      {sending ? t("sending") : t("submit")}
    </button>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactForm() {
  const { SOLUTIONS_OPTIONS }       = useData("contact");
  const { isAr }                    = useLang();
  const [form, setForm]             = useState(INITIAL_FORM);
  const [sending, setSending]       = useState(false);
  const [toast, setToast]           = useState({ show: false, message: "", type: "success" });

  const t    = (key) => isAr ? LABELS[key].ar    : LABELS[key].en;
  const msg  = (key) => isAr ? TOAST_MSG[key].ar : TOAST_MSG[key].en;
  const set  = (k)   => (e)  => setForm((f) => ({ ...f, [k]: e.target.value }));

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.fname || !form.email || !form.company) {
      showToast(msg("missingFields"), "error");
      return;
    }
    setSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT,
        {
          from_fname:   form.fname,
          from_lname:   form.lname,
          from_email:   form.email,
          from_phone:   form.phone,
          from_company: form.company,
          solution:     form.solution,
          message:      form.message,
          lang:         isAr ? "Arabic" : "English",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      showToast(msg("success"));
      setForm(INITIAL_FORM);
    } catch {
      showToast(msg("error"), "error");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-[#f8f8f6] rounded-2xl p-5 sm:p-8 lg:p-11 border border-[#f2f2f0]">

      <h3 className="text-[1.3rem] font-bold text-[#1a1a17] mb-1.5">{t("heading")}</h3>
      <p className="text-[0.87rem] text-[#a0a09a] mb-7">{t("subtitle")}</p>

      <form onSubmit={handleSubmit} noValidate>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Field label={t("fname")} required>
            <input className={INPUT_CLS} type="text"  placeholder={t("phFname")} value={form.fname} onChange={set("fname")} />
          </Field>
          <Field label={t("lname")}>
            <input className={INPUT_CLS} type="text"  placeholder={t("phLname")} value={form.lname} onChange={set("lname")} />
          </Field>
        </div>

        <div className="mb-4">
          <Field label={t("email")} required>
            <input className={INPUT_CLS} type="email" placeholder="ahmed@company.com" value={form.email} onChange={set("email")} dir="ltr" />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Field label={t("phone")}>
            <input className={INPUT_CLS} type="tel"   placeholder="+966 5X XXX XXXX" value={form.phone}   onChange={set("phone")}   dir="ltr" />
          </Field>
          <Field label={t("company")} required>
            <input className={INPUT_CLS} type="text"  placeholder={t("phCompany")}   value={form.company} onChange={set("company")} />
          </Field>
        </div>

        <div className="mb-4">
          <SelectField
            label={t("solution")}
            value={form.solution}
            onChange={set("solution")}
            placeholder={t("selectSol")}
            options={SOLUTIONS_OPTIONS}
          />
        </div>

        <div className="mb-6">
          <Field label={t("message")}>
            <textarea className={`${INPUT_CLS} resize-y min-h-[110px]`} placeholder={t("phMessage")} value={form.message} onChange={set("message")} />
          </Field>
        </div>

        <SubmitButton sending={sending} t={t} />

        <p className="text-[0.75rem] text-[#a0a09a] mt-3 text-center">{t("privacy")}</p>

      </form>

      <Toast message={toast.message} type={toast.type} show={toast.show} />

    </div>
  );
}