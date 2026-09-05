import React from "react";
import { Link, useParams } from "../router";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowRight, ArrowUpRight, CheckIcon, ShieldCheckIcon } from "../components/Icons";
import { useLanguage } from "../context/LanguageContext";
import { products } from "../data/products";

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="page-not-found">
        <SEOHead title="Product Not Found" />
        <div className="section-container">
          <div className="notfound-content">
            <div className="tag">
              <i></i>
              <span>Error 404</span>
            </div>
            <h1>Product not found</h1>
            <p>The requested application could not be found in the ANM Digital product directory.</p>
            <Link to="/products" className="button">
              <span>{t.common.backToProducts}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-product-detail">
      <SEOHead
        title={`${product.name} — ${product.categoryLabel}`}
        description={product.description}
        type="product"
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs
            items={[
              { label: t.nav.products, to: "/products" },
              { label: product.name },
            ]}
          />

          <div className="product-detail-hero">
            <div className="product-hero-badge-wrap">
              <span className="product-code-huge" style={{ background: product.iconBg || undefined }}>
                {product.code}
              </span>
              <div className="product-hero-meta">
                <span className={`product-status-pill ${product.availability.includes("Live") ? "live" : "dev"}`}>
                  <i className="status-dot"></i>
                  {product.availability}
                </span>
                <span className="product-category-text">{product.categoryLabel}</span>
              </div>
            </div>

            <h1>{product.name}</h1>
            <p className="product-tagline">{product.tagline}</p>

            <div className="product-hero-actions">
              {product.url && (
                <a href={product.url} target="_blank" rel="noopener noreferrer" className="button">
                  <span>Visit Official Website</span>
                  <ArrowUpRight size={15} />
                </a>
              )}
              {product.storeUrl && (
                <a href={product.storeUrl} target="_blank" rel="noopener noreferrer" className="button">
                  <span>View on Google Play</span>
                  <ArrowUpRight size={15} />
                </a>
              )}
              <Link to="/contact" className="ghost-button">
                <span>Inquire About Integration</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overview & Key Highlights */}
      <section className="section section-product-body">
        <div className="section-container">
          <div className="product-body-grid">
            <div className="product-main-info">
              <div className="info-block">
                <h3>{t.common.overview}</h3>
                <p className="large-lead-text">{product.overview}</p>
                <p>{product.description}</p>
              </div>

              <div className="info-block">
                <h3>{t.common.highlights}</h3>
                <div className="highlights-list">
                  {product.highlights.map((h, i) => (
                    <div key={i} className="highlight-item">
                      <CheckIcon size={16} className="highlight-check" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="product-sidebar">
              <div className="sidebar-card">
                <h4>Application Specifications</h4>
                <div className="spec-row">
                  <span>Platform</span>
                  <b>{product.platform}</b>
                </div>
                <div className="spec-row">
                  <span>Availability</span>
                  <b>{product.availability}</b>
                </div>
                <div className="spec-row">
                  <span>Operating Studio</span>
                  <b>ANM Digital Labs</b>
                </div>

                <div className="spec-tech-section">
                  <span>Technology Stack</span>
                  <div className="spec-tech-tags">
                    {product.techStack.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="spec-links-section">
                  <span>Legal &amp; Policies</span>
                  <div className="spec-legal-links">
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms of Use</Link>
                  </div>
                </div>
              </div>

              <div className="sidebar-help-card">
                <ShieldCheckIcon size={20} />
                <div>
                  <h5>Verified Application</h5>
                  <p>Built under ANM Digital Creation Standards with zero telemetry leakage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Products Bar */}
      <div className="section-bottom-nav">
        <div className="section-container">
          <Link to="/products" className="back-link-btn">
            <span>← {t.common.backToProducts}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
