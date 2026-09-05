import { BlogPost } from "../types";

export const blogPosts: BlogPost[] = [
  {
    slug: "engineering-for-android-16-target-sdk-compliance",
    title: "Engineering for Modern Android: Target SDK Compliance & Architecture Standards",
    category: "Mobile Engineering",
    publishedDate: "2026-08-18",
    readTime: "6 min read",
    author: {
      name: "ANM Digital Engineering Team",
      role: "Mobile Systems Architecture"
    },
    summary: "A practical guide to upgrading Android applications for upcoming platform API targets, R8 shrinking optimizations, and privacy-first background task scheduling.",
    content: [
      "Modern Android development demands disciplined adherence to evolving Google Play target SDK requirements and system privacy guardrails. Every annual API milestone introduces tighter restrictions on background processing, notification permissions, and exact alarm scheduling.",
      "At ANM Digital Labs, our mobile products — including Proud Muslim and PhotoBeautify — are architected using Jetpack WorkManager for battery-conscious background execution and Room database with Kotlin Coroutines for safe asynchronous data persistence.",
      "By enabling R8 full-mode optimization and rigorous ProGuard rule curation, we achieve up to 35% reduction in DEX file size while removing unused classes and methods. This directly improves app launch velocity and decreases memory footprints on entry-level Android hardware.",
      "Furthermore, adopting Jetpack Compose with unidirectional data flow (UDF) eliminates entire categories of UI synchronization bugs and layout thrashing, ensuring smooth 60fps rendering across diverse screen densities."
    ],
    keyTakeaways: [
      "Target SDK alignment is an ongoing engineering practice, not a last-minute release fix.",
      "R8 optimization combined with selective ProGuard rules reduces APK size and protects source code.",
      "WorkManager is essential for battery-friendly, deferred background tasks.",
      "Declarative UI architectures in Compose improve rendering performance and maintainability."
    ],
    tags: ["Android", "Kotlin", "Jetpack Compose", "R8", "Google Play"]
  },
  {
    slug: "zero-secret-exposure-in-modern-web-applications",
    title: "Zero-Secret Architecture: Securing Firebase & Cloud Run Deployments",
    category: "Security & Cloud",
    publishedDate: "2026-07-29",
    readTime: "5 min read",
    author: {
      name: "ANM Digital Infrastructure Team",
      role: "Cloud & Security Architecture"
    },
    summary: "How to structure modern single-page applications and cloud backends to ensure zero private keys, service account credentials, or environment secrets leak into browser bundles.",
    content: [
      "One of the most widespread vulnerabilities in modern web development is the accidental bundling of sensitive API keys, database connection strings, and private service account tokens into client-side JavaScript assets.",
      "In our production deployments on Firebase App Hosting and Google Cloud Run, we enforce strict separation between public configuration identifiers and private runtime secrets.",
      "Public identifiers (such as Firebase Project IDs or public analytics container IDs) are safe for client-side evaluation. However, all privileged operations — such as database administrative writes, LLM inference calls, or payment tokenization — must be routed exclusively through serverless backend endpoints.",
      "Our automated CI/CD pipeline incorporates static secret scanners that halt builds if any matching entropy pattern resembles a private token or credential."
    ],
    keyTakeaways: [
      "Never bundle service account keys or private API credentials in client-side Vite or Webpack builds.",
      "Use Cloud Secret Manager and serverless Cloud Run endpoints for all privileged API requests.",
      "Automate static secret scanning in pre-commit hooks and CI/CD pipelines.",
      "Apply strict Firestore security rules to enforce authorization at the database level."
    ],
    tags: ["Security", "Firebase", "Cloud Run", "DevOps", "TypeScript"]
  },
  {
    slug: "practical-ai-governance-beyond-the-hype",
    title: "Practical AI Governance: Building Deterministic Workflows with Human Oversight",
    category: "Artificial Intelligence",
    publishedDate: "2026-06-14",
    readTime: "7 min read",
    author: {
      name: "ANM Digital Labs",
      role: "Applied AI Systems"
    },
    summary: "Why sustainable commercial AI integration depends on structured reasoning pipelines, grounded knowledge bases, and clear human-in-the-loop validation.",
    content: [
      "While generative AI models have demonstrated impressive linguistic fluency, unstructured model outputs introduce unacceptable risks for corporate and consumer applications when hallucination or data leakage occurs.",
      "At ANM Digital Labs, our AI integration standard is informed by ISO/IEC 42001:2023 and the NIST AI Risk Management Framework. We treat language models as reasoning components within tightly constrained deterministic software systems.",
      "In applications like Mini Post App, every AI prompt is structured with explicit schema validation, strict token bounds, and domain-specific grounding data. If a model output fails structural validation, the system gracefully falls back to deterministic rule-based templates.",
      "Crucially, user privacy is preserved by stripping personal identifiers before model inference and ensuring customer data is never retained for public model training."
    ],
    keyTakeaways: [
      "AI models must operate inside structured, deterministic software guardrails.",
      "Human-in-the-loop review interfaces are essential for high-stakes business workflows.",
      "Strict data sanitization protects proprietary business data and customer privacy.",
      "Deterministic fallback mechanisms guarantee application reliability when model calls fail."
    ],
    tags: ["AI Governance", "Google Gemini", "System Architecture", "Privacy"]
  }
];
