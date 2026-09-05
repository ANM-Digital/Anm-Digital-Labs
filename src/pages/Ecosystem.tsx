import React from "react";
import { Link } from "../router";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowRight, ArrowUpRight, ShieldCheckIcon, CloudIcon, SmartphoneIcon, CpuIcon, LayersIcon } from "../components/Icons";
import { useLanguage } from "../context/LanguageContext";
import { ecosystemItems } from "../data/ecosystem";

export function EcosystemPage() {
  const { t } = useLanguage();

  return (
    <div className="page-ecosystem">
      <SEOHead
        title="Technology Ecosystem & Integrations — ANM Digital Labs"
        description="Review ANM Digital Labs' technology ecosystem: Google Cloud, Firebase App Hosting, Android 16 SDK targets, GitHub DevOps, and privacy-compliant Google Consent Mode v2."
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs items={[{ label: t.nav.ecosystem }]} />
          <div className="page-hero">
            <div className="tag">
              <i></i>
              <span>Technology Architecture</span>
            </div>
            <h1>Connected technology &amp; cloud ecosystem.</h1>
            <p className="page-lead">
              A transparent breakdown of the cloud platforms, developer toolchains, mobile frameworks, and data governance systems that power ANM Digital applications.
            </p>
          </div>
        </div>
      </div>

      <section className="section section-ecosystem-body">
        <div className="section-container">
          <div className="ecosystem-catalog-grid">
            {ecosystemItems.map((item) => (
              <article key={item.id} className="ecosystem-card">
                <div className="ecosystem-card-header">
                  <span className="ecosystem-cat-tag">{item.category}</span>
                  <h3>{item.name}</h3>
                  <p className="ecosystem-role-sub">{item.role}</p>
                </div>

                <div className="ecosystem-card-body">
                  <p className="ecosystem-desc">{item.description}</p>

                  <div className="ecosystem-tech-wrap">
                    <b>Utilized Tooling &amp; Frameworks</b>
                    <div className="ecosystem-tech-tags">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="tech-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="ecosystem-integration-box">
                    <small>VERIFIED INTEGRATION ARCHITECTURE</small>
                    <p>{item.integrationDetails}</p>
                  </div>

                  {item.complianceNote && (
                    <div className="ecosystem-compliance-note">
                      <small>GOVERNANCE &amp; POLICY NOTICE</small>
                      <p>{item.complianceNote}</p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Technical Compliance & Independence Disclaimer */}
          <div className="ecosystem-disclaimer-box">
            <div className="tag">
              <i></i>
              <span>Technical Transparency Statement</span>
            </div>
            <h4>Integration Scope &amp; Commercial Independence</h4>
            <p>
              The ecosystem integrations described above represent verified engineering use of industry-standard APIs, SDKs, cloud platforms, and developer distribution channels by ANM Digital Labs. Technical usage of third-party platforms (including Google Cloud, Google Play, GitHub, Meta, or Firebase) does not imply sponsorship, partnership, or official commercial endorsement by these respective trademark holders.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem CTA */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="tag">
            <i></i>
            <span>Engineering Excellence</span>
          </div>
          <h2>Explore our software development standards.</h2>
          <p>Learn how we enforce code quality, accessibility, and Android target SDK compliance across all projects.</p>
          <div className="cta-actions">
            <Link className="button white" to="/standards">
              <span>View Creation Standards</span>
              <ArrowRight size={15} />
            </Link>
            <Link className="ghost-button light" to="/contact">
              <span>Contact Engineering</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
