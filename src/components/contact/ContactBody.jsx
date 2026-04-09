import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactBody() {
  return (
    <section className="py-14 lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-[80px] items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}