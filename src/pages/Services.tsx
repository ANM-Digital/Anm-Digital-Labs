import React from "react";
import { Link } from "../router";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowRight, ArrowUpRight, CheckIcon } from "../components/Icons";
import { useLanguage } from "../context/LanguageContext";
import { services } from "../data/services";

export function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="page-services">
      <SEOHead
        title="Services & Capabilities — ANM Digital Labs"
        description="Explore ANM Digital Labs' engineering services: mobile application development (Android SDK 16), web platforms, AI integration, Firebase solutions, and technology audits."
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs items={[{ label: t.nav.services }]} />
          <div className="page-hero">
            <div className="tag">
              <i></i>
              <span>Engineering Capabilities</span>
            </div>
            <h1>Every discipline required to engineer digital software.</h1>
            <p className="page-lead">
              We combine commercial thinking, rigorous interface design, and dependable cloud engineering to take ambitious digital products from definition to daily production.
            </p>
          </div>
        </div>
      </div>

      <section className="section section-services-list">
        <div className="section-container">
          <div className="services-stacked-grid">
            {services.map((s) => (
              <article key={s.id} id={s.id} className="service-large-card">
                <div className="service-large-header">
                  <div className="service-num-badge">{s.num}</div>
                  <div className="service-title-wrap">
                    <h3>{s.name}</h3>
                    <p className="service-tagline">{s.tagline}</p>
                  </div>
                </div>

                <div className="service-large-body">
                  <div className="service-desc-col">
                    <p className="service-summary-lead">{s.summary}</p>
                    <p className="service-detail-text">{s.detail}</p>

                    <div className="service-deliverables-box">
                      <h4>{t.common.deliverables}</h4>
                      <ul className="deliverables-checklist">
                        {s.deliverables.map((d, idx) => (
                          <li key={idx}>
                            <CheckIcon size={14} className="check-icon" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="service-sidebar-col">
                    <div className="service-process-box">
                      <h4>{t.common.process}</h4>
                      <div className="process-timeline">
                        {s.process.map((p) => (
                          <div key={p.step} className="process-timeline-item">
                            <span className="process-step-num">{p.step}</span>
                            <div>
                              <b>{p.title}</b>
                              <p>{p.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="service-tech-box">
                      <h4>{t.common.technologies}</h4>
                      <div className="service-tech-chips">
                        {s.technologies.map((tItem) => (
                          <span key={tItem} className="tech-tag">
                            {tItem}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="service-action-wrap">
                      <Link to={`/services/${s.id}`} className="button small">
                        <span>View Detailed Methodology</span>
                        <ArrowRight size={14} />
                      </Link>
                      <Link to="/contact" className="ghost-button">
                        <span>Inquire About This Service</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="tag">
            <i></i>
            <span>Project Inquiries</span>
          </div>
          <h2>Bring your technical challenge to our studio.</h2>
          <p>
            Whether you need a dedicated mobile application or a complete web platform, our team delivers predictable, high-standard software.
          </p>
          <div className="cta-actions">
            <Link className="button white" to="/contact">
              <span>Start a Conversation</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
