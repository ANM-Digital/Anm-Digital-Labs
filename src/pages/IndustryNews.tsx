import React, { useState, useMemo } from "react";
import { Link } from "../router";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowUpRight, SearchIcon, ShieldCheckIcon } from "../components/Icons";
import { useLanguage } from "../context/LanguageContext";
import { newsItems } from "../data/news";

export function IndustryNewsPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = useMemo(() => {
    return newsItems.filter((item) => {
      const match =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return match;
    });
  }, [searchQuery]);

  return (
    <div className="page-industry-news">
      <SEOHead
        title="Industry News & Technology Policy — ANM Digital Labs"
        description="Attributed technology updates, OS policy shifts, Google Play target API requirements, and digital accessibility compliance tracking."
      />

      <div className="page-header-wrap">
        <div className="section-container">
          <Breadcrumbs items={[{ label: t.nav.industryNews }]} />
          <div className="page-hero">
            <div className="tag">
              <i></i>
              <span>Technology &amp; Policy Intelligence</span>
            </div>
            <h1>Industry news &amp; platform tracking.</h1>
            <p className="page-lead">
              Curated, verified technology news, platform policy updates, and mobile compliance announcements with technical commentary from ANM Digital Labs.
            </p>
          </div>
        </div>
      </div>

      <section className="section section-news-body">
        <div className="section-container">
          {/* Controls Bar */}
          <div className="catalog-controls">
            <div className="news-feed-label">
              <span className="live-dot"></span>
              <b>Attributed Platform News Feed</b>
            </div>

            <div className="catalog-search-wrap">
              <SearchIcon size={15} />
              <input
                type="text"
                placeholder="Search industry news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search industry news"
              />
              {searchQuery && (
                <button className="search-clear-btn" onClick={() => setSearchQuery("")} aria-label="Clear search">
                  ×
                </button>
              )}
            </div>
          </div>

          {/* News List */}
          <div className="news-list-grid">
            {filteredNews.map((item) => (
              <article key={item.id} className="news-item-card">
                <div className="news-item-header">
                  <div className="news-source-meta">
                    <span className="source-name-badge">{item.source}</span>
                    <span className="news-date">{item.publishedDate}</span>
                    <span className="news-cat-chip">{item.category}</span>
                  </div>
                  <h3>
                    <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">
                      {item.title}
                      <ArrowUpRight size={16} />
                    </a>
                  </h3>
                </div>

                <div className="news-item-body">
                  <div className="third-party-summary">
                    <small>REPORT SUMMARY</small>
                    <p>{item.summary}</p>
                  </div>

                  <div className="anm-commentary-box">
                    <div className="commentary-header">
                      <span className="mark-micro">ANM</span>
                      <b>ANM Digital Technical Commentary</b>
                    </div>
                    <p>{item.anmCommentary.replace("ANM Digital Commentary: ", "")}</p>
                  </div>

                  <div className="news-item-footer">
                    <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="source-ext-link">
                      <span>View Original Source ({item.source})</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Attribution & Editorial Standards Note */}
          <div className="news-editorial-notice">
            <ShieldCheckIcon size={20} />
            <div>
              <h4>Attribution &amp; Editorial Integrity Standard</h4>
              <p>
                All items in this section reference official public announcements, platform developer bulletins, and recognized standards bodies. Summaries are provided for convenience, with direct outbound links to the authoritative source material. ANM Digital commentary reflects our engineering interpretation and internal compliance standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
