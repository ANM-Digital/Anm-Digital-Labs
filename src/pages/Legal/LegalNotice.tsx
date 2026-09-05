import React from "react";
import { Link } from "../../router";
import { SEOHead } from "../../components/SEOHead";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { useLanguage } from "../../context/LanguageContext";

export function LegalNoticePage() {
  const { t } = useLanguage();

  return (
    <div className="page-legal">
      <SEOHead
        title="Legal Notice & Corporate Imprint — ANM Digital Labs"
        description="Official legal notice, corporate registrations, and company identity details for ANM Digital Labs and Yoga Products Ltd."
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs items={[{ label: t.footer.legalNotice }]} />
          <div className="page-hero">
            <div className="tag">
              <i></i>
              <span>Corporate Disclosure</span>
            </div>
            <h1>Legal Notice &amp; Imprint</h1>
            <p className="page-lead">Official statutory information, registered operating details, and corporate disclosures.</p>
            <div className="legal-date-tag">Statutory Corporate Notice</div>
          </div>
        </div>
      </div>

      <section className="section section-legal-content">
        <div className="section-container legal-container">
          <article className="legal-article">
            <h2>1. Operating Company Identification</h2>
            <p>
              This website (<code>anmdigital.online</code>) and its software product portfolio are operated by:
            </p>
            <div className="imprint-card">
              <b>Operating Entity:</b> Yoga Products Ltd (Yoga Products Top Limited)
              <br />
              <b>Trading Brand / Technology Division:</b> ANM Digital Labs
              <br />
              <b>Corporate Location:</b> London, United Kingdom
              <br />
              <b>Engineering Operations:</b> Istanbul, Turkey
              <br />
              <b>Official Email:</b> <a href="mailto:info@anmdigital.online">info@anmdigital.online</a>
            </div>

            <h2>2. Corporate Division Distinction</h2>
            <p>
              ANM Digital Labs is strictly dedicated to software development, SaaS systems, mobile applications, and digital intellectual property. It operates independently from <b>A&amp;M Consultancy</b> (<a href="https://anmconsultancy.com" target="_blank" rel="noopener noreferrer">anmconsultancy.com</a>), which provides trade, sourcing, and commercial advisory services.
            </p>

            <h2>3. Publisher Record &amp; app-ads.txt</h2>
            <p>
              For the purposes of Google Play and Google AdMob authorized digital seller verification, our authoritative <code>app-ads.txt</code> record is hosted directly at:
              <br />
              <code>https://anmdigital.online/app-ads.txt</code>
              <br />
              <b>Authorized Account:</b> <code>google.com, pub-3389235720496369, DIRECT, f08c47fec0942fa0</code>
            </p>

            <h2>4. Copyright &amp; Trademarks</h2>
            <p>
              © 2026 ANM Digital Labs / Yoga Products Ltd. All rights reserved. Reproduction of brand marks, software components, or visual systems without explicit written consent is strictly prohibited.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
