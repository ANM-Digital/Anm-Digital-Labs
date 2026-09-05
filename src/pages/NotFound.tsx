import React, { useState } from "react";
import { Link, useNavigate } from "../router";
import { SEOHead } from "../components/SEOHead";
import { ArrowRight, SearchIcon } from "../components/Icons";
import { useLanguage } from "../context/LanguageContext";

export function NotFoundPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="page-not-found">
      <SEOHead title="404 — Page Not Found" />

      <section className="section section-notfound-body">
        <div className="section-container">
          <div className="notfound-card">
            <div className="tag">
              <i></i>
              <span>Error 404</span>
            </div>
            <h1>Page not found</h1>
            <p className="notfound-lead">
              The page or resource you requested does not exist or has been relocated within the ANM Digital Labs multi-page website.
            </p>

            <form onSubmit={handleSearch} className="notfound-search-form">
              <div className="notfound-search-wrap">
                <SearchIcon size={16} />
                <input
                  type="text"
                  placeholder="Search products, services, or standards..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="button small">
                  <span>Search</span>
                </button>
              </div>
            </form>

            <div className="notfound-quick-links">
              <b>Recommended Direct Pages:</b>
              <div className="quick-links-grid">
                <Link to="/">Home Overview</Link>
                <Link to="/products">Product Portfolio</Link>
                <Link to="/services">Engineering Services</Link>
                <Link to="/ecosystem">Technology Ecosystem</Link>
                <Link to="/standards">Creation Standards</Link>
                <Link to="/about">About Our Company</Link>
                <Link to="/contact">Direct Contact</Link>
              </div>
            </div>

            <div className="notfound-home-action">
              <Link to="/" className="button">
                <span>{t.common.backToHome}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
