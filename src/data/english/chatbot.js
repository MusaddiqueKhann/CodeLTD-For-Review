// ─────────────────────────────────────────────────────────────────────────────
// Chatbot data – English
// Expanded with deep product knowledge, articles, news, and ZATCA updates
// ─────────────────────────────────────────────────────────────────────────────

export const chatbotData = {
  greeting: "Hello! 👋 I'm the CODE LTD virtual assistant. How can I help you today?",
  placeholder: "Type your message…",
  noMatch: "I'm not sure about that. Please choose one of the suggested topics or type 'Contact Us' to speak with our team directly.",
  contactPrompt: "Would you like to contact our team for more information?",
  contactLabel: "Contact Us",

  categories: [
    {
      id: "about",
      label: "About CODE LTD",
      icon: "🏢",
      questions: [
        {
          q: "What is CODE LTD?",
          a: "CODE LTD is a 100% Saudi-built technology company founded in 2021. We specialize in advanced software and digital solutions, providing an integrated suite of business platforms designed specifically for the Kingdom's market.",
        },
        {
          q: "How does CODE LTD support Saudi Vision 2030?",
          a: "Our products act as enablers for Vision 2030's digital transformation agenda. **EZ Integrated** supports ZATCA's e-invoicing infrastructure, **CODEIT** drives the cashless payment transition (Mada, Apple Pay), and **Theheen** builds domestic AI capabilities in alignment with the National Strategy for Data and AI.",
        },
        {
          q: "Did CODE LTD participate in LEAP 2025?",
          a: "Yes! We showcased our full product suite at LEAP 2025 in Riyadh, including live demos of CODEIT, EZ Integrated, SAVOXX, and an exclusive first look at our Saudi-built AI automation engine, Theheen.",
        },
        {
          q: "Where is CODE LTD located?",
          a: "We are headquartered in Riyadh, Saudi Arabia. In compliance with PDPL data localization requirements, we store all client data exclusively on Saudi-certified cloud infrastructure within the Kingdom.",
        },
      ],
    },
    {
      id: "products",
      label: "Products & Solutions",
      icon: "📦",
      questions: [
        {
          q: "What products does CODE LTD offer?",
          a: "We offer an integrated suite of solutions. Please select a product below to learn more:\n\n• **CODEIT** (Cloud-based POS)\n• **EZ Integrated** (ZATCA Compliance)\n• **TicketPro** (Support Ticketing)\n• **SAVOXX** (AI Call Center)\n• **Theheen** (Saudi-built AI - Coming Soon)\n• **Numora** (SME Accounting - Coming Soon)\n• **LINKIT** (Digital Links - Coming Soon)",
        },
        {
          q: "CODEIT",
          a: "CODEIT is our cloud-based ZATCA-certified POS platform. It has four variants:\n• **Basic:** Fast POS for startups, live in 24 hours.\n• **Retail:** Unlimited multi-branch inventory and central sales tracking.\n• **Restaurant:** F&B management with Kitchen Display Systems (KDS) and delivery integration.\n• **Fuel:** Forecourt automation and fleet account management.\nIt features a full offline mode and native integration with Saudi payment methods.",
        },
        {
          q: "EZ Integrated",
          a: "EZ Integrated connects any existing business system (SAP, Oracle, Dynamics, custom POS) to ZATCA's Fatoora portal. Our latest API update reduces clearance times by 40% and handles UUIDs, cryptographic stamping, UBL 2.1 XML formatting, and TLV QR codes entirely in the background. Onboarding takes just 7–14 days.",
        },
        {
          q: "TicketPro",
          a: "TicketPro features native WhatsApp Business API integration. Every customer WhatsApp message automatically creates a tracked, assignable support ticket in a unified inbox (alongside email and web forms). It enforces SLAs and features automatic manager escalations so no request falls through the cracks.",
        },
        {
          q: "SAVOXX",
          a: "SAVOXX is our AI-powered call center management platform. Unlike manual reviews that catch only 3-5% of calls, SAVOXX uses NLP to automatically score **100% of calls** for agent performance and customer sentiment. It handles intelligent routing, live whisper coaching, and integrates natively with TicketPro.",
        },
        {
          q: "Theheen",
          a: "Theheen is our upcoming advanced AI engine, developed right here in Saudi Arabia. It uses machine learning to automate corporate workflows (like document processing and approvals), analyze business data, and integrate seamlessly with enterprise ERPs. It features native Arabic NLP and aligns with NDMO AI governance.",
        },
        {
          q: "Numora",
          a: "Numora (Coming Soon) is our accounting platform for SMEs. It natively connects to **EZ Integrated**, meaning your accounting entries and ZATCA submissions come from the exact same source—eliminating double data entry. It helps CFOs track 5 real-time KPIs: Cash Conversion Cycle, VAT Liability, Revenue per Employee, Gross Margin, and DSO.",
        },
        {
          q: "LINKIT",
          a: "LINKIT is an upcoming digital presence platform. It allows businesses to create branded short links (e.g., go.yourbrand.sa) and **dynamic QR codes**. For example, a restaurant can update a printed QR code menu to a new seasonal menu instantly from the dashboard without ever reprinting the physical code.",
        },
      ],
    },
    {
      id: "zatca",
      label: "ZATCA & Compliance",
      icon: "🛡️",
      questions: [
        {
          q: "Are CODE LTD solutions ZATCA Phase 2 compliant?",
          a: "Yes! Our EZ Integrated platform is fully certified for ZATCA Phase 2 (Integration Phase). It handles the complete technical workflow: UBL 2.1 XML formatting, cryptographic stamping, TLV QR code generation, and real-time Fatoora API submission (B2B) or 24-hour reporting (B2C).",
        },
        {
          q: "What are the deadlines for ZATCA Wave 23 and 24?",
          a: "• **Wave 23** (Revenues > SAR 750,000): Compliance window is January 1 to March 31, 2026.\n• **Wave 24** (Revenues > SAR 375,000): Compliance deadline is June 30, 2026.\n*Note: Attempting integration in the final weeks is risky. We recommend beginning the EZ Integrated onboarding at least 60-90 days before your deadline.*",
        },
        {
          q: "What are the technical requirements for ZATCA Phase 2?",
          a: "Phase 2 integration requires: UUID generation for every invoice, Cryptographic stamps (digital signatures), TLV encoded QR codes, UBL 2.1 XML formatting, secure API connections to the Fatoora platform, and CSID provisioning. EZ Integrated handles all of this automatically via a simple API call.",
        },
        {
          q: "What are the penalties for ZATCA non-compliance?",
          a: "ZATCA's penalty framework starts at SAR 1,000 for minor infractions and escalates up to SAR 50,000 or more for systemic failures. Furthermore, ZATCA may reject non-compliant invoices entirely, disrupting your ability to collect payment. EZ Integrated clients are automatically kept compliant through our continuous platform updates.",
        },
        {
          q: "Do you comply with PDPL (Data Privacy Law)?",
          a: "Yes. In compliance with Saudi Arabia's Personal Data Protection Law (PDPL), all CODE LTD products strictly enforce data localization. Client data is stored exclusively within Saudi Arabia on Saudi-certified cloud infrastructure. We also follow strict role-based access controls.",
        },
      ],
    },
    {
      id: "industries",
      label: "Industries Served",
      icon: "🏭",
      questions: [
        {
          q: "Which industries do you serve?",
          a: "We provide tailored solutions for multiple sectors, including:\n• Retail & Supermarkets\n• Food & Restaurants (F&B)\n• Fuel Stations & Forecourts\n• Logistics & Transport\n• Legal Services\n• Healthcare & Clinics\n• Government & Public Sector\n• Hospitality, Telecom, and Finance.",
        },
        {
          q: "Do you have solutions for Restaurants?",
          a: "Yes! **CODEIT Restaurant** provides table management, Kitchen Display System (KDS) routing by station (e.g., grill, prep, drinks), delivery aggregator integration, split billing, and cloud kitchen multi-brand support—with ZATCA Phase 2 invoicing built in.",
        },
        {
          q: "Do you have solutions for Fuel Stations?",
          a: "Yes. **CODEIT Fuel** is designed for forecourt automation. It handles multi-pump bay management, corporate fleet account credit management (with per-vehicle transaction logging), integrated convenience store POS, and ZATCA-compliant invoicing for all fuel transactions.",
        },
        {
          q: "Do you serve the Logistics sector?",
          a: "Yes! Our logistics solution provides shipment and freight order management with real-time tracking, digital proof of delivery with electronic signature capture, warehouse inventory management, and automated ZATCA-compliant commercial billing.",
        },
        {
          q: "Do you serve the Legal sector?",
          a: "Yes, we offer tailored Legal Tech for Saudi law firms. Features include case management, court session scheduling with dual Hijri and Gregorian calendar support, secure document archiving (DMS), time tracking, and professional ZATCA-compliant invoice generation.",
        },
      ],
    },
    {
      id: "implementation",
      label: "Implementation & Support",
      icon: "⚙️",
      questions: [
        {
          q: "How long does implementation take?",
          a: "Timelines depend on the scope:\n• **CODEIT Basic / EZ Integrated:** Typically live within 3–7 working days (often 7-14 for complex ERP API mapping).\n• **SME Retail/Restaurant:** 10–21 working days.\n• **Enterprise:** Scoped individually based on integrations and branch count.",
        },
        {
          q: "What happens if our internet goes down?",
          a: "CODEIT features a robust offline mode! You can continue processing sales, printing receipts, and managing orders without the internet. ZATCA invoices are securely queued locally and will automatically sync and submit to the Fatoora portal once connectivity is restored.",
        },
        {
          q: "Do you provide training and support?",
          a: "Absolutely. We provide structured training in Arabic and English (remote or on-site in Riyadh). Post-launch, we offer 24/7 technical support via phone, WhatsApp, and our in-app portal.",
        },
        {
          q: "Can you integrate with my existing ERP?",
          a: "Yes. **EZ Integrated** is completely system-agnostic. We regularly connect SAP, Oracle, Microsoft Dynamics, and custom billing software to ZATCA without requiring you to replace your current systems. We provide a RESTful API with comprehensive documentation and a sandbox environment.",
        },
      ],
    },
    {
      id: "pricing_security",
      label: "Pricing & Security",
      icon: "🔒",
      questions: [
        {
          q: "How is CODE LTD software priced?",
          a: "Our products are offered on monthly or annual subscriptions denominated in SAR. Pricing scales based on the products selected, number of branches, and transaction volume. Annual plans come with a discount, and there are no multi-year lock-ins required.",
        },
        {
          q: "Is there a free trial?",
          a: "We offer free live demonstrations and guided proof-of-concept periods for qualified prospects so you can evaluate the platform with your own data before committing.",
        },
        {
          q: "Are your platforms secure?",
          a: "Security is our priority. CODE LTD holds the **ISO 27001** certification for Information Security Management and complies with the **NCA (National Cybersecurity Authority)** ECC framework. All data is securely backed up in real-time across multiple zones within the Kingdom, targeting a Recovery Time Objective (RTO) of under 4 hours.",
        },
      ],
    },
  ],
};

export default chatbotData;