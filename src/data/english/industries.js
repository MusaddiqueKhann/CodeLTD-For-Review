import { createElement as h } from "react";

const icon = (paths) =>
  h(
    "svg",
    { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" },
    ...paths
  );

export const INDUSTRIES = [
  {
    name: "Retail & Supermarkets",
    tag: "Retail",
    desc: "Multi-branch retail, loyalty programs, and ZATCA-compliant POS and invoicing flows.",
    icon: () => icon([
      h("path", { key: 1, d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }),
      h("line", { key: 2, x1: "3", y1: "6", x2: "21", y2: "6" }),
      h("path", { key: 3, d: "M16 10a4 4 0 0 1-8 0" }),
    ]),
  },
  {
    name: "Food & Restaurants",
    tag: "F&B",
    desc: "Table management, kitchen displays, delivery integration, and order analytics.",
    icon: () => icon([
      h("path", { key: 1, d: "M18 8h1a4 4 0 0 1 0 8h-1" }),
      h("path", { key: 2, d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" }),
      h("line", { key: 3, x1: "6", y1: "1", x2: "6", y2: "4" }),
      h("line", { key: 4, x1: "10", y1: "1", x2: "10", y2: "4" }),
      h("line", { key: 5, x1: "14", y1: "1", x2: "14", y2: "4" }),
    ]),
  },
  {
    name: "Fuel Stations",
    tag: "Fuel",
    desc: "Forecourt automation, tank monitoring, fleet accounts, and e-invoicing compliance.",
    icon: () => icon([
      h("path", { key: 1, d: "M3 22V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" }),
      h("path", { key: 2, d: "M3 11h12" }),
      h("path", { key: 3, d: "M17 6h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1" }),
      h("line", { key: 4, x1: "1", y1: "22", x2: "23", y2: "22" }),
      h("line", { key: 5, x1: "7", y1: "6", x2: "11", y2: "6" }),
    ]),
  },
  {
    name: "Healthcare & Clinics",
    tag: "Healthcare",
    desc: "Patient billing, CCHI compliance, appointment systems, and insurance integration.",
    icon: () => icon([
      h("path", { key: 1, d: "M22 12h-4l-3 9L9 3l-3 9H2" }),
    ]),
  },
  {
    name: "Construction & Contracting",
    tag: "Construction",
    desc: "Project costing, subcontractor management, and progress billing automation.",
    icon: () => icon([
      h("rect", { key: 1, x: "2", y: "3", width: "20", height: "14", rx: "2" }),
      h("line", { key: 2, x1: "8", y1: "21", x2: "16", y2: "21" }),
      h("line", { key: 3, x1: "12", y1: "17", x2: "12", y2: "21" }),
      h("path", { key: 4, d: "M7 8h2v5H7zM11 6h2v7h-2zM15 9h2v4h-2z" }),
    ]),
  },
  {
    name: "Automotive & Spare Parts",
    tag: "Automotive",
    desc: "VIN tracking, service scheduling, parts inventory, and workshop POS management.",
    icon: () => icon([
      h("circle", { key: 1, cx: "12", cy: "12", r: "10" }),
      h("circle", { key: 2, cx: "12", cy: "12", r: "3" }),
      h("line", { key: 3, x1: "12", y1: "2", x2: "12", y2: "5" }),
      h("line", { key: 4, x1: "12", y1: "19", x2: "12", y2: "22" }),
      h("line", { key: 5, x1: "2", y1: "12", x2: "5", y2: "12" }),
      h("line", { key: 6, x1: "19", y1: "12", x2: "22", y2: "12" }),
    ]),
  },
  {
    name: "Government & Public Sector",
    tag: "Government",
    desc: "e-Government integration, SADAD payment, Etimad connectivity, and ZATCA compliance.",
    icon: () => icon([
      h("line", { key: 1, x1: "3", y1: "22", x2: "21", y2: "22" }),
      h("line", { key: 2, x1: "6", y1: "18", x2: "6", y2: "11" }),
      h("line", { key: 3, x1: "10", y1: "18", x2: "10", y2: "11" }),
      h("line", { key: 4, x1: "14", y1: "18", x2: "14", y2: "11" }),
      h("line", { key: 5, x1: "18", y1: "18", x2: "18", y2: "11" }),
      h("polygon", { key: 6, points: "12 2 20 7 4 7" }),
    ]),
  },
  {
    name: "Distribution & Logistics",
    tag: "Logistics",
    desc: "Route optimization, driver apps, proof of delivery, and fleet management.",
    icon: () => icon([
      h("rect", { key: 1, x: "1", y: "3", width: "15", height: "13", rx: "1" }),
      h("path", { key: 2, d: "M16 8h4l3 5v4h-7V8z" }),
      h("circle", { key: 3, cx: "5.5", cy: "18.5", r: "2.5" }),
      h("circle", { key: 4, cx: "18.5", cy: "18.5", r: "2.5" }),
    ]),
  },
  {
    name: "Hospitality & Hotels",
    tag: "Hospitality",
    desc: "Property management, room billing, F&B integration, and guest experience tools.",
    icon: () => icon([
      h("path", { key: 1, d: "M3 22V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14" }),
      h("path", { key: 2, d: "M3 22h18" }),
      h("path", { key: 3, d: "M12 2v5" }),
      h("rect", { key: 4, x: "9", y: "12", width: "6", height: "10" }),
      h("rect", { key: 5, x: "5", y: "10", width: "3", height: "4" }),
      h("rect", { key: 6, x: "16", y: "10", width: "3", height: "4" }),
    ]),
  },
  {
    name: "Financial Services & Fintech",
    tag: "Finance",
    desc: "Accounting management, SME invoicing, VAT filing, and financial reporting dashboards.",
    icon: () => icon([
      h("line", { key: 1, x1: "12", y1: "1", x2: "12", y2: "23" }),
      h("path", { key: 2, d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }),
    ]),
  },
  {
    name: "Telecommunications",
    tag: "Telecom",
    desc: "Call center operations, AI call analysis, ticket routing, and customer account linking.",
    icon: () => icon([
      h("path", { key: 1, d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" }),
    ]),
  },
  {
    name: "Education & Institutions",
    tag: "Education",
    desc: "Fee collection, student billing, support ticketing, and administrative POS systems.",
    icon: () => icon([
      h("path", { key: 1, d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
      h("path", { key: 2, d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" }),
    ]),
  },
];

export const INDUSTRY_DETAILS = [
  {
    num: "01",
    tag: "Retail",
    name: "Retail & Supermarkets",
    bg: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&q=80",
    points: [
      "CODEIT Retail: Multi-branch inventory & sales tracking",
      "EZ Integrated: Full ZATCA Phase I & II e-invoicing compliance",
      "Numora: Integrated SME accounting & financial reporting",
      "LINKIT: Dynamic barcodes & custom branded short links",
      "SAVOXX: AI-powered call center management for customer orders",
      "TicketPro: Automated tracking for technical support requests",
    ],
  },
  {
    num: "02",
    tag: "F&B",
    name: "Food & Restaurants",
    bg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    points: [
      "CODEIT Restaurant: Specialized KDS & order management",
      "EZ Integrated: Secured APIs for regulatory tax compliance",
      "Theheen: AI-driven workflow automation & data analysis",
      "SAVOXX: Intelligent call recording for phone-in reservations",
      "LINKIT: Drag-and-drop digital menu & social link pages",
      "TicketPro: Centralized handling for customer feedback tickets",
    ],
  },
  {
    num: "03",
    tag: "Energy & Services",
    name: "Fuel & Operations",
    bg: "/Industries/Fuel.jpg",
    points: [
      "CODEIT Fuel: Dedicated fuel station management system",
      "Theheen: Cloud-native ML platform for operational efficiency",
      "EZ Integrated: Advanced integration with existing ERP systems",
      "TicketPro: Automatic escalation for field maintenance requests",
      "Numora: Chart of accounts & purchasing management",
      "SAVOXX: Professional call management for service dispatch",
    ],
  },
  {
    num: "04",
    tag: "Corporate",
    name: "Enterprise & Tech",
    bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    points: [
      "TicketPro: Permissions-based customer support infrastructure",
      "Theheen: KSA-developed ML for corporate process automation",
      "LINKIT: Custom domain branding for digital account linking",
      "SAVOXX: High-intelligence analysis for service quality improvement",
      "Numora: Detailed financial performance & DMS monitoring",
      "CODEIT Basic: Streamlined POS for internal corporate kiosks",
    ],
  },
  {
    num: "05",
    tag: "Logistics",
    name: "Logistics & Transport",
    bg: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    points: [
      "EZ Integrated: ZATCA-compliant e-invoicing for shipping & freight",
      "Theheen: AI-driven route optimization and supply chain analytics",
      "TicketPro: Tracking delivery disputes and vehicle maintenance logs",
      "SAVOXX: Professional dispatch communication and driver support",
      "Numora: Comprehensive inventory and purchase management for warehouses",
      "LINKIT: Dynamic barcodes for shipment tracking and digital waybills",
    ],
  },
  {
    num: "06",
    tag: "Hospitality",
    name: "Hotels & Tourism",
    bg: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    points: [
      "SAVOXX: Guest service management and room service call tracking",
      "TicketPro: Housekeeping and facility maintenance ticket system",
      "EZ Integrated: Automated tax compliance for room bookings and services",
      "LINKIT: Branded links for digital check-ins and tourism brochures",
      "CODEIT Restaurant: Integrated F&B management for hotel dining",
      "Numora: Detailed financial reporting for hospitality operations",
    ],
  }
];