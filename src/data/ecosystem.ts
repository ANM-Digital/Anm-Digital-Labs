import { EcosystemItem } from "../types";

export const ecosystemItems: EcosystemItem[] = [
  {
    id: "google-firebase",
    category: "Cloud & Infrastructure",
    name: "Google Cloud & Firebase Ecosystem",
    role: "Core Hosting, Data & Identity Foundation",
    description: "ANM Digital builds and hosts web and mobile backends on Google Cloud Platform and Firebase. We utilize Firebase App Hosting on Cloud Run for containerized web delivery, Cloud Firestore for low-latency document storage, and Firebase Authentication for secure multi-provider credential handling.",
    technologies: ["Firebase App Hosting", "Google Cloud Run", "Cloud Firestore", "Firebase Auth", "Cloud Logging", "Cloud Storage"],
    integrationDetails: "Configured via declarative apphosting.yaml and firebase.json descriptors with zero secret exposure in browser bundles.",
    complianceNote: "Integration represents technical platform usage and does not imply direct commercial endorsement or sponsorship by Google LLC."
  },
  {
    id: "android-play-store",
    category: "Mobile Platform",
    name: "Android & Google Play Ecosystem",
    role: "Mobile Distribution, Target SDK & Monetization",
    description: "Our mobile applications are engineered in strict compliance with the latest Android 16 target API guidelines, Jetpack architecture components, R8 code shrinking, and secure Play Console release signing. We manage app-ads.txt publisher records directly on anmdigital.online.",
    technologies: ["Android SDK (Target API Modern)", "Jetpack Compose", "R8 / ProGuard", "Google Play Console", "app-ads.txt Direct Verification"],
    integrationDetails: "Verified publisher record configured via public/app-ads.txt (google.com, pub-3389235720496369, DIRECT, f08c47fec0942fa0).",
    complianceNote: "Adheres to Google Play Developer Distribution Agreement and Play Policy Center requirements."
  },
  {
    id: "github-devops",
    category: "Engineering & Version Control",
    name: "GitHub & DevOps Workflow",
    role: "Source Control, Code Review & Automation",
    description: "All ANM Digital software follows disciplined Git branching models, automated linting, TypeScript type-checking, and reproducible build pipelines. Open-source tools and public specifications are published under the verified ANM-Digital organization.",
    technologies: ["Git Version Control", "GitHub Actions CI/CD", "TypeScript Strict Compiler", "Vite Build Pipelines", "Automated Testing"],
    integrationDetails: "Verified public organization at https://github.com/ANM-Digital.",
    complianceNote: "Used as our authoritative version control and automated release orchestration environment."
  },
  {
    id: "applied-ai",
    category: "Artificial Intelligence",
    name: "Applied AI & Inference Pipelines",
    role: "Intelligent Workflows, Content Assistance & Search",
    description: "We deploy specialized AI workflows using Google Gemini and cutting-edge language models. Every AI implementation incorporates strict input sanitization, token budgeting, deterministic grounding, and explicit human-in-the-loop review mechanisms.",
    technologies: ["Google Gemini API", "Vector Embeddings", "Structured Reasoning Pipelines", "Edge Function Inference", "Content Safety Filters"],
    integrationDetails: "API keys and model secrets are isolated exclusively in server-side environment variables and Cloud Secret Manager.",
    complianceNote: "Governed by internal AI safety standards aligned with ISO/IEC 42001:2023 and NIST AI RMF 1.0."
  },
  {
    id: "meta-analytics",
    category: "Analytics & Attribution",
    name: "Analytics, Consent Mode v2 & Tag Management",
    role: "Privacy-Compliant Measurement & Attribution",
    description: "Our websites and digital products integrate Google Tag Manager (Container GTM-T346BN49) operating in full harmony with Google Consent Mode v2. All analytics and marketing tags respect user privacy choices and remain strictly denied until explicit user consent is granted.",
    technologies: ["Google Tag Manager (GTM-T346BN49)", "Google Consent Mode v2", "DataLayer Architecture", "Granular Cookie Management"],
    integrationDetails: "Consent state initialized before GTM loads; persisted securely via local storage with programmatic update triggers.",
    complianceNote: "Compliant with GDPR, ePrivacy Directive, and UK Data Protection Act 2018."
  },
  {
    id: "security-compliance",
    category: "Security & Governance",
    name: "Security, Privacy & Data Governance",
    role: "Defensive Engineering & Data Minimization",
    description: "We practice privacy-by-design and least privilege across every layer of the technology stack. From client-side cryptographic hashing to automated secret scanning and strict Content Security Policies (CSP), security is engineered into the product from day one.",
    technologies: ["Web Crypto API", "Role-Based Access Control", "HTTPS / TLS 1.3 Strict", "Zero Secret Leakage Audits", "Data Minimization Protocols"],
    integrationDetails: "All sensitive operations are audited against ISO/IEC 27001 foundational security controls.",
    complianceNote: "Independent engineering framework maintained directly by ANM Digital Labs."
  }
];
