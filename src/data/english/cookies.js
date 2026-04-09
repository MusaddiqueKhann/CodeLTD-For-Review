export const COOKIE_META = {
  companyName: "CODE LTD",
  lastUpdated: "April 2025",
  effectiveDate: "April 15, 2025",
  contactEmail: "privacy@codeltd.com.sa",
  dpoEmail: "privacy@codeltd.com.sa",
  website: "https://codeltd.com.sa",
  jurisdiction: "Kingdom of Saudi Arabia",
  regulatoryFramework: "Saudi Personal Data Protection Law (PDPL) — enforced by SDAIA",
};


export const COOKIE_SECTIONS = [
  {
    id: "what-are-cookies",
    title: "What Are Cookies?",
    body: `Cookies are small text files placed on your device when you visit any CODE LTD platform — including codeit.sa, ezintegrated.com, and our web-based products such as TicketPro, SAVOXX, LINKIT, Numora, and Theheen. They help our platforms remember your preferences, keep you securely signed in, and allow us to understand how our services are being used so we can improve them. Cookies do not contain executable code and cannot carry viruses or access any other data on your device.`,
  },
  {
    id: "how-we-use-cookies",
    title: "How CODE LTD Uses Cookies",
    body: `We use cookies across our product suite for the following purposes:

• CODEIT: To maintain authenticated POS sessions, remember branch and terminal preferences, and support offline-mode session continuity.
• EZ Integrated: To manage API developer portal sessions, remember sandbox vs. production environment selections, and track compliance dashboard preferences.
• TicketPro: To keep support agents signed in, remember department and queue filter preferences, and maintain ticket view layouts.
• SAVOXX: To maintain agent and supervisor sessions, remember dashboard configurations, and support live call monitoring state.
• LINKIT: To keep users signed into the link management dashboard, remember campaign filter preferences, and support the drag-and-drop page builder state.
• Numora: To maintain accountant and business owner sessions, remember reporting period preferences, and support multi-entity context switching.
• Theheen: To manage enterprise user sessions, remember workflow configuration states, and support multi-tenant environment selection.

Across all products, we also use analytics cookies (with your consent) to understand usage patterns and improve our platforms, and marketing cookies (with your explicit consent) to measure the effectiveness of our campaigns.`,
  },
  {
    id: "third-party-cookies",
    title: "Third-Party Cookies",
    body: `Some cookies on CODE LTD platforms are set by third-party services we use for analytics and marketing measurement, including Google Analytics and LinkedIn Insight Tag. These third parties operate under their own privacy policies and cookie practices, which we recommend reviewing directly. CODE LTD does not sell data collected through third-party cookies to any party. All third-party analytics data processed on our platforms is anonymised before storage and is subject to Saudi PDPL data localisation requirements where applicable.`,
  },
  {
    id: "data-localisation",
    title: "Data Storage and Saudi PDPL Compliance",
    body: `CODE LTD stores all client and user data — including data collected through cookies — exclusively within the Kingdom of Saudi Arabia on Saudi-certified cloud infrastructure. This fully satisfies the data localisation requirement of Saudi Arabia's Personal Data Protection Law (PDPL), enforced by the Saudi Data and Artificial Intelligence Authority (SDAIA). We obtain explicit consent before placing any non-essential cookies for users in Saudi Arabia. You may withdraw your consent at any time by updating your cookie preferences or contacting our Data Protection Officer at privacy@codeltd.com.sa.`,
  },
  {
    id: "managing-preferences",
    title: "Managing Your Cookie Preferences",
    body: `You can control non-essential cookies at any time using the Cookie Preference Centre accessible via the consent banner when you first visit any CODE LTD platform. You may also manage cookies through your browser settings — most browsers allow you to view, block, or delete cookies for specific websites. Please note that disabling strictly necessary cookies will prevent our platforms from functioning correctly. Disabling functional cookies may affect your personalisation settings across CODEIT, TicketPro, SAVOXX, LINKIT, Numora, and Theheen.`,
  },
];


export const COOKIE_TYPES = [
  {
    id: "strictly-necessary",
    name: "Strictly Necessary Cookies",
    required: true,
    icon: "🔒",
    description:
      "These cookies are essential for all CODE LTD platforms to function correctly. They enable core capabilities including secure authentication, session management, and access to protected areas of CODEIT, EZ Integrated, TicketPro, SAVOXX, LINKIT, Numora, and Theheen. Without these cookies, our services cannot be delivered. They cannot be disabled.",
    appliesTo: ["CODEIT", "EZ Integrated", "TicketPro", "SAVOXX", "LINKIT", "Numora", "Theheen"],
    examples: [
      {
        name: "clt_session",
        purpose: "Maintains your authenticated session securely across all CODE LTD platforms",
        duration: "Session",
        product: "All products",
      },
      {
        name: "csrf_token",
        purpose: "Protects against cross-site request forgery attacks on all platform forms",
        duration: "Session",
        product: "All products",
      },
      {
        name: "auth_token",
        purpose: "Authenticates your access to the CODE LTD platform you are signed into",
        duration: "30 days",
        product: "All products",
      },
      {
        name: "codeit_terminal",
        purpose: "Remembers the registered POS terminal identity for CODEIT branch sessions",
        duration: "Persistent",
        product: "CODEIT",
      },
      {
        name: "ez_env",
        purpose: "Remembers whether the EZ Integrated developer is working in sandbox or production",
        duration: "30 days",
        product: "EZ Integrated",
      },
      {
        name: "ticketpro_dept",
        purpose: "Maintains your active department context within TicketPro across page loads",
        duration: "Session",
        product: "TicketPro",
      },
      {
        name: "numora_entity",
        purpose: "Maintains the active business entity context in Numora for multi-entity users",
        duration: "Session",
        product: "Numora",
      },
      {
        name: "theheen_tenant",
        purpose: "Maintains the active tenant context in Theheen for multi-tenant deployments",
        duration: "Session",
        product: "Theheen",
      },
    ],
  },
  {
    id: "performance-analytics",
    name: "Performance & Analytics Cookies",
    required: false,
    icon: "📊",
    description:
      "These cookies help CODE LTD understand how users interact with our platforms by collecting anonymised usage data. This information allows us to improve the user experience across CODEIT, EZ Integrated, TicketPro, SAVOXX, LINKIT, Numora, and Theheen — identifying friction points, prioritising new features, and monitoring platform performance. All data collected is anonymised and never linked back to individual users.",
    appliesTo: ["CODEIT", "EZ Integrated", "TicketPro", "SAVOXX", "LINKIT", "Numora", "Theheen"],
    examples: [
      {
        name: "_ga",
        purpose: "Google Analytics — tracks anonymised page views and user journeys across CODE LTD web properties",
        duration: "2 years",
        product: "All web properties",
      },
      {
        name: "_gid",
        purpose: "Google Analytics — distinguishes unique users within a 24-hour period",
        duration: "24 hours",
        product: "All web properties",
      },
      {
        name: "_gat",
        purpose: "Google Analytics — throttles request rate to prevent server overload",
        duration: "1 minute",
        product: "All web properties",
      },
      {
        name: "clt_analytics",
        purpose: "CODE LTD internal analytics — tracks feature usage patterns within platform dashboards",
        duration: "1 year",
        product: "All products",
      },
      {
        name: "savoxx_perf",
        purpose: "Tracks anonymised call dashboard load times and interaction patterns in SAVOXX",
        duration: "6 months",
        product: "SAVOXX",
      },
      {
        name: "linkit_clicks",
        purpose: "Records anonymised link click and page builder interaction patterns in LINKIT",
        duration: "6 months",
        product: "LINKIT",
      },
    ],
  },
  {
    id: "functional",
    name: "Functional Cookies",
    required: false,
    icon: "⚙️",
    description:
      "Functional cookies remember your preferences and personalisation choices to provide an enhanced and consistent experience across CODE LTD products. They remember settings such as language preference (Arabic or English), Hijri or Gregorian calendar mode, dashboard layout configurations, recently viewed records, and active filter states — so you do not need to reconfigure your workspace every time you sign in.",
    appliesTo: ["CODEIT", "TicketPro", "SAVOXX", "LINKIT", "Numora", "Theheen"],
    examples: [
      {
        name: "lang_pref",
        purpose: "Remembers your language preference (Arabic or English) across all CODE LTD platforms",
        duration: "1 year",
        product: "All products",
      },
      {
        name: "calendar_mode",
        purpose: "Remembers your preference for Hijri or Gregorian calendar display in CODEIT and Numora",
        duration: "1 year",
        product: "CODEIT, Numora",
      },
      {
        name: "dashboard_layout",
        purpose: "Saves your dashboard panel and widget layout in CODEIT, SAVOXX, and Numora",
        duration: "6 months",
        product: "CODEIT, SAVOXX, Numora",
      },
      {
        name: "ticketpro_filters",
        purpose: "Remembers your active queue filter and column settings in TicketPro",
        duration: "3 months",
        product: "TicketPro",
      },
      {
        name: "linkit_builder",
        purpose: "Saves in-progress drag-and-drop page builder state in LINKIT",
        duration: "7 days",
        product: "LINKIT",
      },
      {
        name: "numora_period",
        purpose: "Remembers your preferred reporting period selection in Numora financial dashboards",
        duration: "3 months",
        product: "Numora",
      },
      {
        name: "theheen_workflow",
        purpose: "Saves your active workflow configuration view and panel state in Theheen",
        duration: "3 months",
        product: "Theheen",
      },
      {
        name: "recently_viewed",
        purpose: "Tracks recently viewed records and pages for quick navigation within each platform",
        duration: "7 days",
        product: "All products",
      },
    ],
  },
  {
    id: "marketing",
    name: "Marketing & Targeting Cookies",
    required: false,
    icon: "📣",
    description:
      "Marketing cookies are used to measure the effectiveness of CODE LTD's digital advertising campaigns — including campaigns promoting CODEIT, EZ Integrated, TicketPro, SAVOXX, LINKIT, Numora, and Theheen. They track whether a visitor to our website arrived from a paid advertisement, and whether they subsequently took an action such as requesting a demo or signing up. These cookies are set only with your explicit consent and can be disabled at any time without affecting platform functionality.",
    appliesTo: ["codeltd.com.sa", "codeit.sa", "ezintegrated.com"],
    examples: [
      {
        name: "_fbp",
        purpose: "Facebook Pixel — measures conversions from Facebook and Instagram campaigns promoting CODE LTD products",
        duration: "3 months",
        product: "codeltd.com.sa",
      },
      {
        name: "li_fat_id",
        purpose: "LinkedIn Insight Tag — measures B2B campaign effectiveness for CODE LTD product promotions",
        duration: "30 days",
        product: "codeltd.com.sa",
      },
      {
        name: "_gcl_au",
        purpose: "Google Ads conversion tracking — measures sign-ups and demo requests from Google search campaigns",
        duration: "90 days",
        product: "codeltd.com.sa, codeit.sa, ezintegrated.com",
      },
      {
        name: "snap_p",
        purpose: "Snapchat Pixel — measures conversions from Snapchat campaigns targeting Saudi audiences",
        duration: "90 days",
        product: "codeltd.com.sa",
      },
      {
        name: "_twq",
        purpose: "X (Twitter) Ads — measures conversions from promoted posts about CODE LTD products",
        duration: "30 days",
        product: "codeltd.com.sa",
      },
    ],
  },
];


export const PRODUCT_COOKIE_NOTES = [
  {
    product: "CODEIT",
    website: "https://codeit.sa",
    note: "CODEIT uses strictly necessary cookies to maintain POS terminal identity and branch session state. Functional cookies remember your language, calendar mode (Hijri/Gregorian), and dashboard layout. Analytics cookies (with consent) help us improve the CODEIT interface and identify usability improvements for cashiers and managers.",
  },
  {
    product: "EZ Integrated",
    website: "https://ezintegrated.com",
    note: "EZ Integrated uses strictly necessary cookies to maintain developer portal authentication and to remember your active environment (sandbox or production). Analytics cookies help us understand how developers interact with the API documentation and compliance dashboard so we can improve the integration experience.",
  },
  {
    product: "TicketPro",
    website: "https://codeltd.com.sa/products/ticketpro",
    note: "TicketPro uses strictly necessary cookies for agent and supervisor session management and to maintain your active department context. Functional cookies remember your queue filter settings, column visibility preferences, and ticket view layout so your workspace is consistent across sessions.",
  },
  {
    product: "SAVOXX",
    website: "https://codeltd.com.sa/products/savoxx",
    note: "SAVOXX uses strictly necessary cookies to maintain agent and supervisor sessions and live call monitoring state. Functional cookies remember your dashboard panel configuration. Performance cookies (with consent) track anonymised load time and interaction data to help us improve call centre dashboard responsiveness.",
  },
  {
    product: "LINKIT",
    website: "https://codeltd.com.sa/products/linkit",
    note: "LINKIT uses strictly necessary cookies for platform authentication. Functional cookies preserve your in-progress drag-and-drop page builder state and active campaign filter preferences. Analytics cookies (with consent) track anonymised link click patterns to help us improve the platform interface. Coming soon.",
  },
  {
    product: "Numora",
    website: "https://codeltd.com.sa/products/numora",
    note: "Numora uses strictly necessary cookies for accountant and business owner session management and to maintain active entity context for multi-entity businesses. Functional cookies remember your preferred reporting period, Hijri/Gregorian calendar mode, and financial dashboard layout. Coming soon.",
  },
  {
    product: "Theheen",
    website: "https://codeltd.com.sa/products/theheen",
    note: "Theheen uses strictly necessary cookies for enterprise user authentication and to maintain the active tenant context for multi-tenant deployments. Functional cookies save your workflow configuration view and panel state between sessions. Theheen processes all session data exclusively within Saudi Arabia in compliance with PDPL. Coming soon.",
  },
];