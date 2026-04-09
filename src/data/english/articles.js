export const ARTICLES = [
  // ─────────────────────────────────────────────
  // ZATCA / EZ INTEGRATED
  // ─────────────────────────────────────────────
  {
    id: "zatca-phase-2-guide",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80",
    cat: "Compliance",
    title: "ZATCA Phase 2 Complete Guide: What Every Saudi Business Needs to Know in 2025",
    read: "8 min read",
    date: "Jan 15, 2025",
    author: "CODE LTD Compliance Team",
    excerpt:
      "A comprehensive walkthrough of ZATCA Phase 2 e-invoicing requirements, deadlines, and how EZ Integrated ensures your business is fully certified before the mandate applies to you.",
    content: [
      {
        type: "intro",
        text: "ZATCA (Zakat, Tax and Customs Authority) Phase 2, also known as the Integration Phase of Fatoorah, represents the most significant shift in Saudi Arabia's e-invoicing landscape. While Phase 1 required businesses to generate structured electronic invoices, Phase 2 demands real-time integration with ZATCA's central platform — a much higher technical bar. CODE LTD's EZ Integrated is a ZATCA-certified solution built to handle this entirely on your behalf.",
      },
      {
        type: "heading",
        text: "What is ZATCA Phase 2?",
      },
      {
        type: "text",
        text: "Phase 2 requires taxpayers to integrate their e-invoicing systems — ERP, POS, or billing software — directly with ZATCA's Fatoorah portal via a standard API. Every B2B invoice must be submitted in real-time for clearance, and B2C invoices must be reported within 24 hours. Non-compliance exposes businesses to significant fines and operational disruption. EZ Integrated handles this entire workflow automatically, with no manual steps required from your team.",
      },
      {
        type: "heading",
        text: "Who is Affected and When?",
      },
      {
        type: "text",
        text: "ZATCA is rolling out Phase 2 in waves based on annual revenue thresholds. As of late 2025, ZATCA has announced 24 waves — with Wave 23 (SAR 750K+ revenue) due by 31 March 2026 and Wave 24 (SAR 375K+ revenue) due by 30 June 2026. All VAT-registered businesses in Saudi Arabia will eventually be subject to Phase 2 requirements. ZATCA notifies affected businesses at least six months before their wave deadline.",
      },
      {
        type: "callout",
        text: "Important: Businesses should begin technical integration at least 3 months before their wave deadline. EZ Integrated can have most businesses fully compliant within 7–14 working days.",
      },
      {
        type: "heading",
        text: "Key Technical Requirements",
      },
      {
        type: "list",
        items: [
          "UUID generation for every invoice",
          "Cryptographic stamp (digital signature) on each document",
          "QR code generation compliant with TLV encoding standards",
          "XML invoice format compliant with UBL 2.1 standard",
          "Secure API connection to ZATCA's Fatoorah platform",
          "Device onboarding and compliance unit (CSID) provisioning",
        ],
      },
      {
        type: "heading",
        text: "How EZ Integrated Ensures Compliance",
      },
      {
        type: "text",
        text: "EZ Integrated is CODE LTD's dedicated ZATCA Phase 1 and Phase 2 compliance solution. Our platform handles the entire compliance workflow — UUID generation, cryptographic stamping, QR code embedding, UBL 2.1 XML formatting, and real-time Fatoorah API submission — transparently in the background. It integrates with all major client systems including CODEIT, and its advanced secured APIs are built to align with any existing business infrastructure. Your team simply issues invoices as normal; the compliance layer is invisible.",
      },
      {
        type: "heading",
        text: "Penalties for Non-Compliance",
      },
      {
        type: "text",
        text: "ZATCA has outlined a tiered penalty structure for businesses that fail to comply with Phase 2 requirements. Fines range from SAR 1,000 for minor infractions to SAR 50,000 or more for systemic non-compliance. Beyond financial penalties, ZATCA may reject non-compliant invoices entirely — directly disrupting your ability to conduct business and collect payment. All EZ Integrated clients are automatically kept compliant through ongoing platform updates.",
      },
    ],
  },

  {
    id: "ez-integrated-api-guide",
    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=700&q=80",
    cat: "Compliance",
    title: "EZ Integrated: How Saudi Businesses Connect Any System to ZATCA in Days, Not Months",
    read: "6 min read",
    date: "Mar 10, 2025",
    author: "CODE LTD Compliance Team",
    excerpt:
      "Legacy ERPs, custom billing tools, POS platforms — EZ Integrated's advanced API layer connects them all to ZATCA's Fatoorah portal without requiring businesses to replace their existing software.",
    content: [
      {
        type: "intro",
        text: "When Saudi businesses hear 'ZATCA Phase 2 integration', many assume it means replacing their existing ERP or billing system entirely. The reality is far less disruptive. EZ Integrated — CODE LTD's ZATCA-certified compliance engine — is designed to sit between any existing business system and ZATCA's Fatoorah portal, handling the entire technical compliance layer without requiring you to change the software your team already knows.",
      },
      {
        type: "heading",
        text: "The Integration Challenge Most Businesses Face",
      },
      {
        type: "text",
        text: "ZATCA Phase 2 compliance is technically demanding. It requires implementing UBL 2.1 XML invoice formatting, cryptographic stamping, real-time API communication, error handling, retry logic, and ongoing alignment with ZATCA's evolving specifications. For most businesses, building this capability in-house is neither practical nor cost-effective. EZ Integrated was purpose-built to solve exactly this problem — providing a managed compliance layer that sits between your system and ZATCA's.",
      },
      {
        type: "heading",
        text: "How EZ Integrated Works",
      },
      {
        type: "text",
        text: "EZ Integrated exposes a simple, well-documented API that your existing system calls whenever an invoice is issued. From that point, EZ Integrated takes over: it transforms the invoice data into ZATCA-compliant UBL 2.1 XML, applies the cryptographic stamp, generates the TLV QR code, submits the invoice to Fatoorah in real-time, and returns the clearance confirmation — all within seconds. Your system simply passes invoice data and receives a compliance confirmation back. No ZATCA-specific knowledge is required from your development team.",
      },
      {
        type: "callout",
        text: "EZ Integrated has successfully onboarded clients running SAP, Oracle, Microsoft Dynamics, custom ERP systems, and CODEIT POS — all connected to ZATCA Phase 2 within 7–14 working days.",
      },
      {
        type: "heading",
        text: "Advanced API Capabilities",
      },
      {
        type: "list",
        items: [
          "RESTful API with comprehensive documentation and sandbox environment",
          "Support for standard invoices, debit notes, and credit notes",
          "Real-time B2B clearance and 24-hour B2C reporting modes",
          "Automatic retry and queue management for connectivity interruptions",
          "Webhook callbacks for invoice status updates",
          "Full audit log of all ZATCA submissions and responses",
          "Multi-entity support for business groups with multiple VAT registrations",
        ],
      },
      {
        type: "heading",
        text: "Staying Compliant as ZATCA Evolves",
      },
      {
        type: "text",
        text: "One of the most overlooked aspects of ZATCA compliance is maintenance. ZATCA regularly updates its technical specifications, API versions, and validation rules. Businesses that built their own integrations must track and implement these changes continuously — a significant ongoing cost. EZ Integrated clients receive all specification updates automatically, with zero effort from their side. When ZATCA changes its requirements, EZ Integrated updates the platform; your system continues to pass invoice data exactly as before.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // CODEIT POS
  // ─────────────────────────────────────────────
  {
    id: "pos-systems-saudi-retail",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    cat: "Technology",
    title: "How Modern POS Systems Are Transforming Saudi Retail Experiences",
    read: "6 min read",
    date: "Dec 28, 2024",
    author: "CODE LTD Product Team",
    excerpt:
      "The Saudi retail landscape is evolving rapidly. Discover how CODEIT is helping Saudi retailers deliver faster checkouts, smarter inventory management, and full ZATCA compliance — from a single platform.",
    content: [
      {
        type: "intro",
        text: "The Saudi retail sector is undergoing a profound transformation. Driven by Vision 2030's push for digital commerce, rising consumer expectations, and the mandatory adoption of ZATCA e-invoicing, retailers across the Kingdom are rethinking their technology stacks — starting at the point of sale. CODEIT was built specifically for this moment.",
      },
      {
        type: "heading",
        text: "From Cash Register to Intelligent Hub",
      },
      {
        type: "text",
        text: "Traditional cash registers have given way to cloud-connected POS terminals that do far more than process payments. CODEIT Retail unifies sales, inventory, customer profiles, and ZATCA compliance in a single interface. For multi-branch retailers, this means real-time visibility across every location from a centralised head office dashboard — including inventory levels, sales performance, and branch-level ZATCA integration status.",
      },
      {
        type: "heading",
        text: "ZATCA Compliance Built Into Every Sale",
      },
      {
        type: "text",
        text: "One of the most critical features for Saudi retailers today is seamless ZATCA Phase 2 e-invoicing. CODEIT handles invoice clearance silently in the background via its native integration with EZ Integrated — the cashier completes a transaction, and the system automatically generates, stamps, and submits the compliant invoice to ZATCA's Fatoorah portal. In the event of a connectivity disruption, CODEIT's offline mode queues all invoices and submits them automatically once reconnected.",
      },
      {
        type: "callout",
        text: "CODEIT processes ZATCA Phase 2 invoice clearance automatically with every transaction — no manual steps, no compliance risk, no checkout delay for your customers.",
      },
      {
        type: "heading",
        text: "Multi-Branch Management from One Dashboard",
      },
      {
        type: "text",
        text: "CODEIT Retail supports unlimited branch management from a single centralised dashboard. Operators can update the product catalogue, pricing, and promotions across all branches simultaneously, monitor real-time sales and inventory by location, and manage staff permissions at the branch level. Whether you run three shops in Riyadh or fifty locations across the Kingdom, CODEIT Retail gives you the control and visibility you need.",
      },
      {
        type: "heading",
        text: "Key Features Saudi Retailers Should Prioritise",
      },
      {
        type: "list",
        items: [
          "Native ZATCA Phase 2 e-invoicing via EZ Integrated — fully automatic",
          "Full offline mode with automatic sync when connectivity resumes",
          "Multi-branch inventory tracking with inter-branch transfer management",
          "Centralised product catalogue and pricing management",
          "Mada, Visa, Mastercard, Apple Pay, and STC Pay support",
          "Arabic-first interface with Hijri calendar support",
          "End-of-day reports, shift management, and cashier reconciliation",
        ],
      },
    ],
  },

  {
    id: "codeit-restaurant-f-and-b",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80",
    cat: "Technology",
    title: "Why Saudi F&B Businesses Are Upgrading to Dedicated Restaurant POS in 2025",
    read: "6 min read",
    date: "Feb 20, 2025",
    author: "CODE LTD Product Team",
    excerpt:
      "Generic POS systems were never built for the pace and complexity of food and beverage operations. CODEIT Restaurant delivers order management, kitchen display integration, and ZATCA compliance purpose-built for Saudi F&B.",
    content: [
      {
        type: "intro",
        text: "Running a restaurant, café, or cloud kitchen in Saudi Arabia involves challenges that a generic retail POS simply cannot address: split orders, kitchen display coordination, table management, delivery platform integration, rapid menu changes, and simultaneous ZATCA compliance. CODEIT Restaurant was engineered from the ground up to meet these demands — making it the go-to POS solution for Saudi F&B operators across the Kingdom.",
      },
      {
        type: "heading",
        text: "The Unique Demands of Saudi F&B Operations",
      },
      {
        type: "text",
        text: "Saudi Arabia's food and beverage sector is one of the fastest-growing in the region, with consumers expecting speed, quality, and digital convenience simultaneously. Whether you operate a full-service restaurant in Riyadh, a specialty café in Jeddah, or a multi-brand cloud kitchen, your POS system must handle high transaction volumes, complex modifiers, time-sensitive kitchen coordination, and full ZATCA e-invoicing compliance — all without slowing down service.",
      },
      {
        type: "heading",
        text: "Order Management That Keeps Kitchens Running",
      },
      {
        type: "text",
        text: "CODEIT Restaurant routes orders automatically to the appropriate kitchen station — grill, cold prep, beverages, desserts — via integrated Kitchen Display Screens (KDS). Staff see only the items relevant to their station, in the correct preparation sequence, with elapsed time tracking. This eliminates the paper ticket bottlenecks that slow down kitchens during peak service and gives floor managers real-time visibility into where every order stands.",
      },
      {
        type: "callout",
        text: "CODEIT Restaurant handles ZATCA Phase 2 e-invoicing silently on every transaction — whether dine-in, takeaway, or delivery — ensuring you are always compliant without any additional steps from your team.",
      },
      {
        type: "heading",
        text: "Cloud Kitchen and Multi-Brand Management",
      },
      {
        type: "text",
        text: "For operators running multiple brands from a single kitchen — an increasingly popular model in Saudi Arabia — CODEIT Restaurant supports multi-concept management from one interface. Each brand maintains its own menu, pricing, and reporting while sharing kitchen resources. Orders from all brands flow into the same KDS with clear brand identification, and all invoices are issued correctly under the relevant VAT registration with full ZATCA compliance.",
      },
      {
        type: "heading",
        text: "Features Built for Saudi F&B",
      },
      {
        type: "list",
        items: [
          "Table management with real-time occupancy and order status tracking",
          "Kitchen Display System (KDS) with station-based order routing",
          "Multi-brand and multi-concept management from a single instance",
          "Integration with major delivery aggregators for unified order management",
          "Modifier and combo management with nested customisation support",
          "ZATCA Phase 2 compliant invoicing on all order types via EZ Integrated",
          "Real-time sales and menu performance reporting by item and category",
          "Arabic-first interface with Hijri date support",
        ],
      },
    ],
  },

  {
    id: "codeit-fuel-station-management",
    img: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=700&q=80",
    cat: "Technology",
    title: "Digitising Saudi Fuel Stations: How CODEIT Fuel Modernises Forecourt Operations",
    read: "5 min read",
    date: "Feb 5, 2025",
    author: "CODE LTD Product Team",
    excerpt:
      "Fuel station operations involve unique challenges that generic POS systems cannot address. CODEIT Fuel delivers purpose-built management for Saudi forecourts — from pump control and fleet accounts to ZATCA-compliant invoicing.",
    content: [
      {
        type: "intro",
        text: "Saudi Arabia's fuel station sector is undergoing rapid digital transformation. Where forecourt operations were once managed through disconnected systems and manual reconciliation, CODEIT Fuel delivers a purpose-built POS and management platform that integrates pump control, convenience store operations, fleet account management, and ZATCA Phase 2 e-invoicing in a single, unified system.",
      },
      {
        type: "heading",
        text: "The Complexity of Fuel Station Operations",
      },
      {
        type: "text",
        text: "A modern Saudi fuel station is not simply a point of sale for fuel — it is a complex multi-service operation. Forecourt attendants manage multiple pump bays simultaneously. Fleet operators demand account-based invoicing for their vehicle fleets. Convenience stores operate alongside fuel sales with separate inventory and pricing. And every transaction — whether fuel, shop purchase, or combined — must generate a ZATCA-compliant e-invoice. CODEIT Fuel is built to handle all of this without complexity.",
      },
      {
        type: "heading",
        text: "Fleet Account Management",
      },
      {
        type: "text",
        text: "Fleet operators represent a significant revenue stream for Saudi fuel stations, but managing fleet accounts through manual records or separate systems introduces errors and delays. CODEIT Fuel provides integrated fleet account management: fleet clients are registered in the system with pre-approved credit limits, authorised drivers, and vehicle registrations. Every fuel transaction is automatically logged against the correct fleet account, with consolidated B2B invoices generated on the agreed billing cycle — all compliant with ZATCA Phase 2 requirements.",
      },
      {
        type: "callout",
        text: "CODEIT Fuel generates ZATCA Phase 2 compliant invoices for every transaction type — individual fuel purchases, fleet account sales, and convenience store items — automatically and in real-time.",
      },
      {
        type: "heading",
        text: "Key Capabilities of CODEIT Fuel",
      },
      {
        type: "list",
        items: [
          "Multi-pump bay management with real-time forecourt visibility",
          "Fleet account management with per-vehicle and per-driver transaction logging",
          "Integrated convenience store inventory and sales management",
          "ZATCA Phase 2 e-invoicing for all transaction types via EZ Integrated",
          "Shift reconciliation and fuel volume variance reporting",
          "Loyalty and fleet discount programme management",
          "Arabic-first interface with full Hijri calendar support",
          "End-of-day financial and operational reporting",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // TICKETPRO
  // ─────────────────────────────────────────────
  {
    id: "whatsapp-customer-service-saudi",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80",
    cat: "Customer Operations",
    title: "WhatsApp + TicketPro: Building a Professional Customer Service Operation for Saudi Businesses",
    read: "4 min read",
    date: "Oct 18, 2024",
    author: "CODE LTD Product Team",
    excerpt:
      "Saudi Arabia has one of the world's highest WhatsApp adoption rates. Here is how integrating WhatsApp with TicketPro turns every customer message into a tracked, managed, and resolvable support ticket.",
    content: [
      {
        type: "intro",
        text: "Saudi Arabia has one of the highest WhatsApp adoption rates globally. For businesses in the Kingdom, this isn't just a communication statistic — it's a commercial reality. Customers expect to interact with businesses on WhatsApp: for inquiries, order confirmations, support requests, and complaints. The challenge is that WhatsApp alone is not a support system — messages get lost, requests fall through the cracks, and there is no accountability. TicketPro's WhatsApp integration solves this.",
      },
      {
        type: "heading",
        text: "WhatsApp Business API vs. WhatsApp Business App",
      },
      {
        type: "text",
        text: "While the free WhatsApp Business app works for sole traders and very small teams, growing businesses need the WhatsApp Business API — a programmable interface that integrates with platforms like TicketPro. The API enables automated ticket creation from incoming messages, team-based conversation management, automated acknowledgement responses, and full message history logging against customer profiles.",
      },
      {
        type: "heading",
        text: "How TicketPro Handles WhatsApp",
      },
      {
        type: "text",
        text: "When a customer sends a WhatsApp message to your business number, TicketPro automatically creates a support ticket, assigns it to the appropriate team or agent, and sends the customer an automated acknowledgement in Arabic or English. Agents reply directly from the TicketPro interface — no need to switch between apps. The full conversation is logged against the ticket, and if it isn't resolved within your defined SLA, it escalates automatically.",
      },
      {
        type: "heading",
        text: "High-Value Use Cases for Saudi Businesses",
      },
      {
        type: "list",
        items: [
          "Customer support requests from retail, restaurant, or service clients",
          "Order status inquiries automatically matched to CODEIT transaction records",
          "Appointment and booking queries for service businesses",
          "Complaint management with automatic escalation if unresolved within SLA",
          "Post-service follow-up and customer satisfaction collection",
          "Internal IT or facilities support request management",
          "Supplier and vendor communication tracking",
        ],
      },
      {
        type: "heading",
        text: "TicketPro + SAVOXX: Complete Customer Communications Coverage",
      },
      {
        type: "text",
        text: "For businesses that also receive a high volume of inbound calls, TicketPro and SAVOXX work together to cover every channel. SAVOXX manages and analyses inbound calls with AI-powered quality monitoring, and any call that requires follow-up automatically generates a TicketPro ticket — with the call recording and summary attached. Whether your customer contacts you by phone or WhatsApp, every interaction is tracked, assigned, and resolved through the same structured system.",
      },
      {
        type: "callout",
        text: "Businesses using TicketPro's WhatsApp integration report significantly higher first-response rates and a measurable reduction in unresolved customer queries — because nothing falls through the cracks.",
      },
    ],
  },

  {
    id: "ticketpro-sla-escalation",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80",
    cat: "Customer Operations",
    title: "SLA Management and Automatic Escalation: How TicketPro Keeps Saudi Businesses Accountable",
    read: "5 min read",
    date: "Mar 1, 2025",
    author: "CODE LTD Product Team",
    excerpt:
      "Customer expectations in Saudi Arabia are rising. TicketPro's SLA enforcement and automatic escalation capabilities ensure no request goes unanswered — and every team member is accountable for resolution quality.",
    content: [
      {
        type: "intro",
        text: "In a market where customer loyalty is increasingly tied to service quality, Saudi businesses can no longer afford to have support requests languish in inboxes or get lost between departments. TicketPro — CODE LTD's integrated support ticket management platform — was built to ensure every customer and technical request is captured, assigned, tracked, and resolved within defined service standards.",
      },
      {
        type: "heading",
        text: "What is a Service Level Agreement (SLA) in Support Operations?",
      },
      {
        type: "text",
        text: "An SLA defines the expected response and resolution times for different categories of support request. A critical technical issue might require a first response within one hour and full resolution within four hours, while a general inquiry might allow a 24-hour response window. Without a system to enforce these standards, SLAs exist only on paper. TicketPro makes SLAs operational — automatically tracking time against each ticket and triggering escalations when thresholds are approached or breached.",
      },
      {
        type: "heading",
        text: "Automatic Escalation: No Request Left Behind",
      },
      {
        type: "text",
        text: "TicketPro's escalation engine monitors every open ticket against its assigned SLA tier. When a ticket approaches its first-response deadline without agent activity, the system sends an alert to the responsible agent and their supervisor. If the deadline passes, the ticket automatically escalates to the next management level — with a full audit trail of the escalation history. This creates genuine accountability without requiring manual oversight from team leaders.",
      },
      {
        type: "callout",
        text: "TicketPro's escalation capabilities work across all integrated channels — email, WhatsApp, web form, and phone — so no request is missed regardless of how the customer chose to contact you.",
      },
      {
        type: "heading",
        text: "Permissions Management and Role-Based Access",
      },
      {
        type: "text",
        text: "TicketPro's permissions management system ensures that agents see only the tickets they are authorised to handle, while supervisors have full visibility across their team's queue. Different departments — customer support, technical support, finance queries — operate in segregated workspaces with their own SLA tiers and escalation paths. Sensitive information, such as payment complaints or account disputes, can be restricted to designated senior agents without disrupting the broader team's workflow.",
      },
      {
        type: "heading",
        text: "TicketPro Key Capabilities",
      },
      {
        type: "list",
        items: [
          "Multi-channel ticket creation: email, WhatsApp, web form, phone (via SAVOXX)",
          "Configurable SLA tiers by ticket category, priority, and department",
          "Automatic escalation with manager notifications and full audit trail",
          "Role-based permissions and department-level workspace segregation",
          "Canned responses and knowledge base for faster agent resolution",
          "Customer satisfaction (CSAT) collection on ticket closure",
          "Real-time dashboard and SLA compliance reporting",
          "Full integration with SAVOXX for voice-to-ticket workflows",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SAVOXX
  // ─────────────────────────────────────────────
  {
    id: "savoxx-ai-call-center",
    img: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=700&q=80",
    cat: "Customer Operations",
    title: "AI-Powered Call Management: How SAVOXX Is Redefining Contact Centre Operations in Saudi Arabia",
    read: "6 min read",
    date: "Jan 28, 2025",
    author: "CODE LTD Product Team",
    excerpt:
      "Saudi businesses managing high inbound call volumes face real challenges in quality assurance, call routing, and performance analysis. SAVOXX uses AI to handle all three — automatically and at scale.",
    content: [
      {
        type: "intro",
        text: "For Saudi businesses that rely on telephone as a primary customer and operations channel — contact centres, logistics companies, healthcare providers, financial services firms, and government service entities — managing call quality at scale is an enormous operational challenge. SAVOXX, CODE LTD's advanced call centre management platform, uses artificial intelligence to transform how these businesses organise, record, analyse, and improve their voice operations.",
      },
      {
        type: "heading",
        text: "The Limitations of Traditional Call Centre Management",
      },
      {
        type: "text",
        text: "Traditional call centre platforms record calls and route them — but quality assurance remains a largely manual process. Supervisors can only review a small fraction of calls, compliance monitoring is inconsistent, and agents receive feedback weeks after the interaction rather than in real-time. Performance analysis relies on spreadsheets and subjective supervisor assessments. SAVOXX replaces this model with continuous, AI-driven analysis across every call.",
      },
      {
        type: "heading",
        text: "AI-Powered Call Analysis and Quality Monitoring",
      },
      {
        type: "text",
        text: "SAVOXX applies natural language processing to call recordings to automatically assess agent performance against predefined quality criteria: greeting quality, issue identification, resolution speed, compliance adherence, escalation handling, and customer sentiment throughout the call. Every call receives an automated quality score, with specific moments flagged for supervisor review. This means quality monitoring coverage of 100% of calls — not the 3–5% that manual review allows — with consistent, objective scoring criteria applied uniformly across all agents.",
      },
      {
        type: "callout",
        text: "SAVOXX integrates directly with TicketPro — when a call requires follow-up action, a ticket is automatically generated with the call recording and AI-generated summary attached, ensuring nothing falls through the cracks.",
      },
      {
        type: "heading",
        text: "Professional Call Organisation and Management",
      },
      {
        type: "text",
        text: "Beyond AI analysis, SAVOXX provides a comprehensive call management infrastructure: intelligent call routing based on agent skill, availability, and call category; real-time supervisor monitoring dashboards with live call listening capability; full call recording with searchable metadata; and detailed performance reporting by agent, team, and time period. Supervisors gain visibility they have never had before — and agents benefit from clearer, more consistent performance feedback.",
      },
      {
        type: "heading",
        text: "SAVOXX Core Capabilities",
      },
      {
        type: "list",
        items: [
          "AI-powered quality monitoring across 100% of recorded calls",
          "Natural language processing for agent performance and sentiment analysis",
          "Intelligent call routing by skill, availability, and call category",
          "Real-time supervisor dashboards with live monitoring capability",
          "Full call recording with searchable tags and metadata",
          "Automatic TicketPro ticket generation for calls requiring follow-up",
          "Agent coaching tools with AI-identified improvement areas",
          "Operational efficiency reporting by team, agent, and call category",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // LINKIT
  // ─────────────────────────────────────────────
  {
    id: "linkit-digital-presence-saudi",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&q=80",
    cat: "Digital Marketing",
    title: "LINKIT: The Smart Way for Saudi Businesses to Manage Their Digital Presence and Short Links",
    read: "4 min read",
    date: "Mar 15, 2025",
    author: "CODE LTD Product Team",
    excerpt:
      "Saudi businesses juggle social channels, service landing pages, product catalogues, and WhatsApp — all on mobile. LINKIT brings every digital touchpoint together with smart links, dynamic barcodes, and a drag-and-drop page builder.",
    content: [
      {
        type: "intro",
        text: "As Saudi consumers increasingly discover and engage with businesses through their smartphones, the ability to share content quickly, track engagement precisely, and present a coherent digital presence across multiple platforms has become a competitive necessity. LINKIT — CODE LTD's upcoming digital account management platform — is designed to give Saudi businesses the tools to manage their digital touchpoints intelligently, without technical complexity.",
      },
      {
        type: "heading",
        text: "The Problem with Fragmented Digital Presence",
      },
      {
        type: "text",
        text: "A typical Saudi SME might maintain a WhatsApp Business account, an Instagram profile, a Snapchat presence, a Talabat listing, a Google Business profile, and a basic website — each representing a different product, service, or customer contact point. Sharing long, untracked URLs across these channels is both unprofessional and analytically useless. LINKIT solves this by providing branded short links and smart pages that unify all of these touchpoints behind a clean, trackable digital identity.",
      },
      {
        type: "heading",
        text: "Short Links, Dynamic Barcodes, and QR Codes",
      },
      {
        type: "text",
        text: "LINKIT enables businesses to create branded short links that redirect to any destination — a product page, a WhatsApp chat, a reservation form, or a promotional offer — with full click analytics. Dynamic barcodes and QR codes can be updated at any time without reprinting physical materials: a QR code on a printed menu can be redirected to a new seasonal menu PDF, a promotion page, or an ordering link at any moment from the LINKIT dashboard. This is particularly valuable for Saudi businesses that invest in printed collateral.",
      },
      {
        type: "callout",
        text: "LINKIT is coming soon. Businesses that pre-register will receive priority access and early pricing. Contact the CODE LTD team to register your interest.",
      },
      {
        type: "heading",
        text: "Custom Domain and Brand Identity",
      },
      {
        type: "text",
        text: "Rather than sharing links under a generic shortening domain, LINKIT allows businesses to use their own branded domain for all short links — reinforcing brand recognition with every share. A restaurant group might use links.restaurantname.sa, while a professional services firm might use go.firmname.com.sa. Every link is immediately recognisable as coming from the business — not a generic third-party service.",
      },
      {
        type: "heading",
        text: "LINKIT Key Capabilities",
      },
      {
        type: "list",
        items: [
          "Branded short link creation with custom domain support",
          "Dynamic QR codes and barcodes updateable without reprinting",
          "Drag-and-drop landing page builder — no developer required",
          "Link-in-bio style pages for unified social media presence",
          "Full click analytics: device, geography, time, and referral source",
          "Easy content sharing across WhatsApp, Instagram, Snapchat, and more",
          "Multi-user team access with link organisation by campaign or project",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // NUMORA
  // ─────────────────────────────────────────────
  {
    id: "cfo-kpis-real-time",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
    cat: "Business Intelligence",
    title: "5 KPIs Every Saudi CFO Should Be Tracking in Real-Time",
    read: "5 min read",
    date: "Dec 10, 2024",
    author: "CODE LTD Analytics Team",
    excerpt:
      "In a fast-moving economy, monthly financial reports are no longer enough. Here are the five KPIs that Saudi finance leaders need to monitor continuously — and how Numora and CODEIT make it possible.",
    content: [
      {
        type: "intro",
        text: "Saudi Arabia's business environment is evolving at a pace that makes monthly financial reporting feel antiquated. With VAT obligations, ZATCA compliance, GOSI contributions, and increasingly competitive markets, CFOs need real-time visibility — not a 30-day-old snapshot. Numora, CODE LTD's upcoming SME accounting platform, is being built with this need at its core.",
      },
      {
        type: "heading",
        text: "1. Cash Conversion Cycle (CCC)",
      },
      {
        type: "text",
        text: "The cash conversion cycle measures how long it takes to convert investments in inventory and other resources into cash flows from sales. For Saudi businesses with complex supply chains or government contract receivables, a rising CCC can signal liquidity risk long before it appears in monthly P&L statements. Real-time inventory and accounts receivable data from CODEIT and Numora makes this trackable continuously.",
      },
      {
        type: "heading",
        text: "2. VAT Liability vs. Collection",
      },
      {
        type: "text",
        text: "With Saudi VAT at 15%, the gap between VAT collected from customers and VAT owed to ZATCA is a critical real-time metric. Businesses that don't monitor this continuously risk surprise cash outflows at VAT filing periods. Numora's integration with EZ Integrated means VAT liability and ZATCA-cleared invoice data share the same source — giving CFOs an always-accurate VAT position without manual reconciliation.",
      },
      {
        type: "heading",
        text: "3. Revenue per Employee",
      },
      {
        type: "text",
        text: "Given the Saudisation (Nitaqat) requirements that affect many businesses in the Kingdom, understanding revenue generated per headcount — especially when factoring in GOSI contributions and benefits — is essential for workforce planning and profitability analysis. CODEIT's branch-level sales data, combined with Numora's payroll and cost tracking, makes this metric continuously visible.",
      },
      {
        type: "callout",
        text: "Saudi CFOs using integrated POS and accounting platforms report significantly less time spent on monthly financial consolidation — because the data is already unified and up to date.",
      },
      {
        type: "heading",
        text: "4. Gross Margin by Product Category",
      },
      {
        type: "text",
        text: "Aggregated revenue masks the profitability story. Real-time gross margin tracking by category, branch, or customer segment allows CFOs to make fast decisions about promotions, pricing, and inventory — rather than waiting for month-end analysis. CODEIT Retail's sales data flows directly into Numora for cost-of-goods and margin reporting at the category level.",
      },
      {
        type: "heading",
        text: "5. Days Sales Outstanding (DSO)",
      },
      {
        type: "text",
        text: "For businesses selling to government entities or large enterprises — common in Saudi Arabia — DSO can stretch significantly. Monitoring this in real-time enables the finance team to escalate collections proactively and accurately forecast cash positions. Numora's accounts receivable module, connected to EZ Integrated invoice status, gives finance teams a live view of what has been invoiced, cleared, and collected.",
      },
    ],
  },

  {
    id: "accounting-sme-saudi",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
    cat: "Accounting",
    title: "How Saudi SMEs Can Take Control of Their Finances Without Enterprise Complexity",
    read: "7 min read",
    date: "Nov 22, 2024",
    author: "CODE LTD Product Team",
    excerpt:
      "Cloud-based accounting built for the Saudi market is putting real financial control within reach of SMEs — without the cost, complexity, or implementation timelines of traditional ERP systems.",
    content: [
      {
        type: "intro",
        text: "For years, proper accounting and financial management software was associated with expensive, complex implementations reserved for large corporations. That era is over. Cloud-based accounting platforms designed specifically for the Saudi market now give SMEs access to the same financial control, compliance automation, and operational visibility that large enterprises rely on — without the enterprise price tag. Numora, CODE LTD's upcoming accounting platform, is built precisely for this gap.",
      },
      {
        type: "heading",
        text: "The Saudi SME Finance Challenge",
      },
      {
        type: "text",
        text: "Saudi SMEs face a unique combination of financial pressures: ZATCA e-invoicing mandates, 15% VAT calculation and reporting, GOSI contributions, Saudisation quotas, and the need to produce accurate financial statements for lenders, investors, and government programmes. Managing these obligations through disconnected spreadsheets or legacy systems creates risk, inefficiency, and missed opportunities for growth.",
      },
      {
        type: "heading",
        text: "What Numora Will Deliver for Saudi SMEs",
      },
      {
        type: "list",
        items: [
          "Full chart of accounts management with Arabic and English support",
          "Journal entries, general ledger, trial balance, and financial statements",
          "Accounts payable and receivable with aging reports",
          "Inventory and purchasing management with purchase orders and GRNs",
          "Document Management System (DMS) for centralised financial document storage",
          "Integrated CRM module for customer financial relationship tracking",
          "VAT calculation and ZATCA-compliant reporting via EZ Integrated",
          "Detailed financial performance dashboards and custom reports",
        ],
      },
      {
        type: "heading",
        text: "Connected to Your Entire CODE LTD Stack",
      },
      {
        type: "text",
        text: "One of Numora's most important design principles is native connectivity. CODEIT sales data flows into Numora automatically — no manual export or import required. EZ Integrated's ZATCA clearance status feeds directly into Numora's accounts receivable. This means your accounting records are always in sync with your operations and your compliance obligations, without any manual reconciliation.",
      },
      {
        type: "callout",
        text: "Numora is coming soon. Existing CODE LTD clients will receive priority access. Contact our team to register your interest and be notified at launch.",
      },
      {
        type: "heading",
        text: "From Startup to Scale — the Right Tool at Every Stage",
      },
      {
        type: "text",
        text: "CODEIT Basic gives a new business its first POS and ZATCA-compliant invoicing. As the business grows, EZ Integrated manages the compliance layer. TicketPro handles customer support. SAVOXX manages call operations. And Numora sits at the financial layer, giving the business owner and their accountant a complete, real-time picture of the company's financial health. This is the integrated stack CODE LTD is building — one that grows with every Saudi business that uses it.",
      },
    ],
  },

  {
    id: "numora-dms-document-management",
    img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=700&q=80",
    cat: "Accounting",
    title: "Why Saudi Businesses Need a Document Management System Integrated With Their Accounting",
    read: "5 min read",
    date: "Mar 5, 2025",
    author: "CODE LTD Analytics Team",
    excerpt:
      "Disconnected document storage is one of the biggest hidden inefficiencies in Saudi SME finance. Numora's integrated Document Management System eliminates the gap between financial records and the documents that support them.",
    content: [
      {
        type: "intro",
        text: "Most Saudi SMEs manage their financial documents in a fragmented way: invoices in email, contracts on a shared drive, purchase orders in WhatsApp groups, and payment confirmations scattered across multiple devices. When a ZATCA audit occurs or a payment dispute arises, reconstructing the document trail is time-consuming and error-prone. Numora's integrated Document Management System (DMS) solves this by centralising every financial document alongside its corresponding accounting record.",
      },
      {
        type: "heading",
        text: "The Hidden Cost of Disconnected Document Storage",
      },
      {
        type: "text",
        text: "The true cost of document disorganisation extends well beyond inconvenience. When accountants spend time searching for supporting documents, when invoices are paid twice due to duplicate paper records, when VAT claims are rejected because supporting documentation cannot be produced, or when a financing application stalls while lenders wait for organised financial records — these are real financial and operational costs. Numora's DMS eliminates all of these through systematic, automatic document attachment at the transaction level.",
      },
      {
        type: "heading",
        text: "How Numora DMS Works",
      },
      {
        type: "text",
        text: "Every transaction in Numora — journal entry, purchase order, supplier invoice, payment record, or customer invoice — has a document attachment capability built directly into its interface. Supporting files are stored centrally and linked to the accounting record permanently. When an auditor, accountant, or ZATCA inspector needs documentation, every supporting document is accessible directly from the relevant transaction in seconds. The DMS also supports version control for contracts and agreements, maintaining a complete history of document revisions.",
      },
      {
        type: "callout",
        text: "Numora is coming soon. Saudi businesses interested in integrated accounting with a built-in DMS can register for priority access through the CODE LTD team.",
      },
      {
        type: "heading",
        text: "DMS and CRM: A Unified Business Intelligence Layer",
      },
      {
        type: "text",
        text: "Numora's DMS works alongside its integrated CRM module to create a complete financial and relationship picture for every customer and supplier. A customer's profile holds not only their transaction history and outstanding balances but also their contracts, signed agreements, and correspondence — giving finance and sales teams a single source of truth. This is particularly valuable for Saudi businesses managing large government or enterprise client accounts with complex documentation requirements.",
      },
      {
        type: "heading",
        text: "Numora DMS Key Features",
      },
      {
        type: "list",
        items: [
          "Transaction-level document attachment for all accounting record types",
          "Centralised document repository with full-text search",
          "Version control for contracts and recurring agreements",
          "Role-based access controls for sensitive financial documents",
          "Integration with ZATCA e-invoice records from EZ Integrated",
          "Supplier and customer document management via integrated CRM",
          "Audit-ready document organisation for ZATCA and GAZT reviews",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // THEHEEN
  // ─────────────────────────────────────────────
  {
    id: "theheen-ai-enterprise-automation",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80",
    cat: "Artificial Intelligence",
    title: "Theheen: The Saudi-Built AI Engine That Automates Enterprise Processes at Scale",
    read: "7 min read",
    date: "Mar 20, 2025",
    author: "CODE LTD AI Team",
    excerpt:
      "Developed in the Kingdom of Saudi Arabia, Theheen is CODE LTD's advanced AI engine designed to automate corporate workflows, analyse business data, and deliver actionable intelligence — built cloud-native and multi-tenant from the ground up.",
    content: [
      {
        type: "intro",
        text: "Artificial intelligence is transitioning from an emerging technology to a competitive necessity for Saudi enterprises. As Vision 2030 accelerates the Kingdom's digital transformation agenda, businesses that deploy AI to automate processes, analyse operational data, and deliver intelligent decision support will operate at a structurally different level of efficiency from those that do not. Theheen — CODE LTD's advanced AI engine developed in the Kingdom of Saudi Arabia — is built to deliver this transformation for Saudi organisations across sectors.",
      },
      {
        type: "heading",
        text: "Developed in Saudi Arabia for Saudi Organisations",
      },
      {
        type: "text",
        text: "Theheen is not an international platform adapted for the Saudi market — it is built here, for here. Developed by CODE LTD's AI team in the Kingdom, Theheen is designed with the linguistic, regulatory, cultural, and operational context of Saudi Arabia at its core. Arabic language processing, Hijri calendar handling, ZATCA and NDMO compliance considerations, and integration with the Saudi enterprise ecosystem are foundational capabilities — not afterthoughts.",
      },
      {
        type: "heading",
        text: "Process Automation at Enterprise Scale",
      },
      {
        type: "text",
        text: "Theheen's automation capabilities are designed to eliminate the manual, repetitive cognitive work that consumes significant staff time in Saudi enterprises: document classification and data extraction, workflow routing and approvals, compliance checklist processing, report generation, and exception flagging. By deploying advanced machine learning models trained on domain-specific data, Theheen achieves accuracy levels that make automation genuinely reliable for business-critical workflows — not just low-stakes administrative tasks.",
      },
      {
        type: "callout",
        text: "Theheen is coming soon. Saudi enterprises interested in AI-powered process automation can register interest with the CODE LTD team for early access and pilot programme consideration.",
      },
      {
        type: "heading",
        text: "Multi-Tenant, Cloud-Native Architecture",
      },
      {
        type: "text",
        text: "Theheen is built as a multi-tenant, cloud-native ML platform — meaning it can serve multiple business units, subsidiaries, or client organisations simultaneously, with complete data isolation between tenants. This architecture makes Theheen equally suitable for a single enterprise deploying it across multiple internal departments and for organisations that want to offer AI-powered services to their own clients. Scaling to handle increased data volumes or additional use cases requires no infrastructure changes.",
      },
      {
        type: "heading",
        text: "Seamless Integration with Leading Enterprise Systems",
      },
      {
        type: "text",
        text: "Theheen's integration layer is designed to connect with the enterprise systems already in use across Saudi organisations — SAP, Oracle, Microsoft Dynamics, CODEIT, and custom-built platforms. Rather than requiring businesses to replace existing systems to access AI capabilities, Theheen sits alongside them: consuming data, applying intelligence, and returning outputs through standard API interfaces. This means deployment can begin delivering value within weeks rather than the months that full system replacement would require.",
      },
      {
        type: "heading",
        text: "Theheen Core Capabilities",
      },
      {
        type: "list",
        items: [
          "Advanced machine learning for process automation and classification",
          "Natural language processing with full Arabic language support",
          "Data analysis and pattern recognition across operational datasets",
          "Workflow intelligence with exception detection and routing",
          "Multi-tenant, cloud-native ML platform architecture",
          "Seamless integration with SAP, Oracle, Microsoft Dynamics, and CODEIT",
          "Custom model training on organisation-specific data",
          "Saudi-first design: Arabic NLP, Hijri calendar, regulatory context",
        ],
      },
    ],
  },

  {
    id: "ai-vision-2030-saudi-enterprises",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700&q=80",
    cat: "Artificial Intelligence",
    title: "Vision 2030 and AI: Why Saudi Enterprises Must Act Now on Intelligent Automation",
    read: "6 min read",
    date: "Mar 25, 2025",
    author: "CODE LTD AI Team",
    excerpt:
      "Saudi Arabia's national transformation agenda creates both pressure and opportunity for enterprises to deploy AI. Those who move early gain structural efficiency advantages. Here is what the opportunity looks like — and how Theheen positions Saudi businesses to capture it.",
    content: [
      {
        type: "intro",
        text: "Saudi Arabia's Vision 2030 is not just a government programme — it is reshaping the competitive landscape for every business operating in the Kingdom. As digital transformation accelerates across sectors, as international players increase their presence in Saudi markets, and as consumer expectations rise, the enterprises that leverage artificial intelligence and intelligent automation will operate at fundamentally different efficiency and insight levels from those that do not. CODE LTD's Theheen AI engine was built specifically to help Saudi organisations capture this advantage.",
      },
      {
        type: "heading",
        text: "The Automation Dividend for Saudi Enterprises",
      },
      {
        type: "text",
        text: "Research consistently shows that knowledge work in large organisations contains a substantial proportion of tasks that are repetitive, rule-based, and suitable for automation: document processing, data entry and validation, compliance checking, report compilation, and routine approvals. In Saudi enterprises — where administrative overhead is often significant due to regulatory complexity, multi-language operations, and government reporting requirements — the potential productivity gains from intelligent automation are especially large.",
      },
      {
        type: "heading",
        text: "From Data to Decisions: AI as Competitive Intelligence",
      },
      {
        type: "text",
        text: "Beyond automation, AI delivers its most transformative value through pattern recognition at scale. Saudi businesses accumulate vast operational data — transaction records, customer interactions, call logs, inventory movements, financial flows — but often lack the analytical infrastructure to extract actionable intelligence from it continuously. Theheen's machine learning models can identify demand patterns, operational anomalies, customer behaviour signals, and risk indicators from operational data in real-time, delivering intelligence that would take human analysts weeks to produce.",
      },
      {
        type: "callout",
        text: "Theheen is being developed in Saudi Arabia specifically for Saudi organisations — with Arabic NLP, PDPL-compliant data handling, and integration with the Saudi enterprise technology ecosystem built in from day one.",
      },
      {
        type: "heading",
        text: "Responsible AI in the Saudi Context",
      },
      {
        type: "text",
        text: "CODE LTD developed Theheen with Saudi Arabia's emerging AI regulatory environment at the forefront. The National Data and AI Authority (NDMO) and SDAIA are actively shaping AI governance frameworks in the Kingdom, and Theheen's architecture is designed to align with these frameworks — particularly around data localisation, algorithmic transparency, and bias mitigation. Saudi organisations deploying Theheen can do so with confidence that their AI infrastructure meets evolving national standards.",
      },
      {
        type: "heading",
        text: "The CODE LTD Integrated Advantage",
      },
      {
        type: "text",
        text: "Theheen's most powerful deployment scenario is as the intelligence layer across the full CODE LTD product stack. CODEIT generates transactional data. SAVOXX generates voice interaction data. TicketPro generates customer request data. EZ Integrated generates compliance and invoice data. Numora generates financial data. Theheen consumes all of this — applying AI to surface insights, automate processes, and identify opportunities that no human analyst monitoring each system separately could match. This is the integrated, intelligent business operating system CODE LTD is building for Saudi enterprises.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // PDPL / CROSS-PRODUCT COMPLIANCE
  // ─────────────────────────────────────────────
  {
    id: "pdpl-saudi-data-protection",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80",
    cat: "Compliance",
    title: "Understanding PDPL: Saudi Data Protection Law Explained for Business Owners",
    read: "9 min read",
    date: "Nov 5, 2024",
    author: "CODE LTD Legal & Compliance",
    excerpt:
      "Saudi Arabia's Personal Data Protection Law imposes significant obligations on businesses that collect, process, or store personal data. Here is what you need to know — and how CODE LTD products are built to keep you compliant.",
    content: [
      {
        type: "intro",
        text: "Saudi Arabia's Personal Data Protection Law (PDPL), enforced by the Saudi Data and Artificial Intelligence Authority (SDAIA), came into full effect in September 2023. For businesses operating in the Kingdom, it represents a fundamental shift in how personal data must be collected, processed, stored, and protected. Every CODE LTD product — CODEIT, EZ Integrated, TicketPro, SAVOXX, Numora, LINKIT, and Theheen — is built with PDPL compliance as a foundational requirement.",
      },
      {
        type: "heading",
        text: "Who Does the PDPL Apply To?",
      },
      {
        type: "text",
        text: "The PDPL applies to any organisation that processes the personal data of individuals residing in Saudi Arabia — regardless of where the organisation is based. This includes Saudi businesses, multinational branches, and international companies with Saudi customers or employees. If your business collects customer names, phone numbers, email addresses, or transaction records, PDPL applies to you.",
      },
      {
        type: "heading",
        text: "Key Obligations Under PDPL",
      },
      {
        type: "list",
        items: [
          "Obtain explicit consent before collecting personal data",
          "Inform individuals of the purpose and scope of data collection",
          "Store personal data only within Saudi Arabia or approved jurisdictions",
          "Implement appropriate technical and organisational security measures",
          "Report data breaches to SDAIA within 72 hours",
          "Enable individuals to access, correct, and request deletion of their data",
          "Appoint a Data Protection Officer (DPO) for large-scale data processing operations",
        ],
      },
      {
        type: "heading",
        text: "Data Localisation: Saudi Cloud First",
      },
      {
        type: "text",
        text: "One of the most operationally significant PDPL requirements is data localisation. Personal data of Saudi residents must be stored within the Kingdom unless a lawful data transfer mechanism is in place. This directly impacts businesses using international cloud providers without Saudi data centres. All CODE LTD products store data exclusively within Saudi Arabia on Saudi-certified cloud infrastructure — satisfying this requirement entirely.",
      },
      {
        type: "callout",
        text: "All CODE LTD products — CODEIT, EZ Integrated, TicketPro, SAVOXX, LINKIT, Numora, and Theheen — store all client data exclusively within Saudi Arabia, fully satisfying the PDPL localisation requirement.",
      },
      {
        type: "heading",
        text: "How CODE LTD Supports Your PDPL Compliance",
      },
      {
        type: "text",
        text: "Beyond data localisation, CODE LTD supports your PDPL obligations in several ways: role-based access controls across all platforms ensure that only authorised staff can access customer data; full audit trails in TicketPro and SAVOXX log every interaction with customer data; data export tools allow you to respond to individual access requests; and our ISO 27001 certified security controls and NCA framework compliance provide the technical safeguards PDPL requires. For questions about your data rights or to exercise your PDPL rights, contact our Data Protection Officer at privacy@codeltd.com.sa.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // INTEGRATED STACK / CROSS-PRODUCT
  // ─────────────────────────────────────────────
  {
    id: "code-ltd-integrated-stack",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&q=80",
    cat: "Business Intelligence",
    title: "The CODE LTD Integrated Stack: How Saudi Businesses Can Run Their Entire Operation from One Ecosystem",
    read: "7 min read",
    date: "Mar 28, 2025",
    author: "CODE LTD Strategy Team",
    excerpt:
      "From POS and ZATCA compliance to AI-powered automation and financial management — CODE LTD's seven connected products form a complete business operating system designed specifically for Saudi enterprises and SMEs.",
    content: [
      {
        type: "intro",
        text: "Most Saudi businesses operate with a collection of disconnected software tools — a POS system that doesn't talk to the accounting software, a call centre platform that has no connection to the ticketing system, a compliance tool that generates invoices the finance team then has to manually reconcile. CODE LTD is building something different: a fully integrated product ecosystem — seven platforms designed to share data, reinforce each other's capabilities, and eliminate the gaps and manual effort that disconnected tools create.",
      },
      {
        type: "heading",
        text: "The Seven Platforms, One Connected System",
      },
      {
        type: "text",
        text: "CODEIT handles sales and point-of-service operations across retail, restaurant, and fuel environments. EZ Integrated manages ZATCA Phase 1 and Phase 2 e-invoicing compliance automatically. TicketPro captures, routes, and resolves customer and technical support requests across all channels. SAVOXX manages voice operations with AI-powered call analysis and quality monitoring. LINKIT manages digital presence, short links, and dynamic QR codes. Numora handles accounting, financial management, and document control for SMEs. And Theheen provides the AI intelligence layer — automating processes and generating insights across the entire stack.",
      },
      {
        type: "heading",
        text: "Data Flows That Eliminate Manual Work",
      },
      {
        type: "text",
        text: "The real power of the CODE LTD stack is in its data architecture. When a sale is completed in CODEIT, EZ Integrated automatically handles ZATCA compliance; Numora automatically receives the revenue record; and if a customer contacts support about their order, TicketPro has access to the CODEIT transaction data. When SAVOXX detects a call requiring follow-up, TicketPro creates the ticket automatically with the call recording attached. When Numora needs to understand sales performance, CODEIT data is already there. These connections replace hours of manual data entry and reconciliation.",
      },
      {
        type: "callout",
        text: "CODE LTD clients using multiple products report substantial reductions in administrative overhead and near-elimination of manual data reconciliation between systems — because the data flows automatically.",
      },
      {
        type: "heading",
        text: "Built for Saudi Arabia's Regulatory Environment",
      },
      {
        type: "text",
        text: "Every product in the CODE LTD stack is designed around Saudi Arabia's specific regulatory requirements. ZATCA Phase 2 e-invoicing, PDPL data localisation, VAT at 15%, Saudisation considerations, GOSI reporting, and the NCA cybersecurity framework are not features added to international products — they are fundamental to how CODE LTD platforms are built. This means Saudi businesses can run their operations on a stack that is already aligned with the Kingdom's legal and compliance requirements.",
      },
      {
        type: "heading",
        text: "The CODE LTD Product Ecosystem at a Glance",
      },
      {
        type: "list",
        items: [
          "CODEIT — Advanced cloud POS for retail, restaurant, fuel, and general business (Live)",
          "EZ Integrated — ZATCA Phase 1 & 2 e-invoicing compliance engine (Live)",
          "TicketPro — Multi-channel customer and technical support ticket management (Live)",
          "SAVOXX — AI-powered call centre management and voice analytics (Live)",
          "LINKIT — Digital account management, short links, and QR codes (Coming Soon)",
          "Numora — Integrated accounting and financial management for SMEs (Coming Soon)",
          "Theheen — Saudi-built AI engine for process automation and business intelligence (Coming Soon)",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // CODE LTD — COMPANY
  // ─────────────────────────────────────────────
  {
    id: "code-ltd-who-we-are",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
    cat: "About CODE LTD",
    title: "Who Is CODE LTD? The Saudi Technology Company Building the Business Operating System of the Future",
    read: "6 min read",
    date: "Apr 1, 2025",
    author: "CODE LTD Editorial Team",
    excerpt:
      "CODE LTD is a Saudi technology company on a mission to equip every business in the Kingdom with the software it needs to operate efficiently, comply confidently, and grow sustainably. Here is our story.",
    content: [
      {
        type: "intro",
        text: "CODE LTD is a Saudi-founded, Saudi-operated technology company building an integrated suite of business software platforms designed specifically for the Kingdom's market. From the point of sale to ZATCA compliance, from customer support to AI-powered process automation, CODE LTD's seven products — CODEIT, EZ Integrated, TicketPro, SAVOXX, LINKIT, Numora, and Theheen — form a connected ecosystem that gives Saudi businesses the tools they need to run smarter, leaner, and more compliantly at every stage of growth.",
      },
      {
        type: "heading",
        text: "Founded in Saudi Arabia, Built for Saudi Arabia",
      },
      {
        type: "text",
        text: "CODE LTD was founded by a team of Saudi technology and business professionals who understood first-hand the challenges facing businesses in the Kingdom: regulatory complexity that most international software does not address, a need for Arabic-first interfaces that treat the language as a priority rather than a translation, compliance obligations — particularly ZATCA e-invoicing — that required dedicated local expertise, and a market that was digitalising rapidly with very few locally-built platforms keeping pace. CODE LTD was built to close that gap.",
      },
      {
        type: "heading",
        text: "Our Philosophy: Integration Over Fragmentation",
      },
      {
        type: "text",
        text: "The most common technology problem Saudi businesses face is not the absence of software — it is the presence of too many disconnected tools that do not talk to each other. A POS system that doesn't connect to the accounting software. A compliance tool that generates invoices the finance team has to reconcile manually. A call centre platform with no link to the customer ticketing system. CODE LTD's philosophy is integration: every product we build is designed to share data with every other product in the stack, eliminating the manual effort and error risk that fragmentation creates.",
      },
      {
        type: "callout",
        text: "CODE LTD is headquartered in Saudi Arabia and stores all client data exclusively within the Kingdom — fully aligned with PDPL data localisation requirements and the NCA cybersecurity framework.",
      },
      {
        type: "heading",
        text: "Compliance as a Core Capability, Not a Feature",
      },
      {
        type: "text",
        text: "Operating in Saudi Arabia means navigating a complex and evolving regulatory environment: ZATCA e-invoicing phases, 15% VAT obligations, PDPL data protection requirements, GOSI and Saudisation obligations, and the NCA cybersecurity framework. For most international software vendors, Saudi compliance is a localisation checkbox. For CODE LTD, it is foundational to every product decision. Our clients never need to worry about whether their software keeps them compliant — because compliance is built into how the software works, not bolted on afterward.",
      },
      {
        type: "heading",
        text: "Our Commitment to Saudi Businesses",
      },
      {
        type: "text",
        text: "CODE LTD's mission is straightforward: equip every Saudi business — from the single-branch startup to the multi-subsidiary enterprise — with the integrated technology infrastructure it needs to operate at its best. We measure our success by the efficiency our clients gain, the compliance burden we remove from their teams, and the growth we enable by giving business owners and executives the visibility and tools they need to make better decisions faster. This is what drives every product we build and every feature we ship.",
      },
    ],
  },

  {
    id: "code-ltd-vision-2030-alignment",
    img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=700&q=80",
    cat: "About CODE LTD",
    title: "How CODE LTD Supports Saudi Arabia's Vision 2030 Digital Transformation Agenda",
    read: "5 min read",
    date: "Apr 5, 2025",
    author: "CODE LTD Editorial Team",
    excerpt:
      "Vision 2030 is reshaping every sector of the Saudi economy. CODE LTD's integrated product suite is built to accelerate the digital transformation of Saudi businesses — from regulatory compliance to AI-powered operations.",
    content: [
      {
        type: "intro",
        text: "Saudi Arabia's Vision 2030 is the most ambitious national transformation programme in the Kingdom's history — and its digital economy pillar is central to its success. As the government drives the adoption of e-invoicing, digital financial reporting, cashless payments, and AI deployment across the private sector, the technology infrastructure that Saudi businesses rely on must evolve to match. CODE LTD's products are designed to be the enablers of this transformation — making compliance automatic, operations digital, and intelligence accessible for businesses of every size.",
      },
      {
        type: "heading",
        text: "ZATCA e-Invoicing: The Compliance Infrastructure of Digital Commerce",
      },
      {
        type: "text",
        text: "ZATCA's mandatory e-invoicing programme — Fatoorah — is one of Vision 2030's most consequential digital infrastructure initiatives. By requiring all VAT-registered businesses to issue and submit structured electronic invoices through a centralised government platform, Saudi Arabia is building a real-time, verifiable digital record of commercial activity across the Kingdom. EZ Integrated is CODE LTD's dedicated platform for this transformation — ensuring that businesses of all sizes can meet their ZATCA obligations without requiring deep technical expertise in-house.",
      },
      {
        type: "heading",
        text: "Cashless Payments and Digital Commerce",
      },
      {
        type: "text",
        text: "Vision 2030 targets a cashless economy, with the Saudi Central Bank (SAMA) reporting rapid growth in digital payment adoption across the Kingdom. CODEIT supports this directly — integrating Mada, Visa, Mastercard, Apple Pay, and STC Pay across all point-of-sale environments, from retail checkouts to restaurant tables to fuel forecourts. Every digital payment processed through CODEIT is simultaneously recorded, reported, and ZATCA-compliant — making digital commerce both efficient and fully above board.",
      },
      {
        type: "callout",
        text: "CODE LTD's products are built to accelerate, not resist, Saudi Arabia's digital transformation — because we believe that businesses that digitalise faster will compete and grow better in Vision 2030's economy.",
      },
      {
        type: "heading",
        text: "AI and National Competitiveness",
      },
      {
        type: "text",
        text: "Saudi Arabia's National Strategy for Data and AI (NSDAI) positions the Kingdom as a leading global hub for artificial intelligence by 2030. CODE LTD contributes to this agenda through Theheen — an AI engine developed in the Kingdom that brings machine learning-powered process automation and business intelligence to Saudi enterprises. By building AI capability domestically rather than relying entirely on international platforms, CODE LTD is helping develop the Kingdom's own AI ecosystem and the human capital within it.",
      },
      {
        type: "heading",
        text: "SME Empowerment: Technology That Grows with Every Business",
      },
      {
        type: "text",
        text: "Vision 2030 explicitly targets the development of Saudi SMEs as engines of economic diversification and employment. CODE LTD's product stack is designed to serve this mission directly. A new business can start with CODEIT Basic for its first POS and ZATCA-compliant invoicing. As it grows, it adds EZ Integrated for compliance, TicketPro for customer support, SAVOXX for call management, Numora for accounting, LINKIT for digital presence, and eventually Theheen for intelligent automation. The CODE LTD ecosystem is a technology partner that scales with every Saudi business that uses it.",
      },
    ],
  },

  {
    id: "code-ltd-security-and-infrastructure",
    img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=700&q=80",
    cat: "About CODE LTD",
    title: "Security, Data Sovereignty, and Infrastructure: Why Saudi Businesses Trust CODE LTD",
    read: "5 min read",
    date: "Apr 8, 2025",
    author: "CODE LTD Security Team",
    excerpt:
      "Every CODE LTD product is built on Saudi-hosted infrastructure with ISO 27001-aligned security controls, full NCA framework compliance, and PDPL data localisation — giving clients confidence that their data never leaves the Kingdom.",
    content: [
      {
        type: "intro",
        text: "For businesses managing customer data, financial records, call recordings, and compliance documentation, the security and sovereignty of that data is not a secondary concern — it is a fundamental requirement. CODE LTD has built its entire infrastructure with this understanding at its core. Every platform we operate runs on Saudi-hosted cloud infrastructure, with security controls aligned to international standards and Saudi Arabia's own regulatory framework.",
      },
      {
        type: "heading",
        text: "All Data Stored Within Saudi Arabia",
      },
      {
        type: "text",
        text: "Saudi Arabia's Personal Data Protection Law (PDPL) requires that personal data of Saudi residents be stored within the Kingdom unless specific lawful transfer mechanisms are in place. CODE LTD satisfies this requirement absolutely: all client data — customer records, transaction histories, call recordings, financial documents, and invoice data — is stored exclusively on Saudi-certified cloud infrastructure within the Kingdom. Our clients never need to verify data residency compliance separately — it is guaranteed by our infrastructure design.",
      },
      {
        type: "heading",
        text: "NCA Framework and Cybersecurity Compliance",
      },
      {
        type: "text",
        text: "Saudi Arabia's National Cybersecurity Authority (NCA) has established the Essential Cybersecurity Controls (ECC) framework as the baseline cybersecurity standard for organisations operating in the Kingdom. CODE LTD's infrastructure and operational security practices are designed and maintained in alignment with the NCA's ECC framework — covering network security, identity and access management, data protection, incident response, and third-party risk management. This alignment ensures that CODE LTD clients operating in regulated industries can rely on their software vendor meeting the same security standards their own organisations are required to maintain.",
      },
      {
        type: "callout",
        text: "CODE LTD maintains ISO 27001-aligned information security management practices and stores all client data exclusively within Saudi Arabia — satisfying both PDPL data localisation and NCA cybersecurity framework requirements.",
      },
      {
        type: "heading",
        text: "Role-Based Access and Audit Trails Across the Stack",
      },
      {
        type: "text",
        text: "Security is not only an infrastructure question — it is an operational one. Across every CODE LTD product, role-based access controls ensure that staff members can access only the data and functions relevant to their role. A cashier in CODEIT cannot access financial reporting. A support agent in TicketPro cannot view another department's tickets. A call centre agent in SAVOXX cannot access management quality review data. Every sensitive action generates a full audit trail, creating the accountability and traceability that Saudi regulatory environments demand.",
      },
      {
        type: "heading",
        text: "Uptime, Reliability, and Business Continuity",
      },
      {
        type: "text",
        text: "For POS systems, compliance platforms, and customer-facing support tools, downtime has direct revenue and operational consequences. CODE LTD's infrastructure is designed for high availability with redundancy at every critical layer. CODEIT includes a robust offline mode that queues transactions and ZATCA invoice submissions when connectivity is disrupted, syncing automatically when the connection is restored — ensuring that a network issue at the branch level never results in operational paralysis or compliance risk.",
      },
    ],
  },

  {
    id: "code-ltd-customer-success",
    img: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=700&q=80",
    cat: "About CODE LTD",
    title: "Beyond Software: How CODE LTD Partners With Saudi Businesses for Long-Term Success",
    read: "4 min read",
    date: "Apr 12, 2025",
    author: "CODE LTD Customer Success Team",
    excerpt:
      "Deploying new software is only the beginning. CODE LTD's approach to onboarding, training, support, and continuous improvement is what turns technology adoption into lasting operational advantage for our clients.",
    content: [
      {
        type: "intro",
        text: "The best software in the world delivers limited value if the businesses using it are not set up to use it well. CODE LTD's commitment to clients does not end at the sale or the go-live — it extends through onboarding, training, support, and the ongoing product development that keeps our platforms aligned with our clients' evolving needs and Saudi Arabia's changing regulatory environment.",
      },
      {
        type: "heading",
        text: "Onboarding That Gets You Operational Quickly",
      },
      {
        type: "text",
        text: "CODE LTD's onboarding process is designed to minimise the time between contract signing and productive operation. For EZ Integrated, most clients are fully ZATCA Phase 2 compliant within 7–14 working days — including system integration, CSID provisioning, and live Fatoorah submission testing. For CODEIT deployments, our implementation team handles product catalogue setup, branch configuration, payment terminal provisioning, and staff training before go-live. We define clear milestones and maintain daily communication throughout the onboarding period so clients always know exactly where they stand.",
      },
      {
        type: "heading",
        text: "Arabic and English Support for Saudi Teams",
      },
      {
        type: "text",
        text: "All CODE LTD products are Arabic-first — interfaces, documentation, and support communications are available in both Arabic and English. Our customer success and technical support teams operate in both languages, reflecting the bilingual reality of the Saudi business environment. This matters most during onboarding and issue resolution, when precise communication between our team and the client's team is essential for fast outcomes.",
      },
      {
        type: "callout",
        text: "CODE LTD clients receive dedicated account management, priority technical support, and proactive compliance update notifications — because our clients' operational continuity is our responsibility, not just theirs.",
      },
      {
        type: "heading",
        text: "Proactive Compliance Updates — No Surprises",
      },
      {
        type: "text",
        text: "One of CODE LTD's most valued service commitments is proactive regulatory communication. When ZATCA announces a new compliance wave, updates its technical specifications, or introduces new invoice validation rules, CODE LTD notifies affected clients well in advance and handles the technical implementation automatically where possible. Our clients learn about regulatory changes from us — with a clear explanation of what is changing, when it applies to their business, and what action (if any) is required from their side.",
      },
      {
        type: "heading",
        text: "A Partnership That Scales With Your Business",
      },
      {
        type: "text",
        text: "As our clients' businesses grow — adding branches, increasing transaction volumes, expanding their team, or entering new product categories — the CODE LTD stack grows with them. A client who started with CODEIT Basic can transition to CODEIT Retail seamlessly. A business that outgrows manual accounting can activate Numora with all historical CODEIT data already connected. A growing customer service operation can add TicketPro and SAVOXX to the existing stack without any system replacement. CODE LTD is designed to be the technology partner Saudi businesses keep as they grow — not the one they outgrow.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 7 DEDICATED PRODUCT SPOTLIGHT ARTICLES
  // ─────────────────────────────────────────────

  {
    id: "product-spotlight-codeit",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80",
    cat: "Product Spotlight",
    title: "CODEIT: The Cloud-Based POS Platform Powering Saudi Retail, Restaurants, and Fuel Stations",
    read: "7 min read",
    date: "Apr 15, 2025",
    author: "CODE LTD Product Team",
    excerpt:
      "From a startup's first sale to a multi-branch retail chain's daily operations — CODEIT is the advanced, scalable point-of-sale platform built for every Saudi business environment. Here is everything you need to know.",
    content: [
      {
        type: "intro",
        text: "CODEIT is CODE LTD's flagship point-of-sale platform — a cloud-based, ZATCA-certified solution designed to power businesses across every major Saudi industry vertical. Whether you are launching a first retail outlet, running a growing restaurant group, managing a fuel station forecourt, or scaling a multi-branch operation across the Kingdom, CODEIT provides the operational infrastructure to do it efficiently, compliantly, and with complete visibility.",
      },
      {
        type: "heading",
        text: "What is CODEIT?",
      },
      {
        type: "text",
        text: "CODEIT is an advanced, cloud-based Point of Sale system designed to support businesses across various industries in Saudi Arabia. It is scalable, deeply integrated, and built from the ground up to enhance operational efficiency and improve the customer experience at every touchpoint. Unlike generic POS platforms adapted for the Saudi market, CODEIT is purpose-built for it — with Arabic-first interfaces, Hijri calendar support, ZATCA Phase 2 e-invoicing built in, and native support for Saudi payment methods including Mada, Apple Pay, and STC Pay.",
      },
      {
        type: "heading",
        text: "CODEIT Basic — The Right Start for Every New Business",
      },
      {
        type: "text",
        text: "CODEIT Basic is a streamlined POS solution designed for startups and small businesses with essential operational needs. It provides everything a new Saudi business requires to start trading professionally: fast sales processing, receipt generation, ZATCA-compliant e-invoicing, and end-of-day reporting — in a clean, easy-to-learn interface that any team member can operate from day one. CODEIT Basic gives new businesses a compliant, professional foundation without the complexity of enterprise software.",
      },
      {
        type: "heading",
        text: "CODEIT Retail — Built for Scale",
      },
      {
        type: "text",
        text: "CODEIT Retail is a comprehensive system tailored for retail businesses, supporting inventory management, sales tracking, and multi-branch operations. It gives retail operators centralised control over their product catalogue, pricing, and promotions across unlimited branch locations — with real-time stock levels, inter-branch transfer management, and a head office dashboard that shows performance across every location simultaneously. For Saudi retailers growing from one branch to many, CODEIT Retail is the operational backbone that makes that growth manageable.",
      },
      {
        type: "heading",
        text: "CODEIT Restaurant — Engineered for F&B",
      },
      {
        type: "text",
        text: "CODEIT Restaurant is a specialised solution for food and beverage businesses — restaurants, cafés, and cloud kitchens — with features designed around order management and kitchen operations. Table management, Kitchen Display System (KDS) integration, modifier and combo management, multi-brand cloud kitchen support, and delivery aggregator integration are all built in. CODEIT Restaurant handles the pace and complexity of F&B operations that generic POS systems cannot, while handling ZATCA compliance automatically on every transaction.",
      },
      {
        type: "heading",
        text: "CODEIT Fuel — Precision for Forecourt Operations",
      },
      {
        type: "text",
        text: "CODEIT Fuel is a dedicated system designed for fuel stations, enabling efficient management of fuel operations and related services. It handles multi-pump bay management, fleet account management with per-vehicle transaction logging, integrated convenience store operations, and ZATCA-compliant invoicing for all transaction types — from individual fuel purchases to consolidated fleet billing. For Saudi fuel station operators, CODEIT Fuel replaces disconnected manual systems with a single, integrated management platform.",
      },
      {
        type: "callout",
        text: "All four CODEIT variants — Basic, Retail, Restaurant, and Fuel — include native ZATCA Phase 2 e-invoicing via EZ Integrated, built-in offline mode, and full Arabic interface support. Visit codeit.sa to learn more.",
      },
      {
        type: "heading",
        text: "What Makes CODEIT Different",
      },
      {
        type: "list",
        items: [
          "Cloud-based architecture with real-time multi-branch synchronisation",
          "ZATCA Phase 1 and Phase 2 e-invoicing built in via EZ Integrated — fully automatic",
          "Offline mode with automatic queue and sync when connectivity resumes",
          "Arabic-first interface with full Hijri calendar support",
          "Mada, Visa, Mastercard, Apple Pay, and STC Pay payment integration",
          "Native connectivity with Numora (accounting), TicketPro (support), and SAVOXX (calls)",
          "Industry-specific variants: Basic, Retail, Restaurant, and Fuel",
          "Scalable from a single terminal to an enterprise-wide multi-branch deployment",
        ],
      },
    ],
  },

  {
    id: "product-spotlight-ez-integrated",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80",
    cat: "Product Spotlight",
    title: "EZ Integrated: Saudi Arabia's Smart ZATCA Compliance Engine — Phase 1 and Phase 2",
    read: "6 min read",
    date: "Apr 15, 2025",
    author: "CODE LTD Compliance Team",
    excerpt:
      "EZ Integrated is CODE LTD's dedicated ZATCA compliance platform — a smart technical solution that enables any Saudi business or system to achieve full Fatoorah e-invoicing compliance through advanced, secure APIs.",
    content: [
      {
        type: "intro",
        text: "EZ Integrated is CODE LTD's dedicated ZATCA compliance engine — a smart technical solution that enables Saudi businesses and institutions to achieve full compliance with the Zakat, Tax, and Customs Authority's e-invoicing requirements across both Phase 1 and Phase 2. From cryptographic stamping and QR code generation to real-time Fatoorah API submission and ongoing regulatory alignment, EZ Integrated handles the entire ZATCA compliance workflow so that businesses can focus on their operations rather than their obligations.",
      },
      {
        type: "heading",
        text: "What is EZ Integrated?",
      },
      {
        type: "text",
        text: "EZ Integrated is a purpose-built compliance middleware platform. It sits between any existing business system — ERP, POS, billing software, or custom application — and ZATCA's Fatoorah portal, handling every technical requirement of Saudi e-invoicing compliance automatically. Businesses pass invoice data to EZ Integrated via a clean, well-documented API; EZ Integrated does everything else: UBL 2.1 XML formatting, cryptographic stamping, QR code generation, real-time submission, and error handling — returning clearance confirmation in seconds.",
      },
      {
        type: "heading",
        text: "Facilitating Technical Integration With Any System",
      },
      {
        type: "text",
        text: "One of EZ Integrated's most important capabilities is its system-agnostic integration approach. EZ Integrated has successfully connected clients running SAP, Oracle ERP, Microsoft Dynamics, CODEIT POS, and fully custom-built billing platforms to ZATCA Phase 2 — all within 7–14 working days. The integration process is straightforward: EZ Integrated's technical team works with the client's developers to map invoice data fields to the EZ Integrated API, conducts sandbox testing against ZATCA's compliance environment, and provisions the production CSID (Compliance Stamp Identifier) before go-live.",
      },
      {
        type: "heading",
        text: "Full Compliance With ZATCA's Regulatory Requirements",
      },
      {
        type: "text",
        text: "EZ Integrated handles every element of ZATCA's technical e-invoicing specification: UUID generation for each invoice, cryptographic digital stamping, TLV-encoded QR code creation, UBL 2.1 XML invoice formatting, real-time B2B invoice clearance, and 24-hour B2C invoice reporting. It manages device onboarding, CSID provisioning, and certificate lifecycle management automatically — ensuring that clients remain technically compliant even as ZATCA renews and rotates compliance credentials.",
      },
      {
        type: "callout",
        text: "EZ Integrated clients receive all ZATCA specification updates automatically. When ZATCA changes its technical requirements, EZ Integrated updates the platform — with zero action required from the client's side. Visit ezintegrated.com to learn more.",
      },
      {
        type: "heading",
        text: "Advanced, Secured APIs Built for Any Infrastructure",
      },
      {
        type: "text",
        text: "EZ Integrated's API layer is designed for reliability, security, and developer simplicity. The RESTful API is fully documented with a sandbox environment for pre-production testing, supports all invoice types (standard invoices, debit notes, and credit notes), includes webhook callbacks for real-time invoice status updates, and provides a full audit log of every ZATCA submission and response. Rate limiting, retry logic, and queue management for connectivity interruptions are all handled by the platform — ensuring that no invoice is ever lost due to a transient technical issue.",
      },
      {
        type: "heading",
        text: "EZ Integrated Key Capabilities",
      },
      {
        type: "list",
        items: [
          "ZATCA Phase 1 and Phase 2 compliance — both generation and integration phases",
          "System-agnostic integration: SAP, Oracle, Microsoft Dynamics, CODEIT, and custom systems",
          "UBL 2.1 XML formatting, cryptographic stamping, and TLV QR code generation",
          "Real-time B2B clearance and 24-hour B2C reporting modes",
          "CSID provisioning and certificate lifecycle management",
          "RESTful API with sandbox environment and full developer documentation",
          "Automatic ZATCA specification updates — no client action required",
          "Multi-entity support for business groups with multiple VAT registrations",
        ],
      },
    ],
  },

  {
    id: "product-spotlight-ticketpro",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&q=80",
    cat: "Product Spotlight",
    title: "TicketPro: The Integrated Support Ticket System That Keeps Saudi Businesses Accountable to Their Customers",
    read: "6 min read",
    date: "Apr 15, 2025",
    author: "CODE LTD Product Team",
    excerpt:
      "TicketPro is CODE LTD's customer and technical support management platform — built to organise, track, escalate, and resolve every request that reaches your business, across every communication channel.",
    content: [
      {
        type: "intro",
        text: "TicketPro is CODE LTD's integrated system for managing, handling, and tracking customer and technical support requests efficiently. In a Saudi business environment where customers expect fast, consistent responses across WhatsApp, phone, email, and web — and where internal technical teams manage requests from multiple departments simultaneously — TicketPro provides the structured platform that turns every incoming request into a tracked, assigned, and resolvable ticket.",
      },
      {
        type: "heading",
        text: "What is TicketPro?",
      },
      {
        type: "text",
        text: "TicketPro is a multi-channel ticketing platform that captures customer and technical support requests from every communication channel — WhatsApp Business API, email, web submission forms, and phone (via SAVOXX integration) — and converts them automatically into structured tickets. Each ticket is assigned to the appropriate team or agent, tracked against a defined Service Level Agreement (SLA), and escalated automatically if it is not resolved within the required timeframe. Nothing falls through the cracks, and every team member is accountable for the requests in their queue.",
      },
      {
        type: "heading",
        text: "Organising and Tracking Every Customer Request",
      },
      {
        type: "text",
        text: "TicketPro gives businesses complete visibility over their support operations. Team leaders can see every open ticket across their department, filter by priority, channel, agent, or SLA status, and identify bottlenecks before they become escalations. Agents work from a clean, prioritised queue with full conversation history, customer context, and internal notes attached to each ticket. For Saudi businesses managing large volumes of customer inquiries across multiple channels, this structured visibility is transformative.",
      },
      {
        type: "heading",
        text: "Permissions Management and Departmental Segregation",
      },
      {
        type: "text",
        text: "TicketPro's permissions management system gives businesses precise control over who sees what. Different departments — customer service, technical support, billing, operations — work in segregated workspaces with their own ticket queues, SLA configurations, and escalation paths. Sensitive ticket categories, such as payment disputes or executive complaints, can be restricted to designated senior agents. Team leaders have full visibility across their team's queue without seeing other departments' confidential requests.",
      },
      {
        type: "callout",
        text: "TicketPro integrates directly with SAVOXX — when a call requires follow-up, a ticket is automatically created with the call recording and AI-generated summary attached. Every channel, one unified system.",
      },
      {
        type: "heading",
        text: "Automatic Escalation — Built-In Accountability",
      },
      {
        type: "text",
        text: "TicketPro's escalation engine monitors every open ticket against its SLA tier continuously. When a ticket approaches its response deadline without agent activity, the system alerts the responsible agent and their supervisor. If the deadline passes, the ticket escalates automatically to the next management level — with a complete audit trail. This creates genuine operational accountability without requiring supervisors to manually monitor every ticket in the queue.",
      },
      {
        type: "heading",
        text: "TicketPro Key Capabilities",
      },
      {
        type: "list",
        items: [
          "Multi-channel ticket creation: WhatsApp, email, web form, and phone via SAVOXX",
          "Automated ticket assignment to the correct team or agent on creation",
          "Configurable SLA tiers by ticket category, priority, and department",
          "Automatic escalation with full management notification and audit trail",
          "Role-based permissions and department-level workspace segregation",
          "Full conversation history and internal notes on every ticket",
          "Canned responses and knowledge base for faster agent resolution",
          "CSAT collection on ticket closure and SLA compliance reporting",
        ],
      },
    ],
  },

  {
    id: "product-spotlight-savoxx",
    img: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=700&q=80",
    cat: "Product Spotlight",
    title: "SAVOXX: The AI-Powered Call Centre Platform Transforming How Saudi Businesses Manage Voice Operations",
    read: "6 min read",
    date: "Apr 15, 2025",
    author: "CODE LTD Product Team",
    excerpt:
      "SAVOXX is CODE LTD's advanced call centre management platform — combining intelligent call routing, AI-powered quality monitoring, and deep operational analytics to elevate every voice interaction your business has.",
    content: [
      {
        type: "intro",
        text: "SAVOXX is CODE LTD's advanced platform for managing call centres and voice operations — helping Saudi companies organise, manage, record, and analyse calls at scale. For businesses where telephone remains a primary channel for customer interaction, sales, and internal coordination, SAVOXX delivers the infrastructure and intelligence to turn call operations from a cost centre into a measurable driver of customer satisfaction and operational efficiency.",
      },
      {
        type: "heading",
        text: "What is SAVOXX?",
      },
      {
        type: "text",
        text: "SAVOXX is a comprehensive call centre management platform that combines professional call infrastructure with artificial intelligence-powered analytics. It handles inbound and outbound call routing, full call recording, real-time supervisor monitoring, and — crucially — automated AI analysis of call quality across every recorded interaction. Where traditional call centre platforms leave quality assurance as a manual, sampling-based process, SAVOXX makes it continuous, objective, and comprehensive.",
      },
      {
        type: "heading",
        text: "AI Technologies That Improve Service Quality",
      },
      {
        type: "text",
        text: "SAVOXX applies natural language processing and machine learning to call recordings to automatically assess agent performance: greeting quality, issue identification speed, resolution effectiveness, compliance adherence, escalation handling, and customer sentiment throughout the call. Every call receives an AI-generated quality score, with specific moments flagged for supervisor attention. This means 100% call coverage for quality monitoring — not the 3–5% that manual review allows — with consistent, bias-free scoring applied uniformly across all agents and shifts.",
      },
      {
        type: "heading",
        text: "Professional Call Organisation and Management",
      },
      {
        type: "text",
        text: "Beyond AI analysis, SAVOXX provides a robust call management infrastructure: intelligent routing based on agent skill, availability, and call classification; real-time supervisor dashboards with live call monitoring and whisper coaching capability; full call recording with searchable metadata; queue management with callback options; and detailed performance reporting by agent, team, time period, and call category. Supervisors gain operational visibility that allows them to manage proactively rather than reactively.",
      },
      {
        type: "callout",
        text: "SAVOXX integrates directly with TicketPro — calls requiring follow-up automatically generate tickets with the call recording and AI summary attached, ensuring no commitment made on a call is ever lost.",
      },
      {
        type: "heading",
        text: "Highly Intelligent Call Recording and Analysis",
      },
      {
        type: "text",
        text: "SAVOXX's recording infrastructure is designed for enterprise reliability and compliance. All calls are recorded with full metadata tagging — agent, team, call category, duration, sentiment score, and outcome — making the recording library fully searchable. Recordings are stored securely within Saudi Arabia in compliance with PDPL data localisation requirements. The AI analysis layer processes recordings automatically after each call, making quality scores and coaching insights available to supervisors without any manual review workflow.",
      },
      {
        type: "heading",
        text: "SAVOXX Key Capabilities",
      },
      {
        type: "list",
        items: [
          "AI-powered quality monitoring across 100% of recorded calls",
          "Natural language processing for agent performance and customer sentiment scoring",
          "Intelligent call routing by skill, availability, language, and call category",
          "Real-time supervisor dashboard with live monitoring and whisper coaching",
          "Full call recording with AI-generated metadata and searchable archive",
          "Automatic TicketPro ticket generation for calls requiring follow-up",
          "Agent performance reporting with AI-identified coaching opportunities",
          "Operational efficiency analytics by team, agent, and call category",
        ],
      },
    ],
  },

  {
    id: "product-spotlight-linkit",
    img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=700&q=80",
    cat: "Product Spotlight",
    title: "LINKIT: The Digital Platform That Connects Saudi Businesses to Their Customers Across Every Channel",
    read: "5 min read",
    date: "Apr 15, 2025",
    author: "CODE LTD Product Team",
    excerpt:
      "LINKIT is CODE LTD's upcoming digital account management platform — giving Saudi businesses the tools to create smart short links, dynamic QR codes, branded pages, and unified digital identities across every platform they use.",
    content: [
      {
        type: "intro",
        text: "LINKIT is CODE LTD's digital platform specialising in managing and linking digital accounts — giving Saudi businesses a powerful, easy-to-use toolkit for unifying their online presence, sharing content intelligently across platforms, and tracking digital engagement with precision. In a market where Saudi consumers are among the world's most active on mobile and social media, the ability to present a clean, professional, and measurable digital identity is a genuine competitive advantage.",
      },
      {
        type: "heading",
        text: "What is LINKIT?",
      },
      {
        type: "text",
        text: "LINKIT is a digital presence management platform that enables businesses to create short links, dynamic barcodes, branded landing pages, and unified link-in-bio style pages — all from a single, intuitive dashboard. It is designed for Saudi businesses that operate across multiple digital channels simultaneously: WhatsApp, Instagram, Snapchat, X, Google, Talabat, and more. Rather than scattering long, untracked URLs across all of these channels, LINKIT gives businesses one branded, intelligent digital hub that ties everything together.",
      },
      {
        type: "heading",
        text: "Short Links and Dynamic Barcodes",
      },
      {
        type: "text",
        text: "LINKIT enables businesses to create branded short links — under their own custom domain — that redirect to any destination with full click analytics. Dynamic QR codes and barcodes are updateable at any time without reprinting physical materials: a QR code printed on a restaurant menu today can redirect to a new seasonal menu, a limited promotion, or an ordering platform tomorrow — all without touching the printed material. For Saudi businesses that invest in printed branding and signage, this is a significant cost and efficiency advantage.",
      },
      {
        type: "heading",
        text: "Drag-and-Drop Page Builder — No Developer Required",
      },
      {
        type: "text",
        text: "LINKIT includes a drag-and-drop page builder that allows any team member — without technical skills — to create branded landing pages and link-in-bio style pages that present the business's full digital identity in one place. Social media profiles, WhatsApp contact links, product catalogues, reservation systems, promotional offers, and contact information can all be brought together on a single, beautiful, mobile-optimised page that represents the brand professionally.",
      },
      {
        type: "callout",
        text: "LINKIT is coming soon. Businesses that register interest early will receive priority access and early adopter benefits. Contact the CODE LTD team to register.",
      },
      {
        type: "heading",
        text: "Custom Domain and Brand Identity",
      },
      {
        type: "text",
        text: "Rather than sharing links under a generic third-party shortening domain, LINKIT allows businesses to deploy all short links under their own branded domain — reinforcing brand recognition with every link shared. Custom domains, branded QR code designs, and consistent visual identity across all LINKIT pages ensure that the business's digital presence feels professional and intentional, not assembled from disconnected free tools.",
      },
      {
        type: "heading",
        text: "LINKIT Key Capabilities",
      },
      {
        type: "list",
        items: [
          "Branded short link creation under a custom business domain",
          "Dynamic QR codes and barcodes — updateable any time without reprinting",
          "Drag-and-drop landing page and link-in-bio page builder",
          "Easy content and service sharing across WhatsApp, Instagram, Snapchat, and more",
          "Full click analytics: device type, geography, time, and referral source",
          "Custom domain and branded QR code design support",
          "Multi-user team access with link and campaign organisation tools",
          "Mobile-first design optimised for Saudi consumer browsing behaviour",
        ],
      },
    ],
  },

  {
    id: "product-spotlight-numora",
    img: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=700&q=80",
    cat: "Product Spotlight",
    title: "Numora: The Integrated Accounting and Financial Management Platform Built for Saudi SMEs",
    read: "7 min read",
    date: "Apr 15, 2025",
    author: "CODE LTD Product Team",
    excerpt:
      "Numora is CODE LTD's upcoming SME accounting platform — combining chart of accounts management, inventory, purchasing, document control, CRM, and ZATCA-compliant financial reporting in one connected system designed for the Saudi market.",
    content: [
      {
        type: "intro",
        text: "Numora is CODE LTD's integrated accounting and financial management platform — built specifically for Saudi small and medium-sized enterprises that need real financial control without the complexity, cost, or implementation timelines of traditional enterprise accounting systems. From journal entries and general ledger management to inventory tracking, purchasing workflows, document management, and ZATCA-compliant VAT reporting, Numora brings every dimension of SME financial management into a single, connected platform.",
      },
      {
        type: "heading",
        text: "What is Numora?",
      },
      {
        type: "text",
        text: "Numora is an integrated platform for managing accounting and financial operations for small and medium-sized enterprises — covering journal entries, inventory management, and purchasing management with detailed reporting capabilities. It is built for the Saudi market: Arabic and English language support throughout, 15% VAT calculation and reporting aligned with ZATCA requirements, GOSI-aware payroll cost tracking, and native integration with EZ Integrated for real-time ZATCA invoice status in accounts receivable.",
      },
      {
        type: "heading",
        text: "Complete Chart of Accounts Management",
      },
      {
        type: "text",
        text: "Numora provides full chart of accounts management with support for both Arabic and English account naming. The platform handles journal entries, general ledger, trial balance, profit and loss statements, balance sheets, and cash flow statements — giving business owners, accountants, and CFOs a complete and always-current picture of financial health. Period-end closing, comparative reporting across financial periods, and custom report generation are all built into the platform without requiring add-ons or consultant configuration.",
      },
      {
        type: "heading",
        text: "Document Management System (DMS)",
      },
      {
        type: "text",
        text: "Numora's integrated Document Management System attaches supporting documents directly to every accounting record — purchase orders, supplier invoices, payment confirmations, contracts, and correspondence are stored centrally and linked to their corresponding transactions permanently. When a ZATCA audit, lender review, or payment dispute requires documentation, everything is accessible in seconds from the relevant transaction record. The DMS eliminates the document disorganisation that creates risk and delays for Saudi SMEs at critical moments.",
      },
      {
        type: "heading",
        text: "Customer Relations Management (CRM)",
      },
      {
        type: "text",
        text: "Numora's integrated CRM module gives businesses a financial relationship view of every customer and supplier — transaction history, outstanding balances, payment behaviour, associated contracts, and correspondence all in one place. For Saudi businesses managing relationships with government entities, large enterprises, or repeat clients, this unified view supports smarter collections management, better credit decisions, and stronger business relationships built on accurate financial data.",
      },
      {
        type: "callout",
        text: "Numora is coming soon. Existing CODE LTD clients will receive priority access. Register your interest with the CODE LTD team to be notified at launch.",
      },
      {
        type: "heading",
        text: "Monitoring Financial Performance in Real Time",
      },
      {
        type: "text",
        text: "Numora is built around the principle that financial data should be current, not historical. Because CODEIT sales data flows into Numora automatically and EZ Integrated invoice clearance status feeds directly into accounts receivable, Numora's financial dashboards reflect the business's actual position continuously — not a reconciled snapshot prepared at month end. Business owners and finance teams can monitor gross margin by product category, track days sales outstanding, review VAT liability versus collection, and assess cash positions in real time.",
      },
      {
        type: "heading",
        text: "Numora Key Capabilities",
      },
      {
        type: "list",
        items: [
          "Full chart of accounts management in Arabic and English",
          "Journal entries, general ledger, trial balance, and financial statements",
          "Accounts payable and receivable with aging and DSO reporting",
          "Inventory and purchasing management with purchase orders and GRNs",
          "Integrated Document Management System (DMS) with transaction-level attachment",
          "Integrated CRM for customer and supplier financial relationship management",
          "VAT calculation and ZATCA-compliant reporting via EZ Integrated",
          "Real-time financial performance dashboards and custom report generation",
        ],
      },
    ],
  },

  {
    id: "product-spotlight-theheen",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&q=80",
    cat: "Product Spotlight",
    title: "Theheen: The Saudi-Built Artificial Intelligence Engine Designed to Automate and Elevate Enterprise Operations",
    read: "7 min read",
    date: "Apr 15, 2025",
    author: "CODE LTD AI Team",
    excerpt:
      "Theheen is CODE LTD's advanced AI engine — developed in the Kingdom of Saudi Arabia to automate corporate processes, analyse business data, and improve workflow efficiency using cutting-edge machine learning technologies.",
    content: [
      {
        type: "intro",
        text: "Theheen is CODE LTD's advanced artificial intelligence engine — developed in the Kingdom of Saudi Arabia to help organisations automate their processes, extract intelligence from their data, and improve the efficiency of their operations at scale. Built on advanced machine learning technologies and designed as a multi-tenant, cloud-native ML platform, Theheen represents CODE LTD's commitment to making enterprise-grade AI accessible to Saudi organisations across every sector.",
      },
      {
        type: "heading",
        text: "What is Theheen?",
      },
      {
        type: "text",
        text: "Theheen is an advanced AI engine designed to automate corporate processes, analyse data, and improve workflow efficiency. It is not a single-purpose tool or a chatbot — it is a comprehensive machine learning platform that can be deployed across multiple use cases within the same organisation simultaneously: document automation, process classification, workflow routing, predictive analytics, anomaly detection, and natural language understanding. Theheen is the intelligence layer that sits across the CODE LTD product stack — and across any enterprise system it is integrated with.",
      },
      {
        type: "heading",
        text: "Developed in the Kingdom of Saudi Arabia",
      },
      {
        type: "text",
        text: "Theheen's development in Saudi Arabia is not merely a point of origin — it is a defining characteristic of the platform's capabilities. Arabic natural language processing is a core, primary capability rather than a localisation add-on. Saudi regulatory context — ZATCA compliance patterns, PDPL data governance requirements, NDMO AI governance alignment — is built into the platform's design. Saudi business processes, terminology, and operational patterns are reflected in Theheen's model training and interface design. This depth of Saudi-specificity is not achievable by adapting an international AI platform.",
      },
      {
        type: "heading",
        text: "Advanced Machine Learning for Process Automation",
      },
      {
        type: "text",
        text: "Theheen's automation capabilities target the cognitive work that consumes significant staff time in Saudi enterprises: document classification and data extraction, invoice and contract processing, compliance checklist validation, report generation, and exception identification and routing. By deploying machine learning models trained on domain-specific Saudi business data, Theheen achieves the accuracy levels that make automation genuinely reliable for business-critical workflows — not just low-stakes administrative tasks.",
      },
      {
        type: "heading",
        text: "Seamless Integration With Leading Enterprise Systems",
      },
      {
        type: "text",
        text: "Theheen integrates seamlessly with leading enterprise systems — SAP, Oracle, Microsoft Dynamics, CODEIT, and custom-built platforms — through standard API interfaces. Rather than requiring organisations to replace existing systems to access AI capabilities, Theheen sits alongside them: consuming data through integrations, applying machine learning models, and returning enriched outputs and automation results back to the source systems. This API-first approach means Theheen can begin delivering value within weeks of deployment.",
      },
      {
        type: "callout",
        text: "Theheen is coming soon. Saudi enterprises and organisations interested in AI-powered process automation can register for early access and pilot programme consideration with the CODE LTD team.",
      },
      {
        type: "heading",
        text: "Multi-Tenant, Cloud-Native ML Platform",
      },
      {
        type: "text",
        text: "Theheen's architecture is built for enterprise scalability and data governance. As a multi-tenant, cloud-native ML platform, it can serve multiple business units, subsidiaries, or client organisations simultaneously with complete data isolation between tenants. All data is processed and stored within Saudi Arabia in alignment with PDPL localisation requirements and the NCA cybersecurity framework. The platform scales to accommodate increased data volumes, additional use cases, and new organisational deployments without infrastructure changes.",
      },
      {
        type: "heading",
        text: "Theheen Key Capabilities",
      },
      {
        type: "list",
        items: [
          "Advanced machine learning for enterprise process automation and classification",
          "Arabic-first natural language processing — built for Saudi linguistic context",
          "Data analysis, pattern recognition, and anomaly detection across operational datasets",
          "Workflow intelligence with exception identification and intelligent routing",
          "Multi-tenant, cloud-native ML platform with complete data isolation",
          "Seamless API integration with SAP, Oracle, Microsoft Dynamics, CODEIT, and more",
          "Custom model training on organisation-specific Saudi business data",
          "NDMO AI governance alignment and PDPL-compliant Saudi data hosting",
        ],
      },
    ],
  },
];