import React from "react";
import { Link } from "../router";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowRight, ArrowUpRight, CheckIcon, ShieldCheckIcon } from "../components/Icons";
import { useLanguage } from "../context/LanguageContext";
import { standards } from "../data/standards";

export function StandardsPage() {
  const { t } = useLanguage();

  return (
    <div className="page-standards">
      <SEOHead
        title="Development & Creation Standards — ANM Digital Labs"
        description="The 12 development, accessibility (WCAG 2.2 AA), quality (ISO/IEC 25010), Android 16 target SDK, and AI governance standards governing ANM Digital Labs software."
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs items={[{ label: t.nav.standards }]} />
          <div className="page-hero">
            <div className="tag">
              <i></i>
              <span>Engineering Governance</span>
            </div>
            <h1>The principles behind every interface we engineer.</h1>
            <p className="page-lead">
              ANM Digital uses a structured system of software quality, accessibility, visual hierarchy, responsible AI, and mobile release standards throughout application development.
            </p>
          </div>
        </div>
      </div>

      <section className="section section-standards-catalog">
        <div className="section-container">
          <div className="standards-intro-bar">
            <div>
              <div className="tag">
                <i></i>
                <span>Applied Framework</span>
              </div>
              <h2>Elegance with measurable engineering discipline.</h2>
            </div>
            <p>
              Our standards translate design and technical intent into repeatable, auditable decisions — from typography and depth to Android 16 SDK target compliance and pre-release verification.
            </p>
          </div>

          <div className="standards-catalog-grid">
            {standards.map((s) => (
              <article key={s.id} id={s.id} className="standard-full-card">
                <div className="standard-card-header">
                  <div className="std-num-pill">{s.num}</div>
                  <div className="std-title-wrap">
                    <h3>{s.title}</h3>
                    <span className="std-framework-ref">{s.reference}</span>
                  </div>
                </div>

                <div className="standard-card-body">
                  <p className="std-summary-text">{s.summary}</p>

                  <div className="std-criteria-box">
                    <b>Mandatory Verification Criteria</b>
                    <ul className="std-criteria-list">
                      {s.details.map((d, idx) => (
                        <li key={idx}>
                          <CheckIcon size={14} className="check-icon" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="std-business-val-box">
                    <small>BUSINESS &amp; CLIENT VALUE</small>
                    <p>{s.businessValue}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Standards Reference Notice */}
          <div className="standards-reference-notice">
            <div className="tag">
              <i></i>
              <span>Framework Reference Notice</span>
            </div>
            <p>
              These internal standards are informed by recognized external frameworks (including ISO/IEC 25010:2023, ISO/IEC 42001:2023, WCAG 2.2 AA, and Google Play target API requirements) where stated. Reference alignment represents adherence to industry best practices and does not imply third-party certification or official accreditation. Standards are continuously reviewed as operating systems and accessibility guidelines evolve.
            </p>
          </div>
        </div>
      </section>

      {/* Standards CTA */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="tag">
            <i></i>
            <span>Build to Standard</span>
          </div>
          <h2>Apply these standards to your next software release.</h2>
          <p>Contact our engineering studio to discuss project architecture and compliance audits.</p>
          <div className="cta-actions">
            <Link className="button white" to="/contact">
              <span>Start a Project Discussion</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
