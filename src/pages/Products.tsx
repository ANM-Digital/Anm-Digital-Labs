import React, { useState, useMemo } from "react";
import { Link } from "../router";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowRight, ArrowUpRight, SearchIcon } from "../components/Icons";
import { useLanguage } from "../context/LanguageContext";
import { products } from "../data/products";
import { ProductCategory } from "../types";

export function ProductsPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCat = selectedCategory === "all" || p.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="page-products">
      <SEOHead
        title="Products & Applications — ANM Digital Labs"
        description="Discover ANM Digital Labs' portfolio of mobile applications, SaaS platforms, AI productivity tools, and digital publishing systems."
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs items={[{ label: t.nav.products }]} />
          <div className="page-hero">
            <div className="tag">
              <i></i>
              <span>Product Portfolio</span>
            </div>
            <h1>Purpose-built digital products &amp; applications.</h1>
            <p className="page-lead">
              A structured directory of published platforms and active mobile software applications engineered by ANM Digital Labs.
            </p>
          </div>
        </div>
      </div>

      <section className="section section-catalog">
        <div className="section-container">
          {/* Controls Bar: Category Filters + Search */}
          <div className="catalog-controls">
            <div className="category-tabs" role="tablist" aria-label="Product categories">
              {[
                { id: "all", label: "All Products" },
                { id: "mobile", label: "Mobile Applications" },
                { id: "saas", label: "SaaS & Productivity" },
                { id: "publishing", label: "Publishing" },
                { id: "platform", label: "Platforms" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={selectedCategory === tab.id}
                  className={`category-tab-btn ${selectedCategory === tab.id ? "active" : ""}`}
                  onClick={() => setSelectedCategory(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="catalog-search-wrap">
              <SearchIcon size={15} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
              {searchQuery && (
                <button className="search-clear-btn" onClick={() => setSearchQuery("")} aria-label="Clear search">
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="catalog-empty-state">
              <p>No products found matching your search criteria.</p>
              <button
                className="ghost-button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="products-grid all-products-grid">
              {filteredProducts.map((p) => (
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
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-ext-btn"
                          aria-label={`Open ${p.name} official website`}
                        >
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
