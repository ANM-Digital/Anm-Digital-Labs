import React from "react";
import { Link } from "../../router";
import { SEOHead } from "../../components/SEOHead";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { useLanguage } from "../../context/LanguageContext";

export function CookiePolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="page-legal">
      <SEOHead
        title="Cookie Policy — ANM Digital Labs"
        description="Learn how ANM Digital Labs utilizes essential cookies and Google Consent Mode v2 on anmdigital.online."
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs items={[{ label: t.footer.cookiePolicy }]} />
          <div className="page-hero">
            <div className="tag">
              <i></i>
              <span>Cookie Governance</span>
            </div>
            <h1>Cookie Policy</h1>
            <p className="page-lead">Clear transparency on the cookies and local storage tokens utilized across our website.</p>
            <div className="legal-date-tag">Last Updated: 26 August 2026</div>
          </div>
        </div>
      </div>

      <section className="section section-legal-content">
        <div className="section-container legal-container">
          <article className="legal-article">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies and local storage records are small data files placed on your browser or device when you browse websites. They are used to facilitate secure authentication, remember interface preferences, and provide aggregated system telemetry.
            </p>

            <h2>2. Essential Functional Cookies</h2>
            <p>
              These tokens are required for core platform navigation, multilingual locale switching (<code>anm_preferred_language</code>), and preserving cookie consent choices (<code>anm_google_consent_v2</code>). They do not collect personally identifiable information for marketing purposes.
            </p>

            <h2>3. Google Consent Mode v2 Integration</h2>
            <p>
              We implement <b>Google Consent Mode v2</b> with container <b>GTM-T346BN49</b>. Under this framework, all analytics and measurement signals remain set to <code>denied</code> by default:
            </p>
            <ul>
              <li><code>ad_storage</code>: Denied by default.</li>
              <li><code>analytics_storage</code>: Denied by default.</li>
              <li><code>ad_user_data</code>: Denied by default.</li>
              <li><code>ad_personalization</code>: Denied by default.</li>
              <li><code>functionality_storage</code>: Granted (for essential language &amp; layout preferences).</li>
              <li><code>security_storage</code>: Granted (for session integrity).</li>
            </ul>

            <h2>4. Managing Your Cookie Choices</h2>
            <p>
              You may change or reset your consent choices at any time by clicking the Cookie Banner settings in the footer of this website, or by clearing cookies directly via your browser settings.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
