import { useEffect } from "react";
import { useLocation } from "../router";

interface SEOProps {
  title: string;
  description?: string;
  type?: "website" | "article" | "product";
}

export function SEOHead({
  title,
  description = "ANM Digital Labs creates purposeful software, SaaS platforms, mobile applications and applied AI systems.",
  type = "website",
}: SEOProps) {
  const { pathname } = useLocation();
  const canonicalUrl = `https://anmdigital.online${pathname === "/" ? "" : pathname}`;
  const fullTitle = `${title} — ANM Digital Labs`;

  useEffect(() => {
    if (typeof document === "undefined") return;

    // Set page title
    document.title = fullTitle;

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Set Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // Set Open Graph tags
    const setMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setMetaTag("og:title", fullTitle);
    setMetaTag("og:description", description);
    setMetaTag("og:url", canonicalUrl);
    setMetaTag("og:type", type);
    setMetaTag("og:site_name", "ANM Digital Labs");
  }, [fullTitle, description, canonicalUrl, type]);

  return null;
}
