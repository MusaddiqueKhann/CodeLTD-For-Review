import { useState, useEffect } from "react";
import { Tag } from "../UI";
import { useLang } from "../../context/LanguageContext";

// Define the image path as a constant
const HERO_IMAGE_PATH = "/Hero-Image/Cover1.png";

export default function AboutHero() {
  const { isAr } = useLang();

  // Content constants
  const content = {
    tag: isAr ? "عن كود المحدودة" : "About CODE LTD",
    title: isAr
      ? "بناء العمود الفقري للتجارة الرقمية السعودية"
      : "Building the Backbone of Saudi Digital Commerce",
    description: isAr
      ? "تأسسنا في المملكة العربية السعودية، نمكّن الشركات بحلول مؤسسية ذكية ومتوافقة وقابلة للتوسع."
      : "Founded in the Kingdom of Saudi Arabia, we empower businesses with intelligent, compliant, and scalable enterprise solutions.",
  };

  // Preloading the image helps the browser cache it faster 
  // even if we aren't using a transition effect.
  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGE_PATH;
  }, []);

  const backgroundStyle = {
    background: `linear-gradient(110deg, rgba(14, 14, 12, 0.92) 0%, rgba(14, 14, 12, 0.55) 100%), url('${HERO_IMAGE_PATH}') bottom/cover`,
  };

  return (
    <section
      id="hero-section"
      className="relative flex min-h-[360px] items-center justify-center pt-[80px] pb-12 sm:min-h-[400px] lg:h-[420px]"
      style={backgroundStyle}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 pt-[40px] text-center sm:px-6 lg:px-8">
        {/* Tag Component */}
        <Tag>{content.tag}</Tag>

        {/* Main Heading */}
        <h1 className="mt-4 mb-4 text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-tight text-white">
          {content.title}
        </h1>

        {/* Description Paragraph */}
        <p className="mx-auto max-w-[520px] text-[1.05rem] font-light leading-[1.75] text-white/65">
          {content.description}
        </p>
      </div>
    </section>
  );
}