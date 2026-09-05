import React from "react";
import { Link, useParams } from "../router";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowRight, ArrowUpRight, CheckIcon, ShieldCheckIcon } from "../components/Icons";
import { useLanguage } from "../context/LanguageContext";
import { services } from "../data/services";

export function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="page-not-found">
        <SEOHead title="Service Not Found" />
        <div className="section-container">
          <div className="notfound-content">
            <div className="tag">
              <i></i>
              <span>Error 404</span>
            </div>
            <h1>Capability not found</h1>
            <p>The requested engineering service could not be found.</p>
            <Link to="/services" className="button">
              <span>{t.common.backToServices}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-service-detail">
      <SEOHead
        title={`${service.name} — Service Specialism`}
        description={service.summary}
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs
            items={[
              { label: t.nav.services, to: "/services" },
              { label: service.name },
            ]}
          />

          <div className="page-hero">
            <div className="tag">
              <i></i>
              <span>Service Specialism {service.num}</span>
            </div>
            <h1>{service.name}</h1>
            <p className="page-lead">{service.tagline}</p>
            <div className="hero-actions">
              <Link to="/contact" className="button">
                <span>Inquire About This Service</span>
                <ArrowUpRight size={15} />
              </Link>
              <Link to="/standards" className="ghost-button">
                <span>View Engineering Standards</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="section section-service-detail-body">
        <div className="section-container">
          <div className="service-detail-grid">
            <div className="service-detail-main">
              <div className="info-block">
                <h3>Executive Summary</h3>
                <p className="large-lead-text">{service.summary}</p>
                <p>{service.detail}</p>
              </div>

              <div className="info-block">
                <h3>{t.common.deliverables}</h3>
                <div className="deliverables-grid-box">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="deliverable-item-card">
                      <CheckIcon size={16} className="check-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="info-block">
                <h3>{t.common.process} &amp; Methodology</h3>
                <div className="detail-process-steps">
                  {service.process.map((step) => (
                    <div key={step.step} className="step-card">
                      <span className="step-number">{step.step}</span>
                      <div className="step-content">
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="service-detail-sidebar">
              <div className="sidebar-card">
                <h4>Technology Stack</h4>
                <div className="spec-tech-tags">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="sidebar-contact-prompt">
                  <h5>Ready to build?</h5>
                  <p>Speak directly with our technical team to scope your requirements.</p>
                  <Link to="/contact" className="button small full-width">
                    <span>Contact Studio</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="sidebar-help-card">
                <ShieldCheckIcon size={20} />
                <div>
                  <h5>ANM Digital Standard</h5>
                  <p>Guaranteed adherence to ISO/IEC 25010 maintainability and WCAG 2.2 AA accessibility.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-bottom-nav">
        <div className="section-container">
          <Link to="/services" className="back-link-btn">
            <span>← {t.common.backToServices}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
