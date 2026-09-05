import React from "react";
import { Link } from "../../router";
import { SEOHead } from "../../components/SEOHead";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { CheckIcon } from "../../components/Icons";
import { useLanguage } from "../../context/LanguageContext";

export function AccessibilityStatementPage() {
  const { t } = useLanguage();

  return (
    <div className="page-legal">
      <SEOHead
        title="Accessibility Statement — ANM Digital Labs"
        description="Our commitment to digital accessibility, inclusive design, and WCAG 2.2 AA compliance across ANM Digital Labs software."
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs items={[{ label: t.footer.accessibility }]} />
          <div className="page-hero">
            <div className="tag">
              <i></i>
              <span>Inclusive Technology</span>
            </div>
            <h1>Accessibility Statement</h1>
            <p className="page-lead">
              ANM Digital Labs is committed to ensuring digital accessibility for people with diverse physical, sensory, and cognitive abilities.
            </p>
            <div className="legal-date-tag">Compliance Target: WCAG 2.2 Level AA</div>
          </div>
        </div>
      </div>

      <section className="section section-legal-content">
        <div className="section-container legal-container">
          <article className="legal-article">
            <h2>1. Standards Conformance</h2>
            <p>
              We design and engineer our web platforms and mobile applications in strict conformance with the <b>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</b> and our internal Accessibility Standard (Standard 02).
            </p>

            <h2>2. Specific Accessibility Measures Implemented</h2>
            <ul>
              <li>
                <b>High-Contrast Typography:</b> Text surfaces maintain a minimum contrast ratio of 4.5:1 against dark and light backgrounds.
              </li>
              <li>
                <b>Keyboard Navigation:</b> All interactive components, dropdowns, and form inputs are fully accessible via keyboard with visible focus rings.
              </li>
              <li>
                <b>Semantic HTML5 Landmarks:</b> Clear semantic regions (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code>) and ARIA attributes for assistive technologies.
              </li>
              <li>
                <b>Reduced Motion Support:</b> The entire stylesheet respects <code>prefers-reduced-motion: reduce</code> media queries, replacing 3D animations with static, instant states.
              </li>
              <li>
                <b>Multilingual &amp; RTL Support:</b> Full right-to-left layout rendering for Arabic and Urdu with natural reading order.
              </li>
            </ul>

            <h2>3. Feedback &amp; Contact</h2>
            <p>
              If you experience any accessibility barriers while using our website or applications, please notify our accessibility lead at <a href="mailto:info@anmdigital.online">info@anmdigital.online</a>. We investigate all accessibility reports promptly.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
