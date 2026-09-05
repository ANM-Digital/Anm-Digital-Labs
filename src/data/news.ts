import { NewsItem } from "../types";

export const newsItems: NewsItem[] = [
  {
    id: "news-android-target-sdk-deadlines",
    title: "Google Play Updates Target API Level Requirements for Android Applications",
    source: "Android Developers Official Blog",
    sourceUrl: "https://developer.android.com/google/play/requirements/target-sdk",
    publishedDate: "2026-08-01",
    category: "Mobile Ecosystem",
    summary: "Google Play mandates that all new applications and app updates must target recent Android API levels to ensure enhanced security, runtime permission controls, and power efficiency.",
    anmCommentary: "ANM Digital Commentary: In accordance with our Internal Publishing Standard (Standard 12), all ANM Digital mobile software pipelines are proactively upgraded to target the latest Android SDK baseline well in advance of Google Play enforcement deadlines."
  },
  {
    id: "news-wcag-digital-accessibility-enforcement",
    title: "European Accessibility Act and WCAG 2.2 Standards Gain Broad Commercial Adoption",
    source: "W3C Web Accessibility Initiative",
    sourceUrl: "https://www.w3.org/WAI/standards-guidelines/wcag/",
    publishedDate: "2026-07-15",
    category: "Web Standards & Compliance",
    summary: "International regulatory bodies and enterprise procurement teams are increasingly standardizing on WCAG 2.2 AA as the legal benchmark for digital inclusivity, keyboard navigability, and cognitive accessibility.",
    anmCommentary: "ANM Digital Commentary: We treat digital accessibility as a foundational engineering constraint rather than an afterthought. Every ANM Digital website and user interface is built to meet or exceed WCAG 2.2 AA contrast and keyboard access criteria."
  },
  {
    id: "news-google-consent-mode-v2-expansion",
    title: "Privacy-Centric Measurement: Google Consent Mode v2 Standards in EEA & UK",
    source: "Google Tag Manager Privacy Center",
    sourceUrl: "https://support.google.com/tagmanager/answer/10718549",
    publishedDate: "2026-06-20",
    category: "Privacy & Analytics",
    summary: "Digital platforms operating in the United Kingdom and European Economic Area must maintain verified Consent Mode v2 signals to ensure lawful measurement while respecting user consent choices.",
    anmCommentary: "ANM Digital Commentary: The anmdigital.online domain utilizes a hardened Consent Mode v2 implementation, initializing safe default denials before Google Tag Manager loads to safeguard visitor rights."
  }
];
