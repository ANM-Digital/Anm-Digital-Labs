import React from "react";
import { Link } from "../router";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowRight, ArrowUpRight, ShieldCheckIcon, GlobeIcon, CpuIcon } from "../components/Icons";
import { useLanguage } from "../context/LanguageContext";

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="page-about">
      <SEOHead
        title="About Us — Corporate Profile & Philosophy"
        description="Learn about ANM Digital Labs, our corporate mission, international operations in London and Istanbul, and our relationship with Yoga Products Ltd and ANM Consultancy."
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs items={[{ label: t.nav.about }]} />
          <div className="page-hero">
            <div className="tag">
              <i></i>
              <span>Corporate Overview</span>
            </div>
            <h1>A digital product business built to create.</h1>
            <p className="page-lead">
              ANM Digital Labs exists to engineer, launch, and operate robust digital software assets — uniting commercial discipline with modern systems architecture.
            </p>
          </div>
        </div>
      </div>

      {/* Purpose & Mission Section */}
      <section className="section section-about-intro">
        <div className="section-container">
          <div className="about-split-grid">
            <div className="about-intro-copy">
              <div className="tag">
                <i></i>
                <span>Our Purpose</span>
              </div>
              <h2>From commercial insight to digital execution.</h2>
              <p>
                We believe software should solve distinct problems with clarity and speed. Rather than offering abstract digital consulting, ANM Digital Labs actively designs, engineers, and operates working digital platforms, mobile applications, and AI-enabled software systems.
              </p>
              <p>
                Our multidisciplinary studio bridges the gap between commercial strategy and low-level code execution. Every product we touch is built on maintainable codebases, strict privacy standards, and resilient cloud architectures.
              </p>
            </div>

            <div className="values-grid">
              <div className="value-card">
                <span className="value-num">01</span>
                <h3>Disciplined Engineering</h3>
                <p>We write clean, typed, modular code designed for long-term maintainability, security, and low operational cost.</p>
              </div>
              <div className="value-card">
                <span className="value-num">02</span>
                <h3>Privacy-by-Design</h3>
                <p>Data minimization, local on-device processing, and strict separation between public and private systems.</p>
              </div>
              <div className="value-card">
                <span className="value-num">03</span>
                <h3>Responsible AI</h3>
                <p>Deterministic system scaffolding, human-in-the-loop validation, and transparent machine reasoning.</p>
              </div>
              <div className="value-card">
                <span className="value-num">04</span>
                <h3>Measurable Quality</h3>
                <p>Strict alignment with ISO/IEC 25010 quality standards, WCAG 2.2 AA accessibility, and OS SDK compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Structure & Relationship */}
      <section className="section section-corporate-lineage">
        <div className="section-container">
          <div className="section-header">
            <div>
              <div className="tag">
                <i></i>
                <span>Corporate Lineage</span>
              </div>
              <h2>Clear commercial structure and governance.</h2>
            </div>
            <p>
              Understanding the relationship between ANM Digital Labs, our operating parent company Yoga Products Ltd, and our sister company A&amp;M Consultancy.
            </p>
          </div>

          <div className="corporate-lineage-card">
            <div className="lineage-header">
              <div className="lineage-main-org">
                <small>PARENT OPERATING ENTITY</small>
                <h3>Yoga Products Ltd (Yoga Products Top Limited)</h3>
                <p>Registered in the United Kingdom · International Commercial Holding &amp; Operating Company</p>
              </div>
            </div>

            <div className="lineage-divisions-grid">
              <div className="division-card active-division">
                <div className="division-badge">Digital Technology Division</div>
                <h4>ANM Digital Labs</h4>
                <p>
                  Specialized software development studio responsible for building, releasing, and operating software products, SaaS platforms, mobile applications (Proud Muslim, PhotoBeautify), and applied AI systems.
                </p>
                <div className="division-metrics">
                  <span>Operating Website: anmdigital.online</span>
                  <span>Core Focus: Software, SaaS, Mobile, Cloud &amp; AI</span>
                </div>
              </div>

              <div className="division-card">
                <div className="division-badge">Advisory &amp; Sourcing Division</div>
                <h4>A&amp;M Consultancy</h4>
                <p>
                  Commercial consultancy and business services enterprise focused on supply chain sourcing, trade facilitation, and strategic enterprise advisory services.
                </p>
                <div className="division-metrics">
                  <span>Operating Website: anmconsultancy.com</span>
                  <span>Core Focus: Advisory, Sourcing, Trade Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Outlook & Office Locations */}
      <section className="section section-locations">
        <div className="section-container">
          <div className="section-header">
            <div>
              <div className="tag">
                <i></i>
                <span>International Footprint</span>
              </div>
              <h2>Global perspective with verified local operations.</h2>
            </div>
            <p>
              Our operations combine United Kingdom corporate governance with agile engineering capabilities in Turkey.
            </p>
          </div>

          <div className="locations-grid">
            <div className="location-card">
              <div className="location-flag-badge">United Kingdom</div>
              <h3>London Headquarters</h3>
              <p className="location-role">Corporate Governance &amp; Operating Headquarters</p>
              <div className="location-details">
                <p>
                  <b>Operating Entity:</b> Yoga Products Ltd / ANM Digital Labs
                </p>
                <p>
                  <b>Location:</b> London, United Kingdom
                </p>
                <p>
                  <b>Primary Scope:</b> Commercial strategy, executive management, and international software distribution.
                </p>
              </div>
            </div>

            <div className="location-card">
              <div className="location-flag-badge">Turkey</div>
              <h3>Istanbul Operations</h3>
              <p className="location-role">Technical Development &amp; Engineering Operations</p>
              <div className="location-details">
                <p>
                  <b>Operating Entity:</b> ANM Digital Labs
                </p>
                <p>
                  <b>Location:</b> Istanbul, Turkey
                </p>
                <p>
                  <b>Primary Scope:</b> Mobile software development, cloud infrastructure management, and AI pipeline engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Technology Principles */}
      <section className="section section-principles">
        <div className="section-container">
          <div className="principles-box">
            <div className="tag">
              <i></i>
              <span>User-First Principles</span>
            </div>
            <h2>Our responsible technology charter.</h2>
            <div className="principles-list-grid">
              <div className="principle-item">
                <ShieldCheckIcon size={20} />
                <div>
                  <h4>Zero Dark Patterns</h4>
                  <p>We build interfaces that respect user autonomy with transparent pricing, clear deletion paths, and zero deceptive countdowns.</p>
                </div>
              </div>
              <div className="principle-item">
                <GlobeIcon size={20} />
                <div>
                  <h4>Data Minimization</h4>
                  <p>We only collect the minimum telemetry necessary for system stability, refusing to harvest superfluous behavioral data.</p>
                </div>
              </div>
              <div className="principle-item">
                <CpuIcon size={20} />
                <div>
                  <h4>Auditable Systems</h4>
                  <p>All automated reasoning pipelines incorporate verifiable audit trails and fallback handlers for continuous reliability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="tag">
            <i></i>
            <span>Collaborate</span>
          </div>
          <h2>Explore how ANM Digital Labs can build for you.</h2>
          <p>Contact our engineering and product team for partnerships and software development inquiries.</p>
          <div className="cta-actions">
            <Link className="button white" to="/contact">
              <span>Contact ANM Digital</span>
              <ArrowUpRight size={15} />
            </Link>
            <Link className="ghost-button light" to="/standards">
              <span>Review Engineering Standards</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
