import { DevStandard } from "../types";

export const standards: DevStandard[] = [
  {
    id: "quality-standard",
    num: "01",
    title: "Software Quality & Architecture Standard",
    reference: "Informed by ISO/IEC 25010:2023",
    summary: "Establishes measurable criteria for software reliability, performance efficiency, maintainability, modularity, and pre-release verification.",
    details: [
      "Strict separation of concerns across presentation, domain, and data layers",
      "Comprehensive TypeScript strict mode type checking with zero implicit any",
      "Automated unit test coverage on core business logic and data transformers",
      "Zero-downtime deployment pipelines with rapid rollback capabilities"
    ],
    businessValue: "Prevents technical debt accumulation and guarantees long-term software maintainability."
  },
  {
    id: "accessibility-standard",
    num: "02",
    title: "Accessibility & Inclusive Interaction Standard",
    reference: "Informed by WCAG 2.2 Level AA",
    summary: "Guarantees digital products are usable by individuals with varied physical, sensory, and cognitive capabilities through accessible contrast, semantic landmarks, and full keyboard navigation.",
    details: [
      "Minimum 4.5:1 contrast ratio for normal text and 3:1 for large text / UI elements",
      "Full keyboard navigability with visible, high-contrast focus rings",
      "Semantic HTML5 landmarks (header, nav, main, section, footer) and ARIA attributes",
      "Screen reader compatibility with clear alternative text for non-text content"
    ],
    businessValue: "Expands audience reach, fulfills legal compliance, and ensures dignified access for all users."
  },
  {
    id: "visual-hierarchy-standard",
    num: "03",
    title: "Visual Hierarchy & Depth Standard",
    reference: "ANM Digital Internal Engineering Standard",
    summary: "Controls the visual sequence and cognitive weighting through which users absorb information on each screen, utilizing restrained depth, elevation, and focal points.",
    details: [
      "Strict two-layer elevation model preventing visual clutter or excessive floating surfaces",
      "Single primary visual focal point per viewport to minimize cognitive fatigue",
      "Intentional z-index layer discipline separating backgrounds, surfaces, and interactive overlays",
      "Restrained 3D and depth elements applied only where they clarify system architecture"
    ],
    businessValue: "Improves interface comprehension speed and directs user focus to critical actions."
  },
  {
    id: "typography-standard",
    num: "04",
    title: "Typography & Readability Standard",
    reference: "ANM Digital Internal Engineering Standard",
    summary: "Defines a fluid, proportional typographic scale, maximum line lengths, and letter spacing across all desktop and mobile viewports.",
    details: [
      "Strict measure limits (45 to 75 characters per line) for optimal reading comfort",
      "Fluid type scaling using CSS clamp() for seamless responsiveness across screen widths",
      "Clear font pairing: Manrope for commanding headings and DM Sans for crisp body text",
      "High typographic contrast between headings, subheadings, and secondary metadata"
    ],
    businessValue: "Ensures effortless reading and eliminates reader fatigue across long-form content."
  },
  {
    id: "colour-standard",
    num: "05",
    title: "Colour System & Brand Palette Standard",
    reference: "ANM Digital Internal Engineering Standard",
    summary: "Governs the application of the ANM Digital palette: deep Royal Blue, rich Royal Maroon, refined Gold accents, Silver structure, and Ivory text surfaces.",
    details: [
      "Royal Blue and Deep Indigo as the grounding foundational surfaces",
      "Royal Maroon for decisive primary actions and energetic brand accents",
      "Refined Gold strictly as a controlled prestige accent (tags, active indicators, focus states)",
      "Ivory and Silver for crisp, readable text meeting high contrast thresholds"
    ],
    businessValue: "Reinforces brand recognition while protecting visual comfort and functional clarity."
  },
  {
    id: "spacing-standard",
    num: "06",
    title: "Spatial Rhythm & Layout Standard",
    reference: "ANM Digital Internal Engineering Standard",
    summary: "Uses a mathematically consistent 8px spatial grid for margins, padding, component rhythm, and intentional negative space.",
    details: [
      "Consistent 8pt spatial scale (8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px)",
      "Balanced section padding adapting gracefully between mobile (64px) and desktop (120px)",
      "Harmonious component card internal padding preventing crowded typography",
      "Zero arbitrary or hardcoded pixel alignments in responsive layouts"
    ],
    businessValue: "Creates a cohesive, polished cadence that feels natural and professionally engineered."
  },
  {
    id: "ui-component-standard",
    num: "07",
    title: "UI Component & State Consistency Standard",
    reference: "ANM Digital Internal Engineering Standard",
    summary: "Defines predictable interactive states (default, hover, active, focus, disabled, loading) across all buttons, inputs, links, and cards.",
    details: [
      "Explicit visual feedback for all interactive elements with sub-150ms transitions",
      "Clear loading spinners and skeleton screens for asynchronous operations",
      "Accessible form inputs with persistent labels, error states, and helper text",
      "Zero decorative-only non-functional buttons or pseudo-links"
    ],
    businessValue: "Eliminates user uncertainty and prevents accidental inputs or frustration."
  },
  {
    id: "ai-governance-standard",
    num: "08",
    title: "Responsible AI Governance Standard",
    reference: "Informed by ISO/IEC 42001:2023 and NIST AI RMF 1.0",
    summary: "Enforces ethical guidelines, human-in-the-loop oversight, prompt safety, and output verification across all AI-assisted features.",
    details: [
      "Mandatory human review capabilities for automated content generation and classification",
      "Strict data sanitization preventing proprietary customer data from training public models",
      "Deterministic fallback handlers when model confidence scores fall below thresholds",
      "Transparent disclosure when AI systems assist in generating or summarizing information"
    ],
    businessValue: "Protects brand integrity, complies with emerging AI regulations, and guarantees output safety."
  },
  {
    id: "security-privacy-standard",
    num: "09",
    title: "Security & Privacy-by-Design Standard",
    reference: "Informed by OWASP Top 10 & ISO/IEC 27001",
    summary: "Applies data minimization, zero secret exposure, client-side encryption, and strict Content Security Policies across all digital products.",
    details: [
      "Zero API keys, Firebase secrets, or service account credentials in client bundles",
      "Client-side cryptographic hashing for sensitive metadata before cloud persistence",
      "Strict HTTPS/TLS 1.3 enforcement with HSTS headers and sanitized cookies",
      "Granular user data export and deletion workflows honoring GDPR / UK DPA 2018"
    ],
    businessValue: "Shields customer data from breaches and ensures regulatory audit readiness."
  },
  {
    id: "seo-performance-standard",
    num: "10",
    title: "SEO & Web Performance Standard",
    reference: "Web Platform & Core Web Vitals Standards",
    summary: "Ensures sub-second page loads, zero cumulative layout shift (CLS), semantic metadata, XML sitemaps, and robots.txt configuration.",
    details: [
      "Largest Contentful Paint (LCP) under 1.8s and Cumulative Layout Shift (CLS) under 0.05",
      "Dynamic document titles, meta descriptions, canonical URLs, and Open Graph tags",
      "Comprehensive XML sitemap and verified robots.txt routing directives",
      "Lazy-loading for below-the-fold media with explicit image dimensions"
    ],
    businessValue: "Maximizes search discoverability, lowers bounce rates, and delivers instant browsing."
  },
  {
    id: "template-sizing-standard",
    num: "11",
    title: "Responsive Sizing & Breakpoint Standard",
    reference: "ANM Digital Internal Engineering Standard",
    summary: "Ensures flawless responsiveness across five distinct screen tiers without horizontal clipping, overflowing text, or hidden controls.",
    details: [
      "Mobile portrait (320px – 480px), Mobile landscape / small tablet (481px – 768px)",
      "Tablet landscape / small laptop (769px – 1024px), Standard desktop (1025px – 1440px)",
      "Ultra-wide display container capping at 1440px max-width to preserve readability",
      "Zero horizontal overflow across all screen sizes and orientations"
    ],
    businessValue: "Guarantees a flawless user experience across all smartphone, tablet, and desktop devices."
  },
  {
    id: "publishing-standard",
    num: "12",
    title: "Publishing & Release Verification Standard",
    reference: "Google Play Policy & Platform Release Guidelines",
    summary: "Mandates rigorous pre-release verification including Android 16 target compliance, R8 optimization, keystore signing, app-ads.txt validation, and link auditing.",
    details: [
      "Android applications verified against current Google Play target API requirements",
      "R8 code shrinking and resource optimization enabled for all production APKs/AABs",
      "Google Play app-ads.txt publisher validation hosted directly on root domain",
      "Pre-flight automated link crawling ensuring zero 404 errors across public pages"
    ],
    businessValue: "Eliminates launch delays, protects store account standing, and guarantees release stability."
  }
];
