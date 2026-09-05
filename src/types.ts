export type ProductCategory = "mobile" | "saas" | "publishing" | "platform";

export type ProductAvailability = "Live & Published" | "Active Development" | "Internal Beta" | "Early Access";

export interface Product {
  id: string;
  code: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  categoryLabel: string;
  platform: string;
  availability: ProductAvailability;
  url?: string;
  storeUrl?: string;
  description: string;
  overview: string;
  highlights: string[];
  techStack: string[];
  privacyUrl?: string;
  termsUrl?: string;
  iconBg?: string;
  accentColor?: string;
}

export interface Service {
  id: string;
  num: string;
  name: string;
  tagline: string;
  summary: string;
  detail: string;
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
  technologies: string[];
}

export interface EcosystemItem {
  id: string;
  category: string;
  name: string;
  role: string;
  description: string;
  technologies: string[];
  integrationDetails: string;
  complianceNote?: string;
}

export interface DevStandard {
  id: string;
  num: string;
  title: string;
  reference: string;
  summary: string;
  details: string[];
  businessValue: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  publishedDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  summary: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  sourceUrl: string;
  publishedDate: string;
  category: string;
  summary: string;
  anmCommentary: string;
}

export type LanguageCode = "en" | "tr" | "ar" | "ur" | "de" | "fr" | "es";

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
  isRtl?: boolean;
}
