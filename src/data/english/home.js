export const SLIDES = [
  {
    bg: "/Hero-Image/Cover1.png",
    badge: "Saudi Tech Driven",
    headline: "Driving Saudi Innovation through Digital Excellence.",
    text: "We believe technology is the true driver of progress. That’s why we develop our products locally, aligned with Saudi Vision 2030 and national digital transformation goals.",
    btns: [
      { label: "Contact Us", page: "contact",   variant: "primary" },
      { label: "Explore Our Products",   page: "solutions",     variant: "outline"  },
    ],
  },
  {
    bg: "/Hero-Image/Cover2.jpg",
    badge: "Enterprise Ready Tech",
    headline: "Flexible solutions tailored for multiple industries.",
    text: "We provide a comprehensive suite of technology products designed to meet the needs of various sectors in the Saudi market and shape the future of business.",
    btns: [
      { label: "Contact Us",       page: "contact",    variant: "primary" },
      { label: "About Us", page: "about", variant: "outline"  },
    ],
  },
  {
    bg: "/Hero-Image/Cover3.jpg",
    badge: "AI-powered growth solutions",
    headline: "Smart technology solutions that support your business growth.",
    text: "Our integrated products serve multiple sectors, from POS systems and business management solutions to AI-powered tools, call centers, and government integrations. Developed locally, and delivers efficiency, scalability, and reliability.",
    btns: [
      { label: "Contact Us", page: "contact", variant: "primary" },
      { label: "Explore Industries",     page: "industries",   variant: "outline"  },
    ],
  },
];

export const STATS = [
  { end: 500,  suffix: "+",  label: "Enterprise Clients"     },
  { end: 12,   suffix: "M+", label: "Invoices Processed"     },
  { end: 150,  suffix: "+",  label: "Integrations Available" },
  { end: 100,  suffix: "%",  label: "ZATCA Compliance Rate"  },
];

export const ABOUT_FEATURES = [
  "Certified technical Company by CITC.",
  "Approved Saudi Technical Products.",
  "Compliant with ZATCA e-Invoicing Regulations.",
  "Scalable Cloud Platforms and Smart System Integrations.",
];

export const ABOUT_PHOTOS = [
  { src: "",  alt: "CODELTD Office",   label: "Riyadh HQ"  },
  { src: "",  alt: "Strategy",         label: "Strategy"   },
  { src: "",  alt: "Team Meeting",     label: "Our Team"   },
  { src: "",  alt: "Workspace",        label: "Workspace"  },
  { src: "",  alt: "Collaboration",    label: "Teamwork"   },
];

export const PREVIEW_PRODUCTS = [
  {
    id: "codeit",
    name: "CodeIT",
    tagline: "Innovative POS solutions for business management",
    img: "/product-Logo/product-Logo-EN/CodeIT-EN.svg",
    cat: "Point of Sale",
    color: "#7fccd1",
    bgColor: "#f2f9fa",
    url: "https://codeit.sa",
    comingSoon: false,
  },
  {
    id: "linkit",
    name: "LINKIT",
    tagline: "Managing and linking digital accounts seamlessly",
    img: "/product-Logo/product-Logo-EN/Linkit-EN.png",
    cat: "Digital Accounts",
    color: "#263047",
    bgColor: "#e9eaec",
    url: null,
    comingSoon: false,
  },
  {
    id: "ez-integrated",
    name: "EZ Integrated",
    tagline: "Seamless integration for ZATCA compliance",
    img: "/product-Logo/product-Logo-EN/EZIntegrated-EN.png",
    cat: "ERP & Integration",
    color: "#42bc94",
    bgColor: "#E6FBF5",
    url: "https://ezintegrated.sa",
    comingSoon: false,
  },
  {
    id: "savoxx",
    name: "SAVOXX",
    tagline: "AI-powered call center for managing and analyzing calls",
    img: "/product-Logo/product-Logo-EN/Savoxx-EN.png",
    cat: "AI & Call Center",
    color: "#071341",
    bgColor: "#E6E7EC",
    url: null,
    comingSoon: false,
  },
  {
    id: "tickitpro",
    name: "TicketPro",
    tagline: "Support ticket management for customer requests",
    img: "",
    cat: "Ticketing & Support",
    color: "#E2623C",
    bgColor: "#FDF0EC",
    url: null,
    comingSoon: false,
  },
  {
    id: "numora",
    name: "Numora",
    tagline: "Financial and accounting management for SMEs",
    img: "",
    cat: "Finance & Accounting",
    color: "#024582",
    bgColor: "#E6EEF7",
    url: null,
    comingSoon: true,
  },
  {
    id: "theheen",
    name: "Theheen",
    tagline: "Advanced AI engine for automation and data analysis",
    img: "/product-Logo/product-Logo-EN/Theheen-EN.png",
    cat: "AI & Automation",
    color: "#156c37",
    bgColor: "#E7F0EB",
    url: null,
    comingSoon: true,
  },
];
export const TESTIMONIALS = [
  {
    quote: "CODE LTD's ZATCA integration was seamless. Our entire invoicing workflow went live in under two weeks — zero compliance issues since.",
    name: "Khalid Al-Rashidi",
    role: "CFO, Al-Rashidi Trading Co.",
    rating: 4,
  },
  {
    quote: "The EZ Integrated platform replaced three separate tools we were running. Visibility across all our branches is now real-time.",
    name: "Sara Al-Mutairi",
    role: "Operations Director, Noor Retail",
    rating: 3,
  },
  {
    quote: "Support is genuinely 24/7. We had an urgent issue during Ramadan peak hours and it was resolved within 20 minutes.",
    name: "Mohammed Al-Ghamdi",
    role: "IT Manager, Grand Cafe Group",
    rating: 2,
  },
  {
    quote: "CodeIT Restaurant transformed how we manage our kitchen and front-of-house. Order errors dropped to almost zero the first week.",
    name: "Reem Al-Zahrani",
    role: "Owner, Zahrani Dining Group",
    rating: 1,
  },
  {
    quote: "The implementation team were professional, fast, and fully understood our Saudi market requirements. Highly recommended.",
    name: "Faisal Al-Harbi",
    role: "CEO, AlHarbi Electronics",
    rating: 5,
  },
  {
    quote: "Migrating from our legacy ERP to EZ Integrated was handled end-to-end by CODE LTD. Zero data loss, zero downtime.",
    name: "Layla Al-Rashidi",
    role: "Head of Finance, Rashidi Holdings",
    rating: 4,
  },
  {
    quote: "Their ZATCA compliance team kept us ahead of every regulatory update. We passed Phase 2 certification on the first attempt.",
    name: "Omar Al-Shehri",
    role: "Compliance Manager, Gulf Trade Co.",
    rating: 3,
  },
  {
    quote: "CodeIT Retail's inventory sync across our 12 branches is effortless. We finally have one source of truth for stock.",
    name: "Nour Al-Mansouri",
    role: "VP Operations, Mansouri Retail Chain",
    rating: 2,
  },
];

export const CAT_COLOR = {
  "Regulatory Update": "bg-blue-50 text-blue-700",
  "Company News":      "bg-purple-50 text-purple-700",
  "Product Launch":    "bg-green-50 text-green-700",
  "Event":             "bg-amber-50 text-amber-700",
  "Research":          "bg-rose-50 text-rose-700",
};
