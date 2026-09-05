import { Service } from "../types";

export const services: Service[] = [
  {
    id: "mobile-application-development",
    num: "01",
    name: "Mobile Application Development",
    tagline: "High-performance Android and cross-platform mobile products built for reliability and distribution.",
    summary: "Engineering native and multi-platform mobile applications with modern Android 16 target compliance, R8 optimization, smooth 60fps UI, and battery-conscious background execution.",
    detail: "We specialize in developing robust mobile software that adheres strictly to Google Play policy, modern Android architecture (Jetpack Compose, Kotlin Coroutines, Room, WorkManager), and rigorous release verification.",
    deliverables: [
      "Target SDK 16 ready Android application architecture",
      "R8 shrinking and ProGuard code optimization",
      "Offline-first local caching and synchronization",
      "Automated release pipeline and secure keystore signing",
      "Google Play Store compliance and listing preparation"
    ],
    process: [
      { step: "01", title: "Specification & Platform Strategy", desc: "Define device targets, target SDK requirements, offline boundaries, and hardware integrations." },
      { step: "02", title: "Architecture & UX Prototyping", desc: "Design intuitive mobile flows and establish unidirectional data flow (UDF) architecture." },
      { step: "03", title: "Engineering & Performance Tuning", desc: "Build native UI with Jetpack Compose, profile memory allocations, and optimize battery footprint." },
      { step: "04", title: "Verification & Play Store Launch", desc: "Execute automated device matrix tests, verify policy compliance, and publish securely." }
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Android SDK 16", "Room DB", "WorkManager", "Flutter", "Firebase"]
  },
  {
    id: "website-web-application-development",
    num: "02",
    name: "Website & Web Application Development",
    tagline: "Scalable, secure, and lightning-fast web applications built on modern frameworks.",
    summary: "Creating responsive web platforms, operational dashboards, and high-conversion company websites that load instantly and scale smoothly.",
    detail: "From multi-page corporate web architectures to real-time enterprise management systems, we combine semantic HTML5, TypeScript precision, server-side rendering, and CDN edge distribution.",
    deliverables: [
      "Fast, responsive web applications with sub-second page loads",
      "Multi-page corporate website architecture with clean routing",
      "Role-based access management and secure authentication",
      "SEO-optimized semantic code structure and JSON-LD metadata",
      "Full WCAG 2.2 AA accessibility compliance"
    ],
    process: [
      { step: "01", title: "Requirements & Information Architecture", desc: "Structure page hierarchies, URL routing schemes, and data models for optimal discovery." },
      { step: "02", title: "Interface & Responsive Design", desc: "Craft bespoke layouts with clear typographic hierarchy and responsive mobile viewports." },
      { step: "03", title: "Full-Stack Development", desc: "Implement clean TypeScript components, state management, and reliable REST/GraphQL APIs." },
      { step: "04", title: "Audit & Global Deployment", desc: "Run Core Web Vitals checks, accessibility audits, and deploy to worldwide edge CDN." }
    ],
    technologies: ["React", "TypeScript", "Vite", "Node.js", "TailwindCSS", "Express", "REST APIs"]
  },
  {
    id: "artificial-intelligence-integration",
    num: "03",
    name: "Artificial Intelligence Integration",
    tagline: "Pragmatic, responsible AI workflows and specialized agents tailored for business utility.",
    summary: "Integrating applied machine learning models, structured reasoning workflows, and intelligent assistants into existing digital products with human-in-the-loop oversight.",
    detail: "We focus on real utility rather than hype: text distillation, smart content drafting, automated document triage, and conversational search grounded strictly in verified business knowledge.",
    deliverables: [
      "Custom AI reasoning pipelines and retrieval-augmented generation (RAG)",
      "Strict data privacy guardrails ensuring customer data is never leaked or misused",
      "Human-in-the-loop review interfaces for auditability and error control",
      "Edge-optimized inference models for minimal latency and cost efficiency",
      "Comprehensive AI governance aligned with ISO/IEC 42001:2023 principles"
    ],
    process: [
      { step: "01", title: "Use-Case Evaluation & Risk Audit", desc: "Identify high-value business bottlenecks where AI delivers measurable accuracy and time savings." },
      { step: "02", title: "Prompt Engineering & Pipeline Design", desc: "Construct deterministic prompts, grounding layers, and fallback handlers." },
      { step: "03", title: "Integration & Safety Guardrails", desc: "Embed model calls into backend services with strict token limits and content filters." },
      { step: "04", title: "Continuous Monitoring & Refinement", desc: "Evaluate response quality, latency metrics, and user feedback loops." }
    ],
    technologies: ["Google Gemini API", "OpenAI API", "Python", "LangChain", "Vector Databases", "Embeddings"]
  },
  {
    id: "cloud-firebase-solutions",
    num: "04",
    name: "Cloud & Firebase Solutions",
    tagline: "Resilient serverless infrastructure, authentication, and managed cloud environments.",
    summary: "Architecting zero-maintenance cloud solutions leveraging Firebase App Hosting, Cloud Run, Firestore, and secure identity management.",
    detail: "We build cloud foundations that scale effortlessly from day one. Our solutions minimize infrastructure complexity, eliminate single points of failure, and provide real-time data sync with enterprise-grade uptime.",
    deliverables: [
      "Serverless architecture with automatic scaling and zero idle overhead",
      "Firestore database design with security rules and indexing optimization",
      "Firebase Authentication with OAuth (Google, Apple, Email/Password)",
      "Containerized microservices running on Google Cloud Run",
      "Infrastructure-as-Code and automated CI/CD deployment pipelines"
    ],
    process: [
      { step: "01", title: "Cloud Topology & Cost Modeling", desc: "Design multi-region cloud topologies optimized for performance, security, and low operational cost." },
      { step: "02", title: "Database & Security Rule Engineering", desc: "Structure relational and NoSQL schemas with rigorous validation rules." },
      { step: "03", title: "Backend Deployment & Integration", desc: "Deploy stateless containers, Cloud Functions, and API gateways." },
      { step: "04", title: "Monitoring & Disaster Recovery", desc: "Configure automated backups, uptime alerts, and Cloud Logging dashboards." }
    ],
    technologies: ["Firebase App Hosting", "Google Cloud Run", "Firestore", "Cloud Functions", "Firebase Auth", "Docker"]
  },
  {
    id: "digital-product-design",
    num: "05",
    name: "Digital Product Design & UI/UX",
    tagline: "Purposeful, human-first digital interfaces crafted with visual discipline and measurable usability.",
    summary: "Creating cohesive design systems, typographic hierarchies, responsive layouts, and intuitive interaction flows that elevate user confidence.",
    detail: "We reject superficial decoration and generic templates. Every color token, typographic scale, and spacing rhythm is calculated to guide user comprehension, improve task completion speed, and establish brand prestige.",
    deliverables: [
      "Complete multi-theme design system with accessible color tokens and typography scales",
      "Interactive high-fidelity prototypes validated through usability testing",
      "WCAG 2.2 AA accessibility verification across contrast, sizing, and focus states",
      "Production-ready component specifications and design tokens for engineering teams",
      "Brand identity extensions including marks, iconography, and visual hierarchy guidelines"
    ],
    process: [
      { step: "01", title: "User Research & Information Mapping", desc: "Map user mental models, task priorities, and critical conversion journeys." },
      { step: "02", title: "Wireframing & System Architecture", desc: "Establish layout grids, content densities, and visual hierarchy foundations." },
      { step: "03", title: "High-Fidelity Interface Craft", desc: "Apply bespoke typography, depth effects, refined accents, and responsive states." },
      { step: "04", title: "Design Token Handoff & QA", desc: "Export precise CSS variables and collaborate with engineers through pixel-perfect QA." }
    ],
    technologies: ["Figma", "Design Tokens", "Design Systems", "CSS Custom Properties", "WCAG 2.2 AA", "Prototyping"]
  },
  {
    id: "business-automation",
    num: "06",
    name: "Business Automation & Workflow Systems",
    tagline: "Streamlined operational workflows connecting disparate systems into unified business engines.",
    summary: "Eliminating repetitive administrative tasks through bespoke API integrations, scheduled background batch jobs, and automated alert systems.",
    detail: "We bridge communication gaps between CRM tools, payment processors, customer support channels, and internal databases, empowering organizations to operate with lean efficiency.",
    deliverables: [
      "Custom webhook listeners and automated event-driven pipelines",
      "Automated document generation, PDF synthesis, and email notifications",
      "Third-party API synchronization with automatic retry and error handling",
      "Audit logs, execution dashboards, and exception alerting",
      "Secure credential vaulting with zero secret leakage"
    ],
    process: [
      { step: "01", title: "Process Discovery & Bottleneck Analysis", desc: "Identify manual, error-prone touchpoints across your existing software stack." },
      { step: "02", title: "Data Flow & API Architecture", desc: "Design resilient webhook endpoints, idempotency keys, and transformation logic." },
      { step: "03", title: "Implementation & Staging Validation", desc: "Build automated worker jobs with comprehensive unit and integration test coverage." },
      { step: "04", title: "Production Deployment & Telemetry", desc: "Monitor job success rates, queue throughput, and automated error recovery." }
    ],
    technologies: ["Node.js", "Cloud Functions", "Webhooks", "Redis Queue", "REST APIs", "Stripe API", "Google Workspace"]
  },
  {
    id: "technology-consultancy",
    num: "07",
    name: "Technology Consultancy & Architecture Audit",
    tagline: "Strategic technical guidance, security reviews, and software architecture roadmap planning.",
    summary: "Providing independent technical leadership, architecture due diligence, and modernization roadmaps for growing digital businesses.",
    detail: "We evaluate existing software repositories, cloud infrastructures, and development practices to identify security vulnerabilities, technical debt, and scaling bottlenecks before they impact revenue.",
    deliverables: [
      "Comprehensive codebase and architecture audit report with prioritized recommendations",
      "Security posture review covering credential storage, API access, and data compliance",
      "Cloud infrastructure cost optimization and rightsizing plan",
      "Technology stack selection guidance tailored for long-term maintainability",
      "Target SDK and platform migration roadmaps (Android, React, Node.js)"
    ],
    process: [
      { step: "01", title: "Discovery & Repository Inspection", desc: "Conduct in-depth static analysis of codebases, configuration files, and cloud topologies." },
      { step: "02", title: "Risk & Performance Assessment", desc: "Benchmark build times, runtime latency, security vulnerabilities, and dependency health." },
      { step: "03", title: "Strategic Roadmap Formulation", desc: "Draft actionable refactoring steps with clear cost-benefit metrics and milestone schedules." },
      { step: "04", title: "Executive Briefing & Execution Support", desc: "Present findings to stakeholders and support technical teams during implementation." }
    ],
    technologies: ["Static Code Analysis", "Cloud Architecture", "ISO/IEC 25010", "Security Auditing", "CI/CD Benchmarking"]
  },
  {
    id: "product-maintenance-modernization",
    num: "08",
    name: "Product Maintenance & Modernization",
    tagline: "Proactive maintenance, dependency updates, and continuous platform compliance.",
    summary: "Keeping your mobile applications, SaaS systems, and websites secure, fast, and compliant with evolving OS requirements and web standards.",
    detail: "Software requires ongoing care to maintain peak performance and store standing. We handle OS SDK updates, Google Play policy updates, security patches, bug fixes, and performance optimizations.",
    deliverables: [
      "Annual target SDK upgrades for Android and iOS store compliance",
      "Security vulnerability patching across NPM, Gradle, and system libraries",
      "Core Web Vitals monitoring and performance regression fixing",
      "Database maintenance, index optimization, and backup verification",
      "Priority SLA bug resolution and uptime monitoring"
    ],
    process: [
      { step: "01", title: "System Baseline & Telemetry Setup", desc: "Establish uptime tracking, error logging with Sentry/Crashlytics, and performance monitors." },
      { step: "02", title: "Scheduled Maintenance Cycles", desc: "Execute regular dependency updates, security audits, and regression tests." },
      { step: "03", title: "OS & Store Policy Upgrades", desc: "Update target API levels and submit compliant releases before store deadlines." },
      { step: "04", title: "Quarterly Health Reporting", desc: "Deliver detailed reports on system uptime, performance benchmarks, and recommendations." }
    ],
    technologies: ["Crashlytics", "Google Play Console", "Git Automation", "Gradle", "NPM Audit", "Performance Profilers"]
  }
];
