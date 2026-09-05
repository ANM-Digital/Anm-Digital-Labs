import React from "react";
import { Link } from "../router";
import { SEOHead } from "../components/SEOHead";
import { SystemVisual } from "../components/SystemVisual";
import { ArrowUpRight, ArrowRight, ShieldCheckIcon, SmartphoneIcon, CloudIcon, CpuIcon } from "../components/Icons";
import { useLanguage } from "../context/LanguageContext";
import { products } from "../data/products";
import { services } from "../data/services";
import { standards } from "../data/standards";
import { blogPosts } from "../data/blog";
import { newsItems } from "../data/news";

export function HomePage() {
  const { t } = useLanguage();
  const featuredProducts = products.slice(0, 6);
  const featuredServices = services.slice(0, 6);
  const featuredStandards = standards.slice(0, 4);

  return (
    <div className="page-home">
      <SEOHead
        title="ANM Digital Labs — Software Engineering & Digital Product Studio"
        description="ANM Digital Labs creates purposeful software, SaaS platforms, mobile applications, and applied AI systems — engineered with commercial precision."
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-copy">
            <div className="tag">
              <i></i>
              <span>{t.hero.tag}</span>
            </div>
            <h1>
              {t.hero.headline} <em>{t.hero.headlineEm}</em>
            </h1>
            <p className="hero-lead">{t.hero.subheadline}</p>

            <div className="hero-actions">
              <Link className="button" to="/products">
                <span>{t.hero.exploreProducts}</span>
                <ArrowUpRight size={15} />
              </Link>
              <Link className="ghost-button" to="/about">
                <span>{t.hero.discoverAnm}</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="hero-trust-badge">
              <div className="trust-indicator-line"></div>
              <p>
                <b>Built for dependable production.</b>
                <span>Strategy, user-first engineering, and verified release compliance.</span>
              </p>
            </div>
          </div>

          <div className="hero-visual-wrap">
            <SystemVisual />
          </div>
        </div>
      </section>

      {/* Proof & Discipline Strip */}
      <section className="proof-strip" aria-label="Core Technical Capabilities">
        <div className="proof-container">
          <div className="proof-item">
            <span className="proof-num">01</span>
            <span className="proof-title">Product Strategy</span>
          </div>
          <div className="proof-item">
            <span className="proof-num">02</span>
            <span className="proof-title">Mobile &amp; Android 16</span>
          </div>
          <div className="proof-item">
            <span className="proof-num">03</span>
            <span className="proof-title">Applied AI Systems</span>
          </div>
          <div className="proof-item">
            <span className="proof-num">04</span>
            <span className="proof-title">Cloud Infrastructure</span>
          </div>
        </div>
      </section>

      {/* Featured Products Directory */}
      <section className="section section-products">
        <div className="section-container">
          <div className="section-header">
            <div>
              <div className="tag">
                <i></i>
                <span>Independent Portfolio</span>
              </div>
              <h2>Featured digital products and applications.</h2>
            </div>
            <p>
              Each application is engineered around focused user requirements — spanning daily lifestyle, mobile productivity, operational management, and publishing.
            </p>
          </div>

          <div className="products-grid">
            {featuredProducts.map((p) => (
              <article key={p.id} className="product-card">
                <div className="product-card-top">
                  <span className="product-card-badge" style={{ background: p.iconBg || undefined }}>
                    {p.code}
                  </span>
                  <span className={`product-status-pill ${p.availability.includes("Live") ? "live" : "dev"}`}>
                    <i className="status-dot"></i>
                    {p.availability}
                  </span>
                </div>

                <div className="product-card-body">
                  <span className="product-category-label">{p.categoryLabel}</span>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                </div>

                <div className="product-card-footer">
                  <span className="product-platform-tag">{p.platform}</span>
                  <div className="product-card-actions">
                    <Link to={`/products/${p.id}`} className="card-link-btn">
                      <span>{t.common.learnMore}</span>
                      <ArrowRight size={13} />
                    </Link>
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="card-ext-btn" aria-label={`Open ${p.name} official website`}>
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="section-footer-cta">
            <Link to="/products" className="inline-action-link">
              <span>View all products &amp; applications</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services / Capabilities */}
      <section className="section section-services">
        <div className="section-container">
          <div className="section-header">
            <div>
              <div className="tag">
                <i></i>
                <span>Technical Capabilities</span>
              </div>
              <h2>End-to-end disciplines for modern software.</h2>
            </div>
            <p>
              From mobile application architecture to applied AI reasoning pipelines, we provide the complete technical capability required to launch and scale.
            </p>
          </div>

          <div className="services-grid">
            {featuredServices.map((s) => (
              <article key={s.id} className="service-card">
                <div className="service-card-top">
                  <span className="service-number">{s.num}</span>
                  <span className="service-arrow">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <h3>{s.name}</h3>
                <p>{s.summary}</p>
                <div className="service-tech-tags">
                  {s.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link to={`/services/${s.id}`} className="service-card-link">
                  <span>Explore capability</span>
                  <ArrowRight size={13} />
                </Link>
              </article>
            ))}
          </div>

          <div className="section-footer-cta">
            <Link to="/services" className="inline-action-link">
              <span>Explore all 8 service specialisms</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Engineering Ecosystem Architecture */}
      <section className="section section-ecosystem-preview">
        <div className="section-container">
          <div className="ecosystem-banner">
            <div className="ecosystem-banner-copy">
              <div className="tag">
                <i></i>
                <span>Connected Infrastructure</span>
              </div>
              <h2>Verified technical foundations and cloud integrations.</h2>
              <p>
                We build upon Google Cloud, modern Android SDK targets, Firebase App Hosting, and privacy-first measurement frameworks — with zero private credential exposure.
              </p>
              <div className="ecosystem-features-list">
                <div className="ecosystem-feat">
                  <CloudIcon size={18} />
                  <div>
                    <b>Google Cloud &amp; Firebase</b>
                    <small>App Hosting on Cloud Run with automated CI/CD</small>
                  </div>
                </div>
                <div className="ecosystem-feat">
                  <SmartphoneIcon size={18} />
                  <div>
                    <b>Android &amp; Google Play</b>
                    <small>Target SDK 16 readiness and app-ads.txt direct hosting</small>
                  </div>
                </div>
                <div className="ecosystem-feat">
                  <ShieldCheckIcon size={18} />
                  <div>
                    <b>Google Consent Mode v2</b>
                    <small>Privacy-by-design consent orchestration</small>
                  </div>
                </div>
              </div>
              <Link to="/ecosystem" className="button small">
                <span>View Full Technology Ecosystem</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Development Standards */}
      <section className="section section-standards-preview">
        <div className="section-container">
          <div className="section-header">
            <div>
              <div className="tag">
                <i></i>
                <span>Engineering Governance</span>
              </div>
              <h2>Quality, accessibility, and release standards.</h2>
            </div>
            <p>
              Every software interface is measured against structured quality, accessibility (WCAG 2.2 AA), and Android target SDK release benchmarks.
            </p>
          </div>

          <div className="standards-grid-preview">
            {featuredStandards.map((std) => (
              <div key={std.id} className="standard-preview-card">
                <div className="std-top">
                  <span className="std-num">{std.num}</span>
                  <span className="std-ref">{std.reference}</span>
                </div>
                <h3>{std.title}</h3>
                <p>{std.summary}</p>
              </div>
            ))}
          </div>

          <div className="section-footer-cta">
            <Link to="/standards" className="inline-action-link">
              <span>Review all 12 Creation Standards</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial & Industry News Grid */}
      <section className="section section-insights">
        <div className="section-container">
          <div className="insights-split">
            {/* Latest Engineering Blog */}
            <div className="insights-col">
              <div className="insights-header">
                <div className="tag">
                  <i></i>
                  <span>Engineering Insights</span>
                </div>
                <h3>Latest from the Studio</h3>
              </div>
              <div className="blog-mini-list">
                {blogPosts.slice(0, 2).map((post) => (
                  <article key={post.slug} className="insight-card">
                    <div className="insight-meta">
                      <span className="insight-category">{post.category}</span>
                      <span className="insight-date">{post.publishedDate}</span>
                    </div>
                    <h4>
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h4>
                    <p>{post.summary}</p>
                    <Link to={`/blog/${post.slug}`} className="read-link">
                      <span>{t.common.readMore}</span>
                      <ArrowRight size={12} />
                    </Link>
                  </article>
                ))}
              </div>
              <Link to="/blog" className="insights-more-link">
                <span>View all articles</span> <ArrowRight size={14} />
              </Link>
            </div>

            {/* Latest Industry News */}
            <div className="insights-col">
              <div className="insights-header">
                <div className="tag">
                  <i></i>
                  <span>Industry Tracking</span>
                </div>
                <h3>Technology &amp; Policy News</h3>
              </div>
              <div className="news-mini-list">
                {newsItems.slice(0, 2).map((item) => (
                  <article key={item.id} className="insight-card news-card">
                    <div className="insight-meta">
                      <span className="insight-source-badge">{item.source}</span>
                      <span className="insight-date">{item.publishedDate}</span>
                    </div>
                    <h4>
                      <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">
                        {item.title} <ArrowUpRight size={12} />
                      </a>
                    </h4>
                    <p className="news-commentary-preview">{item.anmCommentary}</p>
                  </article>
                ))}
              </div>
              <Link to="/industry-news" className="insights-more-link">
                <span>View all industry news</span> <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Lineage & Trust Strip */}
      <section className="corporate-structure-strip">
        <div className="corporate-structure-container">
          <div className="structure-col-intro">
            <div className="tag">
              <i></i>
              <span>Corporate Structure</span>
            </div>
            <h2>Established foundations with clear commercial division.</h2>
            <p>
              ANM Digital Labs is the software and digital product division operated by Yoga Products Ltd. It maintains focused technological separation from A&amp;M Consultancy.
            </p>
            <Link to="/about" className="button small">
              <span>Read About Our Company</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="structure-diagram-card">
            <div className="structure-node parent-node">
              <small>OPERATING COMPANY</small>
              <b>Yoga Products Ltd</b>
              <span>London, United Kingdom</span>
            </div>
            <div className="structure-connector"></div>
            <div className="structure-subsidiaries">
              <div className="structure-node sub-node active">
                <small>DIGITAL PRODUCTS &amp; LABS</small>
                <b>ANM Digital Labs</b>
                <p>Software, SaaS, Mobile Apps &amp; Applied AI Systems</p>
              </div>
              <div className="structure-node sub-node">
                <small>BUSINESS SERVICES</small>
                <b>A&amp;M Consultancy</b>
                <p>Strategic Sourcing, Trade &amp; Advisory Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion Call to Action */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="tag">
            <i></i>
            <span>Start a Project</span>
          </div>
          <h2>Ready to engineer your next digital product?</h2>
          <p>
            Bring us the opportunity. We will define the architecture, craft the interface, and deploy it to reliable production.
          </p>
          <div className="cta-actions">
            <Link className="button white" to="/contact">
              <span>Discuss a Partnership</span>
              <ArrowUpRight size={15} />
            </Link>
            <Link className="ghost-button light" to="/products">
              <span>Explore Portfolio</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
