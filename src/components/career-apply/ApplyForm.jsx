import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toast } from "../UI";
import { useLang } from "../../context/LanguageContext";

// ─── Constants ────────────────────────────────────────────────────────────────

const INPUT_CLS   = "w-full bg-white border-[1.5px] border-[#e0e0dc] rounded-xl px-4 py-3 text-[0.9rem] text-[#1a1a17] outline-none transition-all duration-300 focus:border-[#F15A29] focus:shadow-[0_0_0_3px_rgba(241,90,41,0.1)]";
const CV_MAX_KB   = 50;
const CV_MAX_BYTES = CV_MAX_KB * 1024;

// ─── Icons ────────────────────────────────────────────────────────────────────

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const SpinIcon = () => (
  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
  </svg>
);

// ─── Helpers ──────────────────────────────────────────────────────────────────

const toBase64 = (file) =>
  new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result.split(",")[1]);
    r.onerror = rej;
    r.readAsDataURL(file);
  });

const buildTranslations = (isAr) => ({
  heading:   isAr ? "طلب التوظيف"                                               : "Your Application",
  subtitle:  isAr ? "جميع الحقول المميزة بـ * مطلوبة. سنرد خلال ٥ أيام عمل."      : "All * fields are required. We'll respond within 5 business days.",
  fname:     isAr ? "الاسم الأول"                                              : "First Name",
  lname:     isAr ? "اسم العائلة"                                              : "Last Name",
  email:     isAr ? "البريد الإلكتروني"                                        : "Email",
  phone:     isAr ? "الهاتف / واتساب"                                          : "Phone / WhatsApp",
  linkedin:  isAr ? "حساب لينكد إن"                                            : "LinkedIn Profile",
  portfolio: isAr ? "معرض الأعمال / GitHub"                                    : "Portfolio / GitHub",
  cover:     isAr ? "خطاب التغطية (اختياري)"                                   : "Cover Letter (Optional)",
  cvLabel:   isAr ? "رفع السيرة الذاتية"                                       : "Upload CV / Resume",
  upload:    isAr ? "انقر للرفع أو اسحب وأفلت"                                 : "Click to upload or drag & drop",
  fileTypes: isAr ? "PDF أو DOC أو DOCX — الحد الأقصى ٥٠ كيلوبايت"            : "PDF, DOC or DOCX — Max 50 KB",
  submit:    isAr ? "إرسال الطلب"                                               : "Submit Application",
  phFname:   isAr ? "أحمد"                                                     : "Ahmed",
  phLname:   isAr ? "المنصور"                                                  : "Al-Mansour",
  phCover:   isAr ? "أخبرنا لماذا أنت الشخص المناسب..."                        : "Tell us why you're the right fit...",
});

// ─── Sub-components ───────────────────────────────────────────────────────────

function Label({ children, required }) {
  return (
    <label className="block text-[0.8rem] font-bold text-[#3a3a36] uppercase tracking-[0.06em] mb-1.5">
      {children} {required && <span className="text-[#F15A29]">*</span>}
    </label>
  );
}

function Field({ label, required, children }) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      {children}
    </div>
  );
}

function FormHeader({ heading, subtitle }) {
  return (
    <>
      <h2 className="text-[1.3rem] font-bold text-[#1a1a17] mb-1.5">{heading}</h2>
      <p className="text-[0.87rem] text-[#a0a09a] mb-8">{subtitle}</p>
    </>
  );
}

function NameRow({ t, form, set }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <Field label={t.fname} required>
        <input className={INPUT_CLS} type="text" placeholder={t.phFname} value={form.fname} onChange={set("fname")} />
      </Field>
      <Field label={t.lname} required>
        <input className={INPUT_CLS} type="text" placeholder={t.phLname} value={form.lname} onChange={set("lname")} />
      </Field>
    </div>
  );
}

function ContactRow({ t, form, set }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <Field label={t.email} required>
        <input className={INPUT_CLS} type="email" placeholder="ahmed@email.com" value={form.email} onChange={set("email")} dir="ltr" />
      </Field>
      <Field label={t.phone}>
        <input className={INPUT_CLS} type="tel" placeholder="+966 5X XXX XXXX" value={form.phone} onChange={set("phone")} dir="ltr" />
      </Field>
    </div>
  );
}

function LinksRow({ t, form, set }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <Field label={t.linkedin}>
        <input className={INPUT_CLS} type="url" placeholder="linkedin.com/in/username" value={form.linkedin} onChange={set("linkedin")} dir="ltr" />
      </Field>
      <Field label={t.portfolio}>
        <input className={INPUT_CLS} type="url" placeholder="github.com/username" value={form.portfolio} onChange={set("portfolio")} dir="ltr" />
      </Field>
    </div>
  );
}

function CoverLetterField({ t, form, set }) {
  return (
    <div className="mb-4">
      <Field label={t.cover}>
        <textarea className={`${INPUT_CLS} resize-y min-h-[130px]`} placeholder={t.phCover} value={form.cover} onChange={set("cover")} />
      </Field>
    </div>
  );
}

function CvDropzone({ t, cvFile, cvError, fileRef, onDrop }) {
  const borderClass = cvError
    ? "border-red-400 bg-red-50"
    : cvFile
    ? "border-[#059669] bg-[#f0fdf4]"
    : "border-[#e0e0dc] hover:border-[#F15A29]";

  return (
    <div className="mb-7">
      <Label required>{t.cvLabel}</Label>
      <div
        onClick={() => fileRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors duration-200 ${borderClass}`}
      >
        <div className="text-3xl mb-2">{cvFile ? "✅" : "📎"}</div>
        {cvFile ? (
          <div className="text-[0.88rem] font-semibold text-[#059669]">
            {cvFile.name} &mdash; {(cvFile.size / 1024).toFixed(1)} KB
          </div>
        ) : (
          <>
            <div className="text-[0.88rem] font-semibold text-[#3a3a36] mb-1">{t.upload}</div>
            <div className="text-[0.78rem] text-[#a0a09a]">{t.fileTypes}</div>
          </>
        )}
      </div>
      {cvError && <p className="text-[0.78rem] text-red-500 mt-2 font-medium">{cvError}</p>}
      <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => onDrop(e, true)} />
    </div>
  );
}

function SubmitButton({ sending, label, sendingLabel }) {
  return (
    <button
      type="submit"
      disabled={sending}
      className="w-full bg-[#F15A29] text-white font-bold text-[0.95rem] py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(241,90,41,0.28)] hover:bg-[#d44a1d] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
    >
      {sending ? <SpinIcon /> : <SendIcon />}
      {sending ? sendingLabel : label}
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ApplyForm({ job }) {
  const { isAr } = useLang();
  const t       = buildTranslations(isAr);
  const fileRef = useRef(null);

  const [form, setForm] = useState({ fname: "", lname: "", email: "", phone: "", linkedin: "", portfolio: "", cover: "" });
  const [cvFile,  setCvFile]  = useState(null);
  const [cvError, setCvError] = useState("");
  const [sending, setSending] = useState(false);
  const [toast,   setToast]   = useState({ show: false, message: "", type: "success" });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 5000);
  };

  const validateFile = (file) => {
    if (!file) return false;
    if (file.size > CV_MAX_BYTES) {
      setCvError(
        isAr
          ? `⚠️ حجم الملف ${(file.size / 1024).toFixed(1)} كيلوبايت — الحد الأقصى المسموح به ٥٠ كيلوبايت.`
          : `⚠️ File is ${(file.size / 1024).toFixed(1)} KB — maximum allowed size is 50 KB.`
      );
      return false;
    }
    setCvError("");
    return true;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (validateFile(file)) setCvFile(file);
    else { setCvFile(null); e.target.value = ""; }
  };

  const handleDrop = (e, isInputChange = false) => {
    if (!isInputChange) e.preventDefault();
    const file = isInputChange ? e.target.files[0] : e.dataTransfer.files[0];
    if (file && validateFile(file)) setCvFile(file);
    else setCvFile(null);
  };

  const resetForm = () => {
    setForm({ fname: "", lname: "", email: "", phone: "", linkedin: "", portfolio: "", cover: "" });
    setCvFile(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.fname || !form.email) {
      showToast(isAr ? "⚠️ يرجى ملء جميع الحقول المطلوبة." : "⚠️ Please fill in all required fields.", "error");
      return;
    }
    if (!cvFile) {
      showToast(isAr ? "⚠️ يرجى رفع السيرة الذاتية." : "⚠️ Please upload your CV / Resume.", "error");
      return;
    }
    setSending(true);
    try {
      const cvBase64 = await toBase64(cvFile);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_CAREER,
        {
          job_title:    job?.title      || "",
          job_dept:     job?.department || "",
          from_fname:   form.fname,
          from_lname:   form.lname,
          from_email:   form.email,
          from_phone:   form.phone,
          linkedin:     form.linkedin,
          portfolio:    form.portfolio,
          cover_letter: form.cover,
          cv_filename:  cvFile.name,
          cv_size_kb:   (cvFile.size / 1024).toFixed(1),
          cv_base64:    cvBase64,
          lang:         isAr ? "Arabic" : "English",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      showToast(isAr ? "✅ تم إرسال الطلب! سنتواصل معك خلال ٥ أيام عمل." : "✅ Application sent! We'll be in touch within 5 business days.");
      resetForm();
    } catch {
      showToast(isAr ? "❌ حدث خطأ. يرجى المحاولة لاحقاً." : "❌ Something went wrong. Please try again.", "error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-10 lg:py-[72px]">
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f8f8f6] rounded-2xl border border-[#f2f2f0] p-5 sm:p-8 lg:p-10">
          <FormHeader heading={t.heading} subtitle={t.subtitle} />
          <form onSubmit={handleSubmit} noValidate>
            <NameRow        t={t} form={form} set={set} />
            <ContactRow     t={t} form={form} set={set} />
            <LinksRow       t={t} form={form} set={set} />
            <CoverLetterField t={t} form={form} set={set} />
            <CvDropzone
              t={t}
              cvFile={cvFile}
              cvError={cvError}
              fileRef={fileRef}
              onDrop={handleDrop}
            />
            <SubmitButton
              sending={sending}
              label={t.submit}
              sendingLabel={isAr ? "جارٍ الإرسال..." : "Sending..."}
            />
          </form>
        </div>
      </div>
      <Toast message={toast.message} type={toast.type} show={toast.show} />
    </section>
  );
}