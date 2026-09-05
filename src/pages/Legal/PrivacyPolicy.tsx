import React from "react";
import { Link } from "../../router";
import { SEOHead } from "../../components/SEOHead";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { useLanguage } from "../../context/LanguageContext";

export function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="page-legal">
      <SEOHead
        title="Privacy Policy — ANM Digital Labs"
        description="Comprehensive Privacy Policy for ANM Digital Labs, explaining our data minimization, Google Consent Mode v2, and GDPR / UK DPA compliance."
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs items={[{ label: t.footer.privacyPolicy }]} />
          <div className="page-hero">
            <div className="tag">
              <i></i>
              <span>Legal Governance</span>
            </div>
            <h1>Privacy Policy</h1>
            <p className="page-lead">
              How ANM Digital Labs and Yoga Products Ltd collect, process, and protect your information across our website and digital products.
            </p>
            <div className="legal-date-tag">Last Updated: 26 August 2026</div>
          </div>
        </div>
      </div>

      <section className="section section-legal-content">
        <div className="section-container legal-container">
          <article className="legal-article">
            <h2>1. Corporate Identity &amp; Scope</h2>
            <p>
              ANM Digital Labs (“ANM Digital”, “we”, “us”, or “our”) is the software development and digital products division operated by <b>Yoga Products Ltd</b> (registered in the United Kingdom). This Privacy Policy applies to the domain <code>anmdigital.online</code>, our official client portals, and our distributed software applications.
            </p>
            <p>
              Individual mobile or SaaS applications published by ANM Digital (such as <i>Proud Muslim</i>, <i>PhotoBeautify</i>, <i>Orion HQ</i>, <i>TextSpeeder</i>, and <i>AccountPilot</i>) may provide dedicated, product-specific privacy notices addressing unique local device permissions.
            </p>

            <h2>2. Principles of Data Minimization &amp; Privacy-by-Design</h2>
            <p>
              We design our digital products around strict data minimization principles. We do not harvest extraneous personal information, do not monetize personal data through behavioral broker networks, and do not track users across unrelated third-party websites.
            </p>

            <h2>3. Information We Collect</h2>
            <p>We may collect information under the following lawful categories:</p>
            <ul>
              <li>
                <b>Voluntary Communications:</b> Name, email address, phone number, company name, and message content submitted through our contact forms or customer support channels.
              </li>
              <li>
                <b>Member Portal Credentials:</b> Email addresses, hashed authentication tokens, and license configuration identifiers for registered client portal members.
              </li>
              <li>
                <b>Technical &amp; Reliability Telemetry:</b> IP addresses (anonymized/truncated where feasible), browser user-agent strings, HTTP referrers, and diagnostic crash logs necessary for system stability and defense against cyberattacks.
              </li>
            </ul>

            <h2>4. Google Consent Mode v2 &amp; Tag Management</h2>
            <p>
              This website integrates <b>Google Tag Manager (Container GTM-T346BN49)</b> operating strictly in accordance with <b>Google Consent Mode v2</b>. By default, all non-essential analytics storage, advertising storage, and personalization storage signals are set to <code>denied</code> until you explicitly grant consent through our Cookie Banner.
            </p>
            <p>
              You may modify or reset your consent choices at any time via the Cookie Settings options located in our website footer.
            </p>

            <h2>5. Mobile Application Device Permissions</h2>
            <p>
              Our mobile software applications (such as <i>Proud Muslim</i> and <i>PhotoBeautify</i>) adhere strictly to Google Play Developer Policies:
            </p>
            <ul>
              <li>
                <b>Location Permissions (Proud Muslim):</b> Coarse or fine location is requested strictly to calculate localized astronomical prayer times and Qibla compass bearing. Prayer logs and devotional records remain stored locally on your device and are never transmitted to external analytics servers.
              </li>
              <li>
                <b>Camera &amp; Media Access (PhotoBeautify):</b> Photo and image access is used strictly on-device to perform requested portrait adjustments and image filtering. No user photographs are harvested or used for AI model training.
              </li>
            </ul>

            <h2>6. Advertising &amp; app-ads.txt Direct Monetization</h2>
            <p>
              Where free applications display advertising supported by Google AdMob, authorized publisher verification is hosted directly on our domain at <code>https://anmdigital.online/app-ads.txt</code> (Publisher ID: <code>pub-3389235720496369</code>). Advertisements respect user consent signals and platform privacy controls.
            </p>

            <h2>7. International Data Transfers &amp; Security</h2>
            <p>
              Data submitted through our platforms is hosted securely in cloud environments (including Google Cloud and Firebase) with TLS 1.3 encryption in transit and AES-256 encryption at rest. We enforce strict role-based access control and zero secret leakage protocols.
            </p>

            <h2>8. Your Rights Under GDPR &amp; UK Data Protection Act</h2>
            <p>Under applicable United Kingdom and European privacy regulations, you possess the right to:</p>
            <ul>
              <li>Request confirmation of whether we hold personal data concerning you and obtain a copy.</li>
              <li>Request correction of inaccurate or incomplete personal information.</li>
              <li>Request the permanent erasure of your personal data (<Link to="/data-deletion">Data Deletion Request</Link>).</li>
              <li>Withdraw previously granted consent without affecting the lawfulness of prior processing.</li>
            </ul>

            <h2>9. Contact &amp; Data Protection Officer</h2>
            <p>
              For privacy inquiries, rights requests, or regulatory questions, please contact our Data Privacy team at:
            </p>
            <p>
              <b>Email:</b> <a href="mailto:info@anmdigital.online">info@anmdigital.online</a>
              <br />
              <b>Operating Company:</b> Yoga Products Ltd / ANM Digital Labs
              <br />
              <b>Corporate Location:</b> London, United Kingdom
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
